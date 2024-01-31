export interface SearchResults {
    took: number;
    leagueSuggest?: LeagueSuggestEntity[] | null;
    matchSuggest?: MatchSuggestEntity[] | null;
    teamSuggest?: TeamSuggestEntity[] | null;
    squadMemberSuggest?: SquadMemberSuggestEntity[] | null;
  }
  export interface LeagueSuggestEntity {
    text: string;
    offset: number;
    length: number;
    options?: LeagueOptions[] | null;
  }
  export interface LeagueOptions {
    text: string;
    score: number;
    payload: LeaguePayload;
  }
  export interface LeaguePayload {
    matchDate: string;
    id: string;
    countryCode: string;
  }
  export interface MatchSuggestEntity {
    text: string;
    offset: number;
    length: number;
    options?: MatchOptions[] | null;
  }
  export interface MatchOptions {
    text: string;
    score: number;
    payload: MatchPayload;
  }
  export interface MatchPayload {
    matchDate: string;
    id: string;
    homeTeamId: string;
    awayTeamId: string;
    homeName: string;
    awayName: string;
  }
  export interface TeamSuggestEntity {
    text: string;
    offset: number;
    length: number;
    options?: TeamOptions[] | null;
  }
  export interface TeamOptions {
    text: string;
    score: number;
    payload: TeamPayload;
  }
  export interface TeamPayload {
    matchDate: string;
    leagueId: number;
    id: string;
    newsLanguages?: null[] | null;
  }
  export interface SquadMemberSuggestEntity {
    text: string;
    offset: number;
    length: number;
    options?: SquadMemberOptions[] | null;
  }
  export interface SquadMemberOptions {
    text: string;
    score: number;
    payload: SquadMemberPayload;
  }
  export interface SquadMemberPayload {
    matchDate: string;
    id: string;
    newsLanguages?: null[] | null;
    isCoach: boolean;
  }