<template>
    <div class="tool-card" :data-tool="tool.id" :data-category="tool.categories.join(',')" @click="openToolLink" :class="{ 'compact-mode': isCompact, 'minimal-mode': isMinimal }">
        <div v-if="isMinimal" class="minimal-content">
            <div class="minimal-header">
                <div class="tool-icon" :style="{ backgroundColor: tool.iconBg }">
                    <i :class="tool.icon"></i>
                </div>
                <h2 :title="tool.name">{{ tool.name }}</h2>
                <button class="btn icon-btn favorite-btn" :class="{ favorited: isFavorite }" @click.stop="$emit('toggle-favorite', tool.id)">
                    <i :class="isFavorite ? 'fa-solid fa-heart' : 'fa-regular fa-heart'" :style="isFavorite ? 'color: #F43F5E;' : ''"></i>
                </button>
            </div>
            <div class="minimal-footer">
                <span class="tool-type">{{ tool.categories[0] }}</span>
                <button class="btn visit-btn" @click.stop="goToTool">访问 <i class="fa-solid fa-arrow-right"></i></button>
            </div>
        </div>

        <template v-else>
            <div class="tool-icon" :style="{ backgroundColor: tool.iconBg }">
                <i :class="tool.icon"></i>
            </div>
            <h2>{{ tool.name }}</h2>
            <p>{{ tool.description }}</p>
            <div class="tool-actions">
                <a :href="tool.url" target="_blank" class="btn primary" @click.stop>立即使用</a>
                <button class="btn secondary favorite-btn" :class="{ favorited: isFavorite }" @click.stop="$emit('toggle-favorite', tool.id)">
                    <i :class="isFavorite ? 'fa-solid fa-heart' : 'fa-regular fa-heart'" :style="isFavorite ? 'color: #F43F5E;' : ''"></i>
                </button>
            </div>
        </template>

        <p v-if="isMinimal && !isCompact">{{ tool.description }}</p>
        <div v-if="isMinimal" class="tool-actions">
            <a :href="tool.url" target="_blank" class="btn primary" @click.stop>立即使用</a>
        </div>
        <div class="tool-categories">
            <span v-for="category in tool.categories.slice(0, 3)" :key="category" class="tool-category" :title="category">
                <i :class="getCategoryIcon(category)"></i>
            </span>
        </div>
    </div>
</template>

<script setup>
    import { categoryIcons } from '../utils/categoryIcons'

    const props = defineProps({
        tool: {
            type: Object,
            required: true,
        },
        isFavorite: {
            type: Boolean,
            default: false,
        },
        isCompact: {
            type: Boolean,
            default: false,
        },
        isMinimal: {
            type: Boolean,
            default: false,
        },
    })

    defineEmits(['toggle-favorite'])

    function goToTool() {
        window.open(props.tool.url, '_blank')
    }

    function openToolLink(e) {
        if (props.isMinimal) {
            return
        }

        if (e && e.target && e.target.closest('.btn')) {
            return
        }

        window.open(props.tool.url, '_blank')
    }

    function getCategoryIcon(categoryName) {
        return categoryIcons[categoryName] || 'fa-solid fa-tag'
    }
</script>

