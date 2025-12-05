import { Component, input, InputSignal } from '@angular/core';
import { Experience } from '../../../interfaces/work-experience.interface';

@Component({
    selector: 'app-experience-card',
    imports: [],
    templateUrl: './experience-card.component.html',
    styleUrl: './experience-card.component.scss'
})
export class ExperienceCardComponent {
    public experience: InputSignal<Experience> = input.required<Experience>();
}
