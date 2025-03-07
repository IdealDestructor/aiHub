<template>
    <div class="search-container">
        <input type="text" id="search-input" placeholder="搜索 AI 工具..." :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" @keyup.enter="$emit('search')" />
        <button id="search-btn" @click="$emit('search')">
            <i class="fa-solid fa-magnifying-glass"></i>
        </button>
    </div>
</template>

<script setup>
    defineProps({
        modelValue: {
            type: String,
            default: '',
        },
    })

    defineEmits(['update:modelValue', 'search'])
</script>

<style scoped>
    .search-container {
        display: flex;
        justify-content: center;
        margin-bottom: 2.5rem;
    }

    #search-input {
        width: 60%;
        padding: 0.9rem 1.3rem;
        border: 1px solid var(--border-color);
        background-color: rgba(30, 32, 56, 0.5);
        border-radius: 8px 0 0 8px;
        font-size: 1rem;
        outline: none;
        transition: var(--transition);
        color: var(--text-primary);
        backdrop-filter: blur(5px);
    }

    #search-input:focus {
        border-color: var(--primary-color);
        box-shadow: 0 0 0 2px rgba(109, 90, 255, 0.2);
    }

    #search-btn {
        background-color: var(--primary-color);
        color: white;
        border: none;
        padding: 0 1.5rem;
        border-radius: 0 8px 8px 0;
        cursor: pointer;
        transition: var(--transition);
    }

    #search-btn:hover {
        background-color: #5646e0;
        box-shadow: var(--glow);
    }
</style>
