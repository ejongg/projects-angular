import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { ProjectCreateComponent } from './components/project-create/project-create.component';
import { AppComponent } from './app.component';
import { ProjectsResolver } from './resolvers/projects.resolver';

const routes: Routes = [
  {
    path: 'projects',
    children: [
      {
        path: '',
        component: ProjectListComponent,
        resolve: {
          projects: ProjectsResolver
        }
      },
      {
        path: 'create',
        component: ProjectCreateComponent
      }
    ]
  },
  {
    path: '',
    redirectTo: '/projects',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
