// =========================================================
// Dossier 2030 — All case data from the fictitious dossier
// =========================================================

export const dossier = {
  nr: 'HC-2030-004781',
  displayNr: '2030-0417',
  status: 'In behandeling — gedeeltelijke menselijke beoordeling vereist',
  classificatie: 'Vertrouwelijk — teruggestuurd uit 2030',
  ontvangstDatum: '17 april 2030',
  laatsteUpdate: '22 april 2030, 14:42',

  // Verzekerde
  verzekerde: {
    naam: 'Sophie Elise De Winter',
    roepnaam: 'Sophie',
    geboortedatum: '12 september 1988',
    leeftijd: 41,
    woonplaats: 'Brasschaat',
    adres: 'Bredabaan 247, bus 3',
    postcode: '2930',
    provincie: 'Antwerpen',
    land: 'België',
    mobiel: '+32 470 84 21 63',
    emailPrive: 'sophie.dewinter@example.be',
    emailWerk: 'sophie.dewinter@northstar-example.be',
    klantnummer: 'VB-HC-93847125',
    verzekerdennummer: 'INS-44021875',
    polisnummer: 'HOSP-NSB-028417',
    identiteitsverificatie: 'itsme',
    identiteitsconfidence: '99,8%',
    partner: 'Thomas Vermeulen',
    kinderen: ['Louise Vermeulen (8 juni 2018)', 'Arthur Vermeulen (21 november 2021)'],
    beroep: 'Senior Procurement Manager',
  },

  // Werkgever
  werkgever: {
    naam: 'Northstar Engineering Belgium NV',
    vorigeNaam: 'Northstar Industrial Solutions Belgium NV',
    ondernemingsnummer: 'BE 0748.391.625',
    adres: 'Noorderlaan 88, 2030 Antwerpen',
    aantalMedewerkers: 1840,
    aansluitingsnummer: 'AFF-77234091',
    hrContact: 'Elise Van Damme',
    hrFunctie: 'Compensation & Benefits Manager',
  },

  // TPA
  tpa: {
    naam: 'Vanbreda Risk & Benefits',
  },

  // Verzekeraar
  verzekeraar: {
    naam: 'BelCare Insurance NV',
    product: 'Premium Corporate Hospitalisation Plus',
    dekkingsgebied: 'Europese Economische Ruimte',
    eigenRisico: '€150 per verzekeringsjaar',
    groepspolis: 'NSB-HOSP-2027-04',
  },

  // Medisch
  medisch: {
    hoofdreden: 'Acute cholecystitis',
    datumEersteKlachten: '9 april 2030',
    datumOpname: '10 april 2030',
    datumOperatie: '11 april 2030',
    datumOntslag: '14 april 2030',
    behandeling: 'Laparoscopische cholecystectomie',
    ziekenhuis: 'Hôpital Saint-Claire Lyon',
    ziekenhuisAdres: '18 Rue des Tilleuls, 69003 Lyon, Frankrijk',
    nazorgArts: 'Dr. Nora Peeters',
    nazorgLocatie: 'Medisch Centrum Brasschaat',
  },

  // Documenten
  documenten: [
    { nr: 1, naam: 'Hospitalisatieaangifte', kanaal: 'Mobiele app', datum: '15 april 2030', taal: 'Nederlands', status: 'Volledig' },
    { nr: 2, naam: 'Ontslagverslag', bestandsnaam: 'sortie_dewinter_14042030.pdf', taal: 'Frans', confidence: '98,4%', status: 'Geëxtraheerd' },
    { nr: 3, naam: 'Operatieverslag', bestandsnaam: 'rapport_operatoire_11042030.pdf', taal: 'Frans', confidence: '91,2%', status: 'Codeprobleem' },
    { nr: 4, naam: 'Ziekenhuisfactuur', factuurnummer: 'HSC-2030-884191', bedrag: '€8.740,60', status: 'Gedeeltelijk gedekt' },
    { nr: 5, naam: 'Radiologiefactuur', factuurnummer: 'RDL-772190', bedrag: '€486,00', confidence: '87,6%', status: 'Menselijke validatie vereist' },
    { nr: 6, naam: 'Apotheekbewijs', bedrag: '€74,35', confidence: '82,1%', status: 'Gekoppeld' },
    { nr: 7, naam: 'Belgisch nazorgconsult', bedrag: '€94,00', arts: 'Dr. Nora Peeters', status: 'Automatisch gekoppeld' },
    { nr: 8, naam: 'Rechtstreekse ziekenhuisfactuur', bedrag: '€8.740,60', overeenkomst: '99,3%', status: 'Geblokkeerd als duplicaat' },
  ],

  // Financieel
  financieel: {
    totaalKosten: '€9.394,95',
    ziekenhuisfactuur: '€8.740,60',
    radiologie: '€486,00',
    apotheek: '€74,35',
    nazorgconsult: '€94,00',
    premiumMaaltijd: '€120,00',
    eigenRisico: '€150,00',
    voorlopigVergoedbaar: '€9.124,95',
    gereserveerd: '€486,00',
    voorkomDubbel: '€8.740,60',
  },

  // AI Decision Record
  aiDecision: {
    id: 'ADR-HC-2030-004781-06',
    datum: '21 april 2030',
    type: 'Voorstel gedeeltelijke goedkeuring',
    confidence: {
      identiteit: { label: 'Identiteit', waarde: 99.8, niveau: 'Hoog' },
      polisdekking: { label: 'Polisdekking', waarde: 96.7, niveau: 'Hoog' },
      medischeNoodzaak: { label: 'Medische noodzaak', waarde: 92.4, niveau: 'Hoog' },
      documentextractie: { label: 'Documentextractie', waarde: 94.1, niveau: 'Hoog' },
      duplicaatdetectie: { label: 'Duplicaatdetectie', waarde: 99.3, niveau: 'Hoog' },
      radiologieMatch: { label: 'Radiologie-patiëntmatch', waarde: 87.6, niveau: 'Middelmatig' },
      comfortUitsluiting: { label: 'Comfortkostuitsluiting', waarde: 98.9, niveau: 'Hoog' },
    },
    escalatieRedenen: [
      'Buitenlandse medische code niet volledig gemapt',
      'Patiëntidentificatie op radiologiefactuur onvoldoende',
      'Klant vraagt expliciete financiële zekerheid',
      'Gedeeltelijke afwijzing vereist begrijpelijke menselijke uitleg',
    ],
    bronnen: [
      'Groepspolis NSB-HOSP-2027-04',
      'Verzekerdenrecord',
      'Ziekenhuisfactuur',
      'Operatieverslag',
      'Ontslagverslag',
      'Werkgeversaansluiting',
      'Elektronische partnerfactuur',
      'Historische claims',
      'Polisvoorwaarden 8.2, 8.6, 11.4, 13.1 en 15.3',
    ],
  },

  // Medewerker notitie
  notitie: {
    auteur: 'Pieter Van Acker',
    functie: 'Senior Health Care Claims Specialist',
    datum: '21 april 2030',
    tekst: 'Het systeem had de uitzondering correct geïdentificeerd en alle relevante context al bijgevoegd. Ik hoefde het volledige dossier niet opnieuw te reconstrueren — en kon me richten op de interpretatie en de uitleg aan de verzekerde.',
  },

  // Keten stappen
  keten: [
    { nr: '01', naam: 'Document-intake', pilaar: 'claims', ai: 'classificeert en ordent de geüploade documenten', mens: '—', bron: 'klantupload', autonomie: 'auto' },
    { nr: '02', naam: 'Herkenning', pilaar: 'claims', ai: 'extraheert bedragen, codes en data', mens: 'steekproefcontrole', bron: 'claimdocument', autonomie: 'control' },
    { nr: '03', naam: 'Context', pilaar: 'b2b', ai: 'koppelt polis, werkgever en eerdere dossiers', mens: '—', bron: 'polisadmin · CRM', autonomie: 'auto' },
    { nr: '04', naam: 'Dekking', pilaar: 'b2b', ai: 'bepaalt de toepasselijke waarborgen', mens: 'valideert grensgeval', bron: 'polisversie · regels', autonomie: 'deels' },
    { nr: '05', naam: 'Beslissing', pilaar: 'claims', ai: 'stelt beslissing voor, mét motivering', mens: 'keurt goed of corrigeert', bron: 'beslisregels', autonomie: 'voorstel' },
    { nr: '06', naam: 'Uitzondering', pilaar: 'claims', ai: 'detecteert afwijkende combinatie, escaleert', mens: 'beoordeelt en beslist', bron: 'historiek · regels', autonomie: 'human' },
    { nr: '07', naam: 'Communicatie', pilaar: 'comm', ai: 'stelt begrijpelijke uitleg op', mens: 'bekrachtigt de toon', bron: 'beslisrecord', autonomie: 'control' },
    { nr: '08', naam: 'Betaling', pilaar: 'claims', ai: 'initieert de terugbetaling', mens: '—', bron: 'betaalsysteem', autonomie: 'auto' },
    { nr: '09', naam: 'Feedback', pilaar: 'comm', ai: 'registreert de uitkomst voor modelverbetering', mens: 'kwaliteitsreview', bron: 'audit trail', autonomie: 'auto' },
  ],

  // Proces metrics
  metrics: {
    doorlooptijd: '5 kalenderdagen na compleet dossier',
    aantalDocumenten: 8,
    aantalKanalen: 6,
    autoStappen: 18,
    menselijkeInterventies: 4,
    afdelingenBetrokken: 7,
    externePartijen: 5,
    klantHerhaalvragen: 0,
    handmatigeOverdrachten: 0,
    menselijkeOverrides: '1 gedeeltelijke aanvulling',
    auditTrail: 'Volledig',
  },

  // Fundamenten
  fundamenten: [
    { titel: 'Betrouwbare identiteit', beschrijving: 'Wie is wie — over kanalen en partners heen.' },
    { titel: 'Gedeelde context', beschrijving: 'Eén dossierbeeld voor mens én model.' },
    { titel: 'Expliciete beslisregels', beschrijving: 'Wat mag autonoom, wat niet — vastgelegd.' },
    { titel: 'Toegankelijke data', beschrijving: 'Bronnen ontsloten, niet opgesloten.' },
    { titel: 'Orkestratie', beschrijving: 'Stappen die naadloos in elkaar grijpen.' },
    { titel: 'Menselijk eigenaarschap', beschrijving: 'Elke beslissing houdt een eigenaar.' },
    { titel: 'Modelmonitoring', beschrijving: 'Weten wanneer een model afdrijft.' },
    { titel: 'Feedbackloops', beschrijving: 'Elke uitkomst maakt het systeem beter.' },
    { titel: 'Partnerintegraties', beschrijving: 'Werkgevers, zorgverleners en providers in dezelfde keten.' },
  ],

  // Open vragen
  openVragen: [
    'Waar breekt de keten vandaag?',
    'Welke data en capabilities bestaan al?',
    'Welke besluiten mogen autonoom?',
    'Hoe worden uitzonderingen bestuurd?',
    'Welke rollen en verantwoordelijkheden veranderen?',
    'Wat is nodig om veilig op te schalen?',
  ],

  // Betrokken medewerkers
  medewerkers: {
    communicatie: { naam: 'Lotte Jacobs', functie: 'Health Care Customer Advisor' },
    claims: { naam: 'Pieter Van Acker', functie: 'Senior Health Care Claims Specialist' },
    medisch: { naam: 'Dr. Sarah Claes', functie: 'Medical Advisor Health Care' },
    fraude: { naam: 'Yassin El Amrani', functie: 'Fraud & Integrity Analyst' },
    masterdata: { naam: 'Anneleen Goossens', functie: 'Master Data Steward Health Care' },
    integratie: { naam: 'Matthias De Smet', functie: 'B2I Integration Coordinator' },
    procesOwner: { naam: 'Katrien Verhaegen', functie: 'Product Owner Autonomous Claims' },
    aiSteward: { naam: 'Jonas Verbruggen', functie: 'AI Model Steward' },
    caseCoord: { naam: 'Eva Hermans', functie: 'Health Care Case Coordinator' },
  },

  // Communicatie aan verzekerde
  communicatie: {
    pushmelding: 'Uw hospitalisatiedossier is grotendeels beoordeeld. Het grootste deel van de medische kosten wordt vergoed. Voor één aanvullende factuur voeren we nog een identificatiecontrole uit. U hoeft hiervoor voorlopig niets te doen.',
    emailOnderwerp: 'Update over uw hospitalisatiedossier HC-2030-004781',
    afzender: { naam: 'Lotte Jacobs', functie: 'Health Care Customer Advisor', organisatie: 'Vanbreda Risk & Benefits' },
  },
} as const
