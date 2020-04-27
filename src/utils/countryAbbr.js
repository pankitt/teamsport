export const countryAbbr = (abbr) => {
  switch (abbr) {
    case 'TUR':
      return 'Turkey';
    case 'ESP':
      return 'Spain';
    case 'RUS':
      return 'Russia';
    case 'ISR':
      return 'Israel';
    case 'GRC':
      return 'Greece';
    case 'LTU':
      return 'Lithuania';
    case 'ITA':
      return 'Italy';
    case 'FRA':
      return 'France';
    case 'DEU':
      return 'Germany';
    case 'SRB':
      return 'Serbia';
    default:
      return abbr;
  }
};
