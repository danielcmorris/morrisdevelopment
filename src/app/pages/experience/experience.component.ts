import { Component } from '@angular/core';
import { AppConfig } from '../../../enums/app-data';
import { AssetPaths } from '../../../enums/asset-paths.enum';
import { ExperienceCardComponent } from '../../components/experience-card/experience-card.component';
import { AppRoutes } from '../../../enums/routes-data.enum';
import { GlobalStatsService } from '../../services/global-stats/global-stats.service';
import { ThemeService } from '../../services/theme.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-experience',
    imports: [CommonModule,
        ExperienceCardComponent,
    ],
    templateUrl: './experience.component.html',
    styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
    public appConfig = AppConfig;
    public assetPaths = AssetPaths;

    constructor(
        private _globalStates: GlobalStatsService, public theme: ThemeService
    ) {
        this._globalStates.setCanonicalUrl(AppRoutes.EXPERIENCE);
    }
}
