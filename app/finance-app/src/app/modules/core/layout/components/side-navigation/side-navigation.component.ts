import { Component } from '@angular/core';

import { SideNavigationLink } from '../../model/SideNavigationLink';
import { navigationLinks } from './../../configuration/navigation-links';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss'],
})
export class SideNavigationComponent {
  public sideNavigationLinks: SideNavigationLink[] = navigationLinks;
}
