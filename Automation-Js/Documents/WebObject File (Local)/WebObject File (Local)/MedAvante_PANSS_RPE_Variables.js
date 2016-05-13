/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
//
// PANSS_RPE_Variables
//
// RPE-specific variables (not scale-specific)
//
//
// Last updated: 05May2014
//
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////

// Language references
var nLanguages = parent.nLanguages;
var EN = parent.getLanguageIndex("EN");
var CS = parent.getLanguageIndex("CS");
var DA = parent.getLanguageIndex("DA");
var NL = parent.getLanguageIndex("NL");
var FI = parent.getLanguageIndex("FI");
var FR = parent.getLanguageIndex("FR");
var DE = parent.getLanguageIndex("DE");
var HU = parent.getLanguageIndex("HU");
var IT = parent.getLanguageIndex("IT");
var JA = parent.getLanguageIndex("JA");
var KO = parent.getLanguageIndex("KO");
var NO = parent.getLanguageIndex("NO");
var PT = parent.getLanguageIndex("PT");
var ES = parent.getLanguageIndex("ES");
var TR = parent.getLanguageIndex("TR");
var RO = parent.getLanguageIndex("RO");
var RU = parent.getLanguageIndex("RU");
var PL = parent.getLanguageIndex("PL");
var BG = parent.getLanguageIndex("BG");
var ET = parent.getLanguageIndex("ET");


// RPE Parameters
var nRPEs = 2;

var goldStdPositive = new Array(nRPEs+1);
var goldStdNegative = new Array(nRPEs+1);
var goldStdGeneral = new Array(nRPEs+1);
var goldStdTotal = new Array(nRPEs+1);

goldStdPositive[1] = 21;
goldStdNegative[1] = 12;
goldStdGeneral[1] = 40;
goldStdTotal[1] = 73;

goldStdPositive[2] = 19;
goldStdNegative[2] = 15;
goldStdGeneral[2] = 41;
goldStdTotal[2] = 75;

// Criterion scores
var goldStandard = parent.make2dArray(nRPEs+1);
goldStandard[1][1] = 4;
goldStandard[1][2] = 2;
goldStandard[1][3] = 4;
goldStandard[1][4] = 3;
goldStandard[1][5] = 1;
goldStandard[1][6] = 4;
goldStandard[1][7] = 3;
goldStandard[1][8] = 3;
goldStandard[1][9] = 3;
goldStandard[1][10] = 1;
goldStandard[1][11] = 1;
goldStandard[1][12] = 1;
goldStandard[1][13] = 1;
goldStandard[1][14] = 2;
goldStandard[1][15] = 3;
goldStandard[1][16] = 5;
goldStandard[1][17] = 3;
goldStandard[1][18] = 4;
goldStandard[1][19] = 2;
goldStandard[1][20] = 1;
goldStandard[1][21] = 1;
goldStandard[1][22] = 1;
goldStandard[1][23] = 3;
goldStandard[1][24] = 1;
goldStandard[1][25] = 1;
goldStandard[1][26] = 4;
goldStandard[1][27] = 2;
goldStandard[1][28] = 3;
goldStandard[1][29] = 2;
goldStandard[1][30] = 4;

goldStandard[2][1] = 4;
goldStandard[2][2] = 1;
goldStandard[2][3] = 5;
goldStandard[2][4] = 1;
goldStandard[2][5] = 2;
goldStandard[2][6] = 4;
goldStandard[2][7] = 2;
goldStandard[2][8] = 3;
goldStandard[2][9] = 1;
goldStandard[2][10] = 2;
goldStandard[2][11] = 3;
goldStandard[2][12] = 1;
goldStandard[2][13] = 2;
goldStandard[2][14] = 3;
goldStandard[2][15] = 2;
goldStandard[2][16] = 4;
goldStandard[2][17] = 4;
goldStandard[2][18] = 3;
goldStandard[2][19] = 4;
goldStandard[2][20] = 1;
goldStandard[2][21] = 1;
goldStandard[2][22] = 2;
goldStandard[2][23] = 4;
goldStandard[2][24] = 1;
goldStandard[2][25] = 1;
goldStandard[2][26] = 4;
goldStandard[2][27] = 3;
goldStandard[2][28] = 1;
goldStandard[2][29] = 3;
goldStandard[2][30] = 3;

var incorrectFeedback = parent.make3dArray(nRPEs+1, nLanguages+1);
incorrectFeedback[1][EN][1] = "Subject presents with a kaleidoscopic array of poorly formed and unstable delusions including suspicious/persecutory thoughts that people judge him, accuse him of crimes and use innuendo against him. He believes other talks about him and are being critical.";
incorrectFeedback[1][EN][2] = "Slight difficulty expressing thoughts at times.Questionable.";
incorrectFeedback[1][EN][3] = "Subject reported daily hallucinations that he hears clearly. He does not have full delusional conviction and his behavior is minimally affected.";
incorrectFeedback[1][EN][4] = "Subject appeared mildly agitated at various points in the interview.Reported by informant as Mild";
incorrectFeedback[1][EN][5] = "Subject denied any grandiose feelings or beliefs.";
incorrectFeedback[1][EN][6] = "The subject is distrustful and suspicious of others. He evidenced loosely formed persecutory delusions that people judge him, accuse him of crimes, and use innuendo against him when speaking to him.";
incorrectFeedback[1][EN][7] = "Subject reported being irritable and acting on it by littering and making angry faces at others. The informant also rated this item as mild.";
incorrectFeedback[1][EN][8] = "Subject's affect was blunted at various times during the interview. He was observed to be angry and laugh occasionally so a higher rating would not be warranted.";
incorrectFeedback[1][EN][9] = "Subject reported involvement in activities over the week(gym,music,and library).The informant rated this item as mild.";
incorrectFeedback[1][EN][10] = "Subject was open and had good rapport with the interviewer.";
incorrectFeedback[1][EN][11] = "Informant checklist rated this item as absent. Subject reports a desire to interact with people and that he initiates conversations. He does not engage more due to fear and suspiciousness rather than lack of interest.";
incorrectFeedback[1][EN][12] = "The subject demonstrated ability to think abstractly throughout the interview and during the similarities and proverbs section of the interview.";
incorrectFeedback[1][EN][13] = "No difficulty producing speech observed.";
incorrectFeedback[1][EN][14] = "The subject evidenced some focus on recurring themes related to his suspiciousness and persecution but was able to shift without difficulty.";
incorrectFeedback[1][EN][15] = "The subject complained of general health concerns related to aging, a lingering cough, and a toe fungus.";
incorrectFeedback[1][EN][16] = "The subject endorsed anxiety close to panic which impacts his appetite in that he eats a lot more than usual. He spoke of his anxiety throughout the interview.";
incorrectFeedback[1][EN][17] = "The subject reported a number of things that he feels guilty about but indicated that these did not bother him in the past week.";
incorrectFeedback[1][EN][18] = "Tension was manifest by the subject's nervous appearance throughout the interview.";
incorrectFeedback[1][EN][19] = "The subject appeared slightly odd at times due to his posture but this was not prominent enough for a higher rating.";
incorrectFeedback[1][EN][20] = "The subject denied depression over the last week.";
incorrectFeedback[1][EN][21] = "The subject's movement and speech were within normal limits.";
incorrectFeedback[1][EN][22] = "The subject was cooperative throughout the interview and answered all questions.";
incorrectFeedback[1][EN][23] = "The subject's suspiciousness and delusions are poorly formed and were not bizarre.";
incorrectFeedback[1][EN][24] = "Subject was fully oriented and responded to all orientation questions correctly.";
incorrectFeedback[1][EN][25] = "Subject maintained attention throughout the interview.";
incorrectFeedback[1][EN][26] = "The subject is aware of the diagnosis and some of the symptoms of his illness.However, he is not insightful about his suspiciousness and delusional thoughts. While he is willing to concede that his suspicions may be inaccurate, he highly doubts this.";
incorrectFeedback[1][EN][27] = "There are some internal inconsistencies in the subject's report such as denying irritability but later reporting that he often feels anger and acts on this.";
incorrectFeedback[1][EN][28] = "Subject reports that he litters and makes angry faces when he is angry. The informant also rated this item as mild.";
incorrectFeedback[1][EN][29] = "The subject was slightly self-absorbed at times during the interview.";
incorrectFeedback[1][EN][30] = "The informant rated this item as moderate. The subject reported being afraid of people and avoiding activities with others due to his suspiciousness and fear of being judged.";

incorrectFeedback[2][EN][1] = "The subject reported delusions of being Jesus, thought broadcasting and the &quot;entity&quot; being real. These beliefs have emotional and behavioral impact  as they led the subject to avoid people.";
incorrectFeedback[2][EN][2] = "The subject's speech was clear and coherent with no evidence of circumstantiality or tangentially.";
incorrectFeedback[2][EN][3] = "The subject reported daily auditory hallucinations for which she has a delusional interpretation and emotional response. Olfactory hallucinations were reported as well.";
incorrectFeedback[2][EN][4] = "No psychomotor agitation was observed during the interview. The subject's movements attributed to anxiety are captured under tension (G4).";
incorrectFeedback[2][EN][5] = "Although the subject has delusions of special status (being Jesus) there is no exaggerated self-opinion and she feels that she is not doing a good job and has been letting people down rather than feeling grandiose.";
incorrectFeedback[2][EN][6] = "The subject endorses a delusion about the entity causing her illness and symptoms. She was guarded at times and reportedly avoided others due to people being mad at her for not being &quot;Jesus enough&quot;.";
incorrectFeedback[2][EN][7] = "The subject acknowledged some internal irritability during the past week. However, she did not express anger toward others and this was not noted by the informant so her irritability may not have been noticeable to others.";
incorrectFeedback[2][EN][8] = "The subject's affect was blunted at various times during the interview. This was not to an extent that would warrant a higher rating as she was able to spontaneously smile and exhibited voice inflection during the interview.";
incorrectFeedback[2][EN][9] = "The subject reportedly engaged in a number of activities during the past week, including coffee with friends, music, and gardening.";
incorrectFeedback[2][EN][10] = "The subject's rapport was generally good with only occasional lack of eye contact. This did not disrupt the interview.";
incorrectFeedback[2][EN][11] = "The informant rated this item as mild. There were a couple of occasions where the subject did not wish to engage with others over the last week.";
incorrectFeedback[2][EN][12] = "The subject was able to provide abstract responses to each of the similarities and proverbs and did not demonstrate concrete thinking in the interview. Recall that this item is not rated based on whether or not the subject's response to proverbs is &quot;correct&quot; but on whether or not the subject demonstrates abstract thinking.";
incorrectFeedback[2][EN][13] = "The subject needed occasional prompts to respond which may indicate some lack of spontaneity. This did not have a substantial impact on the interview.";
incorrectFeedback[2][EN][14] = "Many of the subject's responses revolved around delusional themes regarding the &quot;entity&quot; and being Jesus. However, she was able to shift to other topics with little difficulty.";
incorrectFeedback[2][EN][15] = "The subject reported no physical complaints but believes that she is not in great health due to smoking and not exercising. Her belief of being pregnant with Jesus was not counted as she did not have delusional conviction.";
incorrectFeedback[2][EN][16] = "The subject reported some anxiety related to people coming up to her because of her being Jesus. This has had some interference with sleep and appetite over the last week.";
incorrectFeedback[2][EN][17] = "The subject refused to talk about an event in her life but expressed clear guilt about it and admitted that it has bothered her in the past week. She is not preoccupied with it, however.";
incorrectFeedback[2][EN][18] = "The subject did appear to be fidgeting at times during the interview, particularly when discussing topics that made her anxious.";
incorrectFeedback[2][EN][19] = "The subject manifested unnatural hand movements throughout the interview. She also exhibited odd lip movements at times. The informant also rated this item as moderate.";
incorrectFeedback[2][EN][20] = "The subject denied any feelings of sadness or depression over the last week.";
incorrectFeedback[2][EN][21] = "The subject's speech and movements appeared to be within normal range.";
incorrectFeedback[2][EN][22] = "The subject was generally cooperative but did refuse to discuss the content of her guilt feelings.";
incorrectFeedback[2][EN][23] = "The subject presented with many strange ideas/delusions such as the existence on an Entity, her thoughts being broadcast, being Jesus, and being pregnant with the antichrist.";
incorrectFeedback[2][EN][24] = "The subject was fully oriented during the interview.";
incorrectFeedback[2][EN][25] = "There was no evidence of poor attention throughout the interview.";
incorrectFeedback[2][EN][26] = "The subject is currently delusional and has varying insight into their symptoms. While she is able to label her symptoms as &quot;delusions&quot; she still believes that the &quot;entity&quot; is real and that this is what causes her symptoms.";
incorrectFeedback[2][EN][27] = "There were minor, occasional instances of indecisiveness. For instance, there were two occasions where the subject reached for the coffee cup and appeared to change her mind and stop.";
incorrectFeedback[2][EN][28] = "No difficulties with impulse control reported or noted.";
incorrectFeedback[2][EN][29] = "The subject's answers and emotional responses during the interview all related to delusional themes. She appeared to look to the side of the room at times and reported hearing voices during the interview, which indicates some level of internal preoccupation.";
incorrectFeedback[2][EN][30] = "The informant rated this item as mild and the subject reported some avoidance of others due to suspiciousness and fear.";

