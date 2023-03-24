import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { NbThemeModule } from "@nebular/theme";
import { FormlyModule } from "@ngx-formly/core";
import { ColumnWrapperComponent } from "./ui/wrappers/column-wrapper.component";
import { FormModule } from "./pages/form/form.module";

@NgModule({
  imports: [
    BrowserModule,
    NbThemeModule.forRoot({
      name: "default",
    }),
    FormlyModule.forRoot({
      wrappers: [{ name: "col", component: ColumnWrapperComponent }],
    }),
    FormModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
