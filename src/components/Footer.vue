<template>
  <footer>
    <div class="footer__container">
      <div class="box__container">
        <div class="box1">
          <h1>NXT - Ett intelligentare system</h1>
          <p class="p">Utvecklat av Exakta Software - En del av Exakta Group</p>
          <p class="p">
            Exakta ES Sweden AB <br />
            556782-2233
          </p>
          <h2>Besökadress</h2>
          <div>
            <p>Bäckhagsvägen 11</p>
            <p>281 33 Hässleholm</p>
          </div>
          <div class="btn__container">
            <a
              href="https://nxte.se/kontakt"
              class="btn white_bg"
              @click="clearRadioBtns"
              >Kontakta oss</a
            >
          </div>
        </div>

        <hr class="showHR" />

        <div class="box2">
          <div class="left">
            <a
              class="h2__style"
              href="https://nxte.se/e-handelslosningar"
              @click="clearRadioBtns"
              >E-handelslösningar</a
            >
            <div>
              <a href="https://nxte.se/b2b" @click="clearRadioBtns">B2B</a>
              <a href="https://nxte.se/b2c" @click="clearRadioBtns">B2C</a>
              <a href="https://nxte.se/b2b-b2c" @click="clearRadioBtns"
                >B2B & B2C</a
              >
              <a href="https://nxte.se/detta-ingar" @click="clearRadioBtns"
                >Detta ingår</a
              >
            </div>
            <div>
              <a
                class="h2__style"
                href="https://nxte.se/kunder"
                @click="clearRadioBtns"
                >Kunder</a
              >
            </div>
            <div>
              <a
                class="h2__style"
                href="https://nxte.se/kontakt"
                @click="clearRadioBtns"
                >Kontakt</a
              >
              <a href="https://nxte.se/boka-demo" @click="clearRadioBtns"
                >Boka demo</a
              >
            </div>
          </div>

          <div class="right">
            <a
              class="h2__style"
              href="https://nxte.se/partners"
              @click="clearRadioBtns"
              >Partners</a
            >
            <div>
              <a href="https://nxte.se/fraktsatt" @click="clearRadioBtns"
                >Fraktsätt</a
              >
              <a
                href="https://nxte.se/forsaljningskanaler"
                @click="clearRadioBtns"
                >Försäljningskanaler</a
              >
              <a href="https://nxte.se/betalsatt" @click="clearRadioBtns"
                >Betalsätt</a
              >
              <a href="https://nxte.se/affarsystem" @click="clearRadioBtns"
                >Affärsystem</a
              >
            </div>
            <a
              class="h2__style m-top"
              href="https://nxte.se/om-oss"
              @click="clearRadioBtns"
              >Om oss</a
            >
            <!-- <div>
              <a href="https://nxte.se/betalsatt">Betalsätt</a>
              <a href="https://nxte.se/affarsystem">Affärssystem</a>
            </div> -->
          </div>
        </div>
      </div>

      <hr />
      <a
        class="copyright"
        href="https://www.exaktasoftware.se/"
        @click="clearRadioBtns"
        >@ Copyright 2019 Exakta Software - En del av Exakta Group</a
      >
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {};
  },

  methods: {
    clearRadioBtns() {
      let radio = document.querySelectorAll('input[type="radio"]');

      for (let allradioBtns of radio) {
        allradioBtns.checked = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
footer {
  background-color: #000000;
  border: 1px solid #000000;
  text-align: center;

  .showHR {
    display: none;
  }

  h1,
  h2,
  .h2__style {
    line-height: 22px;
    margin-bottom: 10px;
  }

  .m-top {
    margin-top: 20px;
  }

  h1 {
    font-size: 30px;
    line-height: 22px;
    height: 28px;
  }
  h2,
  .h2__style {
    font-size: 20px;
    line-height: 22px;
  }

  div,
  .p {
    margin-bottom: 20px;
  }

  a,
  p {
    font-size: 14px;
    line-height: 21px;
  }
  .a {
    margin-bottom: 10px;
  }

  .copyright {
    font-size: 14px;
    color: #7d8283;

    &:hover {
      color: #f58220;
    }
  }

  .p {
    margin: 20px 0;
  }

  .footer__container {
    max-width: 1142px;
    color: #fff;
    padding: 40px;
    padding-bottom: 60px;
    margin: 0 auto;

    .box__container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 20px;
      margin: 30px 0 60px 0;
      text-align: left;

      .box1,
      .box2 {
        > div {
          display: flex;
          flex-direction: column;
        }
      }

      .box1 .btn__container {
        display: inline-flex;
        .btn {
          display: flex;
          align-items: center;
        }
      }

      .box2 {
        display: flex;
        justify-content: space-around;

        a {
          color: #7d8283;
        }

        .h2__style {
          color: #fff;
          text-decoration: none;
        }

        a:hover,
        .h2__style:hover {
          color: #f58220;
        }

        .left,
        .right {
          div {
            display: flex;
            flex-direction: column;
          }
        }
      }
    }
  }

  @media (max-width: 800px) {
    .footer__container {
      .showHR {
        display: block;
        margin: 10px 0 40px 0;
      }
      .box__container {
        text-align: center;
        display: flex;
        flex-direction: column;

        h1 {
          font-size: calc(20px + 10 * (100vw - 320px) / 704);
        }
      }
    }

    @media (max-width: 500px) {
      .footer__container {
        .box__container {
          .box2 {
            display: flex;
            flex-direction: column;
          }
        }
      }
    }
  }
}
</style>