// ET placeholder
incorrectFeedback[1][ET][1] = "Uuringus osalejal esineb palju erinevaid väljakujunemata ja ebapüsivaid luulusid, sealhulgas kahtlustus-/tagakiusamismõtted selle kohta, et inimesed arvustavad teda, süüdistavad teda kuritegudes ja teevad vihjeid. Ta arvab, et teised räägivad temast selja taga ja on kriitilised.";
incorrectFeedback[1][ET][2] = "Aeg-ajalt esineb raskusi mõtete väljendamisel. Küsitav.";
incorrectFeedback[1][ET][3] = "Uuringus osaleja teatas igapäevastest hallutsinatsioonidest, mida ta kuuleb selgelt. Tal ei ole täielikku luululist veendumust ja luulud mõjutavad tema käitumist minimaalselt.";
incorrectFeedback[1][ET][4] = "Uuringus osaleja näis intervjuu eri hetkedel veidi rahutu. Infoandja andis jaotisele hinnangu „Nõrk“.";
incorrectFeedback[1][ET][5] = "Uuringus osaleja eitas suurusluuluga seotud tunnete või veendumuste olemasolu.";
incorrectFeedback[1][ET][6] = "Uuringus osaleja ei usalda teisi ja kahtlustab neid. Ta kinnitas ebamääraseid tagakiusamisluulusid, mis väljendusid arusaamas, et inimesed teda arvustavad, süüdistavad teda kuritegudes ja teevad temaga rääkides vihjeid.";
incorrectFeedback[1][ET][7] = "Uuringus osaleja tunnistas, et ta on olnud ärrituv ja selle mõjul asju segamini ajanud ja vaadanud teisi vihase näoga. Ka infoandja andis sellele jaotisele hinnangu „Nõrk“.";
incorrectFeedback[1][ET][8] = "Uuringus osaleja ilmutas intervjuu eri hetkedel emotsioonide tuimenemist. Võis näha, et ta vihastab ja ajuti naerab ning seepärast ei oleks kõrgem hinnang õigustatud.";
incorrectFeedback[1][ET][9] = "Uuringus osaleja teatas, et ta on sel nädalal osalenud tegevustes (spordisaal, muusika ja raamatukogu). Infoandja andis sellele jaotisele hinnangu „Nõrk“.";
incorrectFeedback[1][ET][10] = "Uuringus osaleja oli aval ja tal tekkis intervjueerijaga hea kontakt.";
incorrectFeedback[1][ET][11] = "Infoandja meelespea järgi oli selle jaotise hinnanguks „Puudub“. Uuringus osaleja tunnistab soovi suhelda teiste inimestega  ja seda, et ta on vestlusi alustanud. Ta ei tee seda rohkem pigem hirmu ja umbusklikkuse kui huvipuuduse tõttu.";
incorrectFeedback[1][ET][12] = "Uuringus osaleja näitas kogu intervjuu käigus ning selle sarnasuste ja vanasõnade seletamise osas oma abstraktse mõtlemise võimet.";
incorrectFeedback[1][ET][13] = "Kõneraskusi ei täheldatud.";
incorrectFeedback[1][ET][14] = "Uuringus osaleja ilmutas keskendumist korduvatele teemadele, mis seostusid tema kahtlustavuse ja tagakiusamismõtetega, aga teda oli võimalik raskusteta teisele teemale suunata.";
incorrectFeedback[1][ET][15] = "Uuringus osaleja kaebas oma üldise tervise üle seoses vananemise, pikaleveninud köha ja varba seenhaigusega.";
incorrectFeedback[1][ET][16] = "Uuringus osaleja kinnitas ärevust, mis on tugevuselt lähedane paanikale ja mõjutab tema söögiisu, mistõttu ta sööb palju rohkem kui tavaliselt. Ta rääkis oma ärevusest kogu intervjuu jooksul.";
incorrectFeedback[1][ET][17] = "Uuringus osaleja teatas mitmetest asjadest, mille tõttu ta end süüdi tunneb, ent tunnistas, et viimase nädala jooksul need teda ei häirinud.";
incorrectFeedback[1][ET][18] = "Pinge avaldus uuringus osaleja närvilises välimuses kogu intervjuu vältel.";
incorrectFeedback[1][ET][19] = "Uuringus osaleja tundus ajuti oma asendi tõttu veidi veider, aga see ei avaldunud nii tugevalt, et oleks õigustanud kõrgemat hinnangut.";
incorrectFeedback[1][ET][20] = "Uuringus osaleja eitas depressiooni esinemist viimasel nädalal.";
incorrectFeedback[1][ET][21] = "Uuringus osaleja liigutused ja kõne olid normi piirides.";
incorrectFeedback[1][ET][22] = "Uuringus osaleja oli kogu intervjuu jooksul koostööaldis ja vastas kõikidele küsimustele.";
incorrectFeedback[1][ET][23] = "Uuringus osaleja umbusklikkus ja luulud on nõrgalt välja kujunenud ja ei ole veidrad.";
incorrectFeedback[1][ET][24] = "Uuringus osaleja oli täiel määral orienteeritud ja vastas kõikidele orienteeritust käsitlevatele küsimustele õigesti.";
incorrectFeedback[1][ET][25] = "Uuringus osaleja säilitas kogu intervjuu vältel keskendumisvõime.";
incorrectFeedback[1][ET][26] = "Uuringus osaleja on oma diagnoosist ja haiguse sümptomitest teadlik. Ta ei mõista aga oma umbusklikkust ega luulumõtteid. Kuigi ta tahaks möönda, et tema umbusklikkus ei ole õigustatud, kahtleb ta selles sügavalt.";
incorrectFeedback[1][ET][27] = "Uuringus osaleja tunnistustes on mõningaid sisemisi vasturääkivusi, nagu ärrituvuse eitamine, aga hilisem möönmine, et ta tunneb sageli viha ja käitub selle mõjul.";
incorrectFeedback[1][ET][28] = "Uuringus osaleja teatab, et ta ajab vihane olles asju segamini ja teeb kurja nägu. Ka infoandja andis sellele jaotisele hinnangu „Nõrk“.";
incorrectFeedback[1][ET][29] = "Uuringus osaleja oli intervjuu ajal ajuti veidi endassesüvenenud.";
incorrectFeedback[1][ET][30] = "Infoandja andis sellele jaotisele hinnangu „Mõõdukas“. Uuringus osaleja teatas, et ta kardab inimesi ja väldib ühistegevusi oma kahtlustavuse ja hirmu tõttu sattuda teiste kriitika alla.";

incorrectFeedback[2][ET][1] = "Uuringus osaleja teatas luuludest, et ta on Jeesus, kuulutab sõnumit ja et tema „olemus“ on päriselt olemas. Neil veendumustel on emotsionaalne ja käitumuslik mõju, kuna need sundisid uuringus osalejat inimesi vältima.";
incorrectFeedback[2][ET][2] = "Uuringus osaleja kõne oli selge ja loogiliselt seostatud ning tõendeid üksikasjalikkuse või kõrvalekalduvuse/hälbivuse kohta ei täheldatud.";
incorrectFeedback[2][ET][3] = "Uuringus osaleja teatas igapäevastest kuulmishallutsinatsioonidest, mille kohta tal oli luululine selgitus ja millele ta emotsionaalselt reageeris. Teatati ka haistmishallutsinatsioonidest.";
incorrectFeedback[2][ET][4] = "Psühhomotoorset rahutust intervjuu ajal ei täheldatud. Uuringus osaleja ärevusele omistatud liigutusi võeti arvesse pinge jaotises (G4).";
incorrectFeedback[2][ET][5] = "Ehkki uuringus osalejal on erilisi staatusega seotud luulusid (et ta on Jeesus), puudub  tal liigkõrge enesehinnang ja ta arvab pigem, et ta ei tee oma tööd hästi ja on inimesi alt vedanud, kui tunneb oma üleolekut.";
incorrectFeedback[2][ET][6] = "Uuringus osaleja kinnitab luule, mille järgi tema haiguse ja sümptomid on põhjustanud olemus. Ta oli ajuti valvas ja väidetavalt vältis teisi, kuna inimesed võivad vihastada seepärast, et ta ei ole piisavalt hea Jeesus";
incorrectFeedback[2][ET][7] = "Uuringus osaleja tundis viimase nädala jooksul mõningast sisemist ärrituvust. Siiski ei väljendanud ta oma viha teistele ning seda ei täheldanud ka infoandja, seega ei pruukinud tema ärrituvus olla teistele märgatav.";
incorrectFeedback[2][ET][8] = "Uuringus osaleja ilmutas intervjuu eri hetkedel emotsioonide tuimenemist. Seda ei esinenud aga määral, mis oleks õigustanud kõrgemat hinnangut, sest ta oli intervjuu ajal võimeline spontaanselt naeratama ja kasutama erinevaid häälevarjundeid.";
incorrectFeedback[2][ET][9] = "Uuringus osaleja teatas, et ta on viimase nädala jooksul osalenud mitmetes tegevustes, sealhulgas sõpradega kohvi joonud, muusikat kuulanud ja aiatöid teinud.";
incorrectFeedback[2][ET][10] = "Kontakt uuringus osalejaga oli üldiselt hea, ainult ajuti puudus silmside. See ei häirinud intervjuu kulgu.";
incorrectFeedback[2][ET][11] = "Infoandja andis sellele jaotisele hinnangu „Nõrk“. Viimasel nädalal ei soovinud uuringus osaleja paaril juhul teistega koos tegutseda.";
incorrectFeedback[2][ET][12] = "Uuringus osaleja suutis anda kõigile sarnasusi ja vanasõnu käsitlevatele küsimustele abstraktseid vastuseid ning ei ilmutanud intervjuu ajal konkreetsetes terminites mõtlemist. Meenutagem, et seda jaotist hinnatakse mitte selle järgi, kas uuringus osaleja vanasõnu puudutavale küsimusele antud vastus on „õige“ , vaid selle põhjal, kas uuringus osaleja ilmutab abstraktset mõtlemist.";
incorrectFeedback[2][ET][13] = "Uuringus osaleja vajas ajuti vastamiseks ergutust, mis võib viidata mõningasele spontaansuse vähesusele. Sellel ei olnud olulist mõju intervjuu kulule.";
incorrectFeedback[2][ET][14] = "Paljud uuringus osaleja vastustest keerlesid „olemuse“ ja Jeesuseks olemisega seotud luululiste teemade ümber. Siiski suutis ta oma tähelepanu raskusteta teistele teemadele ümber lülitada.";
incorrectFeedback[2][ET][15] = "Uuringus osaleja teatas füüsilistest kaebustest, aga ta arvab, et tema tervis pole piisavalt hea suitsetamise ja vähese kehalise treeningu tõttu. Tema veendumust, et ta on rase ja kannab Jeesust, ei võetud arvesse, sest tal puudus luululine veendumus";
incorrectFeedback[2][ET][16] = "Uuringus osaleja teatas mõningasest ärevusest, mis seostus sellega, et inimesed võivad tema poole pöörduda, kuna ta on Jeesus. See häiris viimasel nädalal veidi tema und ja söögiisu. ";
incorrectFeedback[2][ET][17] = "Uuringus osaleja keeldus rääkimast ühest sündmusest oma elus, aga väljendas selle pärast selget süütunnet ja möönis, et see on teda viimasel nädalal häirinud. See ei ole aga teda ülemääraselt haaranud.";
incorrectFeedback[2][ET][18] = "Näis, et uuringus osaleja intervjuu käigus ajuti niheleb, eriti siis, kui arutati teda närviliseks tegevaid teemasid.";
incorrectFeedback[2][ET][19] = "Uuringus osaleja ilmutas intervjuu ajal ebaloomulikke käeliigutusi. Samuti võis ajuti märgata veidraid huuleliigutusi. Ka infoandja andis sellele jaotisele hinnangu „Mõõdukas“.";
incorrectFeedback[2][ET][20] = "Uuringus osaleja eitas kurbuse või depressiooni esinemist viimasel nädalal.";
incorrectFeedback[2][ET][21] = "Uuringus osaleja kõne ja liigutused näisid olevat normi piirides.";
incorrectFeedback[2][ET][22] = "Uuringus osaleja oli üldiselt koostööaldis, aga keeldus arutamast oma süütunde sisu.";
incorrectFeedback[2][ET][23] = "Uuringus osaleja väljendas mitmeid kummalisi ideid/luule, nagu „olemuse“ eksisteerimine, sõnumi kuulutamise mõtted, Jeesuseks olemine ning rasedus ja antikristuse kandmine.";
incorrectFeedback[2][ET][24] = "Uuringus osaleja oli intervjuu ajal täielikult orienteeritud.";
incorrectFeedback[2][ET][25] = "Kogu intervjuu ajal ei märgatud tõendeid halva tähelepanuvõime kohta.";
incorrectFeedback[2][ET][26] = "Uuringus osalejal on käesoleval ajal luulud ja tema arusaam oma sümptomitest varieerub. Ehkki ta suudab nimetada oma sümptomeid luuludeks, usub ta siiski, et „olemus“ on päriselt olemas ja põhjustab tema sümptomeid.";
incorrectFeedback[2][ET][27] = "Ajuti esines nõrgalt väljendunud otsustamatuse juhte. Näiteks sirutas uuringus osaleja kahel korral käe kohvitassi poole, aga näis ümber mõtlevat ja peatus.";
incorrectFeedback[2][ET][28] = "Impulsikontrolli raskustest ei teatatud ning neid ei täheldatud.";
incorrectFeedback[2][ET][29] = "Kõik uuringus osaleja vastused ja emotsionaalsed reaktsioonid uuringu jooksul olid seotud luululiste teemadega. Ta näis intervjuu ajal ajuti vaatavat toa teise serva ja teatas, et ta kuuleb hääli, mis viitab teatud sisemisele hõivatusele.";
incorrectFeedback[2][ET][30] = "Infoandja andis sellele jaotisele hinnangu „Nõrk“ ja teatas mõningasest teiste vältimisest kahtlustavuse ja hirmu tõttu.";

// DA placeholder
// NL placeholder
// FI placeholder
incorrectFeedback[1][FI][1] = "Tutkittavalla on vaihteleva määrä heikosti muodostuneita ja epävakaita harhaluuloja sekä epäluuloisia/vainoharhaisia ajatuksia siitä, että ihmiset tuomitsevat hänet, syyttävät häntä rikoksista ja esittävät häntä koskevia vihjailuja. Hän uskoo, että muut puhuvat hänestä ja ovat kriittisiä häntä kohtaan.";
incorrectFeedback[1][FI][2] = "Toisinaan lievää vaikeutta ilmaista ajatuksia. Epävarma.";
incorrectFeedback[1][FI][3] = "Tutkittava ilmoitti päivittäisistä harha-aistimuksista, jotka hän kuulee selvästi. Hänellä ei ole täyttä harhaluuloista vakuuttuneisuutta, ja vaikutus käyttäytymiseen on vain vähäistä.";
incorrectFeedback[1][FI][4] = "Tutkittava vaikuttaa lievästi levottomalta haastattelun useissa kohdissa. Informantin ilmoituksen mukaan lievä.";
incorrectFeedback[1][FI][5] = "Tutkittava kielsi kaikki suuruusharhaiset tunteet tai uskomukset.";
incorrectFeedback[1][FI][6] = "Tutkittava on epäluuloinen ja epäileväinen muita kohtaan. Hänellä ilmeni heikosti muotoiltuja vainoharhoja siitä, että ihmiset tuomitsevat hänet, syyttävät häntä rikoksista ja esittävät häntä koskevia vihjailuja hänestä puhuessaan.";
incorrectFeedback[1][FI][7] = "Tutkittava ilmoitti olevansa ärtyisä ja reagoivansa siihen sekoittamalla paikkoja ja ilmeilemällä vihaisesti muille. Myös informantti pisteytti tämän kohdan lieväksi.";
incorrectFeedback[1][FI][8] = "Tutkittavan tunneilmaisu oli vähentynyt useina hetkinä haastattelun aikana. Hänen havaittiin olevan vihainen ja nauravan toisinaan, joten suurempi pistemäärä ei ollut aiheellinen.";
incorrectFeedback[1][FI][9] = "Tutkittava ilmoitti osallistuneensa toimintoihin viikon aikana (kuntosali, musiikki ja kirjasto). Informantti pisteytti tämän kohdan lieväksi.";
incorrectFeedback[1][FI][10] = "Tutkittava oli avoin ja hyvässä yhteisymmärryksessä haastattelijan kanssa.";
incorrectFeedback[1][FI][11] = "Informantin tarkistuslistassa tämä kohta pisteytettiin puuttuvaksi. Tutkittava ilmoittaa halusta olla kanssakäymisessä ihmisten kanssa ja aloittavansa keskusteluja. Hän ei ole osallistuvampi ennemminkin pelon ja epäluuloisuuden takia kuin kiinnostuksen puutteesta.";
incorrectFeedback[1][FI][12] = "Tutkittava osoitti kykyä abstraktiiin ajatteluun läpi koko haastattelun sekä haastattelun samankaltaisuuksia ja sananlaskuja sisältävässä osiossa.";
incorrectFeedback[1][FI][13] = "Puheen tuottamisessa ei havaittu mitään vaikeuksia.";
incorrectFeedback[1][FI][14] = "Tutkittavalla ilmeni jonkinasteista keskittymistä toistuviin aiheisiin, jotka liittyivät hänen epäluuloisuuteensa ja vainoharhoihinsa, mutta hän pystyi vaihtamaan aihetta vaikeuksitta.";
incorrectFeedback[1][FI][15] = "Tutkittava valitti yleisistä terveyshuolista, jotka liittyivät ikääntymiseen, pitkittyneeseen yskään ja varvassieneen.";
incorrectFeedback[1][FI][16] = "Tutkittava ilmoitti paniikkia lähenevästä ahdistuneisuudesta, joka vaikuttaa hänen ruokahaluunsa siten, että hän syö paljon enemmän kuin tavallisesti. Hän puhui ahdistuneisuudestaan läpi koko haastattelun.";
incorrectFeedback[1][FI][17] = "Tutkittava ilmoitti monta asiaa, joista hän tuntee syyllisyyttä, mutta kertoi, että nämä eivät vaivanneet häntä viime viikon aikana.";
incorrectFeedback[1][FI][18] = "Jännittyneisyys oli ilmeistä tutkittavan hermostuneesta vaikutelmasta koko haastattelun ajan.";
incorrectFeedback[1][FI][19] = "Tutkittava vaikutti toisinaan hieman oudolta asennostaan johtuen, mutta tämä ei ollut niin merkittävää, että se oikeuttaisi suurempaan pistemäärän.";
incorrectFeedback[1][FI][20] = "Tutkittava kielsi olleensa masentunut viime viikon aikana.";
incorrectFeedback[1][FI][21] = "Tutkittavan liikkuminen ja puhe olivat normaalin rajoissa.";
incorrectFeedback[1][FI][22] = "Tutkittava oli yhteistyöhaluinen koko haastattelun ajan ja vastasi kaikkiin kysymyksiin.";
incorrectFeedback[1][FI][23] = "Tutkittavan epäluuloisuus ja harhaluulot ovat heikosti muotoutuneita eivätkä eriskummallisia.";
incorrectFeedback[1][FI][24] = "Tutkittava oli täysin orientoitunut ja vastasi kaikkiin orientaatiokysymyksiin oikein.";
incorrectFeedback[1][FI][25] = "Tutkittava säilytti tarkkaavaisuutensa koko haastattelun ajan.";
incorrectFeedback[1][FI][26] = "Tutkittava on tietoinen diagnoosistaan ja joistakin sairautensa oireista. Hänellä ei kuitenkaan ole näkemystä epäluuloisuudestaan ja harhaisista ajatuksistaan. Vaikka hän on halukas myöntämään, että hänen epäluulonsa eivät ehkä ole oikeita, hän epäilee tätä voimakkaasti.";
incorrectFeedback[1][FI][27] = "Tutkittavan kertomuksessa on joitakin sisäisiä epäjohdonmukaisuuksia, kuten ärtyneisyyden kieltäminen, mutta myöhemmin sen ilmoittaminen, että hän tuntee usein vihaisuutta ja reagoi sen mukaisesti.";
incorrectFeedback[1][FI][28] = "Tutkittava ilmoittaa, että hän sekoittaa paikkoja ja ilmehtii vihaisesti ollessaan vihainen. Myös informantti pisteytti tämän kohdan lieväksi.";
incorrectFeedback[1][FI][29] = "Tutkittava oli ajoittain hieman itseensä vetäytynyt haastattelun aikana.";
incorrectFeedback[1][FI][30] = "Informantti pisteytti tämän kohdan kohtalaiseksi. Tutkittava ilmoitti pelkäävänsä ihmisiä ja välttävänsä toimintoja muiden kanssa, koska on epäluuloinen ja pelkää arvostelua.";

