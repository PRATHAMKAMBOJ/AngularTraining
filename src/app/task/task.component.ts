import { Component, Input, input } from '@angular/core';
import { TasksComponent } from './tasks/tasks.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { newTask } from './new-task/new-task.model';
import { TasksService } from './task.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [TasksComponent,NewTaskComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  // why this is not working ?
    //id: input.required<string> = {value:'test'}; 
    @Input({required: true}) userId!:string;
    @Input({required: true}) name!:string;
    isAddingTask = false;

    constructor(private tasksService: TasksService){}
    tasks =[
      {
        id: 't1',
        userId: 'u1',
        title: 'Master Angular',
        summary: 'Learn all the basic and advanced features of Angular & how to apply them.',
        dueDate: '2025-12-31'
      },
      {
        id: 't2',
        userId: 'u2',
        title: 'Build first prototype',
        summary: 'build a first prototype of the online shop website',
        dueDate: '2024-05-31'
      },
      {
        id: 't3',
        userId: 'u3',
        title: 'Prepare issue template',
        summary: 'Prepare and descibe an issue template which will help with project management.',
        dueDate: '2024-06-15'
      }
    ];

    get selectedUserTasks(){
      return this.tasksService.getUserTasks(this.userId);
    }

    onCompleteTask(id:string){
      this.tasks = this.tasks.filter((task)=>task.id !== id);
    }

    onStartAddTask(){
      this.isAddingTask = true;
    }

    onCancelAddTask(){
      this.isAddingTask = false;
    }

    onAddTask(taskData:newTask){
      this.tasks.push({
        id: new Date().getTime().toString(),
        userId: this.userId ,
        title: taskData.title,
        summary: taskData.summary,
        dueDate:taskData.date
      });
      this.isAddingTask = false;
    }
}
