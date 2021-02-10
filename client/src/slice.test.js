import reducer, {
  addQuiz,
  closeAllModal,
  editQuiz,
  removeQuiz,
  removeTodaysQuiz,
  resetQuizForm,
  setLoginForm,
  setModalState,
  setQuizForm,
  setQuizzes,
  setTodaysAnswerOn,
  setTodaysQuizzes,
  setToken,
  setUserName,
} from './slice';

describe('<reducer 테스트>', () => {
  describe('user 상태에 대해서', () => {
    const initialState = {
      user: {
        name: '',
        token: '',
      },
    };

    describe('setUserName 함수는', () => {
      it('유저의 이름을 지정한다.', () => {
        const state = reducer(initialState, setUserName('우민'));

        expect(state.user.name).toBe('우민');
      });
    });

    describe('setToken 함수는', () => {
      it('토큰을 저장한다.', () => {
        const state = reducer(initialState, setToken('random_string'));

        expect(state.user.token).toBe('random_string');
      });
    });
  });

  describe('form 상태에 대해서', () => {
    describe('setLoginForm 함수는', () => {
      const initialState = {
        form: {
          login: {
            id: '',
            pw: '',
          },
        },
      };

      it('로그인 폼의 id를 변경한다.', () => {
        const state = reducer(initialState, setLoginForm({ type: 'id', value: 'test_id' }));

        expect(state.form.login.id).toBe('test_id');
      });
      it('로그인 폼의 pw를 변경한다.', () => {
        const state = reducer(initialState, setLoginForm({ type: 'pw', value: 'test_pw' }));

        expect(state.form.login.pw).toBe('test_pw');
      });
    });

    describe('setQuizForm 함수는', () => {
      const initialState = {
        form: {
          quiz: {
            _id: '',
            question: '',
            answer: '',
            tagString: '',
          },
        },
      };

      it('퀴즈 폼의 _id를 설정한다.', () => {
        const state = reducer(initialState, setQuizForm({ _id: 'quiz_id' }));

        expect(state.form.quiz._id).toBe('quiz_id');
      });
      it('퀴즈 폼의 question를 변경한다.', () => {
        const state = reducer(initialState, setQuizForm({ question: 'quiz_question' }));

        expect(state.form.quiz.question).toBe('quiz_question');
      });
      it('퀴즈 폼의 answer를 변경한다.', () => {
        const state = reducer(initialState, setQuizForm({ answer: 'quiz_answer' }));

        expect(state.form.quiz.answer).toBe('quiz_answer');
      });
      it('퀴즈 폼의 tagString을 변경한다.', () => {
        const state = reducer(initialState, setQuizForm({ tagString: 'quiz_tag' }));

        expect(state.form.quiz.tagString).toBe('quiz_tag');
      });
      it('퀴즈 폼의 상태를 한꺼번에도 변경한다.', () => {
        const state = reducer(initialState, setQuizForm({
          _id: 'quiz_id',
          question: 'quiz_question',
          answer: 'quiz_answer',
          tagString: 'quiz_tag',
        }));

        expect(state.form.quiz._id).toBe('quiz_id');
        expect(state.form.quiz.question).toBe('quiz_question');
        expect(state.form.quiz.answer).toBe('quiz_answer');
        expect(state.form.quiz.tagString).toBe('quiz_tag');
      });
    });

    describe('resetQuizForm 함수는', () => {
      const initialState = {
        form: {
          quiz: {
            _id: 'ramdom_string',
            question: 'test_question',
            answer: 'test_answer',
            tagString: 'test_tag_string',
          },
        },
      };

      it('퀴즈 폼의 상태를 모두 초기화시킨다.', () => {
        const state = reducer(initialState, resetQuizForm());

        expect(state.form.quiz._id).toBe('');
        expect(state.form.quiz.question).toBe('');
        expect(state.form.quiz.answer).toBe('');
        expect(state.form.quiz.tagString).toBe('');
      });
    });
  });

  describe('quizzes 상태에 대해서', () => {
    describe('setQuizzes 함수는', () => {
      it('퀴즈들을 저장한다.', () => {
        const initialState = {
          quizzes: [],
        };
        const newQuizzes = [
          {
            _id: 'test_id_1',
            userId: 'test_user_1',
            question: 'test_question_1',
            answer: 'test_answer_1',
            lastSolved: '2021-02-10',
            layer: 3,
            tags: ['JavaScript'],
          },
          {
            _id: 'test_id_2',
            userId: 'test_user_2',
            question: 'test_question_2',
            answer: 'test_answer_2',
            lastSolved: '2021-03-12',
            layer: 2,
            tags: ['React'],
          },
        ];

        const state = reducer(initialState, setQuizzes(newQuizzes));

        expect(state.quizzes).toHaveLength(2);
      });
    });

    describe('addQuiz 함수는', () => {
      it('퀴즈를 추가한다.', () => {
        const initialState = {
          quizzes: [],
        };
        const newQuiz = {
          _id: 'test_id',
          userId: 'test_user',
          question: 'test_question',
          answer: 'test_answer',
          lastSolved: '2021-02-10',
          layer: 3,
          tags: ['JavaScript'],
        };

        const state = reducer(initialState, addQuiz(newQuiz));

        expect(state.quizzes).toHaveLength(1);
      });
    });

    describe('removeQuiz 함수는', () => {
      it('id에 해당하는 퀴즈를 제거한다.', () => {
        const initialState = {
          quizzes: [
            {
              _id: 'test_id',
              userId: 'test_user',
              question: 'test_question',
              answer: 'test_answer',
              lastSolved: '2021-02-10',
              layer: 3,
              tags: ['JavaScript'],
            },
          ],
        };

        const state = reducer(initialState, removeQuiz('test_id'));
        expect(state.quizzes).toHaveLength(0);
      });
    });

    describe('editQuiz 함수는', () => {
      it('id에 해당하는 퀴즈를 수정한다.', () => {
        const initialState = {
          quizzes: [
            {
              _id: 'test_id',
              userId: 'test_user',
              question: 'test_question',
              answer: 'test_answer',
              lastSolved: '2021-02-10',
              layer: 3,
              tags: ['JavaScript'],
            },
          ],
        };

        const state = reducer(initialState, editQuiz({
          _id: 'test_id',
          question: 'modified_test_question',
          answer: 'modified_test_answer',
          tagString: '#todays #quiz',
        }));

        expect(state.quizzes[0]).toEqual({
          _id: 'test_id',
          userId: 'test_user',
          question: 'modified_test_question',
          answer: 'modified_test_answer',
          lastSolved: '2021-02-10',
          layer: 3,
          tags: ['todays', 'quiz'],
        });
      });
    });
  });

  describe('modalShowing 상태에 대해서', () => {
    describe('setModalState 함수는', () => {
      const initialState = {
        modalShowing: {
          overlay: false,
          adding: false,
          archive: false,
          editting: false,
        },
      };

      it('adding 모달의 상태를 변경한다.', () => {
        const state = reducer(initialState, setModalState({ type: 'adding', showing: true }));

        expect(state.modalShowing.adding).toBe(true);
        expect(state.modalShowing.overlay).toBe(true);
      });
      it('archive 모달의 상태를 변경한다.', () => {
        const state = reducer(initialState, setModalState({ type: 'archive', showing: true }));

        expect(state.modalShowing.archive).toBe(true);
        expect(state.modalShowing.overlay).toBe(true);
      });
      it('editting 모달의 상태를 변경한다.', () => {
        const state = reducer(initialState, setModalState({ type: 'editting', showing: true }));

        expect(state.modalShowing.editting).toBe(true);
        expect(state.modalShowing.overlay).toBe(true);
      });
    });

    describe('closeAllModal 함수는', () => {
      const initialState = {
        modalShowing: {
          overlay: true,
          adding: false,
          archive: true,
          editting: true,
        },
      };

      it('모든 모달의 상태를 false로 바꾼다.', () => {
        const state = reducer(initialState, closeAllModal());

        expect(state.modalShowing.overlay).toBe(false);
        expect(state.modalShowing.adding).toBe(false);
        expect(state.modalShowing.archive).toBe(false);
        expect(state.modalShowing.editting).toBe(false);
      });
    });
  });

  describe('todays 상태에 대해서', () => {
    describe('setTodaysQuizzes 함수는', () => {
      const initialState = {
        todays: {
          answerOn: false,
          quizzes: [],
        },
      };

      it('오늘의 퀴즈들을 설정한다.', () => {
        const newQuizzes = [
          {
            _id: 'test_id_1',
            userId: 'test_user_1',
            question: 'test_question_1',
            answer: 'test_answer_1',
            lastSolved: '2021-02-10',
            layer: 3,
            tags: ['JavaScript'],
          },
          {
            _id: 'test_id_2',
            userId: 'test_user_2',
            question: 'test_question_2',
            answer: 'test_answer_2',
            lastSolved: '2021-03-12',
            layer: 2,
            tags: ['React'],
          },
        ];

        const state = reducer(initialState, setTodaysQuizzes(newQuizzes));

        expect(state.todays.quizzes).toHaveLength(2);
      });
    });

    describe('removeTodaysQuiz 함수는', () => {
      it('id에 해당하는 오늘의 퀴즈를 제거한다.', () => {
        const initialState = {
          todays: {
            answerOn: false,
            quizzes: [
              {
                _id: 'test_id',
                userId: 'test_user',
                question: 'test_question',
                answer: 'test_answer',
                lastSolved: '2021-02-10',
                layer: 3,
                tags: ['JavaScript'],
              },
            ],
          },
        };

        const state = reducer(initialState, removeTodaysQuiz('test_id'));

        expect(state.todays.quizzes).toHaveLength(0);
      });
    });

    describe('setTodaysAnswerOn 함수는', () => {
      it('오늘의 퀴즈 정답을 on/off 한다.', () => {
        const initialState = {
          todays: {
            answerOn: false,
            quizzes: [],
          },
        };

        const state = reducer(initialState, setTodaysAnswerOn(true));

        expect(state.todays.answerOn).toBe(true);
      });
    });
  });
});
