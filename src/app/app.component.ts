import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormlyFieldConfig } from "@ngx-formly/core";
import { BoostrapWrapperComponent } from "./ui/wrappers/bootstrap-wrapper/bootstrap-wrapper.component";

@Component({
  selector: "my-app",
  template: `
    <nb-layout>
      <nb-layout-header> Formly Nebular Integration Demo </nb-layout-header>
      <nb-layout-column>
        <form [formGroup]="form" (ngSubmit)="submit(model)">
          <formly-form [model]="model" [fields]="fields"> </formly-form>
          <div class="col-sm-6">
            <button nbButton status="primary" type="submit">Submit</button>
          </div>
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
      wrappers: [BoostrapWrapperComponent],
      props: {
        classes: ["row", "col-sm-6", "form-group"],
        label: "Field 1",
        placeholder: "Formly is terrific!",
      },
    },
    {
      key: "role",
      type: "select",
      wrappers: [BoostrapWrapperComponent],
      props: {
        classes: ["row", "col-sm-6", "form-group"],
        selectOpts: [
          { label: "One", value: "one" },
          { label: "Two", value: "two" },
        ],
      },
    },
  ];

  submit(model) {
    console.log(model);
  }
}
