import { Module, Mutation, VuexModule } from 'vuex-module-decorators'

export interface Text {
  id: number
  title: string
  text: string
}

export interface Category {
  id: number
  title: string
  texts: Text[]
}

const getNextId = (items: Array<{ id: number }>): number => {
  if (items.length === 0) {
    return 1
  }

  return Math.max(...items.map((v: { id: number }): number => v.id)) + 1
}

@Module({ name: 'CategoryModule', namespaced: true })
export class CategoryModule extends VuexModule {
  public categories: Category[] = [
    {
      id: 1,
      title: 'Demo',
      texts: [
        {
          id: 1,
          title: 'Demo',
          text: 'Hello world',
        },
      ],
    },
  ]

  public currentCategoryId: number | null = null

  get currentCategory(): Category | null {
    if (this.currentCategoryId === null) {
      return null
    }

    return this.categories.find(
      (category: Category): boolean => category.id === this.currentCategoryId,
    )!
  }

  get currentTexts(): Text[] {
    if (this.currentCategoryId === null) {
      return []
    }

    return this.currentCategory!.texts
  }

  @Mutation
  public addCategory(title: string): void {
    this.categories.push({
      id: getNextId(this.categories),
      title,
      texts: [],
    })
  }

  @Mutation
  public setCurrentCategory(currentCategoryId: number): void {
    this.currentCategoryId = currentCategoryId
  }
}
