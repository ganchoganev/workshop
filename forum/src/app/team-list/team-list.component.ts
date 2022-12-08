import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ITheme } from '../interfaces/theme';
// import {} from '../apSe';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss']
})
export class TeamListComponent implements OnInit {

  themeList: ITheme[] | null = null;
  errorFetcingData = false;
  
  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
    this.apiService.loadThemes().subscribe({
      next: (value) => {
        this.themeList = value;
      },
      error: (err) => {
        this.errorFetcingData = true;
        console.error(err);
      }
    });
  }

}
