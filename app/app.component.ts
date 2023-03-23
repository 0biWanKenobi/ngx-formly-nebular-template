import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'my-app',
  template: `
    <form [formGroup]="form" (ngSubmit)="submit(model)">
      <formly-form [model]="model" [fields]="fields">
      </formly-form>
      <button type="submit">Submit</button>
    </form>

    {{ model|json }}
  `,
})
export class AppComponent {
  form = new FormGroup({});
  model = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'name',
      type: 'input',
      templateOptions: {
        label: 'Field 1',
        placeholder: 'Formly is terrific!',
      },
    },
  ];

  submit(model) {
    console.log(model);
  }
}
