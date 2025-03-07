<template>
    <header>
        <h1>AIHub</h1>
        <p>一站式访问所有顶尖 AI 工具</p>
    </header>
</template>

<style scoped>
    header {
        text-align: center;
        margin-bottom: 2.5rem;
        position: relative;
    }

    header::after {
        content: '';
        position: absolute;
        bottom: -15px;
        left: 50%;
        transform: translateX(-50%);
        width: 100px;
        height: 3px;
        background: linear-gradient(90deg, transparent, var(--primary-color), transparent);
    }

    h1 {
        font-size: 2.8rem;
        margin-bottom: 0.8rem;
        letter-spacing: 1px;
        background: conic-gradient(from 65deg at 50% -10%, rgb(119, 173, 255) -86.58deg, rgb(255, 255, 255) 69.75deg, rgb(255, 181, 144) 99.21deg, rgb(207, 117, 252) 203.39deg, rgb(119, 173, 255) 273.42deg, rgb(255, 255, 255) 429.75deg);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        text-shadow: 0 2px 10px rgba(109, 90, 255, 0.3);
        font-weight: 700;
    }

    p {
        color: var(--text-secondary);
        font-size: 1.2rem;
    }
</style>
