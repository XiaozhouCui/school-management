## Project Setup

- Run `nest new nestjs-graphql-mongodb`, select `npm` as package manager
- Install GraphQL dependencies `npm i graphql graphql-tools apollo-server-express @nestjs/graphql`
- Import GraphQLModule into _app.module.ts_

## Add Lesson module

- Run `nest g module lesson`
- Creaate _lesson.type.ts_ and add GQL types
- Create _lesson.resolver.ts_ and add a GraphQL-Query `lesson()`
- Import the lesson resolver into _lesson.module.ts_
- You can start the project by entering `npm start`

## Connect to database: TypeORM, MongoDB and Lesson Entity

- Install dependencies: `npm i typeorm @nestjs/typeorm mongodb @types/mongodb`
- With TypeORM and @types/mongodb, we can work with mongodb using TypeScript
- Import TypeOrmModule into _app.module.ts_
- Use `TypeOrmModule.forRoot({...})` to connect to mongodb from _app.module.ts_
- Add TypeORM Entity class _lesson.entity.ts_, make sure mongo ID `_id` is included
- In _app.module.ts_, add Lesson entity to the `entities` array inside `TypeOrmModule.forRoot({...})`
