import { Component } from '@angular/core';
import { PromessaComponent } from '../../components/promessa/promessa.component';
import { CommonModule } from '@angular/common';
import { PromessaService } from '../../services/promessa.service';
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
  // this.promessaService.getPromessas().subscribe({
  //   next: value => {
  //     this.promessas = value;
  //     console.log(this.promessas);
  //   },
  //   error: error => console.error(error),
  //   complete: () => console.log('completed')
  // })

    this.promessas = [
      {
        Titulo: "Construção de 5 novas escolas",
        Descricao: "Promessa de construir 5 novas escolas municipais até o final do mandato.",
        ConclusaoPorcentagem: 60,
        Fases: []
      },
      {
        Titulo: "Reforma do Hospital Municipal",
        Descricao: "Promessa de reformar completamente o Hospital Municipal.",
        ConclusaoPorcentagem: 100,
        Fases: []
      },
      {
        Titulo: "Pavimentação de 20 ruas",
        Descricao: "Promessa de pavimentar 20 ruas em bairros periféricos.",
        ConclusaoPorcentagem: 50,
        Fases: [
          {
           
            Titulo: "Fase 1: Pavimentação de 10 ruas no centro",
            ConclusaoPorcentagem: 100,
            Descricao: "Fase 1: Pavimentação de 10 ruas no centro"
          },
          {
            
            Titulo: "Fase 2: Pavimentação de 10 ruas na periferia",
            ConclusaoPorcentagem: 0,
            Descricao: "Fase 2: Pavimentação de 10 ruas na periferia"
          },
        ],
      },
      {
        Titulo: "Criação de 3 novos parques",
        Descricao: "Promessa de criar 3 novos parques municipais.",
        ConclusaoPorcentagem: 33,
        Fases: []
      },
      {
        Titulo: "Implementação de coleta seletiva",
        Descricao: "Promessa de implementar coleta seletiva em toda a cidade.",
        ConclusaoPorcentagem: 75,
        Fases: []
      },
    ]
  }
}
