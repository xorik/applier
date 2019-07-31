<template lang="pug">
  .d-flex.flex-column
    .d-flex.align-items-stretch.overflow-auto.mh-100
      draggable.w-100(handle=".fa-sort" ghost-class="bg-secondary")
        Card(
          v-for="(block, index) in blocks"
          :block="block"
          :key="index"
          @update="update($event, index)"
          @remove="remove(index)"
          @save="save(block, index)"
        )
    .pb-2
      button.btn.btn-primary(@click="add")
        fa(icon="plus")
        |
        | Add block
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Card from '@/components/Card.vue'
import { TextBlock } from '@/store/TextModule'
import { categoryModule, textModule } from '@/store'
import { findById } from '@/store/utils'

@Component({
  components: { Card },
})
export default class Cards extends Vue {
  get blocks(): TextBlock[] {
    return textModule.blocks
  }

  public update(text: string, index: number): void {
    textModule.setContent({
      content: text,
      index,
    })
  }

  public add(): void {
    textModule.addText({ content: '' })
  }

  public remove(index: number): void {
    textModule.deleteBlock(index)
  }

  public save(block: TextBlock, index: number): void {
    if (block.status === 'modified') {
      const message = `Overwrite text for ${block.categoryTitle} - ${block.textTitle}?`
      if (!confirm(message)) {
        return
      }

      categoryModule.updateText({
        categoryId: block.categoryId!,
        textId: block.textId!,
        text: block.content,
      })
      textModule.setSaved(index)
    } else if (block.status === 'new') {
      if (categoryModule.currentCategoryId === null) {
        return
      }

      const title = prompt('Enter title:')

      if (title !== '' && title !== null) {
        categoryModule.saveText({
          text: block.content,
          title,
        })

        const text = findById(
          categoryModule.currentTexts,
          categoryModule.lastTextId,
        )!

        textModule.save({
          category: categoryModule.currentCategory!,
          text,
          index,
        })
      }
    }
  }
}
</script>
