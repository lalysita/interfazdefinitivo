import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';



interface AutoCompleteCompleteEvent {
  originalEvent: Event;
  query: string;
}

@Component({
  selector: 'app-deber-4',
  standalone: false,
  templateUrl: './deber-4.component.html',
  styleUrl: './deber-4.component.css'
})
export class Deber4Component {
  profileForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      cedula: ['', Validators.required],
      opinion: ['', Validators.required],
      direccion: ['', Validators.required],
      gender: ['', Validators.required],
      message: ['', Validators.required],
      agree: [false, Validators.requiredTrue],
    });
  }

  onSubmit(): void {
    if (this.profileForm.valid) {
      console.log(this.profileForm.value);
    } else {
      console.log('Formulario no válido');
    }
  }
}
