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
var setMonDay= "",
    setTueDay="",
    setWenDay="",
    setThuDay="",
    setFriDay="",
    setSatDay="",
    setSunDay = "";
var monday = 1;
while (today.getDay() != monday){
  today.setDate(today.getDate() -1);
}
var ddm = today.getDate();
var mmm = today.getMonth() + 1; //January is 0!
var yyyym = today.getFullYear();

today.setDate(ddm+1);

var ddtu = today.getDate();
var mmtu = today.getMonth()+1;
var yyyytu = today.getFullYear();

today.setDate(ddtu+1);

var ddwe = today.getDate();
var mmwe = today.getMonth()+1;
var yyyywe = today.getFullYear();

today.setDate(ddwe+1);

var ddth = today.getDate();
var mmth = today.getMonth()+1;
var yyyyth = today.getFullYear();

today.setDate(ddth+1);

var ddfr = today.getDate();
var mmfr = today.getMonth()+1;
var yyyyfr = today.getFullYear();

today.setDate(ddfr+1);

var ddsa = today.getDate();
var mmsa = today.getMonth()+1;
var yyyysa = today.getFullYear();

today.setDate(ddsa+1);

var ddsu = today.getDate();
var mmsu = today.getMonth()+1;
var yyyysu = today.getFullYear();

if (ddm < 10) {
  ddm = "0" + ddm;
}
if(ddtu<10){
  ddtu = "0" + ddtu;
}
if (ddwe < 10) {
  ddwe = "0" + ddwe;
}
if (ddth < 10) {
  ddth = "0" + ddth;
}
if (ddfr < 10) {
  ddfr = "0" + ddfr;
}
if (ddsa < 10) {
  ddsa = "0" + ddsa;
}
if (ddsu < 10) {
  ddsu = "0" + ddsu;
}

if (mmm < 10) {
  mmm = "0" + mmm;
}
if(mmtu <10) {
  mmtu = "0" + mmtu;
}
if(mmwe <10) {
  mmwe = "0" + mmwe;
}
if(mmth <10) {
  mmth = "0" + mmth;
}
if(mmfr <10) {
  mmfr = "0" + mmfr;
}
if(mmsa <10) {
  mmsa = "0" + mmsa;
}
if(mmsu <10) {
  mmsu = "0" + mmsu;
}



setMonDay = yyyym + "-" + mmm + "-" + ddm;
setTueDay=yyyytu + "-" + mmtu + "-" + ddtu;
setWenDay=yyyywe + "-" + mmwe + "-" + ddwe;
setThuDay=yyyyth + "-" + mmth + "-" + ddth;
setFriDay=yyyyfr + "-" + mmfr + "-" + mmfr;
setSatDay=yyyysa + "-" + mmsa + "-" + ddsa;
setSunDay = yyyysu + "-" + mmsu + "-" + ddsu;

let startDateValue = "";
let endDateValue = "";

//모듈의 초기상태 정의
const initialState = Record({
  startDateValue: setMonDay,
  endDateValue: setSunDay,
  subDate: 0,
  inputDate: " ",
  dateArray: [setMonDay,setTueDay,setWenDay,setThuDay,setFriDay,setSatDay,setSunDay]
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
