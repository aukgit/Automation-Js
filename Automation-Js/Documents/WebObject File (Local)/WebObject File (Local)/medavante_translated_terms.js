////////////////////////////////////
////////////////////////////////////
// Translated term arrays to support multi-lingual reporting
//
// Last updated: 07 August 2015
//
////////////////////////////////////
////////////////////////////////////

	var nLanguages = 23;
	
	// Language Codes
	var languageCode = [];
	languageCode[1] = "EN";		// English
	languageCode[2] = "CS";		// Czech
	languageCode[3] = "DA";		// Danish
	languageCode[4] = "NL";		// Dutch
	languageCode[5] = "FI";		// Finnish
	languageCode[6] = "FR";		// French
	languageCode[7] = "DE";		// German
	languageCode[8] = "HU";		// Hungarian
	languageCode[9] = "IT";		// Italian
	languageCode[10] = "JA";	// Japanese
	languageCode[11] = "KO";	// Korean
	languageCode[12] = "NO";	// Norwegian
	languageCode[13] = "PL";	// Polish
	languageCode[14] = "PT";	// Portuguese
	languageCode[15] = "ES";	// Spanish
	languageCode[16] = "TR";	// Turkish
	languageCode[17] = "RO";	// Romanian
	languageCode[18] = "RU";	// Russian
    languageCode[19] = "BG";	// Bulgarian	
    languageCode[20] = "ZH";	// Traditional Chinese
	languageCode[21] = "SV";	//Swedish
	languageCode[22] = "SK";	//Slovak
	languageCode[23] = "ET";	// Estonian
    

	// Handle to language index
	var EN = getLanguageIndex("EN");
	var CS = getLanguageIndex("CS");
	var DA = getLanguageIndex("DA");
	var NL = getLanguageIndex("NL");
	var FI = getLanguageIndex("FI");
	var FR = getLanguageIndex("FR");
	var DE = getLanguageIndex("DE");
	var HU = getLanguageIndex("HU");
	var IT = getLanguageIndex("IT");
	var JA = getLanguageIndex("JA");
	var KO = getLanguageIndex("KO");
	var NO = getLanguageIndex("NO");
	var PL = getLanguageIndex("PL");
	var PT = getLanguageIndex("PT");
	var ES = getLanguageIndex("ES");
	var TR = getLanguageIndex("TR");
	var RO = getLanguageIndex("RO");
	var RU = getLanguageIndex("RU");
	var BG = getLanguageIndex("BG");
	var ZH = getLanguageIndex("ZH");
	var SV = getLanguageIndex("SV");
	var SK = getLanguageIndex("SK");
	var ET = getLanguageIndex("ET");
	
	// Scale instruction/intro text
	var scaleIntro = make2dArray(languageCode.length);
	scaleIntro[EN][1] = "Please select a value for each item as recorded on the worksheets.";
	scaleIntro[EN][2] = "The &quot;Submit Scores&quot; button, at the bottom of the scale, will not be enabled until a value has been selected for all items.";
	scaleIntro[EN][3] = "Entered values will be lost if you leave this page without selecting the &quot;Submit Scores&quot; button.";
	
	scaleIntro[ET][1] = "Palun valige iga jaotise jaoks väärtus, mis on märgitud teie töölehtedele.";
	scaleIntro[ET][2] = "Skaala all asuv nupp &quot;Esita skoorid&quot; ei muutu aktiivseks enne, kui kõigi jaotiste väärtused on valitud.";
	scaleIntro[ET][3] = "Kui lahkute sellelt leheküljelt ilma nuppu &quot;Esita skoorid&quot; vajutamata, lähevad sisestatud väärtused kaotsi.";

	

	scaleIntro[CS][1] = "Vyberte hodnotu pro jednotlivé položky tak, jak je zaznamenána na pracovních listech.";
	scaleIntro[CS][2] = "Tlačítko „Odeslat hodnocení“ ve spodní části stupnice nebude aktivní, dokud nezadáte hodnotu pro všechny položky.";
	scaleIntro[CS][3] = "Pokud tuto stránku opustíte bez výběru tlačítka „Odeslat hodnocení“, budou zadané hodnoty ztraceny.";

	scaleIntro[DA][1] = "Vælg en værdi for hvert punkt som er anført på arbejdsarkene.";
	scaleIntro[DA][2] = "Knappen &quot;Indsend scorer&quot; under skalaen aktiveres først, når der er blevet valgt en værdi for alle punkter.";
	scaleIntro[DA][3] = "Valgte værdier går tabt, hvis du forlader denne side uden at trykke på knappen &quot;Indsend scorer&quot;.";

	scaleIntro[NL][1] = "Selecteer een score voor elk onderwerp zoals genoteerd op de werkbladen.";
	scaleIntro[NL][2] = "De &quot;Verzend Scores&quot; knop, aan het einde van de test, werkt niet totdat een score voor alle onderwerpen is geselecteerd.";
	scaleIntro[NL][3] = "Ingevoerde scores gaan verloren als u deze pagina verlaat zonder de &quot;Verzend Scores&quot; knop te selecteren.";

	scaleIntro[FI][1] = "Valitse jokaisesta osiosta lomakkeeseen kirjattua vastaava arvo.";
	scaleIntro[FI][2] = "Asteikon alapuolella oleva &quot;Lähetä tulokset&quot; - painike on poissa käytöstä, kunnes jokaiselle osiolle on valittu arvo.";
	scaleIntro[FI][3] = "Syötetyt arvot häviävät, jos poistut tältä sivulta valitsematta &quot;Lähetä tulokset&quot;-painiketta.";

	scaleIntro[FR][1] = "Selectionnez une valeur pour chaque point sur les feuilles de calcul s’il vous plait.";
	scaleIntro[FR][2] = "Le bouton “soumettez les scores” au bas de l’evaluation ne sera pas active tant qu’une valeur a ete selectionne pour tous les items.";
	scaleIntro[FR][3] = "Valeurs entrees seront perdues si vous quittez cette page sans selectionner le bouton “soumettez les scores”.";

	scaleIntro[DE][1] = "Bitte wählen Sie für jedes Element, wie auf den Arbeitsblättern aufgezeichnet, einen Wert.";
	scaleIntro[DE][2] = "Die Schaltfläche „Bewertungen senden“ unten auf der Tabelle wird erst aktiviert, wenn ein Wert für alle Elemente gewählt wurde.";
	scaleIntro[DE][3] = "Eingegebene Werte gehen verloren, wenn Sie diese Seite verlassen, ohne auf „Bewertungen senden“ zu drücken.";

	scaleIntro[HU][1] = "Kérjük, hogy a munkalapon rögzítetteknek megfelelően válasszon értéket az egyes elemekhez.";
	scaleIntro[HU][2] = "A skála alján lévő „Pontszámok beküldése” gomb mindaddig nem lesz elérhető, amíg valamennyi elemhez meg nem adott értéket.";
	scaleIntro[HU][3] = "Ha az oldalt a „Pontszámok beküldése” gombra történő kattintás nélkül hagyja el, a megadott értékek elvesznek.";

	scaleIntro[IT][1] = "Selezionate un valore per ciascuna voce come registrato sui fogli di lavoro.";
	scaleIntro[IT][2] = "Il pulsante &quot;Invia i Punteggi&quot;, in fondo alla scala, non verrà abilitato finché non selezionate un valore per ogni voce.";
	scaleIntro[IT][3] = "Se lasciate questa pagina senza cliccare il pulsante &quot;Invia i Punteggi&quot; i valori inseriti verranno persi.";

	scaleIntro[JA][1] = "ワークシート上に記載された各項目の回答を選択してください。";
	scaleIntro[JA][2] = "全項目へ回答を入力すると、スケールの下部にある&quot;スコアの提出&quot;ボタンが有効になります。";
	scaleIntro[JA][3] = "スコアの提出”ボタンをクリックせずにこのページから移動すると、入力したスコアがすべて無効になります。";

	scaleIntro[KO][1] = "워크시트에 기록된 대로 각 항목의 값을 선택하십시오.";
	scaleIntro[KO][2] = "스케일의 하단에 있는 &quot;점수 제출&quot; 버튼은 모든 항목에 대해 값이 선택 완료될 때까지 활성화되지 않습니다.";
	scaleIntro[KO][3] = "점수 제출 &quot;버튼을 선택하지 않고 이 페이지에서 나가시면 입력된 값이 모두 사라집니다.";

	scaleIntro[NO][1] = "Velg en verdi for hvert element, som registrert på arbeidsarkene.";
	scaleIntro[NO][2] = "Knappen «Send inn score» nederst på skalaen aktiveres ikke før en verdi for hvert element har blitt valgt.";
	scaleIntro[NO][3] = "Angitte verdier går tapt hvis du forlater denne siden uten å klikke på knappen «Send inn score».";

	scaleIntro[PL][1] = "Wybrać wartość dla każdej pozycji zgodnie z wypełnionymi arkuszami roboczymi.";
	scaleIntro[PL][2] = "Przycisk &quot;Zatwierdź wyniki&quot; na dole skali nie będzie aktywny, dopóki dla wszystkich pozycji nie zostanie wybrana wartość.";
	scaleIntro[PL][3] = "W przypadku opuszczenia tej strony bez naciśnięcia przycisku &quot;Zatwierdź wyniki&quot; wprowadzone wartości nie zostaną zapisane..";

	scaleIntro[PT][1] = "Selecione um valor para cada item, conforme registado nas fichas de dados.";
	scaleIntro[PT][2] = "O botão “Enviar Pontuações”, na base da escala, não estará ativo até que tenha sido selecionado um valor para todos os itens.";
	scaleIntro[PT][3] = "Os valores introduzidos perder-se-ão se sair desta página sem selecionar o botão “Enviar Pontuações”.";

	scaleIntro[ES][1] = "Por favor asigne un valor a cada ítem según lo registró en la hoja de trabajo.";
	scaleIntro[ES][2] = "El botón &quot;Enviar puntuaciones&quot;, en la parte inferior de la escala, no se activará hasta que se haya seleccionado un valor para todos los elementos.";
	scaleIntro[ES][3] = "Los puntajes ingresados se perderán si usted abandona esta página sin presionar el botón  “enviar puntuaciones”.";

	scaleIntro[TR][1] = "Çalışma sayfalarına kaydedildiği gibi lütfen her madde için bir değer seçin.";
	scaleIntro[TR][2] = "Ölçeğin alt kısmında yer alan “Puan Gönder” düğmesi tüm maddeler için bir değer seçilene kadar etkinleştirilmeyecektir.";
	scaleIntro[TR][3] = "“Puan Gönder” düğmesine basmadan bu sayfadan ayrılırsanız girilen değerler kaybolacaktır.";

	scaleIntro[RO][1] = "Vă rugăm să selectaţi o valoare pentru fiecare item aşa cum este înregistrat în fişele de lucru.";
	scaleIntro[RO][2] = "Butonul „Transmitere scoruri”, din partea de jos a scalei, va rămâne dezactivat până în momentul în care este selectată câte o valoare pentru toţi itemii.";
	scaleIntro[RO][3] = "Valorile introduse vor fi pierdute dacă părăsiţi această pagină fără a selecta butonul „Transmitere scoruri”.";

	scaleIntro[RU][1] = "Выберите оценку выраженности каждого признака в соответствии с записями в рабочем листе.";
	scaleIntro[RU][2] = "Кнопка &quot;Отправить баллы&quot; в нижней части шкалы станет активной, только когда будут выбраны оценки для всех пунктов.";
	scaleIntro[RU][3] = "Если вы покинете страницу, не нажав кнопку &quot;Отправить баллы&quot;, то введенные оценки будут утеряны.";

	scaleIntro[BG][1] = "Изберете стойност за всеки елемент, както сте записали в работните си листове.";
	scaleIntro[BG][2] = "Бутонът Submit Scores (Изпращане на оценки) в долната част на скалата няма да е активен, докато не бъде избрана стойност за всеки елемент.";
	scaleIntro[BG][3] = "Въведените стойности ще бъдат загубени, ако излезете от тази страница, без да изберете бутона Submit Scores (Изпращане на оценки).";
	
	scaleIntro[ZH][1] = "請依照工作表的記錄，為各項目選擇一個值。";
	scaleIntro[ZH][2] = "只在所有項目均選擇一個值之後，工作表下方的「提交分數」按鈕才會啟用。";
	scaleIntro[ZH][3] = "若您未選擇「提交分數」按鈕即離開此頁面，輸入的數值會丟失。";
	
	scaleIntro[SV][1] = "Välj ett värde för varje punkt enligt arbetsbladen";
	scaleIntro[SV][2] = "Knappen &quot;Skicka poäng&quot;, längst ned på skalan, aktiveras inte förrän värden har valts för alla punkter.";
	scaleIntro[SV][3] = "De värden som har angetts går förlorade om du lämnar den här sidan utan att trycka på knappen &quot;Skicka poäng&quot;.";
	
	scaleIntro[SK][1] = "Prosím, zvoľte hodnotu pre každú položku tak, ako je zaznamenané v pracovných listoch.";
	scaleIntro[SK][2] = "Tlačidlo „Odoslať skóre“ v dolnej časti stupnice nebude aktívne, kým nebude zvolená hodnota pre všetky položky.";
	scaleIntro[SK][3] = "Zadané hodnoty sa vymažú, ak opustíte túto stránku bez toho, aby ste označili tlačidlo „Odoslať skóre“.";



	
	// General feedback strings
	var strMissedItems = [];
	strMissedItems[EN] = "The following items were missed:";
	strMissedItems[CS] = "Chybí následující položky:";
	strMissedItems[DA] = "Følgende punkter mangler:";
	strMissedItems[NL] = "De volgende onderdelen werden gemist:";
	strMissedItems[FI] = "Seuraavat osiot jäivät vastaamatta:";
	strMissedItems[FR] = "Les items suivants ont été manqués:";
	strMissedItems[DE] = "Die folgenden Items wurden ausgelassen:";
	strMissedItems[HU] = "A következő elemek hiányoznak:";
	strMissedItems[IT] = "Mancano le seguenti voci:";
	strMissedItems[JA] = "下記項目未回答:";
	strMissedItems[KO] = "다음 항목이 누락되었습니다:";
	strMissedItems[NO] = "Følgende elementer mangler:";
	strMissedItems[PL] = "Pominięto następujące pozycje:";
	strMissedItems[PT] = "Falharam os seguintes itens:";
	strMissedItems[ES] = "Faltan los siguientes elementos:";
	strMissedItems[TR] = "Aşağıdaki maddeler atlandı:";
	strMissedItems[RO] = "Următorii itemi au fost omişi:";
	strMissedItems[RU] = "Отсутствуют следующие пункты:";
    strMissedItems[BG] = "Следните елементи са пропуснати:";
	strMissedItems[ZH] = "遺漏以下項目：";
	strMissedItems[SV] = "Följande punkter missades:";
	strMissedItems[SK] = "Chýbali nasledujúce položky:";
	strMissedItems[ET] = "Puudu on järgmised jaotised:";
	
	
	var strFeedback = [];
	strFeedback[EN] = "Feedback";
	strFeedback[CS] = "Zpetná vazba";
	strFeedback[DA] = "Feedback";
	strFeedback[NL] = "Feedback";
	strFeedback[FI] = "Palaute";
	strFeedback[FR] = "Commentaires";
	strFeedback[DE] = "Feedback";
	strFeedback[HU] = "Visszajelzés";
	strFeedback[IT] = "Feedback";
	strFeedback[JA] = "フィードバック";
	strFeedback[KO] = "피드백";
	strFeedback[NO] = "Tilbakemelding";
	strFeedback[PL] = "Informacja zwrotna";
	strFeedback[PT] = "Comentário";
	strFeedback[ES] = "Comentarios";
	strFeedback[TR] = "Geribildirim";
	strFeedback[RO] = "Feedback";
	strFeedback[RU] = "Обратная связь";
	strFeedback[BG] = "Обратна връзка";
	strFeedback[ZH] = "回饋";
	strFeedback[SV] = "Feedback";
	strFeedback[SK] = "Spätná väzba";
	strFeedback[ET] = "Tagasiside";
	
	
	
	var strItemNumber = [];
	strItemNumber[EN] = "Item #";
	strItemNumber[CS] = "Položka č.";
	strItemNumber[DA] = "Punkt nr.";
	strItemNumber[NL] = "Onderdeel #";
	strItemNumber[FI] = "Osionumero";
	strItemNumber[FR] = "Item #";
	strItemNumber[DE] = "Item-Nr.";
	strItemNumber[HU] = "Elem száma";
	strItemNumber[IT] = "Item #";
	strItemNumber[JA] = "項目＃";
	strItemNumber[KO] = "항목#";
	strItemNumber[NO] = "Element";
	strItemNumber[PL] = "Pozycja nr";
	strItemNumber[PT] = "Item n.º";
	strItemNumber[ES] = "Elemento n.º";
	strItemNumber[TR] = "Madde no.";
	strItemNumber[RO] = "Nr. element";
	strItemNumber[RU] = "Пункт #";
	strItemNumber[BG] = "№ на елемент";
	strItemNumber[ZH] = "項目編號";
	strItemNumber[SV] = "Punktnr";
	strItemNumber[SK] = "Položka č.";
	strItemNumber[ET] = "Jaotise nr";
	
	
	var strNoItemsMissed = [];
	strNoItemsMissed[EN] = "No items missed";
	strNoItemsMissed[ET] = "Ühtki jaotist pole puudu";
	strNoItemsMissed[CS] = "Nechybí žádné položky";
	strNoItemsMissed[DA] = "Ingen punkter mangler";
	strNoItemsMissed[NL] = "Geen gemiste onderdelen";
	strNoItemsMissed[FI] = "Ei vastaamattomia osioita.";
	strNoItemsMissed[FR] = "Aucun item manqué";
	strNoItemsMissed[DE] = "Keine Items ausgelassen";
	strNoItemsMissed[HU] = "Nincs hiányzó elem";
	strNoItemsMissed[IT] = "Nessuna voce mancante";
	strNoItemsMissed[JA] = "すべて回答済み";
	strNoItemsMissed[KO] = "누락 항목이 없습니다";
	strNoItemsMissed[NO] = "Ingen elementer mangler";
	strNoItemsMissed[PL] = "Nie pominięto żadnej pozycji";
	strNoItemsMissed[PT] = "Nenhum item em falha";
	strNoItemsMissed[ES] = "No faltan elementos";
	strNoItemsMissed[TR] = "Atlanan madde yok";
	strNoItemsMissed[RO] = "Nu au fost omişi itemi";
	strNoItemsMissed[RU] = "Все пункты указаны";
	strNoItemsMissed[BG] = "Няма пропуснати елементи";
	strNoItemsMissed[ZH] = "無遺漏項目";
	strNoItemsMissed[SV] = "Inga punkter missades";
	strNoItemsMissed[SK] = "Nechýbajú žiadne položky";
	
	
	// CDR-specific feedback terms
	var strSumOfBox = [];
	strSumOfBox[EN] = "Sum-of-Box";
	strSumOfBox[ET] = "Summa kast";
	strSumOfBox[CS] = "Souhrn pole:";
	strSumOfBox[DA] = "Boksscore:";
	strSumOfBox[NL] = "Som van veld";
	strSumOfBox[FI] = "Ruutujen yhteenlaskettu summa";
	strSumOfBox[FR] = "Somme-des-cases";
	strSumOfBox[DE] = "Sum-of-Box";
	strSumOfBox[HU] = "Összegző értékelés";
	strSumOfBox[IT] = "Somma della casella";
	strSumOfBox[JA] = "合計点";
	strSumOfBox[KO] = "박스 합계";
	strSumOfBox[NO] = "Summen av boksene";
	strSumOfBox[PL] = "Pole sumy";
	strSumOfBox[PT] = "Soma das caixas";
	strSumOfBox[ES] = "Suma del cuadro";
	strSumOfBox[TR] = "Toplam Değer Kutusu";
	strSumOfBox[RO] = "Căsuţa scor total";
	strSumOfBox[RU] = "Суммарная оценка";
	strSumOfBox[BG] = "Поле със сума";
	strSumOfBox[ZH] = "方格總分";
	strSumOfBox[SV] = "Summa för rutan";
	strSumOfBox[SK] = "Celkový súčet:";
	
	
	
	var strCalculatedValueOf = [];
	strCalculatedValueOf[EN] = "Calculated value of";
	strCalculatedValueOf[ET] = "Arvutatud väärtus";
	strCalculatedValueOf[CS] = "Vypočítaná hodnota položky";
	strCalculatedValueOf[DA] = "Den beregnede værdi for";
	strCalculatedValueOf[NL] = "Berekende waarde van";
	strCalculatedValueOf[FI] = "Laskettu arvo";
	strCalculatedValueOf[FR] = "La valeur calculée de";
	strCalculatedValueOf[DE] = "Der berechnete Wert von";
	strCalculatedValueOf[HU] = "Számított értéke";
	strCalculatedValueOf[IT] = "Il valore calcolato";
	strCalculatedValueOf[JA] = "計算値";
	strCalculatedValueOf[KO] = "계산된 값";
	strCalculatedValueOf[NO] = "Beregnet verdi av";
	strCalculatedValueOf[PL] = "Przeliczona wartość";
	strCalculatedValueOf[PT] = "O valor calculado de";
	strCalculatedValueOf[ES] = "El valor calculado de";
	strCalculatedValueOf[TR] = " ";	// null; all text is behind the number in the translation
	strCalculatedValueOf[RO] = "Valoarea calculată a";	
	strCalculatedValueOf[RU] = "Расчетная величина";	
	strCalculatedValueOf[BG] = "Изчислената стойност на";
	strCalculatedValueOf[ZH] = "TW:Calculated value of";
	strCalculatedValueOf[SV] = "SV:Calculated value of";
	strCalculatedValueOf[SK] = "SK:Calculated value of";
	
	
	var strOutOfAllowableRange = [];
	strOutOfAllowableRange[EN] = "is out of the allowable range.";
	strOutOfAllowableRange[ET] = "jääb lubatud vahemikust välja";
	strOutOfAllowableRange[CS] = "je mimo povolený rozsah.";
	strOutOfAllowableRange[DA] = "ligger uden for det tilladte område.";
	strOutOfAllowableRange[NL] = "valt buiten de toegestane grenzen.";
	strOutOfAllowableRange[FI] = "on hyväksyttävän vaihteluvälin ulkopuolella.";
	strOutOfAllowableRange[FR] = "est en dehors du champs admissible.";
	strOutOfAllowableRange[DE] = "ist außerhalb des zulässigen Bereichs.";
	strOutOfAllowableRange[HU] = "a megengedett tartományon kívül esik.";
	strOutOfAllowableRange[IT] = "non rientra nel raggio consentito.";
	strOutOfAllowableRange[JA] = "は許容可能な点数の範囲外";
	strOutOfAllowableRange[KO] = "은(는) 허용 범위 밖입니다.";
	strOutOfAllowableRange[NO] = "er utenfor tillatt område.";
	strOutOfAllowableRange[PL] = "jest poza dozwolonym zakresem.";
	strOutOfAllowableRange[PT] = "está fora do intervalo aceitável.";
	strOutOfAllowableRange[ES] = "está fuera del rango permitido.";
	strOutOfAllowableRange[TR] = "in hesaplanan değeri izin verilen aralığın dışında.";
	strOutOfAllowableRange[RO] = "este în afara limitelor.";
	strOutOfAllowableRange[RU] = "вне допустимого интервала.";
    strOutOfAllowableRange[BG] = "е извън допустимия обхват";
	strOutOfAllowableRange[ZH] = "ZH:is out of the allowable range.";
	strOutOfAllowableRange[SV] = "SV:is out of the allowable range.";
	strOutOfAllowableRange[SK] = "SK:is out of the allowable range.";
		
		
		
	var strAllItemsInAllowableRange = [];
	strAllItemsInAllowableRange[EN] = "All items are within the allowable range.";
	strAllItemsInAllowableRange[ET] = "Kõik jaotised on lubatud vahemikus";
	strAllItemsInAllowableRange[CS] = "Hodnota všech položek je v povoleném rozsahu.";
	strAllItemsInAllowableRange[DA] = "Alle punkterne ligger inden for det tilladte område.";
	strAllItemsInAllowableRange[NL] = "Alle onderwerpen vallen binnen de toegestane grenzen.";
	strAllItemsInAllowableRange[FI] = "Kaikki osiot ovat sallituissa rajoissa.";
	strAllItemsInAllowableRange[FR] = "Tous les items figurent dans le champs admissible.";
	strAllItemsInAllowableRange[DE] = "Alle Items sind im erlaubten Bereich.";
	strAllItemsInAllowableRange[HU] = "Valamennyi érték a megadott tartományon belül van.";
	strAllItemsInAllowableRange[IT] = "Tutte le voci rientrano nel raggio consentito.";
	strAllItemsInAllowableRange[JA] = "許容可能な点数の範囲内";
	strAllItemsInAllowableRange[KO] = "모든 항목이 허용 범위 안입니다.";
	strAllItemsInAllowableRange[NO] = "Alle elementer er innenfor tillatt område.";
	strAllItemsInAllowableRange[PL] = "Wszystkie pozycje znajdują się w dozwolonym zakresie.";
	strAllItemsInAllowableRange[PT] = "Todos os itens estão dentro dos valores aceitáveis.";
	strAllItemsInAllowableRange[ES] = "Todos los items se encuentran dentro del rango permitido.";
	strAllItemsInAllowableRange[TR] = "Tüm maddeler izin verilen aralığın içinde.";
	strAllItemsInAllowableRange[RO] = "Toţi itemii se încadrează în limite.";
	strAllItemsInAllowableRange[RU] = "Все пункты в пределах допустимого интервала.";
	strAllItemsInAllowableRange[BG] = "Всички елементи са в допустимия обхват";
	strAllItemsInAllowableRange[ZH] = "ZH: All items are within the allowable range.";
	strAllItemsInAllowableRange[SV] = "SV:All items are within the allowable range.";
	strAllItemsInAllowableRange[SK] = "SK:All items are within the allowable range.";
	
	///////////////////////////	
	// Report Strings	
	///////////////////////////	
	var strUsername = [];
	strUsername[EN] = "Name";
	strUsername[ET] = "Nimi";
	strUsername[CS] = "Jméno";
	strUsername[DA] = "Navn";
	strUsername[NL] = "Naam";
	strUsername[FI] = "Nimi";
	strUsername[FR] = "Nom";
	strUsername[DE] = "Name";
	strUsername[HU] = "Név";
	strUsername[IT] = "Nome";
	strUsername[JA] = "名前";
	strUsername[KO] = "이름";
	strUsername[NO] = "NO Name";
	strUsername[PL] = "Imię i nazwisko";
	strUsername[PT] = "Nome";
	strUsername[ES] = "Nombre";
	strUsername[TR] = "TR Name";
	strUsername[RO] = "Nume";
	strUsername[RU] = "Имя и фамилия";
	strUsername[BG] = "Име";
	strUsername[ZH] = "姓名";
	strUsername[SV] = "Namn";
	strUsername[SK] = "Názov";
	
	
	var strGoldStandard = [];
	strGoldStandard[EN] = "Standard Score";
	strGoldStandard[ET] = "Standardskoor";
	strGoldStandard[CS] = "Standardní skóre";
	strGoldStandard[DA] = "Standardscore";
	strGoldStandard[NL] = "Standaardscore";
	strGoldStandard[FI] = "Standardipistemäärä";
	strGoldStandard[FR] = "Note standard";
	strGoldStandard[DE] = "Standard-Punktezahl";
	strGoldStandard[HU] = "Általános pontszám";
	strGoldStandard[IT] = "Punteggio standard";
	strGoldStandard[JA] = "正解";
	strGoldStandard[KO] = "표준 점수";
	strGoldStandard[NO] = "Riktig svar";
	strGoldStandard[PL] = "Wynik standardowy";
	strGoldStandard[PT] = "Classificação padrão";
	strGoldStandard[ES] = "Puntuación estándar";
	strGoldStandard[TR] = "Doğru Yanıt";
	strGoldStandard[RO] = "Punctaj standard";
	strGoldStandard[RU] = "Стандартный балл";
	strGoldStandard[BG] = "Стандартна оценка";
	strGoldStandard[ZH] = "標準分數";
	strGoldStandard[SV] = "Standard poäng";
	strGoldStandard[SK] = "Štandardné skóre";
	
	
	var strEnteredScore = [];
	strEnteredScore[EN] = "Score";
	strEnteredScore[ET] = "Skoor";
	strEnteredScore[CS] = "Skóre";
	strEnteredScore[DA] = "Score";
	strEnteredScore[NL] = "Score";
	strEnteredScore[FI] = "Lähettämäsi pistemäärä";
	strEnteredScore[FR] = "Note";
	strEnteredScore[DE] = "Punktezahl";
	strEnteredScore[HU] = "Pontszám";
	strEnteredScore[IT] = "Punteggio";
	strEnteredScore[JA] = "入力されたスコア";
	strEnteredScore[KO] = "점수";
	strEnteredScore[NO] = "Angitt score";
	strEnteredScore[PL] = "Wynik";
	strEnteredScore[PT] = "Classificação";
	strEnteredScore[ES] = "Puntuación";
	strEnteredScore[TR] = "Girilen Puan";
	strEnteredScore[RO] = "Punctaj";
	strEnteredScore[RU] = "Балл";
	strEnteredScore[BG] = "Оценка";
	strEnteredScore[ZH] = "分數";
	strEnteredScore[SV] = "Poäng";
	strEnteredScore[SK] = "Skóre";
	
			
	var strPassingScore = [];
	strPassingScore[EN] = "Passing Score";
	strPassingScore[ET] = "Läbimiseks vajalik skoor";
	strPassingScore[CS] = "Skóre pro úspěšné dokončení";
	strPassingScore[DA] = "Bestået";
	strPassingScore[NL] = "Benodigde score";
	strPassingScore[FI] = "Läpäisyyn vaadittava pistemäärä";
	strPassingScore[FR] = "Note nécessaire pour réussir";
	strPassingScore[DE] = "Erforderliche Bewertung";
	strPassingScore[HU] = "Elfogadható pontszám";
	strPassingScore[IT] = "Punteggio di superamento";
	strPassingScore[JA] = "スコアを渡す";
	strPassingScore[KO] = "합격 점수";
	strPassingScore[NO] = "Bestått score";
	strPassingScore[PL] = "Wynik zaliczający";
	strPassingScore[PT] = "Classificação de aprovação";
	strPassingScore[ES] = "Puntuación para aprobar";
	strPassingScore[TR] = "Puan Passing";
	strPassingScore[RO] = "Scor de promovare";
	strPassingScore[RU] = "Проходной балл";
	strPassingScore[BG] = "Гранична оценка за издържане";
	strPassingScore[ZH] = "通過分數";
	strPassingScore[SV] = "Poäng för godkänt resultat";
	strPassingScore[SK] = "Skóre na úspešné absolvovanie";
	
	
	var strResult = [];
	strResult[EN] = "Result";
	strResult[ET] = "Tulemus";	
	strResult[CS] = "Výsledek";
	strResult[DA] = "Resultat";
	strResult[NL] = "Resultaat";
	strResult[FI] = "Tulokset";
	strResult[FR] = "Résultats";
	strResult[DE] = "Ergebnis";
	strResult[HU] = "Eredmények";
	strResult[IT] = "Risultato";
	strResult[JA] = "結果";
	strResult[KO] = "결과";
	strResult[NO] = "Resultater";
	strResult[PL] = "Rezultat";
	strResult[PT] = "Resultado";
	strResult[ES] = "Resultado";
	strResult[TR] = "Výsledky";
	strResult[RO] = "Rezultat";
	strResult[RU] = "Результат";
	strResult[BG] = "Резултат";
	strResult[ZH] = "結果";
	strResult[SV] = "Resultat";
	strResult[SK] = "Výsledok";
	
	
	var strPostTest = [];
	strPostTest[EN] = "Post-Test";
	strPostTest[ET] = "Eksam";
	strPostTest[CS] = "Následný test";
	strPostTest[DA] = "Opfølgningstest";
	strPostTest[NL] = "Nameting";
	strPostTest[FI] = "Jälkitesti";
	strPostTest[FR] = "Post-Test";
	strPostTest[DE] = "Post-Test";
	strPostTest[HU] = "A teszt után";
	strPostTest[IT] = "Post-test";
	strPostTest[JA] = "検査後";
	strPostTest[KO] = "테스트 후";
	strPostTest[NO] = "NO Post-Test";
	strPostTest[PL] = "Test końcowy";
	strPostTest[PT] = "Pós-teste";
	strPostTest[ES] = "Posterior a la prueba";
	strPostTest[TR] = "TR Post-Test";
	strPostTest[RO]= "Post-testare";
	strPostTest[RU] = "Финальное тестирование";
    strPostTest[BG] = "Последващ тест";
	strPostTest[ZH] = "補測";
	strPostTest[SV] = "Posttest";
	strPostTest[SK] = "Po teste";
	
	
	var strQuestion = [];
	strQuestion[EN] = "Question";
	strQuestion[ET] = "Küsimus";	
	strQuestion[CS] = "Otázka";
	strQuestion[DA] = "Spørgsmål";
	strQuestion[NL] = "Vraag";
	strQuestion[FI] = "Kysymys";
	strQuestion[FR] = "Question";
	strQuestion[DE] = "Frage";
	strQuestion[HU] = "Kérdés";
	strQuestion[IT] = "Domanda";
	strQuestion[JA] = "質問";
	strQuestion[KO] = "질문";
	strQuestion[NO] = "NO Question";
	strQuestion[PL] = "Pytanie";
	strQuestion[PT] = "Pergunta";
	strQuestion[ES] = "Pregunta";
	strQuestion[TR] = "TR Question";
	strQuestion[RO] = "Întrebare";
	strQuestion[RU] = "Вопрос";
    strQuestion[BG] = "Въпрос";
	strQuestion[ZH] = "問題";
	strQuestion[SV] = "Fråga";
	strQuestion[SK] = "Otázka";
	
	
	var strCriterion = [];
	strCriterion[EN] = "Criterion";
	strCriterion[ET] = "Kriteerium";
	strCriterion[CS] = "Vybrané";
	strCriterion[DA] = "Kriterium";
	strCriterion[NL] = "Criterium";
	strCriterion[FI] = "Kriteeri";
	strCriterion[FR] = "Critère";
	strCriterion[DE] = "Kriterium";
	strCriterion[HU] = "Kritérium";
	strCriterion[IT] = "Criterio";
	strCriterion[JA] = "基準";
	strCriterion[KO] = "선택된";
	strCriterion[NO] = "NO Criterion";
	strCriterion[PL] = "Kryterium";
	strCriterion[PT] = "Critério";
	strCriterion[ES] = "Criterio";
	strCriterion[TR] = "TR Criterion";
	strCriterion[RO] = "Criteriu";
	strCriterion[RU] = "Критерии";
    strCriterion[BG] = "Критерий";
	strCriterion[ZH] = "標準";
	strCriterion[SV] = "Kriterium";
	strCriterion[SK] = "Kritérium";
	
	
	var strSelected = [];
	strSelected[EN] = "Selected";
	strSelected[ET] = "Valitud";	
	strSelected[CS] = "kritérium";
	strSelected[DA] = "Valgt";
	strSelected[NL] = "Geselecteerd";
	strSelected[FI] = "Valittu";
	strSelected[FR] = "Sélectionné";
	strSelected[DE] = "Ausgewählt";
	strSelected[HU] = "Kijelölt";
	strSelected[IT] = "Selezionato";
	strSelected[JA] = "選択済み";
	strSelected[KO] = "기준";
	strSelected[NO] = "NO Selected";
	strSelected[PL] = "Wybrane";
	strSelected[PT] = "Seleccionado";
	strSelected[ES] = "Seleccionado";
	strSelected[TR] = "TR Selected";
	strSelected[RO] = "Selectat";
	strSelected[RU] = "Выбрано";
    strSelected[BG] = "Избран";
	strSelected[ZH] = "已選";
	strSelected[SV] = "Valt";
	strSelected[SK] = "Vybrané";
	
	
	var strDate = [];
	strDate[EN] = "Date";
	strDate[ET] = "Kuupäev";
	strDate[CS] = "Datum";
	strDate[DA] = "Dato";
	strDate[NL] = "Datum";
	strDate[FI] = "Päiväys";
	strDate[FR] = "Datum";
	strDate[DE] = "Datum";
	strDate[HU] = "Dátum";
	strDate[IT] = "Data";
	strDate[JA] = "日付";
	strDate[KO] = "날짜";
	strDate[NO] = "Dato";
	strDate[PL] = "Data";
	strDate[PT] = "Data";
	strDate[ES] = "Fecha";
	strDate[TR] = "Tarih";
	strDate[RO] = "Data";
	strDate[RU] = "Дата";
	strDate[BG] = "Дата";
	strDate[ZH] = "日期";
	strDate[SV] = "Datum";
	strDate[SK] = "Dátum";
	
		
	var strYouPassed = [];
	strYouPassed[EN] = "Congratulations, you passed.";
	strYouPassed[ET] = "Palju õnne, te läbisite ülesande edukalt.";
	strYouPassed[CS] = "Blahopřejeme, úspěšně jste test dokončili.";
	strYouPassed[DA] = "Tillykke, du er bestået.";
	strYouPassed[NL] = "Gefeliciteerd, u bent geslaagd.";
	strYouPassed[FI] = "Onnittelut, suorituksesi hyväksyttiin.";
	strYouPassed[FR] = "Félicitations, vous avez passé.";
	strYouPassed[DE] = "Herzlichen Glückwunsch, Sie haben bestanden!";
	strYouPassed[HU] = "Gratulálunk! Ön átment a teszten.";
	strYouPassed[IT] = "Congratulazioni, il test è superato.";
	strYouPassed[JA] = "合格";
	strYouPassed[KO] = "축하 드립니다. 통과하셨습니다.";
	strYouPassed[NO] = "Gratulerer, du bestod.";
	strYouPassed[PL] = "Gratulacje, zaliczyłeś(aś).";
	strYouPassed[PT] = "Parabéns, está aprovado.";
	strYouPassed[ES] = "Enhorabuena, ha aprobado.";
	strYouPassed[TR] = "Blahopřejeme! Absolvovali jste.";
	strYouPassed[RO] = "Felicitări, aţi promovat.";
	strYouPassed[RU] = "Поздравляем, вы справились с заданием.";
	strYouPassed[BG] = "Поздравления, издържахте.";
	strYouPassed[ZH] = "恭喜，您通過了。";
	strYouPassed[SV] = "Grattis, du fick godkänt resultat.";
	strYouPassed[SK] = "Blahoželáme, úspešne ste prešli testom.";
	
	
	var strYouFailed = [];
	strYouFailed[EN] = "You did not pass.";
	strYouFailed[ET] = "Te ei läbinud ülesannet.";
	strYouFailed[CS] = "Nepovedlo se vám test úspěšně dokončit.";
	strYouFailed[DA] = "Du er ikke bestået.";
	strYouFailed[NL] = "U bent niet geslaagd.";
	strYouFailed[FI] = "Suoritustasi ei hyväksytty.";
	strYouFailed[FR] = "Vous n’avez pas passé.";
	strYouFailed[DE] = "Sie haben nicht bestanden.";
	strYouFailed[HU] = "Ön nem ment át a teszten.";
	strYouFailed[IT] = "Non hai superato.";
	strYouFailed[JA] = "不合格";
	strYouFailed[KO] = "통과하지 못하셨습니다.";
	strYouFailed[NO] = "Du har ikke bestått.";
	strYouFailed[PL] = "Nie zaliczyłeś(aś).";
	strYouFailed[PT] = "Não ficou aprovado.";
	strYouFailed[ES] = "No ha obtenido la calificación necesaria.";
	strYouFailed[TR] = "Nepovedlo se vám test úspěšně dokončit.";
	strYouFailed[RO] = "Nu aţi promovat.";
	strYouFailed[RU] = "Вы не справились с заданием.";
	strYouFailed[BG] = "Не издържахте.";
	strYouFailed[ZH] = "未通過。";
	strYouFailed[SV] = "Du fick inte godkänt resultat.";
	strYouFailed[SK] = "Neprešli ste testom.";
	
	
	var strCorrect = [];
	strCorrect[EN] = "Correct";
	strCorrect[ET] = "Õige";
	strCorrect[CS] = "Správně";
	strCorrect[DA] = "Rigtigt";
	strCorrect[NL] = "Juist";
	strCorrect[FI] = "Oikea vastaus";
	strCorrect[FR] = "Bonne réponse";
	strCorrect[DE] = "Richtig";
	strCorrect[HU] = "Helyes válasz";
	strCorrect[IT] = "Corretto";
	strCorrect[JA] = "正解";
	strCorrect[KO] = "정답";
	strCorrect[NO] = "Riktig svar";
	strCorrect[PL] = "Poprawnie";
	strCorrect[PT] = "Correcto";
	strCorrect[ES] = "Correcto.";
	strCorrect[TR] = "Doğru Yanıt";
	strCorrect[RO] = "Corect";
	strCorrect[RU] = "Верно";
	strCorrect[BG] = "Правилно";
	strCorrect[ZH] = "正確";
	strCorrect[SV] = "Rätt";
	strCorrect[SK] = "Správne";
	
	
	var strIncorrect = [];
	strIncorrect[EN] = "Incorrect";
	strIncorrect[ET] = "Vale";
	strIncorrect[CS] = "Nesprávně";
	strIncorrect[DA] = "Forkert";
	strIncorrect[NL] = "Onjuist";
	strIncorrect[FI] = "Vastaus ei kelpaa";
	strIncorrect[FR] = "Réponse non valide";
	strIncorrect[DE] = "Falsch";
	strIncorrect[HU] = "Érvénytelen válasz";
	strIncorrect[IT] = "Sbagliato";
	strIncorrect[JA] = "答えが無効です";
	strIncorrect[KO] = "오답";
	strIncorrect[NO] = "Ugyldig svar";
	strIncorrect[PL] = "Niepoprawnie";
	strIncorrect[PT] = "Incorrecto";
	strIncorrect[ES] = "Incorrecto";
	strIncorrect[TR] = "Geçersiz Yanıt";
	strIncorrect[RO] = "Incorect";
	strIncorrect[RU] = "Неверно";
	strIncorrect[BG] = "Грешно";
	strIncorrect[ZH] = "不正確";
	strIncorrect[SV] = "Fel";
	strIncorrect[SK] = "Nesprávne";
	
	
	var strSubmitScores = [];
	strSubmitScores[EN] = "Submit Scores";
	strSubmitScores[ET] = "Esita skoorid";
	strSubmitScores[CS] = "Odeslat skóre";
	strSubmitScores[DA] = "Indsend scorer";
	strSubmitScores[NL] = "Scores indienen";
	strSubmitScores[FI] = "Lähetä tulokset";
	strSubmitScores[FR] = "Soumettez les scores";
	strSubmitScores[DE] = "Bewertungen senden";
	strSubmitScores[HU] = "Pontszámok beküldése";
	strSubmitScores[IT] = "Invia i Punteggi";
	strSubmitScores[JA] = "スコアの提出";
	strSubmitScores[KO] = "점수 제출";
	strSubmitScores[NO] = "Send inn score";
	strSubmitScores[PL] = "Zatwierdź wyniki";
	strSubmitScores[PT] = "Enviar Pontuações";
	strSubmitScores[ES] = "Enviar puntuaciones";
	strSubmitScores[TR] = "Puan Gönder";
	strSubmitScores[RO] = "Transmitere scoruri";
	strSubmitScores[RU] = "Отправить баллы";
	strSubmitScores[BG] = "Изпращане на оценки";
	strSubmitScores[ZH] = "提交分數";
	strSubmitScores[SV] = "Skicka poäng";
	strSubmitScores[SK] = "Odoslať skóre";
	
			
			
	var strSubmit = [];
	strSubmit[EN] = "Submit";
	strSubmit[ET] = "Esita";
	strSubmit[CS] = "Odeslat";
	strSubmit[DA] = "Send";
	strSubmit[NL] = "Indienen";
	strSubmit[FI] = "Lähetä";
	strSubmit[FR] = "Soumettre";
	strSubmit[DE] = "Absenden";
	strSubmit[HU] = "Beküldés";
	strSubmit[IT] = "Invia";
	strSubmit[JA] = "送信";
	strSubmit[KO] = "제출";
	strSubmit[NO] = "NO Submit";
	strSubmit[PL] = "Zatwierdź";
	strSubmit[PT] = "Enviar";
	strSubmit[ES] = "Enviar";
	strSubmit[TR] = "TR Submit";
	strSubmit[RO] = "Transmitere";
	strSubmit[RU] = "Отправить";
	strSubmit[BG] = "Изпращане";
	strSubmit[ZH] = "提交";
	strSubmit[SV] = "Skicka";
	strSubmit[SK] = "Odoslať";
	
	
	
	var strEvaluationCriteria = [];
	strEvaluationCriteria[EN] = "Evaluation Criteria:";
	strEvaluationCriteria[ET] = "Hindamiskriteeriumid:";
	strEvaluationCriteria[CS] = "Hodnotící kritéria:";
	strEvaluationCriteria[DA] = "Evalueringskriterier:";
	strEvaluationCriteria[NL] = "Evaluatiecriteria:";
	strEvaluationCriteria[FI] = "Arviointikriteerit:";
	strEvaluationCriteria[FR] = "Critère d'évaluation:";
	strEvaluationCriteria[DE] = "Beurteilungskriterien:";
	strEvaluationCriteria[HU] = "Értékelési kritérium:";
	strEvaluationCriteria[IT] = "Criteri di valutazione:";
	strEvaluationCriteria[JA] = "評価基準:";
	strEvaluationCriteria[KO] = "평가 기준:";
	strEvaluationCriteria[NO] = "NO Evaluation Criteria";
	strEvaluationCriteria[PL] = "Kryteria oceny:";
	strEvaluationCriteria[PT] = "Critérios de avaliação:";
	strEvaluationCriteria[ES] = "Criterios de evaluación:";
	strEvaluationCriteria[TR] = "TR Evaluation Criteria";
	strEvaluationCriteria[RO] = "Criterii de evaluare:";
	strEvaluationCriteria[RU] = "Критерии оценки:";
	strEvaluationCriteria[BG] = "Критерии за оценка :";
	strEvaluationCriteria[ZH] = "評估標準：";
	strEvaluationCriteria[SV] = "Bedömningskriterier:";
	strEvaluationCriteria[SK] = "Kritériá hodnotenia:";
	
	
	
	
	var strLocalStorageAlert = make2dArray(languageCode.length);
	strLocalStorageAlert[EN][1] = "Unable to save report to local storage.";
	strLocalStorageAlert[EN][2] = "Report will be displayed instead.";
	strLocalStorageAlert[EN][3] = "Please PRINT the report as it will not be saved once the display window is closed.";
	
	strLocalStorageAlert[ET][1] = "Aruannet ei saa kohalikku mällu salvestada.";
	strLocalStorageAlert[ET][2] = "Selle asemel aruanne kuvatakse.";
	strLocalStorageAlert[ET][3] = "Palun printige aruanne, sest seda ei salvestata, kui olete kuvatava akna sulgenud.";

	strLocalStorageAlert[CS][1] = "Zprávu nelze uložit do místního úložiště";
	strLocalStorageAlert[CS][2] = "Místo toho se zobrazí zpráva.";
	strLocalStorageAlert[CS][3] = "Zprávu prosím VYTISKNĚTE, neboť se po zavření okna neuloží.";

	strLocalStorageAlert[DA][1] = "Kunne ikke gemme rapporten på det lokale drev";
	strLocalStorageAlert[DA][2] = "Rapporten vil blive vist i stedet for.";
	strLocalStorageAlert[DA][3] = "UDSKRIV venligst rapporten. Den vil ikke blive gemt, når visningsvinduet lukkes.";

	strLocalStorageAlert[NL][1] = "Rapport kan niet lokaal worden opgeslagen.";
	strLocalStorageAlert[NL][2] = "In plaats hiervan wordt het rapport weergegeven.";
	strLocalStorageAlert[NL][3] = "PRINT het rapport, want het wordt niet opgeslagen als het weergavevenster gesloten wordt.";

	strLocalStorageAlert[FI][1] = "Raporttia ei voi tallentaa paikalliseen muistiin";
	strLocalStorageAlert[FI][2] = "Sen sijaan raportti näytetään.";
	strLocalStorageAlert[FI][3] = "TULOSTA raportti, sillä sitä ei tallenneta näyttöikkunan sulkemisen jälkeen.";

	strLocalStorageAlert[FR][1] = "Impossible de sauvegarder le rapport sur un stockage local.";
	strLocalStorageAlert[FR][2] = "Au lieu de celà, le rapport sera affiché.";
	strLocalStorageAlert[FR][3] = "Veuillez IMPRIMER le rapport car il ne sera pas sauvegardé une fois que la fenêtre d'affichage sera fermée.";

	strLocalStorageAlert[DE][1] = "Bericht konnte lokal nicht gespeichert werden.";
	strLocalStorageAlert[DE][2] = "Bericht wird stattdessen angezeigt.";
	strLocalStorageAlert[DE][3] = "Bitte DRUCKEN Sie diesen Bericht aus, da er nicht gespeichert wird, wenn das Anzeigefenster geschlossen wird.";

	strLocalStorageAlert[HU][1] = "A jelentést nem sikerült a helyi tárolóba elmenteni";
	strLocalStorageAlert[HU][2] = "Ehelyett a jelentés a kijelzőn jelenik meg.";
	strLocalStorageAlert[HU][3] = "Kérjük, NYOMTASSA KI a jelentést, mivel a megjelenítési ablak bezárását követően a rendszer nem menti azt.";

	strLocalStorageAlert[IT][1] = "Impossibile salvare il report su supporto locale.";
	strLocalStorageAlert[IT][2] = "Il report sarà invece visualizzato a schermo.";
	strLocalStorageAlert[IT][3] = "STAMPARE il report, poiché non sarà salvato alla chiusura della finestra.";

	strLocalStorageAlert[JA][1] = "ローカル ストレージにレポートを保存できませんでした";
	strLocalStorageAlert[JA][2] = "代わりにレポートが表示されます。";
	strLocalStorageAlert[JA][3] = "表示ウィンドウを閉じてしまうと、レポートは保存されませんので、レポートを印刷してください。";

	strLocalStorageAlert[KO][1] = "보고서를 로컬 저장소에 저장할 수 없습니다.";
	strLocalStorageAlert[KO][2] = "대신 화면에 표시합니다.";
	strLocalStorageAlert[KO][3] = "표시된 창이 닫히면 저장되지 않기 때문에 보고서는 반드시 인쇄하도록 하십시오.";

	strLocalStorageAlert[NO][1] = "NO: Unable to save report to local storage.";
	strLocalStorageAlert[NO][2] = "NO: Report will be displayed instead.";
	strLocalStorageAlert[NO][3] = "NO: Please PRINT the report as it will not be saved once the display window is closed.";

	strLocalStorageAlert[PL][1] = "Nie można zapisać raportu w pamięci lokalnej.";
	strLocalStorageAlert[PL][2] = "Zamiast tego raport zostanie wyświetlony.";
	strLocalStorageAlert[PL][3] = "Proszę WYDRUKOWAĆ raport, ponieważ nie zostanie on zapisany po zamknięciu okna.";

	strLocalStorageAlert[PT][1] = "Não é possível guardar o relatório no armazenamento local.";
	strLocalStorageAlert[PT][2] = "Em vez disso, o relatório será apresentado.";
	strLocalStorageAlert[PT][3] = "IMPRIMA o relatório porque este não será guardado quando fechar a janela de visualização.";

	strLocalStorageAlert[ES][1] = "No es posible guardar el informe localmente.";
	strLocalStorageAlert[ES][2] = "En su lugar, se mostrará el informe.";
	strLocalStorageAlert[ES][3] = "IMPRIMA el informe, ya que no se guardará una vez cerrada la ventana de visualización.";

	strLocalStorageAlert[TR][1] = "TR: Unable to save report to local storage.";
	strLocalStorageAlert[TR][2] = "TR: Report will be displayed instead.";
	strLocalStorageAlert[TR][3] = "TR: Please PRINT the report as it will not be saved once the display window is closed.";

	strLocalStorageAlert[RO][1] = "Raportul nu a putut fi salvat în mediile locale de stocare";
	strLocalStorageAlert[RO][2] = "În schimb, se va afişa raportul.";
	strLocalStorageAlert[RO][3] = "Vă rugăm să TIPĂRIŢI raportul fiindcă nu va fi salvat odată ce se închide fereastra de afişare.";
	
	strLocalStorageAlert[RU][1] = "RU: Unable to save report to local storage.";
	strLocalStorageAlert[RU][2] = "RU: Report will be displayed instead.";
	strLocalStorageAlert[RU][3] = "RU: Please PRINT the report as it will not be saved once the display window is closed.";
	
	strLocalStorageAlert[BG][1] = "Невъзможно запазване на отчет в локална памет";
	strLocalStorageAlert[BG][2] = "Вместо това, отчетът ще бъде показан.";
	strLocalStorageAlert[BG][3] = "Моля, ОТПЕЧАТАЙТЕ отчета, тъй като той няма да бъде запазен след затварянето на прозореца.";
	
	strLocalStorageAlert[ZH][1] = "無法將報告儲存至本機儲存空間。";
	strLocalStorageAlert[ZH][2] = "將改為顯示報告。";
	strLocalStorageAlert[ZH][3] = "請列印報告，因為顯示視窗關閉後，不會儲存此報告。";
	
	strLocalStorageAlert[SV][1] = "Det går inte att spara rapporten för lokal lagring";
	strLocalStorageAlert[SV][2] = "Rapporten kommer att visas i stället.";
	strLocalStorageAlert[SV][3] = "SKRIV UT rapporten eftersom den inte kommer att sparas när visningsfönstret stängs.";
	
	strLocalStorageAlert[SK][1] = "Správa sa nedá uložiť do lokálnej pamäte";
	strLocalStorageAlert[SK][2] = "Správa sa namiesto toho zobrazí.";
	strLocalStorageAlert[SK][3] = "VYTLAČTE správu, pretože po zatvorení okna zobrazenia sa správa neuloží.";
	