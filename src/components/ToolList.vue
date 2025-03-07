<template>
    <div class="tools-container">
        <TransitionGroup name="tool-list">
            <ToolCard v-for="tool in tools" :key="tool.id" :tool="tool" :isFavorite="favorites.includes(tool.id)" @toggle-favorite="$emit('toggle-favorite', $event)" />
        </TransitionGroup>
        <p v-if="tools.length === 0" class="no-results">没有找到符合条件的 AI 工具</p>
    </div>
</template>

<script setup>
    import { TransitionGroup } from 'vue'
    import ToolCard from './ToolCard.vue'

    defineProps({
        tools: {
            type: Array,
            required: true,
        },
        favorites: {
            type: Array,
            default: () => [],
        },
    })

    defineEmits(['toggle-favorite'])
</script>

<style scoped>
    .tools-container {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 1.5rem;
    }

    /* 设置1080p分辨率下固定显示4个卡片 */
    @media (min-width: 1200px) and (max-width: 1600px) {
        .tools-container {
            grid-template-columns: repeat(4, 1fr);
        }
    }

    /* 大屏幕支持5个卡片 */
    @media (min-width: 1601px) {
        .tools-container {
            grid-template-columns: repeat(5, 1fr);
        }
    }

    .no-results {
        grid-column: 1 / -1;
        text-align: center;
        padding: 2rem;
        background: rgba(30, 32, 56, 0.3);
        border-radius: 8px;
        color: var(--text-secondary);
        backdrop-filter: blur(5px);
    }

    /* 工具列表动画 */
    .tool-list-enter-active,
    .tool-list-leave-active {
        transition: all 0.4s ease;
    }

    .tool-list-enter-from,
    .tool-list-leave-to {
        opacity: 0;
        transform: translateY(30px);
    }

    .tool-list-move {
        transition: transform 0.4s ease;
    }
</style>
