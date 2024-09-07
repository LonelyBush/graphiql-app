export interface LanguageState {
  language: string;
}

export interface RequestData {
  url: string;
  method: string;
  headers: Record<string, string>;
  body?: string;
  values?: Record<string, string | number | boolean>;
  sdlUrl?: string;
}

export interface RequestItem {
  urlPage: string;
  requestData: RequestData;
  data: string;
}

export interface RestLinksState {
  restLinks: RequestItem[];
}

export interface GraphiQLLinksState {
  graphiQLLinks: RequestItem[];
}
