import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  user:Object = {
    nombre: "Luis",
    apellido: "Martinez",
    correo: ""
  }

  constructor() { }

  ngOnInit() {
  }

  guardar(forma:NgForm){
    // console.log('Formulario enviado');
    console.log("ngForm",forma);
    console.log("Valor forma", forma.value)
    console.log("Usuario ", this.user);
  }
}
