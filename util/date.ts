export function formatDate(date: Date) {
  const d = new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "short",
    day: "numeric",
    weekday: 'short'
  }).format(date);
  return d;
}
