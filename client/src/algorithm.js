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
  1: 3,
  2: 7,
  3: 15,
  4: 30,
  5: 60,
  6: 120,
};

const filterTodaysQuiz = (quizzes) => {
  const currentDate = utilFunctions.getCurrentDate();
  const currentTotalDay = utilFunctions.getTotalDay(currentDate);

  return quizzes.filter((quiz) => {
    const { layer: quizLayer, lastSolved } = quiz;
    const lastSolvedTotalDay = utilFunctions.getTotalDay(lastSolved);
    const dateDifference = currentTotalDay - lastSolvedTotalDay;

    const baseLayers = [1, 2, 3, 4, 5, 6];
    return baseLayers.some((baseLayer) => {
      const validation = quizLayer <= baseLayer && dateDifference >= layerLimitMap[baseLayer];
      return validation;
    });
  });
};

export default filterTodaysQuiz;
