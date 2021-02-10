import reducer, {
  resetQuizForm,
  setLoginForm,
  setQuizForm,
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
});
