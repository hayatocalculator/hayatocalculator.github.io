// Array structure for BASE_STATS and STARFORCE_STATS
const STATS = ["STR", "DEX", "INT", "LUK", "Attack Power", "Damage", "Boss Damage", "Ignored Enemy DEF"];

// Static data for base stats of every item
// [STR, DEX, INT, LUK, Attack, Damage, Boss, IED]
const BASE_STATS = {
	"weapon": {
		"arcane": {
			"name": "Arcane Umbra Katana",
			"level": 200,
			"stats": [100, 100, 0, 0, 283, 0, 30, 20],
			"canStar": true,
			"canPotential": true,
			"canFlame": true
		},
		"absolab": {
			"name": "AbsoLab Katana",
			"level": 160,
			"stats": [60, 60, 0, 0, 197, 0, 30, 10],
			"canStar": true,
			"canPotential": true,
			"canFlame": true
		},
		"fafnir": {
			"name": "Fafnir Raven Ring",
			"level": 150,
			"stats": [40, 40, 0, 0, 164, 0, 30, 10],
			"canStar": true,
			"canPotential": true,
			"canFlame": true
		}
	},
	"secondary": {
		"base": {
			"name": "Fire Phoenix Blade",
			"level": 100,
			"stats": [4, 0, 0, 0, 2, 0, 0, 0],
			"canStar": false,
			"canPotential": true,
			"canFlame": false
		},
		"pno": {
			"name": "Princess No's Wakizashi",
			"level": 140,
			"stats": [17, 17, 0, 0, 9, 0, 0, 0],
			"canStar": false,
			"canPotential": true,
			"canFlame": false
		}
	},
	"emblem": {
		"gold": {
			"name": "Gold Crescent Emblem",
			"level": 100,
			"stats": [10, 10, 10, 10, 2, 0, 0, 0],
			"canStar": false,
			"canPotential": true,
			"canFlame": false
		}
	},
	"hat": {
		"cra": {
			"name": "Royal Warrior Helm",
			"level": 150,
			"stats": [40, 40, 0, 0, 2, 0, 0, 10],
			"canStar": true,
			"canPotential": true,
			"canFlame": true
		},
		"absolab": {
			"name": "AbsoLab Knight Helm",
			"level": 160,
			"stats": [45, 45, 0, 0, 3, 0, 0, 10],
			"canStar": true,
			"canPotential": true,
			"canFlame": true
		},
		"arcane": {
			"name": "Arcane Umbra Knight Hat",
			"level": 200,
			"stats": [65, 65, 0, 0, 7, 0, 0, 15],
			"canStar": true,
			"canPotential": true,
			"canFlame": true
		}
	},
	"top": {
		"cra": {
			"name": "Eagle Eye Warrior Armor",
			"level": 150,
			"stats": [30, 30, 0, 0, 2, 0, 0, 5],
			"canStar": true,
			"canPotential": true,
			"canFlame": true
		}
	},
	"bottom": {
		"cra": {
			"name": "Trixter Warrior Pants",
			"level": 150,
			"stats": [30, 30, 0, 0, 2, 0, 0, 5],
			"canStar": true,
			"canPotential": true,
			"canFlame": true
		}
	},
	"gloves": {
		"absolab": {
			"name": "AbosLab Knight Gloves",
			"level": 160,
			"stats": [20, 20, 0, 0, 5, 0, 0, 0],
			"canStar": true,
			"canPotential": true,
			"canFlame": true
		},
		"arcane": {
			"name": "Arcane Umbra Knight Gloves",
			"level": 200,
			"stats": [40, 40, 0, 0, 9, 0, 0, 0],
			"canStar": true,
			"canPotential": true,
			"canFlame": true
		}
	},
	"shoes": {
		"absolab": {
			"name": "AbsoLab Knight Shoes",
			"level": 160,
			"stats": [20, 20, 0, 0, 5, 0, 0, 0],
			"canStar": true,
			"canPotential": true,
			"canFlame": true
		},
		"arcane": {
			"name": "Arcane Umbra Knight Shoes",
			"level": 200,
			"stats": [40, 40, 0, 0, 9, 0, 0, 0],
			"canStar": true,
			"canPotential": true,
			"canFlame": true
		}
	},
	"shoulder": {
		"absolab": {
			"name": "AbsoLab Knight Shoulder",
			"level": 160,
			"stats": [14, 14, 14, 14, 10, 0, 0, 0],
			"canStar": true,
			"canPotential": true,
			"canFlame": false
		},
		"arcane": {
			"name": "Arcane Umbra Knight Shoulder",
			"level": 200,
			"stats": [35, 35, 35, 35, 20, 0, 0, 0],
			"canStar": true,
			"canPotential": true,
			"canFlame": false
		}
	},
	"cape": {
		"absolab": {
			"name": "AbsoLab Knight Cape",
			"level": 160,
			"stats": [15, 15, 15, 15, 2, 0, 0, 0],
			"canStar": true,
			"canPotential": true,
			"canFlame": true
		},
		"arcane": {
			"name": "Arcane Umbra Knight Cape",
			"level": 200,
			"stats": [35, 35, 35, 35, 6, 0, 0, 0],
			"canStar": true,
			"canPotential": true,
			"canFlame": true
		}
	},
	"belt": {
		"superior": {
			"name": "Superior Engraved Gollux Belt",
			"level": 150,
			"stats": [60, 60, 60, 60, 35, 0, 0, 0],
			"canStar": true,
			"canPotential": true,
			"canFlame": true
		},
		"dreamy": {
			"name": "Dreamy Belt",
			"level": 200,
			"stats": [50, 50, 50, 50, 6, 0, 0, 0],
			"canStar": true,
			"canPotential": true,
			"canFlame": true
		}
	},
	"ring": {
		"superior": {
			"name": "Superior Gollux Ring",
			"level": 150,
			"stats": [10, 10, 10, 10, 8, 0, 0, 0],
			"canStar": true,
			"canPotential": true,
			"canFlame": false
		},
		"reinforced": {
			"name": "Reinforced Gollux Ring",
			"level": 140,
			"stats": [8, 8, 8, 8, 5, 0, 0, 0],
			"canStar": true,
			"canPotential": true,
			"canFlame": false
		},
		"solid": {
			"name": "Solid Gollux Ring",
			"level": 130,
			"stats": [6, 6, 6, 6, 4, 0, 0, 0],
			"canStar": true,
			"canPotential": true,
			"canFlame": false
		},
		"kannas": {
			"name": "Kanna's Treasure",
			"level": 140,
			"stats": [5, 5, 5, 5, 1, 0, 0, 0],
			"canStar": true,
			"canPotential": true,
			"canFlame": false
		},
		"meister": {
			"name": "Meister Ring",
			"level": 140,
			"stats": [5, 5, 5, 5, 1, 0, 0, 0],
			"canStar": true,
			"canPotential": true,
			"canFlame": false
		},
		"glonas": {
			"name": "Glona's Heart",
			"level": 180,
			"stats": [7, 7, 7, 7, 5, 0, 0, 0],
			"canStar": true,
			"canPotential": true,
			"canFlame": false
		},
		"endless": {
			"name": "Endless Terror",
			"level": 200,
			"stats": [5, 5, 5, 5, 4, 0, 0, 0],
			"canStar": true,
			"canPotential": true,
			"canFlame": false
		}
	},
	"pendant": {
		"superior": {
			"name": "Superior Engraved Gollux Pendant",
			"level": 150,
			"stats": [28, 28, 28, 28, 5, 0, 0, 0],
			"canStar": true,
			"canPotential": true,
			"canFlame": true
		},
		"dominator": {
			"name": "Dominator Pendant",
			"level": 140,
			"stats": [20, 20, 20, 20, 3, 0, 0, 0],
			"canStar": true,
			"canPotential": true,
			"canFlame": true
		},
		"sweetwater": {
			"name": "Sweetwater Pendant",
			"level": 160,
			"stats": [34, 34, 34, 34, 0, 0, 0, 0],
			"canStar": true,
			"canPotential": true,
			"canFlame": true
		},
		"source": {
			"name": "Source of Suffering",
			"level": 160,
			"stats": [10, 10, 10, 10, 3, 0, 0, 0],
			"canStar": true,
			"canPotential": true,
			"canFlame": true
		}
	},
	"face": {
		"sweetwater": {
			"name": "Sweetwater Tattoo",
			"level": 160,
			"stats": [5, 5, 5, 5, 0, 0, 0, 0],
			"canStar": true,
			"canPotential": true,
			"canFlame": true
		},
		"berserked": {
			"name": "Berserked",
			"level": 160,
			"stats": [10, 10, 10, 10, 10, 0, 0, 0],
			"canStar": true,
			"canPotential": true,
			"canFlame": true
		}
	},
	"eye": {
		"black-bean": {
			"name": "Black Bean Mark",
			"level": 135,
			"stats": [7, 7, 7, 7, 1, 0, 0, 0],
			"canStar": true,
			"canPotential": true,
			"canFlame": true
		},
		"papulatus": {
			"name": "Papulatus Mark",
			"level": 145,
			"stats": [8, 8, 8, 8, 1, 0, 0, 0],
			"canStar": true,
			"canPotential": true,
			"canFlame": true
		},
		"sweetwater": {
			"name": "Sweetwater Monocle",
			"level": 160,
			"stats": [10, 10, 10, 10, 0, 0, 0, 0],
			"canStar": true,
			"canPotential": true,
			"canFlame": true
		},
		"eyepatch": {
			"name": "Magic Eyepatch",
			"level": 160,
			"stats": [15, 15, 15, 15, 3, 0, 0, 0],
			"canStar": true,
			"canPotential": true,
			"canFlame": true
		}
	},
	"earrings": {
		"superior": {
			"name": "Superior Gollux Earrings",
			"level": 150,
			"stats": [15, 15, 15, 15, 10, 0, 0, 0],
			"canStar": true,
			"canPotential": true,
			"canFlame": true
		},
		"sweetwater": {
			"name": "Sweetwater Earrings",
			"level": 160,
			"stats": [10, 10, 10, 10, 0, 0, 0, 0],
			"canStar": true,
			"canPotential": true,
			"canFlame": true
		},
		"commanding": {
			"name": "Commanding Force Earring",
			"level": 200,
			"stats": [7, 7, 7, 7, 5, 0, 0, 0],
			"canStar": true,
			"canPotential": true,
			"canFlame": true
		}
	},
	"badge": {
		"crystal": {
			"name": "Crystal Ventus Badge",
			"level": 130,
			"stats": [10, 10, 10, 10, 5, 0, 0, 0],
			"canStar": false,
			"canPotential": false,
			"canFlame": false
		},
		"ghost": {
			"name": "Ghost Ship Exorcist",
			"level": 150,
			"stats": [3, 3, 3, 3, 2, 0, 0, 0],
			"canStar": true,
			"canPotential": true,
			"canFlame": false
		},
		"Sengoku": {
			"name": "Sengoku Hakase Badge",
			"level": 160,
			"stats": [10, 10, 10, 10, 10, 0, 0, 0],
			"canStar": true,
			"canPotential": true,
			"canFlame": false
		},
		"genesis": {
			"name": "Genesis Badge",
			"level": 200,
			"stats": [15, 15, 15, 15, 10, 0, 0, 0],
			"canStar": false,
			"canPotential": false,
			"canFlame": false
		}
	}
	/*
	Medal
		Antellion Guardian
		Vanquisher of Nightmares
		The True Abyss
		One with the Labyrinth
		Seven Day Monster Parker
	Pocket
		Pink Holy Cup
		Cursed Red Spellbook
		Cursed Green Spellbook
		Cursed Blue Spellbook
		Cursed Yellow Spellbook
	Android
		Aloraroid
		Skyroid
		Other
	Heart
		Lidium Heart
		Glimmering Wondroid Heart
		Black Heart
	*/
}

