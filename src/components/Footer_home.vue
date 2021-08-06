<template>
  <div class="container">
    <div class="socialmedia">
      <a href="http://www.linkedin.com/in/enriquemarin" target="_blank">
        <i class="ri-linkedin-fill social-icon"></i>
      </a>
      <a href="https://github.com/enrique159" target="_blank">
        <i class="ri-github-fill social-icon"></i>
      </a>
      <a href="http://www.dribbble.com/enriquemarin" target="_blank">
        <i class="ri-dribbble-line social-icon"></i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterHome",
};
</script>

<style lang="scss" scoped>
.container {
  padding: 3rem 2rem;
  justify-content: center;
  display: flex;
  width: 100%;
  .socialmedia {
    display: flex;
    flex-direction: row;
    column-gap: 2.5rem;
    a {
      display: flex;
      background-color: transparent;
      transition: 0.3s ease-in-out;
      text-decoration: none;
      justify-content: center;
      align-items: center;
      cursor: none;
      border-radius: 50%;
      width: 48px;
      height: 48px;
      color: inherit;
      &:hover {
        background-color: #ebebeb;
      }
      .social-icon {
        font-size: 28px;
      }
    }
  }
}
</style>