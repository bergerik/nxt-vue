<template>
  <div class="question__container">
    <div class="step-row">
      <div :style="{ width: progress }" id="progress"></div>
      <div class="step-col"><strong>Step 1</strong></div>
      <div class="step-col"><strong>Step 2</strong></div>
      <div class="step-col"><strong>Step 3</strong></div>
      <div class="step-col"><strong>Step 4</strong></div>
      <div class="step-col"><strong>Step 5</strong></div>
      <div class="step-col"><strong>Step 6</strong></div>
    </div>

    <div class="questions">
      <form :style="{ left: form1, visibility: showForm1 }" id="form1">
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
            @click="
              (form1 = '-1000px'),
                (form2 = '50%'),
                (progress = '33.7%'),
                (showForm1 = 'hidden'),
                (showForm2 = 'visible')
            "
            type="button"
          >
            Next
          </button>
        </div>
      </form>
      <!-- //////////////////////////////////// -->

      <form :style="{ left: form2, visibility: showForm2 }" id="form2">
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
            @click="
              (form1 = '50%'),
                (form2 = '1100px'),
                (progress = '16.7%'),
                (showForm1 = 'visible'),
                (showForm2 = 'hidden')
            "
            class="btn black_bg"
            id="back1"
            type="button"
          >
            Back
          </button>
          <button
            @click="
              (form2 = '-1000px'),
                (form3 = '50%'),
                (progress = '49.7%'),
                (showForm2 = 'hidden'),
                (showForm3 = 'visible')
            "
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
      <!-- /////////////////////////// -->

      <form :style="{ left: form3, visibility: showForm3 }" id="form3">
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
            @click="
              (form2 = '50%'),
                (form3 = '1100px'),
                (progress = '33.7%'),
                (showForm2 = 'visible'),
                (showForm3 = 'hidden')
            "
            class="btn black_bg"
            id="back2"
            type="button"
          >
            Back
          </button>
          <button
            @click="
              (form3 = '-1000px'),
                (form4 = '50%'),
                (progress = '66.7%'),
                (showForm3 = 'hidden'),
                (showForm4 = 'visible')
            "
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

      <form
        :style="{ left: form4, visibility: showForm4 }"
        id="form4"
        @submit.prevent
      >
        <h3>{{ answers[3].d }}</h3>
        <div class="answer__container">
          <div class="inputText__container">
            <div class="step4__ja">
              <label>Ja</label>
              <input type="radio" value="ja" v-model="answers[3].d_svar" />
            </div>
            <div
              class="step4__input"
              :style="
                answers[3].d_svar === null || answers[3].d_svar === 'nej'
                  ? { display: 'none' }
                  : { display: 'block' }
              "
            >
              <input
                type="text"
                v-model="answers[3].d_text"
                placeholder="Vilket?"
              />
            </div>
          </div>
          <div class="step4__nej">
            <label>Nej</label>
            <input type="radio" value="nej" v-model="answers[3].d_svar" />
          </div>
        </div>

        <div class="btn-box">
          <button
            @click="
              (form3 = '50%'),
                (form4 = '1100px'),
                (progress = '49.7%'),
                (showForm3 = 'visible'),
                (showForm4 = 'hidden')
            "
            class="btn black_bg"
            id="back3"
            type="button"
          >
            Back
          </button>
          <button
            @click="
              (form4 = '-1000px'),
                (form5 = '50%'),
                (progress = '83.7%'),
                (showForm4 = 'hidden'),
                (showForm5 = 'visible'),
                answers[3].d_svar === 'nej' ? (answers[3].d_text = '') : null
            "
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

      <form :style="{ left: form5, visibility: showForm5 }" id="form5">
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
            @click="
              (form4 = '50%'),
                (form5 = '1100px'),
                (progress = '66.7%'),
                (showForm4 = 'visible'),
                (showForm5 = 'hidden')
            "
            class="btn black_bg"
            id="back4"
            type="button"
          >
            Back
          </button>
          <button
            @click="
              (form5 = '-1000px'),
                (form6 = '50%'),
                (progress = '100.7%'),
                (showForm5 = 'hidden'),
                (showForm6 = 'visible')
            "
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

      <form :style="{ left: form6, visibility: showForm6 }" id="form6">
        <Check />
        <h3>{{ answers[5].f }}</h3>
        <div class="answer__container">
          <input
            type="text"
            v-model="answers[5].f_namn"
            placeholder="Namn"
            minlength="3"
            :style="invalidName && invalid"
          />
          <p v-if="invalidName" style="color: red">Invalid name</p>

          <input
            type="text"
            v-model="answers[5].f_foretagsnamn"
            placeholder="Företagsnamn"
            minlength="2"
          />

          <input
            type="text"
            v-model="answers[5].f_tel"
            placeholder="Telefon"
            minlength="3"
            :style="invalidPhoneNum && invalid"
          />
          <p v-if="invalidPhoneNum" style="color: red">Invalid phone number</p>

          <input
            type="text"
            v-model="answers[5].f_email"
            placeholder="E-mail"
            :style="invalidEmail && invalid"
          />
          <p v-if="invalidEmail" style="color: red">Invalid email</p>
        </div>

        <div class="btn-box">
          <button
            @click="
              (form5 = '50%'),
                (form6 = '1100px'),
                (progress = '83.7%'),
                (showForm5 = 'visible'),
                (showForm6 = 'hidden')
            "
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
            :disabled="disableSubmitBtn"
            :style="disableSubmitBtn && disabled"
            @click.prevent="sendData"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Check from "./Check";

