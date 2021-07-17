<template>
  <div class="home">
    <div class="shape-blob"></div>
    <div class="shape-blob-one"></div>
    <HeaderHome />
    <AboutHome />
    <KnowmeHome />
  </div>
</template>

<script>
import HeaderHome from "../components/Header_home.vue";
import AboutHome from "../components/About_home.vue";
import KnowmeHome from "../components/Knowme_home.vue";

export default {
  components: { HeaderHome, AboutHome, KnowmeHome },
  metaInfo: {
    title: "Enrique",
    titleTemplate: "%s | Web, UI & Brand Design",
  },
  name: "Home",
};
</script>

<style lang="scss">
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;

  .shape-blob {
    background: #ff0066;
    height: 300px;
    width: 300px;
    border-radius: 30% 50% 20% 40%;
    position: absolute;
    left: -200px;
    top: 400px;
    animation: transform 20s ease-in-out infinite both alternate,
      movement_one 40s ease-in-out infinite both;
    z-index: -1;
  }
  .shape-blob-one {
    background-image: linear-gradient(to left bottom, #4400ff, #e100ff);
    height: 600px;
    width: 600px;
    border-radius: 30% 50% 20% 40%;
    right: -100px;
    top: -100px;
    position: absolute;
    transform: rotate(-120deg);
    animation: transform 30s ease-in-out infinite both alternate,
      movement_two 60s ease-in-out infinite both;
    z-index: -1;
  }

  @keyframes transform {
    0%,
    100% {
      border-radius: 33% 67% 70% 30% / 30% 30% 70% 70%;
    }
    20% {
      border-radius: 37% 63% 51% 49% / 37% 65% 35% 63%;
    }
    40% {
      border-radius: 36% 64% 64% 36% / 64% 48% 52% 36%;
    }
    60% {
      border-radius: 37% 63% 51% 49% / 30% 30% 70% 70%;
    }
    80% {
      border-radius: 40% 60% 42% 58% / 41% 51% 49% 59%;
    }
  }

  @keyframes movement_one {
    0%,
    100% {
      transform: none;
    }
    50% {
      transform: translate(50%, 20%) rotateY(10deg) scale(1.2);
    }
  }

  @keyframes movement_two {
    0%,
    500% {
      transform: none;
    }
    50% {
      transform: translate(50%, 20%) rotate(-200deg) scale(1.2);
    }
  }

  @media only screen and (max-width: 760px) {
    .shape-blob-one {
      right: -260px;
    }
    .shape-blob {
      left: -250px;
    }
  }
}
</style>
