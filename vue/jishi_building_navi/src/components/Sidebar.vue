<template>
  <div class="sidebar">
    <div v-if="currentRoom" class="room-info">
      <h2>{{ currentRoom.name }}</h2>
      <p>功能：{{ currentRoom.function }}</p>
      <p v-if="currentRoom.responsible">负责人：{{ currentRoom.responsible }}</p>
      <div v-if="currentRoom.teachers">
        <h3>教师：</h3>
        <ul>
          <li v-for="teacher in currentRoom.teachers" :key="teacher">
            {{ teacher }}
          </li>
        </ul>
      </div>
      <img :src="currentRoom.image" class="room-image" @click="openModal" style="cursor: pointer;" />
    </div>
    <div v-else class="placeholder">
      鼠标悬停在地图房间上或搜索房间以查看信息
    </div>
  </div>
    <!-- Modal for large image -->
    <div v-if="showModal" class="modal-overlay" @click.self="closeModal">
    <div class="modal-content">
      <button class="close-button" @click="closeModal">关闭</button>
      <img :src="currentRoom.image" class="large-image" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currentRoom: Object
  },
  data() {
    return {
      showModal: false
    };
  },
  methods: {
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    }
  }
};
</script>

<style scoped>
.sidebar {
  width: 300px;
  height: 100%;
  padding: 1rem;
  background: #f8f9fa;
  border-left: 1px solid #ddd;
}

.room-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  margin: 1rem 0;
}

/* Modal 样式 */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  position: relative;
  background: #fff;
  padding: 1rem;
  border-radius: 4px;
  max-width: 90%;
  max-height: 90%;
  overflow: auto;
}

.large-image {
  width: 100%;
  height: auto;
}

.close-button {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background: #ff5f5f;
  color: #fff;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
}
</style>