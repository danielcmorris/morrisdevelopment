import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';
import { AppConfig } from '../../../enums/app-data';

@Component({
  selector: 'app-about',
  imports: [ProjectCardComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  public appConfig = AppConfig;
 
  constructor(public theme: ThemeService) { }
}
