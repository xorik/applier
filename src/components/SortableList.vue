<template lang="pug">
  div
    label {{ title }}
    .list-group.overflow-auto.mb-2
      .list-group-item.list-group-item-action.py-1
        fa.mr-1(icon="sort")
        .float-right
          fa(icon="times")
        | First
      .list-group-item.list-group-item-action.py-1
        fa.mr-1(icon="sort")
        .float-right
          fa(icon="times")
        | First
      .list-group-item.list-group-item-action.py-1
        fa.mr-1(icon="sort")
        .float-right
          fa(icon="times")
        | First
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class SortableList extends Vue {
  @Prop({ required: true })
  public title!: string
}
</script>
