export interface MatchDetails {
  general?: General;
  header?: Header;
  nav?: string[];
  ongoing?: boolean;
  hasPendingVAR?: boolean;
  content?: Content;
  seo?: SEO;
}

export interface Content {
  matchFacts?: MatchFacts;
  liveticker?: Liveticker;
  superlive?: Superlive;
  buzz?: null;
  stats?: ContentStats;
  shotmap?: ShotmapClass;
  lineup?: ContentLineup;
  playoff?: boolean;
  table?: Table;
  h2h?: H2H;
  momentum?: Momentum;
}

export interface H2H {
  summary?: number[];
  matches?: Match[];
}

export interface Match {
  time?: MatchDate;
  matchUrl?: string;
  league?: League;
  home?: MatchAway;
  status?: Status;
  finished?: boolean;
  away?: MatchAway;
}

export interface MatchAway {
  name?: NameElement;
  id?: string;
}

export enum NameElement {
  Liverpool = "Liverpool",
  ManchesterUnited = "Manchester United",
}

export interface League {
  name?: string;
  id?: string;
  pageUrl?: string;
}

export interface Status {
  utcTime?: Date;
  started?: boolean;
  cancelled?: boolean;
  finished?: boolean;
  scoreStr?: string;
  reason?: Reason;
  whoLostOnPenalties?: null;
  whoLostOnAggregated?: string;
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
}

export enum LongKey {
  Aborted = "aborted",
  Finished = "finished",
}

export enum Short {
  Ab = "Ab",
  Ft = "FT",
}

export enum ShortKey {
  AbortedShort = "aborted_short",
  FulltimeShort = "fulltime_short",
}

export interface MatchDate {
  utcTime?: Date;
}

export interface ContentLineup {
  lineup?: LineupElement[];
  bench?: PurpleBench;
  naPlayers?: NaPlayers;
  coaches?: Coaches;
  teamRatings?: TeamRatings;
  hasFantasy?: boolean;
  usingEnetpulseLineup?: boolean;
  usingOptaLineup?: boolean;
  simpleLineup?: boolean;
}

export interface PurpleBench {
  sides?: Side[];
  benchArr?: Array<BenchArrElement[]>;
}

export interface BenchArrElement {
  id?: string;
  positionId?: number;
  position?: Position;
  localizedPosition?: null;
  name?: NameClass;
  shirt?: number;
  usualPosition?: number;
  usingOptaId?: boolean;
  teamId?: string;
  imageUrl?: string;
  pageUrl?: string;
  isHomeTeam?: boolean;
  timeSubbedOn?: number | null;
  timeSubbedOff?: null;
  positionRow?: number;
  role?: Role;
  isCaptain?: boolean;
  events?: BenchArrEvents;
  rating?: BenchArrRating;
  fantasyScore?: FantasyScoreClass;
  minutesPlayed?: number;
  shotmap?: Shot[];
  stats?: BenchArrStat[];
  teamData?: TeamData;
  isGoalkeeper?: boolean;
  shortName?: string;
}

export interface BenchArrEvents {
  sub?: PurpleSub;
  yc?: number;
}

export interface PurpleSub {
  subbedIn?: number;
}

export interface FantasyScoreClass {
  num?: number | null;
  bgcolor?: BgcolorEnum;
}

export enum BgcolorEnum {
  F08022 = "#f08022",
  Purple = "purple",
  The1Ec853 = "#1ec853",
}

export interface NameClass {
  firstName?: string;
  lastName?: string;
  fullName?: string;
}

export enum Position {
  Substitute = "Substitute",
}

export interface BenchArrRating {
  num?: null | string;
  bgcolor?: Bgcolor;
  isTop?: IsTop;
}

export enum Bgcolor {
  F08022 = "#f08022",
  The0E87E0 = "#0e87e0",
  The1Ec853 = "#1ec853",
  The989898 = "#989898",
}

export interface IsTop {
  isTopRating?: boolean;
  isMatchFinished?: boolean;
}

export enum Role {
  Attacker = "Attacker",
  Defender = "Defender",
  Keeper = "Keeper",
  Midfielder = "Midfielder",
}

