import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Action } from 'rxjs/internal/scheduler/Action';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { TaskDialogComponent } from './task-dialog/task-dialog.component';
import {MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.scss']
})
export class TaskManagerComponent implements OnInit, AfterViewInit  {

  displayedColumns: string[] = ['id', 'name', 'description', 'created', 'modified', 'status','completionRating', 'action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
 
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  searchKey: any;
  
  constructor(private dialog: MatDialog) { }
  
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
  }

  openDialog(action: string, task?:any){
    const dialog = this.dialog.open(TaskDialogComponent,{ data: action  } )
  }

  deleteDialog(){
    const dialog = this.dialog.open(ConfirmationDialogComponent, { 
      data: { 
        title: 'Delete Confirmation', 
        content: 'Are you sure you want to delete this task?', 
        okBtn: 'Yes', 
        cancelBtn: 'No'
      }
    })
  }
  
  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }

  applyFilter() {
    this.dataSource.filter = this.searchKey.trim().toLowerCase();
  }
}

export interface PeriodicElement {

  id: number;
  name: string;
  description: string;
  status: string;
  created: Date;
  modified: Date;
  completionRating: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, name: 'Learn Angular', description: 'Learn angular on youtube', status: 'New', completionRating: 1, created: new Date(),  modified: new Date()},
  {id: 2, name: 'Learn C#', description: 'Learn c# on youtube', status: 'In Progress',completionRating: 3, created: new Date(),  modified: new Date()},
  {id: 3, name: 'Learn Biking', description: 'Learn Biking on youtube', status: 'New',completionRating: 0, created: new Date(),  modified: new Date()},
  {id: 4, name: 'Learn Driving', description: 'Learn Driving on youtube', status: 'Done',completionRating: 5, created: new Date(),  modified: new Date()},
  {id: 5, name: 'Learn Swimming', description: 'Learn Driving on youtube', status: 'In Progress',completionRating: 3, created: new Date(),  modified: new Date()},
  {id: 6, name: 'Learn Dancing', description: 'Learn Dancing on youtube', status: 'Done', completionRating: 5,created: new Date(),  modified: new Date()},
  {id: 7, name: 'Learn Singing', description: 'Learn Singing on youtube', status: 'New', completionRating: 2,created: new Date(),  modified: new Date()},
  {id: 8, name: 'Learn Baking', description: 'Learn Baking on youtube', status: 'New', completionRating: 1,created: new Date(),  modified: new Date()},
  {id: 9, name: 'Learn Cha-cha', description: 'Learn Cha-cha on youtube', status: 'Done', completionRating: 5,created: new Date(),  modified: new Date()},
  {id: 10, name: 'Learn Rumba', description: 'Learn Rumba on youtube', status: 'In Progress', completionRating: 4,created: new Date(),  modified: new Date()}

];