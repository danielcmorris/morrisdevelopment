import { Component } from '@angular/core';
import { ContactUsComponent } from '../../components/contact-us/contact-us.component';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-contact',
  imports: [ContactUsComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
constructor(public theme: ThemeService) {}
}
