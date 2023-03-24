import { Injectable } from "@angular/core";
import { delay, of } from "rxjs";
import { DataModel } from "./service.model";

@Injectable()
export class DataService {
  fetch() {
    return of(<DataModel>{
      name: "sweet bejeezus",
      role: "one",
    }).pipe(delay(1000));
  }
}
