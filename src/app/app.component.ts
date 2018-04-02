import { Component } from '@angular/core';
import { HEROES } from './mock-heroes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  heroes = HEROES;
  numberHeroes = this.heroes.length


  onRemoved(id:Number){
    // If we use hre function this is not going to work
    this.heroes = this.heroes.filter((hero)=>{
      return id !== hero.id
    })
  }
}
