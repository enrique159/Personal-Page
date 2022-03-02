<template>
  <div class="container" id="contactme">
    <div class="UIAsset">
      <img src="@/assets/handsMobile.png" alt="" />
    </div>
    <div class="formulario">
      <h2 class="title">Get in touch!</h2>
      <p class="subtitle">
        You have a project in mind? We can work together to make it real! Just
        send me a message or call me!
        <a href="tel:6121049341">+52 (612) 104 9341</a>
      </p>
      <form class="contact-form" v-on:submit.prevent="sendEmail">
        <div class="nameemail">
          <input
            type="text"
            name="name"
            id="user_name"
            v-model="name"
            placeholder="Your Name"
          />
          <input
            type="email"
            name="email"
            id="user_email"
            v-model="email"
            placeholder="Email"
          />
        </div>
        <div class="message">
          <textarea
            name="message"
            id="message"
            placeholder="Something you wanna say to me :)"
            v-model="message"
          ></textarea>
        </div>
        <div class="sending">
          <input type="submit" value="Send" id="send" />
          <span>{{ error }}</span>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import emailjs from "emailjs-com";

export default {
  name: "ContactHome",
  data() {
    return {
      name: "",
      email: "",
      message: "",
      error: "",
      sendOk: false,
    };
  },
  methods: {
    validarForm() {
      if (this.name != "") {
        if (this.email != "") {
          if (this.message != "") {
            return true;
          } else return "You need to write something in the message ☹️";
        } else return "An Email is missing! 🥸";
      } else return "What is your name? you didn't write it 🧐";
    },
    sendEmail(e) {
      if (this.validarForm() == true) {
        grecaptcha.ready(function() {
          grecaptcha.execute('6Le-oq4eAAAAAC07tw6_HwWW_8eCfaaVg7nW2V9b', {action: 'submit'}).then(function(token) {
            if(token.success) {
              this.error = "Sending...🤓";
              emailjs
                .sendForm(
                  "service_93lpf8n",
                  "template_3vfdrut",
                  e.target,
                  "user_I4jbsDl2GilwNoOqmOzAw",
                  {
                    name: this.name,
                    email: this.email,
                    message: this.message,
                  }
                )
                .then(
                  (result) => {
                    this.error = "Message sended!! 🥳";
                    console.log("SUCCESS!", result.status, result.text);
                    this.name = "";
                    this.email = "";
                    this.message = "";
                  },
                  (error) => {
                    this.error = "Something was wrong 😫";
                    console.log("FAILED...", error);
                  }
                );
            }
          });
        });
      } else {
        this.error = this.validarForm();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: row;
  height: 80vh;
  width: 80%;
  max-width: 1210px;
  justify-content: center;
  align-items: center;

  .UIAsset {
    width: 40%;
    padding: 24px;
    img {
      width: 100%;
    }
  }

  .formulario {
    width: 60%;
    .title {
      font-size: 2rem;
      font-weight: 900;
      margin: 4px;
    }
    .subtitle {
      margin: 8px 4px 24px;
      a {
        text-decoration: none;
        transition: 0.3s ease-in-out;
        font-weight: 500;
        color: #6200ff;
        cursor: none;
        &:hover {
          color: #00b7ff;
        }
      }
    }
    .contact-form {
      display: flex;
      flex-direction: column;
      .nameemail {
        display: flex;
        flex-direction: row;
        #user_name,
        #user_email {
          background-color: #f3f3f3;
          font-family: "Aventa";
          font-size: 1rem;
          padding: 12px 16px;
          border-radius: 12px;
          border: none;
          margin: 4px;
          width: 50%;
        }
      }
      .message {
        display: flex;
        flex-direction: column;
        #message {
          font-family: "Aventa";
          font-size: 1rem;
          background-color: #f3f3f3;
          padding: 12px 16px;
          border-radius: 12px;
          height: 78px;
          border: none;
          margin: 4px;
        }
      }
      .sending {
        display: flex;
        flex-direction: row;
        align-items: center;
        column-gap: 2rem;
        #send {
          -webkit-appearance: none;
          transition: 0.3s ease-in-out;
          background-color: #4400ff;
          padding: 8px 24px 6px;
          border-radius: 12px;
          font-family: "Aventa";
          font-size: 1rem;
          font-weight: 700;
          border: none;
          color: white;
          cursor: none;
          margin: 4px;
          width: 128px;
          &:hover {
            background-color: #0077ff;
            box-shadow: 0px 8px 43px -7px rgba(0, 162, 255, 0.68);
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 760px) {
  .container {
    width: 80%;
    height: fit-content;
    flex-direction: column;
    .UIAsset, .formulario {
      width: 100%;
    }
  }
}
</style>