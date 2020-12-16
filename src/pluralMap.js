const CHINESE = "chinese";
const GERMAN = "german";
const FRENCH = "french";
const RUSSIAN = "russian";
const CZECH = "czech";
const POLISH = "polish";
const ICELANDIC = "icelandic";
const ESTONIAN = "estonian";

const pluralMap = {
  id: CHINESE,
  ja: CHINESE,
  ko: CHINESE,
  ms: CHINESE,
  th: CHINESE,
  tr: CHINESE,
  zh: CHINESE,

  da: GERMAN,
  de: GERMAN,
  en: GERMAN,
  es: GERMAN,
  fi: GERMAN,
  el: GERMAN,
  he: GERMAN,
  hu: GERMAN,
  it: GERMAN,
  nl: GERMAN,
  no: GERMAN,
  pt: GERMAN,
  sv: GERMAN,

  fr: FRENCH,
  tl: FRENCH,

  hr: RUSSIAN,
  ru: RUSSIAN,

  cs: CZECH,
  sk: CZECH,

  pl: POLISH,

  is: ICELANDIC,

  et: GERMAN,

  /**
   * This is the urgent fix to prevent errors.
   * TODO: figure out exact plural rules for the added locales below
   */
  lt: GERMAN,
  ro: GERMAN,
  sl: GERMAN
};

export default pluralMap;
