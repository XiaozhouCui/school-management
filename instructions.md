## Project Setup

- Run `nest new nestjs-graphql-mongodb`, select `npm` as package manager
- Install GraphQL dependencies `npm i graphql graphql-tools apollo-server-express @nestjs/graphql`
- Import GraphQLModule into _app.module.ts_

## Add Lesson module

- Run `nest g module lesson`
- Creaate _lesson.type.ts_ and add GQL types
- Create _lesson.resolver.ts_ and add a GraphQL-Query `lesson()`
- Import the lesson resolver into _lesson.module.ts_
