<template lang="pug">
  draggable.list-group.list-group-flush.border.rounded.overflow-auto.mb-2(handle=".fa-sort" ghost-class="list-group-item-dark")
    .list-group-item.list-group-item-action.py-1.px-2(
      v-for="item in items"
      :key="item.id"
      :class="{active: currentId === item.id}"
      @click.prevent="select(item)"
    )
      fa.mr-1.text-muted(icon="sort")
      .float-right
        fa(icon="times")
      | {{item.title}}
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { Category, Text } from '@/store/CategoryModule'

@Component
export default class SortableList extends Vue {
  @Prop({
    required: true,
  })
  public items!: Array<Category | Text>

  @Prop({
    required: false,
    default: null,
  })
  public currentId!: number | null

  public select(item: Category | Text): void {
    this.$emit('select', item)
  }
}
</script>
