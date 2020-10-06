<template>
  <div class="questions">
    <!-- Progress bar! -->
    <div class="step-row">
      <div id="progress"></div>
      <div class="step-col"><small>Step 1</small></div>
      <div class="step-col"><small>Step 2</small></div>
      <div class="step-col"><small>Step 3</small></div>
    </div>

    <form id="form1">
      <div>
        <h3>Create account</h3>
      </div>
      <input type="text" placeholder="Email" required />
      <input type="text" placeholder="Password" required />
      <input type="text" placeholder="confirm password" required />

      <div class="btn-box">
        <button type="button">Next</button>
      </div>
    </form>

    <form id="form2">
      <h3>Hejsan</h3>
      <input type="text" placeholder="ABC" required />
      <input type="text" placeholder="HAHAHA" required />
      <input type="text" placeholder="ÖÖÖL" required />

      <div class="btn-box">
        <button id="back1" type="button">Back</button>
        <button id="next2" type="button">Next</button>
      </div>
    </form>

    <form id="form3">
      <h3>personal info</h3>
      <input type="text" placeholder="fist name" required />
      <input type="text" placeholder="last name" required />
      <input type="text" placeholder="mobile num" required />

      <div class="btn-box">
        <button id="back2" type="button">Back</button>
        <button type="submit">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Questions",
  data() {
    return {
      qNum: [],
      number: 1,
    };
  },

  methods: {
    add() {
      this.number += 1;
    },
  },
};
</script>

<style lang="scss" scoped>
.questions {
  margin: 0;
  padding: 0;
  width: 360px;
  height: 400px;
  margin: 8% auto;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  overflow: hidden;

  h3 {
    text-align: center;
    margin-bottom: 40px;
    color: #777;
    font-size: 20px;
    line-height: 5px;
  }

  form {
    width: 280px;
    position: absolute;
    top: 100px;
    left: 40px;
    transition: 0.5s ease;

    button {
      width: 110px;
      height: 35px;
      margin: 0 10px;
      background-color: gray;
      border-radius: 30px;
      border: 1px solid red;
      outline: none;
      color: #fff;
      cursor: pointer;
    }

    input {
      width: 100%;
      padding: 10px 5px;
      border: 0;
      border-bottom: 1px solid #999;
      outline: none;
      background: transparent;

      ::placeholder {
        color: #777;
      }
    }

    .btn-box {
      width: 100%;
      margin: 30px auto;
      text-align: center;
    }
  }

  #form2 {
    left: 450px;
  }

  #form3 {
    left: 450px;
  }

  .step-row {
    width: 360px;
    height: 40px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    box-shadow: 0 -1px 5px -1px #000;
    position: relative;

    .step-col {
      width: 120px;
      text-align: center;
      color: #333;
      position: relative;
    }
  }
}
</style>