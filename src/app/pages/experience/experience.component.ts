import { Component } from '@angular/core';
import { AppConfig } from '../../../enums/app-data';
import { AssetPaths } from '../../../enums/asset-paths.enum';
import { ExperienceCardComponent } from '../../components/experience-card/experience-card.component';
import { AppRoutes } from '../../../enums/routes-data.enum';
import { GlobalStatsService } from '../../services/global-stats/global-stats.service';
import { ThemeService } from '../../services/theme.service';
import { CommonModule } from '@angular/common';
import { AiService } from '../../services/ai.service';
import { LoadingBarComponent } from '../../components/loading-bar/loading-bar.component';
import { FormsModule } from '@angular/forms';
import { ArticleCardComponent } from "../../components/article-card/article-card.component";
import { Article } from '../../../interfaces/article.interface';
 
@Component({
    selector: 'app-experience',
    imports: [CommonModule, LoadingBarComponent, FormsModule,
    ExperienceCardComponent, ArticleCardComponent],
    templateUrl: './experience.component.html',
    styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
    public appConfig = AppConfig;
    public assetPaths = AssetPaths;
    public searchText = "";
    public searching = false;
    public showResponse = false;

    public articles:Article[] = []
    constructor(
        private _globalStates: GlobalStatsService, public theme: ThemeService, private ai: AiService
    ) {
        this._globalStates.setCanonicalUrl(AppRoutes.EXPERIENCE);

        var library = this.appConfig.experienceSections
    }

    async search() {
        if (this.searchText == '') this.searchText = 'how do I set up a vector database'
        this.searching = true;
                this.showResponse = false;

        this.ai.searchArticle(this.searchText)
            .subscribe((retval:any) => {
                console.log(retval);

                let resources:any = [];



                retval.resources.forEach((e:any) => {
                    let article:Article = {
                        articleID: e.articleID,
                        title:e.articleName,
                        status:'Published',
                        description: e.summary,
                        sourceURL: e.sourceUrl,
                    }
                    this.articles.push(article);
                    let resource = {
                        orgLink:e.sourceUrl,
                        orgLogoPath: e.imageUrl,
                        orgName: e.articleName,
                        positions : []
                    }
                    let resourceItem:any = [];
                    e.items.forEach((item:any) => {
                        let i = {
                            positionName: item.articleName,
                            duration: item.tags,
                            workPoints: item.highlights
                        }
                        resourceItem.push(i);
                    });
                    resource.positions = resourceItem;
                    resources.push(resource);
                });



                // let e = [{
                    
                //     orgLink: "/samples/embedding",
                //     orgLogoPath: "/assets/articles/How-Embeddings-Work.jpg",
                //     orgName: "AI Vector Embeddings Explained and Demonstrated",
                //     positions: [
                //         {
                //             positionName: "AI Vector Embeddings Explained and Demonstrated",
                //             duration: "OpenAI, Qdrant, Vector Databases",

                //             jobType: "",
                //             workPoints: [
                //                 "Working Sample of AI Vector Embeddings",
                //                 "Learning what a Vector Embedding is and how it works",
                //                 "How to write the code to generate embeddings",
                //                 "Understanding the full process of using this with AI",
                //             ]
                //         }
                //     ]
                // }]

                var exp = {
                    experienceSectionTitle: "",
                    experiences: resources
                }
                 this.appConfig.experienceSections=[];
                this.appConfig.experienceSections.unshift(exp);
                this.searching = false;
                        this.showResponse = true;

            }
 
            );
      

    }
}
