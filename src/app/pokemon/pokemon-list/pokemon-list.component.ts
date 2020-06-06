import { Component, OnInit, Pipe, PipeTransform, Directive, Input, ElementRef, Renderer2 } from '@angular/core';
import { Observable } from 'rxjs';

import { Pokemon } from './../../common/interfaces/pokemon';
import { PokemonService } from './pokemon.service';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
  providers: [PokemonService]
})
export class PokemonListComponent implements OnInit {
  pokemon: Observable<Pokemon[]>;
  showGrid = true;
  currentDate = new Date();

  constructor(
    private pokemonService: PokemonService) { }

  ngOnInit() {
    this.pokemonService.setTitle();
    this.pokemon = this.pokemonService.pokemon;
  }

  search(term: string) {
    this.pokemonService.search(term);
  }
}

@Pipe({ name: 'dots' })
export class ThreeDotsPipe implements PipeTransform {
  constructor(private upperCase: UpperCasePipe) {
  }

  transform(value: any): string {
    return this.upperCase.transform(value) + '...';
  }
}

// tslint:disable-next-line: directive-selector
@Directive({ selector: '[sizer]' })
export class SizerDirective implements OnInit {
  @Input() sizer: string;
  @Input() color: string;

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.setStyle(this.element.nativeElement, 'font-size', this.sizer);
    this.renderer.setStyle(this.element.nativeElement, 'color', this.color);
  }
}

