<template>
    <div id="app-2">
  <span v-bind:title="message">
    Наведи на меня курсор на пару секунд,
    чтобы увидеть динамически связанное значение title!
  </span>
</div>
</template>

<script>
    export default {
        name: "Test2",
        data() {
            return {
                message: 'Вы загрузили эту страницу: ' + new Date().toLocaleString()
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>