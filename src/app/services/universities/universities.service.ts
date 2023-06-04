import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { University } from '@models/university.model';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UniversitiesService {

  constructor(
    private http: HttpClient,
  ) { }

  public getUniversityList(search?: string): Observable<University[]> {
    let endpointUrl = `${environment.baseUrl}${environment.endpoints.search}`;
    const params: HttpParams = new HttpParams()
      .set('country', 'United States')
      .set('name', search || '');
    return this.http.get<University[]>(endpointUrl, {params});
  }

  getUniversityLink(university: University, multiples: boolean = false): string {
    if (university.web_pages.length === 0) return 'N/A';

    return multiples ? university.web_pages.join('\n') : university.web_pages[0];
  }

  getUniversityDomain(university: University, multiples: boolean = false): string {
    if (university.domains.length === 0) return 'N/A';

    return multiples ? university.domains.join('\n') : university.domains[0];
  }
}
