import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lesson } from './lesson.entity';
import { LessonResolver } from './lesson.resolver';
import { LessonService } from './lesson.service';

@Module({
  // import TypeOrmModule: allow us to inject repository to other components
  imports: [
    // forFeature(): sub modules; forRoot(): app module
    TypeOrmModule.forFeature([Lesson]),
  ],
  providers: [LessonResolver, LessonService],
})
export class LessonModule {}
