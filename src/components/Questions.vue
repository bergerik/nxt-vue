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
        <div>
          <label>Ja</label>
          <input type="radio" value="ja" v-model="answers[0].a_svar" />
          <label>Nej</label>
          <input type="radio" value="nej" v-model="answers[0].a_svar" />
        </div>

        <div class="btn-box">
          <button
            :disabled="answers[0].a_svar === null"
            class="btn black_bg"
            :style="answers[0].a_svar === null && disabled"
            @click="(form1 = '-450px'), (form2 = '40px'), (progress = '240px')"
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
        <div>
          <label>B2B</label>
          <input type="radio" value="B2B" v-model="answers[1].b_svar" />
          <label>B2C</label>
          <input type="radio" value="B2C" v-model="answers[1].b_svar" />
          <label>B2B & B2C</label>
          <input type="radio" value="B2B & B2C" v-model="answers[1].b_svar" />
        </div>

        <div class="btn-box">
          <button
            @click="(form1 = '40px'), (form2 = '450px'), (progress = '120px')"
            class="btn black_bg"
            id="back1"
            type="button"
          >
            Back
          </button>
          <button
            @click="(form2 = '-450px'), (form3 = '40px'), (progress = '360px')"
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
        <div>
          <label>exempel 1</label>
          <input type="radio" value="B2B" v-model="answers[2].c_svar" />
          <label>exempel 2</label>
          <input type="radio" value="B2C" v-model="answers[2].c_svar" />
          <label>exempel 3</label>
          <input type="radio" value="B2B & B2C" v-model="answers[2].c_svar" />
          <label>exempel 4</label>
          <input type="radio" value="B2B & B2C" v-model="answers[2].c_svar" />
          <label>exempel 5</label>
          <input type="radio" value="B2B & B2C" v-model="answers[2].c_svar" />
          <label>exempel 6</label>
          <input type="radio" value="B2B & B2C" v-model="answers[2].c_svar" />
          <label>exempel 7</label>
          <input type="radio" value="B2B & B2C" v-model="answers[2].c_svar" />
          <label>exempel 8</label>
          <input type="radio" value="B2B & B2C" v-model="answers[2].c_svar" />
          <label>exempel 9</label>
          <input type="radio" value="B2B & B2C" v-model="answers[2].c_svar" />
          <label>exempel 10</label>
          <input type="radio" value="B2B & B2C" v-model="answers[2].c_svar" />
        </div>

        <div class="btn-box">
          <button
            @click="(form3 = '40px'), (form3 = '450px'), (progress = '120px')"
            class="btn black_bg"
            id="back2"
            type="button"
          >
            Back
          </button>
          <button
            @click="(form3 = '-450px'), (form4 = '40px'), (progress = '360px')"
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
        <div>
          <label>Ja</label>
          <input type="radio" value="ja" v-model="answers[3].d_svar" />
          <input
            type="text"
            v-model="answers[3].d_text"
            placeholder="Vilket?"
          />
          <label>Nej</label>
          <input type="radio" value="nej" v-model="answers[3].d_svar" />
        </div>

        <div class="btn-box">
          <button
            @click="(form3 = '40px'), (form4 = '450px'), (progress = '120px')"
            class="btn black_bg"
            id="back3"
            type="button"
          >
            Back
          </button>
          <button
            @click="(form4 = '-450px'), (form5 = '40px'), (progress = '360px')"
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
        <div>
          <label>B2B</label>
          <input type="radio" value="B2B" v-model="answers[4].e_svar" />
          <label>B2C</label>
          <input type="radio" value="B2C" v-model="answers[4].e_svar" />
        </div>

        <div class="btn-box">
          <button
            @click="(form4 = '40px'), (form5 = '450px'), (progress = '120px')"
            class="btn black_bg"
            id="back4"
            type="button"
          >
            Back
          </button>
          <button
            @click="(form5 = '-450px'), (form6 = '40px'), (progress = '360px')"
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
        <div>
          <label>B2B</label>
          <input type="radio" value="B2B" v-model="answers[5].f_svar" />
          <label>B2C</label>
          <input type="radio" value="B2C" v-model="answers[5].f_svar" />
        </div>

        <div class="btn-box">
          <button
            @click="(form4 = '40px'), (form5 = '450px'), (progress = '120px')"
            class="btn black_bg"
            id="back5"
            type="button"
          >
            Back
          </button>
          <button
            @click="(form5 = '-450px'), (form6 = '40px'), (progress = '360px')"
            class="btn black_bg"
            id="next6"
            type="button"
            :disabled="answers[5].f_svar === null"
            :style="answers[5].f_svar === null && disabled"
          >
            Next
          </button>
        </div>
      </form>
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
        { a: "Har du en e-handel idag?", a_svar: null },

        { b: "Vilka kunder riktar du dig mot?", b_svar: null },

        {
          c:
            "Vilken bransch tillhör ditt företag? (Vallista eller liknande för ett gäng branscher + övrigt)",
          c_svar: "",
        },

        {
          d: "Använder ni något affärssystem? (Samma som ovan)",
          d_svar: "",
          d_text: "",
        },

        { e: "Vill ni rikta er mot befintliga eller nya kunder?", e_svar: "" },

        {
          f: "Vill ni rikta er mot befintliga eller nya kunder?",
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
      disabled: { backgroundColor: "#dddddd", cursor: "context-menu" },
    };
  },

  methods: {},
};
</script>

<style lang="scss" scoped>
.questions {
  margin: 0;
  padding: 0;
  max-width: 800px;
  border: 1px solid;
  height: 600px;
  margin: 8% auto;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  overflow: hidden;
  overflow-y: auto;

  h3 {
    text-align: center;
    margin-bottom: 40px;
    color: #777;
    font-size: 20px;
    line-height: 20px;
  }

  form {
    // width: 700px;
    width: 100%;
    position: absolute;
    top: 110px;
    left: 40px;
    transition: 0.5s ease;
    overflow-y: auto;

    button {
      // width: 110px;
      // height: 35px;
      // margin: 0 10px;
      // border-radius: 30px;
      // border: 1px solid red;
      outline: none;
      // color: #fff;
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

  #form2,
  #form3,
  #form4,
  #form5,
  #form6 {
    left: 800px;
  }

  .step-row {
    // width: 360px;
    width: 700px;
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
      border: 1px solid green;
    }

    #progress {
      position: absolute;
      height: 100%;
      width: 120px;
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