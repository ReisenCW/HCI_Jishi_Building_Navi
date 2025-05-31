<template>
  <Header/>
  <div class="about-page">
    <h1>关于济事楼4楼导航系统</h1>
    <h2>核心功能说明</h2>
    <ul class="feature-list">
      <li>
        <strong>楼层概览</strong>：首页提供济事楼4楼平面图，标注所有房间实际位置，可以将鼠标悬停在房间上查看详细信息
      </li>
      <li>
        <strong>多维度搜索</strong>：支持搜索房间号（如“430”）、教师姓名（如“张林”）、房间名（如“研究生工作室”）
      </li>
    </ul>

    <p class="foot">
      本系统图片素材均为实地拍摄，如有问题请联系开发者。
    </p>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import Header from '../components/Header.vue';
export default defineComponent({
  name: "AboutView",
  components: {
    Header
  }
});
</script>

<style scoped>
/* 蓝色主题样式，参考文档中“蓝色风格”设计理念 */
.about-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Segoe UI', sans-serif;
  color: #333;
}

h1, h2 {
  color: #005f9f; /* 同济蓝主色 */
  border-bottom: 2px solid #e0e8f2;
  padding-bottom: 0.5rem;
}

.system-intro, .design-concept {
  line-height: 1.6;
  margin: 1rem 0;
  color: #666;
}

.feature-list {
  text-align: left;
  list-style: none;
  padding: 0;
  font-size: 24px;
}

.feature-list li {
  margin: 1rem 0;
  padding-left: 20px;
  position: relative;
}

.feature-list li:before {
  content: "🔍"; /* 搜索图标增强视觉引导 */
  position: absolute;
  left: -24px;
  color: #005f9f;
  font-weight: bold;
}

.foot {
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px dashed #e0e8f2;
  color: #999;
  font-size: 0.9rem;
  text-align: center;
}
</style>