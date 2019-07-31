import { Module, Mutation, VuexModule } from 'vuex-module-decorators'
import { Category, Text } from './CategoryModule'

type BlockStatus = 'new' | 'saved' | 'modified'

export interface TextBlock {
  content: string
  status: BlockStatus
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

interface SaveDto {
  category: Category
  text: Text
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
        status: 'saved',
        categoryId: category.id,
        categoryTitle: category.title,
        textId: text.id,
        textTitle: text.title,
      })
    } else {
      this.blocks.push({
        content,
        status: 'new',
      })
    }
  }

  @Mutation
  public setContent({ content, index }: SetContentDto): void {
    const block = this.blocks[index]

    block.content = content
    if (block.categoryId) {
      block.status = 'modified'
    }
  }

  @Mutation
  public deleteBlock(index: number): void {
    this.blocks.splice(index, 1)
  }

  @Mutation
  public setSaved(index: number): void {
    this.blocks[index].status = 'saved'
  }

  @Mutation
  public save({ category, text, index }: SaveDto): void {
    const block = this.blocks[index]
    const data = {
      status: 'saved',
      categoryId: category.id,
      categoryTitle: category.title,
      textId: text.id,
      textTitle: text.title,
    }

    this.blocks[index] = Object.assign(block, data)
  }
}
