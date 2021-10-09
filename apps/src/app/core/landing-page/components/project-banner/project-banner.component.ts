import { Component, Input, OnInit } from '@angular/core';

import { ProjectData } from '../../configuration/projects-configuration.map';

@Component({
  selector: 'app-project-banner',
  templateUrl: './project-banner.component.html',
  styleUrls: ['./project-banner.component.scss'],
})
export class ProjectBannerComponent implements OnInit {
  @Input()
  public project: ProjectData;
  public background: { [key: string]: any };
  constructor() {}

  ngOnInit(): void {
    this.background = {
      'background-image': `url(${this.project.image})`,
    };
  }
}
