import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NotificationService } from 'src/app/shared/notification.service';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent implements OnInit {

  @ViewChild(FormGroupDirective) formGroupDirective!: FormGroupDirective;

  constructor(public service: UserService, private notificationService: NotificationService, public dialogRef: MatDialogRef<CreateUserComponent>) {}

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.service.form.valid) {
      this.service.createUser(this.service.form.value);
      this.notificationService.success('::Submitted Successfully::')
      this.clearForm();
      this.closeDialog()
    }
  }

  clearForm() {
    setTimeout(() => this.formGroupDirective.resetForm(), 0);
  }

  onClear() {
    this.clearForm();
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
