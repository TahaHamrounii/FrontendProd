import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PdfService {
  private apiUrl = 'http://127.0.0.1:8000/pdf/downloadPDF';

  constructor(private http: HttpClient) {}

  downloadPdf(modelId: string,id:string, ): Observable<Blob> {
    const urlWithModelId = `${this.apiUrl}/${modelId}/${id}`;
    return this.http.get(urlWithModelId, { responseType: 'blob' });
  }

  downloadBarPdf(reference: string,height:number,width:number,perRow:number, chosenCat:string): Observable<Blob> {
    const urlWithModelId = `${this.apiUrl}/${reference}/${height}/${width}/${perRow}/${chosenCat}`;
    return this.http.get(urlWithModelId, { responseType: 'blob' });
  }

}