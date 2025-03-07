<template>
  <div>
    <!-- 添加新助手的卡片 -->
    <div class="tool-card add-tool-card" @click="handleShowAddModal">
      <div class="tool-icon">
        <i class="fa-solid fa-plus"></i>
      </div>
      <h2>添加新助手</h2>
      <p>创建并添加您自己的AI助手到列表中</p>
    </div>

    <!-- 管理自定义助手的卡片 -->
    <div
      v-if="customTools.length > 0"
      class="tool-card manage-tool-card"
      @click="handleShowManageModal"
    >
      <div class="tool-icon">
        <i class="fa-solid fa-gear"></i>
      </div>
      <h2>管理自定义助手</h2>
      <p>查看和编辑您已创建的AI助手</p>
    </div>

    <!-- 添加/编辑新助手的弹窗 -->
    <div v-if="showModal" class="modal-overlay" @click.self="showModal = false">
      <div class="modal-content">
        <h2>{{ isEditing ? "编辑AI助手" : "添加新AI助手" }}</h2>
        <form @submit.prevent="saveTool">
          <div class="form-group">
            <label for="toolName">名称 <span class="required">*</span></label>
            <input
              type="text"
              id="toolName"
              v-model="newTool.name"
              required
              placeholder="请输入AI助手名称"
            />
          </div>

          <div class="form-group">
            <label for="toolDescription"
              >描述 <span class="required">*</span></label
            >
            <textarea
              id="toolDescription"
              v-model="newTool.description"
              required
              placeholder="请输入AI助手的简短描述"
            ></textarea>
          </div>

          <div class="form-group">
            <label for="toolUrl">网址 <span class="required">*</span></label>
            <input
              type="url"
              id="toolUrl"
              v-model="newTool.url"
              required
              placeholder="https://example.com"
            />
          </div>

          <div class="form-group">
            <label for="toolIcon">图标 <span class="required">*</span></label>
            <div class="icon-selector">
              <select id="toolIcon" v-model="newTool.icon" required>
                <option value="fa-solid fa-robot">机器人</option>
                <option value="fa-solid fa-comment-dots">对话</option>
                <option value="fa-solid fa-brain">大脑</option>
                <option value="fa-solid fa-message">消息</option>
                <option value="fa-solid fa-image">图像</option>
                <option value="fa-solid fa-code">代码</option>
                <option value="fa-solid fa-music">音乐</option>
                <option value="fa-solid fa-video">视频</option>
                <option value="fa-solid fa-file-lines">文档</option>
                <option value="fa-solid fa-paintbrush">绘画</option>
              </select>
              <div class="icon-preview">
                <i :class="newTool.icon" :style="{ color: newTool.iconBg }"></i>
              </div>
            </div>
          </div>

          <div class="form-group">
            <label for="toolIconBg"
              >图标背景色 <span class="required">*</span></label
            >
            <input
              type="color"
              id="toolIconBg"
              v-model="newTool.iconBg"
              required
            />
          </div>

          <div class="form-group">
            <label>分类 <span class="required">*</span></label>
            <div class="categories-selector">
              <div
                v-for="category in availableCategories"
                :key="category"
                class="category-checkbox"
              >
                <input
                  type="checkbox"
                  :id="'cat-' + category"
                  :value="category"
                  v-model="newTool.categories"
                />
                <label :for="'cat-' + category">{{ category }}</label>
              </div>
            </div>
            <p class="error-message" v-if="categoriesError">
              请至少选择一个分类
            </p>
          </div>

          <div class="form-actions">
            <button
              type="button"
              class="btn danger"
              v-if="isEditing"
              @click="confirmDelete"
            >
              删除
            </button>
            <button type="button" class="btn secondary" @click="cancelEdit">
              取消
            </button>
            <button type="submit" class="btn primary">保存</button>
          </div>
        </form>
      </div>
    </div>

    <!-- 删除确认弹窗 -->
    <div
      v-if="showDeleteConfirm"
      class="modal-overlay"
      @click.self="showDeleteConfirm = false"
    >
      <div class="modal-content delete-confirm">
        <h2>确认删除</h2>
        <p>您确定要删除「{{ newTool.name }}」吗？此操作无法撤销。</p>
        <div class="form-actions">
          <button
            type="button"
            class="btn secondary"
            @click="showDeleteConfirm = false"
          >
            取消
          </button>
          <button type="button" class="btn danger" @click="deleteTool">
            确认删除
          </button>
        </div>
      </div>
    </div>

    <!-- 管理自定义助手的弹窗 -->
    <div
      v-if="showManageModal"
      class="modal-overlay"
      @click.self="showManageModal = false"
    >
      <div class="modal-content manage-modal">
        <h2>管理自定义助手</h2>
        <div class="custom-tools-list">
          <div
            v-for="tool in customTools"
            :key="tool.id"
            class="custom-tool-item"
          >
            <div class="tool-info">
              <div
                class="tool-icon-small"
                :style="{ backgroundColor: tool.iconBg }"
              >
                <i :class="tool.icon"></i>
              </div>
              <span>{{ tool.name }}</span>
            </div>
            <button class="btn edit-btn" @click="editTool(tool)">
              <i class="fa-solid fa-pen"></i> 编辑
            </button>
          </div>
        </div>
        <div class="form-actions">
          <button
            type="button"
            class="btn secondary"
            @click="showManageModal = false"
          >
            关闭
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { v4 as uuidv4 } from "uuid";
import { allCategories } from "../data/toolsData";
import { useToastStore } from "../stores/toastStore";

