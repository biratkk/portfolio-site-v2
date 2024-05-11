export function formatDate(date: Date) {
  const d = new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "short",
    day: "numeric",
    weekday: 'short'
  }).format(date);
  return d;
}

export function formatDateMonthYear(date:Date){
  const d = new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(date);
  return d;
}

export function formatMonthYear(date:Date){
  const d = new Intl.DateTimeFormat("en-GB", {
    year: "numeric",
    month: "long",
  }).format(date);
  return d;
}
