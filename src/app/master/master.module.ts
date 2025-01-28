import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BranchComponent } from './branch/branch.component';
import { MaterialModule } from 'material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VendorComponent } from './vendor/vendor.component';

@NgModule({
  declarations: [BranchComponent, VendorComponent],
  imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule],
  exports: [BranchComponent, VendorComponent],
})
export class MasterModule {}