const toastStore = useToastStore();

// 弹窗显示状态
const showModal = ref(false);
const showManageModal = ref(false);
const showDeleteConfirm = ref(false);
const isEditing = ref(false);
const editingId = ref(null);

// 自定义工具列表
const customTools = ref([]);

// 新工具数据
const newTool = ref({
  name: "",
  description: "",
  url: "",
  icon: "fa-solid fa-robot",
  iconBg: "#4f46e5",
  categories: [],
});

// 分类错误提示
const categoriesError = ref(false);

// 可用分类列表
const availableCategories = computed(() => {
  return allCategories;
});

// 显示添加弹窗
function handleShowAddModal() {
  isEditing.value = false;
  editingId.value = null;
  resetForm();
  showModal.value = true;
}

// 显示管理弹窗
function handleShowManageModal() {
  showManageModal.value = true;
}

// 保存工具（添加或更新）
function saveTool() {
  // 验证分类至少选择一个
  if (newTool.value.categories.length === 0) {
    categoriesError.value = true;
    return;
  }

  categoriesError.value = false;

  if (isEditing.value) {
    // 更新现有工具
    updateCustomTool();
  } else {
    // 添加新工具
    addNewTool();
  }
}

// 添加新工具
function addNewTool() {
  // 创建新工具对象
  const toolToAdd = {
    id: `custom-${uuidv4()}`,
    name: newTool.value.name,
    description: newTool.value.description,
    url: newTool.value.url,
    icon: newTool.value.icon,
    iconBg: newTool.value.iconBg,
    categories: [...newTool.value.categories],
    isCustom: true, // 标记为自定义工具
  };

  // 保存到localStorage
  saveCustomTool(toolToAdd);

  // 重置表单
  resetForm();

  // 关闭弹窗
  showModal.value = false;

  // 显示成功提示
  toastStore.showToast("新AI助手添加成功！");

  // 刷新页面以显示新添加的助手
  setTimeout(() => {
    window.location.reload();
  }, 1000);
}