export interface Shot {
  id?: number;
  eventType?: EventType;
  teamId?: number;
  playerId?: number;
  playerName?: string;
  x?: number;
  y?: number;
  min?: number;
  minAdded?: number | null;
  isBlocked?: boolean;
  isOnTarget?: boolean;
  blockedX?: number | null;
  blockedY?: number | null;
  goalCrossedY?: number;
  goalCrossedZ?: number;
  expectedGoals?: number;
  expectedGoalsOnTarget?: number | null;
  shotType?: ShotType;
  situation?: Situation;
  period?: Period;
  isOwnGoal?: boolean;
  onGoalShot?: OnGoalShot;
  isSavedOffLine?: boolean;
  teamColor?: TeamColorEnum;
  firstName?: string;
  lastName?: string;
  fullName?: string;
}

export enum EventType {
  AttemptSaved = "AttemptSaved",
  Miss = "Miss",
}

export interface OnGoalShot {
  x?: number;
  y?: number;
  zoomRatio?: number;
}

export enum Period {
  FirstHalf = "FirstHalf",
  SecondHalf = "SecondHalf",
}

export enum ShotType {
  Header = "Header",
  LeftFoot = "LeftFoot",
  RightFoot = "RightFoot",
}

export enum Situation {
  FastBreak = "FastBreak",
  FromCorner = "FromCorner",
  RegularPlay = "RegularPlay",
  SetPiece = "SetPiece",
}

export enum TeamColorEnum {
  C70101 = "#C70101",
  D3171E = "#d3171e",
  The333333 = "#333333",
}

export interface BenchArrStat {
  title?: Title;
  key?: StatKey;
  stats?: PurpleStats;
}

export enum StatKey {
  Attack = "attack",
  Defense = "defense",
  Duels = "duels",
  TopStats = "top_stats",
}

export interface PurpleStats {
  "FotMob rating"?: Assists;
  "Minutes played"?: Assists;
  Goals?: Assists;
  Assists?: Assists;
  "Total shots"?: Assists;
  Shotmap?: Shotmap;
  "Accurate passes"?: AccurateCrosses;
  "Chances created"?: Assists;
  "Expected goals (xG)"?: AccurateCrosses;
  "Expected assists (xA)"?: AccurateCrosses;
  "xG + xA"?: AccurateCrosses;
  "Fantasy points"?: Assists;
  "Shot accuracy"?: AccurateCrosses;
  "Big chances missed"?: Assists;
  "Blocked shots"?: Assists;
  Touches?: Assists;
  "Touches in opposition box"?: Assists;
  "Passes into final third"?: Assists;
  "Accurate crosses"?: AccurateCrosses;
  Dispossessed?: Assists;
  "xG Non-penalty"?: AccurateCrosses;
  "Tackles won"?: AerialDuelsWon;
  "Defensive actions"?: Assists;
  "Ground duels won"?: AerialDuelsWon;
  "Aerial duels won"?: AerialDuelsWon;
  "Was fouled"?: Assists;
  "Fouls committed"?: Assists;
  "Accurate long balls"?: AccurateCrosses;
  Recoveries?: Assists;
  "Duels lost"?: Assists;
  "Duels won"?: Assists;
  "Expected goals on target (xGOT)"?: AccurateCrosses;
  "Dribbled past"?: Assists;
  Clearances?: Assists;
  "Successful dribbles"?: AccurateCrosses;
  "Headed clearance"?: Assists;
}

export interface AccurateCrosses {
  key?: AccurateCrossesKey;
  value?: string;
}

export enum AccurateCrossesKey {
  AccurateCrosses = "accurate_crosses",
  AccuratePasses = "accurate_passes",
  AerialsWon = "aerials_won",
  DribblesSucceeded = "dribbles_succeeded",
  ExpectedAssists = "expected_assists",
  ExpectedGoals = "expected_goals",
  ExpectedGoalsNonPenalty = "expected_goals_non_penalty",
  ExpectedGoalsOnTargetFaced = "expected_goals_on_target_faced",
  ExpectedGoalsOnTargetVariant = "expected_goals_on_target_variant",
  FantasyPoints = "fantasy_points",
  GoalsPrevented = "goals_prevented",
  GroundDuelsWon = "ground_duels_won",
  LongBallsAccurate = "long_balls_accurate",
  Saves = "saves",
  ShotAccuracy = "shot_accuracy",
  TacklesSucceeded = "tackles_succeeded",
  XgAndXa = "xg_and_xa",
}

