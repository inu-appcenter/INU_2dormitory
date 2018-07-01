import { createAction, handleActions } from "redux-actions";
import { Record, List } from "immutable";

//액션타입 정의
const STARTDATEHANDLECHANGE = "domitory/STARTDATEHANDLECHANGE";
const ENDDATEHANDLECHANGE = "domitory/ENDDATEHANDLECHANGE";
const SUBDATEHANDLE = "domitory/SUBDATEHANDLE";
const DATEARRAYHANDLE = "domitory/DATEARRAYHANDLE";

//액션 생성 함수 만듦
//이 함수들은 나중에 다른파일에서 불러와야하기 때문에 export시켜 줍니다
export const startDateHandleChange = createAction(STARTDATEHANDLECHANGE);
export const endDateHandleChange = createAction(ENDDATEHANDLECHANGE);
export const subDateHandle = createAction(SUBDATEHANDLE);
export const dateArrayHandle = createAction(DATEARRAYHANDLE, text => text);

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!
var yyyy = today.getFullYear();

if (dd < 10) {
  dd = "0" + dd;
}

if (mm < 10) {
  mm = "0" + mm;
}

today = yyyy + "-" + mm + "-" + dd;

let startDateValue = "";
let endDateValue = "";

//모듈의 초기상태 정의
const initialState = Record({
  startDateValue: today,
  endDateValue: today,
  subDate: 0,
  inputDate: " ",
  dateArray: [today]
})();

const domitoryRecord = Record({
  subDate: endDateValue - startDateValue
})();

export default handleActions(
  {
    [STARTDATEHANDLECHANGE]: (state, action) =>
      state.set("startDateValue", action.payload),
    [ENDDATEHANDLECHANGE]: (state, action) =>
      state.set("endDateValue", action.payload),
    [SUBDATEHANDLE]: (state, action) => state.set("subDate", action.payload),
    [DATEARRAYHANDLE]: (state, action) => state.set("dateArray", action.payload)
  },
  initialState
);
/*
//리듀서 생성후 내보내기
export default function reducer(state = initalState, action) {
  //리듀서 함수에서는 액션의 타입에 따라 변화된 상태를 정의하여 반환합니다.
  // state = initialState 이렇게하면 initialState가 기본 값으로 사용 됩니다.
  switch (action.type) {
    case STARTDATEHANDLECHANGE:
      return { startDateValue: event.target.value };
    case ENDDATEHANDLECHANGE:
      return { endDateValue: event.target.value };
    default:
      return state;
  }
}
*/
