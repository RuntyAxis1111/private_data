export interface Database {
  public: {
    Tables: {
      Data_HBL_All: {
        Row: {
          id: number;
          created_at: string;
          Tittle: string | null;
          Autor: string | null;
          Details: string | null;
          Link: string | null;
        };
        Insert: {
          id?: number;
          created_at?: string;
          Tittle?: string | null;
          Autor?: string | null;
          Details?: string | null;
          Link?: string | null;
        };
        Update: {
          id?: number;
          created_at?: string;
          Tittle?: string | null;
          Autor?: string | null;
          Details?: string | null;
          Link?: string | null;
        };
      };
    };
  };
}

export type DataRow = Database['public']['Tables']['Data_HBL_All']['Row'];
