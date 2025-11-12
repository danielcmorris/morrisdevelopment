import { Component } from '@angular/core';
import { AppConfig } from '../../../enums/app-data';
import { CommonModule } from '@angular/common';
import { AssetPaths } from '../../../enums/asset-paths.enum';

@Component({
    selector: 'app-social-media-links',
    imports: [
        CommonModule
    ],
    templateUrl: './social-media-links.component.html',
    styleUrl: './social-media-links.component.scss'
})
export class SocialMediaLinksComponent {
    public appConfig = AppConfig;
    public assetPaths = AssetPaths;
}
