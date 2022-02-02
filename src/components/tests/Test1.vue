<template>
  <div id="app">
      <span v-bind:title="messageKu" v-if="seen">Ku!</span>
    {{ message }}
  </div>
</template>

<script>
export default {
  name: "Test1",
  data() {
    return {
      message: "Hello Vue!",
      messageKu: "Ku!",
      seen: false
    };
  },
};
</script>

<style lang="scss" scoped></style>
