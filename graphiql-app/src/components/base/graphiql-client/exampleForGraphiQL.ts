import { DataGraphiQL } from '../../../types/interface';

const example: DataGraphiQL = {
  endpoint: 'https://rickandmortyapi.com/graphql',
  sdlEndpoint: 'https://rickandmortyapi.com/graphql',
  headers: '{"Content-Type": "application/json"}',
  query:
    'query ($filter: FilterCharacter) { characters(filter: $filter) { results { name } } }',
  variables: `{ 
    "filter": {
       "name":   "black"
       }
      }`,
};

export default example;
