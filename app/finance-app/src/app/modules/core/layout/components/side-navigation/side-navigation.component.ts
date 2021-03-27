import { Component, Input, OnInit } from '@angular/core';

import { SideNavigationLink } from '../../model/SideNavigationLink';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss'],
})
export class SideNavigationComponent implements OnInit {
  @Input() sideNavigationLinks: SideNavigationLink[] = [
    { name: 'Dashboard', routerLink: '/' },
    { name: 'Test-connection', routerLink: 'test-connection' },
    { name: 'Categories', routerLink: 'category' },
    { name: 'Accounts', routerLink: 'account' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
