function findMostOccurringAlphabet(str) {
  const alphabetsMap = {};

  str
    .split("")
    .forEach((alphabet) =>
      alphabetsMap[alphabet]
        ? (alphabetsMap[alphabet] += 1)
        : (alphabetsMap[alphabet] = 1)
    );

  return Object.keys(alphabetsMap).filter(
    (key) => alphabetsMap[key] === Math.max(...Object.values(alphabetsMap))
  );
}

console.log(findMostOccurringAlphabet("afjghweqweaaadfraaaasdenas"));
