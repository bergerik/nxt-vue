<template>
  <div>
    <h1>Exempel :)</h1>
  </div>
</template>

<script>
export default {
  name: "Banner",
};
</script>

<style lang="scss" scoped>
div {
  width: 100%;
  height: 250px;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://nxte.se/uploads/thumbnails/02b15c2eaa01b33119396991773025bf6ae69ea9_1920x500.jpg")
      no-repeat center center / cover;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: calc(50px + 50 * (100vw - 320px) / 704);
    color: #fff;
    line-height: 1.1;
  }
}

@media (max-width: 480px) {
  div {
    height: 180px;
  }
}

@media (max-width: 320px) {
  div {
    height: 150px;
  }
}
</style>