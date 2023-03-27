import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormlyFieldCheckboxComponent } from "./formly-field-checkbox.component";
import { NbCheckboxModule, NbFormFieldModule } from "@nebular/theme";
import { FormlyModule } from "@ngx-formly/core";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [FormlyFieldCheckboxComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NbCheckboxModule,
    FormlyModule.forChild({
      types: [{ name: "checkbox", component: FormlyFieldCheckboxComponent }],
    }),
  ],
  exports: [FormlyFieldCheckboxComponent],
})
export class FormlyFieldCheckboxModule {}
