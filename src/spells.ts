const cantrips = [
    {
      "name": "Acid Splash",
      "link": "http://dnd5e.wikidot.com/spell:acid-splash",
      "school": "Conjuration",
      "castingTime": "1 Action",
      "range": "60 Feet",
      "duration": "Instantaneous",
      "components": "V, S"
    },
    {
      "name": "Blade Ward",
      "link": "http://dnd5e.wikidot.com/spell:blade-ward",
      "school": "Abjuration",
      "castingTime": "1 Action",
      "range": "Self",
      "duration": "1 round",
      "components": "V, S"
    },
    {
      "name": "Booming Blade",
      "link": "http://dnd5e.wikidot.com/spell:booming-blade",
      "school": "Evocation",
      "castingTime": "1 Action",
      "range": "Self (5-foot radius)",
      "duration": "1 round",
      "components": "S, M"
    },
    {
      "name": "Chill Touch",
      "link": "http://dnd5e.wikidot.com/spell:chill-touch",
      "school": "Necromancy",
      "castingTime": "1 Action",
      "range": "120 feet",
      "duration": "1 round",
      "components": "V, S"
    },
    {
      "name": "Control Flames",
      "link": "http://dnd5e.wikidot.com/spell:control-flames",
      "school": "Transmutation",
      "castingTime": "1 Action",
      "range": "60 Feet",
      "duration": "Instantaneous or 1 hour",
      "components": "S"
    },
    {
      "name": "Create Bonfire",
      "link": "http://dnd5e.wikidot.com/spell:create-bonfire",
      "school": "Conjuration",
      "castingTime": "1 Action",
      "range": "60 Feet",
      "duration": "Concentration, up to 1 minute",
      "components": "V, S"
    },
    {
      "name": "Dancing Lights",
      "link": "http://dnd5e.wikidot.com/spell:dancing-lights",
      "school": "Evocation",
      "castingTime": "1 Action",
      "range": "120 feet",
      "duration": "Concentration up to 1 minute",
      "components": "V, S, M"
    },
    {
      "name": "Decompose (HB)",
      "link": "http://dnd5e.wikidot.com/spell:decompose",
      "school": "Necromancy",
      "castingTime": "1 Action",
      "range": "Touch",
      "duration": "1 minute",
      "components": "V, S"
    },
    {
      "name": "Druidcraft",
      "link": "http://dnd5e.wikidot.com/spell:druidcraft",
      "school": "Transmutation",
      "castingTime": "1 Action",
      "range": "30 Feet",
      "duration": "Instantaneous",
      "components": "V, S"
    },
    {
      "name": "Eldritch Blast",
      "link": "http://dnd5e.wikidot.com/spell:eldritch-blast",
      "school": "Evocation",
      "castingTime": "1 Action",
      "range": "120 Feet",
      "duration": "Instantaneous",
      "components": "V, S"
    },
    {
      "name": "Encode Thoughts",
      "link": "http://dnd5e.wikidot.com/spell:encode-thoughts",
      "school": "Enchantment",
      "castingTime": "1 Action",
      "range": "Self",
      "duration": "8 hours",
      "components": "S"
    },
    {
      "name": "Fire Bolt",
      "link": "http://dnd5e.wikidot.com/spell:fire-bolt",
      "school": "Evocation",
      "castingTime": "1 Action",
      "range": "120 feet",
      "duration": "Instantaneous",
      "components": "V, S"
    },
    {
      "name": "Friends",
      "link": "http://dnd5e.wikidot.com/spell:friends",
      "school": "Enchantment",
      "castingTime": "1 Action",
      "range": "Self",
      "duration": "Concentration, up to 1 minute",
      "components": "S, M"
    },
    {
      "name": "Frostbite",
      "link": "http://dnd5e.wikidot.com/spell:frostbite",
      "school": "Evocation",
      "castingTime": "1 Action",
      "range": "60 feet",
      "duration": "Instantaneous",
      "components": "V, S"
    },
    {
      "name": "Green-Flame Blade",
      "link": "http://dnd5e.wikidot.com/spell:green-flame-blade",
      "school": "Evocation",
      "castingTime": "1 Action",
      "range": "Self (5-foot radius)",
      "duration": "Instantaneous",
      "components": "S, M"
    },
    {
      "name": "Guidance",
      "link": "http://dnd5e.wikidot.com/spell:guidance",
      "school": "Divination",
      "castingTime": "1 Action",
      "range": "Touch",
      "duration": "Concentration up to 1 minute",
      "components": "V, S"
    },
    {
      "name": "Gust",
      "link": "http://dnd5e.wikidot.com/spell:gust",
      "school": "Transmutation",
      "castingTime": "1 Action",
      "range": "30 feet",
      "duration": "Instantaneous",
      "components": "V, S"
    },
    {
      "name": "Hand of Radiance (UA)",
      "link": "http://dnd5e.wikidot.com/spell:hand-of-radiance",
      "school": "Evocation",
      "castingTime": "1 Action",
      "range": "5 feet",
      "duration": "Instantaneous",
      "components": "V, S"
    },
    {
      "name": "Infestation",
      "link": "http://dnd5e.wikidot.com/spell:infestation",
      "school": "Conjuration",
      "castingTime": "1 Action",
      "range": "30 feet",
      "duration": "Instantaneous",
      "components": "V, S, M"
    },
    {
      "name": "Light",
      "link": "http://dnd5e.wikidot.com/spell:light",
      "school": "Evocation",
      "castingTime": "1 Action",
      "range": "Touch",
      "duration": "1 hour",
      "components": "V, M"
    },
    {
      "name": "Lightning Lure",
      "link": "http://dnd5e.wikidot.com/spell:lightning-lure",
      "school": "Evocation",
      "castingTime": "1 Action",
      "range": "Self (15-foot radius)",
      "duration": "Instantaneous",
      "components": "V"
    },
    {
      "name": "Mage Hand",
      "link": "http://dnd5e.wikidot.com/spell:mage-hand",
      "school": "Conjuration",
      "castingTime": "1 Action",
      "range": "30 feet",
      "duration": "1 minute",
      "components": "V, S"
    },
    {
      "name": "Magic Stone",
      "link": "http://dnd5e.wikidot.com/spell:magic-stone",
      "school": "Transmutation",
      "castingTime": "1 Bonus Action",
      "range": "Touch",
      "duration": "1 minute",
      "components": "V, S"
    },
    {
      "name": "Mending",
      "link": "http://dnd5e.wikidot.com/spell:mending",
      "school": "Transmutation",
      "castingTime": "1 Minute",
      "range": "Touch",
      "duration": "Instantaneous",
      "components": "V, S, M"
    },
    {
      "name": "Message",
      "link": "http://dnd5e.wikidot.com/spell:message",
      "school": "Transmutation",
      "castingTime": "1 Action",
      "range": "120 feet",
      "duration": "1 round",
      "components": "V, S, M"
    },
    {
      "name": "Mind Sliver",
      "link": "http://dnd5e.wikidot.com/spell:mind-sliver",
      "school": "Enchantment",
      "castingTime": "1 Action",
      "range": "60 feet",
      "duration": "1 round",
      "components": "V"
    },
    {
      "name": "Minor Illusion",
      "link": "http://dnd5e.wikidot.com/spell:minor-illusion",
      "school": "Illusion",
      "castingTime": "1 Action",
      "range": "30 feet",
      "duration": "1 minute",
      "components": "S, M"
    },
    {
      "name": "Mold Earth",
      "link": "http://dnd5e.wikidot.com/spell:mold-earth",
      "school": "Transmutation",
      "castingTime": "1 Action",
      "range": "30 feet",
      "duration": "Instantaneous or 1 hour",
      "components": "S"
    },
    {
      "name": "On/Off (UA)",
      "link": "http://dnd5e.wikidot.com/spell:on-off",
      "school": "Transmutation T",
      "castingTime": "1 Action",
      "range": "60 feet",
      "duration": "Instantaneous",
      "components": "V, S"
    },
    {
      "name": "Poison Spray",
      "link": "http://dnd5e.wikidot.com/spell:poison-spray",
      "school": "Conjuration",
      "castingTime": "1 Action",
      "range": "10 feet",
      "duration": "Instantaneous",
      "components": "V, S"
    },
    {
      "name": "Prestidigitation",
      "link": "http://dnd5e.wikidot.com/spell:prestidigitation",
      "school": "Transmutation",
      "castingTime": "1 Action",
      "range": "10 feet",
      "duration": "Up to 1 hour",
      "components": "V, S"
    },
    {
      "name": "Primal Savagery",
      "link": "http://dnd5e.wikidot.com/spell:primal-savagery",
      "school": "Transmutation",
      "castingTime": "1 Action",
      "range": "Self",
      "duration": "Self",
      "components": "S"
    },
    {
      "name": "Produce Flame",
      "link": "http://dnd5e.wikidot.com/spell:produce-flame",
      "school": "Conjuration",
      "castingTime": "1 Action",
      "range": "Self",
      "duration": "10 minutes",
      "components": "V, S"
    },
    {
      "name": "Ray of Frost",
      "link": "http://dnd5e.wikidot.com/spell:ray-of-frost",
      "school": "Evocation",
      "castingTime": "1 Action",
      "range": "60 feet",
      "duration": "Instantaneous",
      "components": "V, S"
    },
    {
      "name": "Resistance",
      "link": "http://dnd5e.wikidot.com/spell:resistance",
      "school": "Abjuration",
      "castingTime": "1 Action",
      "range": "Touch",
      "duration": "Concentration up to 1 minute",
      "components": "V, S, M"
    },
    {
      "name": "Sacred Flame",
      "link": "http://dnd5e.wikidot.com/spell:sacred-flame",
      "school": "Evocation",
      "castingTime": "1 Action",
      "range": "60 feet",
      "duration": "Instantaneous",
      "components": "V, S"
    },
    {
      "name": "Sapping Sting",
      "link": "http://dnd5e.wikidot.com/spell:sapping-sting",
      "school": "Necromancy D",
      "castingTime": "1 Action",
      "range": "30 feet",
      "duration": "Instantaneous",
      "components": "V, S"
    },
    {
      "name": "Shape Water",
      "link": "http://dnd5e.wikidot.com/spell:shape-water",
      "school": "Transmutation",
      "castingTime": "1 Action",
      "range": "30 feet",
      "duration": "Instantaneous or 1 hour",
      "components": "S"
    },
    {
      "name": "Shillelagh",
      "link": "http://dnd5e.wikidot.com/spell:shillelagh",
      "school": "Transmutation",
      "castingTime": "1 Bonus Action",
      "range": "Touch",
      "duration": "1 minute",
      "components": "V, S, M"
    },
    {
      "name": "Shocking Grasp",
      "link": "http://dnd5e.wikidot.com/spell:shocking-grasp",
      "school": "Evocation",
      "castingTime": "1 Action",
      "range": "Touch",
      "duration": "Instantaneous",
      "components": "V, S"
    },
    {
      "name": "Spare the Dying",
      "link": "http://dnd5e.wikidot.com/spell:spare-the-dying",
      "school": "Necromancy",
      "castingTime": "1 Action",
      "range": "Touch",
      "duration": "Instantaneous",
      "components": "V, S"
    },
    {
      "name": "Sword Burst",
      "link": "http://dnd5e.wikidot.com/spell:sword-burst",
      "school": "Conjuration",
      "castingTime": "1 Action",
      "range": "Self (5-foot radius)",
      "duration": "Instantaneous",
      "components": "V"
    },
    {
      "name": "Thaumaturgy",
      "link": "http://dnd5e.wikidot.com/spell:thaumaturgy",
      "school": "Transmutation",
      "castingTime": "1 Action",
      "range": "30 feet",
      "duration": "Up to 1 minute",
      "components": "V"
    },
    {
      "name": "Thorn Whip",
      "link": "http://dnd5e.wikidot.com/spell:thorn-whip",
      "school": "Transmutation",
      "castingTime": "1 Action",
      "range": "30 feet",
      "duration": "Instantaneous",
      "components": "V, S, M"
    },
    {
      "name": "Thunderclap",
      "link": "http://dnd5e.wikidot.com/spell:thunderclap",
      "school": "Evocation",
      "castingTime": "1 Action",
      "range": "Self (5-foot radius)",
      "duration": "Instantaneous",
      "components": "S"
    },
    {
      "name": "Toll the Dead",
      "link": "http://dnd5e.wikidot.com/spell:toll-the-dead",
      "school": "Necromancy",
      "castingTime": "1 Action",
      "range": "60 feet",
      "duration": "Instantaneous",
      "components": "V, S"
    },
    {
      "name": "True Strike",
      "link": "http://dnd5e.wikidot.com/spell:true-strike",
      "school": "Divination",
      "castingTime": "1 Action",
      "range": "30 feet",
      "duration": "Concentration up to 1 round",
      "components": "S"
    },
    {
      "name": "Vicious Mockery",
      "link": "http://dnd5e.wikidot.com/spell:vicious-mockery",
      "school": "Enchantment",
      "castingTime": "1 Action",
      "range": "60 feet",
      "duration": "Instantaneous",
      "components": "V"
    },
    {
      "name": "Virtue (UA)",
      "link": "http://dnd5e.wikidot.com/spell:virtue",
      "school": "Abjuration",
      "castingTime": "1 Action",
      "range": "Touch",
      "duration": "1 round",
      "components": "V, S"
    },
    {
      "name": "Word of Radiance",
      "link": "http://dnd5e.wikidot.com/spell:word-of-radiance",
      "school": "Evocation",
      "castingTime": "1 Action",
      "range": "5 feet",
      "duration": "Instantaneous",
      "components": "V, M"
    },
];
const levelOne = [
    {
      "name": "Absorb Elements",
      "link": "http://dnd5e.wikidot.com/spell:absorb-elements",
      "school": "Abjuration",
      "castingTime": "1 Reaction",
      "range": "Self",
      "duration": "1 round",
      "components": "S"
    },
    {
      "name": "Acid Stream (UA)",
      "link": "http://dnd5e.wikidot.com/spell:acid-stream",
      "school": "Evocation",
      "castingTime": "1 Action",
      "range": "Self (30-foot line)",
      "duration": "Concentration, up to 1 minute",
      "components": "V, S, M"
    },
    {
      "name": "Alarm",
      "link": "http://dnd5e.wikidot.com/spell:alarm",
      "school": "Abjuration",
      "castingTime": "1 Minute R",
      "range": "30 feet",
      "duration": "8 Hours",
      "components": "V, S, M"
    },
    {
      "name": "Animal Friendship",
      "link": "http://dnd5e.wikidot.com/spell:animal-friendship",
      "school": "Enchantment",
      "castingTime": "1 Action",
      "range": "30 feet",
      "duration": "24 hours",
      "components": "V, S, M"
    },
    {
      "name": "Arcane Weapon (UA)",
      "link": "http://dnd5e.wikidot.com/spell:arcane-weapon",
      "school": "Transmutation",
      "castingTime": "1 Bonus Action",
      "range": "Self",
      "duration": "Concentration, up to 1 hour",
      "components": "V, S"
    },
    {
      "name": "Armor of Agathys",
      "link": "http://dnd5e.wikidot.com/spell:armor-of-agathys",
      "school": "Abjuration",
      "castingTime": "1 Action",
      "range": "Self",
      "duration": "1 hour",
      "components": "V, S, M"
    },
    {
      "name": "Arms of Hadar",
      "link": "http://dnd5e.wikidot.com/spell:arms-of-hadar",
      "school": "Conjuration",
      "castingTime": "1 Action",
      "range": "Self (10-foot radius)",
      "duration": "Instantaneous",
      "components": "V, S"
    },
    {
      "name": "Bane",
      "link": "http://dnd5e.wikidot.com/spell:bane",
      "school": "Enchantment",
      "castingTime": "1 Action",
      "range": "30 feet",
      "duration": "Concentration, up to 1 minute",
      "components": "V, S, M"
    },
    {
      "name": "Beast Bond",
      "link": "http://dnd5e.wikidot.com/spell:beast-bond",
      "school": "Divination",
      "castingTime": "1 Action",
      "range": "Touch",
      "duration": "Concentration, up to 1 minute",
      "components": "V, S, M"
    },
    {
      "name": "Bless",
      "link": "http://dnd5e.wikidot.com/spell:bless",
      "school": "Enchantment",
      "castingTime": "1 Action",
      "range": "30 feet",
      "duration": "Concentration, up to 1 minute",
      "components": "V, S, M"
    },
    {
      "name": "Burning Hands",
      "link": "http://dnd5e.wikidot.com/spell:burning-hands",
      "school": "Evocation",
      "castingTime": "1 Action",
      "range": "Self (15-foot cone)",
      "duration": "Instantaneous",
      "components": "V, S"
    },
    {
      "name": "Catapult",
      "link": "http://dnd5e.wikidot.com/spell:catapult",
      "school": "Transmutation",
      "castingTime": "1 Action",
      "range": "60 feet",
      "duration": "Instantaneous",
      "components": "S"
    },
    {
      "name": "Cause Fear",
      "link": "http://dnd5e.wikidot.com/spell:cause-fear",
      "school": "Necromancy",
      "castingTime": "1 Action",
      "range": "60 feet",
      "duration": "Concentration, up to 1 minute",
      "components": "V, S"
    },
    {
      "name": "Ceremony",
      "link": "http://dnd5e.wikidot.com/spell:ceremony",
      "school": "Evocation",
      "castingTime": "1 Action R",
      "range": "Touch",
      "duration": "Instantaneous",
      "components": "V, S, M"
    },
    {
      "name": "Chaos Bolt",
      "link": "http://dnd5e.wikidot.com/spell:chaos-bolt",
      "school": "Evocation",
      "castingTime": "1 Action",
      "range": "120 feet",
      "duration": "Instantaneous",
      "components": "V, S"
    },
    {
      "name": "Charm Person",
      "link": "http://dnd5e.wikidot.com/spell:charm-person",
      "school": "Enchantment",
      "castingTime": "1 Action",
      "range": "30 feet",
      "duration": "1 hour",
      "components": "V, S"
    },
    {
      "name": "Chromatic Orb",
      "link": "http://dnd5e.wikidot.com/spell:chromatic-orb",
      "school": "Evocation",
      "castingTime": "1 Action",
      "range": "90 feet",
      "duration": "Instantaneous",
      "components": "V, S, M"
    },
    {
      "name": "Color Spray",
      "link": "http://dnd5e.wikidot.com/spell:color-spray",
      "school": "Illusion",
      "castingTime": "1 Action",
      "range": "Self (15-foot cone)",
      "duration": "1 round",
      "components": "V, S, M"
    },
    {
      "name": "Command",
      "link": "http://dnd5e.wikidot.com/spell:command",
      "school": "Enchantment",
      "castingTime": "1 Action",
      "range": "60 feet",
      "duration": "1 round",
      "components": "V"
    },
    {
      "name": "Compelled Duel",
      "link": "http://dnd5e.wikidot.com/spell:compelled-duel",
      "school": "Enchantment",
      "castingTime": "1 Bonus Action",
      "range": "30 feet",
      "duration": "Concentration, up to 1 minute",
      "components": "V"
    },
    {
      "name": "Comprehend Languages",
      "link": "http://dnd5e.wikidot.com/spell:comprehend-languages",
      "school": "Divination",
      "castingTime": "1 Action R",
      "range": "Self",
      "duration": "1 hour",
      "components": "V, S, M"
    },
    {
      "name": "Create or Destroy Water",
      "link": "http://dnd5e.wikidot.com/spell:create-or-destroy-water",
      "school": "Transmutation",
      "castingTime": "1 Action",
      "range": "30 feet",
      "duration": "Instantaneous",
      "components": "V, S, M"
    },
    {
      "name": "Cure Wounds",
      "link": "http://dnd5e.wikidot.com/spell:cure-wounds",
      "school": "Evocation",
      "castingTime": "1 Action",
      "range": "Touch",
      "duration": "Instantaneous",
      "components": "V, S"
    },
    {
      "name": "Detect Evil and Good",
      "link": "http://dnd5e.wikidot.com/spell:detect-evil-and-good",
      "school": "Divination",
      "castingTime": "1 Action",
      "range": "Self",
      "duration": "Concentration, up to 10 minutes",
      "components": "V, S"
    },
    {
      "name": "Detect Magic",
      "link": "http://dnd5e.wikidot.com/spell:detect-magic",
      "school": "Divination",
      "castingTime": "1 Action R",
      "range": "Self",
      "duration": "Concentration, up to 10 minutes",
      "components": "V, S"
    },
    {
      "name": "Detect Poison and Disease",
      "link": "http://dnd5e.wikidot.com/spell:detect-poison-and-disease",
      "school": "Divination",
      "castingTime": "1 Action R",
      "range": "Self",
      "duration": "Concentration, up to 10 minutes",
      "components": "V, S, M"
    },
    {
      "name": "Disguise Self",
      "link": "http://dnd5e.wikidot.com/spell:disguise-self",
      "school": "Illusion",
      "castingTime": "1 Action",
      "range": "Self",
      "duration": "1 hour",
      "components": "V, S"
    },
    {
      "name": "Dissonant Whispers",
      "link": "http://dnd5e.wikidot.com/spell:dissonant-whispers",
      "school": "Enchantment",
      "castingTime": "1 Action",
      "range": "60 feet",
      "duration": "Instantaneous",
      "components": "V"
    },
    {
      "name": "Distort Value",
      "link": "http://dnd5e.wikidot.com/spell:distort-value",
      "school": "Illusion",
      "castingTime": "1 Minute",
      "range": "Touch",
      "duration": "8 hours",
      "components": "V"
    },
    {
      "name": "Divine Favor",
      "link": "http://dnd5e.wikidot.com/spell:divine-favor",
      "school": "Evocation",
      "castingTime": "1 Bonus Action",
      "range": "Self",
      "duration": "Concentration, up to 1 minute",
      "components": "V, S"
    },
    {
      "name": "Earth Tremor",
      "link": "http://dnd5e.wikidot.com/spell:earth-tremor",
      "school": "Evocation",
      "castingTime": "1 Action",
      "range": "Self (10-foot radius)",
      "duration": "Instantaneous",
      "components": "V, S"
    },
    {
      "name": "Ensnaring Strike",
      "link": "http://dnd5e.wikidot.com/spell:ensnaring-strike",
      "school": "Conjuration",
      "castingTime": "1 Bonus Action",
      "range": "Self",
      "duration": "Concentration, up to 1 minute",
      "components": "V"
    },
    {
      "name": "Entangle",
      "link": "http://dnd5e.wikidot.com/spell:entangle",
      "school": "Conjuration",
      "castingTime": "1 Action",
      "range": "90 feet",
      "duration": "Concentration, up to 1 minute",
      "components": "V, S"
    },
    {
      "name": "Expeditious Retreat",
      "link": "http://dnd5e.wikidot.com/spell:expeditious-retreat",
      "school": "Transmutation",
      "castingTime": "1 Bonus Action",
      "range": "Self",
      "duration": "Concentration, up to 10 minutes",
      "components": "V, S"
    },
    {
      "name": "Faerie Fire",
      "link": "http://dnd5e.wikidot.com/spell:faerie-fire",
      "school": "Evocation",
      "castingTime": "1 Action",
      "range": "60 feet",
      "duration": "Concentration, up to 1 minute",
      "components": "V"
    },
    {
      "name": "False Life",
      "link": "http://dnd5e.wikidot.com/spell:false-life",
      "school": "Necromancy",
      "castingTime": "1 Action",
      "range": "Self",
      "duration": "1 hour",
      "components": "V, S, M"
    },
    {
      "name": "Feather Fall",
      "link": "http://dnd5e.wikidot.com/spell:feather-fall",
      "school": "Transmutation",
      "castingTime": "1 Reaction",
      "range": "60 feet",
      "duration": "1 minute",
      "components": "V, M"
    },
    {
      "name": "Find Familiar",
      "link": "http://dnd5e.wikidot.com/spell:find-familiar",
      "school": "Conjuration",
      "castingTime": "1 Hour R",
      "range": "10 feet",
      "duration": "Instantaneous",
      "components": "V, S, M"
    },
    {
      "name": "Fog Cloud",
      "link": "http://dnd5e.wikidot.com/spell:fog-cloud",
      "school": "Conjuration",
      "castingTime": "1 Action",
      "range": "120 feet",
      "duration": "Concentration, up to 1 hour",
      "components": "V, S"
    },
    {
      "name": "Frost Fingers",
      "link": "http://dnd5e.wikidot.com/spell:frost-fingers",
      "school": "Evocation",
      "castingTime": "1 Action",
      "range": "Self (15-foot cone)",
      "duration": "Instantaneous",
      "components": "V, S"
    },
    {
      "name": "Gift of Alacrity",
      "link": "http://dnd5e.wikidot.com/spell:gift-of-alacrity",
      "school": "Divination DC",
      "castingTime": "1 Minute",
      "range": "Touch",
      "duration": "8 hours",
      "components": "V, S"
    },
    {
      "name": "Goodberry",
      "link": "http://dnd5e.wikidot.com/spell:goodberry",
      "school": "Transmutation",
      "castingTime": "1 Action",
      "range": "Touch",
      "duration": "Instantaneous",
      "components": "V, S, M"
    },
    {
      "name": "Grease",
      "link": "http://dnd5e.wikidot.com/spell:grease",
      "school": "Conjuration",
      "castingTime": "1 Action",
      "range": "60 feet",
      "duration": "1 minute",
      "components": "V, S, M"
    },
    {
      "name": "Guiding Bolt",
      "link": "http://dnd5e.wikidot.com/spell:guiding-bolt",
      "school": "Evocation",
      "castingTime": "1 Action",
      "range": "120 feet",
      "duration": "1 round",
      "components": "V, S"
    },
    {
      "name": "Guiding Hand (UA)",
      "link": "http://dnd5e.wikidot.com/spell:guiding-hand-ua",
      "school": "Divination",
      "castingTime": "1 Minute R",
      "range": "5 feet",
      "duration": "Concentration, up to 8 hours",
      "components": "V, S"
    },
    {
      "name": "Hail of Thorns",
      "link": "http://dnd5e.wikidot.com/spell:hail-of-thorns",
      "school": "Conjuration",
      "castingTime": "1 Bonus Action",
      "range": "Self",
      "duration": "Concentration, up to 1 minute",
      "components": "V"
    },
    {
      "name": "Healing Elixir (UA)",
      "link": "http://dnd5e.wikidot.com/spell:healing-elixir-ua",
      "school": "Conjuration",
      "castingTime": "1 Minute",
      "range": "Self",
      "duration": "24 hours",
      "components": "V, S, M"
    },
    {
      "name": "Healing Word",
      "link": "http://dnd5e.wikidot.com/spell:healing-word",
      "school": "Evocation",
      "castingTime": "1 Bonus Action",
      "range": "60 feet",
      "duration": "Instantaneous",
      "components": "V"
    },
    {
      "name": "Hellish Rebuke",
      "link": "http://dnd5e.wikidot.com/spell:hellish-rebuke",
      "school": "Evocation",
      "castingTime": "1 Reaction",
      "range": "60 feet",
      "duration": "Instantaneous",
      "components": "V, S"
    },
    {
      "name": "Heroism",
      "link": "http://dnd5e.wikidot.com/spell:heroism",
      "school": "Enchantment",
      "castingTime": "1 Action",
      "range": "Touch",
      "duration": "Concentration, up to 1 minute",
      "components": "V, S"
    },
    {
      "name": "Hex",
      "link": "http://dnd5e.wikidot.com/spell:hex",
      "school": "Enchantment",
      "castingTime": "1 Bonus Action",
      "range": "90 feet",
      "duration": "Concentration, up to 1 hour",
      "components": "V, S, M"
    },
    {
      "name": "Hunter's Mark",
      "link": "http://dnd5e.wikidot.com/spell:hunters-mark",
      "school": "Divination",
      "castingTime": "1 Bonus Action",
      "range": "90 feet",
      "duration": "Concentration, up to 1 hour",
      "components": "V"
    },
    {
      "name": "Ice Knife",
      "link": "http://dnd5e.wikidot.com/spell:ice-knife",
      "school": "Conjuration",
      "castingTime": "1 Action",
      "range": "60 feet",
      "duration": "Instantaneous",
      "components": "S, M"
    },
    {
      "name": "Id Insinuation (UA)",
      "link": "http://dnd5e.wikidot.com/spell:id-insinuation",
      "school": "Enchantment",
      "castingTime": "1 Action",
      "range": "60 feet",
      "duration": "Concentration, up to 1 minute",
      "components": "V, S"
    },
    {
      "name": "Identify",
      "link": "http://dnd5e.wikidot.com/spell:identify",
      "school": "Divination",
      "castingTime": "1 Minute R",
      "range": "Touch",
      "duration": "Instantaneous",
      "components": "V, S, M"
    },
    {
      "name": "Illusory Script",
      "link": "http://dnd5e.wikidot.com/spell:illusory-script",
      "school": "Illusion",
      "castingTime": "1 Minute R",
      "range": "Touch",
      "duration": "10 days",
      "components": "S, M"
    },
    {
      "name": "Infallible Relay (UA)",
      "link": "http://dnd5e.wikidot.com/spell:infallible-relay",
      "school": "Divination T",
      "castingTime": "1 Minute",
      "range": "Self",
      "duration": "Concentration, up to 10 minutes",
      "components": "V, S, M"
    },
    {
      "name": "Inflict Wounds",
      "link": "http://dnd5e.wikidot.com/spell:inflict-wounds",
      "school": "Necromancy",
      "castingTime": "1 Action",
      "range": "Touch",
      "duration": "Instantaneous",
      "components": "V, S"
    },
    {
      "name": "Jim's Magic Missile",
      "link": "http://dnd5e.wikidot.com/spell:jims-magic-missile",
      "school": "Evocation",
      "castingTime": "1 Action",
      "range": "120 feet",
      "duration": "Instantaneous",
      "components": "V, S, M"
    },
    {
      "name": "Jump",
      "link": "http://dnd5e.wikidot.com/spell:jump",
      "school": "Transmutation",
      "castingTime": "1 Action",
      "range": "Touch",
      "duration": "1 minute",
      "components": "V, S, M"
    },
    {
      "name": "Longstrider",
      "link": "http://dnd5e.wikidot.com/spell:longstrider",
      "school": "Transmutation",
      "castingTime": "1 Action",
      "range": "Touch",
      "duration": "1 hour",
      "components": "V, S, M"
    },
    {
      "name": "Mage Armor",
      "link": "http://dnd5e.wikidot.com/spell:mage-armor",
      "school": "Abjuration",
      "castingTime": "1 Action",
      "range": "Touch",
      "duration": "8 hours",
      "components": "V, S, M"
    },
    {
      "name": "Magic Missile",
      "link": "http://dnd5e.wikidot.com/spell:magic-missile",
      "school": "Evocation",
      "castingTime": "1 Action",
      "range": "120 feet",
      "duration": "Instantaneous",
      "components": "V, S"
    },
    {
      "name": "Magnify Gravity",
      "link": "http://dnd5e.wikidot.com/spell:magnify-gravity",
      "school": "Transmutation DG",
      "castingTime": "1 Action",
      "range": "60 feet",
      "duration": "1 round",
      "components": "V, S"
    },
    {
      "name": "Protection from Evil and Good",
      "link": "http://dnd5e.wikidot.com/spell:protection-from-evil-and-good",
      "school": "Abjuration",
      "castingTime": "1 Action",
      "range": "Touch",
      "duration": "Concentration, up to 10 minutes",
      "components": "V, S, M"
    },
    {
      "name": "Puppet (UA)",
      "link": "http://dnd5e.wikidot.com/spell:puppet",
      "school": "Enchantment",
      "castingTime": "1 Action",
      "range": "120 feet",
      "duration": "Instantaneous",
      "components": "V"
    },
    {
      "name": "Purify Food and Drink",
      "link": "http://dnd5e.wikidot.com/spell:purify-food-and-drink",
      "school": "Transmutation",
      "castingTime": "1 Action R",
      "range": "10 feet",
      "duration": "Instantaneous",
      "components": "V, S"
    },
    {
      "name": "Ray of Sickness",
      "link": "http://dnd5e.wikidot.com/spell:ray-of-sickness",
      "school": "Necromancy",
      "castingTime": "1 Action",
      "range": "60 feet",
      "duration": "Instantaneous",
      "components": "V, S"
    },
    {
      "name": "Remote Access (UA)",
      "link": "http://dnd5e.wikidot.com/spell:remote-access",
      "school": "Transmutation T",
      "castingTime": "1 Action",
      "range": "120 feet",
      "duration": "10 minutes",
      "components": "V, S"
    },
    {
      "name": "Sanctuary",
      "link": "http://dnd5e.wikidot.com/spell:sanctuary",
      "school": "Abjuration",
      "castingTime": "1 Bonus Action",
      "range": "30 feet",
      "duration": "1 minute",
      "components": "V, S, M"
    },
    {
      "name": "Searing Smite",
      "link": "http://dnd5e.wikidot.com/spell:searing-smite",
      "school": "Evocation",
      "castingTime": "1 Bonus Action",
      "range": "Self",
      "duration": "Concentration, up to 1 minute",
      "components": "V"
    },
    {
      "name": "Sense Emotion (UA)",
      "link": "http://dnd5e.wikidot.com/spell:sense-emotion",
      "school": "Divination",
      "castingTime": "1 Action",
      "range": "Self",
      "duration": "Concentration, up to 1 minute",
      "components": "V, S"
    },
    {
      "name": "Shield",
      "link": "http://dnd5e.wikidot.com/spell:shield",
      "school": "Abjuration",
      "castingTime": "1 Reaction",
      "range": "Self",
      "duration": "1 round",
      "components": "V, S"
    },
    {
      "name": "Shield of Faith",
      "link": "http://dnd5e.wikidot.com/spell:shield-of-faith",
      "school": "Abjuration",
      "castingTime": "1 Bonus Action",
      "range": "60 feet",
      "duration": "Concentration, up to 1 minute",
      "components": "V, S, M"
    },
    {
      "name": "Silent Image",
      "link": "http://dnd5e.wikidot.com/spell:silent-image",
      "school": "Illusion",
      "castingTime": "1 Action",
      "range": "60 feet",
      "duration": "Concentration, up to 10 minutes",
      "components": "V, S, M"
    },
    {
      "name": "Silvery Barbs",
      "link": "http://dnd5e.wikidot.com/spell:silvery-barbs",
      "school": "Enchantment",
      "castingTime": "1 Reaction",
      "range": "60 feet",
      "duration": "Instantaneous",
      "components": "V"
    },
    {
      "name": "Sleep",
      "link": "http://dnd5e.wikidot.com/spell:sleep",
      "school": "Enchantment",
      "castingTime": "1 Action",
      "range": "90 feet",
      "duration": "1 minute",
      "components": "V, S, M"
    },
    {
      "name": "Snare",
      "link": "http://dnd5e.wikidot.com/spell:snare",
      "school": "Abjuration",
      "castingTime": "1 Minute",
      "range": "Touch",
      "duration": "Until dispelled or triggered",
      "components": "V, S, M"
    },
    {
      "name": "Speak with Animals",
      "link": "http://dnd5e.wikidot.com/spell:speak-with-animals",
      "school": "Divination",
      "castingTime": "1 Action R",
      "range": "Self",
      "duration": "10 minutes",
      "components": "V, S"
    },
    {
      "name": "Sudden Awakening (UA)",
      "link": "http://dnd5e.wikidot.com/spell:sudden-awakening",
      "school": "Enchantment",
      "castingTime": "1 Bonus Action",
      "range": "10 feet",
      "duration": "Instantaneous",
      "components": "V"
    },
    {
      "name": "Tasha's Caustic Brew",
      "link": "http://dnd5e.wikidot.com/spell:tashas-caustic-brew",
      "school": "Evocation",
      "castingTime": "1 Action",
      "range": "Self (30-foot line)",
      "duration": "Concentration, up to 1 minute",
      "components": "V, S, M"
    },
    {
      "name": "Tasha's Hideous Laughter",
      "link": "http://dnd5e.wikidot.com/spell:tashas-hideous-laughter",
      "school": "Enchantment",
      "castingTime": "1 Action",
      "range": "30 feet",
      "duration": "Concentration, up to 1 minute",
      "components": "V, S, M"
    },
    {
      "name": "Tenser's Floating Disk",
      "link": "http://dnd5e.wikidot.com/spell:tensers-floating-disk",
      "school": "Conjuration",
      "castingTime": "1 Action R",
      "range": "30 feet",
      "duration": "1 hour",
      "components": "V, S, M"
    },
    {
      "name": "Thunderous Smite",
      "link": "http://dnd5e.wikidot.com/spell:thunderous-smite",
      "school": "Evocation",
      "castingTime": "1 Bonus Action",
      "range": "Self",
      "duration": "Concentration, up to 1 minute",
      "components": "V"
    },
    {
      "name": "Thunderwave",
      "link": "http://dnd5e.wikidot.com/spell:thunderwave",
      "school": "Evocation",
      "castingTime": "1 Action",
      "range": "Self (15-foot cube)",
      "duration": "Instantaneous",
      "components": "V, S"
    },
    {
      "name": "Unearthly Chorus (UA)",
      "link": "http://dnd5e.wikidot.com/spell:unearthly-chorus",
      "school": "Illusion",
      "castingTime": "1 Action",
      "range": "Self (30-foot radius)",
      "duration": "Concentration, up to 10 minutes",
      "components": "V"
    },
    {
      "name": "Unseen Servant",
      "link": "http://dnd5e.wikidot.com/spell:unseen-servant",
      "school": "Conjuration",
      "castingTime": "1 Action R",
      "range": "60 feet",
      "duration": "1 hour",
      "components": "V, S, M"
    },
    {
      "name": "Wild Cunning (UA)",
      "link": "http://dnd5e.wikidot.com/spell:wild-cunning",
      "school": "Transmutation",
      "castingTime": "1 Action R",
      "range": "120 feet",
      "duration": "Instantaneous",
      "components": "V, S"
    },
    {
      "name": "Witch Bolt",
      "link": "http://dnd5e.wikidot.com/spell:witch-bolt",
      "school": "Evocation",
      "castingTime": "1 Action",
      "range": "30 feet",
      "duration": "Concentration, up to 1 minute",
      "components": "V, S, M"
    },
    {
      "name": "Wrathful Smite",
      "link": "http://dnd5e.wikidot.com/spell:wrathful-smite",
      "school": "Evocation",
      "castingTime": "1 Bonus Action",
      "range": "Self",
      "duration": "Concentration, up to 1 minute",
      "components": "V"
    },
    {
      "name": "Zephyr Strike",
      "link": "http://dnd5e.wikidot.com/spell:zephyr-strike",
      "school": "Transmutation",
      "castingTime": "1 Bonus Action",
      "range": "Self",
      "duration": "Concentration, up to 1 minute",
      "components": "V"
    },
];
const levelTwo = [
    {
      "name": "Aganazzar's Scorcher",
      "link": "http://dnd5e.wikidot.com/spell:aganazzars-scorcher",
      "school": "Evocation",
      "castingTime": "1 Action",
      "range": "30 Feet",
      "duration": "Instantaneous",
      "components": "V, S, M"
    },
    {
      "name": "Aid",
      "link": "http://dnd5e.wikidot.com/spell:aid",
      "school": "Abjuration",
      "castingTime": "1 Action",
      "range": "30 Feet",
      "duration": "8 hours",
      "components": "V, S, M"
    },
    {
      "name": "Air Bubble",
      "link": "http://dnd5e.wikidot.com/spell:air-bubble",
      "school": "Conjuration",
      "castingTime": "1 Action",
      "range": "60 Feet",
      "duration": "24 hours",
      "components": "S"
    },
    {
      "name": "Alter Self",
      "link": "http://dnd5e.wikidot.com/spell:alter-self",
      "school": "Transmutation",
      "castingTime": "1 Action",
      "range": "Self",
      "duration": "Concentration, up to 1 hour",
      "components": "V, S"
    },
    {
      "name": "Animal Messenger",
      "link": "http://dnd5e.wikidot.com/spell:animal-messenger",
      "school": "Enchantment",
      "castingTime": "1 Action R",
      "range": "30 Feet",
      "duration": "24 hours",
      "components": "V, S, M"
    },
    {
      "name": "Arcane Hacking (UA)",
      "link": "http://dnd5e.wikidot.com/spell:arcane-hacking",
      "school": "Transmutation T",
      "castingTime": "1 Action",
      "range": "Self",
      "duration": "Concentration, up to 1 hour",
      "components": "V, S, M"
    },
    {
      "name": "Arcane Lock",
      "link": "http://dnd5e.wikidot.com/spell:arcane-lock",
      "school": "Abjuration",
      "castingTime": "1 Action",
      "range": "Touch",
      "duration": "Until dispelled",
      "components": "V, S, M"
    },
    {
      "name": "Augury",
      "link": "http://dnd5e.wikidot.com/spell:augury",
      "school": "Divination",
      "castingTime": "1 Minute R",
      "range": "Self",
      "duration": "Instantaneous",
      "components": "V, S, M"
    },
    {
      "name": "Barkskin",
      "link": "http://dnd5e.wikidot.com/spell:barkskin",
      "school": "Transmutation",
      "castingTime": "1 Action",
      "range": "Touch",
      "duration": "Concentration, up to 1 hour",
      "components": "V, S, M"
    },
    {
      "name": "Beast Sense",
      "link": "http://dnd5e.wikidot.com/spell:beast-sense",
      "school": "Divination",
      "castingTime": "1 Action R",
      "range": "Touch",
      "duration": "Concentration, up to 1 hour",
      "components": "S"
    },
    {
      "name": "Blindness/Deafness",
      "link": "http://dnd5e.wikidot.com/spell:blindness-deafness",
      "school": "Necromancy",
      "castingTime": "1 Action",
      "range": "30 Feet",
      "duration": "1 minute",
      "components": "V"
    },
    {
      "name": "Blur",
      "link": "http://dnd5e.wikidot.com/spell:blur",
      "school": "Illusion",
      "castingTime": "1 Action",
      "range": "Self",
      "duration": "Concentration, up to 1 minute",
      "components": "V"
    },
    {
      "name": "Borrowed Knowledge",
      "link": "http://dnd5e.wikidot.com/spell:borrowed-knowledge",
      "school": "Divination",
      "castingTime": "1 Action",
      "range": "Self",
      "duration": "1 hour",
      "components": "V, S, M"
    },
    {
      "name": "Branding Smite",
      "link": "http://dnd5e.wikidot.com/spell:branding-smite",
      "school": "Evocation",
      "castingTime": "1 Bonus Action",
      "range": "Self",
      "duration": "Concentration, up to 1 minute",
      "components": "V"
    },
    {
      "name": "Calm Emotions",
      "link": "http://dnd5e.wikidot.com/spell:calm-emotions",
      "school": "Enchantment",
      "castingTime": "1 Action",
      "range": "60 feet",
      "duration": "Concentration, up to 1 minute",
      "components": "V, S"
    },
    {
      "name": "Cloud of Daggers",
      "link": "http://dnd5e.wikidot.com/spell:cloud-of-daggers",
      "school": "Conjuration",
      "castingTime": "1 Action",
      "range": "60 feet",
      "duration": "Concentration, up to 1 minute",
      "components": "V, S, M"
    },
    {
      "name": "Continual Flame",
      "link": "http://dnd5e.wikidot.com/spell:continual-flame",
      "school": "Evocation",
      "castingTime": "1 Action",
      "range": "Touch",
      "duration": "Until dispelled",
      "components": "V, S, M"
    },
    {
      "name": "Cordon of Arrows",
      "link": "http://dnd5e.wikidot.com/spell:cordon-of-arrows",
      "school": "Transmutation",
      "castingTime": "1 Action",
      "range": "5 feet",
      "duration": "8 hours",
      "components": "V, S, M"
    },
    {
      "name": "Crown of Madness",
      "link": "http://dnd5e.wikidot.com/spell:crown-of-madness",
      "school": "Enchantment",
      "castingTime": "1 Action",
      "range": "120 feet",
      "duration": "Concentration, up to 1 minute",
      "components": "V, S"
    },
    {
      "name": "Darkness",
      "link": "http://dnd5e.wikidot.com/spell:darkness",
      "school": "Evocation",
      "castingTime": "1 Action",
      "range": "60 feet",
      "duration": "Concentration, up to 10 minutes",
      "components": "V, M"
    },
    {
      "name": "Darkvision",
      "link": "http://dnd5e.wikidot.com/spell:darkvision",
      "school": "Transmutation",
      "castingTime": "1 Action",
      "range": "Touch",
      "duration": "8 hours",
      "components": "V, S, M"
    },
    {
      "name": "Detect Thoughts",
      "link": "http://dnd5e.wikidot.com/spell:detect-thoughts",
      "school": "Divination",
      "castingTime": "1 Action",
      "range": "Self",
      "duration": "Concentration, up to 1 minute",
      "components": "V, S, M"
    },
    {
      "name": "Digital Phantom (UA)",
      "link": "http://dnd5e.wikidot.com/spell:digital-phantom",
      "school": "Abjuration T",
      "castingTime": "1 Action",
      "range": "Self",
      "duration": "Concentration, up to 1 hour",
      "components": "V, S, M"
    },
    {
      "name": "Dragon's Breath",
      "link": "http://dnd5e.wikidot.com/spell:dragons-breath",
      "school": "Transmutation",
      "castingTime": "1 Bonus Action",
      "range": "Touch",
      "duration": "Concentration, up to 1 minute",
      "components": "V, S, M"
    },
    {
      "name": "Dust Devil",
      "link": "http://dnd5e.wikidot.com/spell:dust-devil",
      "school": "Conjuration",
      "castingTime": "1 Action",
      "range": "60 feet",
      "duration": "Concentration, up to 1 minute",
      "components": "V, S, M"
    },
    {
      "name": "Earthbind",
      "link": "http://dnd5e.wikidot.com/spell:earthbind",
      "school": "Transmutation",
      "castingTime": "1 Action",
      "range": "300 feet",
      "duration": "Concentration, up to 1 minute",
      "components": "V"
    },
    {
      "name": "Enhance Ability",
      "link": "http://dnd5e.wikidot.com/spell:enhance-ability",
      "school": "Transmutation",
      "castingTime": "1 Action",
      "range": "Touch",
      "duration": "Concentration, up to 1 hour",
      "components": "V, S, M"
    },
    {
      "name": "Enlarge/Reduce",
      "link": "http://dnd5e.wikidot.com/spell:enlarge-reduce",
      "school": "Transmutation",
      "castingTime": "1 Action",
      "range": "30 feet",
      "duration": "Concentration, up to 1 minute",
      "components": "V, S, M"
    },
    {
      "name": "Enthrall",
      "link": "http://dnd5e.wikidot.com/spell:enthrall",
      "school": "Enchantment",
      "castingTime": "1 Action",
      "range": "60 feet",
      "duration": "1 minute",
      "components": "V, S"
    },
    {
      "name": "Find Steed",
      "link": "http://dnd5e.wikidot.com/spell:find-steed",
      "school": "Conjuration",
      "castingTime": "10 Minutes",
      "range": "30 feet",
      "duration": "Instantaneous",
      "components": "V, S"
    },
    {
      "name": "Find Traps",
      "link": "http://dnd5e.wikidot.com/spell:find-traps",
      "school": "Divination",
      "castingTime": "1 Action",
      "range": "120 feet",
      "duration": "Instantaneous",
      "components": "V, S"
    },
    {
      "name": "Find Vehicle (UA)",
      "link": "http://dnd5e.wikidot.com/spell:find-vehicle",
      "school": "Conjuration T",
      "castingTime": "10 Minutes",
      "range": "30 feet",
      "duration": "8 hours",
      "components": "V, S"
    },
    {
      "name": "Flame Blade",
      "link": "http://dnd5e.wikidot.com/spell:flame-blade",
      "school": "Evocation",
      "castingTime": "1 Bonus Action",
      "range": "Self",
      "duration": "Concentration, up to 10 minutes",
      "components": "V, S, M"
    },
    {
      "name": "Flaming Sphere",
      "link": "http://dnd5e.wikidot.com/spell:flaming-sphere",
      "school": "Conjuration",
      "castingTime": "1 Action",
      "range": "60 feet",
      "duration": "Concentration, up to 1 minute",
      "components": "V, S, M"
    },
    {
      "name": "Flock of Familiars",
      "link": "http://dnd5e.wikidot.com/spell:flock-of-familiars",
      "school": "Conjuration",
      "castingTime": "1 Minute",
      "range": "Touch",
      "duration": "Concentration, up to 1 hour",
      "components": "V, S"
    },
    {
      "name": "Fortune's Favor",
      "link": "http://dnd5e.wikidot.com/spell:fortunes-favor",
      "school": "Divination D",
      "castingTime": "1 Minute",
      "range": "60 feet",
      "duration": "1 hour",
      "components": "V, S, M"
    },
    {
      "name": "Gentle Repose",
      "link": "http://dnd5e.wikidot.com/spell:gentle-repose",
      "school": "Necromancy",
      "castingTime": "1 Action R",
      "range": "Touch",
      "duration": "10 days",
      "components": "V, S, M"
    },
    {
      "name": "Gift of Gab",
      "link": "http://dnd5e.wikidot.com/spell:gift-of-gab",
      "school": "Enchantment",
      "castingTime": "Reaction",
      "range": "Self",
      "duration": "Instantaneous",
      "components": "V, S, M"
    },
    {
      "name": "Gust of Wind",
      "link": "http://dnd5e.wikidot.com/spell:gust-of-wind",
      "school": "Evocation",
      "castingTime": "1 Action",
      "range": "Self (60-foot line)",
      "duration": "Concentration, up to 1 minute",
      "components": "V, S, M"
    },
    {
      "name": "Healing Spirit",
      "link": "http://dnd5e.wikidot.com/spell:healing-spirit",
      "school": "Conjuration",
      "castingTime": "1 Bonus Action",
      "range": "60 feet",
      "duration": "Concentration, up to 1 minute",
      "components": "V, S"
    },
    {
      "name": "Heat Metal",
      "link": "http://dnd5e.wikidot.com/spell:heat-metal",
      "school": "Transmutation",
      "castingTime": "1 Action",
      "range": "60 feet",
      "duration": "Concentration, up to 1 minute",
      "components": "V, S, M"
    },
    {
      "name": "Hold Person",
      "link": "http://dnd5e.wikidot.com/spell:hold-person",
      "school": "Enchantment",
      "castingTime": "1 Action",
      "range": "60 feet",
      "duration": "Concentration, up to 1 minute",
      "components": "V, S, M"
    },
    {
      "name": "Icingdeath's Frost (UA)",
      "link": "http://dnd5e.wikidot.com/spell:icingdeath-s-frost",
      "school": "Evocation",
      "castingTime": "1 Action",
      "range": "Self (15-foot cone)",
      "duration": "Instantaneous",
      "components": "S, M"
    },
    {
      "name": "Immovable Object",
      "link": "http://dnd5e.wikidot.com/spell:immovable-object",
      "school": "Transmutation DG",
      "castingTime": "1 Action",
      "range": "Touch",
      "duration": "1 hour",
      "components": "V, S, M"
    },
    {
      "name": "Invisibility",
      "link": "http://dnd5e.wikidot.com/spell:invisibility",
      "school": "Illusion",
      "castingTime": "1 Action",
      "range": "Touch",
      "duration": "Concentration, up to 1 hour",
      "components": "V, S, M"
    },
    {
      "name": "Jim's Glowing Coin",
      "link": "http://dnd5e.wikidot.com/spell:jims-glowing-coin",
      "school": "Enchantment",
      "castingTime": "1 Action",
      "range": "60 feet",
      "duration": "1 minute",
      "components": "S, M"
    },
    {
      "name": "Kinetic Jaunt",
      "link": "http://dnd5e.wikidot.com/spell:kinetic-jaunt",
      "school": "Transmutation",
      "castingTime": "1 Bonus Action",
      "range": "Self",
      "duration": "Concentration, up to 1 minute",
      "components": "S"
    },
    {
      "name": "Knock",
      "link": "http://dnd5e.wikidot.com/spell:knock",
      "school": "Transmutation",
      "castingTime": "1 Action",
      "range": "60 feet",
      "duration": "Instantaneous",
      "components": "V"
    },
    {
      "name": "Lesser Restoration",
      "link": "http://dnd5e.wikidot.com/spell:lesser-restoration",
      "school": "Abjuration",
      "castingTime": "1 Action",
      "range": "Touch",
      "duration": "Instantaneous",
      "components": "V, S"
    },
    {
      "name": "Levitate",
      "link": "http://dnd5e.wikidot.com/spell:levitate",
      "school": "Transmutation",
      "castingTime": "1 Action",
      "range": "60 feet",
      "duration": "Concentration, up to 10 minutes",
      "components": "V, S, M"
    },
    {
      "name": "Locate Animals or Plants",
      "link": "http://dnd5e.wikidot.com/spell:locate-animals-or-plants",
      "school": "Divination",
      "castingTime": "1 Action R",
      "range": "Self",
      "duration": "Instantaneous",
      "components": "V, S, M"
    },
    {
      "name": "Locate Object",
      "link": "http://dnd5e.wikidot.com/spell:locate-object",
      "school": "Divination",
      "castingTime": "1 Action",
      "range": "Self",
      "duration": "Concentration, up to 10 minutes",
      "components": "V, S, M"
    },
    {
      "name": "Magic Mouth",
      "link": "http://dnd5e.wikidot.com/spell:magic-mouth",
      "school": "Illusion",
      "castingTime": "1 Minute R",
      "range": "30 feet",
      "duration": "Until dispelled",
      "components": "V, S, M"
    },
    {
      "name": "Magic Weapon",
      "link": "http://dnd5e.wikidot.com/spell:magic-weapon",
      "school": "Transmutation",
      "castingTime": "1 Bonus Action",
      "range": "Touch",
      "duration": "Concentration, up to 1 hour",
      "components": "V, S"
    },
    {
      "name": "Maximillian's Earthen Grasp",
      "link": "http://dnd5e.wikidot.com/spell:maximillians-earthen-grasp",
      "school": "Transmutation",
      "castingTime": "1 Action",
      "range": "30 feet",
      "duration": "Concentration, up to 1 minute",
      "components": "V, S, M"
    },
    {
      "name": "Melf's Acid Arrow",
      "link": "http://dnd5e.wikidot.com/spell:melfs-acid-arrow",
      "school": "Evocation",
      "castingTime": "1 Action",
      "range": "90 feet",
      "duration": "Instantaneous",
      "components": "V, S, M"
    },
    {
      "name": "Mental Barrier (UA)",
      "link": "http://dnd5e.wikidot.com/spell:mental-barrier",
      "school": "Abjuration",
      "castingTime": "1 Reaction",
      "range": "Self",
      "duration": "1 round",
      "components": "V"
    },
    {
      "name": "Mind Spike",
      "link": "http://dnd5e.wikidot.com/spell:mind-spike",
      "school": "Divination",
      "castingTime": "1 Action",
      "range": "60 feet",
      "duration": "Concentration, up to 1 hour",
      "components": "S"
    },
    {
      "name": "Mind Thrust (UA)",
      "link": "http://dnd5e.wikidot.com/spell:mind-thrust",
      "school": "Enchantment",
      "castingTime": "1 Bonus Action",
      "range": "60 feet",
      "duration": "1 round",
      "components": "V, S"
    },
    {
      "name": "Mirror Image",
      "link": "http://dnd5e.wikidot.com/spell:mirror-image",
      "school": "Illusion",
      "castingTime": "1 Action",
      "range": "Self",
      "duration": "1 minute",
      "components": "V, S"
    },
    {
      "name": "Misty Step",
      "link": "http://dnd5e.wikidot.com/spell:misty-step",
      "school": "Conjuration",
      "castingTime": "1 Bonus Action",
      "range": "Self",
      "duration": "Instantaneous",
      "components": "V"
    },
    {
      "name": "Moonbeam",
      "link": "http://dnd5e.wikidot.com/spell:moonbeam",
      "school": "Evocation",
      "castingTime": "1 Action",
      "range": "120 feet",
      "duration": "Concentration, up to 1 minute",
      "components": "V, S, M"
    },
    {
      "name": "Nathair's Mischief",
      "link": "http://dnd5e.wikidot.com/spell:nathairs-mischief",
      "school": "Illusion",
      "castingTime": "1 Action",
      "range": "60ft",
      "duration": "Concentration, up to 1 minute",
      "components": "S, M"
    },
    {
      "name": "Nathair's Mischief (UA)",
      "link": "http://dnd5e.wikidot.com/spell:nathairs-mischief-ua",
      "school": "Illusion",
      "castingTime": "1 Action",
      "range": "60 feet",
      "duration": "Concentration, up to 1 minute",
      "components": "S, M"
    },
    {
      "name": "Nystul's Magic Aura",
      "link": "http://dnd5e.wikidot.com/spell:nystuls-magic-aura",
      "school": "Illusion",
      "castingTime": "1 Action",
      "range": "Touch",
      "duration": "24 hours",
      "components": "V, S, M"
    },
    {
      "name": "Pass Without Trace",
      "link": "http://dnd5e.wikidot.com/spell:pass-without-trace",
      "school": "Abjuration",
      "castingTime": "1 Action",
      "range": "Self",
      "duration": "Concentration, up to 1 hour",
      "components": "V, S, M"
    },
    {
      "name": "Phantasmal Force",
      "link": "http://dnd5e.wikidot.com/spell:phantasmal-force",
      "school": "Illusion",
      "castingTime": "1 Action",
      "range": "60 feet",
      "duration": "Concentration, up to 1 minute",
      "components": "V, S, M"
    },
    {
      "name": "Prayer of Healing",
      "link": "http://dnd5e.wikidot.com/spell:prayer-of-healing",
      "school": "Evocation",
      "castingTime": "10 Minutes",
      "range": "30 feet",
      "duration": "Instantaneous",
      "components": "V"
    },
    {
      "name": "Protection from Poison",
      "link": "http://dnd5e.wikidot.com/spell:protection-from-poison",
      "school": "Abjuration",
      "castingTime": "1 Action",
      "range": "Touch",
      "duration": "1 hour",
      "components": "V, S"
    },
    {
      "name": "Pyrotechnics",
      "link": "http://dnd5e.wikidot.com/spell:pyrotechnics",
      "school": "Transmutation",
      "castingTime": "1 Action",
      "range": "60 feet",
      "duration": "Instantaneous",
      "components": "V, S"
    },
    {
      "name": "Ray of Enfeeblement",
      "link": "http://dnd5e.wikidot.com/spell:ray-of-enfeeblement",
      "school": "Necromancy",
      "castingTime": "1 Action",
      "range": "60 feet",
      "duration": "Concentration, up to 1 minute",
      "components": "V, S"
    },
    {
      "name": "Rime's Binding Ice",
      "link": "http://dnd5e.wikidot.com/spell:rimes-binding-ice",
      "school": "Evocation",
      "castingTime": "1 Action",
      "range": "Self (30-foot cone)",
      "duration": "Instantaneous",
      "components": "S, M"
    },
    {
      "name": "Rope Trick",
      "link": "http://dnd5e.wikidot.com/spell:rope-trick",
      "school": "Transmutation",
      "castingTime": "1 Action",
      "range": "Touch",
      "duration": "1 hour",
      "components": "V, S, M"
    },
    {
      "name": "Scorching Ray",
      "link": "http://dnd5e.wikidot.com/spell:scorching-ray",
      "school": "Evocation",
      "castingTime": "1 Action",
      "range": "120 feet",
      "duration": "Instantaneous",
      "components": "V, S"
    },
    {
      "name": "See Invisibility",
      "link": "http://dnd5e.wikidot.com/spell:see-invisibility",
      "school": "Divination",
      "castingTime": "1 Action",
      "range": "Self",
      "duration": "1 hour",
      "components": "V, S, M"
    },
    {
      "name": "Shadow Blade",
      "link": "http://dnd5e.wikidot.com/spell:shadow-blade",
      "school": "Illusion",
      "castingTime": "1 Bonus Action",
      "range": "Self",
      "duration": "Concentration, up to 1 minute",
      "components": "V, S"
    },
    {
      "name": "Shatter",
      "link": "http://dnd5e.wikidot.com/spell:shatter",
      "school": "Evocation",
      "castingTime": "1 Action",
      "range": "60 feet",
      "duration": "Instantaneous",
      "components": "V, S, M"
    },
    {
      "name": "Silence",
      "link": "http://dnd5e.wikidot.com/spell:silence",
      "school": "Illusion",
      "castingTime": "1 Action R",
      "range": "120 feet",
      "duration": "Concentration, up to 10 minutes",
      "components": "V, S"
    },
    {
      "name": "Skywrite",
      "link": "http://dnd5e.wikidot.com/spell:skywrite",
      "school": "Transmutation",
      "castingTime": "1 Action R",
      "range": "Sight",
      "duration": "Concentration, up to 1 day",
      "components": "V, S"
    },
    {
      "name": "Snilloc's Snowball Storm",
      "link": "http://dnd5e.wikidot.com/spell:snillocs-snowball-storm",
      "school": "Evocation",
      "castingTime": "1 Action",
      "range": "90 feet",
      "duration": "Instantaneous",
      "components": "V, S, M"
    },
    {
      "name": "Spider Climb",
      "link": "http://dnd5e.wikidot.com/spell:spider-climb",
      "school": "Transmutation",
      "castingTime": "1 Action",
      "range": "Touch",
      "duration": "Concentration, up to 1 hour",
      "components": "V, S, M"
    },
    {
      "name": "Spike Growth",
      "link": "http://dnd5e.wikidot.com/spell:spike-growth",
      "school": "Transmutation",
      "castingTime": "1 Action",
      "range": "150 feet",
      "duration": "Concentration, up to 10 minutes",
      "components": "V, S, M"
    },
    {
      "name": "Spiritual Weapon",
      "link": "http://dnd5e.wikidot.com/spell:spiritual-weapon",
      "school": "Evocation",
      "castingTime": "1 Bonus Action",
      "range": "60 feet",
      "duration": "1 minute",
      "components": "V, S"
    },
    {
      "name": "Spray Of Cards",
      "link": "http://dnd5e.wikidot.com/spell:spray-of-cards",
      "school": "Conjuration",
      "castingTime": "1 Action",
      "range": "Self (15-foot cone)",
      "duration": "Instantaneous",
      "components": "V, S, M"
    },
    {
      "name": "Spray of Cards (UA)",
      "link": "http://dnd5e.wikidot.com/spell:spray-of-cards-ua",
      "school": "Conjuration",
      "castingTime": "1 Action",
      "range": "15-foot cone",
      "duration": "Instantaneous",
      "components": "V, S, M"
    },
    {
      "name": "Suggestion",
      "link": "http://dnd5e.wikidot.com/spell:suggestion",
      "school": "Enchantment",
      "castingTime": "1 Action",
      "range": "30 feet",
      "duration": "Concentration, up to 8 hours",
      "components": "V, M"
    },
    {
      "name": "Summon Beast",
      "link": "http://dnd5e.wikidot.com/spell:summon-beast",
      "school": "Conjuration",
      "castingTime": "1 Action",
      "range": "90 feet",
      "duration": "Concentration, up to 1 hour",
      "components": "V, S, M"
    },
    {
      "name": "Tasha's Mind Whip",
      "link": "http://dnd5e.wikidot.com/spell:tashas-mind-whip",
      "school": "Enchantment",
      "castingTime": "1 Action",
      "range": "90 feet",
      "duration": "1 round",
      "components": "V"
    },
    {
      "name": "Thought Shield (UA)",
      "link": "http://dnd5e.wikidot.com/spell:thought-shield",
      "school": "Abjuration",
      "castingTime": "1 Action",
      "range": "Touch",
      "duration": "8 hours",
      "components": "V, S"
    },
    {
      "name": "Vortex Warp",
      "link": "http://dnd5e.wikidot.com/spell:vortex-warp",
      "school": "Conjuration",
      "castingTime": "1 Action",
      "range": "90 feet",
      "duration": "Instantaneous",
      "components": "V, S"
    },
    {
      "name": "Warding Bond",
      "link": "http://dnd5e.wikidot.com/spell:warding-bond",
      "school": "Abjuration",
      "castingTime": "1 Action",
      "range": "Touch",
      "duration": "1 hour",
      "components": "V, S, M"
    },
    {
      "name": "Warding Wind",
      "link": "http://dnd5e.wikidot.com/spell:warding-wind",
      "school": "Evocation",
      "castingTime": "1 Action",
      "range": "Self",
      "duration": "Concentration, up to 10 minutes",
      "components": "V"
    },
    {
      "name": "Warp Sense",
      "link": "http://dnd5e.wikidot.com/spell:warp-sense",
      "school": "Divination",
      "castingTime": "1 Action",
      "range": "Self",
      "duration": "Concentration, up to 1 minute",
      "components": "V, S, M"
    },
    {
      "name": "Web",
      "link": "http://dnd5e.wikidot.com/spell:web",
      "school": "Conjuration",
      "castingTime": "1 Action",
      "range": "60 feet",
      "duration": "Concentration, up to 1 hour",
      "components": "V, S, M"
    },
    {
      "name": "Wither and Bloom",
      "link": "http://dnd5e.wikidot.com/spell:wither-and-bloom",
      "school": "Necromancy",
      "castingTime": "1 Action",
      "range": "60 feet",
      "duration": "Instantaneous",
      "components": "V, S, M"
    },
    {
      "name": "Wristpocket",
      "link": "http://dnd5e.wikidot.com/spell:wristpocket",
      "school": "Conjuration D",
      "castingTime": "1 Action R",
      "range": "Self",
      "duration": "Concentration, up to 1 hour",
      "components": "S"
    },
    {
      "name": "Zone of Truth",
      "link": "http://dnd5e.wikidot.com/spell:zone-of-truth",
      "school": "Enchantment",
      "castingTime": "1 Action",
      "range": "60 feet",
      "duration": "10 minutes",
      "components": "V, S"
    },

];
const levelThree = [
    {
      "name": "Animate Dead",
      "link": "http://dnd5e.wikidot.com/spell:animate-dead",
      "school": "Necromancy",
      "castingTime": "1 Minute",
      "range": "10 feet",
      "duration": "Instantaneous",
      "components": "V, S, M"
    },
    {
      "name": "Antagonize",
      "link": "http://dnd5e.wikidot.com/spell:antagonize",
      "school": "Enchantment",
      "castingTime": "1 Action",
      "range": "30 feet",
      "duration": "Instantaneous",
      "components": "V, S, M"
    },
    {
      "name": "Antagonize (UA)",
      "link": "http://dnd5e.wikidot.com/spell:antagonize-ua",
      "school": "Enchantment",
      "castingTime": "1 Action",
      "range": "30 feet",
      "duration": "Instantaneous",
      "components": "V, S, M"
    },
    {
      "name": "Ashardalon's Stride",
      "link": "http://dnd5e.wikidot.com/spell:ashardalons-stride",
      "school": "Transmutation",
      "castingTime": "1 Bonus Action",
      "range": "Self",
      "duration": "Concentration, up to 1 minute",
      "components": "V,S"
    },
    {
      "name": "Aura of Vitality",
      "link": "http://dnd5e.wikidot.com/spell:aura-of-vitality",
      "school": "Evocation",
      "castingTime": "1 Action",
      "range": "Self (30-foot radius)",
      "duration": "Concentration, up to 1 minute",
      "components": "V"
    },
    {
      "name": "Beacon of Hope",
      "link": "http://dnd5e.wikidot.com/spell:beacon-of-hope",
      "school": "Abjuration",
      "castingTime": "1 Action",
      "range": "30 feet",
      "duration": "Concentration, up to 1 minute",
      "components": "V, S"
    },
    {
      "name": "Bestow Curse",
      "link": "http://dnd5e.wikidot.com/spell:bestow-curse",
      "school": "Necromancy",
      "castingTime": "1 Action",
      "range": "Touch",
      "duration": "Concentration, up to 1 minute",
      "components": "V, S"
    },
    {
      "name": "Blinding Smite",
      "link": "http://dnd5e.wikidot.com/spell:blinding-smite",
      "school": "Evocation",
      "castingTime": "1 Bonus Action",
      "range": "Self",
      "duration": "Concentration, up to 1 minute",
      "components": "V"
    },
    {
      "name": "Blink",
      "link": "http://dnd5e.wikidot.com/spell:blink",
      "school": "Transmutation",
      "castingTime": "1 Action",
      "range": "Self",
      "duration": "1 minute",
      "components": "V, S"
    },
    {
      "name": "Call Lightning",
      "link": "http://dnd5e.wikidot.com/spell:call-lightning",
      "school": "Conjuration",
      "castingTime": "1 Action",
      "range": "120 feet",
      "duration": "Concentration, up to 10 minutes",
      "components": "V, S"
    },
    {
      "name": "Catnap",
      "link": "http://dnd5e.wikidot.com/spell:catnap",
      "school": "Enchantment",
      "castingTime": "1 Action",
      "range": "30 feet",
      "duration": "10 minutes",
      "components": "S, M"
    },
    {
      "name": "Clairvoyance",
      "link": "http://dnd5e.wikidot.com/spell:clairvoyance",
      "school": "Divination",
      "castingTime": "10 Minutes",
      "range": "1 mile",
      "duration": "Concentration, up to 10 minutes",
      "components": "V, S, M"
    },
    {
      "name": "Conjure Animals",
      "link": "http://dnd5e.wikidot.com/spell:conjure-animals",
      "school": "Conjuration",
      "castingTime": "1 Action",
      "range": "60 feet",
      "duration": "Concentration, up to 1 hour",
      "components": "V, S"
    },
    {
      "name": "Conjure Barrage",
      "link": "http://dnd5e.wikidot.com/spell:conjure-barrage",
      "school": "Conjuration",
      "castingTime": "1 Action",
      "range": "Self (60-foot cone)",
      "duration": "Instantaneous",
      "components": "V, S, M"
    },
    {
      "name": "Conjure Lesser Demon (UA)",
      "link": "http://dnd5e.wikidot.com/spell:conjure-lesser-demon",
      "school": "Conjuration",
      "castingTime": "1 Action",
      "range": "60 feet",
      "duration": "Concentration, up to 1 hour",
      "components": "V, S, M"
    },
    {
      "name": "Counterspell",
      "link": "http://dnd5e.wikidot.com/spell:counterspell",
      "school": "Abjuration",
      "castingTime": "1 Reaction",
      "range": "60 feet",
      "duration": "Instantaneous",
      "components": "S"
    },
    {
      "name": "Create Food and Water",
      "link": "http://dnd5e.wikidot.com/spell:create-food-and-water",
      "school": "Conjuration",
      "castingTime": "1 Action",
      "range": "30 feet",
      "duration": "Instantaneous",
      "components": "V, S"
    },
    {
      "name": "Crusader's Mantle",
      "link": "http://dnd5e.wikidot.com/spell:crusaders-mantle",
      "school": "Evocation",
      "castingTime": "1 Action",
      "range": "Self",
      "duration": "Concentration, up to 1 minute",
      "components": "V"
    },
    {
      "name": "Daylight",
      "link": "http://dnd5e.wikidot.com/spell:daylight",
      "school": "Evocation",
      "castingTime": "1 Action",
      "range": "60 feet",
      "duration": "1 hour",
      "components": "V, S"
    },
    {
      "name": "Dispel Magic",
      "link": "http://dnd5e.wikidot.com/spell:dispel-magic",
      "school": "Abjuration",
      "castingTime": "1 Action",
      "range": "120 feet",
      "duration": "Instantaneous",
      "components": "V, S"
    },
    {
      "name": "Elemental Weapon",
      "link": "http://dnd5e.wikidot.com/spell:elemental-weapon",
      "school": "Transmutation",
      "castingTime": "1 Action",
      "range": "Touch",
      "duration": "Concentration, up to 1 hour",
      "components": "V, S"
    },
    {
      "name": "Enemies Abound",
      "link": "http://dnd5e.wikidot.com/spell:enemies-abound",
      "school": "Enchantment",
      "castingTime": "1 Action",
      "range": "120 feet",
      "duration": "Concentration, up to 1 minute",
      "components": "V, S"
    },
    {
      "name": "Erupting Earth",
      "link": "http://dnd5e.wikidot.com/spell:erupting-earth",
      "school": "Transmutation",
      "castingTime": "1 Action",
      "range": "120 feet",
      "duration": "Instantaneous",
      "components": "V, S, M"
    },
    {
      "name": "Fast Friends",
      "link": "http://dnd5e.wikidot.com/spell:fast-friends",
      "school": "Enchantment",
      "castingTime": "1 Action",
      "range": "30 feet",
      "duration": "Concentration, up to 1 hour",
      "components": "V"
    },
    {
      "name": "Fear",
      "link": "http://dnd5e.wikidot.com/spell:fear",
      "school": "Illusion",
      "castingTime": "1 Action",
      "range": "Self (30-foot cone)",
      "duration": "Concentration, up to 1 minute",
      "components": "V, S, M"
    },
    {
      "name": "Feign Death",
      "link": "http://dnd5e.wikidot.com/spell:feign-death",
      "school": "Necromancy",
      "castingTime": "1 Action R",
      "range": "Touch",
      "duration": "1 hour",
      "components": "V, S, M"
    },
    {
      "name": "Fireball",
      "link": "http://dnd5e.wikidot.com/spell:fireball",
      "school": "Evocation",
      "castingTime": "1 Action",
      "range": "150 feet",
      "duration": "Instantaneous",
      "components": "V, S, M"
    },
    {
      "name": "Flame Arrows",
      "link": "http://dnd5e.wikidot.com/spell:flame-arrows",
      "school": "Transmutation",
      "castingTime": "1 Action",
      "range": "Touch",
      "duration": "Concentration, up to 1 hour",
      "components": "V, S"
    },
    {
      "name": "Flame Stride (UA)",
      "link": "http://dnd5e.wikidot.com/spell:flame-stride",
      "school": "Transmutation",
      "castingTime": "1 Bonus Action",
      "range": "Self",
      "duration": "Concentration, up to 1 minute",
      "components": "V, S"
    },
    {
      "name": "Fly",
      "link": "http://dnd5e.wikidot.com/spell:fly",
      "school": "Transmutation",
      "castingTime": "1 Action",
      "range": "Touch",
      "duration": "Concentration, up to 10 minute",
      "components": "V, S, M"
    },
    {
      "name": "Freedom of the Waves (HB)",
      "link": "http://dnd5e.wikidot.com/spell:freedom-of-the-waves",
      "school": "Conjuration HB",
      "castingTime": "1 action",
      "range": "120 feet",
      "duration": "Instantaneous",
      "components": "V, S, M"
    },
    {
      "name": "Galder's Tower",
      "link": "http://dnd5e.wikidot.com/spell:galders-tower",
      "school": "Conjuration",
      "castingTime": "10 Minutes",
      "range": "30 feet",
      "duration": "24 hours",
      "components": "V, S, M"
    },
    {
      "name": "Gaseous Form",
      "link": "http://dnd5e.wikidot.com/spell:gaseous-form",
      "school": "Transmutation",
      "castingTime": "1 Action",
      "range": "Touch",
      "duration": "Concentration, up to 1 hour",
      "components": "V, S, M"
    },
    {
      "name": "Glyph of Warding",
      "link": "http://dnd5e.wikidot.com/spell:glyph-of-warding",
      "school": "Abjuration",
      "castingTime": "1 Hour",
      "range": "Touch",
      "duration": "Until dispelled or triggered",
      "components": "V, S, M"
    },
    {
      "name": "Haste",
      "link": "http://dnd5e.wikidot.com/spell:haste",
      "school": "Transmutation",
      "castingTime": "1 Action",
      "range": "30 feet",
      "duration": "Concentration, up to 1 minute",
      "components": "V, S, M"
    },
    {
      "name": "Haywire (UA)",
      "link": "http://dnd5e.wikidot.com/spell:haywire",
      "school": "Enchantment T",
      "castingTime": "1 Action",
      "range": "90 feet",
      "duration": "Concentration, up to 1 minute",
      "components": "V, S"
    },
    {
      "name": "House of Cards (UA)",
      "link": "http://dnd5e.wikidot.com/spell:house-of-cards-ua",
      "school": "Conjuration",
      "castingTime": "1 Minute",
      "range": "Touch",
      "duration": "24 hours",
      "components": "V, S, M"
    },
    {
      "name": "Hunger Of Hadar",
      "link": "http://dnd5e.wikidot.com/spell:hunger-of-hadar",
      "school": "Conjuration",
      "castingTime": "1 Action",
      "range": "150 feet",
      "duration": "Concentration, up to 1 minute",
      "components": "V, S, M"
    },
    {
      "name": "Hypnotic Pattern",
      "link": "http://dnd5e.wikidot.com/spell:hypnotic-pattern",
      "school": "Illusion",
      "castingTime": "1 Action",
      "range": "120 feet",
      "duration": "Concentration, up to 1 minute",
      "components": "S, M"
    },
    {
      "name": "Incite Greed",
      "link": "http://dnd5e.wikidot.com/spell:incite-greed",
      "school": "Enchantment",
      "castingTime": "1 action",
      "range": "30 feet",
      "duration": "Concentration, up to 1 minute",
      "components": "V, S, M"
    },
    {
      "name": "Intellect Fortress",
      "link": "http://dnd5e.wikidot.com/spell:intellect-fortress",
      "school": "Abjuration",
      "castingTime": "1 Action",
      "range": "30 feet",
      "duration": "Concentration, up to 1 hour",
      "components": "V"
    },
    {
      "name": "Invisibility To Cameras (UA)",
      "link": "http://dnd5e.wikidot.com/spell:invisibility-to-cameras",
      "school": "Illusion T",
      "castingTime": "1 Action",
      "range": "10 feet",
      "duration": "Concentration, up to 1 minute",
      "components": "V, S, M"
    },
    {
      "name": "Leomund's Tiny Hut",
      "link": "http://dnd5e.wikidot.com/spell:leomunds-tiny-hut",
      "school": "Evocation",
      "castingTime": "1 Minute R",
      "range": "Self (10-foot radius hemisphere)",
      "duration": "8 hours",
      "components": "V, S, M"
    },
    {
      "name": "Life Transference",
      "link": "http://dnd5e.wikidot.com/spell:life-transference",
      "school": "Necromancy",
      "castingTime": "1 Action",
      "range": "30 feet",
      "duration": "Instantaneous",
      "components": "V, S"
    },
    {
      "name": "Lightning Arrow",
      "link": "http://dnd5e.wikidot.com/spell:lightning-arrow",
      "school": "Transmutation",
      "castingTime": "1 Bonus Action",
      "range": "Self",
      "duration": "Concentration, up to 1 minute",
      "components": "V, S"
    },
    {
      "name": "Lightning Bolt",
      "link": "http://dnd5e.wikidot.com/spell:lightning-bolt",
      "school": "Evocation",
      "castingTime": "1 Action",
      "range": "Self (100-foot line)",
      "duration": "Instantaneous",
      "components": "V, S, M"
    },
    {
      "name": "Magic Circle",
      "link": "http://dnd5e.wikidot.com/spell:magic-circle",
      "school": "Abjuration",
      "castingTime": "1 Minute",
      "range": "10 feet",
      "duration": "1 hour",
      "components": "V, S, M"
    },
    {
      "name": "Major Image",
      "link": "http://dnd5e.wikidot.com/spell:major-image",
      "school": "Illusion",
      "castingTime": "1 Action",
      "range": "120 feet",
      "duration": "Concentration, up to 10 minutes",
      "components": "V, S, M"
    },
    {
      "name": "Mass Healing Word",
      "link": "http://dnd5e.wikidot.com/spell:mass-healing-word",
      "school": "Evocation",
      "castingTime": "1 Bonus Action",
      "range": "60 feet",
      "duration": "Instantaneous",
      "components": "V"
    },
    {
      "name": "Meld into Stone",
      "link": "http://dnd5e.wikidot.com/spell:meld-into-stone",
      "school": "Transmutation",
      "castingTime": "1 Action R",
      "range": "Touch",
      "duration": "8 hours",
      "components": "V, S"
    },
    {
      "name": "Melf's Minute Meteors",
      "link": "http://dnd5e.wikidot.com/spell:melfs-minute-meteors",
      "school": "Evocation",
      "castingTime": "Self",
      "range": "120 feet",
      "duration": "Concentration, up to 10 minutes",
      "components": "V, S, M"
    },
    {
      "name": "Motivational Speech",
      "link": "http://dnd5e.wikidot.com/spell:motivational-speech",
      "school": "Enchantment",
      "castingTime": "1 hour",
      "range": "60 feet",
      "duration": "1 hour",
      "components": "V"
    },
    {
      "name": "Nondetection",
      "link": "http://dnd5e.wikidot.com/spell:nondetection",
      "school": "Abjuration",
      "castingTime": "1 Action",
      "range": "Touch",
      "duration": "8 hours",
      "components": "V, S, M"
    },
    {
      "name": "Phantom Steed",
      "link": "http://dnd5e.wikidot.com/spell:phantom-steed",
      "school": "Illusion",
      "castingTime": "1 Minute R",
      "range": "30 feet",
      "duration": "1 hour",
      "components": "V, S"
    },
    {
      "name": "Plant Growth",
      "link": "http://dnd5e.wikidot.com/spell:plant-growth",
      "school": "Transmutation",
      "castingTime": "1 Action or 8 Hours",
      "range": "150 feet",
      "duration": "Instantaneous",
      "components": "V, S"
    },
    {
      "name": "Protection from Ballistics (UA)",
      "link": "http://dnd5e.wikidot.com/spell:protection-from-ballistics",
      "school": "Abjuration T",
      "castingTime": "1 Action",
      "range": "Touch",
      "duration": "Concentration, up to 10 minutes",
      "components": "V, S, M"
    },
    {
      "name": "Protection from Energy",
      "link": "http://dnd5e.wikidot.com/spell:protection-from-energy",
      "school": "Abjuration",
      "castingTime": "1 Action",
      "range": "Touch",
      "duration": "Concentration, up to 1 hour",
      "components": "V, S"
    },
    {
      "name": "Psionic Blast (UA)",
      "link": "http://dnd5e.wikidot.com/spell:psionic-blast",
      "school": "Evocation",
      "castingTime": "1 Action",
      "range": "Self (30-foot cone)",
      "duration": "Instantaneous",
      "components": "V"
    },
    {
      "name": "Pulse Wave",
      "link": "http://dnd5e.wikidot.com/spell:pulse-wave",
      "school": "Evocation D",
      "castingTime": "1 Action",
      "range": "Self (30-foot cone)",
      "duration": "Instantaneous",
      "components": "V, S"
    },
    {
      "name": "Remove Curse",
      "link": "http://dnd5e.wikidot.com/spell:remove-curse",
      "school": "Abjuration",
      "castingTime": "1 Action",
      "range": "Touch",
      "duration": "Instantaneous",
      "components": "V, S"
    },
    {
      "name": "Revivify",
      "link": "http://dnd5e.wikidot.com/spell:revivify",
      "school": "Necromancy",
      "castingTime": "1 Action",
      "range": "Touch",
      "duration": "Instantaneous",
      "components": "V, S, M"
    },
    {
      "name": "Sending",
      "link": "http://dnd5e.wikidot.com/spell:sending",
      "school": "Evocation",
      "castingTime": "1 Action",
      "range": "Unlimited",
      "duration": "1 round",
      "components": "V, S, M"
    },
    {
      "name": "Sleet Storm",
      "link": "http://dnd5e.wikidot.com/spell:sleet-storm",
      "school": "Conjuration",
      "castingTime": "1 Action",
      "range": "120 feet",
      "duration": "Concentration, up to 1 minute",
      "components": "V, S, M"
    },
    {
      "name": "Slow",
      "link": "http://dnd5e.wikidot.com/spell:slow",
      "school": "Transmutation",
      "castingTime": "1 Action",
      "range": "120 feet",
      "duration": "Concentration, up to 1 minute",
      "components": "V, S, M"
    },
    {
      "name": "Speak with Dead",
      "link": "http://dnd5e.wikidot.com/spell:speak-with-dead",
      "school": "Necromancy",
      "castingTime": "1 Action",
      "range": "10 feet",
      "duration": "10 minutes",
      "components": "V, S, M"
    },
    {
      "name": "Speak with Plants",
      "link": "http://dnd5e.wikidot.com/spell:speak-with-plants",
      "school": "Transmutation",
      "castingTime": "1 Action",
      "range": "Self (30-foot radius)",
      "duration": "10 minutes",
      "components": "V, S"
    },
    {
      "name": "Spirit Guardians",
      "link": "http://dnd5e.wikidot.com/spell:spirit-guardians",
      "school": "Conjuration",
      "castingTime": "1 Action",
      "range": "Self (15-foot radius)",
      "duration": "Concentration, up to 10 minutes",
      "components": "V, S, M"
    },
    {
      "name": "Spirit Shroud",
      "link": "http://dnd5e.wikidot.com/spell:spirit-shroud",
      "school": "Necromancy",
      "castingTime": "1 Bonus Action",
      "range": "Self",
      "duration": "Concentration, up to 1 minute",
      "components": "V, S"
    },
    {
      "name": "Stinking Cloud",
      "link": "http://dnd5e.wikidot.com/spell:stinking-cloud",
      "school": "Conjuration",
      "castingTime": "1 Action",
      "range": "90 feet",
      "duration": "Concentration, up to 1 minute",
      "components": "V, S, M"
    },
    {
      "name": "Summon Fey",
      "link": "http://dnd5e.wikidot.com/spell:summon-fey",
      "school": "Conjuration",
      "castingTime": "1 Action",
      "range": "90 feet",
      "duration": "Concentration, up to 1 hour",
      "components": "V, S, M"
    },
    {
      "name": "Summon Lesser Demons",
      "link": "http://dnd5e.wikidot.com/spell:summon-lesser-demons",
      "school": "Conjuration",
      "castingTime": "1 Action",
      "range": "60 Feet",
      "duration": "Concentration, up to 1 hour",
      "components": "V, S, M"
    },
    {
      "name": "Summon Shadowspawn",
      "link": "http://dnd5e.wikidot.com/spell:summon-shadowspawn",
      "school": "Conjuration",
      "castingTime": "1 Action",
      "range": "90 feet",
      "duration": "Concentration, up to 1 hour",
      "components": "V, S, M"
    },
    {
      "name": "Summon Undead",
      "link": "http://dnd5e.wikidot.com/spell:summon-undead",
      "school": "Necromancy",
      "castingTime": "1 Action",
      "range": "90 feet",
      "duration": "Concentration, up to 1 hour",
      "components": "V, S, M"
    },
    {
      "name": "Summon Warrior Spirit (UA)",
      "link": "http://dnd5e.wikidot.com/spell:summon-warrior-spirit",
      "school": "Conjuration",
      "castingTime": "1 Action",
      "range": "90 feet",
      "duration": "Concentration, up to 1 hour",
      "components": "V, S, M"
    },
    {
      "name": "Thunder Step",
      "link": "http://dnd5e.wikidot.com/spell:thunder-step",
      "school": "Conjuration",
      "castingTime": "1 Action",
      "range": "90 feet",
      "duration": "Instantaneous",
      "components": "V"
    },
    {
      "name": "Tidal Wave",
      "link": "http://dnd5e.wikidot.com/spell:tidal-wave",
      "school": "Conjuration",
      "castingTime": "1 Action",
      "range": "120 feet",
      "duration": "Instantaneous",
      "components": "V, S, M"
    },
    {
      "name": "Tiny Servant",
      "link": "http://dnd5e.wikidot.com/spell:tiny-servant",
      "school": "Transmutation",
      "castingTime": "1 Minute",
      "range": "Touch",
      "duration": "8 hours",
      "components": "V, S"
    },
    {
      "name": "Tongues",
      "link": "http://dnd5e.wikidot.com/spell:tongues",
      "school": "Divination",
      "castingTime": "1 Action",
      "range": "Touch",
      "duration": "1 hour",
      "components": "V, M"
    },
    {
      "name": "Vampiric Touch",
      "link": "http://dnd5e.wikidot.com/spell:vampiric-touch",
      "school": "Necromancy",
      "castingTime": "1 Action",
      "range": "Self",
      "duration": "Concentration, up to 1 minute",
      "components": "V, S"
    },
    {
      "name": "Wall of Sand",
      "link": "http://dnd5e.wikidot.com/spell:wall-of-sand",
      "school": "Evocation",
      "castingTime": "1 Action",
      "range": "90 feet",
      "duration": "Concentration, up to 10 minutes",
      "components": "V, S, M"
    },
    {
      "name": "Wall of Water",
      "link": "http://dnd5e.wikidot.com/spell:wall-of-water",
      "school": "Evocation",
      "castingTime": "1 Action",
      "range": "60 feet",
      "duration": "Concentration, up to 10 minutes",
      "components": "V, S, M"
    },
    {
      "name": "Water Breathing",
      "link": "http://dnd5e.wikidot.com/spell:water-breathing",
      "school": "Transmutation",
      "castingTime": "1 Action R",
      "range": "30 feet",
      "duration": "24 hours",
      "components": "V, S, M"
    },
    {
      "name": "Water Walk",
      "link": "http://dnd5e.wikidot.com/spell:water-walk",
      "school": "Transmutation",
      "castingTime": "1 Action R",
      "range": "30 feet",
      "duration": "1 hour",
      "components": "V, S, M"
    },
    {
      "name": "Wind Wall",
      "link": "http://dnd5e.wikidot.com/spell:wind-wall",
      "school": "Evocation",
      "castingTime": "1 Action",
      "range": "120 feet",
      "duration": "Concentration, up to 1 minute",
      "components": "V, S, M"
    },
];
const levelFour = [
    {
      "name": "Arcane Eye",
      "link": "http://dnd5e.wikidot.com/spell:arcane-eye",
      "school": "Divination",
      "castingTime": "1 Action",
      "range": "30 feet",
      "duration": "Concentration, up to 1 hour",
      "components": "V, S, M"
    },
    {
      "name": "Aura of Life",
      "link": "http://dnd5e.wikidot.com/spell:aura-of-life",
      "school": "Abjuration",
      "castingTime": "1 Action",
      "range": "Self (30-foot radius)",
      "duration": "Concentration, up to 10 minutes",
      "components": "V"
    },
    {
      "name": "Aura of Purity",
      "link": "http://dnd5e.wikidot.com/spell:aura-of-purity",
      "school": "Abjuration",
      "castingTime": "1 Action",
      "range": "Self (30-foot radius)",
      "duration": "Concentration, up to 10 minutes",
      "components": "V"
    },
    {
      "name": "Banishment",
      "link": "http://dnd5e.wikidot.com/spell:banishment",
      "school": "Abjuration",
      "castingTime": "1 Action",
      "range": "60 feet",
      "duration": "Concentration, up to 1 minutes",
      "components": "V, S, M"
    },
    {
      "name": "Blight",
      "link": "http://dnd5e.wikidot.com/spell:blight",
      "school": "Necromancy",
      "castingTime": "1 Action",
      "range": "30 feet",
      "duration": "Instantaneous",
      "components": "V, S"
    },
    {
      "name": "Charm Monster",
      "link": "http://dnd5e.wikidot.com/spell:charm-monster",
      "school": "Enchantment",
      "castingTime": "1 Action",
      "range": "30 feet",
      "duration": "1 hour",
      "components": "V, S"
    },
    {
      "name": "Compulsion",
      "link": "http://dnd5e.wikidot.com/spell:compulsion",
      "school": "Enchantment",
      "castingTime": "1 Action",
      "range": "30 feet",
      "duration": "Concentration, up to 1 minute",
      "components": "V, S"
    },
    {
      "name": "Confusion",
      "link": "http://dnd5e.wikidot.com/spell:confusion",
      "school": "Enchantment",
      "castingTime": "1 Action",
      "range": "90 feet",
      "duration": "Concentration, up to 1 minute",
      "components": "V, S, M"
    },
    {
      "name": "Conjure Barlgura (UA)",
      "link": "http://dnd5e.wikidot.com/spell:conjure-barlgura",
      "school": "Conjuration",
      "castingTime": "1 Action",
      "range": "60 feet",
      "duration": "Up to 10 minutes",
      "components": "V, S"
    },
    {
      "name": "Conjure Knowbot (UA)",
      "link": "http://dnd5e.wikidot.com/spell:conjure-knowbot",
      "school": "Conjuration T",
      "castingTime": "1 Action",
      "range": "Touch",
      "duration": "10 minutes",
      "components": "V, S"
    },
    {
      "name": "Conjure Minor Elementals",
      "link": "http://dnd5e.wikidot.com/spell:conjure-minor-elementals",
      "school": "Conjuration",
      "castingTime": "1 Minute",
      "range": "90 feet",
      "duration": "Concentration, up to 1 hour",
      "components": "V, S"
    },
    {
      "name": "Conjure Shadow Demon (UA)",
      "link": "http://dnd5e.wikidot.com/spell:conjure-shadow-demon",
      "school": "Conjuration",
      "castingTime": "1 Action",
      "range": "60 feet",
      "duration": "Concentration, up to 1 hour",
      "components": "V, S, M"
    },
    {
      "name": "Conjure Woodland Beings",
      "link": "http://dnd5e.wikidot.com/spell:conjure-woodland-beings",
      "school": "Conjuration",
      "castingTime": "1 Action",
      "range": "60 feet",
      "duration": "Concentration, up to 1 hour",
      "components": "V, S, M"
    },
    {
      "name": "Control Water",
      "link": "http://dnd5e.wikidot.com/spell:control-water",
      "school": "Transmutation",
      "castingTime": "1 Action",
      "range": "300 feet",
      "duration": "Concentration, up to 10 minutes",
      "components": "V, S, M"
    },
    {
      "name": "Death Ward",
      "link": "http://dnd5e.wikidot.com/spell:death-ward",
      "school": "Abjuration",
      "castingTime": "1 Action",
      "range": "Touch",
      "duration": "8 hours",
      "components": "V, S"
    },
    {
      "name": "Dimension Door",
      "link": "http://dnd5e.wikidot.com/spell:dimension-door",
      "school": "Conjuration",
      "castingTime": "1 Action",
      "range": "500 feet",
      "duration": "Instantaneous",
      "components": "V"
    },
    {
      "name": "Divination",
      "link": "http://dnd5e.wikidot.com/spell:divination",
      "school": "Divination",
      "castingTime": "1 Action R",
      "range": "Self",
      "duration": "Instantaneous",
      "components": "V, S, M"
    },
    {
      "name": "Dominate Beast",
      "link": "http://dnd5e.wikidot.com/spell:dominate-beast",
      "school": "Enchantment",
      "castingTime": "1 Action",
      "range": "60 feet",
      "duration": "Concentration, up to 1 minute",
      "components": "V, S"
    },
    {
      "name": "Ego Whip (UA)",
      "link": "http://dnd5e.wikidot.com/spell:ego-whip",
      "school": "Enchantment",
      "castingTime": "1 Action",
      "range": "30 feet",
      "duration": "Concentration, up to 1 minute",
      "components": "V"
    },
    {
      "name": "Elemental Bane",
      "link": "http://dnd5e.wikidot.com/spell:elemental-bane",
      "school": "Transmutation",
      "castingTime": "1 Action",
      "range": "90 feet",
      "duration": "Concentration, up to 1 minute",
      "components": "V, S"
    },
    {
      "name": "Evard's Black Tentacles",
      "link": "http://dnd5e.wikidot.com/spell:evards-black-tentacles",
      "school": "Conjuration",
      "castingTime": "1 Action",
      "range": "90 feet",
      "duration": "Concentration, up to 1 minute",
      "components": "V, S, M"
    },
    {
      "name": "Fabricate",
      "link": "http://dnd5e.wikidot.com/spell:fabricate",
      "school": "Transmutation",
      "castingTime": "10 Minutes",
      "range": "120 feet",
      "duration": "Instantaneous",
      "components": "V, S"
    },
    {
      "name": "Find Greater Steed",
      "link": "http://dnd5e.wikidot.com/spell:find-greater-steed",
      "school": "Conjuration",
      "castingTime": "10 Minutes",
      "range": "30 feet",
      "duration": "Instantaneous",
      "components": "V, S"
    },
    {
      "name": "Fire Shield",
      "link": "http://dnd5e.wikidot.com/spell:fire-shield",
      "school": "Evocation",
      "castingTime": "1 Action",
      "range": "Self",
      "duration": "10 minutes",
      "components": "V, S, M"
    },
    {
      "name": "Freedom of Movement",
      "link": "http://dnd5e.wikidot.com/spell:freedom-of-movement",
      "school": "Abjuration",
      "castingTime": "1 Action",
      "range": "Touch",
      "duration": "1 hour",
      "components": "V, S, M"
    },
    {
      "name": "Galder's Speedy Courier",
      "link": "http://dnd5e.wikidot.com/spell:galders-speedy-courier",
      "school": "Conjuration",
      "castingTime": "1 Action",
      "range": "10 feet",
      "duration": "10 minutes",
      "components": "V, S, M"
    },
    {
      "name": "Gate Seal",
      "link": "http://dnd5e.wikidot.com/spell:gate-seal",
      "school": "Abjuration",
      "castingTime": "1 Minute",
      "range": "60 feet",
      "duration": "24 hours",
      "components": "V, S, M"
    },
    {
      "name": "Giant Insect",
      "link": "http://dnd5e.wikidot.com/spell:giant-insect",
      "school": "Transmutation",
      "castingTime": "1 Action",
      "range": "30 feet",
      "duration": "Concentration, up to 10 minutes",
      "components": "V, S"
    },
    {
      "name": "Grasping Vine",
      "link": "http://dnd5e.wikidot.com/spell:grasping-vine",
      "school": "Conjuration",
      "castingTime": "1 Bonus Action",
      "range": "30 feet",
      "duration": "Concentration, up to 1 minute",
      "components": "V, S"
    },
    {
      "name": "Gravity Sinkhole",
      "link": "http://dnd5e.wikidot.com/spell:gravity-sinkhole",
      "school": "Evocation DG",
      "castingTime": "1 Action",
      "range": "120 feet",
      "duration": "Instantaneous",
      "components": "V, S, M"
    },
    {
      "name": "Greater Invisibility",
      "link": "http://dnd5e.wikidot.com/spell:greater-invisibility",
      "school": "Illusion",
      "castingTime": "1 Action",
      "range": "Touch",
      "duration": "Concentration, up to 1 minute",
      "components": "V, S"
    },
    {
      "name": "Guardian of Faith",
      "link": "http://dnd5e.wikidot.com/spell:guardian-of-faith",
      "school": "Conjuration",
      "castingTime": "1 Action",
      "range": "30 feet",
      "duration": "8 hours",
      "components": "V"
    },
    {
      "name": "Guardian of Nature",
      "link": "http://dnd5e.wikidot.com/spell:guardian-of-nature",
      "school": "Transmutation",
      "castingTime": "1 Bonus Action",
      "range": "Self",
      "duration": "Concentration, up to 1 minute",
      "components": "V"
    },
    {
      "name": "Hallucinatory Terrain",
      "link": "http://dnd5e.wikidot.com/spell:hallucinatory-terrain",
      "school": "Illusion",
      "castingTime": "10 Minutes",
      "range": "300 feet",
      "duration": "24 hours",
      "components": "V, S, M"
    },
    {
      "name": "Ice Storm",
      "link": "http://dnd5e.wikidot.com/spell:ice-storm",
      "school": "Evocation",
      "castingTime": "1 Action",
      "range": "300 feet",
      "duration": "Instantaneous",
      "components": "V, S, M"
    },
    {
      "name": "Leomund's Secret Chest",
      "link": "http://dnd5e.wikidot.com/spell:leomunds-secret-chest",
      "school": "Conjuration",
      "castingTime": "1 Action",
      "range": "Touch",
      "duration": "Instantaneous",
      "components": "V, S, M"
    },
    {
      "name": "Locate Creature",
      "link": "http://dnd5e.wikidot.com/spell:locate-creature",
      "school": "Divination",
      "castingTime": "1 Action",
      "range": "Self",
      "duration": "Concentration, up to 1 hour",
      "components": "V, S, M"
    },
    {
      "name": "Mordenkainen's Faithful Hound",
      "link": "http://dnd5e.wikidot.com/spell:mordenkainens-faithful-hound",
      "school": "Conjuration",
      "castingTime": "1 Action",
      "range": "30 feet",
      "duration": "8 hours",
      "components": "V, S, M"
    },
    {
      "name": "Mordenkainen's Private Sanctum",
      "link": "http://dnd5e.wikidot.com/spell:mordenkainens-private-sanctum",
      "school": "Abjuration",
      "castingTime": "1 Action",
      "range": "120 feet",
      "duration": "24 hours",
      "components": "V, S, M"
    },
    {
      "name": "Otiluke's Resilient Sphere",
      "link": "http://dnd5e.wikidot.com/spell:otilukes-resilient-sphere",
      "school": "Evocation",
      "castingTime": "1 Action",
      "range": "30 feet",
      "duration": "Concentration, up to 1 minute",
      "components": "V, S, M"
    },
    {
      "name": "Phantasmal Killer",
      "link": "http://dnd5e.wikidot.com/spell:phantasmal-killer",
      "school": "Illusion",
      "castingTime": "1 Action",
      "range": "120 feet",
      "duration": "Concentration, up to 1 minute",
      "components": "V, S"
    },
    {
      "name": "Polymorph",
      "link": "http://dnd5e.wikidot.com/spell:polymorph",
      "school": "Transmutation",
      "castingTime": "1 Action",
      "range": "60 feet",
      "duration": "Concentration, up to 1 hour",
      "components": "V, S, M"
    },
    {
      "name": "Raulothim's Psychic Lance",
      "link": "http://dnd5e.wikidot.com/spell:raulothims-psychic-lance",
      "school": "Enchantment",
      "castingTime": "1 Action",
      "range": "120 feet",
      "duration": "Instantaneous",
      "components": "V"
    },
    {
      "name": "Raulothim's Psychic Lance (UA)",
      "link": "http://dnd5e.wikidot.com/spell:raulothims-psychic-lance-ua",
      "school": "Enchantment",
      "castingTime": "1 Action",
      "range": "120 feet",
      "duration": "Instantaneous",
      "components": "V"
    },
    {
      "name": "Shadow Of Moil",
      "link": "http://dnd5e.wikidot.com/spell:shadow-of-moil",
      "school": "Necromancy",
      "castingTime": "1 Action",
      "range": "Self",
      "duration": "Concentration, up to 1 minute",
      "components": "V, S, M"
    },
    {
      "name": "Sickening Radiance",
      "link": "http://dnd5e.wikidot.com/spell:sickening-radiance",
      "school": "Evocation",
      "castingTime": "1 Action",
      "range": "120 Feet",
      "duration": "Concentration, up to 10 minutes",
      "components": "V, S"
    },
    {
      "name": "Spirit Of Death",
      "link": "http://dnd5e.wikidot.com/spell:spirit-of-death",
      "school": "Necromancy",
      "castingTime": "1 Action",
      "range": "60 feet",
      "duration": "Concentration, up to 1 hour",
      "components": "V, S, M"
    },
    {
      "name": "Spirit of Death (UA)",
      "link": "http://dnd5e.wikidot.com/spell:spirit-of-death-ua",
      "school": "Necromancy",
      "castingTime": "1 Action",
      "range": "60 feet",
      "duration": "Concentration, up to 1 minute",
      "components": "V, S, M"
    },
    {
      "name": "Staggering Smite",
      "link": "http://dnd5e.wikidot.com/spell:staggering-smite",
      "school": "Evocation",
      "castingTime": "1 Bonus Action",
      "range": "Self",
      "duration": "Concentration, up to 1 minute",
      "components": "V"
    },
    {
      "name": "Stone Shape",
      "link": "http://dnd5e.wikidot.com/spell:stone-shape",
      "school": "Transmutation",
      "castingTime": "1 Action",
      "range": "Touch",
      "duration": "Instantaneous",
      "components": "V, S, M"
    },
    {
      "name": "Stoneskin",
      "link": "http://dnd5e.wikidot.com/spell:stoneskin",
      "school": "Abjuration",
      "castingTime": "1 Action",
      "range": "Touch",
      "duration": "Concentration, up to 1 hour",
      "components": "V, S, M"
    },
    {
      "name": "Storm Sphere",
      "link": "http://dnd5e.wikidot.com/spell:storm-sphere",
      "school": "Evocation",
      "castingTime": "1 Action",
      "range": "150 feet",
      "duration": "Concentration, up to 1 minute",
      "components": "V, S"
    },
    {
      "name": "Summon Aberration",
      "link": "http://dnd5e.wikidot.com/spell:summon-aberration",
      "school": "Conjuration",
      "castingTime": "1 Action",
      "range": "90 feet",
      "duration": "Concentration, up to 1 hour",
      "components": "V, S, M"
    },
    {
      "name": "Summon Construct",
      "link": "http://dnd5e.wikidot.com/spell:summon-construct",
      "school": "Conjuration",
      "castingTime": "1 Action",
      "range": "90 feet",
      "duration": "Concentration, up to 1 hour",
      "components": "V, S, M"
    },
    {
      "name": "Summon Elemental",
      "link": "http://dnd5e.wikidot.com/spell:summon-elemental",
      "school": "Conjuration",
      "castingTime": "1 Action",
      "range": "90 feet",
      "duration": "Concentration, up to 1 hour",
      "components": "V, S, M"
    },
    {
      "name": "Summon Greater Demon",
      "link": "http://dnd5e.wikidot.com/spell:summon-greater-demon",
      "school": "Conjuration",
      "castingTime": "1 Action",
      "range": "60 Feet",
      "duration": "Concentration, up to 1 hour",
      "components": "V, S, M"
    },
    {
      "name": "Synchronicity (UA)",
      "link": "http://dnd5e.wikidot.com/spell:synchronicity",
      "school": "Enchantment T",
      "castingTime": "1 Action",
      "range": "Touch",
      "duration": "Concentration, up to 1 hour",
      "components": "V, S"
    },
    {
      "name": "System Backdoor (UA)",
      "link": "http://dnd5e.wikidot.com/spell:system-backdoor",
      "school": "Transmutation T",
      "castingTime": "1 Minute",
      "range": "Self",
      "duration": "Concentration, up to 1 hour",
      "components": "V, S, M"
    },
    {
      "name": "Vitriolic Sphere",
      "link": "http://dnd5e.wikidot.com/spell:vitriolic-sphere",
      "school": "Evocation",
      "castingTime": "1 Action",
      "range": "150 feet",
      "duration": "Instantaneous",
      "components": "V, S, M"
    },
    {
      "name": "Wall of Fire",
      "link": "http://dnd5e.wikidot.com/spell:wall-of-fire",
      "school": "Evocation",
      "castingTime": "1 Action",
      "range": "120 feet",
      "duration": "Concentration, up to 1 minute",
      "components": "V, S, M"
    },
    {
      "name": "Watery Sphere",
      "link": "http://dnd5e.wikidot.com/spell:watery-sphere",
      "school": "Conjuration",
      "castingTime": "1 Action",
      "range": "90 feet",
      "duration": "Concentration, up to 1 minute",
      "components": "V, S, M"
    },
    {
      "name": "Widogast's Vault of Amber (HB)",
      "link": "http://dnd5e.wikidot.com/spell:widogast-s-vault-of-amber-hb",
      "school": "Transmutation",
      "castingTime": "1 minute R",
      "range": "Touch",
      "duration": "Until dispelled",
      "components": "V, S, M"
    },
    {
      "name": "Widogast's Web of Fire (HB)",
      "link": "http://dnd5e.wikidot.com/spell:widogast-s-web-of-fire-hb",
      "school": "Evocation",
      "castingTime": "1 Action",
      "range": "60 feet",
      "duration": "Instantaneous",
      "components": "V, S, M"
    },
];
const levelFive = [
    {
      "name": "Animate Objects",
      "link": "http://dnd5e.wikidot.com/spell:animate-objects",
      "school": "Transmutation",
      "castingTime": "1 Action",
      "range": "120 feet",
      "duration": "Concentration, up to 1 minute",
      "components": "V, S"
    },
    {
      "name": "Antilife Shell",
      "link": "http://dnd5e.wikidot.com/spell:antilife-shell",
      "school": "Abjuration",
      "castingTime": "1 Action",
      "range": "Self (10-foot radius)",
      "duration": "Concentration, up to 1 hour",
      "components": "V, S"
    },
    {
      "name": "Awaken",
      "link": "http://dnd5e.wikidot.com/spell:awaken",
      "school": "Transmutation",
      "castingTime": "8 Hours",
      "range": "Touch",
      "duration": "Instantaneous",
      "components": "V, S, M"
    },
    {
      "name": "Banishing Smite",
      "link": "http://dnd5e.wikidot.com/spell:banishing-smite",
      "school": "Abjuration",
      "castingTime": "1 Bonus Action",
      "range": "Self",
      "duration": "Concentration, up to 1 minute",
      "components": "V"
    },
    {
      "name": "Bigby's Hand",
      "link": "http://dnd5e.wikidot.com/spell:bigbys-hand",
      "school": "Evocation",
      "castingTime": "1 Action",
      "range": "120 feet",
      "duration": "Concentration, up to 1 minute",
      "components": "V, S, M"
    },
    {
      "name": "Circle of Power",
      "link": "http://dnd5e.wikidot.com/spell:circle-of-power",
      "school": "Abjuration",
      "castingTime": "1 Action",
      "range": "Self (30-foot radius)",
      "duration": "Concentration, up to 10 minutes",
      "components": "V"
    },
    {
      "name": "Cloudkill",
      "link": "http://dnd5e.wikidot.com/spell:cloudkill",
      "school": "Conjuration",
      "castingTime": "1 Action",
      "range": "120 feet",
      "duration": "Concentration, up to 10 minutes",
      "components": "V, S"
    },
    {
      "name": "Commune",
      "link": "http://dnd5e.wikidot.com/spell:commune",
      "school": "Divination",
      "castingTime": "1 Minute R",
      "range": "Self",
      "duration": "1 minute",
      "components": "V, S, M"
    },
    {
      "name": "Commune with City (UA)",
      "link": "http://dnd5e.wikidot.com/spell:commune-with-city",
      "school": "Divination T",
      "castingTime": "1 Minute R",
      "range": "Self",
      "duration": "Instantaneous",
      "components": "V, S"
    },
    {
      "name": "Commune with Nature",
      "link": "http://dnd5e.wikidot.com/spell:commune-with-nature",
      "school": "Divination",
      "castingTime": "1 Minute R",
      "range": "Self",
      "duration": "Instantaneous",
      "components": "V, S"
    },
    {
      "name": "Cone of Cold",
      "link": "http://dnd5e.wikidot.com/spell:cone-of-cold",
      "school": "Evocation",
      "castingTime": "1 Action",
      "range": "Self (60-foot cone)",
      "duration": "Instantaneous",
      "components": "V, S, M"
    },
    {
      "name": "Conjure Elemental",
      "link": "http://dnd5e.wikidot.com/spell:conjure-elemental",
      "school": "Conjuration",
      "castingTime": "1 Action",
      "range": "90 feet",
      "duration": "Concentration, up to 1 hour",
      "components": "V, S, M"
    },
    {
      "name": "Conjure Volley",
      "link": "http://dnd5e.wikidot.com/spell:conjure-volley",
      "school": "Conjuration",
      "castingTime": "1 Action",
      "range": "150 feet",
      "duration": "Instantaneous",
      "components": "V, S, M"
    },
    {
      "name": "Conjure Vrock (UA)",
      "link": "http://dnd5e.wikidot.com/spell:conjure-vrock",
      "school": "Conjuration",
      "castingTime": "1 Action",
      "range": "60 feet",
      "duration": "Concentration, up to 1 hour",
      "components": "V, S, M"
    },
    {
      "name": "Contact Other Plane",
      "link": "http://dnd5e.wikidot.com/spell:contact-other-plane",
      "school": "Divination",
      "castingTime": "1 Minute R",
      "range": "Self",
      "duration": "1 minute",
      "components": "V"
    },
    {
      "name": "Contagion",
      "link": "http://dnd5e.wikidot.com/spell:contagion",
      "school": "Necromancy",
      "castingTime": "1 Action",
      "range": "Touch",
      "duration": "7 days",
      "components": "V, S"
    },
    {
      "name": "Control Winds",
      "link": "http://dnd5e.wikidot.com/spell:control-winds",
      "school": "Transmutation",
      "castingTime": "1 Action",
      "range": "300 feet",
      "duration": "Concentration, up to 1 hour",
      "components": "V, S"
    },
    {
      "name": "Create Spelljamming Helm",
      "link": "http://dnd5e.wikidot.com/spell:create-spelljamming-helm",
      "school": "Transmutation",
      "castingTime": "1 Action",
      "range": "Touch",
      "duration": "Instantaneous",
      "components": "V,S,M"
    },
    {
      "name": "Creation",
      "link": "http://dnd5e.wikidot.com/spell:creation",
      "school": "Illusion",
      "castingTime": "1 Minute",
      "range": "30 feet",
      "duration": "Special",
      "components": "V, S, M"
    },
    {
      "name": "Danse Macabre",
      "link": "http://dnd5e.wikidot.com/spell:danse-macabre",
      "school": "Necromancy",
      "castingTime": "1 Action",
      "range": "60 Feet",
      "duration": "Concentration, up to 1 hour",
      "components": "V, S"
    },
    {
      "name": "Dawn",
      "link": "http://dnd5e.wikidot.com/spell:dawn",
      "school": "Evocation",
      "castingTime": "1 Action",
      "range": "60 Feet",
      "duration": "Concentration, up to 1 minute",
      "components": "V, S, M"
    },
    {
      "name": "Destructive Wave",
      "link": "http://dnd5e.wikidot.com/spell:destructive-wave",
      "school": "Evocation",
      "castingTime": "1 Action",
      "range": "Self (30-foot radius)",
      "duration": "Instantaneous",
      "components": "V"
    },
    {
      "name": "Dispel Evil and Good",
      "link": "http://dnd5e.wikidot.com/spell:dispel-evil-and-good",
      "school": "Abjuration",
      "castingTime": "1 Action",
      "range": "Self",
      "duration": "Concentration, up to 1 minute",
      "components": "V, S, M"
    },
    {
      "name": "Dominate Person",
      "link": "http://dnd5e.wikidot.com/spell:dominate-person",
      "school": "Enchantment",
      "castingTime": "1 Action",
      "range": "60 feet",
      "duration": "Concentration, up to 1 minute",
      "components": "V, S"
    },
    {
      "name": "Dream",
      "link": "http://dnd5e.wikidot.com/spell:dream",
      "school": "Illusion",
      "castingTime": "1 Minute",
      "range": "Special",
      "duration": "8 hours",
      "components": "V, S, M"
    },
    {
      "name": "Enervation",
      "link": "http://dnd5e.wikidot.com/spell:enervation",
      "school": "Necromancy",
      "castingTime": "1 Action",
      "range": "60 feet",
      "duration": "Concentration, up to 1 minute",
      "components": "V, S"
    },
    {
      "name": "Far Step",
      "link": "http://dnd5e.wikidot.com/spell:far-step",
      "school": "Conjuration",
      "castingTime": "1 Bonus Action",
      "range": "Self",
      "duration": "Concentration, up to 1 minute",
      "components": "V"
    },
    {
      "name": "Flame Strike",
      "link": "http://dnd5e.wikidot.com/spell:flame-strike",
      "school": "Evocation",
      "castingTime": "1 Action",
      "range": "60 feet",
      "duration": "Instantaneous",
      "components": "V, S, M"
    },
    {
      "name": "Freedom of the Winds (HB)",
      "link": "http://dnd5e.wikidot.com/spell:freedom-of-the-winds",
      "school": "Abjuration HB",
      "castingTime": "1 action",
      "range": "Self",
      "duration": "Concentration up to 10 minutes",
      "components": "V, S, M"
    },
    {
      "name": "Geas",
      "link": "http://dnd5e.wikidot.com/spell:geas",
      "school": "Enchantment",
      "castingTime": "1 Minute",
      "range": "60 feet",
      "duration": "30 days",
      "components": "V"
    },
    {
      "name": "Greater Restoration",
      "link": "http://dnd5e.wikidot.com/spell:greater-restoration",
      "school": "Abjuration",
      "castingTime": "1 Action",
      "range": "Touch",
      "duration": "Instantaneous",
      "components": "V, S, M"
    },
    {
      "name": "Hallow",
      "link": "http://dnd5e.wikidot.com/spell:hallow",
      "school": "Evocation",
      "castingTime": "24 Hours",
      "range": "Touch",
      "duration": "Until dispelled",
      "components": "V, S, M"
    },
    {
      "name": "Hold Monster",
      "link": "http://dnd5e.wikidot.com/spell:hold-monster",
      "school": "Enchantment",
      "castingTime": "1 Action",
      "range": "90 feet",
      "duration": "Concentration, up to 1 minute",
      "components": "V, S, M"
    },
    {
      "name": "Holy Weapon",
      "link": "http://dnd5e.wikidot.com/spell:holy-weapon",
      "school": "Evocation",
      "castingTime": "1 Bonus Action",
      "range": "Touch",
      "duration": "Concentration, up to 1 hour",
      "components": "V, S"
    },
    {
      "name": "Immolation",
      "link": "http://dnd5e.wikidot.com/spell:immolation",
      "school": "Evocation",
      "castingTime": "1 Action",
      "range": "90 feet",
      "duration": "Concentration, up to 1 minute",
      "components": "V"
    },
    {
      "name": "Infernal Calling",
      "link": "http://dnd5e.wikidot.com/spell:infernal-calling",
      "school": "Conjuration",
      "castingTime": "1 Minute",
      "range": "90 feet",
      "duration": "Concentration, up to 1 hour",
      "components": "V, S, M"
    },
    {
      "name": "Insect Plague",
      "link": "http://dnd5e.wikidot.com/spell:insect-plague",
      "school": "Conjuration",
      "castingTime": "1 Action",
      "range": "300 feet",
      "duration": "Concentration, up to 10 minutes",
      "components": "V, S, M"
    },
    {
      "name": "Legend Lore",
      "link": "http://dnd5e.wikidot.com/spell:legend-lore",
      "school": "Divination",
      "castingTime": "10 Minutes",
      "range": "Self",
      "duration": "Instantaneous",
      "components": "V, S, M"
    },
    {
      "name": "Maelstrom",
      "link": "http://dnd5e.wikidot.com/spell:maelstrom",
      "school": "Evocation",
      "castingTime": "1 Action",
      "range": "120 feet",
      "duration": "Concentration, up to 1 minute",
      "components": "V, S, M"
    },
    {
      "name": "Mass Cure Wounds",
      "link": "http://dnd5e.wikidot.com/spell:mass-cure-wounds",
      "school": "Evocation",
      "castingTime": "1 Action",
      "range": "60 feet",
      "duration": "Instantaneous",
      "components": "V, S"
    },
    {
      "name": "Mislead",
      "link": "http://dnd5e.wikidot.com/spell:mislead",
      "school": "Illusion",
      "castingTime": "1 Action",
      "range": "Self",
      "duration": "Concentration, up to 1 hour",
      "components": "S"
    },
    {
      "name": "Modify Memory",
      "link": "http://dnd5e.wikidot.com/spell:modify-memory",
      "school": "Enchantment",
      "castingTime": "1 Action",
      "range": "30 feet",
      "duration": "Concentration, up to 1 minute",
      "components": "V, S"
    },
    {
      "name": "Negative Energy Flood",
      "link": "http://dnd5e.wikidot.com/spell:negative-energy-flood",
      "school": "Necromancy",
      "castingTime": "1 Action",
      "range": "60 feet",
      "duration": "Instantaneous",
      "components": "V, M"
    },
    {
      "name": "Passwall",
      "link": "http://dnd5e.wikidot.com/spell:passwall",
      "school": "Transmutation",
      "castingTime": "1 Action",
      "range": "30 feet",
      "duration": "1 hour",
      "components": "V, S, M"
    },
    {
      "name": "Planar Binding",
      "link": "http://dnd5e.wikidot.com/spell:planar-binding",
      "school": "Abjuration",
      "castingTime": "1 Hour",
      "range": "60 feet",
      "duration": "24 hours",
      "components": "V, S, M"
    },
    {
      "name": "Raise Dead",
      "link": "http://dnd5e.wikidot.com/spell:raise-dead",
      "school": "Necromancy",
      "castingTime": "1 Action",
      "range": "Touch",
      "duration": "Instantaneous",
      "components": "V, S, M"
    },
    {
      "name": "Rary's Telepathic Bond",
      "link": "http://dnd5e.wikidot.com/spell:rarys-telepathic-bond",
      "school": "Divination",
      "castingTime": "1 Action R",
      "range": "30 feet",
      "duration": "1 hour",
      "components": "V, S, M"
    },
    {
      "name": "Reincarnate",
      "link": "http://dnd5e.wikidot.com/spell:reincarnate",
      "school": "Transmutation",
      "castingTime": "1 Action",
      "range": "Touch",
      "duration": "Instantaneous",
      "components": "V, S, M"
    },
    {
      "name": "Scrying",
      "link": "http://dnd5e.wikidot.com/spell:scrying",
      "school": "Divination",
      "castingTime": "10 Minutes",
      "range": "Self",
      "duration": "Concentration, up to 10 minutes",
      "components": "V, S, M"
    },
    {
      "name": "Seeming",
      "link": "http://dnd5e.wikidot.com/spell:seeming",
      "school": "Illusion",
      "castingTime": "1 Action",
      "range": "30 feet",
      "duration": "8 hours",
      "components": "V, S"
    },
    {
      "name": "Shutdown (UA)",
      "link": "http://dnd5e.wikidot.com/spell:shutdown",
      "school": "Transmutation T",
      "castingTime": "1 Action",
      "range": "120 feet",
      "duration": "Concentration, up to 1 minute",
      "components": "V, S"
    },
    {
      "name": "Skill Empowerment",
      "link": "http://dnd5e.wikidot.com/spell:skill-empowerment",
      "school": "Transmutation",
      "castingTime": "1 Action",
      "range": "Touch",
      "duration": "Concentration, up to 1 hour",
      "components": "V, S"
    },
    {
      "name": "Steel Wind Strike",
      "link": "http://dnd5e.wikidot.com/spell:steel-wind-strike",
      "school": "Conjuration",
      "castingTime": "1 Action",
      "range": "30 feet",
      "duration": "Instantaneous",
      "components": "S, M"
    },
    {
      "name": "Summon Celestial",
      "link": "http://dnd5e.wikidot.com/spell:summon-celestial",
      "school": "Conjuration",
      "castingTime": "1 Action",
      "range": "90 feet",
      "duration": "Concentration, up to 1 hour",
      "components": "V, S, M"
    },
    {
      "name": "Summon Draconic Spirit",
      "link": "http://dnd5e.wikidot.com/spell:summon-draconic-spirit",
      "school": "Conjuration",
      "castingTime": "1 Action",
      "range": "60 feet",
      "duration": "Concentration, up to 1 hour",
      "components": "V, S, M"
    },
    {
      "name": "Summon Draconic Spirit (UA)",
      "link": "http://dnd5e.wikidot.com/spell:summon-draconic-spirit-ua",
      "school": "Conjuration",
      "castingTime": "1 Action",
      "range": "60 feet",
      "duration": "Concentration, up to 1 hour",
      "components": "V, S, M"
    },
    {
      "name": "Swift Quiver",
      "link": "http://dnd5e.wikidot.com/spell:swift-quiver",
      "school": "Transmutation",
      "castingTime": "1 Bonus Action",
      "range": "Touch",
      "duration": "Concentration, up to 1 minute",
      "components": "V, S, M"
    },
    {
      "name": "Synaptic Static",
      "link": "http://dnd5e.wikidot.com/spell:synaptic-static",
      "school": "Enchantment",
      "castingTime": "1 Action",
      "range": "120 feet",
      "duration": "Instantaneous",
      "components": "V, S"
    },
    {
      "name": "Telekinesis",
      "link": "http://dnd5e.wikidot.com/spell:telekinesis",
      "school": "Transmutation",
      "castingTime": "1 Action",
      "range": "60 feet",
      "duration": "Concentration, up to 10 minutes",
      "components": "V, S"
    },
    {
      "name": "Teleportation Circle",
      "link": "http://dnd5e.wikidot.com/spell:teleportation-circle",
      "school": "Conjuration",
      "castingTime": "1 Minute",
      "range": "10 feet",
      "duration": "1 round",
      "components": "V, M"
    },
    {
      "name": "Temporal Shunt",
      "link": "http://dnd5e.wikidot.com/spell:temporal-shunt",
      "school": "Transmutation DC",
      "castingTime": "1 Reaction",
      "range": "120 feet",
      "duration": "1 round",
      "components": "V, S"
    },
    {
      "name": "Transmute Rock",
      "link": "http://dnd5e.wikidot.com/spell:transmute-rock",
      "school": "Transmutation",
      "castingTime": "1 Action",
      "range": "120 feet",
      "duration": "Instantaneous",
      "components": "V, S, M"
    },
    {
      "name": "Tree Stride",
      "link": "http://dnd5e.wikidot.com/spell:tree-stride",
      "school": "Conjuration",
      "castingTime": "1 Action",
      "range": "Self",
      "duration": "Concentration, up to 1 minute",
      "components": "V, S"
    },
    {
      "name": "Wall of Force",
      "link": "http://dnd5e.wikidot.com/spell:wall-of-force",
      "school": "Evocation",
      "castingTime": "1 Action",
      "range": "120 feet",
      "duration": "Concentration, up to 10 minutes",
      "components": "V, S, M"
    },
    {
      "name": "Wall of Light",
      "link": "http://dnd5e.wikidot.com/spell:wall-of-light",
      "school": "Evocation",
      "castingTime": "1 Action",
      "range": "120 feet",
      "duration": "Concentration, up to 10 minutes",
      "components": "V, S, M"
    },
    {
      "name": "Wall of Stone",
      "link": "http://dnd5e.wikidot.com/spell:wall-of-stone",
      "school": "Evocation",
      "castingTime": "1 Action",
      "range": "120 feet",
      "duration": "Concentration, up to 10 minutes",
      "components": "V, S, M"
    },
    {
      "name": "Wrath Of Nature",
      "link": "http://dnd5e.wikidot.com/spell:wrath-of-nature",
      "school": "Evocation",
      "castingTime": "1 Action",
      "range": "120 feet",
      "duration": "Concentration, up to 1 minute",
      "components": "V, S"
    },
];
const levelSix = [
    {
      "name": "Arcane Gate",
      "link": "http://dnd5e.wikidot.com/spell:arcane-gate",
      "school": "Conjuration",
      "castingTime": "1 Action",
      "range": "500 feet",
      "duration": "Concentration, up to 10 minutes",
      "components": "V, S"
    },
    {
      "name": "Blade Barrier",
      "link": "http://dnd5e.wikidot.com/spell:blade-barrier",
      "school": "Evocation",
      "castingTime": "1 Action",
      "range": "90 feet",
      "duration": "Concentration, up to 10 minutes",
      "components": "V, S"
    },
    {
      "name": "Bones of the Earth",
      "link": "http://dnd5e.wikidot.com/spell:bones-of-the-earth",
      "school": "Transmutation",
      "castingTime": "1 Action",
      "range": "120 feet",
      "duration": "Instantaneous",
      "components": "V, S"
    },
    {
      "name": "Chain Lightning",
      "link": "http://dnd5e.wikidot.com/spell:chain-lightning",
      "school": "Evocation",
      "castingTime": "1 Action",
      "range": "150 feet",
      "duration": "Instantaneous",
      "components": "V, S, M"
    },
    {
      "name": "Circle of Death",
      "link": "http://dnd5e.wikidot.com/spell:circle-of-death",
      "school": "Necromancy",
      "castingTime": "1 Action",
      "range": "150 feet",
      "duration": "Instantaneous",
      "components": "V, S, M"
    },
    {
      "name": "Conjure Fey",
      "link": "http://dnd5e.wikidot.com/spell:conjure-fey",
      "school": "Conjuration",
      "castingTime": "1 Action",
      "range": "90 feet",
      "duration": "Concentration, up to 1 hour",
      "components": "V, S"
    },
    {
      "name": "Contingency",
      "link": "http://dnd5e.wikidot.com/spell:contingency",
      "school": "Evocation",
      "castingTime": "10 Minutes",
      "range": "Self",
      "duration": "10 days",
      "components": "V, S, M"
    },
    {
      "name": "Create Homunculus",
      "link": "http://dnd5e.wikidot.com/spell:create-homunculus",
      "school": "Transmutation",
      "castingTime": "1 Hour",
      "range": "120 feet",
      "duration": "Instantaneous",
      "components": "V, S, M"
    },
    {
      "name": "Create Undead",
      "link": "http://dnd5e.wikidot.com/spell:create-undead",
      "school": "Necromancy",
      "castingTime": "1 Minute",
      "range": "10 feet",
      "duration": "Instantaneous",
      "components": "V, S, M"
    },
    {
      "name": "Disintegrate",
      "link": "http://dnd5e.wikidot.com/spell:disintegrate",
      "school": "Transmutation",
      "castingTime": "1 Action",
      "range": "60 feet",
      "duration": "Instantaneous",
      "components": "V, S, M"
    },
    {
      "name": "Drawmij's Instant Summons",
      "link": "http://dnd5e.wikidot.com/spell:drawmijs-instant-summons",
      "school": "Conjuration",
      "castingTime": "1 Minute R",
      "range": "Touch",
      "duration": "Until dispelled",
      "components": "V, S, M"
    },
    {
      "name": "Druid Grove",
      "link": "http://dnd5e.wikidot.com/spell:druid-grove",
      "school": "Abjuration",
      "castingTime": "10 Minutes",
      "range": "Touch",
      "duration": "24 hours",
      "components": "V, S, M"
    },
    {
      "name": "Eyebite",
      "link": "http://dnd5e.wikidot.com/spell:eyebite",
      "school": "Necromancy",
      "castingTime": "1 Action",
      "range": "Self",
      "duration": "Concentration, up to 1 minute",
      "components": "V, S"
    },
    {
      "name": "Find the Path",
      "link": "http://dnd5e.wikidot.com/spell:find-the-path",
      "school": "Divination",
      "castingTime": "1 Minute",
      "range": "Self",
      "duration": "Concentration, up to 1 day",
      "components": "V, S, M"
    },
    {
      "name": "Fizban's Platinum Shield",
      "link": "http://dnd5e.wikidot.com/spell:fizbans-platinum-shield",
      "school": "Abjuration",
      "castingTime": "1 Bonus Action",
      "range": "60ft",
      "duration": "Concentration, up to 1 minute",
      "components": "V, S, M"
    },
    {
      "name": "Fizban's Platinum Shield (UA)",
      "link": "http://dnd5e.wikidot.com/spell:fizban-s-platinum-shield-ua",
      "school": "Abjuration",
      "castingTime": "1 Action",
      "range": "60 feet",
      "duration": "Concentration, up to 1 minute",
      "components": "V, S, M"
    },
    {
      "name": "Flesh to Stone",
      "link": "http://dnd5e.wikidot.com/spell:flesh-to-stone",
      "school": "Transmutation",
      "castingTime": "1 Action",
      "range": "60 feet",
      "duration": "Concentration, up to 1 minute",
      "components": "V, S, M"
    },
    {
      "name": "Forbiddance",
      "link": "http://dnd5e.wikidot.com/spell:forbiddance",
      "school": "Abjuration",
      "castingTime": "10 Minutes R",
      "range": "Touch",
      "duration": "1 day",
      "components": "V, S, M"
    },
    {
      "name": "Globe of Invulnerability",
      "link": "http://dnd5e.wikidot.com/spell:globe-of-invulnerability",
      "school": "Abjuration",
      "castingTime": "1 Action",
      "range": "Self (10-foot radius)",
      "duration": "Concentration, up to 1 minute",
      "components": "V, S, M"
    },
    {
      "name": "Gravity Fissure",
      "link": "http://dnd5e.wikidot.com/spell:gravity-fissure",
      "school": "Evocation DG",
      "castingTime": "1 Action",
      "range": "Self (100-foot line)",
      "duration": "Instantaneous",
      "components": "V, S, M"
    },
    {
      "name": "Guards and Wards",
      "link": "http://dnd5e.wikidot.com/spell:guards-and-wards",
      "school": "Abjuration",
      "castingTime": "10 Minutes",
      "range": "Touch",
      "duration": "24 hours",
      "components": "V, S, M"
    },
    {
      "name": "Harm",
      "link": "http://dnd5e.wikidot.com/spell:harm",
      "school": "Necromancy",
      "castingTime": "1 Action",
      "range": "60 feet",
      "duration": "Instantaneous",
      "components": "V, S"
    },
    {
      "name": "Heal",
      "link": "http://dnd5e.wikidot.com/spell:heal",
      "school": "Evocation",
      "castingTime": "1 Action",
      "range": "60 feet",
      "duration": "Instantaneous",
      "components": "V, S"
    },
    {
      "name": "Heroes' Feast",
      "link": "http://dnd5e.wikidot.com/spell:heroes-feast",
      "school": "Conjuration",
      "castingTime": "10 Minutes",
      "range": "30 feet",
      "duration": "Instantaneous",
      "components": "V, S, M"
    },
    {
      "name": "Investiture of Flame",
      "link": "http://dnd5e.wikidot.com/spell:investiture-of-flame",
      "school": "Transmutation",
      "castingTime": "1 Action",
      "range": "Self",
      "duration": "Concentration, up to 10 minutes",
      "components": "V, S"
    },
    {
      "name": "Investiture of Ice",
      "link": "http://dnd5e.wikidot.com/spell:investiture-of-ice",
      "school": "Transmutation",
      "castingTime": "1 Action",
      "range": "Self",
      "duration": "Concentration, up to 10 minutes",
      "components": "V, S"
    },
    {
      "name": "Investiture of Stone",
      "link": "http://dnd5e.wikidot.com/spell:investiture-of-stone",
      "school": "Transmutation",
      "castingTime": "1 Action",
      "range": "Self",
      "duration": "Concentration, up to 10 minutes",
      "components": "V, S"
    },
    {
      "name": "Investiture of Wind",
      "link": "http://dnd5e.wikidot.com/spell:investiture-of-wind",
      "school": "Transmutation",
      "castingTime": "1 Action",
      "range": "Self",
      "duration": "Concentration, up to 10 minutes",
      "components": "V, S"
    },
    {
      "name": "Magic Jar",
      "link": "http://dnd5e.wikidot.com/spell:magic-jar",
      "school": "Necromancy",
      "castingTime": "1 Minute",
      "range": "Self",
      "duration": "Until dispelled",
      "components": "V, S, M"
    },
    {
      "name": "Mass Suggestion",
      "link": "http://dnd5e.wikidot.com/spell:mass-suggestion",
      "school": "Enchantment",
      "castingTime": "1 Action",
      "range": "60 feet",
      "duration": "24 hours",
      "components": "V, M"
    },
    {
      "name": "Mental Prison",
      "link": "http://dnd5e.wikidot.com/spell:mental-prison",
      "school": "Illusion",
      "castingTime": "1 Action",
      "range": "60 feet",
      "duration": "Concentration, up to 1 minute",
      "components": "S"
    },
    {
      "name": "Move Earth",
      "link": "http://dnd5e.wikidot.com/spell:move-earth",
      "school": "Transmutation",
      "castingTime": "1 Action",
      "range": "120 feet",
      "duration": "Concentration, up to 2 hours",
      "components": "V, S, M"
    },
    {
      "name": "Otherworldly Form (UA)",
      "link": "http://dnd5e.wikidot.com/spell:otherworldly-form",
      "school": "Transmutation",
      "castingTime": "1 Action",
      "range": "Self",
      "duration": "Concentration, up to 1 minute",
      "components": "V, S, M"
    },
    {
      "name": "Otiluke's Freezing Sphere",
      "link": "http://dnd5e.wikidot.com/spell:otilukes-freezing-sphere",
      "school": "Evocation",
      "castingTime": "1 Action",
      "range": "300 feet",
      "duration": "Instantaneous",
      "components": "V, S, M"
    },
    {
      "name": "Otto's Irresistible Dance",
      "link": "http://dnd5e.wikidot.com/spell:ottos-irresistible-dance",
      "school": "Enchantment",
      "castingTime": "1 Action",
      "range": "30 feet",
      "duration": "Concentration, up to 1 minute",
      "components": "V"
    },
    {
      "name": "Planar Ally",
      "link": "http://dnd5e.wikidot.com/spell:planar-ally",
      "school": "Conjuration",
      "castingTime": "1 Action",
      "range": "60 feet",
      "duration": "Instantaneous",
      "components": "V, S"
    },
    {
      "name": "Primordial Ward",
      "link": "http://dnd5e.wikidot.com/spell:primordial-ward",
      "school": "Abjuration",
      "castingTime": "1 Action",
      "range": "Self",
      "duration": "Concentration, up to 1 minute",
      "components": "V, S"
    },
    {
      "name": "Programmed Illusion",
      "link": "http://dnd5e.wikidot.com/spell:programmed-illusion",
      "school": "Illusion",
      "castingTime": "1 Action",
      "range": "120 feet",
      "duration": "Until dispelled",
      "components": "V, S, M"
    },
    {
      "name": "Psychic Crush (UA)",
      "link": "http://dnd5e.wikidot.com/spell:psychic-crush",
      "school": "Enchantment",
      "castingTime": "1 Action",
      "range": "60 feet",
      "duration": "1 minute",
      "components": "V, S"
    },
    {
      "name": "Scatter",
      "link": "http://dnd5e.wikidot.com/spell:scatter",
      "school": "Conjuration",
      "castingTime": "1 Action",
      "range": "30 feet",
      "duration": "Instantaneous",
      "components": "V"
    },
    {
      "name": "Soul Cage",
      "link": "http://dnd5e.wikidot.com/spell:soul-cage",
      "school": "Necromancy",
      "castingTime": "Special",
      "range": "60 feet",
      "duration": "8 hours",
      "components": "V, S, M"
    },
    {
      "name": "Summon Fiend",
      "link": "http://dnd5e.wikidot.com/spell:summon-fiend",
      "school": "Conjuration",
      "castingTime": "1 Action",
      "range": "90 feet",
      "duration": "Concentration, up to 1 hour",
      "components": "V, S, M"
    },
    {
      "name": "Sunbeam",
      "link": "http://dnd5e.wikidot.com/spell:sunbeam",
      "school": "Evocation",
      "castingTime": "1 Action",
      "range": "Self (60-foot line)",
      "duration": "Concentration, up to 1 minute",
      "components": "V, S, M"
    },
    {
      "name": "Tasha's Otherworldly Guise",
      "link": "http://dnd5e.wikidot.com/spell:tashas-otherworldly-guise",
      "school": "Transmutation",
      "castingTime": "1 Bonus Action",
      "range": "Self",
      "duration": "Concentration, up to 1 minute",
      "components": "V, S, M"
    },
    {
      "name": "Tenser's Transformation",
      "link": "http://dnd5e.wikidot.com/spell:tensers-transformation",
      "school": "Transmutation",
      "castingTime": "1 Action",
      "range": "Self",
      "duration": "Concentration, up to 10 minutes",
      "components": "V, S, M"
    },
    {
      "name": "Transport via Plants",
      "link": "http://dnd5e.wikidot.com/spell:transport-via-plants",
      "school": "Conjuration",
      "castingTime": "1 Action",
      "range": "10 feet",
      "duration": "1 round",
      "components": "V, S"
    },
    {
      "name": "True Seeing",
      "link": "http://dnd5e.wikidot.com/spell:true-seeing",
      "school": "Divination",
      "castingTime": "1 Action",
      "range": "Touch",
      "duration": "1 hour",
      "components": "V, S, M"
    },
    {
      "name": "Wall of Ice",
      "link": "http://dnd5e.wikidot.com/spell:wall-of-ice",
      "school": "Evocation",
      "castingTime": "1 Action",
      "range": "120 feet",
      "duration": "Concentration, up to 10 minutes",
      "components": "V, S, M"
    },
    {
      "name": "Wall of Thorns",
      "link": "http://dnd5e.wikidot.com/spell:wall-of-thorns",
      "school": "Conjuration",
      "castingTime": "1 Action",
      "range": "120 feet",
      "duration": "Concentration, up to 10 minutes",
      "components": "V, S, M"
    },
    {
      "name": "Widogast's Transmogrification (HB)",
      "link": "http://dnd5e.wikidot.com/spell:widogast-s-transmogrification-hb",
      "school": "Transmutation",
      "castingTime": "1 hour",
      "range": "Touch",
      "duration": "Instantaneous",
      "components": "V, S, M"
    },
    {
      "name": "Wind Walk",
      "link": "http://dnd5e.wikidot.com/spell:wind-walk",
      "school": "Transmutation",
      "castingTime": "1 Minute",
      "range": "30 feet",
      "duration": "8 hours",
      "components": "V, S, M"
    },
    {
      "name": "Word of Recall",
      "link": "http://dnd5e.wikidot.com/spell:word-of-recall",
      "school": "Conjuration",
      "castingTime": "1 Action",
      "range": "5 feet",
      "duration": "Instantaneous",
      "components": "V"
    },
];
const levelSeven = [
    {
      "name": "Conjure Celestial",
      "link": "http://dnd5e.wikidot.com/spell:conjure-celestial",
      "school": "Conjuration",
      "castingTime": "1 Minute",
      "range": "90 feet",
      "duration": "Concentration, up to 1 hour",
      "components": "V, S"
    },
    {
      "name": "Conjure Hezrou (UA)",
      "link": "http://dnd5e.wikidot.com/spell:conjure-hezrou",
      "school": "Conjuration",
      "castingTime": "1 Action",
      "range": "60 feet",
      "duration": "Concentration, up to 1 hour",
      "components": "V, S, M"
    },
    {
      "name": "Create Magen",
      "link": "http://dnd5e.wikidot.com/spell:create-magen",
      "school": "Transmutation",
      "castingTime": "1 Hour",
      "range": "Touch",
      "duration": "Instantaneous",
      "components": "V, S, M"
    },
    {
      "name": "Crown of Stars",
      "link": "http://dnd5e.wikidot.com/spell:crown-of-stars",
      "school": "Evocation",
      "castingTime": "1 Action",
      "range": "Self",
      "duration": "1 hour",
      "components": "V, S"
    },
    {
      "name": "Delayed Blast Fireball",
      "link": "http://dnd5e.wikidot.com/spell:delayed-blast-fireball",
      "school": "Evocation",
      "castingTime": "1 Action",
      "range": "150 feet",
      "duration": "Concentration, up to 1 minute",
      "components": "V, S, M"
    },
    {
      "name": "Divine Word",
      "link": "http://dnd5e.wikidot.com/spell:divine-word",
      "school": "Evocation",
      "castingTime": "1 Bonus Action",
      "range": "30 feet",
      "duration": "Instantaneous",
      "components": "V"
    },
    {
      "name": "Draconic Transformation",
      "link": "http://dnd5e.wikidot.com/spell:draconic-transformation",
      "school": "Transmutation",
      "castingTime": "1 Bonus Action",
      "range": "Self",
      "duration": "Concentration, up to 1 minute",
      "components": "V, S, M"
    },
    {
      "name": "Draconic Transformation (UA)",
      "link": "http://dnd5e.wikidot.com/spell:draconic-transformation-ua",
      "school": "Transmutation",
      "castingTime": "1 Bonus Action",
      "range": "Self",
      "duration": "Concentration, up to 1 minute",
      "components": "V, S, M"
    },
    {
      "name": "Dream of the Blue Veil",
      "link": "http://dnd5e.wikidot.com/spell:dream-of-the-blue-veil",
      "school": "Conjuration",
      "castingTime": "10 minutes",
      "range": "20 feet",
      "duration": "6 hours",
      "components": "V, S, M"
    },
    {
      "name": "Etherealness",
      "link": "http://dnd5e.wikidot.com/spell:etherealness",
      "school": "Transmutation",
      "castingTime": "1 Action",
      "range": "Self",
      "duration": "Up to 8 hours",
      "components": "V, S"
    },
    {
      "name": "Finger of Death",
      "link": "http://dnd5e.wikidot.com/spell:finger-of-death",
      "school": "Necromancy",
      "castingTime": "1 Action",
      "range": "60 feet",
      "duration": "Instantaneous",
      "components": "V, S"
    },
    {
      "name": "Fire Storm",
      "link": "http://dnd5e.wikidot.com/spell:fire-storm",
      "school": "Evocation",
      "castingTime": "1 Action",
      "range": "150 feet",
      "duration": "Instantaneous",
      "components": "V, S"
    },
    {
      "name": "Forcecage",
      "link": "http://dnd5e.wikidot.com/spell:forcecage",
      "school": "Evocation",
      "castingTime": "1 Action",
      "range": "100 feet",
      "duration": "1 hour",
      "components": "V, S, M"
    },
    {
      "name": "Mirage Arcane",
      "link": "http://dnd5e.wikidot.com/spell:mirage-arcane",
      "school": "Illusion",
      "castingTime": "10 Minutes",
      "range": "Sight",
      "duration": "10 days",
      "components": "V, S"
    },
    {
      "name": "Mordenkainen's Magnificent Mansion",
      "link": "http://dnd5e.wikidot.com/spell:mordenkainens-magnificent-mansion",
      "school": "Conjuration",
      "castingTime": "1 Minute",
      "range": "300 feet",
      "duration": "24 hours",
      "components": "V, S, M"
    },
    {
      "name": "Mordenkainen's Sword",
      "link": "http://dnd5e.wikidot.com/spell:mordenkainens-sword",
      "school": "Evocation",
      "castingTime": "1 Action",
      "range": "60 feet",
      "duration": "Concentration, up to 1 minute",
      "components": "V, S, M"
    },
    {
      "name": "Plane Shift",
      "link": "http://dnd5e.wikidot.com/spell:plane-shift",
      "school": "Conjuration",
      "castingTime": "1 Action",
      "range": "Touch",
      "duration": "Instantaneous",
      "components": "V, S, M"
    },
    {
      "name": "Power Word: Pain",
      "link": "http://dnd5e.wikidot.com/spell:power-word-pain",
      "school": "Enchantment",
      "castingTime": "1 Action",
      "range": "60 feet",
      "duration": "Instantaneous",
      "components": "V"
    },
    {
      "name": "Prismatic Spray",
      "link": "http://dnd5e.wikidot.com/spell:prismatic-spray",
      "school": "Evocation",
      "castingTime": "1 Action",
      "range": "Self (60-foot cone)",
      "duration": "Instantaneous",
      "components": "V, S"
    },
    {
      "name": "Project Image",
      "link": "http://dnd5e.wikidot.com/spell:project-image",
      "school": "Illusion",
      "castingTime": "1 Action",
      "range": "500 Miles",
      "duration": "Concentration, up to 1 day",
      "components": "V, S, M"
    },
    {
      "name": "Regenerate",
      "link": "http://dnd5e.wikidot.com/spell:regenerate",
      "school": "Transmutation",
      "castingTime": "1 Minute",
      "range": "Touch",
      "duration": "1 hour",
      "components": "V, S, M"
    },
    {
      "name": "Resurrection",
      "link": "http://dnd5e.wikidot.com/spell:resurrection",
      "school": "Necromancy",
      "castingTime": "1 Hour",
      "range": "Touch",
      "duration": "Instantaneous",
      "components": "V, S, M"
    },
    {
      "name": "Reverse Gravity",
      "link": "http://dnd5e.wikidot.com/spell:reverse-gravity",
      "school": "Transmutation",
      "castingTime": "1 Action",
      "range": "100 feet",
      "duration": "Concentration, up to 1 minute",
      "components": "V, S, M"
    },
    {
      "name": "Sequester",
      "link": "http://dnd5e.wikidot.com/spell:sequester",
      "school": "Transmutation",
      "castingTime": "1 Action",
      "range": "Touch",
      "duration": "Until dispelled",
      "components": "V, S, M"
    },
    {
      "name": "Simulacrum",
      "link": "http://dnd5e.wikidot.com/spell:simulacrum",
      "school": "Illusion",
      "castingTime": "12 hours",
      "range": "Touch",
      "duration": "Until dispelled",
      "components": "V, S, M"
    },
    {
      "name": "Symbol",
      "link": "http://dnd5e.wikidot.com/spell:symbol",
      "school": "Abjuration",
      "castingTime": "1 Minute",
      "range": "Touch",
      "duration": "Until dispelled or triggered",
      "components": "V, S, M"
    },
    {
      "name": "Teleport",
      "link": "http://dnd5e.wikidot.com/spell:teleport",
      "school": "Conjuration",
      "castingTime": "1 Action",
      "range": "10 feet",
      "duration": "Instantaneous",
      "components": "V"
    },
    {
      "name": "Temple of the Gods",
      "link": "http://dnd5e.wikidot.com/spell:temple-of-the-gods",
      "school": "Conjuration",
      "castingTime": "1 hour",
      "range": "120 feet",
      "duration": "24 hours",
      "components": "V, S, M"
    },
    {
      "name": "Tether Essence",
      "link": "http://dnd5e.wikidot.com/spell:tether-essence",
      "school": "Necromancy D",
      "castingTime": "1 Action",
      "range": "60 feet",
      "duration": "Concentration, up to 1 hour",
      "components": "V, S, M"
    },
    {
      "name": "Whirlwind",
      "link": "http://dnd5e.wikidot.com/spell:whirlwind",
      "school": "Evocation",
      "castingTime": "1 Action",
      "range": "300 feet",
      "duration": "Concentration, up to 1 minute",
      "components": "V, M"
    },
];
const levelEight = [
    {
      "name": "Abi-Dalzim's Horrid Wilting",
      "link": "http://dnd5e.wikidot.com/spell:abi-dalzims-horrid-wilting",
      "school": "Necromancy",
      "castingTime": "1 Action",
      "range": "150 feet",
      "duration": "Instantaneous",
      "components": "V, S, M"
    },
    {
      "name": "Animal Shapes",
      "link": "http://dnd5e.wikidot.com/spell:animal-shapes",
      "school": "Transmutation",
      "castingTime": "1 Action",
      "range": "30 feet",
      "duration": "Concentration, up to 24 hours",
      "components": "V, S"
    },
    {
      "name": "Antimagic Field",
      "link": "http://dnd5e.wikidot.com/spell:antimagic-field",
      "school": "Abjuration",
      "castingTime": "1 Action",
      "range": "Self (10-foot radius sphere)",
      "duration": "Concentration, up to 1 hour",
      "components": "V, S, M"
    },
    {
      "name": "Antipathy/Sympathy",
      "link": "http://dnd5e.wikidot.com/spell:antipathy-sympathy",
      "school": "Enchantment",
      "castingTime": "1 Hour",
      "range": "60 feet",
      "duration": "10 Days",
      "components": "V, S, M"
    },
    {
      "name": "Clone",
      "link": "http://dnd5e.wikidot.com/spell:clone",
      "school": "Necromancy",
      "castingTime": "1 Hour",
      "range": "Touch",
      "duration": "Instantaneous",
      "components": "V, S, M"
    },
    {
      "name": "Control Weather",
      "link": "http://dnd5e.wikidot.com/spell:control-weather",
      "school": "Transmutation",
      "castingTime": "10 Minutes",
      "range": "Self (5 mile radius)",
      "duration": "Concentration, Up to 8 hours",
      "components": "V, S, M"
    },
    {
      "name": "Dark Star",
      "link": "http://dnd5e.wikidot.com/spell:dark-star",
      "school": "Evocation DG",
      "castingTime": "1 Action",
      "range": "150 Feet",
      "duration": "Concentration, up to 1 minute",
      "components": "V, S, M"
    },
    {
      "name": "Demiplane",
      "link": "http://dnd5e.wikidot.com/spell:demiplane",
      "school": "Conjuration",
      "castingTime": "1 Action",
      "range": "60 feet",
      "duration": "1 hour",
      "components": "S"
    },
    {
      "name": "Dominate Monster",
      "link": "http://dnd5e.wikidot.com/spell:dominate-monster",
      "school": "Enchantment",
      "castingTime": "1 Action",
      "range": "60 feet",
      "duration": "Concentration, up to 1 hour",
      "components": "V, S"
    },
    {
      "name": "Earthquake",
      "link": "http://dnd5e.wikidot.com/spell:earthquake",
      "school": "Evocation",
      "castingTime": "1 Action",
      "range": "500 feet",
      "duration": "Concentration, up to 1 minute",
      "components": "V, S, M"
    },
    {
      "name": "Feeblemind",
      "link": "http://dnd5e.wikidot.com/spell:feeblemind",
      "school": "Enchantment",
      "castingTime": "1 Action",
      "range": "150 feet",
      "duration": "Instantaneous",
      "components": "V, S, M"
    },
    {
      "name": "Glibness",
      "link": "http://dnd5e.wikidot.com/spell:glibness",
      "school": "Transmutation",
      "castingTime": "1 Action",
      "range": "Self",
      "duration": "1 hour",
      "components": "V"
    },
    {
      "name": "Holy Aura",
      "link": "http://dnd5e.wikidot.com/spell:holy-aura",
      "school": "Abjuration",
      "castingTime": "1 Action",
      "range": "Self",
      "duration": "Concentration, up to 1 minute",
      "components": "V, S, M"
    },
    {
      "name": "Illusory Dragon",
      "link": "http://dnd5e.wikidot.com/spell:illusory-dragon",
      "school": "Illusion",
      "castingTime": "1 Action",
      "range": "120 feet",
      "duration": "Concentration, up to 1 minute",
      "components": "S"
    },
    {
      "name": "Incendiary Cloud",
      "link": "http://dnd5e.wikidot.com/spell:incendiary-cloud",
      "school": "Conjuration",
      "castingTime": "1 Action",
      "range": "150 feet",
      "duration": "Concentration, up to 1 minute",
      "components": "V, S"
    },
    {
      "name": "Maddening Darkness",
      "link": "http://dnd5e.wikidot.com/spell:maddening-darkness",
      "school": "Evocation",
      "castingTime": "1 Action",
      "range": "150 feet",
      "duration": "Concentration, up to 10 minutes",
      "components": "V, M"
    },
    {
      "name": "Maze",
      "link": "http://dnd5e.wikidot.com/spell:maze",
      "school": "Conjuration",
      "castingTime": "1 Action",
      "range": "60 feet",
      "duration": "Concentration, up to 10 minutes",
      "components": "V, S"
    },
    {
      "name": "Mighty Fortress",
      "link": "http://dnd5e.wikidot.com/spell:mighty-fortress",
      "school": "Conjuration",
      "castingTime": "1 Minute",
      "range": "1 mile",
      "duration": "Instantaneous",
      "components": "V, S, M"
    },
    {
      "name": "Mind Blank",
      "link": "http://dnd5e.wikidot.com/spell:mind-blank",
      "school": "Abjuration",
      "castingTime": "1 Action",
      "range": "Touch",
      "duration": "24 hours",
      "components": "V, S"
    },
    {
      "name": "Power Word: Stun",
      "link": "http://dnd5e.wikidot.com/spell:power-word-stun",
      "school": "Enchantment",
      "castingTime": "1 Action",
      "range": "60 feet",
      "duration": "Instantaneous",
      "components": "V, S"
    },
    {
      "name": "Reality Break",
      "link": "http://dnd5e.wikidot.com/spell:reality-break",
      "school": "Conjuration DC",
      "castingTime": "1 Action",
      "range": "60 feet",
      "duration": "Concentration, up to 1 minute",
      "components": "V, S, M"
    },
    {
      "name": "Sunburst",
      "link": "http://dnd5e.wikidot.com/spell:sunburst",
      "school": "Evocation",
      "castingTime": "1 Action",
      "range": "150 feet",
      "duration": "Instantaneous",
      "components": "V, S, M"
    },
    {
      "name": "Telepathy",
      "link": "http://dnd5e.wikidot.com/spell:telepathy",
      "school": "Evocation",
      "castingTime": "1 Action",
      "range": "Unlimited",
      "duration": "24 hours",
      "components": "V, S, M"
    },
    {
      "name": "Tsunami",
      "link": "http://dnd5e.wikidot.com/spell:tsunami",
      "school": "Conjuration",
      "castingTime": "1 Action",
      "range": "Sight",
      "duration": "Concentration, up to 6 rounds",
      "components": "V, S"
    },
];
const levelNine = [
    {
      "name": "Astral Projection",
      "link": "http://dnd5e.wikidot.com/spell:astral-projection",
      "school": "Evocation",
      "castingTime": "1 Hour",
      "range": "10 feet",
      "duration": "Special",
      "components": "V, S, M"
    },
    {
      "name": "Blade of Disaster",
      "link": "http://dnd5e.wikidot.com/spell:blade-of-disaster",
      "school": "Conjuration",
      "castingTime": "1 Bonus Action",
      "range": "60 feet",
      "duration": "Concentration, up to 1 minute",
      "components": "V, S"
    },
    {
      "name": "Foresight",
      "link": "http://dnd5e.wikidot.com/spell:foresight",
      "school": "Divination",
      "castingTime": "1 Minute",
      "range": "Touch",
      "duration": "8 hours",
      "components": "V, S, M"
    },
    {
      "name": "Gate",
      "link": "http://dnd5e.wikidot.com/spell:gate",
      "school": "Conjuration",
      "castingTime": "1 Action",
      "range": "60 feet",
      "duration": "Concentration, up to 1 minute",
      "components": "V, S, M"
    },
    {
      "name": "Imprisonment",
      "link": "http://dnd5e.wikidot.com/spell:imprisonment",
      "school": "Abjuration",
      "castingTime": "1 Minute",
      "range": "30 feet",
      "duration": "Until dispelled",
      "components": "V, S, M"
    },
    {
      "name": "Invulnerability",
      "link": "http://dnd5e.wikidot.com/spell:invulnerability",
      "school": "Abjuration",
      "castingTime": "1 Action",
      "range": "Self",
      "duration": "Concentration, up to 10 minutes",
      "components": "V, S, M"
    },
    {
      "name": "Mass Heal",
      "link": "http://dnd5e.wikidot.com/spell:mass-heal",
      "school": "Evocation",
      "castingTime": "1 Action",
      "range": "60 feet",
      "duration": "Instantaneous",
      "components": "V, S"
    },
    {
      "name": "Mass Polymorph",
      "link": "http://dnd5e.wikidot.com/spell:mass-polymorph",
      "school": "Transmutation",
      "castingTime": "1 Action",
      "range": "120 feet",
      "duration": "Concentration, up to 1 hour",
      "components": "V, S, M"
    },
    {
      "name": "Meteor Swarm",
      "link": "http://dnd5e.wikidot.com/spell:meteor-swarm",
      "school": "Evocation",
      "castingTime": "1 Action",
      "range": "1 mile",
      "duration": "Instantaneous",
      "components": "V, S"
    },
    {
      "name": "Power Word: Heal",
      "link": "http://dnd5e.wikidot.com/spell:power-word-heal",
      "school": "Evocation",
      "castingTime": "1 Action",
      "range": "Touch",
      "duration": "Instantaneous",
      "components": "V, S"
    },
    {
      "name": "Power Word: Kill",
      "link": "http://dnd5e.wikidot.com/spell:power-word-kill",
      "school": "Enchantment",
      "castingTime": "1 Action",
      "range": "60 feet",
      "duration": "Instantaneous",
      "components": "V"
    },
    {
      "name": "Prismatic Wall",
      "link": "http://dnd5e.wikidot.com/spell:prismatic-wall",
      "school": "Abjuration",
      "castingTime": "1 Action",
      "range": "60 feet",
      "duration": "10 minutes",
      "components": "V, S"
    },
    {
      "name": "Psychic Scream",
      "link": "http://dnd5e.wikidot.com/spell:psychic-scream",
      "school": "Enchantment",
      "castingTime": "1 Action",
      "range": "90 feet",
      "duration": "Instantaneous",
      "components": "S"
    },
    {
      "name": "Ravenous Void",
      "link": "http://dnd5e.wikidot.com/spell:ravenous-void",
      "school": "Evocation DG",
      "castingTime": "1 Action",
      "range": "1,000 feet",
      "duration": "Concentration, up to 1 minute",
      "components": "V, S, M"
    },
    {
      "name": "Shapechange",
      "link": "http://dnd5e.wikidot.com/spell:shapechange",
      "school": "Transmutation",
      "castingTime": "1 Action",
      "range": "Self",
      "duration": "Concentration, up to 1 hour",
      "components": "V, S, M"
    },
    {
      "name": "Storm of Vengeance",
      "link": "http://dnd5e.wikidot.com/spell:storm-of-vengeance",
      "school": "Conjuration",
      "castingTime": "1 Action",
      "range": "Sight",
      "duration": "Concentration up to 1 minute",
      "components": "V, S"
    },
    {
      "name": "Time Ravage",
      "link": "http://dnd5e.wikidot.com/spell:time-ravage",
      "school": "Necromancy DC",
      "castingTime": "1 Action",
      "range": "90 feet",
      "duration": "Instantaneous",
      "components": "V, S, M"
    },
    {
      "name": "Time Stop",
      "link": "http://dnd5e.wikidot.com/spell:time-stop",
      "school": "Transmutation",
      "castingTime": "1 Action",
      "range": "Self",
      "duration": "Instantaneous",
      "components": "V"
    },
    {
      "name": "True Polymorph",
      "link": "http://dnd5e.wikidot.com/spell:true-polymorph",
      "school": "Transmutation",
      "castingTime": "1 Action",
      "range": "30 feet",
      "duration": "Concentration, up to 1 hour",
      "components": "V, S, M"
    },
    {
      "name": "True Resurrection",
      "link": "http://dnd5e.wikidot.com/spell:true-resurrection",
      "school": "Necromancy",
      "castingTime": "1 Hour",
      "range": "Touch",
      "duration": "Instantaneous",
      "components": "V, S, M"
    },
    {
      "name": "Weird",
      "link": "http://dnd5e.wikidot.com/spell:weird",
      "school": "Illusion",
      "castingTime": "1 Action",
      "range": "120 feet",
      "duration": "Concentration, up to 1 minute",
      "components": "V, S"
    },
    {
      "name": "Wish",
      "link": "http://dnd5e.wikidot.com/spell:wish",
      "school": "Conjuration",
      "castingTime": "1 Action",
      "range": "Self",
      "duration": "Instantaneous",
      "components": "V"
    }
];

const spells = [
    cantrips,
    levelOne,
    levelTwo,
    levelThree,
    levelFour,
    levelFive,
    levelEight,
    levelNine
];

export default spells;