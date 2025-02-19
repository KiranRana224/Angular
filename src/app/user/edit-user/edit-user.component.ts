import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
})
export class EditUserComponent {
  message: string;
  userDetails: any;
  editUser!: FormGroup;
  roleList = [
    { id: 1, role: 'Admin' },
    { id: 2, role: 'User' },
  ];
  constructor(
    private dialogRef: MatDialogRef<EditUserComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private fb: FormBuilder
  ) {
    this.message = data.message;
    this.userDetails = data.element;

    this.createAddForm();
    this.patchData();
    console.log(this.userDetails);
  }

  patchData() {
    const roleId = this.roleList.find(
      (role) => role.role.toLowerCase() === this.userDetails.role.toLowerCase()
    )?.id;

    this.editUser.patchValue({
      firstName: this.userDetails.first_name,
      lastName: this.userDetails.last_name,
      role: roleId,
      email: this.userDetails.email,
      password: this.userDetails.password,
      phone: this.userDetails.phone_number,
      shipping_address: this.userDetails.shipping_address,
    });
  }
  createAddForm() {
    this.editUser = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      role: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      phone: ['', Validators.required],
      shipping_address: ['', Validators.required],
    });
  }
  confirmEdit(): void {
    this.dialogRef.close(true);
  }

  cancelEdit(): void {
    this.dialogRef.close(false);
  }
  editUserForm() {}
}
