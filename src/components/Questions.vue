<template>
  <div class="questions">
    <form id="form1">
      <div>
        <h3>Create account</h3>
      </div>
      <input type="text" placeholder="Email" required />
      <input type="text" placeholder="Password" required />
      <input type="text" placeholder="confirm password" required />

      <div class="btn-box">
        <button id="next1" type="button">Next</button>
      </div>
    </form>
    <p>{{ number }}</p>
  </div>
</template>

<script>
export default {
  name: "Questions",
  data() {
    return {
      qNum: [],
      number: 1,
    };
  },

  methods: {
    add() {
      this.number += 1;
    },
  },
};
</script>

<style lang="scss" scoped>
.questions {
  margin: 0;
  padding: 0;
  border: 1px solid red;

  h3 {
    text-align: center;
    margin-bottom: 40px;
    color: #777;
    font-size: 20px;
    line-height: 5px;
  }
}
</style>