import { NgModule } from "@angular/core";
import { LayoutComponent } from "./layout.component";
import { NbLayoutModule } from "@nebular/theme";

@NgModule({
  declarations: [LayoutComponent],
  imports: [NbLayoutModule],
  exports: [LayoutComponent],
})
export class LayoutModule {}
