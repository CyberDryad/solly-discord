import { Channels, Colours, Emojis } from "../../src/Utils";

export const welcome = `Welcome to Solak Discord's **Requirements** channel.\n\nPlease see below for our minimum requirements for team-forming. If you are looking to team-form without requirements, please use <#${Channels.freeForAll}>.\n\n\`>\` indicates the preference order of an item, with the last item being the minimum requirement.\n\u200B`;

export const content = [
    {
        title: `⬥ __**Basic Requirements**__`,
        toc: 'Basic',
        colour: Colours.gold,
        description: `> __**Potions**__\n\n⬥ ${Emojis.elderOverload} > ${Emojis.supremeOverload} Overload\n\u200B⬥ ${Emojis.adrenRenewal4} > ${Emojis.replenishment} > ${Emojis.replenPot} > ${Emojis.adrenPotion} Adrenaline Potion\n\u200B⬥ ${Emojis.weaponPoison} Weapon Poison +++\n\n> __**Gear**__\n\n⬥ ${Emojis.cinderbanes} Cinderbane gloves\n\u200B⬥ ${Emojis.vigour} Ring of Vigour **OR** Passive after the [Extinction](https://runescape.wiki/w/Extinction) quest\n\u200B⬥ ${Emojis.kalZuk} > ${Emojis.kalMor} ${Emojis.kalKet} ${Emojis.kalMej} ${Emojis.kalXil} TzKal Cape\n\u200B⬥ ${Emojis.grim} Damage boosting pocket slot item\n\u200B⬥ ${Emojis.dealerhood90} T80+ Power Gear\n\u200B⬥ ${Emojis.darkIceShard} T85+ Weapons (${Emojis.magic} / ${Emojis.ranged} / ${Emojis.attack}) \n\u200B⬥ ${Emojis.deathguard90} ${Emojis.skulllantern90} T90+ Weapons (${Emojis.necro})\n\u200B⬥ ${Emojis.augmentor} Augmented gear with [Entry Level Perks](https://pvme.github.io/pvme-guides/invention-and-perks/perk-information/?h=)\n\n> __**Familiar**__\n\n⬥ DPS: ${Emojis.reaverPouch} Blood Reaver if using ${Emojis.bikArrow} Bik Arrows, otherwise ${Emojis.ripperDemon} Ripper Demon\n\u200B⬥ Base: ${Emojis.kalgDemon} Kal'gerion Demon\n\u200B⬥ No Beasts of Burden (familiars that can carry items, such as a Pack yak)\n\n> __**Miscellaneous**__\n\n⬥ ${Emojis.ruination} T99 > ${Emojis.sorrow} T95 Prayer\n\u200B⬥ ${Emojis.dive} Dive **OR** ${Emojis.bladedDive} Bladed Dive\n\u200B⬥ ${Emojis.vulnBomb} Vulnerability Bombs (it is everyone's responsibility to keep the boss vulned)\n\u200B`
    },
    {
        title: `\u200B\n⬥ __**Melee Additional Requirements**__`,
        toc: 'Melee Additional',
        colour: Colours.red,
        description: `⬥ ${Emojis.greaterBarge} Greater Barge\n\u200B⬥ ${Emojis.scourge} Abyssal Scourge\n\u200B⬥ ${Emojis.zgs} Zaros Godsword **OR** ${Emojis.ezk} Ek-ZekKil`,
    },
    {
        title: `\u200B\n⬥ __**Magic Additional Requirements**__`,
        toc: 'Magic Additional',
        colour: Colours.blue,
        description: `⬥ ${Emojis.plantedFeet} Planted Feet **OR** ${Emojis.greaterSun} Greater Sunshine\n\u200B⬥ ${Emojis.gconc} Greater Concentrated Blast\n\u200B⬥ ${Emojis.inciteFear} City of Senntisten Spells`,
    },
    {
        title: `\u200B\n⬥ __**Ranged Additional Requirements**__`,
        toc: 'Ranged Additional',
        colour: Colours.green,
        description: `⬥ ${Emojis.plantedFeet} Planted Feet **OR** ${Emojis.greaterDeathSwiftness} Greater Death's Swiftness\n\u200B⬥ ${Emojis.grico} Greater Ricochet\n\u200B⬥ ${Emojis.caroming4} Caroming 4\n\u200B⬥ ${Emojis.rubyBak} ${Emojis.hydrixBak} Bakriminel Bolts **OR** ${Emojis.fulArrow} ${Emojis.bikArrow} ${Emojis.deathspore} T95 Arrows`,
    },
    {
        title: `\u200B\n⬥ __**Necromancy Additional Requirements**__`,
        toc: 'Necromancy Additional',
        colour: Colours.purple,
        description: `⬥ Conjures & Commands: ${Emojis.conjureskeleton} ${Emojis.commandwarrior} ${Emojis.conjurezombie} ${Emojis.commandzombie} ${Emojis.conjureghost} ${Emojis.commandghost}\n\u200B⬥ ${Emojis.incantations} Incantations: ${Emojis.threadsoffate} ${Emojis.gboneshield} ${Emojis.lifetransfer} ${Emojis.invokedeath} ${Emojis.splitsoul}\n\u200B⬥ ${Emojis.spiritpact3} Spirit Pact 3`,
    },
    {
        title: `\u200B\n⬥ __**Notes**__`,
        toc: 'Notes',
        colour: Colours.gold,
        description: `⬥ The usage of solid foods (${Emojis.sailfishSoup} ${Emojis.sailfish} etc) is prohibited.\n\u200B⬥ ${Emojis.cryptHelm} ${Emojis.cryptBody} ${Emojis.cryptLegs} Cryptbloom and tank gear is prohibited.\n\u200B⬥ If hybridding some items my be unnecessary (i.e. ${Emojis.gstaff} ${Emojis.eof}). Refer to hybrid guides for example presets.`,
    },
]
