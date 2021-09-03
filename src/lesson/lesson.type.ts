import { Field, ID, ObjectType } from '@nestjs/graphql';

// GraphQL type is needed for resolver

@ObjectType('Lesson')
export class LessonType {
  // id is of type "graphql ID"
  @Field((type) => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  startDate: string;

  @Field()
  endDate: string;
}
