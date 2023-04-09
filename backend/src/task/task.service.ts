import { Injectable } from '@nestjs/common'
import { Task } from './models/task.model'
import { CreateTaskInput } from './dto/createTask.input'

@Injectable()
export class TaskService {
  tasks: Task[] = []

  getTasks(): Task[] {
    return this.tasks
  }

  createTask(createTaskInput: CreateTaskInput): Task {
    const { name, duDate, description } = createTaskInput
    const newTask = new Task()

    newTask.id = this.tasks.length + 1
    newTask.name = name
    newTask.duDate = duDate
    newTask.status = 'NOT_STATED'
    newTask.description = description

    this.tasks.push(newTask)

    return newTask
  }
}
