type proType = {
  id: number
  name: string
  team: string
  photo: boolean

  mouse: string | null
  dpi: number
  sensitivity: number
  eDpi?: number | null
  hz: number | null
  scopedSensitivity: number | null
  windowSensitivity: number | null

  keyboard: string | null
  walk: string | null
  crouch: string | null
  jump: string | null
  useObject: string | null

  equip1: string | null
  equip2: string | null
  equip3: string | null
  equip4: string | null

  ability1: string | null
  ability2: string | null
  ability3: string | null
  ability4: string | null

  color: string | null
  outlines: string | "Off"
  centerDot: string | "Off"
  innerLines: string | null
  outerLines: string | null
  error: string | null

  monitor: string | null
  display: string | null
  resolution: string | null
  frameLimit: string | null
}

export const prosetting: Array<proType> = [
  {
    id: 0,
    name: "aceu",
    team: "NRG Esports",
    photo: true,

    mouse: "FINALMOUSE ULTRALIGHT 2",
    dpi: 800,
    sensitivity: 0.47,
    eDpi: 376,
    hz: 500,
    scopedSensitivity: 1,
    windowSensitivity: 6,

    keyboard: "DUCKY ONE TKL WHITE",
    walk: "L-Shift",
    crouch: "L-Ctrl",
    jump: "Space Bar",
    useObject: "F",

    equip1: "1",
    equip2: "2",
    equip3: "3",
    equip4: "4",

    ability1: "C",
    ability2: "Q",
    ability3: "E",
    ability4: "X",

    color: "Green",
    outlines: "Off",
    centerDot: "Off",
    innerLines: "0.8 / 0 / 1 / 3",
    outerLines: "1 / 7 / 1 / 3",
    error: "On",

    monitor: "BENQ XL2546",
    display: "Fullscreen",
    resolution: "1920×1080",
    frameLimit: "해제",
  },
  {
    id: 1,
    name: "Skadoodle",
    team: "T1",
    photo: true,

    mouse: "LOGITECH G PRO WIRELESS GHOST",
    dpi: 400,
    sensitivity: 0.7,
    eDpi: 280,
    hz: 1000,
    scopedSensitivity: 1,
    windowSensitivity: 6,

    keyboard: "LOGITECH G PRO X MK",
    walk: "C",
    crouch: "L-Ctrl",
    jump: "Wheel Down",
    useObject: "5",

    equip1: "1",
    equip2: "2",
    equip3: "3",
    equip4: "4",

    ability1: "L-Shift",
    ability2: "E",
    ability3: "F",
    ability4: "X",

    color: "Green",
    outlines: "On / 1 / 1",
    centerDot: "Off",
    innerLines: "1 / 7 / 1 / 4",
    outerLines: "0 / 0 / 2 / 10",
    error: "Off",

    monitor: "BENQ XL2546",
    display: "Fullscreen",
    resolution: "1920×1080",
    frameLimit: "해제",
  },
  {
    id: 2,
    name: "Shroud",
    team: "Twitch Streamer",
    photo: true,

    mouse: "LOGITECH G PRO WIRELESS GHOST",
    dpi: 450,
    sensitivity: 0.78,
    eDpi: 351,
    hz: 1000,
    scopedSensitivity: 1,
    windowSensitivity: 6,

    keyboard: "LOGITECH G PRO X MK",
    walk: "L-Shift",
    crouch: "L-Ctrl",
    jump: "Wheel Down",
    useObject: "F",

    equip1: "1",
    equip2: "2",
    equip3: "3",
    equip4: "4",

    ability1: "C",
    ability2: "Q",
    ability3: "E",
    ability4: "X",

    color: "White",
    outlines: "On / 1 / 1",
    centerDot: "Off",
    innerLines: "1 / 8 / 3 / 6",
    outerLines: "0 / 0 / 0 / 0",
    error: "On",

    monitor: "BENQ XL2540",
    display: "Fullscreen",
    resolution: "1920×1080",
    frameLimit: "300FPS",
  },
  {
    id: 3,
    name: "summit1g",
    team: "Twitch Streamer",
    photo: true,

    mouse: "FM AIR58 NINJA CBR EDITION",
    dpi: 400,
    sensitivity: 0.47,
    eDpi: 188,
    hz: 500,
    scopedSensitivity: 1,
    windowSensitivity: 6,

    keyboard: "CORSAIR K70 RGB MK.2",
    walk: "L-Shift",
    crouch: "L-Ctrl",
    jump: "Wheel Down",
    useObject: "F",

    equip1: "1",
    equip2: "2",
    equip3: "3",
    equip4: "4",

    ability1: "C",
    ability2: "Mouse 5",
    ability3: "E",
    ability4: "Wheel Up",

    color: "Green",
    outlines: "On",
    centerDot: "Off",
    innerLines: "1 / 5 / 2 / 2",
    outerLines: "0 / 0 / 0 / 0",
    error: "On",

    monitor: "ASUS ROG SWIFT PG258Q",
    display: "Fullscreen",
    resolution: "1920×1080",
    frameLimit: "Unlocked",
  },
  {
    id: 4,
    name: "TenZ",
    team: "C9",
    photo: true,

    mouse: "RAZER VIPER ULTIMATE",
    dpi: 800,
    sensitivity: 0.485,
    hz: 1000,
    scopedSensitivity: 0.875,
    windowSensitivity: 6,

    keyboard: "HyperX Alloy FPS RGB",
    walk: "L-Shife",
    crouch: "L-Ctrl",
    jump: "Wheel Down",
    useObject: "E",

    equip1: "1",
    equip2: "2",
    equip3: "3",
    equip4: "4",

    ability1: "C",
    ability2: "Mouse 5",
    ability3: "Mouse 4",
    ability4: "F",

    color: "Cyan",
    outlines: "Off",
    centerDot: "Off",
    innerLines: "1 / 4 / 2 / 2",
    outerLines: "0 / 0 / 0 / 0",
    error: "Off",

    monitor: "BenQ XL2546",
    display: "Fullscreen",
    resolution: "1920×1080",
    frameLimit: "Unlocked",
  },
  {
    id: 5,
    name: "dafran",
    team: "Twitch Streamer",
    photo: true,

    mouse: "BenQ Zowie EC2",
    dpi: 400,
    sensitivity: 0.6,
    hz: 1000,
    scopedSensitivity: null,
    windowSensitivity: null,

    keyboard: "Corsair K65",
    walk: "L-shift",
    crouch: "Ctrl",
    jump: "Space",
    useObject: "F",

    equip1: "1",
    equip2: "2",
    equip3: "3",
    equip4: "4",

    ability1: "Q",
    ability2: "E",
    ability3: "C",
    ability4: "X",

    color: "Green",
    outlines: "Off",
    centerDot: "Off",
    innerLines: "1 / 11 / 3 / 4",
    outerLines: "0 / 2 / 2 / 10",
    error: "Off",

    monitor: "HP OMEN X 25f 240Hz",
    display: "Fullscreen",
    resolution: "1920×1080",
    frameLimit: "Unlocked",
  },
  {
    id: 6,
    name: "Brax",
    team: "T1",
    photo: true,

    mouse: "LOGITECH MX518 LEGENDARY",
    dpi: 400,
    sensitivity: 0.354,
    hz: 1000,
    scopedSensitivity: null,
    windowSensitivity: null,

    keyboard: "LOGITECH G513",
    walk: "L-Shift",
    crouch: "L-Ctrl",
    jump: "Wheel Down",
    useObject: "F",

    equip1: "1",
    equip2: "2",
    equip3: "3",
    equip4: "4",

    ability1: "C",
    ability2: "Q",
    ability3: "E",
    ability4: "X",

    color: "White",
    outlines: "Off",
    centerDot: "Off",
    innerLines: "1 / 5 / 2 / 2",
    outerLines: "0 / 0 / 0 / 0",
    error: "Off",

    monitor: "BENQ XL2540",
    display: "Fullscreen",
    resolution: "1920×1080",
    frameLimit: "Unlocked",
  },
  {
    id: 7,
    name: "ShahZaM",
    team: "Sentinels",
    photo: true,

    mouse: "ZOWIE EC2-B DIVINA EDITION",
    dpi: 400,
    sensitivity: 0.53,
    hz: 1000,
    scopedSensitivity: 0.9,
    windowSensitivity: 6,

    keyboard: "HYPERX ALLOY FPS",
    walk: "L-Shift",
    crouch: "L-Ctrl",
    jump: "Wheel Down",
    useObject: "F",

    equip1: "1",
    equip2: "2",
    equip3: "3",
    equip4: "4",

    ability1: "C",
    ability2: "Q",
    ability3: "E",
    ability4: "X",

    color: "Green",
    outlines: "Off",
    centerDot: "Off",
    innerLines: "1 / 4 / 2 / 2",
    outerLines: "0 / 0 / 0 / 0",
    error: "Off",

    monitor: "BENQ XL2546",
    display: "Fullscreen",
    resolution: "1920×1080",
    frameLimit: "Unlocked",
  },
  {
    id: 8,
    name: "Mendo",
    team: "Team Liquid",
    photo: true,

    mouse: "LOGITECH G PRO WIRELESS EASTER PINK",
    dpi: 450,
    sensitivity: 0.55,
    hz: 1000,
    scopedSensitivity: 1,
    windowSensitivity: 6,

    keyboard: "TOFU 60% ZEALIOS 67G SWITCHES",
    walk: "L-Shift",
    crouch: "L-Ctrl",
    jump: "Wheel Down",
    useObject: "F",

    equip1: "1",
    equip2: "2",
    equip3: "3",
    equip4: "4",

    ability1: "C",
    ability2: "E",
    ability3: "V",
    ability4: "X",

    color: "Red",
    outlines: "Off",
    centerDot: "Off",
    innerLines: "1 / 2 / 2 / 4",
    outerLines: "0 / 0 / 2 / 12",
    error: "Off",

    monitor: "ASUS ROG SWIFT PG258Q",
    display: "Fullscreen",
    resolution: "1920×1080",
    frameLimit: "Unlocked",
  },
  {
    id: 9,
    name: "Sinatraa",
    team: "Sentinels",
    photo: true,

    mouse: "LOGITECH G PRO WIRELESS PIXEL",
    dpi: 800,
    sensitivity: 0.48,
    hz: 500,
    scopedSensitivity: 1,
    windowSensitivity: 6,

    keyboard: "LOGITECH G PRO X MK",
    walk: "L-Shift",
    crouch: "L-Ctrl",
    jump: "Wheel Down",
    useObject: "F",

    equip1: "1",
    equip2: "2",
    equip3: "3",
    equip4: "4",

    ability1: "C",
    ability2: "Q",
    ability3: "E",
    ability4: "X",

    color: "Green",
    outlines: "Off",
    centerDot: "Off",
    innerLines: "1 / 4 / 2 / 3",
    outerLines: "0 / 0 / 0 / 0",
    error: "Off",

    monitor: "OMEN BY HP 24.5″",
    display: "Fullscreen",
    resolution: "1920×1080",
    frameLimit: "Unlocked",
  },
  {
    id: 10,
    name: "SicK",
    team: "Sentinels",
    photo: true,

    mouse: "LOGITECH G PRO WIRELESS",
    dpi: 800,
    sensitivity: 0.235,
    hz: 1000,
    scopedSensitivity: 1,
    windowSensitivity: 6,

    keyboard: "HYPERX ALLOY FPS PRO",
    walk: "L-Shift",
    crouch: "L-Ctrl",
    jump: "Wheel Down",
    useObject: "F",

    equip1: "1",
    equip2: "2",
    equip3: "3",
    equip4: "4",

    ability1: "C",
    ability2: "Mouse 4",
    ability3: "E",
    ability4: "X",

    color: "Green",
    outlines: "On / 1 / 1",
    centerDot: "Off",
    innerLines: "0.808 / 3 / 2 / 5",
    outerLines: "0.379 / 2 / 0 / 10",
    error: "Off",

    monitor: "BENQ XL2546",
    display: "Fullscreen",
    resolution: "1920×1080",
    frameLimit: "Unlocked",
  },
  {
    id: 11,
    name: "zombs",
    team: "Sentinels",
    photo: true,

    mouse: "LOGITECH G PRO WIRELESS",
    dpi: 400,
    sensitivity: 0.54,
    hz: 1000,
    scopedSensitivity: 1,
    windowSensitivity: 6,

    keyboard: "HYPERX ALLOY FPS PRO",
    walk: "L-Shift",
    crouch: "L-Ctrl",
    jump: "Wheel Down",
    useObject: "F",

    equip1: "1",
    equip2: "2",
    equip3: "3",
    equip4: "4",

    ability1: "C",
    ability2: "Q",
    ability3: "E",
    ability4: "X",

    color: "Green",
    outlines: "Off",
    centerDot: "Off",
    innerLines: "1 / 4 / 2 / 2",
    outerLines: "0 / 0 / 0 / 0",
    error: "Off",

    monitor: "BENQ XL2540",
    display: "Fullscreen",
    resolution: "1920×1080",
    frameLimit: "Unlocked",
  },
  {
    id: 12,
    name: "stax",
    team: "Vision Strikers",
    photo: true,

    mouse: "BenQ Zowie EC2",
    dpi: 400,
    sensitivity: 0.42,
    hz: 1000,
    scopedSensitivity: 0.9,
    windowSensitivity: 6,

    keyboard: "Razer BlackWidow X Chroma",
    walk: "L-Shift",
    crouch: "L-Ctrl",
    jump: "Wheel Down",
    useObject: "F",

    equip1: "1",
    equip2: "2",
    equip3: "3",
    equip4: "E",

    ability1: "V",
    ability2: "X",
    ability3: "C",
    ability4: "4",

    color: "Green",
    outlines: "Off",
    centerDot: "Off",
    innerLines: "1 / 4 / 2 / 2",
    outerLines: "0 / 0 / 0 / 0",
    error: "Off",

    monitor: "BENQ XL2546",
    display: "Fullscreen",
    resolution: "1920×1080",
    frameLimit: "Unlocked",
  },
  {
    id: 13,
    name: "mixwell",
    team: "C9",
    photo: true,

    mouse: "LOGITECH G PRO WIRELESS",
    dpi: 400,
    sensitivity: 0.69,
    hz: 1000,
    scopedSensitivity: 1,
    windowSensitivity: 6,

    keyboard: "HYPER X ALLOY FPS",
    walk: "L-Shift",
    crouch: "L-Ctrl",
    jump: "Wheel Down",
    useObject: "F",

    equip1: "1",
    equip2: "2",
    equip3: "3",
    equip4: "4",

    ability1: "C",
    ability2: "Q",
    ability3: "E",
    ability4: "X",

    color: "White",
    outlines: "Off",
    centerDot: "Off",
    innerLines: "1 / 2 / 2 / 4",
    outerLines: "0 / 2 / 0 / 0",
    error: "Off",

    monitor: "OMEN X 27",
    display: "Fullscreen",
    resolution: "1920×1080",
    frameLimit: "Unlocked",
  },
  {
    id: 14,
    name: "Hiko",
    team: "100T",
    photo: true,

    mouse: "LOGITECH G PRO WIRELESS GHOST",
    dpi: 1600,
    sensitivity: 0.36,
    hz: 1000,
    scopedSensitivity: 1,
    windowSensitivity: 6,

    keyboard: "XTRFY K4-RGB TKL WHITE",
    walk: "L-Shift",
    crouch: "L-Ctrl",
    jump: "Wheel Down",
    useObject: "F",

    equip1: "1",
    equip2: "2",
    equip3: "3",
    equip4: "4",

    ability1: "C",
    ability2: "Q",
    ability3: "E",
    ability4: "X",

    color: "White",
    outlines: "On / 0.751 / 1",
    centerDot: "Off",
    innerLines: "1 / 4 / 2 / 4",
    outerLines: "0.253 / 2 / 0 / 0",
    error: "Off",

    monitor: "BENQ XL2540",
    display: "Fullscreen",
    resolution: "1920×1080",
    frameLimit: "Unlocked",
  },
  {
    id: 15,
    name: "ScreaM",
    team: "Twitch Streamer",
    photo: false,

    mouse: "FINALMOUSE ULTRALIGHT 2",
    dpi: 400,
    sensitivity: 0.785,
    hz: 1000,
    scopedSensitivity: 1,
    windowSensitivity: 6,

    keyboard: "HYPERX ALLOY FPS",
    walk: "L-Shift",
    crouch: "L-Ctrl",
    jump: "Space Bar",
    useObject: "E",

    equip1: "1",
    equip2: "2",
    equip3: "3",
    equip4: "4",

    ability1: "C",
    ability2: "Q",
    ability3: "F",
    ability4: "X",

    color: "Cyan",
    outlines: "On / 1 / 1",
    centerDot: "On / 1 / 2",
    innerLines: "1 / 0 / 0 / 0",
    outerLines: "0 / 0 / 0 / 0",
    error: "Off",

    monitor: "BENQ XL2546",
    display: "Fullscreen",
    resolution: "1920×1080",
    frameLimit: "Unlocked",
  },
  {
    id: 16,
    name: "Wardell",
    team: "TSM",
    photo: false,

    mouse: "LOGITECH G PRO WIRELESS",
    dpi: 400,
    sensitivity: 0.65,
    hz: 1000,
    scopedSensitivity: 1,
    windowSensitivity: 6,

    keyboard: "LOGITECH G915",
    walk: "L-Shift",
    crouch: "L-Ctrl",
    jump: "Space Bar",
    useObject: "E",

    equip1: "1",
    equip2: "2",
    equip3: "3",
    equip4: "4",

    ability1: "F",
    ability2: "Mouse 4",
    ability3: "Mouse 5",
    ability4: "C",

    color: "White",
    outlines: "Off / 0 / 0",
    centerDot: "Off",
    innerLines: "1 / 5 / 2 / 2",
    outerLines: "0 / 0 / 0 / 0",
    error: "Off",

    monitor: "BENQ XL2546",
    display: "Fullscreen",
    resolution: "1920×1080",
    frameLimit: "Unlocked",
  },
  {
    id: 17,
    name: "Corey",
    team: "FaZe Clan",
    photo: false,

    mouse: "ZOWIE S1",
    dpi: 800,
    sensitivity: 0.244,
    hz: 1000,
    scopedSensitivity: 1,
    windowSensitivity: 6,

    keyboard: "LOGITECH G915",
    walk: "L-Shift",
    crouch: "L-Ctrl",
    jump: "Wheel Down",
    useObject: "F",

    equip1: "1",
    equip2: "2",
    equip3: "3",
    equip4: "4",

    ability1: "C",
    ability2: "Q",
    ability3: "E",
    ability4: "X",

    color: "Cyan",
    outlines: "Off",
    centerDot: "Off",
    innerLines: "1 / 4 / 2 / 2",
    outerLines: "0 / 0 / 0 / 0",
    error: "Off",

    monitor: "OMEN BY HP 24.5",
    display: "Fullscreen",
    resolution: "1920×1080",
    frameLimit: "Unlocked",
  },
]
