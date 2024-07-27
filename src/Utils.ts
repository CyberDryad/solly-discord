import { TextChannel, EmbedBuilder } from "discord.js";

const environment = process.env.ENVIRONMENT === 'PRODUCTION' ? 'PRODUCTION' : 'DEVELOPMENT';

export const purgeChannel = async (channel: TextChannel) => {
    const messages = await channel.messages.fetch({ limit: 100 });
    for await (const [_id, message] of messages) {
        if (!message.pinned) {
            await message.delete();
        }
    }
}

export const stripRole = (role: string) => {
    return role.slice(3, -1)
}

export const Colours = {
    green: 2067276,
    aqua: 1146986,
    blue: 2123412,
    red: 10038562,
    lightgrey: 10070709,
    gold: 12745742,
    default: 5198940,
    lightblue: 302332,
    darkgrey: 333333,
    purple: 10181046,
    discord: {
        green: 5763719,
        red: 15548997
    }
}

export const Emojis = {
    gem1: '<:gem1:1024939203160711209>',
    gem2: '<:gem2:1024939217895297084>',
    gem3: '<:gem3:1024939228527853649>',
    malevolence: '<:malevolence:513190159416557573>',
    voke: '<:voke:535541259465392143>',
    chin: '<:mechchin:641669268722810881>',
    umbra: '<:umbra:1025086079319162880>',
    glacies: '<:glacies:1025086094775177297>',
    cruor: '<:cruor:1025085871772409937>',
    fumus: '<:fumus:1025086111262982237>',
    freedom: '<:freedom:535541258240786434>',
    dommines: '<:dommine:662249620579155968>',
    ripperDemon: '<:ripperpouch:703581275453128714>',
    ripperScroll: '<:ripperscroll:703581275155464203>',
    kalgDemon: '<:kalgpouch:921410226484301925>',
    kalgScroll: '<:kalgscroll:841409588954923049>',
    mammoth: '<:Mammoth:513195712146702337>',
    mammothScroll: '<:mammothscroll:1025428178111578182>',
    callFamiliar: '<:callfollower:933299003121078332>',
    spiritualPrayer: '<:spiritualprayer:651079281882955787>',
    mani: '<:mani:643505153709965322>',
    berserker: '<:berserker:643505116347105290>',
    vulnBomb: '<:vulnbomb:655341074235129858>',
    amalg: '<:shadowamalg:878739232951255091>',
    magic: '<:Magic:689504724159823906>',
    melee: '<:melee:1096130867279171706>',
    dummy: '<:dummy:656844963522281473>',
    nex: '<:aod:580167371365548042>',
    detonate: '<:deto:535533833358016512>',
    scythe: '<:noxscythe:513190159341322240>',
    hurricane: '<:cane:535532878969438210>',
    greaterBarge: '<:gbarge:535532879250456578>',
    greaterFlurry: '<:gflurry:535532879283879977>',
    dragonBattleAxe: '<:DBA:603979368850653216>',
    cleave: '<:cleave:535532878616985610>',
    zerk: '<:zerk:535532854004678657>',
    reckless: '<:reckless:643505179378974748>',
    grico: '<:grico:787904334812807238>',
    sgbEof: '<:sgb:626466665848242186>',
    eofSpec: '<:eofspec:746403211908481184>',
    decimation: '<:decimation:643848618477879328>',
    eof: '<:eofor:745279787471470713>',
    ecb: '<:ecb:615618531937222657>',
    gstaff: '<:gstaff:513203008608141314>',
    dbow: '<:dbow:643848618553507843>',
    hammer: '<:swh:641670143197446182>',
    iceamalg: '<:iceamalg:878739231785222154>',
    bloodamalg: '<:bloodamalg:878739232447938670>',
    smokeamalg: '<:smokeamalg:878739232607318086>',
    smokecloud: '<:smokecloud:856635090641879050>',
    dbreath: '<:dbreath:535533833391702017>',
    nami: '<:tsunami:535533809995874304>',
    gconc: '<:gconc:869285393223254107>',
    smiley: '<:friend:1026007098116546590>',
    recruit: '<:Recruit:1026694675312152627>',
    corporal: '<:Corporal:1026694689258209410>',
    sergeant: '<:Sergeant:1026694702361231370>',
    lieutenant: '<:Lieutenant:1026694714096898149>',
    captain: '<:Captain:1026694726033870898>',
    general: '<:General:1026694739132690512>',
    plantedFeet: '<:pf:689501925770919981>',
    flanking: '<:flank4:712073088296157185>',
    as1: '<:as1:689502339891331093>',
    spiritWeedIncenseSticks: '<:SpiritSticks:565726489136463894>',
    weaponPoison: '<:weppoison:689525476158472288>',
    guthixRest: '<:grest:689530593901412578>',
    saraBrew: '<:Brew:565726489400573962>',
    superSaraBrew: '<:supersara:642708771344482314>',
    blubber: '<:blueblubber:689530593742291033>',
    sailfish: '<:Sailfish:565726489363087360>',
    sailfishSoup: '<:sailfishsoup:537336701933060106>',
    rocktailSoup: '<:rocktailsoup:689530594412986389>',
    elderOverload: '<:elderovl:841419289831800882>',
    elderOverloadSalve: '<:elderovlsalve:648976643687317532>',
    adrenRenewal: '<:adrenrenewalflask:736298313980182541>',
    accelPot: '<:accel:756236265472524418>',
    limitless: '<:limitless:641339233638023179>',
    ingen: '<:ingen:641339234111848463>',
    p6: '<:p6:712073088769982475>',
    as4: '<:as4:712074245202772009>',
    b4: '<:biting4:712073087809617931>',
    imp4: '<:imp4:712073088204013640>',
    crack4: '<:crack4:712073087662686249>',
    r5: '<:relentless5:712244800920748092>',
    berserkersFury: '<:berserkersfury:697808774106185768>',
    furyOfTheSmall: '<:furyofthesmall:697808773917573233>',
    heightenedSenses: '<:heightenedsenses:697808773573771344>',
    conservationOfEnergy: '<:conservationofenergy:697808773711921195>',
    fontOfLife: '<:fontoflife:698225967679930408>',
    greaterSun: '<:gsunshine:994644352871714836>',
    greaterDeathSwiftness: '<:gdeathsswift:994644354536837121>',
    mobile: '<:mob:689501908628799488>',
    zurielHood: '<:Superior_Zuriels_hood:1026751746908880947>',
    zurielBody: '<:SuperiorZurielstop:556586037216804864>',
    zurielBottom: '<:SuperiorZurielsrobebottom:556591275604836395>',
    virtusMask: '<:virtusmask:992155942563102852>',
    virtusBody: '<:VirtusTop:556586038936600603>',
    virtusLegs: '<:Virtusrobelegs:556591276036849682>',
    serenHelm: '<:animahelmseren:643120081764745279>',
    serenBody: '<:animabodyseren:923248695846273054>',
    serenLegs: '<:AnimalegsSeren:556592073340485639>',
    tectonicMask: '<:tectmask:643849283199696917>',
    tectonicBody: '<:tectbody:643849268804714506>',
    tectonicLegs: '<:tectlegs:643849257962438656>',
    eliteTectonicMask: '<:elitetectmask:556582803014418432>',
    eliteTectonicBody: '<:elitetectbody:552955120707698699>',
    eliteTectonicLegs: '<:elitetectlegs:580177869272121344>',
    fsoa: '<:soa:869284271595069451>',
    seisWand: '<:seiswand:583429704837758997>',
    seisSing: '<:sing:513190159261630467>',
    praesWand: '<:praeswand:643166769518739477>',
    impCore: '<:impercore:643166751067996160>',
    dtb: '<:DTB:513190159429271562>',
    kalKet: '<:igneouskalket:902209626404192316>',
    kalXil: '<:igneouskalxil:902209626404171786>',
    kalMej: '<:igneouskalmej:1153772938252787793>',
    kalMor: '<:igneouskalmor:1139200072438005851>',
    kalZuk: '<:igneouskalzuk:902209626479685734>',
    affliction: '<:Affliction:513190158468907008>',
    grim: '<:grim:568262896375824385>',
    blastDiffusionBoots: '<:detoboots:602581956072439828>',
    reaversRing: '<:reaverring:839903943018283050>',
    channelersRing: '<:channellerring:839903943404027914>',
    tmwHelm: '<:tmwhelm:643847130619969562>',
    tmwBody: '<:tmwbody:536966366272552960>',
    tmwLegs: '<:tmwlegs:643847107186524200>',
    tmwBoots: '<:tmwboots:643847084147081235>',
    vestmentHood: '<:vestmentsofhavochood:994189297659940904>',
    vestmentTop: '<:vestmentsofhavoctop:994189295592161291>',
    vestmentBottoms: '<:vestmentsofhavocbottom:994189293515980902>',
    vestmentBoots: '<:vestmentsofhavocboots:994189291515285544>',
    lacerations: '<:Laceration:602581988599398400>',
    rod: '<:RoD:513190159462825984>',
    vigour: '<:RoV:513201065877831680>',
    zgs: '<:zgs:626465964325601290>',
    ezk: '<:zekkil:903244090953588787>',
    khopMH: '<:khopeshmh:513206794844110858>',
    khopOH: '<:khopeshoh:513206794752098327>',
    lengMH: '<:lengmh:883134308146098227>',
    lengOH: '<:lengoh:883134308070604870>',
    desolation: '<:Desolation:513190159018098713>',
    caroming4: '<:caroming4:791281588792590336>',
    rubyBak: '<:RubyBakri:565726489413287956>',
    hydrixBak: '<:HydrixBakri:550834403136503822>',
    fulArrow: '<:fularrow:971025696958853180>',
    deathspore: '<:deathsporearrows:900758234527301642>',
    blightMH: '<:bbc:626714879218155521>',
    blightOH: '<:bbcoh:626714879230738434>',
    bolg: '<:bolg:994189289623662702>',
    ascMH: '<:ascmh:513190158468775936>',
    ascOH: '<:ascoh:513190159362031631>',
    nightmares: '<:NMG:513190159441723392>',
    fleetings: '<:fleetingboots:789813993480388640>',
    stalkersRing: '<:stalkerring:839903943601029120>',
    pernixCowl: '<:pernixcowl:992155944253411478>',
    pernixBody: '<:pernixbody:641672159051120651>',
    pernixChaps: '<:PernixChaps:556592058891239424>',
    morrCoif: '<:Superior_Morrigans_coif:1026887254959980635>',
    morrBody: '<:SuperiorMorrigansBody:556586036885717012>',
    morrChaps: '<:SuperiorMorrigansChaps:556591276137512961>',
    zamorakHelm: '<:animahelmzam:643120081446109203>',
    zamorakBody: '<:Anima_core_body_of_Zamorak:1026887748503748628>',
    zamorakLegs: '<:Animalegsamorak:556592073374171146>',
    eliteSirenicMask: '<:elitesirenicmask:643846921944956929>',
    eliteSirenicBody: '<:elitesirenicbody:643846908305211413>',
    eliteSirenicLegs: '<:elitesireniclegs:643846897525850165>',
    sirenicMask: '<:sirenicmask:643846959454617610>',
    sirenicBody: '<:sirenicbody:643846948570267648>',
    sirenicLegs: '<:sireniclegs:643846938537623564>',
    quiver: '<:pernixsquiver:902209626450296892>',
    eofPurple: '<:eofpurple:780401412936040478>',
    eofYellow: '<:eofyellow:780401412902223892>',
    abs: '<:armadylbattlestaff:881962727705280512>',
    inciteFear: '<:incitefear:856635090783567902>',
    exsang: '<:exsanguinate:856635090745950258>',
    bloodBarrage: '<:bloodbarrage:537338981747261446>',
    iceBarrage: '<:icebarrage:537340400185245701>',
    spec: '<:spec:537340400273195028>',
    adrenRenewal4: '<:adrenrenewal:736298121704767538>',
    greaterFury: '<:gfury:535532879334080527>',
    magma: '<:magmatempest:902209626509025290>',
    omni: '<:omni:535533809664262179>',
    smokeTendril: '<:smoketendrils:536257336130404372>',
    wildMagic: '<:wm:535533809978966037>',
    asphyx: '<:asphyx:535533833072672778>',
    shard: '<:StormShards:536256663641128971>',
    sonic: '<:sonic:535533809924571136>',
    anticipate: '<:anti:535541306475151390>',
    greaterChain: '<:gchain:787904334495088672>',
    surge: '<:surge:535533810004262912>',
    deepImpact: '<:deep:535533833139912724>',
    impact: '<:impact:535533809655873556>',
    flankIcon: '<:flankicon:841419289755385866>',
    wrackAndRuin: '<:wrackandruin:856662355912032256>',
    tuska: '<:Tuskas:513201065513058306>',
    meta: '<:meta:535533811304497183>',
    prep: '<:prep:535541258546970624>',
    divert: '<:divert:787904334377648130>',
    combust: '<:comb:535533833098100745>',
    shatter: '<:Shatter:536256673904328704>',
    ranged: '<:range:580168050121113623>',
    eofPink: '<:eofpink:780401412865523722>',
    eofGreen: '<:eofgreen:780401412727242773>',
    eofBlack: '<:eofblack:780401412915855380>',
    eofBlue: '<:eofblue:780401412906680330>',
    sbsLunar: '<:SBSLunars:565726489467682816>',
    disrupt: '<:disrupt:535614336207552523>',
    nati: '<:nat:535541258131865633>',
    corruptionBlast: '<:corruptblast:513190159194259467>',
    dazing: '<:mds:535541259033378827>',
    rapid: '<:rapid:535541270521708566>',
    snap: '<:snap:535534127131394088>',
    snipe: '<:snipe:535541258425204770>',
    piercing: '<:piercing:535541258538450944>',
    corruptionShot: '<:corruptshot:535541306294796299>',
    shadowTendril: '<:shadowtend:642713547142332416>',
    incend: '<:incend:535541258429661215>',
    meteor: '<:meteorstrike:535532879359377439>',
    bolgStacks: '<:perfectequilibrium:1006119102814887957>',
    resonance: '<:res:535541258844635148>',
    cease: '<:cease:864235458464186418>',
    decimate: '<:deci:535532879325822986>',
    assault: '<:assault:535532855191928842>',
    overpower: '<:overpower:535532879334080517>',
    destroy: '<:destroy:535532879330148352>',
    eofRed: '<:eofred:780401412839833601>',
    dclaws: '<:dragonclaw:779048041088024606>',
    roar: '<:chaosroar:994644356671737966>',
    rubyAurora: '<:RubyAurora:574292444791963659>',
    bsa: '<:blackstonearrow:785031580149743617>',
    cryptHelm: '<:cryptbloomhelm:892819107123195956>',
    cryptBody: '<:cryptbloombody:892819107253194762>',
    cryptLegs: '<:cryptbloomlegs:892819107223851058>',
    cryptGloves: '<:cryptbloomgloves:892819106879922179>',
    noxBow: '<:noxbow:513190159425208342>',
    dive: '<:dive:1049378668197195808>',
    spiritCape: '<:spiritcape:697405301623619624>',
    replenishment: '<:enhreplen:634350450887622656>',
    iceBlitz: '<:iceblitz:535613865912696883>',
    precise: '<:precise:1005204971886743572>',
    c1: '<:caroming1:1043953962207957162>',
    inquis: '<:inquisitorstaff:694566917553520680>',
    critBuff: '<:critbuff:943518665842757644>',
    vitality: '<:vitality:654618235097972737>',
    kwuarm: '<:KwuarmSticks:565726489341984779>',
    spiritWeed: '<:SpiritSticks:565726489136463894>',
    supremeOverload: '<:supremeovl:641337551365472276>',
    replenPot: '<:replenpot:641337470491033600>',
    adrenPotion: '<:adrenalinepotion:1011705731118006544>',
    cinderbanes: '<:Cinderbanes:513190158355660812>',
    torvaPlatebody: '<:TorvaPlatebody:556586038974480424>',
    darkIceShard: '<:darkiceshard:915232154160594974>',
    augmentor: '<:augmentor:1039863296729296946>',
    turmoil: '<:turmoil:583429936606347280>',
    bladedDive: '<:bd:535532854281764884>',
    scourge: '<:abyssalscourge:947871842469834832>',
    bikArrow: '<:bikarrow:971025697235689513>',
    reaverPouch: '<:reaverpouch:839903693837959228>',
    evolvToxin: '<:evolvingtoxin:1016651068882550885>',
    vampAura: '<:vampaura:643505653079343144>',
    igneouskalmor: '<:igneouskalmor:1139200072438005851>',
    conjureskeleton: '<:conjureskeleton:1159434516658651147>',
    commandwarrior: '<:commandwarrior:1137809194423160883>',
    conjurezombie: '<:conjurezombie:1137809200219684924>',
    commandzombie: '<:commandzombie:1137809191231295549>​',
    conjureghost: '<:conjureghost:1137809206423060632>',
    commandghost: '<:commandghost:1159434409913634816>',
    necro: '<:necromancy:1148995625896120460>',
    attack: '<:attack:689509250472476758>',
    dealerhood90: '<:dealerhood80:1142783479810117702>',
    deathguard90: '<:deathguard90:1138809243143766118>',
    skulllantern90: '<:skulllantern90:1138809239255658587>',
    incantations: '<:incantations:1137999674842808410>',
    threadsoffate: '<:threadsoffate:1137809172335951933>',
    gboneshield: '<:greaterboneshield:1137809118283976814>',
    lifetransfer: '<:lifetransfer:1137809128136388819>',
    invokedeath: '<:invokedeath:1137809121983336548>',
    splitsoul: '<:splitsoul:1137809168368148490>',
    spiritpact3: '<:spiritpact3:1137809165759295639>',
    ruination: '<:ruination:1137940996391452772>',
    sorrow: '<:sorrow:1137941003895046284>',
}


