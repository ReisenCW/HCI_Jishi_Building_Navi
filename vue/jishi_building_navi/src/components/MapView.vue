<template>
  <div class="map-container">
    <div class="map-wrapper">
      <img :src="mapImage" class="map-image" ref="mapEl" />
      <div 
        v-for="room in rooms" :key="room.id" 
        class="room-area" :style="getRoomStyle(room)"
        @mouseover="setHoveredRoom(room)">
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { rooms } from '../rooms';

const props = defineProps(['currentRoom']);
const emit = defineEmits(['update:currentRoom']);

const mapEl = ref(null);
const mapImage = new URL('../assets/map.jpg', import.meta.url).href;

const getRoomStyle = (room) => ({
  left: `${room.x}%`,
  top: `${room.y}%`,
  width: `${room.width}%`,
  height: `${room.height}%`,
  transform: `rotate(${room.rotate ?? 0}deg)`
});

const setHoveredRoom = (room) => {
  emit('update:hoveredRoom', room);
};


</script>

<style scoped>
.map-container {
  /* 按比例缩放容器 */
  margin: 0 10vw;
  width: 40vw;          /* 占视口宽度的40% */
  overflow: auto;        /* 滚动条 */ 
  position: relative;
  background: #f0f0f0;
}

/* 父容器相对定位，子元素才能用绝对定位 */
.map-wrapper {
  position: relative;
  display: inline-block; /* 包裹图片的原始大小 */
}

.map-image {
  width: 100%;          /* 图片宽度自适应容器 */
  height: auto;         /* 高度自适应 */
  display: block;
  height: auto;
  object-fit: contain;   /* 完整显示地图 */
}

.room-area {
  position: absolute;
  cursor: pointer;
  background: rgba(110, 171, 171, 0.256);
  transition: background 0.3s;
}

.room-area:hover {
  background: rgba(122, 189, 157, 0.5);
}

/* 自定义滚动条样式 */
.map-container::-webkit-scrollbar {
  width: 10px;
  height: 10px;
  background: rgba(0,0,0,0.1);
}

.map-container::-webkit-scrollbar-thumb {
  background: #42b983;
  border-radius: 4px;
}
</style>