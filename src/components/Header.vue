<template>
  <header>
    <div class="img__container">
      <img src="../assets/NXT_ny_logo_ingen_Payoff.png" alt="nxt logo" />
    </div>
    <nav>
      <ul>
        <!-- <li>
          <a href="https://nxte.se/e-handelslosningar">E-handelslösningar</a>
        </li>
        <li><a href="#">Tjänster</a></li>
        <li><a href="https://nxte.se/kunder">Kunder</a></li>
        <li><a href="https://nxte.se/partners">Partners</a></li>
        <li><a href="https://nxte.se/kontakt">Kontakt</a></li> -->
        <li>
          <a class="btn black_bg" href="https://nxte.se/boka-demo">Boka demo</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
header {
  height: 120px;
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-around;

  .img__container {
    max-height: 60px;
    flex: 0.2;

    img {
      max-width: 120px;
      height: 100%;
      object-fit: contain;
      margin-left: 20px;
    }
  }

  nav {
    flex: 0.7;
    ul {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      list-style: none;

      a {
        margin-right: 30px;
      }
    }
  }

  @media (max-width: 950px) {
    li {
      display: none;
    }
    li:last-child {
      display: block;
    }
  }

  @media (max-width: 435px) {
    .btn {
      padding: 10px 25px;
    }
  }

  @media (max-width: 330px) {
    .btn {
      padding: 5px 8px;
      font-size: 12px;
    }

    img {
      width: 90px;
    }
  }
}
</style>