export const TextUtils = {
    subpoint: '\n\u00a0\u00a0\u00a0\u00a0•',
    noSpaceSubPoint: '\u00a0\u00a0\u00a0\u00a0•'
}

export const createEmbed = (data: string, colour: number) => {
    return {
        color: colour,
        description: data
    };
}

export const createEmbedBuilder = (data: string, colour: number, image?: string) => {
    const embed = new EmbedBuilder()
        .setColor(colour)
        .setDescription(data);
    if (typeof image !== 'undefined') embed.setImage(image);
    return embed;
}

export const styleTitle = (value: string) => {
    return `> __**${value}**__`;
}

const DevChannels = {
    achievementsAndLogs: '1043923759280697405',
    roleConfirmations: '1043923758781571126',
    roleInformation: '1043923758781571123',
    botRoleLog: '1044636757808922766',
    botReportLog: '1047434337647329330',
    commandInfo: '1064789366762905650',
    trialApplications: '1086926116599648308',
    foursGuide: '1088825397212364830',
    requirements: '1043923758290833484',
    staffApplications: '1043923761021325345',
    learnerChat: '1043923760065028164',
    presetFeedback: '1043923760065028165',
    vodReview: '1043923761021325346',
    testing: '1089111195144949820',
    freeForAll: '1089528206631129199',
    rules: '1043923758290833483',
    reaperInfo: '1227389619235061882', //currently set to wip test channel
    reaperTickets: '922046714456715264',
    necromancyGuide: '1253408837906464849',
}

