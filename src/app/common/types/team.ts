export interface Team {
  tabs?: string[];
  allAvailableSeasons?: any[];
  details?: Details;
  seostr?: string;
  QAData?: QADatum[];
  table?: OverviewTable[];
  transfers?: Transfers;
  overview?: Overview;
  stats?: TeamStats;
  fixtures?: TeamFixtures;
  squad?: Array<Array<SquadClass[] | string>>;
  history?: History;
}

export interface QADatum {
  question?: string;
  answer?: string;
}

export interface Details {
  id?: number;
  type?: string;
  name?: ShortNameEnum;
  latestSeason?: string;
  shortName?: ShortNameEnum;
  country?: Country;
  faqJSONLD?: FAQJSONLD;
  sportsTeamJSONLD?: SportsTeamJSONLD;
  breadcrumbJSONLD?: BreadcrumbJSONLD;
  canSyncCalendar?: boolean;
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

export enum Country {
  Eng = "ENG",
  Int = "INT",
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

export enum ShortNameEnum {
  Liverpool = "Liverpool",
}

export interface SportsTeamJSONLD {
  "@context"?: string;
  "@type"?: string;
  name?: ShortNameEnum;
  sport?: string;
  gender?: string;
  logo?: string;
  url?: string;
  coach?: Coach;
  athlete?: Coach[];
  location?: Location;
  memberOf?: MemberOf;
}

export interface Coach {
  "@context"?: string;
  "@type"?: CoachType;
  name?: string;
  url?: string;
  nationality?: Nationality | null;
  affiliation?: null;
  height?: null;
  weight?: null;
}

export enum CoachType {
  Person = "Person",
}

export interface Nationality {
  "@type"?: NationalityType;
  name?: string;
}

export enum NationalityType {
  Country = "Country",
}

export interface Location {
  "@type"?: string;
  name?: string;
  address?: Address;
  geo?: Geo;
}

export interface Address {
  "@type"?: string;
  addressCountry?: AddressCountry;
  addressLocality?: ShortNameEnum;
}

export enum AddressCountry {
  England = "England",
  Europe = "Europe",
  World = "World",
}

export interface Geo {
  "@type"?: string;
  latitude?: string;
  longitude?: string;
}

export interface MemberOf {
  "@type"?: string;
  name?: NameElement;
  url?: string;
}

export enum NameElement {
  ChampionsLeague = "Champions League",
  ClubFriendlies = "Club Friendlies",
  EFLCup = "EFL Cup",
  EuropaLeague = "Europa League",
  FACup = "FA Cup",
  PremierLeague = "Premier League",
}

export interface TeamFixtures {
  allFixtures?: AllFixtures;
  previousFixturesUrl?: string;
  hasOngoingMatch?: boolean;
  fixtures?: FixturesFixtures;
}

export interface AllFixtures {
  fixtures?: OverviewFixture[];
  nextMatch?: NextMatch;
  lastMatch?: LastMatch;
}

export interface OverviewFixture {
  id?: number;
  pageUrl?: string;
  opponent?: OpponentClass;
  home?: OpponentClass;
  away?: OpponentClass;
  displayTournament?: boolean;
  result?: number;
  notStarted?: boolean;
  tournament?: Tournament;
  status?: OverviewFixtureStatus;
  monthYearKey?: string;
  isPastMatch?: boolean;
  lastPlayedMatch?: boolean;
}

export interface OpponentClass {
  id?: number;
  name?: string;
  score?: number;
}

export interface OverviewFixtureStatus {
  utcTime?: Date;
  finished?: boolean;
  started?: boolean;
  cancelled?: boolean;
  scoreStr?: string;
  reason?: Reason;
  timezone?: null;
}

export interface Reason {
  short?: Short;
  shortKey?: ShortKey;
  long?: Long;
  longKey?: LongKey;
}

export enum Long {
  FullTime = "Full-Time",
}

export enum LongKey {
  Finished = "finished",
}

export enum Short {
  Ft = "FT",
}

export enum ShortKey {
  FulltimeShort = "fulltime_short",
}

export interface Tournament {
  name?: NameElement;
  leagueId?: number;
}

export interface LastMatch {
  id?: number;
  pageUrl?: string;
  opponent?: OpponentClass;
  home?: OpponentClass;
  away?: OpponentClass;
  displayTournament?: boolean;
  result?: number;
  notStarted?: boolean;
  tournament?: Tournament;
  status?: OverviewFixtureStatus;
}

export interface NextMatch {
  id?: number;
  pageUrl?: string;
  opponent?: OpponentClass;
  home?: OpponentClass;
  away?: OpponentClass;
  displayTournament?: boolean;
  notStarted?: boolean;
  tournament?: Tournament;
  status?: NextMatchStatus;
}

export interface NextMatchStatus {
  utcTime?: Date;
  timezone?: null;
  started?: boolean;
  cancelled?: boolean;
  finished?: boolean;
}

export interface FixturesFixtures {
  "July 2023"?: OverviewFixture[];
  "August 2023"?: OverviewFixture[];
  "September 2023"?: OverviewFixture[];
  "October 2023"?: OverviewFixture[];
  "November 2023"?: OverviewFixture[];
  "December 2023"?: OverviewFixture[];
  "January 2024"?: The2024[];
  "February 2024"?: The2024[];
  "March 2024"?: The2024[];
  "April 2024"?: The2024[];
  "May 2024"?: The2024[];
}

export interface The2024 {
  id?: number;
  pageUrl?: string;
  monthYearKey?: string;
  opponent?: OpponentClass;
  home?: OpponentClass;
  away?: OpponentClass;
  displayTournament?: boolean;
  isPastMatch?: boolean;
  lastPlayedMatch?: boolean;
  notStarted?: boolean;
  tournament?: Tournament;
  status?: NextMatchStatus;
}

export interface History {
  trophyList?: TrophyList[];
  historicalTableData?: HistoricalTableData;
  teamColor?: string;
  teamColorMap?: TeamColorMap;
  tables?: Tables;
}

export interface HistoricalTableData {
  divisions?: Division[];
  ranks?: Rank[];
  isValid?: boolean;
}

export interface Division {
  divisionRank?: number;
  name?: NameElement;
  templateId?: number;
}

export interface Rank {
  stageId?: number;
  tournamentName?: NameElement;
  tournamentId?: number;
  templateId?: number;
  seasonName?: string;
  position?: number;
  numberOfTeams?: number;
  stats?: RankStats;
  tableLink?: string;
  isConsecutive?: boolean;
}

export interface RankStats {
  points?: number;
  wins?: number;
  draws?: number;
  loss?: number;
}

export interface Tables {
  current?: Current[];
  historic?: Current[];
}

export interface Current {
  link?: Link[];
}

export interface Link {
  _?: string;
  name?: NameElement[];
  ccode?: Country[];
  season?: string[];
  stage_id?: string[];
  tournament_id?: string[];
  template_id?: string[];
  league_id?: string[];
}

export interface TeamColorMap {
  color?: string;
  colorAlternate?: string;
  colorAway?: string;
  colorAwayAlternate?: string;
}

export interface TrophyList {
  name?: string[];
  tournamentTemplateId?: string[];
  area?: AddressCountry[];
  ccode?: Country[];
  won?: string[];
  runnerup?: string[];
  season_won?: string[];
  season_runnerup?: string[];
}

export interface Overview {
  season?: string;
  selectedSeason?: string;
  table?: OverviewTable[];
  topPlayers?: TopPlayers;
  venue?: Venue;
  overviewFixtures?: OverviewFixture[];
  nextMatch?: NextMatch;
  lastMatch?: LastMatch;
  teamForm?: TeamForm[];
  hasOngoingMatch?: boolean;
  previousFixturesUrl?: string;
  teamColors?: TeamColors;
}

export interface OverviewTable {
  data?: TableData;
  teamForm?: { [key: string]: TeamForm[] };
  nextOpponent?: { [key: string]: Array<NextOpponentClass | string> } | null;
  tableHeader?: TableHeader;
}

export interface TableData {
  ccode?: Country;
  leagueId?: number;
  pageUrl?: string;
  leagueName?: NameElement;
  legend?: Legend[];
  ongoing?: any[];
  table?: PurpleTable;
  tableFilterTypes?: string[];
  composite?: boolean;
  tables?: FluffyTable[];
}

export interface Legend {
  title?: Title;
  tKey?: TKey;
  color?: Color;
  indices?: number[];
}

export enum Color {
  Ff4646 = "#FF4646",
  Ffd908 = "#FFD908",
  The0046A7 = "#0046A7",
  The2Ad572 = "#2AD572",
}

export enum TKey {
  Championsleague = "championsleague",
  Europaleague = "europaleague",
  Qualeuropaconffinalstage = "qualeuropaconffinalstage",
  QualificationNextStage = "qualification_next_stage",
  Relegation = "relegation",
}

export enum Title {
  ChampionsLeague = "Champions League",
  EuropaLeague = "Europa League",
  QualificationNextStage = "Qualification next stage",
  QualificationToEuropaConferenceLeagueFinalStage = "Qualification to Europa Conference League Final Stage",
  Relegation = "Relegation",
}

export interface PurpleTable {
  all?: All[];
  home?: All[];
  away?: All[];
  form?: All[];
}

export interface All {
  name?: string;
  shortName?: string;
  id?: number;
  pageUrl?: string;
  featuredInMatch?: boolean;
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
}

export interface FluffyTable {
  ccode?: Country;
  leagueId?: number;
  pageUrl?: string;
  leagueName?: string;
  legend?: Legend[];
  table?: TableTable;
  ongoing?: any[];
}

export interface TableTable {
  all?: All[];
  home?: All[];
  away?: All[];
}

export interface NextOpponentClass {
  id?: string;
  name?: string;
  shortName?: string;
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
  date?: DateClass | null;
  teamPageUrl?: string;
  tooltipText?: TooltipText;
  score?: string;
  home?: TeamFormAway;
  away?: TeamFormAway;
}

export interface TeamFormAway {
  isOurTeam?: boolean;
}

export interface DateClass {
  utcTime?: Date;
}

export enum ResultString {
  D = "D",
  L = "L",
  W = "W",
}

export interface TooltipText {
  utcTime?: Date;
  homeTeam?: string;
  homeTeamId?: number;
  homeScore?: number;
  awayTeam?: string;
  awayTeamId?: number;
  awayScore?: number;
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

export interface TopPlayers {
  byRating?: By;
  byGoals?: By;
  byAssists?: By;
  seeAllUrl?: string;
}

export interface By {
  players?: Participant[];
  seeAllLink?: string;
}

export interface Participant {
  id?: number;
  name?: string;
  goals?: null | string;
  assists?: null | string;
  rating?: null | string;
  positionId?: number | null;
  ccode?: null | string;
  cname?: null | string;
  teamId?: number | null;
  teamName?: ShortNameEnum | null;
  showRole?: boolean | null;
  showCountryFlag?: boolean | null;
  showTeamFlag?: boolean;
  excludeFromRanking?: boolean;
  rcards?: string;
  ycards?: string;
  teamColors?: TeamColors;
  injured?: boolean;
  rank?: number;
  value?: number | string;
}

export interface Venue {
  widget?: Widget;
  statPairs?: Array<Array<number | string>>;
}

export interface Widget {
  name?: string;
  location?: string[];
  city?: ShortNameEnum;
}

export interface SquadClass {
  id?: number;
  name?: string;
  ccode?: string;
  cname?: string;
  role?: Role;
  isInjured?: boolean;
}

export enum Role {
  Attackers = "attackers",
  Defenders = "defenders",
  Goalkeepers = "goalkeepers",
  Midfielders = "midfielders",
}

export interface TeamStats {
  teamId?: string;
  primaryLeagueId?: number;
  primarySeasonId?: string;
  players?: Player[];
  teams?: TeamElement[];
  tournamentId?: string;
  tournamentSeasons?: TournamentSeason[];
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

export interface TeamElement {
  header?: string;
  localizedTitleId?: string;
  participant?: Participant;
  fetchAllUrl?: string;
  topThree?: Participant[];
  order?: number;
  stat?: string;
}

export interface TournamentSeason {
  name?: string;
  season?: string;
  leagueName?: NameElement;
  tournamentId?: string;
  parentLeagueId?: string;
}

export interface Transfers {
  type?: string;
  data?: TransfersData;
}

export interface TransfersData {
  "Players in"?: Players[];
  "Players out"?: Players[];
  "Contract extension"?: ContractExtension[];
}

export interface ContractExtension {
  name?: string;
  playerId?: number;
  position?: Position;
  transferDate?: Date;
  transferText?: Array<ShortNameEnum | number | null>;
  fromClub?: ShortNameEnum;
  fromClubId?: number;
  toClub?: ShortNameEnum;
  toClubId?: number;
  fee?: null;
  transferType?: TransferType;
  contractExtension?: boolean;
  onLoan?: boolean;
  fromDate?: Date;
  toDate?: Date;
  marketValue?: string;
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

export interface Players {
  name?: string;
  playerId?: number;
  position?: Position | null;
  transferDate?: Date;
  transferText?: Array<number | string>;
  fromClub?: string;
  fromClubId?: number;
  toClub?: string;
  toClubId?: number;
  fee?: Fee | null;
  transferType?: TransferType;
  contractExtension?: boolean;
  onLoan?: boolean;
  fromDate?: Date;
  toDate?: Date;
  marketValue?: string;
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