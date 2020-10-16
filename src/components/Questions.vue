<template>
  <div class="question__container">
    <div class="step-row">
      <div :style="{ width: progress }" id="progress"></div>
      <div class="step-col">
        <strong>{{ step }}</strong>
      </div>
    </div>

    <div class="questions">
      <form :style="{ left: form1, visibility: showForm1 }" id="form1">
        <div>
          <h3>{{ answers[0].a }}</h3>
        </div>
        <div class="answer__container">
          <div>
            <label for="ja">Ja</label>
            <input
              id="ja"
              type="radio"
              value="ja"
              v-model="answers[0].a_svar"
            />
          </div>
          <div>
            <label for="nej">Nej</label>
            <input
              id="nej"
              type="radio"
              value="nej"
              v-model="answers[0].a_svar"
            />
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
            Nästa
          </button>
        </div>
      </form>
      <!-- //////////////////////////////////// -->

      <form :style="{ left: form2, visibility: showForm2 }" id="form2">
        <h3>{{ answers[1].b }}</h3>
        <div class="answer__container">
          <div>
            <label for="B2B">B2B</label>
            <input
              id="B2B"
              type="radio"
              value="B2B"
              v-model="answers[1].b_svar"
            />
          </div>
          <div>
            <label for="B2C">B2C</label>
            <input
              id="B2C"
              type="radio"
              value="B2C"
              v-model="answers[1].b_svar"
            />
          </div>
          <div>
            <label for="B2B & B2C">B2B & B2C</label>
            <input
              id="B2B & B2C"
              type="radio"
              value="B2B & B2C"
              v-model="answers[1].b_svar"
            />
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
            Tillbaka
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
            Nästa
          </button>
        </div>
      </form>
      <!-- //////////////////////////////////// -->

      <form :style="{ left: form3, visibility: showForm3 }" id="form3">
        <h3>{{ answers[2].c }}</h3>
        <div class="answer__container">
          <div>
            <label for="1">E-handel</label>
            <input
              id="1"
              type="radio"
              value="E-handel"
              v-model="answers[2].c_svar"
            />
          </div>
          <div>
            <label for="2">Serviceverksamheter och tjänster</label>
            <input
              id="2"
              type="radio"
              value="Serviceverksamheter och tjänster"
              v-model="answers[2].c_svar"
            />
          </div>
          <div>
            <label for="3">Kultur, nöje och fritid</label>
            <input
              id="3"
              type="radio"
              value="Kultur, nöje och fritid"
              v-model="answers[2].c_svar"
            />
          </div>
          <div>
            <label for="4">Butiksverksamhet</label>
            <input
              id="4"
              type="radio"
              value="Butiksverksamhet"
              v-model="answers[2].c_svar"
            />
          </div>
          <div>
            <label for="5">Fastighetsverksamhet</label>
            <input
              id="5"
              type="radio"
              value="Fastighetsverksamhet"
              v-model="answers[2].c_svar"
            />
          </div>
          <div>
            <label for="6">Kommunikation och marknadsföring</label>
            <input
              id="6"
              type="radio"
              value="Kommunikation och marknadsföring"
              v-model="answers[2].c_svar"
            />
          </div>
          <div>
            <label for="7">Jordbruk, skogsbruk och fiske</label>
            <input
              id="7"
              type="radio"
              value="Jordbruk, skogsbruk och fiske"
              v-model="answers[2].c_svar"
            />
          </div>
          <div>
            <label for="8">Energiförsörjning; miljöverksamhet</label>
            <input
              id="8"
              type="radio"
              value="Energiförsörjning; miljöverksamhet"
              v-model="answers[2].c_svar"
            />
          </div>
          <div>
            <label for="9">Tillverkning och utvinning</label>
            <input
              id="9"
              type="radio"
              value="Tillverkning och utvinning"
              v-model="answers[2].c_svar"
            />
          </div>
          <div>
            <label for="10">Byggverksamhet</label>
            <input
              id="10"
              type="radio"
              value="Byggverksamhet"
              v-model="answers[2].c_svar"
            />
          </div>
          <div>
            <label for="11">Annat</label>
            <input
              id="11"
              type="radio"
              value="Annat"
              v-model="answers[2].c_svar"
            />
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
            Tillbaka
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
            Nästa
          </button>
        </div>
      </form>

      <!-- //////////////////////////////////// -->

      <form
        :style="{ left: form4, visibility: showForm4 }"
        id="form4"
        @submit.prevent
      >
        <h3>{{ answers[3].d }}</h3>
        <div class="answer__container">
          <div class="inputText__container">
            <div class="step4__ja">
              <label for="jaa">Ja</label>
              <input
                id="jaa"
                type="radio"
                value="ja"
                v-model="answers[3].d_svar"
              />
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
            <label for="neej">Nej</label>
            <input
              id="neej"
              type="radio"
              value="nej"
              v-model="answers[3].d_svar"
            />
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
            Tillbaka
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
            Nästa
          </button>
        </div>
      </form>
      <!-- //////////////////////////////////// -->

      <form :style="{ left: form5, visibility: showForm5 }" id="form5">
        <h3>{{ answers[4].e }}</h3>
        <div class="answer__container">
          <div>
            <label for="nya">Nya kunder</label>
            <input
              id="nya"
              type="radio"
              value="Nya kunder"
              v-model="answers[4].e_svar"
            />
          </div>
          <div>
            <label for="befintliga">Befintliga kunder</label>
            <input
              id="befintliga"
              type="radio"
              value="Befintliga kunder"
              v-model="answers[4].e_svar"
            />
          </div>
          <div>
            <label for="nya & befintliga">Nya & Befintliga kunder</label>
            <input
              id="nya & befintliga"
              type="radio"
              value="Nya & Befintliga"
              v-model="answers[4].e_svar"
            />
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
            Tillbaka
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
            Nästa
          </button>
        </div>
      </form>
      <!-- //////////////////////////////////// -->

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
            Tillbaka
          </button>
          <button
            class="btn black_bg"
            id="next6"
            type="submit"
            :disabled="disableSubmitBtn"
            :style="disableSubmitBtn && disabled"
            @click.prevent="sendData"
          >
            Slutför
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
          d: "Använder ni något affärssystem?",
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

      // Current url
      currentUrl: "http://localhost:8080/",

      form1: "",
      form2: "",
      form3: "",
      form4: "",
      form5: "",
      form6: "",
      progress: "",

      // show step
      step: "1/6",

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

    if (this.progress === "16.7%") {
      this.step = "1/6";
    } else if (this.progress === "33.7%") {
      this.step = "2/6";
    } else if (this.progress === "49.7%") {
      this.step = "3/6";
    } else if (this.progress === "66.7%") {
      this.step = "4/6";
    } else if (this.progress === "83.7%") {
      this.step = "5/6";
    } else if (this.progress === "100.7%") {
      this.step = "6/6";
    }
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
      } else {
        this.disableSubmitBtn = false;
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
  overflow: hidden;

  .questions {
    padding: 0;
    max-width: 800px;
    height: 600px;
    margin: 10px auto;
    background-color: #fff;
    border-radius: 5px;
    position: relative;
    overflow: hidden;

    label {
      font-size: 25px;
      cursor: pointer;
    }

    input[type="radio"] {
      cursor: pointer;
    }

    h3 {
      text-align: center;
      margin-bottom: 40px;
      color: #777;
      font-size: 40px;
      line-height: 43px;
    }

    #form6 {
      height: 100%;
      input {
        padding: 19px;
        font-size: 18px;
      }
      .answer__container {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        width: 100%;
        height: 100%;
      }
    }

    #form3 {
      .answer__container {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
      }
    }

    form {
      overflow-y: auto;
      width: 80%;
      margin: 0 auto;
      height: 500px;
      padding: 10px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      transition: 0.5s ease;
      display: flex;
      flex-direction: column;
      align-items: center;

      .answer__container {
        width: 70%;
        height: 300px;
        overflow-y: auto;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;

        &::-webkit-scrollbar {
          background-color: #fff;
          width: 0px;
        }

        input[type="text"] {
          width: 100%;
          padding: 10px;
        }

        div {
          width: 100%;
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          padding: 12px 0;
          margin-top: 30px;
          text-align: left;

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
            margin-top: 0;
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
        margin-top: 10px;
        text-align: center;
      }
    }

    #form2,
    #form3,
    #form4,
    #form5,
    #form6 {
      left: 1200px;
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

  @media (max-width: 550px) {
    .questions {
      h3 {
        font-size: 30px;
        line-height: 30px;
      }

      label {
        font-size: 22px;
      }
    }

    #form6 {
      width: 95%;
    }
  }

  @media (max-width: 426px) {
    .answer__container {
      label {
        flex: 0.8 !important;
      }
    }
  }

  @media (max-width: 400px) {
    strong {
      font-size: 20px;
    }

    .questions {
      h3 {
        font-size: 22px;
        line-height: 24px;
      }
    }

    #form6 input {
      padding: 10px !important;
      font-size: 16px !important;
    }
  }

  @media (max-width: 300px) {
    strong {
      font-size: 16px;
    }

    .questions {
      label {
        font-size: 18px;
      }
    }
  }
}
</style>