incorrectFeedback[2][FI][1] = "Tutkittava kertoi harhaluuloista, jotka liittyivät Jeesuksena olemiseen, ajatusten lähettämiseen ja ”olion” olemassaolon todellisuuteen. Nämä uskomukset vaikuttavat tunteisiin ja käyttäytymiseen, sillä ne saivat tutkittavan välttelemään ihmisiä.";
incorrectFeedback[2][FI][2] = "Tutkittavan puhe oli selkeää ja johdonmukaista, eikä merkkejä yksityiskohtiin takertumisesta tai ajatusten harhailusta esiintynyt.";
incorrectFeedback[2][FI][3] = "Tutkittava ilmoitti päivittäisistä kuuloharhoista, jotka hän tulkitsi harhaisesti ja emotionaalisesti. Hän ilmoitti myös hajuharhoista.";
incorrectFeedback[2][FI][4] = "Haastattelun aikana ei havaittu mitään psykomotorista levottomuutta. Tutkittavan ahdistuneisuuteen liittyvät liikkeet on ilmoitettu jännittyneisyyden osiossa (G4).";
incorrectFeedback[2][FI][5] = "Vaikka tutkittavalla on harhaluuloja erityisestä asemastaan (Jeesuksena olemisesta), hänellä ei ole liioiteltua omahyväisyyttä. Suuruusharhaluulojen sijasta hän ennemminkin tuntee, ettei ole onnistunut vaan on pettänyt ihmisten odotukset.";
incorrectFeedback[2][FI][6] = "Tutkittavalla on harhaluulo oliosta, joka aiheuttaa hänen sairautensa ja oireensa. Hän oli ajoittain pidättyväinen ja raportin mukaan  vältteli muita, koska ihmiset ovat vihaisia siitä, ettei hän ollut ”tarpeeksi Jeesus”.";
incorrectFeedback[2][FI][7] = "Tutkittava myönsi jonkin verran sisäistä ärtyneisyyttä viime viikon aikana. Hän ei kuitenkaan osoittanut vihaisuutta muita kohtaan, eikä informantti ilmoittanut tästä, joten hänen ärtyneisyytensä ei ehkä ole ollut havaittavissa muille.";
incorrectFeedback[2][FI][8] = "Tutkittavan tunneilmaisu oli vähentynyt useina hetkinä haastattelun aikana. Tämä ei ollut niin laajaa, että se oikeuttaisi suurempaan pistemäärään, sillä hän pystyi hymyilemään spontaanisti ja hänen äänensä vaihteli haastattelun aikana.";
incorrectFeedback[2][FI][9] = "Tutkittava oli raportin mukaan osallistunut useisiin toimintoihin edellisen viikon aikana, mm. kahvilla käyntiin ystävien kanssa, musiikin kuunteluun ja puutarhan hoitoon.";
incorrectFeedback[2][FI][10] = "Tutkittavalla oli yleisesti hyvä yhteisymmärrys haastattelijan kanssa, vain katsekontakti puuttui ajoittain. Tämä ei häirinnyt haastattelua.";
incorrectFeedback[2][FI][11] = "Informantti pisteytti tämän kohdan lieväksi. Viime viikolla oli muutama hetki, jolloin tutkittava ei halunnut olla kanssakäymisessä muiden kanssa.";
incorrectFeedback[2][FI][12] = "Tutkittava pystyi antamaan abstakteja vastauksia kuhunkin kohtaan samankaltaisuuksien ja sananlaskujen osiossa, eikä hän osoittanut konkreettista ajattelua haastattelussa. Muista, että tätä kohtaa ei pisteytetä sen perusteella, onko tutkittavan vastaus sananlaskuihin ”oikea”, vaan sen perusteella, osoittaako tutkittava abstraktia ajattelua.";
incorrectFeedback[2][FI][13] = "Tutkittava tarvitsi ajoittain kehotuksia vastaamiseen, mikä saattaa osoittaa jonkin verran spontaanisuuden puutetta. Tällä ei ollut olennaista vaikutusta haastatteluun.";
incorrectFeedback[2][FI][14] = "Monet tutkittavan vastauksista keskittyivät harhaluuloaiheisiin koskien ”oliota” ja Jeesuksena olemista. Hän pystyi kuitenkin siirtymään muihin aiheisiin ilman suuria vaikeuksia.";
incorrectFeedback[2][FI][15] = "Tutkittava ei valittanut fyysisiä vaivoja, mutta uskoo, että hänen terveytensä ei ole kovin hyvä tupakoinnista ja liikunnan puutteesta johtuen. Hänen uskomustaan siitä, että hän on raskaana odottaen Jeesusta, ei otettu huomioon, sillä häneltä puuttui harhaluuloinen vakuuttuneisuus.";
incorrectFeedback[2][FI][16] = "Tutkittava ilmoitti lievästä ahdistuneisuudesta, joka liittyi ihmisten tulemiseen hänen luoksensa, koska hän on Jeesus. Tämä häiritsi jonkin verran hänen untaan ja ruokahaluaan viime viikon aikana. ";
incorrectFeedback[2][FI][17] = "Tutkittava kieltäytyi puhumasta eräästä tapahtumasta elämässään, mutta ilmaisi siitä johtuvaa selvää syyllisyyttä ja myönsi, että se oli vaivannut häntä viime viikon aikana. Hän ei kuitenkaan ollut täysin tämän asian vallassa.";
incorrectFeedback[2][FI][18] = "Tutkittava kyllä vaikutti välillä hermostuneelta liikehtien haastattelun aikana, erityisesti kun keskusteltiin aiheista, jotka tekivät hänet ahdistuneeksi.";
incorrectFeedback[2][FI][19] = "Tutkittavalla esiintyi luonnottomia käsiliikkeitä koko haastattelun ajan. Hänellä oli ajoittain myös outoja huuliliikkeitä. Myös informantti pisteytti tämän kohdan kohtalaiseksi.";
incorrectFeedback[2][FI][20] = "Tutkittava kielsi kaikki surullisuuden tai masennuksen tunteet viime viikon aikana.";
incorrectFeedback[2][FI][21] = "Tutkittavan puhe ja liikkeet vaikuttivat olevan normaalin rajoissa.";
incorrectFeedback[2][FI][22] = "Tutkittava oli yleisesti yhteistyöhaluinen, mutta kieltäytyi keskustelemasta syyllisyydentunteidensa sisällöstä.";
incorrectFeedback[2][FI][23] = "Tutkittava esitti useita erikoisia ajatuksia/harhaluuloja, kuten ”olion” olemassaolon, ajatustensa lähettämisen, Jeesuksena olemisen sekä raskaana olemisen Antikristusta odottaen.";
incorrectFeedback[2][FI][24] = "Tutkittava oli täysin orientoitunut haastattelun aikana.";
incorrectFeedback[2][FI][25] = "Mitään merkkejä heikentyneestä tarkkaavaisuudesta ei ollut koko haastattelun aikana.";
incorrectFeedback[2][FI][26] = "Tutkittava on tällä hetkellä harhainen, ja hänellä on vaihteleva käsityskyky oireistaan. Vaikka hän kykenee nimeämään oireensa ”harhoiksi”, hän edelleen uskoo, että ”olio” on todellinen ja että tämä aiheuttaa hänen oireensa.";
incorrectFeedback[2][FI][27] = "Muutama vähäpätöinen, yksittäinen tilanne osoitti päättämättömyyttä. Oli esimerkiksi kaksi tilannetta, joissa tutkittava tavoitteli kahvikuppia, mutta vaikutti muuttavan mielensä ja pysähtyi.";
incorrectFeedback[2][FI][28] = "Impulssinhallinnan vaikeuksia ei ilmoitettu tai havaittu.";
incorrectFeedback[2][FI][29] = "Tutkittavan vastaukset ja emotionaaliset reaktiot haastattelun aikana liittyivät kaikki harhaluuloaiheisiin. Hän näytti ajoittain katselevan huoneen reunoille ja ilmoitti kuulevansa ääniä haastattelun aikana, mikä osoittaa jonkin verran sisäänpäinkääntyneisyyttä.";
incorrectFeedback[2][FI][30] = "Informantti pisteytti tämän kohdan lieväksi, ja tutkittava ilmoitti, että välttelee muita jonkin verran epäluuloisuuden ja pelon takia.";

// FR placeholder

incorrectFeedback[1][FR][1] = "Le sujet présente un tableau en kaléidoscope de délires informes et instables, y compris des pensées de suspicions/persécution, les gens le jugent, l'accusent de crimes et lancent des insinuations contre lui. Il a également exprimé la conviction qu'il a un micro dans la dent.";
incorrectFeedback[1][FR][2] = "Bon nombre des réponses du sujet ne correspondaient pas immédiatement à la question posée.";
incorrectFeedback[1][FR][3] = "Le sujet a indiqué des hallucinations quotidiennes, qu'il entend clairement. Il n'a pas de conviction délirante globale mais ne se démarque pas de son interprétation délirante.";
incorrectFeedback[1][FR][4] = "Le sujet semble agité à différents moments de l'entretien.";
incorrectFeedback[1][FR][5] = "Le sujet a nié avoir des sentiments ou des croyances de grandeur.";
incorrectFeedback[1][FR][6] = "Le sujet est méfiant et soupçonneux envers les autres. Il a mis en évidence des délires persécutoires vagues en disant que les gens le jugent, l'accusent de crimes et lui font des insinuations en lui parlant.";
incorrectFeedback[1][FR][7] = "Le sujet a indiqué être irritable et jeter des détritus, faire des grimaces aux autres. L'informateur a évalué cet item comme modéré.";
incorrectFeedback[1][FR][8] = "L'affectivité du sujet a diminué à de nombreuses reprises au cours de l'entretien. Il a noté qu'il était en colère, il a ri à l'occasion, donc une note plus élevée n'est pas recommandée.";
incorrectFeedback[1][FR][9] = "Le sujet a indiqué un manque d'implication occasionnel dans la semaine, et l'informateur a noté cet item comme modéré.";
incorrectFeedback[1][FR][10] = "Le sujet était ouvert et avait de bons rapports avec l'interviewer.";
incorrectFeedback[1][FR][11] = "La liste de vérification de l'informateur a évalué cet item comme absent. Le sujet signale un désir d'interagir avec plus de personnes, et indique se réjouir lorsqu'il a de bonnes conversations. Il ne s'engage pas plus par peur et par suspicions, plutôt que par manque d'intérêt.";
incorrectFeedback[1][FR][12] = "Le sujet a fait preuve de sa capacité à penser de manière abstraite tout au long de l'entretien, et au cours de la section des similarités et des proverbes de l'entretien.";
incorrectFeedback[1][FR][13] = "Pas de difficulté observée pour émettre un discours.";
incorrectFeedback[1][FR][14] = "La sujet a fait preuve d'attention en faveur de thèmes récurrents liés à ses suspicions et à la persécution, mais a été capable de changer de sujet sans difficulté.";
incorrectFeedback[1][FR][15] = "Le sujet s'est plaint de problèmes de santé généraux liés au vieillissement, à une toux persistante et un champignon au pied.";
incorrectFeedback[1][FR][16] = "Le sujet a indiqué une crise d'anxiété proche de la panique qui impacte son appétit : il mange alors beaucoup plus que d'habitude. Il a parlé de son anxiété tout au long de l'entretien.";
incorrectFeedback[1][FR][17] = "Le sujet a indiqué un certain nombre de choses dont il se sent coupable mais a indiqué que cela ne l'avait pas gêné la semaine dernière.";
incorrectFeedback[1][FR][18] = "La tension s'est manifestée dans l'apparence nerveuse du sujet tout au long de l'entretien.";
incorrectFeedback[1][FR][19] = "Le sujet semble légèrement étrange par moments en raison de sa posture mais cela n'était pas suffisant pour donner une note supérieure.";
incorrectFeedback[1][FR][20] = "Le sujet a nié avoir des sentiments de dépression au cours de la dernière semaine.";
incorrectFeedback[1][FR][21] = "Les mouvements et le discours du sujet étaient dans la gamme des limites normales.";
incorrectFeedback[1][FR][22] = "Le sujet a fait preuve de coopération tout au long de l'entretien et a répondu à toutes les questions.";
incorrectFeedback[1][FR][23] = "La suspicion du sujet et les délires sont mal organisés et ne sont pas bizarres. La croyance qu'il a un micro dans sa dent peut être perçue comme bizarre, mais le sujet n'a pas fait preuve d'une conviction délirante totale à ce propos.";
incorrectFeedback[1][FR][24] = "Le sujet était entièrement orienté et a répondu correctement à toutes les questions d'orientation.";
incorrectFeedback[1][FR][25] = "Le sujet a maintenu son attention tout au long de l'entretien.";
incorrectFeedback[1][FR][26] = "Le sujet n'est pas conscient des principaux symptômes de sa maladie. S'il est prêt à concéder que ses suspicions peuvent être inexactes, il en doute vraiment. Il n'est pas prêt non plus à concéder que la présence d'un micro dans sa dent n'est pas plausible.";
incorrectFeedback[1][FR][27] = "Il y a certaines inconsistances internes dans le récit du sujet, par exemple il nie qu'il est irritable, et ensuite il signale qu'il ressent souvent de la colère et que cela le pousse à agir.";
incorrectFeedback[1][FR][28] = "Le sujet signale qu'il jette des détritus et qu'il fait des grimaces de colères quand il est en colère; L'informateur a évalué cet item comme modéré.";
incorrectFeedback[1][FR][29] = "Le sujet était légèrement auto-centré à certains moments de l'entretien.";
incorrectFeedback[1][FR][30] = "L'informateur a également noté cet item comme modéré. Le sujet a signalé qu'il avait peur des gens et qu'il évitait les activités avec d'autres personnes en raison de ses suspicions et de la peur d'être jugé.";

