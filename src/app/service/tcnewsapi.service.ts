import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TcnewsapiService {

  constructor(private _http:HttpClient) { }


  ///top headline news url
  topHeadlineNews='https://newsapi.org/v2/top-headlines?country=in&apiKey=8c5bae4570c44297868f98c6ef2aadc3';
/// tech news
  techNews='https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=8c5bae4570c44297868f98c6ef2aadc3'

  /// business news
  businessNews='https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=8c5bae4570c44297868f98c6ef2aadc3'

  tcbusinessNews():Observable<any>{
    return this._http.get(this.businessNews)

  }
  tcTechNews():Observable<any>{
    return this._http.get(this.techNews)

  }
  
  tcHeadlines():Observable<any>{
    return this._http.get(this.topHeadlineNews)

  }
}
