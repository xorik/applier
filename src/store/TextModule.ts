import { Module, Mutation, VuexModule } from 'vuex-module-decorators'
import { Category, Text } from './CategoryModule'

export interface TextBlock {
  content: string
  categoryId?: number
  categoryTitle?: string
  textId?: number
  textTitle?: string
}

interface AddTextDto {
  content: string
  category?: Category
  text?: Text
}

interface SetContentDto {
  content: string
  index: number
}

@Module({ name: 'TextModule', namespaced: true })
export class TextModule extends VuexModule {
  public blocks: TextBlock[] = []

  get result(): string {
    return this.blocks
      .map((block: TextBlock): string => block.content)
      .join('\n\n')
  }

  @Mutation
  public addText({ content, text, category }: AddTextDto): void {
    if (category && text) {
      this.blocks.push({
        content,
        categoryId: category.id,
        categoryTitle: category.title,
        textId: text.id,
        textTitle: text.title,
      })
    } else {
      this.blocks.push({
        content,
      })
    }
  }

  @Mutation
  public setContent({ content, index }: SetContentDto): void {
    this.blocks[index].content = content
  }

  @Mutation
  public deleteBlock(index: number): void {
    this.blocks.splice(index, 1)
  }
}
