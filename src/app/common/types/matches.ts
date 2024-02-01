export interface Matches {
  leagues?: League[];
  date?: string;
}

export interface League {
  isGroup?: boolean;
  groupName?: string;
  ccode?: string;
  id?: number;
  primaryId?: number;
  name?: string;
  matches?: Match[];
  parentLeagueId?: number;
  parentLeagueName?: string;
  internalRank?: number;
  liveRank?: number;
  simpleLeague?: boolean;
}

export interface Match {
  id?: number;
  leagueId?: number;
  time?: string;
  home?: Away;
  away?: Away;
  eliminatedTeamId?: null;
  statusId?: number;
  tournamentStage?: string;
  status?: Status;
  timeTS?: number;
}

export interface Away {
  id?: number;
  score?: number;
  name?: string;
  longName?: string;
}

export interface Status {
  utcTime?: Date;
  finished?: boolean;
  started?: boolean;
  cancelled?: boolean;
  scoreStr?: string;
  reason?: Reason;
  liveTime?: LiveTime;
  awayRedCards?: number;
  homeRedCards?: number;
}

export interface LiveTime {
  short?: string;
}
export interface Reason {
  short?: Short;
  shortKey?: ShortKey;
  long?: Long;
  longKey?: LongKey;
}

export enum Long {
  Cancelled = 'Cancelled',
  FullTime = 'Full-Time',
  Postponed = 'Postponed',
}

export enum LongKey {
  Cancelled = 'cancelled',
  Finished = 'finished',
  Postponed = 'postponed',
}

export enum Short {
  Can = 'Can',
  Ft = 'FT',
  Pp = 'PP',
}

export enum ShortKey {
  CancelledShort = 'cancelled_short',
  FulltimeShort = 'fulltime_short',
  PostponedShort = 'postponed_short',
}
