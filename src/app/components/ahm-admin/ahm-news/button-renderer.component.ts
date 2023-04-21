// Author: T4professor

import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams, IAfterGuiAttachedParams } from 'ag-grid-community';

@Component({
  selector: 'app-button-renderer',
  template: `
    <button type="button" class="btn btn-secondary btn-sm" (click)="onEdit($event, 'edit')">Edit</button>
    <button type="button" class="btn btn-secondary btn-sm" style="margin-left: 10px;" (click)="onEdit($event, 'delete')">Delete</button>
    `
})

export class ButtonRendererComponent implements ICellRendererAngularComp {

  params;
  label: string;

  agInit(params): void {
    this.params = params;
    this.label = this.params.label || null;
  }

  refresh(params?: any): boolean {
    return true;
  }

  onEdit($event, operation) {
    if (this.params.onClick instanceof Function) {
      // put anything into params u want pass into parents component
      const params = {
        event: $event,
        rowData: this.params.node.data,
        operation: operation
        // ...something
      }
      this.params.onClick(params);

    }
  }
}