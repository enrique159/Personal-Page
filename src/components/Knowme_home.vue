<template>
  <div class="container">
    <h1 class="title">What I've done!</h1>
    <div class="cards">
      <div class="card">
        <img class="card-img" src="@/assets/FreeLancinio.jpeg" alt="" />
        <div class="card-info">
          <div>
            <h2>FreeLancin.io</h2>
            <p>
              Exercise website replicating the design made by AR Shakir.<br />See
              the assets here:
              <a
                href="https://freebieflux.com/landing-design-for-freelancer-agency-website-by-ar-shakir.html"
                >freebieflux.com</a
              >
            </p>
            <p class="details">Web Desktop, Vue, Scss, Bootstrap.</p>
          </div>
          <div class="card-options">
            <a
              class="card-option"
              href="https://freelancin-io.vercel.app"
              target="_blank"
            >
              <i class="ri-global-line social-icon"></i>
            </a>
            <a
              class="card-option"
              href="https://github.com/enrique159/freelancin-io"
              target="_blank"
            >
              <i class="ri-github-fill social-icon"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="card">
        <img class="card-img" src="@/assets/TresamCapital.jpg" alt="" />
        <div class="card-info">
          <div>
            <h2>Tresam Capital</h2>
            <p>
              Professional Website developed when I worked on Applab Company.
            </p>
            <p class="details">
              Web Responsive, Vue, Scss, AOS Animations, i18n.js.
            </p>
          </div>
          <div class="card-options">
            <a
              class="card-option"
              href="https://tresamcapital.com"
              target="_blank"
            >
              <i class="ri-global-line social-icon"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="card">
        <img class="card-img" src="@/assets/Capbook.jpg" alt="" />
        <div class="card-info">
          <div>
            <h2>Capbook</h2>
            <p>
              Custom dashboard created to set a grid base for my future
              projects.
            </p>
            <p class="details">
              Css Grid, Dark Mode, Web Responsive, UI Design
            </p>
          </div>
          <div class="card-options">
            <a
              class="card-option"
              href="https://capbook.vercel.app/"
              target="_blank"
            >
              <i class="ri-global-line social-icon"></i>
            </a>
            <a
              class="card-option"
              href="https://github.com/enrique159/capbook"
              target="_blank"
            >
              <i class="ri-github-fill social-icon"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="card">
        <img class="card-img" src="@/assets/HatesMap.jpg" alt="" />
        <div class="card-info">
          <div>
            <h2>Hates Map</h2>
            <p>
              Web App created to show street hot dogs in my city. This is a
              personal open project.
            </p>
            <p class="details">PWA, Vuesax, BackEnd, Mapbox.</p>
          </div>
          <div class="card-options">
            <a
              class="card-option"
              href="https://hates-map.vercel.app/"
              target="_blank"
            >
              <i class="ri-global-line social-icon"></i>
            </a>
            <a
              class="card-option"
              href="https://github.com/enrique159/hatesmap"
              target="_blank"
            >
              <i class="ri-github-fill social-icon"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
    <p>
      If you want to see more, check out my
      <a href="https://github.com/enrique159/">Github</a>
    </p>
  </div>
</template>

<script>
export default {
  name: "KnowmeHome",
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  height: fit-content;
  min-height: 100vh;
  width: 80%;
  max-width: 1210px;
  justify-content: center;
  align-items: center;
  margin-top: -200px;

  .title {
    font-weight: 900;
  }
  .cards {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    .card {
      padding: 1rem;
      background: rgba(255, 255, 255, 0.527);
      box-shadow: 0 8px 32px 0 rgba(138, 139, 146, 0.158);
      backdrop-filter: blur(32px);
      -webkit-backdrop-filter: blur(32px);
      transition: 0.3s ease-in-out;
      border-radius: 16px;
      display: flex;
      column-gap: 1rem;
      .card-img {
        width: 240px;
        height: 100%;
        object-fit: cover;
        transition: 0.3s ease-in-out;
        border-radius: 8px;
        opacity: 0.8;
      }
      .card-info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        h2 {
          margin: 0;
          font-size: 1.3rem;
          font-weight: 800;
          margin-bottom: 0.5rem;
        }
        p {
          font-size: 0.9rem;
          margin: 0 0 18px;
        }
        .details {
          color: #8c8c8c;
          font-style: italic;
        }
        .card-options {
          display: flex;
          column-gap: 0.6rem;
          .card-option {
            display: flex;
            background-color: transparent;
            transition: 0.3s ease-in-out;
            text-decoration: none;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            width: 36px;
            height: 36px;
            color: inherit;
            .social-icon {
              font-size: 24px;
              color: #717171;
            }
            &:hover {
              background-color: #ebebeb;
              .social-icon {
                color: black;
              }
            }
          }
        }
      }
      &:hover {
        transform: translateY(-3px);
        .card-img {
          opacity: 1;
        }
      }
    }
  }
  @media screen and (max-width: 1240px) {
    width: 100%;
    padding-bottom: 128px;
    .cards {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .card {
        max-width: 580px;
        width: 90%;
      }
    }
  }
}
</style>