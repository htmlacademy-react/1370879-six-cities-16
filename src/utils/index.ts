export const getMarkUpRanking = (ranking: number) => {
  const rankingInPercent = `${(Math.floor(ranking) / 5) * 100}%`;
  return {width: rankingInPercent};
};

export const upFirstLetter = (string: string) => `${string[0].toUpperCase()}${string.slice(1)}`;
