import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useToastStore = defineStore('toast', () => {
    const toast = reactive({
        message: '',
        type: 'success',
        visible: false,
    })

    function showToast(message, type = 'success') {
        // 如果已经有通知，先隐藏
        if (toast.visible) {
            hideToast()
            setTimeout(() => {
                displayToast(message, type)
            }, 300)
        } else {
            displayToast(message, type)
        }
    }

    function displayToast(message, type) {
        toast.message = message
        toast.type = type
        toast.visible = true

        // 自动隐藏
        setTimeout(() => {
            hideToast()
        }, 3000)
    }

    function hideToast() {
        toast.visible = false
    }

    return {
        toast,
        showToast,
        hideToast,
    }
})
