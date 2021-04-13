export const getTier = (percentage) => {
  let tier =
    percentage <= 0.05
      ? "radiant"
      : percentage <= 0.1
      ? "immortal3"
      : percentage <= 0.2
      ? "immortal2"
      : percentage <= 0.5
      ? "immortal1"
      : percentage <= 1
      ? "diamond3"
      : percentage <= 2
      ? "diamond2"
      : percentage <= 4
      ? "diamond1"
      : percentage <= 7
      ? "platinum3"
      : percentage <= 12
      ? "platinum2"
      : percentage <= 20
      ? "platinum1"
      : percentage <= 29
      ? "gold3"
      : percentage <= 40
      ? "gold2"
      : percentage <= 50
      ? "gold1"
      : percentage <= 62
      ? "silver3"
      : percentage <= 71
      ? "silver2"
      : percentage <= 80
      ? "silver1"
      : percentage <= 86
      ? "bronze3"
      : percentage <= 91
      ? "bronze2"
      : percentage <= 95
      ? "bronze1"
      : percentage <= 97
      ? "iron3"
      : percentage <= 99
      ? "iron2"
      : "iron1"

  return tier
}