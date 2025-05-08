import { Component, Input } from '@angular/core';
import { Promessa } from '../../models/promessa.model';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-promessa',
  imports: [CommonModule, MatExpansionModule, MatProgressBarModule],
  templateUrl: './promessa.component.html',
  styleUrl: './promessa.component.css'
})
export class PromessaComponent {
  @Input() promessa!: Promessa;
}
