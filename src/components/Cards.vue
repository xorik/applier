<template lang="pug">
  draggable(handle=".fa-sort" ghost-class="bg-secondary")
    Card(v-for="(block, index) in blocks" :block="block" :key="index" @update="update($event, index)" @remove="remove(index)")
    button.btn.btn-primary(@click="add")
      fa(icon="plus")
      |
      | Add block
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Card from '@/components/Card.vue'
import { TextBlock } from '@/store/TextModule'
import { textModule } from '@/store'

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
}
</script>
