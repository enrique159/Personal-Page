<template>
  <div class="container" v-rellax="{ speed: 6 }">
    <div class="myprofile">
      <img src="@/assets/blob 4.svg" class="blob" alt="blob" />
      <img src="@/assets/imgprofile.png" class="profile" alt="Profile" />
    </div>
    <h4>
      Leading digital agency with solid design and development expertise. We
      build readymade websites, mobile applications, and elaborate online
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
  width: 80%;
  max-width: 1210px;
  justify-content: center;
  align-items: flex-start;

  .myprofile {
    position: relative;
    box-sizing: border-box;
    width: 30%;
    padding: 12px;
    .blob {
      position: absolute;
      top: -40px;
      transform: scale(1.2);
      width: 100%;
    }
    .profile {
      position: absolute;
      width: 100%;
    }
  }

  h4 {
    width: 70%;
    text-align: left;
    font-size: 2rem;
    font-weight: 700;
    margin: auto 0;
  }
}
</style>