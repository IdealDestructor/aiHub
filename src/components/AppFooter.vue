<template>
  <footer class="app-footer">
    <div class="footer-container">
      <div class="footer-content">
        <div class="footer-logo">
          <img
            src="@/assets/logo.svg"
            alt="aiHub Logo"
            class="footer-logo-img"
          />
          <span>AIHub</span>
        </div>

        <div class="footer-links">
          <a
            href="https://github.com/IdealDestructor/aiHub"
            target="_blank"
            class="footer-link"
          >
            <i class="fab fa-github"></i>
          </a>
          <a href="/about" class="footer-link">关于</a>
          <a href="#" class="footer-link">隐私政策</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.app-footer {
  margin-top: 1.5rem;
  background-color: var(--bg-secondary);
  padding: 1.5rem 0;
  border-top: 1px solid var(--border-color);
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.footer-logo {
  display: flex;
  align-items: center;
}

.footer-logo-img {
  height: 30px;
  margin-right: 0.5rem;
}

.footer-logo span {
  font-weight: 600;
  font-size: 1.1rem;
  background: linear-gradient(
    to right,
    var(--primary-color),
    var(--secondary-color)
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.footer-links {
  display: flex;
  gap: 1.5rem;
}

.footer-link {
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.2s ease;
}

.footer-link:hover {
  color: var(--primary-color);
}

.footer-copyright {
  text-align: center;
  font-size: 0.85rem;
  color: var(--text-tertiary);
  padding-top: 1rem;
  border-top: 1px solid var(--border-color-light, rgba(255, 255, 255, 0.05));
}

@media (max-width: 640px) {
  .footer-content {
    flex-direction: column;
    gap: 1rem;
  }

  .footer-links {
    justify-content: center;
  }
}
</style>
