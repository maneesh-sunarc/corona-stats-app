import { Component, OnInit, ViewChild } from '@angular/core';
import { CoronaStatsService } from '../../app/services/corona-stats.service';
import { CoronaCountryWiseData } from '../../app/models/corona-country-wise-data.model';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-corona-stats-list',
  templateUrl: './corona-stats-list.component.html',
  styleUrls: ['./corona-stats-list.component.css']
})
export class CoronaStatsListComponent implements OnInit {

  displayedColumns: string[] = ['Date', 'Country','TotalConfirmed','TotalDeaths','TotalRecovered','NewConfirmed', 'NewDeaths','NewRecovered'];

  countriesStats : CoronaCountryWiseData[];

  dataSource = new MatTableDataSource(this.countriesStats);

  @ViewChild(MatPaginator,{static:false}) paginator: MatPaginator;
  @ViewChild(MatSort,{static:false}) sort: MatSort;

  isLoadingResults = true;

  constructor(private coronaStatsService: CoronaStatsService) { }

  ngOnInit() {
    this.getStatisticalSummaryData();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngAfterViewInit() {
    this.refreshSortAndPaginator();
  }

  refreshSortAndPaginator() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  getStatisticalSummaryData() {
     this.isLoadingResults = true;
     this.coronaStatsService.getSummaryData().subscribe(
      (data: any) => {
        this.countriesStats = data.Countries;
        this.dataSource = new MatTableDataSource(this.countriesStats);
        this.refreshSortAndPaginator();
        this.isLoadingResults = false;
      },
      (error) => {
        this.isLoadingResults = false;
        console.log("Error while getting data");
      });
  }

}