export interface AerialDuelsWon {
  key?: AccurateCrossesKey;
  value?: number | string;
}

export interface Assists {
  key?: AssistsKey;
  value?: number;
}

export enum AssistsKey {
  Assists = "assists",
  BigChanceMissedTitle = "big_chance_missed_title",
  BlockedShots = "blocked_shots",
  ChancesCreated = "chances_created",
  Clearances = "clearances",
  Corners = "corners",
  DefensiveActions = "defensive_actions",
  Dispossessed = "dispossessed",
  DribbledPast = "dribbled_past",
  DuelLost = "duel_lost",
  DuelWon = "duel_won",
  FantasyPoints = "fantasy_points",
  Fouls = "fouls",
  Goals = "goals",
  GoalsConceded = "goals_conceded",
  HeadedClearance = "headed_clearance",
  Interceptions = "interceptions",
  KeeperDivingSave = "keeper_diving_save",
  KeeperHighClaim = "keeper_high_claim",
  KeeperSweeper = "keeper_sweeper",
  LastManTackle = "last_man_tackle",
  MinutesPlayed = "minutes_played",
  Offsides = "Offsides",
  PassesIntoFinalThird = "passes_into_final_third",
  PlayerThrows = "player_throws",
  Punches = "punches",
  RatingTitle = "rating_title",
  Recoveries = "recoveries",
  SavesInsideBox = "saves_inside_box",
  ShotBlocks = "shot_blocks",
  TotalShots = "total_shots",
  Touches = "touches",
  TouchesOppBox = "touches_opp_box",
  WasFouled = "was_fouled",
}

export interface Shotmap {
  key?: null;
  value?: boolean;
}

export enum Title {
  Attack = "Attack",
  Defense = "Defense",
  Duels = "Duels",
  TopStats = "Top stats",
}

export interface TeamData {
  home?: TeamDataAway;
  away?: TeamDataAway;
}

export interface TeamDataAway {
  id?: number;
  color?: TeamColorEnum;
}

export enum Side {
  Away = "away",
  Equal = "equal",
  Home = "home",
}

export interface Coaches {
  sides?: Side[];
  coachesArr?: Array<Coach[]>;
}

export interface Coach {
  id?: string;
  name?: NameClass;
  usualPosition?: number;
  imageUrl?: string;
  pageUrl?: string;
  isHomeTeam?: boolean;
  timeSubbedOn?: null;
  timeSubbedOff?: null;
  positionRow?: null;
  role?: string;
  isCaptain?: boolean;
  events?: CoachesArrEvents;
}

export interface CoachesArrEvents {
}

export interface LineupElement {
  teamId?: number;
  teamName?: NameElement;
  bench?: BenchArrElement[];
  coach?: Coach[];
  players?: Array<PlayerElement[]>;
  lineup?: string;
  nonAvailablePlayers?: Array<NaPlayersArr[]>;
  optaLineup?: OptaLineup;
}

export interface NaPlayersArr {
  id?: number;
  name?: NameClass;
  shortName?: ShortName;
  imageUrl?: string;
  pageUrl?: string;
  isHomeTeam?: boolean;
  timeSubbedOn?: null;
  timeSubbedOff?: null;
  positionRow?: null;
  isCaptain?: boolean;
  events?: CoachesArrEvents;
  naInfo?: NaInfo;
}

export interface NaInfo {
  id?: number;
  name?: string;
  naReason?: string;
  naReasonKey?: string;
  injury?: boolean;
  expectedReturn?: ExpectedReturn;
}

export interface ExpectedReturn {
  expectedReturnKey?: ExpectedReturnKey;
  expectedReturnDateParam?: ExpectedReturnDateParam | null;
  expectedReturnFallback?: ExpectedReturnFallback;
}

export enum ExpectedReturnDateParam {
  December2023 = "December 2023",
  February2024 = "February 2024",
  January2024 = "January 2024",
}

export enum ExpectedReturnFallback {
  AFewDays = "A few days",
  Doubtful = "Doubtful",
  EarlyJanuary2024 = "Early January 2024",
  LateDecember2023 = "Late December 2023",
  LateFebruary2024 = "Late February 2024",
  MidJanuary2024 = "Mid January 2024",
  OutForSeason = "Out for season",
  Unknown = "Unknown",
}

