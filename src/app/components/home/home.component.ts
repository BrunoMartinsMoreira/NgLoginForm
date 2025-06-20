import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  dadosLogin = {
    email: '',
    senha: '',
  };

  exibirDados = false;

  mostrar() {
    this.exibirDados = true;
  }
}
