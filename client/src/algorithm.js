export const utilFunctions = {
  getCurrentDate() {
    const today = new Date();

    const year = today.getFullYear();
    const month = (today.getMonth() + 1);
    const day = today.getDate();

    return `${year}-${month}-${day}`;
  },

  getTotalDay(date) {
    const [year, month, day] = date.split('-').map((v) => Number(v));

    return (year * 12 * 30) + (month * 30) + day;
  },
};

const layerLimitMap = {
  1: 1,
  2: 3,
  3: 7,
  4: 15,
  5: 30,
  6: 60,
  7: 120,
};

export const filterTodaysQuiz = (quizzes) => {
  const currentDate = utilFunctions.getCurrentDate();
  const currentTotalDay = utilFunctions.getTotalDay(currentDate);

  return quizzes.filter((quiz) => {
    const { layer: quizLayer, lastSolved } = quiz;
    const lastSolvedTotalDay = utilFunctions.getTotalDay(lastSolved);
    const dateDifference = currentTotalDay - lastSolvedTotalDay;

    const baseLayers = [1, 2, 3, 4, 5, 6, 7];
    return baseLayers.some((baseLayer) => {
      const validation = quizLayer <= baseLayer && dateDifference >= layerLimitMap[baseLayer];
      return validation;
    });
  });
};

export const sortByCurrent = (quizzes) => {
  return quizzes.sort((a, b) => a.lastSolved.localeCompare(b.lastSolved));
};