export enum ExpectedReturnKey {
  ExpectedReturnDateDoubtful = "expected_return_date_doubtful",
  ExpectedReturnDateEarly = "expected_return_date_early",
  ExpectedReturnDateFewDays = "expected_return_date_few_days",
  ExpectedReturnDateLate = "expected_return_date_late",
  ExpectedReturnDateMid = "expected_return_date_mid",
  ExpectedReturnDateOutForSeason = "expected_return_date_out_for_season",
  ExpectedReturnDateUnknown = "expected_return_date_unknown",
}

export enum ShortName {
  MACAllister = "Mac Allister",
  Thiago = "Thiago",
}

export interface OptaLineup {
  bench?: BenchArrElement[];
  coach?: Coach[];
  players?: Array<PlayerElement[]>;
  lineup?: string;
  nonAvailablePlayers?: Array<NaPlayersArr[]>;
}

export interface PlayerElement {
  id?: string;
  positionId?: number;
  position?: Role;
  positionStringShort?: string;
  localizedPosition?: PositionLabel;
  name?: NameClass;
  shirt?: number;
  usualPosition?: number;
  usingOptaId?: boolean;
  teamId?: string;
  imageUrl?: string;
  pageUrl?: string;
  isHomeTeam?: boolean;
  timeSubbedOn?: null;
  timeSubbedOff?: number | null;
  positionRow?: number;
  role?: Role;
  isCaptain?: boolean;
  events?: PlayerEvents;
  rating?: BenchArrRating;
  fantasyScore?: FantasyScore;
  minutesPlayed?: number;
  shotmap?: Shot[];
  stats?: PlayerStat[];
  teamData?: TeamData;
  isGoalkeeper?: boolean;
}

export interface PlayerEvents {
  sub?: FluffySub;
  yc?: number;
  ycrc?: number;
}

export interface FluffySub {
  subbedOut?: number;
}

export interface FantasyScore {
  num?: number | string;
  bgcolor?: BgcolorEnum;
}

export interface PositionLabel {
  label?: string;
  key?: string;
}

export interface PlayerStat {
  title?: Title;
  key?: StatKey;
  stats?: FluffyStats;
}

export interface FluffyStats {
  "FotMob rating"?: Assists;
  "Minutes played"?: Assists;
  Saves?: AccurateCrosses;
  "Goals conceded"?: Assists;
  "xGOT faced"?: AccurateCrosses;
  "Goals prevented"?: AccurateCrosses;
  "Accurate passes"?: AccurateCrosses;
  "Accurate long balls"?: AccurateCrosses;
  "Diving save"?: Assists;
  "Saves inside box"?: Assists;
  "Acted as sweeper"?: Assists;
  Punches?: Assists;
  Throws?: Assists;
  "High claim"?: Assists;
  Recoveries?: Assists;
  "Fantasy points"?: AerialDuelsWon;
  Touches?: Assists;
  Goals?: Assists;
  Assists?: Assists;
  "Total shots"?: Assists;
  Shotmap?: Shotmap;
  "Chances created"?: Assists;
  "Expected goals (xG)"?: AccurateCrosses;
  "Expected assists (xA)"?: AccurateCrosses;
  "xG + xA"?: AccurateCrosses;
  "Shot accuracy"?: AccurateCrosses;
  "Blocked shots"?: Assists;
  "Touches in opposition box"?: Assists;
  "Successful dribbles"?: AccurateCrosses;
  "Passes into final third"?: Assists;
  "Accurate crosses"?: AccurateCrosses;
  Corners?: Assists;
  Dispossessed?: Assists;
  "xG Non-penalty"?: AccurateCrosses;
  "Tackles won"?: AerialDuelsWon;
  "Last man tackle"?: Assists;
  Clearances?: Assists;
  Interceptions?: Assists;
  "Defensive actions"?: Assists;
  "Dribbled past"?: Assists;
  "Duels won"?: Assists;
  "Duels lost"?: Assists;
  "Ground duels won"?: AerialDuelsWon;
  "Aerial duels won"?: AerialDuelsWon;
  "Was fouled"?: Assists;
  "Fouls committed"?: Assists;
  "Expected goals on target (xGOT)"?: AccurateCrosses;
  "Headed clearance"?: Assists;
  Blocks?: Assists;
  Offsides?: Assists;
  "Big chances missed"?: Assists;
}

