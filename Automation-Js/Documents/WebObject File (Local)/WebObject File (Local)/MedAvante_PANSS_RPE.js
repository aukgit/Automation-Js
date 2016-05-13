/////////////////////////////////////////////////
/////////////////////////////////////////////////
//
// PANSS_RPE
//
// Scale-specific, not RPE-specific variables
//
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////

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


// Scale Parameters
var courseObject = parent.courseObject;
courseObject.courseTotalItems = 30;		// # of items in scale (equivalent to nScaleItems)
courseObject.courseScoredItems = 2;		// Positive total and grand total are only scored items
courseObject.coursePassingItems = 2;	// Both scored items must be correc to pass
courseObject.coursePassingScore = 2;	// 
courseObject.coursePassingPercent = 100;	// passing percentage (coursePassingItems / courseScoredItems) * 100

var nScaleItems = courseObject.courseTotalItems;	// nScaleItems kept for historical code reasons (loop counter)

var groupItem = parent.make2dArray(nLanguages+1);
groupItem[EN][1] = "PANSS Positive Scale";
groupItem[EN][2] = "PANSS Negative Scale";
groupItem[EN][3] = "PANSS General Scale";

// CS placeholder
// DA placeholder
// NL placeholder
// FR placeholder

groupItem[FR][1] = "Total positif PANSS";
groupItem[FR][2] = "Total négatif PANSS";
groupItem[FR][3] = "Total général PANSS";

// DE placeholder

groupItem[HU][1] = "PANSS pozitív összpontszám";
groupItem[HU][2] = "PANSS negatív összpontszám";
groupItem[HU][3] = "PANSS általános összpontszám";

// IT placeholder
// JA placeholder
// KO placeholder
// NO placeholder
// PT placeholder
// ES placeholder
// TR placeholder

groupItem[RO][1] = "Total PANSS pozitiv";
groupItem[RO][2] = "PANSS negativ total";
groupItem[RO][3] = "PANSS general total";

groupItem[RU][1] = "Общий балл позитивных симптомов PANSS";
groupItem[RU][2] = "Общий балл негативных симптомов PANSS";
groupItem[RU][3] = "Общий балл PANSS";


groupItem[PL][1] = "PANSS Skala dodatnia";
groupItem[PL][2] = "PANSS Skala ujemna";
groupItem[PL][3] = "PANSS Ogólna skala";

groupItem[BG][1] = "Позитивна скала";
groupItem[BG][2] = "Негативна скала";
groupItem[BG][3] = "Обща психопатологична скала";

// ET placeholder
groupItem[ET][1] = "PANSS Positiivne skaala";
groupItem[ET][2] = "PANSS Negatiivne skaala";
groupItem[ET][3] = "PANSS Üldine psühhopatoloogia skaala";

//FI placeholder
groupItem[FI][1] = "Positiivinen asteikko";
groupItem[FI][2] = "Negatiivinen asteikko";
groupItem[FI][3] = "Yleisasteikko";


// Calculated items are not displayed on data entry form - place holders only
var scaleItem = parent.make2dArray(nLanguages+1);
scaleItem[EN][1] = "P1. " + "Delusions";
scaleItem[EN][2] = "P2. " + "Conceptual Disorganization";
scaleItem[EN][3] = "P3. " + "Hallucinatory Behavior";
scaleItem[EN][4] = "P4. " + "Excitement";
scaleItem[EN][5] = "P5. " + "Grandiosity";
scaleItem[EN][6] = "P6. " + "Suspiciousness/Persecution";
scaleItem[EN][7] = "P7. " + "Hostility";
scaleItem[EN][8] = "N1. " + "Blunted Affect";
scaleItem[EN][9] = "N2. " + "Emotional Withdrawal";
scaleItem[EN][10] = "N3. " + "Poor Rapport ";
scaleItem[EN][11] = "N4. " + "Passive/Apathetic Social Withdrawal";
scaleItem[EN][12] = "N5. " + "Difficulty in Abstract Thinking";
scaleItem[EN][13] = "N6. " + "Lack of Spontaneity and Conv. Flow";
scaleItem[EN][14] = "N7. " + "Stereotyped Thinking";
scaleItem[EN][15] = "G1. " + "Somatic Concern";
scaleItem[EN][16] = "G2. " + "Anxiety";
scaleItem[EN][17] = "G3. " + "Guilt Feelings";
scaleItem[EN][18] = "G4. " + "Tension";
scaleItem[EN][19] = "G5. " + "Mannerisms and Posturing";
scaleItem[EN][20] = "G6. " + "Depression";
scaleItem[EN][21] = "G7. " + "Motor Retardation";
scaleItem[EN][22] = "G8. " + "Uncooperativeness";
scaleItem[EN][23] = "G9. " + "Unusual Thought Content";
scaleItem[EN][24] = "G10. " + "Disorientation";
scaleItem[EN][25] = "G11. " + "Poor Attention ";
scaleItem[EN][26] = "G12. " + "Lack of Judgment and Insight";
scaleItem[EN][27] = "G13. " + "Disturbance of Volition";
scaleItem[EN][28] = "G14. " + "Poor Impulse Control";
scaleItem[EN][29] = "G15. " + "Preoccupation";
scaleItem[EN][30] = "G16. " + "Active Social Avoidance";

// ET placeholder
scaleItem[ET][1] = "P1. " + "Luulud";
scaleItem[ET][2] = "P2. " + "Kontseptuaalne desorganiseeritus";
scaleItem[ET][3] = "P3. " + "Hallutsinatoorne käitumine";
scaleItem[ET][4] = "P4. " + "Rahutus";
scaleItem[ET][5] = "P5. " + "Suurusluul";
scaleItem[ET][6] = "P6. " + "Kahtlustamine/tagakiusamine";
scaleItem[ET][7] = "P7. " + "Vaenulikkus";
scaleItem[ET][8] = "N1. " + "Emotsioonide tuimenemine";
scaleItem[ET][9] = "N2. " + "Emotsionaalne endassetõmbumine";
scaleItem[ET][10] = "N3. " + "Kontakti puudumine";
scaleItem[ET][11] = "N4. " + "Passiivne/apaatne sotsiaalne endassetõmbumine";
scaleItem[ET][12] = "N5. " + "Abstraktse mõtlemise raskused";
scaleItem[ET][13] = "N6. " + "Spontaansuse ja kõne voolavuse puudumine";
scaleItem[ET][14] = "N7. " + "Stereotüüpne mõtlemine";
scaleItem[ET][15] = "G1. " + "Somaatiline mure";
scaleItem[ET][16] = "G2. " + "Ärevus";
scaleItem[ET][17] = "G3. " + "Süütunne";
scaleItem[ET][18] = "G4. " + "Pingulolek";
scaleItem[ET][19] = "G5. " + "Manerism ja poosid";
scaleItem[ET][20] = "G6. " + "Depressioon";
scaleItem[ET][21] = "G7. " + "Motoorne pidurdus";
scaleItem[ET][22] = "G8. " + "Koostöövalmiduse puudumine";
scaleItem[ET][23] = "G9. " + "Ebaharilikud mõtted";
scaleItem[ET][24] = "G10. " + "Desorientatsioon";
scaleItem[ET][25] = "G11. " + "Tähelepanuhäired";
scaleItem[ET][26] = "G12. " + "Adekvaatse arusaama/hinnangu puudumine";
scaleItem[ET][27] = "G13. " + "Tahtehäired";
scaleItem[ET][28] = "G14. " + "Nõrk impulsside kontroll";
scaleItem[ET][29] = "G15. " + "Mõttessevajumine";
scaleItem[ET][30] = "G16. " + "Aktiivne sotsiaalne vältimine";
// FI placeholder
scaleItem[FI][1] = "P1. " + "Harhaluuloisuus";
scaleItem[FI][2] = "P2. " + "Hajanainen ajattelu";
scaleItem[FI][3] = "P3. " + "Harhainen käyttäytyminen";
scaleItem[FI][4] = "P4. " + "Kiihtymys";
scaleItem[FI][5] = "P5. " + "Suuruusharhaluuloisuus";
scaleItem[FI][6] = "P6. " + "Epäluuloisuus/vainoharhat";
scaleItem[FI][7] = "P7. " + "Vihamielisyys";
scaleItem[FI][8] = "N1. " + "Tunneilmaisun väheneminen";
scaleItem[FI][9] = "N2. " + "Emotionaalinen vetäytyminen";
scaleItem[FI][10] = "N3. " + "Vuorovaikutuksen köyhtyminen ";
scaleItem[FI][11] = "N4. " + "Passiivis-apaattinen sosiaalinen vetäytyminen";
scaleItem[FI][12] = "N5. " + "Abstraktin ajattelun vaikeus";
scaleItem[FI][13] = "N6. " + "Spontaanisuuden ja sujuvan keskustelun puute";
scaleItem[FI][14] = "N7. " + "Kaavamainen ajattelu";
scaleItem[FI][15] = "G1. " + "Somaattiset huolet";
scaleItem[FI][16] = "G2. " + "Ahdistuneisuus";
scaleItem[FI][17] = "G3. " + "Syyllisyyden tunteet";
scaleItem[FI][18] = "G4. " + "Jännittyneisyys";
scaleItem[FI][19] = "G5. " + "Maneerit ja asennot";
scaleItem[FI][20] = "G6. " + "Masennus";
scaleItem[FI][21] = "G7. " + "Motorinen hidastuminen";
scaleItem[FI][22] = "G8. " + "Yhteistyöhaluttomuus";
scaleItem[FI][23] = "G9. " + "Epätavalliset ajatussisällöt";
scaleItem[FI][24] = "G10. " + "Desorientaatio";
scaleItem[FI][25] = "G11. " + "Heikentynyt tarkkaavaisuus";
scaleItem[FI][26] = "G12. " + "Arviointikyvyn ja oivalluksen puute";
scaleItem[FI][27] = "G13. " + "Tahtoelämän häiriöt";
scaleItem[FI][28] = "G14. " + "Heikko impulssikontrolli";
scaleItem[FI][29] = "G15. " + "Sisäänpäinkääntyneisyys";
scaleItem[FI][30] = "G16. " + "Sosiaalinen eristäytyminen";

