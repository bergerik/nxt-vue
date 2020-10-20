<template>
  <div class="question__container">
    <div class="step-row">
      <div :style="{ width: progressBarWidth + '%' }" id="progress"></div>
      <div class="step-col">
        <strong>{{ currentStep }}</strong>
      </div>
    </div>

    <div class="questions">
      <form
        v-for="(question, index) in questions"
        :style="{
          left: calculatedStepPosition(index + 1),
          visibility: currentStep == index + 1 ? 'visible' : 'hidden',
        }"
        id="form1"
        :key="index"
      >
        <div>
          <h3>{{ question.question }}</h3>
        </div>
        <div class="answer__container" v-if="question.options">
          <div
            v-for="(option, optionIndex) in question.options"
            :key="optionIndex"
          >
            <p>{{ optionIndex }}</p>

            <div class="optionInput">
              <label :for="'option-' + optionIndex + index">{{ option }}</label>
              <input
                :id="'option-' + optionIndex + index"
                type="radio"
                v-bind:value="option"
                v-model="question.answer"
              />
            </div>
            <div class="step4__input" v-if="questionCondition(question)">
              <input
                type="text"
                v-model="question.text"
                placeholder="Vilket?"
              />
            </div>
          </div>
        </div>

        <div class="btn-box">
          <button
            @click="goToPreviousStep"
            class="btn black_bg"
            id="back1"
            type="button"
            v-if="currentStep > 1"
          >
            Tillbaka
          </button>
          <button
            :disabled="question.answer === null"
            class="btn black_bg"
            :style="question.answer === null && disabled"
            @click="goToNextStep()"
            type="button"
            v-if="currentStep < totalSteps"
          >
            Nästa
          </button>
        </div>
      </form>

      <form
        :style="{
          left: calculatedStepPosition(totalSteps),
          visibility: currentStep == totalSteps ? 'visible' : 'hidden',
        }"
        id="form6"
      >
        <div>
          <h3>Kontakt uppgifter</h3>
        </div>
        <div class="answer__container">
          <div>
            <input
              type="text"
              v-model="user.name"
              placeholder="Namn"
              minlength="3"
              :style="invalidName && invalid"
            />
            <p v-if="invalidName" style="color: red">Invalid name</p>

            <input
              type="text"
              v-model="user.company_name"
              placeholder="Företagsnamn"
              minlength="2"
            />

            <input
              type="text"
              v-model="user.phone"
              placeholder="Telefon"
              minlength="3"
              :style="invalidPhoneNum && invalid"
            />
            <p v-if="invalidPhoneNum" style="color: red">
              Invalid phone number
            </p>

            <input
              type="text"
              v-model="user.email"
              placeholder="E-mail"
              :style="invalidEmail && invalid"
            />
            <p v-if="invalidEmail" style="color: red">Invalid email</p>
          </div>
        </div>

        <div class="btn-box">
          <button
            @click="goToPreviousStep"
            class="btn black_bg"
            id="back1"
            type="button"
            v-if="currentStep > 1"
          >
            Tillbaka
          </button>
          <button class="btn black_bg" type="button">Slutför</button>
        </div>
      </form>

      <!-- //////////////////////////////////// -->
    </div>
  </div>
</template>

<script>
import axios from "axios";
//import Check from "./Check";

