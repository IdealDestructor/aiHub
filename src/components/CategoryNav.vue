<template>
    <div class="categories-nav">
        <button
            v-for="category in categories"
            :key="category.id"
            class="category-btn"
            :class="{ active: selectedCategory === category.id }"
            :data-category="category.id"
            :title="category.name"
            @click="$emit('select-category', category.id)"
        >
            <i :class="getCategoryIcon(category.name)"></i>
            <span class="category-name">{{ category.name }}</span>
        </button>
    </div>
</template>

<script setup>
    import { categoryIcons } from '../utils/categoryIcons'

    defineProps({
        categories: {
            type: Array,
            required: true,
        },
        selectedCategory: {
            type: String,
            default: 'all',
        },
    })

    defineEmits(['select-category'])

    function getCategoryIcon(categoryName) {
        return categoryIcons[categoryName] || 'fa-solid fa-tag'
    }
</script>

<style scoped>
    .categories-nav {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 0.8rem;
        margin-bottom: 2.5rem;
        position: relative;
        padding: 0.5rem;
        background: rgba(20, 22, 35, 0.3);
        border-radius: 12px;
        backdrop-filter: var(--glass-effect);
        -webkit-backdrop-filter: var(--glass-effect);
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        border: 1px solid var(--glass-border);
    }

    .categories-nav::after {
        content: '';
        position: absolute;
        bottom: -10px;
        left: 0;
        right: 0;
        height: 1px;
        background: linear-gradient(90deg, transparent, var(--primary-color), transparent);
        opacity: 0.6;
    }

    .category-btn {
        width: 46px;
        height: 46px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        border: 1px solid transparent;
        background: rgba(30, 32, 56, 0.4);
        color: var(--text-secondary);
        cursor: pointer;
        transition: var(--transition);
        font-size: 1rem;
        backdrop-filter: var(--glass-effect);
        -webkit-backdrop-filter: var(--glass-effect);
    }

    .category-name {
        position: absolute;
        bottom: -30px;
        left: 50%;
        transform: translateX(-50%) scale(0.8);
        background: rgba(30, 32, 56, 0.7);
        color: white;
        padding: 0.3rem 0.8rem;
        border-radius: 6px;
        font-size: 0.8rem;
        white-space: nowrap;
        opacity: 0;
        visibility: hidden;
        transition: all 0.2s ease;
        border: 1px solid var(--glass-border);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
        pointer-events: none;
        z-index: 10;
        backdrop-filter: var(--glass-effect);
        -webkit-backdrop-filter: var(--glass-effect);
    }

    .category-btn:hover {
        background: rgba(109, 90, 255, 0.1);
        border-color: var(--primary-color);
        transform: translateY(-2px);
        color: white;
    }

    .category-btn:hover .category-name {
        opacity: 1;
        visibility: visible;
        transform: translateX(-50%) scale(1);
        bottom: -35px;
    }

    .category-btn.active {
        background: var(--primary-color);
        color: white;
        box-shadow: var(--glow);
    }

    @media (max-width: 768px) {
        .categories-nav {
            overflow-x: auto;
            justify-content: flex-start;
            padding: 0.4rem;
            gap: 0.6rem;
        }

        .category-btn {
            width: 40px;
            height: 40px;
            font-size: 0.9rem;
        }

        .category-name {
            display: none;
        }
    }
</style>
