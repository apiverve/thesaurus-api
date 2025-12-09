declare module '@apiverve/thesaurus' {
  export interface thesaurusOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface thesaurusResponse {
    status: string;
    error: string | null;
    data: ThesaurusData;
    code?: number;
  }


  interface ThesaurusData {
      word:         string;
      similarCount: number;
      similarWords: string[];
  }

  export default class thesaurusWrapper {
    constructor(options: thesaurusOptions);

    execute(callback: (error: any, data: thesaurusResponse | null) => void): Promise<thesaurusResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: thesaurusResponse | null) => void): Promise<thesaurusResponse>;
    execute(query?: Record<string, any>): Promise<thesaurusResponse>;
  }
}
