declare module '@apiverve/thesaurus' {
  export interface thesaurusOptions {
    api_key: string;
    secure?: boolean;
  }

  /**
   * Describes fields the current plan does not unlock. Locked fields arrive as null
   * in `data`; `locked_fields` names them, using dot paths for nested fields.
   * Absent when the plan unlocks everything.
   */
  export interface PremiumInfo {
    message: string;
    upgrade_url: string;
    locked_fields: string[];
  }

  export interface thesaurusResponse {
    status: string;
    error: string | null;
    data: ThesaurusData;
    code?: number;
    premium?: PremiumInfo;
  }


  interface ThesaurusData {
      word:         null | string;
      similarCount: number | null;
      similarWords: (null | string)[];
  }

  export default class thesaurusWrapper {
    constructor(options: thesaurusOptions);

    execute(callback: (error: any, data: thesaurusResponse | null) => void): Promise<thesaurusResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: thesaurusResponse | null) => void): Promise<thesaurusResponse>;
    execute(query?: Record<string, any>): Promise<thesaurusResponse>;
  }
}
