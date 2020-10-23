import filterTodaysQuiz, { utilFunctions } from './algorithm';

describe('filterTodaysQuiz', () => {
  beforeEach(() => {
    utilFunctions.getCurrentDate = jest.fn().mockReturnValue('2020-10-30');
  });

  test('returns todays quizzes', () => {
    const inputQuizzes = [
      { layer: 1, lastSolved: '2020-10-30', state: false },
      { layer: 1, lastSolved: '2020-10-29', state: false },
      { layer: 1, lastSolved: '2020-10-27', state: true },
      { layer: 1, lastSolved: '2020-10-01', state: true },
      { layer: 2, lastSolved: '2020-10-30', state: false },
      { layer: 2, lastSolved: '2020-10-27', state: false },
      { layer: 2, lastSolved: '2020-10-26', state: false },
      { layer: 2, lastSolved: '2020-10-23', state: true },
      { layer: 2, lastSolved: '2020-10-01', state: true },
      { layer: 3, lastSolved: '2020-10-30', state: false },
      { layer: 3, lastSolved: '2020-10-27', state: false },
      { layer: 3, lastSolved: '2020-10-23', state: false },
      { layer: 3, lastSolved: '2020-10-22', state: false },
      { layer: 3, lastSolved: '2020-10-15', state: true },
      { layer: 3, lastSolved: '2020-10-01', state: true },
      { layer: 4, lastSolved: '2020-10-30', state: false },
      { layer: 4, lastSolved: '2020-10-27', state: false },
      { layer: 4, lastSolved: '2020-10-23', state: false },
      { layer: 4, lastSolved: '2020-10-15', state: false },
      { layer: 4, lastSolved: '2020-10-14', state: false },
      { layer: 4, lastSolved: '2020-10-01', state: false },
      { layer: 4, lastSolved: '2020-09-30', state: true },
      { layer: 4, lastSolved: '2020-09-01', state: true },
      { layer: 5, lastSolved: '2020-10-30', state: false },
      { layer: 5, lastSolved: '2020-10-27', state: false },
      { layer: 5, lastSolved: '2020-10-23', state: false },
      { layer: 5, lastSolved: '2020-10-15', state: false },
      { layer: 5, lastSolved: '2020-09-30', state: false },
      { layer: 5, lastSolved: '2020-09-20', state: false },
      { layer: 5, lastSolved: '2020-09-10', state: false },
      { layer: 5, lastSolved: '2020-09-01', state: false },
      { layer: 5, lastSolved: '2020-08-30', state: true },
      { layer: 5, lastSolved: '2020-05-01', state: true },
      { layer: 6, lastSolved: '2020-10-30', state: false },
      { layer: 6, lastSolved: '2020-10-23', state: false },
      { layer: 6, lastSolved: '2020-10-15', state: false },
      { layer: 6, lastSolved: '2020-10-01', state: false },
      { layer: 6, lastSolved: '2020-09-30', state: false },
      { layer: 6, lastSolved: '2020-08-30', state: false },
      { layer: 6, lastSolved: '2020-07-30', state: false },
      { layer: 6, lastSolved: '2020-07-01', state: false },
      { layer: 6, lastSolved: '2020-06-30', state: true },
      { layer: 6, lastSolved: '2020-01-01', state: true },
    ];

    const todaysQuizzes = filterTodaysQuiz(inputQuizzes);
    const validation = todaysQuizzes.every((quiz) => quiz.state);
    expect(validation).toBe(true);
  });
});
