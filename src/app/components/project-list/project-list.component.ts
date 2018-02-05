import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { ToastrService } from 'ngx-toastr';

import * as _ from 'lodash';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  projects:Project[] = [];

  constructor(private route: ActivatedRoute, private projectService: ProjectService, private toastr: ToastrService) { }

  ngOnInit() {
    this.projects = this.route.snapshot.data['projects'];
  }

  toggleStatus(project: Project) {
    this.projectService.update(project)
      .subscribe((updatedProject: Project) => {
        if (updatedProject.status) {
          this.toastr.success('Project marked as completed');
          return;
        }

        this.toastr.warning('Project mark as incomplete');
      });
  }

  delete(projectId: number) {
    this.projectService.delete(projectId)
      .subscribe(() => {
          this.toastr.success('Project deleted successfully');
          _.remove(this.projects, {id: projectId});
      });
  }
}