export interface NaPlayers {
  sides?: Side[];
  naPlayersArr?: Array<NaPlayersArr[]>;
}

export interface TeamRatings {
  home?: FantasyScoreClass;
  away?: FantasyScoreClass;
}

export interface Liveticker {
  langs?: string;
  teams?: NameElement[];
}

export interface MatchFacts {
  matchId?: number;
  highlights?: Highlights;
  playerOfTheMatch?: PlayerOfTheMatch;
  matchesInRound?: MatchesInRound[];
  events?: MatchFactsEvents;
  infoBox?: InfoBox;
  teamForm?: Array<TeamForm[]>;
  poll?: Poll;
  topPlayers?: TopPlayers;
  insights?: Insight[];
  topScorers?: TopScorers;
  momentum?: Momentum;
  countryCode?: string;
  QAData?: QADatum[];
}

export interface QADatum {
  question?: string;
  answer?: string;
}

export interface MatchFactsEvents {
  ongoing?: boolean;
  events?: Event[];
  eventTypes?: Array<null | string>;
  penaltyShootoutEvents?: null;
}

export interface Event {
  reactKey?: string;
  timeStr?: number | string;
  type?: EventTypeEnum;
  time?: number;
  overloadTime?: number | null;
  eventId?: number;
  player?: EventPlayer;
  profileUrl?: string;
  overloadTimeStr?: boolean | string;
  isHome?: boolean;
  nameStr?: string;
  card?: string;
  cardDescription?: null;
  minutesAddedStr?: string;
  minutesAddedKey?: string;
  minutesAddedInput?: number;
  halfStrShort?: string;
  halfStrKey?: string;
  injuredPlayerOut?: boolean;
  swap?: Swap[];
}

export interface EventPlayer {
  id?: number | null;
  name?: string;
  profileUrl?: string;
}

export interface Swap {
  name?: string;
  id?: string;
  profileUrl?: string;
}

export enum EventTypeEnum {
  AddedTime = "AddedTime",
  Card = "Card",
  Half = "Half",
  Substitution = "Substitution",
}

export interface Highlights {
  image?: string;
  url?: string;
  source?: string;
}

export interface InfoBox {
  "Match Date"?: MatchDate;
  Tournament?: Tournament;
  Stadium?: Stadium;
  Referee?: Referee;
  Attendance?: number;
}

export interface Referee {
  imgUrl?: string;
  text?: string;
  country?: string;
}

export interface Stadium {
  name?: string;
  city?: NameElement;
  country?: string;
  lat?: number;
  long?: number;
}

export interface Tournament {
  id?: number;
  parentLeagueId?: number;
  link?: string;
  leagueName?: string;
  roundName?: string;
  round?: string;
  selectedSeason?: string;
  isCurrentSeason?: boolean;
}

export interface Insight {
  type?: string;
  playerId?: number | null;
  teamId?: number;
  priority?: number;
  defaultText?: string;
  localizedTextId?: string;
  statValues?: StatValue[];
  text?: string;
  color?: TeamColorEnum;
}

export interface StatValue {
  value?: number;
  name?: null | string;
  type?: string;
}

export interface MatchesInRound {
  id?: string;
  home?: MatchesInRoundAway;
  away?: MatchesInRoundAway;
  matchDate?: string;
  status?: Status;
  roundId?: number;
  roundName?: string;
  homeScore?: number;
  awayScore?: number;
}

export interface MatchesInRoundAway {
  id?: string;
  name?: string;
  shortName?: string;
}

export interface Momentum {
  main?: Main;
  alternateModels?: any[];
}

export interface Main {
  data?: Datum[];
  debugTitle?: string;
}

export interface Datum {
  minute?: number;
  value?: number;
}

export interface PlayerOfTheMatch {
  id?: number;
  name?: NameClass;
  teamName?: NameElement;
  teamId?: number;
  rating?: PlayerOfTheMatchRating;
  minutesPlayed?: number;
  shotmap?: Shot[];
  pageUrl?: string;
  isHomeTeam?: boolean;
  stats?: PlayerOfTheMatchStat[];
  role?: Role;
  teamData?: TeamData;
}

