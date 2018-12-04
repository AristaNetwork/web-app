import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';

/**
 * Service for managing the clients endpoints
 */

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(
    private http: HttpClient
  ) { }
  
  /**
   * It creates a new client
   * @param data Data to send to the serve
   */
  
  public create(data: any): Observable<any> {
    return this.http.post<any>(`${ environment.serverUrl }/clients`, data);
  }
}
