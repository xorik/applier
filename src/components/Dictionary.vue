<template lang="pug">
  .row.h-100
    .col-6.h-100.d-flex.flex-column
      label Category:
      SortableList(:items="categories" :current-id="currentCategory" @select="selectCategory")
    .col-6.h-100.d-flex.flex-column
      label Text:
      SortableList(:items="texts")
    .col-12
      button.btn.btn-primary(@click="addCategory")
        fa(icon="plus")
        |
        | Add category
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import SortableList from './SortableList.vue'
import { categoryModule } from '@/store'
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

  public selectCategory(id: number): void {
    categoryModule.setCurrentCategory(id)
  }
}
</script>