<style scoped>
    /* 设置全局默认光标样式 */
    div:not([class]), p, h2, h3, span:not(.tool-type):not(.tool-category) {
        cursor: default;
    }
    
    .tool-card {
        background-color: rgba(30, 32, 56, 0.4); /* 增加透明度 */
        border-radius: 16px;
        padding: 1.8rem;
        box-shadow: var(--shadow);
        transition: var(--transition);
        display: flex;
        flex-direction: column;
        border: 1px solid var(--border-color);
        backdrop-filter: var(--glass-effect);
        -webkit-backdrop-filter: var(--glass-effect);
        position: relative;
        overflow: hidden;
        cursor: pointer;
    }

    .tool-card::before {
        content: '';
        position: absolute;
        top: -2px;
        left: -2px;
        right: -2px;
        height: 2px;
        background: linear-gradient(90deg, transparent, var(--primary-color), transparent);
        transform: translateX(-100%);
        transition: all 0.6s ease;
    }

    .tool-card:hover {
        transform: translateY(-8px);
        box-shadow: 0 15px 25px -5px rgba(30, 30, 60, 0.5);
        border-color: rgba(109, 90, 255, 0.5);
    }

    .tool-card:hover::before {
        transform: translateX(100%);
    }

    .tool-icon {
        width: 65px;
        height: 65px;
        border-radius: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: 1.7rem;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        position: relative;
    }

    .tool-card h2 {
        font-size: 1.5rem;
        margin-bottom: 0.8rem;
        color: white;
    }

    .tool-card p {
        color: var(--text-secondary);
        margin-bottom: 1.5rem;
        flex-grow: 1;
    }

    .tool-actions {
        display: flex;
        gap: 1rem;
    }

    .btn {
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
        flex: 1;
    }

    .primary {
        background-color: var(--primary-color);
        color: white;
        border: none;
        box-shadow: 0 4px 10px rgba(99, 102, 241, 0.3);
    }

    .primary:hover {
        background-color: #5646e0;
        box-shadow: var(--glow);
        transform: translateY(-2px);
    }

    .secondary {
        background-color: rgba(255, 255, 255, 0.1);
        color: var(--text-secondary);
        border: 1px solid var(--border-color);
        flex: 0 0 auto;
        width: 45px;
    }

    .secondary:hover {
        background-color: rgba(255, 255, 255, 0.2);
        color: white;
        border-color: var(--primary-color);
    }

    .tool-card::after {
        display: none;
    }

    .tool-card.compact-mode {
        padding: 0.8rem;
        height: auto;
    }

    .compact-mode .tool-title {
        font-size: 1rem;
        margin-bottom: 0.3rem;
    }

    .compact-mode .tool-description {
        font-size: 0.8rem;
        -webkit-line-clamp: 2;
        margin-bottom: 0.5rem;
    }

    .compact-mode .tool-actions {
        margin-top: 0.5rem;
    }

    .compact-mode .tool-link {
        font-size: 0.8rem;
        padding: 0.3rem 0.7rem;
    }

    .tool-categories {
        display: flex;
        gap: 0.5rem;
        margin-top: 0.5rem;
        justify-content: flex-start;
    }

    .tool-category {
        background: rgba(30, 32, 56, 0.4);
        color: #a5b4fc;
        width: 28px;
        height: 28px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.8rem;
        border: 1px solid var(--glass-border);
        transition: var(--transition);
        backdrop-filter: var(--glass-effect);
        -webkit-backdrop-filter: var(--glass-effect);
    }

    .tool-category:hover {
        background: rgba(109, 90, 255, 0.2);
        border-color: var(--primary-color);
        transform: translateY(-2px);
        color: white;
    }

    .tool-card.minimal-mode {
        padding: 0;
        height: auto;
        margin-bottom: 0;
        border-radius: 12px;
        overflow: hidden;
        border: 1px solid rgba(99, 102, 241, 0.2);
        transition: all 0.3s ease;
    }

    .tool-card.minimal-mode:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 20px -5px rgba(30, 30, 60, 0.5);
        border-color: rgba(99, 102, 241, 0.5);
    }

    .minimal-content {
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    .minimal-header {
        display: flex;
        align-items: center;
        padding: 12px 15px;
        background: rgba(30, 32, 56, 0.3); /* 增加透明度 */
        border-bottom: 1px solid var(--glass-border);
        backdrop-filter: var(--glass-effect);
        -webkit-backdrop-filter: var(--glass-effect);
    }

    .minimal-mode .tool-icon {
        width: 36px;
        height: 36px;
        font-size: 1rem;
        border-radius: 10px;
        margin-right: 12px;
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .minimal-mode h2 {
        margin: 0;
        flex-grow: 1;
        font-size: 0.95rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: white;
    }

    .minimal-mode .favorite-btn {
        width: 32px;
        height: 32px;
        padding: 0;
        border: none;
        background: transparent;
        color: #9ca3af;
    }

    .minimal-mode .favorite-btn:hover {
        color: #f43f5e;
    }

    .minimal-footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 8px 15px;
        margin-top: auto;
    }

    .minimal-mode .tool-type {
        font-size: 0.75rem;
        color: #9ca3af;
        font-weight: 500;
    }

    .minimal-mode .visit-btn {
        background: transparent;
        color: var(--primary-color);
        font-size: 0.85rem;
        padding: 4px 8px;
        border: none;
        display: flex;
        align-items: center;
        gap: 6px;
        border-radius: 6px;
        transition: all 0.2s ease;
    }

    .minimal-mode .visit-btn:hover {
        background: rgba(99, 102, 241, 0.1);
    }

    .minimal-mode p,
    .minimal-mode .tool-categories,
    .minimal-mode .tool-actions {
        display: none;
    }
</style>
