<template>
  <div class="question__container">
    <div class="questions">
      <!-- Progress bar! -->
      <div class="step-row">
        <div :style="{ width: progress }" id="progress"></div>
        <div class="step-col"><small>Step 1</small></div>
        <div class="step-col"><small>Step 2</small></div>
        <div class="step-col"><small>Step 3</small></div>
        <div class="step-col"><small>Step 4</small></div>
        <div class="step-col"><small>Step 5</small></div>
        <div class="step-col"><small>Step 6</small></div>
      </div>

      <form :style="{ left: form1 }" id="form1">
        <div>
          <h3>{{ answers[0].a }}</h3>
        </div>
        <div class="answer__container">
          <div>
            <label>Ja</label>
            <input type="radio" value="ja" v-model="answers[0].a_svar" />
          </div>
          <div>
            <label>Nej</label>
            <input type="radio" value="nej" v-model="answers[0].a_svar" />
          </div>
        </div>

        <div class="btn-box">
          <button
            :disabled="answers[0].a_svar === null"
            class="btn black_bg"
            :style="answers[0].a_svar === null && disabled"
            @click="(form1 = '-1000px'), (form2 = '50%'), (progress = '33.7%')"
            type="button"
          >
            Next
          </button>
        </div>
      </form>
      <!-- //////////////////////////////////// -->
      <!-- //////////////////////////////////// -->
      <!-- //////////////////////////////////// -->

      <form :style="{ left: form2 }" id="form2">
        <h3>{{ answers[1].b }}</h3>
        <div class="answer__container">
          <div>
            <label>B2B</label>
            <input type="radio" value="B2B" v-model="answers[1].b_svar" />
          </div>
          <div>
            <label>B2C</label>
            <input type="radio" value="B2C" v-model="answers[1].b_svar" />
          </div>
          <div>
            <label>B2B & B2C</label>
            <input type="radio" value="B2B & B2C" v-model="answers[1].b_svar" />
          </div>
        </div>

        <div class="btn-box">
          <button
            @click="(form1 = '50%'), (form2 = '1100px'), (progress = '15%')"
            class="btn black_bg"
            id="back1"
            type="button"
          >
            Back
          </button>
          <button
            @click="(form2 = '-1000px'), (form3 = '50%'), (progress = '49.7%')"
            class="btn black_bg"
            id="next2"
            type="button"
            :disabled="answers[1].b_svar === null"
            :style="answers[1].b_svar === null && disabled"
          >
            Next
          </button>
        </div>
      </form>
      <!-- //////////////// -->
      <!-- //////////////// -->
      <!-- //////////////// -->

      <form :style="{ left: form3 }" id="form3">
        <h3>{{ answers[2].c }}</h3>
        <div class="answer__container">
          <div>
            <label>exempel 1</label>
            <input type="radio" value="ex1" v-model="answers[2].c_svar" />
          </div>
          <div>
            <label>exempel 2</label>
            <input type="radio" value="ex2" v-model="answers[2].c_svar" />
          </div>
          <div>
            <label>exempel 3</label>
            <input type="radio" value="ex3" v-model="answers[2].c_svar" />
          </div>
          <div>
            <label>exempel 4</label>
            <input type="radio" value="ex4" v-model="answers[2].c_svar" />
          </div>
          <div>
            <label>exempel 5</label>
            <input type="radio" value="ex5" v-model="answers[2].c_svar" />
          </div>
          <div>
            <label>exempel 6</label>
            <input type="radio" value="ex6" v-model="answers[2].c_svar" />
          </div>
          <div>
            <label>exempel 7</label>
            <input type="radio" value="ex7" v-model="answers[2].c_svar" />
          </div>
          <div>
            <label>exempel 8</label>
            <input type="radio" value="ex8" v-model="answers[2].c_svar" />
          </div>
          <div>
            <label>exempel 9</label>
            <input type="radio" value="ex9" v-model="answers[2].c_svar" />
          </div>
          <div>
            <label>exempel 10</label>
            <input type="radio" value="ex10" v-model="answers[2].c_svar" />
          </div>
        </div>

        <div class="btn-box">
          <button
            @click="(form2 = '50%'), (form3 = '1100px'), (progress = '30%')"
            class="btn black_bg"
            id="back2"
            type="button"
          >
            Back
          </button>
          <button
            @click="(form3 = '-1000px'), (form4 = '50%'), (progress = '66.7%')"
            class="btn black_bg"
            id="next3"
            type="button"
            :disabled="answers[2].c_svar === null"
            :style="answers[2].c_svar === null && disabled"
          >
            Next
          </button>
        </div>
      </form>
      <!-- ///////////////////////////// -->
      <!-- ///////////////////////////// -->
      <!-- ///////////////////////////// -->

      <form :style="{ left: form4 }" id="form4">
        <h3>{{ answers[3].d }}</h3>
        <div class="answer__container">
          <div>
            <label>Ja</label>
            <input type="radio" value="ja" v-model="answers[3].d_svar" />
            <br />
            <input
              type="text"
              v-model="answers[3].d_text"
              placeholder="Vilket?"
              :disabled="disabledInput"
              :style="answers[3].d_svar === null && disabled"
            />
          </div>
          <div>
            <label>Nej</label>
            <input type="radio" value="nej" v-model="answers[3].d_svar" />
          </div>
        </div>

        <div class="btn-box">
          <button
            @click="(form3 = '50%'), (form4 = '1100px'), (progress = '45%')"
            class="btn black_bg"
            id="back3"
            type="button"
          >
            Back
          </button>
          <button
            @click="(form4 = '-1000px'), (form5 = '50%'), (progress = '83.7%')"
            class="btn black_bg"
            id="next4"
            type="button"
            :disabled="answers[3].d_svar === null"
            :style="answers[3].d_svar === null && disabled"
          >
            Next
          </button>
        </div>
      </form>
      <!-- //////////////////////////// -->
      <!-- //////////////////////////// -->
      <!-- //////////////////////////// -->

      <form :style="{ left: form5 }" id="form5">
        <h3>{{ answers[4].e }}</h3>
        <div class="answer__container">
          <div>
            <label>B2B</label>
            <input type="radio" value="B2B" v-model="answers[4].e_svar" />
          </div>
          <div>
            <label>B2C</label>
            <input type="radio" value="B2C" v-model="answers[4].e_svar" />
          </div>
        </div>

        <div class="btn-box">
          <button
            @click="(form4 = '50%'), (form5 = '1100px'), (progress = '60%')"
            class="btn black_bg"
            id="back4"
            type="button"
          >
            Back
          </button>
          <button
            @click="(form5 = '-1000px'), (form6 = '50%'), (progress = '100.7%')"
            class="btn black_bg"
            id="next5"
            type="button"
            :disabled="answers[4].e_svar === null"
            :style="answers[4].e_svar === null && disabled"
          >
            Next
          </button>
        </div>
      </form>
      <!-- //////////////////////////// -->
      <!-- //////////////////////////// -->
      <!-- //////////////////////////// -->

      <form :style="{ left: form6 }" id="form6">
        <h3>{{ answers[5].f }}</h3>
        <div class="answer__container">
          <input
            type="text"
            value="B2B"
            v-model="answers[5].f_namn"
            placeholder="Förnamn"
          />
          <input
            type="text"
            value="B2C"
            v-model="answers[5].e_namn"
            placeholder="Efternamn"
          />
          <input
            type="text"
            value="B2C"
            v-model="answers[5].tel"
            placeholder="Telefon"
          />
          <input
            type="text"
            value="B2C"
            v-model="answers[5].email"
            placeholder="E-mail"
          />
        </div>

        <div class="btn-box">
          <button
            @click="(form5 = '50%'), (form6 = '1100px'), (progress = '120px')"
            class="btn black_bg"
            id="back5"
            type="button"
          >
            Back
          </button>
          <button
            class="btn black_bg"
            id="next6"
            type="submit"
            :disabled="answers[5].f_svar === null"
            :style="answers[5].f_svar === null && disabled"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
    <div v-for="answer in answers" :key="answer.id">
      <p>{{ answer }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Questions",
  data() {
    return {
      answers: [
        // States
        {
          a: "Har du en e-handel idag?",
          a_svar: null,
        },

        {
          b: "Vilka kunder riktar du dig mot?",
          b_svar: null,
        },

        {
          c:
            "Vilken bransch tillhör ditt företag? (Vallista eller liknande för ett gäng branscher + övrigt)",
          c_svar: null,
        },

        {
          d: "Använder ni något affärssystem? (Samma som ovan)",
          d_svar: "",
          d_text: "",
        },

        {
          e: "Vill ni rikta er mot befintliga eller nya kunder?",
          e_svar: "",
        },

        {
          f: "Kontakt uppgifter?",
          f_namn: "",
          e_namn: "",
          tel: "",
          email: "",
        },
      ],

      form1: "",
      form2: "",
      form3: "",
      form4: "",
      form5: "",
      form6: "",
      progress: "",

      // When btn is disabled
      disableInputText: false,
      disabled: {
        backgroundColor: "#dddddd",
        cursor: "context-menu",
      },
    };
  },

  methods: {
    disabledInput: function () {
      if (this.answers[3].d_svar === null || this.answers[3].d_svar === "nej") {
        this.disableInputText = true;
      } else {
        this.disableInputText = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.questions {
  margin: 0;
  padding: 0;
  max-width: 800px;
  border: 1px solid;
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
    line-height: 20px;
  }

  form {
    // width: 700px;
    overflow-y: auto;
    width: 70%;
    margin: 0 auto;
    height: 300px;
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: 0.5s ease;
    overflow-y: auto;
    border: 1px solid blue;
    display: flex;
    flex-direction: column;
    align-items: center;

    .answer__container {
      border: 1px solid red;
      width: 50%;
      text-align: center;

      div {
        border: 1px solid;
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 10px;
        border: 1px solid blue;
      }
    }

    button {
      // width: 110px;
      // height: 35px;
      // margin: 0 10px;
      // border-radius: 30px;
      // border: 1px solid red;
      margin: 5px;
      outline: none;
      // color: #fff;
      cursor: pointer;
    }

    input {
      // width: 100%;
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

  #form2,
  #form3,
  #form4,
  #form5,
  #form6 {
    left: 1100px;
  }

  .step-row {
    // width: 360px;
    // width: 700px;
    width: 100%;
    border: 1px solid red;
    height: 40px;
    margin: 0 auto;
    display: flex;
    // align-items: center;
    justify-content: flex-start;
    box-shadow: 0 -1px 5px -1px #000;
    position: relative;

    .step-col {
      // width: 120px;
      width: 100%;
      // text-align: center;
      color: #333;
      position: relative;
      border: 1px solid green;
    }

    #progress {
      position: absolute;
      height: 100%;
      width: 16.7%;
      text-align: left;

      // background: linear-gradient(to right, #ff105f, #ffad06);
      background-color: gray;
      transition: 1s ease;

      &::after {
        // content: "";
        // height: 0;
        // width: 0;
        // border-top: 20px solid transparent;
        // border-bottom: 20px solid transparent;
        // position: absolute;
        // right: -20px;
        // top: 0;
        // border-left: 20px solid #ffad06;
      }
    }
  }
}
</style>
