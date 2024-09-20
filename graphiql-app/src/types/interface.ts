export interface LanguageState {
  language: string;
}

export interface RequestData {
  url: string;
  method: string;
  headers: Record<string, string> | string;
  body?: string;
  values?: Record<string, string | number | boolean>;
  sdlUrl?: string;
  query?: string;
  variables?: string;
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

export interface AppState {
  language: LanguageState;
  restLinks: RestLinksState;
  graphiQLLinks: GraphiQLLinksState;
}

export interface DataGraphiQL {
  endpoint: string;
  sdlEndpoint: string;
  headers: string;
  query: string;
  variables?: string;
}

export interface RequestItemProps {
  /* eslint-disable react/require-default-props */
  requestItem?: RequestItem;
}

export interface ActionResponse {
  status: number | null;
  data: string | null;
  error?: string | null;
}

export interface LoaderResponse {
  method: string;
  url: string;
}
