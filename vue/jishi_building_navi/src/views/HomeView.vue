<template>
  <div class="home-container">
    <div class="content">
      <MapView
        :currentRoom="currentRoom"
        @update:currentRoom="currentRoom = $event"
      />
      <Sidebar :currentRoom="currentRoom" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import MapView from '@/components/MapView.vue';
import Sidebar from '@/components/Sidebar.vue';

const currentRoom = ref(null);

</script>

<style>
.home-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.content {
  display: flex;
  flex: 1;
  min-height: 0; /* 修复 flex 容器溢出问题 */
  overflow: hidden;
}
</style>