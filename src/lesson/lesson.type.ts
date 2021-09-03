import { Field, ID, ObjectType } from '@nestjs/graphql';

// this class is a GraphQL type (only used for gql resolver), NOT a TypeORM entity class

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
