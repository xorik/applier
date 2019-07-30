<template lang="pug">
  .card.mb-2(:class="{'border-info': block.status == 'new', 'border-warning ': block.status == 'modified'}")
    .card-header.py-1.px-2
      fa.mr-1.text-muted(icon="sort")
      span(v-if="block.categoryTitle") {{ block.categoryTitle }} - {{ block.textTitle }}
      .float-right
        a.text-success(v-if="block.status!== 'saved'" href @click.prevent="save")
          fa.mr-1(icon="check")
        a.text-muted(@click="remove")
          fa(icon="times")
    .card-body
      textarea-autosize.form-control(v-model="text" ref="text" rows="1")
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
    if (this.block.content !== text) {
      this.$emit('update', text)
    }
  }
  public mounted(): void {
    // @ts-ignore
    this.$refs.text.$el.focus()
  }

  public remove(): void {
    this.$emit('remove')
  }
}
</script>
