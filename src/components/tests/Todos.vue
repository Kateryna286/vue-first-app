<template>
    <li>{{ title }}
      <button v-on:click="$emit('remove')">Удалить</button>
    </li>
</template>

<script>
export default {
    name: "todoItem",
    props: ['title']
}

</script>

<style lang="scss" scoped></style>
