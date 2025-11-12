import { Routes } from '@angular/router';
import { AppRoutes } from '../enums/routes-data.enum';
import { HomeComponent } from './pages/home/home.component';
import { ErrorComponent } from './pages/error/error.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { EducationComponent } from './pages/education/education.component';
import { AchievementsComponent } from './pages/achievements/achievements.component';
import { ArticleComponent } from './pages/article/article.component';

export const routes: Routes = [
    {
        path: AppRoutes.HOME,
        component: HomeComponent,
        title: `Morris Development`,
    },
    {
        path: AppRoutes.PROJECTS,
        component: ProjectsComponent,
        title: `Projects | Morris Development`,
    },
    {
        path: AppRoutes.ARTICLES,
        component: ExperienceComponent,
        title: `Experience | Morris Development`,
    },
    {
        path: AppRoutes.ARTICLES + "/:slug",
        component: ArticleComponent,
        title: `Vector`,
    },
    {
        path: 'articles/:slug',
        component: ArticleComponent
    },
    {
        path: AppRoutes.EDUCATION,
        component: EducationComponent,
        title: `Education | Morris Development`,
    },
    {
        path: AppRoutes.ACHIEVEMENTS,
        component: AchievementsComponent,
        title: `Achievements | Morris Development`,
    },
    {
        path: "**",
        redirectTo: AppRoutes.ERROR,
    },
    {
        path: AppRoutes.ERROR,
        component: ErrorComponent,
        title: `Error | Morris Development`,
    }
];