const ProdMessages = {
    mockTrialReacts: '1063751932675637299',
}

const DevMessages = {
    mockTrialReacts: '1063729249460174858'
}

const ProdChannels = {
    achievementsAndLogs: '429378540115329044',
    roleConfirmations: '846853673476685824',
    roleInformation: '1038048347413553183',
    botRoleLog: '1045192967754883172',
    botReportLog: '1046699857433342103',
    commandInfo: '1047042072173088798',
    trialApplications: '1006975026748203079',
    duoGuide: '1117210194418606201',
    foursGuide: '1117210302291910686',
    fivesGuide: '1117210917541777458',
    requirements: '711306680763416666',
    staffApplications: '782003024406249472',
    learnerChat: '932429372328116275',
    presetFeedback: '782167070032396328',
    vodReview: '760142773637873675',
    testing: '1089111195144949820',
    freeForAll: '984482757277261834',
    rules: '429380211390545920',
    reaperInfo: '1227389619235061882', //currently set to wip test channel
    reaperTickets: '922046714456715264',
    necromancyGuide: '1253408837906464849',

}

const DevRoles: any = {
    trialTeam: '<@&1043923757783326780>',
    admin: '<@&1043923757783326788>',
    duoMaster: '<@&1043923757732999218>',
    threeSevenMaster: '<@&1119368648482623559>',
    duoRootskips: '<@&1043923757707829443>',
    threeSevenRootskips: '<@&1043923757707829442>',
    duoExperienced: '<@&1043923757707829446>',
    threeSevenExperienced: '<@&1043923757707829445>',
    duoGrandmaster: '<@&1043923757732999225>',
    threeSevenGrandmaster: '<@&1043923757732999224>',
    fours: '<@&1077211897931235339>',
    teacher: '<@&1043923757758156867>',
    reaper: '<@&1043923757758156866>',
    owner: '<@&1043923757783326789>',
    vodReviewer: '<@&1043923757758156865>',
    botDev: '<@&1043923757691047941>',
    experienced: '<@&1043923757707829447>',
    master: '<@&1043923757732999219>',
    grandmaster: '<@&1043923757732999226>',
    moderator: '<@&1050759587898339409>',
    extreme: '<@&1043923757732999222>',
}

