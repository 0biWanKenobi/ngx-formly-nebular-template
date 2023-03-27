import { Component } from "@angular/core";
import { FieldType } from "@ngx-formly/core";

@Component({
  selector: "formly-field-input",
  template: `
    <nb-form-field>
      <input
        nbInput
        fullWidth
        class="form-control"
        *ngIf="!props.async || (props.value$ | async)"
        [formControl]="formControl"
        [formlyAttributes]="field"
      />
    </nb-form-field>
  `,
})
export class FormlyFieldInputComponent extends FieldType {}
