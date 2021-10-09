export enum Projects {
  FINANCE_APP = 'finance-app',
  PLANT_DIARY_APP = 'plant-diary-app',
  GAME_APP = 'game-app',
}

export interface ProjectData {
  name: string;
  description: string;
  url: string;
  button: string;
  image: string;
}

export const projectConfiguration: Map<Projects, ProjectData> = new Map([
  [
    Projects.FINANCE_APP,
    {
      name: 'Finance app',
      description: 'Manage your budget',
      url: '/finance-app',
      button: 'Discover',
      image: './../../../../assets/img/project-banner/money.jpg',
    },
  ],
  [
    Projects.PLANT_DIARY_APP,
    {
      name: 'Plant diary',
      description: 'Manage your plants',
      url: '/plant-diary',
      button: 'Discover',
      image: './../../../../assets/img/project-banner/plant.jpg',
    },
  ],
  [
    Projects.GAME_APP,
    {
      name: 'Game',
      description: 'Lets play',
      url: '/game',
      button: 'Start',
      image: './../../../../assets/img/project-banner/game.jpg',
    },
  ],
]);
