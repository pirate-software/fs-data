import { z } from "zod";

import { playgroupKeySchema } from "../playgroups";
import { birthdayStringSchema, partialDateStringSchema } from "../types";

export const ferretSchema = z.object({
  name: z.string(),
  wikipage: z.string(),
  aliases: z.array(z.string()).readonly(),
  commands: z.array(z.string()).readonly(),
  sex: z.literal(["Male", "Female"]).nullable(),
  birth: partialDateStringSchema.nullable(),
  birthday: birthdayStringSchema.nullable().optional(),
  arrival: partialDateStringSchema.nullable(),
  valhalla: partialDateStringSchema.nullable(),
  playgroup: playgroupKeySchema,
  summary: z.string().optional(),
  lore: z.string().optional(),
  clips: z
    .array(
      z.object({
        url: z.string(),
        caption: z.string(),
      }),
    )
    .readonly(),
  merch: z
    .union([
      z.object({
        plushie: z.string(),
      }),
      z.object({
        other: z.string(),
      }),
    ])
    .nullable()
    .optional(),
});

export type Ferret = z.infer<typeof ferretSchema>;

const ferrets = {
  ash: {
    name: "Ash",
    wikipage: "Ash",
    aliases: [],
    commands: ["ash"],
    sex: "Female",
    birth: null,
    birthday: null,
    arrival: "2025-12-01",
    valhalla: null,
    playgroup: "oldies",
    summary:
      "Ash is a rescue ferret of Snails House. Ash came to the rescue with [[Rowan]], [[Juniper]] and [[Rye]].",
    lore: "Ash came with [[Rowan]], [[Juniper]] and [[Rye]] from a very loving home in which life circumstances had unfortunately changed, so they came to Snails House.",
    clips: [
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/FitArtisticKumquatPhilosoraptor-_MC-EB3wSCKcpbCe",
        caption: "Rowan, Rye, Ash and Juniper explore the playroom",
      },
    ],
    merch: null,
  },
  badger: {
    name: "Badger",
    wikipage: "Badger",
    aliases: [],
    commands: ["badger"],
    sex: "Male",
    birth: null,
    birthday: "02-26",
    arrival: "2024-02-26",
    valhalla: null,
    playgroup: "solo",
    summary:
      "Badger is a rescue ferret of Snails House. He typically enjoys playing in the toobs and rice bin. His favorite playmate is [[Peepo]].",
    lore: "Badger is a part of the 5 ferrets who were found abandoned in an unlocked shed by the Humane Society. They then reached out to the rescue for assistance. Badger came to the rescue with [[Moose]], [[Peepo]], [[Pepper]], and [[Salt]]. He is known in chat to be a cute cranky grandpa.",
    clips: [
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/ArborealDelightfulSushiNerfRedBlaster-FP76nZX4I72aySD0",
        caption: "Badger hiding the toy!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/AuspiciousEncouragingTireKippa-cWwCXKCJ85eR4Gz1",
        caption: "Badger playing in the pizza toob",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/EnchantingCautiousDonkeySuperVinlin-Utc7-NF9UcvwRAPy",
        caption: "Badger big stretchies",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/FastMoldyJamKappaRoss-7KCpYx0v-C5i00Eo",
        caption: "Shaye trying to activate Badger",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/GoodSuspiciousDoveTBTacoRight-HpWuk-0vnN4RbJqm",
        caption: "Badger trying his best",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/IcyPlayfulDumplingsNinjaGrumpy-xL4uJ8mOLdz9-4QK",
        caption: "Badger being eaten by the Sarlecc pit",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/LuckyAgitatedPigPipeHype-lDgbvyszXe764WVq",
        caption: "Badger preparing good snuggle spot",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/MoralGiantCurryStoneLightning-PsEbEao68v4bDsD8",
        caption: "Badger ballpit time",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/PluckyBelovedKoalaRedCoat-7l--ke2FRXQ8TEzx",
        caption: "Badger trying to join in the pit",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/TardyEndearingLasagnaRaccAttack-OsSN-pe8H1snFzXT",
        caption: "Badger not ready for playtime",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/TsundereFuriousSwanNotATK-qxXBVjjiet43mbvr",
        caption: "Badger big zooms",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/PeppyFlaccidCamelBrokeBack-PJ4tcWRG__VhVSmR",
        caption: "Badger trying to poop of Fig's Head",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/ChillyOpenMarrowKeyboardCat-n64Ho8BSVca1PpqC",
        caption: "Badger enjoying a stick with Peepo",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/CloudyAmericanPeanutOneHand-ueGV9Yq-i8ronQ3q",
        caption: "Badger toobing with Peepo",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/EasyAntsyBisonPhilosoraptor-4rp_ruH2VXkzU_oR",
        caption: "Badger and Peepo playing in the toob",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/EnchantingSourStarlingAMPEnergyCherry-V9-gWswfZdvWsDXz",
        caption: "Badger riceboxing with Peepo",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/FurtiveMistyWerewolfNerfBlueBlaster-MIUPJPL-_asxWUuj",
        caption: "Badger throwing dooks with Peepo",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/MotionlessLaconicDugongArgieB8-xdzyFAn_tYaK151U",
        caption: "Badger snuggle with Peepo",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/SavoryHyperPieAsianGlow-nGh0Mkao7dPe7r2Z",
        caption: "Badger plays rice box tag thru the box with Peepo",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/TriumphantWonderfulChamoisDxAbomb-y0edzhb7mTt2t3cF",
        caption: "Badger and Peepo doing more toobing",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/CuteSneakyClipsmomUnSane-niQuMxtbWDa53NmP",
        caption: "Badger badgering Pepper",
      },
    ],
    merch: null,
  },
  bagel: {
    name: "Bagel",
    wikipage: "Bagel",
    aliases: [],
    commands: ["bagel"],
    sex: "Female",
    birth: null,
    birthday: null,
    arrival: "2025-03-09",
    valhalla: "2025-05-09",
    playgroup: "valhalla",
    summary:
      "Bagel was a rescue ferret of Snails House. She enjoyed the company of [[Peanut 2]], but she did not care much for the young males of the business.",
    lore: "Bagel came to the rescue together with [[Peanut 2]]. They were surrendered by loving owners due to age and existing health conditions.",
    clips: [
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/AffluentInnocentHumanHassaanChop-fhYb0XoQB3H36hOe",
        caption: "Bagel making snuggle space in wicker basket",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/GentleTsundereDurianRedCoat-T9War3lasiHoml-z",
        caption: "Bagel getting assisted sooping",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/ZealousInspiringPigeonGrammarKing-XreFNggsgReGXRGR",
        caption: "Bagel sniffah Ghost",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/FitKindBubbleteaPermaSmug-gBqdI-tjnjL--70N",
        caption: "Bagel sniffah Jack",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/PluckySpeedyGiraffeMingLee-3ZBWrDBzgeeaBchI",
        caption: "Bagel wants to use Peanut 2 as a pillow",
      },
      {
        url: "Peanut_and_Bagel_Intro.mp4",
        caption: "Bagel and Peanut 2 introduction",
      },
    ],
    merch: null,
  },
  banana: {
    name: "Banana",
    wikipage: "Banana",
    aliases: ["Nana"],
    commands: ["banana"],
    sex: "Female",
    birth: null,
    birthday: "04-22",
    arrival: "2023-07-07",
    valhalla: "2025-08-09",
    playgroup: "valhalla",
    summary:
      "Banana was a rescue ferret of Snails House. She enjoyed good supervised outdoor time, and she really enjoyed snuggling with [[Zero]] and [[Eddie]]. She had a crooked/lightning shaped tail.",
    lore: `Banana was picked up after a facebook user posted about not being able to care for the ferret any more after her buddy passed awa. They got in contact with them and picked her up not to long after.

Banana's birthday was confirmed when owner sent over paperwork to Shaye.`,
    clips: [
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/DeadNaiveFiddleheadsRuleFive-OglECxVK7YS_Hkij",
        caption: "Banana doing rollies",
      },
      {
        url: "https://www.twitch.tv/piratesoftware/clip/ScaryAnimatedAntelopeRickroll-Q9CPzs-7QZqVT-iB",
        caption: "Banana in a banana held by a banana (long lemon)",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/KnottyDifficultFriseeDerp-UXULCt-XohLTXASA",
        caption: "Nana sniffing Henry",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/MiniatureCoweringRaisin4Head-TixMDfZYcFRaVuw6",
        caption: "Nana undermining Henry",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/TriangularAdorableQuailAsianGlow-uekSA8_ZSksoDNSn",
        caption: "Henry claims Banana as tunnel",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/DignifiedCulturedPhoneBigBrother-w55-MScAZNBbF7wa",
        caption: "Banana and Mocha being cute",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/FitDoubtfulBottleCeilingCat-QDaZbLekqq7VwM2e",
        caption: "Mocha Banana Car",
      },
    ],
    merch: null,
  },
  bandit: {
    name: "Bandit",
    wikipage: "Bandit",
    aliases: ["Chicken leg, nekkid boi, skinboy, hotdog"],
    commands: ["bandit"],
    sex: "Male",
    birth: null,
    birthday: null,
    arrival: "2024-01-05",
    valhalla: "2024-04-05",
    playgroup: "valhalla",
    summary:
      "Bandit was a rescue ferret of Snails House. He came to the rescue with advanced medical issues, but he enjoyed making new friends while going through treatment.",
    lore: `Bandit came to the rescue with his friend [[Moxie]]. Bandit was rescued while he already was in the advanced stages of adrenal . Being mostly bald across his entire body, he still had a good time with his new friends. He loved to cruise through the tubes or be eaten by a crocodile.

After about five months in the care of Shaye and Thor, he sadly passed away of old age.`,
    clips: [
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/BovineCrackyStrawberryDancingBaby-ceureRibKfU4G-x4",
        caption: "Shaye doing a closeup of Bandit",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/PiercingZealousBubbleteaChocolateRain-hAarygcyID24FBe_",
        caption: "Bandit cuddling with Shaye",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/PoisedEnchantingJaguarNononoCat-INLb2s4JpSV7XC0q",
        caption: "Bandit doing some toobing!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/StylishTemperedFerretWoofer--6GFy5BJ0VwbtFlq",
        caption: "Bandit being eaten",
      },
    ],
    merch: null,
  },
  beans: {
    name: "Beans",
    wikipage: "Beans",
    aliases: [
      "Beanus Weenus",
      "Bean Boy",
      "Mr. Bean",
      "Jelly Bean",
      "Beanie Baby",
      "Beansman",
      "Unrepentant Ear Criminal",
    ],
    commands: ["beans", "bean"],
    sex: "Male",
    birth: "2021-12-19",
    birthday: "12-19",
    arrival: "2022-04-01",
    valhalla: null,
    playgroup: "genpop",
    summary:
      "Beans is a ferret of Snails House. He is known for being very photogenic and causing chaos. He is famous for many reasons, one of which is his likeness as a plushie!",
    lore: `As one of the original ferrets before Snails House became a sanctuary, Beans came from a pet store. Thor and Shaye saw him alone in his enclosure and decided to bring him home to have friends, especially since ferrets are very social animals.

Beans' birthday is December 19th, 2021. He also has a sweet tooth and craves Shaye's ice cream. Since the day he came home, he has held the number one spot in Zultralord's heart. 

Due to Beans being such a chill dude, aside from ear crimes, he and [[Chili]] are typically part of the welcome committee to introduce new ferrets to the business when they are ready to integrate.

During the first night in his temporary cage (quarantine), he proceeded to rip one of the bars off and escape. He started running around and doing a lot of dooking because he was very excited. He was running into the room where Thor was sleeping and woke him up. Because of the Meme Beans in Places they shouldn't be in they named him Beans.

For fun, Shaye allows the ferrets to impart wisdom upon the community. Beans typed "Dr" and "Bpq".`,
    clips: [
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/AttractiveRefinedWalrusRuleFive-eWrjhIdakUnNbBnV",
        caption: "Beans the mage",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/BelovedShyPangolinTBCheesePull-kDcAXljNZNb3DqW3",
        caption: "Beans gets piled by the nutgang",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/InquisitiveAwkwardClipsdadHoneyBadger-yAvvVPyP6B6FZQaX",
        caption: "Beans' Leg lives its own life",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/KindBillowingYamMau5-e6dy7FmNBAw8nZVL",
        caption: "Beans plays in the rice box",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/ProductiveRelievedAubergineCoolStoryBro-nLQi1IdR-LeToeUk",
        caption: "Beans finds his toy snake",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/QuaintInexpensiveRaisinPipeHype-XqWo46a1pr9sU5ia",
        caption: "Beans removes the thermometer from his cage",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/RepleteCrypticDinosaurShadyLulu-y2E6iXYKGo_AzGap",
        caption: "Beans being large",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/SillyAnnoyingRadicchioKreygasm-S8PKStMaOOsmcz3y",
        caption: "Shaye gives Beans uppies",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/SullenWittyCookieDatBoi-CIpOHVGwvs5lk1oP",
        caption: "Beans attempts sock theft",
      },
      {
        url: "https://www.twitch.tv/piratesoftware/clip/ChillyHedonisticElkEagleEye-YuVmTC3cMCYPOTcA",
        caption: "Beans attacks the new Thor mic",
      },
      {
        url: "https://www.youtube.com/watch?v=JBrITxJUTbc",
        caption: "No thoughts for Beans",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/RepleteDignifiedFloofTinyFace-qm53lNCje2D6veLf",
        caption: "Big Mike toobing with Beans",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/NastyPeppyFishPicoMause-aR_cFP3m7ieaBBpd",
        caption: "Beans and Cheese sliding out of the hammock",
      },
      {
        url: "https://www.twitch.tv/piratesoftware/clip/FilthyLachrymoseGarbageStinkyCheese-6pBXJ7KBZQQpN9qM",
        caption: "Beans and Cheese digging in dirt",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/LongAbnegateSproutKAPOW-T4MPnPOpDTTGRvNz",
        caption: "Cowboy beating up Beans",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/SpeedySassyCookieANELE-cvGu1L_1o624VtP0",
        caption: "Beans squish Loki",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/CoyVainGullRalpherZ-nSSyvQ1H9Wv7zVGx",
        caption: "Pickle denies Beans escape",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/DifferentSparklyHareTakeNRG-l8dhGNh-ysvIawhA",
        caption: "Beans and Pickle wilding after visiting wet world",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/FastBeautifulPigeonLitFam-LBrwGMPzqTFicphq",
        caption: "Beans and Grandson moving the toob",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/AgreeableFaintBeeKappaWealth-OCw5ydzKb9d3VEVW",
        caption: "Torch fights Beans",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/TentativePolishedAppleTheRinger-PAFtQTY0IOq0waA7",
        caption: "Beans tries to free Torch from his prison",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/ZealousShinyDillSwiftRage-Yub2ORDf_rUvj-fF",
        caption: "Kyo and Beans bouncing around",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/PluckyWonderfulTriangleSuperVinlin-mdaw8N_2YkDzTb_4",
        caption: "Beans and Nacho fighting for chair supremacy",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/FineCuteParrotSaltBae-y2O1fBpSYO1GIPKw",
        caption: "Beans grooming Peanut",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/SoftExquisiteMageBatChest-He6myj5UUBfmL5BH",
        caption: "#ShayeHands + Pepper / Beans socktax",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/BlueGleamingLarkTBCheesePull-a2kGiWDzgYtHmZix",
        caption: "Toby checking out the paper bin with Beans",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/FunCooperativeSashimiTheRinger-jvtuoRZvFdKuSzJu",
        caption: "Toby playing with Beans",
      },
    ],
    merch: {
      plushie: "https://merch.piratesoftware.live/products/beans-plush",
    },
  },
  beef: {
    name: "Beef",
    wikipage: "Beef",
    aliases: ["The Thief"],
    commands: ["beef"],
    sex: "Male",
    birth: "2021-02-20",
    birthday: "02-20",
    arrival: "2021-07-02",
    valhalla: null,
    playgroup: "oldies",
    summary:
      "Beef is a ferret of Snails House. He enjoys stealing food from other ferrets' mouths and desires the freshest of water from the bottom of the water bowl.  [[Cheese]] is his sister.",
    lore: "Originally a pet of Thor and Shaye, Beef came to Snails House from the pet store with his sister [[Cheese]]. He has quite the personality. He will stick his head into the water dish, all the way to the bottom and then panic, as if he's drowning. Beef used to be very interested in [[Mouse]], but she was indifferent. He enjoys playing with [[Pepper]] when given the opportunity, but they are currently in different play groups. Beef now currently resides in the oldies cage so that he and his sister's aging health can be monitored closely.",
    clips: [
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/BlightedInterestingNeanderthalMingLee-cXiqEcEzDzQ-OGCU",
        caption: "Beef prays to the donut",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/FrozenJoyousHamUnSane-ozFsnpkuw8I3jCFV",
        caption: "Beef loving the toobs!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/PeacefulYummyDugongChefFrank-eFsR3558sGafvfdI",
        caption: "Beef bites Shaye's ear",
      },
      {
        url: "https://www.twitch.tv/piratesoftware/clip/CoweringInnocentCoffeeBloodTrail-XBED-KRKin1lMxCr",
        caption: "Beef must have water from the bottom",
      },
      {
        url: "https://www.twitch.tv/piratesoftware/clip/HelpfulGeniusSwallowFailFish-ioTx2lcND_JGxIqs",
        caption: "Sad Beef",
      },
      {
        url: "https://www.youtube.com/watch?v=IPjCmD3M2k0",
        caption: "Beef demonstration",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/SpoopyNurturingHornetThunBeast-Ctzf-YrT_shbA-Jl",
        caption: "Henry grooming Beef?",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/SweetPeacefulSamosaPicoMause-NnVCUHYUoAAKb32p",
        caption: "Beef doing a welfare check on Henry",
      },
      {
        url: "https://www.youtube.com/watch?v=o313G2396Ds",
        caption: "Beef the thief, steals food out of Loki's mouth",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/AmazonianTriumphantMinkPanicBasket-jXI9sJFJgW_DzHOb",
        caption: "Pickle photobombs Beef asleep on the couch",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/TallAmusedPeppermintFreakinStinkin-YqBWtt3cKSqaSf0l",
        caption: "Pickle and Beef battle",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/StrongRelentlessAnacondaImGlitch-ocewAkTWn086f_7B",
        caption: "Beef yoinks a green ball and Snails a LGM",
      },
    ],
    merch: null,
  },
  bigmike: {
    name: "Big Mike",
    wikipage: "Big_Mike",
    aliases: [],
    commands: ["bigmike"],
    sex: "Male",
    birth: null,
    birthday: null,
    arrival: "2025-02-25",
    valhalla: null,
    playgroup: "m",
    summary:
      "Big Mike is a rescue ferret of Snails House. He was super ill when he first joined the sanctuary, but has since recovered. He is a big boy with big white paws!",
    lore: `Big Mike was surrendered to Snails House by a pet store due to having Covid, Influenza-A, and Influenza-B. Thanks to the rescue's knowledge and resources, he was able to recover. Now that he's feeling better, his big goober side has really started to show. After his treatment and quarantine, Mike played with the oldies at first since they treated him gently. Once he was feeling more confident, he started a new playgroup with his new friend [[Maisy]] to form M&M, which quickly included [[Milo]] and formed M3.

When looking to identify him, Mike is a big boy with the total white paw chrome package (that means all four feet)! He loves to play chase and especially enjoys playing with his buddy [[Milo]]. Mike also enjoys mingling with many different ferrets and playgroups, so be sure to keep an eye out for him.`,
    clips: [
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/RepleteDignifiedFloofTinyFace-qm53lNCje2D6veLf",
        caption: "Big Mike toobing with Beans",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/AcceptableElatedWaspKeyboardCat-ORfbBiOLgkpVAEv3",
        caption: 'Big Mike :MOMMM!"',
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/AgitatedSpoopyDaikonItsBoshyTime-Njsaiwhcg11YjtAo",
        caption: "Thor presents Big Mike",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/BlazingFrigidCheeseOpieOP-bF8yUC-0ospKW-vl",
        caption: "Big Mike sinking into the ballpit",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/BlindingBeautifulToadKappaWealth-HinQ30Z1TWrr-Eo_",
        caption: "Big Mike: mom stop it you're embarrassing me!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/DarkTallPuppyPlanking-dju8vSbfC8wUP5tb",
        caption: "Big Mike: Mom don't leave!!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/DifficultPeppyMeatloafKappaWealth-MKKqACDml2wPX6BO",
        caption: "Big Mike jamming the toob",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/DrabObliqueLlamaSoBayed-BTOhcGPehrL-hbEn",
        caption: "Big Mike, Big chase",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/FragileDarlingHabaneroTheRinger-UU57NMTcXKMJz63u",
        caption: "Big Mike: Mother, here i come!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/HardApatheticWatermelonSMOrc-dJtzz_FiPczL6yhT",
        caption: "Big Mike exploring the ricebin",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/HumbleGloriousIcecreamItsBoshyTime-H2RWVWhECKY3qzg0",
        caption: "Big Mike moving the ball like a little goof",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/KawaiiRenownedSharkKappaPride-UUEa30Xomq5h3oMX",
        caption: "Big Mike toob tail wiggles!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/SaltyWrongBunnyNononoCat-gxpDdVJwyrhHo_-v",
        caption: "Big Mike flop",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/SquareSourAsteriskPeanutButterJellyTime-nwEPN7VJRb8NdrJx",
        caption: "Big Mike helping looking for toy",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/TalentedCooperativeBobaKeepo-HugSfe6gVhcuUImg",
        caption: "Big Mike checking the rice bin",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/TiredTolerantNuggetsYouWHY-GygLNg9eI8cJzEDG",
        caption: "Big Mike increasing parkour difficulty level",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/WealthyCloudyPandaPermaSmug-4Fz-26QRhiQ8tqSB",
        caption: "Big Mike doing parkour",
      },
      {
        url: "https://www.twitch.tv/piratesoftware/clip/UglyOptimisticLegNononoCat-p-DhWhi0fKzioO3W",
        caption: "Mike is a huge boi",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/YawningWonderfulDeerBCouch-JQre3JG_zj6SbpBL",
        caption: "Big Mike toobing with Maisy",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/BlueHungryMeatloafGOWSkull-gV43d0yac8cOj47q",
        caption: "Milo leap on Big Mike",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/FrozenPreciousPeanutTheTarFu-FwsgIXfcTAKDm4SM",
        caption: "Big Mike and Milo being menaces",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/GloriousRoundPotatoSmoocherZ-7LDkQUiHz4fiV8aK",
        caption: "Milo playing with Mike and Maisy",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/HorribleSincereFiddleheadsBrainSlug-UXb-9JR_XJ4hTwpj",
        caption: "Milo circling with Mike and Maisy",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/KitschyInspiringJayPeteZaroll-mmm-4YvXT6_--F2E",
        caption: "Milo meeting Mike and Maisy",
      },
    ],
    merch: null,
  },
  bruce: {
    name: "Bruce",
    wikipage: "Bruce",
    aliases: [],
    commands: ["bruce"],
    sex: "Male",
    birth: null,
    birthday: null,
    arrival: "2024-03-30",
    valhalla: null,
    playgroup: "rb",
    summary:
      "Bruce is a rescue ferret of Snails House. He's a very chill and laid back dude who sometimes activates and crushes castles while wardancing. He enjoys leisure walks with his friend [[Teep]].",
    lore: "Bruce came to the rescue with [[Teep]] from a loving home. They were surrendered because they needed senior care in which the rescue could provide. After some time, and due to his very unshakable and calm demeanor, he made friends and was paired with [[Rusty]] to form R&B.",
    clips: [
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/BlitheThoughtfulDragonflyKappaPride-697a3MxrvJq282k0",
        caption: "Bruce sabotaging the castle while wardancing",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/FrigidGoodFishBCouch-6UFaj8xSY0d8ypM9",
        caption: "Bruce: crossing the gap towards comfy!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/GrossFunnySnoodSaltBae-_9zPyopqLCA4QrD3",
        caption: "Bruce playing with Louise'l (fren)",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/HardSourPeppermintSuperVinlin-GOno0BhTItaJHamy",
        caption: "Bruce sniffah Cheese",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/ClearEnjoyableClintmullinsGrammarKing-OP0_8kdQoMLS7YqP",
        caption: "Bruce doing rounds with Henry",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/ElatedWiseHorseradishDeIlluminati-NBU1lNSxphRjcfux",
        caption: "Bruce: Henry needs to be cleaned!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/SmilingCrispyConsoleShadyLulu-t0cHpnsFRSQNjD74",
        caption: "Bruce sniffah Henry",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/YummyUgliestHedgehogJonCarnage-qFYL43qaO1CAQDxi",
        caption: "Bruce toobing with Luna",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/PoliteCleverKoalaRickroll-mAFUFm2XHUfI_XkK",
        caption: "Bruce and Rusty play tussle",
      },
    ],
    merch: null,
  },
  cashew: {
    name: "Cashew",
    wikipage: "Cashew",
    aliases: ["Cash, Speedy Muscle Boy"],
    commands: ["cashew"],
    sex: "Male",
    birth: "2024-04-13",
    birthday: "04-13",
    arrival: "2024-08-03",
    valhalla: null,
    playgroup: "genpop",
    summary:
      "Cashew is a rescue ferret of Snails House. While he plays well with everyone, he really enjoys playing with [[Pickle]]. He is easy to identify during playtime by his large size and nub tail.",
    lore: `Cashew was adopted from the pet store with [[Hazelnut]] and [[Peanut]] as part of the "Nut Gang". Peanut and Hazel were rescued due to them having Waardenburg Syndrome  and multiple behavioral issues. Cashew developed "problematic" behavioral issues due to living with cage mates which had also bonded to him. These days, he really enjoys playtime with the general population playgroup.

For fun, Shaye allows the ferrets to impart wisdom upon the community. Cashew typed "K", "Km", "E4", "Me", and "Cash".`,
    clips: [
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/AmorphousArborealSushiDAESuppy-U9GFhvBNEN3J2EHU",
        caption: "Cashew wants Shaye's attention",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/BreakableBashfulDoveYouWHY-NVL_VwOEL0qTECQq",
        caption: "Cashew trying to grab Thor's wig",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/EagerInquisitiveBeanAMPTropPunch-h2_QLvwsHgHP8lHH",
        caption: "Cashew doing wild jumps",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/EnjoyableSpotlessHerdAliens-S7-E2FFfLwOS6PPj",
        caption: "Cashew is speed",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/InspiringBlatantKangarooOptimizePrime-IkQ0GNk3umN_WTbT",
        caption: "Cashew, Tiny tail wiggles",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/ObedientBlazingPineappleKappaClaus-fOxdrONDYcN2_XkI",
        caption: "Cashew playing with the ball puzzle",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/PrettiestRoundYogurtNotLikeThis-YOYTxOBmwWtwnJQM",
        caption: "Cashew and the volcano",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/RelievedSlickWrenDogFace-31EJqMOdHMf37Tk1",
        caption: "Cashew doing a backflip",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/SincereJollySalmonSeemsGood-4jYVuqRCqjhS8kdj",
        caption: "Cashew Oil foot",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/SleepyDeterminedHerbsImGlitch-yD5aGhX2jEwl1zA3",
        caption: "Cash FLIPS HIS shit",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/CulturedSparklingEchidnaWutFace-bwORngI9_D6o7qXB",
        caption: "Cash sniffah Cowboy",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/BloodyFragileRedpandaRedCoat-MoQwci1P5ujCRj5C",
        caption: "Cashew and Hazel speed toobing",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/SecretiveHardChinchillaTwitchRPG-lgEe9cFhsRf7B8pI",
        caption: "Pickle and Cashew toobing",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/UglyResourcefulHareMrDestructoid-OSqiRK6WUEcyw0la",
        caption: "Pickle and Cashew playing",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/HilariousDistinctBurritoShadyLulu--_n6cYGgohBkX5XT",
        caption: "Peanut and Cashew playing ball",
      },
    ],
    merch: null,
  },
  cheese: {
    name: "Cheese",
    wikipage: "Cheese",
    aliases: ["The Final Boss"],
    commands: ["cheese"],
    sex: "Female",
    birth: "2021-02-20",
    birthday: "02-20",
    arrival: "2021-07-02",
    valhalla: null,
    playgroup: "oldies",
    summary:
      "Cheese is a ferret of Snails House. She is the professional photo model for the business and loves posing for the camera. She enjoys redecorating the playroom and climbing Shaye.",
    lore: 'Cheese came from the pet store with her brother [[Beef]]. They were both bought as pets before Thor and Shaye decided to start a ferret sanctuary. Cheese is a Roan/Silver ferret. With each shed, she may get more and more white hair, (called "roaning out"), and will probably be fully white eventually. Cheese is a very sweet little lady who likes to chill and cuddle. She is mostly left alone by the rowdy youngins\' because she is actually the most vicious fighter of the business. She is incredibly photogenic. Recently, she moved from general population to live with the oldies with her brother, [[Beef]], so that her health could be monitored more closely.',
    clips: [
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/NastyPeppyFishPicoMause-aR_cFP3m7ieaBBpd",
        caption: "Beans and Cheese sliding out of the hammock",
      },
      {
        url: "https://www.twitch.tv/piratesoftware/clip/FilthyLachrymoseGarbageStinkyCheese-6pBXJ7KBZQQpN9qM",
        caption: "Beans and Cheese digging in dirt",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/HardSourPeppermintSuperVinlin-GOno0BhTItaJHamy",
        caption: "Bruce sniffah Cheese",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/AntsyYummyYamMau5-rsIgdmFfSYaDC9kS",
        caption: "Cheese uppies with Maddie",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/BadKitschySwallowTBTacoLeft-otiTpGuBpxakAwIF",
        caption: "Cheese finds a weird swimming pool",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/CharmingAntsyLatteOSsloth-dKu25jg0McEwzlcB",
        caption: "Cheese poses on the laundry",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/DoubtfulBoxyMacaroniCoolStoryBob-YB8ok7_N6dLQAqoH",
        caption: "Cheese really DIGS the rice!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/EagerSuccessfulBulgogiWOOP-17ubzHlI_7d9NyBf",
        caption: "Cheese attack green matt",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/FamousBraveNewtTBTacoRight-P5GlsxcwpmSDAyMu",
        caption: "Cheese climbs Shaye during playtime",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/HelplessAgileRatM4xHeh-z8wAiBTISn7CEUIE",
        caption: "Cheese: Where did everyone go?",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/PhilanthropicHeartlessJuiceFunRun-ZrI5bfi23YYICr2h",
        caption: "Cooling your noodle (Cheese)",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/PoisedTenderStarChocolateRain-sNv5Ia7q6-HesVuR",
        caption: "Cheese yoink the Tripod",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/SlipperyCourteousOkapiSwiftRage-dff3JNFklk0fbvak",
        caption: "Cheese climbing MtShaye",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/UnusualSpookyVultureVoteNay-BXz-7X2x-XfCf1Pk",
        caption: "Pass The Cheese!",
      },
      {
        url: "https://www.twitch.tv/piratesoftware/clip/EndearingInquisitiveKuduShazBotstix-LwSQakpHbSloe9OW",
        caption: "Cheeseburster",
      },
      {
        url: "https://www.twitch.tv/piratesoftware/clip/NastyTiredHorseradishPupper-ySIKk8XH7ABrJI0d",
        caption: "Cheese goes for a tumble",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/BenevolentColdbloodedSoybeanDerp-GI59Wuay4mFGA_n1",
        caption: "Cheese chilling, Luna tries to groom",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/AssiduousScrumptiousDragonTheRinger-b-6-4BKa2XAtxYSR",
        caption: "Cheese shows Rusty who's the queen of the business!",
      },
    ],
    merch: null,
  },
  chili: {
    name: "Chili",
    wikipage: "Chili",
    aliases: ["Mandarin", "Heavy Weight Champion of the World, Trashmaster"],
    commands: ["chili"],
    sex: "Male",
    birth: null,
    birthday: "01-10",
    arrival: "2024-01-11",
    valhalla: null,
    playgroup: "genpop",
    summary:
      "Chili is a rescue ferret of Snails House. He has an affinity for climbing, gym workouts, and a strange obsession with trash cans. He currently holds the title of heaviest recorded ferret of the rescue at around 1960 grams.",
    lore: `Chili came to the rescue with his fellow housemate [[Fig]]. He enjoys climbing often, and frequently finds himself in the trashcan of the playroom, (as seen below), due to these shenanigans. 

Due to Chili being such a chill dude, he and [[Beans]] are typically part of the welcome committee to introduce new ferrets to the business when they are ready to integrate.`,
    clips: [
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/AntsyInquisitiveLapwingPanicVis-gQfvNHfoU8yKBg0K",
        caption: "Chili standing like person",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/BadFuriousChickpeaRaccAttack-p7GRHWvmCNe4IHGe",
        caption: "Chili double climb attempt, JAIL",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/CreativeMushyHawkShadyLulu-bgBxx37B6WLI2_JQ",
        caption: "Chili: No I sploot here",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/GentleOilyFennelYee-DuuEKB4NJfKa1G_G",
        caption: "Chili off to jail for climbing",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/InterestingPrettiestPoxMikeHogu--uLx115Dp9gTa9Xt",
        caption: "Chili toob stolen",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/PiercingSpookyVelociraptorDatBoi-8JPB2YxiJuecrbqI",
        caption: "Chili melts from bed",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/SavageSmallSwallowOSfrog-0bsq97pSB9vR_jvu",
        caption: "Chili in the gym doing bowl-up reps",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/ShinyElegantMacaroniTheThing-wIL4Wg6pTBfBV72-",
        caption: "Chili endless tubing",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/TolerantSneakyChoughRuleFive-_bZPx-KibD2zyoIK",
        caption: "Chili trying more climbing",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/SavoryColorfulDurianKevinTurtle-XiulO5iOeRGS0iYM",
        caption: "Comparing sizes, Hazel and Chili",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/PoliteDifficultTeaWTRuck-auGfMN8AN2wFsTEC",
        caption: "Snowberry and Chili exploring",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/WonderfulElegantPeafowlMcaT-PnUm2Gtl1nxBA4wz",
        caption: "Chili and Snowberry meet and greet",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/FitRelatedBaconCharlieBitMe-iNUpFLyr_radAF6q",
        caption: "Tortilla and Chili Attempt Climb",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/PlumpRichMonkeyTriHard-Pv7ikDUJSGTqp9Gh",
        caption: "Finn has tail wiggles with Chili",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/EsteemedAgitatedBobaBudBlast-zhMMXmviDfnM_Q_Z",
        caption: "Chili and Maisy bouncy time",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/CorrectBlindingKiwiDoritosChip-M8zlFLCsGKNK8s7f",
        caption: "Mocha: Battle of the titans (with Chili)",
      },
    ],
    merch: null,
  },
  cowboy: {
    name: "Cowboy",
    wikipage: "Cowboy",
    aliases: ["The Dude, Cowbaby"],
    commands: ["cowboy"],
    sex: "Male",
    birth: null,
    birthday: null,
    arrival: "2024-08-25",
    valhalla: "2025-08-19",
    playgroup: "valhalla",
    summary:
      "Cowboy was a rescue ferret of Snails House. He was known to have furry chaps. Despite his hairlessness, he refused to wear the sweaters Shaye gave him. Instead, he loved to cuddle in blankets, preferably by himself.",
    lore: "Cowboy was an older ferret [who was surrendered by a pig rescue] to Snails House with advanced adrenal disease.  He barely had hair remaining, but he still had some action in him.",
    clips: [
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/LongAbnegateSproutKAPOW-T4MPnPOpDTTGRvNz",
        caption: "Cowboy beating up Beans",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/CulturedSparklingEchidnaWutFace-bwORngI9_D6o7qXB",
        caption: "Cash sniffah Cowboy",
      },
      {
        url: "Cowboy enjoys peanut butter.mp4",
        caption: "Cowboy enjoying some peanut butter",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/AcceptableArborealPotatoShadyLulu-VOtolJJ9963U6iNX",
        caption: "Cowboy playing in the rice",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/BigOpenPeachStrawBeary-Jol1X51m7wwpHC1w",
        caption: "Cowboy sniffah carrier",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/CoweringThoughtfulBeefTebowing-uNmdRNPqUcKrR42b",
        caption: "Cowboy into the mango",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/CuriousNeighborlyToothDBstyle-0tNCb2ftdCCf8TdC",
        caption: "Cowboy, Soop boi",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/GenerousWealthyApeVoHiYo-VdEYUCTNFM7Q5IUR",
        caption: "Cowboy, Pro toober!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/ImpartialHeartlessUdonLitFam-WWYp906HbE18RcLK",
        caption: "Cowboy getting snuggles",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/IncredulousGleamingPoultryPlanking-jq1c2YL3MEHrmyZk",
        caption: "Cowboy cosplaying bridge",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/OddEsteemedAnacondaPraiseIt-Dx74KDZ7dENP-QgD",
        caption: "Cowboy's new coat",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/PiliablePuzzledBatteryBrokeBack-1PJw8gWG5gksk4Vw",
        caption: "Cowboy finding the comfy spot",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/PlausibleSpookyMeatloafChocolateRain-taun4FNMHNwAynI6",
        caption: "Cowboy snuggly in the box",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/RepleteReliableKuduNotATK-bGKBPZzKPLFRESW0",
        caption: "Big Cowboy Snuggles",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/RespectfulSnappyBottleFutureMan-jFyi0sz-Z0U05Edw",
        caption: "The Cowboy emerges",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/RudeWimpyNuggetsFreakinStinkin--z0aHB5euJmOrGVn",
        caption: "Cowboy doing a big scratch",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/SuspiciousScaryParrotOMGScoots-aMgJGFIrrFz6hasP",
        caption: "Cowboy, Must.. have.. floor kibble",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/TameCalmHorsePartyTime-uVw1ost3u1179mEt",
        caption: "Cowboy close-up",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/TardyStormyPeppermintHeyGuys-puHW_LMnCSXwIpC9",
        caption: "Cowboy not sure about the rice pit",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/TolerantCredulousSandwichRickroll-A8KpdEjBshS8emoU",
        caption: "Cowboy, Smart pet",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/TolerantCulturedNikudonCclamChamp-SEuUK5V7_BHeW29i",
        caption: "Cowboy digging the big chair",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/TransparentShortSowPipeHype-JlirYSQwzcwHHTIr",
        caption: "Cowboy getting support wheels",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/TriumphantCheerfulLettuceStinkyCheese-O92YGlgpZdtPa9U8",
        caption: "Cowboy moving to the hunny sleep spot",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/TriumphantDrabOcelotOneHand-U9uSOmtvYcGJ4ov_",
        caption: "Cowboy nom and investigate",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/WimpyTawdryCarabeefPupper-itrdg-Se8QlpsPe1",
        caption: "Cowboy, The final goodbye. Valhalla calls",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/FastIgnorantStarSwiftRage-JUeEfZ6gwuHSDpOj",
        caption: "Henry and Cowboy sniffah",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/PlumpVivaciousWheelKippa-1Lrzx_wnAEhhbrWg",
        caption: "Cowboy sniffah Henry",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/HandsomeObeseDadBlargNaut-LWSiqPVzTsIlWdB_",
        caption: "Group sooping with Cowboy, Moxie and Henry",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/PowerfulEnthusiasticSaladWTRuck-wlDEmkzcXYuU5Ehg",
        caption: "Loki and Cowboy sniffah",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/LaconicFaintWallet4Head-Zv7YOHYvUeNVAWzi",
        caption: "Cowboy grooming Mocha",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/NiceCogentPeppermintCharlieBitMe-5hGqnzsFtlw8MY4r",
        caption: "Cowboy chasing Pickle",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/PluckyHardReindeerDancingBaby-IICOoIsI1zm2ew-C",
        caption: "Cowboy snacking together with Teep",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/FrigidPlainSoymilkCurseLit-bAiSsQv7OxuZPdp8",
        caption: "Cowboy duo sooping with Toby",
      },
    ],
    merch: null,
  },
  demeter: {
    name: "Demeter",
    wikipage: "Demeter",
    aliases: ["Professional Noseball Noodle, Deme"],
    commands: ["demeter"],
    sex: "Female",
    birth: null,
    birthday: null,
    arrival: "2024-06-16",
    valhalla: null,
    playgroup: "genpop",
    summary:
      "Demeter is a rescue ferret of Snails House. She is a classic ferret who truly enjoys the sport of noseball, and is the fastest of the business. Joining [[Chili]], she also has a strange obsession with trash cans.",
    lore: `Demeter joined the rescue together with [[Mistoffelees]]. They were surrendered from a loving home because the owners felt they could no longer provide adequate care. She is often seen running around the playroom at full speed with a ball at her nose, playing with the other ferrets of general population, and sometimes even attempting clever escapes.

For fun, Shaye allows the ferrets to impart wisdom upon the community. Demeter typed "G" and "li8s".`,
    clips: [
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/ClearUninterestedCrabMau5-kyu_ylbxZqK8nytu",
        caption: "Demeter, Noseball champion",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/CourageousTriumphantHamDoggo-QGvlRSV4HHdOw7uT",
        caption: "Deme has spring feetsies",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/CovertGlamorousRatBigBrother-LMmjvSDWt16w-8wY",
        caption: "Demeter, more noseballing",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/FineVainWhaleStinkyCheese-AuM6xJOOT5dAiiGe",
        caption: "Demeter leaps off Maddie",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/ImpossibleLitigiousLatteGivePLZ-KCGlHYB-apvyMOln",
        caption: "Demeter big jump!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/LittleFastDonkeyCoolStoryBob-hctTfBP_pH9khs2X",
        caption: "Demeter trying to get Shaye's attention",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/RefinedRenownedPeachPeoplesChamp-ECqDSDA8XKfEnVN0",
        caption: "Ball is good, demeter is speed",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/ThirstyAmusedPrariedogPeoplesChamp--IwYm3356aTiIm6G",
        caption: "Demeter, Professional noseball player",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/WealthyCredulousBaguetteKappaPride-qJJdVkIjpPvY6i9u",
        caption: "Deme must have the ball!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/AbrasiveCourageousHareMoreCowbell-TmiYA6wpdzXLeHSI",
        caption: "Henry giving Deme a scare",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/DirtyBoredRavenItsBoshyTime-pUHm567lAtXVvphF",
        caption: "Deme telling Shaye Henry's battery is low",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/JoyousHilariousMosquito4Head-kvvtvcU8McYCUF4t",
        caption: "Demeter and Mistoff spot a hidden ferret",
      },
    ],
    merch: null,
  },
  eddie: {
    name: "Eddie",
    wikipage: "Eddie",
    aliases: [],
    commands: ["eddie"],
    sex: "Male",
    birth: "2017-12-16",
    birthday: "12-16",
    arrival: "2023-08-18",
    valhalla: null,
    playgroup: "oldies",
    summary:
      "Eddie is a rescue ferret of Snails House. He came into the rescue as a solo ferret. Since he is so chill, he meshed really well with the oldies, and enjoys snuggling with [[Zero]] and [[Banana]].",
    lore: "Eddie came to the rescue from a pair of fantastic owners. His lifelong buddy died, and he needed other ferret friends because they are super social creatures.  Now he enjoys his leisure time among the oldies with lots of jaunts around the playroom, plenty of Mango snuggles, and tasty soupies.",
    clips: [
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/CoyExquisiteFoxDatSheffy-cxLgwrpthHUuk8wi",
        caption: "Eddie at the gates",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/PrettyCooperativeMosquitoThisIsSparta-sX9H9uAVqZFGNBEo",
        caption: "Eddie extremely excited!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/ViscousWonderfulPoxPoooound-JmRVm93g_buM72Su",
        caption: "Couch is the beddie for Eddie",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/GeniusResoluteKathyVoteYea-zhQRBXdC6jFxxFJq",
        caption:
          "Grandpa and Eddie nomming soup. Jinx investigates the tuna can",
      },
    ],
    merch: null,
  },
  enoki: {
    name: "Enoki",
    wikipage: "Enoki",
    aliases: ["Kiki"],
    commands: ["enoki"],
    sex: "Female",
    birth: null,
    birthday: null,
    arrival: "2025-10-25",
    valhalla: null,
    playgroup: "k",
    summary: "Enoki is a ferret of Snails House.",
    lore: `She joined together with [[Nameko]]. Her name is sourced from a kind of Mushroom. 

She is a sassy old lady and dooks alot.`,
    clips: [
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/RepleteFamousPlumCharlietheUnicorn-sigZHoNg9LJxWeRA",
        caption: "Enoki queen of the tower",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/AnnoyingToughFoxBrainSlug-U0agCZml-X7wxSC7",
        caption: "Enoki and Nameko debut",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/RefinedFilthyLorisYouDontSay-QnQiUS67SXF9DJ41",
        caption: "Enoki and Nameko playing in the water",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/UgliestLitigiousCatTwitchRPG-XTq7sqTx8d1-Xjg9",
        caption: "Enoki and Nameko playing in the toy basket",
      },
    ],
    merch: null,
  },
  felix: {
    name: "Felix",
    wikipage: "Felix",
    aliases: ["Former nudist ferret"],
    commands: ["felix"],
    sex: "Male",
    birth: null,
    birthday: null,
    arrival: "2024-05-23",
    valhalla: "2024-09-17",
    playgroup: "valhalla",
    summary: "Category:Ferrets lacking intro",
    lore: "Felix joined us as a nekkid ferret and had a lot of fun with both [[Finn]] and his new friends. They were in-state medical surrenders. Sadly, his age and illness caught up with him. He passed with his best friend Finn by his side. Link",
    clips: [
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/EmpathicArtsyFiddleheadsOMGScoots-FxT1RzlxsRVmXvs9",
        caption: "Felix yarrLick",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/RefinedSleepyDillFloof-hwQh7a2Mv3KriA0M",
        caption: "Food or foot?",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/SpeedyHungryMallardFutureMan-VPASk9okVi8130dP",
        caption: "Felix digging the sofa!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/TubularWrongGuanacoGrammarKing-JmQjS9olX3LAjvZw",
        caption: "Finn and Felix investigating the honeypot",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/WrongSpinelessSquirrelTheThing-WR3A6KDh-63rCzLJ",
        caption: "Felix and Finn being released",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/BlushingSmilingMageDoggo-CK_nHOZjWUAfVlay",
        caption: "Felix sniffah Henry",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/StrangePiercingTermiteTheTarFu-QpuzQZu0RNE503xS",
        caption: "Felix and Henry huge crash",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/CautiousPlacidHerringBleedPurple-1n5-IWS6zz2lNyE5",
        caption: "Felix following Mocha's example. First food, then hide!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/SpoopyPlumpArugulaDAESuppy-hzrnucCfDDZ9_aa9",
        caption: "Felix sniffah Mocha",
      },
    ],
    merch: null,
  },
  fig: {
    name: "Fig",
    wikipage: "Fig",
    aliases: ["Spiller of Soops"],
    commands: ["fig"],
    sex: "Male",
    birth: null,
    birthday: "01-10",
    arrival: "2024-01-11",
    valhalla: "2025-07-21",
    playgroup: "valhalla",
    summary:
      "Fig was a rescue ferret of Snails House. While he loved snuggling with the oldies, he was a great babysitter for [[Henry]]. He was easy to identify due to his balding tail.",
    lore: "Fig came to the rescue with his fellow housemate [[Chili]]. Figs birthday is January 10th.",
    clips: [
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/PeppyFlaccidCamelBrokeBack-PJ4tcWRG__VhVSmR",
        caption: "Badger trying to poop of Fig's Head",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/BeautifulPiliableLaptopFeelsBadMan-00iLWZ2KyvPrmc6b",
        caption: "Fig joining the teepee snuggle puddle",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/BoringShyEggplantPicoMause-o6Ma72hNfjd-lvu9",
        caption: "Fig hides toy",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/CorrectFlaccidToadFloof-F_q6ilUH9vQYkzRc",
        caption: "Fig Requesting attention from hooman",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/CrepuscularAmusedChowderPMSTwin-u_6LoN5haolin9Gh",
        caption: "Fig checking out the new toy",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/DeadSnappyKeyboardAliens-nsSU-yDTXiuGRnRt",
        caption: "Pumpkin consumes Fig!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/DeafTolerantEmuVoteNay-34zjLAVhYa5_pVAt",
        caption: "Fig doing a big ball stash",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/DelightfulKindMonkeyOhMyDog-rTmXMNacEzvfaIEN",
        caption: "Fig froggo relocation service",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/DepressedLightCardTBCheesePull-nMqBSteiBX2Jdqnd",
        caption: "Fig climbing into the toy basket!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/DirtyDeafManateeSpicyBoy-4CEiocT-eF7dJ553",
        caption: "Fig: new way to use a tunnel!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/FriendlyArborealCattleDancingBanana-f5ztQannvxNsk1cm",
        caption: "Fig yoinks the ball",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/FunnySecretiveSmoothieCmonBruh-PrcnYtiVXOykeIpH",
        caption: "Fig helping clean up the floor kibble",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/FuriousHedonisticKittenCmonBruh-1pKh9Quyov-PnKdl",
        caption: "Fig becomes toy!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/GentleCrunchyCheesecakeSaltBae-KvRhwQLmVWpFnCqr",
        caption: "Fig wimgler Smoochies",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/GoldenCoyBatOSsloth-v8iMZ-YqUKz7YWjT",
        caption: "Fig stashing ball",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/HappyMiniatureTaroBabyRage-vcPBtqVKOBxd9lox",
        caption: "Fig getting cuddles",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/HardMoldyPotatoPupper-U5NEpVVsyzkSv7Zt",
        caption: "Fig says Bad Soop!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/LaconicStupidTrayNononoCat-SjjPbLlGoJd7mu7l",
        caption: "Fig sliding into the mango",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/LightBlatantSwallowGrammarKing-FN6pdjoRcy7tl3Q5",
        caption: "Fig fails escape, poo's in Shayes corner as punishment",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/LongSmilingWormNinjaGrumpy-BthiojGBuh_NQ8vl",
        caption: "Fig's great ball adventure",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/ModernVastEchidnaCoolStoryBro-ItorKEsMylVpgKHU",
        caption: "Fig: Shaye, why?",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/OilyLongPassionfruitRiPepperonis-E0BBncroIVvxGFp0",
        caption: "Fig the cord dancer",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/PlumpFaithfulNewtPastaThat-7yGuA4dFjDoB68DN",
        caption: "Fig proud ball stash",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/PolishedKnottyCheddarImGlitch-ZcrQ-Af1u1KMOEn8",
        caption: "Fig finding a proper snuggle spot",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/ResoluteSparklingHummingbirdWOOP-coDw2mAUfH_7eIzc",
        caption: "Fig trying to get the cellar food! Tips bowl!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/SpunkySaltyArugulaRiPepperonis-5k62QoIIGhaT861S",
        caption: "Fig proudly stashes mega ball!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/SullenSpikyRutabagaDxCat-c7cRiH0vuxvFU9vk",
        caption: "Shaye showing Fig the new ramp",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/UglyTriangularTaroRickroll-wN00EIG_5Z7XcYaR",
        caption: "Fig proud, being a toy!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/UninterestedEnticingMelonPeoplesChamp-r3mRkwQhxdk6z4ow",
        caption: "Fig checking before doing a explore",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/VenomousVastShieldDatSheffy-m9L5kZVXkAgxt0iU",
        caption: "Fig takes the pass, runs and scores!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/AbstemiousHardArmadilloPastaThat-geBYvzBVIwEc0ZhK",
        caption: "Fig stashing toy! Henry investigates!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/BlitheVenomousLobsterDoritosChip-B-aui0aK1QtGGJ0k",
        caption: "Ferret delivery: Henry and Fig",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/FancyBreakableHamPupper--SUUtB5wWdqGY8BT",
        caption: "Fig grooming Henry",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/FunnyImpossibleJayTheThing-ym0MSJxKOAbn31XZ",
        caption: "Fig checking in on Henry eating",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/GenerousSeductiveKiwiSpicyBoy-PL8BVfGD1bLu-bok",
        caption: "Fig chilling down Henry",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/MildPleasantJuiceKappaWealth-gx55_5IJDpF16UZB",
        caption: "Henry runs over Fig",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/NurturingPlacidCoyoteFutureMan-df1Bbih7b3JLxWK3",
        caption: "Fig cleaning Henry's soup beard",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/SweetAthleticTrayDAESuppy-9c0sKIpD-y2IMNPm",
        caption: "Fig cleaning Henry",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/HungrySpikyBaconVoteNay-MYcC7OVzGK59pptF",
        caption: "Fig grooming Mocha, Henry is chilling",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/SmokyTallChickenHeyGirl-OkJYFG44qJCqOTO9",
        caption: "Luna comes to snuggle Fig!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/VainFantasticPizzaPicoMause-vR_iqOOKNNjKxB-o",
        caption: "Pumpkin consumes Moxie, trying to help Fig",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/OddHeadstrongSkunkPicoMause-gv6_5754dXViUnQq",
        caption: "Odin and Fig checking on Henry",
      },
    ],
    merch: null,
  },
  finn: {
    name: "Finn",
    wikipage: "Finn",
    aliases: ["Finnegan"],
    commands: ["finn"],
    sex: "Male",
    birth: null,
    birthday: null,
    arrival: "2024-05-23",
    valhalla: null,
    playgroup: "solo",
    summary:
      "Finn is a rescue ferret of Snails House. While he sometimes struggles to make ferret friends, he really enjoys human snuggles and scritches. He came to the rescue with his friend [[Felix]].",
    lore: "Finn joined us together with his, at the time, naked friend [[Felix]]. They were in-state medical surrenders. For a while, the best way to identify Finn, was to see Felix with him. Finn was very protective of his best friend [[Felix]]. Finn was there when his best friend passed away. These days, Finn enjoys the solo life with his gaming buddy, Shaye.",
    clips: [
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/TubularWrongGuanacoGrammarKing-JmQjS9olX3LAjvZw",
        caption: "Finn and Felix investigating the honeypot",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/WrongSpinelessSquirrelTheThing-WR3A6KDh-63rCzLJ",
        caption: "Felix and Finn being released",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/FlaccidArtisticBeaverNinjaGrumpy-Ryy45S9-M2ncjECe",
        caption: "Finn trying to fight through the bars",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/HotShyDonkeyBuddhaBar-K7xW2dK3X4CV7GLg",
        caption: "Belly rubs!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/KindDepressedTurtleBibleThump-7SVQuycO9j02bGHc",
        caption: "Finn doing an explore",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/LazySteamyAnacondaPicoMause-NgzAYTaXNTUKk_-L",
        caption: "Tipping the bowl!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/SucculentEagerHabaneroPogChamp-Hw9abv93EczewO_O",
        caption: "Finn requires help out of the rice box",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/PlumpRichMonkeyTriHard-Pv7ikDUJSGTqp9Gh",
        caption: "Finn has tail wiggles with Chili",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/KnottyIronicAntTheTarFu-IiJFm5EEJIRuf9Is",
        caption: "Henry and Finn being soup bro's",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/SplendidSquareLocustNotLikeThis-ixmENEMtuodvuHWI",
        caption: "Loki sniffah Finn",
      },
    ],
    merch: null,
  },
  ghost: {
    name: "Ghost",
    wikipage: "Ghost",
    aliases: ["Solo runner"],
    commands: ["ghost"],
    sex: "Female",
    birth: null,
    birthday: null,
    arrival: "2023-05-06",
    valhalla: "2025-04-26",
    playgroup: "valhalla",
    summary:
      "Ghost was a rescue ferret of Snails House. She was one of the few solo play time ferrets who prefers the company of her human caretakers.",
    lore: `Ghost was rescued from a family, which sadly hadn't taken care of her properly, this caused her to be aggressive towards other animals. Shaye tried to integrate her a couple of times with other ferrets; unfortunately, without success. In the old house, she had a seperate cage in the same room as the other ferrets. In the new house she got her own cage in Shaye's office. To ensure she got enough interaction, she had solo playtime with either Shaye or Thor. It was revealed that Ghost's original name was Strawberry, it was changed as the name did not fit.

Thor explaining Ghost's situation in short: Link`,
    clips: [
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/ZealousInspiringPigeonGrammarKing-XreFNggsgReGXRGR",
        caption: "Bagel sniffah Ghost",
      },
      {
        url: "Ghost_cuddles.mp4",
        caption: "Ghost cuddled by Shaye",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/AmericanBlatantYakDoubleRainbow-kVni7wPzAYyHdkBF",
        caption: "Ghost and Maddie cuddles",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/BashfulTangibleLegKappaClaus-CTXXsCzqKd5RxeTW",
        caption: "Digging is the best",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/BillowingAuspiciousRaccoonAliens-WkvB4uysIwB-T0AB",
        caption: "Ghost looking for a comfy spot",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/BrainyCulturedCroissantBatChest-pHUBKGj0YmbHtToY",
        caption: "Ghost investigating the room",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/CarefulPeppyGoshawkFutureMan-THVjS2A8TpKOvgWx",
        caption: "Ghost nail clippies",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/DeliciousPlumpTruffleNinjaGrumpy-nkHtrieqLzyaW_Ze",
        caption: "Solo playtime with Shaye",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/FurryIronicCarabeefVoteNay-ML1rjTu2sWwRZ7pJ",
        caption: "Ghost sniffing the playarea",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/GleamingColdMarjoramArgieB8-3NtDL2h4hhMUxnVq",
        caption: "Ghost exploring",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/GoodMoldyDotterelPupper-crqGBTQWM_xy1MTr",
        caption: "Honey Ghost getting pets",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/HotHilariousLionTBTacoRight-MzZsjCv7nsuRWTKO",
        caption: "Ghost getting ready for nap on pizza",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/RepleteCrackyTitanDendiFace-PVttwCqLHePu78P3",
        caption: "Ghost professionally toobing",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/RespectfulJollyKoupreyDoggo-S-ClRh_G4VMKojmD",
        caption: "Photo session with Ghost",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/VenomousSlickKimchiDAESuppy-GivYMlk7uOwbPgTc",
        caption: "Ghost napping on big pizza",
      },
      {
        url: "https://www.twitch.tv/piratesoftware/clip/CreativeBumblingMacaroniPeoplesChamp-Bd_dvsS6drN80bYt",
        caption: "Ghost visits Thor",
      },
      {
        url: "https://www.twitch.tv/piratesoftware/clip/UglyDarkParrotANELE-AHtG-jANgxbxSt8c",
        caption: "Ghost visits Thor again",
      },
    ],
    merch: null,
  },
  hazelnut: {
    name: "Hazelnut",
    wikipage: "Hazelnut",
    aliases: ["Hazel", "Sock Tax Criminal"],
    commands: ["hazelnut"],
    sex: "Female",
    birth: "2024-04-13",
    birthday: "04-13",
    arrival: "2024-08-03",
    valhalla: null,
    playgroup: "genpop",
    summary:
      'Hazel is a rescue ferret of Snails House. She enjoys fighting the "ghosts" she sees in the hammocks, and she has an obsession with biting socks of her human caretakers. She has a mostly white coat and very energetic activity.',
    lore: `Hazelnut was adopted from a pet store with [[Cashew]] and [[Peanut]] as part of the "Nut Gang". She has Waardenburg Syndrome  , is fully deaf, and has many behavioral issues. She was sold and returned multiple times due to these behavioral issues before the rescue acquired her.

These days, Hazel can be seen bopping around playtime with her general population friends, chasing her caretakers around the playroom, and playing with the wand toys.`,
    clips: [
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/BloodyFragileRedpandaRedCoat-MoQwci1P5ujCRj5C",
        caption: "Cashew and Hazel speed toobing",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/SavoryColorfulDurianKevinTurtle-XiulO5iOeRGS0iYM",
        caption: "Comparing sizes, Hazel and Chili",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/AmazonianFaithfulConsoleDatSheffy-Z5OJdx8_vmIO8VJA",
        caption: "Hazel snoogled into the cuddle puddle",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/BrainyRamshackleDinosaurMrDestructoid-mYTow3bkATLZc1yN",
        caption: "Hazel rages in the hammock",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/CourageousClearTortoiseBrainSlug-uYlwqRpB1KkjLGmR",
        caption: "Hazel attacks all the balls",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/DepressedSavageTurnipKappaPride-VpvnnKw1mofI0fS6",
        caption: "Hazel getting all the lambs",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/DoubtfulPlainWhaleHotPokket-uWwZYuU4Yjt4WCQk",
        caption: "Hazel commits sock tax",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/EagerUninterestedGrassDeIlluminati-hZ8Iz0HD9V_mpDIY",
        caption: "Whirlpool Hazel",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/EncouragingDoubtfulPeafowlMrDestructoid-QBRlVjpn1gUckxC2",
        caption: "Hazel doing Hazel things",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/EnergeticFunTapirBCWarrior-FY42QiuL_HCmHZRO",
        caption: "Hazel Yumps at Shaye",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/OutstandingFunnyWolfBIRB-arVOxxDJMoT2iE1y",
        caption: "Hazel vs ball",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/StormyToughHamburgerBCouch-71yklcQeHhJly7EP",
        caption: "Hazel speed toobing",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/TangentialCleverLarkDogFace-mH8-Gg_Qrncq6Zb6",
        caption: "Hazel sniffah socks",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/TawdryApatheticMartenNinjaGrumpy-zKY9iwRivD0IuEKi",
        caption: "Hazel plays with Maddie and TOY!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/TemperedSmoggyPhoneSaltBae-P_MJEcTW7GbkjrH7",
        caption: "Hazel puts her entire body into the food dish",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/UgliestHealthySkirretTinyFace-17OdbtXfGa4gEw8e",
        caption: "Hazel produces pee-o-box",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/YawningThirstyMarrowDuDudu-98jqX2KbNUvucHHs",
        caption: "Hazel plays with Thor",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/QuaintAgitatedLorisPlanking-8E0IJ4U4IDGF4pgO",
        caption: "Hazel foot soop and toy stolen by Latte",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/TubularFunZucchiniVoteNay-yKO9WEtKZ_UkK0oE",
        caption: "Mouse and Hazel playing with purple ball",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/BitterWanderingKuduPraiseIt-5nLC6p4jAjXKpEfN",
        caption: "Hazel crushes Peanut with volcano",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/ExpensiveObeseRaisinM4xHeh-sdSEUyjnIFQwJLyY",
        caption: "Hazel and Peanut fight like siblings",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/PeacefulUnsightlyKumquatVoHiYo-eKth75bZZUACw934",
        caption: "Hazel and Peanut go toobing",
      },
    ],
    merch: null,
  },
  henry: {
    name: "Henry",
    wikipage: "Henry",
    aliases: ["Henwy", "Nascar Driver, Son of Shaye, Henny, The King"],
    commands: ["henry"],
    sex: "Male",
    birth: null,
    birthday: "08-31",
    arrival: "2024-03-01",
    valhalla: null,
    playgroup: "solo",
    summary:
      "Henry is a rescue ferret of Snails House. Very wobbly. He's professionally trained as a NASCAR driver.  Additionally, he enthusiastically enjoys soup, often making a good mess for his caretakers to clean up.",
    lore: "Henry is our special boy. He runs in circles, wiggles his head, and generally is the cutest. Henry was initially diagnosed with possible neurologic symptoms; this seemed to cause him to have very bad motor control and run in a circular motion. He only turned left, earning him the nickname: Nascar driver",
    clips: [
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/KnottyDifficultFriseeDerp-UXULCt-XohLTXASA",
        caption: "Nana sniffing Henry",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/MiniatureCoweringRaisin4Head-TixMDfZYcFRaVuw6",
        caption: "Nana undermining Henry",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/TriangularAdorableQuailAsianGlow-uekSA8_ZSksoDNSn",
        caption: "Henry claims Banana as tunnel",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/SpoopyNurturingHornetThunBeast-Ctzf-YrT_shbA-Jl",
        caption: "Henry grooming Beef?",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/SweetPeacefulSamosaPicoMause-NnVCUHYUoAAKb32p",
        caption: "Beef doing a welfare check on Henry",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/ClearEnjoyableClintmullinsGrammarKing-OP0_8kdQoMLS7YqP",
        caption: "Bruce doing rounds with Henry",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/ElatedWiseHorseradishDeIlluminati-NBU1lNSxphRjcfux",
        caption: "Bruce: Henry needs to be cleaned!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/SmilingCrispyConsoleShadyLulu-t0cHpnsFRSQNjD74",
        caption: "Bruce sniffah Henry",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/FastIgnorantStarSwiftRage-JUeEfZ6gwuHSDpOj",
        caption: "Henry and Cowboy sniffah",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/PlumpVivaciousWheelKippa-1Lrzx_wnAEhhbrWg",
        caption: "Cowboy sniffah Henry",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/HandsomeObeseDadBlargNaut-LWSiqPVzTsIlWdB_",
        caption: "Group sooping with Cowboy, Moxie and Henry",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/AbrasiveCourageousHareMoreCowbell-TmiYA6wpdzXLeHSI",
        caption: "Henry giving Deme a scare",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/DirtyBoredRavenItsBoshyTime-pUHm567lAtXVvphF",
        caption: "Deme telling Shaye Henry's battery is low",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/BlushingSmilingMageDoggo-CK_nHOZjWUAfVlay",
        caption: "Felix sniffah Henry",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/StrangePiercingTermiteTheTarFu-QpuzQZu0RNE503xS",
        caption: "Felix and Henry huge crash",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/AbstemiousHardArmadilloPastaThat-geBYvzBVIwEc0ZhK",
        caption: "Fig stashing toy! Henry investigates!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/BlitheVenomousLobsterDoritosChip-B-aui0aK1QtGGJ0k",
        caption: "Ferret delivery: Henry and Fig",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/FancyBreakableHamPupper--SUUtB5wWdqGY8BT",
        caption: "Fig grooming Henry",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/FunnyImpossibleJayTheThing-ym0MSJxKOAbn31XZ",
        caption: "Fig checking in on Henry eating",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/GenerousSeductiveKiwiSpicyBoy-PL8BVfGD1bLu-bok",
        caption: "Fig chilling down Henry",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/MildPleasantJuiceKappaWealth-gx55_5IJDpF16UZB",
        caption: "Henry runs over Fig",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/NurturingPlacidCoyoteFutureMan-df1Bbih7b3JLxWK3",
        caption: "Fig cleaning Henry's soup beard",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/SweetAthleticTrayDAESuppy-9c0sKIpD-y2IMNPm",
        caption: "Fig cleaning Henry",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/HungrySpikyBaconVoteNay-MYcC7OVzGK59pptF",
        caption: "Fig grooming Mocha, Henry is chilling",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/KnottyIronicAntTheTarFu-IiJFm5EEJIRuf9Is",
        caption: "Henry and Finn being soup bro's",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/AdventurousFairGullThisIsSparta-J_GUReOSda-CpLzb",
        caption: "Henry cruising through the tubes",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/AgileSullenDogeDoubleRainbow-8uL3zAVCEFxUph_P",
        caption: "Henry very proud toober!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/AliveRoundSpiderAMPTropPunch-gZD2CAUbXkaNCyuv",
        caption: "Henry taking a shortcut",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/AnimatedFaithfulEchidnaWow-8QzfKAaf2A1iMpCl",
        caption: "Henry attacking blankie monster!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/AntsySpeedyQuailPeteZaroll-pgdKv9tCoCBKn77k",
        caption: "Henry orbiting Shaye",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/BovineRelatedAlbatrossCopyThis-FSuhy0lyvjg-JTif",
        caption: "Henry doing a flip",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/CarefulTenaciousGerbilPicoMause-R0RJQGd1eG1fPnqY",
        caption: "Henry having family dinner with Shaye",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/CarelessSquareJalapenoANELE-ewceqIol_68VKrMc",
        caption: "Henry on the offence",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/ClumsyWildKuduMoreCowbell-aH3OPpH5Sd5q4-06",
        caption: "Henry has private soop up close with Thor",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/CogentVivaciousGooseRiPepperonis-WojGDpyrYD0Y0IPE",
        caption: "Henry anger at the food dish",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/ColorfulCuriousSheepAMPEnergyCherry-MfdZgUmLHowBlbu3",
        caption: "Henry bathing time",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/ComfortableWealthyBunnyPeanutButterJellyTime-MDjH9gx1dJvW-p13",
        caption: "Henry nibble on the wet kibble",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/ConcernedStrangeHornetImGlitch-SH7WEr-HMlmrn7MF",
        caption: "Henry learned: Scratch",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/CorrectSleepyHumanPhilosoraptor-eBx7A4RNundjmWMC",
        caption: "Henry sneaking and peaking",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/CrazyGrotesqueHamburgerVoteNay-OhhbYJPmjdfv1kPN",
        caption: "Henry ninja roll",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/CreativeSuspiciousHabaneroTBTacoLeft-yjHxnHiT1Gyek6jH",
        caption: "Henry playing mini-nascar",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/CrepuscularBoldFerretANELE-00rDM9xYQmq8ZPey",
        caption: "Henry escapes soup prison",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/DaintyInquisitiveOctopusNomNom-dra1bb0Ru4UkxiPk",
        caption: "Henry playing bumper cars",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/DiligentCloudyAxeDAESuppy-PycAE7Q5Szq5PQyB",
        caption: "Henry doing a flip!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/EmpathicSpeedyJayStinkyCheese-fj-z3G4JtRf7ruv4",
        caption: "Henry demands to run!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/EnchantingCredulousRaisinOhMyDog-LBXvD24sRJECinNg",
        caption: "Henry getting Thor snuggles",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/FaintCulturedZebraAMPEnergyCherry-TXBXZdcLUyNFpssi",
        caption: "Thor tucking in Henry",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/HappyBlindingDumplingsTBTacoRight-Pi6sOUfFUBtcu2UP",
        caption: "Henry foot soop, #ShayeHands",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/HeartlessGrossGorillaGingerPower-aotDwSXXUGtgjTVi",
        caption: "Henry not giving into demands",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/HedonisticOriginalRavenDancingBanana-obzoa3YucNDV2ipL",
        caption: "Henry playing horsy",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/HilariousAbrasiveBibimbapTheThing-DgAedRY70uvibfrN",
        caption: "Shaye plays with Henry in rice box",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/IcyImpossibleOryxSoBayed-LbxO2JtPgkylNuwR",
        caption: "Henry physio",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/JollyHelpfulWeaselPJSugar-_YSvSmPEMkXQBsri",
        caption: "Henry making perfect landings",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/JoyousDullMageNerfBlueBlaster-EUzdZbjkUDXzsVaR",
        caption: "Henry Pretzel Mode",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/LightFragileLorisOptimizePrime-hmf8fulJmJH5-3Vc",
        caption: "Henry, audition for new loading icon",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/OutstandingSparklyWormNotLikeThis-fZ3GMcBsA6d4NsGX",
        caption: "Henry's Hopping Wardance",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/PlacidMistySpiderCoolStoryBro-oY_H7AX85g33mHzh",
        caption: "Henry nibbling carrot toy",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/PluckyMotionlessSamosaTinyFace-MjcYROxb3xLyQ1m4",
        caption: "Henry getting eaten by the hunny pot",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/PopularCarefulWatermelonDeIlluminati-3dBoP7jpHOZBb1cW",
        caption: "Cinnamon roll Henry close up",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/PreciousBashfulCaribouCharlieBitMe-8zkE-UYVE_yc2c4y",
        caption: "Ninja Henry",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/ProtectiveDifficultBatDxCat-74sNB7ftrd06Hq_-",
        caption: "Henry learns sock tax",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/ProudPhilanthropicClintNononoCat-AFIf1yLv0z7Tu5TZ",
        caption: "Henry wiggling around in his harness",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/ProudPopularChickenDansGame-AH1R0_XPc0h07BTE",
        caption: "60 seconds of Henry SPEEEEN",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/RenownedBlatantKangarooEleGiggle-tiuHBV-4AWQFN-B4",
        caption: "Henry doing a handstand while peeing",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/SpunkySmallSoymilkDendiFace-wOxg8YKgilIZAu2i",
        caption: "Thor says hi to an excited Henry",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/StylishSucculentSamosaMrDestructoid-ZriZocpk4uNdjFdD",
        caption: "Henry learning how to teleport",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/SuaveKathishClipsdadKappaClaus-9JjDaBHZ2_lg9pMA",
        caption: "Henry running to the music beat",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/ZanyCloudyClamKevinTurtle-2OI9AtYeesIY0xEI",
        caption: "Henry speeding on the race track",
      },
      {
        url: "https://www.twitch.tv/piratesoftware/clip/BigGlamorousPeafowlPastaThat-w88zUkYxTzk35kLI",
        caption: "Thor's Reaction",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/AmericanAbrasiveSamosaRuleFive-nDCt4W45mded6C1N",
        caption: "Luna checking on Henry",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/ColdbloodedDirtyEelDendiFace-OorZ6bL1iIqZaBG2",
        caption: "Luna and Henry play chase",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/ThoughtfulJoyousBaboonPJSugar-AXekr4jrVGe5gLKG",
        caption: "Henry investigating Mouse",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/TiredFlirtyParrotDogFace-08fee4mbdjra1n3k",
        caption: "Peanut 2 cleaning Henry",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/BlindingSarcasticSpaghettiJebaited-gC6mWEvclQkpKivz",
        caption: "Jack observing Henry",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/VibrantCuteGnatFrankerZ-UADkI7XOjZBmtM25",
        caption: "Henry and Jinx playchase",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/DeterminedPlumpPigeonBCWarrior--0nH9qPJQqsJiNZD",
        caption: "Kitty investigating Henry's eating contraption",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/ExuberantBigDootPrimeMe-B_WUe2ecdQcexRiF",
        caption: "Kitty checking in on Henry",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/HandsomeClearCasetteNomNom-uuvNxT0-R2aR1p27",
        caption: "Smol Kitty, big Henry",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/SleepyDeliciousMouseFeelsBadMan-cNFJEUWCJcBFe0ud",
        caption: "Henry Investigating Kylo",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/MuddyFlirtyCourgetteCurseLit-x2BXF7GF8b7YHRfW",
        caption: "Latte and Henry in the diggy box!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/ObeseSilkyAirGuitarBleedPurple-L52Xc7deN3Lo7C6n",
        caption: "Misto checking in on Henry",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/SpoopySplendidWeaselBlargNaut-veLrZT1gxhVHMXDS",
        caption: "Henry checking on Mocha",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/CaringPrettyWallabyPeanutButterJellyTime-vMFbr7Z-lmlwg5lM",
        caption: "Moxie snoozing buddy with Henry",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/FurryFurrySowWutFace-9r91GH4agB6cqZbb",
        caption: "Moxie doing a check on Henry",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/LongRelatedIguanaHeyGuys-CrBku4iqdabxQyCd",
        caption: "Moxie grooming Henry",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/ResilientBlindingGnatFailFish-B1ZNPb9HyZMbGMTb",
        caption: "Moxie sooping with Henry",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/OddHeadstrongSkunkPicoMause-gv6_5754dXViUnQq",
        caption: "Odin and Fig checking on Henry",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/AbrasiveBeautifulCaterpillarSSSsss-zxsSN-oI5GO-QCai",
        caption: "Teep trying to ride Nascar Henry",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/MildBelovedTermiteOhMyDog-32zj5kn9mMNB-nxw",
        caption: "Officer Teep trying to arrest Henry",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/SillyFamousReindeerPhilosoraptor-on3zarb_1seWAGQ_",
        caption: "Officer Teep arresting Henry for speedcrimes",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/TenderLachrymoseTardigradeDatSheffy-Bdzbe45FQHd8pBS9",
        caption: "Officer Teep arresting Henry",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/SteamyAntsyClamHumbleLife-8v2n-0eNYc44pNpp",
        caption: "Grandpa chilling with Henry in the frogbed",
      },
    ],
    merch: null,
  },
  jack: {
    name: "Jack",
    wikipage: "Jack",
    aliases: ["Captain Jack"],
    commands: ["jack"],
    sex: "Male",
    birth: null,
    birthday: null,
    arrival: "2025-02-23",
    valhalla: null,
    playgroup: "solo",
    summary:
      "Jack is a rescue ferret of Snails House. He is a solo-play ferret who prefers to play by himself.",
    lore: `Jack joined the rescue as an oldie, (approximately 7-8 years old), due to blood sugar crash from insulinoma. He comes from a loved rescue that also surrendered [[Kitty]] for similar reasons.

Jack is a Blaze ferret and roans out. Roaning out means that with each shed, he will get more white hair, but likely he may also keep some markings.`,
    clips: [
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/FitKindBubbleteaPermaSmug-gBqdI-tjnjL--70N",
        caption: "Bagel sniffah Jack",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/CoyEndearingPterodactylBlargNaut-tjt5j89CXNadr2Eb",
        caption: "Jack scritching the perfect spot",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/FantasticSuaveChickenItsBoshyTime-WMY0ElgCpoywO2L-",
        caption: "Jack snuggling with Shaye",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/MoistFrigidNewtDoubleRainbow-WN2_-g61PWCck5g1",
        caption: "Jack getting snuggles",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/PoisedDrabDelicataStoneLightning-3MP6UEGm9BB735YE",
        caption: "Jack getting soop",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/SwissTangentialDinosaurRedCoat-unvEWT4TOIX1gf7-",
        caption: "Jack perfectly hidden",
      },
      {
        url: "https://www.twitch.tv/piratesoftware/clip/BlueBlindingMooseDoubleRainbow-uOgixJ9JyGts2pe4",
        caption: "Jack hijacking the stream",
      },
      {
        url: "Jack_kissies.mp4",
        caption: "Jack kissies for Shaye",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/BlindingSarcasticSpaghettiJebaited-gC6mWEvclQkpKivz",
        caption: "Jack observing Henry",
      },
    ],
    merch: null,
  },
  jasmine: {
    name: "Jasmine",
    wikipage: "Jasmine",
    aliases: ["Jazzy"],
    commands: ["jasmine"],
    sex: "Female",
    birth: null,
    birthday: null,
    arrival: "2025-07-11",
    valhalla: null,
    playgroup: "oldies",
    summary:
      "Jasmine is a rescue ferret of Snails House. While she resides with the oldies, she has quite the get-up and go attitude! She is frequently seen promenading around the playroom during oldie playtime.",
    lore: "Jasmine arrived at the rescue as a solo lady from a loving home. She was in need of friends and some senior medical care that the rescue could provide. She is a super active old lady who seems to always want playtime. She likes chilling in the comfy beds. Occasionally, likes to play with the balls available around the playroom. And like any active old lady, she demands to be involved in ALL playtimes.",
    clips: [
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/GoldenSecretiveQuailTheTarFu-wJ7iUZ_A8v4-Ul3X",
        caption: "Jasmine demands the ball",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/NastyGrotesqueDragonStrawBeary-5zvy26pSWRM47I4w",
        caption: "Jasmine doing an investigate",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/OilyBadDumplingsStoneLightning-1hxIkWsh9Fd-cgjc",
        caption: "Jasmine getting attentions and stikk",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/ThoughtfulCalmSalsifyImGlitch-D1HXnxvS7cr7zBMb",
        caption: "Jasmine chilling in the long lemon boat",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/ToughKitschyTitanBudStar-j71fIyaqXN5H7S1p",
        caption: "Kitty and Jasmine share a stikk",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/SmokyAnnoyingPandaYee-ZoqaD5XObZEOGcOd",
        caption: "Rye says hi to Jasmine",
      },
    ],
    merch: null,
  },
  jinx: {
    name: "Jinx",
    wikipage: "Jinx",
    aliases: ["Chill Climber"],
    commands: ["jinx"],
    sex: "Female",
    birth: null,
    birthday: "09-30",
    arrival: "2024-03-01",
    valhalla: null,
    playgroup: "genpop",
    summary:
      "Jinx is a rescue ferret of Snails House. She is a very playful girl who gets along with many of business. She is also a professional escape artist with a knowledge of both directions: up AND down!",
    lore: `Jinx came to the rescue together with [[Henry]]. They are in different playgroups because of Henry requiring special treatment. Jinx is quite playful and gets along well with the other ferrets. Recently, Jinx joined the crew of escape artists.

For fun, Shaye allows the ferrets to impart wisdom upon the community. Jinx typed "2a 😅".`,
    clips: [
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/GeniusResoluteKathyVoteYea-zhQRBXdC6jFxxFJq",
        caption:
          "Grandpa and Eddie nomming soup. Jinx investigates the tuna can",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/BlitheSassyTubersMVGame-yGs--k5zB8gP-BUn",
        caption: "Jinx cone inspector",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/ThoughtfulWildDogFutureMan-eOG2WOm4haesNMNt",
        caption: "Jinx: More climbing detected",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/WildFaithfulRadishStoneLightning-VgM3wo9VpmE2LOuq",
        caption: "Jinx joins the Climbing Crew",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/VibrantCuteGnatFrankerZ-UADkI7XOjZBmtM25",
        caption: "Henry and Jinx playchase",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/TenderPluckyHornetBCWarrior-e6D6lQ1pgOHlvM8S",
        caption: "Jinx wants to play with Grandpa",
      },
    ],
    merch: null,
  },
  juniper: {
    name: "Juniper",
    wikipage: "Juniper",
    aliases: [],
    commands: ["juniper"],
    sex: "Female",
    birth: null,
    birthday: null,
    arrival: "2025-12-01",
    valhalla: null,
    playgroup: "oldies",
    summary:
      "Juniper is a rescue ferret of Snails House. Juniper came to the rescue with [[Ash]], [[Rowan]] and [[Rye]].",
    lore: "Juniper came with [[Ash]], [[Rowan]] and [[Rye]] from a very loving home in which life circumstances had unfortunately changed, so they came to Snails House.",
    clips: [
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/FitArtisticKumquatPhilosoraptor-_MC-EB3wSCKcpbCe",
        caption: "Rowan, Rye, Ash and Juniper explore the playroom",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/AwkwardWimpyLardCopyThis-P82auEx3-ad_0UZS",
        caption: "Juniper blends into the ball pit",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/SpotlessDepressedFriesTBTacoLeft-pfz0dEkiddoXJMjM",
        caption: "Rowan and Juniper play in the ball pit",
      },
    ],
    merch: null,
  },
  kahlua: {
    name: "Kahlua",
    wikipage: "Kahlua",
    aliases: ["Ear Crime Jr"],
    commands: ["kahlua"],
    sex: "Male",
    birth: null,
    birthday: null,
    arrival: "2024-02-23",
    valhalla: null,
    playgroup: "genpop",
    summary:
      "Kahlua is a rescue ferret of Snails House. He is a very chill ferret that is often used for new ferret introductions. He is also a reformed ear criminal.",
    lore: `Kahlua came to the rescue together with [[Mai Tai]], [[Mimosa]], [[Scotch]] and [[Whiskey]]. Due to their names, they are also known as the alcohol or Booze crew.
Kahlua, like [[Beans]], spent time in ear crime jail, with the two sharing a cell for a short period before getting separate accommodations. Eventually, Kahlua was returned to the general population group after proving he could be a good boy.

For fun, Shaye allows the ferrets to impart wisdom upon the community. Kahlua typed "Need1iap".`,
    clips: [
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/CoyCourageousBaguetteVoHiYo-OXqPuULNZ8RQYAEp",
        caption: "Kahlua yoinks lamby from the couch",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/CrepuscularCovertPuddingM4xHeh-XzG1fJR7xxyZNlGF",
        caption: "Kahlua noodle sliding",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/HungryLovelyPassionfruitShazBotstix-VGqUQVSsHhVtgx5b",
        caption: "Kahlua's introduction",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/LazyCuriousCockroachItsBoshyTime-P0q7MeKxFb_wyYO8",
        caption: "Kahlua staring into your soul",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/LovelyBusyDiscBabyRage-kxBLvxPZdpnbDsgs",
        caption: "Kahlua gets Shaye scritches",
      },
    ],
    merch: null,
  },
  kitty: {
    name: "Kitty",
    wikipage: "Kitty",
    aliases: [
      "Baseboard Roomba, Excitement Incarnate, Destroyer of Lambchops, La Creatura",
    ],
    commands: ["kitty"],
    sex: "Female",
    birth: null,
    birthday: null,
    arrival: "2024-12-19",
    valhalla: "2025-11-19",
    playgroup: "valhalla",
    summary:
      "Kitty was a rescue ferret of Snails House. She was a sweet little old white ferret. She got really excited about food and enjoyed fighting lambchop toys .",
    lore: "Kitty came to the rescue on December 19th, 2024. Kitty had Lymphoma, and started Chemo on 1/17/2025. Kitty was also missing most of her tail due to a chordoma. Despite her condition, Kitty seemed happy, healthy and had been gaining weight during her time with the rescue.",
    clips: [
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/ToughKitschyTitanBudStar-j71fIyaqXN5H7S1p",
        caption: "Kitty and Jasmine share a stikk",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/AcceptableObliqueOpossumTriHard-KZkZsIcHlHeHaZsk",
        caption: "Nomming soop, many excite!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/AntsyThoughtfulCougarLitFam-Dq_KihoThouc6WbG",
        caption: "Kitty gags at fish treat",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/BloodyShyDumplingsShazBotstix-R-segovVc05bo3lX",
        caption: "Kitty the climber",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/BrainyRamshackleJackalJebaited-Y2AWbVp1w9yIhNT1",
        caption: "Toobing!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/DeterminedEntertainingZebraBleedPurple-Bd-sGXG8xK-N_X_F",
        caption: "Kitty being investigated",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/FaithfulShinyFriseeRalpherZ-t7Tfb6vcsZpwek62",
        caption: "Kitty doing a play",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/RoundCarefulGarbageOhMyDog-VORbwi8rhBbU8s6j",
        caption: "Zooming!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/SpinelessAmorphousRutabagaThunBeast-67-wvAEAOToZQHIv",
        caption: "Kitty suplexes Lamby",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/UglyInspiringGiraffeVoteNay-15LSIZjN6-Kg3A8k",
        caption: "Kitty evicts lamby from sleep spot",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/DeterminedPlumpPigeonBCWarrior--0nH9qPJQqsJiNZD",
        caption: "Kitty investigating Henry's eating contraption",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/ExuberantBigDootPrimeMe-B_WUe2ecdQcexRiF",
        caption: "Kitty checking in on Henry",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/HandsomeClearCasetteNomNom-uuvNxT0-R2aR1p27",
        caption: "Smol Kitty, big Henry",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/PatientAssiduousGalagoDxCat-9f7HCN26Su_15Yrn",
        caption: "Loki cleaning Kitty and Peanut 2",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/OutstandingFamousNigiriCoolCat-SutvhO8wgElVao4s",
        caption: "Lucas weighing down toob. Kitty can't reach stikk!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/CooperativePolishedOwlKippa-niOIsg5TczIENeoo",
        caption: "Pepperoni stealing Kitty’s stick",
      },
    ],
    merch: null,
  },
  kylo: {
    name: "Kylo",
    wikipage: "Kylo",
    aliases: [],
    commands: ["kylo"],
    sex: "Male",
    birth: null,
    birthday: null,
    arrival: "2025-04-07",
    valhalla: "2025-05-02",
    playgroup: "valhalla",
    summary:
      "Kylo was a rescue ferret of Snails House. He came to the rescue with his roommate [[Roxy]].",
    lore: "Kylo was surrendered to Snails House due to medical complications. He arrived at the rescue with [[Roxy]].",
    clips: [
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/BrightSquareCodSSSsss-UoQoIvslUUQm8tRw",
        caption: "Taking an alternative route",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/GeniusKitschyShingleShadyLulu-GjFsl5cm8_BOAq0a",
        caption: "Soop and hide!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/HeadstrongEagerKittenCoolCat-BNnPZ5wPrMziKNmZ",
        caption: "Kylo toobs under the blankets!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/JollyAbstruseMosquitoKeepo-zB6Mm3AVIGmlvtUD",
        caption: "Kylo delivered to comfy bed",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/MuddyCovertTireSaltBae-xoz_o4aOv9wm7ILS",
        caption: "Kylo sploots out of bed",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/OriginalCuriousPuppyKreygasm-DqfSSwADo2fjYg-C",
        caption: "Flipping Kylo",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/SmilingSingleCaribouYouDontSay-GdWLtY3FHJjWS4uJ",
        caption: "Cruising to the waterbowl",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/SleepyDeliciousMouseFeelsBadMan-cNFJEUWCJcBFe0ud",
        caption: "Henry Investigating Kylo",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/StupidEasyWormGOWSkull-JUy-rxJue7b62QjF",
        caption: "Peanut 2 doing an inspect on Kylo",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/RamshackleMoldyPlumageKappa-VEJXDq7R_HYSoZjD",
        caption: "Kylo meeting Peepo",
      },
    ],
    merch: null,
  },
  kyo: {
    name: "Kyo",
    wikipage: "Kyo",
    aliases: ["Speedy bouncer"],
    commands: ["kyo"],
    sex: "Female",
    birth: null,
    birthday: null,
    arrival: "2024-06-05",
    valhalla: null,
    playgroup: "kyosai",
    summary:
      "Kyo is a rescue ferret of Snails House. She is an all-white ferret. Kyo really enjoys her playtime with her friend [[Sai]].",
    lore: "Kyo came to the rescue together with [[Sai]]. During their first playtime(s), it was determined they didn't mesh well with the big group of gen pop, and instead preferring each other's company. They get ample time in the big play room, as well as being Shaye's gaming buddies in Shaye's office. Kyo often seems to have an endless amount of energy, often times seen running around long after [[Sai]] has found a place to sleep.",
    clips: [
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/BumblingPricklyWaffleRalpherZ-mEvJ2WSHdRY4ZR-a",
        caption: "Kyo doing a toobing",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/FrozenZealousMeerkatKappa-yp9i36L92as5O1Pv",
        caption: "Kyo wardancing",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/MotionlessOilyBeanDogFace-Ukp4zfSiCKKLkZPV",
        caption: "Kyo extremely bouncy",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/UninterestedMistyBatRickroll-UglXnnjKx6DQEg8s",
        caption: "Kyo nibbles finger",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/ZealousShinyDillSwiftRage-Yub2ORDf_rUvj-fF",
        caption: "Kyo and Beans bouncing around",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/FaintNurturingAubergineUnSane-70apOYHNHAS1gqw6",
        caption: "Kyo and Sai battle the ball in the toob",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/OddIronicAlbatrossTooSpicy-u8b5AO6TeNUQX3aX",
        caption: "Shaye gives return uppies to Kyo and Sai",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/PlumpWildChoughBudBlast-YT_YeNUseiyw0guq",
        caption: "Vinny after a shower with Kyo zooming by",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/BlazingPeacefulChickpeaPhilosoraptor-UdmGva-W3TAXxgSZ",
        caption: "Shaye being double teamed by Kyo and Sai",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/LittleLazyFlamingoOSsloth-aRbMEKVGAWmY9CJA",
        caption: "Sai snuggle time with Kyo",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/PhilanthropicSnappyLardShazBotstix-YqsG2UDsf4JhEx9h",
        caption: "Sai doing a toobing with Kyo",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/WanderingArtsyWaspNotLikeThis-4RWHgZfwtZiWrbZG",
        caption: "Kyo & Sai are introduced",
      },
    ],
    merch: null,
  },
  latte: {
    name: "Latte",
    wikipage: "Latte",
    aliases: ["Hawk", "From DIM baby to fearful fighter"],
    commands: ["latte"],
    sex: "Male",
    birth: null,
    birthday: null,
    arrival: "2023-12-01",
    valhalla: null,
    playgroup: "genpop",
    summary:
      "Latte is a rescue ferret of Snails House. He is super feisty and enjoys play fighting with many of the ferrets. He also enjoys stashing/playing with the biggest toys he can find.",
    lore: "Latte joined the rescue not long after [[Mocha]] as the second ferret with DIM. At first he could barely move but over time and with the proper treatment he got back the ability to move like the others. Now that he's feeling better, he really likes to rile up Mocha during playtime.",
    clips: [
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/QuaintAgitatedLorisPlanking-8E0IJ4U4IDGF4pgO",
        caption: "Hazel foot soop and toy stolen by Latte",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/EncouragingComfortableCatTBTacoLeft-l16p1hVn2vWXRTGK",
        caption: "Latte doing a playful roll",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/HelpfulBlightedFriseeCharlieBitMe-sSeIcL7vQHfsqZSP",
        caption: "Ninja Latte",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/LongUnsightlyBubbleteaMrDestructoid-l8hoe_03A9smHcck",
        caption: "Latte looking for cellar soop",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/OnerousAwkwardAyeayeJonCarnage-sqgy0c0ZZxmzzVSL",
        caption: "Latte yoinking the cone",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/TemperedIgnorantCoyotePeoplesChamp-If3HdrpGZAx1n499",
        caption: "Latte scoop and cuddle",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/MuddyFlirtyCourgetteCurseLit-x2BXF7GF8b7YHRfW",
        caption: "Latte and Henry in the diggy box!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/CuriousRacyGoblinSoonerLater-cXzjjop9oYbObjlJ",
        caption: "Latte and Lucky match! Pickle fights himself",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/AuspiciousBlazingCrabDerp-xmDzMHcDFfHIOOzq",
        caption: "Mocha and Latte eating soop",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/DeliciousRelentlessNikudonTBTacoLeft-sjdUh0DlkDgCRCvi",
        caption: "Rusty and Latte Battle",
      },
    ],
    merch: null,
  },
  loki: {
    name: "Loki",
    wikipage: "Loki",
    aliases: ["The Original"],
    commands: ["loki"],
    sex: "Female",
    birth: null,
    birthday: "06-19",
    arrival: "2019-07-31",
    valhalla: "2025-09-11",
    playgroup: "valhalla",
    summary:
      "Loki was a rescue ferret of Snails House. She was one of the very first ferrets rescued. She was a sweet older lady who really enjoys stashing toys.",
    lore: `Loki was a breeder lab animal for the University of Washington. She came to the rescue with her fellow lab friend, [[Snails]] back in 2019. Loki's birthday is 2018/06/19.

Loki and [[Snails]] were the first two Ferrets Thor and Shaye rescued.

Loki loved to stash toys, regardless of their size.`,
    clips: [
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/SpeedySassyCookieANELE-cvGu1L_1o624VtP0",
        caption: "Beans squish Loki",
      },
      {
        url: "https://www.youtube.com/watch?v=o313G2396Ds",
        caption: "Beef the thief, steals food out of Loki's mouth",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/PowerfulEnthusiasticSaladWTRuck-wlDEmkzcXYuU5Ehg",
        caption: "Loki and Cowboy sniffah",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/PatientAssiduousGalagoDxCat-9f7HCN26Su_15Yrn",
        caption: "Loki cleaning Kitty and Peanut 2",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/ObliviousFuriousBeanDancingBaby-3MIv3lR9zZA-NWZ_",
        caption: "Loki yoinks the toy",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/PolitePeppyCamelKappaRoss-a-FBBeDXHS-Mj-EI",
        caption: "Lion King Loki",
      },
      {
        url: "https://www.twitch.tv/piratesoftware/clip/GenerousBlindingCourgetteDansGame",
        caption: "Loki what are you doing?",
      },
      {
        url: "https://www.twitch.tv/piratesoftware/clip/SolidTubularEmuLeeroyJenkins-BCtl0-0XZVSMPFgW",
        caption: "Loki tries to escape the Rice Box",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/SplendidSquareLocustNotLikeThis-ixmENEMtuodvuHWI",
        caption: "Loki sniffah Finn",
      },
      {
        url: "https://www.twitch.tv/piratesoftware/clip/PuzzledPrettyOstrichStoneLightning",
        caption: "Loki and Snails sip together",
      },
      {
        url: "https://www.twitch.tv/piratesoftware/clip/SavoryStrangePidgeonCharlietheUnicorn",
        caption: "Loki and Snails being cute",
      },
    ],
    merch: null,
  },
  louise: {
    name: "Louise",
    wikipage: "Louise",
    aliases: [],
    commands: ["louise"],
    sex: "Female",
    birth: null,
    birthday: null,
    arrival: "2024-05-23",
    valhalla: null,
    playgroup: "genpop",
    summary:
      "Louise is a rescue ferret of Snails House. She came to the rescue with her sister, [[Thelma]]. She also enjoys climbing both her caretakers and a lot of the toys during playtime.",
    lore: `Louise joined the rescue together with her sister, [[Thelma]]. They came to the rescue as surrenders from the state of California.

For fun, Shaye allows the ferrets to impart wisdom upon the community. Louise typed "B see" and "9un".`,
    clips: [
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/AttractiveBusyWaterWholeWheat-Teqw1p9-q0AM7_Fz",
        caption: "Jailed after climbing",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/EnticingBeautifulSrirachaFreakinStinkin-ndqPDH2owa0N-y02",
        caption: "Cage climber",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/GrotesqueUnusualPeafowlCeilingCat-hrMK6Xx9qNxCMaOi",
        caption: "Louise toob rage",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/HorribleEmpathicAnteaterAliens-os0qEgKX5GSQ9n0f",
        caption: "Louise playing in the paper",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/InspiringArtsyWoodpeckerHotPokket-l7rAALakAGi50ojP",
        caption: "Louise cat tree parkour",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/RelatedBrightCattleAMPEnergyCherry-c6kho6vS94fUva-d",
        caption: "That sock is MINE",
      },
    ],
    merch: null,
  },
  lucas: {
    name: "Lucas",
    wikipage: "Lucas",
    aliases: [],
    commands: ["lucas", "luca"],
    sex: "Male",
    birth: "2019-12-08",
    birthday: "12-08",
    arrival: "2025-09-27",
    valhalla: null,
    playgroup: "oldies",
    summary:
      "Lucas is a rescue ferret of Snails House. He came from a loving home, where he lost his friends to age. He enjoys playtime with his fellow oldies.",
    lore: "Lucas came to the rescue from a loving home. His playmates had passed, and the owner wanted him to have ferret friends so he wouldn't be lonely. He is sweet and playfull.",
    clips: [
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/OutstandingFamousNigiriCoolCat-SutvhO8wgElVao4s",
        caption: "Lucas weighing down toob. Kitty can't reach stikk!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/AnnoyingUglyWrenGivePLZ-6HgSVva2Q2ouf_wv",
        caption: "10/10 dismount Lucas",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/BlazingSaltyEyeballRickroll-SPQ12aw68OJIDxUA",
        caption: "Lucas digging the tubes",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/CalmCuteTermiteDuDudu-5PQ8DUA1dC1AmHSa",
        caption: "Lucas hunting for comfy spot!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/CorrectExuberantSashimiOSkomodo-rU7t7THkrsAajdvo",
        caption: "Lucas requesting Maddie attention",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/HomelySullenGrouseHotPokket-MYU1yZU_CJmzdcz7",
        caption: "Lucas gets uppies and kisses!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/MotionlessHorribleTrollWOOP-TNoXDfkh9Q60T7NJ",
        caption: "Lucas is grace",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/NiceHilariousStorkPRChase-WK_E6ZCluLEPaCY5",
        caption: "Lucas paper diggah!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/TiredEntertainingOctopusBigBrother-0NOqeUSnPySna-Ht",
        caption: "Lucas very carefully exiting the paper bin",
      },
    ],
    merch: null,
  },
  lucky: {
    name: "Lucky",
    wikipage: "Lucky",
    aliases: [],
    commands: ["lucky"],
    sex: "Male",
    birth: "2022-12-21",
    birthday: "12-21",
    arrival: "2023-07-07",
    valhalla: null,
    playgroup: "genpop",
    summary:
      "Lucky is a rescue ferret of Snails House. He is super playful, and he loves play fighting with everyone (even [[Henry]])! He thoroughly enjoys digging in snow. The vacuum is his ultimate nemesis.",
    lore: `Lucky was surrendered to the rescue by a pet store, along with his fellow cage mates [[Pickle]] and [[Spud]] because the store was opting out of selling ferrets. 

For fun, Shaye allows the ferrets to impart wisdom upon the community. Lucky typed "lin l0llll".`,
    clips: [
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/CuriousRacyGoblinSoonerLater-cXzjjop9oYbObjlJ",
        caption: "Latte and Lucky match! Pickle fights himself",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/CharmingGentleCattlePMSTwin-STDE0Nj27Mh8Z9kx",
        caption: "Lucky digs in snow",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/UninterestedBusyChinchillaBudBlast-kxsE0L5_BjNPucO4",
        caption: "Lucky cuddles!",
      },
      {
        url: "https://www.twitch.tv/piratesoftware/clip/RefinedPhilanthropicSardineWutFace-QL0BCW3prSpt8okk",
        caption: "Lucky on Thor Stream",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/FaintRealWolfYouDontSay-wSpfwmbZpXXgnf2A",
        caption: "Pickle and Lucky wrestling",
      },
    ],
    merch: null,
  },
  lulu: {
    name: "Lulu",
    wikipage: "Lulu",
    aliases: [],
    commands: ["lulu"],
    sex: "Female",
    birth: null,
    birthday: null,
    arrival: "2025-11-16",
    valhalla: null,
    playgroup: "solo",
    summary:
      "Lulu is a rescue ferret of Snail's House. Lulu joined the rescue with [[Noodle]].",
    lore: "Lulu came with [[Noodle]] from a loving home who could no longer take care of them.",
    clips: [],
    merch: null,
  },
  luna: {
    name: "Luna",
    wikipage: "Luna",
    aliases: [],
    commands: ["luna"],
    sex: "Female",
    birth: null,
    birthday: null,
    arrival: "2024-09-15",
    valhalla: "2025-10-17",
    playgroup: "valhalla",
    summary:
      "Luna was a rescue ferret of Snails House. She frequently enjoyed the rice box and was a total sweetheart who enjoyed snuggling with all the ferrets, even [[Henry]]. While she came in with her cagemate [[Odin]], she went on to reside with the oldies.",
    lore: "Luna arrived by a local surrender at 7 years old with fellow cagemate [[Odin]]. She sometimes liked to have sleepovers in the babies cage.",
    clips: [
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/YummyUgliestHedgehogJonCarnage-qFYL43qaO1CAQDxi",
        caption: "Bruce toobing with Luna",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/BenevolentColdbloodedSoybeanDerp-GI59Wuay4mFGA_n1",
        caption: "Cheese chilling, Luna tries to groom",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/SmokyTallChickenHeyGirl-OkJYFG44qJCqOTO9",
        caption: "Luna comes to snuggle Fig!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/AmericanAbrasiveSamosaRuleFive-nDCt4W45mded6C1N",
        caption: "Luna checking on Henry",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/ColdbloodedDirtyEelDendiFace-OorZ6bL1iIqZaBG2",
        caption: "Luna and Henry play chase",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/AgitatedAmorphousBaguetteDeIlluminati-i_CIL7OjUi3CdsYg",
        caption: "Luna requesting stikk from Maddie",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/AnimatedSpunkyCrowMikeHogu-CTpniatqntfkrc23",
        caption: "Luna taking the toob to bed in the toy bin",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/BlueOptimisticPigPunchTrees-VGQmC3CuuiQzHYC7",
        caption: "Luna toobing",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/DepressedFurrySquidTebowing-E7tSxgh99vHXUOFj",
        caption: "Luna loves stick",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/EasyThankfulPorpoiseCoolStoryBob-JxKxVC8diYe6O7Vz",
        caption: "Luna investigates Shark bed",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/ExcitedBenevolentPassionfruitOMGScoots-NeI6Fk-KNlbkZJNQ",
        caption: "Luna digs in the rice box",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/FragileSpeedyPeafowlDatBoi-F0e0GnP3ij7FwMeO",
        caption: "Luna snek attack",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/KitschyBelovedGorillaWOOP-bWYKoNKEuSvKQiow",
        caption: "Luna checking all pockets for stikk",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/LaconicCleanMangoRalpherZ-bJ5z_RB7xKU_fS0J",
        caption: "Luna requesting stikk from Thor",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/PlausibleIntelligentBasenjiHumbleLife-b9pzW-im2Fcs-TAW",
        caption: "Luna hopping into the mango",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/RefinedKindCheetahMoreCowbell-nz2VIzl3odcn1FFI",
        caption: "Luna gets stick from the Hairman",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/RepleteSullenSardineArgieB8-k7LC1ufvCkr2eusa",
        caption: "Shaye pretending to be sleepy Luna",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/TemperedSincereGorillaMingLee-zCaEfotdAVnqcGOp",
        caption: "Luna shroom flip",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/VibrantTastyPicklesPraiseIt-wVYNT94x1QETsDVe",
        caption: "Luna checking her blood sugar",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/PlumpSingleLorisPicoMause-xvNnIw58hHr7_30v",
        caption: "Luna toob chase with Odin",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/TenaciousVibrantAntelopeOMGScoots-eurmrPvs1t7GnSlL",
        caption: "Luna and Peanut 2 sharing a stick",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/PreciousBashfulAnteaterBleedPurple-PVFNRu_Z4joSSvEj",
        caption: "Luna and Pepper 2 toobing time",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/SuccessfulAmazonianSaladKappaClaus-HjUQkv1JfJXGJXfO",
        caption: "Luna and Teep crossfeeding time",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/WealthyGoodMeerkatResidentSleeper-BaYdeH91eODLxE9H",
        caption: "Luna and Teep stretchy time",
      },
    ],
    merch: null,
  },
  maitai: {
    name: "Mai Tai",
    wikipage: "Mai_Tai",
    aliases: [],
    commands: ["maitai"],
    sex: "Female",
    birth: null,
    birthday: null,
    arrival: "2024-02-23",
    valhalla: null,
    playgroup: "genpop",
    summary:
      "Mai Tai is a rescue ferret of Snails House. She is very playful with her fellow friends. She loves snuggling and playing with her human caretakers. She is a champagne-colored ferret with red eyes.",
    lore: "Mai Tai came to the rescue together with [[Kahlua]], [[Mimosa]], [[Scotch]] and [[Whiskey]]. Due to their names, they are also known as the alcohol crew.",
    clips: [
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/AntediluvianTsundereShallotNerfRedBlaster-CTBAt_SVlyoUxZuc",
        caption: "Nibbling Shaye",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/BrainyVastHerringVoteYea-dnYknSxxf7cYYH0L",
        caption: "Mai Tai takes a dip in the ball pit!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/ExpensiveTrappedWombatFeelsBadMan-KgP03MwYoVvyrB4C",
        caption: "Mai Tai gets shaye cuddles",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/ObliqueSourMooseSwiftRage-l5iM317IyKVMkAK7",
        caption: "Mai Tai Introduction",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/PeacefulHilariousMonkeyPogChamp-AtN9wwGnl1o2BM1y",
        caption: "Mai Tai shows us her moves",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/SmallLivelyConsoleTheRinger-4BcU01_u2NHVwo1p",
        caption: "Mai Tai conquers mt. Shaye",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/TawdryKindMoonArsonNoSexy-mzZXhK9lHH4jbT_n",
        caption: "Nova presents: Mai Tai!",
      },
    ],
    merch: null,
  },
  maisy: {
    name: "Maisy",
    wikipage: "Maisy",
    aliases: ["Business Lady, Serial Stasher"],
    commands: ["maisy"],
    sex: "Female",
    birth: null,
    birthday: null,
    arrival: "2025-03-04",
    valhalla: null,
    playgroup: "m",
    summary:
      "Maisy is a rescue ferret of Snails House. She loves to stash all the toys! She came to the rescue with behavioral issues.",
    lore: `Maisy was surrendered by a pet store because she was biting the attendants. After about two months of training, she is now a nice little lady.

When she was first introduced to the business, she did not mesh well with a few of the youngest ferrets and lived alone for a bit. After [[Big Mike]] cleared quarantine, the two of them became the best of buddies. After a while, [[Milo]] was then added to their playgroup, transforming M&M to M3.

Maisy is a HUGE serial stasher of toys, and loves to chase her friends through the tubes.`,
    clips: [
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/YawningWonderfulDeerBCouch-JQre3JG_zj6SbpBL",
        caption: "Big Mike toobing with Maisy",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/CleanFancyShrimpYouWHY--VrvV5SevQqiiT74",
        caption: "Maisy gets double toob'd",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/EsteemedAgitatedBobaBudBlast-zhMMXmviDfnM_Q_Z",
        caption: "Chili and Maisy bouncy time",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/SparklingBlueAmazonFrankerZ-HikFnlg_WMcwyaN_",
        caption: "Maisy and Milo want to stash the worm",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/GloriousRoundPotatoSmoocherZ-7LDkQUiHz4fiV8aK",
        caption: "Milo playing with Mike and Maisy",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/HorribleSincereFiddleheadsBrainSlug-UXb-9JR_XJ4hTwpj",
        caption: "Milo circling with Mike and Maisy",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/KitschyInspiringJayPeteZaroll-mmm-4YvXT6_--F2E",
        caption: "Milo meeting Mike and Maisy",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/BitterCautiousTapirPermaSmug-vkLIkSSV1si9BrRJ",
        caption: "Milo tobing with Maisy",
      },
    ],
    merch: null,
  },
  max: {
    name: "Max",
    wikipage: "Max",
    aliases: ["Punk Rocker"],
    commands: ["max"],
    sex: "Male",
    birth: null,
    birthday: null,
    arrival: "2023-09-12",
    valhalla: "2023-12-26",
    playgroup: "valhalla",
    summary: "Category:Ferrets lacking intro",
    lore: `Max was surrendered to Shaye through their work clinic. His owner couldn't manage medication around their schooling schedule, so the rescue took him in, giving him an extra 5-6 months of life. * Max is a great example of surrendering a pet for the pet's best interest.
Even at an older age, he loved playing with the other ferrets
At about the age of 10, his body started to fail him, so he had to be let go.`,
    clips: [
      {
        url: "https://www.twitch.tv/piratesoftware/clip/FairComfortableChickpeaSoBayed-pV92kmeiiPJ4rnBn",
        caption: "Scrungly old man",
      },
      {
        url: "https://www.twitch.tv/piratesoftware/clip/TenaciousDullHorseradishAMPEnergy-wp5I0EvNhwcJo2W2",
        caption: "Max on Thor stream",
      },
    ],
    merch: null,
  },
  milo: {
    name: "Milo",
    wikipage: "Milo",
    aliases: ["Miloš"],
    commands: ["milo"],
    sex: "Male",
    birth: null,
    birthday: null,
    arrival: "2025-06-04",
    valhalla: null,
    playgroup: "m",
    summary:
      "Milo is a rescue ferret of Snails House. He came to the rescue due to serious behavioral issues. After months of rehabilitation, he loves bouncing around the playroom with his buddies.",
    lore: "Milo was originally surrendered from a pet store due to behavioral issues. Shaye spent lots of time rehabilitating these issues so that he can have a good life with the rest of the rescue and workers.",
    clips: [
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/BlueHungryMeatloafGOWSkull-gV43d0yac8cOj47q",
        caption: "Milo leap on Big Mike",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/FrozenPreciousPeanutTheTarFu-FwsgIXfcTAKDm4SM",
        caption: "Big Mike and Milo being menaces",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/SparklingBlueAmazonFrankerZ-HikFnlg_WMcwyaN_",
        caption: "Maisy and Milo want to stash the worm",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/KitschyFairWheelBrokeBack-gEF0X7Fs9TsRLfgR",
        caption: "Milo wants to stash the pizza",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/SpoopyVivaciousAyeayeMrDestructoid-FKTk5KxzZhwCizvW",
        caption: "Playing with toy",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/GloriousRoundPotatoSmoocherZ-7LDkQUiHz4fiV8aK",
        caption: "Milo playing with Mike and Maisy",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/HorribleSincereFiddleheadsBrainSlug-UXb-9JR_XJ4hTwpj",
        caption: "Milo circling with Mike and Maisy",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/KitschyInspiringJayPeteZaroll-mmm-4YvXT6_--F2E",
        caption: "Milo meeting Mike and Maisy",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/BitterCautiousTapirPermaSmug-vkLIkSSV1si9BrRJ",
        caption: "Milo tobing with Maisy",
      },
    ],
    merch: null,
  },
  mimosa: {
    name: "Mimosa",
    wikipage: "Mimosa",
    aliases: ["Mimi"],
    commands: ["mimosa"],
    sex: "Female",
    birth: null,
    birthday: null,
    arrival: "2024-02-23",
    valhalla: null,
    playgroup: "genpop",
    summary:
      "Mimosa is a rescue ferret of Snails House. She is super playful with the other ferrets and enjoys noseballing the circular ball toy. She is classified as a champagne-colored ferret.",
    lore: "Mimosa came to the rescue together with [[Kahlua]], [[Mai Tai]], [[Scotch]] and [[Whiskey]]. Due to their names, they are also known as the alcohol crew.",
    clips: [
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/BigSpinelessPelicanFUNgineer-UvcJ7jiWLnFGYRWJ",
        caption: "Mimi getting cuddles",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/DullSavageKiwiJebaited-FG5kuzfwjh_RSD2f",
        caption: "Mimosa noseballs circle toy ball",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/HardZealousCodBrainSlug--TKt_n7XBlsZkaX4",
        caption: "Falls over for pictures",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/UnsightlyEnjoyableWhaleOptimizePrime-Fn8iZ7V-3B0CBGtQ",
        caption: "Pretending to be scarf",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/VainElatedAsteriskTheRinger-egRxT1k6PfUAFvvt",
        caption: "Introduction",
      },
    ],
    merch: null,
  },
  mishka: {
    name: "Mishka",
    wikipage: "Mishka",
    aliases: ["Toy hoarder"],
    commands: ["mishka"],
    sex: "Female",
    birth: null,
    birthday: null,
    arrival: "2024-04-28",
    valhalla: "2025-09-14",
    playgroup: "valhalla",
    summary:
      "Mishka was a rescue ferret of Snails House. She was super energetic and loved to play with other ferrets. She also really enjoyed stashing toys.",
    lore: "Mishka was surrendered by a loving family at about 2 years old. She was spunky, liked to bite, and had a big personality.",
    clips: [
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/ChillyOddChimpanzeeDendiFace-XXjhTQo9YS039HAr",
        caption: "Stashing the big toy!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/InventiveTolerantClipsdadThunBeast-XfT6bJSyFVO6gGt5",
        caption: "Destroying the castle",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/LachrymoseGleamingSharkBuddhaBar-bF0bO1StPWJksE5E",
        caption: "Attempting to stash shaye in toob",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/SleepyToughApeTriHard-20lDh5GjImQJHg8v",
        caption: "Nibbling a toe",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/SpineyViscousRedpandaDatSheffy-53g4UJBGfyYQrx5w",
        caption: "Toy hoarding",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/TriangularMushyHumanSoBayed-ITDR_qYW0yGq6cfv",
        caption: "Shaye and Mishka dance",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/BenevolentBeautifulDeerKevinTurtle-bsqcq0tJJBpwjBjL",
        caption: "Mishka chilling on the couch with Mocha",
      },
    ],
    merch: null,
  },
  mistoffelees: {
    name: "Mistoffelees",
    wikipage: "Mistoffelees",
    aliases: ["Misto, Destroyer of food bowls, Enjoyer of floor kibble"],
    commands: ["mistoffelees", "mistoffelee"],
    sex: "Male",
    birth: null,
    birthday: null,
    arrival: "2024-06-16",
    valhalla: null,
    playgroup: "genpop",
    summary:
      "Mistoffelees is a rescue ferret of Snails House. He came here with his roommate, [[Demeter]]. He enjoys making floor kibble by unscrewing the food dish. He has a unique face mask and four white paws.",
    lore: "Mistoffelees joined the rescue together with [[Demeter]]. They were surrendered because the owners felt they could no longer provide adequate care.",
    clips: [
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/JoyousHilariousMosquito4Head-kvvtvcU8McYCUF4t",
        caption: "Demeter and Mistoff spot a hidden ferret",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/AgileHumbleIguanaPeoplesChamp-ZNre612GOcLWX0mm",
        caption: "Misto Blesses Chat",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/AverageRelatedPassionfruitDerp-MhfT62CWaJmiBNFr",
        caption: "Misto Swims in the Cloud Bed",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/BoringWimpyPuddingDoggo-bTiruJyqDqTjJ1LD",
        caption: "Mistoff toy marathon",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/CulturedOnerousBatteryFreakinStinkin-S1bKw53unWKmCZxX",
        caption: "Mistoff used as dumbell",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/FuriousFurryClipsmomTF2John-fDbX3vOHYj5VuA04",
        caption: "Misto War Dances at Shaye",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/GrotesquePrettiestSnailLitty-MpClj4pWy1NfJTwT",
        caption: "Misto Food Bowl Swimming",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/JazzyExuberantYakKappaPride-cfHfMyM5XR5W9e2Z",
        caption: "Mistoff gets belly rubs",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/RelievedTangentialPheasantArsonNoSexy-3t6sQO1TntIgW9Wk",
        caption: "Mistoff taking a bath in the water bowl",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/StormySmokySlothKippa-UQJeABCch0WHtjXl",
        caption: "Mistoff must have bottom snacks!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/WiseRelentlessScallionFrankerZ-OyjfrNI1sjKWS5V9",
        caption: "Thor blesses Shaye with a Misto",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/ObeseSilkyAirGuitarBleedPurple-L52Xc7deN3Lo7C6n",
        caption: "Misto checking in on Henry",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/GenerousFrigidDragonfruitThisIsSparta-gps7iDtdGn01gFfv",
        caption: "Mouse: Misto are you done?",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/BloodyBlindingTireTheRinger-1LH-J9nCPLGgqyft",
        caption: "Vinny and Mistoff playing",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/SmokySecretiveIcecreamKappaPride-l3pLQmt_R4UfNvdh",
        caption: "Peanut vs. Mistoff. Peanut takes the high ground",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/TrappedSmellyEagleTwitchRaid-mh-J6zSeAK6je42m",
        caption: "Peanut and Mistoff in the ricepit",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/ClumsySlickKoalaAMPTropPunch-VWhe5UxkU-e5VhSn",
        caption: "Scotch and Mistoff in a scuffle",
      },
    ],
    merch: null,
  },
  mocha: {
    name: "Mocha",
    wikipage: "Mocha",
    aliases: [
      "Michael",
      "Mochael",
      "Ninja, Stealthmaster, Chonkzilla, Fluffiest of them all, Lt Dan",
    ],
    commands: ["mocha"],
    sex: "Male",
    birth: "2022-12-25",
    birthday: "12-25",
    arrival: "2023-11-03",
    valhalla: null,
    playgroup: "genpop",
    summary:
      "Mocha is a rescue ferret of Snails House. He's one of the business's most flexible and chill ferrets because he can be out with the oldies and the rambunctious babies. His stealth skills have far surpassed everyone in the rescue.",
    lore: `Mocha is currently one of the largest ferrets at Snails House 

While Mocha primarily bunks with genpop, he will visit his oldie friends from time to time for a sleepover due to his calm personality. He primarily sleeps with genpop, acting as a pillow for the cuddle puddles that form. During playtimes, Mocha frequently sleeps in various parts of the room. However, he tends to be active and play with the younger ferret groups when they're out at the same time. One of his frequent playtime tactics is to crawl into a tube and stop in the middle or the ends of it, then attempt to defend the path and block other ferrets from getting in.  Chat in the stream and discord have taken to calling this tunnel jousting or tunnel wars.

Mocha recently won a photo ferret calendar contest. He featured as the cover photo to of the r/ferrets, (found on Discord and reddit), 4th Edition Calendar. The proceeds of this calendar reportedly went to a ferret shelter in need. Love to all ferrets.`,
    clips: [
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/DignifiedCulturedPhoneBigBrother-w55-MScAZNBbF7wa",
        caption: "Banana and Mocha being cute",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/LaconicFaintWallet4Head-Zv7YOHYvUeNVAWzi",
        caption: "Cowboy grooming Mocha",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/CautiousPlacidHerringBleedPurple-1n5-IWS6zz2lNyE5",
        caption: "Felix following Mocha's example. First food, then hide!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/SpoopyPlumpArugulaDAESuppy-hzrnucCfDDZ9_aa9",
        caption: "Felix sniffah Mocha",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/HungrySpikyBaconVoteNay-MYcC7OVzGK59pptF",
        caption: "Fig grooming Mocha, Henry is chilling",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/AuspiciousBlazingCrabDerp-xmDzMHcDFfHIOOzq",
        caption: "Mocha and Latte eating soop",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/BenevolentBeautifulDeerKevinTurtle-bsqcq0tJJBpwjBjL",
        caption: "Mishka chilling on the couch with Mocha",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/AltruisticAnimatedShallotDeIlluminati-oVBNd8UZOR1TwVz9",
        caption: "Mocha's new trick: leap",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/ArborealAgreeableCrabOMGScoots--iOBPTVjiXOP3_OY",
        caption: "Volcano Mocha eruption",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/AssiduousBrightOrcaCclamChamp-8hreqfetV64hn_bj",
        caption: "Mocha attempting to climb",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/CleverCallousGoblinGivePLZ-urAzuhICnhEjgtH_",
        caption: "Mocha the carnival ride",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/ComfortableExpensiveNightingaleFloof-Q_fWlcADyau-__RE",
        caption: "Mocha: To know food is to become food",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/CoyManlyWasabiDatBoi-hSpp3jYCvOMRCd6B",
        caption: "Mocha splat",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/DifferentFilthyGrasshopperSwiftRage-K7Q39HQ8TQR9MXNm",
        caption: "Mocha refuses to wake up",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/DistinctBashfulStaplePraiseIt-a_X8E8uPU50qb_RO",
        caption: "Mocha getting snuggles",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/DoubtfulRefinedSharkBudBlast-FgW-neWW3bhw5Cv7",
        caption: "Mocha saves Snek from Pizza Toob!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/EnthusiasticVibrantReubenChefFrank-1lSBzjnp_XBIFHTQ",
        caption: "Sneak attack!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/GlutenFreeBusySpaghettiAMPTropPunch-O0CDNLn2hpGlz-_Q",
        caption: "Offering to the chat! Mochzilla",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/HandsomeBloodyShallotPanicVis-7ROwiZp7e81Gsld_",
        caption: "Mocha showing his inner cat",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/HardAuspiciousNarwhalDoggo-Z7k5DQrdJi6iNZ4w",
        caption: "Mocha ATTACKS !!!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/InnocentAltruisticFriesDxCat-0KSbRoJu83hEe_p9",
        caption: "Mocha and crimebastard checking out chat!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/InterestingVainOwlKeepo-D7HSxxWbL26CsfHl",
        caption: "Mocha is stealthy even though he's chonky",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/LittleObeseMartenDxAbomb-nbqB06K5uEUu9QOV",
        caption: "Mocha toob in, toob out",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/MoralPlacidArtichokeMcaT-B12gGHKYSgFKTW2f",
        caption: "Mocha hiding under the snow under blanky",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/NaiveFurtiveCobblerGrammarKing-cwb5aaCDK-TtWDFV",
        caption: "Mocha hiding under the pizza tunnel",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/NiceRefinedCodVoteNay-WuLM8irRieBCS_t_",
        caption: "Mocha decided to climb in genpop",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/PleasantPleasantThymeSeemsGood-QLNhXtE82qUZUgT6",
        caption: "Mocha reboot in progress",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/RockyDeterminedBobaTooSpicy-N_IqWKy2cD2O_V-U",
        caption: "Mocha: Guardian of the Toob",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/SavoryPlausibleShrewPJSugar-j4VlpGAtKMzXY1ak",
        caption: "Mocha: Just lemme sleep!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/SmoggyChillyElephantBCouch-1z4PGbCojRHUdmkI",
        caption: "Today Mocha chose violence!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/SneakySuaveJayMau5-kiczR-221hZLjYqW",
        caption: "Mocha: This is my life now #mood",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/SourEphemeralGoatNomNom-fU6RxF4XL7mc-kfT",
        caption: "Mocha simba moment",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/SparklySilkyWrenHeyGirl-hxdnCfTRUURM_Kme",
        caption: "Mocha belly dances for chat",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/StormyWanderingWheelKeyboardCat-zQa2T2RvEdIUUCHR",
        caption: "Mocha Blocking the Tube",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/SullenEnjoyableChickenBleedPurple-60MV57fYU9nblr2D",
        caption: "Mochaboo",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/SuperCreativeZucchiniStinkyCheese-S3hvzSGwys-saSmZ",
        caption: "Mocha refuses to get evicted from toob",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/WiseIncredulousWitchThunBeast-cthv0qQahdpN49yn",
        caption: "Soop summons Mocha",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/WrongUglyPancakeMoreCowbell-X2Ova3Jl9kavoL4v",
        caption: "Mocha tries and succeeds at getting out of the rice bin",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/FitDoubtfulBottleCeilingCat-QDaZbLekqq7VwM2e",
        caption: "Mocha Banana Car",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/CorrectBlindingKiwiDoritosChip-M8zlFLCsGKNK8s7f",
        caption: "Mocha: Battle of the titans (with Chili)",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/SpoopySplendidWeaselBlargNaut-veLrZT1gxhVHMXDS",
        caption: "Henry checking on Mocha",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/TacitSparklyWebOMGScoots-2q6Z2H04cZaKTgCG",
        caption: "Mocha, Mouse and the Mango",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/SpunkyDeafLeopardLitty-k-QPAJaZcVNaVTnZ",
        caption: "Mocha, the reverse Onion",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/AffluentConsiderateBaguetteNinjaGrumpy-fH7qnxUC2el06LDz",
        caption: "Pickle and Mocha battle in the mango",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/ClearFlaccidGuanacoOSsloth-QMGQJYlNkARldIkN",
        caption: "Pickle and his mighty steed... Mocha!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/FunnySilkyTeaHumbleLife-6HLigtv1h08WuwX3",
        caption: "Tiny Peepo, chonky Mocha",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/AdventurousInexpensiveAsteriskMau5-s0en0kqlUPGZjnax",
        caption: "Thelma playing with Mocha",
      },
    ],
    merch: null,
  },
  moose: {
    name: "Moose",
    wikipage: "Moose",
    aliases: [],
    commands: ["moose"],
    sex: "Male",
    birth: null,
    birthday: null,
    arrival: "2024-02-26",
    valhalla: null,
    playgroup: "pms",
    summary:
      "Moose is a rescue ferret of Snails House. He enjoys the ball pit and loves to playfight with his friends, [[Salt]] and [[Pepper]].",
    lore: "Moose is a part of the 5 ferrets who were found abandoned in an unlocked shed by the Humane Society. They then reached out to the rescue for assistance. Moose came to the rescue with [[Badger]], [[Peepo]], [[Pepper]], and [[Salt]]",
    clips: [
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/AdorableFriendlyFlyWOOP-mQhUJd10rA3ErhrJ",
        caption: "Moose, Peekaboo!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/BadTameAnacondaWoofer-8Who9BjDMaORi1Tu",
        caption: "Moose wiggly wardance",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/RichCheerfulLobsterPJSugar-qgFpIsehVv3WOhJv",
        caption: "Moose rice dancing",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/SparklingWildMochaPhilosoraptor-VT_b7SL746b1974a",
        caption: "Moose playing with the pizza",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/FurryPlausiblePterodactylDancingBanana-I7U1-lXiiFcWkEHc",
        caption: "Moose wildin' and Pepper nail clippies",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/ExpensiveHonorableHarePRChase-O-T4mWIh8RKfSlTH",
        caption: "Moose pit fight with Salt",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/RenownedSmoothPassionfruitBudStar-YTdvB13SZahVTxjb",
        caption: "Moose pit battle with Salt",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/MiniatureHomelyToothCorgiDerp-Pe1kZGGbKIfRhakf",
        caption: "Pepper, Moose and Salt nomming soop",
      },
    ],
    merch: null,
  },
  mouse: {
    name: "Mouse",
    wikipage: "Mouse",
    aliases: ["Banshee Queen Mouse - Enjoyer of uppies, Loves to fly"],
    commands: ["mouse"],
    sex: "Female",
    birth: null,
    birthday: "04-01",
    arrival: "2023-04-28",
    valhalla: null,
    playgroup: "genpop",
    summary:
      "Mouse is a rescue ferret of Snails House. She has a rarer all-white coat pattern. Her favorite thing is uppies from the human caretakers, and she is the acting Queen of the business.",
    lore: `Mouse was surrendered to the rescue by her previous owner because of "behavioral issues". She is, as we call it, a "Waardy", (further explained below). She is, as the original ferretposting post said, "Deaf as a doornail". 

Thor is Mouse's favorite, and Thor has admitted that Mouse is his favorite.   

For fun, Shaye allows the ferrets to impart wisdom upon the community. Mouse typed "MLG" and "Phr60 CD or was rt t gn bkir".`,
    clips: [
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/TubularFunZucchiniVoteNay-yKO9WEtKZ_UkK0oE",
        caption: "Mouse and Hazel playing with purple ball",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/ThoughtfulJoyousBaboonPJSugar-AXekr4jrVGe5gLKG",
        caption: "Henry investigating Mouse",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/GenerousFrigidDragonfruitThisIsSparta-gps7iDtdGn01gFfv",
        caption: "Mouse: Misto are you done?",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/TacitSparklyWebOMGScoots-2q6Z2H04cZaKTgCG",
        caption: "Mocha, Mouse and the Mango",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/AmazonianSpicyRadicchioOSkomodo-jBJMC1hGY6zDuL4m",
        caption: "Mouse angy wardancing",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/AntsyHilariousRatDuDudu-RwLpKP7nwZbhcgrO",
        caption: "Mouse becoming folded laundry",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/BombasticCallousTurnipKappaRoss-CImpC2lfHV41hulw",
        caption: "Mouse: Shaye I need sleeps!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/ClumsyBusyPanPeoplesChamp-u8urJDVBKPgkGPA_",
        caption: "Air Mouse taking flight",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/CrackyPunchyOstrichOSkomodo-8ziDFZ987iUeoeRW",
        caption: "peace and love on mouse earth",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/DignifiedFineAlfalfaTooSpicy-w0i_NR7BgZDnvt8t",
        caption: "Mouse being fed to spooder",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/ElegantGorgeousSquidCurseLit-3mzJd-UOPRBOJY8w",
        caption: "Mouse neckwarmer",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/FastAltruisticKoalaMau5-kPR0EhjzaE2DHfO3",
        caption: "Mouse: Don't leave father!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/KathishSpoopyFloofWow-95xBI4fDAt7gDaFB",
        caption: "Mouse hiding ball",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/ModernImpartialKuduTwitchRaid-A5cCSdSNsEGbC5Il",
        caption: "Mouse playing noseball",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/MoistBoringButterflyNotATK-zTojovDz3hf-VgHm",
        caption: "Mouse dancing with Shaye",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/NastySillyHarePMSTwin-8Vzl4gAltGxqo5Zn",
        caption: "Mouse flying from Thor to Shaye",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/OutstandingAliveKaleCharlieBitMe-o0OEiRjNr861c1Es",
        caption: "Mouse flown around her kingdom",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/PreciousTacitPrariedogCharlietheUnicorn-Jtuc5DLm7dD6q85D",
        caption: "Shaye gives Mouse uppies",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/ResilientStylishDadTriHard-xBz9hwjHbfA5f5Ed",
        caption: "Mouse gets Thor uppies before stream",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/RoundWonderfulMangoShazBotstix-cWrMenNQoZIssqka",
        caption: "Mouse getting uppies from Maddie",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/SavageTemperedPigItsBoshyTime-UKf9ESUVgMXEEX1E",
        caption: "Suddenly Mouse",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/ShakingSneakyClipzRickroll-zxQ__SPZjAuq6jDT",
        caption: "Mouse grooms Thor and climbs into his pants",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/SpoopyCooperativePotDatSheffy-oNnLkYKUeQ5izz0e",
        caption: "Mouse getting flying lessons",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/SpotlessApatheticHerdFloof-xYQ74sLoTyqaPEIU",
        caption: "Mouse wildin in the cage",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/TalentedHedonisticPoxMrDestructoid-rnkiUqyTtKuhD2ZS",
        caption: "Mouse, queen of the tower",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/ThoughtfulGrossTurnipKappaWealth-_SuldAkmZeRi8j8q",
        caption: "Mouse ball and flop!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/TrappedDarlingWaterBrainSlug-aTqMDiaXe8da7vjU",
        caption: "Mouse demanding access to father",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/TubularAmazonianDunlinRitzMitz-xgbr0pZu3CI5wJ21",
        caption: "Its the circle of Mouse",
      },
      {
        url: "https://www.youtube.com/watch?v=PTS33--ai6M",
        caption: "Mouse and her rocket",
      },
      {
        url: "Mouse_cuddles.mp4",
        caption: "Mouse need cuddles by Thor",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/EasyPreciousArugulaKAPOW-NBQWiEaW1u12CYCN",
        caption: "Mouse and Pickle kissies",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/GeniusDrabToothOSfrog-CTCt1igvEzWZo50w",
        caption: "Pickle yeets Mouse off of the box",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/PunchyAnnoyingClipsmomYouWHY-sfuTNCLSzYCH84h-",
        caption: "Whiskey and Mouse playing with the sock!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/TacitSeductiveMinkPJSalt-jmpPU4MwohBsAE4X",
        caption: "Whiskey and Mouse battle!",
      },
    ],
    merch: null,
  },
  moxie: {
    name: "Moxie",
    wikipage: "Moxie",
    aliases: ["Cuddle bug"],
    commands: ["moxie"],
    sex: "Female",
    birth: null,
    birthday: null,
    arrival: "2024-01-05",
    valhalla: "2025-10-08",
    playgroup: "valhalla",
    summary:
      "Moxie was a rescue ferret of Snails House. She was a low key and chill oldie. She had a bottle brush tail.",
    lore: `After the passing of her crewmate, [[Bandit]], she was frequently seen with [[Eddie]]. (Per Shaye during playtime).
She had also taken a liking to [[Henry]] and loved being his cuddle buddy.

Moxie had a blood sugar crash and the community watching the stream helped her by alerting the caretakers.`,
    clips: [
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/HandsomeObeseDadBlargNaut-LWSiqPVzTsIlWdB_",
        caption: "Group sooping with Cowboy, Moxie and Henry",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/EntertainingArbitraryLouseBIRB-GY9W7WxkzRMuBk6R",
        caption: "Moxie sliding into the blanket",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/FastBitterLampHumbleLife-wUHmL6evqNFCasAz",
        caption: "Moxie doing an inspection round",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/HardBrightSquirrelTheTarFu-xtB_MB9Y1Q-0dbOv",
        caption: "Moxie emerging from the sufferfish",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/InquisitivePowerfulChimpanzeeBIRB-A9EtkqLJR_rNNzvi",
        caption: "Hiding on the frog pillow",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/OpenCarelessDragonfruitPeteZaroll-EbW8sqTww_NIWIIa",
        caption: "Moxie doing some toobing",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/OpenGoldenSquidKlappa-lE8dAF74iEdYPItf",
        caption: "Moxie doing some chill toobing",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/RepleteHonorableRavenFloof-sxyiY8R4tjynwpFL",
        caption: "Moxie nomming soop",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/SmoggyIronicCheddarKlappa-6CsIyzE5CMP6jpup",
        caption: "Being a cutey",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/TallDeadDelicataPeoplesChamp-nnQvzqIywlYgZG44",
        caption: "Toobing",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/VainFantasticPizzaPicoMause-vR_iqOOKNNjKxB-o",
        caption: "Pumpkin consumes Moxie, trying to help Fig",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/CaringPrettyWallabyPeanutButterJellyTime-vMFbr7Z-lmlwg5lM",
        caption: "Moxie snoozing buddy with Henry",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/FurryFurrySowWutFace-9r91GH4agB6cqZbb",
        caption: "Moxie doing a check on Henry",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/LongRelatedIguanaHeyGuys-CrBku4iqdabxQyCd",
        caption: "Moxie grooming Henry",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/ResilientBlindingGnatFailFish-B1ZNPb9HyZMbGMTb",
        caption: "Moxie sooping with Henry",
      },
    ],
    merch: null,
  },
  nacho: {
    name: "Nacho",
    wikipage: "Nacho",
    aliases: [],
    commands: ["nacho"],
    sex: "Male",
    birth: null,
    birthday: null,
    arrival: "2023-04-17",
    valhalla: null,
    playgroup: "vons",
    summary:
      "Nacho is a rescue ferret of Snails House. He came to the rescue with his sister [[Salsa]] and enjoys playing with his friends [[Vincent]] and [[Onion]].",
    lore: "Nacho came to the rescue with his sister [[Salsa]]. They were surrendered by their owners to the rescue.",
    clips: [
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/ColdPhilanthropicRuffPogChamp-TlalwYyvDyZ_fNWj",
        caption: "Nacho bouncing during playtime!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/FlirtyTastyRamenHotPokket-94VQ5vXAeurzNRrv",
        caption: "Nacho wants Shaye attention",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/FrozenSpicyBunnyStrawBeary-OuOF2BQl5sXkYIft",
        caption: "Nacho turtle soup",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/SarcasticCheerfulHumanYouDontSay-tuwSFvjPIFG4Jbcl",
        caption: "Nacho Big Attack at Maddie!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/PluckyWonderfulTriangleSuperVinlin-mdaw8N_2YkDzTb_4",
        caption: "Beans and Nacho fighting for chair supremacy",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/SuspiciousTriangularNigiriWOOP-N5OZtFHsFBKxrRNs",
        caption: "Vinny and Nacho play in the rice bin",
      },
    ],
    merch: null,
  },
  nameko: {
    name: "Nameko",
    wikipage: "Nameko",
    aliases: ["Koko"],
    commands: ["nameko"],
    sex: "Female",
    birth: null,
    birthday: null,
    arrival: "2025-10-25",
    valhalla: null,
    playgroup: "k",
    summary:
      "Nameko is a ferret of Snails House. She joined together with [[Enoki]].",
    lore: 'Nameko is a very chatty lady and dooks quite a lot. Being very curious, she likes to climb and explore everywhere she can. Nameko and Enoki\'s names were inspired by mushrooms.  Commonly and lovingly referred to by chat as "Boots with the Fur" because upon entry, she is bare except for her feet, neck, and head.',
    clips: [
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/AnnoyingToughFoxBrainSlug-U0agCZml-X7wxSC7",
        caption: "Enoki and Nameko debut",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/RefinedFilthyLorisYouDontSay-QnQiUS67SXF9DJ41",
        caption: "Enoki and Nameko playing in the water",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/UgliestLitigiousCatTwitchRPG-XTq7sqTx8d1-Xjg9",
        caption: "Enoki and Nameko playing in the toy basket",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/BraveLittleJayDatBoi-SfCI8ao56HDqBfk_",
        caption: "Nameko plays with the ball!",
      },
      {
        url: "Nameko_dooking.mp4",
        caption: "Nameko Dooking",
      },
      {
        url: "Nameko_tube_dooking.mp4",
        caption: "Nameko amplified Dooking",
      },
    ],
    merch: null,
  },
  nemo: {
    name: "Nemo",
    wikipage: "Nemo",
    aliases: [],
    commands: ["nemo"],
    sex: "Male",
    birth: "2025-08-30",
    birthday: "08-30",
    arrival: "2025-11-29",
    valhalla: null,
    playgroup: "solo",
    summary:
      "Nemo is a rescue ferret of Snail's House. He is a spunky, fast, rambunctious little guy who loves playtime. He came to the rescue as a medical surrender.",
    lore: `Nemo came to Snails House at 2 months old after being found at a pet store with an injury. With the support and resources of the rescue, Nemo was able to receive life saving treatment, ultimately resulting in amputation.

Now a three legged ferret, he isn't letting his missing limb slow him down. He's a wild and rambunctious baby who loves playtime, especially adventuring through tubes, and rough-and-tumble sessions with pals like [[Pickle]] and [[Snowberry]]. His bold energy and fearless spirit already makes him a beloved member of the rescue.`,
    clips: [
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/SincereMoldyPelicanEleGiggle-4OdgVS90V5CSjiVo",
        caption: "Nemo's very first tube!!",
      },
    ],
    merch: null,
  },
  noodle: {
    name: "Noodle",
    wikipage: "Noodle",
    aliases: [],
    commands: ["noodle"],
    sex: "Female",
    birth: null,
    birthday: null,
    arrival: "2025-11-16",
    valhalla: null,
    playgroup: "solo",
    summary:
      "Noodle is a rescue ferret of Snail's House. Noodle joined the rescue with [[Lulu]].",
    lore: "Noodle came with [[Lulu]] from a loving home who could no longer take care of them.",
    clips: [],
    merch: null,
  },
  odin: {
    name: "Odin",
    wikipage: "Odin",
    aliases: ["Odie"],
    commands: ["odin"],
    sex: "Male",
    birth: null,
    birthday: null,
    arrival: "2024-09-15",
    valhalla: null,
    playgroup: "oldies",
    summary:
      "Odin is a rescue ferret of Snails House. He is a grumpy old guy who enjoys the quiet side of life during playtime. He came to the rescue with his cagemate [[Luna]].",
    lore: "Odin arrived as a local surrender at 7 years old with fellow cagemate [[Luna]].",
    clips: [
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/PlumpSingleLorisPicoMause-xvNnIw58hHr7_30v",
        caption: "Luna toob chase with Odin",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/CalmScrumptiousBadgerHeyGirl-KN66KdVGAMFTaJnU",
        caption: "Odin and the toy pit",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/CourteousClumsyFlyTBCheesePull-dpe5K6NRPrNhtRpx",
        caption: "Odin sweetening the hunny pot!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/ElatedFamousCoyoteSquadGoals-Z1xHLxO3vFwJc3Es",
        caption: "Odin taking a stroll through the tube",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/FlaccidKnottyCocoaBlargNaut-drzARLyfQizQogpv",
        caption: "Odin buldozering through the toys",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/InnocentKnottyLatteHoneyBadger-IFZM7WRnPUL0yHSe",
        caption: "Odin playing carpet shark",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/SuperAntediluvianChinchillaLeeroyJenkins-Q67omA-2uVbeaGqH",
        caption: "Odin checking out security measures",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/UgliestFitBoarGrammarKing-LClYWzzbTTnjqilG",
        caption: "Odin: Inspection time!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/OddHeadstrongSkunkPicoMause-gv6_5754dXViUnQq",
        caption: "Odin and Fig checking on Henry",
      },
    ],
    merch: null,
  },
  onion: {
    name: "Onion",
    wikipage: "Onion",
    aliases: ["Escape artist"],
    commands: ["onion"],
    sex: "Female",
    birth: null,
    birthday: null,
    arrival: "2022-11-02",
    valhalla: null,
    playgroup: "vons",
    summary:
      "Onion is a ferret of Snails House. Onion was found on a rural road near where Thor and Shaye live by their neighbors. Their neighbors contacted them, and she has been safe in Snails House ever since.",
    lore: `She is best known for her escape attempts. She often tests the gates and boundaries, and often, she finds ways over them.  talking about Onions escape attempts.]]
Onion is known for her high intelligence, she has managed to escape from the enclosed area on many occasions. Onion will not be contained! Even as a young ferret, she managed to escape her actual cage/enclosure through slats under the bottom pan.

When Onion first came to the rescue, she was obsessed and imprinted on [[Beans]]. This eventually changed due to Beans' ear crimes, and now she has playtime with [[Vincent|Vinny]], [[Nacho]], and [[Salsa]].`,
    clips: [
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/SpunkyDeafLeopardLitty-k-QPAJaZcVNaVTnZ",
        caption: "Mocha, the reverse Onion",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/AthleticArborealMuleVoteYea-yljaXZIV_TtgO2PT",
        caption: "Meerkat Onion",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/BeautifulArborealHamsterPRChase-lMua9EEDe0o43xZ1",
        caption: "Pushing away the gate",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/BetterCleverBunnyKappaPride-f2ulDV4zsav6nsvw",
        caption: "Onion ball toobs!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/BlazingAbstemiousBorkBleedPurple-jsqrBxRPFhyoWTUd",
        caption: "Onion Tea",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/ChillyZealousDonutKreygasm-oT6eAOl6DmyDCWwY",
        caption: "Onion escape via tv part 2 13/10/24",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/DarlingWiseParrotDeIlluminati-4W70U4YsSQ6AOGGX",
        caption: "Nova presents: Onion!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/DrabThankfulBoarStrawBeary-HLYbvro5E5DTRdGH",
        caption: "Frog pillow conveniently placed",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/EnergeticFuriousMageKappaPride-WiG2BrsbiV_VtCO3",
        caption: "Onion Big Noseball Champ!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/EnticingDreamyMageCoolStoryBob-w-CXIvmwuftS94A5",
        caption: "Onion chomps Maddie",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/FamousIronicTurnipSpicyBoy-gEYFFD6xssZ4Xqi2",
        caption: "I believe I can fly!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/GrossTiredPastaOptimizePrime-_oxWeeHUN-dL6_6Q",
        caption: "Onion escape via tv part 1 13/10/24",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/HandsomeDifferentWolfStoneLightning-bPjH1k1Xligfo77m",
        caption: "Onion shows Nova some noseball tricks",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/PerfectTastyCockroachYouDontSay-LdUTNrY7RMLP0Yuu",
        caption: "Onion escape via wall 29/09/24",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/PlumpMoistUdonWow-W_MYKr_hvqAuMsP1",
        caption: "Doing a big splash",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/PowerfulHorribleKimchiTinyFace-ioFzhUJy6wzLKX2Y",
        caption: "Escape attempt noticed by Shaye",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/ScrumptiousTacitEggChefFrank-KkbNibKg0JxUy6Sz",
        caption: "Hiding from Shaye",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/SquareDeterminedBubbleteaWutFace-a7U0cUNLu7TQt1_k",
        caption: "Onion escape DENIED by friends",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/StupidBoringDugongWholeWheat--lauOfECKDbVMgAy",
        caption: "Onion Re-Stashes the Balls",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/SuperCrepuscularGoldfishCmonBruh-dlaCVInidD9rJbMw",
        caption: "Repossessing the salmon oil",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/TawdryAgitatedRutabagaTriHard-20-uO88X_VDXG876",
        caption: "Onion Escape Aug 13 2024",
      },
      {
        url: "https://www.twitch.tv/piratesoftware/clip/AmazonianCredulousWoodpeckerCoolStoryBob-02O_mKQL7XY4bDgY",
        caption: "This is an onion",
      },
      {
        url: "https://www.youtube.com/watch?v=C2jSYX8cJv4",
        caption: "Mission impossible escape",
      },
    ],
    merch: null,
  },
  peanut: {
    name: "Peanut",
    wikipage: "Peanut",
    aliases: ["Duracell battery included - Meanut"],
    commands: ["peanut"],
    sex: "Female",
    birth: "2024-04-13",
    birthday: "04-13",
    arrival: "2024-08-03",
    valhalla: null,
    playgroup: "genpop",
    summary:
      'Peanut is a rescue ferret of Snails House. She came to the rescue with her siblings [[Cashew]] and [[Hazelnut]]. She is known for having a heart shaped white blaze on her head and lots of energy. She truly enjoys chasing her "Uncle" [[Beans]] during playtime.',
    lore: 'Peanut was adopted from a pet store with [[Cashew]] and [[Hazelnut]] as part of the "Nut Gang".  Peanut has Waardenburg Syndrome   causing her to be partially deaf, as well as many behavioral issues. She was sold and returned multiple times due to these behavioral issues before the rescue acquired her.',
    clips: [
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/BitterWanderingKuduPraiseIt-5nLC6p4jAjXKpEfN",
        caption: "Hazel crushes Peanut with volcano",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/ExpensiveObeseRaisinM4xHeh-sdSEUyjnIFQwJLyY",
        caption: "Hazel and Peanut fight like siblings",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/BoredLongDunlinBrainSlug-XcWaWZ1W7GFJFRH6",
        caption: "Peanut Attacks the Caterpillar",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/CarelessLachrymoseAnacondaJebaited-prCr-6l2UMlrceN7",
        caption: "Peanut Uppies!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/ChillyDarlingSalmonKreygasm-aUoRpZyWlY6TKNSG",
        caption: "Ball stash discovered!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/CulturedFantasticFiddleheadsMcaT-RGl7vJArL6MhsmQ2",
        caption: "Wardance foot soop",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/DifferentEnjoyableRamenBleedPurple-KxAHV23sewbLCf5J",
        caption: "Peanut can't believe Maddie made her ball disappear",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/EnergeticAgileLarkBlargNaut-SJn97BMLopw2u8RY",
        caption: "Peanut worms in the cloud bed",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/ExpensiveCoyZebraNerfRedBlaster-ZKpw82ukL7sWXHZ-",
        caption: "Shaye shakes a Peanut",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/FairAffluentMeerkatCurseLit-TB-a50xInFQGlQJ8",
        caption: "Hiding ball in the cage",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/GoodAssiduousFinchPhilosoraptor-TzcHF7P1YOeP9vBO",
        caption: "Almost attempting to swim",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/HotCredulousHerdTBTacoRight-dFJ4jOhN-xvbQH4B",
        caption: "Must.. get.. out!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/InexpensiveShortGarlicHeyGuys-YMUGhZLsXXAR_7RO",
        caption: "Foot soop",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/LuckyTrustworthyMeerkatBudBlast-x5YQDeZTrxWR-Lo2",
        caption: "Looking for victims",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/MagnificentGoodOpossumAliens-pHzhoKttrgDpbF9a",
        caption: "Ferret gym: Peanut pull-ups",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/ObliviousGlutenFreeGnatPlanking-pTcVpilUR2FWgbxw",
        caption: "Shaye scolds Peanut",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/PlacidStylishPigeonKappaClaus-IdBsd_UoZNeuHNCF",
        caption: "Peanut Attacks the Caterpillar Pt. 2",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/ResilientScrumptiousAnteaterOhMyDog-d9DBgZ24nYyF39v2",
        caption: "Taking purple ball on a tour",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/RockyPleasantLegHoneyBadger-G3ro_IvuuJo9K-4w",
        caption: "Peanut sock tax",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/SilkyVictoriousKoupreyDxCat-jfBm5XAM_kU-jrGb",
        caption: "Stashing ball under blanky",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/SmoothFunnyInternPlanking-Zf5Q8Kdf9GGXuqiF",
        caption: "Peanut failing at jumping 6 times in a row",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/TalentedOnerousMonitorThisIsSparta-adg-aiObMlct0Ktu",
        caption: "Dancing with Shaye",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/TameBlazingNoodleRitzMitz-7ONtrdt-p6xWYLQo",
        caption: "Must have deepest water",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/TiredTangentialGuanacoHeyGuys-Cn3t14adEIMsSIf5",
        caption: "Staying the ball again",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/TrappedWrongEggnogRaccAttack-Iwsx_o9Bn7qM6hPz",
        caption: "Peanut swing",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/WildQuaintAubergineKippa-cMgq9FunyEiBkVpf",
        caption: "Peanut trying to escape THE CLAW",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/FineCuteParrotSaltBae-y2O1fBpSYO1GIPKw",
        caption: "Beans grooming Peanut",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/HilariousDistinctBurritoShadyLulu--_n6cYGgohBkX5XT",
        caption: "Peanut and Cashew playing ball",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/PeacefulUnsightlyKumquatVoHiYo-eKth75bZZUACw934",
        caption: "Hazel and Peanut go toobing",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/SmokySecretiveIcecreamKappaPride-l3pLQmt_R4UfNvdh",
        caption: "Peanut vs. Mistoff. Peanut takes the high ground",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/TrappedSmellyEagleTwitchRaid-mh-J6zSeAK6je42m",
        caption: "Peanut and Mistoff in the ricepit",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/AmusedElegantSandstormDxCat-go2PTHPqccy96t-J",
        caption: "Peanut and Rusty playing bridge trolls",
      },
    ],
    merch: null,
  },
  peanut2: {
    name: "Peanut 2",
    wikipage: "Peanut_2",
    aliases: ["Peacenut, Peanutbutter"],
    commands: ["peanut2"],
    sex: "Female",
    birth: null,
    birthday: null,
    arrival: "2025-03-09",
    valhalla: "2025-09-12",
    playgroup: "valhalla",
    summary:
      "Peanut 2 was a rescue ferret of Snails House. She came to the rescue with her cagemate [[Bagel]] and really enjoyed her company. She was an older and very chill ferret who really enjoyed snuggles.",
    lore: `Peanut 2 came to the rescue together with [[Bagel]]. They were surrendered by loving owners due to age and existing health conditions.

She came to the rescue with her favourite toy rabbit and loved stashing it not very well all around the room.`,
    clips: [
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/PluckySpeedyGiraffeMingLee-3ZBWrDBzgeeaBchI",
        caption: "Bagel wants to use Peanut 2 as a pillow",
      },
      {
        url: "Peanut_and_Bagel_Intro.mp4",
        caption: "Bagel and Peanut 2 introduction",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/TiredFlirtyParrotDogFace-08fee4mbdjra1n3k",
        caption: "Peanut 2 cleaning Henry",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/PatientAssiduousGalagoDxCat-9f7HCN26Su_15Yrn",
        caption: "Loki cleaning Kitty and Peanut 2",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/StupidEasyWormGOWSkull-JUy-rxJue7b62QjF",
        caption: "Peanut 2 doing an inspect on Kylo",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/TenaciousVibrantAntelopeOMGScoots-eurmrPvs1t7GnSlL",
        caption: "Luna and Peanut 2 sharing a stick",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/BlightedAwkwardBisonCharlietheUnicorn-ncGVcz0OCfZzlz8b",
        caption: "Peanut 2 Stashes a Toy hide!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/PunchyBoredCroissantAMPEnergy-U3sNdoiXwE3QOn2c",
        caption: "Peanut 2 stashing her favourite rabbit",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/TrustworthyIcyPeppermintNerfBlueBlaster-IsUrVaXKmm2qHl07",
        caption: "Peanut 2 doing a big hide!",
      },
    ],
    merch: null,
  },
  peepo: {
    name: "Peepo",
    wikipage: "Peepo",
    aliases: ["Peep - Half the tail, double the wiggles"],
    commands: ["peepo"],
    sex: "Female",
    birth: null,
    birthday: "02-26",
    arrival: "2024-02-26",
    valhalla: "2025-10-31",
    playgroup: "valhalla",
    summary:
      "Peepo is a rescue ferret of Snails House. She is a sweet older lady who came to the rescue with [[Badger]], [[Moose]], [[Pepper]], and [[Salt]]. She enjoyed finding hiding spots in the playroom to hide from the caretakers. She had a shorter tail and was small size.",
    lore: "Peepo is a part of the 5 ferrets who were found abandoned in an unlocked shed by the Humane Society. They then reached out to the rescue for assistance. Peepo came to the rescue with [[Badger]],[[Moose]], [[Pepper]], and [[Salt]]",
    clips: [
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/ChillyOpenMarrowKeyboardCat-n64Ho8BSVca1PpqC",
        caption: "Badger enjoying a stick with Peepo",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/CloudyAmericanPeanutOneHand-ueGV9Yq-i8ronQ3q",
        caption: "Badger toobing with Peepo",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/EasyAntsyBisonPhilosoraptor-4rp_ruH2VXkzU_oR",
        caption: "Badger and Peepo playing in the toob",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/EnchantingSourStarlingAMPEnergyCherry-V9-gWswfZdvWsDXz",
        caption: "Badger riceboxing with Peepo",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/FurtiveMistyWerewolfNerfBlueBlaster-MIUPJPL-_asxWUuj",
        caption: "Badger throwing dooks with Peepo",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/MotionlessLaconicDugongArgieB8-xdzyFAn_tYaK151U",
        caption: "Badger snuggle with Peepo",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/SavoryHyperPieAsianGlow-nGh0Mkao7dPe7r2Z",
        caption: "Badger plays rice box tag thru the box with Peepo",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/TriumphantWonderfulChamoisDxAbomb-y0edzhb7mTt2t3cF",
        caption: "Badger and Peepo doing more toobing",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/RamshackleMoldyPlumageKappa-VEJXDq7R_HYSoZjD",
        caption: "Kylo meeting Peepo",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/AmazonianDifficultKalePupper-8BYfxN5CLrBV2ZTZ",
        caption: "Peepo blanket play",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/CallousJazzyPoultryMcaT-mpmX9e-0tsvbL0jR",
        caption: "Peepo hiding a lambchop",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/ExquisiteSquareSpindlePipeHype-rX7QbFZ01gH_oV_1",
        caption: "Peepo getting Shaye's attention",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/FrailReliableHippoBIRB-OjGqoYRizAOBpU7D",
        caption: "Finding Peepo",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/LittleOpenAntStoneLightning-KX3NL0xSuBNLYjah",
        caption: "Peepo peeping cam",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/MushyHelplessSeahorseRedCoat-PESkHTLVm6M7yuQG",
        caption: "Submarine Peepo",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/SolidMuddySandstormThisIsSparta-rGz8xBOGmFKs2xb2",
        caption: "Toy must get out",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/SplendidDirtyWormTheRinger-aZ12XRWb7KcLGiRt",
        caption: "Leg twitchies",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/FunnySilkyTeaHumbleLife-6HLigtv1h08WuwX3",
        caption: "Tiny Peepo, chonky Mocha",
      },
    ],
    merch: null,
  },
  pepper: {
    name: "Pepper",
    wikipage: "Pepper",
    aliases: ["Noseball champion"],
    commands: ["pepper"],
    sex: "Female",
    birth: null,
    birthday: "02-26",
    arrival: "2024-02-26",
    valhalla: null,
    playgroup: "pms",
    summary:
      "Pepper is a rescue ferret of Snails House. She came to the rescue with [[Badger]], [[Moose]], [[Peepo]], and [[Salt]]. She is a spunky ferret who enjoys playing noseball and loves doting on her human caretakers.",
    lore: "Pepper is a part of the 5 ferrets who were found abandoned in an unlocked shed by the Humane Society. They then reached out to the rescue for assistance. Pepper came to the rescue with [[Badger]], [[Moose]], [[Peepo]], and [[Salt]].",
    clips: [
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/CuteSneakyClipsmomUnSane-niQuMxtbWDa53NmP",
        caption: "Badger badgering Pepper",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/FurryPlausiblePterodactylDancingBanana-I7U1-lXiiFcWkEHc",
        caption: "Moose wildin' and Pepper nail clippies",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/AbnegateShyDogAsianGlow-Jj6__q7Bm470ZkL0",
        caption: "Pepper noseball champion",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/AggressiveBelovedNikudonSquadGoals-aNIaeqYPFKO38D7E",
        caption: "Pepper faceplant",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/AthleticWonderfulDonutSMOrc-tgcc08nJddzlvK7e",
        caption: "Pepper: One attention please!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/BetterAveragePterodactylBrainSlug-usYOh0kkR5uk3dr4",
        caption: "Pepper vs bed",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/BusyPeacefulRedpandaDancingBaby-7zNq8le9-LbHRI4W",
        caption: "Pepper adding spice to playtime",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/ComfortableLightOstrichResidentSleeper-OJToQJQ9fgkhRXco",
        caption: "Pepper chair scare",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/CuteOutstandingRaccoonRiPepperonis-MgfCRv6txGlPDQXz",
        caption: "Pepper excited about blankies",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/DependableFantasticIcecreamFailFish-m1il4OK5oshpTSvc",
        caption: "Pepper balancing act",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/DifferentZealousPeachDBstyle-E3otc9PYuzvAoovw",
        caption: "Pepper rollies",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/EnjoyableSpoopyTortoiseHotPokket-vNXHiHr4LZaw1-uq",
        caption: "Pepper: I need to eat your toes",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/EphemeralAdorableWallabyShadyLulu-nJ0yJNLJVhVSh7ak",
        caption: "Pepper: Blanket is toy. Nibbling feet",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/GlamorousAlluringHumanResidentSleeper-eAmGg7JV5Lts-pa0",
        caption: "Pepper getting a slap",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/ImpartialHedonisticLlamaDendiFace-vh61IBDsBOWwivhp",
        caption: "Pepper must have socks!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/KathishMoistVultureDoubleRainbow-14WpOz547P8vLT44",
        caption: "Pepper sock tax!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/LivelySpunkyGoshawkHassanChop-owNG_8AhIEdIi4wm",
        caption: "Pepper booping the snoot",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/PeacefulAgileDogeCmonBruh-sqiSsFhnMH-tL8zq",
        caption: "Pepper choses violence",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/PlacidKitschyCroquetteDendiFace-qOb8MVN3D_-80y1U",
        caption: "Pepper wildin'",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/PuzzledSuaveButterflyPogChamp-ls_l9x7tZzCRwi5a",
        caption: "Pepper toy investigator",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/QuaintMoistPeachDendiFace-1zWsXssBUhxWOdby",
        caption: "Pepper demanding sock tax",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/RelentlessOptimisticAntelopeFunRun-PVFJlMVlKXzB76_C",
        caption: "Seamstress Pepper",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/RudePlacidDiamondAllenHuhu-Q9eCabBLEByxypNt",
        caption: "Pepper: Unhand me peasant",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/SmokyRichLasagnaLitty-FDw241KrFaFyTbPD",
        caption: "Pepper: Ball is love, ball is life",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/SourWonderfulPuffinBlargNaut-ideR9VdKe9w5tLub",
        caption: "Pepper toob rampaging",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/SwissMoralHamburgerPicoMause-hcxRCjKKvT4pQM1r",
        caption: "Pepper dance routine",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/TameKindPepperoniNomNom-yAetAT-QeWiwFHpl",
        caption: "Pepper cuddles time",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/ZanyDullBisonBlargNaut-8sM1xsymUwDIZUp7",
        caption: "Pepper play ball",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/SoftExquisiteMageBatChest-He6myj5UUBfmL5BH",
        caption: "#ShayeHands + Pepper / Beans socktax",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/MiniatureHomelyToothCorgiDerp-Pe1kZGGbKIfRhakf",
        caption: "Pepper, Moose and Salt nomming soop",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/MistyCrispyHeronStoneLightning-B0YfgP5Znv6NkiVg",
        caption: "Pickle and Pepper bullying Shaye",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/CloudyFrigidTeaTBCheesePull-h885BiPXsBGW4_tW",
        caption: "Pepper and Salt working together",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/GoldenDifficultChickenHotPokket-NahIh4U_n-B0QdOe",
        caption: "Pepper and Salt getting kissies",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/PhilanthropicHealthyCheddarMrDestructoid-NgwyDTIL5BHOwyjV",
        caption: "Salt and Pepper doing a dig!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/BlightedDifferentSquirrelTooSpicy-LQmU-aWZaN0a_t0M",
        caption: "Salt toob battle with Pepper",
      },
    ],
    merch: null,
  },
  pepper2: {
    name: "Pepper 2",
    wikipage: "Pepper_2",
    aliases: ["Pepperoni"],
    commands: ["pepper2"],
    sex: "Male",
    birth: null,
    birthday: null,
    arrival: "2024-10-20",
    valhalla: "2025-11-01",
    playgroup: "valhalla",
    summary:
      "Pepper 2 was a rescue ferret of Snails House. He came from a loving home [who could no longer care for him] with his mates [[Skye]], [[Snowball]] and [[Salt 2]].",
    lore: `Pepper 2 joined the rescue together with [[Skye]], [[Snowball]] and [[Salt 2]]. 

After the passing of some of his fellow cagemates, he had been spending time with the oldies playgroup and enjoyed [[Peanut 2]] and [[Bagel]]'s company.`,
    clips: [
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/CooperativePolishedOwlKippa-niOIsg5TczIENeoo",
        caption: "Pepperoni stealing Kitty’s stick",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/PreciousBashfulAnteaterBleedPurple-PVFNRu_Z4joSSvEj",
        caption: "Luna and Pepper 2 toobing time",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/FamousVivaciousRuffStoneLightning-_xRGuY2rE4oLCCQD",
        caption: "Doing some toobing",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/HomelyObservantCookie4Head-JMMpoYsTaTEDfyCG",
        caption: "Pepperoni enjoying the lambchop bed",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/OnerousStormyTurnipOSkomodo-jJ8KE_WL29cVc6yU",
        caption: "Delivery: Pepper 2 together with Salt 2, Snowball and Skye",
      },
    ],
    merch: null,
  },
  pickle: {
    name: "Pickle",
    wikipage: "Pickle",
    aliases: ["Chaos incarnate, Water bongo"],
    commands: ["pickle"],
    sex: "Male",
    birth: null,
    birthday: "04-03",
    arrival: "2023-08-07",
    valhalla: null,
    playgroup: "genpop",
    summary:
      "Pickle is a rescue ferret of Snails House. He is a super playful ferret of the babies and loves wardancing with everyone. He is the origin story for the yarrBongo and yarrGrass emotes.",
    lore: `Pickle was surrendered to the rescue by a pet store,  along with his bonded friend [[Spud]] and fellow cage mate [[Lucky]] because the store was opting out of selling ferrets. He has Waardenburg and is completely deaf. Waardenburg syndrome can cause deafness and behavioral issues in ferrets. Cage mate ferrets can develop similar behavioral issues due to this style of play within their cage. 

For fun, Shaye allows the ferrets to impart wisdom upon the community. Pickle typed "3bf", and "Zfa".`,
    clips: [
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/CoyVainGullRalpherZ-nSSyvQ1H9Wv7zVGx",
        caption: "Pickle denies Beans escape",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/DifferentSparklyHareTakeNRG-l8dhGNh-ysvIawhA",
        caption: "Beans and Pickle wilding after visiting wet world",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/AmazonianTriumphantMinkPanicBasket-jXI9sJFJgW_DzHOb",
        caption: "Pickle photobombs Beef asleep on the couch",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/TallAmusedPeppermintFreakinStinkin-YqBWtt3cKSqaSf0l",
        caption: "Pickle and Beef battle",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/SecretiveHardChinchillaTwitchRPG-lgEe9cFhsRf7B8pI",
        caption: "Pickle and Cashew toobing",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/UglyResourcefulHareMrDestructoid-OSqiRK6WUEcyw0la",
        caption: "Pickle and Cashew playing",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/NiceCogentPeppermintCharlieBitMe-5hGqnzsFtlw8MY4r",
        caption: "Cowboy chasing Pickle",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/CuriousRacyGoblinSoonerLater-cXzjjop9oYbObjlJ",
        caption: "Latte and Lucky match! Pickle fights himself",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/FaintRealWolfYouDontSay-wSpfwmbZpXXgnf2A",
        caption: "Pickle and Lucky wrestling",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/AffluentConsiderateBaguetteNinjaGrumpy-fH7qnxUC2el06LDz",
        caption: "Pickle and Mocha battle in the mango",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/ClearFlaccidGuanacoOSsloth-QMGQJYlNkARldIkN",
        caption: "Pickle and his mighty steed... Mocha!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/EasyPreciousArugulaKAPOW-NBQWiEaW1u12CYCN",
        caption: "Mouse and Pickle kissies",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/GeniusDrabToothOSfrog-CTCt1igvEzWZo50w",
        caption: "Pickle yeets Mouse off of the box",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/MistyCrispyHeronStoneLightning-B0YfgP5Znv6NkiVg",
        caption: "Pickle and Pepper bullying Shaye",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/AbstruseComfortableMagpieKappa-m-XKrWnbCrWLFAVs",
        caption: "Pickle breakdancing",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/AdorableChillyEelTwitchRaid-cYHWfHk84jU8MhlR",
        caption: "Pickle morning stretchies",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/AdorableMistyBoarNononoCat-zQukxNfsEJvZQZ61",
        caption: "Bunny Pickle steals toy",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/AnnoyingSmellyLyrebirdPartyTime-5OQ9E-z-40CuYGS2",
        caption: "Pickle kidnapping the toob",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/ApatheticSmokyAlpacaTinyFace-nblFtwNwYks95Iu_",
        caption: "Pickle digging the rice",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/ClearCrypticOctopusBIRB-05z6_w15YSQ_sE90",
        caption: "Pickle ballpit time!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/CuteStylishCookieHeyGirl-yuSEDxLPkip6qDU1",
        caption: "Pickle tells Shaye NO!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/DarlingFunChipmunkRlyTho-ma-hbuRIjR2S7B4g",
        caption: "Pickle pit shark",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/DistinctObliqueSwanBibleThump--L17ReelNECAfTX4",
        caption: "Pickle tube centrifuge",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/EnergeticInexpensiveMomRitzMitz-R0QWXmfXxiEQ2QCA",
        caption: "Pickle all wet after shower scene",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/FancyTacitSquirrelPrimeMe-X6uw9TbgU_C6jU3G",
        caption: "Pickle: Your finger tastes nice, I'll take it!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/FilthyHappyGarlicPeteZaroll--vb_UJT_MXqOiA6r",
        caption: "Tubing the Pickle way",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/FrailCulturedMoonCorgiDerp--mT8NBkZe-bakSdK",
        caption: "Pickle giving Shaye kissies",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/FreezingBlightedLeopardTheTarFu-fTqrhGWAKdjtxM_A",
        caption: "Pickle faceplants into water dish",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/GenerousSilkyOrangeCurseLit-CoLGVJiQt6TT5LCw",
        caption: "Pickle basket shenanigans",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/GlamorousArborealWalletHassaanChop-HWMBCCNZ0e_0YcZs",
        caption: "Pickle staring into your soul",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/GracefulConsiderateRhinocerosShazBotstix-URUa7-quCQTTnLjL",
        caption: "Pickle - No time for cuddles, must stash!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/HilariousElatedSmoothieBigBrother-X2eZh3opbazXrMtT",
        caption: "Pickle helping with cleaning",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/IgnorantUnsightlyCarabeefRickroll-RVSClkvp7_B_heL7",
        caption: "Pickle professional juggler",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/ImportantTawdryFloofDuDudu-95pWtiJ32efCRfJs",
        caption: "Pickle trying to find new ways to escape",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/InexpensiveSlickKittenPraiseIt-OZs3IqNQIvzJ7XG1",
        caption: "Pickle rice wardance",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/InquisitiveHedonisticDragonHumbleLife-R-DP1gyPjtYy3WL-",
        caption: "Pickle fountain goblin (bongos)",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/LitigiousDirtyCodFeelsBadMan-aUmu42dMxfxPWMca",
        caption: "Pickle is redecorating",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/MistySpoopyLampMcaT-pZ9xQMjsdktL4EsF",
        caption: "Pickle drying in the rice",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/MotionlessBenevolentChowderDuDudu-JHD_DYPCjOGCjXKA",
        caption: "Pickle tunnel tribulations",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/MotionlessConfidentGoshawkRiPepperonis-biIv-vbd-4BD3a7w",
        caption: "Pickle doing nothing wrong",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/NastyHonorableMinkMVGame-pxdJ4wbN_PToYkxc",
        caption: "Pickle hiding toy!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/ObliviousAcceptableCucumberEagleEye-PbuX2sTE7d4gxHhs",
        caption: "Pickle swimming in the clouds!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/OnerousPoisedRaisinTheThing-pCGEogKG8GttdnKY",
        caption: "Pickle has a confuse",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/PerfectGleamingAdminPeanutButterJellyTime-KmKvsAP5cz8ofCZm",
        caption: "Pickle Bongos again!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/PrettiestTrappedHawkPJSalt-3xwJbgrszLZk-V-U",
        caption: "Pickle and the nutz",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/ProductiveSpinelessPuffinBCouch-RdWC_wcHajE5Lb2m",
        caption: "Pickle deadsleeping",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/ProudCoyCakeStinkyCheese-HkBX8p13kYccsrcQ",
        caption: "Pickle, climbing is hard",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/PuzzledDarkMochaTriHard-Crj2vhmo4Dr8TQda",
        caption: "Pickle soup tail wiggle",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/RelievedOpenOcelotAMPEnergyCherry-yr4ewWdvGmBLjXHb",
        caption: "Pickle many bounce",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/SarcasticAstuteOtterCmonBruh-dSgVl0GPT2fE2knN",
        caption: "Pickle thinking about....",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/SavoryBitterWaterHeyGuys-H89sxW5mAgfQjBhA",
        caption: "Pickle trying to jailbreak the phone",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/SeductiveInterestingCheesecakeTebowing-__oCUXilloWu8nTt",
        caption: "Pickle steals ball on a stick!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/SmokyPrettyVultureSquadGoals-71PJdE_BEQ6hqaSC",
        caption: "Pickle peeks over the ball pit",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/SquareBadArtichokeLitty-O5rxUxKE-FOR1eQD",
        caption: "Pickle going wild",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/ThankfulBlindingBatterySeemsGood-IVbfmgDblpSClvRg",
        caption: "Pickle: What are you doing?",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/ThoughtfulSaltyBeanSoBayed-F0fi3AvJAFBYXqYe",
        caption: "Pickle stealthcheck failed",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/TriumphantSmallKeyboardM4xHeh-EKwh993A97TTiLtV",
        caption: "Pickle: No snackies, need attentions!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/TubularTacitPuffinCharlietheUnicorn-7sWpuu7exFftt5za",
        caption: "Pickle toob safety officer",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/UninterestedPricklyClipzKlappa-eT0eyhvfrhJanc1l",
        caption: "Pickle biting the bullet",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/VainCrispyJackalDuDudu-XZdjBHO8-RaO6tOd",
        caption: "Pickle doing Pickle things",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/WealthyTangibleTarsierRuleFive-6rIoYIsM9MGhdoPk",
        caption: "Pickle hammock flop",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/ZealousCarelessWebPJSugar-yGjK_na_O3fo18GP",
        caption: "Pickle simba moment",
      },
      {
        url: "https://www.youtube.com/watch?v=mOA-ymFPmsc",
        caption: "Thor explaining Pickle Bongos",
      },
      {
        url: "Pickle_Bongos.mp4",
        caption: "Pickle does bongos on water fountain",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/AgreeableDignifiedSrirachaFunRun-EE9jsN8KuQJo_J4k",
        caption: "Pickle trying to jailbreak Sai",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/FantasticStupidKathyHassaanChop-NAadm2YIjwauGc2L",
        caption: "Pickle playing with Grandson",
      },
    ],
    merch: null,
  },
  rose: {
    name: "Rose",
    wikipage: "Rose",
    aliases: [],
    commands: ["rose"],
    sex: "Female",
    birth: null,
    birthday: null,
    arrival: "2024-01-07",
    valhalla: "2024-01-14",
    playgroup: "valhalla",
    summary: "Category:Ferrets lacking intro",
    lore: `Rose was one of the saddest cases the rescue had to deal with.


TRIGGER WARNINGS: Medical procedures and death


https://discord.com/channels/162034058736435201/1108087578617446541/1195577896891326545
The new ferret in the ICU made it through surgery.
The object is theorized to be a Macademia nut shell.
Attempting to digest this would explain the liver toxicity.
We still don't know for sure but this object is very plant/shell like in composition.
I will be sending it off to a lab to confirm after this is all over.

We have very few options here so we're taking what we can.
Lucky and Beans are about to be in-transit to do a blood transfusion.
Ferrets don't have blood types so there shouldn't be any complications.

Best chance she has.

https://discord.com/channels/162034058736435201/1108087578617446541/1195976293225865256
Good News: The objected swallowed by the little one does not appear to be toxic in nature.
Bad News: The old owners waiting 8 goddamn days to solve this caused her to go into Hepatic Acidosis.

This condition is caused by starvation and can easily lead to death.
She went into full Jaundice and her liver was highlighter yellow.
After the blood transfusion her Jaundice has mostly disappeared.
Right now we have her on fluids and are trying to manage the rest of her vitals.
It's basically whack a mole but the direction is positive so far.

Today was the "Do we keep going?" meeting and we opted to keep going.
Because she is so young (6 months) and the direction is positive it makes sense to do this.
We're going to have the meeting again in a few days and keep playing whack a mole until then.

https://discord.com/channels/162034058736435201/1108087578617446541/1196097535572459610
I'm sorry to say she did not make it.
Shortly before I ended the stream she went into cardiac arrested.
We made it there in time to say goodbye and nothing else.

We're going to be getting a necropsy to identify some of the causes that the treatment failed.
This should help the vets involved to treat cases like this better in the future.
It may not save her but it may save others.

We're also getting a pawprint in clay and a wooden urn for her and renamed her to Rose.
That way her name is not tied to the conditions or people that caused this preventable death.
When the new version of the ferret website is ready she will be in the memorial section.
Thankfully I was able to get a photo of her when she was brighter early in the day.

This is not the outcome we wanted but we did everything we could.
It is possible to commit no mistakes and still lose.
That is not a weakness. That is life.`,
    clips: [],
    merch: null,
  },
  rowan: {
    name: "Rowan",
    wikipage: "Rowan",
    aliases: [],
    commands: ["rowan"],
    sex: "Male",
    birth: null,
    birthday: null,
    arrival: "2025-12-01",
    valhalla: null,
    playgroup: "oldies",
    summary:
      "Rowan is a rescue ferret of Snails House. Rowan came to the rescue with [[Ash]], [[Juniper]] and [[Rye]]",
    lore: "Rowan came with [[Ash]], [[Juniper]] and [[Rye]] from a very loving home in which life circumstances had unfortunately changed, so they came to Snails House.",
    clips: [
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/FitArtisticKumquatPhilosoraptor-_MC-EB3wSCKcpbCe",
        caption: "Rowan, Rye, Ash and Juniper explore the playroom",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/SpotlessDepressedFriesTBTacoLeft-pfz0dEkiddoXJMjM",
        caption: "Rowan and Juniper play in the ball pit",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/GeniusCreativeTurnipAsianGlow-VR2-0bIw0aYMqw5k",
        caption: "Rowan says erm no photos thank you",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/SuccessfulStylishCheetahGingerPower-u_TWhOQqEuZyPwHF",
        caption: "Rowan big toobing",
      },
    ],
    merch: null,
  },
  roxy: {
    name: "Roxy",
    wikipage: "Roxy",
    aliases: [],
    commands: ["roxy"],
    sex: "Female",
    birth: null,
    birthday: null,
    arrival: "2025-04-07",
    valhalla: null,
    playgroup: "solo",
    summary:
      "Roxy is a rescue ferret of Snails House. She came to the rescue with her roommate [[Kylo]].",
    lore: "Roxy came to the rescue as a roommate surrender with her friend [[Kylo]].",
    clips: [
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/BlightedTawdryEndiveBIRB-XdYmcdJcor23TrXy",
        caption: "Pizza playing",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/ObliviousBenevolentNarwhalPlanking-Rpl38sbyL0xpntv9",
        caption: "Upside down toobing",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/UnusualSingleMonitorBrokeBack-eifhtWFuWwGjUnqg",
        caption: "Playing in the rice",
      },
    ],
    merch: null,
  },
  rusty: {
    name: "Rusty",
    wikipage: "Rusty",
    aliases: ["Uncle Rusty"],
    commands: ["rusty"],
    sex: "Male",
    birth: null,
    birthday: null,
    arrival: "2024-06-06",
    valhalla: null,
    playgroup: "rb",
    summary:
      "Rusty is a rescue ferret of Snails House. He is a spirited oldie who enjoys playing with others and loves stick chew treats.",
    lore: "Rusty was alone and surrendered from the same owners as [[Mouse]]. While he's an oldie, he is still quite spirited, playful, and can tough it with some young ferrets, as seen below in clips and photos.",
    clips: [
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/PoliteCleverKoalaRickroll-mAFUFm2XHUfI_XkK",
        caption: "Bruce and Rusty play tussle",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/AssiduousScrumptiousDragonTheRinger-b-6-4BKa2XAtxYSR",
        caption: "Cheese shows Rusty who's the queen of the business!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/AmusedElegantSandstormDxCat-go2PTHPqccy96t-J",
        caption: "Peanut and Rusty playing bridge trolls",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/AlluringObeseDragonKippa-JDS8ZDOo9IEfdZh1",
        caption: "Rusty chasing Shaye for stick",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/FamousArtsyManateeCoolStoryBob-z5lYMK-Uv3l6Ymze",
        caption: "Forced 180 for Rusty",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/PlayfulShortMangetoutShadyLulu-u7MFkNWRUE3YFgYc",
        caption: "Rusty plays with Maddie.",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/PoorLachrymoseFennelCopyThis-XPmMrnahArkL9iaB",
        caption: "Rusty checking everywhere for stick",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/SassyConcernedCrowOptimizePrime-oQDGPVITXaJOw3FV",
        caption: "Getting his treat stick",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/TallShakingSandpiperCclamChamp-aRvxaJMbYrPmEvuI",
        caption: "Rusty: Lion King Showoff",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/TangentialJazzyPeppermintChocolateRain-BfUTcm5TpWCWZqpI",
        caption: "Rusty being cute on the cat tree",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/ZealousBeautifulSmoothieTheRinger-5KWWa_ebY_lD8SVs",
        caption: "Stretchy pouts",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/DeliciousRelentlessNikudonTBTacoLeft-sjdUh0DlkDgCRCvi",
        caption: "Rusty and Latte Battle",
      },
    ],
    merch: null,
  },
  rye: {
    name: "Rye",
    wikipage: "Rye",
    aliases: [],
    commands: ["rye"],
    sex: "Male",
    birth: null,
    birthday: null,
    arrival: "2025-12-01",
    valhalla: null,
    playgroup: "oldies",
    summary:
      "Rye is a rescue ferret of Snails House. Rye came to the rescue with [[Ash]], [[Rowan]] and [[Juniper]].",
    lore: "Rye came with [[Ash]], [[Rowan]] and [[Juniper]] from a very loving home in which life circumstances had unfortunately changed, so they came to Snails House.",
    clips: [
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/FitArtisticKumquatPhilosoraptor-_MC-EB3wSCKcpbCe",
        caption: "Rowan, Rye, Ash and Juniper explore the playroom",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/SmokyAnnoyingPandaYee-ZoqaD5XObZEOGcOd",
        caption: "Rye says hi to Jasmine",
      },
    ],
    merch: null,
  },
  sai: {
    name: "Sai",
    wikipage: "Sai",
    aliases: [],
    commands: ["sai"],
    sex: "Female",
    birth: null,
    birthday: null,
    arrival: "2024-06-05",
    valhalla: null,
    playgroup: "kyosai",
    summary:
      "Sai is a rescue ferret of Snails House. She came to the rescue with her cage mate [[Kyo]].",
    lore: "Sai came to the rescue together with [[Kyo]]. During their first playtime(s) it was determined they didn't mesh well with the big group of gen pop, preferring each other's company. They get ample time in the big play room, as well as being Shaye's gaming buddies in Shaye's office. Sai is more chill than Kyo, and normally, she falls asleep long before Kyo is out of energy.",
    clips: [
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/FaintNurturingAubergineUnSane-70apOYHNHAS1gqw6",
        caption: "Kyo and Sai battle the ball in the toob",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/OddIronicAlbatrossTooSpicy-u8b5AO6TeNUQX3aX",
        caption: "Shaye gives return uppies to Kyo and Sai",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/AgreeableDignifiedSrirachaFunRun-EE9jsN8KuQJo_J4k",
        caption: "Pickle trying to jailbreak Sai",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/DependableCourageousDurianNerfRedBlaster-X9_waAeP-I75VOet",
        caption: "Sai trying to get out",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/VibrantGracefulEndiveAllenHuhu-Kjf2N3uRaujOF49P",
        caption: "Sai playing with floaty ball",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/BlazingPeacefulChickpeaPhilosoraptor-UdmGva-W3TAXxgSZ",
        caption: "Shaye being double teamed by Kyo and Sai",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/LittleLazyFlamingoOSsloth-aRbMEKVGAWmY9CJA",
        caption: "Sai snuggle time with Kyo",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/PhilanthropicSnappyLardShazBotstix-YqsG2UDsf4JhEx9h",
        caption: "Sai doing a toobing with Kyo",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/WanderingArtsyWaspNotLikeThis-4RWHgZfwtZiWrbZG",
        caption: "Kyo & Sai are introduced",
      },
    ],
    merch: null,
  },
  salsa: {
    name: "Salsa",
    wikipage: "Salsa",
    aliases: ["Thor nibbler"],
    commands: ["salsa"],
    sex: "Female",
    birth: null,
    birthday: null,
    arrival: "2023-04-17",
    valhalla: null,
    playgroup: "vons",
    summary:
      "Salsa is a rescue ferret of Snails House. She came to the rescue with her brother, [[Nacho]] and enjoys playtime with [[Vincent|Vinny]] and [[Onion]].",
    lore: "Salsa came to the rescue with her brother, [[Nacho]]. They were surrendered by their owners to the rescue.",
    clips: [
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/AnimatedStupidDonkeyPupper-3uDTPifUjnDAXGtp",
        caption: "Salsa Stashes a toy carrot",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/ElatedBoxyCheetahDoritosChip-BGXAA3zRAdU_2Blg",
        caption: "Nibbling on Thor after he uses a squeeky toy",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/SmilingSingleJamWutFace-KrNIdD6yUH28SgIl",
        caption: "Dancing fixes the cam",
      },
    ],
    merch: null,
  },
  salt: {
    name: "Salt",
    wikipage: "Salt",
    aliases: ["Saltine"],
    commands: ["salt"],
    sex: "Female",
    birth: null,
    birthday: "02-26",
    arrival: "2024-02-26",
    valhalla: null,
    playgroup: "pms",
    summary:
      "Salt is a rescue ferret of Snails House. She came from the local Humane Society with [[Badger]], [[Moose]], [[Peepo]], and [[Pepper]]. She is a very spirited and spicy ferret who loves to play with Moose and Pepper. She has an interesting coat pattern of an all-white coat with a black-tipped tail.",
    lore: `Salt is a part of the 5 ferrets who were found abandoned in an unlocked shed by the Humane Society. They then reached out to the rescue for assistance. Salt came to the rescue with [[Badger]], [[Moose]], [[Peepo]], and [[Pepper]].

Shaye has decided (in jest) that Salt's government name is actually Saltine, so at least then the color matches.`,
    clips: [
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/ExpensiveHonorableHarePRChase-O-T4mWIh8RKfSlTH",
        caption: "Moose pit fight with Salt",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/RenownedSmoothPassionfruitBudStar-YTdvB13SZahVTxjb",
        caption: "Moose pit battle with Salt",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/MiniatureHomelyToothCorgiDerp-Pe1kZGGbKIfRhakf",
        caption: "Pepper, Moose and Salt nomming soop",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/CloudyFrigidTeaTBCheesePull-h885BiPXsBGW4_tW",
        caption: "Pepper and Salt working together",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/GoldenDifficultChickenHotPokket-NahIh4U_n-B0QdOe",
        caption: "Pepper and Salt getting kissies",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/PhilanthropicHealthyCheddarMrDestructoid-NgwyDTIL5BHOwyjV",
        caption: "Salt and Pepper doing a dig!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/BrainyStylishAlbatrossAMPEnergyCherry-MQHrheeN3HmaFGU1",
        caption: "Salt climbs AND escapes!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/CarefulEnjoyableBananaKreygasm-o5wCsAun4lDiTgKD",
        caption: "Salt escape attempt thwarted by Maddie",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/ExuberantPluckyWaspCoolStoryBob-A7g4oicNtXFP4hmh",
        caption: "Salt's escape attempt foiled!.",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/FaithfulAverageSnakePanicVis-B82H4VjmnckCH2pd",
        caption: "Salt's escape attempt #2 foiled.",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/HelplessFaithfulAlpacaUWot-jHXXtJg-fY5qLxld",
        caption: "Salt Denied, Maddie Hands!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/KawaiiAcceptableBisonJebaited-eZaX0mbda0CmDbU-",
        caption: "Salt choosing a toy",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/LongSourToadBudBlast-D127VX-v4yzMxsaB",
        caption: "Salt's escape attempt #3 foiled!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/ManlyYawningEelBuddhaBar-cY2m7mbLimCBj6Nf",
        caption: "Salt escapes, immediately regrets.",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/ObeseMotionlessChinchillaTTours-7Qgq_J-nLvXBDbAn",
        caption: "Salt's escape intercepted",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/SeductiveGlutenFreeHawkDendiFace-_A6AbgfFmyqGv0xH",
        caption: "Salt Chases the ball",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/BlightedDifferentSquirrelTooSpicy-LQmU-aWZaN0a_t0M",
        caption: "Salt toob battle with Pepper",
      },
    ],
    merch: null,
  },
  salt2: {
    name: "Salt 2",
    wikipage: "Salt_2",
    aliases: [],
    commands: ["salt2"],
    sex: "Male",
    birth: null,
    birthday: null,
    arrival: "2024-10-20",
    valhalla: "2025-03-05",
    playgroup: "valhalla",
    summary: "Category:Ferrets lacking intro",
    lore: "Salt 2 joined the rescue together with [[Skye]], [[Snowball]] and [[Pepper 2]]",
    clips: [
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/OnerousStormyTurnipOSkomodo-jJ8KE_WL29cVc6yU",
        caption: "Delivery: Pepper 2 together with Salt 2, Snowball and Skye",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/HeadstrongBigHamTBCheesePull--4Ydx_o6qP-Gfl_Z",
        caption: "Oldie Salt 2 Plays in Ricebin",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/RamshackleUnusualArtichokeMrDestructoid-BrKdikQgv7ReY_Ic",
        caption: "Snowball changing into Salt 2",
      },
    ],
    merch: null,
  },
  scotch: {
    name: "Scotch",
    wikipage: "Scotch",
    aliases: [],
    commands: ["scotch"],
    sex: "Male",
    birth: null,
    birthday: null,
    arrival: "2024-02-23",
    valhalla: null,
    playgroup: "genpop",
    summary:
      "Scotch is a rescue ferret of Snails House. He came from a loving home who could no longer care for him with his cagemates [[Kahlua]], [[Mai Tai]], [[Mimosa]] and [[Whiskey]]. He loves to be super rowdy and playful.",
    lore: "Scotch came to the rescue together with [[Kahlua]], [[Mai Tai]], [[Mimosa]] and [[Whiskey]]. Due to their names, they are also known as the alcohol crew.",
    clips: [
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/DreamyUninterestedGarlicRedCoat-YIPRqYqCNoi75wPL",
        caption: "Scotch introduction",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/FamousBreakableGrouseCeilingCat-uO5g0csSiEdHMM8l",
        caption: "Big Tail Wiggles from Scotch!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/ClumsySlickKoalaAMPTropPunch-VWhe5UxkU-e5VhSn",
        caption: "Scotch and Mistoff in a scuffle",
      },
    ],
    merch: null,
  },
  skye: {
    name: "Skye",
    wikipage: "Skye",
    aliases: ["Stasher of toys"],
    commands: ["skye"],
    sex: "Female",
    birth: null,
    birthday: null,
    arrival: "2024-10-20",
    valhalla: "2025-01-28",
    playgroup: "valhalla",
    summary: "Category:Ferrets lacking intro",
    lore: "Skye joined the rescue together with [[Snowball]], [[Salt 2]] and [[Pepper 2]].",
    clips: [
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/OnerousStormyTurnipOSkomodo-jJ8KE_WL29cVc6yU",
        caption: "Delivery: Pepper 2 together with Salt 2, Snowball and Skye",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/ChillyOddKittenPoooound-YWtMFiXb4fvDryi0",
        caption: "Skye in the macaroni box",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/CredulousTardyCheeseSmoocherZ-E1CA81UqvketpOvY",
        caption: "Skye stashing lion toy",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/CuteCulturedPotatoPMSTwin-YUCjVkfV56CCcRDZ",
        caption: "Skye playing in the ballpit",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/EphemeralLovelyAxePeteZarollTie-ObKoWYxQaEOsAcA8",
        caption: "Skye, serial stasher!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/OutstandingVainEndiveDogFace-sCO6LTbQ_H1Nn957",
        caption: "Skye doing a toobing",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/TallApatheticChamoisHassanChop-jcyZu8CoJt2DG6Zb",
        caption: "Skye stashing toy",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/WonderfulSnappyBisonTBCheesePull-KF30R0TRFkk5UFGV",
        caption: "Skye hiding in the catepillow",
      },
    ],
    merch: null,
  },
  snails: {
    name: "Snails",
    wikipage: "Snails",
    aliases: ["The First"],
    commands: ["snails", "snail"],
    sex: "Female",
    birth: null,
    birthday: "06-19",
    arrival: "2019-07-31",
    valhalla: "2023-04-22",
    playgroup: "valhalla",
    summary: "Category:Ferrets lacking intro",
    lore: "Snails was a breeder lab animal for the University of Washington and had 2 litters of kits. She came to the rescue with [[Loki]] back in 2019. Her birthday was June 19th, 2018. She is the original first ferret of the business, along with Loki, and is who the rescue is aptly named after. She passed of a heart condition in her sleep.",
    clips: [
      {
        url: "https://www.twitch.tv/piratesoftware/clip/AmusedBlatantTruffleCeilingCat",
        caption: "Snails yawn",
      },
      {
        url: "https://www.twitch.tv/piratesoftware/clip/AverageCoyWatercressPastaThat-XeyDu0DRD6Yly5Qd",
        caption: "Snails trying to get into hammock",
      },
      {
        url: "https://www.twitch.tv/piratesoftware/clip/CalmIcyWrenNerfBlueBlaster-zuRVMSFfktU1Zr3I",
        caption: "Ticklish Snails",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/StrongRelentlessAnacondaImGlitch-ocewAkTWn086f_7B",
        caption: "Beef yoinks a green ball and Snails a LGM",
      },
      {
        url: "https://www.twitch.tv/piratesoftware/clip/PuzzledPrettyOstrichStoneLightning",
        caption: "Loki and Snails sip together",
      },
      {
        url: "https://www.twitch.tv/piratesoftware/clip/SavoryStrangePidgeonCharlietheUnicorn",
        caption: "Loki and Snails being cute",
      },
    ],
    merch: null,
  },
  snowball: {
    name: "Snowball",
    wikipage: "Snowball",
    aliases: [],
    commands: ["snowball"],
    sex: "Male",
    birth: null,
    birthday: null,
    arrival: "2024-10-20",
    valhalla: "2025-04-05",
    playgroup: "valhalla",
    summary: "Snowball was a rescue ferret of Snails House.",
    lore: `Snowball joined the rescue together with [[Skye]], [[Salt 2]] and [[Pepper 2]].

Snowball was an Albino`,
    clips: [
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/OnerousStormyTurnipOSkomodo-jJ8KE_WL29cVc6yU",
        caption: "Delivery: Pepper 2 together with Salt 2, Snowball and Skye",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/AthleticEnticingDoveCoolStoryBro-y_u6n28LxRj8wZWx",
        caption: "Snowball investigating the mango",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/ClumsyBillowingLorisAMPTropPunch--cmiZF7q5zpLuIud",
        caption: "Snowball doing a flop and hide",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/PlainPrettyLocustCoolStoryBob-AZaKrW5M8SOoAqga",
        caption: "Snowball enjoying some soop",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/RamshackleUnusualArtichokeMrDestructoid-BrKdikQgv7ReY_Ic",
        caption: "Snowball changing into Salt 2",
      },
    ],
    merch: null,
  },
  snowberry: {
    name: "Snowberry",
    wikipage: "Snowberry",
    aliases: ["Snooby, Snowbear"],
    commands: ["snowberry"],
    sex: "Female",
    birth: null,
    birthday: null,
    arrival: "2025-10-04",
    valhalla: null,
    playgroup: "oldies",
    summary:
      "Snowberry is a rescue ferret of Snails House. She came to the rescue with a leg injury. Despite this injury and ongoing recovery, she is walking better and has proved to be an avid explorer who enjoys making new friends.",
    lore: `Snowberry came to the rescue after being found at a remote park with a leg injury. She was found by a concerned couple, who also gave her the name she now carries. Upon examination by the vet, it was determined that her leg was fine, but the right side of her pelvis had suffered a compound fracture. The cause of the fracture is unknown.
She was prescribed 6-8 weeks of rest and pain management, and is making good strides in her recovery. She's very active and loves to explore the big room. She also seems very fond of [[Henry]] and [[Teep]]. She recently has been spotted cuddling with Lucas, and enjoys time within the Oldies group. Cheese and Jaz are her main snuggle buddies.`,
    clips: [
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/PoliteDifficultTeaWTRuck-auGfMN8AN2wFsTEC",
        caption: "Snowberry and Chili exploring",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/WonderfulElegantPeafowlMcaT-PnUm2Gtl1nxBA4wz",
        caption: "Chili and Snowberry meet and greet",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/GrossConsideratePuddingShazBotstix-MLYLKAxjZ9IrgP2c",
        caption: "Snowberry coming for snuggles!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/ResoluteAdventurousEggplantRuleFive-Vfjm9ga5jJcrJCAC",
        caption: "Snowberry water dig",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/NimbleTubularUdonPunchTrees-EkdZW9YxpFWWnIEY",
        caption: "Snowberry meets Teep",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/ToughCrackyPidgeonShadyLulu-H0Z-I_EbAVSonhMj",
        caption: "Snowberry grooming Teep",
      },
    ],
    merch: null,
  },
  spud: {
    name: "Spud",
    wikipage: "Spud",
    aliases: ["Pickle's snugglebuddy"],
    commands: ["spud"],
    sex: "Male",
    birth: null,
    birthday: "04-03",
    arrival: "2023-08-07",
    valhalla: null,
    playgroup: "genpop",
    summary:
      "Spud is a rescue ferret of Snails House. He came to the rescue with his bonded friend [[Pickle]] and fellow cage mate [[Lucky]]. He loves to wrestle with Pickle, who loves him too much to fight back.",
    lore: "Spud was surrendered to the rescue by a pet store along with his bonded friend [[Pickle]] and fellow cage mate [[Lucky]] because the store was opting out of selling ferrets.",
    clips: [
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/VibrantPeppyTildePeteZarollTie-geGivsieoWvTRfUW",
        caption: "Spud yoinks Donut in Paper-Box",
      },
    ],
    merch: null,
  },
  teep: {
    name: "Teep",
    wikipage: "Teep",
    aliases: ["Officer Teep"],
    commands: ["teep"],
    sex: "Female",
    birth: null,
    birthday: null,
    arrival: "2024-03-30",
    valhalla: null,
    playgroup: "oldies",
    summary:
      "Teep is a rescue ferret of Snails House. She came to the rescue from a loving home with her cagemate [[Bruce]]. They were surrendered due to needed senior care the rescue could provide.",
    lore: `She enjoys enforcing the rules of the playroom, strongly. (Which is to have fun, of course!)

Teep affectionately earned the nickname "Officer Teep" when she chose to ride [[Henry]] like a horsey.`,
    clips: [
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/PluckyHardReindeerDancingBaby-IICOoIsI1zm2ew-C",
        caption: "Cowboy snacking together with Teep",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/SuccessfulAmazonianSaladKappaClaus-HjUQkv1JfJXGJXfO",
        caption: "Luna and Teep crossfeeding time",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/WealthyGoodMeerkatResidentSleeper-BaYdeH91eODLxE9H",
        caption: "Luna and Teep stretchy time",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/NimbleTubularUdonPunchTrees-EkdZW9YxpFWWnIEY",
        caption: "Snowberry meets Teep",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/ToughCrackyPidgeonShadyLulu-H0Z-I_EbAVSonhMj",
        caption: "Snowberry grooming Teep",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/EnthusiasticPopularCoyotePMSTwin-Fq5cQqmopKeW1IxR",
        caption: "Teep eats feet",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/OriginalSmokyCattleTwitchRaid-K6p06fl5UJtpDpWP",
        caption: "Officer Teep arresting more suspects",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/PiercingPlausibleTildeTriHard-BbYzo8ITulaG_d_r",
        caption: "Teep tries the wheel",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/SpoopyHilariousPlumageEagleEye-pPvobJYY3I8F2kv7",
        caption: "Teep eats feet pt 2",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/SpunkyInnocentVelociraptorRlyTho-J26nGQEI3r_L65C2",
        caption: "I come with you!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/AbrasiveBeautifulCaterpillarSSSsss-zxsSN-oI5GO-QCai",
        caption: "Teep trying to ride Nascar Henry",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/MildBelovedTermiteOhMyDog-32zj5kn9mMNB-nxw",
        caption: "Officer Teep trying to arrest Henry",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/SillyFamousReindeerPhilosoraptor-on3zarb_1seWAGQ_",
        caption: "Officer Teep arresting Henry for speedcrimes",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/TenderLachrymoseTardigradeDatSheffy-Bdzbe45FQHd8pBS9",
        caption: "Officer Teep arresting Henry",
      },
    ],
    merch: null,
  },
  thelma: {
    name: "Thelma",
    wikipage: "Thelma",
    aliases: [],
    commands: ["thelma"],
    sex: "Female",
    birth: null,
    birthday: null,
    arrival: "2024-05-23",
    valhalla: null,
    playgroup: "genpop",
    summary:
      "Thelma is a rescue ferret of Snails House. She came to the rescue with her sister [[Louise]]. She is super playful and loves to climb her human caretakers for snuggles.",
    lore: "Thelma joined the rescue together with her sister, [[Louise]]. They came to the rescue as surrenders from the state of California.",
    clips: [
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/AdventurousInexpensiveAsteriskMau5-s0en0kqlUPGZjnax",
        caption: "Thelma playing with Mocha",
      },
    ],
    merch: null,
  },
  toby: {
    name: "Toby",
    wikipage: "Toby",
    aliases: ["Grandson"],
    commands: ["toby"],
    sex: "Male",
    birth: "2024-04-13",
    birthday: "04-13",
    arrival: "2024-10-16",
    valhalla: null,
    playgroup: "genpop",
    summary:
      "Toby is a rescue ferret of Snails House. He was a solo medical surrender from a pet store.",
    lore: "He is very playful and loves to chase and be chased during playtime.",
    clips: [
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/FastBeautifulPigeonLitFam-LBrwGMPzqTFicphq",
        caption: "Beans and Grandson moving the toob",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/FrigidPlainSoymilkCurseLit-bAiSsQv7OxuZPdp8",
        caption: "Cowboy duo sooping with Toby",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/FantasticStupidKathyHassaanChop-NAadm2YIjwauGc2L",
        caption: "Pickle playing with Grandson",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/AnnoyingRamshackleHareItsBoshyTime-b_8wK8eV0Q2bM9gj",
        caption: "Wardancing",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/MoldyCuriousDragonMcaT-3-gk-8pvxDsQFsO1",
        caption: "Nova presents: Toby",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/MuddyVainPuddingStoneLightning-4_kzeJl6_k923sCK",
        caption: "Toby embodiment of chaos",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/RockyBadWheelBleedPurple-yGi-0gTJRS7EVRQQ",
        caption: "Toby hiding in the spooder!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/ThirstyReliableSlothFutureMan-K6VD2bqdrM-XBfWP",
        caption: "Toebert Yeetus Attemptus",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/TsundereIgnorantMonkeyOneHand-JMNLD7AYT9I7DgVC",
        caption: "Toby being introduced",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/BlueGleamingLarkTBCheesePull-a2kGiWDzgYtHmZix",
        caption: "Toby checking out the paper bin with Beans",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/FunCooperativeSashimiTheRinger-jvtuoRZvFdKuSzJu",
        caption: "Toby playing with Beans",
      },
    ],
    merch: null,
  },
  torch: {
    name: "Torch",
    wikipage: "Torch",
    aliases: ["The brightest of flames"],
    commands: ["torch"],
    sex: "Male",
    birth: null,
    birthday: null,
    arrival: "2024-08-25",
    valhalla: "2025-10-31",
    playgroup: "valhalla",
    summary:
      "Torch is a rescue ferret of Snails House. He was surrendered to the rescue from a loving home in Montana. While he was a super playful and bouncy ferret, he truly loved getting snuggles with his human caretakers.",
    lore: `Torch was adopted from Montana and looked like a healthy and well looked after ferret. 

Torch was 6 years old and per his previous owner: "Torch tried to take down a newborn baby goat once like an apex predator"`,
    clips: [
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/AgreeableFaintBeeKappaWealth-OCw5ydzKb9d3VEVW",
        caption: "Torch fights Beans",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/TentativePolishedAppleTheRinger-PAFtQTY0IOq0waA7",
        caption: "Beans tries to free Torch from his prison",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/AntsyKindBarracudaSmoocherZ-V00T6UCREVSgu2Ud",
        caption: "Torch rice box play pt. 2",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/BlushingAgitatedEyeballCoolStoryBob-tdlbpBAsM1W5d1Dw",
        caption: "Torch plays with Shaye",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/BoxyToughPelicanAllenHuhu-_ZPXD322G6zmggbU",
        caption: "Torch ACTIVATE",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/CogentCoweringShieldBleedPurple-cSB-lO71Xy8eP2mr",
        caption: "Ricedancing",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/CredulousTiredPancakeBrainSlug-nKdOUw7I4Xa9Nn_o",
        caption: "Torch gets scritches!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/DependableEphemeralScallionAMPEnergyCherry-1-q0NkkN19V5TGa3",
        caption: "Torch being crazy",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/DeterminedThankfulSoybeanFUNgineer-Klqefft2HBbW0NXw",
        caption: "Torch playing ball and doing zooms",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/DreamyEvilSangTwitchRaid-w-tvb7pTYMQm1PeG",
        caption: "Torch exploring the mystery box",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/DullConfidentAppleRickroll-qWENkG1kxbSZyTDC",
        caption: "Torch toying around",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/FantasticBlushingClipzKeyboardCat-N7Mxif-TN_P86KRx",
        caption: "Torch plays Basket Game with Shaye",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/FineBombasticAubergineSSSsss-0xa8aCO3cyYivTiT",
        caption: "Helping Shaye clean up toys",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/FineRichCookiePeteZarollTie-FVa8eaXf5QcCXQqD",
        caption: "Torch and Thor play",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/GloriousTalentedAlmondMVGame-7uxD1c-OJ1mphh5D",
        caption: "Roomba Torch",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/HardTangibleCoffeeCharlieBitMe-NP6YQ7u2CHNlVNn7",
        caption: "Torch getting all the scritchies",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/HardTenderEggnogDxCat-21vZXDSKbDybWwMg",
        caption: "Torch hidden in jacket!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/HelplessFrozenTigerYouWHY-SsTkPaRFqV59Rs04",
        caption: "Toobing Torch",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/HonestTastyBorkRitzMitz-ZkCsWXTvj-5dLQBo",
        caption: "Couch smushes Torch",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/LachrymoseArbitraryEggnogStrawBeary-qIbeb0cP6P9INStl",
        caption: "Torch scoring some kibble",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/MoldyCloudyJackalOhMyDog-V1H106CMeDdE8tmm",
        caption: "Torch happy with the hoomans",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/PatientWanderingWalletPRChase-O24G2U9Rxaqugvdi",
        caption: "Torch extremely happy with Shaye",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/PhilanthropicKnottyMetalGivePLZ-mDVbsYfoNAJnOBge",
        caption: "Torch showing off new yoga pose",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/RenownedDepressedDurianKappaWealth-h25c0AT3UlDujw_E",
        caption: "Shaye teaching Torch how to read",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/RudeEnticingEmuUnSane-63RjYWsUYRCmrBA2",
        caption: "Torch investigating different food options",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/ShyAbstruseJamPermaSmug-Ad32Wp7kR0dteKll",
        caption: "Torch fights the rice box ghosts",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/SlickCharmingCockroachCurseLit-giE7LI_d4vcaPz_b",
        caption: "Torch noseballing",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/SmallCrackyPassionfruitHumbleLife-99LpX0akBGAEc9od",
        caption: "Torch spots hooman!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/SoftMoralTapirThunBeast-1l-LRI1jgzwQ24Wm",
        caption: "Torch playing minirug and Maddie",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/TardyDullOpossumPeteZaroll-J5zEzIVyuTgbUMAZ",
        caption: "Torch plays in rice box",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/TolerantPlainGorillaHeyGuys-P5AEvLd6FTl-_h1Y",
        caption: "Thor and Torch",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/TrustworthyShinyDragonflyRitzMitz-YiWr6_82rAg4v9QM",
        caption: "Torch and Shaye snuggles",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/VastCoweringPidgeonBloodTrail-kyuGoVdM6RsRWsaU",
        caption: "Torch scritchie on the stretcher",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/ViscousFunSalamanderHeyGuys-kuUGpBmKaT_ffjTm",
        caption: "Torch toobing back and forth",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/VivaciousSingleSandwichNomNom-A8rKcpGOTkNKLE_x",
        caption: "Torch plays with Shaye and blankets",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/YummyAffluentCodCopyThis-5FhDWegc_VnBwdBu",
        caption: "Torch soup",
      },
    ],
    merch: null,
  },
  tortilla: {
    name: "Tortilla",
    wikipage: "Tortilla",
    aliases: ["Tito", "Climber of all things"],
    commands: ["tortilla"],
    sex: "Male",
    birth: null,
    birthday: null,
    arrival: "2023-04-01",
    valhalla: null,
    playgroup: "genpop",
    summary:
      "Tortilla is a rescue ferret of Snails House. He was surrendered by a loving family as a solo ferret. He is a very clever ferret, who (when left to his own devices) will start climbing things for adventures!",
    lore: `Tortilla came to the rescue from a loving family as a surrender due to life circumstances beyond the owners control. Because he can sometimes get bored easily, he will often times try to climb things he shouldn't. He is always confused as to why his plans for adventure get foiled by the human caretakers.

He was the 7th ferret to join the rescue (yarr7).

For fun, Shaye allows the ferrets to impart wisdom upon the community. Tortilla typed "All 😍".`,
    clips: [
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/FitRelatedBaconCharlieBitMe-iNUpFLyr_radAF6q",
        caption: "Tortilla and Chili Attempt Climb",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/BenevolentKnottyPancakeTheTarFu-aCO80-Q1vqTS27Tf",
        caption: "No climbing for you",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/CrepuscularBreakableWebLitFam-hU54HDmLCgNErRqz",
        caption: "Tortilla Plays Noseball",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/FantasticMiniatureOrcaBibleThump-hEzIu6Tsvy0i0ZhF",
        caption: "Tito sneaky climber!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/MuddyHonorablePandaLeeroyJenkins-_KiESWGvqoR7VV5Y",
        caption: "Tortilla Successfully Escapes!",
      },
      {
        url: "https://www.twitch.tv/piratesoftware/clip/EphemeralOnerousLyrebirdBuddhaBar-pnQFxi8J62q6xwZW",
        caption: "Tortilla on Thor stream",
      },
    ],
    merch: null,
  },
  vincent: {
    name: "Vincent",
    wikipage: "Vincent",
    aliases: ["Vinny", "The scrappy Fighter"],
    commands: ["vincent"],
    sex: "Male",
    birth: null,
    birthday: null,
    arrival: "2023-11-19",
    valhalla: null,
    playgroup: "vons",
    summary:
      "Vincent is a rescue ferret of Snails House. He came to the rescue as an owner surrender due to medical needs. He now enjoys playtime with his friends [[Onion]], [[Nacho]], and [[Salsa]]. He is super active and playful with his friends. His coat pattern and eye color is a rarer combination of a white blaze on his head, white paws, and dark red eyes.",
    lore: "Vinny's origin story is quite grim and caused Thor to consume a pumpkin pie with his bare hands in the middle of the night at a USPS parking lot. * He is missing one of his ears, which caused Shaye to name him after Vincent Van Gogh. This is also because he is bonded to Shaye because of his Waardenburg Syndrome.",
    clips: [
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/PlumpWildChoughBudBlast-YT_YeNUseiyw0guq",
        caption: "Vinny after a shower with Kyo zooming by",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/BloodyBlindingTireTheRinger-1LH-J9nCPLGgqyft",
        caption: "Vinny and Mistoff playing",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/SuspiciousTriangularNigiriWOOP-N5OZtFHsFBKxrRNs",
        caption: "Vinny and Nacho play in the rice bin",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/BoredCleanHummingbirdFailFish-iJXk9ZgrvQQ5uOAt",
        caption: "Dancing with Shaye",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/ChillyInspiringFlyGOWSkull-Ci6IkPaCM22t3gkJ",
        caption: "Shaye teases Vinny",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/ColdbloodedZealousElkOSsloth-T12t0zzPB19ChUKT",
        caption: "Playing with Maddie",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/FriendlyAstuteNewtOSkomodo-LhO6RVcQq7BGylg8",
        caption: "Diggy time with Vinny",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/GentleFuriousSwanFutureMan--NkdNnJZRTzCg2Mq",
        caption: "Vinny bonked with Ball Toy",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/GiftedDepressedNarwhalPeanutButterJellyTime-ngU-nMhnaQCGBjRZ",
        caption: "Vinny Tail Wiggles!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/InquisitiveModernRamenTBTacoLeft-Yx9NVVw2HI3cuiZE",
        caption: "Tail speed wiggle",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/LaconicPlainDugongGOWSkull-APeuRvhK-NaLGBBj",
        caption: "Vinny and Shaye play in the toob and tail wiggles!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/PowerfulSecretiveSashimiWutFace-dSZVDR_sByisn56U",
        caption: "Vinny climbs, falls, and lickas!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/SmellyLivelyGarageKappaClaus-a7tj9CV3fr3IW0Cp",
        caption: "Vinny diving under the ballpit",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/TastyZealousVulturePraiseIt-MxFQuZ_bPs77PDTM",
        caption: "Thor gives Vinny Uppies Cuddles",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/TenuousAnnoyingBaconOSkomodo-zuHClwEqpK50FqXI",
        caption: "Vinny the goober",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/ToughOnerousCroquetteCoolStoryBob-_fifPK2y2HkvWPl8",
        caption: "Wardance drive-by",
      },
      {
        url: "Vincent_playtime_qt.mp4",
        caption: "Vincent solo playtime during Quarantine",
      },
    ],
    merch: null,
  },
  whiskey: {
    name: "Whiskey",
    wikipage: "Whiskey",
    aliases: ["The perfect blend"],
    commands: ["whiskey"],
    sex: "Male",
    birth: null,
    birthday: null,
    arrival: "2024-02-23",
    valhalla: null,
    playgroup: "genpop",
    summary:
      "Whiskey is a rescue ferret of Snails House. He came to the rescue with his friends [[Kahlua]], [[Mai Tai]], [[Mimosa]] and [[Scotch]]. He is a super active ferret who loves to play with toys and enjoys stashing them.",
    lore: `Came to the rescue together with [[Kahlua]], [[Mai Tai]], [[Mimosa]] and [[Scotch]] from a loving home. Their owner had to give them up due to life circumstances. Due to their names, they are also known as the alcohol crew.

For fun, Shaye allows the ferrets to impart wisdom upon the ccommunity. Whiskey typed "((o.o)".`,
    clips: [
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/ArtisticComfortableYakinikuTheThing-wU4aeXcA7RZkFXR5",
        caption: "Whiskey close up",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/ConsiderateSmallDunlinPanicBasket-x3oZLZCYBaiQcEWi",
        caption: "Hiding more toys!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/CulturedEagerWoodcockMoreCowbell-eEg2z8nkNGWxF14S",
        caption: "Toobing time!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/InspiringEvilPangolinCoolStoryBro-0JsCiUrc-QgwIz1F",
        caption: "Ballpit time!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/SarcasticTolerantGazelleLeeroyJenkins-EvyQtbWHzeIVGFZP",
        caption: "Whiskey loves the sock!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/SmoothSincereKuduShazBotstix-vfyN7Bwr2voU5oz2",
        caption: "Taking the toys for the stocking!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/VibrantHelplessSharkAllenHuhu-A8rMD54sA7hvkarN",
        caption: "Whiskey introduction",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/PunchyAnnoyingClipsmomYouWHY-sfuTNCLSzYCH84h-",
        caption: "Whiskey and Mouse playing with the sock!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/TacitSeductiveMinkPJSalt-jmpPU4MwohBsAE4X",
        caption: "Whiskey and Mouse battle!",
      },
    ],
    merch: null,
  },
  zero: {
    name: "Zero",
    wikipage: "Zero",
    aliases: ["Hero", "Grandpa, Peepaw, huge cuddle bug, sleeps everywhere"],
    commands: ["zero"],
    sex: "Male",
    birth: null,
    birthday: null,
    arrival: "2023-06-07",
    valhalla: "2024-07-02",
    playgroup: "valhalla",
    summary: "Category:Ferrets lacking intro",
    lore: "Zero was originally surrendered because his owner was unable to financially pursue treatment for his tumors, adrenal disease and insulinoma.",
    clips: [
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/GeniusResoluteKathyVoteYea-zhQRBXdC6jFxxFJq",
        caption:
          "Grandpa and Eddie nomming soup. Jinx investigates the tuna can",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/TenderPluckyHornetBCWarrior-e6D6lQ1pgOHlvM8S",
        caption: "Jinx wants to play with Grandpa",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/AlluringLazyMonitorBlargNaut-5MBoelvX5WMDGi0G",
        caption: "You have defeated me! Now I sleep!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/AstuteTenaciousFriesHassaanChop-cZtsKSkQCy-1KDpN",
        caption: "Greeting the younglings",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/GeniusBovineSalsifyPMSTwin-Wptst0Q3Wvk83YZe",
        caption: "Doing some ol' fashion investigating!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/HonorableCaringCurryCorgiDerp-I5fN8l6zd2OqohDQ",
        caption: "Bloodsugar check",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/LachrymoseBlightedTirePMSTwin-n71oE4-0zL4DipBX",
        caption: "Shaye cuddling with Zero / [[Zero|Grandpa]]",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/OddFunDumplingsWTRuck-qKKcWZGjdDLMiue1",
        caption: "Investigating pocket blanky",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/PerfectProtectiveHawkTooSpicy-Mq-VM0MKEzFBsY4Z",
        caption: "Toobing time",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/PuzzledWittyShieldPogChamp-YF1EkJuESwYqE2wL",
        caption: "Wobble Wobble",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/RichResilientAnacondaMau5-5tu_2xyFuDW6w5VD",
        caption: "Grandpa creates a traffic jam",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/RoundSweetChinchillaNononoCat-BJLwF4bj7YsfEDfW",
        caption: "Looking for a place to nap after exhausting sleep!",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/SuspiciousEvilChickenItsBoshyTime-KqYBANpupBd0esZl",
        caption: "Grandpa digs in the paper bin",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/TentativeEnchantingTapirSoonerLater-JkF_sbKruuhBqcYW",
        caption: "This is my sleeping spot now",
      },
      {
        url: "Zero_Ricepit.mp4",
        caption: "Zero playing in Rice-Box",
      },
      {
        url: "https://www.twitch.tv/ferretsoftware/clip/SteamyAntsyClamHumbleLife-8v2n-0eNYc44pNpp",
        caption: "Grandpa chilling with Henry in the frogbed",
      },
    ],
    merch: null,
  },
} as const satisfies Record<string, Ferret>;

export type Ferrets = typeof ferrets;

export type FerretKey = keyof Ferrets;

const ferretKeys = Object.keys(ferrets) as FerretKey[];

export const isFerretKey = (str: string): str is FerretKey =>
  ferretKeys.includes(str as FerretKey);

export default ferrets;
