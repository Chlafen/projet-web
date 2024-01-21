export interface League {
  tabs?: string[];
  allAvailableSeasons?: string[];
  details?: Details;
  seostr?: string;
  QAData?: any[];
  table?: TableElement[];
  transfers?: Transfers;
  overview?: Overview;
  stats?: Stats;
  matches?: Matches;
  playoff?: null;
}

export interface Details {
  id?: number;
  type?: string;
  name?: string;
  selectedSeason?: string;
  latestSeason?: string;
  shortName?: string;
  country?: string;
  faqJSONLD?: null;
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

export interface Matches {
  firstUnplayedMatch?: FirstUnplayedMatch;
  allMatches?: AllMatch[];
  hasOngoingMatch?: boolean;
}

export interface AllMatch {
  round?: number;
  roundName?: number;
  pageUrl?: string;
  id?: string;
  home?: NextOpponentClass;
  away?: NextOpponentClass;
  status?: Status;
}

export interface NextOpponentClass {
  name?: TeamNameEnum;
  shortName?: string;
  id?: string;
}

export enum TeamNameEnum {
  AFCBournemouth = "AFC Bournemouth",
  Arsenal = "Arsenal",
  AstonVilla = "Aston Villa",
  Bournemouth = "Bournemouth",
  Brentford = "Brentford",
  BrightonAndHoveAlbion = "Brighton and Hove Albion",
  BrightonHoveAlbion = "Brighton & Hove Albion",
  Burnley = "Burnley",
  Chelsea = "Chelsea",
  CrystalPalace = "Crystal Palace",
  Everton = "Everton",
  Fulham = "Fulham",
  Liverpool = "Liverpool",
  LutonTown = "Luton Town",
  ManchesterCity = "Manchester City",
  ManchesterUnited = "Manchester United",
  NewcastleUnited = "Newcastle United",
  NottinghamForest = "Nottingham Forest",
  SheffieldUnited = "Sheffield United",
  TottenhamHotspur = "Tottenham Hotspur",
  WestHamUnited = "West Ham United",
  WolverhamptonWanderers = "Wolverhampton Wanderers",
}

export interface Status {
  utcTime?: Date;
  finished?: boolean;
  started?: boolean;
  cancelled?: boolean;
  scoreStr?: string;
  reason?: Reason;
}

export interface Reason {
  short?: Short;
  shortKey?: ShortKey;
  long?: Long;
  longKey?: LongKey;
}

export enum Long {
  Abandoned = "Abandoned",
  FullTime = "Full-Time",
  Postponed = "Postponed",
}

export enum LongKey {
  Aborted = "aborted",
  Finished = "finished",
  Postponed = "postponed",
}

export enum Short {
  Ab = "Ab",
  Ft = "FT",
  Pp = "PP",
}

export enum ShortKey {
  AbortedShort = "aborted_short",
  FulltimeShort = "fulltime_short",
  PostponedShort = "postponed_short",
}

export interface FirstUnplayedMatch {
  firstRoundWithUnplayedMatch?: number;
  firstUnplayedMatchIndex?: number;
  firstUnplayedMatchId?: string;
}

export interface Overview {
  season?: string;
  selectedSeason?: string;
  table?: TableElement[];
  topPlayers?: TopPlayers;
  hasTotw?: boolean;
  leagueOverviewMatches?: LeagueOverviewMatch[];
  hasOngoingMatch?: boolean;
}

export interface LeagueOverviewMatch {
  id?: string;
  pageUrl?: string;
  opponent?: OpponentClass;
  home?: OpponentClass;
  away?: OpponentClass;
  displayTournament?: boolean;
  notStarted?: boolean;
  tournament?: Tournament;
  status?: Status;
}

export interface OpponentClass {
  id?: string;
  name?: ShortNameEnum;
  score?: number;
}

export enum ShortNameEnum {
  Arsenal = "Arsenal",
  AstonVilla = "Aston Villa",
  Bournemouth = "Bournemouth",
  Brentford = "Brentford",
  Brighton = "Brighton",
  Burnley = "Burnley",
  Chelsea = "Chelsea",
  CrystalPalace = "Crystal Palace",
  Everton = "Everton",
  Fulham = "Fulham",
  Liverpool = "Liverpool",
  Luton = "Luton",
  ManCity = "Man City",
  ManUnited = "Man United",
  Newcastle = "Newcastle",
  NottmForest = "Nottm Forest",
  SheffUtd = "Sheff Utd",
  Tottenham = "Tottenham",
  WestHam = "West Ham",
  Wolves = "Wolves",
}

export interface Tournament {
}

export interface TableElement {
  data?: Data;
  teamForm?: { [key: string]: TeamForm[] };
  nextOpponent?: { [key: string]: Array<NextOpponentClass | string> };
  tableHeader?: TableHeader;
}

export interface Data {
  ccode?: string;
  leagueId?: number;
  pageUrl?: string;
  leagueName?: string;
  legend?: Legend[];
  ongoing?: any[];
  table?: DataTable;
  tableFilterTypes?: string[];
  composite?: boolean;
  selectedSeason?: string;
  isCurrentSeason?: boolean;
}

export interface Legend {
  title?: string;
  tKey?: string;
  color?: Color;
  indices?: number[];
}

export enum Color {
  Ff4646 = "#FF4646",
  The0046A7 = "#0046A7",
  The2Ad572 = "#2AD572",
}

export interface DataTable {
  all?: All[];
  home?: All[];
  away?: All[];
  form?: All[];
}

export interface All {
  name?: TeamNameEnum;
  shortName?: ShortNameEnum;
  id?: number;
  pageUrl?: string;
  deduction?: number | null;
  ongoing?: null;
  played?: number;
  wins?: number;
  draws?: number;
  losses?: number;
  scoresStr?: string;
  goalConDiff?: number;
  pts?: number;
  idx?: number;
  qualColor?: Color | null;
  featuredInMatch?: boolean;
}

export interface TableHeader {
  staticTableHeaders?: string[];
  dynamicTableHeaders?: string[];
}

export interface TeamForm {
  result?: number;
  resultString?: ResultString;
  imageUrl?: string;
  linkToMatch?: string;
  date?: null;
  teamPageUrl?: string;
  tooltipText?: TooltipText;
  score?: string;
  home?: TeamFormAway;
  away?: TeamFormAway;
}

export interface TeamFormAway {
  isOurTeam?: boolean;
}

export enum ResultString {
  D = "D",
  L = "L",
  W = "W",
}

export interface TooltipText {
  utcTime?: Date;
  homeTeam?: TeamNameEnum;
  homeTeamId?: number;
  homeScore?: number;
  awayTeam?: TeamNameEnum;
  awayTeamId?: number;
  awayScore?: number;
}

export interface TopPlayers {
  byRating?: By[];
  byGoals?: By[];
  byAssists?: By[];
  seeAllUrl?: string;
}

export interface By {
  id?: number;
  name?: string;
  rank?: number;
  goals?: null;
  assists?: null;
  rating?: null;
  positionId?: null;
  ccode?: null;
  cname?: null;
  teamId?: number;
  teamName?: TeamNameEnum;
  showRole?: null;
  showCountryFlag?: null;
  showTeamFlag?: boolean;
  excludeFromRanking?: boolean;
  value?: number;
}

export interface Stats {
  players?: Player[];
  teams?: Player[];
  trophies?: Trophy[];
  seasonStatLinks?: SeasonStatLink[];
  seasonsWithLinks?: string[];
}

export interface Player {
  header?: string;
  participant?: Participant;
  fetchAllUrl?: string;
  topThree?: Participant[];
  order?: number;
  name?: string;
  localizedTitleId?: string;
}

export interface Participant {
  id?: number;
  name?: string;
  rank?: number;
  goals?: null;
  assists?: null;
  rating?: null;
  positionId?: null;
  ccode?: null;
  cname?: null;
  teamId?: number;
  teamName?: TeamNameEnum | null;
  showRole?: null;
  showCountryFlag?: null;
  showTeamFlag?: boolean;
  excludeFromRanking?: boolean;
  value?: number | string;
  teamColors?: TeamColors;
}

export interface TeamColors {
  darkMode?: string;
  lightMode?: string;
  fontDarkMode?: FontMode;
  fontLightMode?: FontMode;
}

export enum FontMode {
  RGBA25525525510 = "rgba(255, 255, 255, 1.0)",
  RGBA29292910 = "rgba(29, 29, 29, 1.0)",
}

export interface SeasonStatLink {
  Name?: string;
  CountryCode?: string;
  RelativePath?: string;
  League?: string;
  StageId?: number;
  TemplateId?: number;
  TournamentId?: number;
  TotwRoundsLink?: string;
}

export interface Trophy {
  seasonName?: string;
  winner?: Loser;
  loser?: Loser;
}

export interface Loser {
  id?: number;
  seasonName?: string;
  name?: string;
  winner?: boolean;
}

export interface Transfers {
  type?: string;
  data?: Datum[];
}

export interface Datum {
  name?: string;
  playerId?: number;
  position?: Position | null;
  transferDate?: Date;
  transferText?: null[];
  fromClub?: string;
  fromClubId?: number;
  toClub?: string;
  toClubId?: number;
  fee?: Fee | null;
  transferType?: TransferType;
  contractExtension?: boolean;
  onLoan?: boolean;
  fromDate?: Date;
  marketValue?: string;
  toDate?: Date;
}

export interface Fee {
  feeText?: FeeText;
  localizedFeeText?: LocalizedFeeText;
  value?: string;
}

export enum FeeText {
  Fee = "fee",
  FreeTransfer = "free transfer",
  OnLoan = "on loan",
}

export enum LocalizedFeeText {
  OnLoan = "on_loan",
  TransferFee = "transfer_fee",
  TransferTypeFreeTransfer = "transfer_type_free_transfer",
}

export interface Position {
  label?: string;
  key?: string;
}

export interface TransferType {
  text?: Text;
  localizationKey?: LocalizationKey;
}

export enum LocalizationKey {
  Contract = "contract",
  OnLoan = "on_loan",
}

export enum Text {
  Contract = "contract",
  OnLoan = "on loan",
}