// NL placeholder
// FI placeholder

scaleItem[FR][1] = "P1. " + "Délires";
scaleItem[FR][2] = "P2. " + "Désorganisation conceptuelle";
scaleItem[FR][3] = "P3. " + "Comportement hallucinatoire";
scaleItem[FR][4] = "P4. " + "Excitation";
scaleItem[FR][5] = "P5. " + "Grandeur";
scaleItem[FR][6] = "P6. " + "Suspicion/persécution";
scaleItem[FR][7] = "P7. " + "Hostilité";
scaleItem[FR][8] = "N1. " + "Affectivité diminuée";
scaleItem[FR][9] = "N2. " + "Retrait émotionnel";
scaleItem[FR][10] = "N3. " + "Rapports de mauvaise qualité ";
scaleItem[FR][11] = "N4. " + "Passivité/Retrait social apathique";
scaleItem[FR][12] = "N5. " + "Difficultés relatives à la pensée abstraite";
scaleItem[FR][13] = "N6. " + "Manque de spontanéité et flux de la conversation";
scaleItem[FR][14] = "N7. " + "Pensée stéréotypée";
scaleItem[FR][15] = "G1. " + "Préoccupations somatiques";
scaleItem[FR][16] = "G2. " + "Anxiété";
scaleItem[FR][17] = "G3. " + "Sentiments de culpabilité";
scaleItem[FR][18] = "G4. " + "Tension";
scaleItem[FR][19] = "G5. " + "Manières et postures";
scaleItem[FR][20] = "G6. " + "Dépression";
scaleItem[FR][21] = "G7. " + "Retards moteurs";
scaleItem[FR][22] = "G8. " + "Non coopération";
scaleItem[FR][23] = "G9. " + "Contenu inhabituel des pensées";
scaleItem[FR][24] = "G10. " + "Désorientation";
scaleItem[FR][25] = "G11. " + "Faible attention ";
scaleItem[FR][26] = "G12. " + "Manque de jugement et de perspicacité";
scaleItem[FR][27] = "G13. " + "Perturbations de la volonté";
scaleItem[FR][28] = "G14. " + "Mauvais contrôle de l'impulsion";
scaleItem[FR][29] = "G15. " + "Préoccupations";
scaleItem[FR][30] = "G16. " + "Évitement social actif";

// DE placeholder

scaleItem[HU][1] = "P1. " + "Téveszmék";
scaleItem[HU][2] = "P2. " + "Gondolati rendezetlenség";
scaleItem[HU][3] = "P3. " + "Hallucinációs viselkedés";
scaleItem[HU][4] = "P4. " + "Izgatottság";
scaleItem[HU][5] = "P5. " + "Túlértékelt énkép";
scaleItem[HU][6] = "P6. " + "Gyanakvás/üldöztetés";
scaleItem[HU][7] = "P7. " + "Ellenségesség";
scaleItem[HU][8] = "N1. " + "Tompult kifejezések";
scaleItem[HU][9] = "N2. " + "Érzelmi visszahúzódás";
scaleItem[HU][10] = "N3. " + "Gyenge raport ";
scaleItem[HU][11] = "N4. " + "Passzív/apatikus szociális visszahúzódás";
scaleItem[HU][12] = "N5. " + "Absztrakt gondolkodási nehézségek";
scaleItem[HU][13] = "N6. " + "Spontaneitás és a párbeszéd fenntartásának hiánya";
scaleItem[HU][14] = "N7. " + "Sztereotipizált gondolkodás";
scaleItem[HU][15] = "G1. " + "Szomatikus aggályok";
scaleItem[HU][16] = "G2. " + "Szorongás";
scaleItem[HU][17] = "G3. " + "Bűntudat";
scaleItem[HU][18] = "G4. " + "Feszültség";
scaleItem[HU][19] = "G5. " + "Modorosság és testtartás";
scaleItem[HU][20] = "G6. " + "Depresszió";
scaleItem[HU][21] = "G7. " + "Motoros retardáció";
scaleItem[HU][22] = "G8. " + "Engedetlenség";
scaleItem[HU][23] = "G9. " + "zokatlan tartalmú gondolatok";
scaleItem[HU][24] = "G10. " + "Tájékozódási zavar";
scaleItem[HU][25] = "G11. " + "Gyenge figyelem ";
scaleItem[HU][26] = "G12. " + "Ítélőképesség és belátás hiánya";
scaleItem[HU][27] = "G13. " + "Zavart döntéshozatal";
scaleItem[HU][28] = "G14. " + "Gyenge impulzuskontroll";
scaleItem[HU][29] = "G15. " + "Belefeledkezés";
scaleItem[HU][30] = "G16. " + "Aktív szociális visszahúzódás";

// IT placeholder
// JA placeholder
// KO placeholder
// NO placeholder
// PT placeholder
// ES placeholder
// TR placeholder

