import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { FormlyModule } from "@ngx-formly/core";
import { NbFormFieldModule, NbInputModule } from "@nebular/theme";
import { FormlyFieldInputComponent } from "./formly-field-input.component";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [
    CommonModule,
    NbInputModule,
    NbFormFieldModule,
    ReactiveFormsModule,
    FormlyModule.forChild({
      types: [{ name: "input", component: FormlyFieldInputComponent }],
    }),
  ],
  declarations: [FormlyFieldInputComponent],
  exports: [FormlyFieldInputComponent, ReactiveFormsModule],
})
export class FormlyFieldInputModule {}
