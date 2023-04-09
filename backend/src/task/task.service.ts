import { Injectable } from '@nestjs/common'
import { Task } from './models/task.model'

@Injectable()
export class TaskService {
  tasks: Task[] = []

  getTasks(): Task[] {
    const task1 = new Task()

    task1.id = 1
    task1.name = 'Task 1'
    task1.duDate = '2023-04-09'
    task1.status = 'NOT_STATED'
    task1.description = 'Task 1 description'

    this.tasks.push(task1)

    return this.tasks
  }
}