scaleItem[RO][1] = "P1. " + "Iluzii";
scaleItem[RO][2] = "P2. " + "Dezorganizare conceptuală";
scaleItem[RO][3] = "P3. " + "Comportament halucinant";
scaleItem[RO][4] = "P4. " + "Hiperactivitate";
scaleItem[RO][5] = "P5. " + "Grandoare";
scaleItem[RO][6] = "P6. " + "Suspiciune/persecuţie";
scaleItem[RO][7] = "P7. " + "Ostilitate";
scaleItem[RO][8] = "N1. " + "Aplatizare afectivă";
scaleItem[RO][9] = "N2. " + "Retragere emoţională";
scaleItem[RO][10] = "N3. " + "Reducerea raporturilor personale ";
scaleItem[RO][11] = "N4. " + "Retragere socială pasivă/apatică";
scaleItem[RO][12] = "N5. " + "Dificultăţi de abstractizare";
scaleItem[RO][13] = "N6. " + "Lipsă de spontaneitate şi de flux în conversaţie";
scaleItem[RO][14] = "N7. " + "Gândire stereotipică";
scaleItem[RO][15] = "G1. " + "Preocupări somatice";
scaleItem[RO][16] = "G2. " + "Anxietate";
scaleItem[RO][17] = "G3. " + "Sentimente de vinovăție";
scaleItem[RO][18] = "G4. " + "Tensiune";
scaleItem[RO][19] = "G5. " + "Manierisme şi postură";
scaleItem[RO][20] = "G6. " + "Depresie";
scaleItem[RO][21] = "G7. " + "Retard motor";
scaleItem[RO][22] = "G8. " + "Lipsă de cooperare";
scaleItem[RO][23] = "G9. " + "Gânduri neobişnuite";
scaleItem[RO][24] = "G10. " + "Dezorientare";
scaleItem[RO][25] = "G11. " + "Deficit de atenție ";
scaleItem[RO][26] = "G12. " + "Lipsă de judecată şi de discernământ";
scaleItem[RO][27] = "G13. " + "Afectarea voinţei";
scaleItem[RO][28] = "G14. " + "Control redus al impulsurilor";
scaleItem[RO][29] = "G15. " + "Preocupare";
scaleItem[RO][30] = "G16. " + "Evitare socială activă";

scaleItem[RU][1] = "P1. " + "Бред";
scaleItem[RU][2] = "P2. " + "Расстройства мышления";
scaleItem[RU][3] = "P3. " + "Галлюцинации";
scaleItem[RU][4] = "P4. " + "Возбуждение";
scaleItem[RU][5] = "P5. " + "Идеи величия";
scaleItem[RU][6] = "P6. " + "Подозрительность/идеи преследования";
scaleItem[RU][7] = "P7. " + "Враждебность";
scaleItem[RU][8] = "N1. " + "Притупленный аффект";
scaleItem[RU][9] = "N2. " + "Эмоциональная отгороженность";
scaleItem[RU][10] = "N3. " + "Трудности в общении/малоконтактность ";
scaleItem[RU][11] = "N4. " + "Пассивно-апатическая социальная отгороженность";
scaleItem[RU][12] = "N5. " + "Нарушение абстрактного мышления";
scaleItem[RU][13] = "N6. " + "Нарушение спонтанности и плавности речи";
scaleItem[RU][14] = "N7. " + "Стереотипное мышление";
scaleItem[RU][15] = "G1. " + "Соматическая озабоченность";
scaleItem[RU][16] = "G2. " + "Тревога";
scaleItem[RU][17] = "G3. " + "Чувство вины";
scaleItem[RU][18] = "G4. " + "Напряженность";
scaleItem[RU][19] = "G5. " + "Манерность и позирование";
scaleItem[RU][20] = "G6. " + "Депрессия";
scaleItem[RU][21] = "G7. " + "Моторная заторможенность";
scaleItem[RU][22] = "G8. " + "Малоконтактность/отказ от сотрудничества";
scaleItem[RU][23] = "G9. " + "Необычное содержание мыслей";
scaleItem[RU][24] = "G10. " + "Дезориентированность";
scaleItem[RU][25] = "G11. " + "Нарушение внимания ";
scaleItem[RU][26] = "G12. " + "Снижение критичности к своему состоянию";
scaleItem[RU][27] = "G13. " + "Расстройство воли";
scaleItem[RU][28] = "G14. " + "Ослабление контроля импульсивности/агрессивность";
scaleItem[RU][29] = "G15. " + "Загруженность психическими переживаниями";
scaleItem[RU][30] = "G16. " + "Активная социальная устраненность";


scaleItem[PL][1] = "P1. " + "Urojenia";
scaleItem[PL][2] = "P2. " + "Dezorganizacja konceptualna";
scaleItem[PL][3] = "P3. " + "Zachowania halucynacyjne";
scaleItem[PL][4] = "P4. " + "Pobudzenie";
scaleItem[PL][5] = "P5. " + "Wspaniałość";
scaleItem[PL][6] = "P6. " + "Podejrzliwość/Prześladowania";
scaleItem[PL][7] = "P7. " + "Wrogość";
scaleItem[PL][8] = "N1. " + "Stępiony afekt";
scaleItem[PL][9] = "N2. " + "Emocjonalne wycofanie";
scaleItem[PL][10] = "N3. " + "Ubogie wzajemne zrozumienie ";
scaleItem[PL][11] = "N4. " + "Pasywne/apatyczne społeczne wycofanie";
scaleItem[PL][12] = "N5. " + "Trudności w abstrakcyjnym myśleniu";
scaleItem[PL][13] = "N6. " + "Brak spontaniczności i przepływu rozmowy";
scaleItem[PL][14] = "N7. " + "Stereotypowe myślenie";
scaleItem[PL][15] = "G1. " + "Objawy somatyczne:";
scaleItem[PL][16] = "G2. " + "Niepokój";
scaleItem[PL][17] = "G3. " + "Poczucie winy";
scaleItem[PL][18] = "G4. " + "Napięcie";
scaleItem[PL][19] = "G5. " + "Maniery i pozerstwo";
scaleItem[PL][20] = "G6. " + "Depresja";
scaleItem[PL][21] = "G7. " + "Opóźnienie motoryczne";
scaleItem[PL][22] = "G8. " + "Niechęć do współpracy";
scaleItem[PL][23] = "G9. " + "Niezwykłe treści myśli";
scaleItem[PL][24] = "G10. " + "Dezorientacja";
scaleItem[PL][25] = "G11. " + "Słabe skupienie uwagi";
scaleItem[PL][26] = "G12. " + "Brak zdolności osądu i zrozumienia";
scaleItem[PL][27] = "G13. " + "Zaburzenia woli";
scaleItem[PL][28] = "G14. " + "Słaba kontrola impulsów";
scaleItem[PL][29] = "G15. " + "Zaabsorbowanie";
scaleItem[PL][30] = "G16. " + "Aktywne społeczne wycofanie";

scaleItem[BG][1] = "P1. " + "Делюзии";
scaleItem[BG][2] = "P2. " + "Идейна дезорганизация";
scaleItem[BG][3] = "P3. " + "Халюцинаторно поведение";
scaleItem[BG][4] = "P4. " + "Вълнение";
scaleItem[BG][5] = "P5. " + "Грандиозност";
scaleItem[BG][6] = "P6. " + "Подозрителност";
scaleItem[BG][7] = "P7. " + "Враждебност";
scaleItem[BG][8] = "N1. " + "Притъпен афект";
scaleItem[BG][9] = "N2. " + "Емоционална изолация";
scaleItem[BG][10] = "N3. " + "Беден контакт";
scaleItem[BG][11] = "N4. " + "Пасивна/апатична социална изолация";
scaleItem[BG][12] = "N5. " + "Затруднения на абстрактното мислене";
scaleItem[BG][13] = "N6. " + "Липса на спонтанност и поток на разговора";
scaleItem[BG][14] = "N7. " + "Стереотипно мислене";
scaleItem[BG][15] = "G1. " + "Соматично оплакване";
scaleItem[BG][16] = "G2. " + "Тревожност";
scaleItem[BG][17] = "G3. " + "Чувство за вина";
scaleItem[BG][18] = "G4. " + "Напрежение";
scaleItem[BG][19] = "G5. " + "Маниеризми и поза";
scaleItem[BG][20] = "G6. " + "Депресия";
scaleItem[BG][21] = "G7. " + "Двигателно забавяне";
scaleItem[BG][22] = "G8. " + "Несъдействие";
scaleItem[BG][23] = "G9. " + "Необичайни мисли";
scaleItem[BG][24] = "G10. " + "Дезориентация";
scaleItem[BG][25] = "G11. " + "Редуцирано активно внимание";
scaleItem[BG][26] = "G12. " + "Липса на критичност и съзнание за болест";
scaleItem[BG][27] = "G13. " + "Редуцирана волева активност";
scaleItem[BG][28] = "G14. " + "Нарушения в контрола на импулса";
scaleItem[BG][29] = "G15. " + "Разсеяност";
scaleItem[BG][30] = "G16. " + "Активна социална изолация";


