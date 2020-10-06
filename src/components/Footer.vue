<template>
  <footer>
    <div class="footer__container">
      <div class="box__container">
        <div class="box1">
          <h1>NXT - Ett intelligentare system</h1>
          <p class="p">Utvecklat av Exakta Software - En del av Exakta Group</p>
          <h2>Besökadress</h2>
          <div>
            <p>Bäckhagsvägen 11</p>
            <p>281 33 Hässleholm</p>
          </div>
          <div class="btn__container">
            <a href="#" class="btn white_bg">Kontakta oss</a>
          </div>
        </div>

        <hr class="showHR" />

        <div class="box2">
          <div class="left">
            <a class="h2__style" href="#">E-handelslösningar</a>
            <div>
              <a href="#">B2B</a>
              <a href="#">B2C</a>
              <a href="#">B2B & B2C</a>
              <a href="#">Detta ingår</a>
            </div>
            <div>
              <a class="h2__style" href="#">Kunder</a>
              <a class="a" href="#">Kundcase</a>
            </div>
            <div>
              <a class="h2__style" href="#">Kontakt</a>
              <a href="#">Boka demo</a>
            </div>
          </div>

          <div class="right">
            <a class="h2__style" href="#">Tjänster</a>
            <div>
              <a href="#">Webhotell</a>
              <a href="#">Underhåll</a>
              <a href="#">Service- och driftavtal</a>
            </div>
            <a class="h2__style m-top" href="#">Partners</a>
            <div>
              <a href="#">Betalsätt</a>
              <a href="#">Affärssystem</a>
            </div>
          </div>
        </div>
      </div>

      <hr />
      <a class="copyright" href="https://www.exaktasoftware.se/"
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