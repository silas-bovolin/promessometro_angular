import { Component } from '@angular/core';
import { Promessa } from '../../models/promessa.model';
import { PromessaComponent } from '../../components/promessa/promessa.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-promessometro',
  imports: [PromessaComponent, CommonModule],
  templateUrl: './promessometro.component.html',
  styleUrl: './promessometro.component.css'
})
export class PromessometroComponent {
  promessas: Promessa[] = [];

  ngOnInit(): void {
    this.promessas = [
      {
        id: 1,
        titulo: "Construção de 5 novas escolas",
        descricao: "Promessa de construir 5 novas escolas municipais até o final do mandato.",
        porcentagem: 60,
        detalhe: "3 escolas já foram construídas e 2 estão em fase de construção.",
      },
      {
        id: 2,
        titulo: "Reforma do Hospital Municipal",
        descricao: "Promessa de reformar completamente o Hospital Municipal.",
        porcentagem: 100,
        detalhe: "A reforma foi concluída em março de 2023, com novos equipamentos e ampliação de leitos.",
      },
      {
        id: 3,
        titulo: "Pavimentação de 20 ruas",
        descricao: "Promessa de pavimentar 20 ruas em bairros periféricos.",
        porcentagem: 50,
        detalhe: "10 ruas foram pavimentadas até o momento. As demais estão no cronograma para o próximo semestre.",
        itens: [
          {
            id: 31,
            titulo: "Fase 1: Pavimentação de 10 ruas no centro",
            porcentagem: 100
          },
          {
            id: 32,
            titulo: "Fase 2: Pavimentação de 10 ruas na periferia",
            porcentagem: 0
          },
        ],
      },
      {
        id: 4,
        titulo: "Criação de 3 novos parques",
        descricao: "Promessa de criar 3 novos parques municipais.",
        porcentagem: 33,
        detalhe: "1 parque foi inaugurado em janeiro de 2023. Os outros 2 estão em fase de planejamento.",
      },
      {
        id: 5,
        titulo: "Implementação de coleta seletiva",
        descricao: "Promessa de implementar coleta seletiva em toda a cidade.",
        porcentagem: 75,
        detalhe: "A coleta seletiva já foi implementada em 75% dos bairros da cidade.",
      },
    ]
  }
}