var rptItem = parent.make2dArray(nLanguages+1);
rptItem[EN][1] = "P1. " + "Delusions";
rptItem[EN][2] = "P2. " + "Conceptual Disorganization";
rptItem[EN][3] = "P3. " + "Hallucinatory Behavior";
rptItem[EN][4] = "P4. " + "Excitement";
rptItem[EN][5] = "P5. " + "Grandiosity";
rptItem[EN][6] = "P6. " + "Suspiciousness/Persecution";
rptItem[EN][7] = "P7. " + "Hostility";
rptItem[EN][8] = "N1. " + "Blunted Affect";
rptItem[EN][9] = "N2. " + "Emotional Withdrawal";
rptItem[EN][10] = "N3. " + "Poor Rapport ";
rptItem[EN][11] = "N4. " + "Passive/Apathetic Social Withdrawal";
rptItem[EN][12] = "N5. " + "Difficulty in Abstract Thinking";
rptItem[EN][13] = "N6. " + "Lack of Spontaneity and Conv. Flow";
rptItem[EN][14] = "N7. " + "Stereotyped Thinking";
rptItem[EN][15] = "G1. " + "Somatic Concern";
rptItem[EN][16] = "G2. " + "Anxiety";
rptItem[EN][17] = "G3. " + "Guilt Feelings";
rptItem[EN][18] = "G4. " + "Tension";
rptItem[EN][19] = "G5. " + "Mannerisms and Posturing";
rptItem[EN][20] = "G6. " + "Depression";
rptItem[EN][21] = "G7. " + "Motor Retardation";
rptItem[EN][22] = "G8. " + "Uncooperativeness";
rptItem[EN][23] = "G9. " + "Unusual Thought Content";
rptItem[EN][24] = "G10. " + "Disorientation";
rptItem[EN][25] = "G11. " + "Poor Attention ";
rptItem[EN][26] = "G12. " + "Lack of Judgment and Insight";
rptItem[EN][27] = "G13. " + "Disturbance of Volition";
rptItem[EN][28] = "G14. " + "Poor Impulse Control";
rptItem[EN][29] = "G15. " + "Preoccupation";
rptItem[EN][30] = "G16. " + "Active Social Avoidance";

// ET placeholder
rptItem[ET][1] = "P1. " + "Luulud";
rptItem[ET][2] = "P2. " + "Kontseptuaalne desorganiseeritus";
rptItem[ET][3] = "P3. " + "Hallutsinatoorne käitumine";
rptItem[ET][4] = "P4. " + "Rahutus";
rptItem[ET][5] = "P5. " + "Suurusluul";
rptItem[ET][6] = "P6. " + "Kahtlustamine/tagakiusamine";
rptItem[ET][7] = "P7. " + "Vaenulikkus";
rptItem[ET][8] = "N1. " + "Emotsioonide tuimenemine";
rptItem[ET][9] = "N2. " + "Emotsionaalne endassetõmbumine";
rptItem[ET][10] = "N3. " + "Kontakti puudumine";
rptItem[ET][11] = "N4. " + "Passiivne/apaatne sotsiaalne endassetõmbumine";
rptItem[ET][12] = "N5. " + "Abstraktse mõtlemise raskused";
rptItem[ET][13] = "N6. " + "Spontaansuse ja kõne voolavuse puudumine";
rptItem[ET][14] = "N7. " + "Stereotüüpne mõtlemine";
rptItem[ET][15] = "G1. " + "Somaatiline mure";
rptItem[ET][16] = "G2. " + "Ärevus";
rptItem[ET][17] = "G3. " + "Süütunne";
rptItem[ET][18] = "G4. " + "Pingulolek";
rptItem[ET][19] = "G5. " + "Manerism ja poosid";
rptItem[ET][20] = "G6. " + "Depressioon";
rptItem[ET][21] = "G7. " + "Motoorne pidurdus";
rptItem[ET][22] = "G8. " + "Koostöövalmiduse puudumine";
rptItem[ET][23] = "G9. " + "Ebaharilikud mõtted";
rptItem[ET][24] = "G10. " + "Desorientatsioon";
rptItem[ET][25] = "G11. " + "Tähelepanuhäired";
rptItem[ET][26] = "G12. " + "Adekvaatse arusaama/hinnangu puudumine";
rptItem[ET][27] = "G13. " + "Tahtehäired";
rptItem[ET][28] = "G14. " + "Nõrk impulsside kontroll";
rptItem[ET][29] = "G15. " + "Mõttessevajumine";
rptItem[ET][30] = "G16. " + "Aktiivne sotsiaalne vältimine";

// DA placeholder
// NL placeholder

// FI placeholder
rptItem[FI][1] = "P1. " + "Harhaluuloisuus";
rptItem[FI][2] = "P2. " + "Hajanainen ajattelu";
rptItem[FI][3] = "P3. " + "Harhainen käyttäytyminen";
rptItem[FI][4] = "P4. " + "Kiihtymys";
rptItem[FI][5] = "P5. " + "Suuruusharhaluuloisuus";
rptItem[FI][6] = "P6. " + "Epäluuloisuus/vainoharhat";
rptItem[FI][7] = "P7. " + "Vihamielisyys";
rptItem[FI][8] = "N1. " + "Tunneilmaisun väheneminen";
rptItem[FI][9] = "N2. " + "Emotionaalinen vetäytyminen";
rptItem[FI][10] = "N3. " + "Vuorovaikutuksen köyhtyminen ";
rptItem[FI][11] = "N4. " + "Passiivis-apaattinen sosiaalinen vetäytyminen";
rptItem[FI][12] = "N5. " + "Abstraktin ajattelun vaikeus";
rptItem[FI][13] = "N6. " + "Spontaanisuuden ja sujuvan keskustelun puute";
rptItem[FI][14] = "N7. " + "Kaavamainen ajattelu";
rptItem[FI][15] = "G1. " + "Somaattiset huolet";
rptItem[FI][16] = "G2. " + "Ahdistuneisuus";
rptItem[FI][17] = "G3. " + "Syyllisyyden tunteet";
rptItem[FI][18] = "G4. " + "Jännittyneisyys";
rptItem[FI][19] = "G5. " + "Maneerit ja asennot";
rptItem[FI][20] = "G6. " + "Masennus";
rptItem[FI][21] = "G7. " + "Motorinen hidastuminen";
rptItem[FI][22] = "G8. " + "Yhteistyöhaluttomuus";
rptItem[FI][23] = "G9. " + "Epätavalliset ajatussisällöt";
rptItem[FI][24] = "G10. " + "Desorientaatio";
rptItem[FI][25] = "G11. " + "Heikentynyt tarkkaavaisuus";
rptItem[FI][26] = "G12. " + "Arviointikyvyn ja oivalluksen puute";
rptItem[FI][27] = "G13. " + "Tahtoelämän häiriöt";
rptItem[FI][28] = "G14. " + "Heikko impulssikontrolli";
rptItem[FI][29] = "G15. " + "Sisäänpäinkääntyneisyys";
rptItem[FI][30] = "G16. " + "Sosiaalinen eristäytyminen";

