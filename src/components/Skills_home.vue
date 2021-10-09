<template>
  <div class="container">
    <div class="block">
      <h1>Develop_</h1>
      <div class="skills-dev" v-for="item in develop" :key="item.title">
        <img :src="item.img" alt="">
        <div class="infor">
          <h4>{{ item.title }}</h4>
          <p>{{ item.description }}</p>
        </div>
      </div>
    </div>
    <div class="block">
      <h1>Design/</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "SkillsHome",
  data() {
    return {
      develop: [
        {
          title: "Vue",
          img: require("@/assets/img/vue-logo.svg"),
          description: "FrontEnd framework to create amazing websites",
        },
        {
          title: "Node Js",
          img: require("@/assets/img/node-logo.svg"),
          description: "JavaScript runtime built to create Server Side programs",
        },
        {
          title: "Adonis Js",
          img: require("@/assets/img/adonis-logo.svg"),
          description: "BackEnd framework to make API's & WebServices",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  height: 100vh;
  width: 80%;
  max-width: 1210px;
  justify-content: center;
  align-items: flex-start;

  .block {
    width: 50%;
    .skills-dev {
      background-color: white;
      display: flex;
      transition: 0.3s ease-in-out;
      border-radius: 24px;
      margin-bottom: 24px;
      column-gap: 1rem;
      padding: 12px;
      img {
        width: 48px;
        opacity: 0.45;
        filter: grayscale(1);
        transition: inherit;
      }
      .infor {
        display: flex;
        flex-direction: column;
        justify-content: center;
        * {
          margin: 0;
        }
      }
      &:hover {
        box-shadow: 0 8px 32px 0 rgba(138, 139, 146, 0.158);
        padding: 24px 12px;
        img {
          opacity: 1;
          filter: grayscale(0);
        }
      }
    }
  }
  @media screen and (max-width: 968px) {
    flex-direction: column;
    .block {
      width: 100%;
    }
  }
}
</style>