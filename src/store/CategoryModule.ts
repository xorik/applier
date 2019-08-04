import { Module, Mutation, VuexModule } from 'vuex-module-decorators'
import { getNextId, findById } from './utils'

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

interface UpdateTextDto {
  categoryId: number
  textId: number
  text: string
}

interface SaveTextDto {
  title: string
  text: string
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

  public lastTextId = 1

  get currentCategory(): Category | null {
    if (this.currentCategoryId === null) {
      return null
    }

    return findById(this.categories, this.currentCategoryId)!
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

  @Mutation
  public removeCategory(categoryId: number): void {
    const index = this.categories.findIndex(
      (v: Category): boolean => v.id === categoryId,
    )
    this.categories.splice(index, 1)
    if (this.currentCategoryId === categoryId) {
      this.currentCategoryId = null
    }
  }

  @Mutation
  public updateText({ categoryId, textId, text }: UpdateTextDto): void {
    const foundCategory = findById(this.categories, categoryId)!
    const foundText = findById(foundCategory.texts, textId)!

    foundText.text = text
  }

  @Mutation
  public removeText(textId: number): void {
    const currentCategory = findById(this.categories, this.currentCategoryId!)!
    const index = currentCategory.texts.findIndex(
      (v: Text): boolean => v.id === textId,
    )

    currentCategory.texts.splice(index, 1)
  }

  @Mutation
  public saveText({ title, text }: SaveTextDto): void {
    const currentCategory = findById(this.categories, this.currentCategoryId!)!

    this.lastTextId = this.lastTextId + 1
    currentCategory!.texts.push({
      id: this.lastTextId,
      title,
      text,
    })
  }
}
