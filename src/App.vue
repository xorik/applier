<template lang="pug">
  .container
    h3 yo!!
    button.btn.btn-primary
      fa(icon="plus")
      |
      | Plus
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class App extends Vue {}
</script>

<style lang="scss">
@import '~bootstrap/scss/bootstrap';
</style>
