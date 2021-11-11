import {Injectable} from '@angular/core'
import {HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs'
import { SearchData } from '@models';

@Injectable({
  providedIn: 'root',
 })
export class ImdbAPIService{

  apiKey:string = 'k_j8i9cecn';

  constructor(private http: HttpClient){}

  search(searchText:SearchData):Observable<any>{
    return this.http.get(`https://imdb-api.com/API/Search/${this.apiKey}/${searchText}`);

  }
}