// Static data for potential sets for items
// 2D array where first dimension is based on type/level, e.g. >150 Gloves and second dimension is first line only then second/third lines
const POTENTIAL_SETS = [
	// >150 Weapon/Secondary
	[["ATT: +13%", "Boss Monster Damage: +40%", "Boss Monster Damage: +35%", "Boss Monster Damage: +30%", "Ignore Monster DEF: +40%", "Ignore Monster DEF: +35%", "Damage: +13%", "STR: +13%", "DEX: +13%", "All Stats: +10%"],
	["ATT: +13%", "ATT: +10%", "Boss Monster Damage: +40%", "Boss Monster Damage: +35%", "Boss Monster Damage: +30%", "Boss Monster Damage: +20%", "Ignore Monster DEF: +40%", "Ignore Monster DEF: +35%", "Ignore Monster DEF: +30%", "Damage: +13%", "Damage: +10%", "STR: +13%", "STR: +10%", "DEX: +13%", "DEX: +10%", "All Stats: +10%", "All Stats: +7%"]],
	// <=150 Weapon/Secondary
	[["ATT: +12%", "Boss Monster Damage: +40%", "Boss Monster Damage: +35%", "Boss Monster Damage: +30%", "Ignore Monster DEF: +40%", "Ignore Monster DEF: +35%", "Damage: +12%", "STR: +12%", "DEX: +12%", "All Stats: +9%"],
	["ATT: +12%", "ATT: +9%", "Boss Monster Damage: +40%", "Boss Monster Damage: +35%", "Boss Monster Damage: +30%", "Boss Monster Damage: +20%", "Ignore Monster DEF: +40%", "Ignore Monster DEF: +35%", "Ignore Monster DEF: +30%", "Damage: +12%", "Damage: +9%", "STR: +12%", "STR: +9%", "DEX: +12%", "DEX: +9%", "All Stats: +9%", "All Stats: +6%"]],
	// Emblem
	[["ATT: +12%", "Ignore Monster DEF: +40%", "Ignore Monster DEF: +35%", "Damage: +12%", "STR: +12%", "DEX: +12%", "All Stats: +9%"],
	["ATT: +12%", "ATT: +9%", "Ignore Monster DEF: +40%", "Ignore Monster DEF: +35%", "Ignore Monster DEF: +30%", "Damage: +12%", "Damage: +9%", "STR: +12%", "STR: +9%", "DEX: +12%", "DEX: +9%", "All Stats: +9%", "All Stats: +6%"]],
	// >150 Gloves
	[["Critical Damage: +8%", "STR: +13%", "DEX: +13%",  "All Stats: +10%"],
	["Critical Damage: +8%", "STR: +13%", "STR: +10%", "DEX: +13%", "DEX: +10%", "All Stats: +10%", "All Stats: +7%"]],
	// <=150 Gloves
	[["Critical Damage: +8%", "STR: +12%", "DEX: +12%", "All Stats: +9%"],
	["Critical Damage: +8%", "STR: +12%", "STR: +9%", "DEX: +12%", "DEX: +9%", "All Stats: +9%", "All Stats: +6%"]],
	// >150 Other
	[["STR: +13%", "DEX: +13%", "All Stats: +10%"],
	["STR: +13%", "STR: +10%", "DEX: +13%", "DEX: +10%", "All Stats: +10%", "All Stats: +7%"]],
	// <=150 Other
	[["STR: +12%", "DEX: +12%", "All Stats: +9%"],
	["STR: +12%", "STR: +9%", "DEX: +12%", "DEX: +9%", "All Stats: +9%", "All Stats: +6%"]]
]