const ProdRoles: any = {
    trialTeam: '<@&488073429975826452>',
    admin: '<@&519490446368571392>',
    duoMaster: '<@&1074344442355535872>',
    threeSevenMaster: '<@&1119368648482623559>',
    duoRootskips: '<@&1007584848719912973>',
    threeSevenRootskips: '<@&931903313144848394>',
    duoExperienced: '<@&931903449396834364>',
    threeSevenExperienced: '<@&981579337159565383>',
    duoGrandmaster: '<@&1119368333129691177>',
    threeSevenGrandmaster: '<@&1119368483608727703>',
    fours: '<@&1074344307068252210>',
    teacher: '<@&782012576279429174>',
    reaper: '<@&922061359926104095>',
    owner: '<@&553738397848698882>',
    vodReviewer: '<@&829046735715434517>',
    botDev: '<@&1034587693000167474>',
    experienced: '<@&981581909387800586>',
    master: '<@&1119368608116641873>',
    grandmaster: '<@&1119365076743360674>',
    moderator: '<@&1050111253185568788>',
    extreme: '<@&793847049841279007>',
}

const ProdGuildId = '429001600523042818';

const DevGuildId = '1043923757598781461';

export const Roles = environment === 'PRODUCTION' ? ProdRoles : DevRoles;

export const GuildId = environment === 'PRODUCTION' ? ProdGuildId : DevGuildId;

export const Channels = environment === 'PRODUCTION' ? ProdChannels : DevChannels;

export const Messages = environment === 'PRODUCTION' ? ProdMessages : DevMessages;
