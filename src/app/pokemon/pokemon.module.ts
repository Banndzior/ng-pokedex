import { NgModule } from '@angular/core';

import { PokemonRoutingModule } from './pokemon-routing.module';
import { SharedModule } from './../common/shared/shared.module';
import { PokemonListComponent, ThreeDotsPipe, SizerDirective } from './pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { UpperCasePipe } from '@angular/common';

@NgModule({
  imports: [
    SharedModule,
    PokemonRoutingModule
  ],
  declarations: [
    SizerDirective,
    PokemonListComponent,
    PokemonDetailComponent,
    ThreeDotsPipe
  ],
  providers: [
    UpperCasePipe
  ]
})
export class PokemonModule { }