// Stores data about currently equipped items
let EQUIP_INFO = {
	"weapon": {},
	"secondary": {},
	"emblem": {},
	"hat": {},
	"top": {},
	"bottom": {},
	"gloves": {},
	"shoes": {},
	"shoulder": {},
	"cape": {},
	"belt": {},
	"ring1": {},
	"ring2": {},
	"ring3": {},
	"ring4": {},
	"pendant1": {},
	"pendant2": {},
	"face": {},
	"eye": {},
	"earrings": {},
	"badge": {}

	/*
	Medal
		Antellion Guardian
		Vanquisher of Nightmares
		The True Abyss
		One with the Labyrinth
		Seven Day Monster Parker
	Pocket
		Pink Holy Cup
		Cursed Red Spellbook
		Cursed Green Spellbook
		Cursed Blue Spellbook
		Cursed Yellow Spellbook
	Android
		Aloraroid
		Skyroid
		Other
	Heart
		Lidium Heart
		Glimmering Wondroid Heart
		Black Heart
	*/
}

// Setting all the necessary properties in EQUIP_INFO
Object.keys(EQUIP_INFO).forEach(elem => {
	EQUIP_INFO[elem].name = null;
	EQUIP_INFO[elem].level = null;
	EQUIP_INFO[elem].baseStats = null;
	EQUIP_INFO[elem].canStar = null;
	EQUIP_INFO[elem].canPotential = null;
	EQUIP_INFO[elem].canFlame = null;
	EQUIP_INFO[elem].numStars = null;
	EQUIP_INFO[elem].starforceStats = null;
	EQUIP_INFO[elem].potential = [null, null, null];
	EQUIP_INFO[elem].flameStats = null;
});

