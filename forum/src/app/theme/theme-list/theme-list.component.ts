import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';
import { ITheme } from '../../interfaces';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-theme-list',
  templateUrl: './theme-list.component.html',
  styleUrls: ['./theme-list.component.scss']
})
export class ThemeListComponent implements OnInit {

  themeList: ITheme[] | null = null;
  errorFetcingData = false;

  constructor(private apiService: ApiService,
    private themeService:ThemeService,
    private router: Router) { }

  
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