import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment as env} from 'src/environments/environment.development';
import { APIRespone, Game } from '../models';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getGameList(
    ordering : string,
    search?: string,
  ) : Observable<APIRespone<Game>>{
      let params = new HttpParams().set('ordering',ordering);
      if(search){
        params = new HttpParams().set('ordering',ordering);
      }

      return this.http.get<APIRespone<Game>>(`${env.BASE_URL}/games`,{
        params: params,
      })
  }
}
