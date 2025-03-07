import { ref, watch } from 'vue'
import { useToast } from './useToast'

export function useFavorites() {
    const favorites = ref([])
    const { showToast } = useToast()

    // 从本地存储加载收藏
    function loadFavorites() {
        try {
            const stored = localStorage.getItem('aiToolFavorites')
            if (stored) {
                favorites.value = JSON.parse(stored)
            }
        } catch (error) {
            console.error('读取收藏数据失败:', error)
        }
    }

    // 保存收藏到本地存储
    function saveFavorites() {
        try {
            localStorage.setItem('aiToolFavorites', JSON.stringify(favorites.value))
        } catch (error) {
            console.error('保存收藏数据失败:', error)
            showToast('收藏保存失败，可能是浏览器存储空间已满', 'error')
        }
    }

    // 切换收藏状态
    function toggleFavorite(toolId) {
        const index = favorites.value.indexOf(toolId)

        if (index === -1) {
            // 添加到收藏
            favorites.value.push(toolId)
            showToast('已添加到收藏')
        } else {
            // 从收藏中移除
            favorites.value.splice(index, 1)
            showToast('已从收藏中移除')
        }
    }

    // 直接移除收藏
    function removeFavorite(toolId) {
        const index = favorites.value.indexOf(toolId)
        if (index !== -1) {
            favorites.value.splice(index, 1)
            showToast('已从收藏中移除')
        }
    }

    // 监听收藏变化并保存
    watch(
        favorites,
        () => {
            saveFavorites()
        },
        { deep: true }
    )

    // 初始加载
    loadFavorites()

    return {
        favorites,
        toggleFavorite,
        removeFavorite,
        isFavorite: (toolId) => favorites.value.includes(toolId),
    }
}