incorrectFeedback[2][FR][1] = "Le sujet a signalé des délires, pensant être Jésus, des diffusions de la pensée et pensant que « l'entité » était réelle. Ces croyances ont un impact émotionnel et comportemental dans la mesure où elles ont conduit le sujet à éviter les autres.";
incorrectFeedback[2][FR][2] = "Le discours du sujet était clair et cohérent, sans preuve de  prolixité circonlocutoire ou de pensée tangentielle.";
incorrectFeedback[2][FR][3] = "Le sujet a signalé des hallucinations auditives quotidiennes, provoquant une interprétation illusoire et une réaction émotionnelle. Elle a également signalé des hallucinations olfactives.";
incorrectFeedback[2][FR][4] = "Aucune agitation psychomotrice n'a été observée pendant l'entretien. Les mouvements du sujet attribués à l'angoisse sont saisis sous tension (G4).";
incorrectFeedback[2][FR][5] = "Si le sujet a eu des délires à propos d'un statut spécial (être Jésus), il n'y a pas d'image de soi exagérée et elle sent qu'elle n'a pas bien agi et qu'elle a laissé tomber les gens au lieu de ressentir de la grandeur.";
incorrectFeedback[2][FR][6] = "Le sujet a indiqué un délire sur l'entité provoquant sa maladie et ses symptômes. Elle était sur ses gardes de temps à autres et elle a évité les autres de manière répétée car les gens étaient méchants dans la mesure où elle ne faisait pas « assez Jésus »";
incorrectFeedback[2][FR][7] = "Le sujet a reconnu une certaine irritabilité interne au cours de la semaine passée. Cependant, elle n'a pas exprimé de colère contre les autres et cela n'a pas été noté par l'informateur, donc son irritabilité n'a peut-être pas été remarquée par les autres.";
incorrectFeedback[2][FR][8] = "L'affectivité du sujet a diminué à de nombreuses reprises au cours de l'entretien. La portée n'a pas dépassé ce qui provoquerait une évaluation supérieure, dans la mesure où elle a été en mesure de sourire spontanément et a fait preuve d'inflexions de la voix au cours de l'entretien.";
incorrectFeedback[2][FR][9] = "Le sujet a signalé qu'elle s'était engagée dans différentes activités au cours de la dernière semaine, elle a notamment pris le café avec des amis, a écouté de la musique, et a fait du jardinage.";
incorrectFeedback[2][FR][10] = "Les rapports du sujet étaient généralement bons, avec seulement occasionnellement un manque de contact oculaire. Cela n'a pas perturbé l'entretien.";
incorrectFeedback[2][FR][11] = "L'informateur a évalué cet item comme modéré. Il y a eu quelques occasions où le sujet n'a pas souhaité s'engager avec les autres au cours de la dernière semaine.";
incorrectFeedback[2][FR][12] = "Le sujet a été en mesure de fournir des réponses abstraites à chaque similarité et chaque proverbe, et n'a pas fait preuve de pensée concrète pendant l'entretien. Ne pas oublier que cet item n'est pas noté sur le fait de savoir si la réponse du sujet aux proverbes est &quot;correcte&quot; mais sur le fait de savoir si le sujet fait preuve de pensée abstraite.";
incorrectFeedback[2][FR][13] = "Le sujet a eu besoin occasionnellement d'incitations pour répondre, ce qui peut indiquer un certain manque de spontanéité. Cela n'a pas eu d'impact substantiel sur l'entretien.";
incorrectFeedback[2][FR][14] = "Bon nombre des réponses du sujet tournaient autour de thèmes délirants au sujet de « l'entité » et du fait d'être Jésus. Cependant, elle a été en mesure de passer à d'autres sujets avec peu de difficultés.";
incorrectFeedback[2][FR][15] = "Le sujet n'a pas signalé de problèmes physiques, mais elle pense qu'elle n'a pas une bonne santé à cause de la cigarette et du fait qu'elle ne fait pas de sport. Sa croyance d'être enceinte de Jésus n'a pas été prise en compte car elle n'avait pas de conviction délirante.";
incorrectFeedback[2][FR][16] = "Le sujet a signalé une certaine anxiété liée au fait que les gens venaient la voir car elle était Jésus. Cela a eu un certain impact sur son sommeil et son appétit au cours de la dernière semaine. ";
incorrectFeedback[2][FR][17] = "Le sujet a refusé de parler d'un événement de sa vie mais elle a clairement exprimé sa culpabilité à ce propos, et a admis que cela l'avait préoccupée au cours de la dernière semaine. Cela ne l'a préoccupe plus, cependant.";
incorrectFeedback[2][FR][18] = "Le sujet a semblé gesticuler à certains moments pendant l'entretien, en particulier lorsque l'on a abordé les sujets qui sont la source de son anxiété.";
incorrectFeedback[2][FR][19] = "Le sujet a manifesté des mouvements de main non naturels tout au long de l'entretien. Elle a également eu d'étrangers mouvements des lèvres à certains moments. L'informateur a également noté cet item comme modéré.";
incorrectFeedback[2][FR][20] = "Le sujet a nié avoir des sentiments de tristesse ou de dépression au cours de la dernière semaine.";
incorrectFeedback[2][FR][21] = "Le discours et les mouvements du sujet ont semblé se trouver dans la gamme normale.";
incorrectFeedback[2][FR][22] = "Le sujet a fait généralement preuve de coopération, mais elle a refusé de parler du contenu de ses pensées de culpabilité.";
incorrectFeedback[2][FR][23] = "Le sujet a présenté de nombreuses idées étranges/délirantes, par exemple l'existence d'une &quot;entité&quot;, la diffusion de ses pensées, être Jésus, et être enceinte de l'antéchrist.";
incorrectFeedback[2][FR][24] = "Le sujet ne présentait absolument pas de désorientation pendant l'entretien.";
incorrectFeedback[2][FR][25] = "Il n'y a pas eu de preuve d'une faiblesse d'attention tout au long de l'entretien.";
incorrectFeedback[2][FR][26] = "Le sujet est actuellement en phase délirante et sa perspicacité de ses symptômes varie. Si elle est capable de dire que ses symptômes sont du « délire », elle pense tout de même que « l'entité » est réelle et qu'elle est la cause de ses symptômes.";
incorrectFeedback[2][FR][27] = "Il y a eu quelques cas mineurs et occasionnels d'indécision. Par exemple, en deux occasions, le sujet a semblé rechercher sa tasse de café, puis elle a semblé changer d'avis et s'est arrêtée.";
incorrectFeedback[2][FR][28] = "On n'a signalé ou noté aucune difficulté avec le contrôle de l'impulsion.";
incorrectFeedback[2][FR][29] = "Les réponses et les réponses émotionnelles du sujet au cours de l'entretien tournaient toutes autour de thèmes délirants. Elle semblait regarder d'un côté de la pièce à certains moments, et elle a signalé qu'elle entendait des voix pendant l'entretien, ce qui indique un certain niveau de préoccupation interne.";
incorrectFeedback[2][FR][30] = "L'informateur a noté cet item comme modéré, et le sujet a signalé certains cas d'évitement d'autrui en raison de ses suspicions et de sa peur.";

// DE placeholder

incorrectFeedback[1][HU][1] = "Az alany kiforratlan és bizonytalan téveszmék kaleidoszkopikus sorával állt elő, többek között gyanakvó, üldözéses gondolatokkal arról, hogy az emberek ítélkeznek felette, bűncselekményekkel vádolják, és burkolt célzásokat tesznek az irányába. Azt is kifejtette, hogy meggyőződése szerint mikrofon van a fogában.";
incorrectFeedback[1][HU][2] = "Az alany válaszainak egy része nem kapcsolódott közvetlenül a feltett kérdéshez.";
incorrectFeedback[1][HU][3] = "Az alany naponta jelentkező, tisztán hallható hallucinációkról számolt be. Nincs teljesen meggyőződve a téveszméi igazáról, de nem is zárja ki ezt.";
incorrectFeedback[1][HU][4] = "Az alany többször is izgatottnak tűnt az interjú alatt.";
incorrectFeedback[1][HU][5] = "Az alany tagadta a nagyszerűséggel kapcsolatos érzéseket és meggyőződéseket.";
incorrectFeedback[1][HU][6] = "Az alany nem bízik másokban, illetve gyanakszik rájuk. Kevésbé kidolgozott üldözéses téveszméről tett tanúságot, miszerint az emberek ítélkeznek fölötte, bűncselekményekkel vádolják, és burkolt célzásokat tesznek, amikor vele beszélnek.";
incorrectFeedback[1][HU][7] = "Az alany arról számolt be, hogy ingerlékeny, ami miatt szitkozódik és mérgesen néz másokra. Az adatközlő enyhének értékelte ezt az elemet.";
incorrectFeedback[1][HU][8] = "Az alany kifejezései többször is eltompultak az interjú során. Idegesnek tűnt és nevetett esetenként, ezért magasabb értékelés nem állná meg a helyét.";
incorrectFeedback[1][HU][9] = "Az alany a hét során néha tapasztalt érdektelenségről számolt be, és az adatközlő enyhének értékelte ez az elemet.";
incorrectFeedback[1][HU][10] = "Az alany nyitott volt, és jó raport alakult ki közte és az interjúztató között.";
incorrectFeedback[1][HU][11] = "Az adatközlő ellenőrzőlistája szerint ez az elem hiányzott. Az alany arról számol be, hogy többször szeretne emberekkel kapcsolatba lépni, és hogy élvezi a jó beszélgetéseket. A félelem és a gyanakvás miatt nem vonódik be jobban, nem pedig érdektelenségből.";
incorrectFeedback[1][HU][12] = "Az alany az interjú alatt, valamint a hasonlóságokra és közmondásokra vonatkozó kérdéseknél is képesnek mutatkozott az absztrakt gondolkodásra.";
incorrectFeedback[1][HU][13] = "A fogalmazásban nem jelentkezett nehézség.";
incorrectFeedback[1][HU][14] = "Az alany bizonyos fokú vonzódást mutatott a gyanakvásával és üldözésével kapcsolatos visszatérő témákhoz, de ezekről gond nélkül át tudott váltani.";
incorrectFeedback[1][HU][15] = "Az alany idősödéssel, elhúzódó köhögéssel és lábgombával kapcsolatos általános egészségügyi aggályokat fejezett ki.";
incorrectFeedback[1][HU][16] = "Az alany megerősítette a pánikhoz közeli szorongás tünetét, amely étvágyát úgy befolyásolja, hogy sokkal többet eszik a szokásosnál. Az interjú során többször is említette a szorongását.";
incorrectFeedback[1][HU][17] = "Az alany több olyan dologról is beszámolt, amelyek miatt bűntudata van, de arra utalt, hogy ezek nem zavarták a múlt héten.";
incorrectFeedback[1][HU][18] = "A feszültség az interjú során végig jelen volt az alany ideges viselkedésében.";
incorrectFeedback[1][HU][19] = "Az alany időnként kissé furcsának tűnt testtartása miatt, de ez nem volt annyira átható, hogy magasabb értéket kapjon.";
incorrectFeedback[1][HU][20] = "Az alany tagadta, hogy depressziós lett volna a múlt héten.";
incorrectFeedback[1][HU][21] = "Az alany mozgása és beszéde normális határok között volt.";
incorrectFeedback[1][HU][22] = "Az alany az interjú alatt végig együttműködő volt, és minden kérdésre válaszolt.";
incorrectFeedback[1][HU][23] = "Az alany gyanakvásaira és téveszméire sem a kidolgozottság, sem a bizarrság nem jellemző. A fogában lévő mikrofonnal kapcsolatos elképzelés ugyan bizarrnak tekinthető, de az alany nem azonosult teljesen ezzel mint téveszmével.";
incorrectFeedback[1][HU][24] = "Az alany teljesen orientált volt, és az összes tájékozottsági kérdésre helyesen válaszolt.";
incorrectFeedback[1][HU][25] = "Az alany az interjú alatt végig figyelt.";
incorrectFeedback[1][HU][26] = "Az alany nincs tudatában betegsége legfőbb tüneteinek. Hajlandó ugyan elismerni, hogy a gyanakvása lehet, hogy nem helyénvaló, de ezt erősen kétli. Azt sem hajlandó elismerni, hogy valószínűtlen, hogy a fogában mikrofon lenne.";
incorrectFeedback[1][HU][27] = "Az alany beszámolójában van néhány belső ellentmondás, például az, hogy tagadja, hogy ingerlékeny lenne, később viszont arról számol be, hogy gyakran érez dühöt, és cselekszik ennek hatására.";
incorrectFeedback[1][HU][28] = "Az alany arról számol be, hogy szitkozódik és mérges arckifejezést vág, amikor dühös. Az adatközlő enyhének értékelte ezt az elemet.";
incorrectFeedback[1][HU][29] = "Az alany az interjú alatt néha kissé magába feledkezett.";
incorrectFeedback[1][HU][30] = "Az adatközlő közepes súlyosságúnak értékelte ezt az elemet. Az alany arról számolt be, hogy gyanakvása és az ítélkezéstől való félelme miatt tart az emberektől, és a másokkal való közös tevékenységektől.";