// 更新自定义工具
function updateCustomTool() {
  try {
    // 获取现有的自定义工具
    const tools = JSON.parse(localStorage.getItem("customTools") || "[]");

    // 查找要更新的工具索引
    const index = tools.findIndex((tool) => tool.id === editingId.value);

    if (index !== -1) {
      // 更新工具信息
      tools[index] = {
        ...tools[index],
        name: newTool.value.name,
        description: newTool.value.description,
        url: newTool.value.url,
        icon: newTool.value.icon,
        iconBg: newTool.value.iconBg,
        categories: [...newTool.value.categories],
      };

      // 保存回localStorage
      localStorage.setItem("customTools", JSON.stringify(tools));

      // 更新本地列表
      loadCustomTools();

      // 关闭弹窗
      showModal.value = false;

      // 显示成功提示
      toastStore.showToast("AI助手更新成功！");

      // 刷新页面以显示更新后的助手
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  } catch (error) {
    console.error("更新自定义工具失败:", error);
    toastStore.showToast("更新失败，请重试", "error");
  }
}

// 编辑工具
function editTool(tool) {
  isEditing.value = true;
  editingId.value = tool.id;

  // 填充表单数据
  newTool.value = {
    name: tool.name,
    description: tool.description,
    url: tool.url,
    icon: tool.icon,
    iconBg: tool.iconBg,
    categories: [...tool.categories],
  };

  // 显示弹窗
  showModal.value = true;
}

// 确认删除
function confirmDelete() {
  showDeleteConfirm.value = true;
}

// 删除工具
function deleteTool() {
  try {
    // 获取现有的自定义工具
    const tools = JSON.parse(localStorage.getItem("customTools") || "[]");

    // 过滤掉要删除的工具
    const filteredTools = tools.filter((tool) => tool.id !== editingId.value);

    // 保存回localStorage
    localStorage.setItem("customTools", JSON.stringify(filteredTools));

    // 更新本地列表
    loadCustomTools();

    // 关闭弹窗
    showDeleteConfirm.value = false;
    showModal.value = false;

    // 显示成功提示
    toastStore.showToast("AI助手已删除");

    // 刷新页面以更新显示
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  } catch (error) {
    console.error("删除自定义工具失败:", error);
    toastStore.showToast("删除失败，请重试", "error");
  }
}

// 取消编辑
function cancelEdit() {
  resetForm();
  showModal.value = false;
}

// 保存自定义工具到localStorage
function saveCustomTool(tool) {
  try {
    // 获取现有的自定义工具
    const customTools = JSON.parse(localStorage.getItem("customTools") || "[]");

    // 添加新工具
    customTools.push(tool);

    // 保存回localStorage
    localStorage.setItem("customTools", JSON.stringify(customTools));

    // 触发自定义事件通知父组件更新工具列表
    emit("tool-added", tool);
  } catch (error) {
    console.error("保存自定义工具失败:", error);
    toastStore.showToast("保存失败，请重试", "error");
  }
}

// 加载自定义工具
function loadCustomTools() {
  try {
    const stored = localStorage.getItem("customTools");
    if (stored) {
      customTools.value = JSON.parse(stored);
    }
  } catch (error) {
    console.error("加载自定义工具失败:", error);
  }
}

// 重置表单
function resetForm() {
  newTool.value = {
    name: "",
    description: "",
    url: "",
    icon: "fa-solid fa-robot",
    iconBg: "#4f46e5",
    categories: [],
  };
  categoriesError.value = false;
}

// 组件挂载时加载自定义工具
onMounted(() => {
  loadCustomTools();
});

// 定义事件
const emit = defineEmits(["tool-added"]);
</script>

<style scoped>
/* 设置全局默认光标样式 */
div:not([class]),
p,
h2,
h3,
span,
label {
  cursor: default;
}

.add-tool-card,
.manage-tool-card {
  background-color: var(--card-color);
  border-radius: 16px;
  padding: 1.8rem;
  box-shadow: var(--shadow);
  transition: var(--transition);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--border-color);
  backdrop-filter: var(--glass-effect);
  -webkit-backdrop-filter: var(--glass-effect);
  position: relative;
  overflow: hidden;
  cursor: pointer;
  height: 180px; /* 设置固定高度与其他卡片一致 */
}

.add-tool-card::before,
.manage-tool-card::before {
  content: "";
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  height: 2px;
  background: linear-gradient(
    90deg,
    transparent,
    var(--primary-color),
    transparent
  );
  transform: translateX(-100%);
  transition: all 0.6s ease;
}

.add-tool-card:hover,
.manage-tool-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 25px -5px rgba(30, 30, 60, 0.5);
  border-color: rgba(109, 90, 255, 0.5);
}

.add-tool-card:hover::before,
.manage-tool-card:hover::before {
  transform: translateX(100%);
}

.manage-tool-card {
  margin-top: 1rem;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(5px);
}

