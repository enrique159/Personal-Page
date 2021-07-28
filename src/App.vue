<template>
  <div id="app">
    <div class="cursor2"></div>
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  components: { Navbar },
  mounted() {
    const cursor = document.querySelector(".cursor2");
    document.addEventListener("mousemove", (e) => {
      cursor.setAttribute(
        "style",
        "top: " + (e.clientY - 4) + "px; left: " + (e.clientX - 4) + "px;"
      );
    });

    document.addEventListener("click", () => {
      cursor.classList.add("expand2");
      setTimeout(() => {
        cursor.classList.remove("expand2");
      }, 500);
    });
  },
};
</script>

<style lang="scss">
@import "./assets/main.css";

body {
  margin: 0;
  cursor: none;
  scroll-behavior: smooth;
}

.cursor {
  width: 20px;
  height: 20px;
  border: 3px solid black;
  border-radius: 50%;
  position: fixed;
  transition-duration: 40ms;
  transition-timing-function: ease-out;
  animation: cursorAnim 0.5s infinite alternate;
  pointer-events: none;
  z-index: 10;
}

.cursor2 {
  width: 8px;
  height: 8px;
  background-color: black;
  border-radius: 50%;
  position: fixed;
  transition-duration: 10ms;
  transition-timing-function: ease-out;
  pointer-events: none;
  z-index: 10;
}

.expand {
  animation: cursorAnim2 0.5s forwards;
  border: 1px solid greenyellow;
}
.expand2 {
  animation: cursorAnim2 0.5s forwards;
  border: 1px solid black;
}

@keyframes cursorAnim {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(0.7);
  }
}

@keyframes cursorAnim2 {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(3);
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
}

#app {
  font-family: "Aventa", -apple-system, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

@media only screen and (max-width: 760px) {
  .cursor2 {
    display: none;
  }
  body {
    cursor: default;
  }
}
</style>
