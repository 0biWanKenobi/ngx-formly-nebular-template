import { NgModule } from "@angular/core";
import { BoostrapWrapperComponent } from "./bootstrap-wrapper.component";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [CommonModule],
  declarations: [BoostrapWrapperComponent],
  exports: [BoostrapWrapperComponent],
})
export class BootstrapWrapperModule {}
