<template>
  <div id="app">
    <Header @select-room="updateSelectedRoom" />
    <div class="main-layout">
      <MapView @update:hoveredRoom="updateSelectedRoom" />
      <Sidebar :currentRoom="selectedRoom" />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Sidebar from "./components/Sidebar.vue";
import MapView from "./components/MapView.vue";

export default {
  name: "App",
  components: { Header, Sidebar, MapView },
  data() {
    return {
      selectedRoom: null
    };
  },
  methods: {
    updateSelectedRoom(room) {
      this.selectedRoom = room;
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.main-layout {
  display: flex;
}
</style>
