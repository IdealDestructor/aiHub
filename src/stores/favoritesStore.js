import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { tools } from '../data/toolsData'

export const useFavoritesStore = defineStore('favorites', () => {
    // 储存收藏的工具ID
    const favorites = ref([])

    // 根据ID获取完整的工具信息
    const favoriteTools = computed(() => {
        return tools.filter((tool) => favorites.value.includes(tool.id))
    })

    // 添加收藏
    function addFavorite(toolId) {
        if (!favorites.value.includes(toolId)) {
            favorites.value.push(toolId)
            saveFavorites()
        }
    }

    // 移除收藏
    function removeFavorite(toolId) {
        const index = favorites.value.indexOf(toolId)
        if (index !== -1) {
            favorites.value.splice(index, 1)
            saveFavorites()
        }
    }

    // 切换收藏状态
    function toggleFavorite(toolId) {
        if (favorites.value.includes(toolId)) {
            removeFavorite(toolId)
        } else {
            addFavorite(toolId)
        }
    }

    // 持久化收藏数据
    function saveFavorites() {
        localStorage.setItem('favorites', JSON.stringify(favorites.value))
    }

    // 加载收藏数据
    function loadFavorites() {
        const savedFavorites = localStorage.getItem('favorites')
        if (savedFavorites) {
            favorites.value = JSON.parse(savedFavorites)
        }
    }

    // 初始化时加载收藏
    loadFavorites()

    return {
        favorites,
        favoriteTools,
        addFavorite,
        removeFavorite,
        toggleFavorite,
    }
})
