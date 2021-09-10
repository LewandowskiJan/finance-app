interface ImportanceConfigurationElement {
  importance: number;
  class: string;
}

export const importanceConfiguration: ReadonlyArray<ImportanceConfigurationElement> = [
  { importance: 1, class: 'low' },
  { importance: 2, class: 'medium' },
  { importance: 3, class: 'high' },
];
