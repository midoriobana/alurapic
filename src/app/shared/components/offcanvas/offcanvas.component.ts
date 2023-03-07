import { Component } from '@angular/core';
import { UtilitariosService } from '../../providers/utilitarios.service';

@Component({
  selector: 'app-offcanvas',
  templateUrl: './offcanvas.component.html'
})
export class OffcanvasComponent {
  
  visivel: boolean = false

  constructor(
    private utilitariosService: UtilitariosService
  ) { }


  abrir() {
    this.utilitariosService.aberto.subscribe(() => {
      this.visivel = true
    })
  }

}
