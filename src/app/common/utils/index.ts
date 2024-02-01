/**
 * A function that formats a date in format 'Today' | 'Tomorrow' | 'Day, Month DD' to YYYYMMDD
 * @param date  - date in format 'Today' | 'Tomorrow' | 'Day, Month DD'
 * @returns   - date in format YYYYMMDD
 */
export const formatDateToApi = (date: string): string => {
  if (date === 'Today') {
    return formatDateToApi(new Date().toDateString());
  } else if (date === 'Tomorrow') {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return formatDateToApi(tomorrow.toDateString());
  }
  const dateObj = new Date(date);
  const year = dateObj.getFullYear();
  const month = dateObj.getMonth() + 1;
  const day = dateObj.getDate();
  return `${year}${month < 10 ? '0' + month : month}${
    day < 10 ? '0' + day : day
  }`;
};

export const getDateFromApiFormat = (date: string): Date => {
  const year = date.slice(0, 4);
  const month = date.slice(4, 6);
  const day = date.slice(6, 8);
  return new Date(`${year}-${month}-${day}`);
};

/**
 * A function that formats a date in format YYYYMMDD to 'Today' | 'Tomorrow' | 'Day, Month DD'
 * @param date - date in format YYYYMMDD
 * @returns - date in format 'Today' | 'Tomorrow' | 'Day, Month DD'
 */
export const formatDateFromApi = (date: string): string => {
  const year = date.slice(0, 4);
  const month = date.slice(4, 6);
  const day = date.slice(6, 8);
  const dateObj = new Date(`${year}-${month}-${day}`);
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  if (dateObj.toDateString() === today.toDateString()) {
    return 'Today';
  } else if (dateObj.toDateString() === tomorrow.toDateString()) {
    return 'Tomorrow';
  } else if (dateObj.toDateString() === yesterday.toDateString()) {
    return 'Yesterday';
  } else {
    //format selected date to Day, Month DD
    return dateObj.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
    });
  }
};

export const decrementApiDate = (date: string): string => {
  const dateObj = getDateFromApiFormat(date);
  dateObj.setDate(dateObj.getDate() - 1);
  return formatDateToApi(dateObj.toDateString());
};

export const incrementApiDate = (date: string): string => {
  const dateObj = getDateFromApiFormat(date);
  dateObj.setDate(dateObj.getDate() + 1);
  return formatDateToApi(dateObj.toDateString());
};

export const getCountryName = (code?: string): string => {
  switch (code) {
    case 'ENG':
      return 'England';
    case 'ESP':
      return 'Spain';
    case 'GER':
      return 'Germany';
    case 'ALG':
      return 'Algeria';
    case 'ARG':
      return 'Argentina';
    case 'BEL':
      return 'Belgium';
    case 'BRA':
      return 'Brazil';
    case 'COL':
      return 'Colombia';
    case 'CYP':
      return 'Cyprus';
    case 'EGY':
      return 'Egypt';
    case 'ENG':
      return 'England';
    case 'GER':
      return 'Germany';
    case 'GRE':
      return 'Greece';
    case 'GUA':
      return 'Guatemala';
    case 'HON':
      return 'Honduras';
    case 'IND':
      return 'India';
    case 'ISR':
      return 'IsNotReal';
    case 'MEX':
      return 'Mexico';
    case 'NED':
      return 'Netherlands';
    case 'POR':
      return 'Portugal';
    case 'SUI':
      return 'Switzerland';
    case 'URU':
      return 'Uruguay';
    default:
      return '';
  }
};
