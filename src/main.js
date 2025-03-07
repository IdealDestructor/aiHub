import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'
import './assets/styles/main.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)
app.mount('#app')

// 热更新错误处理
if (import.meta.hot) {
    import.meta.hot.on('vite:beforeUpdate', () => {
        console.log('🔄 热更新中...')
    })

    import.meta.hot.on('vite:error', (error) => {
        console.error('❌ 热更新错误:', error)
    })
}
