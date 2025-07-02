import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { LegendPosition, NgxChartsModule } from '@swimlane/ngx-charts';
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
  labelRejeitados: string = "Requerimentos Rejeitados";
  labelAceitos: string = "Requerimentos Aceitos";
  vereadores: VereadorResponse[] = []
  chartData: any[] = []
  coresGrafico: any[] = [
    { name: this.labelRejeitados, value: '#facc15' },
    { name: this.labelAceitos, value: '#00e5ff' }
  ];
  qtdRequerimentosAceitos: number = 0
  qtdRequerimentosRejeitados: number = 0
  legendPosition: LegendPosition = LegendPosition.Below

  ngOnInit() {
    this.sigilometroService.getSigilometro()
    .subscribe({
      next: value => {
        this.vereadores = value.Vereadores;
        this.qtdRequerimentosRejeitados = value.QuantidadeRequerimentosRejeitados;
        this.qtdRequerimentosAceitos = value.QuantidadeRequerimentosAceitos;
        this.chartData = [
      {
        name: "Requerimentos Rejeitados",
        value: this.qtdRequerimentosRejeitados,
      },
      {
        name: "Requerimentos Aceitos",
        value: this.qtdRequerimentosAceitos,
      },
    ]
      }
    })

    // this.chartData = [
    //   {
    //     name: this.labelRejeitados,
    //     value: this.qtdRequerimentosRejeitados,
    //   },
    //   {
    //     name: this.labelAceitos,
    //     value: this.qtdRequerimentosAceitos
    //   }
    // ]

    // this.vereadores = [
    //   {
    //     Nome: "Amélia Naomi",
    //     Partido: "PT",
    //     ImagemUrl: "assets/amelianaomi.jpg",
    //     QuantidadeRequerimentosRejeitados: 10
    //   },

    // ]
  }
}
