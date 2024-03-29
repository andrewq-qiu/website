/**
 * Convert a time period in ms to years.
 */
function msToYear(ms: number) {
  return ms / (365 * 24 * 60 * 60 * 1000)
}

/**
 * Return the difference of x and y in years
 */
export function diffInYr(x: Date, y: Date) {
  return msToYear(x.getTime() - y.getTime());
}

/**
 * Return the minimum of an array of strings
 */
export function minStr(arr: string[]) {
  let minSoFar = '';

  for (let i = 0; i < arr.length; i++){
    if (i === 0 || arr[i] < minSoFar) {
      minSoFar = arr[i];
    }
  }

  return minSoFar;
}

/**
 * Return the maximum of an array of strings
 */
export function maxStr(arr: string[]) {
  let maxSoFar = '';

  for (let i = 0; i < arr.length; i++){
    if (i === 0 || arr[i] > maxSoFar) {
      maxSoFar = arr[i];
    }
  }

  return maxSoFar;
}

/**
 * Return a date corresponding to a string in format yyyy-mm-dd
 */
export function parseDateString(dateStr: String) {
  const [year, month_, day] = dateStr.split('-').map(x => parseInt(x));

  return new Date(year, month_ - 1, day);
}

/**
 * Convert a date in the format yyyy-mm-dd to "{month text} {year}"
 */
export function toMthYrString(dateStr: String) {
  const [year, month_] = dateStr.split('-').map(x => parseInt(x));

  return months[month_ - 1] + " " + year;
}

/**
 * A list of the 3-letter abbreviations of months with indices
 * that match with the JS Date month indices.
 */
export const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
]