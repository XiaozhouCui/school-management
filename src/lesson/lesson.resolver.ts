import { Query, Resolver } from '@nestjs/graphql';
import { LessonType } from './lesson.type';

// this resolver is of type LessonType
@Resolver((of) => LessonType)
export class LessonResolver {
  // gql-query or gql-mutation
  // with @Query decorator, lesson() function is now a gql query, returning type LessonType
  @Query((returns) => LessonType)
  lesson() {
    return {
      id: 'as7dfpiu5e1q',
      name: 'Physics Class',
      startDate: new Date().toISOString(),
      endDate: new Date().toISOString(),
    };
  }
}
