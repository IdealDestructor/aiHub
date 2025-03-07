import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { tools, allCategories } from '../data/toolsData'

export const useToolsStore = defineStore('tools', () => {
    const searchTerm = ref('')
    const selectedCategory = ref('all')

    // 过滤后的工具列表
    const filteredTools = computed(() => {
        return tools.filter((tool) => {
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

    return {
        searchTerm,
        selectedCategory,
        filteredTools,
        categories,
        setSearchTerm,
        setCategory,
        clearSearch,
    }
})
