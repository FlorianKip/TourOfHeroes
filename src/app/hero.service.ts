import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Observable, of } from 'rxjs';
import { MessageService } from './messages.service';
import * as Parse from 'parse';


@Injectable({
  providedIn: 'root'
})

export class HeroService {

  constructor(private messageService: MessageService) { }

  async getHeroes(): Promise<Hero[]> {
    const heroClass = Parse.Object.extend('Hero');
    const query = new Parse.Query(heroClass);
    const loadedHeroes = await query.find();
    return loadedHeroes;
  }
}
