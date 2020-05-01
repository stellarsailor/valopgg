type proType = {
    id: number;
    name: string;
    team: string;
    photo: string;
    prosetting: prosettingType;
}

type prosettingType = {
    mouse: string | null;
    dpi: number | null;
    sensitivity: number | null;
    eDpi: number | null;
    hz: number | null;
    scopedSensitivity: number | null;
    windowSensitivity: number | null;

    keyboard: string | null;
    walk: string | null;
    crouch: string | null;
    jump: string | null;
    useObject: string | null;

    equip1: string | null;
    equip2: string | null;
    equip3: string | null;
    equip4: string | null;

    skill1: string | null;
    skill2: string | null;
    skill3: string | null;
    skill4: string | null;

    color: string | null;
    outlines: string | "Off";
    centerDot: string | "Off";
    innerLines: string | null;
    outerLines: string | null;
    error: string | null;

    monitor: string | null;
    display: string | null;
    resolution: string | null;
    frameLimit: string | null;
}

export const prosetting: Array<proType> = [
    {
        id: 0,
        name: "aceu",
        team: "NRG Esports",
        photo: "https://prosettings.net/wp-content/uploads/2020/04/aceu-profile-picture.jpg",
        prosetting: {
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
        
            skill1: "C",
            skill2: "Q",
            skill3: "E",
            skill4: "X",
        
            color: "Green",
            outlines: "Off",
            centerDot: "Off",
            innerLines: "0.8 / 0 / 1 / 3",
            outerLines: "1 / 7 / 1 / 3",
            error: "General: On Rest: Off",
        
            monitor: "BENQ XL2546",
            display: "Fullscreen",
            resolution: "1920×1080",
            frameLimit: "해제",
        }
    },
    {
        id: 1,
        name: "Skadoodle",
        team: "Twitch Streamer",
        photo: "https://prosettings.net/wp-content/uploads/2020/04/skadoodle-profile-picture-3.jpg",
        prosetting: {
            mouse: 'LOGITECH G PRO WIRELESS GHOST',
            dpi: 400,
            sensitivity: 0.70,
            eDpi: 280,
            hz: 1000,
            scopedSensitivity: 1,
            windowSensitivity: 6,
        
            keyboard: 'LOGITECH G PRO X MK',
            walk: "C",
            crouch: "L-Ctrl",
            jump: "Wheel Down",
            useObject: "5",
        
            equip1: "1",
            equip2: "2",
            equip3: "3",
            equip4: "4",
        
            skill1: "L-Shift",
            skill2: "E",
            skill3: "F",
            skill4: "X",
        
            color: "Green",
            outlines: "On / 1 / 1",
            centerDot: "Off",
            innerLines: '1 / 7 / 1 / 4',
            outerLines: '0 / 0 / 2 / 10',
            error: "Off",
        
            monitor: "BENQ XL2546",
            display: "Fullscreen",
            resolution: "1920×1080",
            frameLimit: "해제",
        }
    },
    {
        id: 2,
        name: "Shroud",
        team: "Twitch Streamer",
        photo: "https://prosettings.net/wp-content/uploads/2020/04/shroud-profile-picture-3.jpg",
        prosetting: {
            mouse: 'LOGITECH G PRO WIRELESS GHOST',
            dpi: 450,
            sensitivity: 0.78,
            eDpi: 351,
            hz: 1000,
            scopedSensitivity: 1,
            windowSensitivity: 6,
        
            keyboard: 'LOGITECH G PRO X MK',
            walk: "L-Shift",
            crouch: "L-Ctrl",
            jump: "Wheel Down",
            useObject: "F",
        
            equip1: "1",
            equip2: "2",
            equip3: "3",
            equip4: "4",
        
            skill1: "C",
            skill2: "Q",
            skill3: "E",
            skill4: "X",
        
            color: "White",
            outlines: "On / 1 / 1",
            centerDot: "Off",
            innerLines: '1 / 8 / 3 / 6',
            outerLines: '0 / 0 / 0 / 0',
            error: "On",
        
            monitor: "BENQ XL2540",
            display: "Fullscreen",
            resolution: "1920×1080",
            frameLimit: "300FPS",
        }
    },
    {
        id: 2,
        name: "summit1g",
        team: "Twitch Streamer",
        photo: "https://prosettings.net/wp-content/uploads/2020/04/summit1g-profile-picture-3.jpg",
        prosetting: {
            mouse: 'FM AIR58 NINJA CBR EDITION',
            dpi: 400,
            sensitivity: 0.47,
            eDpi: 188,
            hz: 500,
            scopedSensitivity: 1,
            windowSensitivity: 6,
        
            keyboard: 'CORSAIR K70 RGB MK.2',
            walk: "L-Shift",
            crouch: "L-Ctrl",
            jump: "Wheel Down",
            useObject: "F",
        
            equip1: "1",
            equip2: "2",
            equip3: "3",
            equip4: "4",
        
            skill1: "C",
            skill2: "Mouse 5",
            skill3: "E",
            skill4: "Wheel Up",
        
            color: "Green",
            outlines: "On",
            centerDot: "Off",
            innerLines: '1 / 5 / 2 / 2',
            outerLines: '0 / 0 / 0 / 0',
            error: "On",
        
            monitor: 'ASUS ROG SWIFT PG258Q',
            display: "Fullscreen",
            resolution: "1920×1080",
            frameLimit: "Unlocked",
        }
    },
]