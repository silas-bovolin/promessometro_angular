import { Component, Input } from "@angular/core"
import { PromessaResponse } from "../../dtos/responses/promessa_response.model"
import { CommonModule } from "@angular/common"
import { MatIconModule } from "@angular/material/icon"
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: "app-promessa",
  templateUrl: "./promessa.component.html",
  styleUrls: ["./promessa.component.scss"],
  imports: [CommonModule, MatIconModule],
  animations: [
    trigger('expandCollapse', [
      state('collapsed', style({ height: '0', overflow: 'hidden', padding: '0' })),
      state('expanded', style({ height: '*', overflow: 'hidden', padding: '1rem' })),
      transition('collapsed <=> expanded', animate('0.3s ease')),
    ])
  ]
})
export class PromessaComponent {
  @Input() promessa!: PromessaResponse

  isExpanded = false
  expandedSubitems: string[] = []

  toggleExpand(): void {
    this.isExpanded = !this.isExpanded
  }

  toggleSubitem(title: string, event: Event): void {
    event.stopPropagation()

    if (this.expandedSubitems.includes(title)) {
      this.expandedSubitems = this.expandedSubitems.filter((item) => item !== title)
    } else {
      this.expandedSubitems.push(title)
    }
  }

  isSubitemExpanded(title: string): boolean {
    return this.expandedSubitems.includes(title)
  }
}