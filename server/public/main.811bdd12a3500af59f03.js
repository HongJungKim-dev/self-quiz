(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{80:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));n(0);var o=n(4),i=n(2),a=n(1);function c(){return Object(a.a)("svg",{viewBox:"0 0 448 512"},Object(a.a)("path",{fill:"currentColor",d:"M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"}))}const r={button:{position:"fixed",width:"2rem",color:i.a.font,cursor:"pointer",margin:"2rem","&:hover":{color:i.a.faintWhite},"@media (max-width: 768px)":{width:"5rem"}}};function s({onClick:t}){return Object(a.a)("div",{title:"돌아가기",css:r.button,onClick:t},Object(a.a)(c,null))}function d(){const t=Object(o.g)();return Object(a.a)(s,{onClick:()=>{t.push("/")}})}},82:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return S}));var o=n(0),i=n.n(o),a=n(4),c=n(5),r=n(6),s=n(7),d=n(17),l=n(2),u=n(1);const b={header:{display:"flex",justifyContent:"space-between",position:"relative",top:"1px",backgroundColor:"white",borderRadius:"5px 5px 0 0",height:"10%"},text:{display:"flex",alignItems:"center",backgroundColor:l.a.main,padding:"0 4rem",borderRadius:"3px 0 5px 0",color:l.a.font,fontWeight:"bold",fontSize:l.c["#5"],"@media (max-width: 768px)":{fontSize:l.b["#5"]}},flexLayout:{display:"flex"},data:{display:"flex",alignItems:"center",padding:"0 1rem",marginLeft:"0.1em",backgroundColor:l.a.main,borderRadius:"0 0 5px 5px",color:l.a.font,fontSize:l.c["#5"],"@media (max-width: 768px)":{fontSize:l.b["#5"]}}};function p({quiz:t}){const e=0===t.tags.length?Object(u.a)("span",null,"#No Tags"):t.tags.map(t=>Object(u.a)("span",{key:t},"#",t," "));return Object(u.a)("div",{css:b.header},Object(u.a)("div",{css:b.flexLayout},Object(u.a)("div",{css:b.text},"정답")),Object(u.a)("div",{css:b.flexLayout},Object(u.a)("div",{css:b.data},e),Object(u.a)("div",{css:b.data},t.layer,"레벨")))}const m={answer:{display:"block",width:"100%",height:"75%",backgroundColor:"white",fontSize:l.c["#4"],resize:"none",padding:"1rem 2rem",boxSizing:"border-box",border:"none","@media (max-width: 768px)":{fontSize:l.b["#4"],padding:"3rem 3rem"}}};function f({quiz:t}){return Object(u.a)("textarea",{value:t.answer,css:m.answer,disabled:"disabled"})}var x=n(16);const h={layout:{display:"flex",justifyContent:"flex-end",position:"relative",bottom:"1px",backgroundColor:"white",padding:"0.5rem",borderRadius:"0 0 5px 5px",height:"15%",boxSizing:"border-box"},button:{padding:"0 3rem",marginLeft:"5px",border:"none",color:l.a.font,borderRadius:"3px",cursor:"pointer",fontWeight:"bold","&:hover":{opacity:"0.7"},"@media (max-width: 768px)":{fontSize:l.b["#5"],padding:"0 5rem"}}};function g({onFailClick:t,onKeepClick:e,onPassClick:n}){return Object(u.a)("div",{css:h.layout},Object(u.a)("button",{type:"button",css:Object(x.a)({...h.button,backgroundColor:l.a.red},";label:TodaysQuizAnswerButtons;"),onClick:t},"FAIL"),Object(u.a)("button",{type:"button",css:Object(x.a)({...h.button,backgroundColor:l.a.green},";label:TodaysQuizAnswerButtons;"),onClick:e},"KEEP"),Object(u.a)("button",{type:"button",css:Object(x.a)({...h.button,backgroundColor:l.a.main},";label:TodaysQuizAnswerButtons;"),onClick:n},"PASS"))}const O={layout:{width:"100%",height:"25rem",fontSize:l.c["#5"],"@media (max-width: 768px)":{height:"70rem"}}};function j({quiz:t,onPassClick:e,onKeepClick:n,onFailClick:o}){return Object(u.a)("div",{css:O.layout},Object(u.a)(p,{quiz:t}),Object(u.a)(f,{quiz:t}),Object(u.a)(g,{onPassClick:e,onKeepClick:n,onFailClick:o}))}const C={layout:{position:"relative",top:"50%",transform:"translateY(-50%)"},quizCount:{width:"max-content",color:"white",fontSize:l.c["#5"],borderBottom:"1px solid",margin:"0 0 0 auto","@media (max-width: 768px)":{fontSize:l.b["#6"]}},question:{textAlign:"center",color:l.a.font,fontSize:l.c["#1"],marginBottom:"3rem","@media (max-width: 768px)":{fontSize:l.b["#2"]}},button:{display:"block",margin:"0 auto",padding:"1rem 3rem",backgroundColor:l.a.main,color:l.a.font,border:"none",borderRadius:"6px",fontWeight:"bold",cursor:"pointer","&:hover":{backgroundColor:l.a.light},"@media (max-width: 768px)":{padding:"1.5rem 5rem"}}};function k({quiz:t,remainQuizCount:e,answerOn:n,onAnswerClick:o,onPassClick:i,onKeepClick:a,onFailClick:c}){return Object(u.a)("div",{css:C.layout},Object(u.a)("div",{css:C.quizCount},"남은 문제: ",e,"개"),Object(u.a)("div",{css:C.question},"Q. ",t.question),n?Object(u.a)(j,{quiz:t,onPassClick:i,onKeepClick:a,onFailClick:c}):Object(u.a)("button",{type:"button",css:C.button,onClick:o},"정답 확인하기"))}const w={width:"60rem",height:"100vh",margin:"0 auto","@media (max-width: 768px)":{width:"90vw"}};function z({children:t}){return Object(u.a)("div",{css:w},t)}function v(){const t=Object(c.b)(),e=Object(c.c)(t=>t.todays),n=e.quizzes[0];return n?Object(u.a)(z,null,Object(u.a)(k,{quiz:n,remainQuizCount:e.quizzes.length,answerOn:e.answerOn,onAnswerClick:()=>{t(Object(r.m)(!0))},onPassClick:()=>{d.a.passQuiz(n._id),t(Object(r.h)(n._id)),t(Object(r.m)(!1))},onKeepClick:()=>{d.a.keepQuiz(n._id),t(Object(r.h)(n._id)),t(Object(r.m)(!1))},onFailClick:()=>{d.a.failQuiz(n._id),t(Object(r.h)(n._id)),t(Object(r.m)(!1))}})):(s.d.success("오늘의 모든 문제를 다 풀었습니다!",2e3),Object(u.a)(a.a,{to:"/"}))}var y=n(80);function S(){return Object(u.a)(i.a.Fragment,null,Object(u.a)(y.a,null),Object(u.a)(v,null))}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pY29ucy9SZXR1cm5pbmdjb24uanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3ByZXNlbnRhdGlvbmFscy9CYWNrQnV0dG9uLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb250YWluZXJzL0JhY2tCdXR0b25Db250YWluZXIuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3ByZXNlbnRhdGlvbmFscy9Ub2RheXNRdWl6QW5zd2VySGVhZGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wcmVzZW50YXRpb25hbHMvVG9kYXlzUXVpekFuc3dlckJvZHkuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3ByZXNlbnRhdGlvbmFscy9Ub2RheXNRdWl6QW5zd2VyQnV0dG9ucy5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcHJlc2VudGF0aW9uYWxzL1RvZGF5c1F1aXpBbnN3ZXIuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3ByZXNlbnRhdGlvbmFscy9Ub2RheXNRdWl6LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sYXlvdXRzL1RvZGF5c1F1aXpMYXlvdXQuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NvbnRhaW5lcnMvVG9kYXlzUXVpekNvbnRhaW5lci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL1RvZGF5c1F1aXpQYWdlLmpzeCJdLCJuYW1lcyI6WyJSZXR1cm5pbmdJY29uIiwidmlld0JveCIsImZpbGwiLCJkIiwic3R5bGVzIiwiYnV0dG9uIiwicG9zaXRpb24iLCJ3aWR0aCIsImNvbG9yIiwiZm9udCIsImN1cnNvciIsIm1hcmdpbiIsImZhaW50V2hpdGUiLCJCYWNrQnV0dG9uIiwib25DbGljayIsInRpdGxlIiwiY3NzIiwiQmFja0J1dHRvbkNvbnRhaW5lciIsImhpc3RvcnkiLCJ1c2VIaXN0b3J5IiwicHVzaCIsImhlYWRlciIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsInRvcCIsImJhY2tncm91bmRDb2xvciIsImJvcmRlclJhZGl1cyIsImhlaWdodCIsInRleHQiLCJhbGlnbkl0ZW1zIiwibWFpbiIsInBhZGRpbmciLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJzaXplIiwibW9iaWxlU2l6ZSIsImZsZXhMYXlvdXQiLCJkYXRhIiwibWFyZ2luTGVmdCIsIlRvZGF5c1F1aXpBbnN3ZXJIZWFkZXIiLCJxdWl6IiwidGFnRWxlbWVudCIsInRhZ3MiLCJsZW5ndGgiLCJtYXAiLCJ0YWciLCJrZXkiLCJsYXllciIsImFuc3dlciIsInJlc2l6ZSIsImJveFNpemluZyIsImJvcmRlciIsIlRvZGF5c1F1aXpBbnN3ZXJCb2R5IiwidmFsdWUiLCJkaXNhYmxlZCIsImxheW91dCIsImJvdHRvbSIsIm9wYWNpdHkiLCJUb2RheXNRdWl6QW5zd2VyQnV0dG9ucyIsIm9uRmFpbENsaWNrIiwib25LZWVwQ2xpY2siLCJvblBhc3NDbGljayIsInR5cGUiLCJyZWQiLCJncmVlbiIsIlRvZGF5c1F1aXpBbnN3ZXIiLCJ0cmFuc2Zvcm0iLCJxdWl6Q291bnQiLCJib3JkZXJCb3R0b20iLCJxdWVzdGlvbiIsInRleHRBbGlnbiIsIm1hcmdpbkJvdHRvbSIsImxpZ2h0IiwiVG9kYXlzUXVpeiIsInJlbWFpblF1aXpDb3VudCIsImFuc3dlck9uIiwib25BbnN3ZXJDbGljayIsInN0eWxlIiwiVG9kYXlzUXVpekxheW91dCIsImNoaWxkcmVuIiwiVG9kYXlzUXVpekNvbnRhaW5lciIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ0b2RheXMiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidGFyZ2V0UXVpeiIsInF1aXp6ZXMiLCJzZXRUb2RheXNBbnN3ZXJPbiIsImFwaSIsInBhc3NRdWl6IiwiX2lkIiwicmVtb3ZlVG9kYXlzUXVpeiIsImtlZXBRdWl6IiwiZmFpbFF1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VVEsRUFBT1IsU0FDakJDLGNBakN5QixLQUM3QkssRUFBU08sYUFBa0IsS0FpQ3ZCM0IsWUE5Qm1CLEtBQ3ZCNEIsSUFBSUMsU0FBU0osRUFBV0ssS0FDeEJWLEVBQVNXLFlBQWlCTixFQUFXSyxNQUNyQ1YsRUFBU08sYUFBa0IsS0E0QnZCNUIsWUF6Qm1CLEtBQ3ZCNkIsSUFBSUksU0FBU1AsRUFBV0ssS0FDeEJWLEVBQVNXLFlBQWlCTixFQUFXSyxNQUNyQ1YsRUFBU08sYUFBa0IsS0F1QnZCN0IsWUFwQm1CLEtBQ3ZCOEIsSUFBSUssU0FBU1IsRUFBV0ssS0FDeEJWLEVBQVNXLFlBQWlCTixFQUFXSyxNQUNyQ1YsRUFBU08sYUFBa0IsU0FJM0JPLElBQWNDLFFBQVEsc0JBQXVCLEtBQ3RDLFlBQUMsSUFBRCxDQUFVQyxHQUFHLE8sWUN2Q1QsU0FBU0MsSUFDdEIsT0FDRSw4QkFDRSxZQUFDakYsRUFBQSxFQUFELE1BQ0EsWUFBQytELEVBQUQiLCJmaWxlIjoibWFpbi44MTFiZGQxMmEzNTAwYWY1OWYwMy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJldHVybmluZ0ljb24oKSB7XG4gIHJldHVybiAoXG4gICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDQ0OCA1MTJcIj5cbiAgICAgIDxwYXRoXG4gICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICBkPVwiTTI1Ny41IDQ0NS4xbC0yMi4yIDIyLjJjLTkuNCA5LjQtMjQuNiA5LjQtMzMuOSAwTDcgMjczYy05LjQtOS40LTkuNC0yNC42IDAtMzMuOUwyMDEuNCA0NC43YzkuNC05LjQgMjQuNi05LjQgMzMuOSAwbDIyLjIgMjIuMmM5LjUgOS41IDkuMyAyNS0uNCAzNC4zTDEzNi42IDIxNkg0MjRjMTMuMyAwIDI0IDEwLjcgMjQgMjR2MzJjMCAxMy4zLTEwLjcgMjQtMjQgMjRIMTM2LjZsMTIwLjUgMTE0LjhjOS44IDkuMyAxMCAyNC44LjQgMzQuM3pcIlxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IGNvbG9yIH0gZnJvbSAnLi4vLi4vc3RhdGljJztcblxuaW1wb3J0IFJldHVybmluZ0ljb24gZnJvbSAnLi4vaWNvbnMvUmV0dXJuaW5nY29uJztcblxuY29uc3Qgc3R5bGVzID0ge1xuICBidXR0b246IHtcbiAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICB3aWR0aDogJzJyZW0nLFxuICAgIGNvbG9yOiBjb2xvci5mb250LFxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgIG1hcmdpbjogJzJyZW0nLFxuICAgICcmOmhvdmVyJzoge1xuICAgICAgY29sb3I6IGNvbG9yLmZhaW50V2hpdGUsXG4gICAgfSxcbiAgICAnQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSc6IHtcbiAgICAgIHdpZHRoOiAnNXJlbScsXG4gICAgfSxcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJhY2tCdXR0b24oeyBvbkNsaWNrIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICB0aXRsZT1cIuuPjOyVhOqwgOq4sFwiXG4gICAgICBjc3M9e3N0eWxlcy5idXR0b259XG4gICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgID5cbiAgICAgIDxSZXR1cm5pbmdJY29uIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyB1c2VIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmltcG9ydCBCYWNrQnV0dG9uIGZyb20gJy4uL3ByZXNlbnRhdGlvbmFscy9CYWNrQnV0dG9uJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmFja0J1dHRvbkNvbnRhaW5lcigpIHtcbiAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcblxuICBjb25zdCBoYW5kbGVCYWNrQnV0dG9uQ2xpY2sgPSAoKSA9PiB7XG4gICAgaGlzdG9yeS5wdXNoKCcvJyk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8QmFja0J1dHRvbiBvbkNsaWNrPXtoYW5kbGVCYWNrQnV0dG9uQ2xpY2t9IC8+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBjb2xvciwgbW9iaWxlU2l6ZSwgc2l6ZSB9IGZyb20gJy4uLy4uL3N0YXRpYyc7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgaGVhZGVyOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgdG9wOiAnMXB4JyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXG4gICAgYm9yZGVyUmFkaXVzOiAnNXB4IDVweCAwIDAnLFxuICAgIGhlaWdodDogJzEwJScsXG4gIH0sXG4gIHRleHQ6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgYmFja2dyb3VuZENvbG9yOiBjb2xvci5tYWluLFxuICAgIHBhZGRpbmc6ICcwIDRyZW0nLFxuICAgIGJvcmRlclJhZGl1czogJzNweCAwIDVweCAwJyxcbiAgICBjb2xvcjogY29sb3IuZm9udCxcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgZm9udFNpemU6IHNpemVbJyM1J10sXG4gICAgJ0BtZWRpYSAobWF4LXdpZHRoOiA3NjhweCknOiB7XG4gICAgICBmb250U2l6ZTogbW9iaWxlU2l6ZVsnIzUnXSxcbiAgICB9LFxuICB9LFxuICBmbGV4TGF5b3V0OiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICB9LFxuICBkYXRhOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIHBhZGRpbmc6ICcwIDFyZW0nLFxuICAgIG1hcmdpbkxlZnQ6ICcwLjFlbScsXG4gICAgYmFja2dyb3VuZENvbG9yOiBjb2xvci5tYWluLFxuICAgIGJvcmRlclJhZGl1czogJzAgMCA1cHggNXB4JyxcbiAgICBjb2xvcjogY29sb3IuZm9udCxcbiAgICBmb250U2l6ZTogc2l6ZVsnIzUnXSxcbiAgICAnQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSc6IHtcbiAgICAgIGZvbnRTaXplOiBtb2JpbGVTaXplWycjNSddLFxuICAgIH0sXG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb2RheXNRdWl6QW5zd2VySGVhZGVyKHsgcXVpeiB9KSB7XG4gIGNvbnN0IHRhZ0VsZW1lbnQgPSBxdWl6LnRhZ3MubGVuZ3RoID09PSAwXG4gICAgPyA8c3Bhbj4jTm8gVGFnczwvc3Bhbj5cbiAgICA6IHF1aXoudGFncy5tYXAoKHRhZykgPT4gPHNwYW4ga2V5PXt0YWd9PiN7dGFnfSA8L3NwYW4+KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY3NzPXtzdHlsZXMuaGVhZGVyfT5cbiAgICAgIDxkaXYgY3NzPXtzdHlsZXMuZmxleExheW91dH0+XG4gICAgICAgIDxkaXYgY3NzPXtzdHlsZXMudGV4dH0+7KCV64u1PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY3NzPXtzdHlsZXMuZmxleExheW91dH0+XG4gICAgICAgIDxkaXYgY3NzPXtzdHlsZXMuZGF0YX0+e3RhZ0VsZW1lbnR9PC9kaXY+XG4gICAgICAgIDxkaXYgY3NzPXtzdHlsZXMuZGF0YX0+e3F1aXoubGF5ZXJ966CI67KoPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IG1vYmlsZVNpemUsIHNpemUgfSBmcm9tICcuLi8uLi9zdGF0aWMnO1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGFuc3dlcjoge1xuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBoZWlnaHQ6ICc3NSUnLFxuICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcbiAgICBmb250U2l6ZTogc2l6ZVsnIzQnXSxcbiAgICByZXNpemU6ICdub25lJyxcbiAgICBwYWRkaW5nOiAnMXJlbSAycmVtJyxcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICBib3JkZXI6ICdub25lJyxcbiAgICAnQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSc6IHtcbiAgICAgIGZvbnRTaXplOiBtb2JpbGVTaXplWycjNCddLFxuICAgICAgcGFkZGluZzogJzNyZW0gM3JlbScsXG4gICAgfSxcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRvZGF5c1F1aXpBbnN3ZXJCb2R5KHsgcXVpeiB9KSB7XG4gIHJldHVybiAoXG4gICAgPHRleHRhcmVhXG4gICAgICB2YWx1ZT17cXVpei5hbnN3ZXJ9XG4gICAgICBjc3M9e3N0eWxlcy5hbnN3ZXJ9XG4gICAgICBkaXNhYmxlZD1cImRpc2FibGVkXCJcbiAgICAvPlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgY29sb3IsIG1vYmlsZVNpemUgfSBmcm9tICcuLi8uLi9zdGF0aWMnO1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGxheW91dDoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICBib3R0b206ICcxcHgnLFxuICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcbiAgICBwYWRkaW5nOiAnMC41cmVtJyxcbiAgICBib3JkZXJSYWRpdXM6ICcwIDAgNXB4IDVweCcsXG4gICAgaGVpZ2h0OiAnMTUlJyxcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgfSxcbiAgYnV0dG9uOiB7XG4gICAgcGFkZGluZzogJzAgM3JlbScsXG4gICAgbWFyZ2luTGVmdDogJzVweCcsXG4gICAgYm9yZGVyOiAnbm9uZScsXG4gICAgY29sb3I6IGNvbG9yLmZvbnQsXG4gICAgYm9yZGVyUmFkaXVzOiAnM3B4JyxcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgJyY6aG92ZXInOiB7XG4gICAgICBvcGFjaXR5OiAnMC43JyxcbiAgICB9LFxuICAgICdAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpJzoge1xuICAgICAgZm9udFNpemU6IG1vYmlsZVNpemVbJyM1J10sXG4gICAgICBwYWRkaW5nOiAnMCA1cmVtJyxcbiAgICB9LFxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVG9kYXlzUXVpekFuc3dlckJ1dHRvbnMoeyBvbkZhaWxDbGljaywgb25LZWVwQ2xpY2ssIG9uUGFzc0NsaWNrIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNzcz17c3R5bGVzLmxheW91dH0+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICBjc3M9e3sgLi4uc3R5bGVzLmJ1dHRvbiwgYmFja2dyb3VuZENvbG9yOiBjb2xvci5yZWQgfX1cbiAgICAgICAgb25DbGljaz17b25GYWlsQ2xpY2t9XG4gICAgICA+RkFJTFxuICAgICAgPC9idXR0b24+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICBjc3M9e3sgLi4uc3R5bGVzLmJ1dHRvbiwgYmFja2dyb3VuZENvbG9yOiBjb2xvci5ncmVlbiB9fVxuICAgICAgICBvbkNsaWNrPXtvbktlZXBDbGlja31cbiAgICAgID5LRUVQXG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgIGNzcz17eyAuLi5zdHlsZXMuYnV0dG9uLCBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yLm1haW4gfX1cbiAgICAgICAgb25DbGljaz17b25QYXNzQ2xpY2t9XG4gICAgICA+UEFTU1xuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBzaXplIH0gZnJvbSAnLi4vLi4vc3RhdGljJztcblxuaW1wb3J0IFRvZGF5c1F1aXpBbnN3ZXJIZWFkZXIgZnJvbSAnLi9Ub2RheXNRdWl6QW5zd2VySGVhZGVyJztcbmltcG9ydCBUb2RheXNRdWl6QW5zd2VyQm9keSBmcm9tICcuL1RvZGF5c1F1aXpBbnN3ZXJCb2R5JztcbmltcG9ydCBUb2RheXNRdWl6QW5zd2VyQnV0dG9ucyBmcm9tICcuL1RvZGF5c1F1aXpBbnN3ZXJCdXR0b25zJztcblxuY29uc3Qgc3R5bGVzID0ge1xuICBsYXlvdXQ6IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGhlaWdodDogJzI1cmVtJyxcbiAgICBmb250U2l6ZTogc2l6ZVsnIzUnXSxcbiAgICAnQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSc6IHtcbiAgICAgIGhlaWdodDogJzcwcmVtJyxcbiAgICB9LFxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVG9kYXlzUXVpekFuc3dlcih7XG4gIHF1aXosIG9uUGFzc0NsaWNrLCBvbktlZXBDbGljaywgb25GYWlsQ2xpY2ssXG59KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjc3M9e3N0eWxlcy5sYXlvdXR9PlxuICAgICAgPFRvZGF5c1F1aXpBbnN3ZXJIZWFkZXIgcXVpej17cXVpen0gLz5cbiAgICAgIDxUb2RheXNRdWl6QW5zd2VyQm9keSBxdWl6PXtxdWl6fSAvPlxuICAgICAgPFRvZGF5c1F1aXpBbnN3ZXJCdXR0b25zXG4gICAgICAgIG9uUGFzc0NsaWNrPXtvblBhc3NDbGlja31cbiAgICAgICAgb25LZWVwQ2xpY2s9e29uS2VlcENsaWNrfVxuICAgICAgICBvbkZhaWxDbGljaz17b25GYWlsQ2xpY2t9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IFRvZGF5c1F1aXpBbnN3ZXIgZnJvbSAnLi9Ub2RheXNRdWl6QW5zd2VyJztcblxuaW1wb3J0IHsgY29sb3IsIG1vYmlsZVNpemUsIHNpemUgfSBmcm9tICcuLi8uLi9zdGF0aWMnO1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGxheW91dDoge1xuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIHRvcDogJzUwJScsXG4gICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtNTAlKScsXG4gIH0sXG4gIHF1aXpDb3VudDoge1xuICAgIHdpZHRoOiAnbWF4LWNvbnRlbnQnLFxuICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgIGZvbnRTaXplOiBzaXplWycjNSddLFxuICAgIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCcsXG4gICAgbWFyZ2luOiAnMCAwIDAgYXV0bycsXG4gICAgJ0BtZWRpYSAobWF4LXdpZHRoOiA3NjhweCknOiB7XG4gICAgICBmb250U2l6ZTogbW9iaWxlU2l6ZVsnIzYnXSxcbiAgICB9LFxuICB9LFxuICBxdWVzdGlvbjoge1xuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgY29sb3I6IGNvbG9yLmZvbnQsXG4gICAgZm9udFNpemU6IHNpemVbJyMxJ10sXG4gICAgbWFyZ2luQm90dG9tOiAnM3JlbScsXG4gICAgJ0BtZWRpYSAobWF4LXdpZHRoOiA3NjhweCknOiB7XG4gICAgICBmb250U2l6ZTogbW9iaWxlU2l6ZVsnIzInXSxcbiAgICB9LFxuICB9LFxuICBidXR0b246IHtcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIG1hcmdpbjogJzAgYXV0bycsXG4gICAgcGFkZGluZzogJzFyZW0gM3JlbScsXG4gICAgYmFja2dyb3VuZENvbG9yOiBjb2xvci5tYWluLFxuICAgIGNvbG9yOiBjb2xvci5mb250LFxuICAgIGJvcmRlcjogJ25vbmUnLFxuICAgIGJvcmRlclJhZGl1czogJzZweCcsXG4gICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICcmOmhvdmVyJzoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvci5saWdodCxcbiAgICB9LFxuICAgICdAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpJzoge1xuICAgICAgcGFkZGluZzogJzEuNXJlbSA1cmVtJyxcbiAgICB9LFxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVG9kYXlzUXVpeih7XG4gIHF1aXosIHJlbWFpblF1aXpDb3VudCwgYW5zd2VyT24sIG9uQW5zd2VyQ2xpY2ssIG9uUGFzc0NsaWNrLCBvbktlZXBDbGljaywgb25GYWlsQ2xpY2ssXG59KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjc3M9e3N0eWxlcy5sYXlvdXR9PlxuICAgICAgPGRpdiBjc3M9e3N0eWxlcy5xdWl6Q291bnR9PuuCqOydgCDrrLjsoJw6IHtyZW1haW5RdWl6Q291bnR96rCcPC9kaXY+XG4gICAgICA8ZGl2IGNzcz17c3R5bGVzLnF1ZXN0aW9ufT5RLiB7cXVpei5xdWVzdGlvbn08L2Rpdj5cbiAgICAgIHthbnN3ZXJPblxuICAgICAgICA/IChcbiAgICAgICAgICA8VG9kYXlzUXVpekFuc3dlclxuICAgICAgICAgICAgcXVpej17cXVpen1cbiAgICAgICAgICAgIG9uUGFzc0NsaWNrPXtvblBhc3NDbGlja31cbiAgICAgICAgICAgIG9uS2VlcENsaWNrPXtvbktlZXBDbGlja31cbiAgICAgICAgICAgIG9uRmFpbENsaWNrPXtvbkZhaWxDbGlja31cbiAgICAgICAgICAvPlxuICAgICAgICApXG4gICAgICAgIDogKFxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgY3NzPXtzdHlsZXMuYnV0dG9ufVxuICAgICAgICAgICAgb25DbGljaz17b25BbnN3ZXJDbGlja31cbiAgICAgICAgICA+XG4gICAgICAgICAgICDsoJXri7Ug7ZmV7J247ZWY6riwXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBzdHlsZSA9IHtcbiAgd2lkdGg6ICc2MHJlbScsXG4gIGhlaWdodDogJzEwMHZoJyxcbiAgbWFyZ2luOiAnMCBhdXRvJyxcbiAgJ0BtZWRpYSAobWF4LXdpZHRoOiA3NjhweCknOiB7XG4gICAgd2lkdGg6ICc5MHZ3JyxcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRvZGF5c1F1aXpMYXlvdXQoeyBjaGlsZHJlbiB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjc3M9e3N0eWxlfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IFJlZGlyZWN0IH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgc2V0VG9kYXlzQW5zd2VyT24sIHJlbW92ZVRvZGF5c1F1aXogfSBmcm9tICcuLi8uLi9zbGljZSc7XG5cbmltcG9ydCB7IHBvcHVwTWVzc2FnZXMgfSBmcm9tICcuLi8uLi91dGlsJztcblxuaW1wb3J0IGFwaSBmcm9tICcuLi8uLi9hcGlzL2FwaSc7XG5cbmltcG9ydCBUb2RheXNRdWl6IGZyb20gJy4uL3ByZXNlbnRhdGlvbmFscy9Ub2RheXNRdWl6JztcbmltcG9ydCBUb2RheXNRdWl6TGF5b3V0IGZyb20gJy4uL2xheW91dHMvVG9kYXlzUXVpekxheW91dCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRvZGF5c1F1aXpDb250YWluZXIoKSB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgdG9kYXlzID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS50b2RheXMpO1xuICBjb25zdCB0YXJnZXRRdWl6ID0gdG9kYXlzLnF1aXp6ZXNbMF07XG5cbiAgY29uc3QgaGFuZGxlU2hvd0Fuc3dlckJ1dHRvbiA9ICgpID0+IHtcbiAgICBkaXNwYXRjaChzZXRUb2RheXNBbnN3ZXJPbih0cnVlKSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlUGFzc0J1dHRvbiA9ICgpID0+IHtcbiAgICBhcGkucGFzc1F1aXoodGFyZ2V0UXVpei5faWQpO1xuICAgIGRpc3BhdGNoKHJlbW92ZVRvZGF5c1F1aXoodGFyZ2V0UXVpei5faWQpKTtcbiAgICBkaXNwYXRjaChzZXRUb2RheXNBbnN3ZXJPbihmYWxzZSkpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUtlZXBCdXR0b24gPSAoKSA9PiB7XG4gICAgYXBpLmtlZXBRdWl6KHRhcmdldFF1aXouX2lkKTtcbiAgICBkaXNwYXRjaChyZW1vdmVUb2RheXNRdWl6KHRhcmdldFF1aXouX2lkKSk7XG4gICAgZGlzcGF0Y2goc2V0VG9kYXlzQW5zd2VyT24oZmFsc2UpKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVGYWlsQnV0dG9uID0gKCkgPT4ge1xuICAgIGFwaS5mYWlsUXVpeih0YXJnZXRRdWl6Ll9pZCk7XG4gICAgZGlzcGF0Y2gocmVtb3ZlVG9kYXlzUXVpeih0YXJnZXRRdWl6Ll9pZCkpO1xuICAgIGRpc3BhdGNoKHNldFRvZGF5c0Fuc3dlck9uKGZhbHNlKSk7XG4gIH07XG5cbiAgaWYgKCF0YXJnZXRRdWl6KSB7XG4gICAgcG9wdXBNZXNzYWdlcy5zdWNjZXNzKCfsmKTripjsnZgg66qo65OgIOusuOygnOulvCDri6Qg7ZKA7JeI7Iq164uI64ukIScsIDIwMDApO1xuICAgIHJldHVybiA8UmVkaXJlY3QgdG89XCIvXCIgLz47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxUb2RheXNRdWl6TGF5b3V0PlxuICAgICAgPFRvZGF5c1F1aXpcbiAgICAgICAgcXVpej17dGFyZ2V0UXVpen1cbiAgICAgICAgcmVtYWluUXVpekNvdW50PXt0b2RheXMucXVpenplcy5sZW5ndGh9XG4gICAgICAgIGFuc3dlck9uPXt0b2RheXMuYW5zd2VyT259XG4gICAgICAgIG9uQW5zd2VyQ2xpY2s9e2hhbmRsZVNob3dBbnN3ZXJCdXR0b259XG4gICAgICAgIG9uUGFzc0NsaWNrPXtoYW5kbGVQYXNzQnV0dG9ufVxuICAgICAgICBvbktlZXBDbGljaz17aGFuZGxlS2VlcEJ1dHRvbn1cbiAgICAgICAgb25GYWlsQ2xpY2s9e2hhbmRsZUZhaWxCdXR0b259XG4gICAgICAvPlxuICAgIDwvVG9kYXlzUXVpekxheW91dD5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBUb2RheXNRdWl6Q29udGFpbmVyIGZyb20gJy4uL2NvbXBvbmVudHMvY29udGFpbmVycy9Ub2RheXNRdWl6Q29udGFpbmVyJztcbmltcG9ydCBCYWNrQnV0dG9uQ29udGFpbmVyIGZyb20gJy4uL2NvbXBvbmVudHMvY29udGFpbmVycy9CYWNrQnV0dG9uQ29udGFpbmVyJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVG9kYXlzUXVpelBhZ2UoKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxCYWNrQnV0dG9uQ29udGFpbmVyIC8+XG4gICAgICA8VG9kYXlzUXVpekNvbnRhaW5lciAvPlxuICAgIDwvPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==