// FR Placeholder
rptItem[FR][1] = "P1. " + "Délires";
rptItem[FR][2] = "P2. " + "Désorganisation conceptuelle";
rptItem[FR][3] = "P3. " + "Comportement hallucinatoire";
rptItem[FR][4] = "P4. " + "Excitation";
rptItem[FR][5] = "P5. " + "Grandeur";
rptItem[FR][6] = "P6. " + "Suspicion/persécution";
rptItem[FR][7] = "P7. " + "Hostilité";
rptItem[FR][8] = "N1. " + "Affectivité diminuée";
rptItem[FR][9] = "N2. " + "Retrait émotionnel";
rptItem[FR][10] = "N3. " + "Rapports de mauvaise qualité ";
rptItem[FR][11] = "N4. " + "Passivité/Retrait social apathique";
rptItem[FR][12] = "N5. " + "Difficultés relatives à la pensée abstraite";
rptItem[FR][13] = "N6. " + "Manque de spontanéité et flux de la conversation";
rptItem[FR][14] = "N7. " + "Pensée stéréotypée";
rptItem[FR][15] = "G1. " + "Préoccupations somatiques";
rptItem[FR][16] = "G2. " + "Anxiété";
rptItem[FR][17] = "G3. " + "Sentiments de culpabilité";
rptItem[FR][18] = "G4. " + "Tension";
rptItem[FR][19] = "G5. " + "Manières et postures";
rptItem[FR][20] = "G6. " + "Dépression";
rptItem[FR][21] = "G7. " + "Retards moteurs";
rptItem[FR][22] = "G8. " + "Non coopération";
rptItem[FR][23] = "G9. " + "Contenu inhabituel des pensées";
rptItem[FR][24] = "G10. " + "Désorientation";
rptItem[FR][25] = "G11. " + "Faible attention ";
rptItem[FR][26] = "G12. " + "Manque de jugement et de perspicacité";
rptItem[FR][27] = "G13. " + "Perturbations de la volonté";
rptItem[FR][28] = "G14. " + "Mauvais contrôle de l'impulsion";
rptItem[FR][29] = "G15. " + "Préoccupations";
rptItem[FR][30] = "G16. " + "Évitement social actif";

// DE placeholder

rptItem[HU][1] = "P1. " + "Téveszmék";
rptItem[HU][2] = "P2. " + "Gondolati rendezetlenség";
rptItem[HU][3] = "P3. " + "Hallucinációs viselkedés";
rptItem[HU][4] = "P4. " + "Izgatottság";
rptItem[HU][5] = "P5. " + "Túlértékelt énkép";
rptItem[HU][6] = "P6. " + "Gyanakvás/üldöztetés";
rptItem[HU][7] = "P7. " + "Ellenségesség";
rptItem[HU][8] = "N1. " + "Tompult kifejezések";
rptItem[HU][9] = "N2. " + "Érzelmi visszahúzódás";
rptItem[HU][10] = "N3. " + "Gyenge raport ";
rptItem[HU][11] = "N4. " + "Passzív/apatikus szociális visszahúzódás";
rptItem[HU][12] = "N5. " + "Absztrakt gondolkodási nehézségek";
rptItem[HU][13] = "N6. " + "Spontaneitás és a párbeszéd fenntartásának hiánya";
rptItem[HU][14] = "N7. " + "Sztereotipizált gondolkodás";
rptItem[HU][15] = "G1. " + "Szomatikus aggályok";
rptItem[HU][16] = "G2. " + "Szorongás";
rptItem[HU][17] = "G3. " + "Bűntudat";
rptItem[HU][18] = "G4. " + "Feszültség";
rptItem[HU][19] = "G5. " + "Modorosság és testtartás";
rptItem[HU][20] = "G6. " + "Depresszió";
rptItem[HU][21] = "G7. " + "Motoros retardáció";
rptItem[HU][22] = "G8. " + "Engedetlenség";
rptItem[HU][23] = "G9. " + "zokatlan tartalmú gondolatok";
rptItem[HU][24] = "G10. " + "Tájékozódási zavar";
rptItem[HU][25] = "G11. " + "Gyenge figyelem ";
rptItem[HU][26] = "G12. " + "Ítélőképesség és belátás hiánya";
rptItem[HU][27] = "G13. " + "Zavart döntéshozatal";
rptItem[HU][28] = "G14. " + "Gyenge impulzuskontroll";
rptItem[HU][29] = "G15. " + "Belefeledkezés";
rptItem[HU][30] = "G16. " + "Aktív szociális visszahúzódás";

// IT placeholder
// JA placeholder
// KO placeholder
// NO placeholder
// PT placeholder
// ES placeholder
// TR placeholder

rptItem[RO][1] = "P1. " + "Iluzii";
rptItem[RO][2] = "P2. " + "Dezorganizare conceptuală";
rptItem[RO][3] = "P3. " + "Comportament halucinant";
rptItem[RO][4] = "P4. " + "Hiperactivitate";
rptItem[RO][5] = "P5. " + "Grandoare";
rptItem[RO][6] = "P6. " + "Suspiciune/persecuţie";
rptItem[RO][7] = "P7. " + "Ostilitate";
rptItem[RO][8] = "N1. " + "Aplatizare afectivă";
rptItem[RO][9] = "N2. " + "Retragere emoţională";
rptItem[RO][10] = "N3. " + "Reducerea raporturilor personale ";
rptItem[RO][11] = "N4. " + "Retragere socială pasivă/apatică";
rptItem[RO][12] = "N5. " + "Dificultăţi de abstractizare";
rptItem[RO][13] = "N6. " + "Lipsă de spontaneitate şi de flux în conversaţie";
rptItem[RO][14] = "N7. " + "Gândire stereotipică";
rptItem[RO][15] = "G1. " + "Preocupări somatice";
rptItem[RO][16] = "G2. " + "Anxietate";
rptItem[RO][17] = "G3. " + "Sentimente de vinovăție";
rptItem[RO][18] = "G4. " + "Tensiune";
rptItem[RO][19] = "G5. " + "Manierisme şi postură";
rptItem[RO][20] = "G6. " + "Depresie";
rptItem[RO][21] = "G7. " + "Retard motor";
rptItem[RO][22] = "G8. " + "Lipsă de cooperare";
rptItem[RO][23] = "G9. " + "Gânduri neobişnuite";
rptItem[RO][24] = "G10. " + "Dezorientare";
rptItem[RO][25] = "G11. " + "Deficit de atenție ";
rptItem[RO][26] = "G12. " + "Lipsă de judecată şi de discernământ";
rptItem[RO][27] = "G13. " + "Afectarea voinţei";
rptItem[RO][28] = "G14. " + "Control redus al impulsurilor";
rptItem[RO][29] = "G15. " + "Preocupare";
rptItem[RO][30] = "G16. " + "Evitare socială activă";

rptItem[RU][1] = "P1. " + "Бред";
rptItem[RU][2] = "P2. " + "Расстройства мышления";
rptItem[RU][3] = "P3. " + "Галлюцинации";
rptItem[RU][4] = "P4. " + "Возбуждение";
rptItem[RU][5] = "P5. " + "Идеи величия";
rptItem[RU][6] = "P6. " + "Подозрительность/идеи преследования";
rptItem[RU][7] = "P7. " + "Враждебность";
rptItem[RU][8] = "N1. " + "Притупленный аффект";
rptItem[RU][9] = "N2. " + "Эмоциональная отгороженность";
rptItem[RU][10] = "N3. " + "Трудности в общении/малоконтактность ";
rptItem[RU][11] = "N4. " + "Пассивно-апатическая социальная отгороженность";
rptItem[RU][12] = "N5. " + "Нарушение абстрактного мышления";
rptItem[RU][13] = "N6. " + "Нарушение спонтанности и плавности речи";
rptItem[RU][14] = "N7. " + "Стереотипное мышление";
rptItem[RU][15] = "G1. " + "Соматическая озабоченность";
rptItem[RU][16] = "G2. " + "Тревога";
rptItem[RU][17] = "G3. " + "Чувство вины";
rptItem[RU][18] = "G4. " + "Напряженность";
rptItem[RU][19] = "G5. " + "Манерность и позирование";
rptItem[RU][20] = "G6. " + "Депрессия";
rptItem[RU][21] = "G7. " + "Моторная заторможенность";
rptItem[RU][22] = "G8. " + "Малоконтактность/отказ от сотрудничества";
rptItem[RU][23] = "G9. " + "Необычное содержание мыслей";
rptItem[RU][24] = "G10. " + "Дезориентированность";
rptItem[RU][25] = "G11. " + "Нарушение внимания ";
rptItem[RU][26] = "G12. " + "Снижение критичности к своему состоянию";
rptItem[RU][27] = "G13. " + "Расстройство воли";
rptItem[RU][28] = "G14. " + "Ослабление контроля импульсивности/агрессивность";
rptItem[RU][29] = "G15. " + "Загруженность психическими переживаниями";
rptItem[RU][30] = "G16. " + "Активная социальная устраненность";

