import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { persona } from 'src/app/models/persona';
import { ProductoService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-listar-persona',
  templateUrl: './listar-persona.component.html',
  styleUrls: ['./listar-persona.component.css']
})
export class ListarPersonaComponent implements OnInit {
  listPersona: persona[] = [];

  constructor(private _productoService: ProductoService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerPersona();
  }
  obtenerPersona() {
    this._productoService.getPersona().subscribe(data => {
      console.log(data);
      this.listPersona = data;
    }, error => {
      console.log(error);
    })
  }

  eliminarPersona(id: any) {
    this._productoService.eliminarPersona(id).subscribe(data => {
      this.toastr.error('La persona fue eliminado con exito' ,'Persona Eliminado');
      this.obtenerPersona();
    }, error => {
      console.log(error);
    })
  }
}
