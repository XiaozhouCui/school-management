import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Lesson } from './lesson.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class LessonService {
  constructor(
    // Lesson entity is also a repository?
    @InjectRepository(Lesson) private lessonRepository: Repository<Lesson>,
  ) {}

  async createLesson(name, startDate, endDate): Promise<Lesson> {
    // create lesson object with TypeORM
    const lesson = this.lessonRepository.create({
      id: uuid(), // generate public ID with uuid
      name,
      startDate,
      endDate,
    });
    // save the new lesson object to MongoDB, return a promise
    return this.lessonRepository.save(lesson);
  }
}
