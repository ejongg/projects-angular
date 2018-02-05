import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Project } from '../models/project';

@Injectable()
export class ProjectService {

  private baseUrl = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(`${this.baseUrl}/projects`);
  }

  create(project: Project) {
    return this.http.post(`${this.baseUrl}/projects`, project);
  }

  update(project: Project) {
    return this.http.put(`${this.baseUrl}/projects/${project.id}`, project);
  }

  delete(projectId: number) {
    return this.http.delete(`${this.baseUrl}/projects/${projectId}`);
  }
}
