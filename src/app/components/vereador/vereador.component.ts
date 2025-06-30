import { Component, Input } from '@angular/core';
import { VereadorResponse } from '../../dtos/responses/vereador_response.model';

@Component({
  selector: 'app-vereador',
  imports: [],
  templateUrl: './vereador.component.html',
  styleUrl: './vereador.component.scss'
})
export class VereadorComponent {
  @Input() vereador!: VereadorResponse
}