incorrectFeedback[2][HU][1] = "Az alany arról számolt be, hogy Jézusnak képzelte magát, mert a gondolatközlést és az „entitást” valósnak vélte. Ezeknek a képzeteknek érzelmi és viselkedésbeli hatásai is voltak, mert ezek okán az alany kerülni kezdte az embereket.";
incorrectFeedback[2][HU][2] = "Az alany beszéde tiszta volt és összefüggő, semmi sem utalt körülményességre vagy érintőlegességre.";
incorrectFeedback[2][HU][3] = "Az alany a beszámolója szerint naponta észlel hallható hallucinációkat, amelyekre érzelmi választ ad és a tévképzeteivel igazol. Az alany szaglószervi hallucinációkat is említett.";
incorrectFeedback[2][HU][4] = "Nem jelentkezett megfigyelhető pszichomotoros izgatottság az interjú során. Izgatott mozdulatokat csak nyomás alatt tett az alany (G4).";
incorrectFeedback[2][HU][5] = "Bár az alany a tévképzetei szerint különleges státuszt élvez (ő maga Jézus), még sincs magáról szélsőséges véleménnyel, és azt érzi, hogy nem tesz eleget és ezzel csalódást okozott az embereknek ahelyett, hogy igazán nagyszerű lenne.";
incorrectFeedback[2][HU][6] = "Az alany tévképzete szerint egy entitás okozza a betegségét és a tüneteit. Néha védekezően viselkedett, valamint került másokat a beszámolók szerint, mivel mérgesek voltak rá, amiért „nem volt eléggé olyan, mint Jézus”.";
incorrectFeedback[2][HU][7] = "Az alany elismerte, hogy ingerlékenynek érezte magát az elmúlt héten. Azonban nem nyilvánította ki dühét másokkal szemben, mint azt az adatközlő is megjegyezte, ezért ingerlékenységét mások nem észlelték.";
incorrectFeedback[2][HU][8] = "Az alany kifejezései többször is eltompultak az interjú során. Ennek mértéke azonban nem volt olyan súlyos, ami magasabb értékelést indokolna, mivel az alany többször is spontán mosolygott és hanghordozását is változtatta az interjú során.";
incorrectFeedback[2][HU][9] = "Az alany több tevékenységben is részt vett az elmúlt héten, például kávézott a barátaival, zenét hallgatott és kertészkedett.";
incorrectFeedback[2][HU][10] = "Az alany raportja általában jó volt, csak néha hiányzott a szemkontaktus. Ezzel nem zavarta az interjú menetét.";
incorrectFeedback[2][HU][11] = "Az adatközlő enyhének értékelte ezt az elemet. Az elmúlt héten többször is előfordult, hogy az alany nem kívánt kapcsolatba lépni másokkal.";
incorrectFeedback[2][HU][12] = "Az alany képes volt absztrakt válaszokat adni a szólások és a hasonlóságok esetén, és az interjú során is képes volt elvonatkoztatni a konkrétumoktól. Felhívjuk a figyelmet, hogy az elem értékelése nem attól függ, hogy az alany &quot;helyes&quot; módon értelmezte-e az adott szólásokat, hanem azt értékeljük, hogy képes-e az absztrakt gondolkodásra.";
incorrectFeedback[2][HU][13] = "Bizonyos dolgokra külön rá kellett kérdezni, hogy válaszoljon az alany, ami a spontaneitás hiányát jelezheti. Azonban ez nem befolyásolta jelentősen az interjú menetét.";
incorrectFeedback[2][HU][14] = "Az alany legtöbb válasza összefüggött a tévképzeteivel, különösképp az „entitással” és azzal kapcsolatban, hogy Jézusnak képzeli magát. Azonban kisebb nehézséggel képes volt átváltani más témákra.";
incorrectFeedback[2][HU][15] = "Az alany nem számolt be fizikai panaszokról, azonban nem tartja túl jónak az egészségét, mivel dohányzik és keveset mozog. Itt nem vettük figyelembe azt a képzetét, hogy Jézussal terhes, mivel nem volt meggyőződve erről a tévképzetéről.";
incorrectFeedback[2][HU][16] = "Beszámolója szerint az alanyban némi szorongást okoznak azok az emberek, akik azért keresik fel, mert Jézussal terhes. Ez hatással is volt az alvására és étvágyára az elmúlt héten. ";
incorrectFeedback[2][HU][17] = "Az alany nem volt hajlandó beszámolni életének egy eseményéről, azonban kifejezett bűntudatot említett az esettel kapcsolatban, ami a múlt héten is nyugtalanította. Azonban nem feledkezett bele ebben a gondolatba.";
incorrectFeedback[2][HU][18] = "Az interjú során az alany többször is nyugtalannak tűnt, különösképpen az őt aggasztó témakörök érintésekor.";
incorrectFeedback[2][HU][19] = "Az alany szokatlan kézmozdulatokat tett végig az interjú során. Ezenkívül az ajkait is furcsán mozgatta néhányszor. Az adatközlő ezt közepes súlyosságúnak értékelte.";
incorrectFeedback[2][HU][20] = "Az alany cáfolta, hogy szomorú vagy depressziós érzetei lettek volna az elmúlt héten.";
incorrectFeedback[2][HU][21] = "Az alany beszéde és mozgása általánosnak tűnt.";
incorrectFeedback[2][HU][22] = "Az alany általánosan együttműködőnek bizonyult, azonban nem volt hajlandó részletesebben is beszélni a bűntudatáról.";
incorrectFeedback[2][HU][23] = "Az alany számos különös elképzelésről és tévképzetről számolt be, például egy &quot;entitás&quot; létezéséről, gondolatainak kisugárzásáról, valamint arról, hogy ő maga Jézus, illetve terhes az antikrisztussal.";
incorrectFeedback[2][HU][24] = "Az alany mindennel tisztában volt az interjú során.";
incorrectFeedback[2][HU][25] = "Semmi sem utalt figyelemhiányra az interjú során.";
incorrectFeedback[2][HU][26] = "Az alany a tévképzetei hatása alatt áll, csak változó mértékben képes felmérni a tüneteit. Bár képes a tüneteit „tévképzetként” jellemezni, továbbra is hisz abban, hogy az „entitás” egy létező dolog és az okozza a tüneteit.";
incorrectFeedback[2][HU][27] = "Enyhe, alkalmankénti bizonytalanság volt megfigyelhető. Például az alany két alkalommal is a kávéscsészéért nyúlt, majd szemmel láthatóan meggondolta magát és megállt.";
incorrectFeedback[2][HU][28] = "Beszámolók és észrevételek sem utaltak arra, hogy az impulzuskontroll nehézségekbe ütközne.";
incorrectFeedback[2][HU][29] = "Az interjú során az alany válaszai és érzelmi reakciói mind kapcsolatban álltak a tévképzeteivel. Úgy tűnt néha, hogy a szoba falait figyeli és hangokról számolt be az interjú alatt, ami bizonyos mértékű belefeledkezést jelez.";
incorrectFeedback[2][HU][30] = "Az adatközlő enyhének értékelte ezt az elemet. Az alany beszámolt néhány esetről, amikor gyanakvás vagy félelem miatt került el másokat.";

// IT placeholder
// JA placeholder
// KO placeholder
// NO placeholder
// PT placeholder
// ES placeholder
// TR placeholder

incorrectFeedback[1][RO][1] = "Subiectul prezintă o gamă variată de iluzii vagi şi instabile, inclusiv gânduri de suspiciune/persecuţie, că oamenii îl judecă, că îl acuză de infracţiuni şi că fac insinuări la adresa lui. De asemenea a exprimat convingerea că are un microfon în dinte.";
incorrectFeedback[1][RO][2] = "Unele dintre răspunsurile subiectului nu au corespuns imediat întrebărilor puse.";
incorrectFeedback[1][RO][3] = "Subiectul a raportat halucinaţii zilnice pe care le aude în mod clar. Acesta nu are convingere iluzorie deplină, dar nu este complet sceptic privind interpretarea sa iluzorie.";
incorrectFeedback[1][RO][4] = "Subiectul a părut agitat în diferite momente ale interviului.";
incorrectFeedback[1][RO][5] = "Subiectul a spus că nu a avut sentimente sau convingeri de grandoare.";
incorrectFeedback[1][RO][6] = "Subiectul este neîncrezător şi îi suspectează pe ceilalţi. Subiectul a prezentat iluzii de persecuţie vagi, cum că lumea îl judecă, îl acuză de infracţiuni, şi că oamenii fac insinuări la adresa sa când vorbesc cu el.";
incorrectFeedback[1][RO][7] = "Subiectul a raportat faptul că a avut stări de iritare şi că a acţionat făcând mizerie şi arătând feţe furioase altor persoane. Informatorul a evaluat şi acest item ca având un nivel slab.";
incorrectFeedback[1][RO][8] = "Subiectul a prezentat aplatizare afectivă în diferite momente ale interviului. S-a observat faptul că a fost furios şi că a râs ocazional, aşadar un scor mai mare nu este justificat.";
incorrectFeedback[1][RO][9] = "Subiectul a raportat că a simţit lipsă de implicare în unele momente pe parcursul săptămânii, şi informatorul a evaluat acest item ca având un nivel slab.";
incorrectFeedback[1][RO][10] = "Subiectul a fost deschis şi a avut un raport personal bun cu intervievatorul.";
incorrectFeedback[1][RO][11] = "Informatorul a evaluat acest item ca fiind absent. Subiectul a raportat că are o dorinţă de a interacţiona mai mult cu oamenii şi că îi plac conversaţiile. Nu interacţionează mai mult din cauza sentimentelor de frică şi de suspiciune, decât din lipsă de interes.";
incorrectFeedback[1][RO][12] = "Subiectul a demonstrat capacitate de abstractizare pe tot parcursul interviului şi în timpul secţiunii cu similarităţi şi proverbe.";
incorrectFeedback[1][RO][13] = "Nu s-au observat dificultăţi de vorbire.";
incorrectFeedback[1][RO][14] = "Subiectul a prezentat o anumită concentrare pe teme recurente legate de sentimentele sale de suspiciune şi persecuţie, dar a putut schimba subiectul fără dificultate.";
incorrectFeedback[1][RO][15] = "Subiectul a raportat preocupări generale de sănătate legate de vârstă, o tuse persistentă, şi o ciupercă la degetul de la picior.";
incorrectFeedback[1][RO][16] = "Subiectul a susţinut că a avut o anxietate apropiată de panică, lucru care i-a influențat pofta de mâncare, adică a mâncat mai mult decât de obicei. A vorbit despre anxietatea sa pe parcursul interviului.";
incorrectFeedback[1][RO][17] = "Subiectul a raportat un număr de lucruri pentru care se simte vinovat, dar a indicat faptul că acestea nu l-au deranjat în ultima săptămână.";
incorrectFeedback[1][RO][18] = "Tensiunea s-a manifestat prin starea agitată a subiectului pe tot parcursul interviului.";
incorrectFeedback[1][RO][19] = "Subiectul a părut să stea puţin ciudat în unele momente din cauza posturii, dar acest lucru nu a fost destul de proeminent pentru notarea cu un scor mai mare.";
incorrectFeedback[1][RO][20] = "Subiectul a raportat că nu a avut sentimente de depresie în ultima săptămână.";
incorrectFeedback[1][RO][21] = "Mişcările şi vorbirea subiectului s-au încadrat în limitele obişnuite.";
incorrectFeedback[1][RO][22] = "Subiectul a cooperat pe tot parcursul interviului şi a răspuns la toate întrebările.";
incorrectFeedback[1][RO][23] = "Suspiciunea şi iluziile subiectului sunt vagi şi nu au fost bizare. Convingerea că are un microfon în dinte poate fi considerată bizară, dar subiectul nu a exprimat convingere iluzorie deplină în această privinţă.";
incorrectFeedback[1][RO][24] = "Subiectul a fost orientat complet şi a răspuns corect la toate întrebările de orientare.";
incorrectFeedback[1][RO][25] = "Subiectul a fost atent pe tot parcursul interviului.";
incorrectFeedback[1][RO][26] = "Subiectul nu este conştient de simptomele majore ale bolii sale. Deşi el acceptă că este posibil ca suspiciunile sale să nu fie corecte, se îndoieşte profund în această privinţă. De asemenea, el nu acceptă ca fiind neplauzibilă ideea că are un microfon în dinte.";
incorrectFeedback[1][RO][27] = "Există inconsecvenţe în cele raportate de către subiect; spre exemplu a afirmat că nu are stări de iritare, dar mai târziu a raportat faptul că adeseori se simte furios şi că acţionează din acest motiv.";
incorrectFeedback[1][RO][28] = "Subiectul raportează că face mizerie şi feţe furioase atunci când este furios. Informatorul a evaluat şi acest item ca având un nivel slab.";
incorrectFeedback[1][RO][29] = "Subiectul a părut ușor concentrat în unele momente ale interviului.";
incorrectFeedback[1][RO][30] = "Informatorul a evaluat acest item ca fiind moderat. Subiectul a raportat că îi este frică de oameni şi că evită activităţile cu ceilalţi din cauza suspiciunii şi fricii sale de a fi judecat.";

