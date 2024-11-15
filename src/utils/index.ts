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