rptItem[PL][1] = "P1. " + "Urojenia";
rptItem[PL][2] = "P2. " + "Dezorganizacja konceptualna";
rptItem[PL][3] = "P3. " + "Zachowania halucynacyjne";
rptItem[PL][4] = "P4. " + "Pobudzenie";
rptItem[PL][5] = "P5. " + "Wspaniałość";
rptItem[PL][6] = "P6. " + "Podejrzliwość/Prześladowania";
rptItem[PL][7] = "P7. " + "Wrogość";
rptItem[PL][8] = "N1. " + "Stępiony afekt";
rptItem[PL][9] = "N2. " + "Emocjonalne wycofanie";
rptItem[PL][10] = "N3. " + "Ubogie wzajemne zrozumienie";
rptItem[PL][11] = "N4. " + "Pasywne/apatyczne społeczne wycofanie";
rptItem[PL][12] = "N5. " + "Trudności w abstrakcyjnym myśleniu";
rptItem[PL][13] = "N6. " + "Brak spontaniczności i przepływu rozmowy";
rptItem[PL][14] = "N7. " + "Stereotypowe myślenie";
rptItem[PL][15] = "G1. " + "Objawy somatyczne:";
rptItem[PL][16] = "G2. " + "Niepokój";
rptItem[PL][17] = "G3. " + "Poczucie winy";
rptItem[PL][18] = "G4. " + "Napięcie";
rptItem[PL][19] = "G5. " + "Maniery i pozerstwo";
rptItem[PL][20] = "G6. " + "Depresja";
rptItem[PL][21] = "G7. " + "Opóźnienie motoryczne";
rptItem[PL][22] = "G8. " + "Niechęć do współpracy";
rptItem[PL][23] = "G9. " + "Niezwykłe treści myśli";
rptItem[PL][24] = "G10. " + "Dezorientacja";
rptItem[PL][25] = "G11. " + "Słabe skupienie uwag";
rptItem[PL][26] = "G12. " + "Brak zdolności osądu i zrozumienia";
rptItem[PL][27] = "G13. " + "Zaburzenia woli";
rptItem[PL][28] = "G14. " + "Słaba kontrola impulsów";
rptItem[PL][29] = "G15. " + "Zaabsorbowanie";
rptItem[PL][30] = "G16. " + "Aktywne społeczne wycofanie";



rptItem[BG][1] = "P1. " + "Делюзии";
rptItem[BG][2] = "P2. " + "Идейна дезорганизация";
rptItem[BG][3] = "P3. " + "Халюцинаторно поведение";
rptItem[BG][4] = "P4. " + "Вълнение";
rptItem[BG][5] = "P5. " + "Грандиозност";
rptItem[BG][6] = "P6. " + "Подозрителност";
rptItem[BG][7] = "P7. " + "Враждебност";
rptItem[BG][8] = "N1. " + "Притъпен афект";
rptItem[BG][9] = "N2. " + "Емоционална изолация";
rptItem[BG][10] = "N3. " + "Беден контакт";
rptItem[BG][11] = "N4. " + "Пасивна/апатична социална изолация";
rptItem[BG][12] = "N5. " + "Затруднения на абстрактното мислене";
rptItem[BG][13] = "N6. " + "Липса на спонтанност и поток на разговора";
rptItem[BG][14] = "N7. " + "Стереотипно мислене";
rptItem[BG][15] = "G1. " + "Соматично оплакване";
rptItem[BG][16] = "G2. " + "Тревожност";
rptItem[BG][17] = "G3. " + "Чувство за вина";
rptItem[BG][18] = "G4. " + "Напрежение";
rptItem[BG][19] = "G5. " + "Маниеризми и поза";
rptItem[BG][20] = "G6. " + "Депресия";
rptItem[BG][21] = "G7. " + "Двигателно забавяне";
rptItem[BG][22] = "G8. " + "Несъдействие";
rptItem[BG][23] = "G9. " + "Необичайни мисли";
rptItem[BG][24] = "G10. " + "Дезориентация";
rptItem[BG][25] = "G11. " + "Редуцирано активно внимание";
rptItem[BG][26] = "G12. " + "Липса на критичност и съзнание за болест";
rptItem[BG][27] = "G13. " + "Редуцирана волева активност";
rptItem[BG][28] = "G14. " + "Нарушения в контрола на импулса";
rptItem[BG][29] = "G15. " + "Разсеяност";
rptItem[BG][30] = "G16. " + "Активна социална изолация";


var calcItem = parent.make2dArray(nLanguages+1);
calcItem[EN][1] = "PANSS Positive Total";		// items P1 - P7
calcItem[EN][2] = "PANSS Negative Total";		// items N1 - N7
calcItem[EN][3] = "PANSS General Total";		// items G1 - G16
calcItem[EN][4] = "Grand Total";				// all items

// ET placeholder
calcItem[ET][1] = "PANSS-i positiivne skaala kokku";		// items P1 - P7
calcItem[ET][2] = "PANSS-i negatiivne skaala kokku";		// items N1 - N7
calcItem[ET][3] = "PANSS-i üldine psühhopatoloogia skaala kokku";		// items G1 - G16
calcItem[ET][4] = "Kogusumma";
// DA placeholder
// NL placeholder
// FI placeholder
calcItem[FI][1] = "PANSS-arvioinnin positiiviset yhteensä";		// items P1 - P7
calcItem[FI][2] = "PANSS-arvioinnin negatiiviset yhteensä";		// items N1 - N7
calcItem[FI][3] = "PANSS-arvioinnin yleispisteet yhteensä";		// items G1 - G16
calcItem[FI][4] = "Kaikki yhteensä";

//FR placeholder

calcItem[FR][1] = "Total positif PANSS";		// items P1 - P7
calcItem[FR][2] = "Total négatif PANSS";		// items N1 - N7
calcItem[FR][3] = "Total général PANSS";		// items G1 - G16
calcItem[FR][4] = "Total";				        // all items

// DE placeholder

calcItem[HU][1] = "PANSS pozitív összpontszám";		// items P1 - P7
calcItem[HU][2] = "PANSS negatív összpontszám";		// items N1 - N7
calcItem[HU][3] = "PANSS általános összpontszám";	// items G1 - G16
calcItem[HU][4] = "Végösszeg";				        // all items

// IT placeholder
// JA placeholder
// KO placeholder
// NO placeholder
// PT placeholder
// ES placeholder
// TR placeholder

calcItem[RO][1] = "Total PANSS pozitiv";		// items P1 - P7
calcItem[RO][2] = "PANSS negativ total";		// items N1 - N7
calcItem[RO][3] = "PANSS general total";		// items G1 - G16
calcItem[RO][4] = "Total general";				// all items

calcItem[RU][1] = "Общий балл позитивных симптомов PANSS";	// items P1 - P7
calcItem[RU][2] = "Общий балл негативных симптомов PANSS";	// items N1 - N7
calcItem[RU][3] = "Общий балл PANSS";						// items G1 - G16
calcItem[RU][4] = "Общий балл";								// all items

calcItem[PL][1] = "PANSS Dodatnie razem";	// items P1 - P7
calcItem[PL][2] = "PANSS Ujemne razem";	// items N1 - N7
calcItem[PL][3] = "Łącznie ogółem PANSS";						// items G1 - G16
calcItem[PL][4] = "Łączna suma";								// all items

