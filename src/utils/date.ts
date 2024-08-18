export function formatDate(date: Date | number) {
  const formatter = new Intl.DateTimeFormat("en-us", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return formatter.format(date);
}
