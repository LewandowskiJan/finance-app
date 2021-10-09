import { SideNavigationLink } from './../model/SideNavigationLink';

export const navigationLinks: SideNavigationLink[] = [
  { name: 'Back', routerLink: '/' },
  { name: 'Dashboard', routerLink: '/finance-app' },
  { name: 'Test-connection', routerLink: 'test-connection' },
  { name: 'Categories', routerLink: 'category' },
  { name: 'Accounts', routerLink: 'account' },
  { name: 'Transfers', routerLink: 'transfer/add' },
];
