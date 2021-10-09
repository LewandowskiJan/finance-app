import { Component, OnInit } from '@angular/core';

import { ProjectData, projectConfiguration, Projects } from '../../configuration/projects-configuration.map';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  public projects: Map<Projects, ProjectData> = projectConfiguration;

  constructor() {}

  ngOnInit(): void {}
}
