<template>
    <div class="favorites-section">
        <h2 @click="toggleCollapsed">
            我的收藏 <i class="fa-solid fa-star" style="color: gold"></i>
            <i :class="collapsed ? 'fa-solid fa-chevron-down' : 'fa-solid fa-chevron-up'" class="toggle-icon"></i>
        </h2>
        <div class="favorites-container" v-show="!collapsed">
            <p v-if="favoriteTools.length === 0" class="empty-favorites">您还没有收藏任何 AI 工具</p>
            <template v-else>
                <!-- 完全移除分类导航 -->
                <div class="tools-container">
                    <ToolCard v-for="tool in favoriteTools" :key="tool.id" :tool="tool" :isFavorite="true" :isMinimal="true" @toggle-favorite="removeFavorite" />
                </div>
            </template>
        </div>
    </div>
</template>

<script setup>
    import { storeToRefs } from 'pinia'
    import { useFavoritesStore } from '../stores/favoritesStore'
    import ToolCard from './ToolCard.vue'
    import { ref } from 'vue'

    const favoritesStore = useFavoritesStore()
    const { favoriteTools } = storeToRefs(favoritesStore)
    const { removeFavorite } = favoritesStore

    const collapsed = ref(false)
    function toggleCollapsed() {
        collapsed.value = !collapsed.value
    }

    // 添加以下代码用于调试
    console.log('FavoritesList组件加载，收藏数量:', favoriteTools.value.length)
</script>

<style scoped>
    .favorites-section {
        position: relative;
        padding: 1.5rem;
        background: rgba(20, 22, 35, 0.3); /* 增加透明度 */
        border-radius: 16px;
        border: 1px solid var(--glass-border);
        backdrop-filter: var(--glass-effect);
        -webkit-backdrop-filter: var(--glass-effect);
        margin-bottom: 2.5rem;
        margin-top: 1.5rem;
        box-shadow: 0 4px 20px rgba(109, 90, 255, 0.2);
    }

    .favorites-section h2 {
        margin-bottom: 1.2rem;
        text-align: center;
        font-size: 1.8rem;
        color: white;
        text-shadow: 0 0 10px rgba(109, 90, 255, 0.5);
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .favorites-section h2 i {
        margin: 0 8px;
    }

    .tools-container {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
        gap: 1rem;
        padding: 0.5rem;
    }

    .empty-favorites {
        text-align: center;
        padding: 1.5rem;
        color: var(--text-secondary);
        background: rgba(30, 32, 56, 0.15); /* 增加透明度 */
        border-radius: 8px;
        border: 1px dashed var(--border-color);
        backdrop-filter: var(--glass-effect);
        -webkit-backdrop-filter: var(--glass-effect);
        font-size: 1.1rem;
    }

    /* 平板尺寸响应 */
    @media (max-width: 992px) {
        .tools-container {
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        }
    }

    /* 移动设备响应 */
    @media (max-width: 768px) {
        .tools-container {
            grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
            gap: 0.8rem;
        }

        .favorites-section {
            padding: 1rem;
        }

        .favorites-section h2 {
            font-size: 1.5rem;
        }
    }
</style>
