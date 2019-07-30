<template lang="pug">
  .card.mb-2
    .card-header.py-1.px-2
      fa.mr-1.text-muted(icon="sort")
      span(v-if="block.categoryTitle") {{ block.categoryTitle }} - {{ block.textTitle }}
      .float-right
        fa.mr-1(icon="check")
        a(href @click.prevent="remove")
          fa(icon="times")
    .card-body
      textarea-autosize.form-control(v-model="text" rows="1")
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { TextBlock } from '@/store/TextModule'

@Component
export default class Card extends Vue {
  @Prop({
    required: true,
  })
  public block!: TextBlock

  get text(): string {
    return this.block.content
  }

  set text(text: string) {
    this.$emit('update', text)
  }

  public remove(): void {
    this.$emit('remove')
  }
}
</script>
