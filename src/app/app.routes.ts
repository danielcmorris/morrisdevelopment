import { Routes } from '@angular/router';
import { AppRoutes } from '../enums/routes-data.enum';
import { HomeComponent } from './pages/home/home.component';
import { ErrorComponent } from './pages/error/error.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { EducationComponent } from './pages/education/education.component';
import { AchievementsComponent } from './pages/achievements/achievements.component';
import { ArticleComponent } from './pages/article/article.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { EmbeddingComponent } from './ai/embedding/embedding.component';
import { DocumentEditorComponent } from './components/document-editor/document-editor.component';
import { ArticleEditorComponent } from './pages/admin/article-editor/article-editor.component';
import { authGuard } from './guards/auth.guard';

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
        path: AppRoutes.PROJECTS + '/dash',
        component: ProjectsComponent,
        title: `Dash | Morris Development`,
    },
    {
        path: AppRoutes.ARTICLES,
        component: ExperienceComponent,
        title: `Technical Articles | Morris Development`,
    },
    {
        path: AppRoutes.ARTICLES + "/:slug",
        component: ArticleComponent,
        title: `Articles | Morris Development`,
    },
    {
        path: 'articles/:slug',
        component: ArticleComponent
    },
    {
        path: 'admin',
        canActivate: [authGuard],
        children: [
            {
                path: 'home',
                loadComponent: () => import('./admin/dashboard/dashboard.component')
            },

             {
                path: 'login',
                loadComponent: () => import('./admin/login/login.component')
            },
             {
                path: 'articles', title: 'Articles',
                loadComponent: () => import('./admin/articles/article-list/article-list.component')
            },
            
            {
                path: 'articles/:articleId',
                component: ArticleEditorComponent
            },
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            }
        ]
    },

    {
        path: AppRoutes.EDUCATION,
        component: EducationComponent,
        title: `Education | Morris Development`,
    },
    {
        path: 'about',
        component: AboutComponent,
        title: `About | Morris Development`,
    },
    {
        path: 'contact',
        component: ContactComponent,
        title: `Contact | Morris Development`,
    },
    {
        path: 'samples/embedding',
        component: EmbeddingComponent,
        title: `Embedding | Morris Development`,
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
