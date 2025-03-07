import { defineStore } from 'pinia'
import { ref, computed, onMounted } from 'vue'
import { tools, allCategories } from '../data/toolsData'

export const useToolsStore = defineStore('tools', () => {
    const searchTerm = ref('')
    const selectedCategory = ref('all')
    const customTools = ref([])

    // 合并系统工具和自定义工具
    const allTools = computed(() => {
        return [...tools, ...customTools.value]
    })
    
    // 过滤后的工具列表
    const filteredTools = computed(() => {
        return allTools.value.filter((tool) => {
            const matchesCategory = selectedCategory.value === 'all' || tool.categories.includes(selectedCategory.value)
            const matchesSearch = searchTerm.value === '' || tool.name.toLowerCase().includes(searchTerm.value.toLowerCase()) || tool.description.toLowerCase().includes(searchTerm.value.toLowerCase())
            return matchesCategory && matchesSearch
        })
    })

    // 所有分类
    const categories = computed(() => {
        return [{ id: 'all', name: '全部' }, ...allCategories.map((cat) => ({ id: cat, name: cat }))]
    })

    // 方法
    function setSearchTerm(term) {
        searchTerm.value = term
    }

    function setCategory(category) {
        selectedCategory.value = category
    }

    function clearSearch() {
        searchTerm.value = ''
    }
    
    // 加载自定义工具
    function loadCustomTools() {
        try {
            const stored = localStorage.getItem('customTools')
            if (stored) {
                customTools.value = JSON.parse(stored)
                console.log('已加载自定义工具:', customTools.value.length)
            }
        } catch (error) {
            console.error('加载自定义工具失败:', error)
        }
    }
    
    // 添加自定义工具
    function addCustomTool(tool) {
        customTools.value.push(tool)
    }

    // 初始化时加载自定义工具
    loadCustomTools()
    
    return {
        searchTerm,
        selectedCategory,
        filteredTools,
        allTools,
        customTools,
        categories,
        setSearchTerm,
        setCategory,
        clearSearch,
        loadCustomTools,
        addCustomTool,
    }
})