// Activates the tooltip by setting classes for the trigger/container associated with the passed ID
function activateTooltip(triggerID, text) {
	document.getElementById(triggerID).classList.remove("inactive-tooltip-trigger");
	document.getElementById(triggerID + "-tooltip").classList.add("tooltip-container");
	document.getElementById(triggerID + "-tooltip").innerHTML = text;
}

// Sets the autocomplete suggestions for the passed input element to the passed array
// Adapted from w3schools autocomplete page
function autocomplete(type, input, array) {
	// Add input listener that resets suggestion list based on current input
	input.addEventListener("input", function(e) {
		// Close existing suggestion list
		closeAllLists();
		// Create the suggestion list container
		let listContainer = document.createElement("DIV");
		listContainer.setAttribute("class", "autocomplete-items");
		this.parentNode.appendChild(listContainer);

		// Check every suggestion and add if still possible
		for (var i = 0; i < array.length; i++) {
			// If the suggestion contains the input, add the suggestion to the list
			if (array[i].toUpperCase().indexOf(this.value.toUpperCase()) >= 0) {
				let listItem = document.createElement("DIV");
				listItem.innerHTML = array[i];
				// When clicked, set the potential to clicked value and close list
				listItem.addEventListener("click", function(e) {
					input.value = this.innerHTML;
					setEquipmentPotential(type, this.parentElement.parentElement.childNodes[1].id, this.innerHTML);
					closeAllLists();
				});
				listContainer.appendChild(listItem);
			}
		}
	});

	// Closes existing autocomplete lists aside from passed argument
	function closeAllLists(elem) {
		var listItems = document.getElementsByClassName("autocomplete-items");
		for (var i = 0; i < listItems.length; i++) {
			if (elem != listItems[i] && elem != input) {
				listItems[i].parentNode.removeChild(listItems[i]);
			}
		}
	}

	document.addEventListener("click", function (e) {
	    closeAllLists(e.target);
	});
}

