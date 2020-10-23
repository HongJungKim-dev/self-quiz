# "오늘의 문제"

## 구현 동기

주기적인 복습을 통해 학습 능률을 높이고자 "오늘의 문제"라는 프로젝트를 진행하게 되었습니다.  
"오늘의 문제"는 그날그날 복습해야하는 지식들을 망각곡선을 토대로 자동적으로 보여주어 주기적인 복습을 강요하는 웹 어플리케이션입니다.

## API 명세

- **회원 가입: POST /auth/signup**  
  request-body: { userId, userPw, userName }  
  response: { message }  

- **로그인: POST /auth/login**  
  request-body: { userId, userPw }  
  response: { token }  

- **퀴즈 추가: POST /quiz**  
  request-header: Authorization - token  
  request-body: { question, answer, tags }  
  response: { message, quizId }  

- **퀴즈 조회: GET /quiz**  
  request-header: Authorization - token  
  response: { message, quizzes }  
  
- **퀴즈 수정: PATCH /quiz/edit**  
  request-header: Authorization - token  
  request-body: { quizId, question, answer, tags }  
  response: { message }  

- **퀴즈 통과: PATCH /quiz/pass**  
  request-header: Authorization - token  
  request-body: { quizId }  
  response: { message }  

- **퀴즈 삭제: DELETE /quiz/:quizId**  
  request-header: Authorization - token  
  request-params: quizId  
  response: { message }  

## 고민

- 한번 받아온 데이터는 새로고침으로 인해 유실되지 않는 이상 계속 사용하고자 하였습니다. 예를 들어 새로운 아이템을 추가하면, 서버로부터 다시 모든 데이터를 받아와서 그려주는 게 아니라, 새로운 아이템을 인메모리로 추가해주어서 불필요한 네트워크 비용을 줄였습니다.
- 무분별하게 전역에서 상태를 관리한것 같은 아쉬움이 있습니다. 해당 컴포넌트 내에서 해결 가능한 것은 해당 컴포넌트에서 useState를 사용하여야하는지 아니면 그래도 리덕스를 통해 상태관리를 해야하는지 잘 모르겠네요.
  > Do I have to put all my state into Redux? Should I ever use React's setState()?  
  There is no “right” answer for this. Some users prefer to keep every single piece of data in Redux, to maintain a fully serializable and controlled version of their application at all times. Others prefer to keep non-critical or UI state, such as “is this dropdown currently open”, inside a component's internal state.  
  Using local component state is fine. As a developer, it is your job to determine what kinds of state make up your application, and where each piece of state should live. Find a balance that works for you, and go with it.  
  -- Redux Official document

  공식문서를 찾아보니 결국 상황에 맞게 본인이 옳다고 생각하는 방향으로 하면 되는 것 같습니다.

- Cannot GET 문제 해결  
  서버사이드에서 잘못된 요청으로 오는 URL에 대해 다시 index.html파일을 내려주니 쉽게 해결할 수 있었습니다.
