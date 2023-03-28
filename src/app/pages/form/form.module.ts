import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NbButtonModule, NbLayoutModule } from "@nebular/theme";
import { FormlyModule } from "@ngx-formly/core";

import { FormlyFieldInputModule } from "src/app/ui/input/formly-field-input.module";
import { FormlyFieldCheckboxModule } from "src/app/ui/checkbox/formly-field-checkbox.module";
import { FormlyFieldSelectModule } from "src/app/ui/select/formly-field-select.module";
import { BootstrapWrapperModule } from "src/app/ui/wrappers/bootstrap-wrapper/bootstrap-wrapper.module";
import { ShowCaseFormComponent } from "./form.component";
import { DataService } from "src/app/service/service";
import { ColumnWrapperComponent } from "src/app/ui/wrappers/column-wrapper.component";

@NgModule({
  imports: [
    CommonModule,
    FormlyModule.forRoot({
      wrappers: [{ name: "col", component: ColumnWrapperComponent }],
      validationMessages: [
        { name: "required", message: "This field is required" },
      ],
    }),
    FormlyFieldInputModule,
    FormlyFieldSelectModule,
    FormlyFieldCheckboxModule,
    BootstrapWrapperModule,
    NbLayoutModule,
    NbButtonModule,
  ],
  declarations: [ShowCaseFormComponent],
  providers: [DataService],
  exports: [ShowCaseFormComponent],
})
export class FormModule {}
