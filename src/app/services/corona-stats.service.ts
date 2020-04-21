import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from "@angular/common/http";

const summaryRoute = "https://api.covid19api.com/summary";
@Injectable({
  providedIn: 'root'
})
export class CoronaStatsService {

  constructor(private httpClient: HttpClient) { }

  getSummaryData() {
    return this.httpClient.get(summaryRoute);
  }
}