function setEquipmentType(type) {
	document.getElementById("equipment-select-text").innerText = type[0].toUpperCase() + (isNaN(type[type.length-1]) ? type.slice(1) : type.slice(1, type.length-1) + ' ' + type.charAt(type.length-1));
	document.getElementById("equipment-select").classList.remove("invisible");
	updateEquipSelect(type);
}

function setEquipmentItem(type, item) {
	let parsedType = (type.indexOf("ring") == 0 || type.indexOf("pendant") == 0) ? type.slice(0, -1) : type;
	let equipBaseStats = BASE_STATS[parsedType][item]
	let equipCurrStats = EQUIP_INFO[type]
	equipCurrStats.name = equipBaseStats.name;
	equipCurrStats.level = equipBaseStats.level;
	equipCurrStats.baseStats = equipBaseStats.stats;
	equipCurrStats.canStar = equipBaseStats.canStar;
	equipCurrStats.canPotential = equipBaseStats.canPotential;
	equipCurrStats.canFlame = equipBaseStats.canFlame;
	equipCurrStats.numStars = 0;

	updateEquipSelect(type);
	updateEquipDisplay(type);
	//updateTotalStats();
}

// Checks if number of stars is valid based on item level
function isValidStar(type, stars) {
	let level = EQUIP_INFO[type].level;
	if (stars < 0)
		return false;
	else if (stars <= 5)
		return true;
	else if (stars <= 8 && level >= 95)
		return true;
	else if (stars <= 10 && level >= 108)
		return true;
	else if (stars <= 15 && level >= 118)
		return true;
	else if (stars <= 20 && level >= 128)
		return true;
	else if (stars <= 25 && level >= 138)
		return true;
	else
		return false;
}

