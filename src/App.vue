<template lang="pug">
  .container.vh-100
    .row.h-50
      .col-6.h-75
        Dictionary.h-100
      .col-6.h-75
        .row.h-100
          .col-12.h-100
            label Job description:
            .h-75
              textarea.form-control.mb-2.h-100.overflow-auto
          .col-12
            button.btn.btn-primary.float-right
              fa(icon="chevron-right")
              |
              | Quote selected
    .row.h-50
      Cards.col-6.h-100
      .col-6.h-75
        .row.h-100
          .col-12.h-100
            label Result:
            .h-75
              textarea.form-control.mb-2.h-100.overflow-auto(:value="result")
          .col-12
            button.btn.btn-primary.float-right
              fa(icon="copy")
              |
              | Copy text
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Dictionary from '@/components/Dictionary.vue'
import Cards from '@/components/Cards.vue'
import { textModule } from '@/store'

@Component({
  components: { Cards, Dictionary },
})
export default class App extends Vue {
  get result(): string {
    return textModule.result
  }
}
</script>

<style lang="scss">
@import '~bootswatch/dist/lumen/variables';
@import '~bootstrap/scss/bootstrap';
@import '~bootswatch/dist/lumen/bootswatch';
</style>
