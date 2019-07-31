<template lang="pug">
  .container-fluid.vh-100
    .row.h-100
      .col-4.h-100.d-flex.flex-column
        label Job description:
        .d-flex.align-items-stretch.h-100
          textarea.form-control.mb-2.h-100.overflow-auto
        .py-2
          button.btn.btn-outline-primary.float-right
            fa(icon="chevron-right")
            |
            | Quote selected
      .col-8.h-100
        .h-50
          Dictionary.h-100
        .row.h-50
          Cards.col-6.h-100
          .col-6.h-100.d-flex.flex-column
            label Result:
            .d-flex.align-items-stretch.h-100
              textarea.form-control.mb-2.h-100.overflow-auto(:value="result")
            .py-2
              button.btn.btn-outline-primary.float-right
                fa(:icon="['far', 'copy']")
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
@import '~bootswatch/dist/sandstone/variables';
@import '~bootstrap/scss/bootstrap';
@import '~bootswatch/dist/sandstone/bootswatch';
</style>
