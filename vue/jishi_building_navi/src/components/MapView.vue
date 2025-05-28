<template>
  <div class="map-container">
    <div class="map-wrapper">
      <img :src="mapImage" class="map-image" ref="mapEl" />
      <div v-for="room in rooms" :key="room.id" class="room-area" :style="getRoomStyle(room)"
        @mouseover="setCurrentRoom(room)"></div>
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
});

const setCurrentRoom = (room) => {
  emit('update:currentRoom', room);
};
</script>

<style scoped>
.map-container {
  flex: 1;
  position: relative;
  height: 100%;
  overflow: hidden;
}

.map-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.room-area {
  position: absolute;
  cursor: pointer;
  background: rgba(66, 185, 130, 0.3);
  transition: background 0.3s;
}

.room-area:hover {
  background: rgba(66, 185, 130, 0.5);
}
</style>