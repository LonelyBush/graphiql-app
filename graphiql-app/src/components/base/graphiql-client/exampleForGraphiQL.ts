interface Example {
  endpoint: string;
  sdlEndpoint: string;
  headers: string;
  query: string;
  variables?: string;
}

const example: Example = {
  endpoint: 'https://rickandmortyapi.com/graphql',
  sdlEndpoint: 'https://rickandmortyapi.com/graphql',
  headers: '{"Content-Type": "application/json"}',
  query:
    'query ($filter: FilterCharacter) { characters(filter: $filter) { results { name } } }',
};
export default example;
