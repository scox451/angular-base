import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs'
import { SearchData } from '@models';

@Injectable({
  providedIn: 'root',
})
export class ImdbAPIService {

  apiKey: string = 'k_j8i9cecn';

  testData: SearchData = { 
  "searchType": "Title", 
  "expression": "shaw", 
  "results":
   [{ "id": "tt6040928", "resultType": "Title", "image": "https://imdb-api.com/images/original/MV5BNGQ1MjI5MTItZjQ3OS00NDFjLTkzNDktYzIxNmZiNThiOTI1XkEyXkFqcGdeQXVyNjg2NjU3ODM@._V1_Ratio0.7273_AL_.jpg", "title": "Shaw", "description": "(2016) (TV Series)" },
    { "id": "tt0111161", "resultType": "Title", "image": "https://imdb-api.com/images/original/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_Ratio0.7273_AL_.jpg", "title": "The Shawshank Redemption", "description": "(1994)" }, 
    { "id": "tt13276386", "resultType": "Title", "image": "https://imdb-api.com/images/original/MV5BNDRkMGM5YTQtOGMzZS00ZGJiLTg5YWMtYjg4NTcyZTk0MzAzXkEyXkFqcGdeQXVyMTI0OTAwOTgy._V1_Ratio0.7273_AL_.jpg", "title": "Shawn Mendes: In Wonder", "description": "(2020)" },
    { "id": "tt0069265", "resultType": "Title", "image": "https://imdb-api.com/images/original/MV5BNWJmYWZkMDgtNTg4Mi00ZDY3LWI3MjEtZTM4ZWQ3NTFlOTQxXkEyXkFqcGdeQXVyNzc5MjA3OA@@._V1_Ratio0.7273_AL_.jpg", "title": "The Water Margin", "description": "(1972) aka \"Shaw Brothers: The Water Margin\"" }, 
    { "id": "tt7177576", "resultType": "Title", "image": "https://imdb-api.com/images/original/nopicture.jpg", "title": "Shawn Mendes: A Little Too Much", "description": "(2015) (Video)" }, 
    { "id": "tt10522390", "resultType": "Title", "image": "https://imdb-api.com/images/original/MV5BMmJmZGQ4ZTYtNTg3OC00YzQ2LTg3NzEtNmU4OGFiYjAzN2IxXkEyXkFqcGdeQXVyMTA0MDEwMTIw._V1_Ratio0.7727_AL_.jpg", "title": "Shawn Mendes & Camila Cabello: Señorita", "description": "(2019) (Video)" }, 
    { "id": "tt14218674", "resultType": "Title", "image": "https://imdb-api.com/images/original/MV5BOTBmMTI2NWEtNWEzNi00MzU3LTk1ZTgtMzA1MTczNDIyYjI0XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_Ratio0.7273_AL_.jpg", "title": "NCIS: Hawai'i", "description": "(2021) (TV Series)" }, 
    { "id": "tt7908628", "resultType": "Title", "image": "https://imdb-api.com/images/original/MV5BYzZhZWVkNzYtZjZmOS00MTE1LWFkZTQtYzViYWU0MDU3MDIxXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_Ratio0.8182_AL_.jpg", "title": "What We Do in the Shadows", "description": "(2016) (TV Series)" }], "errorMessage": "" };

  constructor(private http: HttpClient) { }

  search(searchText: SearchData): Observable<any> {

    return of(this.testData);
//    return this.http.get(`https://imdb-api.com/API/Search/${this.apiKey}/${searchText}`);

  }
}