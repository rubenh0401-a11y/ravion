import { cookies } from "next/headers";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fluggastrechte Überblick",
  description: "Regeln, Entschädigungshöhen und typische Fälle nach EU 261/2004 im kompakten Überblick.",
};

type CaseBlock = {
  id: string;
  title: string;
  teaser: string;
  bullets: string[];
  note?: string;
  timeline?: ReadonlyArray<{
    label: string;
    title: string;
    text: string;
  }>;
  matrixTitle?: string;
  matrixHeaders?: readonly string[];
  matrixRows?: ReadonlyArray<readonly string[]>;
  mctTitle?: string;
  mctLead?: string;
  mctRows?: ReadonlyArray<{
    airport: string;
    sameTerminal: string;
    terminalChange: string;
    note: string;
  }>;
};

const copy = {
  de: {
    title: "Fluggastrechte Überblick",
    lead:
      "Hier findest du die wichtigsten Regeln rund um EU-Fluggastrechte in klarer Form. Die Seite dient als Orientierung und ersetzt keine individuelle Rechtsberatung.",
    quickTitle: "Direkt zum Thema",
    ctaButton: "Fall starten",
	    quickLinks: [
	      ["scope", "Wann gelten EU-Fluggastrechte?"],
	      ["amounts", "Wie hoch kann die Entschädigung sein?"],
	      ["special", "Außergewöhnliche Umstände"],
	      ["cases", "Anwendungsfälle aufklappen"],
	    ] as const,
    scopeTitle: "Wann gelten EU-Fluggastrechte?",
    scopeText:
      "Entscheidend sind vor allem Startort, Zielort und die Frage, ob eine europäische Airline den Flug durchführt. Nicht jede Verbindung mit EU-Bezug fällt automatisch unter die EU-Verordnung.",
    scopeVisualTitle: "So prüfst du die Anwendbarkeit in der Praxis",
    scopeVisualLead:
      "Die folgende Logik deckt die typischen Fallkonstellationen ab. Sie zeigt, wann die EU-Verordnung regelmäßig greift und wann eher das Montrealer Übereinkommen relevant wird.",
    scopeScenarios: [
      {
        label: "Abflug in EU / EWR / Schweiz",
        carrier: "Airline egal",
        result: "EU-Recht gilt",
        detail: "Startet der Flug in diesem Raum, gilt die EU-Verordnung grundsätzlich unabhängig davon, ob die Airline europäisch oder außereuropäisch ist.",
        tone: "positive",
      },
      {
        label: "Landung in EU / EWR / Schweiz",
        carrier: "EU-Airline",
        result: "EU-Recht gilt",
        detail: "Bei einem Flug in die EU kommt es darauf an, wer den Flug tatsächlich durchführt. Ist es eine europäische Airline, greift die Verordnung in der Regel ebenfalls.",
        tone: "positive",
      },
      {
        label: "Landung in EU / EWR / Schweiz",
        carrier: "Nicht-EU-Airline",
        result: "Häufig kein EU-Recht",
        detail: "Kommt der Flug zwar in der EU an, wird aber von einer nicht-europäischen Airline durchgeführt, besteht oft kein Anspruch aus der EU-Verordnung.",
        tone: "negative",
      },
    ] as const,
    scopeNote:
      "Faustregel: Der sicherste Anknüpfungspunkt ist ein Abflug aus der EU, dem EWR oder der Schweiz. Bei Flügen in die EU wird die ausführende Airline entscheidend.",
    montrealTitle: "Was gilt außerhalb des EU-Anwendungsbereichs?",
    montrealText:
      "Greift die EU-Verordnung nicht, kann bei internationalen Flügen das Montrealer Übereinkommen relevant werden. Dort geht es nicht um feste Pauschalen wie 250, 400 oder 600 Euro, sondern vor allem um konkret nachweisbare Schäden und Aufwendungen.",
    montrealBullets: [
      "Besonders wichtig ist es bei Gepäckverlust, Gepäckbeschädigung oder verspäteter Gepäckauslieferung.",
      "Bei Verspätungen können außerdem nachweisbare Mehrkosten relevant sein, etwa für Hotel, notwendige Ersatzkäufe oder zusätzliche Weiterreise.",
      "Im Unterschied zur EU-Verordnung musst du hier den konkreten Schaden belegen. Belege, Rechnungen und eine saubere Dokumentation sind deshalb besonders wichtig.",
    ],
    montrealNote:
      "Das Montrealer Übereinkommen ersetzt die EU-Regeln nicht, sondern schließt typische Lücken außerhalb des EU-Anwendungsbereichs oder bei zusätzlichen Schadenspositionen.",
    amountsTitle: "Wie hoch ist die Entschädigung?",
    amountsLead:
      "Für die EU-Pauschale ist vor allem entscheidend, ob du dein Ziel mit mindestens 3 Stunden Verspätung erreichst. Die Höhe richtet sich dann in erster Linie nach der Flugdistanz.",
    amountsIntro:
      "Neben der Ausgleichszahlung können zusätzlich Betreuungsleistungen oder Erstattungsrechte bestehen. Das sollte man getrennt betrachten.",
    amountsHeaders: ["Voraussetzung", "Bis 1.500 km", "1.500 bis 3.500 km", "Über 3.500 km"],
    amountsRows: [
      ["Ankunftsverspätung ab 3 Stunden", "250 EUR", "400 EUR", "600 EUR"],
    ] as Array<[string, string, string, string]>,
    amountsCards: [
      {
        title: "Entschädigung",
        text: "Ab 3 Stunden Ankunftsverspätung kann ein Anspruch auf 250, 400 oder 600 Euro bestehen.",
      },
      {
        title: "Betreuungsleistungen",
        text: "Während der Wartezeit können Mahlzeiten, Getränke, Kommunikationsmöglichkeiten und bei Bedarf auch Hotelübernachtung relevant werden.",
      },
      {
        title: "Rücktritt / Erstattung",
        text: "Ab mehr als 5 Stunden Verspätung kann ein Rücktritt von der Reise mit Ticket-Erstattung in Betracht kommen.",
      },
    ] as const,
    amountsExampleTitle: "Beispiel bei Flugverspätung",
    amountsExampleText:
      "Ein Flug von Frankfurt nach Athen kommt statt um 14:00 Uhr erst um 18:00 Uhr an. Bei 4 Stunden Ankunftsverspätung und einer Flugstrecke von über 1.500 km kann daher regelmäßig eine Pauschale von 400 Euro im Raum stehen. Zusätzlich können während der Wartezeit Betreuungsleistungen geschuldet sein.",
    specialTitle: "Außergewöhnliche Umstände",
    specialText:
      "Der Begriff ist enger, als Airlines oft behaupten. Nicht jede technische Störung oder organisatorische Panne ist außergewöhnlich. Man muss deshalb sauber unterscheiden zwischen Problemen aus dem eigenen Betriebsbereich der Airline und echten externen Ausnahmesituationen.",
    specialOrdinaryTitle: "Meist nicht außergewöhnlich",
    specialOrdinaryIntro:
      "In diesen Fallgruppen bleibt ein Entschädigungsanspruch häufig bestehen, weil die Ursache typischerweise dem normalen Betriebsrisiko der Airline zugerechnet wird:",
    specialOrdinaryGroups: [
      {
        title: "Technische und operative Probleme",
        items: [
          "gewöhnliche technische Defekte am Flugzeug ohne äußere Einwirkung",
          "Verschleiß, Wartungsmängel oder Probleme in der Einsatzplanung",
          "Umorganisation des Flugplans oder verspätete Bereitstellung des Flugzeugs",
        ],
      },
      {
        title: "Personal und interner Betrieb",
        items: [
          "fehlerhafte Personalplanung oder Überschreitung zulässiger Arbeitszeiten",
          "interne Streiks der ausführenden Airline",
          "Verzögerungen beim Check-in oder Boarding durch Airline-Mitarbeiter",
        ],
      },
      {
        title: "Vorgänge im Einflussbereich der Airline",
        items: [
          "Beschädigungen bei Be- und Entladung, Catering oder Schleppvorgängen",
          "Kerosinmangel oder andere vermeidbare Organisationsfehler",
          "Mangel an Enteisungsmittel, wenn dies auf mangelhafte Vorbereitung zurückgeht",
        ],
      },
    ] as const,
    specialExtraTitle: "Meist außergewöhnlich",
    specialExtraIntro:
      "Hier ist ein Entschädigungsanspruch oft ausgeschlossen, weil die Ursache von außen kommt und nicht dem normalen Flugbetrieb der Airline zugeordnet wird:",
    specialExtraGroups: [
      {
        title: "Wetter und Naturereignisse",
        items: [
          "schwere Unwetter, Schneesturm, Gewitter, Hagel, starke Winde oder dichter Nebel",
          "Luftraumsperrungen oder Sicherheitslagen wegen Wetterbedingungen",
          "Blitzschlag, Vogelschlag oder andere äußere Einwirkungen auf das Flugzeug",
        ],
      },
      {
        title: "Behörden, Flughafen, Flugsicherung",
        items: [
          "Anordnungen der Flugsicherung oder behördliche Beschränkungen",
          "Streiks der Fluglotsen oder des Flughafenpersonals",
          "Sperrung von Flughafen, Landebahn oder relevanten Flughafen-Systemen",
        ],
      },
      {
        title: "Externe Störungen und Sicherheitslagen",
        items: [
          "politische Unruhen, Einreisebeschränkungen oder Reisewarnungen",
          "Sabotage, Sicherheitsvorfälle oder massive Störungen durch Passagiere",
          "medizinische Notfälle an Bord oder außergewöhnliche Zwischenfälle mit Mitreisenden",
        ],
      },
    ] as const,
    specialWeatherTitle: "Typische Wetterlagen ohne Entschädigung",
    specialWeatherItems: [
      "Vulkanausbruch / Aschewolke",
      "dichter Nebel",
      "starker Schneefall",
      "Gewitterfront",
      "Blitzschlag",
      "Sturmböen",
      "Starkregen",
      "Hagel",
    ] as const,
    specialProofTitle: "Wichtig: Die Airline muss mehr beweisen als nur schlechtes Wetter",
    specialProofText:
      "Selbst wenn ein außergewöhnlicher Umstand vorliegt, ist die Airline nicht automatisch frei. Sie muss zusätzlich darlegen, dass sie alle zumutbaren Maßnahmen geprüft hat, um dich möglichst früh anderweitig zu befördern. Dazu können auch Umbuchungen auf andere Airlines oder alternative Verkehrsmittel gehören.",
    casesTitle: "Anwendungsfälle (zum Aufklappen)",
    casesLead:
      "Klicke auf den Falltyp, der auf dich passt. Du siehst direkt, worauf es typischerweise ankommt.",
    openLabel: "Aufklappen",
    caseBlocks: [
      {
        id: "verspaetung",
        title: "Flugverspätung",
        teaser: "Entscheidend ist nicht die Abflugverspätung, sondern die tatsächliche Ankunft am Ziel.",
        note: "Maßgeblich ist die Ankunftsverspätung am Zielort. Startet dein Flug 4 Stunden später, landet aber mit weniger als 3 Stunden Verspätung, gibt es meist keine EU-Pauschale.",
        timeline: [
          {
            label: "Unter 2 Stunden",
            title: "In der Regel noch kein Anspruch",
            text: "Verspätungen unter 2 Stunden musst du meist hinnehmen. Ein Anspruch auf Entschädigung oder Betreuungsleistungen besteht dann in der Regel noch nicht. Nach etwa 1 Stunde kann es sich aber lohnen, bei der Airline nach Kulanzleistungen zu fragen.",
          },
          {
            label: "Ab 2 Stunden",
            title: "Betreuungsleistungen",
            text: "Ab 120 Minuten muss die Airline dich grundsätzlich betreuen, etwa mit Snacks, Getränken und Kommunikationsmöglichkeiten. Je nach Situation können auch Gutscheine oder direkte Versorgung am Flughafen geschuldet sein.",
          },
          {
            label: "Ab 3 Stunden",
            title: "Pauschale Entschädigung",
            text: "Ab 3 Stunden Ankunftsverspätung kann eine pauschale Entschädigung von 250 bis 600 Euro bestehen. Du musst keinen konkreten Schaden nachweisen. Der reine Zeitverlust kann bereits genügen.",
          },
          {
            label: "Ab 5 Stunden",
            title: "Erstattung, Umbuchung oder Ersatzbeförderung",
            text: "Ab mehr als 5 Stunden kannst du wählen: Flugpreis-Erstattung, kostenfreie Umbuchung auf einen späteren Zeitpunkt oder Weiterreise mit dem nächstbesten Transportmittel wie Zug, Bus oder Taxi.",
          },
        ] as const,
        matrixTitle: "Das steht dir bei Ankunftsverspätung typischerweise zu",
        matrixHeaders: ["Ankunftsverspätung", "Flugstrecke", "Typischer Anspruch"],
        matrixRows: [
          ["Unter 2 Stunden", "beliebige Entfernung", "regelmäßig keine EU-Pauschale"],
          ["Ab 2 Stunden", "beliebige Entfernung", "Betreuungsleistungen"],
          ["Ab 3 Stunden", "bis 1.500 km", "250 EUR"],
          ["Ab 3 Stunden", "1.500 bis 3.500 km", "400 EUR"],
          ["Ab 3 Stunden", "über 3.500 km", "600 EUR"],
        ] as const,
        bullets: [
          "Ab 2 Stunden kommen Betreuungsleistungen in Betracht.",
          "Ab 3 Stunden Ankunftsverspätung kann eine Pauschale bestehen.",
          "Ab 5 Stunden kommen Erstattung, Umbuchung oder Ersatzbeförderung hinzu.",
        ],
      },
      {
        id: "annullierung",
        title: "Flugausfall / Annullierung",
        teaser: "Bei einer Annullierung hast du in der Regel zuerst die Wahl zwischen Ersatzbeförderung und Erstattung.",
        note: "Die EU-Fluggastrechte greifen typischerweise bei Flügen innerhalb der EU, bei Abflug aus der EU sowie bei Landung in der EU mit einer EU-Airline. Neben einer möglichen Entschädigung geht es bei Annullierungen vor allem um die Frage: weiterreisen oder zurücktreten?",
        timeline: [
          {
            label: "Schritt 1",
            title: "Ersatzbeförderung oder Erstattung wählen",
            text: "Nach einer Annullierung kannst du dich grundsätzlich entweder auf einen anderen Flug oder eine andere Ersatzbeförderung umbuchen lassen oder dir den Ticketpreis vollständig erstatten lassen. Welche Option besser ist, hängt davon ab, ob du dein Ziel noch erreichen willst.",
          },
          {
            label: "Schritt 2",
            title: "Ersatzflug muss nicht der nächstmögliche sein",
            text: "Du kannst grundsätzlich auch einen späteren Ersatzflug zu einem für dich passenden Zeitpunkt verlangen, sofern Plätze verfügbar sind. Die Airline darf dafür nicht einfach einen Aufpreis verlangen.",
          },
          {
            label: "Schritt 3",
            title: "Entschädigung hängt oft von der Information im Voraus ab",
            text: "Wurde dir die Annullierung weniger als 14 Tage vor Abflug mitgeteilt, kann zusätzlich eine pauschale Entschädigung zwischen 250 und 600 Euro in Betracht kommen. Zumutbare Ersatzverbindungen können den Anspruch allerdings beeinflussen.",
          },
          {
            label: "Schritt 4",
            title: "Wenn die Airline nicht handelt: Selbsthilfe",
            text: "Reagiert die Airline nicht rechtzeitig auf eine verlangte Umbuchung, kannst du ihr eine angemessene Frist setzen. Verstreicht sie, darfst du dich oft selbst um Ersatz kümmern und Mehrkosten unter Umständen als Selbsthilfeaufwand geltend machen.",
          },
        ] as const,
        matrixTitle: "Wichtige Konstellationen bei Annullierung",
        matrixHeaders: ["Situation", "Was du verlangen kannst", "Worauf es ankommt"],
        matrixRows: [
          ["Du willst weiterreisen", "Ersatzbeförderung", "auch andere Flüge oder Verkehrsmittel können zählen"],
          ["Du willst nicht mehr fliegen", "volle Ticket-Erstattung", "regelmäßig binnen 7 Tagen"],
          ["Info unter 14 Tagen vor Abflug", "250 bis 600 EUR", "abhängig von Distanz und zumutbarer Ersatzverbindung"],
          ["Hin- und Rückflug als eine Buchung", "unter Umständen Erstattung beider Flüge", "wichtig ist die einheitliche Buchung"],
          ["Airline reagiert nicht rechtzeitig", "eigene Ersatzbuchung", "vorher Frist setzen und alles dokumentieren"],
        ] as const,
        bullets: [
          "Du musst nicht automatisch den ersten angebotenen Ersatzflug nehmen.",
          "Bei Information weniger als 14 Tage vorher kann zusätzlich eine EU-Pauschale entstehen.",
          "Schriftliche Bestätigung, Belege und Fristsetzung können später sehr wichtig werden.",
        ],
      },
      {
        id: "nichtbefoerderung",
        title: "Nichtbeförderung / Überbuchung",
        teaser: "Wenn dir das Boarding gegen deinen Willen verweigert wird, obwohl du alles richtig gemacht hast, bestehen die Ansprüche oft vergleichsweise klar.",
        note: "Überbuchung bedeutet meist, dass mehr Tickets verkauft wurden als Sitze vorhanden sind. Entscheidend ist rechtlich die unfreiwillige Nichtbeförderung. Voraussetzung ist typischerweise, dass du rechtzeitig eingecheckt warst, ein gültiges Ticket hattest und keine Sicherheits- oder Gesundheitsgründe gegen die Mitnahme sprachen.",
        timeline: [
          {
            label: "Schritt 1",
            title: "Nicht freiwillig verzichten",
            text: "Gibst du deinen Platz freiwillig gegen Gutschein, Bargeld oder Upgrade auf, entfällt die gesetzliche Entschädigung meist. Für den vollen EU-Anspruch ist wichtig, dass dir die Beförderung gegen deinen Willen verweigert wurde.",
          },
          {
            label: "Schritt 2",
            title: "Wahl zwischen Ersatzbeförderung und Erstattung",
            text: "Du kannst grundsätzlich entweder eine schnelle Ersatzbeförderung verlangen oder vom Flug zurücktreten und dir den Ticketpreis erstatten lassen. Die Entschädigung kann daneben trotzdem bestehen.",
          },
          {
            label: "Schritt 3",
            title: "250 bis 600 EUR möglich",
            text: "Die Entschädigung richtet sich nicht nach dem Ticketpreis, sondern nach der Flugdistanz. Je nach Strecke kommen 250, 400 oder 600 Euro in Betracht. Wird dir sehr kurzfristig eine angemessene Ersatzbeförderung angeboten, kann sich der Betrag allerdings reduzieren.",
          },
          {
            label: "Schritt 4",
            title: "Betreuung und Beweise sichern",
            text: "Während der Wartezeit können Getränke, Mahlzeiten, Kommunikationsmöglichkeiten und bei Bedarf Hotel und Transfer relevant sein. Lass dir den Grund möglichst schriftlich bestätigen und dokumentiere Ausgaben, Gutscheine und Kommunikation.",
          },
        ] as const,
        matrixTitle: "Wichtige Konstellationen bei Überbuchung",
        matrixHeaders: ["Situation", "Typischer Anspruch", "Worauf es ankommt"],
        matrixRows: [
          ["Boarding gegen deinen Willen verweigert", "250 bis 600 EUR", "rechtzeitiger Check-in und gültige Unterlagen"],
          ["Du verzichtest freiwillig", "meist keine EU-Pauschale", "Gutschein oder Upgrade ersetzt oft den gesetzlichen Anspruch"],
          ["Du willst trotzdem ans Ziel", "Ersatzbeförderung", "auch andere Flüge oder Verkehrsmittel können zählen"],
          ["Du willst nicht mehr reisen", "Ticket-Erstattung", "Entschädigung kann daneben fortbestehen"],
          ["Ersatzflug kommt nur leicht verspätet an", "Entschädigung kann sich halbieren", "maßgeblich sind die gesetzlichen Zeitgrenzen je nach Distanz"],
        ] as const,
        bullets: [
          "Freiwilliger Verzicht ist rechtlich etwas anderes als Nichtbeförderung gegen deinen Willen.",
          "Neben der Pauschale kommen Betreuung und Wahlrechte zwischen Ersatzbeförderung und Erstattung hinzu.",
          "Schriftliche Bestätigung und Dokumentation am Gate sind hier besonders wichtig.",
        ],
      },
      {
        id: "anschluss",
        title: "Verpasster Anschlussflug",
        teaser: "Entscheidend ist meist nicht der einzelne Teilflug, sondern ob du dein Endziel wegen des verpassten Anschlusses mindestens 3 Stunden verspätet erreichst.",
        note: "Ein Anspruch setzt typischerweise voraus, dass Zubringerflug und Anschlussflug Teil einer einheitlichen Buchung waren. Maßgeblich ist dann die Verspätung am Endziel. Bei getrennt gebuchten Tickets ist die Rechtslage deutlich schwächer, weil die Verantwortung für die Umsteigeplanung oft bei dir selbst liegt.",
        timeline: [
          {
            label: "Schritt 1",
            title: "Eine Buchung ist der wichtigste Ausgangspunkt",
            text: "Zubringerflug und Anschlussflug sollten in einem Buchungsvorgang reserviert worden sein. Dann wird die gesamte Reise rechtlich eher als zusammenhängende Verbindung betrachtet. Bei Einzelbuchungen fehlt diese Verbindung oft.",
          },
          {
            label: "Schritt 2",
            title: "Maßgeblich ist die Verspätung am Endziel",
            text: "Auch bei mehrteiligen Reisen zählt in der Regel die Ankunftsverspätung am finalen Zielort. Erreichst du dein Endziel mit mindestens 3 Stunden Verspätung, kann eine Entschädigung zwischen 250 und 600 Euro in Betracht kommen.",
          },
          {
            label: "Schritt 3",
            title: "Die Airline muss für den Anschluss eine Lösung anbieten",
            text: "Verpasst du den Weiterflug wegen eines verspäteten Zubringerflugs, muss die Airline dir grundsätzlich eine Ersatzbeförderung zum Endziel anbieten. Das kann ein anderer Flug sein, aber auch eine andere angemessene Weiterbeförderung.",
          },
          {
            label: "Schritt 4",
            title: "Wartezeit und Übernachtung lösen weitere Rechte aus",
            text: "Ab entsprechender Wartezeit stehen dir Verpflegung und Kommunikationsmöglichkeiten zu. Verschiebt sich der Weiterflug auf den nächsten Tag, muss die Airline in der Regel Hotel und Transfer übernehmen.",
          },
          {
            label: "Schritt 5",
            title: "Mindestumsteigezeit (MCT) verschiebt oft die Beweislast",
            text: "Wird die offiziell vorgesehene Mindestumsteigezeit unterschritten, spricht das stark dafür, dass der Anschluss objektiv nicht mehr erreichbar war. Dann liegt der Fall regelmäßig deutlich günstiger für den Passagier. Liegt die Umsteigezeit formal über der MCT, entfällt ein Anspruch aber nicht automatisch. In dieser Konstellation wird nur die Darlegung schwieriger: Dann muss genauer erklärt werden, warum der Anschluss trotz formaler MCT noch unerreichbar war, etwa wegen langer Busfahrt zum Terminal, Passkontrollen, Sicherheitskontrollen, Zugtransfer zwischen Terminals oder verspätetem Aussteigen. Wird die MCT dagegen unterschritten, ist es für die Airline regelmäßig sehr schwer, dem Passagier die Verantwortung für den verpassten Anschluss zuzuweisen.",
          },
        ] as const,
        matrixTitle: "Wichtige Konstellationen beim verpassten Anschlussflug",
        matrixHeaders: ["Konstellation", "Typischer Anspruch", "Worauf es ankommt"],
        matrixRows: [
          ["Einheitliche Buchung, 3+ Stunden am Endziel", "250 bis 600 EUR", "entscheidend ist die Gesamtstrecke bis zum Endziel"],
          ["Lange Wartezeit am Transitflughafen", "Betreuungsleistungen", "Verpflegung und Kommunikation je nach Wartezeit"],
          ["Weiterflug erst am nächsten Tag", "Hotel + Transfer", "gilt regelmäßig bei notwendiger Übernachtung"],
          ["Reiseabbruch nach 5+ Stunden", "Erstattung oder alternative Beförderung", "vor allem relevant, wenn die Weiterreise sinnlos wird"],
          ["Getrennte Tickets", "oft kein Anspruch für die Gesamtverbindung", "Planungsrisiko liegt dann häufig beim Reisenden"],
          ["Ersatzflug kommt nur leicht verspätet an", "Entschädigung kann sich reduzieren", "gesetzliche Zeitgrenzen hängen von der Distanz ab"],
        ] as const,
        mctTitle: "Mindestumsteigezeiten (MCT) großer Flughäfen",
        mctLead:
          "Die MCT ist kein starres Anspruchskriterium, aber in der Praxis sehr wichtig. Sie zeigt, wann ein Anschluss typischerweise noch als erreichbar geplant wird. Unterhalb der MCT spricht vieles für den Passagier. Oberhalb der MCT wird die Begründung oft beweisintensiver.",
        mctRows: [
          {
            airport: "Frankfurt (FRA)",
            sameTerminal: "45 Min.",
            terminalChange: "60 Min.",
            note: "Lufthansa/Star-Alliance-Drehkreuz; bei langen Wegen oder Passkontrolle kann es trotzdem eng werden.",
          },
          {
            airport: "London Heathrow (LHR)",
            sameTerminal: "60 Min.",
            terminalChange: "90 Min.",
            note: "Bei Terminalwechsel oft deutlich anfälliger; Bau- und Sicherheitslagen können zusätzlich Zeit kosten.",
          },
          {
            airport: "Paris Charles de Gaulle (CDG)",
            sameTerminal: "60 Min.",
            terminalChange: "75-90 Min.",
            note: "Schengen/Non-Schengen-Wechsel ist oft besonders zeitkritisch.",
          },
          {
            airport: "Amsterdam Schiphol (AMS)",
            sameTerminal: "40 Min.",
            terminalChange: "50 Min.",
            note: "Ein großes Terminal, aber Non-Schengen-Verbindungen brauchen regelmäßig mehr Puffer.",
          },
          {
            airport: "Madrid Barajas (MAD)",
            sameTerminal: "45 Min.",
            terminalChange: "bis 165 Min.",
            note: "Vor allem bei verschiedenen Terminals oder Airlines kann der Umstieg sehr lang werden.",
          },
          {
            airport: "München (MUC)",
            sameTerminal: "30-40 Min.",
            terminalChange: "45 Min.",
            note: "Innerdeutsch/Schengen oft effizient, international braucht meist etwas mehr Reserve.",
          },
          {
            airport: "Wien (VIE)",
            sameTerminal: "25 Min.",
            terminalChange: "40 Min.",
            note: "Schengen-Verbindungen sind oft schnell, Non-Schengen spürbar langsamer.",
          },
          {
            airport: "Zürich (ZRH)",
            sameTerminal: "40 Min.",
            terminalChange: "45-50 Min.",
            note: "Effiziente Wege, aber bei Non-Schengen-Wechseln bleibt die Kontrolle ein Zeitfaktor.",
          },
        ] as const,
        bullets: [
          "Auch bei unterschiedlichen Airlines kann ein Anspruch bestehen, wenn alles unter einer Buchung lief.",
          "Gutscheine für Essen und Trinken nehmen dir den Entschädigungsanspruch nicht weg.",
          "Wichtig sind Buchungsbestätigung, Bordkarten, Ersatzflug-Infos und Belege für eigene Ausgaben.",
        ],
      },
      {
        id: "umbuchung",
        title: "Umbuchung / Flug vorverlegt",
        teaser: "Entscheidend ist vor allem, wann du über die Umbuchung informiert wurdest und wie stark der neue Flug vom ursprünglichen Plan abweicht.",
        note: "Von einer Umbuchung spricht man typischerweise dann, wenn du auf einen anderen Flug gelegt wirst, also sich Flugnummer oder Flugzeit spürbar ändern. Wird nur die Zeit angepasst, kann das je nach Zeitpunkt eher als Flugplanänderung, Vorverlegung oder annullierungsähnliche Änderung behandelt werden. Für die Entschädigung gelten in der Praxis oft die Regeln zur Annullierung.",
        timeline: [
          {
            label: "Mehr als 14 Tage vorher",
            title: "Regelmäßig keine Entschädigung",
            text: "Informiert dich die Airline mehr als 14 Tage vor dem geplanten Abflug über die Umbuchung, besteht in der Regel kein Anspruch auf die EU-Pauschale. Du musst einen Gutschein nicht akzeptieren und kannst meist stattdessen die Erstattung des Ticketpreises verlangen, wenn du die Änderung nicht hinnehmen willst.",
          },
          {
            label: "7 bis 14 Tage vorher",
            title: "Entschädigung nur bei deutlicher Abweichung",
            text: "In diesem Zeitraum bleibt eine Entschädigung aus, wenn der Ersatzflug höchstens 2 Stunden früher startet und dein Endziel höchstens 4 Stunden später erreicht. Weicht der neue Flug stärker ab, kann eine Entschädigung von 250 bis 600 Euro in Betracht kommen.",
          },
          {
            label: "Weniger als 7 Tage vorher",
            title: "Strengere Grenzen zugunsten des Passagiers",
            text: "Wirst du erst 7 Tage oder später informiert, darf der Ersatzflug grundsätzlich höchstens 1 Stunde früher starten und das Endziel höchstens 2 Stunden später erreichen. Werden diese Grenzen überschritten, ist eine Entschädigung häufig möglich.",
          },
          {
            label: "Zusatzkosten",
            title: "Mehrkosten nicht einfach selbst tragen",
            text: "Entstehen durch die Umbuchung zusätzliche Kosten, etwa für Transfer, Hotel oder einen Wechsel zu einem anderen Flughafen, solltest du alle Belege sichern. Wird auf einen anderen Flughafen umgebucht, muss die Airline die zusätzlichen Transportkosten regelmäßig übernehmen.",
          },
        ] as const,
        matrixTitle: "Wichtige Konstellationen bei Umbuchung",
        matrixHeaders: ["Zeitpunkt der Mitteilung", "Abweichung des neuen Fluges", "Typische Folge"],
        matrixRows: [
          ["mehr als 14 Tage vorher", "nicht entscheidend", "regelmäßig keine EU-Entschädigung"],
          ["7 bis 14 Tage vorher", "max. 2 Std. früher / max. 4 Std. später", "regelmäßig keine EU-Entschädigung"],
          ["7 bis 14 Tage vorher", "mehr als 2 Std. früher oder mehr als 4 Std. später", "250 bis 600 EUR möglich"],
          ["weniger als 7 Tage vorher", "max. 1 Std. früher / max. 2 Std. später", "regelmäßig keine EU-Entschädigung"],
          ["weniger als 7 Tage vorher", "mehr als 1 Std. früher oder mehr als 2 Std. später", "250 bis 600 EUR möglich"],
        ] as const,
        bullets: [
          "Die Benachrichtigungsfrist ist oft der wichtigste Prüfpunkt.",
          "Die Entschädigung hängt nicht vom Ticketpreis ab, sondern folgt den üblichen Distanzstufen.",
          "Zusätzliche Kosten und Kommunikationsverläufe solltest du immer dokumentieren.",
        ],
      },
      {
        id: "gepaeck",
        title: "Gepäckprobleme",
        teaser: "Bei verspätetem, beschädigtem oder verlorenem Gepäck gilt nicht die EU-Pauschale, sondern vor allem das Montrealer Übereinkommen.",
        note: "Bei Gepäckproblemen geht es meist um Schadenersatz nach dem Montrealer Übereinkommen. Der Höchstbetrag liegt bei 1.288 Sonderziehungsrechten (SDR) pro Person; der Euro-Wert schwankt je nach Umrechnungskurs. Entscheidend sind schnelle Meldung, saubere Nachweise und die richtige Frist.",
        timeline: [
          {
            label: "Sofort am Flughafen",
            title: "PIR ausfüllen und Gepäckaufkleber sichern",
            text: "Wenn der Koffer nicht ankommt oder beschädigt ist, solltest du noch am Flughafen einen Property Irregularity Report (PIR) aufnehmen lassen. Der Gepäckaufkleber vom Check-in und Fotos vom Zustand des Gepäcks sind hier besonders wichtig.",
          },
          {
            label: "Verspätetes Gepäck",
            title: "Notwendige Ersatzkäufe können erstattungsfähig sein",
            text: "Kommt der Koffer verspätet an, können angemessene Ausgaben für Ersatzkleidung und Hygieneartikel ersatzfähig sein. Maßgeblich ist, was in der konkreten Reisesituation wirklich notwendig war. Am Wohnort besteht dafür regelmäßig kein Anspruch. Belege solltest du vollständig aufheben.",
          },
          {
            label: "Beschädigtes Gepäck",
            title: "Zeitwert statt Neuwert ist oft der Maßstab",
            text: "Wird ein Koffer beschädigt, kann die Airline grundsätzlich haften. Häufig wird nach dem Zeitwert entschädigt; ist eine Reparatur möglich, darf die Airline auch reparieren lassen. Schäden an empfindlichem Inhalt können problematisch sein, wenn sie für Aufgabegepäck ungeeignet oder schlecht verpackt waren.",
          },
          {
            label: "Nach 21 Tagen",
            title: "Verspätet wird rechtlich zu verloren",
            text: "Taucht das Gepäck innerhalb von 21 Tagen nicht wieder auf, wird es rechtlich meist als verloren behandelt. Dann geht es regelmäßig um den Zeitwert von Koffer und Inhalt sowie um nachweisbare weitere Schäden.",
          },
          {
            label: "Fristen",
            title: "7 Tage, 21 Tage, 2 Jahre",
            text: "Beschädigtes Gepäck sollte spätestens innerhalb von 7 Tagen schriftlich gemeldet werden. Ansprüche wegen verspätetem Gepäck sollten spätestens 21 Tage nach Rückerhalt schriftlich angemeldet werden. Schadenersatzansprüche verjähren typischerweise nach 2 Jahren.",
          },
        ] as const,
        matrixTitle: "Wichtige Konstellationen bei Gepäckproblemen",
        matrixHeaders: ["Problem", "Typischer Anspruch", "Worauf es ankommt"],
        matrixRows: [
          ["Gepäck verspätet", "Ersatz angemessener Notkäufe", "PIR, Belege und Reisesituation sind entscheidend"],
          ["Gepäck beschädigt", "Reparatur oder Schadenersatz", "Zeitwert und schnelle Meldung sind wichtig"],
          ["Gepäck nach 21 Tagen nicht da", "Behandlung als Verlust", "Koffer und Inhalt müssen möglichst gut nachgewiesen werden"],
          ["Beschädigung melden", "schriftlich binnen 7 Tagen", "PIR vor Ort ist dringend zu empfehlen"],
          ["Verspätung melden", "schriftlich binnen 21 Tagen nach Rückerhalt", "alle Kaufbelege beifügen"],
          ["Pauschalreise", "zusätzliche Ansprüche gegen Reiseveranstalter möglich", "neben Airline kann auch Reisepreisminderung relevant werden"],
        ] as const,
        bullets: [
          "PIR, Gepäckaufkleber, Fotos und Belege sind hier oft wichtiger als lange rechtliche Diskussionen.",
          "Für neue Gegenstände kann eher der Neupreis, für gebrauchte Dinge eher der Zeitwert relevant werden.",
          "Bei Pauschalreisen können zusätzlich Ansprüche gegen den Reiseveranstalter bestehen.",
        ],
      },
      {
        id: "downgrade",
        title: "Downgrade / niedrigere Reiseklasse",
        teaser: "Wirst du trotz höher gebuchter Klasse niedriger eingestuft, richtet sich dein Anspruch prozentual nach dem Flugpreis des betroffenen Abschnitts.",
        note: "Bei einem Downgrade geht es nicht um die üblichen 250 bis 600 Euro nach Distanz, sondern um eine Rückzahlung nach Art. 10 EU-Fluggastrechte-Verordnung. Maßgeblich ist der Flugpreis des konkret betroffenen Flugabschnitts, regelmäßig ohne Steuern und Gebühren.",
        timeline: [
          {
            label: "Bis 1.500 km",
            title: "30 % Erstattung",
            text: "Bei Strecken bis 1.500 km muss die Airline grundsätzlich 30 % des Preises des betroffenen Flugabschnitts erstatten, wenn du in eine niedrigere Klasse gesetzt wirst.",
          },
          {
            label: "1.500 bis 3.500 km",
            title: "50 % Erstattung",
            text: "Bei mittleren Strecken liegt die gesetzliche Quote regelmäßig bei 50 % des maßgeblichen Abschnittspreises.",
          },
          {
            label: "Über 3.500 km",
            title: "75 % Erstattung",
            text: "Bei langen Strecken kann die Rückzahlung 75 % betragen. Das ist oft wirtschaftlich besonders relevant, wenn ein Business- oder Premium-Ticket betroffen ist.",
          },
          {
            label: "Wichtig",
            title: "Nur der betroffene Flugabschnitt zählt",
            text: "Bei Tickets mit mehreren Segmenten wird die Erstattung regelmäßig nur für den konkret vom Downgrade betroffenen Flugabschnitt berechnet. Die Airline muss die Zahlung grundsätzlich innerhalb von 7 Tagen leisten.",
          },
        ] as const,
        matrixTitle: "Wichtige Konstellationen beim Downgrade",
        matrixHeaders: ["Flugstrecke", "Erstattung", "Worauf es ankommt"],
        matrixRows: [
          ["bis 1.500 km", "30 %", "bezogen auf den Preis des betroffenen Abschnitts"],
          ["1.500 bis 3.500 km", "50 %", "regelmäßig ohne Steuern und Gebühren"],
          ["über 3.500 km", "75 %", "besonders relevant bei Business- oder Premium-Tickets"],
          ["mehrere Flüge auf einem Ticket", "nur anteilig", "entscheidend ist der konkret betroffene Abschnitt"],
          ["zusätzliche klassenspezifische Gebühren", "können zusätzlich relevant sein", "etwa wenn Abgaben an die Reiseklasse anknüpfen"],
        ] as const,
        bullets: [
          "Gutscheine oder Gratisleistungen solltest du nicht vorschnell annehmen, wenn du deinen gesetzlichen Anspruch sichern willst.",
          "Die Airline darf die Erstattung nicht auf den gesamten Ticketpreis beliebig verkürzen, sondern muss den betroffenen Abschnitt sauber betrachten.",
          "Schriftliche Bestätigung des Downgrades und der ursprünglich gebuchten Klasse ist besonders wichtig.",
        ],
      },
    ] as CaseBlock[],
  },
  en: {
    title: "Passenger Rights Overview",
    lead:
      "This page summarizes key EU passenger-rights rules in plain language. It is for orientation and does not replace legal advice.",
    quickTitle: "Jump to section",
    ctaButton: "Start case",
	    quickLinks: [
	      ["scope", "When do EU passenger rights apply?"],
	      ["amounts", "What compensation is possible?"],
	      ["special", "Extraordinary circumstances"],
	      ["cases", "Open use-case blocks"],
	    ] as const,
    scopeTitle: "When do EU passenger rights apply?",
    scopeText:
      "The main factors are departure point, destination, and whether the flight is operated by a European airline. Not every route with an EU connection automatically falls under the EU regulation.",
    scopeVisualTitle: "How to assess applicability in practice",
    scopeVisualLead:
      "The logic below covers the typical constellations. It shows when the EU regulation usually applies and when the Montreal Convention becomes more relevant.",
    scopeScenarios: [
      {
        label: "Departure in EU / EEA / Switzerland",
        carrier: "Any airline",
        result: "EU law applies",
        detail: "If the flight starts in this area, the EU regulation usually applies regardless of whether the operating carrier is European or non-European.",
        tone: "positive",
      },
      {
        label: "Arrival in EU / EEA / Switzerland",
        carrier: "EU carrier",
        result: "EU law applies",
        detail: "For flights into the EU, the operating carrier matters. If it is a European airline, the EU regulation will usually apply as well.",
        tone: "positive",
      },
      {
        label: "Arrival in EU / EEA / Switzerland",
        carrier: "Non-EU carrier",
        result: "Often no EU law",
        detail: "If the flight lands in the EU but is operated by a non-European airline, claims under the EU regulation often do not apply.",
        tone: "negative",
      },
    ] as const,
    scopeNote:
      "Rule of thumb: the safest trigger is a departure from the EU, EEA, or Switzerland. For inbound flights, the operating airline often becomes decisive.",
    montrealTitle: "What applies outside the EU scope?",
    montrealText:
      "If the EU regulation does not apply, the Montreal Convention may still become relevant on international flights. It is not about fixed compensation amounts like 250, 400, or 600 euros, but mainly about provable losses and additional expenses.",
    montrealBullets: [
      "It is especially important in baggage loss, baggage damage, or delayed baggage situations.",
      "In delay scenarios, provable extra costs may also matter, for example hotel costs, necessary replacement purchases, or onward travel expenses.",
      "Unlike the EU regulation, you usually need to prove the actual loss. Receipts, invoices, and structured documentation are therefore critical.",
    ],
    montrealNote:
      "The Montreal Convention does not replace EU rules. It complements them and often becomes important outside the core EU scope or for additional heads of damage.",
    amountsTitle: "How much compensation is possible?",
    amountsLead:
      "For the EU flat-rate compensation, the key question is whether you reached your destination with at least a 3-hour delay. The amount then mainly depends on flight distance.",
    amountsIntro:
      "Flat compensation should be distinguished from assistance obligations and refund rights. These can exist in parallel.",
    amountsHeaders: ["Requirement", "Up to 1,500 km", "1,500 to 3,500 km", "Over 3,500 km"],
    amountsRows: [
      ["Arrival delay of 3+ hours", "250 EUR", "400 EUR", "600 EUR"],
    ] as Array<[string, string, string, string]>,
    amountsCards: [
      {
        title: "Flat compensation",
        text: "From 3 hours delay at destination, compensation of 250, 400, or 600 euros may apply.",
      },
      {
        title: "Assistance duties",
        text: "During the waiting time, meals, drinks, communication options, and if needed hotel accommodation may become relevant.",
      },
      {
        title: "Withdrawal / refund",
        text: "With more than 5 hours delay, withdrawal from travel and ticket reimbursement may come into consideration.",
      },
    ] as const,
    amountsExampleTitle: "Delay example",
    amountsExampleText:
      "A flight from Frankfurt to Athens arrives at 18:00 instead of 14:00. With a 4-hour arrival delay and a distance above 1,500 km, a flat amount of 400 euros may regularly be in scope. In addition, assistance duties during the waiting time may apply.",
    specialTitle: "Extraordinary circumstances",
    specialText:
      "The term is narrower than airlines often suggest. Not every technical problem or operational delay is extraordinary. The key distinction is whether the cause belongs to the airline's own sphere or comes from outside.",
    specialOrdinaryTitle: "Usually not extraordinary",
    specialOrdinaryIntro:
      "In these groups, compensation often remains possible because the cause is usually treated as part of the airline's normal operational risk:",
    specialOrdinaryGroups: [
      {
        title: "Technical and operational issues",
        items: [
          "ordinary technical defects without external impact",
          "wear and tear, maintenance issues, or aircraft allocation problems",
          "flight-plan reorganization or delayed aircraft provision",
        ],
      },
      {
        title: "Staffing and internal operations",
        items: [
          "faulty crew planning or exceeded duty-time limits",
          "internal strikes of the operating airline",
          "check-in or boarding delays caused by airline staff",
        ],
      },
      {
        title: "Events within the airline's control",
        items: [
          "damage during baggage loading, catering, or towing operations",
          "fuel shortages or other avoidable planning failures",
          "lack of de-icing material if based on inadequate preparation",
        ],
      },
    ] as const,
    specialExtraTitle: "Usually extraordinary",
    specialExtraIntro:
      "Here compensation is often excluded because the cause comes from outside and is not part of the airline's normal operating sphere:",
    specialExtraGroups: [
      {
        title: "Weather and natural events",
        items: [
          "serious storms, snowstorms, thunderstorms, hail, strong winds, or dense fog",
          "airspace restrictions or safety limitations caused by weather",
          "lightning strike, bird strike, or other external impacts on the aircraft",
        ],
      },
      {
        title: "Authorities, airport, air traffic control",
        items: [
          "orders by air traffic control or official restrictions",
          "strikes by air traffic controllers or airport staff",
          "closure of an airport, runway, or key airport systems",
        ],
      },
      {
        title: "External disruption and safety events",
        items: [
          "political unrest, entry restrictions, or travel warnings",
          "sabotage, security incidents, or major disruption by passengers",
          "medical emergencies on board or exceptional passenger incidents",
        ],
      },
    ] as const,
    specialWeatherTitle: "Typical weather situations without compensation",
    specialWeatherItems: [
      "volcanic eruption / ash cloud",
      "dense fog",
      "heavy snowfall",
      "thunderstorm front",
      "lightning strike",
      "strong gusts",
      "heavy rain",
      "hail",
    ] as const,
    specialProofTitle: "Important: the airline must prove more than just bad weather",
    specialProofText:
      "Even if an extraordinary circumstance exists, the airline is not automatically discharged. It must also show that it considered all reasonable measures to get you to your destination as early as possible. That can include rebooking onto other airlines or even alternative means of transport.",
    casesTitle: "Use cases (expandable)",
    casesLead:
      "Open the case type that matches your situation and check the points that usually matter most.",
    openLabel: "Expand",
    caseBlocks: [
      {
        id: "delay",
        title: "Flight delay",
        teaser: "The decisive factor is not the departure delay, but the actual delay on arrival at destination.",
        note: "The key reference point is the arrival delay at destination. If your flight leaves 4 hours late but lands with less than 3 hours delay, there is usually no EU flat compensation.",
        timeline: [
          {
            label: "Under 2 hours",
            title: "Usually no claim yet",
            text: "Delays below 2 hours usually have to be accepted. A compensation claim or formal assistance rights normally do not arise yet. After about 1 hour, however, it can still make sense to ask the airline for goodwill support.",
          },
          {
            label: "From 2 hours",
            title: "Assistance duties",
            text: "From 120 minutes, the airline generally has to look after you, for example with snacks, drinks, and communication options. Depending on the situation, this may be provided directly or via vouchers.",
          },
          {
            label: "From 3 hours",
            title: "Flat compensation",
            text: "From 3 hours arrival delay, flat compensation of 250 to 600 euros may apply. You do not need to prove a concrete financial loss. The loss of time itself may already be enough.",
          },
          {
            label: "From 5 hours",
            title: "Refund, rebooking, or alternative transport",
            text: "From more than 5 hours delay, you can usually choose between ticket reimbursement, free rebooking to a later time, or onward travel by the next suitable means of transport such as train, bus, or taxi.",
          },
        ] as const,
        matrixTitle: "What you typically get in delay cases",
        matrixHeaders: ["Arrival delay", "Flight distance", "Typical right"],
        matrixRows: [
          ["Under 2 hours", "any distance", "usually no EU flat amount"],
          ["From 2 hours", "any distance", "assistance duties"],
          ["From 3 hours", "up to 1,500 km", "250 EUR"],
          ["From 3 hours", "1,500 to 3,500 km", "400 EUR"],
          ["From 3 hours", "over 3,500 km", "600 EUR"],
        ] as const,
        bullets: [
          "From 2 hours, assistance duties may apply.",
          "From 3 hours arrival delay, flat compensation may apply.",
          "From 5 hours, refund, rebooking, or alternative transport may become relevant.",
        ],
      },
      {
        id: "cancellation",
        title: "Cancellation",
        teaser: "In cancellation cases, the first question is usually whether you want replacement transport or a refund.",
        note: "EU passenger-rights rules typically apply to flights within the EU, departures from the EU, and arrivals in the EU with an EU carrier. In cancellation cases, the central decision is often whether to continue the trip or withdraw from it.",
        timeline: [
          {
            label: "Step 1",
            title: "Choose replacement transport or refund",
            text: "After a cancellation, you can generally choose between re-routing to your destination or full ticket reimbursement. Which option is better depends on whether you still want to complete the journey.",
          },
          {
            label: "Step 2",
            title: "Replacement flight does not have to be the very next one",
            text: "You can generally also request a later replacement flight at a time that suits you, provided seats are available. The airline should not simply charge extra for that.",
          },
          {
            label: "Step 3",
            title: "Compensation often depends on advance notice",
            text: "If the cancellation was communicated less than 14 days before departure, flat compensation between 250 and 600 euros may also be in scope. Reasonable replacement transport can still affect the result.",
          },
          {
            label: "Step 4",
            title: "If the airline does not act: self-help",
            text: "If the airline does not react in time to a demanded rebooking, you can usually set a reasonable deadline. If it expires, you may often arrange replacement yourself and claim extra cost as self-help expenditure.",
          },
        ] as const,
        matrixTitle: "Key cancellation scenarios",
        matrixHeaders: ["Situation", "What you can demand", "What matters"],
        matrixRows: [
          ["You still want to travel", "replacement transport", "other flights or means of transport may also count"],
          ["You no longer want to travel", "full ticket refund", "typically within 7 days"],
          ["Notice less than 14 days before departure", "250 to 600 EUR", "depends on distance and reasonable replacement transport"],
          ["Outbound and return flight in one booking", "in some cases refund of both flights", "single booking is important"],
          ["Airline does not react in time", "your own replacement booking", "set a deadline first and document everything"],
        ] as const,
        bullets: [
          "You do not automatically have to accept only the first replacement flight offered.",
          "If notice came less than 14 days before departure, EU flat compensation may also arise.",
          "Written confirmation, receipts, and deadline-setting can become very important later.",
        ],
      },
      {
        id: "denied-boarding",
        title: "Denied boarding / overbooking",
        teaser: "If boarding is denied against your will although you did everything correctly, claims are often comparatively clear.",
        note: "Overbooking usually means more tickets were sold than seats are available. Legally, the key issue is involuntary denied boarding. The typical conditions are timely check-in, valid booking documents, and no security or health reason that justified refusal.",
        timeline: [
          {
            label: "Step 1",
            title: "Do not give up your seat voluntarily",
            text: "If you voluntarily surrender your seat in exchange for a voucher, cash, or an upgrade, statutory EU compensation will usually no longer apply. For the full claim, it matters that transport was denied against your will.",
          },
          {
            label: "Step 2",
            title: "Choose replacement transport or refund",
            text: "You can generally either demand prompt replacement transport or withdraw from the flight and request reimbursement of the ticket price. Compensation may still exist in parallel.",
          },
          {
            label: "Step 3",
            title: "250 to 600 EUR may be available",
            text: "Compensation does not depend on the ticket price, but on flight distance. Depending on the route, 250, 400, or 600 euros may be due. If a very prompt and reasonable replacement is offered, the amount may still be reduced.",
          },
          {
            label: "Step 4",
            title: "Secure assistance and evidence",
            text: "During the waiting time, drinks, meals, communication options, and if needed hotel and transfer may become relevant. Ask for written confirmation of the reason and keep records of expenses, vouchers, and communication.",
          },
        ] as const,
        matrixTitle: "Key overbooking scenarios",
        matrixHeaders: ["Situation", "Typical right", "What matters"],
        matrixRows: [
          ["Boarding denied against your will", "250 to 600 EUR", "timely check-in and valid documents"],
          ["You give up your seat voluntarily", "usually no EU flat amount", "voucher or upgrade often replaces the statutory claim"],
          ["You still want to travel", "replacement transport", "other flights or means of transport may also count"],
          ["You no longer want to travel", "ticket refund", "compensation may still exist in parallel"],
          ["Replacement flight arrives only slightly later", "compensation may be reduced by half", "legal delay thresholds depend on distance"],
        ] as const,
        bullets: [
          "Voluntary surrender is legally different from involuntary denied boarding.",
          "Besides flat compensation, assistance duties and the choice between rerouting and refund matter.",
          "Written confirmation and gate documentation are especially important here.",
        ],
      },
      {
        id: "connection",
        title: "Missed connection",
        teaser: "The key issue is usually not the delay of one segment, but whether you reach your final destination 3+ hours late because the connection was missed.",
        note: "A claim usually depends on the feeder flight and the onward flight being part of one single booking. The decisive factor is then the delay at final destination. With separately booked tickets, the legal position is much weaker because connection planning is often your own responsibility.",
        timeline: [
          {
            label: "Step 1",
            title: "One booking is the most important starting point",
            text: "The feeder flight and the onward flight should have been reserved in a single booking flow. In that case, the journey is more likely to be treated as one connected trip. With separate tickets, this link often does not exist.",
          },
          {
            label: "Step 2",
            title: "Final-destination delay usually matters most",
            text: "For multi-segment trips, the key metric is usually the arrival delay at final destination. If you arrive there 3 or more hours late, compensation between 250 and 600 euros may come into scope.",
          },
          {
            label: "Step 3",
            title: "The airline must offer a way to continue",
            text: "If you miss the onward flight because the feeder flight was delayed, the airline usually has to offer replacement transport to your final destination. This can be another flight, but also another suitable onward-transport option.",
          },
          {
            label: "Step 4",
            title: "Waiting time and overnight stay create additional rights",
            text: "After sufficient waiting time, meals and communication options may become due. If the onward flight is moved to the next day, the airline will usually have to provide hotel accommodation and transfer.",
          },
          {
            label: "Step 5",
            title: "Minimum connection time (MCT) often shifts the burden of proof",
            text: "If the official minimum connection time was undercut, that strongly suggests the connection was no longer realistically reachable. In that setting, the case is usually much more favorable for the passenger. If the connection time was formally above MCT, the claim does not automatically disappear. It simply becomes more evidence-heavy: the passenger may need to explain in more detail why the connection was still impossible to catch, for example because of long transfer routes, shuttle buses, passport control, security control, or delayed deboarding. Conversely, where MCT was undercut, it is usually very difficult for the airline to show that missing the connection was still the passenger's fault.",
          },
        ] as const,
        matrixTitle: "Key missed-connection scenarios",
        matrixHeaders: ["Scenario", "Typical right", "What matters"],
        matrixRows: [
          ["Single booking, 3+ hours at final destination", "250 to 600 EUR", "the full route to final destination is decisive"],
          ["Long wait at transit airport", "assistance duties", "meals and communication depend on waiting time"],
          ["Onward flight only next day", "hotel + transfer", "usually relevant if overnight stay becomes necessary"],
          ["Trip abandoned after 5+ hours", "refund or alternative transport", "especially relevant if continuation no longer makes sense"],
          ["Separate tickets", "often no claim for the full connection", "planning risk then usually lies with the traveler"],
          ["Replacement arrives only slightly later", "compensation may be reduced", "legal delay thresholds depend on distance"],
        ] as const,
        mctTitle: "Minimum connection times (MCT) at major airports",
        mctLead:
          "MCT is not a rigid entitlement rule, but highly relevant in practice. It indicates when a connection is usually still planned as reachable. Below MCT, the facts usually favor the passenger. Above MCT, the case often becomes more evidence-heavy.",
        mctRows: [
          {
            airport: "Frankfurt (FRA)",
            sameTerminal: "45 min",
            terminalChange: "60 min",
            note: "Major Lufthansa/Star Alliance hub; long walking routes and passport checks can still matter.",
          },
          {
            airport: "London Heathrow (LHR)",
            sameTerminal: "60 min",
            terminalChange: "90 min",
            note: "Terminal changes are especially sensitive; construction or security pressure can add time.",
          },
          {
            airport: "Paris Charles de Gaulle (CDG)",
            sameTerminal: "60 min",
            terminalChange: "75-90 min",
            note: "Schengen/non-Schengen changes are often particularly time-critical.",
          },
          {
            airport: "Amsterdam Schiphol (AMS)",
            sameTerminal: "40 min",
            terminalChange: "50 min",
            note: "Single-airport layout helps, but non-Schengen links still usually need more buffer.",
          },
          {
            airport: "Madrid Barajas (MAD)",
            sameTerminal: "45 min",
            terminalChange: "up to 165 min",
            note: "Especially with different terminals or carriers, transfers can become very long.",
          },
          {
            airport: "Munich (MUC)",
            sameTerminal: "30-40 min",
            terminalChange: "45 min",
            note: "Domestic/Schengen transfers are often efficient; international ones usually need more margin.",
          },
          {
            airport: "Vienna (VIE)",
            sameTerminal: "25 min",
            terminalChange: "40 min",
            note: "Schengen links are often quick, non-Schengen noticeably slower.",
          },
          {
            airport: "Zurich (ZRH)",
            sameTerminal: "40 min",
            terminalChange: "45-50 min",
            note: "Efficient layout, but controls still remain a timing factor on non-Schengen transfers.",
          },
        ] as const,
        bullets: [
          "A claim can also exist when different airlines operated the flights, as long as it was one booking.",
          "Meal vouchers do not usually eliminate the compensation claim.",
          "Booking confirmation, boarding passes, replacement-flight details, and receipts remain important evidence.",
        ],
      },
      {
        id: "rebooking",
        title: "Rebooking / schedule brought forward",
        teaser: "The key issues are when you were informed about the rebooking and how strongly the new flight deviates from the original plan.",
        note: "A rebooking usually means you were moved onto another flight, so that the flight number or timing changes noticeably. If only the time changes, the case may instead be treated as a schedule change, early rescheduling, or cancellation-like change. In practice, compensation often follows the cancellation rules.",
        timeline: [
          {
            label: "More than 14 days before",
            title: "Usually no compensation",
            text: "If the airline informs you more than 14 days before planned departure, EU flat compensation is usually not available. You do not have to accept a voucher and may often instead demand a refund of the ticket price if you do not want to accept the change.",
          },
          {
            label: "7 to 14 days before",
            title: "Compensation only if the deviation is substantial",
            text: "In this period, compensation usually does not apply if the replacement flight departs no more than 2 hours earlier and reaches the final destination no more than 4 hours later. If the new flight deviates more than that, 250 to 600 euros may come into scope.",
          },
          {
            label: "Less than 7 days before",
            title: "Stricter thresholds in favor of the passenger",
            text: "If you are informed only 7 days or less before departure, the replacement flight should generally leave no more than 1 hour earlier and arrive at final destination no more than 2 hours later. If those thresholds are exceeded, compensation is often possible.",
          },
          {
            label: "Additional costs",
            title: "Do not simply absorb extra costs yourself",
            text: "If the rebooking causes extra costs, for example for transfer, hotel, or a switch to a different airport, keep all receipts. If you are moved to another airport, the airline will usually have to cover the additional transport costs.",
          },
        ] as const,
        matrixTitle: "Key rebooking scenarios",
        matrixHeaders: ["Time of notice", "Deviation of the new flight", "Typical result"],
        matrixRows: [
          ["more than 14 days before", "not decisive", "usually no EU compensation"],
          ["7 to 14 days before", "max. 2 hrs earlier / max. 4 hrs later", "usually no EU compensation"],
          ["7 to 14 days before", "more than 2 hrs earlier or more than 4 hrs later", "250 to 600 EUR may apply"],
          ["less than 7 days before", "max. 1 hr earlier / max. 2 hrs later", "usually no EU compensation"],
          ["less than 7 days before", "more than 1 hr earlier or more than 2 hrs later", "250 to 600 EUR may apply"],
        ] as const,
        bullets: [
          "The notification deadline is often the most important checkpoint.",
          "Compensation does not depend on ticket price, but follows the usual distance bands.",
          "Always document extra costs and communication with the airline.",
        ],
      },
      {
        id: "baggage",
        title: "Baggage issues",
        teaser: "Delayed, damaged, or lost baggage is usually not governed by EU flat compensation rules, but mainly by the Montreal Convention.",
        note: "Baggage cases are usually about damages under the Montreal Convention. The upper limit is 1,288 Special Drawing Rights (SDR) per person; the euro value fluctuates with the exchange rate. Fast reporting, proper evidence, and the correct deadline are crucial.",
        timeline: [
          {
            label: "At the airport",
            title: "File a PIR and keep the baggage tag",
            text: "If the suitcase does not arrive or arrives damaged, you should have a Property Irregularity Report (PIR) created at the airport immediately. The baggage tag from check-in and photos of the condition of the baggage are especially important.",
          },
          {
            label: "Delayed baggage",
            title: "Necessary replacement purchases may be recoverable",
            text: "If baggage arrives late, reasonable expenses for replacement clothing and hygiene items may be recoverable. The key issue is what was truly necessary in the specific travel situation. At your home location, such claims usually do not exist. Keep all receipts.",
          },
          {
            label: "Damaged baggage",
            title: "Current value often matters more than new value",
            text: "If a suitcase is damaged, the airline may generally be liable. Compensation is often based on current value; if repair is possible, the airline may also choose repair. Damage to fragile contents can be problematic if they were unsuitable for checked baggage or poorly packed.",
          },
          {
            label: "After 21 days",
            title: "Delayed becomes legally lost",
            text: "If the baggage does not reappear within 21 days, it is usually treated as lost. The focus then shifts to the current value of the suitcase and contents, plus any further provable loss.",
          },
          {
            label: "Deadlines",
            title: "7 days, 21 days, 2 years",
            text: "Damaged baggage should usually be reported in writing within 7 days. Claims for delayed baggage should usually be submitted in writing within 21 days after the baggage is returned. Damage claims are typically time-barred after 2 years.",
          },
        ] as const,
        matrixTitle: "Key baggage scenarios",
        matrixHeaders: ["Problem", "Typical right", "What matters"],
        matrixRows: [
          ["Baggage delayed", "reimbursement of reasonable emergency purchases", "PIR, receipts, and travel context are decisive"],
          ["Baggage damaged", "repair or damages", "current value and quick notice matter"],
          ["Baggage still missing after 21 days", "treated as loss", "suitcase and contents should be documented as well as possible"],
          ["Damage notice", "written notice within 7 days", "an airport PIR is strongly recommended"],
          ["Delay notice", "written notice within 21 days after return", "attach all purchase receipts"],
          ["Package travel", "additional rights against the tour operator may exist", "price reduction can become relevant in parallel"],
        ] as const,
        bullets: [
          "PIR, baggage tag, photos, and receipts often matter more here than long legal debate.",
          "For new items, replacement value may matter more; for used items, current value is often relevant.",
          "On package holidays, additional claims against the tour operator may exist.",
        ],
      },
      {
        id: "downgrade",
        title: "Downgrade / lower travel class",
        teaser: "If you are seated in a lower class than booked, your claim is usually calculated as a percentage of the fare for the affected segment.",
        note: "A downgrade is not about the usual 250 to 600 euro distance-based compensation. Instead, Article 10 of the EU passenger-rights regulation provides for a fare reimbursement. The key reference point is the price of the specific affected flight segment, usually excluding taxes and charges.",
        timeline: [
          {
            label: "Up to 1,500 km",
            title: "30 % reimbursement",
            text: "For routes up to 1,500 km, the airline generally has to reimburse 30 % of the fare of the affected segment if you are moved to a lower class.",
          },
          {
            label: "1,500 to 3,500 km",
            title: "50 % reimbursement",
            text: "For medium-distance routes, the statutory percentage is usually 50 % of the relevant segment fare.",
          },
          {
            label: "Over 3,500 km",
            title: "75 % reimbursement",
            text: "For long-haul routes, reimbursement can reach 75 %. This is often economically significant where business or premium tickets are affected.",
          },
          {
            label: "Important",
            title: "Only the affected segment counts",
            text: "If a ticket contains multiple segments, reimbursement is usually calculated only for the specific segment affected by the downgrade. The airline should generally pay within 7 days.",
          },
        ] as const,
        matrixTitle: "Key downgrade scenarios",
        matrixHeaders: ["Flight distance", "Reimbursement", "What matters"],
        matrixRows: [
          ["up to 1,500 km", "30 %", "based on the fare of the affected segment"],
          ["1,500 to 3,500 km", "50 %", "usually excluding taxes and charges"],
          ["over 3,500 km", "75 %", "especially relevant for business or premium tickets"],
          ["multiple flights on one ticket", "only proportionate reimbursement", "the affected segment is decisive"],
          ["additional class-related charges", "may matter in addition", "for example where taxes depend on class"],
        ] as const,
        bullets: [
          "Do not rush into accepting vouchers or goodwill perks if you want to preserve your statutory claim.",
          "The airline cannot simply dilute reimbursement across the whole ticket; the affected segment must be assessed properly.",
          "Written proof of the downgrade and the originally booked class is especially important.",
        ],
      },
    ] as CaseBlock[],
  },
} as const;

