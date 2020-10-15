<template>
  <div ref="logIn" class="login_container">
    <h1 class="title">{{ !toggle ? "Register" : "Log In" }}</h1>

    <img v-if="!toggle" class="logIn_img" src="../img/01.png" alt="" />
    <img v-if="toggle" class="logIn_img" src="../img/02.png" alt="" />
    <form v-on:submit.prevent>
      <div v-if="toggle" class="form_containers">
        <label for="name">Tap your Log In</label>
        <input type="text" placeholder="" id="name" />
        <label for="password">Tap your password</label>
        <input type="password" placeholder="" id="password" />
      </div>

      <div v-if="!toggle" class="form_containers">
        <label for="name">Tap your Log In</label>
        <input class="register" type="text" placeholder="" id="name" />
        <label for="password">Tap your password</label>
        <input class="register" type="password" placeholder="" id="password" />
        <label for="email">Tap your email</label>
        <input class="register" type="email" id="email" />
      </div>

      <button ref="btn" class="logIn_btn" type="submit">
        {{ !toggle ? "Register" : "Log In" }}
      </button>

      <div @click="click" class="register_btn">
        {{ toggle ? "Register" : "Log In" }}
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      toggle: true
    };
  },
  methods: {
    click(e) {
      this.toggle = !this.toggle;
      e.target.classList.toggle("color");
      const btn = this.$refs.btn;
      btn.classList.toggle("btnColor");
      const logIn = this.$refs.logIn;
      logIn.classList.toggle("logInColor");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$darkRed: #d83e48;
$brightRed: #fe4f5a;
$brightInputBg: #ececec;
$darkInputBg: #e0e0e0;

$brightRegisterblue: #5094f4;
$darkRegisterblue: #0056ed;

@mixin formContainers {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 10px;
}

@mixin inputs {
  width: 80%;
  padding: 10px 10px;
  border: none;
  outline: none;
  &:focus {
    box-shadow: 0 0 10px 2px $brightRed;
  }
}

.login_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  height: 80vh;
  width: 50vh;
  box-shadow: 0 0 35px 2px $brightRed;

  .logIn_img {
    max-height: 40%;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 100%;
    font-size: 0.9em;

    position: relative;

    .form_containers {
      @include formContainers;
      input {
        @include inputs;
        background-color: $brightInputBg;
        &:hover {
          background-color: $darkInputBg;
        }
      }
      input.register:focus {
        box-shadow: 0 0 10px 2px $brightRegisterblue;
      }
    }

    .logIn_btn {
      padding: 10px 50px;
      background-color: $brightRed;
      border: none;
      outline: none;
      cursor: pointer;
      width: 50%;
      color: white;

      &:hover {
        background-color: $darkRed;
      }
    }

    .register_btn {
      display: flex;
      align-items: center;
      justify-content: center;

      height: 150px;
      background-color: $darkRegisterblue;
      width: 70px;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
      color: white;
      cursor: pointer;
      box-shadow: inset 20px 0px 100px -60px rgba(0, 0, 0, 0.75);
      font-size: 0.9em;

      position: absolute;
      top: 5px;
      left: 100%;

      transition: all 0.5s ease-in-out;

      &:hover {
        background-color: $brightRegisterblue;
      }
    }
    .register_btn.color {
      left: 0;
      transform: translateX(-70px);
      background-color: $brightRed;
      border-top-right-radius: 0px;
      border-top-left-radius: 5px;
      border-bottom-right-radius: 0px;
      border-bottom-left-radius: 5px;

      &:hover {
        background-color: $darkRed;
        width: 70px;
      }
    }
  }

  form .logIn_btn.btnColor {
    background-color: $darkRegisterblue;
    transition: 0.4s;

    &:hover {
      background-color: $brightRegisterblue;
    }
  }
}

.login_container.logInColor {
  box-shadow: 0 0 35px 2px $darkRegisterblue;
}
</style>
