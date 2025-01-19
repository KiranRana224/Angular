import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { LoginService } from '../login.service';
import { MatTableDataSource } from '@angular/material/table';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-users-lists',
  templateUrl: './users-lists.component.html',
  styleUrls: ['./users-lists.component.scss'],
})
export class UsersListsComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [
    'userId',
    'name',
    'email',
    'phone',
    'role',
    'shipping_address',
    'action',
  ];
  dataSource!: MatTableDataSource<any>;
  searchForm!: FormGroup;
  totalCount: any;
  totalUsers = 0;
  pageSize = 10;
  pageSizeOptions = [5, 10, 25, 100];
  limit: number;
  skip: number = 0;

  constructor(private userservice: LoginService, private fb: FormBuilder) {
    this.limit = 10;
  }

  ngAfterViewInit(): void {
    this.getAllUsers();
  }

  ngOnInit(): void {
    this.getAllUsers();
    this.searchForm = this.fb.group({
      fromDate: [''],
      toDate: [''],
      keywords: [''],
    });
  }

  getAllUsers() {
    let data = {
      limit: this.limit,
      skip: this.skip,
    };
    this.userservice.getUserList(data).subscribe((res: any) => {
      this.dataSource = new MatTableDataSource(res.data);
      this.totalCount = res.count;
    });
  }
  submitSearch() {
    let data = {
      formDate: this.searchForm.value.fromDate,
      toDate: this.searchForm.value.toDate,
      keyword: this.searchForm.value.keywords.trim(),
    };
    this.userservice.searchUser(data).subscribe(
      (res: any) => {
        if (res.users.length > 0) {
          this.dataSource = new MatTableDataSource(res.users);
          this.totalCount = res.users.length;
        } else {
          this.dataSource = new MatTableDataSource();
          this.totalCount = 0;
        }
      },
      (err) => {
        this.dataSource = new MatTableDataSource();
        this.totalCount = 0;
      }
    );
  }
  resetSearch() {
    this.getAllUsers();
  }
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  onPageChanged(event: PageEvent) {
    const pageIndex = event.pageIndex;
    const pageSize = event.pageSize;
    this.skip = pageIndex * pageSize;

    this.limit = pageSize;
    this.getAllUsers();
  }
}
