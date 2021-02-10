import reducer, {
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

});