export default async function PassengerRightsOverviewPage() {
  const cookieStore = await cookies();
  const lang = cookieStore.get("site_lang")?.value === "de" ? "de" : "en";
  const t = copy[lang];
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: lang === "en" ? "When do EU passenger rights apply?" : "Wann gelten EU-Fluggastrechte?",
        acceptedAnswer: {
          "@type": "Answer",
          text: lang === "en"
            ? "They typically apply for departures from the EU, or arrivals in the EU when operated by an EU carrier."
            : "Sie gelten typischerweise bei Abflug in der EU oder bei Landung in der EU mit EU-Airline.",
        },
      },
      {
        "@type": "Question",
        name: lang === "en" ? "What compensation amounts are common?" : "Wie hoch sind typische Entschädigungen?",
        acceptedAnswer: {
          "@type": "Answer",
          text: lang === "en" ? "Typical flat amounts are 250 EUR, 400 EUR, or 600 EUR depending on distance."
            : "Typische Pauschalen sind 250 EUR, 400 EUR oder 600 EUR je nach Flugdistanz.",
        },
      },
    ],
  };

  return (
    <main className="px-4 pb-12 pt-7 sm:px-6 sm:pb-14 sm:pt-9 lg:pb-16 lg:pt-10">
      <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div className="app-wrap">
        <section className="surface-card relative overflow-hidden p-6 sm:p-10 lg:p-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-20 h-64 w-64 rounded-full"
            style={{ background: "radial-gradient(circle, rgba(41,66,89,0.14) 0%, transparent 72%)" }}
          />
          <h1 className="text-3xl font-semibold tracking-tight sm:text-5xl">{t.title}</h1>
          <p className="mt-4 max-w-4xl text-sm sm:text-base" style={{ color: "var(--muted)" }}>
            {t.lead}
          </p>
          <Link
            href="/cases/new?relation=B2C&sub=flight_rights"
            className="mt-5 inline-flex rounded-full px-5 py-2.5 text-sm font-semibold text-white"
            style={{ background: "var(--brand-strong)" }}
          >
            {t.ctaButton}
          </Link>

          <div className="mt-6 rounded-2xl border p-4" style={{ borderColor: "var(--border)" }}>
            <h2 className="text-sm font-semibold">{t.quickTitle}</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {t.quickLinks.map(([id, label]) => (
                <a key={id} href={`#${id}`} className="pill transition-opacity hover:opacity-90">
                  {label}
                </a>
              ))}
            </div>
          </div>
        </section>

                <section id="scope" className="surface-card mt-8 p-6 sm:p-10">
          <h2 className="text-2xl font-semibold tracking-tight">{t.scopeTitle}</h2>
          <p className="mt-3 max-w-4xl text-sm sm:text-base" style={{ color: "var(--muted)" }}>
            {t.scopeText}
          </p>

          <div
            className="mt-6 rounded-[28px] border p-5 sm:p-6"
            style={{
              borderColor: "var(--border)",
              background:
                "linear-gradient(180deg, color-mix(in oklab, var(--surface-strong) 92%, #eef4fa) 0%, color-mix(in oklab, var(--surface) 96%, #f6f8fb) 100%)",
            }}
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold tracking-tight">{t.scopeVisualTitle}</h3>
                <p className="mt-2 max-w-3xl text-sm sm:text-base" style={{ color: "var(--muted)" }}>
                  {t.scopeVisualLead}
                </p>
              </div>
              <div
                className="rounded-2xl border px-4 py-3 text-sm"
                style={{ borderColor: "var(--border)", background: "rgba(255,255,255,0.55)" }}
              >
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em]" style={{ color: "var(--muted)" }}>
                  EU / EWR / Schweiz
                </div>
	                <div className="mt-1 font-semibold">
	                  {lang === "de" ? "Startort ist der stärkste Anknüpfungspunkt" : "Departure point is the strongest trigger"}
	                </div>
              </div>
            </div>

            <div className="mt-6 grid gap-5 lg:grid-cols-[260px_1fr] lg:items-start">
              <div
                className="rounded-[24px] border p-5"
                style={{
                  borderColor: "var(--border)",
                  background: "linear-gradient(180deg, color-mix(in oklab, #dce9f4 76%, white) 0%, color-mix(in oklab, #eef4f9 88%, white) 100%)",
                }}
              >
	                <div className="text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: "#4d647c" }}>
	                  {lang === "de" ? "Prüfpunkt" : "Key question"}
	                </div>
	                <div className="mt-3 text-2xl font-semibold tracking-tight">
	                  {lang === "de" ? "Start oder Landung mit EU-Bezug?" : "Departure or arrival with an EU connection?"}
	                </div>
	                <p className="mt-3 text-sm sm:text-base" style={{ color: "#4c6074" }}>
	                  {lang === "de"
	                    ? "Entscheidend ist zuerst, ob der Flug im Raum EU / EWR / Schweiz startet oder dort nur landet. Bei reinen Ankünften wird die Airline zum zweiten Filter."
	                    : "The first question is whether the flight starts in the EU / EEA / Switzerland or only arrives there. For inbound flights, the airline becomes the second filter."}
	                </p>
              </div>

              <div className="space-y-3">
                {t.scopeScenarios.map((item) => {
                  const positive = item.tone === "positive";
                  return (
	                    <article
	                      key={`${item.label}-${item.carrier}`}
                      className="rounded-[24px] border p-4 sm:p-5"
                      style={{
                        borderColor: "var(--border)",
                        background: positive
                          ? "linear-gradient(180deg, color-mix(in oklab, #edf7ef 72%, white) 0%, color-mix(in oklab, var(--surface) 97%, white) 100%)"
                          : "linear-gradient(180deg, color-mix(in oklab, #f8ece8 76%, white) 0%, color-mix(in oklab, var(--surface) 97%, white) 100%)",
                      }}
                    >
                      <div className="grid gap-4 lg:grid-cols-[1.1fr_180px_190px] lg:items-center">
                        <div>
	                          <div className="text-xs font-semibold uppercase tracking-[0.16em]" style={{ color: "var(--muted)" }}>
	                            {lang === "de" ? "Flugkonstellation" : "Flight constellation"}
	                          </div>
                          <div className="mt-2 text-xl font-semibold tracking-tight">{item.label}</div>
                          <p className="mt-2 text-sm sm:text-base" style={{ color: "var(--muted)" }}>
                            {item.detail}
                          </p>
                        </div>

                        <div
                          className="rounded-2xl border px-4 py-3"
                          style={{ borderColor: "var(--border)", background: "rgba(255,255,255,0.7)" }}
                        >
	                          <div className="text-xs font-semibold uppercase tracking-[0.16em]" style={{ color: "var(--muted)" }}>
	                            {lang === "de" ? "Operierende Airline" : "Operating carrier"}
	                          </div>
                          <div className="mt-2 text-base font-semibold">{item.carrier}</div>
                        </div>

                        <div className="flex lg:justify-end">
                          <span
                            className="inline-flex rounded-full px-4 py-2 text-sm font-semibold"
                            style={{
                              background: positive ? "#dff1df" : "#f6e1dc",
                              color: positive ? "#256344" : "#9a452f",
                            }}
                          >
                            {item.result}
                          </span>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>

            <div
              className="mt-5 rounded-2xl border px-4 py-3 text-sm sm:text-base"
              style={{ borderColor: "var(--border)", background: "rgba(255,255,255,0.52)", color: "var(--muted)" }}
            >
              {t.scopeNote}
            </div>
          </div>

          <div
            className="mt-6 rounded-[28px] border p-5 sm:p-6"
            style={{
              borderColor: "var(--border)",
              background:
                "linear-gradient(180deg, color-mix(in oklab, #ecf1f6 72%, white) 0%, color-mix(in oklab, var(--surface) 97%, white) 100%)",
            }}
          >
            <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
              <div>
                <h3 className="text-lg font-semibold tracking-tight">{t.montrealTitle}</h3>
                <p className="mt-3 text-sm sm:text-base" style={{ color: "var(--muted)" }}>
                  {t.montrealText}
                </p>
                <div
                  className="mt-4 rounded-2xl border p-4"
                  style={{ borderColor: "var(--border)", background: "rgba(255,255,255,0.62)" }}
                >
	                  <div className="text-xs font-semibold uppercase tracking-[0.16em]" style={{ color: "var(--muted)" }}>
	                    {lang === "de" ? "Merksatz" : "Key takeaway"}
	                  </div>
                  <p className="mt-2 text-sm sm:text-base" style={{ color: "var(--muted)" }}>
                    {t.montrealNote}
                  </p>
                </div>
              </div>

              <div className="grid gap-3">
                {t.montrealBullets.map((item, index) => (
	                  <article
	                    key={`${index}-${item}`}
                    className="rounded-2xl border p-4"
                    style={{ borderColor: "var(--border)", background: "rgba(255,255,255,0.68)" }}
                  >
	                    <div className="text-xs font-semibold uppercase tracking-[0.16em]" style={{ color: "var(--muted)" }}>
	                      {lang === "de" ? `Fall ${index + 1}` : `Case ${index + 1}`}
	                    </div>
                    <p className="mt-2 text-sm sm:text-base" style={{ color: "var(--muted)" }}>
                      {item}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="amounts" className="surface-card mt-8 p-6 sm:p-10">
          <h2 className="text-2xl font-semibold tracking-tight">{t.amountsTitle}</h2>
          <p className="mt-3 text-sm sm:text-base" style={{ color: "var(--muted)" }}>
            {t.amountsLead}
          </p>
          <p className="mt-3 max-w-4xl text-sm sm:text-base" style={{ color: "var(--muted)" }}>
            {t.amountsIntro}
          </p>

          <div className="mt-5 grid gap-3 md:grid-cols-3">
            {t.amountsCards.map((card, index) => {
              const accents = [
                { badge: lang === "de" ? "Pauschale" : "Flat amount", icon: "€" },
                { badge: lang === "de" ? "Wartezeit" : "Waiting time", icon: "+" },
                { badge: lang === "de" ? "Ab 5 Stunden" : "From 5 hours", icon: "→" },
              ][index];
              return (
              <article
                key={card.title}
                className="rounded-[24px] border p-4 sm:p-5"
                style={{
                  borderColor: "var(--border)",
                  background:
                    "linear-gradient(180deg, color-mix(in oklab, var(--surface-strong) 94%, #edf3f8) 0%, color-mix(in oklab, var(--surface) 97%, white) 100%)",
                }}
              >
                <div className="flex items-start justify-between gap-3">
                  <div
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-semibold"
                    style={{ background: "#e6edf5", color: "#314e69" }}
                  >
                    {index === 0 ? "€" : index === 1 ? "+" : "→"}
                  </div>
                  <span
                    className="inline-flex rounded-full px-3 py-1 text-xs font-semibold"
                    style={{ background: "#e6edf5", color: "#314e69" }}
                  >
                    {accents.badge}
                  </span>
                </div>
                <div className="mt-4 text-base font-semibold tracking-tight">{card.title}</div>
                <p className="mt-2 text-sm sm:text-base" style={{ color: "var(--muted)" }}>
                  {card.text}
                </p>
              </article>
            )})}
          </div>

          <div
            className="mt-5 overflow-x-auto rounded-[28px] border"
            style={{
              borderColor: "var(--border)",
              background: "linear-gradient(180deg, color-mix(in oklab, #edf2f7 76%, white) 0%, color-mix(in oklab, var(--surface) 98%, white) 100%)",
            }}
          >
            <div className="flex items-center justify-between gap-3 border-b px-4 py-3 sm:px-5" style={{ borderColor: "var(--border)" }}>
              <div className="text-sm font-semibold tracking-tight">
                {lang === "de" ? "Pauschale nach Flugdistanz" : "Flat amount by distance"}
              </div>
              <span
                className="inline-flex rounded-full px-3 py-1 text-xs font-semibold"
                style={{ background: "#dbe6f1", color: "#314e69" }}
              >
                {lang === "de" ? "ab 3 Stunden Ankunftsverspätung" : "from 3 hours arrival delay"}
              </span>
            </div>
            <table className="min-w-full text-sm">
              <thead style={{ background: "rgba(255,255,255,0.46)" }}>
                <tr>
                  {t.amountsHeaders.map((header) => (
                    <th key={header} className="px-3 py-3 text-left font-semibold sm:px-5">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {t.amountsRows.map((row) => (
                  <tr key={row[0]} style={{ borderTop: "1px solid var(--border)" }}>
                    {row.map((cell, index) => (
                      <td key={`${row[0]}-${index}`} className={`px-3 py-3 sm:px-5 ${index > 0 ? "font-semibold" : ""}`}>
                        {index === 0 ? (
                          <span style={{ color: "var(--muted)" }}>{cell}</span>
                        ) : (
                          <span
                            className="inline-flex rounded-full px-3 py-1 text-sm font-semibold"
                            style={{ background: "#e6edf5", color: "#314e69" }}
                          >
                            {cell}
                          </span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div
            className="mt-5 rounded-[28px] border p-4 sm:p-5"
            style={{
              borderColor: "var(--border)",
              background: "linear-gradient(180deg, color-mix(in oklab, #e7eef5 72%, white) 0%, color-mix(in oklab, var(--surface) 97%, white) 100%)",
            }}
          >
            <div className="flex items-center justify-between gap-3">
              <div className="text-sm font-semibold tracking-tight">{t.amountsExampleTitle}</div>
              <span
                className="inline-flex rounded-full px-3 py-1 text-xs font-semibold"
                style={{ background: "#dbe6f1", color: "#314e69" }}
              >
                {lang === "de" ? "Praxisbeispiel" : "Worked example"}
              </span>
            </div>
            <p className="mt-2 text-sm sm:text-base" style={{ color: "var(--muted)" }}>
              {t.amountsExampleText}
            </p>
          </div>
        </section>


                <section id="special" className="surface-card mt-8 p-6 sm:p-10">
          <h2 className="text-2xl font-semibold tracking-tight">{t.specialTitle}</h2>
          <p className="mt-3 max-w-4xl text-sm sm:text-base" style={{ color: "var(--muted)" }}>
            {t.specialText}
          </p>

          <div className="mt-6 grid gap-4 xl:grid-cols-2">
            <div
              className="rounded-[30px] border p-5 sm:p-6"
              style={{
                borderColor: "var(--border)",
                background: "linear-gradient(180deg, color-mix(in oklab, #edf7ef 74%, white) 0%, color-mix(in oklab, var(--surface) 97%, white) 100%)",
              }}
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-lg font-semibold tracking-tight">{t.specialOrdinaryTitle}</h3>
                <span
                  className="inline-flex rounded-full px-3 py-1 text-xs font-semibold"
                  style={{ background: "#dff1df", color: "#256344" }}
                >
                  {lang === "de" ? "Anspruch oft möglich" : "Claim often possible"}
                </span>
              </div>
              <p className="mt-2 text-sm sm:text-base" style={{ color: "var(--muted)" }}>
                {t.specialOrdinaryIntro}
              </p>
              <div className="mt-4 space-y-3">
                {t.specialOrdinaryGroups.map((group) => (
                  <article
                    key={group.title}
                    className="rounded-[24px] border p-4"
                    style={{ borderColor: "var(--border)", background: "rgba(255,255,255,0.72)" }}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-semibold"
                        style={{ background: "#dff1df", color: "#256344" }}
                      >
                        +
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm font-semibold tracking-tight">{group.title}</div>
                        <ul className="mt-3 space-y-2 text-sm sm:text-base" style={{ color: "var(--muted)" }}>
                          {group.items.map((item) => (
                            <li key={item} className="flex items-start gap-2">
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: "#256344" }} />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div
              className="rounded-[30px] border p-5 sm:p-6"
              style={{
                borderColor: "var(--border)",
                background: "linear-gradient(180deg, color-mix(in oklab, #f7ece8 78%, white) 0%, color-mix(in oklab, var(--surface) 97%, white) 100%)",
              }}
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-lg font-semibold tracking-tight">{t.specialExtraTitle}</h3>
                <span
                  className="inline-flex rounded-full px-3 py-1 text-xs font-semibold"
                  style={{ background: "#f6e1dc", color: "#9a452f" }}
                >
                  {lang === "de" ? "Anspruch oft ausgeschlossen" : "Claim often excluded"}
                </span>
              </div>
              <p className="mt-2 text-sm sm:text-base" style={{ color: "var(--muted)" }}>
                {t.specialExtraIntro}
              </p>
              <div className="mt-4 space-y-3">
                {t.specialExtraGroups.map((group) => (
                  <article
                    key={group.title}
                    className="rounded-[24px] border p-4"
                    style={{ borderColor: "var(--border)", background: "rgba(255,255,255,0.74)" }}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-semibold"
                        style={{ background: "#f6e1dc", color: "#9a452f" }}
                      >
                        !
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm font-semibold tracking-tight">{group.title}</div>
                        <ul className="mt-3 space-y-2 text-sm sm:text-base" style={{ color: "var(--muted)" }}>
                          {group.items.map((item) => (
                            <li key={item} className="flex items-start gap-2">
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: "#9a452f" }} />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-5 rounded-[30px] border p-5 sm:p-6" style={{ borderColor: "var(--border)", background: "linear-gradient(180deg, color-mix(in oklab, #edf2f7 76%, white) 0%, color-mix(in oklab, var(--surface) 97%, white) 100%)" }}>
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-lg font-semibold tracking-tight">{t.specialWeatherTitle}</h3>
              <span
                className="inline-flex rounded-full px-3 py-1 text-xs font-semibold"
                style={{ background: "#e5ebf2", color: "#45596d" }}
              >
                {lang === "de" ? "Wetterfälle" : "Weather cases"}
              </span>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {t.specialWeatherItems.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm"
                  style={{ borderColor: "var(--border)", background: "rgba(255,255,255,0.72)", color: "var(--muted)" }}
                >
                  <span className="h-2 w-2 rounded-full" style={{ background: "#6d7f90" }} />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-5 rounded-[30px] border p-5 sm:p-6" style={{ borderColor: "var(--border)", background: "linear-gradient(180deg, color-mix(in oklab, #e4ebf3 76%, white) 0%, color-mix(in oklab, var(--surface) 97%, white) 100%)" }}>
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-lg font-semibold tracking-tight">{t.specialProofTitle}</h3>
              <span
                className="inline-flex rounded-full px-3 py-1 text-xs font-semibold"
                style={{ background: "#dbe5ef", color: "#35506a" }}
              >
                {lang === "de" ? "Wichtiger Prüfpunkt" : "Important check"}
              </span>
            </div>
            <p className="mt-3 max-w-4xl text-sm sm:text-base" style={{ color: "var(--muted)" }}>
              {t.specialProofText}
            </p>
          </div>
        </section>

        <section id="cases" className="surface-card mt-8 p-6 sm:p-10">
          <h2 className="text-2xl font-semibold tracking-tight">{t.casesTitle}</h2>
          <p className="mt-3 text-sm sm:text-base" style={{ color: "var(--muted)" }}>
            {t.casesLead}
          </p>
          <div className="mt-5 space-y-3">
            {t.caseBlocks.map((block) => (
              <details
                key={block.id}
                id={block.id}
                className="group rounded-xl border px-4 py-3"
                style={{ borderColor: "var(--border)", background: "var(--surface-strong)" }}
              >
                <summary className="cursor-pointer list-none">
                  <div className="flex items-center justify-between gap-3">
                    <div className="font-semibold">{block.title}</div>
                    <span className="text-xs" style={{ color: "var(--muted)" }}>
                      {t.openLabel}
                    </span>
                  </div>
                  <div className="mt-1 text-sm" style={{ color: "var(--muted)" }}>
                    {block.teaser}
                  </div>
                </summary>
                <div className="mt-3 border-t pt-4" style={{ borderColor: "var(--border)" }}>
                  {block.note ? (
                    <div
                      className="rounded-2xl border px-4 py-3 text-sm sm:text-base"
                      style={{
                        borderColor: "var(--border)",
                        background: "linear-gradient(180deg, color-mix(in oklab, #e7eef5 74%, white) 0%, color-mix(in oklab, var(--surface) 97%, white) 100%)",
                        color: "var(--muted)",
                      }}
                    >
                      {block.note}
                    </div>
                  ) : null}

                  {block.timeline ? (
                    <div className="mt-4 grid gap-3 lg:grid-cols-2">
                      {block.timeline.map((step, index) => (
                        <article
                          key={`${block.id}-${step.label}`}
                          className={`rounded-[22px] border p-4 ${block.timeline && block.timeline.length % 2 === 1 && index === block.timeline.length - 1 ? "lg:col-span-2" : ""}`}
                          style={{
                            borderColor: "var(--border)",
                            background:
                              index === 2
                                ? "linear-gradient(180deg, color-mix(in oklab, #e6edf5 76%, white) 0%, color-mix(in oklab, var(--surface) 97%, white) 100%)"
                                : "linear-gradient(180deg, color-mix(in oklab, var(--surface-strong) 94%, #eef3f8) 0%, color-mix(in oklab, var(--surface) 97%, white) 100%)",
                          }}
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div
                              className="inline-flex rounded-full px-3 py-1 text-xs font-semibold"
                              style={{ background: "#e6edf5", color: "#314e69" }}
                            >
                              {step.label}
                            </div>
                            <div
                              className="flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold"
                              style={{ background: "#dbe6f1", color: "#314e69" }}
                            >
                              {index + 1}
                            </div>
                          </div>
                          <div className="mt-3 text-sm font-semibold tracking-tight sm:text-base">{step.title}</div>
                          <p className="mt-2 text-sm sm:text-base" style={{ color: "var(--muted)" }}>
                            {step.text}
                          </p>
                        </article>
                      ))}
                    </div>
                  ) : (
                    <ul className="space-y-2 text-sm" style={{ color: "var(--muted)" }}>
                      {block.bullets.map((line) => (
                        <li key={line}>- {line}</li>
                      ))}
                    </ul>
                  )}

                  {block.matrixRows && block.matrixHeaders ? (
                    <div
                      className="mt-4 rounded-[24px] border"
                      style={{
                        borderColor: "var(--border)",
                        background: "linear-gradient(180deg, color-mix(in oklab, #edf2f7 76%, white) 0%, color-mix(in oklab, var(--surface) 98%, white) 100%)",
                      }}
                    >
                      <div className="border-b px-4 py-3 text-sm font-semibold tracking-tight sm:px-5" style={{ borderColor: "var(--border)" }}>
                        {block.matrixTitle}
                      </div>
                      <div className="hidden grid-cols-3 gap-0 border-b text-sm font-semibold md:grid" style={{ borderColor: "var(--border)", background: "rgba(255,255,255,0.46)" }}>
                        {block.matrixHeaders.map((header) => (
                          <div key={header} className="px-4 py-3 sm:px-5">
                            {header}
                          </div>
                        ))}
                      </div>
                      <div>
                        {block.matrixRows.map((row) => (
                          <div
                            key={`${block.id}-${row[0]}-${row[1]}`}
                            className="grid gap-3 border-t px-4 py-4 md:grid-cols-3 md:items-center sm:px-5"
                            style={{ borderColor: "var(--border)" }}
                          >
                            {row.map((cell, index) => (
                              <div key={`${block.id}-${row[0]}-${index}`}>
                                <div className="mb-1 text-[11px] font-semibold uppercase tracking-[0.16em] md:hidden" style={{ color: "var(--muted)" }}>
                                  {block.matrixHeaders?.[index]}
                                </div>
                                {index === row.length - 1 ? (
                                  <span
                                    className="inline-flex rounded-full px-3 py-1 text-sm font-semibold"
                                    style={{ background: "#e6edf5", color: "#314e69" }}
                                  >
                                    {cell}
                                  </span>
                                ) : (
                                  <span style={{ color: "var(--muted)" }}>{cell}</span>
                                )}
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : null}

                  {block.mctRows ? (
                    <div
                      className="mt-4 rounded-[24px] border p-4 sm:p-5"
                      style={{
                        borderColor: "var(--border)",
                        background: "linear-gradient(180deg, color-mix(in oklab, #e8eef5 76%, white) 0%, color-mix(in oklab, var(--surface) 97%, white) 100%)",
                      }}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div className="text-sm font-semibold tracking-tight sm:text-base">{block.mctTitle}</div>
                        <span
                          className="inline-flex rounded-full px-3 py-1 text-xs font-semibold"
                          style={{ background: "#dbe6f1", color: "#314e69" }}
                        >
                          MCT
                        </span>
                      </div>
                      {block.mctLead ? (
                        <p className="mt-2 max-w-4xl text-sm sm:text-base" style={{ color: "var(--muted)" }}>
                          {block.mctLead}
                        </p>
                      ) : null}

                      <div className="mt-4 grid gap-3 md:grid-cols-2">
                        {block.mctRows.map((row) => (
                          <details
                            key={`${block.id}-${row.airport}`}
                            className="group rounded-[22px] border p-4"
                            style={{ borderColor: "var(--border)", background: "rgba(255,255,255,0.72)" }}
                          >
                            <summary className="cursor-pointer list-none">
                              <div className="flex items-center justify-between gap-3">
                                <div className="min-w-0">
                                  <div className="text-sm font-semibold tracking-tight sm:text-base">{row.airport}</div>
                                  <div className="mt-1 text-sm" style={{ color: "var(--muted)" }}>
                                    {lang === "de"
                                      ? `gleiches Terminal: ${row.sameTerminal} · Wechsel: ${row.terminalChange}`
                                      : `same terminal: ${row.sameTerminal} · change: ${row.terminalChange}`}
                                  </div>
                                </div>
                                <span
                                  className="inline-flex rounded-full px-3 py-1 text-xs font-semibold transition-transform group-open:rotate-180"
                                  style={{ background: "#e6edf5", color: "#314e69" }}
                                >
                                  v
                                </span>
                              </div>
                            </summary>

                            <div className="mt-4 grid gap-3 sm:grid-cols-2">
                              <div className="rounded-2xl border px-4 py-3" style={{ borderColor: "var(--border)", background: "rgba(255,255,255,0.7)" }}>
                                <div className="text-xs font-semibold uppercase tracking-[0.16em]" style={{ color: "var(--muted)" }}>
                                  {lang === "de" ? "Gleiches Terminal" : "Same terminal"}
                                </div>
                                <div className="mt-2 text-lg font-semibold tracking-tight">{row.sameTerminal}</div>
                              </div>
                              <div className="rounded-2xl border px-4 py-3" style={{ borderColor: "var(--border)", background: "rgba(255,255,255,0.7)" }}>
                                <div className="text-xs font-semibold uppercase tracking-[0.16em]" style={{ color: "var(--muted)" }}>
                                  {lang === "de" ? "Terminalwechsel" : "Terminal change"}
                                </div>
                                <div className="mt-2 text-lg font-semibold tracking-tight">{row.terminalChange}</div>
                              </div>
                            </div>

                            <p className="mt-3 text-sm sm:text-base" style={{ color: "var(--muted)" }}>
                              {row.note}
                            </p>
                          </details>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
              </details>
            ))}
          </div>
          <Link
            href="/cases/new?relation=B2C&sub=flight_rights"
            className="mt-8 inline-flex rounded-full px-5 py-2.5 text-sm font-semibold text-white"
            style={{ background: "var(--brand-strong)" }}
          >
            {t.ctaButton}
          </Link>
        </section>
      </div>
    </main>
  );
}



