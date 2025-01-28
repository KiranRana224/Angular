import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddInvoiceComponent } from './add-invoice/add-invoice.component';
import { MaterialModule } from 'material.module';
import { BranchComponent } from '../master/branch/branch.component';
import { MasterModule } from '../master/master.module';

@NgModule({
  declarations: [AddInvoiceComponent],
  imports: [CommonModule, MaterialModule, MasterModule],
  exports: [AddInvoiceComponent],
})
export class SalesModule {}