// Calculates the stats gained from stars
function getStarforceStats(type, level, stars) {
	// [STR, DEX, INT, LUK, Attack, Damage, Boss, IED]
	let stats = [0, 0, 0, 0, 0, 0, 0, 0];

	let weapon_gain = [
		[6, 7, 8, 9, 13], // 16*
		[7, 8, 9, 9, 13], // 17*
		[7, 8, 9, 10, 14], // 18*
		[8, 9, 10, 11, 14], // 19*
		[9, 10, 11, 12, 15], // 20*
		[0, 11, 12, 13, 16], // 21*
		[0, 12, 13, 14, 17], // 22*
		[0, 30, 31, 32, 34], // 23*
		[0, 31, 32, 33, 35], // 24*
		[0, 32, 33, 34, 36] // 25*
	];

	let other_gain = [
		[7, 8, 9, 10, 12], // 16*
		[8, 9, 10, 11, 13], // 17*
		[9, 10, 11, 12, 14], // 18*
		[10, 11, 12, 13, 15], // 19*
		[11, 12, 13, 14, 16], // 20*
		[0, 13, 14, 15, 17], // 21*
		[0, 15, 16, 17, 19], // 22*
		[0, 17, 18, 19 ,21], // 23*
		[0, 19, 20, 21, 23], // 24*
		[0, 21, 22, 23, 25] // 25*
	];

	for (let star = 1; star <= stars; star++) {
		if (star <= 5) {
			stats[0] += 2;
			stats[1] += 2;

			// Weapon visible att gain is current attack * 0.02 + 1, rounded down
			if (type === 'weapon')
				stats[4] += Math.floor((EQUIP_INFO.weapon.baseStats[4] + stats[4]) * 0.02 + 1);
			// Gloves visible att gain of 1 at odd numbers in range 5-15
			else if (type === 'gloves' && (star == 5))
				stats[4] += 1
		}
		else if (star <= 15) {
			stats[0] += 3;
			stats[1] += 3;

			// Weapon visible att gain is current attack * 0.02 + 1, rounded down
			if (type === 'weapon')
				stats[4] += Math.floor((EQUIP_INFO.weapon.baseStats[4] + stats[4]) * 0.02 + 1);
			// Gloves visible att gain at odd numbers in range 5-15
			else if (type === 'gloves' && (star % 2))
				stats[4] += 1;
		}

		else { // 16* - 25*
			if (level <= 137) { // 128 ~ 137
				stats[0] += 7;
				stats[1] += 7;

				if (type === 'weapon')
					stats[4] += weapon_gain[star-16][0];
				else
					stats[4] += other_gain[star-16][0];
			}
			else if (level <= 149) { // 138 ~ 149
				stats[0] += 9;
				stats[1] += 9;

				if (type === 'weapon')
					stats[4] += weapon_gain[star-16][1];
				else
					stats[4] += other_gain[star-16][1];
			}
			else if (level <= 159) { // 150 ~ 159
				stats[0] += 11;
				stats[1] += 11;

				if (type === 'weapon')
					stats[4] += weapon_gain[star-16][2];
				else
					stats[4] += other_gain[star-16][2];
			}
			else if (level <= 199) { // 160 ~ 199
				stats[0] += 13;
				stats[1] += 13;

				if (type === 'weapon')
					stats[4] += weapon_gain[star-16][3];
				else
					stats[4] += other_gain[star-16][3];
			}
			else { // 200+
				stats[0] += 15;
				stats[1] += 15;

				if (type === 'weapon')
					stats[4] += weapon_gain[star-16][4];
				else
					stats[4] += other_gain[star-16][4];
			}
		}
	}

	return stats;
}

