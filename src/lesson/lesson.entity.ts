import { Column, Entity, ObjectIdColumn, PrimaryColumn } from 'typeorm';

// this is the entity class for database
// entity class is also a Repository?

@Entity()
export class Lesson {
  // mongodb is No-SQL, but we still use the @Column decorators
  @ObjectIdColumn()
  _id: string; // mongo ID

  @PrimaryColumn()
  id: string; // lesson ID (PK)

  @Column()
  name: string;

  @Column()
  startDate: string;

  @Column()
  endDate: string;
}
