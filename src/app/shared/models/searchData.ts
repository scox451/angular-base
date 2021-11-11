import { SearchResult } from './searchResult';

export interface SearchData {
  searchType: string;
  expression: string;
  results: SearchResult[];
}
