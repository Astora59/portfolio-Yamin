import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRouteSnapshot,Event as RouterEvent, RouterStateSnapshot } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GlobalTitleService {

  constructor(private titleService: Title, private router: Router) {
    this.router.events.pipe(
      filter((event: RouterEvent): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      const pageTitle = this.getPageTitleFromRoute(this.router.routerState.snapshot.root);
      this.titleService.setTitle(pageTitle);
    });
  }

  private getPageTitleFromRoute(route: ActivatedRouteSnapshot): string {
    if (route.firstChild) {
      return this.getPageTitleFromRoute(route.firstChild);
    }

    if (route.data && route.data['title']) {
      return route.data['title'];
    }

    return 'Default Title';
  }
}