function setEquipmentStars(type, stars) {
	let parsedStars = +stars;
	if (Number.isInteger(parsedStars) && isValidStar(type, parsedStars)) {
		document.getElementById("equipment-select-error").classList.add("invisible");

		let starforceType = (type === 'gloves' ? 'gloves' : 'other');
		EQUIP_INFO[type].numStars = parsedStars
		EQUIP_INFO[type].starforceStats = getStarforceStats(type, EQUIP_INFO[type].level, parsedStars);
		updateEquipDisplay(type);
		//updateTotalStats();
	}
	else {
		let error = document.getElementById("equipment-select-error");
		error.classList.remove("invisible");
		error.innerHTML = "Invalid starforce!"
	}
}

function printStars(num) {
	let starString = "";
	for (let i = 1; i <= 15 && i <= num; i++) {
		starString += "*";
		if (i % 5 == 0)
			starString += " ";
	}

	if (num > 15) {
		starString += "<br>";
		for (let i = 16; i <= num; i++) {
			starString += "*";
			if (i % 5 == 0)
				starString += " ";
		}
	}

	return starString;
}

function setEquipmentPotential(type, potentialInputId, potential) {
	// Id of the potential line input element, should contain "first"/"second"/"third"
	if (potentialInputId.indexOf("first") >= 0)
		EQUIP_INFO[type].potential[0] = potential;
	else if (potentialInputId.indexOf("second") >= 0)
		EQUIP_INFO[type].potential[1] = potential;
	else
		EQUIP_INFO[type].potential[2] = potential;

	updateEquipDisplay(type);
}

function togglePotential() {
	document.getElementById("equipment-select-potential-menu").classList.toggle("invisible");
}

// Returns the POTENTIAL_SET according to type and equip level,
// where [0] is first line, and [1] is second/third line
// If nothing equipped, return empty array
function getPotentialSet(type) {
	let equipLevel = EQUIP_INFO[type].level;
	if (!equipLevel)
		return [];

	if (type == "weapon" || type == "secondary") {
		if (equipLevel > 150)
			return POTENTIAL_SETS[0];
		else
			return POTENTIAL_SETS[1];
	}
	else if (type == "emblem")
		return POTENTIAL_SETS[2];
	else if (type == "gloves") {
		if (equipLevel > 150)
			return POTENTIAL_SETS[3];
		else
			return POTENTIAL_SETS[4];
	}
	else if (equipLevel > 150)
		return POTENTIAL_SETS[5];
	else
		return POTENTIAL_SETS[6];
}

function updateEquipDisplay(type) {
	let equipCurrStats = EQUIP_INFO[type]

	// Stars and name
	let tooltipText = "";
	if (equipCurrStats.numStars > 0)
		tooltipText += "<span style='width: 100%; text-align: center; display: inline-block;'>" + printStars(equipCurrStats.numStars) + "</span><br>";
	tooltipText += "<span style='font-weight: bold'>" + equipCurrStats.name + "</span><br>";

	// Stats section
	for (let i = 0; i < STATS.length; i++) {
		tooltipText += STATS[i] + ": " + equipCurrStats.baseStats[i];
		if (equipCurrStats.starforceStats !== null && equipCurrStats.starforceStats[i] != 0) {
			tooltipText += " <span style='color: blue'>+" + equipCurrStats.starforceStats[i] + "</span>";
		}
		// TODO -- Add flames
		tooltipText += "<br>";
	}

	// Potential section
	if (equipCurrStats.potential[0] || equipCurrStats.potential[1] || equipCurrStats.potential[2]) {
		tooltipText += "<hr>";
		tooltipText += (equipCurrStats.potential[0]) ? equipCurrStats.potential[0] + "<br>" : "";
		tooltipText += (equipCurrStats.potential[1]) ? equipCurrStats.potential[1] + "<br>" : "";
		tooltipText += (equipCurrStats.potential[2]) ? equipCurrStats.potential[2] + "<br>" : "";
	}

	activateTooltip("equipment-" + type, tooltipText);
}

