<template>
  <div class="container" v-rellax="{ speed: 8 }">
    <div class="myprofile">
      <img src="@/assets/imgprofileblob.png" class="profile" alt="Profile" />
    </div>
    <h4>
      Young entrepreneur with solid design and development expertise. I
      build business websites, brands, UI projects and elaborate online
      business services.
    </h4>
  </div>
</template>

<script>
export default {
  name: "AboutHome",
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: row;
  height: 40vh;
  width: 90%;
  max-width: 1210px;
  justify-content: center;
  align-items: flex-start;

  .myprofile {
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    width: 30%;
    height: 100%;
    padding: 24px;
    .profile {
      width: 100%;
      margin: auto 0;
    }
  }

  h4 {
    width: 70%;
    text-align: left;
    font-size: 2rem;
    font-weight: 700;
    margin: auto 0;
  }

  @media only screen and (max-width: 920px) {
    .myprofile {
      width: 40%;
    }
    h4 {
      width: 60%;
      font-size: 1.6rem;
    }
  }

  @media only screen and (max-width: 760px) {
    flex-direction: column;
    height: 60vh;
    .myprofile, h4 {
      width: 100%;
    }
    h4 {
      text-align: center;
      font-size: 1.5rem;
    }
  }
}
</style>