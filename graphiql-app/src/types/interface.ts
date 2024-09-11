export interface LanguageState {
  language: string;
}
export interface GraphiQLLinksState {
  graphiQLLinks: string[][];
}

export interface RestLinksState {
  restLinks: string[][];
}

export interface AppState {
  language: LanguageState;
  restLinks: RestLinksState;
  graphiQLLinks: GraphiQLLinksState;
}
