import { CommonModule } from '@angular/common';
import { Component, SecurityContext } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AiService } from '../../services/ai.service';
import { DomSanitizer } from '@angular/platform-browser';

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

  showSpinner = false;
  showResponse = false;
  showForm = true;
  showError = false;
  responseMessage = '';

  constructor(private fb: FormBuilder, private aiService: AiService,    private sanitizer: DomSanitizer,
) {
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
    this.showSpinner = true;
    this.showForm = false;
    this.showError = false;
    this.showResponse = false;
    // TODO: replace with your API call
    this.aiService.getContactUsResponse(this.form.value).subscribe((response:any) => {
      console.log('Contact Us response:', response);
      let resp = response.content || 'We have received your message and will get back to you shortly.';
      this.responseMessage = this.sanitizer.sanitize(SecurityContext.HTML, resp) || '';
      this.success = true;
      this.showSpinner = false;
      this.showResponse = true;
    }, (error) => {
      console.error('Contact Us error:', error);
      this.showSpinner = false;
      this.showError = true;
      this.showForm = true;
    }, () => {
      this.form.reset();
    });


  }

}
