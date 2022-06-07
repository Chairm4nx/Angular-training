import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-task-dialog',
  templateUrl: './task-dialog.component.html',
  styleUrls: ['./task-dialog.component.scss']
})
export class TaskDialogComponent implements OnInit {

  title: string = '';
  taskManagerFormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    description: new FormControl(null, [Validators.required]),
    status: new FormControl(null, [Validators.required]),
    dateCreated: new FormControl(null, [Validators.required]),
  })

  constructor(private dialog: MatDialog, 
              public dialogRef: MatDialogRef<TaskDialogComponent>, 
              @Inject(MAT_DIALOG_DATA) public data: string) 
              { 
                this.title = data;
              }

  ngOnInit(): void {
  }

  save(){
    this.dialog.open(ConfirmationDialogComponent, {
      data: { 
        title: this.title + ' Confirmation', 
        content: 'You successfully ' + this.title + ' your task!', 
        okBtn: 'Ok', 
        cancelBtn: 'Cancel'
      }
    })

    console.log("save--", this.taskManagerFormGroup.value)

    this.cancel()
  }

  cancel(){
    this.dialogRef.close()
  }

}
