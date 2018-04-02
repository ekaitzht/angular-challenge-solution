import { Component,EventEmitter, OnInit,Input, Output} from '@angular/core';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: any;
  @Output() onRemoved = new EventEmitter<Number>();
  selectedHero: any;

  constructor() { }

  ngOnInit() {
  }


  clickRemoveButton(){
    this.onRemoved.emit(this.hero.id);
  }

  onSelect(hero:any): void {
    this.selectedHero = hero;
  }
}
