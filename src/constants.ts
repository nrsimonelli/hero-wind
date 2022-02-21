interface Record {
  id: number;
  name: string;
}

export const SCREENS = {
  1: '640px',
  2: '768px',
  3: '1024px',
  4: '1280px',
  5: '1536px',
} as const;

export const STATIC_RECORDS: Record[] = [
  { id: 1, name: 'A-Bomb' },
  { id: 2, name: 'Abe Sapien' },
  { id: 3, name: 'Abin Sur' },
  { id: 4, name: 'Abomination' },
  { id: 5, name: 'Abraxas' },
  { id: 6, name: 'Absorbing Man' },
  { id: 7, name: 'Adam Monroe' },
  { id: 8, name: 'Adam Strange' },
  { id: 10, name: 'Agent Bob' },
  { id: 11, name: 'Agent Zero' },
  { id: 12, name: 'Air-Walker' },
  { id: 13, name: 'Ajax' },
  { id: 14, name: 'Alan Scott' },
  { id: 15, name: 'Alex Mercer' },
  { id: 17, name: 'Alfred Pennyworth' },
  { id: 18, name: 'Alien' },
  { id: 20, name: 'Amazo' },
  { id: 23, name: 'Angel' },
  { id: 24, name: 'Angel' },
  { id: 25, name: 'Angel Dust' },
  { id: 26, name: 'Angel Salvadore' },
  { id: 28, name: 'Animal Man' },
  { id: 29, name: 'Annihilus' },
  { id: 30, name: 'Ant-Man' },
  { id: 31, name: 'Ant-Man II' },
  { id: 32, name: 'Anti-Monitor' },
  { id: 34, name: 'Anti-Venom' },
  { id: 35, name: 'Apocalypse' },
  { id: 36, name: 'Aquababy' },
  { id: 37, name: 'Aqualad' },
  { id: 38, name: 'Aquaman' },
  { id: 39, name: 'Arachne' },
  { id: 40, name: 'Archangel' },
  { id: 41, name: 'Arclight' },
  { id: 42, name: 'Ardina' },
  { id: 43, name: 'Ares' },
  { id: 44, name: 'Ariel' },
  { id: 45, name: 'Armor' },
  { id: 48, name: 'Atlas' },
  { id: 49, name: 'Atlas' },
  { id: 52, name: 'Atom Girl' },
  { id: 53, name: 'Atom II' },
  { id: 56, name: 'Aurora' },
  { id: 57, name: 'Azazel' },
  { id: 58, name: 'Azrael' },
  { id: 60, name: 'Bane' },
  { id: 61, name: 'Banshee' },
  { id: 62, name: 'Bantam' },
  { id: 63, name: 'Batgirl' },
  { id: 66, name: 'Batgirl IV' },
  { id: 68, name: 'Batgirl VI' },
  { id: 69, name: 'Batman' },
  { id: 70, name: 'Batman' },
  { id: 71, name: 'Batman II' },
  { id: 72, name: 'Battlestar' },
  { id: 73, name: 'Batwoman V' },
  { id: 75, name: 'Beast' },
  { id: 76, name: 'Beast Boy' },
  { id: 78, name: 'Ben 10' },
  { id: 79, name: 'Beta Ray Bill' },
  { id: 80, name: 'Beyonder' },
  { id: 81, name: 'Big Barda' },
  { id: 82, name: 'Big Daddy' },
  { id: 83, name: 'Big Man' },
  { id: 84, name: 'Bill Harken' },
  { id: 87, name: 'Bionic Woman' },
  { id: 88, name: 'Bird-Brain' },
  { id: 92, name: 'Bishop' },
  { id: 93, name: 'Bizarro' },
  { id: 95, name: 'Black Adam' },
  { id: 96, name: 'Black Bolt' },
  { id: 97, name: 'Black Canary' },
  { id: 98, name: 'Black Canary' },
  { id: 99, name: 'Black Cat' },
  { id: 100, name: 'Black Flash' },
  { id: 102, name: 'Black Knight III' },
  { id: 103, name: 'Black Lightning' },
  { id: 104, name: 'Black Mamba' },
  { id: 105, name: 'Black Manta' },
  { id: 106, name: 'Black Panther' },
  { id: 107, name: 'Black Widow' },
  { id: 109, name: 'Blackout' },
  { id: 110, name: 'Blackwing' },
  { id: 111, name: 'Blackwulf' },
  { id: 112, name: 'Blade' },
  { id: 114, name: 'Bling!' },
  { id: 115, name: 'Blink' },
  { id: 118, name: 'Blizzard II' },
  { id: 119, name: 'Blob' },
  { id: 120, name: 'Bloodaxe' },
  { id: 121, name: 'Bloodhawk' },
  { id: 126, name: 'Blue Beetle III' },
  { id: 127, name: 'Boba Fett' },
  { id: 130, name: 'Boom-Boom' },
  { id: 135, name: 'Box IV' },
  { id: 136, name: 'Brainiac' },
  { id: 137, name: 'Brainiac 5' },
  { id: 139, name: 'Brundlefly' },
  { id: 140, name: 'Buffy' },
  { id: 141, name: 'Bullseye' },
  { id: 142, name: 'Bumblebee' },
  { id: 144, name: 'Bushido' },
  { id: 145, name: 'Cable' },
  { id: 146, name: 'Callisto' },
  { id: 147, name: 'Cameron Hicks' },
  { id: 148, name: 'Cannonball' },
  { id: 149, name: 'Captain America' },
  { id: 150, name: 'Captain Atom' },
  { id: 151, name: 'Captain Britain' },
  { id: 152, name: 'Captain Cold' },
  { id: 154, name: 'Captain Hindsight' },
  { id: 156, name: 'Captain Marvel' },
  { id: 157, name: 'Captain Marvel' },
  { id: 158, name: 'Captain Marvel II' },
  { id: 160, name: 'Captain Planet' },
  { id: 162, name: 'Carnage' },
  { id: 165, name: 'Catwoman' },
  { id: 167, name: 'Century' },
  { id: 169, name: 'Chamber' },
  { id: 170, name: 'Chameleon' },
  { id: 171, name: 'Changeling' },
  { id: 172, name: 'Cheetah' },
  { id: 174, name: 'Cheetah III' },
  { id: 176, name: 'Chuck Norris' },
  { id: 177, name: 'Citizen Steel' },
  { id: 178, name: 'Claire Bennet' },
  { id: 180, name: 'Cloak' },
  { id: 181, name: 'Clock King' },
  { id: 185, name: 'Colossus' },
  { id: 186, name: 'Copycat' },
  { id: 188, name: 'Cottonmouth' },
  { id: 191, name: 'Crystal' },
  { id: 194, name: 'Cyborg' },
  { id: 195, name: 'Cyborg Superman' },
  { id: 196, name: 'Cyclops' },
  { id: 198, name: 'Dagger' },
  { id: 200, name: 'Daphne Powell' },
  { id: 201, name: 'Daredevil' },
  { id: 202, name: 'Darkhawk' },
  { id: 203, name: 'Darkman' },
  { id: 204, name: 'Darkseid' },
  { id: 206, name: 'Darkstar' },
  { id: 207, name: 'Darth Maul' },
  { id: 208, name: 'Darth Vader' },
  { id: 209, name: 'Dash' },
  { id: 210, name: 'Data' },
  { id: 211, name: 'Dazzler' },
  { id: 212, name: 'Deadman' },
  { id: 213, name: 'Deadpool' },
  { id: 214, name: 'Deadshot' },
  { id: 215, name: 'Deathlok' },
  { id: 216, name: 'Deathstroke' },
  { id: 217, name: 'Demogoblin' },
  { id: 218, name: 'Destroyer' },
  { id: 219, name: 'Diamondback' },
  { id: 220, name: 'DL Hawkins' },
  { id: 221, name: 'Doc Samson' },
  { id: 222, name: 'Doctor Doom' },
  { id: 224, name: 'Doctor Fate' },
  { id: 225, name: 'Doctor Octopus' },
  { id: 226, name: 'Doctor Strange' },
  { id: 227, name: 'Domino' },
  { id: 228, name: 'Donatello' },
  { id: 230, name: 'Doomsday' },
  { id: 231, name: 'Doppelganger' },
  { id: 232, name: 'Dormammu' },
  { id: 233, name: 'Dr Manhattan' },
  { id: 234, name: 'Drax the Destroyer' },
  { id: 235, name: 'Ego' },
  { id: 236, name: 'Elastigirl' },
  { id: 237, name: 'Electro' },
  { id: 238, name: 'Elektra' },
  { id: 239, name: 'Elle Bishop' },
  { id: 240, name: 'Elongated Man' },
  { id: 241, name: 'Emma Frost' },
  { id: 242, name: 'Enchantress' },
  { id: 245, name: 'Ethan Hunt' },
  { id: 246, name: 'Etrigan' },
  { id: 247, name: 'Evil Deadpool' },
  { id: 248, name: 'Evilhawk' },
  { id: 249, name: 'Exodus' },
  { id: 251, name: 'Falcon' },
  { id: 252, name: 'Fallen One II' },
  { id: 253, name: 'Faora' },
  { id: 254, name: 'Feral' },
  { id: 256, name: 'Fin Fang Foom' },
  { id: 257, name: 'Firebird' },
  { id: 258, name: 'Firelord' },
  { id: 259, name: 'Firestar' },
  { id: 260, name: 'Firestorm' },
  { id: 261, name: 'Firestorm' },
  { id: 263, name: 'Flash' },
  { id: 265, name: 'Flash II' },
  { id: 266, name: 'Flash III' },
  { id: 267, name: 'Flash IV' },
  { id: 268, name: 'Forge' },
  { id: 269, name: 'Franklin Richards' },
  { id: 270, name: 'Franklin Storm' },
  { id: 271, name: 'Frenzy' },
  { id: 273, name: 'Galactus' },
  { id: 274, name: 'Gambit' },
  { id: 275, name: 'Gamora' },
  { id: 277, name: 'Gary Bell' },
  { id: 278, name: 'General Zod' },
  { id: 280, name: 'Ghost Rider' },
  { id: 284, name: 'Giganta' },
  { id: 285, name: 'Gladiator' },
  { id: 286, name: 'Goblin Queen' },
  { id: 287, name: 'Godzilla' },
  { id: 288, name: 'Gog' },
  { id: 289, name: 'Goku' },
  { id: 294, name: 'Gorilla Grodd' },
  { id: 296, name: 'Gravity' },
  { id: 297, name: 'Greedo' },
  { id: 298, name: 'Green Arrow' },
  { id: 299, name: 'Green Goblin' },
  { id: 300, name: 'Green Goblin II' },
  { id: 303, name: 'Groot' },
  { id: 305, name: 'Guy Gardner' },
  { id: 306, name: 'Hal Jordan' },
  { id: 307, name: 'Han Solo' },
  { id: 308, name: 'Hancock' },
  { id: 309, name: 'Harley Quinn' },
  { id: 310, name: 'Harry Potter' },
  { id: 311, name: 'Havok' },
  { id: 312, name: 'Hawk' },
  { id: 313, name: 'Hawkeye' },
  { id: 314, name: 'Hawkeye II' },
  { id: 315, name: 'Hawkgirl' },
  { id: 320, name: 'Heat Wave' },
  { id: 321, name: 'Hela' },
  { id: 322, name: 'Hellboy' },
  { id: 323, name: 'Hellcat' },
  { id: 325, name: 'Hercules' },
  { id: 327, name: 'Hit-Girl' },
  { id: 330, name: 'Hope Summers' },
  { id: 332, name: 'Hulk' },
  { id: 333, name: 'Human Torch' },
  { id: 334, name: 'Huntress' },
  { id: 335, name: 'Husk' },
  { id: 336, name: 'Hybrid' },
  { id: 337, name: 'Hydro-Man' },
  { id: 338, name: 'Hyperion' },
  { id: 339, name: 'Iceman' },
  { id: 340, name: 'Impulse' },
  { id: 341, name: 'Indiana Jones' },
  { id: 342, name: 'Indigo' },
  { id: 343, name: 'Ink' },
  { id: 344, name: 'Invisible Woman' },
  { id: 345, name: 'Iron Fist' },
  { id: 346, name: 'Iron Man' },
  { id: 347, name: 'Iron Monger' },
  { id: 348, name: 'Isis' },
  { id: 350, name: 'Jack of Hearts' },
  { id: 351, name: 'Jack-Jack' },
  { id: 352, name: 'James Bond' },
  { id: 353, name: 'James T. Kirk' },
  { id: 354, name: 'Jar Jar Binks' },
  { id: 355, name: 'Jason Bourne' },
  { id: 356, name: 'Jean Grey' },
  { id: 357, name: 'Jean-Luc Picard' },
  { id: 358, name: 'Jennifer Kale' },
  { id: 360, name: 'Jessica Cruz' },
  { id: 361, name: 'Jessica Jones' },
  { id: 364, name: 'Jim Powell' },
  { id: 365, name: 'JJ Powell' },
  { id: 367, name: 'John Constantine' },
  { id: 369, name: 'John Wraith' },
  { id: 370, name: 'Joker' },
  { id: 371, name: 'Jolt' },
  { id: 372, name: 'Jubilee' },
  { id: 373, name: 'Judge Dredd' },
  { id: 374, name: 'Juggernaut' },
  { id: 375, name: 'Junkpile' },
  { id: 376, name: 'Justice' },
  { id: 379, name: 'Kang' },
  { id: 380, name: 'Kathryn Janeway' },
  { id: 381, name: 'Katniss Everdeen' },
  { id: 382, name: 'Kevin 11' },
  { id: 383, name: 'Kick-Ass' },
  { id: 384, name: 'Kid Flash' },
  { id: 386, name: 'Killer Croc' },
  { id: 387, name: 'Killer Frost' },
  { id: 388, name: 'Kilowog' },
  { id: 389, name: 'King Kong' },
  { id: 390, name: 'King Shark' },
  { id: 391, name: 'Kingpin' },
  { id: 392, name: 'Klaw' },
  { id: 393, name: 'Kool-Aid Man' },
  { id: 394, name: 'Kraven II' },
  { id: 395, name: 'Kraven the Hunter' },
  { id: 396, name: 'Krypto' },
  { id: 397, name: 'Kyle Rayner' },
  { id: 398, name: 'Kylo Ren' },
  { id: 400, name: 'Lady Deathstrike' },
  { id: 401, name: 'Leader' },
  { id: 402, name: 'Leech' },
  { id: 403, name: 'Legion' },
  { id: 404, name: 'Leonardo' },
  { id: 405, name: 'Lex Luthor' },
  { id: 406, name: 'Light Lass' },
  { id: 407, name: 'Lightning Lad' },
  { id: 408, name: 'Lightning Lord' },
  { id: 409, name: 'Living Brain' },
  { id: 410, name: 'Living Tribunal' },
  { id: 412, name: 'Lizard' },
  { id: 413, name: 'Lobo' },
  { id: 414, name: 'Loki' },
  { id: 415, name: 'Longshot' },
  { id: 416, name: 'Luke Cage' },
  { id: 418, name: 'Luke Skywalker' },
  { id: 419, name: 'Luna' },
  { id: 421, name: 'Mach-IV' },
  { id: 422, name: 'Machine Man' },
  { id: 423, name: 'Magneto' },
  { id: 424, name: 'Magog' },
  { id: 425, name: 'Magus' },
  { id: 426, name: 'Man of Miracles' },
  { id: 427, name: 'Man-Bat' },
  { id: 428, name: 'Man-Thing' },
  { id: 429, name: 'Man-Wolf' },
  { id: 430, name: 'Mandarin' },
  { id: 431, name: 'Mantis' },
  { id: 432, name: 'Martian Manhunter' },
  { id: 433, name: 'Marvel Girl' },
  { id: 435, name: 'Master Chief' },
  { id: 436, name: 'Match' },
  { id: 437, name: 'Matt Parkman' },
  { id: 438, name: 'Maverick' },
  { id: 439, name: 'Maxima' },
  { id: 440, name: 'Maya Herrera' },
  { id: 441, name: 'Medusa' },
  { id: 442, name: 'Meltdown' },
  { id: 443, name: 'Mephisto' },
  { id: 444, name: 'Mera' },
  { id: 445, name: 'Metallo' },
  { id: 448, name: 'Metron' },
  { id: 449, name: 'Micah Sanders' },
  { id: 450, name: 'Michelangelo' },
  { id: 451, name: 'Micro Lad' },
  { id: 452, name: 'Mimic' },
  { id: 454, name: 'Misfit' },
  { id: 455, name: 'Miss Martian' },
  { id: 456, name: 'Mister Fantastic' },
  { id: 457, name: 'Mister Freeze' },
  { id: 458, name: 'Mister Knife' },
  { id: 459, name: 'Mister Mxyzptlk' },
  { id: 460, name: 'Mister Sinister' },
  { id: 461, name: 'Mister Zsasz' },
  { id: 462, name: 'Mockingbird' },
  { id: 463, name: 'MODOK' },
  { id: 467, name: 'Molten Man' },
  { id: 469, name: 'Monica Dawson' },
  { id: 470, name: 'Moon Knight' },
  { id: 471, name: 'Moonstone' },
  { id: 472, name: 'Morlun' },
  { id: 474, name: 'Moses Magnum' },
  { id: 475, name: 'Mr Immortal' },
  { id: 476, name: 'Mr Incredible' },
  { id: 477, name: 'Ms Marvel II' },
  { id: 478, name: 'Multiple Man' },
  { id: 479, name: 'Mysterio' },
  { id: 480, name: 'Mystique' },
  { id: 481, name: 'Namor' },
  { id: 483, name: 'Namora' },
  { id: 484, name: 'Namorita' },
  { id: 485, name: 'Naruto Uzumaki' },
  { id: 487, name: 'Nebula' },
  { id: 488, name: 'Negasonic Teenage Warhead' },
  { id: 489, name: 'Nick Fury' },
  { id: 490, name: 'Nightcrawler' },
  { id: 491, name: 'Nightwing' },
  { id: 492, name: 'Niki Sanders' },
  { id: 493, name: 'Nina Theroux' },
  { id: 495, name: 'Northstar' },
  { id: 496, name: 'Nova' },
  { id: 497, name: 'Nova' },
  { id: 498, name: 'Odin' },
  { id: 499, name: 'Offspring' },
  { id: 502, name: 'One Punch Man' },
  { id: 503, name: 'One-Above-All' },
  { id: 504, name: 'Onslaught' },
  { id: 505, name: 'Oracle' },
  { id: 506, name: 'Osiris' },
  { id: 508, name: 'Ozymandias' },
  { id: 509, name: 'Parademon' },
  { id: 510, name: 'Paul Blart' },
  { id: 514, name: 'Penguin' },
  { id: 516, name: 'Phantom Girl' },
  { id: 517, name: 'Phoenix' },
  { id: 518, name: 'Plantman' },
  { id: 520, name: 'Plastic Man' },
  { id: 521, name: 'Plastique' },
  { id: 522, name: 'Poison Ivy' },
  { id: 523, name: 'Polaris' },
  { id: 524, name: 'Power Girl' },
  { id: 526, name: 'Predator' },
  { id: 527, name: 'Professor X' },
  { id: 528, name: 'Professor Zoom' },
  { id: 529, name: 'Psylocke' },
  { id: 530, name: 'Punisher' },
  { id: 531, name: 'Purple Man' },
  { id: 532, name: 'Pyro' },
  { id: 533, name: 'Q' },
  { id: 535, name: 'Question' },
  { id: 536, name: 'Quicksilver' },
  { id: 537, name: 'Quill' },
  { id: 538, name: "Ra's Al Ghul" },
  { id: 539, name: 'Rachel Pirzad' },
  { id: 540, name: 'Rambo' },
  { id: 541, name: 'Raphael' },
  { id: 542, name: 'Raven' },
  { id: 543, name: 'Ray' },
  { id: 545, name: 'Red Arrow' },
  { id: 546, name: 'Red Hood' },
  { id: 547, name: 'Red Hulk' },
  { id: 548, name: 'Red Mist' },
  { id: 549, name: 'Red Robin' },
  { id: 550, name: 'Red Skull' },
  { id: 551, name: 'Red Tornado' },
  { id: 555, name: 'Rey' },
  { id: 556, name: 'Rhino' },
  { id: 557, name: 'Rick Flag' },
  { id: 558, name: 'Riddler' },
  { id: 559, name: 'Rip Hunter' },
  { id: 561, name: 'Robin' },
  { id: 562, name: 'Robin II' },
  { id: 563, name: 'Robin III' },
  { id: 564, name: 'Robin V' },
  { id: 565, name: 'Robin VI' },
  { id: 566, name: 'Rocket Raccoon' },
  { id: 567, name: 'Rogue' },
  { id: 568, name: 'Ronin' },
  { id: 569, name: 'Rorschach' },
  { id: 570, name: 'Sabretooth' },
  { id: 571, name: 'Sage' },
  { id: 572, name: 'Sandman' },
  { id: 573, name: 'Sasquatch' },
  { id: 574, name: 'Sauron' },
  { id: 575, name: 'Savage Dragon' },
  { id: 576, name: 'Scarecrow' },
  { id: 577, name: 'Scarlet Spider' },
  { id: 578, name: 'Scarlet Spider II' },
  { id: 579, name: 'Scarlet Witch' },
  { id: 580, name: 'Scorpia' },
  { id: 581, name: 'Scorpion' },
  { id: 582, name: 'Sebastian Shaw' },
  { id: 583, name: 'Sentry' },
  { id: 584, name: 'Shadow King' },
  { id: 585, name: 'Shadow Lass' },
  { id: 586, name: 'Shadowcat' },
  { id: 587, name: 'Shang-Chi' },
  { id: 588, name: 'Shatterstar' },
  { id: 589, name: 'She-Hulk' },
  { id: 590, name: 'She-Thing' },
  { id: 591, name: 'Shocker' },
  { id: 592, name: 'Shriek' },
  { id: 594, name: 'Sif' },
  { id: 595, name: 'Silk' },
  { id: 598, name: 'Silver Surfer' },
  { id: 599, name: 'Silverclaw' },
  { id: 600, name: 'Simon Baz' },
  { id: 601, name: 'Sinestro' },
  { id: 602, name: 'Siren' },
  { id: 604, name: 'Siryn' },
  { id: 605, name: 'Skaar' },
  { id: 607, name: 'Snowbird' },
  { id: 608, name: 'Sobek' },
  { id: 609, name: 'Solomon Grundy' },
  { id: 610, name: 'Songbird' },
  { id: 611, name: 'Space Ghost' },
  { id: 612, name: 'Spawn' },
  { id: 613, name: 'Spectre' },
  { id: 615, name: 'Speedy' },
  { id: 618, name: 'Spider-Girl' },
  { id: 619, name: 'Spider-Gwen' },
  { id: 620, name: 'Spider-Man' },
  { id: 623, name: 'Spider-Woman' },
  { id: 625, name: 'Spider-Woman III' },
  { id: 627, name: 'Spock' },
  { id: 628, name: 'Spyke' },
  { id: 630, name: 'Star-Lord' },
  { id: 631, name: 'Stardust' },
  { id: 632, name: 'Starfire' },
  { id: 633, name: 'Stargirl' },
  { id: 634, name: 'Static' },
  { id: 635, name: 'Steel' },
  { id: 636, name: 'Stephanie Powell' },
  { id: 637, name: 'Steppenwolf' },
  { id: 638, name: 'Storm' },
  { id: 639, name: 'Stormtrooper' },
  { id: 640, name: 'Sunspot' },
  { id: 641, name: 'Superboy' },
  { id: 642, name: 'Superboy-Prime' },
  { id: 643, name: 'Supergirl' },
  { id: 644, name: 'Superman' },
  { id: 645, name: 'Swamp Thing' },
  { id: 646, name: 'Swarm' },
  { id: 647, name: 'Sylar' },
  { id: 648, name: 'Synch' },
  { id: 649, name: 'T-1000' },
  { id: 650, name: 'T-800' },
  { id: 651, name: 'T-850' },
  { id: 652, name: 'T-X' },
  { id: 653, name: 'Taskmaster' },
  { id: 654, name: 'Tempest' },
  { id: 655, name: 'Thanos' },
  { id: 656, name: 'The Cape' },
  { id: 657, name: 'The Comedian' },
  { id: 658, name: 'Thing' },
  { id: 659, name: 'Thor' },
  { id: 660, name: 'Thor Girl' },
  { id: 661, name: 'Thunderbird' },
  { id: 664, name: 'Thunderstrike' },
  { id: 665, name: 'Thundra' },
  { id: 666, name: 'Tiger Shark' },
  { id: 667, name: 'Tigra' },
  { id: 668, name: 'Tinkerer' },
  { id: 670, name: 'Toad' },
  { id: 671, name: 'Toxin' },
  { id: 672, name: 'Toxin' },
  { id: 676, name: 'Triplicate Girl' },
  { id: 677, name: 'Triton' },
  { id: 678, name: 'Two-Face' },
  { id: 679, name: 'Ultragirl' },
  { id: 680, name: 'Ultron' },
  { id: 681, name: 'Utgard-Loki' },
  { id: 685, name: 'Vanisher' },
  { id: 686, name: 'Vegeta' },
  { id: 687, name: 'Venom' },
  { id: 688, name: 'Venom II' },
  { id: 689, name: 'Venom III' },
  { id: 690, name: 'Venompool' },
  { id: 692, name: 'Vibe' },
  { id: 693, name: 'Vindicator' },
  { id: 696, name: 'Violet Parr' },
  { id: 697, name: 'Vision' },
  { id: 699, name: 'Vixen' },
  { id: 701, name: 'Vulture' },
  { id: 702, name: 'Walrus' },
  { id: 703, name: 'War Machine' },
  { id: 705, name: 'Warlock' },
  { id: 706, name: 'Warp' },
  { id: 707, name: 'Warpath' },
  { id: 708, name: 'Wasp' },
  { id: 709, name: 'Watcher' },
  { id: 711, name: 'White Canary' },
  { id: 713, name: 'Wildfire' },
  { id: 714, name: 'Winter Soldier' },
  { id: 716, name: 'Wolfsbane' },
  { id: 717, name: 'Wolverine' },
  { id: 718, name: 'Wonder Girl' },
  { id: 719, name: 'Wonder Man' },
  { id: 720, name: 'Wonder Woman' },
  { id: 722, name: 'Wyatt Wingfoot' },
  { id: 723, name: 'X-23' },
  { id: 724, name: 'X-Man' },
  { id: 726, name: 'Yellowjacket' },
  { id: 727, name: 'Yellowjacket II' },
  { id: 728, name: 'Ymir' },
  { id: 729, name: 'Yoda' },
  { id: 730, name: 'Zatanna' },
  { id: 731, name: 'Zoom' },
];
