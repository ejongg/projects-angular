import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

import { Observable } from "rxjs";

import { Project } from '../models/project';
import { ProjectService } from '../services/project.service';

@Injectable()
export class ProjectsResolver implements Resolve<Project> {

  constructor(private projectsService: ProjectService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : any {
    return this.projectsService.getAll();
  }
}
