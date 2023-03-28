import { Component, OnInit } from "@angular/core";
import { Validators } from "@angular/forms";
import { FieldType } from "@ngx-formly/core";
import { combineLatest, map, merge, Observable, of } from "rxjs";

@Component({
  selector: "formly-field-input",
  template: `
    <label class="label" *ngIf="props.label" [for]="id">{{
      props.label
    }}</label>
    <nb-form-field>
      <input
        nbInput
        fullWidth
        class="form-control"
        *ngIf="!props.async || (props.value$ | async)"
        [formControl]="formControl"
        [formlyAttributes]="field"
        [status]="status$ | async"
        [ngClass]="{
          'is-invalid': isInvalid$ | async
        }"
      />
    </nb-form-field>

    <span *ngIf="isInvalid$ | async" class="caption-2 text-danger">
      <formly-validation-message [field]="field"></formly-validation-message>
    </span>
  `,
})
export class FormlyFieldInputComponent extends FieldType implements OnInit {
  isInvalid$: Observable<boolean>;

  status$: Observable<string>;

  ngOnInit(): void {
    this.isInvalid$ = combineLatest([
      merge(of(this.formControl.status), this.formControl.statusChanges).pipe(
        map((s) => s == "INVALID")
      ),
      this.formState.submitted$ as Observable<boolean>,
    ]).pipe(map(([invalid, submitted]) => invalid && submitted));

    this.status$ = this.isInvalid$.pipe(map((i) => (i ? "danger" : "basic")));

    // if (this.field.validators)
    //   this.formControl.addValidators(this.field.validators.validation);
  }
}