calcItem[BG][1] = "Обща позитивна оценка по PANSS";	// items P1 - P7
calcItem[BG][2] = "Обща негативна оценка по PANSS";	// items N1 - N7
calcItem[BG][3] = "Обща оценка по PANSS";						// items G1 - G16
calcItem[BG][4] = "Обща оценка";								// all items



var positiveTotal = 0;			
var negativeTotal = 0;			
var generalTotal = 0;			
var grandTotal = 0;	
var positivePass = false;
var grandPass = false;

//////////////////////////////////////////
//////////////////////////////////////////
// RPE Data Entry & Calculation Functions
//////////////////////////////////////////
//////////////////////////////////////////
function EvaluateScores() {
	var i, strResult;
	var rpeNum = courseObject.courseNumber;	
	
	if ((rpeNum < 1) || (rpeNum > nRPEs)) {
		alert("Error (EvaluateScores()): Unable to determine RPE number. Exiting.");
		return;
	}
	
	// Log the item-level SCORM interactions
	// PANSS has no item-level correct/incorrect evaluation criteria but they are needed for SCORM interactions.
	for (i = 1; i <= nScaleItems; i++) {
		// Assume exact match is "correct"
		if (userAnswer[i] == goldStandard[rpeNum][i]) {
			strResult = "correct";
		}
		else {
			strResult = "incorrect";
		}
		// Save the interaction
		if (courseObject.lmsPresent) {
			strID = "Item #" + i;
			parent.SaveInteraction("Item #" + i, courseObject.studyName + "_" + courseObject.scaleName + "_" + courseObject.courseName, "fill-in", userAnswer[i], goldStandard[rpeNum][i], strResult);
		}
	}
	
	// PANSS pass criteria: Pass if within 20% on both Positive Total and GrandTotal
	//
	positiveTotal = document.getElementById("calc1").innerHTML * 1;			
	grandTotal = document.getElementById("calc4").innerHTML * 1;			
	
	if ((positiveTotal >= (goldStdPositive[rpeNum] * 0.8)) && (positiveTotal <= (goldStdPositive[rpeNum] * 1.2))) {
		positivePass = true;
		courseObject.userCorrectItems += 1;
	}
	
	if ((grandTotal >= (goldStdTotal[rpeNum] * 0.8)) && (grandTotal <= (goldStdTotal[rpeNum] * 1.2))) {
		grandPass = true;
		courseObject.userCorrectItems += 1;
	}
	courseObject.userOverallScore = courseObject.userCorrectItems;
	courseObject.userScorePercent = (courseObject.userCorrectItems/courseObject.courseScoredItems)*100;
	
	if (courseObject.userOverallScore >= courseObject.coursePassingScore) {
		courseObject.overallPass = true;
		returnResult = parent.playerSetVar("ExamResult", "pass" );
	}		
	else {
		returnResult = parent.playerSetVar("ExamResult", "fail");
	}
	
	
	// Set API Status (set for SCORM 1.2 API)
	if (courseObject.lmsPresent) {
		if (courseObject.overallPass) {
		// SCORM 1.2
			blnStatusWasSet = true;	
			parent.lmsAPI.SetPassed();
			// SCORM 2004
			//parent.SetStatus("passed");
		}
		else {
			// SCORM 1.2
			blnStatusWasSet = true;	
			parent.lmsAPI.SetFailed();
			// SCORM 2004
			//parent.SetStatus("failed");
		}
		// SCORM 1.2
		parent.lmsAPI.SetReachedEnd();
	}
	// Note the submission in the course object
	courseObject.submitTime = parent.theUTCDateTime();
	
	// Assemble and send scores to web service
	//  Scores (pipe-delimited set): rpeNumber,itemNumber,standardScore,enteredScore
	//
	var answerString = "";
	for (i = 1; i <= nScaleItems; i++) {
		if (i > 1)
			answerString += "|";
		answerString += rpeNum + "," + i + "," + goldStandard[rpeNum][i] + "," + userAnswer[i];
	}
	resultString = parent.playerSetVar("AnswerString", answerString);
	
	parent.RpeScoreTransmit();
	
	// Create the completion report/cookie
	CreateRpeReportCookie(idxLang, userAnswer, rpeNum);
	
	// Signal to Storyline that the webObject is done
	resultString = parent.playerSetVar("dataEntryComplete", "True");
}

function UpdateSubscaleTotals() {
	var i;
	var obj1;
	
	positiveTotal = 0;
	for (i = 1; i <= 7; i++) {
		obj1 = document.getElementById("ans" + i);
		if (obj1.selectedIndex > 0) {
			idxValue = obj1.options[obj1.selectedIndex].value;
			positiveTotal += idxValue * 1;
		}
	}
	
	negativeTotal = 0;
	for (i = 8; i <= 14; i++) {
		obj1 = document.getElementById("ans" + i);
		if (obj1.selectedIndex > 0) {
			idxValue = obj1.options[obj1.selectedIndex].value;
			negativeTotal += idxValue * 1;
		}
	}

	generalTotal = 0;
	for (i = 15; i <= 30; i++) {
		obj1 = document.getElementById("ans" + i);
		if (obj1.selectedIndex > 0) {
			idxValue = obj1.options[obj1.selectedIndex].value;
			generalTotal += idxValue * 1;
		}
	}
			
	grandTotal = positiveTotal + negativeTotal + generalTotal;
	
	document.getElementById("calc1").innerHTML = positiveTotal;			
	document.getElementById("calc2").innerHTML = negativeTotal;			
	document.getElementById("calc3").innerHTML = generalTotal;			
	document.getElementById("calc4").innerHTML = grandTotal;
}

function CheckDataEntry(n) {
	// Save the entered value
	// Enable submit when all items have values
	var obj1;

	// Get a handle to the table element
	obj1 = document.getElementById("ans" + n);
	
	// Save the user answer
	userAnswer[n] = obj1.options[obj1.selectedIndex].value * 1;
//	returnResult = player.SetVar(parentQuiz[n], userAnswer[n]);

	// Do all items have values?
	var i;
	for (i = 1; i <= nScaleItems; i++) {
		obj1 = document.getElementById("ans" + i);
		if (obj1.selectedIndex == 0)
			break;
	}
	if (i > nScaleItems)
		/* Ran off the end of the loop - No unanswered items: enable submit button */
		document.getElementById("submit1").disabled = false;

	UpdateSubscaleTotals();
}


