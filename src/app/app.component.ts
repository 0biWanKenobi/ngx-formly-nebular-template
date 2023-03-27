import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  template: `
    <ngx-layout>
      <nb-card>
        <nb-card-body>
          <showcase-form></showcase-form>
        </nb-card-body>
      </nb-card>
    </ngx-layout>
  `,
})
export class AppComponent {}
