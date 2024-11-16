export function getInitials(name: string): string {
  const [firstName, lastName] = name.split(" ");
  if (!lastName) {
    return `${firstName[0]}`;
  }
  return `${firstName[0]}${lastName[0]}`;
}

export function transformMinutesToHours(mins?: number): string {
  if (!mins) return "0h 0m";
  const hours = Math.floor(mins / 60);
  const minutes = mins % 60;
  return `${hours}h ${minutes}m`;
}

/**
 * Transforms a date string from "YYYY-MM-DD" to "DD-MM-YYYY" format as it's the superior date format
 * @param date
 * @returns date in "DD-MM-YYYY" format
 */
export function transformDateFormat(date?: string): string | undefined {
  if (!date) return undefined;
  return date.split("-").reverse().join("-");
}
