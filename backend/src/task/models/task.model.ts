import { Field, ObjectType, Int } from '@nestjs/graphql'

@ObjectType()
export class Task {
  @Field(() => Int)
  id: number

  @Field()
  name: string

  @Field()
  duDate: string

  @Field()
  status: 'NOT_STATED' | 'IN_PROGRESS' | 'COMPLETED'

  @Field({ nullable: true })
  description: string
}
