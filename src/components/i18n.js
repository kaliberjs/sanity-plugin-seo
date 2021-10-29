import Jed from 'jed' // Jed is used by Yoast SEO for internationalization

export const i18n = new Jed({
  domain: 'js-text-analysis',
  debug: true,
  locale_data: {
    'js-text-analysis': {
      '': {
        'domain': 'js-text-analysis',
        'lang': 'nl',
        'plural_forms' : 'nplurals=2; plural=(n != 1);'
      },
      'The copy scores %1$s in the %2$s test, which is considered %3$s to read. %4$s': [
        'Deze copy scoort %1$s in de %2$s test, wat gezien wordt als %3$s om te lezen. %4$s'
      ],
      'Good job!': [
        'Top!'
      ],
      'very easy': [
        'zeer makkelijk'
      ],
      'easy': [
        'makkelijk'
      ],
      'fairly easy': [
        'redelijk makkelijk'
      ],
      'ok': [
        'ok'
      ],
      'fairly difficult': [
        'redelijk moeilijk'
      ],
      'difficult': [
        'moeilijk'
      ],
      'very difficult': [
        'zeer moeilijk'
      ],
      'Try to make shorter sentences to improve readability': [
        'Probeer kortere zinnen te maken om de leesbaarheid te verhogen'
      ],
      'Try to make shorter sentences, using less difficult words to improve readability': [
        'Probeer kortere zinnen met minder moeilijke woorden te maken, om de leesbaarheid te verhogen'
      ],
      '%1$sFlesch Reading Ease%2$s: The copy scores %3$s in the test, which is considered %4$s to read. %5$s': [
        '%1$sFlesch Reading Ease%2$s: Je tekst scoort een %3$s in deze test, wat wordt gezien als %4$s om te lezen. %5$s'
      ],
      '%1$sFlesch Reading Ease%2$s: The copy scores %3$s in the test, which is considered %4$s to read. %5$s%6$s%7$s': [
        '%1$sFlesch Reading Ease%2$s: Je tekst scoort een %3$s in deze test, wat wordt gezien als %4$s om te lezen. %5$s%6$s%7$s'
      ],
      '%1$sParagraph length%2$s: None of the paragraphs are too long. Great job!': [
        '%1$sParagraaf lengte%2$s: Geen van je paragrafen zijn te lang. Netjes!'
      ],
      '%1$sParagraph length%2$s: %3$d of the paragraphs contains more than the recommended maximum of %4$d words. %5$sShorten your paragraphs%2$s!': [
        '%1$sParagraaf lengte%2$s: %3$d van de paragrafen bevat meer dan het aanbevolen maximum van %4$d woorden. %5$sVerkort je paragrafen%2$s.',
        '%1$sParagraaf lengte%2$s: %3$d van de paragrafen bevatten meer dan het aanbevolen maximum van %4$d woorden. %5$sVerkort je paragrafen%2$s.'
      ],
      '%1$sPassive voice%2$s: You\'re using enough active voice. That\'s great!': [
        '%1$sLijdende vorm%2$s: Je schrijft genoeg in de bedrijvende vorm. Geweldig!'
      ],
      '%1$sPassive voice%2$s: %3$s of the sentences contain passive voice, which is more than the recommended maximum of %4$s. %5$sTry to use their active counterparts%2$s.': [
        '%1$sLijdende vorm%2$s: %3$s van de zinnen zijn geschreven in de lijdende vorm, wat meer is dan het aanbevolen maximum van %4$s. %5$sProbeer de bedrijvende vorm te gebruiken%2$s.'
      ],
      '%1$sConsecutive sentences%2$s: The text contains %3$d consecutive sentences starting with the same word. %5$sTry to mix things up%2$s!': [
        '%1$Afwisselende zinnen%2$s: Je tekst bevat %3$d opeenvolgende zinnen die beginnen met hetzelfde woord. %5$sWat variatie kan geen kwaad%2$s!'
      ],
      '%1$sConsecutive sentences%2$s: There is enough variety in your sentences. That\'s great!': [
        '%1$sAfwisselende zinnen%2$s: De zinnen in je tekst zijn afwisselend genoeg, top!'
      ],
      'The meta description contains no sentences %1$sover %2$s words%3$s.': [
        'De zinnen in de meta beschrijving van deze pagina zijn kort genoeg (%1$s%2$s woorden, of minder%3$s).'
      ],
      'The meta description contains %1$d sentence %2$sover %3$s words%4$s. Try to shorten this sentence.': [
        'De meta beschrijving van deze pagina bevat %1$d zin %2$sdie langer is dan %3$s woorden%4$s. Probeer deze in te korten',
        'De meta beschrijving van deze pagina bevat %1$d zinnen %2$sdie langer zijn dan %3$s woorden%4$s. Probeer deze zinnen in te korten'
      ],
      '%1$sSentence length%2$s: Great!': [
        '%1$sZinslengte%2$s: Helemaal in orde.'
      ],
      '%1$sSentence length%2$s: %3$s of the sentences contain more than %4$s words, which is more than the recommended maximum of %5$s. %6$sTry to shorten the sentences%2$s.': [
        '%1$sZinslengte%2$s: %3$s van je zinnen bevatten meer dan %4$s woorden, wat meer is dat het aanbevolen maximum van  %5$s. %6$sProbeer deze zinnen in te korten%2$s.'
      ],
      '%1$sSubheading distribution%2$s: Great job!': [
        '%1$sSubkop verdeling%2$s: Netjes!'
      ],
      '%1$sSubheading distribution%2$s: %3$d section of your text is longer than %4$d words and is not separated by any subheadings. %5$sAdd subheadings to improve readability%2$s.': [
        '%1$sSubkop verdeling%2$s: %3$d deel van je tekst is langer dan %4$s woorden zonder te worden afgewisseld door een subkop. %5$sVoeg subkoppen toe om de leesbaarheid te verhogen%2$s.',
        '%1$sSubkop verdeling%2$s: %3$d delen van je tekst zijn langer dan %4$s woorden zonder te worden afgewisseld door een subkop. %5$sVoeg subkoppen toe om de leesbaarheid te verhogen%2$s.'
      ],
      '%1$sSubheading distribution%2$s: You are not using any subheadings, although your text is rather long. %3$sTry and add some subheadings%2$s.': [
        '%1$sSubkop verdeling%2$s: Je tekst is vrij lang, maar je maakt geen gebruik van subkoppen. %3$sProbeer wat subkoppen toe te voegen%2$s.'
      ],
      '%1$sSubheading distribution%2$s: You are not using any subheadings, but your text is short enough and probably doesn\'t need them.': [
        '%1$sSubkop verdeling%2$s: Je gebruikt geen subkoppen, maar je tekst is kort genoeg en heeft deze daarom waarschijnlijk ook niet nodig.'
      ],
      '%1$sNot enough content%2$s: %3$sPlease add some content to enable a good analysis%2$s.': [
        '%1$sNiet genoeg content%2$s: %3$sEr is niet genoeg content om een goede analyse te kunnen doen%2$s.'
      ],
      '%1$sTransition words%2$s: None of the sentences contain transition words. %3$sUse some%2$s.': [
        '%1$sVoegwoorden%2$s: Geen van je zinnen bevatten voegwoorden. %3$sOverweeg er een paar te gebruiken%2$s.'
      ],
      '%1$sTransition words%2$s: Only %3$s of the sentences contain transition words, which is not enough. %4$sUse more of them%2$s.': [
        '%1$sVoegwoorden%2$s: Maar %3$s van je zinnen bevatten voegwoorden, dat zijn er weinig. %3$sOverweeg er wat meer te gebruiken%2$s.'
      ],
      '%1$sTransition words%2$s: Well done!': [
        '%1$sVoegwoorden%2$s: Goed gedaan!'
      ],
      '%1$s of the words contain %2$sover %3$s syllables%4$s, which is less than or equal to the recommended maximum of %5$s.': [
        '%1$s van je woorden bevat %2$smeer dan %3$s lettergrepen%4$s. Dat is minder dan (of gelijk aan) het aanbevolen maximum van %5$s.'
      ],
      '%1$s of the words contain %2$sover %3$s syllables%4$s, which is more than the recommended maximum of %5$s.': [
        '%1$s van je woorden bevat %2$smeer dan %3$s lettergrepen%4$s. Dat is meer dan het aanbevolen maximum van %5$s.'
      ],
      '%1$sFunction words in keyphrase%3$s: Your keyphrase \'%4$s\' contains function words only. %2$sLearn more about what makes a good keyphrase.%3$s': [
        '%1$sFunctiewoorden in je keyphrase%3$s: Je keyphrase \'%4$s\' bevat enkel functie woorden. %2$sLees meer over het maken van een goede keyphrase.%3$s'
      ],
      '%1$sInternal links%3$s: No internal links appear in this page, %2$smake sure to add some%3$s!': [
        '%1$sInterne links%3$s: Er komen geen interne links voor op deze pagina. %2$sVoeg er wat toe%3$s!'
      ],
      '%1$sInternal links%3$s: The internal links in this page are all nofollowed. %2$sAdd some good internal links%3$s.': [
        '%1$sInterne links%3$s: Alle interne links op deze pagina zijn <code>nofollowed</code>. %2$sVoeg wat goede interne links toe%3$s!'
      ],
      '%1$sInternal links%2$s: You have enough internal links. Good job!': [
        '%1$sInterne links%3$s: Er zitten genoeg interne links in je tekst, nice!'
      ],
      '%1$sKeyphrase in introduction%2$s: Well done!': [
        '%1$sKeyphrase in je intro%2$s: Top!'
      ],
      '%1$sKeyphrase in introduction%3$s: Your keyphrase or its synonyms appear in the first paragraph of the copy, but not within one sentence. %2$sFix that%3$s!': [
        '%1$sKeyphrase in je intro%3$s: Je keyphrase (of synoniemen hiervan) komen voor in de eerste paragraaf van je tekst, maar %2$sniet binnen dezelfde zin%3$s.'
      ],
      '%1$sKeyphrase in introduction%3$s: Your keyphrase or its synonyms do not appear in the first paragraph. %2$sMake sure the topic is clear immediately%3$s.': [
        '%1$sKeyphrase in je intro%3$s: Je keyphrase (of synoniemen hiervan) komen niet voor in de eerste paragraaf van je tekst. %2$sZorg ervoor dat je onderwerp direct duidelijk is%3$s.'
      ],
      '%1$sKeyphrase distribution%3$s: %2$sInclude your keyphrase or its synonyms in the text so that we can check keyphrase distribution%3$s.': [
        '%1$sKeyphrase verdeling%3$s: %2$sZorg dat je keyphrase (of synoniemen daarvan) in je tekst voorkomen, zodat we de keyphraseverdeling kunnen controleren.'
      ],
      '%1$sKeyphrase distribution%3$s: Very uneven. Large parts of your text do not contain the keyphrase or its synonyms. %2$sDistribute them more evenly%3$s.': [
        '%1$sKeyphrase verdeling%3$s: Zeer ongelijk verdeeld. In grote delen van je tekst ontbreekt je keyphrase (of synoniemen hiervan). Zorg dat deze %2$sgelijkmatig verdeeld over je tekst voorkomen.%3$s.'
      ],
      '%1$sKeyphrase distribution%3$s: Uneven. Some parts of your text do not contain the keyphrase or its synonyms. %2$sDistribute them more evenly%3$s.': [
        '%1$sKeyphrase verdeling%3$s: Ongelijk verdeeld. In sommige delen van je tekst ontbreekt je keyphrase (of synoniemen hiervan). Probeer deze %2$sgelijkmatiger te verdelen.%3$s.'
      ],
      '%1$sKeyphrase distribution%2$s: Good job!': [
        '%1$sKeyphrase verdeling%3$s: Perfect!'
      ],
      '%1$sKeyphrase length%3$s: %2$sSet a keyphrase in order to calculate your SEO score%3$s.': [
        '%1$sKeyphrase lengte%3$s: %2$sStel een keyphrase in om je SEO score te kunnen analyseren%3$s.'
      ],
      '%1$sKeyphrase length%3$s: No focus keyphrase was set for this page. %2$sSet a keyphrase in order to calculate your SEO score%3$s.': [
        '%1$sKeyphrase lengte%3$s: Er is geen focus keyphrase ingesteld voor deze pagina. %2$sStel een keyphrase in om je SEO score te kunnen analyseren%3$s.'
      ],
      '%1$sKeyphrase length%2$s: Good job!': [
        '%1$sKeyphrase lengte%3$s: Netjes!'
      ],
      '%3$sKeyphrase length%5$s: The keyphrase is %1$d words long. That\'s more than the recommended maximum of %2$d words. %4$sMake it shorter%5$s!': [
        '%1$sKeyphrase lengte%3$s: Je keyphrase is %1$d woorden lang. Dat is meer dan het aanbevolen maximum van %2$d woorden. %4$sMaak deze korter%5$s!'
      ],
      '%3$sKeyphrase length%5$s: The keyphrase is %1$d words long. That\'s way more than the recommended maximum of %2$d words. %4$sMake it shorter%5$s!': [
        '%1$sKeyphrase lengte%3$s: Je keyphrase is %1$d woorden lang. Dat is een stuk meer dan het aanbevolen maximum van %2$d woorden. %4$sMaak deze korter%5$s!'
      ],
      '%1$sKeyphrase density%2$s: The focus keyphrase was found 0 times. That\'s less than the recommended minimum of %3$d times for a text of this length. %4$sFocus on your keyphrase%2$s!': [
        '%1$sKeyphrase dichtheid%2$s: De focus keyphrase komt niet voor in je tekst. In een text van deze lengte wil je het tenminste %3$d keer terug laten komen. %4$sFocus je op je keyphrase%2$s.'
      ],
      '%1$sKeyphrase density%2$s: The focus keyphrase was found %5$d time. That\'s less than the recommended minimum of %3$d times for a text of this length. %4$sFocus on your keyphrase%2$s!': [
        '%1$sKeyphrase dichtheid%2$s: De focus keyphrase komt %5$d keer voor. Dat is minder dan het aanbevolen minimum van %3$d keer voor een text van deze lengte. %4$sFocus je op je keyphrase%2$s.',
        '%1$sKeyphrase dichtheid%2$s: De focus keyphrase komt %5$d keer voor. Dat is minder dan het aanbevolen minimum van %3$d keer voor een text van deze lengte. %4$sFocus je op je keyphrase%2$s.'
      ],
      '%1$sKeyphrase density%2$s: The focus keyphrase was found %3$d time. This is great!': [
        '%1$sKeyphrase dichtheid%2$s: De focus keyphrase komt %3$d keer voor. Top!',
        '%1$sKeyphrase dichtheid%2$s: De focus keyphrase komt %3$d keer voor. Top!'
      ],
      '%1$sKeyphrase density%2$s: The focus keyphrase was found %5$d time. That\'s more than the recommended maximum of %3$d times for a text of this length. %4$sDon\'t overoptimize%2$s!': [
        '%1$sKeyphrase dichtheid%2$s: De focus keyphrase komt %5$d keer voor. Dat is boven het aanbevolen maximum van %3$d keer voor een text van deze lengte. %4$sProbeer niet te overoptimaliseren.%2$s!',
        '%1$sKeyphrase dichtheid%2$s: De focus keyphrase komt %5$d keer voor. Dat is boven het aanbevolen maximum van %3$d keer voor een text van deze lengte. %4$sProbeer niet te overoptimaliseren.%2$s!'
      ],
      '%1$sKeyphrase density%2$s: The focus keyphrase was found %5$d time. That\'s way more than the recommended maximum of %3$d times for a text of this length. %4$sDon\'t overoptimize%2$s!': [
        '%1$sKeyphrase dichtheid%2$s: De focus keyphrase komt %5$d keer voor. Dat is ver boven het aanbevolen maximum van %3$d keer voor een text van deze lengte. %4$sProbeer niet te overoptimaliseren!%2$s!',
        '%1$sKeyphrase dichtheid%2$s: De focus keyphrase komt %5$d keer voor. Dat is ver boven het aanbevolen maximum van %3$d keer voor een text van deze lengte. %4$sProbeer niet te overoptimaliseren!%2$s!'
      ],
      '%1$sStopwords%3$s: The keyphrase contains stop words. This may or may not be wise depending on the circumstances. %2$sLearn more about stop words%3$s.': [
        '%1$sStopwoorden%3$s: Je keyphrase bevat stopwoorden. Dit kan voor- en nadelig zijn, afhankelijk van de omstandigheden. %2$sLeer meer over stopwoorden%3$s.'
      ],
      '%1$sKeyphrase in meta description%2$s: Keyphrase or synonym appear in the meta description. Well done!': [
        '%1$sKeyphrase in je meta description%2$s: Je keyphrase (of synoniemen hiervan) komen voor in je meta description. Heel goed!'
      ],
      '%1$sKeyphrase in meta description%2$s: The meta description contains the keyphrase %3$s times, which is over the advised maximum of 2 times. %4$sLimit that%5$s!': [
        '%1$sKeyphrase in je meta description%2$s: De meta description bevat je keyphrase %3$s keer, wat meer is dan het aanbevolen maximum van 2 keer. %4$sBeperk dat%5$s!'
      ],
      '%1$sKeyphrase in meta description%2$s: The meta description has been specified, but it does not contain the keyphrase. %3$sFix that%4$s': [
        '%1$sKeyphrase in je meta description%2$s: Er is een meta description opgegeven, maar je keyphrase komt er niet in voor. %3$sNoem je keyphrase%4$s.'
      ],
      '%1$sMeta description length%3$s: No meta description has been specified. Search engines will display copy from the page instead. %2$sMake sure to write one%3$s!': [
        '%1$sMeta description lengte%3$s: Er is geen meta beschrijving opgegeven. Dit betekent dat zoekmachines in plaats daarvan content uit je pagina laten zien. %2$sZorg dat je een meta description toevoegt%3$s!'
      ],
      '%1$sMeta description length%3$s: The meta description is too short (under %4$d characters). Up to %5$d characters are available. %2$sUse the space%3$s!': [
        '%1$sMeta description lengte%3$s: Je meta description is te kort (minder dan %4$d karakters). Je description mag tot %5$d karakters bevatten. %2$sMaak hier gebruik van!%3$s!'
      ],
      '%1$sMeta description length%3$s: The meta description is over %4$d characters. To ensure the entire description will be visible, %2$syou should reduce the length%3$s!': [
        '%1$sMeta description lengte%3$s: Je meta description is langer dan %4$d karakters. Om er zeker van te zijn dat je hele description getoond wordt, %2$smoet je hem inkorten%3$s.'
      ],
      '%1$sMeta description length%2$s: Well done!': [
        '%1$sMeta description lengte%3$s: Super!'
      ],
      '%1$sOutbound links%3$s: No outbound links appear in this page. %2$sAdd some%3$s!': [
        '%1$sUitgaande links%3$s: Er komen geen uitgaande links voor op deze pagina. %2$sVoeg er een paar toe%3$s!'
      ],
      '%1$sOutbound links%3$s: All outbound links on this page are nofollowed. %2$sAdd some normal links%3$s.': [
        '%1$sUitgaande links%3$s: Alle uitgaande links op deze pagina zijn <code>nofollowed</code>. %2$sVoeg een paar normale toe%3$s.'
      ],
      '%1$sOutbound links%2$s: Good job!': [
        '%1$sUitgaande links%2$s: Helemaal goed!'
      ],
      '%1$sOutbound links%2$s: There are both nofollowed and normal outbound links on this page. Good job!': [
        '%1$sUitgaande links%2$s: Je pagina bevat zowel <code>nofollowed</code> als normale uitgaande links. Helemaal goed!'
      ],
      '%1$sSEO title width%3$s: The SEO title is too short. %2$sUse the space to add keyphrase variations or create compelling call-to-action copy%3$s.': [
        '%1$sSEO title lengte%3$s: Je SEO titel is te kort. %2$sGebruik de ruimte om variaties op je keyphrase of een maak een overtuigende call-to-action tekst%3$s.'
      ],
      '%1$sSEO title width%2$s: Good job!': [
        '%1$sSEO title lengte%2$s: Prima!'
      ],
      '%1$sSEO title width%3$s: The SEO title is wider than the viewable limit. %2$sTry to make it shorter%3$s.': [
        '%1$sSEO title lengte%3$s: De SEO titel is langer dan de zichtbare lengte. %2$sProbeer hem korter te maken.%3$s.'
      ],
      '%1$sSEO title width%3$s: %2$sPlease create an SEO title%3$s.': [
        '%1$sSEO title lengte%3$s: %2$sVul een SEO title in%3$s.'
      ],
      '%1$sSingle title%3$s: H1s should only be used as your main title. Find all H1s in your text that aren\'t your main title and %2$schange them to a lower heading level%3$s!': [
        '%1$sEen enkele titel%3$s: H1s zouden enkel als je hoofdtitel gebruikt moeten worden. Zorg dat je alle H1 koppen in je tekst welke niet je hoofdtitel zijn en verander ze in een lager %2$sheadingniveau%3$s.'
      ],
      '%1$sKeyphrase in subheading%3$s: %2$sUse more keyphrases or synonyms in your H2 and H3 subheadings%3$s!': [
        '%1$sKeyphrase in subkoppen%3$s: %2$sGebruik je keyphrase (of synoniemen hiervan) meer in je H2 en H3 subkoppen%3$s!'
      ],
      '%1$sKeyphrase in subheading%3$s: More than 75%% of your H2 and H3 subheadings reflect the topic of your copy. That\'s too much. %2$sDon\'t over-optimize%3$s!': [
        '%1$sKeyphrase in subkoppen%3$s: Meer dan 75%% van je H2 en H3 subkoppen gaan over het hoofdonderwerp van je tekst. Dat is te veel, %2$szorg dat je niet over-optimaliseerd%3$s!'
      ],
      '%1$sKeyphrase in subheading%2$s: Your H2 or H3 subheading reflects the topic of your copy. Good job!': [
        '%1$sKeyphrase in subkoppen%2$s: Je H2 of H3 subkoppen gaan over het hoofdonderwerp van je tekst. Super!'
      ],
      '%1$sKeyphrase in subheading%2$s: %3$s of your H2 and H3 subheadings reflects the topic of your copy. Good job': [
        '%1$sKeyphrase in subkoppen%2$s: %3$s van je H2 en H3 subkoppen gaan over het hoofdonderwerp van je tekst. Top!',
        '%1$sKeyphrase in subkoppen%2$s: %3$s van je H2 en H3 subkoppen gaat over het hoofdonderwerp van je tekst. Top!'
      ],
      '%2$sText length%3$s: The text contains %1$d word. Good job!': [
        '%2$sText lengte%3$s: Je tekst bevat %1$d woord. Top!',
        '%2$sText lengte%3$s: Je tekst bevat %1$d woorden. Top!'
      ],
      '%2$sText length%4$s: The text contains %1$d word.': [
        '%2$sText lengte%3$s: Je tekst bevat %1$d woord.',
        '%2$sText lengte%3$s: Je tekst bevat %1$d woorden.'
      ],
      'This is slightly below the recommended minimum of %5$d word. %3$sAdd a bit more copy%4$s.': [
        'Dit is nèt onder het aanbevolen minimum van %5$d woord. %3$sVoeg wat meer content toe%4$s.',
        'Dit is nèt onder het aanbevolen minimum van %5$d woorden. %3$sVoeg wat meer content toe%4$s.'
      ],
      'This is below the recommended minimum of %5$d word. %3$sAdd more content%4$s.': [
        'Dit is minder dan het aanbevolen minimum van %5$d woord. %3$sVoeg meer content toe%4$s.',
        'Dit is minder dan het aanbevolen minimum van %5$d woorden. %3$sVoeg meer content toe%4$s.'
      ],
      'This is far below the recommended minimum of %5$d word. %3$sAdd more content%4$s.': [
        'Dit is ver onder het aanbevolen minimum van %5$d woord. %3$sVoeg meer content toe%4$s.',
        'Dit is ver onder het aanbevolen minimum van %5$d woorden. %3$sVoeg meer content toe%4$s.'
      ],
      '%1$sLink keyphrase%3$s: You\'re linking to another page with the words you want this page to rank for. %2$sDon\'t do that%3$s!': [
        '%1$sLink keyphrase%3$s: Je linkt naar een andere pagina waarin woorden voorkomen waar je met deze pagina op wilt ranken. %2$sProbeer dat te voorkomen%3$s!'
      ],
      '%1$sImage alt attributes%3$s: No images appear on this page. %2$sAdd some%3$s!': [
        '%1$sAlt attributen voor afbeeldingen%3$s: Er komen geen afbeeldingen voor op deze pagina. %2$sOverweeg er een paar toe te voegen%3$s.'
      ],
      '%1$sImage alt attributes%3$s: Images on this page have alt attributes, but you have not set your keyphrase. %2$sFix that%3$s!': [
        '%1$sAlt attributen voor afbeeldingen%3$s: Afbeeldingen op deze pagina hebben <code>alt</code> attributen, maar je hebt geen keyphrase ingesteld. %2$sStel deze in%3$s.'
      ],
      '%1$sImage alt attributes%3$s: Images on this page do not have alt attributes that reflect the topic of your text. %2$sAdd your keyphrase or synonyms to the alt tags of relevant images%3$s!': [
        '%1$sAlt attributen voor afbeeldingen%3$s: Afbeeldingen op deze pagina hebben geen <code>alt</code> attributen die relevant zijn voor het onderwerp van je text. %2$sVoeg je keyphrase (of synoniemen daarvan) toe aan de <code>alt</code> tags van relevante afbeeldingen%3$s!'
      ],
      '%3$sImage alt attributes%5$s: Out of %2$d images on this page, only %1$d has an alt attribute that reflects the topic of your text. %4$sAdd your keyphrase or synonyms to the alt tags of more relevant images%5$s!': [
        '%1$sAlt attributen voor afbeeldingen%3$s: Van de %2$d afbeeldingen op deze pagina, heeft slechts %1$d daarvan een <code>alt</code> attribuut dat relevant is voor het onderwerp van je text. %2$sVoeg je keyphrase (of synoniemen daarvan) toe aan de <code>alt</code> tags van meer relevante afbeeldingen%3$s!',
        '%1$sAlt attributen voor afbeeldingen%3$s: Van de %2$d afbeeldingen op deze pagina, hebben slechts %1$d daarvan een <code>alt</code> attribuut dat relevant is voor het onderwerp van je text. %2$sVoeg je keyphrase (of synoniemen daarvan) toe aan de <code>alt</code> tags van meer relevante afbeeldingen%3$s!'
      ],
      '%1$sImage alt attributes%2$s: Good job!': [
        '%1$sAlt attributen voor afbeeldingen%3$s: Goed bezig!'
      ],
      '%3$sImage alt attributes%5$s: Out of %2$d images on this page, %1$d have alt attributes with words from your keyphrase or synonyms. That\'s a bit much. %4$sOnly include the keyphrase or its synonyms when it really fits the image%5$s.': [
        '%1$sAlt attributen voor afbeeldingen%3$s: Van de %2$d afbeeldingen op deze pagina, hebben er %1$d een <code>alt</code> attribuut met woorden uit je keyphrase (of synoniemen daarvan). Dat is wat veel. %4$sGebruik je keyphrase (of synoniemen daarvan) alleen wanneer dat relevant is voor de afbeelding%5$s.'
      ],
      '%1$sKeyphrase in title%2$s: The exact match of the focus keyphrase appears at the beginning of the SEO title. Good job!': [
        '%1$sKeyphrase in titel%2$s: Een exacte match met je focus keyphrase komt voor aan het begin van je SEO titel. Netjes!'
      ],
      '%1$sKeyphrase in title%3$s: The exact match of the focus keyphrase appears in the SEO title, but not at the beginning. %2$sMove it to the beginning for the best results%3$s.': [
        '%1$sKeyphrase in titel%2$s: Een exacte match met je focus keyphrase komt voor in je SEO titel, maar niet aan het begin. %2$sVerplaats deze naar het begin voor de beste resultaten%3$s.'
      ],
      '%1$sKeyphrase in title%3$s: Does not contain the exact match. %2$sTry to write the exact match of your keyphrase in the SEO title and put it at the beginning of the title%3$s.': [
        '%1$sKeyphrase in titel%2$s: Je SEO titel bevat geen exacte met je focus keyphrase. %2$sProbeer je exacte keyphrase aan het begin van je SEO titel terug te laten komen%3$s.'
      ],
      '%1$sKeyphrase in title%3$s: Not all the words from your keyphrase \'%4$s\' appear in the SEO title. %2$sFor the best SEO results write the exact match of your keyphrase in the SEO title, and put the keyphrase at the beginning of the title%3$s.': [
        '%1$sKeyphrase in titel%2$s: Niet alle woorden uit je keyphrase \'%4$s\' komen voor in je SEO titel. %2$Voor de beste SEO resultaten laat je je exacte keyphrase aan het begin van je SEO titel terugkomen%3$s.'
      ],
      '%1$sKeyphrase in slug%2$s: Great work!': [
        '%1$sKeyphrase in slug%2$s: Top!'
      ],
      '%1$sKeyphrase in slug%3$s: (Part of) your keyphrase does not appear in the slug. %2$sChange that%3$s!': [
        '%1$sKeyphrase in url%3$s: Je keyphrase (of een deel daarvan) komt niet voor in je url. %2$sPas dat aan%3$s.'
      ],
      '%1$sKeyphrase in slug%2$s: More than half of your keyphrase appears in the slug. That\'s great!': [
        '%1$sKeyphrase in url%2$s: Tenminste de helft van je keyphrase komt voor in je url. Geweldig!'
      ],
      '%1$sSlug too long%3$s: the slug for this page is a bit long. %2$sShorten it%3$s!': [
        '%1$sUrl too long%2$s: De url voor deze pagina is nogal lang. %2$sMaak deze wat korter%3$s.'
      ],
      '%1$sSlug stopwords%3$s: The slug for this page contains a stop word. %2$sRemove it%3$s!': [
        '%1$sStopwoorden in url%3$s: De url voor deze pagina bevat een stopwoord. %2$sVerwijder deze%3$s.'
      ],
      '%1$sPreviously used keyphrase%2$s: You\'ve not used this keyphrase before, very good.': [
        '%1$sEerder gebruikte keyphrase%2$s: Je hebt deze keyphrase nog niet eerder gebruikt, heel goed.'
      ],
      '%3$sPreviously used keyphrase%5$s: You\'ve used this keyphrase %1$sonce before%2$s. %4$sDo not use your keyphrase more than once%5$s.': [
        '%3$sEerder gebruikte keyphrase%5$s: Je hebt deze keyphrase %1$seen keer eerder%2$s gebruikt. %4$sProbeer je keyphrase maar een keer te gebruiken%5$s.'
      ],
      '%4$sPreviously used keyphrase%6$s: You\'ve used this keyphrase %1$s%2$d times before%3$s. %5$sDo not use your keyphrase more than once%6$s.': [
        '%4$sEerder gebruikte keyphrase%6$s: Je hebt deze keyphrase %1$s%2$d keer eerder%3$s gebruikt. %5$sGebruik je keyphrase niet meer dan een keer%6$s.'
      ],
      'Content optimization:': [
        'Content optimalisatie'
      ],
      'Feedback': [
        'Feedback'
      ],
      'Has feedback': [
        'Heeft feedback'
      ],
      'Needs improvement': [
        'Voor verbetering vatbaar'
      ],
      'OK SEO score': [
        'SEO score: OK'
      ],
      'OK': [
        'OK'
      ],
      'Good SEO score': [
        'Goede SEO score'
      ],
      'Good': [
        'Goed'
      ],
      'An error occurred in the \'%1$s\' assessment': [
        'Er is een fout opgetreden in het \'%1$s\' assessment'
      ],
      'Marks are disabled in current view': [
        'Markeringen zijn uitgeschakeld in de huidige view'
      ],
      'Mark this result in the text': [
        'Markeer dit resultaat in de tekst'
      ],
      'Remove marks in the text': [
        'Verwijder markeringen in de tekst'
      ],
    },
  },
})
