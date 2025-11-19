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
        path: AppRoutes.PROJECTS +'/dash',
        component: ProjectsComponent,
        title: `Dash | Morris Development`,
    },
    {
        path: AppRoutes.ARTICLES,
        component: ExperienceComponent,
        title: `Experience | Morris Development`,
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
        path: 'article/editor',
        component: DocumentEditorComponent
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
