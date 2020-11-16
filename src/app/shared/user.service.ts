import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { map } from "rxjs/operators";
import { Router } from "@angular/router";

import { environment} from "../../environments/environment";

const BACKEND_URL = environment.apiURL + "/posts/"

@Injectable({ providedIn: "root" })
export class UserService {

  constructor(private http: HttpClient, private router: Router) {}


}