////////////////////////
////////////////////////
// RPE Report Functions
////////////////////////
////////////////////////
function WriteRpeQuizResults(rptObj, idxLang, userAnswer, rpeNum) {
	var itemResult;
	
	// Create table and header row
	var strReport = "<table BORDER=1  cellpadding='10'>";
	strReport += "<tr>";
	strReport += "<th>" + parent.strItemNumber[idxLang] + "</th>";
	strReport += "<th>" + parent.strEnteredScore[idxLang] + "</th>";
	strReport += "<th>" + parent.strGoldStandard[idxLang] + "</th>";
	strReport += "<th>" + parent.strFeedback[idxLang] + "</th>";
	strReport += "<th>" + parent.strResult[idxLang] + "</th>";
	strReport += "</tr>";

	// Positive subscale
	var userTotal = 0;
	for (var i = 1; i <= 7; i++) {
		userTotal += userAnswer[i];
		
		strReport += "<tr>";
		strReport += "<td style='text-align: left;'>" + rptItem[idxLang][i] + "</td>";
		strReport += "<td>" + userAnswer[i] + "</td>";
		strReport += "<td>" + goldStandard[rpeNum][i] + "</td>";
		strReport += "<td style='text-align: left;'>" + incorrectFeedback[rpeNum][idxLang][i] + "</td>";			
		strReport += "<td></td>";	// no result for individual items
		strReport += "</tr>";
	}
	// Positive subtotal
	strReport += "<tr>";
	strReport += "<td style='text-align: right;'>" + calcItem[idxLang][1] + "</td>";
	strReport += "<td>" + positiveTotal + "</td>";
	strReport += "<td>" + goldStdPositive[rpeNum] + "</td>";
	strReport += "<td></td>";	// no feedback for subtotals
	if (positivePass)
		itemResult = parent.strCorrect[idxLang];
	else
		itemResult = parent.strIncorrect[idxLang];
	
	strReport += "<td>" + itemResult + "</td>";
	strReport += "</tr>";
	
	// Negative subscale
	userTotal = 0;
	for (i = 8; i <= 14; i++) {
		userTotal += userAnswer[i];
	
		strReport += "<tr>";
		strReport += "<td style='text-align: left;'>" + rptItem[idxLang][i] + "</td>";
		strReport += "<td>" + userAnswer[i] + "</td>";
		strReport += "<td>" + goldStandard[rpeNum][i] + "</td>";
		strReport += "<td style='text-align: left;'>" + incorrectFeedback[rpeNum][idxLang][i] + "</td>";			
		strReport += "<td></td>";	// no result for individual items
		strReport += "</tr>";
	}

	// Negative subtotal
	strReport += "<tr>";
	strReport += "<td style='text-align: right;'>" + calcItem[idxLang][2] + "</td>";
	strReport += "<td>" + negativeTotal + "</td>";
	strReport += "<td>" + goldStdNegative[rpeNum] + "</td>";
	strReport += "<td></td>";	// no feedback for subtotals
	strReport += "<td></td>";	// no result for negative total
	strReport += "</tr>";
	
	// General subscale
	userTotal = 0;
	for (i = 15; i <= 30; i++) {
		userTotal += userAnswer[i];
		
		strReport += "<tr>";
		strReport += "<td style='text-align: left;'>" + rptItem[idxLang][i] + "</td>";
		strReport += "<td>" + userAnswer[i] + "</td>";
		strReport += "<td>" + goldStandard[rpeNum][i] + "</td>";
		strReport += "<td style='text-align: left;'>" + incorrectFeedback[rpeNum][idxLang][i] + "</td>";			
		strReport += "<td></td>";	// no result for individual items
		strReport += "</tr>";
	}
	
	// General subtotal
	strReport += "<tr>";
	strReport += "<td style='text-align: right;'>" + calcItem[idxLang][3] + "</td>";
	strReport += "<td>" + generalTotal + "</td>";
	strReport += "<td>" + goldStdGeneral[rpeNum] + "</td>";
	strReport += "<td></td>";	// no feedback for subtotals
	strReport += "<td></td>";	// no result for general total
	strReport += "</tr>";
	
	// Grand Total
	strReport += "<tr>";
	strReport += "<td style='text-align: right;'>" + calcItem[idxLang][4] + "</td>";
	strReport += "<td>" + grandTotal + "</td>";
	strReport += "<td>" + goldStdTotal[rpeNum] + "</td>";
	strReport += "<td></td>";	// no feedback for subtotals
	if (grandPass)
		itemResult = parent.strCorrect[idxLang];
	else
		itemResult = parent.strIncorrect[idxLang];
	strReport += "<td>" + itemResult + "</td>";
	strReport += "</tr>";
	
	strReport += "</table>";
	rptObj.strRpeReport = strReport;
}

function DoRpeReport(rptObj, idxLang, userAnswer, rpeNum) {
	
	// Get the body of the report (and calculate score percent)
	WriteRpeQuizResults(rptObj, idxLang, userAnswer, rpeNum);

	// Save the body string off
	var bodyReport = rptObj.strRpeReport;
	var strReport = "";

	// OverallResult
	if (courseObject.overallPass) {
		rptObj.overallResult = parent.strYouPassed[idxLang];
	}
	else {
		rptObj.overallResult = parent.strYouFailed[idxLang];
	}
	strReport += "<td>" + rptObj.overallResult + "</td>";		
	
	// Report Title
	strReport = "<p><h1>" + strCourseTitle[rpeNum][idxLang] + "</h1></p>";
	
	// HEADER Table
	// Header row
	strReport += "<p style='margin-bottom: 0;'>&nbsp;</p>";
	strReport += "<TABLE class='SUMMARY' border=1 cellpadding='10'>";
		strReport += "<tr>";
			strReport += "<th>" + parent.strUsername[idxLang] + "</th>";
			strReport += "<th>" + parent.strDate[idxLang] + "</th>";
			strReport += "<th>" + parent.strResult[idxLang] + "</th>";
		strReport += "</tr>";

		// Data row
		strReport += "<tr>";
			strReport += "<td>" + courseObject.learnerName + "</td>";
			strReport += "<td>" + courseObject.submitTime + " UTC</td>";
			strReport += "<td>" + rptObj.overallResult + "</td>";		
		strReport += "</tr>";
	strReport += "</TABLE></br>";
	
	// Place it back into report object
	rptObj.strRpeReport = strReport + bodyReport;
}

function CreateRpeReportCookie(idxLang, userAnswer, rpeNum) {
	var rptObj = new Object();
	rptObj.strRpeReport = "";
	rptObj.overallResult = "";
	
	DoRpeReport(rptObj, idxLang, userAnswer, rpeNum);

	// Construct the full cookie (ResultSummary + Report HTML)
	var resultSummary = "Username: " + courseObject.learnerName + "~";
	resultSummary += "\nDate: " + courseObject.submitTime + " UTC" + "~";
	resultSummary += "\nReported Score: " + courseObject.userScorePercent + "%" + "~";
	resultSummary += "\nPassing Score: " + courseObject.coursePassingPercent + "%" + "~";
	resultSummary += "\nResult: " + rptObj.overallResult;
	
	//	Flesh out the full HTML page
	var rpeReport = "<!DOCTYPE html>";
	rpeReport += "<head>";
	rpeReport += "<style>";
	rpeReport += "TABLE.SUMMARY {width: 600px; margin-left: auto; margin-right: auto; border-width: 1px; }";
	rpeReport += "H1 { font-size:14pt; font-family:arial; text-align: center; }";
	rpeReport += "TD { font-size:10pt; font-family:arial; text-align: center; }";
	rpeReport += "TH { font-size:12pt; font-family:arial; }";
	rpeReport += "</style>";
	rpeReport += "<title>" + strCourseTitle[rpeNum][idxLang] + "</title>";
	rpeReport += "</head>";
	rpeReport += "<body>";
	rpeReport += rptObj.strRpeReport;
	rpeReport += "<br/><p style='font-size:16px font-family:arial;'><b>" + parent.strEvaluationCriteria[idxLang] + "</b> " + strEvalCriteriaDesc[rpeNum][idxLang] + "</p>";
	rpeReport += "</body>";
	rpeReport += "</html>";
	
	var wrapper = resultSummary + "~" + rpeReport;
	
	
	// create the cookie
	var cookieName = courseObject.studyName + "_" + courseObject.scaleName + "_" + courseObject.courseName + "_" + courseObject.learnerID;
	var cookieExpiration = 1825;	// 5 years
	
	// save the report in a cookie
	parent.eraseCookie(cookieName);	// clear out old content
	parent.setCookie(cookieName, resultSummary);

	// and save it in HTML5 Web Storage
	try {
		localStorage.setItem(cookieName, wrapper);
	}
	catch(err) {
		alert("***ALERT*** in CreateReport(): " + 
			parent.strLocalStorageAlert[idxLang][1] + "\r\r" + 
			parent.strLocalStorageAlert[idxLang][2] + "\r\r" + 
			parent.strLocalStorageAlert[idxLang][3]);
		
		// Show the report
		CreateRpeReportCookie.winrefs = {};
		var config = "toolbar=no,location=no,status=yes,menubar=yes,width=1200,height=800 scrollbars=yes,resizable=yes";
		CreateRpeReportCookie.winrefs["pop"] = window.open ("","pop",config);
		CreateRpeReportCookie.winrefs["pop"].document.write(rpeReport);	
	}
}