<template>
  <div>
    <Header />
    <Banner />
    <Questions />
    <Footer />
  </div>
</template>

<script>
import axios from "axios";

import Header from "./components/Header";
import Banner from "./components/Banner";
import Questions from "./components/Questions";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Header,
    Banner,
    Questions,
    Footer,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");
@font-face {
  font-family: font;
  src: url("./fontFamily/dd249adc-d304-4402-a800-a60c0dd08605.woff2");
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
hr {
  border: none;
  border-top: 1px solid #333333;
  margin-bottom: 30px;
}
h1,
h2,
h3,
h5,
p,
label,
strong {
  font-weight: 400;
  font-family: font;
}

h1 {
  font-size: 100px;
  line-height: 110px;
}

h2 {
  font-size: 75px;
  line-height: 82.5px;
}

h5 {
  font-size: 20px;
  line-height: 22px;
}

h3 {
  font-size: 45px;
  line-height: 49.5;
}

a,
p {
  font-family: "Open Sans";
}

a {
  text-decoration: none;
  font-size: 14px;
  line-height: 18px;
  color: #5e6364;
}
a:hover {
  text-decoration: underline;
  color: #f58220;
}

.btn {
  padding: 17px 35px;
  border-radius: 25px;
  background-color: #f58220;
  color: #ffffff;
  border: none;
  transition: background-color 0.3s ease-out;
}

.btn.black_bg:hover {
  background-color: #000000;
  color: #ffffff;
}

.btn.white_bg:hover {
  background-color: #ffffff;
  color: #000000;
}
</style>
