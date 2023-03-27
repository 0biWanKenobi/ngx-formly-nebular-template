import { Component, OnInit } from "@angular/core";

@Component({
  selector: "ngx-layout",
  template: `
    <nb-layout>
      <nb-layout-header> Formly Nebular Integration Demo </nb-layout-header>
      <nb-layout-column>
        <ng-content></ng-content>
      </nb-layout-column>
    </nb-layout>
  `,
  styles: [],
})
export class LayoutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
