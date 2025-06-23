import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { VereadorComponent } from '../../components/vereador/vereador.component';
import { SigilometroService } from '../../services/sigilometro/sigilometro.service';
import { VereadorResponse } from '../../dtos/responses/vereador_response.model';

@Component({
  selector: 'app-sigilometro',
  imports: [MatCardModule, NgxChartsModule, VereadorComponent],
  templateUrl: './sigilometro.component.html',
  styleUrl: './sigilometro.component.scss'
})
export class SigilometroComponent {

  constructor (
    private sigilometroService: SigilometroService
  ) {}

  vereadores: VereadorResponse[] = []
  chartData: any[] = []
  qtdRequerimentosAceitos: number = 1
  qtdRequerimentosRejeitados: number = 1
  
  ngOnInit() {
    this.sigilometroService.getSigilometro()
    .subscribe({
      next: value => {
        this.vereadores = value.Vereadores;
        this.qtdRequerimentosRejeitados = value.QuantidadeRequerimentosRejeitados;
        this.qtdRequerimentosAceitos = value.QuantidadeRequerimentosAceitos;
        this.chartData = [
      {
        name: "Requerimentos Reijeitados",
        value: this.qtdRequerimentosRejeitados,
      },
      {
        name: "Requerimentos Aceitos",
        value: this.qtdRequerimentosAceitos,
      },
    ]
      }
    })
  
  }
}
