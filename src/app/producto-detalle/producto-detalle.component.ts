import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConsultaService } from '../consulta.service';

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.scss'],
})

export class ProductodetalleComponent  implements OnInit {

  producto: any;
  constructor(private route: ActivatedRoute, 
    private consulta: ConsultaService) { }

    ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id');
    
      if (id !== null) {
        const numericId = +id;
        
        this.consulta.getProductoPorId(numericId).subscribe((producto) => {
          this.producto = producto;
        });
      }
    }

}
