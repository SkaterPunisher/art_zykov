export const defineLevel = (score: number): string => {
  if (score >= 81) {
    return 'Expert';
  } else if (score >= 61) {
    return 'Advanced';
  } else if (score >= 41) {
    return 'Intermediate';
  } else if (score >= 21) {
    return 'Elementary';
  } else {
    return 'Beginner';
  }
};
