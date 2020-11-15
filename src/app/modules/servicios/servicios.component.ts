import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../../services/servicios.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',  
  styleUrls: [
    './servicios.component.css'
  ]
})
export class ServiciosComponent implements OnInit {

  listServices: object = null;
  preload: boolean = false;

  constructor( private servicios: ServiciosService ) { }

  ngOnInit(): void {

    this.preload = true;

    this.loadServices();    
  }

  private loadServices(){

    this.servicios.getData()
    .subscribe(respuesta => {
    
      this.listServices = respuesta;

      this.preload = false;

    })
    
  }

}
