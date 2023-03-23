import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormlyFieldConfig } from "@ngx-formly/core";

@Component({
  selector: "my-app",
  template: `
    <nb-layout>
      <nb-layout-header> Formly Nebular Integration Demo </nb-layout-header>
      <nb-layout-column>
        <form [formGroup]="form" (ngSubmit)="submit(model)">
          <formly-form [model]="model" [fields]="fields"> </formly-form>
          <p><button nbButton status="primary" type="submit">Submit</button></p>
        </form>

        {{ model | json }}
      </nb-layout-column>
    </nb-layout>
  `,
})
export class AppComponent {
  form = new FormGroup({});
  model = {};
  fields: FormlyFieldConfig[] = [
    {
      key: "name",
      type: "input",
      templateOptions: {
        label: "Field 1",
        placeholder: "Formly is terrific!",
      },
    },
  ];

  submit(model) {
    console.log(model);
  }
}