export interface PlayerOfTheMatchRating {
  num?: string;
  isTop?: IsTop;
}

export interface PlayerOfTheMatchStat {
  title?: Title;
  key?: StatKey;
  stats?: TentacledStats;
}

export interface TentacledStats {
  "FotMob rating"?: Assists;
  "Minutes played"?: Assists;
  Goals?: Assists;
  Assists?: Assists;
  "Total shots"?: Assists;
  Shotmap?: Shotmap;
  "Accurate passes"?: AccurateCrosses;
  "Chances created"?: Assists;
  "Expected goals (xG)"?: AccurateCrosses;
  "Expected assists (xA)"?: AccurateCrosses;
  "xG + xA"?: AccurateCrosses;
  "Fantasy points"?: AccurateCrosses;
  "Shot accuracy"?: AccurateCrosses;
  "Blocked shots"?: Assists;
  Touches?: Assists;
  "Touches in opposition box"?: Assists;
  "Successful dribbles"?: AccurateCrosses;
  "Passes into final third"?: Assists;
  "Accurate crosses"?: AccurateCrosses;
  "Accurate long balls"?: AccurateCrosses;
  Corners?: Assists;
  Dispossessed?: Assists;
  "xG Non-penalty"?: AccurateCrosses;
  "Tackles won"?: AccurateCrosses;
  "Last man tackle"?: Assists;
  Clearances?: Assists;
  Interceptions?: Assists;
  "Defensive actions"?: Assists;
  Recoveries?: Assists;
  "Dribbled past"?: Assists;
  "Duels won"?: Assists;
  "Duels lost"?: Assists;
  "Ground duels won"?: AccurateCrosses;
  "Aerial duels won"?: AccurateCrosses;
  "Was fouled"?: Assists;
  "Fouls committed"?: Assists;
}

export interface Poll {
  oddspoll?: Oddspoll;
  voteResult?: VoteResult;
  renderToTop?: boolean;
}

export interface Oddspoll {
  PollName?: string;
  MatchId?: number;
  HomeTeamId?: number;
  AwayTeamId?: number;
  HomeTeam?: NameElement;
  AwayTeam?: string;
  Facts?: Fact[];
}

export interface Fact {
  OddsType?: string;
  DefaultLabel?: string;
  TextLabelId?: string;
  DefaultTemplate?: string;
  TextTemplateId?: string;
  StatValues?: string[];
  DefaultLabels?: string[];
  LabelTemplates?: string[];
  Icon?: string;
  defaultText?: string;
}

export interface VoteResult {
  PollName?: string;
  Votes?: Vote[];
}

export interface Vote {
  Name?: string;
  Votes?: number[];
}

export interface TeamForm {
  result?: number;
  resultString?: ResultString;
  imageUrl?: string;
  linkToMatch?: string;
  date?: MatchDate;
  teamPageUrl?: string;
  tooltipText?: TooltipText;
  score?: string;
  home?: TeamFormAway;
  away?: TeamFormAway;
}

export interface TeamFormAway {
  id?: string;
  name?: string;
  isOurTeam?: boolean;
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
  homeScore?: string;
  awayTeam?: string;
  awayTeamId?: number;
  awayScore?: string;
}

export interface TopPlayers {
  homeTopPlayers?: TopPlayer[];
  awayTopPlayers?: TopPlayer[];
}

export interface TopPlayer {
  playerId?: number;
  name?: NameClass;
  playerRatingRounded?: string;
  color?: BgcolorEnum;
  manOfTheMatch?: boolean;
  teamId?: string;
  positionLabel?: PositionLabel;
}

export interface TopScorers {
  section?: string;
  sectionId?: number;
  homePlayer?: Player;
  awayPlayer?: Player;
  statsOrder?: string[];
}

export interface Player {
  playerId?: number;
  position?: number;
  matchesWithRating?: number;
  lastName?: string;
  fullName?: string;
  stats?: AwayPlayerStats;
}

export interface AwayPlayerStats {
  goals?: number;
  goalAssist?: number;
  ontargetScoringAtt?: number;
  motm?: number;
  gamesPlayed?: number;
  minsPlayed?: number;
  minsPlayedGoal?: number;
  expectedGoals?: number;
  playerRating?: number;
}

