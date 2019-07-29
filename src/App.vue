<template lang="pug">
  .container.vh-100
    .row.h-50
      .col-6.h-75
        .row.h-100
          .col-6.h-100.d-flex.flex-column
            SortableList(title="Category:")
          .col-6.h-100.d-flex.flex-column
            SortableList(title="Text:")
          .col-12
            button.btn.btn-primary
              fa(icon="plus")
              |
              | Add category
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
      .col-6.h-100
        .card.mb-2
          .card-header.py-1
            fa.mr-1(icon="sort")
            | Category - Text
            .float-right
              fa.mr-1(icon="check")
              fa(icon="times")
          .card-body
            textarea-autosize.form-control(rows="1")
        button.btn.btn-primary
          fa(icon="plus")
          |
          | Add block
      .col-6.h-75
        .row.h-100
          .col-12.h-100
            label Result:
            .h-75
              textarea.form-control.mb-2.h-100.overflow-auto
          .col-12
            button.btn.btn-primary.float-right
              fa(icon="copy")
              |
              | Copy text
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import SortableList from '@/components/SortableList.vue'

@Component({
  components: { SortableList },
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import '~bootswatch/dist/lumen/variables';
@import '~bootstrap/scss/bootstrap';
@import '~bootswatch/dist/lumen/bootswatch';
</style>
