import { Component } from "@angular/core";
import { FieldType } from "@ngx-formly/core";

@Component({
  selector: "formly-field-select",
  template: `
    <label class="label" *ngIf="props.label" [for]="id">{{
      props.label
    }}</label>
    <nb-select
      type="text"
      fullWidth
      [formControl]="formControl"
      [formlyAttributes]="field"
    >
      <nb-option *ngFor="let o of props.selectOpts" [value]="o.value">{{
        o.label
      }}</nb-option>
    </nb-select>
  `,
})
export class FormlyFieldSelectComponent extends FieldType {}
