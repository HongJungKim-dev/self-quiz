# "오늘의 문제"

[https://self-quiz.herokuapp.com](https://self-quiz.herokuapp.com/)

아이디: test  
비밀번호: test

## 프로젝트 소개

- 주기적인 복습을 통해 지식을 장기기억으로 넘기고자 "오늘의 문제"라는 프로젝트를 진행하게 되었습니다.  
"오늘의 문제"는 그날그날 복습해야하는 지식들을 망각곡선을 토대로 자동적으로 보여주어 주기적인 복습을 강요하는 웹 어플리케이션입니다.  
즉, 사용자의 입장에서는 무엇을 복습해야 할 지에 대한 걱정을 "오늘의 문제"에 위임하고 다른 것에 집중 하여 효율도 높이고, 기존의 알게된 지식들도 장기기억으로 넘길 수 있는 일석이조의 효과를 기대합니다.

## 프로젝트 실행 방법

Server env file example

```bash
PORT=3000
JWT_SECRET=JWT_Secret_here
MONGODB_URL=MongoDB_URL_here
```

프로젝트 실행

```bash
$ cd client
$ npm install
$ npm start

$ cd ..
$ cd server
$ npm install
$ npm start
```

## 사용 기술

|                 <img width="100px" src="https://media.vlpt.us/post-images/chez_bono/ac8abaa0-3f83-11ea-86d2-c9f70b1fedfc/React.jslogo-512.png">                |              <img width="100px" src="https://raw.githubusercontent.com/1ambda/1ambda.github.io/master/assets/images/redux/redux_logo.png?width=30%&height=30%">             | <img width="130px" src="https://on-ad.github.io/static/assets/img/post_img/chanuuuuu/express_cover.png"> | <img width="130px" src="https://t1.daumcdn.net/cfile/tistory/9923593359840EC50A"> |
| :-----------------------------------: | :-----------------------------------: |  :-----------------------------------: |  :-----------------------------------: |
| React | Redux | Express | MongoDB |

## 프로젝트 구현 사항

|                 로그인                |               메인 페이지                |
| :-----------------------------------: | :-----------------------------------: |
| <img src="https://user-images.githubusercontent.com/59194356/97017373-c9c81280-1588-11eb-84fd-08e6c2b48fe4.png" >    | <img src="https://user-images.githubusercontent.com/59194356/97017378-caf93f80-1588-11eb-87e5-24be2620637e.png" >   |

|               문제 추가                |              아카이브               |
| :-----------------------------------: | :-----------------------------------: |
| <img src="https://user-images.githubusercontent.com/59194356/97017382-cb91d600-1588-11eb-8796-5da73c1b3de6.png" > | <img src="https://user-images.githubusercontent.com/59194356/97017386-ccc30300-1588-11eb-9c44-a3e76df96da4.png" >  |

|                오늘의 문제(1)            |             오늘의 문제(2)             |
| :-----------------------------------: | :-----------------------------------: |
| <img src="https://user-images.githubusercontent.com/59194356/97017388-cd5b9980-1588-11eb-9e70-cd5e2525b82d.png" > | <img src="https://user-images.githubusercontent.com/59194356/97017393-ce8cc680-1588-11eb-8ead-2186c9313d95.png" > |

## 고려 사항

- **어떻게 네트워크 비용을 줄일것인가**  
  Heroku 배포 및 MongoDB Atlas를 사용할 것이므로 네트워크 통신이 느릴 것이라 판단하여 어떻게 하면 네트워크 비용을 줄여볼 수 있을 지 고민하였습니다.  
  이를 위해 한번 받아온 데이터는 새로고침으로 인해 유실되지 않는 이상 계속 사용하고자 하였습니다. 예를 들어 새로운 아이템을 추가하면, 서버로부터 다시 모든 데이터를 받아와서 그려주는 게 아니라, 새로운 아이템을 인메모리로 추가해주어서 불필요한 네트워크 비용을 줄였습니다.

- **상태를 어떻게 관리할 것인가**  
  Redux를 사용하여 모든 상태를 관리해야하는가? 아니면 작은 단위의 상태들은 useState로 관리해야하는가? 에 대한 고민이 있었습니다. 질문도 해보고 찾아도 본 결과 작은 단위의 상태는 useState로 사용하고 전역 상태관리가 필요한 것들에 대해 Redux를 사용하는 것이 Best Practice인 것 같습니다.
  > Do I have to put all my state into Redux? Should I ever use React's setState()?  
  There is no “right” answer for this. Some users prefer to keep every single piece of data in Redux, to maintain a fully serializable and controlled version of their application at all times. Others prefer to keep non-critical or UI state, such as “is this dropdown currently open”, inside a component's internal state.  
  Using local component state is fine. As a developer, it is your job to determine what kinds of state make up your application, and where each piece of state should live. Find a balance that works for you, and go with it.  
  -- Redux official document

  공식문서를 찾아보니 결국 상황에 맞게 본인이 옳다고 생각하는 방향으로 하면 되는 것 같습니다.

- **새로 고침 시 발생하는 Cannot GET /**  
  클라이언트에서 새로고침을 하게되면 해당 주소로 Request를 전송하게 되고 당연히 받을 수 있는 게 없으니 Cannot GET이 뜨는 문제를 해결하고자 하였습니다. 예를 들어 "https://self-quiz.herokuapp.com/archive" 주소는 클라이언트 라우팅 처리로 인해 "/archive"라는 페이지를 사용한 것이었지만, 새로고침을 하게되면 "https://self-quiz.herokuapp.com"라는 서버의 "/archive"라는 자료를 Request하게 됩니다.  
  이를 해결하기 위해 서버 사이드에서 잘못된 요청으로 오는 URL에 대해 다시 index.html파일을 내려줌으로써 다시 해당 클라이언트 라우터로 찾아가도록 쉽게 해결할 수 있었습니다.

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

- **퀴즈 실패: PATCH /quiz/fail**  
  request-header: Authorization - token  
  request-body: { quizId }  
  response: { message }  

- **퀴즈 삭제: DELETE /quiz/:quizId**  
  request-header: Authorization - token  
  request-params: quizId  
  response: { message }  
