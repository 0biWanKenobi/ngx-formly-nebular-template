import { Component } from "@angular/core";
import { FieldType } from "@ngx-formly/core";

@Component({
  selector: "formly-field-input",
  template: `
    <input
      nbInput
      *ngIf="!props.async || (props.value$ | async)"
      [formControl]="formControl"
      [formlyAttributes]="field"
    />
  `,
})
export class FormlyFieldInputComponent extends FieldType {}
