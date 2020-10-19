<form :style="{ left: form2, visibility: showForm2 }" id="form2">
        <h3>{{ questions[1].question }}</h3>
        <div class="answer__container">
          <div>
            <label for="B2B">B2B</label>
            <input
              id="B2B"
              type="radio"
              value="B2B"
              v-model="questions[1].reply"
            />
          </div>
          <div>
            <label for="B2C">B2C</label>
            <input
              id="B2C"
              type="radio"
              value="B2C"
              v-model="questions[1].reply"
            />
          </div>
          <div>
            <label for="B2B & B2C">B2B & B2C</label>
            <input
              id="B2B & B2C"
              type="radio"
              value="B2B & B2C"
              v-model="questions[1].reply"
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
            :disabled="questions[1].reply === null"
            :style="questions[1].reply === null && disabled"
          >
            Nästa
          </button>
        </div>
      </form>
      <!-- //////////////////////////////////// -->

      <form :style="{ left: form3, visibility: showForm3 }" id="form3">
        <h3>{{ questions[2].question }}</h3>
        <div class="answer__container">
          <div>
            <label for="1">E-handel</label>
            <input
              id="1"
              type="radio"
              value="E-handel"
              v-model="questions[2].reply"
            />
          </div>
          <div>
            <label for="2">Serviceverksamheter och tjänster</label>
            <input
              id="2"
              type="radio"
              value="Serviceverksamheter och tjänster"
              v-model="questions[2].reply"
            />
          </div>
          <div>
            <label for="3">Kultur, nöje och fritid</label>
            <input
              id="3"
              type="radio"
              value="Kultur, nöje och fritid"
              v-model="questions[2].reply"
            />
          </div>
          <div>
            <label for="4">Butiksverksamhet</label>
            <input
              id="4"
              type="radio"
              value="Butiksverksamhet"
              v-model="questions[2].reply"
            />
          </div>
          <div>
            <label for="5">Fastighetsverksamhet</label>
            <input
              id="5"
              type="radio"
              value="Fastighetsverksamhet"
              v-model="questions[2].reply"
            />
          </div>
          <div>
            <label for="6">Kommunikation och marknadsföring</label>
            <input
              id="6"
              type="radio"
              value="Kommunikation och marknadsföring"
              v-model="questions[2].reply"
            />
          </div>
          <div>
            <label for="7">Jordbruk, skogsbruk och fiske</label>
            <input
              id="7"
              type="radio"
              value="Jordbruk, skogsbruk och fiske"
              v-model="questions[2].reply"
            />
          </div>
          <div>
            <label for="8">Energiförsörjning; miljöverksamhet</label>
            <input
              id="8"
              type="radio"
              value="Energiförsörjning; miljöverksamhet"
              v-model="questions[2].reply"
            />
          </div>
          <div>
            <label for="9">Tillverkning och utvinning</label>
            <input
              id="9"
              type="radio"
              value="Tillverkning och utvinning"
              v-model="questions[2].reply"
            />
          </div>
          <div>
            <label for="10">Byggverksamhet</label>
            <input
              id="10"
              type="radio"
              value="Byggverksamhet"
              v-model="questions[2].reply"
            />
          </div>
          <div>
            <label for="11">Annat</label>
            <input
              id="11"
              type="radio"
              value="Annat"
              v-model="questions[2].reply"
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
            :disabled="questions[2].reply === null"
            :style="questions[2].reply === null && disabled"
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
        <h3>{{ questions[3].question }}</h3>
        <div class="answer__container">
          <div class="inputText__container">
            <div class="step4__ja">
              <label for="jaa">Ja</label>
              <input
                id="jaa"
                type="radio"
                value="ja"
                v-model="questions[3].reply"
              />
            </div>
            <div
              class="step4__input"
              :style="
                questions[3].reply === null || questions[3].reply === 'nej'
                  ? { display: 'none' }
                  : { display: 'block' }
              "
            >
              <input
                type="text"
                v-model="questions[3].d_text"
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
              v-model="questions[3].reply"
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
                questions[3].reply === 'nej' ? (questions[3].d_text = '') : null
            "
            class="btn black_bg"
            id="next4"
            type="button"
            :disabled="questions[3].reply === null"
            :style="questions[3].reply === null && disabled"
          >
            Nästa
          </button>
        </div>
      </form>
      <!-- //////////////////////////////////// -->

      <form :style="{ left: form5, visibility: showForm5 }" id="form5">
        <h3>{{ questions[4].question }}</h3>
        <div class="answer__container">
          <div>
            <label for="nya">Nya kunder</label>
            <input
              id="nya"
              type="radio"
              value="Nya kunder"
              v-model="questions[4].reply"
            />
          </div>
          <div>
            <label for="befintliga">Befintliga kunder</label>
            <input
              id="befintliga"
              type="radio"
              value="Befintliga kunder"
              v-model="questions[4].reply"
            />
          </div>
          <div>
            <label for="nya & befintliga">Nya & Befintliga kunder</label>
            <input
              id="nya & befintliga"
              type="radio"
              value="Nya & Befintliga"
              v-model="questions[4].reply"
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
            :disabled="questions[4].reply === null"
            :style="questions[4].reply === null && disabled"
          >
            Nästa
          </button>
        </div>
      </form>
      <!-- //////////////////////////////////// -->

      <form :style="{ left: form6, visibility: showForm6 }" id="form6">
        <Check />
        <h3>Uppgifter</h3>
        <div class="answer__container">
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
          <p v-if="invalidPhoneNum" style="color: red">Invalid phone number</p>

          <input
            type="text"
            v-model="user.email"
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
