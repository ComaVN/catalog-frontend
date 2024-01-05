/**
 * The array/tuple notation is used to specify a second value which is the aria-label for form control elements.
 */

export const nb = {
  yes: 'Ja',
  no: 'Nei',
  loading: 'Laster',
  general: 'Generelt',
  noAccess: 'Ingen tilgang',
  youHaveNoAccess: 'Det ser ikke ut til at du har tilgang til denne siden.',
  notFound: 'Ikke funnet',
  notFoundPage: 'Fant ikke siden du lette etter.',
  error: 'Feil',
  somethingWentWrong: 'Beklager, noe gikk galt. Prøv på nytt litt senere.',
  allCatalogs: 'Alle kataloger',
  chooseOrganizaiton: 'Velg virksomhet',
  id: 'ID',
  services: 'Tjenester',
  publicServices: 'Offentlige tjenester',
  catalogType: {
    concept: 'Begrepskatalog',
    dataset: 'Datasettkatalogen',
    admin: 'Administrasjonsgrensesnitt',
    service: 'Tjenestekatalog',
    publicService: 'Offentlig tjenestekatalog',
  },
  dataVillage: ['Datalandsbyen', 'Lenke til Datalandsbyen'],
  harvestData: ['Høste data', 'Lenke til å høste data'],
  registerData: ['Registrere data', 'Lenke til å registrere data'],
  linkToDataset: 'Lenke til datasett',
  linkToDatasets: 'Lenke til datasett',
  chooseLanguage: 'Velg språk',
  subjectArea: 'Fagområde',
  conceptStatus: 'Begrepsstatus',
  assigned: 'Tildelt',
  ok: 'Ok',
  description: 'Beskrivelse',
  name: 'Navn',
  manageCatalog: 'Administrere katalog',
  manageCatalogs: 'Administrere kataloger',
  fromAndIncluding: 'Fra og med',
  toAndIncluding: 'Til og med',
  unknown: 'Ukjent',
  showMore: 'Vis flere',
  showLess: 'Vis færre',
  title: 'Tittel',
  changeHistory: 'Endringshistorikk',
  email: 'E-post',
  telephone: 'Telefon',
  homepage: 'Hjemmeside',
  contactPage: 'Kontaktside',
  category: 'Kategori',

  language: {
    nb: 'Bokmål',
    nn: 'Nynorsk',
    en: 'Engelsk',
    no: 'Norsk',
  },

  nameAndConcept: 'Navn og begrep',
  save: 'Lagre',
  saveEdits: 'Lagre endringer',
  suggestionForNewConcept: 'Forslag til nytt begrep',

  auth: {
    login: 'Logg inn',
    logout: 'Logg ut',
    loggingIn: 'Logger inn...',
    loggingOut: 'Logger ut...',
  },

  search: {
    search: 'Søk',
    searchForDataset: 'Søk etter datasettbeskrivelse',
    searchForUsername: 'Søk etter brukernavn...',
    searchForService: 'Søk etter tjeneste...',
    searchForPublicService: 'Søk etter offentlig tjeneste...',
    sort: 'Sortering',
    searchField: 'Søk i felt',
    searchInCatalogs: ['Søk i Felles datakatalog', 'Lenke til søk i felles datakatalog'],
    noHits: 'Ditt søk ga ingen treff',

    fields: {
      alleFelter: 'Alle felter',
      alleTermer: 'Alle termer',
      anbefaltTerm: 'Anbefalt term',
      frarådetTerm: 'Frarådet term',
      tillattTerm: 'Tillatt term',
      definisjon: 'Definisjon',
      merknad: 'Merknad',
    },

    sortOptions: {
      RELEVANCE: 'Relevans',
      LAST_UPDATED_FIRST: 'Sist endret først',
      LAST_UPDATED_LAST: 'Eldst først',
      RECOMMENDED_TERM_AÅ: 'Anbefalt term A-Å',
      RECOMMENDED_TERM_ÅA: 'Anbefalt term Å-A',
    },
  },

  button: {
    addDataset: 'Legg til ny datasettbeskrivelse',
    createConcept: 'Nytt begrep',
    importConcept: 'Importer',
    delete: 'Slett',
    expandAll: 'Vis alle felter',
    harvestDataset: 'Høst spesifikasjon fra katalog',
    importLogo: 'Importer logo',
    bin: 'Søppelkasse',
    removeFilter: 'Fjern filter',
    save: 'Lagre',
    cancel: 'Avbryt',
    removeFromCodeList: 'Fjern fra kodeliste',
    send: 'Send inn',
    deleteWithFormat: 'Slett {text}',
    addWithFormat: 'Legg til ny {text}',
    close: 'Lukk',
    addRelation: 'Legg til relasjon',
  },

  dropdown: {
    lastModified: 'Sist endret',
    statusSearch: 'Filtrer på status',
    addNew: 'Legg til ny',
    descriptionDataset: 'Beskrivelse av datasett',
    descriptionDatasetSerie: 'Beskrivelse av datasettserie',
  },

  footer: {
    digdirManagesNationalDataCatalog: 'Digitaliseringsdirektoratet forvalter Felles datakatalog.',
    termsOfUse: 'Bruksvilkår',
    privacyStatement: 'Personvernerklæring',
    cookies: 'Informasjonskapsler',
    accessibility: 'Tilgjengelighetserklæring',
    twitter: 'Twitter',
  },

  header: {
    registerData: 'Registrere data',
    harvestData: 'Høste data',
    dataCommunity: 'Gå til Datalandsbyen',
    nationalDataCatalog: 'Gå til Felles datakatalog',
  },

  tag: {
    all: 'Alle',
    approve: 'Godkjent',
    draft: 'Utkast',
    publish: 'Publisert',
  },

  searchHit: {
    lastEdited: 'Sist endret',
    underRevision: 'Under revidering',
  },

  alert: {
    success: 'Oppdatering vellykket!',
    fail: 'Oppdatering feilet.',
    notValidFile: 'Innholdet i filen er ikke gyldig.',
    deleteUser: 'Er du sikker på at du vil slette brukernavnet?',
    noChanges: 'Ingen endringer funnet.',
    deleteInternalField: 'Er du sikker på at du ønsker å slette feltet?',
    codeListInUse: 'Kan ikke slette en kodeliste som er i bruk.',
    codeMustHaveName: 'En kode må ha et navn på bokmål.',
    deleteFail: 'Sletting mislyktes.',
    publishFail: 'Publisering mislyktes.',
    unpublishFail: 'Avpublisering mislyktes.',
  },

  catalogAdmin: {
    catalogAdmin: 'Administrasjonsgrensesnitt',
    internalFields: 'Interne felt',
    editableFields: 'Editerbare felt',
    codeList: 'Kodeliste',
    codeLists: 'Kodelister',
    fontColor: 'Skriftfarge',
    backgroundColor: 'Bakgrunnsfarge',
    descriptionLogo: 'Beskrivelse av logo',
    colors: 'Farger',
    logo: 'Logo',
    preview: 'Forhåndsvisning',
    general: 'Generelt',
    customizeDesign: 'Tilpass design',
    username: 'Brukernavn',
    design: 'Design',
    addUser: 'Legg til nytt brukernavn',
    parentCode: 'Overordnet kode',
    noParentCode: 'Ingen overordnet kode',
    editCode: 'Rediger kode',
    createCode: 'Opprett kode',
    deleteCodeList: 'Slett kodeliste',
    importCodeList: 'Importer kodeliste',
    createCodeList: 'Opprett kodeliste',
    searchForCodeList: 'Søk etter kodeliste...',
    searchFieldCodeList: 'Søkefelt kodeliste',
    enableFilter: 'Aktiver filter',
    description: {
      general: 'Her kan du administrere innstillinger og innhold på tvers av katalogene.',
      conceptCatalog: 'Her kan du administrere innstillinger og innhold for begrepskatalogen.',
    },
    manage: {
      internalFields: 'Her kan du legge til, endre og fjerne interne felt som er spesifikke for din virksomhet.',
      editableFields: 'Her kan du velge kodelister for felt som publiseres eksternt, som fagområde.',
      codeList: 'Her kan du administrere kodelistene som brukes av interne og editerbare felt.',
      design: 'Administrer organisasjonsspesifikt design',
      username: 'Administrer brukernavn, som brukes i felt som Tildelt',
      conceptCatalog: 'Administrere begrepskatalog',
      enableFilter: 'Gjør det mulig å filtrere på feltet i søk i intern begrepskatalog.',
    },
    designHelpText: {
      logo: 'Her laster du opp virksomhetens logo. Tillatte filtyper er SVG og PNG.',
      logoDescription: 'Beskrivelse av virksomhetens logo. Eksempel: "Logo digdir"',
      colors:
        'Her legger du inn virksomhetens bakgrunnsfarge og skriftfarge. Fargen må være oppgitt som HEX-kode på formen #FFF eller #FFFFFF. Husk at kontrasten til bakgrunnen må være 3:1 for å oppfylle WCAG-kravet.',
    },
    codeName: {
      en: 'Navn (engelsk)',
      nn: 'Navn (nynorsk)',
      nb: 'Navn (bokmål)',
      confirmDelete: 'Er du sikker på at du vil slette dette feltet?',
    },
    create: {
      newInternalField: 'Opprett nytt internt felt',
    },
    fieldNameDescription: 'Navn på felt',
    fieldTypeDescription: 'Type felt',
    chooseCodeList: 'Velg kodeliste',
  },

  concept: {
    concept: 'Begrep',
    replacedBy: 'Erstattet av',
    createdBy: 'Opprettet av',
    created: 'Opprettet',
    lastUpdated: 'Sist oppdatert',
    note: 'Merknad',
    definition: 'Definisjon',
    source: 'Kilde',
    selfDefined: 'Egendefinert',
    example: 'Eksempel',
    publicDefinition: 'Definisjon for allmennheten',
    specialistDefinition: 'Definisjon for spesialister',
    preferredTerm: 'Anbefalt term',
    allowedTerm: 'Tillatt term',
    notRecommendedTerm: 'Frarådet term',
    abbreviation: 'Forkortelse',
    valueDomain: 'Verdiområde',
    internalField: 'Interne felt',
    confirmDelete: 'Er du sikker du ønsker å slette begrepet?',
    noName: 'Uten navn',
    version: 'Versjon',
    versions: 'Versjoner',
    validPeriod: 'Gyldighetsperiode',
    label: 'Merkelapp',
    relatedConcepts: 'Relaterte begreper ({conceptCount})',
    associativeRelation: 'Assosiativ relasjon',
    partitiveRelation: 'Partitiv relasjon',
    isPartOf: 'Er del av',
    hasPart: 'Inngår i',
    genericRelation: 'Generisk relasjon',
    generalizes: 'Underordnet',
    specializes: 'Overordnet',
    seeAlso: 'Se også',
    isReplacedBy: 'Erstattes av',
    divisionCriterion: 'Inndelingskriterium',
    contactInformation: 'Kontaktinformasjon for eksterne',
    relationToSource: 'Forhold til kilde',
    formFieldLabel: '{fieldType} på {lang}',
    suggestChanges: 'Foreslå endring',
  },

  validity: {
    expired: 'Utgått',
    willBeValid: 'blir gyldig',
  },

  changeRequest: {
    newChangeRequest: 'Nytt endringsforslag',
    changeRequest: 'Endringsforslag',
    accept: 'Godta',
    reject: 'Avslå',
    seeChangeRequests: 'Se alle endringsforslag',
    existingValue: 'Eksisterende {fieldType} på {lang}',
    existingContent: 'Eksisterende innhold',
    proposedChange: 'Forslag til ny {fieldType} på {lang}',
    noValue: 'Ingen verdi',
    noChangeRequestsFound: 'Her var det ingen endringsforslag',
    edit: 'Rediger',
    editTitle: 'Rediger tittel',
    editSources: 'Rediger kilder',
    sourceTitle: 'Tittel på kilde',
    sourceLink: 'Lenke til kilde',
    noName: 'Uten navn',
    alertInformation:
      'Bare et utvalg av feltene til et begrep støttes av dette skjemaet. Det er bare feltene du redigerer som til slutt gjør endringer på begrepet, resten av begrepet forblir uendret.',
  },

  comment: {
    comments: 'Kommentarer',
    confirmDelete: 'Er du sikker du ønsker å slette kommentaren?',
    editComment: 'Rediger kommentar',
    deleteComment: 'Slett kommentar',
    saveComment: 'Lagre kommentar',
  },

  codeList: {
    confirmDelete: 'Er du sikker på at du ønsker å slette kodelisten?',
  },

  history: {
    noChanges: 'Ingen endringer er gjort',
  },

  status: {
    draft: 'Utkast',
    approved: 'Godkjent',
    hearing: 'Høring',
  },

  publicationState: {
    state: 'Publiseringstilstand',
    description: 'Publiseringstilstand forteller om et begrep er publisert i Felles Datakatalog eller ikke.',
    published: 'Publisert',
    publishedInFDK: 'Publisert i Felles Datakatalog',
    unpublishedInFDK: 'Ikke publisert i Felles Datakatalog',
    unpublished: 'Ikke publisert',
    confirmPublish: 'Er du sikker på at du vil publisere begrepet?',
  },

  validation: {
    invalidValue: 'Ugyldig verdi',
    invalidEmail: 'Ugyldig epostadresse',
    invalidUrl: 'Ugyldig nettaddresse',
    invalidTlf: 'Ugyldig telefonnummer',
  },

  serviceCatalog: {
    confirmPublish: 'Er du sikker på at du vil publisere tjenesten?',
    confirmUnpublish: 'Er du sikker på at du vil avpublisere tjenesten?',
    searchHitsTitle: 'Listevisning',
    infoAboutService: 'Informasjon om tjenesten',
    contactPoint: 'Kontaktpunkt',
    produces: 'Produserer',
    serviceStatus: 'Tjenestestatus',
    editService: 'Rediger tjeneste',
    editPublicService: 'Rediger offentlig tjeneste',
    validation: {
      title: 'Tjenesten må ha et navn',
      titleProduce: 'Navn er påkrev for hver produserer',
    },
    form: {
      titleLabel: 'Tekst på bokmål',
      titleSubtitle: 'Navnet skal være kortfattet, kunne stå alene og gi mening.',
      descriptionSubtitle: 'Beskrivelsen skal være kortfattet og formålet med tjenesten bør fremgå.',
      save: 'Lagre tjeneste',
      delete: 'Slett tjeneste',
      confirmDelete: 'Er du sikker på at du vil slette tjenesten?',
      new: 'Opprett ny tjeneste',
      newPublic: 'Opprett ny offentlig tjeneste',
      descriptionProduces:
        'Egenskapen brukes til å referere til en eller flere instanser av tjenesteresultat som beskriver resultat av tjenesten.',
      homepageLabel: 'Lenke til hjemmeside',
      homepageDescription: 'Egenskapen brukes til å referere til hjemmesiden til tjenesten.',
    },
  },
};
