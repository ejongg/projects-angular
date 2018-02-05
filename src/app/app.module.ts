import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { ProjectCreateComponent } from './components/project-create/project-create.component';

import { ProjectService } from './services/project.service';

import { ProjectsResolver } from './resolvers/projects.resolver';
import { ProjectResolver } from './resolvers/project.resolver';

import { ProjectEditComponent } from './components/project-edit/project-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    ProjectCreateComponent,
    ProjectEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    ProjectService,
    ProjectsResolver,
    ProjectResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
