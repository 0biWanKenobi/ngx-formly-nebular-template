import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormlyFieldConfig } from "@ngx-formly/core";
import { Observable } from "rxjs";
import { DataService } from "src/app/service/service";
import { DataModel } from "src/app/service/service.model";
import { BoostrapWrapperComponent } from "../../ui/wrappers/bootstrap-wrapper/bootstrap-wrapper.component";

@Component({
  selector: "showcase-form",
  template: `
    <nb-layout>
      <nb-layout-header> Formly Nebular Integration Demo </nb-layout-header>
      <nb-layout-column>
        <form
          *ngIf="model$ | async as model; else loading"
          [formGroup]="form"
          (ngSubmit)="submit(model)"
        >
          <formly-form [model]="model" [fields]="fields"> </formly-form>
          <div class="col-sm-6">
            <button nbButton status="primary" type="submit">Submit</button>
          </div>
        </form>
        <ng-template #loading> Form data incoming.. </ng-template>

        {{ (model$ | async) ?? {} | json }}
      </nb-layout-column>
    </nb-layout>
  `,
})
export class ShowCaseFormComponent implements OnInit {
  form = new FormGroup({});
  model$: Observable<DataModel>;
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

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.model$ = this.dataService.fetch();
  }

  submit(model: DataModel) {
    console.log(model);
  }
}
