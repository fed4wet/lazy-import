import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DownloadService {

  constructor(public http: HttpClient) {
  }

  download(): Observable<Blob> {
    const url = 'assets/sample.pdf';
    const headers = new HttpHeaders({'Content-Type': 'application/pdf'});

    return this.http.get(url, {
      headers: headers,
      responseType: 'blob',
    });
  }

}
