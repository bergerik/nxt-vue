<template>
  <div class="question__container">
    <div class="step-row">
      <div :style="{ width: progressBarWidth + '%' }" id="progress"></div>
      <div class="step-col">
        <strong>{{ currentStep }} / {{ totalSteps }} </strong>
      </div>
    </div>

    <div class="questions">
      <form
        v-for="(question, index) in questions"
        :style="{
          left: calculatedStepPosition(index + 1),
          visibility: currentStep == index + 1 ? 'visible' : 'hidden',
        }"
        :key="index"
        @submit.prevent=""
      >
        <div>
          <h3>{{ question.question }}</h3>
        </div>
        <div class="question-container" v-if="question.options">
          <div
            v-for="(option, optionIndex) in question.options"
            :key="optionIndex"
            class="question-option"
          >
            <div class="question-option-radio">
              <label :for="'option-' + optionIndex + index">{{ option }}</label>
              <input
                :id="'option-' + optionIndex + index"
                type="radio"
                v-bind:value="option"
                v-model="question.answer"
              />
            </div>
            <div
              class="question-option-input"
              v-if="questionCondition(question, option)"
            >
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
            type="button"
            v-if="currentStep > 1"
          >
            Tillbaka
          </button>
          <button
            :disabled="!hasAnswer(question)"
            :class="[
              'btn black_bg',
              { 'disabled-input': !hasAnswer(question) },
            ]"
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
        <Check />
        <div>
          <h3>Kontakt uppgifter</h3>
        </div>
        <div class="question-container">
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
            type="button"
            v-if="currentStep > 1"
          >
            Tillbaka
          </button>
          <button
            type="submit"
            :disabled="disableSubmitBtn"
            :class="['btn black_bg', { 'disabled-input': disableSubmitBtn }]"
            @click.prevent="sendData"
          >
            Slutför
          </button>
        </div>
      </form>

      <!-- //////////////////////////////////// -->
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
      currentStep: 1,

      user: {
        name: null,
        email: null,
        phone: null,
        company_name: null,
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
          textConditions: ["Ja"],
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
    questionCondition: function (question, compareTo) {
      const conditions = question.textConditions || [];
      return (
        conditions.includes(question.answer) && question.answer == compareTo
      );
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

    hasAnswer: function (question) {
      return question.answer !== null;
    },

    disableSubmit: function () {
      const namn = this.user.name;
      const company_name = this.user.company_name;
      const phone = this.user.phone;
      const email = this.user.email;
      if (
        namn === null ||
        namn === "" ||
        namn.length < 3 ||
        company_name === null ||
        company_name === "" ||
        company_name.length < 3 ||
        phone === null ||
        phone === "" ||
        phone.length < 3 ||
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
              questions: this.questions,
              user: this.user,
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

    form {
      display: flex;
      flex-direction: column;
      align-items: center;

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

      .question-container {
        width: 70%;
        height: 300px;
        overflow-y: auto;
        display: flex;
        flex-direction: column;

        &::-webkit-scrollbar {
          background-color: #fff;
          width: 0px;
        }

        .question-option {
          flex: 0.25 0 auto;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
      }

      .question-option-radio {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        margin-top: 30px;
        text-align: left;

        label {
          flex: 0.7;
          font-size: 25px;
          cursor: pointer;
        }

        input[type="radio"] {
          flex: 0.3;
        }
      }

      .question-option-input {
        input[type="text"] {
          width: 100%;
          transform: translateY(20px);
          font-size: 18px;
          padding: 10px 20px;
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

    #form6 {
      height: 100%;

      input {
        padding: 19px;
        font-size: 18px;
      }

      .question-container {
        width: 100%;
        height: 100%;

        div {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          width: 100%;
          height: 100%;
        }
      }
    }

    .disabled-input {
      background: #ddd;
      cursor: context-menu;

      &:hover {
        background: #ddd;
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

  @media (max-width: 700px) {
    h3 {
      font-size: 35px !important;
      line-height: 40px !important;
    }
  }

  @media (max-width: 550px) {
    .question-container {
      width: 85% !important;
    }
    h3 {
      font-size: 30px !important;
      line-height: 30px !important;
    }

    label {
      font-size: 22px !important;
    }
  }

  #form6 {
    width: 95%;
  }

  @media (max-width: 426px) {
    #form6 div {
      justify-content: space-evenly !important;
    }

    .question-option-radio label {
      flex: 0.8 !important;
    }

    label {
      font-size: 19.7px !important;
    }

    .btn {
      font-size: 12px;
      padding: 10px 25px;
    }

    ::placeholder {
      font-size: 16px;
    }
  }

  @media (max-width: 400px) {
    strong {
      font-size: 20px;
    }

    h3 {
      font-size: 22px !important;
      line-height: 24px !important;
    }

    #form6 input {
      padding: 10px !important;
      font-size: 16px !important;
    }
  }

  @media (max-width: 310px) {
    .question-option-radio {
      label {
        flex: 1.5 !important;
        font-size: 16px !important;
      }
    }
  }
}
</style>