function updateEquipSelect(type) {
	let equipCurrStats = EQUIP_INFO[type];

	// Updating item input
	let inputItem = document.getElementById("equipment-select-item");
	inputItem.innerText = (equipCurrStats.name) ? equipCurrStats.name : "Item";

	let parsedType = (type.indexOf("ring") == 0 || type.indexOf("pendant") == 0) ? type.slice(0, -1) : type;
	let itemDropdownNode = document.getElementById("equipment-select-item").nextElementSibling;
	itemDropdownNode.innerHTML = "";
	Object.keys(BASE_STATS[parsedType]).forEach(item => {
		let tempNode = document.createElement("li");
		tempNode.innerHTML = "<li><a class=\"dropdown-item\" href=\"javascript:void(0)\" onclick=\"setEquipmentItem('" + type + "', '" + item + "')\">" + BASE_STATS[parsedType][item].name + "</a></li>";
		itemDropdownNode.appendChild(tempNode);
	});

	// Updating starforce input
	let inputStarforce = document.getElementById("equipment-select-stars");
	inputStarforce.value = (equipCurrStats.numStars) ? equipCurrStats.numStars : "";
	inputStarforce.setAttribute("oninput", "setEquipmentStars('" + type + "', this.value);");

	if (equipCurrStats.canStar)
		inputStarforce.classList.remove("invisible");
	else
		inputStarforce.classList.add("invisible");


	// Updating potential input
	let inputPotential = document.getElementById("equipment-select-potential");
	let inputPotentialFirst = document.getElementById("equipment-select-potential-first");
	let inputPotentialSecond = document.getElementById("equipment-select-potential-second");
	let inputPotentialThird = document.getElementById("equipment-select-potential-third");

	inputPotentialFirst.value = (equipCurrStats.potential[0]) ? (equipCurrStats.potential[0]) : "";
	inputPotentialSecond.value = (equipCurrStats.potential[1]) ? (equipCurrStats.potential[1]) : "";
	inputPotentialThird.value = (equipCurrStats.potential[2]) ? (equipCurrStats.potential[2]) : "";

	if (equipCurrStats.canPotential) {
		inputPotential.classList.remove("invisible");
		autocomplete(type, inputPotentialFirst, getPotentialSet(type)[0]);
		autocomplete(type, inputPotentialSecond, getPotentialSet(type)[1]);
		autocomplete(type, inputPotentialThird, getPotentialSet(type)[1]);
	}
	else
		inputPotential.classList.add("invisible");


	// Updating flame input
	// TODO
}

function updateTotalStats() {
	// Add stats while iterating through all EQUIP_INFO for sources tooltip text
	let totalStats = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

	Object.keys(EQUIP_INFO).forEach(currEquip => {
		let currEquipBaseStats = EQUIP_INFO[currEquip].baseStats;
		for (let i = 0; i < currEquipBaseStats.length; i++) {
			totalStats[i] += currEquipBaseStats[i];
		}
	})

	// Tooltip sections: Base Stat + Starforce, Flame Stat,
	let tooltipText = "";
	let currStat = "att"
	activateTooltip("total-" + currStat, tooltipText);
	document.getElementById("total-att").childNodes[0].nodeValue = totalStats[6];
	document.getElementById("total-att-tooltip").classList.add("tooltip-container");
	document.getElementById("total-str").childNodes[0].nodeValue = totalStats[0];
	document.getElementById("total-str-tooltip").classList.add("tooltip-container");
	document.getElementById("total-dex").childNodes[0].nodeValue = totalStats[1];
	document.getElementById("total-dex-tooltip").classList.add("tooltip-container");
	document.getElementById("total-boss").childNodes[0].nodeValue = totalStats[12];
	document.getElementById("total-boss-tooltip").classList.add("tooltip-container");
	document.getElementById("total-ied").childNodes[0].nodeValue = totalStats[13];
	document.getElementById("total-ied-tooltip").classList.add("tooltip-container");
}