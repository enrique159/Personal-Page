<template>
  <div class="container" v-rellax="{ speed: 10}">
    <h1 class="title">
      I’m <span>Enrique Marín</span>, a web developer, brander & UI designer
    </h1>
    <div class="options">
      <a href="https://github.com/enrique159/cvresumen/blob/main/resumen_enriquemarin.pdf" target="_blank" class="option">
        <span>resume (PDF)</span>
      </a>
      <a href="https://github.com/enrique159/" class="option">
        <span>github</span>
      </a>
      <a href="#contactme" class="option">
        <span>contact</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderHome",
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 80%;
  max-width: 750px;
  justify-content: center;
  align-items: center;

  .title {
    font-size: 4rem;
    font-weight: 900;
    mix-blend-mode: difference;
    span {
      color: #4400ff;
    }
  }

  .options {
    width: 100%;
    z-index: 1;
    .option {
      text-decoration: none;
      transition: 0.2s ease-in-out;
      color: black;
      font-size: 1.2rem;
      font-weight: 600;
      margin-right: 48px;
      &:hover {
        color: #90d12f;
      }
    }
  }
  @media only screen and (max-width: 760px) {
    .title {
      font-size: 3rem;
    }
    .options {
      display: flex;
      justify-content: space-between;
      .option {
        font-size: 1rem;
        margin-right: 0px;
      }
    }
  }
}
</style>
