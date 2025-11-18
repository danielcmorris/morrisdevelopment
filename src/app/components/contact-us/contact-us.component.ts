import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
   standalone: true,
  selector: 'app-contact-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss',
})
export class ContactUsComponent {
  form: FormGroup;
  submitted = false;
  success = false;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required, Validators.minLength(10)]],
      acceptsMarketing: [false]
    });
  }

  onSubmit(): void {
    this.submitted = true;
    this.success = false;

    if (this.form.invalid) {
      return;
    }

    // TODO: replace with your API call
    console.log('Contact form submitted:', this.form.value);

    this.success = true;
    this.form.reset();
    this.submitted = false;
  }

}