incorrectFeedback[2][RO][1] = "Subiectul a raportat iluzii privind faptul că este Iisus, că ceilalți îi cunosc gândurile şi că „entitatea” este reală. Aceste convingeri au impact emoţional şi comportamental deoarece duc la evitarea altor persoane de către subiect.";
incorrectFeedback[2][RO][2] = "Vorbirea subiectului era clară şi coerentă, fără semne de circumstanţialitate sau tangenţialitate.";
incorrectFeedback[2][RO][3] = "Subiectul a raportat halucinaţii auditive zilnice pentru care aceasta are o interpretare iluzorie şi un răspuns emoţional. Au fost raportate de asemenea halucinaţii olfactive.";
incorrectFeedback[2][RO][4] = "În timpul interviului nu a fost observată instabilitate psihomotorie. Mişcările subiectului atribuite anxietăţii sunt observate în condiţii de stres (G4).";
incorrectFeedback[2][RO][5] = "Deşi subiectul are iluzii cum că are un statut special (se crede Iisus), nu se supraapreciază şi consideră că nu face lucrurile bine şi că i-a dezamăgit pe oameni, în loc să aibă sentimente de grandoare.";
incorrectFeedback[2][RO][6] = "Subiectul susţine o iluzie privind entitatea care îi provoacă boala şi simptomele. Aceasta a fost precaută uneori şi susține că a evitat alte persoane deoarece acestea erau supărate pe ea pentru că nu și-a îndeplinit îndeajuns „misiunea de Iisus”";
incorrectFeedback[2][RO][7] = "Subiectul a recunoscut că a simțit o oarecare iritabilitate interioară în timpul ultimei săptămâni. Cu toate acestea, aceasta nu și-a manifestat furia împotriva altora şi acest lucru nu a fost notat de către informator, astfel că este posibil ca iritabilitatea acesteia să fi trecut neobservată de alte persoane.";
incorrectFeedback[2][RO][8] = "Subiectul a prezentat aplatizare afectivă în diferite momente ale interviului. Acest lucru nu a fost îndeajuns încât să justifice un scor mai mare deoarece aceasta a putut zâmbi spontan şi a prezentat inflexiuni ale vocii în timpul interviului.";
incorrectFeedback[2][RO][9] = "Subiectul a susținut că a realizat o serie de activităţi în timpul ultimei săptămâni, inclusiv faptul că a băut cafea cu prietenii, a ascultat muzică, şi s-a ocupat de grădinărit.";
incorrectFeedback[2][RO][10] = "Raporturile personale ale subiectului a fost în general bune cu câteva momente în care nu a existat contactul vizual. Acest lucru nu a afectat interviul.";
incorrectFeedback[2][RO][11] = "Informatorul a evaluat acest item ca având un nivel slab. Au existat câteva ocazii în care subiectul nu a dorit să interacţioneze cu alte persoane de-a lungul ultimei săptămâni.";
incorrectFeedback[2][RO][12] = "Subiectul a putut oferi răspunsuri abstracte la fiecare dintre similarităţi şi proverbe şi nu a demonstrat gândire concretă în cadrul interviului. Reţineţi faptul că acest item nu este evaluat în funcţie de &quot;corectitudinea&quot; răspunsurilor subiectului cu privire la proverbe, ci în funcţie de capacitatea subiectului de a demonstra gândire abstractă.";
incorrectFeedback[2][RO][13] = "Subiectul a necesitat solicitări ocazionale pentru a răspunde, lucru care poate indica lipsă de spontaneitate. Acest lucru nu a avut impact substanţial asupra interviului.";
incorrectFeedback[2][RO][14] = "Multe dintre răspunsurile subiectului s-au axat în jurul subiectelor iluzorii privind „entitatea” şi ideea că este Iisus. Cu toate acestea, ea a putut trece la alte subiecte fără mare dificultate.";
incorrectFeedback[2][RO][15] = "Subiectul nu a raportat probleme fizice, dar crede că nu are o stare bună de sănătate din cauza faptului că fumează și nu face exerciţii fizice. Convingerea acesteia că este însărcinată cu Iisus nu a fost luată în considerare deoarece nu a avut convingere iluzorie";
incorrectFeedback[2][RO][16] = "Subiectul a raportat anxietate în legătură cu unele persoane care au abordat-o datorită faptului că este Iisus. Acest lucru i-a afectat într-o oarecare măsură somnul şi pofta de mâncare de-a lungul ultimei săptămâni. ";
incorrectFeedback[2][RO][17] = "Subiectul a refuzat să vorbească despre un eveniment din viaţa sa, dar a exprimat vinovăţie clară în legătură cu acesta şi a recunoscut faptul că acest lucru a neliniștit-o în ultima săptămână. Cu toate acestea, ea nu este îngrijorată de acest lucru.";
incorrectFeedback[2][RO][18] = "Subiectul a părut că se agită în unele momente în timpul interviului, mai ales atunci când se discutau subiecte care îi provocau n";
incorrectFeedback[2][RO][19] = "Subiectul a manifestat mişcări nenaturale ale mâinii pe tot parcursul interviului. De asemenea, în unele momente aceasta a prezentat mişcări ciudate ale buzelor. Informatorul a evaluat acest item ca fiind de asemenea moderat.";
incorrectFeedback[2][RO][20] = "Subiectul nu a raportat sentimente de tristeţe sau de depresie de-a lungul ultimei săptămâni.";
incorrectFeedback[2][RO][21] = "Vorbirea şi mişcările subiectului au părut a fi în limitele normale.";
incorrectFeedback[2][RO][22] = "Subiectul a fost în general cooperant, dar a refuzat să discute despre sentimentele sale de vinovăție.";
incorrectFeedback[2][RO][23] = "Subiectul a prezentat multe idei/iluzii ciudate precum existenţa unei &quot;entităţi&quot;, faptul că ceilalți îi cunosc gândurile, faptul că este Iisus, şi că este însărcinată cu anticristul.";
incorrectFeedback[2][RO][24] = "Subiectul a fost orientat complet în timpul interviului.";
incorrectFeedback[2][RO][25] = "Nu au existat semne de deficit de atenție pe parcursul interviului.";
incorrectFeedback[2][RO][26] = "În prezent subiectul are iluzii şi are discernământ variabil în ceea ce privește simptomele sale. Deşi poate clasifica simptomele sale ca fiind „iluzii”, ea tot crede că „entitatea” este reală şi că acest lucru îi provoacă simptomele.";
incorrectFeedback[2][RO][27] = "Au existat instanţe minore, ocazionale de indecizie. Spre exemplu, au existat două momente în care subiectul a întins mâna spre ceaşca cu cafea, apoi a părut că se răzgândește şi s-a oprit.";
incorrectFeedback[2][RO][28] = "Nu au fost raportate sau notate dificultăţi privind controlul impulsurilor.";
incorrectFeedback[2][RO][29] = "Toate răspunsurile subiectului şi răspunsurile emoţionale din timpul interviului au avut legătură cu subiecte iluzorii. În unele momente aceasta părea să se uite într-o parte a camerei şi a raportat că auzea voci în timpul interviului, lucru care indică un nivel de preocupare internă.";
incorrectFeedback[2][RO][30] = "Informatorul a evaluat acest item ca având un nivel slab, iar subiectul a raportat că a evitat alte persoane din motive de suspiciune şi de frică.";

incorrectFeedback[1][RU][1] = "Пациент высказывает разнообразные смутные и неоформившиеся бредовые мысли, говорит о своих подозрениях, считает, что его преследуют, осуждают, обвиняют в преступлениях и делают критические намеки на его счет. Кроме того, высказал убеждение, что у него в зубе микрофон.";
incorrectFeedback[1][RU][2] = "Некоторые ответы пациента не совсем адекватны поставленным вопросам.";
incorrectFeedback[1][RU][3] = "Пациент сообщил, что у него каждый день бывают четкие слуховые галлюцинации. У него нет окончательной убежденности в достоверности галлюцинаций, но он не исключает их бредовой интерпретации.";
incorrectFeedback[1][RU][4] = "Во время интервью пациент несколько раз проявлял волнение.";
incorrectFeedback[1][RU][5] = "Пациент отрицает какие-либо идеи или ощущение своего величия.";
incorrectFeedback[1][RU][6] = "Пациент недоверчиво и подозрительно относится к другим. Наблюдается слабо выраженный бред преследования — идеи, что люди осуждают пациента, обвиняют его в преступлениях, делают критические намеки на его счет при общении с ним.";
incorrectFeedback[1][RU][7] = "Пациент сообщил о своей раздражительности, которая выражается в том, что он разбрасывает вещи и строит злые гримасы другим людям. Информатор оценил этот признак как слабо выраженный.";
incorrectFeedback[1][RU][8] = "Несколько раз во время интервью у пациента отмечалось притупление эмоций. Временами он раздражался, несколько раз начинал смеяться, поэтому более высокая оценка может оказаться необъективной.";
incorrectFeedback[1][RU][9] = "Пациент сообщает, что в некоторой степени избегал контактов с другими людьми в течение недели; информатор отметил этот признак как слабо выраженный.";
incorrectFeedback[1][RU][10] = "Пациент был открыт к общению и хорошо взаимодействовал с интервьюером.";
incorrectFeedback[1][RU][11] = "Согласно опросному листу информатора, этот признак не выражен. Пациент выразил желание больше общаться с людьми и сообщил, что любит интересные разговоры. Он не развивает контакты с людьми скорее из страха и подозрительности, а не из-за отсутствия интереса.";
incorrectFeedback[1][RU][12] = "Пациент проявлял способность к абстрактному мышлению на протяжении всего интервью и во время вопросов на обнаружение сходства и объяснение смысла пословиц.";
incorrectFeedback[1][RU][13] = "Не обнаружено никаких сложностей с речью.";
incorrectFeedback[1][RU][14] = "Пациент был несколько зациклен на повторяющихся темах, касающихся его подозрений и преследования со стороны окружающих, но без труда переключался на другие темы.";
incorrectFeedback[1][RU][15] = "Пациент жаловался на проблемы с общим состоянием здоровья: старение организма, затяжной кашель, грибок на ногах.";
incorrectFeedback[1][RU][16] = "Пациент подтвердил, что испытывал тревогу, близкую к панике, которая повлияла на его аппетит и заставила его есть гораздо больше обычного. Говорил о своей тревоге на всем протяжении интервью.";
incorrectFeedback[1][RU][17] = "Рассказал о нескольких ситуациях, по поводу которых испытывает чувство вины, но сказал, что они не беспокоили его на прошлой неделе.";
incorrectFeedback[1][RU][18] = "Напряженность проявлялась в нервных жестах и мимике пациента на всем протяжении интервью.";
incorrectFeedback[1][RU][19] = "Временами пациент принимал странные позы, но это выражалось не настолько сильно, чтобы дать более высокую оценку.";
incorrectFeedback[1][RU][20] = "Пациент говорит, что не испытывал депрессии в течение последней недели.";
incorrectFeedback[1][RU][21] = "Речь и движения пациента были в пределах нормы.";
incorrectFeedback[1][RU][22] = "Пациент проявлял хорошую контактность в течение всего интервью и ответил на все вопросы.";
incorrectFeedback[1][RU][23] = "Подозрительность и бредовые идеи пациента были выражены слабо и не слишком причудливы. Мысль о микрофоне в зубе может считаться странной, но пациент не был полностью убежден в том, что это правда.";
incorrectFeedback[1][RU][24] = "Пациент был полностью ориентирован и правильно ответил на все вопросы по ориентации.";
incorrectFeedback[1][RU][25] = "Признаков нарушения внимания на протяжении интервью не отмечено.";
incorrectFeedback[1][RU][26] = "Пациент не знает основных симптомов своей болезни. Он хотел бы признать, что его подозрения могут быть ошибочны, и в то же время сильно сомневается в этом. Пациент также не хочет признавать, что у него в зубе не может быть микрофона.";
incorrectFeedback[1][RU][27] = "Информация, сообщаемая пациентом, местами противоречива: например, сначала он отрицает свою раздражительность, а потом сообщает, что часто чувствует и проявляет агрессию.";
incorrectFeedback[1][RU][28] = "Пациент сообщил, что разбрасывает вещи и строит злые гримасы, когда злится. Информатор оценил этот признак как слабо выраженный.";
incorrectFeedback[1][RU][29] = "Во время интервью пациент иногда выглядел несколько отстраненным.";
incorrectFeedback[1][RU][30] = "Информатор отметил этот признак как умеренный. Пациент сообщил, что боится людей и избегает общения с ними и совместной деятельности из-за подозрительности и из страха, что его будут осуждать.";

incorrectFeedback[2][RU][1] = "Пациентка высказывала бредовые идеи, касающиеся передачи мыслей на расстоянии и реальности &quot;сущности&quot;, а также того, что она ощущает себя Иисусом. Эти убеждения имеют эмоциональные и поведенческие следствия, так как они заставляли пациентку избегать людей.";
incorrectFeedback[2][RU][2] = "У пациентки чистая и связная речь без признаков излишней детализации и резонерства.";
incorrectFeedback[2][RU][3] = "Пациентка сообщает о ежедневно повторяющихся слуховых галлюцинациях, которым сопутствуют бредовая интерпретация и эмоциональная реакция. Также сообщается об обонятельных галлюцинациях.";
incorrectFeedback[2][RU][4] = "Во время интервью психомоторного возбуждения не отмечалось. Движения пациентки, относящиеся к тревоге, оцениваются в пункте G4 (Напряженность).";
incorrectFeedback[2][RU][5] = "Несмотря на бредовые идеи особого статуса (ощущение себя Иисусом), у пациентки нет повышенного самомнения, вместо величия она скорее ощущает, что недостаточно хорошо справлялась со своей работой и разочаровывает людей.";
incorrectFeedback[2][RU][6] = "Пациентка настаивает на бредовых идеях о том, что ее болезнь и ее симптомы вызваны &quot;сущностью&quot;. Периодически она становилась настороженной и, по сообщениям, избегала других людей, думая, что они обижены на нее за то, что она не &quot;Иисус в полной мере&quot;.";
incorrectFeedback[2][RU][7] = "Пациентка признала некоторую внутреннюю раздражительность в течение последней недели. Тем не менее она не проявляла агрессии по отношению к другим, и информатором это не отмечено, поэтому ее раздражительность, возможно, была незаметной для других.";
incorrectFeedback[2][RU][8] = "Несколько раз во время интервью у пациента отмечалось притупление эмоций. Это не было выражено настолько, чтобы стать основанием для более высокой оценки, учитывая способность пациентки к внезапной улыбке и демонстративным интонациям во время интервью.";
incorrectFeedback[2][RU][9] = "Согласно имеющимся сведениям, у пациентки были некоторые занятия в течение последней недели, в том числе кофе с друзьями, музыка и садоводство.";
incorrectFeedback[2][RU][10] = "Контактность пациентки в целом хорошая, хотя время от времени наблюдались периоды плохого визуального контакта. Это не препятствовало проведению интервью.";
incorrectFeedback[2][RU][11] = "Информатор оценил этот признак как слабо выраженный. В паре случаев в течение прошлой недели пациентка не хотела делать что-либо вместе с другими.";
incorrectFeedback[2][RU][12] = "Пациентка смогла дать абстрактные ответы на все вопросы о смысле пословиц или сходстве и не продемонстрировала конкретного мышления в интервью. Напоминаем, что этот пункт оценивается не по &quot;правильности&quot; истолкования пословицы, а по демонстрации пациентом абстрактного мышления.";
incorrectFeedback[2][RU][13] = "Пациентка периодически нуждалась в подсказках для ответа, что может указывать на некоторое снижение спонтанности. Это не оказало существенного влияния на интервью.";
incorrectFeedback[2][RU][14] = "Многие ответы пациентки так или иначе связаны с темами бреда о &quot;сущности&quot; и ощущении себя Иисусом. Тем не менее пациентка могла переходить на другие темы без значительных затруднений.";
incorrectFeedback[2][RU][15] = "У пациентки не было жалоб, касающихся физического состояния, однако она считает свое состояние здоровья не очень хорошим из-за курения и недостатка физических упражнений. Ее утверждения о беременности от Иисуса не принимались во внимание, так как у нее не было бредового убеждения.";
incorrectFeedback[2][RU][16] = "Пациентка сообщила о некоторой тревоге, связанной с приходом людей к ней как к Иисусу. Это в определенной степени нарушало сон и аппетит в течение последней недели. ";
incorrectFeedback[2][RU][17] = "Пациентка отказалась говорить о событии из своей жизни, однако четко выразила связанное с ним чувство вины и признала, что это беспокоило ее в течение последней недели. Тем не менее она не поглощена этим.";
incorrectFeedback[2][RU][18] = "Во время интервью у пациентки периодически отмечались проявления нервозности, в особенности при обсуждении тем, которые внушают ей тревогу.";
incorrectFeedback[2][RU][19] = "На всем протяжении интервью у пациентки наблюдались неестественные движения рук. Также время от времени отмечались причудливые движения губ. Информатор также отметил этот признак как умеренный.";
incorrectFeedback[2][RU][20] = "Пациентка отрицает ощущение подавленности или депрессии в течение последней недели.";
incorrectFeedback[2][RU][21] = "Речь и движения пациентки без явных отклонений от нормы.";
incorrectFeedback[2][RU][22] = "Пациентка в целом склонна к сотрудничеству, но отказалась обсуждать предмет ее чувства вины.";
incorrectFeedback[2][RU][23] = "У пациентки отмечается множество причудливых и бредовых идей, таких как существование &quot;сущности&quot;, передача мыслей на расстоянии, убеждение в том, что она является Иисусом и беременна антихристом.";
incorrectFeedback[2][RU][24] = "На протяжении интервью пациентка полностью ориентирована.";
incorrectFeedback[2][RU][25] = "Признаков нарушения внимания на протяжении интервью не отмечено.";
incorrectFeedback[2][RU][26] = "Пациентка в настоящее время обнаруживает бредовые идеи. Ее критика к различным симптомам варьирует. Несмотря на то что она способна обозначить свои симптомы как &quot;заблуждения&quot;, она продолжает считать, что &quot;сущность&quot; реальна и именно она вызывает ее симптомы.";
incorrectFeedback[2][RU][27] = "Отмечались мелкие редкие эпизоды нерешительности. Например, дважды пациентка протягивала руку за чашкой кофе, а затем, по-видимому, передумывала и останавливалась.";
incorrectFeedback[2][RU][28] = "Нарушений контроля побуждений не описано и не выявлено.";
incorrectFeedback[2][RU][29] = "Все ответы и эмоциональные реакции пациентки во время интервью связаны с темами бреда. Время от времени она смотрела в сторону, а также сообщала о том, что слышит голоса во время интервью, что указывает на некоторую степень загруженности психическими переживаниями.";
incorrectFeedback[2][RU][30] = "Информатор отметил этот признак как слабо выраженный; пациентка сообщает, что в некоторой степени избегала контактов с другими людьми из-за подозрительности и страха.";

