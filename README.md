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
