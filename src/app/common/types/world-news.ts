export interface WorldNews {
  imageUrl?: string;
  title?: string;
  gmtTime?: Date;
  sourceStr?: SourceStr;
  lead?: string;
  sourceIconUrl?: string;
  page?: Page;
}

export interface Page {
  url?: string;
}

export type SourceStr = "FotMob";