import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SalesComponent implements OnInit {
  selectAll = false;

  // The object with the current states of the checkboxes
  statusObject: any = {
    insights: true,
    notifications: true,
    graphs: true,
  };

  items = [
    { name: 'Insights', selected: false },
    { name: 'Notifications', selected: false },
    { name: 'Graphs', selected: false },
  ];

  // This method will initialize the "selected" property of each item based on the statusObject
  ngOnInit() {
    this.updateItemsSelection();
  }

  updateItemsSelection() {
    this.items.forEach((item) => {
      // Match the item's name to the statusObject and update its 'selected' property
      item.selected = this.statusObject[item.name.toLowerCase()];
    });

    // Automatically update "selectAll" based on the current state of items
    this.updateSelectAll();
  }

  toggleSelectAll() {
    // If "selectAll" is checked, set all items to selected. If unchecked, set all to false.
    this.items.forEach((item) => (item.selected = this.selectAll));

    // After toggling, check if all are selected to update the "selectAll" checkbox
    this.updateSelectAll();
  }

  updateSelectAll() {
    // If all checkboxes are selected, mark "selectAll" as checked
    this.selectAll = this.items.every((item) => item.selected);
  }
}
