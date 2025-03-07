<template>
    <div>
        <AppHeader />
        <SearchBar v-model="searchTerm" @search="performSearch" />
        <FavoritesList />
        <CategoryNav :categories="categories" :selectedCategory="selectedCategory" @select-category="selectCategory" />
        <ToolList :tools="filteredTools" :favorites="favorites" @toggle-favorite="toggleFavorite" />
    </div>
</template>

<script setup>
    import { computed, onMounted } from 'vue'
    import { useRouter } from 'vue-router'
    import { storeToRefs } from 'pinia'
    import { useToolsStore } from '../stores/toolsStore'
    import { useFavoritesStore } from '../stores/favoritesStore'
    import { useToastStore } from '../stores/toastStore'
    import AppHeader from '../components/AppHeader.vue'
    import SearchBar from '../components/SearchBar.vue'
    import CategoryNav from '../components/CategoryNav.vue'
    import ToolList from '../components/ToolList.vue'
    import FavoritesList from '../components/FavoritesList.vue'

    const router = useRouter()
    const toolsStore = useToolsStore()
    const favoritesStore = useFavoritesStore()
    const toastStore = useToastStore()

    // 从stores解构
    const { searchTerm, selectedCategory, filteredTools, categories } = storeToRefs(toolsStore)
    const { favorites, toggleFavorite } = favoritesStore

    // 方法
    function selectCategory(categoryId) {
        toolsStore.setCategory(categoryId)
        toolsStore.clearSearch()
    }

    function performSearch() {
        if (filteredTools.value.length === 0 && searchTerm.value !== '') {
            toastStore.showToast(`未找到包含"${searchTerm.value}"的 AI 工具`, 'error')
        }
    }

    onMounted(() => {
        console.log('首页加载完成，当前收藏数:', favorites.length)
    })
</script>
