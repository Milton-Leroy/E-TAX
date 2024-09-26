import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { CommonModule, Location } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  currentRoute: string = '';

  constructor(private location: Location,private router: Router) {}

  ngOnInit(): void {
    // Subscribe to router events and filter for NavigationEnd events
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd)  // Only listen for NavigationEnd event
      )
      .subscribe(event => this.currentRoute = this.location.path());
  }
}
