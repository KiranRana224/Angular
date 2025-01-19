import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTabChangeEvent, MatTabGroup } from '@angular/material/tabs';
import { UsersListsComponent } from '../users-lists/users-lists.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  @ViewChild('tabGroup')
  tabGroup!: MatTabGroup; // Reference to MatTabGroup
  @ViewChild('userLists') userLists!: UsersListsComponent;
  addUser!: FormGroup;
  roleList = [
    { id: 1, role: 'Admin' },
    { id: 2, role: 'User' },
  ];

  constructor(
    private fb: FormBuilder,
    private userService: LoginService,
    private snakeBar: MatSnackBar
  ) {}
  ngOnInit(): void {
    this.createAddForm();
  }
  createAddForm() {
    this.addUser = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      role: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      phone: ['', Validators.required],
      shipping_address: ['', Validators.required],
    });
  }
  submitUser() {
    if (this.addUser.valid) {
      let data = {
        firstName: this.addUser.value.firstName,
        lastName: this.addUser.value.lastName,
        role: this.addUser.value.role.role,
        email: this.addUser.value.email,
        password: this.addUser.value.password,
        phone: this.addUser.value.phone,
        shipping_address: this.addUser.value.shipping_address,
      };
      this.userService.addUser(data).subscribe(
        (res: any) => {
          this.snakeBar.open(`${res.message}`, 'OK', { duration: 3000 });
          this.tabGroup.selectedIndex = 0;
          this.addUser.reset();
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }
  cancel() {
    this.addUser.reset();
    this.tabGroup.selectedIndex = 0;
  }
  onTabChange(event: MatTabChangeEvent) {
    console.log(event.tab.textLabel);
    if (event.tab && event.tab.textLabel === 'View All') {
      this.userLists.getAllUsers();
    }
  }
}
