<template>
  <nav class="nav-container">
    <div class="nav-wrapper">
      <router-link to="/" class="nav-link">
        <span class="nav-icon">🏠</span>
        <span class="nav-text">济事楼4层导览</span>
      </router-link>
      <div class="search-container" style="position: relative;">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="搜索..."
          class="search-input"
          @input="handleSearch"
        />
        <ul v-if="showDropdown" class="search-dropdown">
          <li
            v-for="room in filteredRooms"
            :key="room.id + room.name"
            @click="selectRoom(room)"
            class="dropdown-item"
          >
            {{ room.name }} - {{ room.function }}
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { rooms } from '../rooms';

export default {
  data() {
    return {
      searchQuery: ""
    };
  },
  computed: {
    filteredRooms() {
      const q = this.searchQuery.trim().toLowerCase();
      if (!q) return [];
      // 计算匹配分数，按分数倒序排序
      const scored = rooms.map(room => {
        let score = 0;
        // 检查 id, name, function, responsible
        ['id', 'name', 'function', 'responsible'].forEach(key => {
          if (room[key] && room[key].toLowerCase().includes(q)) {
            score += 10;
          }
        });
        // 检查 teachers 数组
        if (room.teachers) {
          room.teachers.forEach(teacher => {
            if (teacher.toLowerCase().includes(q)) {
              score += 5;
            }
          });
        }
        return { room, score };
      }).filter(item => item.score > 0);
      // 按分数降序排序
      scored.sort((a, b) => b.score - a.score);
      return scored.map(item => item.room);
    },
    showDropdown() {
      return this.searchQuery.trim() !== "" && this.filteredRooms.length > 0;
    }
  },
  methods: {
    handleSearch() {
      this.$emit("search", this.searchQuery);
    },
    selectRoom(room) {
      this.$emit("select-room", room);
      this.searchQuery = "";
    },
    getRoomInfo(roomId) {
      return rooms.find(room => room.id === roomId);
    }
  },
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

/* 搜索框样式 */
.search-container {
  margin-left: auto;
}

/* 搜索输入框样式 */
.search-input {
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 400px;
}

/* 下拉框样式 */
.search-dropdown {
  position: absolute;
  top: 110%;
  left: 0;
  width: 100%;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  max-height: 200px;
  overflow-y: auto;
  list-style: none;
  padding: 0;
  margin: 4px 0 0 0;
  z-index: 1000;
}

.dropdown-item {
  padding: 0.5rem;
  cursor: pointer;
  transition: background 0.2s;
}

.dropdown-item:hover {
  background: #f0f0f0;
}

</style>



