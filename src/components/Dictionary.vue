<template lang="pug">
  .d-flex.flex-column
    .row.d-flex.align-items-stretch.h-100
      .col-6.h-100.d-flex.flex-column
        label Category:
        SortableList(:items="categories" :current-id="currentCategory" @select="selectCategory")
      .col-6.h-100.d-flex.flex-column
        label Text:
        SortableList(:items="texts" @select="selectText")
    .py-2
      button.btn.btn-outline-primary(@click="addCategory")
        fa(icon="plus")
        |
        | Add category
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import SortableList from './SortableList.vue'
import { categoryModule, textModule } from '@/store'
import { Category, Text } from '@/store/CategoryModule'

@Component({
  components: { SortableList },
})
export default class Dictionary extends Vue {
  get categories(): Category[] {
    return categoryModule.categories
  }

  get texts(): Text[] {
    return categoryModule.currentTexts
  }

  get currentCategory(): number | null {
    return categoryModule.currentCategoryId
  }

  public addCategory(): void {
    const title = prompt('Enter new category:')
    if (title !== '' && title !== null) {
      categoryModule.addCategory(title)
    }
  }

  public selectCategory(category: Category): void {
    categoryModule.setCurrentCategory(category.id)
  }

  public selectText(text: Text): void {
    textModule.addText({
      content: text.text,
      category: categoryModule.currentCategory!,
      text,
    })
  }
}
</script>
