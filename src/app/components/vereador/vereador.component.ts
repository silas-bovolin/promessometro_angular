import { Component, Input } from '@angular/core';
import { MatCard, MatCardHeader, MatCardSubtitle, MatCardTitle } from '@angular/material/card';
import { VereadorResponse } from '../../dtos/responses/vereador_response.model';

@Component({
  selector: 'app-vereador',
  imports: [MatCard, MatCardHeader, MatCardTitle, MatCardSubtitle],
  templateUrl: './vereador.component.html',
  styleUrl: './vereador.component.css'
})
export class VereadorComponent {
  @Input() vereador!: VereadorResponse
}
