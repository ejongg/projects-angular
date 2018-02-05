import { Component, OnInit } from '@angular/core';

import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.css']
})
export class ProjectCreateComponent implements OnInit {

  project = new Project();

  constructor(private projectService: ProjectService, private toastr: ToastrService) { }

  ngOnInit() {
  }

  createProject() {
    this.projectService.create(this.project)
      .subscribe(project => {
        this.toastr.success('Project created');
      });
  }
}
