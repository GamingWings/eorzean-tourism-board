import EorzeaWeather from 'eorzea-weather';

export const WEATHER_MAPPING = {
  'Fair Skies': 'Fair_Skies.png',
  'Clear Skies': 'Clear_Skies.png',
  Blizzards: 'Blizzard.png',
  Clouds: 'Clouds.png',
  Gales: 'Gales.png',
  'Heat Waves': 'Heat_Waves.png',
  Showers: 'Showers.png',
  Thunderstorms: 'Thunderstorms.png',
  'Dust Storms': 'Dust_Storms.png',
  Gloom: 'Gloom.png',
  Rain: 'Rain.png',
  Thunder: 'Thunder.png',
  Fog: 'Fog.png',
};

export const EMOTE_MAPPING = {
  Lookout: 'Lookout.png',
  Comfort: 'Comfort.png',
  Point: 'Point.png',
  Pray: 'Pray.png',
  Psych: 'Psych.png',
  Salute: 'Salute.png',
  Sit: 'Sit.png',
};

export const PHASES = [
  {
    StartTime: 0,
    EndTime: 7,
  },
  {
    StartTime: 8,
    EndTime: 15,
  },
  {
    StartTime: 16,
    EndTime: 23,
  },
];

export const SORT_COLUMN_KEY = 'Key';
export const SORT_COLUMN_START = 'Start Time';
export const SORT_COLUMN_END = 'End Time';
export const SORT_COLUMNS = [
  SORT_COLUMN_KEY,
  SORT_COLUMN_START,
  SORT_COLUMN_END,
];

export const ONE_BELL = 175 * 1000;
export const EIGHT_BELLS = ONE_BELL * 8;
export const TWENTY_FOUR_BELLS = EIGHT_BELLS * 3;
export const DAY_MILLISECONDS = 1000 * 60 * 60 * 24;

export const LOCAL_STORAGE_KEY_SORT_COLUMN = 'LocalStorage';
export const LOCAL_STORAGE_KEY_SEARCH_TERM = 'SearchTerm';
export const LOCAL_STORAGE_ALREADY_FOUND_LIST = 'FoundList';
export const LOCAL_STORAGE_THEME = 'Theme';
export const LOCAL_STORAGE_FILTER_FOUND = 'FilterFound';
export const LOCAL_STORAGE_HIDE_SECOND_BATCH = 'HideSecondBatch';

