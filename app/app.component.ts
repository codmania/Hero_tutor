import { Component, OnInit } from '@angular/core';
import { Hero } from './hero.ts';

import { HeroService } from './hero.service';

@Component({
    selector: 'my-app',
    template:`
        <h1>{{title}}</h1>
        <my-heroes></my-heroes>
    `
})

export class AppComponent implements OnInit { 
    title = 'Tour of Heroes';

    ngOnInit(): void {

    }
}
