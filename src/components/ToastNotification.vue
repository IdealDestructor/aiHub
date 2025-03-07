<template>
    <Transition name="toast">
        <div v-if="visible" class="toast-notification" :class="type">
            {{ message }}
        </div>
    </Transition>
</template>

<script setup>
    defineProps({
        message: {
            type: String,
            default: '',
        },
        type: {
            type: String,
            default: 'success',
            validator: (value) => ['success', 'error', 'info'].includes(value),
        },
        visible: {
            type: Boolean,
            default: false,
        },
    })
</script>

<style scoped>
    .toast-notification {
        position: fixed;
        bottom: 20px;
        right: 20px;
        padding: 0.8rem 1.5rem;
        background: rgba(30, 32, 56, 0.9);
        color: white;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        z-index: 1000;
        backdrop-filter: blur(8px);
        border-left: 4px solid var(--primary-color);
    }

    .toast-notification.success {
        border-left-color: #10b981;
    }

    .toast-notification.error {
        border-left-color: #ef4444;
    }

    .toast-notification.info {
        border-left-color: #3b82f6;
    }

    .toast-enter-active,
    .toast-leave-active {
        transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }

    .toast-enter-from,
    .toast-leave-to {
        transform: translateY(100px);
        opacity: 0;
    }
</style>