export const DATA = {
  1: {
    Key: 1,
    Name: 'Barracuda Piers',
    ZoneId: EorzeaWeather.ZONE_LIMSA_LOMINSA,
    ZoneName: 'Limsa Lominsa Upper Decks',
    Coordinates: {
      X: 9.5,
      Y: 7.8,
    },
    Weather: ['Fair Skies', 'Clear Skies'],
    Window: {
      StartTime: 8,
      EndTime: 12,
    },
    Emote: 'Lookout',
    Comment:
      'Located northwest out of The Bismarck, there are two sets of bricks set into the wall there. The set of bricks closer to the stairs is the Vista location.',
    URL: 'https://ffxiv.consolegameswiki.com/wiki/Sightseeing_Log_1:_Barracuda_Piers',
  },
  2: {
    Key: 2,
    Name: 'The Astalicia',
    ZoneId: EorzeaWeather.ZONE_LIMSA_LOMINSA,
    ZoneName: 'Limsa Lominsa Lower Decks',
    Coordinates: {
      X: 7,
      Y: 15,
    },
    Weather: ['Fair Skies', 'Clear Skies'],
    Window: {
      StartTime: 18,
      EndTime: 5,
    },
    Emote: 'Lookout',
    Comment:
      'Climb to the top of The Astalicia (the ship there), and go east towards the bow of the ship. Climb the pole extending from the ship and go to the very tip.',
    URL: 'https://ffxiv.consolegameswiki.com/wiki/Sightseeing_Log_2:_The_Astalicia',
  },
  3: {
    Key: 3,
    Name: 'Seasong Grotto',
    ZoneId: EorzeaWeather.ZONE_MIDDLE_LA_NOSCEA,
    ZoneName: 'Middle La Noscea',
    Coordinates: {
      X: 20.3,
      Y: 19.1,
    },
    Weather: ['Rain'],
    Window: {
      StartTime: 5,
      EndTime: 8,
    },
    Emote: 'Pray',
    Comment:
      "In the Seasong Grotto, by the entrance. Vista is close to the end of the tunnel leading into the cave, you'll want to stand in the middle of the end of the tunnel, as that's where the message will appear.",
    URL: 'https://ffxiv.consolegameswiki.com/wiki/Sightseeing_Log_3:_Seasong_Grotto',
  },
  4: {
    Key: 4,
    Name: 'The Skylift',
    ZoneId: EorzeaWeather.ZONE_MIDDLE_LA_NOSCEA,
    ZoneName: 'Middle La Noscea',
    Coordinates: {
      X: 16,
      Y: 17.3,
    },
    Weather: ['Fair Skies', 'Clear Skies'],
    Window: {
      StartTime: 12,
      EndTime: 17,
    },
    Emote: 'Lookout',
    Comment: 'By the Skylift, next to the man overlooking the pier.',
    URL: 'https://ffxiv.consolegameswiki.com/wiki/Sightseeing_Log_4:_The_Skylift',
  },
  5: {
    Key: 5,
    Name: 'La Thagran Eastroad',
    ZoneId: EorzeaWeather.ZONE_MIDDLE_LA_NOSCEA,
    ZoneName: 'Middle La Noscea',
    Coordinates: {
      X: 25.3,
      Y: 27.5,
    },
    Weather: ['Clouds'],
    Window: {
      StartTime: 8,
      EndTime: 12,
    },
    Emote: 'Lookout',
    Comment:
      'Go up the stairs on the east side, and jump up onto the fence post at the top of the stairs.',
    URL: 'https://ffxiv.consolegameswiki.com/wiki/Sightseeing_Log_5:_La_Thagran_Eastroad',
  },
  6: {
    Key: 6,
    Name: 'The Salt Strand',
    ZoneId: EorzeaWeather.ZONE_LOWER_LA_NOSCEA,
    ZoneName: 'Lower La Noscea',
    Coordinates: {
      X: 23,
      Y: 40,
    },
    Weather: ['Fair Skies', 'Clear Skies'],
    Window: {
      StartTime: 18,
      EndTime: 5,
    },
    Emote: 'Lookout',
    Comment:
      "Jump onto the base of the rock near the cliff west of the farmer's house.",
    URL: 'https://ffxiv.consolegameswiki.com/wiki/Sightseeing_Log_6:_The_Salt_Strand',
  },
  7: {
    Key: 7,
    Name: 'Red Rooster Stead',
    ZoneId: EorzeaWeather.ZONE_LOWER_LA_NOSCEA,
    ZoneName: 'Lower La Noscea',
    Coordinates: {
      X: 33,
      Y: 19,
    },
    Weather: ['Fog'],
    Window: {
      StartTime: 5,
      EndTime: 8,
    },
    Emote: 'Lookout',
    Comment:
      'Jump on top of the gate structure for the portal that leads to Mist. Vista is on top and in middle of the archway leading into the housing area.',
    URL: 'https://ffxiv.consolegameswiki.com/wiki/Sightseeing_Log_7:_Red_Rooster_Stead',
  },
  8: {
    Key: 8,
    Name: "Brewer's Beacon",
    ZoneId: EorzeaWeather.ZONE_WESTERN_LA_NOSCEA,
    ZoneName: 'Western La Noscea',
    Coordinates: {
      X: 29.9,
      Y: 30.7,
    },
    Weather: ['Fair Skies', 'Clear Skies'],
    Window: {
      StartTime: 5,
      EndTime: 8,
    },
    Emote: 'Lookout',
    Comment:
      "Go behind the lighthouse on the west side. The vista is located where the wooden barrier and the lighthouse's wall meet.",
    URL: "https://ffxiv.consolegameswiki.com/wiki/Sightseeing_Log_8:_Brewer's_Beacon",
  },
  9: {
    Key: 9,
    Name: "The Leatherworkers' Guild",
    ZoneId: EorzeaWeather.ZONE_GRIDANIA,
    ZoneName: 'Old Gridania',
    Coordinates: {
      X: 12.8,
      Y: 7.8,
    },
    Weather: ['Clouds'],
    Window: {
      StartTime: 12,
      EndTime: 17,
    },
    Emote: 'Lookout',
    Comment:
      'From inside the guild you go up the steps in the back, jump on the table against the right wall, jump again to get onto the higher shelf. Face the room and use Lookout.',
    URL: "https://ffxiv.consolegameswiki.com/wiki/Sightseeing_Log_9:_The_Leatherworkers'_Guild",
  },
  10: {
    Key: 10,
    Name: 'Apkallu Falls',
    ZoneId: EorzeaWeather.ZONE_GRIDANIA,
    ZoneName: 'Old Gridania',
    Coordinates: {
      X: 10,
      Y: 6,
    },
    Weather: ['Fair Skies', 'Clear Skies'],
    Window: {
      StartTime: 18,
      EndTime: 5,
    },
    Emote: 'Lookout',
    Comment:
      'Near Apkallu Falls, there are 3 lamp posts. You have to climb onto the cliff on the southeast (10.4, 6.6) and from there use Sprint and jump onto the top of the lamp post closest to the waterfall. The lamp post lights must be on for it to complete (after sunset).',
    URL: 'https://ffxiv.consolegameswiki.com/wiki/Sightseeing_Log_10:_Apkallu_Falls',
  },
  11: {
    Key: 11,
    Name: 'Bentbranch Meadows',
    ZoneId: EorzeaWeather.ZONE_CENTRAL_SHROUD,
    ZoneName: 'Central Shroud',
    Coordinates: {
      X: 21.8,
      Y: 21.8,
    },
    Weather: ['Fair Skies', 'Clear Skies'],
    Window: {
      StartTime: 12,
      EndTime: 17,
    },
    Emote: 'Sit',
    Comment:
      'The Vista is right next to the Aetheryte. There are three stumps across from the Moogle mail carrier. A woman is sitting on the first one. Hop up onto the third one to reach the Vista.',
    URL: 'https://ffxiv.consolegameswiki.com/wiki/Sightseeing_Log_11:_Bentbranch_Meadows',
  },
  12: {
    Key: 12,
    Name: 'The Sanctum of the Twelve',
    ZoneId: EorzeaWeather.ZONE_EAST_SHROUD,
    ZoneName: 'East Shroud',
    Coordinates: {
      X: 17.6,
      Y: 18.2,
    },
    Weather: ['Fair Skies', 'Clear Skies'],
    Window: {
      StartTime: 8,
      EndTime: 12,
    },
    Emote: 'Pray',
    Comment:
      'At the entrance to the chamber to the garden around the Sanctum of the Twelve.',
    URL: 'https://ffxiv.consolegameswiki.com/wiki/Sightseeing_Log_12:_The_Sanctum_of_the_Twelve',
  },
  13: {
    Key: 13,
    Name: 'Little Solace',
    ZoneId: EorzeaWeather.ZONE_EAST_SHROUD,
    ZoneName: 'East Shroud',
    Coordinates: {
      X: 22.3,
      Y: 26.2,
    },
    Weather: ['Fair Skies', 'Clear Skies'],
    Window: {
      StartTime: 18,
      EndTime: 5,
    },
    Emote: 'Lookout',
    Comment:
      'Just behind the Sylph Vendor NPC, on the top of the tree branch extending from the quest NPC platform.',
    URL: 'https://ffxiv.consolegameswiki.com/wiki/Sightseeing_Log_13:_Little_Solace',
  },
  14: {
    Key: 14,
    Name: 'Royal Promenade',
    ZoneId: EorzeaWeather.ZONE_ULDAH,
    ZoneName: "Ul'dah - Steps of Thal",
    Coordinates: {
      X: 11.1,
      Y: 11.6,
    },
    Weather: ['Fair Skies', 'Clear Skies'],
    Window: {
      StartTime: 5,
      EndTime: 8,
    },
    Emote: 'Salute',
    Comment:
      'There are three silver squares in front of the Royal Promenade (players can get there from the Chamber of Rule Aetheryte Shard). The Vista is on the tip of the triangle. Face the stairs and guards then use Salute.',
    URL: 'https://ffxiv.consolegameswiki.com/wiki/Sightseeing_Log_14:_Royal_Promenade',
  },
  15: {
    Key: 15,
    Name: 'The Gold Court',
    ZoneId: EorzeaWeather.ZONE_ULDAH,
    ZoneName: "Ul'dah - Steps of Thal",
    Coordinates: {
      X: 11.5,
      Y: 11.2,
    },
    Weather: ['Clouds'],
    Window: {
      StartTime: 12,
      EndTime: 17,
    },
    Emote: 'Lookout',
    Comment:
      'Jump from Hustings Strip balcony down onto the eastern-most lamp.',
    URL: 'https://ffxiv.consolegameswiki.com/wiki/Sightseeing_Log_15:_The_Gold_Court',
  },
  16: {
    Key: 16,
    Name: 'The Jewel of the Desert',
    ZoneId: EorzeaWeather.ZONE_WESTERN_THANALAN,
    ZoneName: 'Western Thanalan',
    Coordinates: {
      X: 22.3,
      Y: 22.3,
    },
    Weather: ['Fair Skies', 'Clear Skies'],
    Window: {
      StartTime: 18,
      EndTime: 5,
    },
    Emote: 'Lookout',
    Comment:
      'Use your mount and jump from the boulder to the awning (the cloth roof) at the beginning of the staircase.',
    URL: 'https://ffxiv.consolegameswiki.com/wiki/Sightseeing_Log_16:_The_Jewel_of_the_Desert',
  },
  17: {
    Key: 17,
    Name: "The Ruins of Sil'dih",
    ZoneId: EorzeaWeather.ZONE_CENTRAL_THANALAN,
    ZoneName: 'Central Thanalan',
    Coordinates: {
      X: 15.9,
      Y: 22.9,
    },
    Weather: ['Fog'],
    Window: {
      StartTime: 8,
      EndTime: 12,
    },
    Emote: 'Lookout',
    Comment: 'About half way down the cliff, where the cliff meets the creek.',
    URL: "https://ffxiv.consolegameswiki.com/wiki/Sightseeing_Log_17:_The_Ruins_of_Sil'dih",
  },
  18: {
    Key: 18,
    Name: 'The Lonely Giant',
    ZoneId: EorzeaWeather.ZONE_EASTERN_THANALAN,
    ZoneName: 'Eastern Thanalan',
    Coordinates: {
      X: 19.5,
      Y: 24.7,
    },
    Weather: ['Rain', 'Showers'],
    Window: {
      StartTime: 17,
      EndTime: 18,
    },
    Emote: 'Comfort',
    Comment:
      'It is located under the base of the tree clump across from the Goobbue. Vista is in the middle of the tree clump.',
    URL: 'https://ffxiv.consolegameswiki.com/wiki/Sightseeing_Log_18:_The_Lonely_Giant',
  },
  19: {
    Key: 19,
    Name: 'The Invisible City',
    ZoneId: EorzeaWeather.ZONE_EASTERN_THANALAN,
    ZoneName: 'Eastern Thanalan',
    Coordinates: {
      X: 14.3,
      Y: 18.5,
    },
    Weather: ['Clouds'],
    Window: {
      StartTime: 8,
      EndTime: 12,
    },
    Emote: 'Lookout',
    Comment: 'At the tip of the ruin/roof that overlooks the area.',
    URL: 'https://ffxiv.consolegameswiki.com/wiki/Sightseeing_Log_19:_The_Invisible_City',
  },
  20: {
    Key: 20,
    Name: 'Highbridge',
    ZoneId: EorzeaWeather.ZONE_EASTERN_THANALAN,
    ZoneName: 'Eastern Thanalan',
    Coordinates: {
      X: 21,
      Y: 20.7,
    },
    Weather: ['Fair Skies', 'Clear Skies'],
    Window: {
      StartTime: 5,
      EndTime: 8,
    },
    Emote: 'Pray',
    Comment:
      'The Vista is on the small platform that sticks out from underneath the north side of the bridge. It is closest to the NPC located in the carved area on the side of the canyon.',
    URL: 'https://ffxiv.consolegameswiki.com/wiki/Sightseeing_Log_20:_Highbridge',
  },
  21: {
    Key: 21,
    Name: 'Woad Whisper Canyon',
    ZoneId: EorzeaWeather.ZONE_MIDDLE_LA_NOSCEA,
    ZoneName: 'Middle La Noscea',
    Coordinates: {
      X: 20.0,
      Y: 13.1,
    },
    Weather: ['Fair Skies', 'Clear Skies'],
    Window: {
      StartTime: 12,
      EndTime: 17,
    },
    Emote: 'Lookout',
    Comment: 'Edge of the path, before you pass under the rocky archways.',
    URL: 'https://ffxiv.consolegameswiki.com/wiki/Sightseeing_Log_21:_Woad_Whisper_Canyon',
  },
  22: {
    Key: 22,
    Name: 'Summerford Farms',
    ZoneId: EorzeaWeather.ZONE_MIDDLE_LA_NOSCEA,
    ZoneName: 'Middle La Noscea',
    Coordinates: {
      X: 25.7,
      Y: 17,
    },
    Weather: ['Fair Skies', 'Clear Skies'],
    Window: {
      StartTime: 5,
      EndTime: 8,
    },
    Emote: 'Lookout',
    Comment:
      'Second floor of Inn. Top of lamp to left of door. Jump on pot plant, then to partition, then to top of lamp.',
    URL: 'https://ffxiv.consolegameswiki.com/wiki/Sightseeing_Log_22:_Summerford_Farms',
  },
  23: {
    Key: 23,
    Name: 'The Grey Fleet',
    ZoneId: EorzeaWeather.ZONE_LOWER_LA_NOSCEA,
    ZoneName: 'Lower La Noscea',
    Coordinates: {
      X: 31.5,
      Y: 12.7,
    },
    Weather: ['Rain'],
    Window: {
      StartTime: 12,
      EndTime: 17,
    },
    Emote: 'Lookout',
    Comment:
      'On top of the house of sticks. Use the rocks behind the house to get onto the roof.',
    URL: 'https://ffxiv.consolegameswiki.com/wiki/Sightseeing_Log_23:_The_Grey_Fleet',
  },
  24: {
    Key: 24,
    Name: 'Hidden Falls',
    ZoneId: EorzeaWeather.ZONE_EASTERN_LA_NOSCEA,
    ZoneName: 'Eastern La Noscea',
    Coordinates: {
      X: 32.6,
      Y: 23.5,
    },
    Weather: ['Fair Skies', 'Clear Skies'],
    Window: {
      StartTime: 8,
      EndTime: 12,
    },
    Emote: 'Sit',
    Comment: 'Sit on chair at end of dock.',
    URL: 'https://ffxiv.consolegameswiki.com/wiki/Sightseeing_Log_24:_Hidden_Falls',
  },
  25: {
    Key: 25,
    Name: 'Gullperch Tower',
    ZoneId: EorzeaWeather.ZONE_EASTERN_LA_NOSCEA,
    ZoneName: 'Eastern La Noscea',
    Coordinates: {
      X: 29.6,
      Y: 33.8,
    },
    Weather: ['Rain'],
    Window: {
      StartTime: 18,
      EndTime: 5,
    },
    Emote: 'Lookout',
    Comment:
      'On top of Gullperch Tower. Located on the edge of the wall to the left of the two lookout NPCs.',
    URL: 'https://ffxiv.consolegameswiki.com/wiki/Sightseeing_Log_25:_Gullperch_Tower',
  },
  26: {
    Key: 26,
    Name: 'The Navigator',
    ZoneId: EorzeaWeather.ZONE_WESTERN_LA_NOSCEA,
    ZoneName: 'Western La Noscea',
    Coordinates: {
      X: 26.9,
      Y: 26.6,
    },
    Weather: ['Fair Skies', 'Clear Skies'],
    Window: {
      StartTime: 17,
      EndTime: 18,
    },
    Emote: 'Pray',
    Comment:
      'To the left hand side along the railing (if lookout out towards the sea).',
    URL: 'https://ffxiv.consolegameswiki.com/wiki/Sightseeing_Log_26:_The_Navigator',
  },
  27: {
    Key: 27,
    Name: 'The Ship Graveyard',
    ZoneId: EorzeaWeather.ZONE_WESTERN_LA_NOSCEA,
    ZoneName: 'Western La Noscea',
    Coordinates: {
      X: 17.1,
      Y: 36.2,
    },
    Weather: ['Gales'],
    Window: {
      StartTime: 18,
      EndTime: 5,
    },
    Emote: 'Lookout',
    Comment:
      'Bottom SE corner of Isle of Umbral. Stand on top of the pot in the sand.',
    URL: 'https://ffxiv.consolegameswiki.com/wiki/Sightseeing_Log_27:_The_Ship_Graveyard',
  },
  28: {
    Key: 28,
    Name: 'Camp Skull Valley',
    ZoneId: EorzeaWeather.ZONE_WESTERN_LA_NOSCEA,
    ZoneName: 'Western La Noscea',
    Coordinates: {
      X: 22.8,
      Y: 22.4,
    },
    Weather: ['Fair Skies', 'Clear Skies'],
    Window: {
      StartTime: 8,
      EndTime: 12,
    },
    Emote: 'Lookout',
    Comment:
      'On top of the front-right spike (if facing) of the tents on the top of the fort. Jump on canvas roof then on spike.',
    URL: 'https://ffxiv.consolegameswiki.com/wiki/Sightseeing_Log_28:_Camp_Skull_Valley',
  },
  29: {
    Key: 29,
    Name: 'Tidegate',
    ZoneId: EorzeaWeather.ZONE_WESTERN_LA_NOSCEA,
    ZoneName: 'Western La Noscea',
    Coordinates: {
      X: 19.4,
      Y: 23.0,
    },
    Weather: ['Fair Skies', 'Clear Skies'],
    Window: {
      StartTime: 12,
      EndTime: 17,
    },
    Emote: 'Lookout',
    Comment:
      'On the top of the center pole on the round tent (just after three tents). Jump onto the smaller pole then BACKWARDS HOP onto the higher bit. From there sprint jump to the top/middle pole.',
    URL: 'https://ffxiv.consolegameswiki.com/wiki/Sightseeing_Log_29:_Tidegate',
  },
  30: {
    Key: 30,
    Name: 'Camp Bronze Lake',
    ZoneId: EorzeaWeather.ZONE_UPPER_LA_NOSCEA,
    ZoneName: 'Upper La Noscea',
    Coordinates: {
      X: 30.8,
      Y: 22.4,
    },
    Weather: ['Fair Skies', 'Clear Skies'],
    Window: {
      StartTime: 17,
      EndTime: 18,
    },
    Emote: 'Lookout',
    Comment:
      'Go to the side of the house and jump up on the barrels between the two awnings (jump at the barrels head on, not from the side). Jump up onto the right awning and then onto the rocky ledge. Walk along the edge and jump onto the small part of the roof that juts out. The vista is on the highest point at the front of the house.',
    URL: 'https://ffxiv.consolegameswiki.com/wiki/Sightseeing_Log_30:_Camp_Bronze_Lake',
  },
  31: {
    Key: 31,
    Name: 'Thalaos',
    ZoneId: EorzeaWeather.ZONE_UPPER_LA_NOSCEA,
    ZoneName: 'Upper La Noscea',
    Coordinates: {
      X: 12.9,
      Y: 22.0,
    },
    Weather: ['Fair Skies', 'Clear Skies'],
    Window: {
      StartTime: 12,
      EndTime: 17,
    },
    Emote: 'Lookout',
    Comment:
      'Very tip of biggest bone/spire. Base of spire starts in (x13.4,y21.5). Vista log message did not appear until correct time. (You can also just land on this.)',
    URL: 'https://ffxiv.consolegameswiki.com/wiki/Sightseeing_Log_31:_Thalaos',
  },
  32: {
    Key: 32,
    Name: "Jijiroon's Trading Post",
    ZoneId: EorzeaWeather.ZONE_UPPER_LA_NOSCEA,
    ZoneName: 'Upper La Noscea',
    Coordinates: {
      X: 29.1,
      Y: 25.4,
    },
    Weather: ['Thunderstorms'],
    Window: {
      StartTime: 18,
      EndTime: 5,
    },
    Emote: 'Lookout',
    Comment:
      'The vista is on the east side of the arch-like structure. Climb a wall and jump over to the next ruin.',
    URL: 'https://ffxiv.consolegameswiki.com/wiki/Sightseeing_Log_32:_Jijiroon%27s_Trading_Post',
  },
  33: {
    Key: 33,
    Name: 'The Floating City of Nym',
    ZoneId: EorzeaWeather.ZONE_OUTER_LA_NOSCEA,
    ZoneName: 'Outer La Noscea',
    Coordinates: {
      X: 12.6,
      Y: 15,
    },
    Weather: ['Fair Skies', 'Clear Skies'],
    Window: {
      StartTime: 18,
      EndTime: 5,
    },
    Emote: 'Lookout',
    Comment: 'Cliff overlooking Nym.',
    URL: 'https://ffxiv.consolegameswiki.com/wiki/Sightseeing_Log_33:_The_Floating_City_of_Nym',
  },
  34: {
    Key: 34,
    Name: 'Camp Overlook',
    ZoneId: EorzeaWeather.ZONE_OUTER_LA_NOSCEA,
    ZoneName: 'Outer La Noscea',
    Coordinates: {
      X: 17.1,
      Y: 16.3,
      Z: 0.8,
    },
    Weather: ['Clouds'],
    Window: {
      StartTime: 5,
      EndTime: 8,
    },
    Emote: 'Lookout',
    Comment:
      'Crumbling arch. Climb from the North side. Jump over gap and hop up on highest part. Kind of hidden by bushes.',
    URL: 'https://ffxiv.consolegameswiki.com/wiki/Sightseeing_Log_34:_Camp_Overlook',
  },
  35: {
    Key: 35,
    Name: "U'Ghamaro Mines",
    ZoneId: EorzeaWeather.ZONE_OUTER_LA_NOSCEA,
    ZoneName: 'Outer La Noscea',
    Coordinates: {
      X: 23.4,
      Y: 11.7,
      Z: 0.7,
    },
    Weather: ['Fair Skies', 'Clear Skies'],
    Window: {
      StartTime: 12,
      EndTime: 17,
    },
    Emote: 'Lookout',
    Comment:
      "On top of the high furnace. Jump from the smaller one to the bigger one. There's a smokestack sticking out of the small one that kind of looks like the exhaust stack on a semi-truck/tractor trailer. If you try to run forward towards the big one, it blocks you. So jump on top of it, and then jump across to the big one.",
    URL: 'https://ffxiv.consolegameswiki.com/wiki/Sightseeing_Log_35:_U%27Ghamaro_Mines',
  },
  36: {
    Key: 36,
    Name: "The Hermit's Hovel",
    ZoneId: EorzeaWeather.ZONE_OUTER_LA_NOSCEA,
    ZoneName: 'Outer La Noscea',
    Coordinates: {
      X: 15,
      Y: 9,
    },
    Weather: ['Rain'],
    Window: {
      StartTime: 18,
      EndTime: 5,
    },
    Emote: 'Sit',
    Comment:
      'Inside the house jump on the table -> bookshelf -> area with bed and table. stand on the stool and then Sit.',
    URL: 'https://ffxiv.consolegameswiki.com/wiki/Sightseeing_Log_36:_The_Hermit%27s_Hovel',
  },
  37: {
    Key: 37,
    Name: 'The Carline Canopy',
    ZoneId: EorzeaWeather.ZONE_GRIDANIA,
    ZoneName: 'New Gridania',
    Coordinates: {
      X: 14,
      Y: 14,
    },
    Weather: ['Fair Skies', 'Clear Skies'],
    Window: {
      StartTime: 8,
      EndTime: 12,
    },
    Emote: 'Lookout',
    Comment:
      'Blue Badger Gate on the left gate (facing the exit). Jump on railing from stairs. From there sprint jump to door. Then jump from door to door.',
    URL: 'https://ffxiv.consolegameswiki.com/wiki/Sightseeing_Log_37:_The_Carline_Canopy',
  },
  38: {
    Key: 38,
    Name: "The Lancer's Guild",
    ZoneId: EorzeaWeather.ZONE_GRIDANIA,
    ZoneName: 'Old Gridania',
    Coordinates: {
      X: 14.2,
      Y: 5.9,
    },
    Weather: ['Rain'],
    Window: {
      StartTime: 5,
      EndTime: 8,
    },
    Emote: 'Lookout',
    Comment:
      'Jump on bookshelf (x14.7,y5.9), then onto weapons displays along the south wall to make your way to the corner.',
    URL: 'https://ffxiv.consolegameswiki.com/wiki/Sightseeing_Log_38:_The_Lancer%27s_Guild',
  },
  39: {
    Key: 39,
    Name: 'The Bannock',
    ZoneId: EorzeaWeather.ZONE_CENTRAL_SHROUD,
    ZoneName: 'Central Shroud',
    Coordinates: {
      X: 23.4,
      Y: 19.9,
    },
    Weather: ['Rain'],
    Window: {
      StartTime: 5,
      EndTime: 8,
    },
    Emote: 'Lookout',
    Comment:
      "Jump onto the canvas above the commander's heads by first jumping up and along the tree. The vista is on top of the wooden arch.",
    URL: 'https://ffxiv.consolegameswiki.com/wiki/Sightseeing_Log_39:_The_Bannock',
  },
  40: {
    Key: 40,
    Name: 'Haukke Manor',
    ZoneId: EorzeaWeather.ZONE_CENTRAL_SHROUD,
    ZoneName: 'Central Shroud',
    Coordinates: {
      X: 13.6,
      Y: 23.1,
    },
    Weather: ['Fair Skies', 'Clear Skies'],
    Window: {
      StartTime: 18,
      EndTime: 5,
    },
    Emote: 'Lookout',
    Comment:
      'Climb onto the roots from left side just walk up. Hop onto top. Root are coming off of cliff into a small pond with a view of the mansion.',
    URL: 'https://ffxiv.consolegameswiki.com/wiki/Sightseeing_Log_40:_Haukke_Manor',
  },
  41: {
    Key: 41,
    Name: 'The Guardian Tree',
    ZoneId: EorzeaWeather.ZONE_CENTRAL_SHROUD,
    ZoneName: 'Central Shroud',
    Coordinates: {
      X: 16.3,
      Y: 22.3,
    },
    Weather: ['Fair Skies', 'Clear Skies'],
    Window: {
      StartTime: 12,
      EndTime: 17,
    },
    Emote: 'Lookout',
    Comment: 'On tree bridge.',
    URL: 'https://ffxiv.consolegameswiki.com/wiki/Sightseeing_Log_41:_The_Guardian_Tree',
  },
  42: {
    Key: 42,
    Name: 'Rainbow Bridge',
    ZoneId: EorzeaWeather.ZONE_CENTRAL_SHROUD,
    ZoneName: 'Central Shroud',
    Coordinates: {
      X: 26.5,
      Y: 18.8,
    },
    Weather: ['Fair Skies', 'Clear Skies'],
    Window: {
      StartTime: 11,
      EndTime: 13,
    },
    Emote: 'Lookout',
    Comment: 'On top and center of waterfall side of railing on bridge.',
    URL: 'https://ffxiv.consolegameswiki.com/wiki/Sightseeing_Log_42:_Rainbow_Bridge',
  },
  43: {
    Key: 43,
    Name: 'The Seedbed',
    ZoneId: EorzeaWeather.ZONE_EAST_SHROUD,
    ZoneName: 'East Shroud',
    Coordinates: {
      X: 20.9,
      Y: 10.7,
    },
    Weather: ['Thunder'],
    Window: {
      StartTime: 18,
      EndTime: 5,
    },
    Emote: 'Lookout',
    Comment: 'Right in front of giant glowing mushroom.',
    URL: 'https://ffxiv.consolegameswiki.com/wiki/Sightseeing_Log_43:_The_Seedbed',
  },
  44: {
    Key: 44,
    Name: "Buscarron's Druthers",
    ZoneId: EorzeaWeather.ZONE_SOUTH_SHROUD,
    ZoneName: 'South Shroud',
    Coordinates: {
      X: 17.8,
      Y: 20.1,
    },
    Weather: ['Thunderstorms'],
    Window: {
      StartTime: 8,
      EndTime: 12,
    },
    Emote: 'Lookout',
    Comment:
      'On balcony over main bar. Get there by jumping from wall on Eastern back corner of the bar, and onto the roof. Follow it back to the front of the building and sprint jump from roof corner to balcony.',
    URL: 'https://ffxiv.consolegameswiki.com/wiki/Sightseeing_Log_44:_Buscarron%27s_Druthers',
  },
  45: {
    Key: 45,
    Name: 'South Shroud Landing',
    ZoneId: EorzeaWeather.ZONE_SOUTH_SHROUD,
    ZoneName: 'South Shroud',
    Coordinates: {
      X: 14.7,
      Y: 33.9,
    },
    Weather: ['Fair Skies', 'Clear Skies'],
    Window: {
      StartTime: 8,
      EndTime: 12,
    },
    Emote: 'Lookout',
    Comment: 'On the windowsill beside the "hut".',
    URL: 'https://ffxiv.consolegameswiki.com/wiki/Sightseeing_Log_45:_South_Shroud_Landing',
  },
  46: {
    Key: 46,
    Name: "Urth's Gift",
    ZoneId: EorzeaWeather.ZONE_SOUTH_SHROUD,
    ZoneName: 'South Shroud',
    Coordinates: {
      X: 33.3,
      Y: 23.9,
    },
    Weather: ['Fog'],
    Window: {
      StartTime: 12,
      EndTime: 17,
    },
    Emote: 'Lookout',
    Comment: 'At the rock wall.',
    URL: 'https://ffxiv.consolegameswiki.com/wiki/Sightseeing_Log_46:_Urth%27s_Gift',
  },
  47: {
    Key: 47,
    Name: 'Quarrymill',
    ZoneId: EorzeaWeather.ZONE_SOUTH_SHROUD,
    ZoneName: 'South Shroud',
    Coordinates: {
      X: 25,
      Y: 21,
    },
    Weather: ['Fair Skies', 'Clear Skies'],
    Window: {
      StartTime: 5,
      EndTime: 8,
    },
    Emote: 'Lookout',
    Comment:
      'On top of chimney on house farthest from Aetheryte (shaped like a mushroom). Jump from balcony.',
    URL: 'https://ffxiv.consolegameswiki.com/wiki/Sightseeing_Log_47:_Quarrymill',
  },
  48: {
    Key: 48,
    Name: 'Ixali Logging Grounds',
    ZoneId: EorzeaWeather.ZONE_NORTH_SHROUD,
    ZoneName: 'North Shroud',
    Coordinates: {
      X: 18.4,
      Y: 19.5,
    },
    Weather: ['Fair Skies', 'Clear Skies'],
    Window: {
      StartTime: 12,
      EndTime: 17,
    },
    Emote: 'Lookout',
    Comment:
      'The middle post on the log-pile at the back of the area. Recommend using flying mount.',
    URL: 'https://ffxiv.consolegameswiki.com/wiki/Sightseeing_Log_48:_Ixali_Logging_Grounds',
  },
  49: {
    Key: 49,
    Name: 'Fallen Neurolink',
    ZoneId: EorzeaWeather.ZONE_NORTH_SHROUD,
    ZoneName: 'North Shroud',
    Coordinates: {
      X: 15.8,
      Y: 32.0,
    },
    Weather: ['Fair Skies', 'Clear Skies'],
    Window: {
      StartTime: 18,
      EndTime: 5,
    },
    Emote: 'Lookout',
    Comment: 'Near edge of cliff looking at giant arc.',
    URL: 'https://ffxiv.consolegameswiki.com/wiki/Sightseeing_Log_49:_Fallen_Neurolink',
  },
  50: {
    Key: 50,
    Name: 'Alder Springs',
    ZoneId: EorzeaWeather.ZONE_NORTH_SHROUD,
    ZoneName: 'North Shroud',
    Coordinates: {
      X: 15.4,
      Y: 27.2,
    },
    Weather: ['Clouds'],
    Window: {
      StartTime: 8,
      EndTime: 12,
    },
    Emote: 'Lookout',
    Comment:
      'Drop down from above. Start at stump of tree that broke off near edge of cliff and fall down directly below to another root/branch extending out. Take left fork twice. Go SLOW!',
    URL: 'https://ffxiv.consolegameswiki.com/wiki/Sightseeing_Log_50:_Alder_Springs',
  },
  51: {
    Key: 51,
    Name: 'Castrum Marinum',
    ZoneId: EorzeaWeather.ZONE_WESTERN_THANALAN,
    ZoneName: 'Western Thanalan',
    Coordinates: {
      X: 8.7,
      Y: 5.2,
    },
    Weather: ['Fair Skies', 'Clear Skies'],
    Window: {
      StartTime: 17,
      EndTime: 18,
    },
    Emote: 'Lookout',
    Comment: 'On the lamp.',
    URL: 'https://ffxiv.consolegameswiki.com/wiki/Sightseeing_Log_51:_Castrum_Marinum',
  },
  52: {
    Key: 52,
    Name: 'Vesper Bay',
    ZoneId: EorzeaWeather.ZONE_WESTERN_THANALAN,
    ZoneName: 'Western Thanalan',
    Coordinates: {
      X: 12.4,
      Y: 14.8,
    },
    Weather: ['Fair Skies', 'Clear Skies'],
    Window: {
      StartTime: 12,
      EndTime: 17,
    },
    Emote: 'Point',
    Comment: 'Top of the building, north west corner.',
    URL: 'https://ffxiv.consolegameswiki.com/wiki/Sightseeing_Log_52:_Vesper_Bay',
  },
  53: {
    Key: 53,
    Name: 'Black Brush Station',
    ZoneId: EorzeaWeather.ZONE_CENTRAL_THANALAN,
    ZoneName: 'Central Thanalan',
    Coordinates: {
      X: 21.4,
      Y: 17.5,
    },
    Weather: ['Dust Storms'],
    Window: {
      StartTime: 18,
      EndTime: 5,
    },
    Emote: 'Lookout',
    Comment:
      'Jump from the top of the building to the lamp post on the left hand side.',
    URL: 'https://ffxiv.consolegameswiki.com/wiki/Sightseeing_Log_53:_Black_Brush_Station',
  },
  54: {
    Key: 54,
    Name: 'Gate of Nald',
    ZoneId: EorzeaWeather.ZONE_CENTRAL_THANALAN,
    ZoneName: 'Central Thanalan',
    Coordinates: {
      X: 18.5,
      Y: 26.1,
    },
    Weather: ['Fair Skies', 'Clear Skies'],
    Window: {
      StartTime: 12,
      EndTime: 17,
    },
    Emote: 'Sit',
    Comment: 'On top of a canvas.',
    URL: 'https://ffxiv.consolegameswiki.com/wiki/Sightseeing_Log_54:_Gate_of_Nald',
  },
  55: {
    Key: 55,
    Name: 'The Burning Wall',
    ZoneId: EorzeaWeather.ZONE_EASTERN_THANALAN,
    ZoneName: 'Eastern Thanalan',
    Coordinates: {
      X: 30.7,
      Y: 26.5,
    },
    Weather: ['Fair Skies', 'Clear Skies'],
    Window: {
      StartTime: 12,
      EndTime: 17,
    },
    Emote: 'Lookout',
    Comment:
      'On top of the small crystal that looks like a cobra, drop down from the ledge just above at (x30.7,y26.7,z0.0). (You can also just land on this.)',
    URL: 'https://ffxiv.consolegameswiki.com/wiki/Sightseeing_Log_55:_The_Burning_Wall',
  },
  56: {
    Key: 56,
    Name: 'The Golden Bazaar',
    ZoneId: EorzeaWeather.ZONE_EASTERN_THANALAN,
    ZoneName: 'Eastern Thanalan',
    Coordinates: {
      X: 10.0,
      Y: 16.7,
    },
    Weather: ['Fair Skies', 'Clear Skies'],
    Window: {
      StartTime: 8,
      EndTime: 12,
    },
    Emote: 'Lookout',
    Comment:
      'On top of the entrance to a collapsed mine, jump to fence. Use fence to jump to higher platform. Vista on top of platform above 2 NPC at the front.',
    URL: 'https://ffxiv.consolegameswiki.com/wiki/Sightseeing_Log_56:_The_Golden_Bazaar',
  },
  57: {
    Key: 57,
    Name: "Thal's Respite",
    ZoneId: EorzeaWeather.ZONE_EASTERN_THANALAN,
    ZoneName: 'Eastern Thanalan',
    Coordinates: {
      X: 25,
      Y: 14,
    },
    Weather: ['Showers'],
    Window: {
      StartTime: 18,
      EndTime: 5,
    },
    Emote: 'Pray',
    Comment: 'In front of the statue.',
    URL: 'https://ffxiv.consolegameswiki.com/wiki/Sightseeing_Log_57:_Thal%27s_Respite',
  },
  58: {
    Key: 58,
    Name: "Nald's Reflection",
    ZoneId: EorzeaWeather.ZONE_SOUTHERN_THANALAN,
    ZoneName: 'Southern Thanalan',
    Coordinates: {
      X: 12,
      Y: 22,
    },
    Weather: ['Fog'],
    Window: {
      StartTime: 5,
      EndTime: 8,
    },
    Emote: 'Pray',
    Comment: 'In front of the statue.',
    URL: 'https://ffxiv.consolegameswiki.com/wiki/Sightseeing_Log_58:_Nald%27s_Reflection',
  },
  59: {
    Key: 59,
    Name: "Zahar'ak",
    ZoneId: EorzeaWeather.ZONE_SOUTHERN_THANALAN,
    ZoneName: 'Southern Thanalan',
    Coordinates: {
      X: 19.3,
      Y: 20.5,
    },
    Weather: ['Fair Skies', 'Clear Skies'],
    Window: {
      StartTime: 5,
      EndTime: 8,
    },
    Emote: 'Lookout',
    Comment: 'On top of the stone column. Jump with mount.',
    URL: 'https://ffxiv.consolegameswiki.com/wiki/Sightseeing_Log_59:_Zahar%27ak',
  },
  60: {
    Key: 60,
    Name: 'The Sagolii Desert',
    ZoneId: EorzeaWeather.ZONE_SOUTHERN_THANALAN,
    ZoneName: 'Southern Thanalan',
    Coordinates: {
      X: 21.3,
      Y: 38.6,
    },
    Weather: ['Heat Waves'],
    Window: {
      StartTime: 12,
      EndTime: 17,
    },
    Emote: 'Lookout',
    Comment: 'On top of large mound next to tower ruin on ground.',
    URL: 'https://ffxiv.consolegameswiki.com/wiki/Sightseeing_Log_60:_The_Sagolii_Desert',
  },
  61: {
    Key: 61,
    Name: 'The Sunken Temple of Qarn',
    ZoneId: EorzeaWeather.ZONE_SOUTHERN_THANALAN,
    ZoneName: 'Southern Thanalan',
    Coordinates: {
      X: 23.8,
      Y: 11.8,
    },
    Weather: ['Fair Skies', 'Clear Skies'],
    Window: {
      StartTime: 12,
      EndTime: 17,
    },
    Emote: 'Lookout',
    Comment: 'Use rocks to jump up on to the sloped building.',
    URL: 'https://ffxiv.consolegameswiki.com/wiki/Sightseeing_Log_61:_The_Sunken_Temple_of_Qarn',
  },
  62: {
    Key: 62,
    Name: 'Minotaur Malm',
    ZoneId: EorzeaWeather.ZONE_SOUTHERN_THANALAN,
    ZoneName: 'Southern Thanalan',
    Coordinates: {
      X: 14.6,
      Y: 26.5,
    },
    Weather: ['Heat Waves'],
    Window: {
      StartTime: 5,
      EndTime: 8,
    },
    Emote: 'Psych',
    Comment: 'Stand beside the drill sergeant near the exercising recruits.',
    URL: 'https://ffxiv.consolegameswiki.com/wiki/Sightseeing_Log_62:_Minotaur_Malm',
  },
  63: {
    Key: 63,
    Name: 'East Watchtower',
    ZoneId: EorzeaWeather.ZONE_NORTHERN_THANALAN,
    ZoneName: 'Northern Thanalan',
    Coordinates: {
      X: 22.2,
      Y: 25.7,
    },
    Weather: ['Fair Skies', 'Clear Skies'],
    Window: {
      StartTime: 5,
      EndTime: 8,
    },
    Emote: 'Salute',
    Comment: 'Salute on top of the tower, on the flagpole.',
    URL: 'https://ffxiv.consolegameswiki.com/wiki/Sightseeing_Log_63:_East_Watchtower',
  },
  64: {
    Key: 64,
    Name: 'Ceruleum Pipeline',
    ZoneId: EorzeaWeather.ZONE_NORTHERN_THANALAN,
    ZoneName: 'Northern Thanalan',
    Coordinates: {
      X: 20.6,
      Y: 29.5,
      Z: 0.5,
    },
    Weather: ['Fair Skies', 'Clear Skies'],
    Window: {
      StartTime: 18,
      EndTime: 5,
    },
    Emote: 'Lookout',
    Comment: 'On top of the gate, north side.',
    URL: 'https://ffxiv.consolegameswiki.com/wiki/Sightseeing_Log_64:_Ceruleum_Pipeline',
  },
  65: {
    Key: 65,
    Name: 'Bluefog',
    ZoneId: EorzeaWeather.ZONE_NORTHERN_THANALAN,
    ZoneName: 'Northern Thanalan',
    Coordinates: {
      X: 20.8,
      Y: 22.5,
    },
    Weather: ['Fair Skies', 'Clear Skies'],
    Window: {
      StartTime: 12,
      EndTime: 17,
    },
    Emote: 'Lookout',
    Comment: 'On the fence.',
    URL: 'https://ffxiv.consolegameswiki.com/wiki/Sightseeing_Log_65:_Bluefog',
  },
  66: {
    Key: 66,
    Name: "Raubahn's Push",
    ZoneId: EorzeaWeather.ZONE_NORTHERN_THANALAN,
    ZoneName: 'Northern Thanalan',
    Coordinates: {
      X: 20.0,
      Y: 17.7,
    },
    Weather: ['Clouds'],
    Window: {
      StartTime: 8,
      EndTime: 12,
    },
    Emote: 'Lookout',
    Comment: 'On one of the southwestern spires.',
    URL: 'https://ffxiv.consolegameswiki.com/wiki/Sightseeing_Log_66:_Raubahn%27s_Push',
  },
  67: {
    Key: 67,
    Name: 'Abandoned Amajina Mythril Mine',
    ZoneId: EorzeaWeather.ZONE_NORTHERN_THANALAN,
    ZoneName: 'Northern Thanalan',
    Coordinates: {
      X: 26.4,
      Y: 22.7,
    },
    Weather: ['Fog'],
    Window: {
      StartTime: 18,
      EndTime: 5,
    },
    Emote: 'Lookout',
    Comment:
      'On a little ledge attached to a broken pillar near stairs. Go up the stairs at (25.7, 22.7). Jump from the railing to the crumbling stone beam, then walk across the metal beams and make another jump to the broken arch on your right. Finally, Sprint-jump across the gap to the other side.',
    URL: 'https://ffxiv.consolegameswiki.com/wiki/Sightseeing_Log_67:_Abandoned_Amajina_Mythril_Mine',
  },
  68: {
    Key: 68,
    Name: 'The Nail',
    ZoneId: EorzeaWeather.ZONE_COERTHAS_CENTRAL_HIGHLANDS,
    ZoneName: 'Coerthas Central Highlands',
    Coordinates: {
      X: 25.4,
      Y: 29.8,
    },
    Weather: ['Fair Skies', 'Clear Skies'],
    Window: {
      StartTime: 17,
      EndTime: 18,
    },
    Emote: 'Lookout',
    Comment:
      'Top of the Observatorium on the ladder under the telescope. Jump onto the lamp closest to the ladder and then onto the ladder itself.',
    URL: 'https://ffxiv.consolegameswiki.com/wiki/Sightseeing_Log_68:_The_Nail',
  },
  69: {
    Key: 69,
    Name: 'The Observatorium',
    ZoneId: EorzeaWeather.ZONE_COERTHAS_CENTRAL_HIGHLANDS,
    ZoneName: 'Coerthas Central Highlands',
    Coordinates: {
      X: 25,
      Y: 29,
    },
    Weather: ['Fog'],
    Window: {
      StartTime: 18,
      EndTime: 5,
    },
    Emote: 'Lookout',
    Comment:
      'Take a couple of steps down from the first floor and walk/fall off into the center of the tower, landing on the highest chandelier.',
    URL: 'https://ffxiv.consolegameswiki.com/wiki/Sightseeing_Log_69:_The_Observatorium',
  },
  70: {
    Key: 70,
    Name: 'The Frozen Fang',
    ZoneId: EorzeaWeather.ZONE_COERTHAS_CENTRAL_HIGHLANDS,
    ZoneName: 'Coerthas Central Highlands',
    Coordinates: {
      X: 11.7,
      Y: 15.8,
    },
    Weather: ['Blizzards'],
    Window: {
      StartTime: 8,
      EndTime: 12,
    },
    Emote: 'Lookout',
    Comment:
      "From the base of the stairs at (11.0,15.5) walk along the small ledge that sticks out until you're at the middle of the semi-circle part of the bridge.",
    URL: 'https://ffxiv.consolegameswiki.com/wiki/Sightseeing_Log_70:_The_Frozen_Fang',
  },
  71: {
    Key: 71,
    Name: 'The Holy See of Ishgard',
    ZoneId: EorzeaWeather.ZONE_COERTHAS_CENTRAL_HIGHLANDS,
    ZoneName: 'Coerthas Central Highlands',
    Coordinates: {
      X: 12.8,
      Y: 17.3,
      Z: 1.4,
    },
    Weather: ['Fair Skies', 'Clear Skies'],
    Window: {
      StartTime: 5,
      EndTime: 8,
    },
    Emote: 'Lookout',
    Comment:
      'Top of the tower on the over-arch. After climbing the stone spiral staircase, enter the small room and use the wooden stairs to get all the way up.',
    URL: 'https://ffxiv.consolegameswiki.com/wiki/Sightseeing_Log_71:_The_Holy_See_of_Ishgard',
  },
  72: {
    Key: 72,
    Name: 'Boulder Downs',
    ZoneId: EorzeaWeather.ZONE_COERTHAS_CENTRAL_HIGHLANDS,
    ZoneName: 'Coerthas Central Highlands',
    Coordinates: {
      X: 7.8,
      Y: 28.9,
      Z: 1.8,
    },
    Weather: ['Fair Skies', 'Clear Skies'],
    Window: {
      StartTime: 17,
      EndTime: 18,
    },
    Emote: 'Lookout',
    Comment:
      'Top of monument tower next to the NPC standing next to the top of the stairs.',
    URL: 'https://ffxiv.consolegameswiki.com/wiki/Sightseeing_Log_72:_Boulder_Downs',
  },
  73: {
    Key: 73,
    Name: "The Fury's Gaze",
    ZoneId: EorzeaWeather.ZONE_COERTHAS_CENTRAL_HIGHLANDS,
    ZoneName: 'Coerthas Central Highlands',
    Coordinates: {
      X: 7.9,
      Y: 31.3,
    },
    Weather: ['Blizzards'],
    Window: {
      StartTime: 18,
      EndTime: 5,
    },
    Emote: 'Lookout',
    Comment: 'Inside the cave before you reach the plasmoids.',
    URL: 'https://ffxiv.consolegameswiki.com/wiki/Sightseeing_Log_73:_The_Fury%27s_Gaze',
  },
  74: {
    Key: 74,
    Name: 'Snowcloak',
    ZoneId: EorzeaWeather.ZONE_COERTHAS_CENTRAL_HIGHLANDS,
    ZoneName: 'Coerthas Central Highlands',
    Coordinates: {
      X: 2.2,
      Y: 21.4,
    },
    Weather: ['Fair Skies', 'Clear Skies'],
    Window: {
      StartTime: 8,
      EndTime: 12,
    },
    Emote: 'Lookout',
    Comment: 'Climb up to the highest ledge.',
    URL: 'https://ffxiv.consolegameswiki.com/wiki/Sightseeing_Log_74:_Snowcloak',
  },
  75: {
    Key: 75,
    Name: 'Camp Dragonhead',
    ZoneId: EorzeaWeather.ZONE_COERTHAS_CENTRAL_HIGHLANDS,
    ZoneName: 'Coerthas Central Highlands',
    Coordinates: {
      X: 26.5,
      Y: 17.7,
    },
    Weather: ['Fair Skies', 'Clear Skies'],
    Window: {
      StartTime: 12,
      EndTime: 17,
    },
    Emote: 'Lookout',
    Comment:
      "Climb up to the eastern battlements and head south to draw parallel to the green-roofed building. Jump up onto a higher crenelation that's in line with a buttress opposite and sprint one step and jump over to the building.",
    URL: 'https://ffxiv.consolegameswiki.com/wiki/Sightseeing_Log_75:_Camp_Dragonhead',
  },
  76: {
    Key: 76,
    Name: 'The Steel Vigil',
    ZoneId: EorzeaWeather.ZONE_COERTHAS_CENTRAL_HIGHLANDS,
    ZoneName: 'Coerthas Central Highlands',
    Coordinates: {
      X: 28.2,
      Y: 10.3,
    },
    Weather: ['Fair Skies', 'Clear Skies'],
    Window: {
      StartTime: 5,
      EndTime: 8,
    },
    Emote: 'Lookout',
    Comment:
      'On the broken arch of the ruins. Start climbing from the most South Eastern edge of the broken wall. The vista is just on the other side of the steeple.',
    URL: 'https://ffxiv.consolegameswiki.com/wiki/Sightseeing_Log_76:_The_Steel_Vigil',
  },
  77: {
    Key: 77,
    Name: 'Castrum Centri',
    ZoneId: EorzeaWeather.ZONE_MOR_DHONA,
    ZoneName: 'Mor Dhona',
    Coordinates: {
      X: 9.8,
      Y: 13.5,
    },
    Weather: ['Gloom'],
    Window: {
      StartTime: 12,
      EndTime: 17,
    },
    Emote: 'Lookout',
    Comment:
      'On top of red light just past four cylinders. Jump up onto the smaller ledge and then onto the ledge leading towards the light.',
    URL: 'https://ffxiv.consolegameswiki.com/wiki/Sightseeing_Log_77:_Castrum_Centri',
  },
  78: {
    Key: 78,
    Name: 'The Crystal Tower',
    ZoneId: EorzeaWeather.ZONE_MOR_DHONA,
    ZoneName: 'Mor Dhona',
    Coordinates: {
      X: 27.4,
      Y: 8.0,
      Z: 0.6,
    },
    Weather: ['Fair Skies', 'Clear Skies'],
    Window: {
      StartTime: 18,
      EndTime: 5,
    },
    Emote: 'Lookout',
    Comment:
      'Follow path that curves to the left to go to the upper level. Vista is near a tree by the edge.',
    URL: 'https://ffxiv.consolegameswiki.com/wiki/Sightseeing_Log_78:_The_Crystal_Tower',
  },
  79: {
    Key: 79,
    Name: 'Rathefrost',
    ZoneId: EorzeaWeather.ZONE_MOR_DHONA,
    ZoneName: 'Mor Dhona',
    Coordinates: {
      X: 18.6,
      Y: 17.7,
    },
    Weather: ['Fair Skies', 'Clear Skies'],
    Window: {
      StartTime: 12,
      EndTime: 17,
    },
    Emote: 'Lookout',
    Comment: 'On top of rock near crystal tree.',
    URL: 'https://ffxiv.consolegameswiki.com/wiki/Sightseeing_Log_79:_Rathefrost',
  },
  80: {
    Key: 80,
    Name: 'The Keeper of the Lake',
    ZoneId: EorzeaWeather.ZONE_MOR_DHONA,
    ZoneName: 'Mor Dhona',
    Coordinates: {
      X: 26.1,
      Y: 11.2,
    },
    Weather: ['Fair Skies', 'Clear Skies'],
    Window: {
      StartTime: 17,
      EndTime: 18,
    },
    Emote: 'Sit',
    Comment:
      "Sit on top of tree. Climb the back of the red metallic wreckage near a smaller red cylinder. Walk up and jump on small metal rib. From there jump onto back of Big broken red metallic hull. It's also possible, with maximum mount speed, to jump from the branch of the next-closest tree.",
    URL: 'https://ffxiv.consolegameswiki.com/wiki/Sightseeing_Log_80:_The_Keeper_of_the_Lake',
  },
};
