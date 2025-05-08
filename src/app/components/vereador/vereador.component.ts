import { Component, Input } from '@angular/core';
import { Vereador } from '../../models/vereador.model';
import { MatCard, MatCardHeader, MatCardSubtitle, MatCardTitle } from '@angular/material/card';

@Component({
  selector: 'app-vereador',
  imports: [MatCard, MatCardHeader, MatCardTitle, MatCardSubtitle],
  templateUrl: './vereador.component.html',
  styleUrl: './vereador.component.css'
})
export class VereadorComponent {
  @Input() vereador!: Vereador
}
