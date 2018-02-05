import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectsResolver } from './resolvers/projects.resolver';
import { ProjectResolver } from './resolvers/project.resolver';

import { ProjectListComponent } from './components/project-list/project-list.component';
import { ProjectCreateComponent } from './components/project-create/project-create.component';
import { ProjectEditComponent } from './components/project-edit/project-edit.component';

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
      },
      {
        path: 'edit/:projectId',
        component: ProjectEditComponent,
        resolve: {
          project: ProjectResolver
        }
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
