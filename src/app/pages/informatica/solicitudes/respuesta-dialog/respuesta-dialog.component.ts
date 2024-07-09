import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

export interface DialogData {
  idSolicitud: string;
}

@Component({
  selector: 'app-respuesta-dialog',
  standalone: true,
  imports: [
    MatFormFieldModule,
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './respuesta-dialog.component.html',
  styleUrls: ['./respuesta-dialog.component.css']
})
export class RespuestaDialogComponent implements OnInit {
  respuesta: string = '';

  constructor(
    public dialogRef: MatDialogRef<RespuestaDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    console.log('ID de solicitud recibido:', this.data.idSolicitud);
  }


  ngOnInit(): void {
    console.log('Datos recibidos:', this.data);
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (this.respuesta.trim()) {
      console.log(`Respuesta para la solicitud ${this.data.idSolicitud}: ${this.respuesta}`);
      // Aquí puedes agregar la lógica para enviar la respuesta al servidor
      this.dialogRef.close(this.respuesta);
    }
  }


}