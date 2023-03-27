import { Component } from "@angular/core";
import { FieldType } from "@ngx-formly/core";

@Component({
  selector: "formly-field-checkbox",
  template: `
    <nb-checkbox
      class="form-control border-0"
      [formControl]="formControl"
      [formlyAttributes]="field"
    >
      <ng-container *ngIf="props.label">
        {{ props.label }}
      </ng-container>
    </nb-checkbox>
  `,
})
export class FormlyFieldCheckboxComponent extends FieldType {}
