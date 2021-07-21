<template>
  <div id="app">
    <div class="cursor"></div>
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  components: { Navbar },
  mounted() {
    const cursor = document.querySelector(".cursor");
    document.addEventListener("mousemove", (e) => {
      cursor.setAttribute(
        "style",
        "top: " + (e.clientY - 10) + "px; left: " + (e.clientX - 10) + "px;"
      );
    });

    document.addEventListener("click", () => {
      cursor.classList.add("expand");
      setTimeout(() => {
        cursor.classList.remove("expand");
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

.expand {
  animation: cursorAnim2 0.5s forwards;
  border: 1px solid greenyellow;
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
  font-family: Aventa, -apple-system, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

@media only screen and (max-width: 760px) {
  .cursor {
    display: none;
  }
  body {
    cursor: default;
  }
}
</style>
