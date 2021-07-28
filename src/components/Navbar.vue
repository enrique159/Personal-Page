<template>
  <div id="nav" :class="{ onScroll: !view.topOfPage, 'nav-active': menu }">
    <div class="content">
      <div class="logo">
        <img src="@/assets/logo1.svg" alt="logo" />
      </div>
      <div :class="menu ? 'btnDraw active' : 'btnDraw'" @click="openMenu">
        <div id="line1"></div>
        <div id="line2"></div>
      </div>
      <div :class="menu ? 'options active' : 'options'">
        <a href="#aboutme" @click="openMenu">
          <h5>Know me</h5>
        </a>
        <router-link to="">
          <h5>My Work</h5>
        </router-link>
        <router-link to="">
          <h5>Skills</h5>
        </router-link>
        <router-link to="">
          <h5>Contact</h5>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data: () => ({
    active: 0,
    menu: false,
    view: {
      topOfPage: true,
    },
  }),
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (window.pageYOffset > 0) {
        if (this.view.topOfPage) this.view.topOfPage = false;
      } else {
        if (!this.view.topOfPage) this.view.topOfPage = true;
      }
    },
    openMenu() {
      this.menu = !this.menu;
    },
  },
};
</script>

<style lang="scss" scoped>
#nav {
  background-color: transparent;
  transition: 0.3s ease-in-out;
  box-sizing: border-box;
  border-radius: 0 0 18px 18px;
  position: fixed;
  display: flex;
  height: 90px;
  width: 100%;
  z-index: 2;

  &.onScroll {
    background: rgba(255, 255, 255, 0.527);
    box-shadow: 0 8px 32px 0 rgba(138, 139, 146, 0.158);
    backdrop-filter: blur(32px);
    -webkit-backdrop-filter: blur(32px);
  }

  .content {
    margin: 24px auto;
    width: 92%;
    max-width: 1410px;
    align-items: center;
    display: flex;

    .logo {
      width: 12%;
      img {
        height: 36px;
      }
    }

    .options {
      display: flex;
      justify-content: center;
      transition: 0.3s ease-in-out;
      a {
        text-decoration: none;
        transition: 0.3s ease-in-out;
        padding: 4px 12px;
        margin: auto 24px;
        cursor: none;
        color: black;
        h5 {
          margin: 0;
          font-size: 0.9rem;
          font-weight: 500;
        }
        &:hover {
          color: #ff0066;
        }
      }
    }
    .btnDraw {
      display: none;
    }
  }
  @media only screen and (max-width: 760px) {
    .content {
      align-items:flex-start;
      justify-content: space-between;
      .options {
        position: absolute;
        flex-direction: column;
        z-index: 2;
        height: 80vh;
        display: flex;
        top: -100vh;
        left: 0;
        right: 0;
        a {
          text-align: center;
          padding: 4px 12px;
          margin: 24px auto;
          color: black;
          h5 {
            margin: 0;
            font-size: 2rem;
            font-weight: 800;
          }
        }
      }
      .options.active {
        top: 0;
      }
      .logo {
        z-index: 3;
      }
      .btnDraw {
        position: relative;
        display: flex;
        transition: 0.3s ease-in-out;
        box-sizing: border-box;
        border-radius: 12px;
        height: 36px;
        width: 36px;
        z-index: 4;
        #line1 {
          position: absolute;
          transition: 0.3s ease-in-out;
          background-color: black;
          height: 2px;
          width: 18px;
          top: 14px;
          left: 9px;
        }
        #line2 {
          position: absolute;
          transition: 0.3s ease-in-out;
          background-color: black;
          height: 2px;
          width: 18px;
          bottom: 14px;
          left: 9px;
        }
        &.active {
          #line1 {
            transform: rotate(45deg);
            top: 17px;
          }
          #line2 {
            transform: rotate(135deg);
            bottom: 17px;
          }
        }
      }
    }
  }
}
@media only screen and (max-width: 760px) {
  .nav-active {
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0 8px 32px 0 rgba(138, 139, 146, 0.158);
    backdrop-filter: blur(32px);
    -webkit-backdrop-filter: blur(32px);
    height: 80vh !important;
  }
}
</style>