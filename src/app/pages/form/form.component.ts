import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormlyFormOptions } from "@ngx-formly/core";
import { BehaviorSubject, Observable } from "rxjs";
import { DataService } from "src/app/service/service";
import { DataModel } from "src/app/service/service.model";
import { fields } from "./form.fields";

@Component({
  selector: "showcase-form",
  template: `
    <form
      *ngIf="model$ | async as model; else loading"
      [formGroup]="form"
      (ngSubmit)="submit(model)"
    >
      <formly-form [model]="model" [fields]="fields" [options]="options">
      </formly-form>
      <div class="col-sm-6">
        <button nbButton status="primary" type="submit">Submit</button>
      </div>
    </form>
    <ng-template #loading> Form data incoming.. </ng-template>

    {{ (model$ | async) ?? {} | json }}
  `,
})
export class ShowCaseFormComponent implements OnInit {
  form = new FormGroup({});
  fields = fields;
  model$: Observable<DataModel>;
  submitted$ = new BehaviorSubject(false);
  options: FormlyFormOptions = {
    formState: {
      submitted$: this.submitted$,
    },
  };

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.model$ = this.dataService.fetch();
  }

  submit(model: DataModel) {
    this.submitted$.next(true);
    if (this.form.valid) console.log(model);
    else this.form.markAllAsTouched();
  }
}
