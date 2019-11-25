import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { throwError, BehaviorSubject } from "rxjs";
import { catchError } from "rxjs/operators";
import { environment } from "./../../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class DataService {

  public segments = new BehaviorSubject<any>([]);

  activeState: string;
  constructor(private http: HttpClient) {
    // this.getSegments()
    // this.getAdmissionSegment().subscribe(data => this.admission.next(data))
    // this.getSpecialSegments().subscribe(data => this.special.next(data))
    // this.getSkillSegments().subscribe(data => this.skill.next(data))
  }

  //// Class service

  getAllBooks() {
    return this.http.get(`${environment.api_url}/books`);
  }

  getBookByCategoryId(cat_id) {
    return this.http.get(`${environment.api_url}/books/category/${cat_id}`);
  }

  getBookById(book_id) {
    return this.http.get(`${environment.api_url}/books/${book_id}`);
  }

  getAllCategories() {
    return this.http.get(`${environment.api_url}/books/categories`)
  }


  getAllBooksOfStore() {
    return this.http.get(`${environment.api_url}/stores`);
  }

  postBookForSell(value: any) {
    return this.http.post(`${environment.api_url}/stores`, value);
  }


  private handleError(errorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      console.error("Client Side error " + errorResponse.error.message);
    } else {
      console.error("Server Side error " + errorResponse.error.message);
    }

    return throwError("There is a problem in loading data.");
  }

  objectToUrl(obj) {
    var str = [];
    for (var p in obj)
      if (obj.hasOwnProperty(p)) {
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
      }
    return str.join("&");
  }
}
