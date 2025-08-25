import { Component } from '@angular/core';
import { PromessaComponent } from '../../components/promessa/promessa.component';
import { CommonModule } from '@angular/common';
import { PromessaService } from '../../services/promessa/promessa.service';
import { PromessaResponse } from '../../dtos/responses/promessa_response.model';

@Component({
  selector: 'app-promessometro',
  imports: [PromessaComponent, CommonModule],
  templateUrl: './promessometro.component.html',
  styleUrl: './promessometro.component.scss'
})
export class PromessometroComponent {
  constructor(
    private promessaService: PromessaService
  ) {}
  promessas: PromessaResponse[] = [];

  ngOnInit(): void {
   this.promessaService.getPromessas().subscribe({
     next: value => {
       this.promessas = value;
     },
     error: error => console.error(error),
     complete: () => console.log('completed')
   })
  }
}
