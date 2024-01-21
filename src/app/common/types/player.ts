export interface Player {
  id?: number;
  name?: string;
  birthDate?: BirthDate;
  isCoach?: boolean;
  isCaptain?: boolean;
  primaryTeam?: PrimaryTeam;
  positionDescription?: PositionDescription;
  injuryInformation?: null;
  playerInformation?: PlayerInformation[];
  mainLeague?: MainLeague;
  trophies?: Trophies;
  recentMatches?: RecentMatch[];
  careerHistory?: CareerHistory;
  traits?: Traits;
  meta?: Meta;
  coachStats?: null;
  statSeasons?: StatSeason[];
}

export interface BirthDate {
  utcTime?: Date;
  timezone?: string;
}

export interface CareerHistory {
  showFootnote?: boolean;
  careerItems?: CareerItems;
  fullCareer?: boolean;
}

export interface CareerItems {
  senior?: NationalTeam;
  "national team"?: NationalTeam;
}

export interface NationalTeam {
  teamEntries?: TeamEntry[];
  seasonEntries?: SeasonEntry[];
}

export interface SeasonEntry {
  seasonName?: string;
  appearances?: string;
  goals?: string;
  assists?: string;
  rating?: Rating;
  tournamentStats?: TournamentStat[];
  teamId?: number;
  team?: TeamName;
  teamGender?: TeamGender;
  transferType?: TransferType | null;
}

export interface Rating {
  num?: string;
  bgcolor?: Bgcolor | null;
}

export enum Bgcolor {
  F08022 = "#f08022",
  The0E87E0 = "#0e87e0",
  The1Ec853 = "#1ec853",
  The989898 = "#989898",
}

export enum TeamName {
  AlNassrFC = "Al Nassr FC",
  Juventus = "Juventus",
  ManchesterUnited = "Manchester United",
  Portugal = "Portugal",
  RealMadrid = "Real Madrid",
  RiyadhSeasonTeamXI = "Riyadh Season Team XI",
  SportingCP = "Sporting CP",
}

export enum TeamGender {
  Male = "male",
}

export interface TournamentStat {
  tournamentId?: number;
  leagueName?: string;
  isFriendly?: boolean;
  seasonName?: string;
  goals?: string;
  assists?: string;
  appearances?: string;
  rating?: Rating;
  leagueId?: number;
  seasonRating?: number;
}

export interface TransferType {
  text?: string;
  localizationKey?: string;
}

export interface TeamEntry {
  participantId?: number;
  teamId?: number;
  team?: TeamName;
  teamGender?: TeamGender;
  transferType?: TransferType | null;
  startDate?: Date;
  endDate?: Date | null;
  active?: boolean;
  role?: null;
  appearances?: null | string;
  goals?: null | string;
  assists?: null | string;
  hasUncertainData?: boolean;
}

export interface MainLeague {
  leagueName?: string;
  leagueId?: number;
  playerProps?: PlayerProp[];
}

export interface PlayerProp {
  value?: string;
  title?: string;
  key?: string;
  ratingProps?: Rating;
}

export interface Meta {
  seopath?: string;
  pageurl?: string;
  faqJSONLD?: FAQJSONLD;
  personJSONLD?: PersonJSONLD;
  breadcrumbJSONLD?: BreadcrumbJSONLD;
}

export interface BreadcrumbJSONLD {
  "@context"?: string;
  "@type"?: string;
  itemListElement?: ItemListElement[];
}

export interface ItemListElement {
  "@type"?: string;
  position?: number;
  name?: string;
  item?: string;
}

export interface FAQJSONLD {
  "@context"?: string;
  "@type"?: string;
  mainEntity?: MainEntity[];
}

export interface MainEntity {
  "@type"?: string;
  name?: string;
  acceptedAnswer?: AcceptedAnswer;
}

export interface AcceptedAnswer {
  "@type"?: string;
  text?: string;
}

