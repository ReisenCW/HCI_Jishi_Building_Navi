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
        <img :src="currentRoom.image" class="room-image" />
      </div>
      <div v-else class="placeholder">
        鼠标悬停在地图房间上查看信息
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      currentRoom: Object
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
  </style>