incorrectFeedback[1][PL][1] ="Pacjent prezentuje szeroki wachlarz nieuformowanych i niestabilnych urojeń łącznie z podejrzliwymi/prześladowczymi myślami o tym, że ludzie go osądzają, oskarżają o przestępstwa i insynuują na jego temat. Wyraził też przekonanie, że ma mikrofon w swoim zębie."; 
incorrectFeedback[1][PL][2] = "Wiele z odpowiedzi pacjenta nie odpowiadało od razu na zadane pytanie.";
incorrectFeedback[1][PL][3] = "Pacjent zgłosił codzienne halucynacje, które słyszy wyraźnie. Nie ma pełnych przekonań halucynacyjnych, ale nie wyklucza swoich halucynacyjnych przekonań.";
incorrectFeedback[1][PL][4] = "Pacjent wydawał się zdenerwowany na różnych etapach wywiadu.";
incorrectFeedback[1][PL][5] = "Pacjent zaprzeczył, jakoby miał poczucie lub przekonanie o swojej wspaniałości."
incorrectFeedback[1][PL][6] = "Pacjent jest nieufny i podejrzliwy w stosunku do innych. Okazał luźno sformułowane urojenia prześladowcze na temat tego, że ludzie go oceniają, oskarżają o przestępstwa i insynuują na jego temat podczas rozmowy z nim.";
incorrectFeedback[1][PL][7] = "Pacjent zgłosił, że jest poirytowany i w związku z tym śmieci lub robi groźne miny. Informator również ocenił tę pozycję jako łagodną.";
incorrectFeedback[1][PL][8] = "Afekt pacjenta był stępiony na różnych etapach wywiadu. Zaobserwowano, jak pacjent się złości lub śmieje od czasu do czasu, więc wyższa ocena nie byłaby odpowiednia.";
incorrectFeedback[1][PL][9] = "Pacjent zgłosił okazjonalny brak zaangażowania w ostatnim tygodniu, a informator ocenił tę pozycję jako łagodną.";
incorrectFeedback[1][PL][10] = "Pacjent był otwarty i dobrze rozumiał się z badaczem.";
incorrectFeedback[1][PL][11] = "Na liście informatora ta pozycja jest oceniona jako nieobecna. Pacjent zgłasza chęć częstszych kontaktów z ludźmi oraz że lubi miłe rozmowy. Nie angażuje się więcej z powodu strachu i podejrzliwości, a nie z braku zainteresowania.";
incorrectFeedback[1][PL][12] = "Pacjent przedstawił umiejętność abstrakcyjnego myślenia podczas całego wywiadu i podczas części dotyczącej podobieństw i przysłów.";
incorrectFeedback[1][PL][13] = "Nie zaobserwowano trudności w mówieniu.";
incorrectFeedback[1][PL][14] = "Pacjent pokazał pewne skupienie na powtarzalnych tematach powiązanych z jego podejrzliwością i prześladowaniami, ale bez problemu potrafił zmieniać temat.";
incorrectFeedback[1][PL][15] = "Pacjent zgłosił ogólne dolegliwości zdrowotne powiązane ze starzeniem, utrzymującym się kaszlem i grzybicą stóp.";
incorrectFeedback[1][PL][16] = "Pacjent przyznał się do niepokoju zbliżonego do paniki, który ma wpływ na jego apetyt, przez który je znacznie więcej niż zwykle. Mówił o swoich niepokojach podczas całego wywiadu.";
incorrectFeedback[1][PL][17] = "Pacjent powiedział o wielu sprawach, w związku z którymi czuje się winny, ale powiedział, że nie dokuczało mu to w ostatnim tygodniu.";
incorrectFeedback[1][PL][18] = "Napięcie ujawniało się poprzez nerwowy wygląd pacjenta przez cały wywiad.";
incorrectFeedback[1][PL][19] = "Pacjent wydawał się czasem trochę dziwny ze względu na swoją postawę, ale nie było to wystarczające do udzielenia wyższej oceny.";
incorrectFeedback[1][PL][20] = "Pacjent zaprzeczył, jakoby miał depresję w przeciągu ostatniego tygodnia.";
incorrectFeedback[1][PL][21] = "Ruchy i mowa pacjenta mieściły się w granicach normy.";
incorrectFeedback[1][PL][22] = "Pacjent współpracował przez cały wywiad i odpowiadał na wszystkie pytania.";
incorrectFeedback[1][PL][23] = "Podejrzliwość pacjenta i urojenia są słabo ukształtowane i nie były dziwne. Przekonanie o mikrofonie w zębie może być uznane za dziwne, ale pacjent nie okazał pełnego przekonania co do tego urojenia.";
incorrectFeedback[1][PL][24] = "Pacjent był w pełni zorientowany i odpowiedział poprawnie na wszystkie pytania na orientację.";
incorrectFeedback[1][PL][25] = "Pacjent utrzymał skupienie przez cały wywiad.";
incorrectFeedback[1][PL][26] = "Pacjent nie jest świadomy głównych objawów swojej choroby. Mimo że jest w stanie przyznać, że jego podejrzenia mogą nie być prawdziwe, wysoce w to wątpi. Nie chce też przyznać, że mikrofon w jego zębie jest nieprawdopodobny.";
incorrectFeedback[1][PL][27] = "Istnieją pewne wewnętrzne niezgodności w zeznaniach pacjenta, takie jak zaprzeczanie bycia drażliwym i późniejsze zgłaszanie, że często odczuwa złość i działa pod jej wpływem.";
incorrectFeedback[1][PL][28] = "Pacjent zgłasza, że śmieci i robi groźne miny, kiedy jest zły. Informator również ocenił tę pozycję jako łagodną.";
incorrectFeedback[1][PL][29] = "Pacjent bywał trochę zajęty sobą podczas wywiadu.";
incorrectFeedback[1][PL][30] = "Informator ocenił tę pozycję jako umiarkowaną. Pacjent zgłosił, że boi się ludzi i unika zajęć z innymi ze względu na swoją podejrzliwość i strach przed byciem ocenionym.";


incorrectFeedback[2][PL][1] = "Pacjentka zgłosiła urojenia na temat bycia Jezusem, przekazywania myśli i prawdziwości „jednostki”. Ta wiara ma emocjonalny i behawioralny wpływ, jako że powoduje, że pacjentka unika ludzi.";
incorrectFeedback[2][PL][2] = "Mowa pacjentki była wyraźna i spójna, bez dowodów na przypadkowość lub odbieganie od tematu.";
incorrectFeedback[2][PL][3] = "Pacjentka zgłosiła codzienne halucynacje słuchowe, na które ma urojoną interpretację i emocjonalną reakcję. Zgłosiła również omamy węchowe.";
incorrectFeedback[2][PL][4] = "Podczas wywiadu nie zaobserwowano pobudzenia psychomotorycznego. Ruchy pacjentki przypisywane do niepokoju zostały wychwycone w obrębie napięcia (G4).";
incorrectFeedback[2][PL][5] = "Pomimo, że pacjentka ma urojenia odnośnie specjalnej pozycji (bycia Jezusem), nie ma przesadnego zdania o sobie i czuje, że nie spisała się dobrze i zawodzi ludzi bardziej niż czuje się wspaniała.";
incorrectFeedback[2][PL][6] = "Pacjentka utrzymuje urojenie o jednostce, która powoduje chorobę i objawy. Czasami bywała wymijająca i wielokrotnie unikała innych z powodu ludzi, którzy złoszczą się na nią za bycie „nie w pełni Jezusem”.";
incorrectFeedback[2][PL][7] = "Pacjentka przyznaje się do bycie wewnętrznie podirytowaną w ostatnim tygodniu. Jednakże nie okazała gniewu innym i nie zauważył tego informator, więc jej podirytowanie mogło być niezauważalne dla innych.";
incorrectFeedback[2][PL][8] = "Afekt pacjentki był stępiony na różnych etapach wywiadu. Nie osiągał stopnia, który umożliwiałby wyższą ocenę, ponieważ potrafiła się spontanicznie uśmiechnąć i okazywała zmienny głos podczas wywiadu.";
incorrectFeedback[2][PL][9] = "Pacjentka wielokrotnie angażowała się w różne zajęcia w ostatnim tygodniu, między innymi w kawę z przyjaciółmi, muzykę i ogrodnictwo.";
incorrectFeedback[2][PL][10] = "Wzajemne zrozumienie z pacjentem było ogólnie dobre. Jedynie od czasu do czasu nie było kontaktu wzrokowego. Nie zakłóciło to wywiadu.";
incorrectFeedback[2][PL][11] = "Informator ocenił tę pozycję jako łagodną. W ostatnim tygodniu zdarzyło się kilka sytuacji, kiedy pacjentka nie chciała angażować z zajęcia z innymi.";
incorrectFeedback[2][PL][12] = "Pacjentka potrafiła podać abstrakcyjne odpowiedzi na każde podobieństwo i przysłowie, i nie wykazał konkretnego myślenia podczas wywiadu. Należy pamiętać, że ta pozycje nie jest oceniana pod kątem tego, czy pacjentka podała „poprawne” odpowiedzi na przysłowia, ale pod kątem tego, czy pacjentka wykazuje abstrakcyjne myślenie.";
incorrectFeedback[2][PL][13] = "Pacjentka wymagała czasem zachęt do odpowiedzi, co może wskazywać na pewien brak spontaniczności. Nie miało to istotnego wpływu na wywiad.";
incorrectFeedback[2][PL][14] = "Wiele odpowiedzi pacjentki dotyczyło urojonych tematów odnośnie „jednostki” i bycia Jezusem. Jednakże potrafiła zmienić temat z niewielką trudnością.";
incorrectFeedback[2][PL][15] = "Pacjentka zgłosiła dolegliwości fizyczne, ale uważa, że jej zdrowie nie jest w dobrym stanie z powodu palenia i braku ćwiczeń. Jej wiara w bycie w ciąży z Jezusem nie została uznana, ponieważ nie miała przekonania do urojenia.";
incorrectFeedback[2][PL][16] = "Pacjentka zgłosiła niepokój związany z osobami przychodzącymi do niej, ponieważ jest Jezusem. To spowodowało pewne zaburzenia snu i apetytu w ostatnim tygodniu. ";
incorrectFeedback[2][PL][17] = "Pacjentka odmówiła rozmawiania o wydarzeniu z jej życia, ale wyraziła jasne poczucie winy z jego powodu i przyznała, że dokuczało jej to w ostatnim tygodniu. Jednak nie jest tym pochłonięta.";
incorrectFeedback[2][PL][18] = "Pacjentka wydała się czasem niespokojna podczas wywiadu, szczególnie podczas omawiania tematów, które ją niepokoiły.";
incorrectFeedback[2][PL][19] = "Pacjentka pokazała nienaturalne ruchy dłoni podczas całego wywiadu. Pokazała również czasami dziwne ruchy ustami. Informator również ocenił tę pozycję jako umiarkowaną.";
incorrectFeedback[2][PL][20] = "Pacjentka zaprzeczyła, jakoby miała depresję lub odczuwała smutek w przeciągu ostatniego tygodnia.";
incorrectFeedback[2][PL][21] = "Mowa i ruchy pacjentki wydały się być w granicach normy.";
incorrectFeedback[2][PL][22] = "Pacjentka ogólnie współpracowała, ale odmówiła rozmowy na temat jej poczucia winy.";
incorrectFeedback[2][PL][23] = "Pacjentka wykazała wiele dziwnych idei/urojeń, takich jak istnienie „jednostki”, przekazywanie swoich myśli, bycie Jezusem i bycie w ciąży z Antychrystem.";
incorrectFeedback[2][PL][24] = "Pacjentka był w pełni zorientowana podczas wywiadu.";
incorrectFeedback[2][PL][25] = "Nie było dowodów na słabe skupienie uwagi w trakcie wywiadu.";
incorrectFeedback[2][PL][26] = "Pacjentka obecnie na urojenia i ma zróżnicowane poglądy na swoje objawy. Podczas gdy potrafi określić swoje objawy jako „urojenia”, nadal wierzy, że „jednostka” jest prawdziwa i że to ona jest przyczyną jej objawów.";
incorrectFeedback[2][PL][27] = "Zdarzały się mniejsze, okazjonalne przypadki braku zdecydowania. Na przykład zdarzyło się dwa razy, że pacjentka sięgnęła po kawę i zdawała się zmienić zdanie i zatrzymać.";
incorrectFeedback[2][PL][28] = "Nie zgłoszono lub odnotowano trudności z kontrolą impulsów.";
incorrectFeedback[2][PL][29] = "Odpowiedzi i reakcje emocjonalne pacjentki podczas wywiadu odnosiły się do tematów urojonych. Czasem zdawała się patrzeć w bok pokoju i zgłaszała, że słyszy głosy podczas wywiadu, co wskazuje na pewien poziom wewnętrznego zaabsorbowania.";
incorrectFeedback[2][PL][30] = "Informator ocenił tę pozycję jako łagodną, a pacjentka zgłosiła pewien stopień unikania innych ze względu na podejrzliwość i strach.";