export interface PersonJSONLD {
  "@context"?: string;
  "@type"?: string;
  name?: string;
  birthDate?: Date;
  url?: string;
  nationality?: Affiliation;
  affiliation?: Affiliation;
  gender?: string;
  height?: Eight;
  weight?: Eight;
}

export interface Affiliation {
  "@type"?: string;
  name?: TeamName;
}

export interface Eight {
  "@type"?: string;
  unitText?: string;
  value?: string;
}

export interface PlayerInformation {
  value?: Value;
  title?: string;
  translationKey?: string;
  icon?: Icon;
  countryCode?: string;
}

export interface Icon {
  type?: string;
  id?: string;
}

export interface Value {
  key?: null | string;
  fallback?: number | string;
}

export interface PositionDescription {
  positions?: Position[];
  primaryPosition?: PrimaryPosition;
  nonPrimaryPositions?: PrimaryPosition[];
}

export interface PrimaryPosition {
  label?: string;
  key?: string;
}

export interface Position {
  strPos?: PrimaryPosition;
  strPosShort?: PrimaryPosition;
  occurences?: number;
  position?: string;
  isMainPosition?: boolean;
  pitchPositionData?: PitchPositionData | null;
}

export interface PitchPositionData {
  right?: number;
  top?: number;
  ratio?: number;
}

export interface PrimaryTeam {
  teamId?: number;
  teamName?: TeamName;
  onLoan?: boolean;
  teamColors?: TeamColors;
}

export interface TeamColors {
  color?: string;
  colorAlternate?: string;
  colorAway?: string;
  colorAwayAlternate?: string;
}

export interface RecentMatch {
  teamId?: number;
  teamName?: RecentMatchTeamName;
  opponentTeamId?: number;
  opponentTeamName?: string;
  isHomeTeam?: boolean;
  id?: number;
  matchDate?: MatchDate;
  matchPageUrl?: string;
  leagueId?: number;
  leagueName?: LeagueName;
  stage?: null | string;
  homeScore?: number;
  awayScore?: number;
  minutesPlayed?: number;
  goals?: number;
  assists?: number;
  yellowCards?: number;
  redCards?: number;
  ratingProps?: RatingProps;
  playerOfTheMatch?: boolean;
  onBench?: boolean;
}

export enum LeagueName {
  AFCChampionsLeagueGrpE = "AFC Champions League Grp. E",
  ArabClubChampionsCupFinalStage = "Arab Club Champions Cup Final Stage",
  ArabClubChampionsCupGrpC = "Arab Club Champions Cup Grp. C",
  ClubFriendlies = "Club Friendlies",
  EUROQualificationGrpJ = "EURO Qualification Grp. J",
  SaudiProfessionalLeague = "Saudi Professional League",
}

export interface MatchDate {
  utcTime?: Date;
}

export interface RatingProps {
  num?: number | string;
  bgcolor?: Bgcolor;
}

export enum RecentMatchTeamName {
  AlNassrFC = "Al Nassr FC",
  Portugal = "Portugal",
  RiyadhAllStar = "Riyadh All-Star",
}

export interface StatSeason {
  seasonName?: string;
  tournaments?: StatSeasonTournament[];
}

export interface StatSeasonTournament {
  name?: string;
  tournamentId?: number;
  entryId?: string;
}

export interface Traits {
  key?: string;
  title?: string;
  items?: Item[];
}

export interface Item {
  key?: string;
  title?: string;
  value?: number;
}

export interface Trophies {
  playerTrophies?: PlayerTrophy[];
  coachTrophies?: any[];
}

export interface PlayerTrophy {
  ccode?: string;
  teamId?: number;
  teamName?: TeamName;
  tournaments?: PlayerTrophyTournament[];
}

export interface PlayerTrophyTournament {
  ccode?: string;
  leagueId?: number;
  leagueName?: string;
  seasonsWon?: string[];
  seasonsRunnerUp?: string[];
}