import { Injectable } from '@angular/core';
import {Http} from '@angular/http';


@Injectable()
export class appService {
constructor(private http:Http) { }
getData()
    {
        return this.http.get("/met1")
    }
}