export interface ShotmapClass {
  shots?: Shot[];
  Periods?: ShotmapPeriods;
}

export interface ShotmapPeriods {
  All?: Shot[];
  FirstHalf?: Shot[];
  SecondHalf?: Shot[];
}

export interface ContentStats {
  Periods?: StatsPeriods;
}

export interface StatsPeriods {
  All?: All;
  FirstHalf?: All;
  SecondHalf?: All;
}

export interface All {
  stats?: AllStat[];
  teamColors?: TeamColors;
}

export interface AllStat {
  title?: string;
  key?: string;
  stats?: StatStatClass[];
}

export interface StatStatClass {
  title?: string;
  key?: string;
  stats?: Array<number | null | string>;
  type?: StatType;
  highlighted?: Side;
}

export enum StatType {
  Graph = "graph",
  Text = "text",
  Title = "title",
}

export interface TeamColors {
  darkMode?: Mode;
  lightMode?: Mode;
  fontDarkMode?: Mode;
  fontLightMode?: Mode;
}

export interface Mode {
  home?: Home;
  away?: string;
}

export enum Home {
  D3171E = "#d3171e",
  RGBA25525525510 = "rgba(255, 255, 255, 1.0)",
}

export interface Superlive {
  superLiveUrl?: string;
  showSuperLive?: boolean;
}

export interface Table {
  url?: string;
  teams?: number[];
  tournamentNameForUrl?: string;
  parentLeagueId?: number;
  parentLeagueName?: string;
  isCurrentSeason?: boolean;
  parentLeagueSeason?: string;
  countryCode?: string;
}

export interface General {
  matchId?: string;
  matchName?: string;
  matchRound?: string;
  teamColors?: TeamColors;
  leagueId?: number;
  leagueName?: string;
  leagueRoundName?: string;
  parentLeagueId?: number;
  countryCode?: string;
  parentLeagueName?: string;
  parentLeagueSeason?: string;
  parentLeagueTopScorerLink?: string;
  parentLeagueTournamentId?: number;
  homeTeam?: GeneralAwayTeam;
  awayTeam?: GeneralAwayTeam;
  coverageLevel?: string;
  matchTimeUTC?: string;
  matchTimeUTCDate?: Date;
  started?: boolean;
  finished?: boolean;
}

export interface GeneralAwayTeam {
  name?: NameElement;
  id?: number;
}

export interface Header {
  teams?: Team[];
  status?: Status;
  events?: null;
}

export interface Team {
  name?: NameElement;
  id?: number;
  score?: number;
  imageUrl?: string;
  pageUrl?: string;
  fifaRank?: null;
}

export interface SEO {
  path?: string;
  eventJSONLD?: EventJSONLD;
  breadcrumbJSONLD?: BreadcrumbJSONLD[];
  faqJSONLD?: FAQJSONLD;
}

export interface BreadcrumbJSONLD {
  "@context"?: string;
  "@type"?: string;
  itemListElement?: ItemListElement[];
}

export interface ItemListElement {
  "@type"?: Type;
  position?: number;
  name?: string;
  item?: string;
}

export enum Type {
  ListItem = "ListItem",
}

export interface EventJSONLD {
  "@context"?: string;
  "@type"?: string;
  sport?: string;
  homeTeam?: EventJSONLDAwayTeam;
  awayTeam?: EventJSONLDAwayTeam;
  name?: string;
  description?: string;
  startDate?: Date;
  endDate?: Date;
  eventStatus?: string;
  eventAttendanceMode?: string;
  location?: Location;
  image?: string[];
  organizer?: Organizer;
  offers?: Offers;
  performer?: Organizer[];
}

export interface EventJSONLDAwayTeam {
  "@context"?: string;
  "@type"?: string;
  name?: NameElement;
  sport?: string;
  logo?: string;
  url?: string;
  location?: null;
  memberOf?: null;
}

export interface Location {
  "@type"?: string;
  url?: string;
}

export interface Offers {
  "@type"?: string;
  url?: string;
  availability?: string;
  price?: string;
  priceCurrency?: string;
  validFrom?: Date;
}

export interface Organizer {
  "@type"?: string;
  name?: string;
  url?: string;
  logo?: string;
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