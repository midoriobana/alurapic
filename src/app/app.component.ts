import { map, switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private titleService: Title
  ) { }

  ngOnInit(): void {
    this.router.events
      .pipe
      (
        filter(event => event instanceof NavigationEnd),
        (map(() => this.activatedRoute)),
        (map(route => {
          while (route.firstChild) route = route.firstChild;
          return route;
        })),
        switchMap(route => route.data)
      )
      .subscribe(event => this.titleService.setTitle(event['title']));
  }
}
