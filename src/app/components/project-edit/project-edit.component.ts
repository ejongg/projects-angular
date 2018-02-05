import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Project } from '../../models/project';

import { ProjectService } from '../../services/project.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.css']
})
export class ProjectEditComponent implements OnInit {

  project = new Project();

  constructor(private route: ActivatedRoute, private projectService: ProjectService, private toastr: ToastrService) { }

  ngOnInit() {
    this.project = this.route.snapshot.data['project'];
  }

  updateProject() {
    this.projectService.update(this.project)
      .subscribe(updatedProject => {
        this.toastr.success('Project updated successfully');
      })
  }
}
