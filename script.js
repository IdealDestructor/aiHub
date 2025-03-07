document.addEventListener('DOMContentLoaded', function () {
    // 搜索功能
    const searchInput = document.getElementById('search-input')
    const searchBtn = document.getElementById('search-btn')
    const toolCards = document.querySelectorAll('.tool-card')

    // 从本地存储加载收藏
    loadFavorites()

    // 增强的搜索功能
    function searchTools() {
        const searchTerm = searchInput.value.toLowerCase().trim()
        let hasResults = false

        // 获取当前选中的分类
        const activeCategory = document.querySelector('.category-btn.active').dataset.category

        toolCards.forEach((card) => {
            const toolName = card.querySelector('h2').textContent.toLowerCase()
            const toolDesc = card.querySelector('p').textContent.toLowerCase()
            const cardCategories = card.dataset.category.split(',')

            // 检查是否满足分类和搜索条件
            const matchesCategory = activeCategory === 'all' || cardCategories.includes(activeCategory)
            const matchesSearch = toolName.includes(searchTerm) || toolDesc.includes(searchTerm) || searchTerm === ''

            if (matchesCategory && matchesSearch) {
                card.style.display = 'flex'
                // 添加找到结果的动画效果
                if (searchTerm !== '') {
                    card.classList.add('search-result')
                    setTimeout(() => {
                        card.classList.remove('search-result')
                    }, 1000)
                }
                hasResults = true
            } else {
                card.style.display = 'none'
            }
        })

        // 添加搜索反馈
        if (!hasResults && searchTerm !== '') {
            // 可以添加一个"未找到结果"的提示
            const existingNotice = document.querySelector('.no-results-notice')
            if (!existingNotice) {
                const notice = document.createElement('div')
                notice.className = 'no-results-notice'
                notice.textContent = `未找到包含"${searchTerm}"的 AI 工具`
                document.querySelector('.tools-container').before(notice)

                // 3秒后自动移除提示
                setTimeout(() => {
                    if (document.body.contains(notice)) {
                        notice.remove()
                    }
                }, 3000)
            }
        } else {
            // 移除可能存在的"未找到结果"提示
            const existingNotice = document.querySelector('.no-results-notice')
            if (existingNotice) {
                existingNotice.remove()
            }
        }
    }

    // 增加输入时的实时搜索效果
    searchInput.addEventListener('input', searchTools)

    searchBtn.addEventListener('click', searchTools)
    searchInput.addEventListener('keyup', function (e) {
        if (e.key === 'Enter') {
            searchTools()
        }
    })

    // 收藏功能
    const favoriteButtons = document.querySelectorAll('.favorite-btn')
    const favoritesContainer = document.getElementById('favorites-container')

    // 修复收藏按钮点击事件
    favoriteButtons.forEach((btn) => {
        btn.addEventListener('click', function (e) {
            // 阻止事件冒泡，防止触发卡片点击事件
            e.stopPropagation()

            const card = this.closest('.tool-card')
            const toolId = card.dataset.tool
            const isFavorite = this.classList.contains('favorited')

            if (isFavorite) {
                // 取消收藏
                this.classList.remove('favorited')
                this.innerHTML = '<i class="fa-regular fa-heart"></i>'
                removeFavorite(toolId)
            } else {
                // 添加收藏
                this.classList.add('favorited')
                this.innerHTML = '<i class="fa-solid fa-heart" style="color: #F43F5E;"></i>'
                addFavorite(toolId)
            }

            updateFavoritesDisplay()
        })
    })

    // 收藏功能增强
    function addFavorite(toolId) {
        let favorites = getFavorites()
        if (!favorites.includes(toolId)) {
            favorites.push(toolId)
            saveFavorites(favorites)
            showToast('已添加到收藏')
        }
    }

    function removeFavorite(toolId) {
        let favorites = getFavorites()
        const index = favorites.indexOf(toolId)
        if (index > -1) {
            favorites.splice(index, 1)
            saveFavorites(favorites)
            showToast('已从收藏中移除')
        }
    }

    function getFavorites() {
        try {
            const favoritesJson = localStorage.getItem('aiToolFavorites')
            return favoritesJson ? JSON.parse(favoritesJson) : []
        } catch (error) {
            console.error('读取收藏数据失败:', error)
            return []
        }
    }

    function saveFavorites(favorites) {
        try {
            localStorage.setItem('aiToolFavorites', JSON.stringify(favorites))
        } catch (error) {
            console.error('保存收藏数据失败:', error)
            showToast('收藏保存失败，可能是浏览器存储空间已满', 'error')
        }
    }

    // 添加收藏操作提示
    function showToast(message, type = 'success') {
        // 移除可能存在的旧提示
        const existingToast = document.querySelector('.toast-notification')
        if (existingToast) {
            existingToast.remove()
        }

        // 创建新提示
        const toast = document.createElement('div')
        toast.className = `toast-notification ${type}`
        toast.textContent = message

        document.body.appendChild(toast)

        // 显示动画
        setTimeout(() => toast.classList.add('show'), 10)

        // 自动消失
        setTimeout(() => {
            toast.classList.remove('show')
            setTimeout(() => toast.remove(), 300)
        }, 2000)
    }

    function loadFavorites() {
        const favorites = getFavorites()

        favoriteButtons.forEach((btn) => {
            const card = btn.closest('.tool-card')
            const toolId = card.dataset.tool

            if (favorites.includes(toolId)) {
                btn.classList.add('favorited')
                btn.innerHTML = '<i class="fa-solid fa-heart" style="color: #F43F5E;"></i>'
            }
        })

        updateFavoritesDisplay()
    }

    function updateFavoritesDisplay() {
        const favorites = getFavorites()

        if (favorites.length === 0) {
            favoritesContainer.innerHTML = '<p class="empty-favorites">您还没有收藏任何 AI 工具</p>'
            return
        }

        favoritesContainer.innerHTML = ''

        // 添加收藏分类导航
        const categorySet = new Set(['all'])

        // 收集所有已收藏工具的类别
        favorites.forEach((toolId) => {
            const originalCard = document.querySelector(`.tool-card[data-tool="${toolId}"]`)
            if (originalCard) {
                const categories = originalCard.dataset.category.split(',')
                categories.forEach((cat) => categorySet.add(cat))
            }
        })

        // 创建收藏分类导航
        if (favorites.length > 3) {
            const favNav = document.createElement('div')
            favNav.className = 'categories-nav favorites-nav'

            Array.from(categorySet).forEach((cat) => {
                const btn = document.createElement('button')
                btn.className = 'category-btn' + (cat === 'all' ? ' active' : '')
                btn.dataset.category = cat
                btn.textContent = cat === 'all' ? '全部收藏' : cat

                btn.addEventListener('click', function () {
                    // 更新按钮状态
                    favNav.querySelectorAll('.category-btn').forEach((b) => b.classList.remove('active'))
                    this.classList.add('active')

                    const selectedCategory = this.dataset.category

                    // 筛选收藏卡片
                    const favCards = favoritesContainer.querySelectorAll('.tool-card')
                    favCards.forEach((card) => {
                        if (selectedCategory === 'all') {
                            card.style.display = 'flex'
                        } else {
                            const cardCats = card.dataset.category.split(',')
                            card.style.display = cardCats.includes(selectedCategory) ? 'flex' : 'none'
                        }
                    })
                })

                favNav.appendChild(btn)
            })

            favoritesContainer.appendChild(favNav)
        }

        // 添加收藏卡片
        favorites.forEach((toolId) => {
            const originalCard = document.querySelector(`.tool-card[data-tool="${toolId}"]`)
            if (originalCard) {
                const cloneCard = originalCard.cloneNode(true)
                favoritesContainer.appendChild(cloneCard)

                // 为克隆卡片中的收藏按钮添加事件监听
                const favoriteBtn = cloneCard.querySelector('.favorite-btn')
                favoriteBtn.addEventListener('click', function (e) {
                    // 阻止事件冒泡
                    e.stopPropagation()

                    removeFavorite(toolId)

                    // 更新原始卡片中的收藏按钮
                    const originalBtn = originalCard.querySelector('.favorite-btn')
                    originalBtn.classList.remove('favorited')
                    originalBtn.innerHTML = '<i class="fa-regular fa-heart"></i>'

                    updateFavoritesDisplay()
                })

                // 添加卡片点击事件
                cloneCard.addEventListener('click', function (e) {
                    if (!e.target.closest('.btn')) {
                        const link = this.querySelector('.primary').getAttribute('href')
                        window.open(link, '_blank')
                    }
                })
            }
        })
    }

    // 添加卡片点击事件（除按钮外的区域）
    toolCards.forEach((card) => {
        card.addEventListener('click', function (e) {
            // 如果点击的不是按钮或其内部元素
            if (!e.target.closest('.btn')) {
                const link = this.querySelector('.primary').getAttribute('href')
                window.open(link, '_blank')
            }
        })
    })

    // 添加调试代码，查看本地存储内容
    console.log('当前收藏的工具:', getFavorites())

    // 分类筛选功能
    const categoryButtons = document.querySelectorAll('.category-btn')

    categoryButtons.forEach((btn) => {
        btn.addEventListener('click', function () {
            // 更新按钮状态
            categoryButtons.forEach((b) => b.classList.remove('active'))
            this.classList.add('active')

            const category = this.dataset.category

            // 筛选卡片
            toolCards.forEach((card) => {
                const categories = card.dataset.category.split(',')

                if (category === 'all' || categories.includes(category)) {
                    card.style.display = 'flex'
                    // 添加简单的动画效果
                    card.classList.add('category-filtered')
                    setTimeout(() => {
                        card.classList.remove('category-filtered')
                    }, 600)
                } else {
                    card.style.display = 'none'
                }
            })

            // 移除可能存在的搜索结果提示
            const existingNotice = document.querySelector('.no-results-notice')
            if (existingNotice) {
                existingNotice.remove()
            }

            // 清空搜索框
            document.getElementById('search-input').value = ''
        })
    })
})
