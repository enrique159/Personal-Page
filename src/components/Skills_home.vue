<template>
  <div class="container">
    <h1>What I do!</h1>
    <div class="develop-block">
      <div class="block-new">
        <img class="imagen3d" src="@/assets/img/websites.png" alt="" />
        <h2>Websites & Landing Pages</h2>
        <p>
          Modern websites for all kind of business, organizations &
          entrepreneurs
        </p>
      </div>
      <div class="block-new">
        <img class="imagen3d" src="@/assets/img/api-configuration.png" alt="" />
        <h2>API's & WebServices</h2>
        <p>
          Custom API's for consume in web platforms and mobile Apps, and Auth
          services
        </p>
      </div>
      <div class="block-new">
        <img class="imagen3d" src="@/assets/img/hologram.png" alt="" />
        <h2>UI Design & Components</h2>
        <p>Prototypes, UI Kits for Mobile Apps, Websites & custom elements</p>
      </div>
    </div>
    <div class="tools-group">
      <div class="section-tools">
        <h3>Front End</h3>
        <div class="frameworks">
          <div class="tool">
            <img src="@/assets/img/vue-logo.svg" alt="" />
            <span>Vue.js</span>
          </div>
          <div class="tool">
            <img src="@/assets/img/nuxt-logo.svg" alt="" />
            <span>Nuxt.js</span>
          </div>
        </div>
      </div>

      <div class="section-tools">
        <h3>Back End</h3>
        <div class="frameworks">
          <div class="tool">
            <img
              src="@/assets/img/node-logo.svg"
              alt=""
              style="transform: scale3d(1.2, 1.2, 1.2)"
            />
            <span>NodeJs</span>
          </div>
          <div class="tool">
            <img src="@/assets/img/adonis-logo.svg" alt="" />
            <span>Adonis</span>
          </div>
          <div class="tool">
            <img src="@/assets/img/strapi-logo.svg" alt="" />
            <span>Strapi</span>
          </div>
           <div class="tool">
            <img src="@/assets/img/mysql-logo.svg" alt="" />
            <span>MySql</span>
          </div>
        </div>
      </div>

      <div class="section-tools">
        <h3>Deploy</h3>
        <div class="frameworks">
          <div class="tool">
            <img
              src="@/assets/img/nginx-logo.svg"
            />
            <span>Nginx</span>
          </div>
          <div class="tool">
            <img src="@/assets/img/netlify-logo.svg" alt="" />
            <span>Netlify</span>
          </div>
          <div class="tool">
            <img src="@/assets/img/digitalocean-logo.svg" alt="" />
            <span>Digital<br>Ocean</span>
          </div>
        </div>
      </div>

      <div class="section-tools">
        <h3>Design</h3>
        <div class="frameworks">
          <div class="tool">
            <img
              src="@/assets/img/figma-logo.svg"
              alt=""
            />
            <span>Figma</span>
          </div>
        </div>
      </div>
    </div>
    <h3 style="margin: 48px 0 0;">Other tools</h3>
    <p class="other-tools">
      Visual Studio Code, Github, Heroku, MongoDB, Adobe Xd, Insomnia, Vercel, AWS.
    </p>
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
          description:
            "JavaScript runtime built to create Server Side programs",
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
  height: fit-content;
  width: 80%;
  max-width: 1210px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 128px;

  h1 {
    font-weight: 900;
  }

  .develop-block {
    display: flex;
    width: 100%;
    column-gap: 1rem;
    margin-bottom: 48px;

    .block-new {
      box-sizing: border-box;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      border-radius: 48px;
      transition: 0.3s ease-in-out;
      padding: 12px 1rem;
      text-align: center;
      h2 {
        font-size: 1.5rem;
        font-weight: 800;
        margin-bottom: 0.5rem;
      }
      p {
        font-size: 1rem;
        margin: 0 0 18px;
      }
      .imagen3d {
        width: 100%;
        height: 200px;
        object-fit: contain;
        //opacity: 0.45;
        transition: inherit;
      }
      &:hover {
        box-shadow: 0 8px 32px 0 rgba(138, 139, 146, 0.158);
        transform: scale3d(1.05, 1.05, 1.05);
        .imagen3d {
          opacity: 1;
        }
      }
    }
  }

  .tools-group {
    display: flex;
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
    column-gap: 7rem;
    .section-tools {
      text-align: center;
      .frameworks {
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: flex-start;
        column-gap: 3rem;

        .tool {
          width: fit-content;
          display: flex;
          flex-direction: column;
          align-items: center;
          img {
            width: 36px;
            height: 36px;
            object-fit: contain;
            margin-bottom: 8px;
          }
        }
      }   
    }
  }

  .other-tools {
    margin: 12px 0 0;
    color: #5a5a5a;
    text-align: center;
    padding: 0 24px;
  }

  @media screen and (max-width: 968px) {
    width: 100%;
    .develop-block {
      flex-direction: column;
      .block-new {
        .imagen3d {
          height: 80px;
        }
        &:hover {
          box-shadow: none;
          transform: none;
          .imagen3d {
            opacity: 1;
          }
        }
      }
    }
    .frameworks {
      column-gap: 1.6rem;
    }
  }
  @media screen and (max-width: 460px) {
    .tools-group {
      flex-direction: column;
    }
  }
}
</style>