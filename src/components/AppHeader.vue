<template>
  <header class="app-header">
    <div class="logo-container">
      <img src="@/assets/logo.svg" alt="aiHub Logo" class="app-logo" />
      <router-link to="/" class="title-link">
        <h1 class="app-title">AIHub</h1>
      </router-link>
    </div>
  </header>
</template>

<style scoped>
header {
  text-align: center;
  margin-top: 1.5rem;
  margin-bottom: 2.5rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

header::after {
  content: "";
  position: absolute;
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 3px;
  background: linear-gradient(
    90deg,
    transparent,
    var(--primary-color),
    transparent
  );
}

h1 {
  font-size: 2.8rem;
  margin-bottom: 0.8rem;
  letter-spacing: 1px;
  background: conic-gradient(
    from 65deg at 50% -10%,
    rgb(119, 173, 255) -86.58deg,
    rgb(255, 255, 255) 69.75deg,
    rgb(255, 181, 144) 99.21deg,
    rgb(207, 117, 252) 203.39deg,
    rgb(119, 173, 255) 273.42deg,
    rgb(255, 255, 255) 429.75deg
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-shadow: 0 2px 10px rgba(109, 90, 255, 0.3);
  font-weight: 700;
  margin-bottom: 0;
}

p {
  color: var(--text-secondary);
  font-size: 1.2rem;
  font-weight: 100;
  margin-top: 0.8rem;
}

.app-header {
  /* 现有样式 */
}

.logo-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.app-logo {
  height: 58px;
  margin-right: 8px;
  transform: translateY(2px);
}

.app-title {
  /* 标题样式 */
}

.title-link {
  text-decoration: none;
  cursor: pointer;
  transition: opacity 0.2s ease;
}

.title-link:hover {
  opacity: 0.85;
}
</style>
