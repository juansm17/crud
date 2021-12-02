import { Component, OnInit } from '@angular/core';;
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { persona } from 'src/app/models/persona';
import { ProductoService } from 'src/app/services/persona.service';
@Component({
  selector: 'app-crear-persona',
  templateUrl: './crear-persona.component.html',
  styleUrls: ['./crear-persona.component.css']
})
export class CrearPersonaComponent implements OnInit {

  personaForm: FormGroup;
  titulo = 'Crear persona';
  id: string | null;
  constructor(private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private _personaService: ProductoService,
    private aRouter: ActivatedRoute) {
      this.personaForm = this.fb.group({
        nombre: ['', Validators.required],
        apellido: ['', Validators.required],
        sexo: ['', Validators.required],
        cedula: ['', Validators.required],
      })
      this.id = this.aRouter.snapshot.paramMap.get('id');
     }

  ngOnInit(): void {
    this.esEditar();
  }
  agregarProducto() {

    const PERSONA: persona = {
      nombre: this.personaForm.get('nombre')?.value,
      apellido: this.personaForm.get('apellido')?.value,
      sexo: this.personaForm.get('sexo')?.value,
      cedula: this.personaForm.get('cedula')?.value,
    }

    console.log(PERSONA);
    this._personaService.guardarPersona(PERSONA).subscribe(data => {
      this.toastr.success('El producto fue registrado con exito!', 'Producto Registrado!');
      this.router.navigate(['/']);
    }, error => {
      console.log(error);
      this.personaForm.reset();
    })

  
  }

  esEditar() {

    if(this.id !== null) {
      this.titulo = 'Editar producto';
      this._personaService.obtenerProducto(this.id).subscribe(data => {
        this.personaForm.setValue({
          nombre: data.nombre,
          apellido: data.apellido,
          sexo: data.sexo,
          cedula: data.cedula,
        })
      })
    }
  }

}
