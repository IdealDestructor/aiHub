<template>
  <div class="privacy-policy">
    <AppHeader />
    <div class="policy-container">
      <h1>隐私政策</h1>

      <section>
        <h2>免责声明</h2>
        <p>
          AIHub（以下简称"本网站"）是一个AI工具导航平台，提供对各类AI服务和工具的链接与介绍。所有链接的服务和工具均由第三方提供，本网站不对这些服务和工具的内容、可用性、安全性或合法性负责。
        </p>
        <p>
          用户在使用本网站链接的任何第三方服务时，应当了解并遵守相应服务的使用条款和隐私政策。
        </p>
      </section>

      <section>
        <h2>数据收集与使用</h2>
        <p>本网站不会收集或存储用户的个人数据，包括但不限于：</p>
        <ul>
          <li>个人身份信息</li>
          <li>账户信息</li>
          <li>支付信息</li>
          <li>用户生成内容</li>
        </ul>
        <p>本网站不使用cookies追踪用户行为，也不收集用户的浏览数据进行分析。</p>
      </section>

      <section>
        <h2>第三方服务</h2>
        <p>
          本网站仅作为一个导航平台，所有实际服务均由第三方提供。当您通过本网站访问第三方服务时：
        </p>
        <ul>
          <li>
            您与该第三方服务之间的所有交互均受该服务的隐私政策和使用条款约束
          </li>
          <li>
            本网站不会接收、处理或存储您在使用这些第三方服务过程中产生的任何数据
          </li>
          <li>本网站不对这些第三方服务的隐私实践或数据处理方式负责</li>
        </ul>
        <p>
          我们建议用户在使用任何第三方服务前，仔细阅读其隐私政策和使用条款。
        </p>
      </section>

      <section>
        <h2>网站安全</h2>
        <p>
          虽然本网站不收集用户数据，但我们仍然致力于保持网站的安全性，防止未经授权的访问或使用。
        </p>
      </section>

      <section>
        <h2>政策更新</h2>
        <p>
          本隐私政策可能会不时更新。我们会在本页面上发布任何变更，并鼓励用户定期查看本政策以了解最新信息。
        </p>
      </section>

      <section>
        <h2>联系我们</h2>
        <p>
          如果您对本隐私政策有任何疑问或建议，请通过GitHub仓库
          <a href="https://github.com/IdealDestructor/aiHub" target="_blank"
            >https://github.com/IdealDestructor/aiHub</a
          >
          联系我们。
        </p>
      </section>

      <div class="policy-footer">
        <p>最后更新日期: {{ new Date().toISOString().split("T")[0] }}</p>
        <div class="back-btn">
          <router-link to="/" class="btn primary">
            <i class="fas fa-arrow-left"></i> 返回首页
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import AppHeader from "@/components/AppHeader.vue";
</script>

<style scoped>
.privacy-policy {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
}

.policy-container {
  background-color: var(--bg-secondary);
  border-radius: 8px;
  padding: 30px;
  margin-bottom: 50px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

h1 {
  font-size: 2rem;
  margin-bottom: 2rem;
  color: var(--primary-color);
  text-align: center;
}

h2 {
  font-size: 1.5rem;
  margin: 1.5rem 0 1rem;
  color: var(--text-primary);
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 0.5rem;
}

section {
  margin-bottom: 2rem;
}

p {
  line-height: 1.6;
  color: var(--text-secondary);
  margin-bottom: 1rem;
}

ul {
  margin: 1rem 0;
  padding-left: 2rem;
  color: var(--text-secondary);
}

li {
  margin-bottom: 0.5rem;
  line-height: 1.6;
}

a {
  color: var(--primary-color);
  text-decoration: none;
  transition: color 0.2s;
}

a:hover {
  text-decoration: underline;
}

.policy-footer {
  margin-top: 3rem;
  padding-top: 1rem;
  border-top: 1px solid var(--border-color);
  text-align: center;
  font-size: 0.9rem;
  color: var(--text-tertiary);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.back-btn {
  margin-top: 2rem;
  text-align: center;
}

.btn {
  display: inline-block;
  padding: 0.8rem 1.8rem;
  border-radius: 8px;
  text-decoration: none !important;
  font-weight: 500;
  transition: var(--transition);
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
</style>
