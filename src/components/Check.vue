<template>
  <div class="check__container">
    <div>
      <fa-icon icon="check-circle" class="check" />
      <h2>Bra!</h2>
    </div>
    <h5>NXT är för dig!</h5>
  </div>
</template>

<script>
export default {
  name: "Check",
};
</script>

<style lang="scss" scoped>
.check__container {
  margin: 0 auto 25px auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 0 auto;

  h5 {
    color: rgb(2, 54, 2);
    margin: 0;
    padding: 0;
    font-size: 30px;
    transform: translateY(-10px);
  }

  div {
    display: flex;
    align-items: center;
    .check {
      color: rgb(61, 155, 61);
      font-size: 35px;
      margin: 0 5px;
    }

    h2 {
      font-size: 35px;
      margin: 0 5px;
    }
  }
}
</style>