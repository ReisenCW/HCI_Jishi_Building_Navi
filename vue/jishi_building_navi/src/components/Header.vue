<template>
  <nav class="nav-container">
    <div class="nav-wrapper">
      <router-link to="/" class="nav-link">
        <span class="nav-icon">🏠</span>
        <span class="nav-text">Home</span>
      </router-link>
      <router-link to="/about" class="nav-link">
        <span class="nav-icon">📘</span>
        <span class="nav-text">About</span>
      </router-link>
    </div>
  </nav>
  <router-view/>
</template>

<script>
export default {

}
</script>

<style scoped>
/* 导航栏容器 */
.nav-container {
  background: #f8f9fa;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  padding: 1rem 2rem;
  margin-bottom: 2rem;
}

.nav-wrapper {
  display: flex;
  justify-content: center;
  gap: 2rem; /* 导航项间距 */
  max-width: 1200px; /* 最大宽度 */
  margin: 0 auto; /* 居中布局 */
}

.nav-link {
  position: relative;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  color: #333;
  font-weight: 500;
  font-size: 1.1rem;
  padding: 0.5rem 0;
  transition: all 0.3s ease; /* 过渡动画 */
}

/* 导航图标样式 */
.nav-icon {
  font-size: 1.2rem;
  margin-right: 0.5rem;
  vertical-align: middle;
}

/* 鼠标悬停效果 */
.nav-link:hover {
  color: #42b983; /* 主题色（绿色） */
  transform: translateY(-1px);
}

/* 激活状态样式 */
.nav-link.router-link-exact-active {
  color: #42b983;
  font-weight: 600;
}

/* 激活状态下划线动画 */
.nav-link.router-link-exact-active::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 100%;
  height: 2px;
  background-color: #42b983;
  border-radius: 1px;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .nav-wrapper {
    justify-content: flex-start;
    gap: 1.5rem;
    padding: 1rem;
  }

  .nav-text {
    display: none; /* 小屏幕隐藏文字 */
  }

  .nav-icon {
    margin-right: 0;
  }
}

/* 可自定义的主题色变量（方便后续修改） */
:root {
  --primary-color: #42b983; /* Vue 官方主题色 */
  --hover-color: #3eaf7c;
}
</style>



