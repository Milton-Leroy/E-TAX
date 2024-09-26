import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { filter } from 'rxjs/operators';
import { CommonModule, Location } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SidebarComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'E-TAX';
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
