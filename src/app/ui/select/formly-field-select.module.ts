import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { FormlyModule } from "@ngx-formly/core";
import { NbSelectModule } from "@nebular/theme";
import { FormlyFieldSelectComponent } from "./formly-field-select.component";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [
    CommonModule,
    NbSelectModule,
    ReactiveFormsModule,
    FormlyModule.forChild({
      types: [{ name: "select", component: FormlyFieldSelectComponent }],
    }),
  ],
  declarations: [FormlyFieldSelectComponent],
  exports: [FormlyFieldSelectComponent, ReactiveFormsModule],
})
export class FormlyFieldSelectModule {}