export default {
  name: "Questions",
  components: {
    Check,
  },
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
          d_svar: null,
          d_text: "",
        },

        {
          e: "Vill ni rikta er mot befintliga eller nya kunder?",
          e_svar: null,
        },

        {
          f: "Kontakt uppgifter?",
          f_namn: null,
          f_foretagsnamn: null,
          f_tel: null,
          f_email: null,
        },
      ],

      form1: "",
      form2: "",
      form3: "",
      form4: "",
      form5: "",
      form6: "",
      progress: "",

      // Visibility: hidden; for element!, when i click then show the element
      showForm1: "visible",
      showForm2: "hidden",
      showForm3: "hidden",
      showForm4: "hidden",
      showForm5: "hidden",
      showForm6: "hidden",

      // validation var for styling input field  (true/false)
      invalidEmail: false,
      invalidName: false,
      invalidPhoneNum: false,

      // Styling for invalid input
      invalid: { border: "1px solid red" },

      // When btn is disabled
      disableInputText: false,
      disableSubmitBtn: false,
      disabled: {
        backgroundColor: "#dddddd",
        cursor: "context-menu",
      },
    };
  },

  mounted() {
    this.disableSubmit();
  },

  updated() {
    this.disableSubmit();
  },

  methods: {
    disabledInput: function () {
      if (this.answers[3].d_svar === null || this.answers[3].d_svar === "nej") {
        this.disableInputText = true;
      } else {
        this.disableInputText = false;
      }
    },

    disableSubmit: function () {
      const namn = this.answers[5].f_namn;
      const foretagsnamn = this.answers[5].f_foretagsnamn;
      const tel = this.answers[5].f_tel;
      const email = this.answers[5].f_email;

      if (
        namn === null ||
        namn === "" ||
        namn.length < 3 ||
        foretagsnamn === null ||
        foretagsnamn === "" ||
        foretagsnamn.length < 3 ||
        tel === null ||
        tel === "" ||
        tel.length < 3 ||
        email === null ||
        email === "" ||
        email.length < 3
      ) {
        this.disableSubmitBtn = true;
        console.log("input empty");
      } else {
        this.disableSubmitBtn = false;
        console.log("input is not empty");
      }
    },

    sendData: function () {
      const answer = this.answers[5];
      let validEmail = /^([A-Z\d.-]+)@([A-Z\d-]+)\.([A-Z]{2,8})(\.[A-Z]{2,8})?$/i.test(
        answer.f_email
      );

      let validPhoneNumber = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s./0-9]*$/i.test(
        answer.f_tel
      );

      let validName = /^([a-zA-Z ]){2,30}$/i.test(answer.f_namn);

      this.invalidEmail = false;
      this.invalidName = false;
      this.invalidPhoneNum = false;

      if (validEmail && validPhoneNumber && validName) {
        axios
          .post(
            "https://jsonplaceholder.typicode.com/posts",
            {
              body: this.answers,
            },
            { headers: { "Content-Type": "application/json" } }
          )
          .then((res) => {
            console.log(res);
            this.$swal({
              icon: "success",
              title: "Svin Bra!",
              text: "Dina uppgifter har blivit skickade",
              confirmButtonText: "Fortsätt",
            }).then(() => {
              window.location.replace("https://nxte.se/");
            });
          })
          .catch((err) => {
            console.log(err);
            this.$swal({
              icon: "error",
              title: "Oj då!",
              text: "Något gick fel :(",
              type: "warning",
              confirmButtonText: "Försök igen",
              showCloseButton: true,
            });
          });
      } else {
        if (!validEmail) this.invalidEmail = true;
        if (!validName) this.invalidName = true;
        if (!validPhoneNumber) this.invalidPhoneNum = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.question__container {
  border: 1px solid blue;
  overflow: hidden;

  .questions {
    margin: 0;
    padding: 0;
    max-width: 800px;
    height: 500px;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 5px;
    position: relative;
    overflow: hidden;

    label {
      font-size: 25px;
    }

    h3 {
      text-align: center;
      margin-bottom: 40px;
      color: #777;
      font-size: 40px;
      line-height: 40px;
    }

    #form6 input {
      padding: 19px;
      font-size: 18px;
    }

    form {
      overflow-y: auto;
      width: 75%;
      margin: 0 auto;
      height: 420px;
      padding: 10px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      transition: 0.5s ease;
      display: flex;
      flex-direction: column;
      align-items: center;

      &::-webkit-scrollbar {
        background-color: #fff;
      }

      .answer__container {
        width: 50%;
        text-align: center;

        input[type="text"] {
          width: 100%;
          padding: 10px;
        }

        div {
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          padding: 15px 0;

          label {
            flex: 0.5;
          }
        }

        .inputText__container {
          .step4__ja,
          .step4__input,
          .step4__nej {
            border: none;
          }
          .step4__ja {
            transform: translateY(12px);
          }
          display: flex;
          flex-direction: column;

          div {
            display: flex;
            width: 100%;

            input[type="text"] {
              font-size: 18px;
              transform: translateY(20px);
              width: 100%;
              padding: 10px 20px;
            }
          }
        }
      }

      button {
        margin: 5px;
        outline: none;
        cursor: pointer;
      }

      input {
        padding: 10px 5px;
        border: 0;
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

    @media (max-width: 370px) {
      .btn {
        font-size: 12px;
        padding: 10px 25px;
      }

      ::placeholder {
        font-size: 12px;
      }
    }
  }

  .step-row {
    width: 100%;
    height: 70px;
    margin: 0 auto;
    display: flex;
    justify-content: flex-start;
    box-shadow: 0 -1px 5px -1px #000;
    position: relative;

    .step-col {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      color: #333;
      position: relative;
      font-size: 25px;
    }

    #progress {
      position: absolute;
      height: 100%;
      width: 16.7%;
      text-align: left;
      background: linear-gradient(to right, #df4276, #f58220);
      transition: 1s ease;

      &::after {
        content: "";
        height: 0;
        width: 0;
        border-top: 35px solid transparent;
        border-bottom: 35px solid transparent;
        position: absolute;
        right: -25px;
        top: 0;
        border-left: 25px solid #f58220;
      }
    }
  }
}
</style>
