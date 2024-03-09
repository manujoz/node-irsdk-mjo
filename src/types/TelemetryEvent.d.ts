export interface IrsdkTelemetryEvent {
    values: {
        SessionTime: number;
        SessionTick: number;
        SessionNum: number;
        SessionState: string;
        SessionUniqueID: number;
        SessionFlags: Array<
            | "OneLapToGreen"
            | "Green"
            | "GreenHeld"
            | "Yellow"
            | "YellowWaving"
            | "Blue"
            | "White"
            | "Caution"
            | "CautionWaving"
            | "Checkered"
            | "Disqualify"
            | "Furled"
            | "Penalty"
            | "Servicible"
            | "Servicible"
            | "StartHidden"
            | "StartSet"
            | "StartReady"
            | "Black"
            | "Repair"
        >;
        SessionTimeRemain: number;
        SessionLapsRemain: number;
        SessionLapsRemainEx: number;
        SessionTimeTotal: number;
        SessionLapsTotal: number;
        SessionJokerLapsRemain: number;
        SessionOnJokerLap: boolean;
        SessionTimeOfDay: number;
        RadioTransmitCarIdx: number;
        RadioTransmitRadioIdx: number;
        RadioTransmitFrequencyIdx: number;
        DisplayUnits: number;
        DriverMarker: boolean;
        PushToTalk: boolean;
        PushToPass: boolean;
        ManualBoost: boolean;
        ManualNoBoost: boolean;
        IsOnTrack: boolean;
        IsReplayPlaying: boolean;
        ReplayFrameNum: number;
        ReplayFrameNumEnd: number;
        IsDiskLoggingEnabled: boolean;
        IsDiskLoggingActive: boolean;
        FrameRate: number;
        CpuUsageFG: number;
        GpuUsage: number;
        ChanAvgLatency: number;
        ChanLatency: number;
        ChanQuality: number;
        ChanPartnerQuality: number;
        CpuUsageBG: number;
        ChanClockSkew: number;
        MemPageFaultSec: number;
        MemSoftPageFaultSec: number;
        PlayerCarPosition: number;
        PlayerCarClassPosition: number;
        PlayerCarClass: number;
        PlayerTrackSurface: string;
        PlayerTrackSurfaceMaterial: string;
        PlayerCarIdx: number;
        PlayerCarTeamIncidentCount: number;
        PlayerCarMyIncidentCount: number;
        PlayerCarDriverIncidentCount: number;
        PlayerCarWeightPenalty: number;
        PlayerCarPowerAdjust: number;
        PlayerCarDryTireSetLimit: number;
        PlayerCarTowTime: number;
        PlayerCarInPitStall: boolean;
        PlayerCarPitSvStatus: string;
        PlayerTireCompound: number;
        PlayerFastRepairsUsed: number;
        CarIdxLap: number[];
        CarIdxLapCompleted: number[];
        CarIdxLapDistPct: number[];
        CarIdxTrackSurface: Array<"AproachingPits" | "InPitStall" | "OnTrack" | "OffTrack" | "NotInWorld">;
        CarIdxTrackSurfaceMaterial?: string[] | null;
        CarIdxOnPitRoad: boolean[];
        CarIdxPosition: number[];
        CarIdxClassPosition: number[];
        CarIdxClass: number[];
        CarIdxF2Time: number[];
        CarIdxEstTime: number[];
        CarIdxLastLapTime: number[];
        CarIdxBestLapTime: number[];
        CarIdxBestLapNum: number[];
        CarIdxTireCompound: (-2 | -1 | 0 | 1 | 2)[];
        CarIdxQualTireCompound: (-2 | -1 | 0 | 1 | 2)[];
        CarIdxQualTireCompoundLocked: boolean[];
        CarIdxFastRepairsUsed: number[];
        CarIdxSessionFlags: Array<"Black" | "Disqualify" | "Furled" | "Repair" | "Servicible">[];
        PaceMode: number;
        CarIdxPaceLine: number[];
        CarIdxPaceRow: number[];
        CarIdxPaceFlags: number[];
        OnPitRoad: boolean;
        CarIdxSteer: number[];
        CarIdxRPM: number[];
        CarIdxGear: number[];
        SteeringWheelAngle: number;
        Throttle: number;
        Brake: number;
        Clutch: number;
        Gear: "N" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "R";
        RPM: number;
        Lap: number;
        LapCompleted: number;
        LapDist: number;
        LapDistPct: number;
        RaceLaps: number;
        LapBestLap: number;
        LapBestLapTime: number;
        LapLastLapTime: number;
        LapCurrentLapTime: number;
        LapLasNLapSeq: number;
        LapLastNLapTime: number;
        LapBestNLapLap: number;
        LapBestNLapTime: number;
        LapDeltaToBestLap: number;
        LapDeltaToBestLap_DD: number;
        LapDeltaToBestLap_OK: boolean;
        LapDeltaToOptimalLap: number;
        LapDeltaToOptimalLap_DD: number;
        LapDeltaToOptimalLap_OK: boolean;
        LapDeltaToSessionBestLap: number;
        LapDeltaToSessionBestLap_DD: number;
        LapDeltaToSessionBestLap_OK: boolean;
        LapDeltaToSessionOptimalLap: number;
        LapDeltaToSessionOptimalLap_DD: number;
        LapDeltaToSessionOptimalLap_OK: boolean;
        LapDeltaToSessionLastlLap: number;
        LapDeltaToSessionLastlLap_DD: number;
        LapDeltaToSessionLastlLap_OK: boolean;
        Speed: number;
        Yaw: number;
        YawNorth: number;
        Pitch: number;
        Roll: number;
        EnterExitReset: number;
        TrackTemp: number;
        TrackTempCrew: number;
        AirTemp: number;
        WeatherType: number;
        Skies: number;
        AirDensity: number;
        AirPressure: number;
        WindVel: number;
        WindDir: number;
        RelativeHumidity: number;
        FogLevel: number;
        SolarAltitude: number;
        SolarAzimuth: number;
        DCLapStatus: number;
        DCDriversSoFar: number;
        OkToReloadTextures: boolean;
        LoadNumTextures: boolean;
        CarLeftRight?: string[] | null;
        PitsOpen: boolean;
        VidCapEnabled: boolean;
        VidCapActive: boolean;
        PitRepairLeft: number;
        PitOptRepairLeft: number;
        PitstopActive: boolean;
        FastRepairUsed: number;
        FastRepairAvailable: number;
        LFTiresUsed: number;
        RFTiresUsed: number;
        LRTiresUsed: number;
        RRTiresUsed: number;
        LeftTireSetsUsed: number;
        RightTireSetsUsed: number;
        FrontTireSetsUsed: number;
        RearTireSetsUsed: number;
        TireSetsUsed: number;
        LFTiresAvailable: number;
        RFTiresAvailable: number;
        LRTiresAvailable: number;
        RRTiresAvailable: number;
        LeftTireSetsAvailable: number;
        RightTireSetsAvailable: number;
        FrontTireSetsAvailable: number;
        RearTireSetsAvailable: number;
        TireSetsAvailable: number;
        CamCarIdx: number;
        CamCameraNumber: number;
        CamGroupNumber: number;
        CamCameraState?: string[] | null;
        IsOnTrackCar: boolean;
        IsInGarage: boolean;
        SteeringWheelAngleMax: number;
        ShiftPowerPct: number;
        ShiftGrindRPM: number;
        ThrottleRaw: number;
        BrakeRaw: number;
        ClutchRaw: number;
        HandbrakeRaw: number;
        BrakeABSactive: boolean;
        /** Bitfield for warning lights. NOTE: Study */
        EngineWarnings: Array<
            | "FuelPressureWarning"
            | "OilPressureWarning"
            | "WaterTempWarning"
            | "EngineStalled"
            | "RevLimiterActive"
            | "PitSpeedLimiter"
        >;
        FuelLevelPct: number;
        /** Bitfield of pit service checkboxes. NOTE: Study */
        PitSvFlags: Array<"FuelFill" | "WindshieldTearoff" | "FastRepair">;
        PitSvLFP: number;
        PitSvRFP: number;
        PitSvLRP: number;
        PitSvRRP: number;
        PitSvFuel: number;
        PitSvTireCompound: number;
        CarIdxP2P_Status: boolean[];
        CarIdxP2P_Count: number[];
        SteeringWheelPctTorque: number;
        SteeringWheelPctTorqueSign: number;
        SteeringWheelPctTorqueSignStops: number;
        SteeringWheelPctSmoothing: number;
        SteeringWheelPctDamper: number;
        SteeringWheelLimiter: number;
        SteeringWheelMaxForceNm: number;
        SteeringWheelPeakForceNm: number;
        SteeringWheelUseLinear: boolean;
        ShiftIndicatorPct: number;
        ReplayPlaySpeed: number;
        ReplayPlaySlowMotion: boolean;
        ReplaySessionTime: number;
        ReplaySessionNum: number;
        TireLF_RumblePitch: number;
        TireRF_RumblePitch: number;
        TireLR_RumblePitch: number;
        TireRR_RumblePitch: number;
        IsGarageVisible: boolean;
        SteeringWheelTorque_ST: number[];
        SteeringWheelTorque: number;
        VelocityZ_ST: number[];
        VelocityY_ST: number[];
        VelocityX_ST: number[];
        VelocityZ: number;
        VelocityY: number;
        VelocityX: number;
        YawRate_ST: number[];
        PitchRate_ST: number[];
        RollRate_ST: number[];
        YawRate: number;
        PitchRate: number;
        RollRate: number;
        VertAccel_ST: number[];
        LatAccel_ST: number[];
        LongAccel_ST: number[];
        VertAccel: number;
        LatAccel: number;
        LongAccel: number;
        dcStarter: boolean;
        dcPitSpeedLimiterToggle: boolean;
        dcTractionControlToggle: boolean;
        dcHeadlightFlash: boolean;
        /** In car toggle DRS. Cars(cars with DRS) */
        dcDRSToggle: boolean | undefined;
        dpRFTireChange: number;
        dpLFTireChange: number;
        dpRRTireChange: number;
        dpLRTireChange: number;
        dpLTireChange: number;
        dpRTireChange: number;
        dpFuelFill: number;
        /** In car tear off visor film. Cars(cars with tear off) NOTE: Study */
        dcTearOffVisor: boolean | undefined;
        dpWindshieldTearoff: number;
        dpFuelAddKg: number;
        dpFastRepair: number;
        /** Pitstop all tire change request. Cars(McF1) NOTE: Study */
        dpTireChange: number | undefined;
        /** Pitstop front wing adjustment */
        dpWingFront: number | undefined;
        /** Pitstop rear wing adjustment */
        dpWingRear: number | undefined;
        /** In car front anti roll bar adjustment */
        dcAntiRollFront: number | undefined;
        /** In car rear anti roll bar adjustment */
        dcAntiRollRear: number | undefined;
        /** In car toggle in lap settings. Cars(P1) */
        dcInLapToggle: boolean | undefined;
        /** In car toggle full course yellow mode. Cars(P1) */
        dcFCYToggle: false | undefined;
        /** In car dash display page adjustment. Cars(cars with multiple dashboard pages) */
        dcDashPage: 0 | undefined;
        /** In car diff preload adjustment */
        dcDiffPreload: number | undefined;
        /** In car diff entry adjustment */
        dcDiffEntry: number | undefined;
        /** In car diff middle adjustment. Cars(W12, W13) */
        dcDiffMiddle: number | undefined;
        /** In car diff exit adjustment */
        dcDiffExit: number | undefined;
        /** In car brake bias adjustment */
        dcBrakeBias: number | undefined;
        /** In car brake bias fine adjustment. Cars(W12, W13) */
        dcBrakeBiasFine: number | undefined;
        /** In car peak brake bias adjustment. Cars(McF1, W12, W13) */
        dcPeakBrakeBias: number | undefined;
        /** Drag Reduction System Status. Cars(McF1, W12, W13, 3.5) */
        DRS_Status: 0 | 1 | 2 | 3 | undefined;
        /** Drag Reduction System count of usage Cars(3.5) */
        DRS_Count: number | undefined;
        /** Pitstop lf tire cold pressure adjustment */
        dpLFTireColdPress: number;
        /** Pitstop rf tire cold pressure adjustment */
        dpRFTireColdPress: number;
        /** Pitstop lr tire cold pressure adjustment */
        dpLRTireColdPress: number;
        /** Pitstop rr tire cold pressure adjustment */
        dpRRTireColdPress: number;
        /** In car adv end straight fuel cut. Cars(P1) */
        dcFuelCutPosition: number;
        /** In car fuel cut on straight active. Cars(P1) */
        dcFuelNoCutToggle: boolean;
        /** In car low fuel accept. Cars(P1) */
        dcLowFuelAccept: boolean;
        /** In car engine power adjustment. Cars(P1) */
        dcEnginePower: number;
        /** In car MUG-K re-gen gain adjustment. Cars(P1) */
        dcMGUKRegenGain: number;
        /** In car MGU-K deployment mode level adjustment. Cars(P1) */
        dcMGUKDeployMode: number;
        /** In car MGU-K fixed deployment level adjustment. Cars(P1, McF1, W12, W13) */
        dcMGUKDeployFixed: number;
        /** In car right wedge/weight jacker adjustmen */
        dcWeightJackerRight: number | undefined;
        /** In car fuel mixture adjustment */
        dcFuelMixture: number | undefined;
        dcTractionControl: number | undefined;
        dcTractionControl2: number | undefined;
        dcTractionControl3: number | undefined;
        dcTractionControl4: number | undefined;
        dcABS: number;
        /** In car hold HYS deploy. Cars(P1) */
        dcHysBoostHold: boolean;
        /** In car disable HYS deploy. Cars(P1) */
        dcHysNoBoostToggle: boolean;
        /** Pitstop power steering adjustment. Cars(P1) */
        dpPowerSteering: number;
        dcThrottleShape: number;
        RFbrakeLinePress: number;
        RFcoldPressure: number;
        RFtempCL: number;
        RFtempCM: number;
        RFtempCR: number;
        RFwearL: number;
        RFwearM: number;
        RFwearR: number;
        LFbrakeLinePress: number;
        LFcoldPressure: number;
        LFtempCL: number;
        LFtempCM: number;
        LFtempCR: number;
        LFwearL: number;
        LFwearM: number;
        LFwearR: number;
        FuelUsePerHour: number;
        Voltage: number;
        WaterTemp: number;
        WaterLevel: number;
        FuelPress: number;
        OilTemp: number;
        OilPress: number;
        OilLevel: number;
        ManifoldPress: number;
        /** Engine MGU-K mechanical power. Cars(P1, McF1, W12, W13) */
        PowerMGU_K: number | undefined;
        /** Engine MGU-K mechanical torque. Cars(P1, McF1, W12, W13) */
        TorqueMGU_K: number | undefined;
        /** Engine MGU-H mechanical power. Cars(P1, McF1, W12, W13) */
        PowerMGU_H: number | undefined;
        /** Engine ERS battery charge. Cars(P1, McF1, W12, W13) */
        EnergyERSBattery: number | undefined;
        /** Engine ERS battery charge as a percent. Cars(P1, McF1, W12, W13) */
        EnergyERSBatteryPct: number | undefined;
        /** Electrical energy from battery to MGU-K per lap. Cars(P1, McF1, W12, W13) */
        EnergyBatteryToMGU_KLap: number | undefined;
        /** Electrical energy available to MGU-K per lap as a percent. Cars(P1, McF1, W12, W13) */
        EnergyMGU_KLapDeployPct: number | undefined;
        FuelLevel: number;
        Engine0_RPM: number;
        RRbrakeLinePress: number;
        RRcoldPressure: number;
        RRtempCL: number;
        RRtempCM: number;
        RRtempCR: number;
        RRwearL: number;
        RRwearM: number;
        RRwearR: number;
        LRbrakeLinePress: number;
        LRcoldPressure: number;
        LRtempCL: number;
        LRtempCM: number;
        LRtempCR: number;
        LRwearL: number;
        LRwearM: number;
        LRwearR: number;
        LRshockDefl: number;
        LRshockDefl_ST: number[];
        LRshockVel: number;
        LRshockVel_ST: number[];
        RRshockDefl: number;
        RRshockDefl_ST: number[];
        RRshockVel: number;
        RRshockVel_ST: number[];
        LFshockDefl: number;
        LFshockDefl_ST: number[];
        LFshockVel: number;
        LFshockVel_ST: number[];
        RFshockDefl: number;
        RFshockDefl_ST: number[];
        RFshockVel: number;
        RFshockVel_ST: number[];
        /** HF shock deflection. Cars(P1) */
        HFshockDefl: number;
        /** HF shock deflection at 360 Hz. Cars(P1) */
        HFshockDefl_ST: number[];
        /** HF shock velocity */
        HFshockVel: number;
        /** HF shock velocity at 360 Hz. Cars(P1) */
        HFshockVel_ST: number[];
        /** ROLLF shock deflection. Cars(P1, W12, W13) */
        ROLLFshockDefl: 0;
        /** ROLLF shock deflection at 360 Hz. Cars(P1, W12, W13) */
        ROLLFshockDefl_ST: number[];
        /** ROLLF shock velocity. Cars(P1, W12, W13) */
        ROLLFshockVel: number;
        /** ROLLF shock velocity at 360 Hz. Cars(P1, W12, W13) */
        ROLLFshockVel_ST: number[];
        /** HR shock deflection. Cars(P1) */
        HRshockDefl: number;
        /** HR shock deflection at 360 Hz. Cars(P1) */
        HRshockDefl_ST: number[];
        /** HR shock velocity. Cars(P1) */
        HRshockVel: number;
        /** HR shock velocity at 360 Hz. Cars(P1) */
        HRshockVel_ST: number[];
        /** ROLLR shock deflection. Cars(P1, W12, W13) */
        ROLLRshockDefl: 0;
        /** ROLLR shock deflection at 360 Hz. Cars(P1, W12, W13) */
        ROLLRshockDefl_ST: number[];
        /** ROLLR shock velocity. Cars(P1, W12, W13) */
        ROLLRshockVel: number;
        /** ROLLR shock velocity at 360 Hz. Cars(P1, W12, W13) */
        ROLLRshockVel_ST: number[];
        /** CF shock deflection. Cars(McF1, W12, W13, 3.5) */
        CFshockDefl: number;
        /** CF shock deflection at 360 Hz- Cars(McF1, W12, W13, 3.5) */
        CFshockDefl_ST: number[];
        /** CF shock velocity Cars(McF1, W12, W13, 3.5) */
        CFshockVel: number;
        /** CF shock velocity at 360 Hz Cars(McF1, W12, W13) */
        CFshockVel_ST: number[];
        /** CR shock deflection Cars(McF1, W12, W13) */
        CRshockDefl: number;
        /** CR shock deflection at 360 Hz Cars(McF1, W12, W13) */
        CRshockDefl_ST: number[];
        /** CR shock velocity Cars(McF1, W12, W13) */
        CRshockVel: number;
        /** CR shock velocity at 360 Hz Cars(McF1, W12, W13) */
        CRshockVel_ST: number[];
    };
}
