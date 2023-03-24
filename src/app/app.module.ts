import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { FormlyFieldInputModule } from "./ui/input/formly-field-input.module";
import { AppComponent } from "./app.component";
import { NbButtonModule, NbLayoutModule, NbThemeModule } from "@nebular/theme";
import { FormlyModule } from "@ngx-formly/core";
import { FormlyFieldSelectModule } from "./ui/select/formly-field-select.module";
import { ColumnWrapperComponent } from "./ui/wrappers/column-wrapper.component";
import { BootstrapWrapperModule } from "./ui/wrappers/bootstrap-wrapper/bootstrap-wrapper.module";

@NgModule({
  imports: [
    BrowserModule,
    NbThemeModule.forRoot({
      name: "default",
    }),
    FormlyModule.forRoot({
      wrappers: [{ name: "col", component: ColumnWrapperComponent }],
    }),
    FormlyFieldInputModule,
    FormlyFieldSelectModule,
    BootstrapWrapperModule,
    NbLayoutModule,
    NbButtonModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
