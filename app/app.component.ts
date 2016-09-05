import { Component, OnInit } from '@angular/core';
import { Hero } from './hero.ts';

import { HeroService } from './hero.service';

@Component({
    selector: 'my-app',
    template:`
        <h1>{{title}}</h1>
        <nav>
            <a routerLink="/dashboard">Dashboard</a>
            <a routerLink="/heroes">Heroes</a>
        </nav>
        <router-outlet></router-outlet>
    `
})

export class AppComponent implements OnInit { 
    title = 'Tour of Heroes';

    ngOnInit(): void {

    }
}
