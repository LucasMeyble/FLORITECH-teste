export function getColorByValue(value: number, min: number, max: number): string {
  if (min === max) return "rgb(59, 130, 246)";

  const percent = (value - min) / (max - min);

  const r = Math.round(59 + percent * (239 - 59));
  const g = Math.round(130 - percent * (130 - 68));
  const b = Math.round(246 - percent * (246 - 68));

  return `rgb(${r}, ${g}, ${b})`;
}