.modal-content {
  background-color: var(--card-color);
  border-radius: 16px;
  padding: 2rem;
  width: 90%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
  border: 1px solid var(--border-color);
  cursor: default;
}

.modal-content h2 {
  margin-top: 0;
  margin-bottom: 1.5rem;
  text-align: center;
  color: white;
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin: 0.1rem;
  font-weight: 300;
  font-size: medium;
}

input[type="text"],
input[type="url"],
textarea,
select {
  width: 100%;
  padding: 0.75rem;
  border-radius: 8px;
  border: 1px solid var(--border-color);
  background-color: rgba(30, 32, 56, 0.5);
  color: white;
  font-size: 1rem;
}

textarea {
  min-height: 100px;
  resize: vertical;
}

.required {
  color: #f43f5e;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 2rem;
}

.form-actions .btn {
  padding: 0.7rem 1.2rem;
  border-radius: 8px;
  cursor: pointer;
  transition: var(--transition);
  font-weight: 500;
  text-align: center;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
}

.form-actions .primary {
  background-color: var(--primary-color);
  color: white;
  border: none;
  box-shadow: 0 4px 10px rgba(99, 102, 241, 0.3);
  min-width: 100px;
}

.form-actions .primary:hover {
  background-color: #5646e0;
  box-shadow: var(--glow);
  transform: translateY(-2px);
}

.form-actions .secondary {
  background-color: rgba(255, 255, 255, 0.1);
  color: var(--text-secondary);
  border: 1px solid var(--border-color);
  min-width: 100px;
}

.form-actions .secondary:hover {
  background-color: rgba(255, 255, 255, 0.2);
  color: white;
  border-color: var(--primary-color);
}

.form-actions .danger {
  background-color: rgba(244, 63, 94, 0.2);
  color: #f43f5e;
  border: 1px solid rgba(244, 63, 94, 0.3);
  min-width: 100px;
}

.form-actions .danger:hover {
  background-color: rgba(244, 63, 94, 0.3);
  color: white;
  border-color: #f43f5e;
}

.manage-modal {
  max-width: 550px;
}

.custom-tools-list {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  max-height: 300px;
  overflow-y: auto;
  padding-right: 5px;
}

/* 自定义滚动条样式 */
.custom-tools-list::-webkit-scrollbar {
  width: 6px;
}

.custom-tools-list::-webkit-scrollbar-track {
  background: rgba(30, 32, 56, 0.2);
  border-radius: 10px;
}

.custom-tools-list::-webkit-scrollbar-thumb {
  background: rgba(99, 102, 241, 0.3);
  border-radius: 10px;
}

.custom-tools-list::-webkit-scrollbar-thumb:hover {
  background: rgba(99, 102, 241, 0.5);
}

.custom-tool-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.8rem 1rem;
  background-color: rgba(30, 32, 56, 0.4);
  border-radius: 10px;
  border: 1px solid var(--glass-border);
  transition: var(--transition);
  cursor: default;
}

.custom-tool-item:hover {
  background-color: rgba(30, 32, 56, 0.6);
  transform: translateY(-2px);
  border-color: rgba(109, 90, 255, 0.3);
}

.tool-info {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.tool-icon-small {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1rem;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
}

.edit-btn {
  background-color: rgba(99, 102, 241, 0.1);
  color: var(--primary-color);
  border: none;
  border-radius: 6px;
  padding: 0.4rem 0.8rem;
  font-size: 0.85rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  transition: var(--transition);
  cursor: pointer;
}

.edit-btn:hover {
  background-color: rgba(99, 102, 241, 0.2);
  transform: translateY(-2px);
}

.delete-confirm {
  max-width: 450px;
}

.delete-confirm p {
  margin-bottom: 1.5rem;
  color: var(--text-secondary);
  text-align: center;
}

.icon-selector {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.icon-preview {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--card-color);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  border: 1px solid var(--border-color);
}

.categories-selector {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.category-checkbox {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.error-message {
  color: #f43f5e;
  font-size: 0.875rem;
  margin-top: 0.5rem;
}

input[type="color"] {
  width: 100%;
  height: 40px;
  border-radius: 8px;
  border: 1px solid var(--border-color);
  background-color: transparent;
  cursor: pointer;
}
</style>
