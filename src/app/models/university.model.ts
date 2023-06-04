export interface University {
  country: string;
  alpha_two_code: string;
  name: string;
  domains: Array<string>;
  web_pages: Array<string>;
}

export interface UniversityState {
  universityList: Array<University>,
  searchTerm?: string;
  searching: boolean;
}