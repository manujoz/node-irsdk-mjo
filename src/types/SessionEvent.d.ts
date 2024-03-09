export interface IrsdkSessionEvent {
    data: {
        WeekendInfo: WeekendInfo;
        SessionInfo: SessionInfo;
        QualifyResultsInfo: QualifyResultsInfo;
        CameraInfo: CameraInfo;
        RadioInfo: RadioInfo;
        DriverInfo: DriverInfo;
        SplitTimeInfo: SplitTimeInfo;
        CarSetup: CarSetup;
    };
}

interface WeekendInfo {
    TrackName: string;
    TrackID: number;
    TrackLength: string;
    TrackLengthOfficial: string;
    TrackDisplayName: string;
    TrackDisplayShortName: string;
    TrackConfigName: string;
    TrackCity: string;
    TrackCountry: string;
    TrackAltitude: string;
    TrackLatitude: string;
    TrackLongitude: string;
    TrackNorthOffset: string;
    TrackNumTurns: number;
    TrackPitSpeedLimit: string;
    TrackType: string;
    TrackDirection: string;
    TrackWeatherType: string;
    TrackSkies:
        | "clear-day"
        | "clear-night"
        | "mostly_cloudy-day"
        | "mostly_cloudy-night"
        | "overcast-day"
        | "overcast-night"
        | "partly_cloudy-day"
        | "partly_cloudy-night";
    TrackSurfaceTemp: string;
    TrackAirTemp: string;
    TrackAirPressure: string;
    TrackWindVel: string;
    TrackWindDir: string;
    TrackRelativeHumidity: string;
    TrackFogLevel: string;
    TrackCleanup: number;
    TrackDynamicTrack: number;
    TrackVersion: string;
    SeriesID: number;
    SeasonID: number;
    SessionID: number;
    SubSessionID: number;
    LeagueID: number;
    Official: number;
    RaceWeek: number;
    EventType: "Practice" | "Qualify" | "Race"?;
    Category: "Road" | "Oval" | "Road dirt" | "Oval dirt" | null;
    SimMode: string;
    TeamRacing: number;
    MinDrivers: number;
    MaxDrivers: number;
    DCRuleSet: string;
    QualifierMustStartRace: number;
    NumCarClasses: number;
    NumCarTypes: number;
    HeatRacing: number;
    BuildType: string;
    BuildTarget: string;
    BuildVersion: string;
    WeekendOptions: WeekendOptions;
    TelemetryOptions: TelemetryOptions;
}
interface WeekendOptions {
    NumStarters: number;
    StartingGrid: string;
    QualifyScoring: string;
    CourseCautions: string;
    StandingStart: number;
    ShortParadeLap: number;
    Restarts: string;
    WeatherType: string;
    Skies: string;
    WindDirection: string;
    WindSpeed: string;
    WeatherTemp: string;
    RelativeHumidity: string;
    FogLevel: string;
    TimeOfDay: string;
    Date: string;
    EarthRotationSpeedupFactor: number;
    Unofficial: number;
    CommercialMode: string;
    NightMode: string;
    IsFixedSetup: number;
    StrictLapsChecking: string;
    HasOpenRegistration: number;
    HardcoreLevel: number;
    NumJokerLaps: number;
    IncidentLimit: number;
    FastRepairsLimit: number;
    GreenWhiteCheckeredLimit: number;
}
interface TelemetryOptions {
    TelemetryDiskFile: string;
}
interface SessionInfo {
    Sessions: SessionsEntity[];
}
interface SessionsEntity {
    SessionNum: number;
    SessionLaps: number | "unlimited";
    SessionTime: string;
    SessionNumLapsToAvg: number;
    SessionType: "Practice" | "Lone Qualify" | "Open Qualify" | "Race";
    SessionTrackRubberState: string;
    SessionName: string;
    SessionSubType?: null;
    SessionSkipped: number;
    SessionRunGroupsUsed: number;
    SessionEnforceTireCompoundChange: number;
    ResultsPositions: ResultsPositionsEntity[];
    ResultsFastestLap: ResultsFastestLapEntity[];
    ResultsAverageLapTime: number;
    ResultsNumCautionFlags: number;
    ResultsNumCautionLaps: number;
    ResultsNumLeadChanges: number;
    ResultsLapsComplete: number;
    ResultsOfficial: number;
}
interface ResultsPositionsEntity {
    Position: number;
    ClassPosition: number;
    CarIdx: number;
    Lap: number;
    Time: number;
    FastestLap: number;
    FastestTime: number;
    LastTime: number;
    LapsLed: number;
    LapsComplete: number;
    JokerLapsComplete: number;
    LapsDriven: number;
    Incidents: number;
    ReasonOutId: number;
    ReasonOutStr: string;
}
interface ResultsFastestLapEntity {
    CarIdx: number;
    FastestLap: number;
    FastestTime: number;
}
interface QualifyResultsInfo {
    Results?: ResultsEntity[] | null;
}
interface ResultsEntity {
    Position: number;
    ClassPosition: number;
    CarIdx: number;
    FastestLap: number;
    FastestTime: number;
}
interface CameraInfo {
    Groups?: GroupsEntity[] | null;
}
interface GroupsEntity {
    GroupNum: number;
    GroupName: string;
    Cameras?: CamerasEntity[] | null;
    IsScenic?: boolean | null;
}
interface CamerasEntity {
    CameraNum: number;
    CameraName: string;
}
interface RadioInfo {
    SelectedRadioNum: number;
    Radios?: RadiosEntity[] | null;
}
interface RadiosEntity {
    RadioNum: number;
    HopCount: number;
    NumFrequencies: number;
    TunedToFrequencyNum: number;
    ScanningIsOn: number;
    Frequencies?: FrequenciesEntity[] | null;
}
interface FrequenciesEntity {
    FrequencyNum: number;
    FrequencyName: string;
    Priority: number;
    CarIdx: number;
    EntryIdx: number;
    ClubID: number;
    CanScan: number;
    CanSquawk: number;
    Muted: number;
    IsMutable: number;
    IsDeletable: number;
}
interface DriverInfo {
    DriverCarIdx: number;
    DriverUserID: number;
    PaceCarIdx: number;
    DriverHeadPosX: number;
    DriverHeadPosY: number;
    DriverHeadPosZ: number;
    DriverCarIsElectric: number;
    DriverCarIdleRPM: number;
    DriverCarRedLine: number;
    DriverCarEngCylinderCount: number;
    DriverCarFuelKgPerLtr: number;
    DriverCarFuelMaxLtr: number;
    DriverCarMaxFuelPct: number;
    DriverCarGearNumForward: number;
    DriverCarGearNeutral: number;
    DriverCarGearReverse: number;
    DriverCarSLFirstRPM: number;
    DriverCarSLShiftRPM: number;
    DriverCarSLLastRPM: number;
    DriverCarSLBlinkRPM: number;
    DriverCarVersion: string;
    DriverPitTrkPct: number;
    DriverCarEstLapTime: number;
    DriverSetupName: string;
    DriverSetupIsModified: number;
    DriverSetupLoadTypeName: string;
    DriverSetupPassedTech: number;
    DriverIncidentCount: number;
    Drivers: DriversEntity[];
}
interface DriversEntity {
    CarIdx: number;
    UserName: string;
    AbbrevName: string | null;
    Initials: string | null;
    UserID: number;
    TeamID: number;
    TeamName: string;
    CarNumber: string;
    CarNumberRaw: number;
    CarPath: string;
    CarClassID: number;
    CarID: number;
    CarIsPaceCar: number;
    CarIsAI: number;
    CarIsElectric: number;
    CarScreenName: string;
    CarScreenNameShort: string;
    CarClassShortName: string | null;
    CarClassRelSpeed: number;
    CarClassLicenseLevel: number;
    CarClassMaxFuelPct: string;
    CarClassWeightPenalty: string;
    CarClassPowerAdjust: string;
    CarClassDryTireSetLimit: string;
    CarClassColor: number;
    CarClassEstLapTime: number;
    IRating: number;
    LicLevel: number;
    LicSubLevel: number;
    LicString: string;
    LicColor: number;
    IsSpectator: number;
    CarDesignStr: string;
    HelmetDesignStr: string;
    SuitDesignStr: string;
    CarNumberDesignStr: string;
    CarSponsor_1: number;
    CarSponsor_2: number;
    ClubName: string;
    ClubID: number;
    DivisionName: string;
    DivisionID: number;
    CurDriverIncidentCount: number;
    TeamIncidentCount: number;
}
interface SplitTimeInfo {
    Sectors: SectorsEntity[];
}
interface SectorsEntity {
    SectorNum: number;
    SectorStartPct: number;
}
interface CarSetup {
    UpdateCount: number;
    TiresAero: TiresAero;
    Chassis: Chassis;
}
interface TiresAero {
    LeftFront: LeftFrontOrLeftRear;
    LeftRear: LeftFrontOrLeftRear;
    RightFront: RightFrontOrRightRear;
    RightRear: RightFrontOrRightRear;
}
interface LeftFrontOrLeftRear {
    StartingPressure: string;
    LastHotPressure: string;
    LastTempsOMI: string;
    TreadRemaining: string;
}
interface RightFrontOrRightRear {
    StartingPressure: string;
    LastHotPressure: string;
    LastTempsIMO: string;
    TreadRemaining: string;
}
interface Chassis {
    Front: Front;
    LeftFront: LeftFrontOrRightFront;
    LeftRear: LeftRearOrRightRear;
    InCarDials: InCarDials;
    RightFront: LeftFrontOrRightFront;
    RightRear: LeftRearOrRightRear;
    Rear: Rear;
}
interface Front {
    ArbSetting: number;
    ToeIn: string;
    FuelLevel: string;
    CrossWeight: string;
}
interface LeftFrontOrRightFront {
    CornerWeight: string;
    RideHeight: string;
    SpringPerchOffset: string;
    Camber: string;
}
interface LeftRearOrRightRear {
    CornerWeight: string;
    RideHeight: string;
    SpringPerchOffset: string;
    Camber: string;
    ToeIn: string;
}
interface InCarDials {
    DisplayPage: string;
    BrakePressureBias: string;
}
interface Rear {
    ArbSetting: number;
    WingSetting: number;
}