incorrectFeedback[1][BG][1] = "Пациентът има богат набор от неоформени и нестабилни делюзии, включващи подозрителни/персекуторни мисли, че хората го съдят, набеждават го в престъпления и използват инсинуации срещу него. Също така той изразява убеденост, че има микрофон в зъба си.";
incorrectFeedback[1][BG][2] = "Голям брой от отговорите на пациента не съвпадат със зададения въпрос.";
incorrectFeedback[1][BG][3] = "Пациентът съобщава за ежедневни халюцинации, които чува ясно. Той не е напълно убеден в делюзиите си, но не изключва делюзионното си тълкуване на ситуацията.";
incorrectFeedback[1][BG][4] = "Пациентът изглежда ажитиран в различни моменти от интервюто.";
incorrectFeedback[1][BG][5] = "Пациентът отрича чувства или убеденост за грандиозност.";
incorrectFeedback[1][BG][6] = "Пациентът е недоверчив и подозрителен спрямо околните. Той съобщава за неясно оформени персекуторни делюзии, че хората го съдят, набеждават го в престъпления и използват инсинуации срещу него, когато разговарят.";
incorrectFeedback[1][BG][7] = "Пациентът съобщава, че е раздразнителен и дава израз на това, хвърляйки отпадъци и мусейки се на околните. Сътрудникът оценява този елемент като лек.";
incorrectFeedback[1][BG][8] = "Афектът на пациента е притъпен в множество моменти от интервюто. Наблюдението му показва моменти на гняв и смях, които правят по-висока оценка неоправдана.";
incorrectFeedback[1][BG][9] = "Пациентът съобщава, че не се чувства ангажиран през седмицата; сътрудникът оценява този елемент като лек.";
incorrectFeedback[1][BG][10] = "Пациентът е открит и поддържа добър контакт с интервюиращия.";
incorrectFeedback[1][BG][11] = "Сътрудникът е определил този елемент като отсъстващ. Пациентът съобщава за желание да общува повече с хора и че се наслаждава на добрите разговори. Той не го прави повече поради страх и подозрителност, а не заради липса на интерес.";
incorrectFeedback[1][BG][12] = "Пациентът показва способност за абстрактно мислене през цялото интервю, както и при частта от интервюто за оценка на сходства и пословици.";
incorrectFeedback[1][BG][13] = "Не е наблюдавано затруднение на речевата продукция.";
incorrectFeedback[1][BG][14] = "Пациентът показва известно концентриране върху повтарящи се теми, свързани с подозрителността му, но може да бъде пренасочен без трудност.";
incorrectFeedback[1][BG][15] = "Пациентът се оплаква от здравословни проблеми от общ характер, свързани с възрастта, кашлица с давност и гъбички по пръстите на краката.";
incorrectFeedback[1][BG][16] = "Пациентът признава за близка до паника тревожност, която се отразява на апетита му, карайки го да изяжда много повече храна от обичайното. През цялото интервю той говори за тревожността си.";
incorrectFeedback[1][BG][17] = "Пациентът съобщава за няколко неща, за които изпитва вина, но също и че те не са го занимавали през последната седмица.";
incorrectFeedback[1][BG][18] = "Напрежението е явно от нервния вид на пациента по време на интервюто.";
incorrectFeedback[1][BG][19] = "Поради позата си пациентът изглежда странно на моменти, но това не е достатъчно забележително за по-висока оценка.";
incorrectFeedback[1][BG][20] = "Пациентът отрича депресия през изминалата седмица";
incorrectFeedback[1][BG][21] = "Движенията и речта на пациента са в нормални граници.";
incorrectFeedback[1][BG][22] = "През цялото интервю пациентът съдейства и отговаря на всички въпроси.";
incorrectFeedback[1][BG][23] = "Подозренията и делюзиите на пациента са слабо оформени и не са чудати. Убедеността в наличието на микрофон в зъба може да бъде сметната за чудата, но пациентът не изразява пълна делюзионна убеденост в това.";
incorrectFeedback[1][BG][24] = "Пациентът е напълно ориентиран и отговаря правилно на всички въпроси за ориентация.";
incorrectFeedback[1][BG][25] = "Пациентът поддържа активно внимание през цялото интервю.";
incorrectFeedback[1][BG][26] = "Пациентът не е наясно с главните симптоми на болестта си. Въпреки че той допуска, че подозренията му може би са неправилни, той дълбоко се съмнява в това. Той не желае да допусне, че наличието на микрофон в зъба му е неправдоподобно.";
incorrectFeedback[1][BG][27] = "Съществуват вътрешни противоречия в съобщеното от пациента, като например отричане на раздразнителност и по-късно признаване, че често се ядосва и дава израз на това.";
incorrectFeedback[1][BG][28] = "Пациентът съобщава, че хвърля отпадъци и се муси, когато е ядосан. Сътрудникът оценява и този елемент като лек.";
incorrectFeedback[1][BG][29] = "Пациентът е леко погълнат от себе си на моменти по време на интервюто.";
incorrectFeedback[1][BG][30] = "Сътрудникът оценява този елемент като средно тежък. Пациентът съобщава за страх от хора и избягване на съвместни дейности с други поради подозрителност и страх, че ще бъде съден.";


incorrectFeedback[2][BG][1] = "Пациентката съобщава за делюзии, че е Исус, предаване на мисли и реално присъствие на „същество“. Тези убеждения имат емоционален и поведенчески отзвук, тъй като водят до социална изолация.";
incorrectFeedback[2][BG][2] = "Речта на пациентката е ясна и съгласувана без доказателства за обстоятелственост или тангенциалност.";
incorrectFeedback[2][BG][3] = "Пациентката съобщава за ежедневни слухови халюцинации, за които има делюзионна интерпретация и емоционален отговор. Също така се съобщава за обонятелни халюцинации.";
incorrectFeedback[2][BG][4] = "По време на интервюто не е наблюдавана психомоторна ажитация. Движенията на пациентката, обяснени с вълнение, са коментирани под „Напрежение“ (G4).";
incorrectFeedback[2][BG][5] = "Въпреки че пациентката има делюзии за особен статус (че е Исус), няма наличие на преувеличена самооценка, а тя чувства, че не се справя добре и по-скоро разочарова хората, отколкото да се чувства грандиозно.";
incorrectFeedback[2][BG][6] = "Пациентката признава за делюзия за същество, причиняващо болестта и симптомите й. На моменти тя поддържа защитно поведение и избягва хората, защото те са й ядосани, задето не е „достатъчно Исус“.";
incorrectFeedback[2][BG][7] = "Пациентката признава за вътрешна раздразнителност през изминалата седмица. Въпреки това тя не е изразявала гняв към околните и това не е забелязано от сътрудника, така че раздразнителността й може да не е била явна за околните.";
incorrectFeedback[2][BG][8] = "Афектът на пациентката е притъпен в множество моменти от интервюто. Това не е до степен, оправдаваща по-висока оценка, тъй като тя е в състояние да се усмихне спонтанно и по време на интервюто има мелодия на гласа.";
incorrectFeedback[2][BG][9] = "Съобщено е, че пациентката се е включвала в множество занимания през изминалата седмица, включващи кафе с приятели, музика и градинарство.";
incorrectFeedback[2][BG][10] = "Контактът на пациентката като цяло е добър с нередовна загуба на зрителен контакт. Това не пречи на интервюто.";
incorrectFeedback[2][BG][11] = "Сътрудникът оценява този елемент като лек. В няколко случая през изминалата седмица пациентката не е желаела да общува с други хора.";
incorrectFeedback[2][BG][12] = "Пациентката успява да даде абстрактни отговори за всяко от сходствата и пословиците, като не показва конкретно мислене по време на интервюто. Забележете, че този елемент не се оценява в зависимост от това дали отговорът на пословиците е &quot;правилен&quot;, а на основание дали пациентът показва абстрактно мислене.";
incorrectFeedback[2][BG][13] = "Пациентката се нуждае от подканяния да отговори, което би могло да свидетелства за известна липса на спонтанност. Това няма съществен ефект върху интервюто.";
incorrectFeedback[2][BG][14] = "Множество от отговорите на пациентката се въртят около делюзионна тематика, включваща „съществото“ и това, че е Исус. Въпреки това с малки трудности е възможно тя да бъде пренасочена към други теми.";
incorrectFeedback[2][BG][15] = "Пациентката не съобщава за физически оплаквания, но е убедена, че не е в добро здраве, защото пуши и не прави упражнения. Убедеността й, че е бременна с Исус не е отчетена, тъй като тя няма делюзионна убеденост";
incorrectFeedback[2][BG][16] = "Пациентката съобщава за известна тревожност, свързана с това, че хора идват при нея, защото тя е Исус. Това има известно отражение върху съня и апетита през изминалата седмица. ";
incorrectFeedback[2][BG][17] = "Пациентката отказва да говори за събитие от живота й, но ясно изразява вина за него и признава, че то я е занимавало през последната седмица. Въпреки това тя не е обзета от мисли за него.";
incorrectFeedback[2][BG][18] = "Пациентката изглежда нервна на моменти, особено при обсъждане на теми, които я напрягат.";
incorrectFeedback[2][BG][19] = "Пациентката показва неестествени движения на ръцете през цялото интервю. На моменти тя също показва странни движения с устни. Сътрудникът също оценява този елемент като средно тежък.";
incorrectFeedback[2][BG][20] = "Пациентката отрича за чувства на тъга или депресия през изминалата седмица.";
incorrectFeedback[2][BG][21] = "Речта и движенията на пациентката са в нормални граници.";
incorrectFeedback[2][BG][22] = "Пациентката като цяло съдейства, но отказва да обсъжда съдържанието на чувството си за вина.";
incorrectFeedback[2][BG][23] = "Пациентката има множество странни идеи/делюзии, като например съществуването на &quot;същество&quot;, мислите й, че е излъчвател, че е Исус и че е бременна с Антихриста.";
incorrectFeedback[2][BG][24] = "По време на интервюто пациентката е напълно ориентирана.";
incorrectFeedback[2][BG][25] = "Липсват доказателства за редуцирано активно внимание по време на интервюто.";
incorrectFeedback[2][BG][26] = "Пациентката има делюзии и непостоянно съзнание за симптомите си. Макар и да може да определи симптомите си като „делюзии“, тя вярва, че „съществото“ е реално и че причинява симптомите й.";
incorrectFeedback[2][BG][27] = "Има малки и редки прояви на нерешителност. Например на два пъти пациентката протяга ръка към чашата с кафе, но изглежда размисля и спира.";
incorrectFeedback[2][BG][28] = "Не са съобщени или забелязани затруднения в контрола на импулса.";
incorrectFeedback[2][BG][29] = "Отговорите и емоционалните изблици на пациента по време на интервюто са свързани с делюзионното съдържание. На моменти тя гледа настрани и съобщава, че чува гласове по време интервюто, което свидетелства за някакво ниво на самовглъбеност.";
incorrectFeedback[2][BG][30] = "Сътрудникът оценява този елемент като лек, а пациентката съобщава, че понякога избягва хората заради подозрения и страх.";

// Course Title (for report)	
var strCourseTitle = parent.make2dArray(nRPEs+1);
strCourseTitle[1][EN] = "PANSS Rating Precision Exercise 1";
strCourseTitle[2][EN] = "PANSS Rating Precision Exercise 2";

// ET placeholder
strCourseTitle[1][ET] = "PANSS-i hindamistäpsuse harjutus 1";
strCourseTitle[2][ET] = "PANSS-i hindamistäpsuse harjutus 2";
// DA placeholder
// NL placeholder
// FI placeholder
strCourseTitle[1][FI] = "PANSS-pisteytyksen tarkkuusharjoitus 1";
strCourseTitle[2][FI] = "PANSS-pisteytyksen tarkkuusharjoitus 2";
// FR placeholder

strCourseTitle[1][FR] = "Exercice 1 PANSS Évaluation de la précision";
strCourseTitle[2][FR] = "Exercice 2 PANSS Évaluation de la précision";

// DE placeholder

strCourseTitle[1][HU] = "PANSS értékelés, 1. pontossági gyakorlat";
strCourseTitle[2][HU] = "PANSS értékelés, 2. pontossági gyakorlat";

// IT placeholder
// JA placeholder
// KO placeholder
// NO placeholder
// PT placeholder
// ES placeholder
// TR placeholder

strCourseTitle[1][RO] = "Exerciţiul 1 privind precizia scorului PANSS";
strCourseTitle[2][RO] = "Exerciţiul 2 privind precizia scorului PANSS";

strCourseTitle[1][RU] = "Упражнение на точность PANSS 1";
strCourseTitle[2][RU] = "Упражнение на точность PANSS 2";

strCourseTitle[1][PL] = "PANSS Ocena precyzji Ćwiczenie 1";
strCourseTitle[2][PL] = "PANSS Ocena precyzji Ćwiczenie 2";


strCourseTitle[1][BG] = "Упражнение 1 за точно оценяване по PANSS";
strCourseTitle[2][BG] = "Упражнение 2 за точно оценяване по PANSS";


// Evaluation criteria description (for report)
var strEvalCriteriaDesc = parent.make2dArray(nRPEs+1);
strEvalCriteriaDesc[1][EN] = "Pass if both <b>PANSS Positive Total</b> and <b>Grand Total</b> are within 20% of the Standard Score.";
strEvalCriteriaDesc[2][EN] = "Pass if both <b>PANSS Positive Total</b> and <b>Grand Total</b> are within 20% of the Standard Score.";

// CS placeholder
strEvalCriteriaDesc[1][ET] = "Ülesanne loetakse läbituks kui nii <b>PANSS-i positiivne skaala kokku</b> kui ka <b>Kogusumma</b> on vähemalt 20% standardskoorist.";
strEvalCriteriaDesc[2][ET] = "Ülesanne loetakse läbituks kui nii <b>PANSS-i positiivne skaala kokku</b> kui ka <b>Kogusumma</b> on vähemalt 20% standardskoorist.";

// DA placeholder
// NL placeholder
// FI placeholder
strEvalCriteriaDesc[1][FI] = "Läpäisy, jos sekä <b>PANSS-arvioinnin positiiviset yhteensä</b> että <b>Kaikki yhteensä</b> ovat 20 %:n sisällä vakiopisteistä.";
strEvalCriteriaDesc[2][FI] = "Läpäisy, jos sekä <b>PANSS-arvioinnin positiiviset yhteensä</b> että <b>Kaikki yhteensä</b> ovat 20 %:n sisällä vakiopisteistä.";


strEvalCriteriaDesc[1][FR] = "Réussi si « <b>Total positif PANSS</b> » et « <b>Total général</b> » correspondent à 20 % des notes standard.";
strEvalCriteriaDesc[2][FR] = "Réussi si « <b>Total positif PANSS</b> » et « <b>Total général</b> » correspondent à 20 % des notes standard.";

// DE placeholder

strEvalCriteriaDesc[1][HU] = "Átment, ha a „<b>PANSS pozitív összpontszám</b>” és a „<b>Végösszeg</b>” is az Általános pontszám 20%-án belül van.";
strEvalCriteriaDesc[2][HU] = "Átment, ha a „<b>PANSS pozitív összpontszám</b>” és a „<b>Végösszeg</b>” is az Általános pontszám 20%-án belül van.";

// IT placeholder
// JA placeholder
// KO placeholder
// NO placeholder
// PT placeholder
// ES placeholder
// TR placeholder

strEvalCriteriaDesc[1][RO] = "Promovare dacă atât „<b>PANSS pozitiv total</b>” cât şi „<b>Total general</b>” nu diferă cu mai mult de 20% faţă de Scorul standard.";
strEvalCriteriaDesc[2][RO] = "Promovare dacă atât „<b>PANSS pozitiv total</b>” cât şi „<b>Total general</b>” nu diferă cu mai mult de 20% faţă de Scorul standard.";

strEvalCriteriaDesc[1][RU] = "результат засчитывается, если <b>общий балл позитивных синдромов по шкале PANSS</b> и итоговый <b>общий балл</b> отклоняются от стандартной оценки не более чем на 20%.";
strEvalCriteriaDesc[2][RU] = "результат засчитывается, если <b>общий балл позитивных синдромов по шкале PANSS</b> и итоговый <b>общий балл</b> отклоняются от стандартной оценки не более чем на 20%.";


strEvalCriteriaDesc[1][PL] = "Przekazać, jeśli oba <b> PANSS Pozytywna Razem </ b> i <b> RAZEM </ b> są w 20% standardowej wynik.";
strEvalCriteriaDesc[2][PL] = "Przekazać, jeśli oba <b> PANSS Pozytywna Razem </ b> i <b> RAZEM </ b> są w 20% standardowej wynik.";


strEvalCriteriaDesc[1][BG] = "Премини ако и двете <б> PANSS Positive Общо </ B> и <б> Grand Общо </ B> са в рамките на 20% от Standard Score.";
strEvalCriteriaDesc[2][BG] = "Премини ако и двете <б> PANSS Positive Общо </ B> и <б> Grand Общо </ B> са в рамките на 20% от Standard Score.";