export default {
  name: "Questions",
  components: {
    //Check,
  },
  data() {
    return {
      currentStep: 1,
      user: {
        name: "",
        email: "",
        phone: "",
        company_name: "",
      },
      questions: [
        // States
        {
          question: "Har du en e-handel idag?",
          options: ["Ja", "Nej"],
          answer: null,
        },

        {
          question: "Vilka kunder riktar du dig mot?",
          options: ["B2B", "B2C", "B2B & B2C"],
          answer: null,
        },

        {
          question:
            "Vilken bransch tillhör ditt företag? (Vallista eller liknande för ett gäng branscher + övrigt)",
          options: [
            "E-handel",
            "Serviceverksamheter och tjänster",
            "Kultur, nöje och fritid",
            "Butiksverksamhet",
            "Fastighetsverksamhet",
            "Kommunikation och marknadsföring",
            "Jordbruk, skogsbruk och fiske",
            "Energiförsörjning; miljöverksamhet",
            "Tillverkning och utvinning",
            "Byggverksamhet",
            "Annat",
          ],
          answer: null,
        },

        {
          question: "Använder ni något affärssystem?",
          options: ["Ja", "Nej"],
          condition: {
            Ja: "text",
          },
          answer: null,
        },

        {
          question: "Vill ni rikta er mot befintliga eller nya kunder?",
          options: [
            "Nya kunder",
            "Befintliga kunder",
            "Nya & Befintliga kunder",
          ],
          answer: null,
        },
      ],

      // validation var for styling input field  (true/false)
      invalidEmail: false,
      invalidName: false,
      invalidPhoneNum: false,

      // Styling for invalid input
      invalid: {
        border: "1px solid red",
      },

      // When btn is disabled
      disableInputText: false,
      disableSubmitBtn: false,
      disabled: {
        backgroundColor: "#dddddd",
        cursor: "context-menu",
      },
    };
  },

  computed: {
    totalSteps: function () {
      return this.questions.length + 1;
    },

    progressBarWidth: function () {
      const stepSize = 100 / this.totalSteps;
      return stepSize * this.currentStep;
    },
  },

  created() {
    axios("http://localhost/exaktaProjekt/nxt-vue/server/server.php");
  },

  mounted() {
    this.disableSubmit();
  },

  updated() {
    this.disableSubmit();
  },

  methods: {
    questionCondition: function (question) {
      return question.condition && question.condition[question.answer];
    },

    goToStep: function (step) {
      if (step >= 1 && step <= this.totalSteps) {
        this.currentStep = step;
      }
    },

    goToPreviousStep: function () {
      this.goToStep(this.currentStep - 1);
    },

    goToNextStep: function () {
      this.goToStep(this.currentStep + 1);
    },

    calculatedStepPosition: function (step) {
      if (step == this.currentStep) {
        return "50%";
      }

      if (step < this.currentStep) {
        return "-100%";
      }

      if (step > this.currentStep) {
        return "200%";
      }
    },
    disabledInput: function () {
      if (
        this.questions[3].reply === null ||
        this.questions[3].reply === "nej"
      ) {
        this.disableInputText = true;
      } else {
        this.disableInputText = false;
      }
    },

    disableSubmit: function () {
      // const namn = this.questions[5].f_namn;
      // const foretagsnamn = this.questions[5].f_foretagsnamn;
      // const tel = this.questions[5].f_tel;
      // const email = this.questions[5].f_email;
      // if (
      //   namn === null ||
      //   namn === "" ||
      //   namn.length < 3 ||
      //   foretagsnamn === null ||
      //   foretagsnamn === "" ||
      //   foretagsnamn.length < 3 ||
      //   tel === null ||
      //   tel === "" ||
      //   tel.length < 3 ||
      //   email === null ||
      //   email === "" ||
      //   email.length < 3
      // ) {
      //   this.disableSubmitBtn = true;
      // } else {
      //   this.disableSubmitBtn = false;
      // }
    },

    sendData: function () {
      const user = this.user;
      let validEmail = /^([A-Z\d.-]+)@([A-Z\d-]+)\.([A-Z]{2,8})(\.[A-Z]{2,8})?$/i.test(
        user.email
      );

      let validPhoneNumber = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s./0-9]*$/i.test(
        user.phone
      );

      let validName = /^([a-zA-Z ]){2,30}$/i.test(user.name);

      this.invalidEmail = false;
      this.invalidName = false;
      this.invalidPhoneNum = false;

      if (validEmail && validPhoneNumber && validName) {
        axios
          .post(
            "http://localhost/exaktaProjekt/nxt-vue/server/server.php",
            {
              body: this.questions,
              // body: JSON.stringify(this.answers),
            }
            // { headers: { "Content-Type": "application/json" } }
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

    #form1 {
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

          // .step4__ja {
          //   transform: translateY(12px);
          // }

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
