import React, { Component } from "react";
import { Domitory, FormDay, InputFood } from "component";
import { connect } from "react-redux";
import * as domitoryAction from "store/modules/domitory";
import axios from "axios";

import { bindActionCreators, createStore } from "redux";
import { DomitoryActions } from "store/actionCreators";

class DomitoryContainer extends Component {
  /*startDateHandleChange = event => {
    DomitoryActions.startDateHandleChange(event.target.value);
    const { endDateValue, dateArray } = this.props;
    var endDate = new Date(endDateValue);
    var startDate = new Date(event.target.value);
    var dayDate = startDate.getDate();
    dateArray.length = 0;
    const subDate = (endDate - startDate) / (24 * 3600 * 1000);
    for (var i = 0; i <= subDate; i++) {
      startDate = new Date(event.target.value);
      startDate.setDate(dayDate + i);
      var yearDate = startDate.getFullYear();
      var monthDate = startDate.getMonth() + 1;
      var secondDayDate = startDate.getDate();
      var correctDate = yearDate + "-" + monthDate + "-" + secondDayDate;
      dateArray.push(correctDate);
    }
    DomitoryActions.subDateHandle(subDate);
    DomitoryActions.dateArrayHandle(dateArray);
  };

  endDateHandleChange = event => {
    DomitoryActions.endDateHandleChange(event.target.value);
    const { startDateValue, dateArray } = this.props;
    var endDate = new Date(event.target.value);
    var startDate = new Date(startDateValue);
    var dayDate = startDate.getDate();
    dateArray.length = 0;
    const subDate = (endDate - startDate) / (24 * 3600 * 1000);
    for (var i = 0; i <= subDate; i++) {
      startDate = new Date(startDateValue);
      startDate.setDate(dayDate + i);
      var yearDate = startDate.getFullYear();
      var monthDate = startDate.getMonth() + 1;
      var secondDayDate = startDate.getDate();
      var correctDate = yearDate + "-" + monthDate + "-" + secondDayDate;
      dateArray.push(correctDate);
    }
    DomitoryActions.subDateHandle(subDate);
    DomitoryActions.dateArrayHandle(dateArray);
  };*/

  subMitHandle = event => {
    event.preventDefault();

    const {dateArray }=this.props
    console.log(event.target.moba.value);
    console.log(event.target.mobb.value);
    const mon = dateArray[0],
        tue = dateArray[1],
        wen = dateArray[2],
        thu = dateArray[3],
        fri = dateArray[4],
        sat = dateArray[5],
        sun = dateArray[6];
    const sendArray = {
      [mon]: [{
        "MENU": event.target.moba.value,
        "TITLE": "아침",
        "order": "0"
      },
      {
        "MENU": event.target.mola.value,
        "TITLE": "점심",
        "order": "1"
      },
      {
        "MENU": event.target.moda.value,
        "TITLE": "저녁",
        "order": "2"
      }],
      [tue]: [{
        "MENU": event.target.tuba.value,
        "TITLE": "아침",
        "order": "0"
      },
      {
        "MENU": event.target.tula.value,
        "TITLE": "점심",
        "order": "1"
      },
      {
        "MENU": event.target.tuda.value,
        "TITLE": "저녁",
        "order": "2"
      }],
      [wen]: [{
        "MENU": event.target.weba.value,
        "TITLE": "아침",
        "order": "0"
      },
      {
        "MENU": event.target.wela.value,
        "TITLE": "점심",
        "order": "1"
      },
      {
        "MENU": event.target.weda.value,
        "TITLE": "저녁",
        "order": "2"
      }],
      [thu]: [{
        "MENU": event.target.thba.value,
        "TITLE": "아침",
        "order": "0"
      },
      {
        "MENU": event.target.thla.value,
        "TITLE": "점심",
        "order": "1"
      },
      {
        "MENU": event.target.thda.value,
        "TITLE": "저녁",
        "order": "2"
      }],
      [fri]: [{
        "MENU": event.target.frba.value,
        "TITLE": "아침",
        "order": "0"
      },
      {
        "MENU": event.target.frla.value,
        "TITLE": "점심",
        "order": "1"
      },
      {
        "MENU": event.target.frda.value,
        "TITLE": "저녁",
        "order": "2"
      }],
      [sat]: [{
        "MENU": event.target.saba.value,
        "TITLE": "아침",
        "order": "0"
      },
      {
        "MENU": event.target.sala.value,
        "TITLE": "점심",
        "order": "1"
      },
      {
        "MENU": event.target.sada.value,
        "TITLE": "저녁",
        "order": "2"
      }],
      [sun]: [{
        "MENU": event.target.suba.value,
        "TITLE": "아침",
        "order": "0"
      },
      {
        "MENU": event.target.sula.value,
        "TITLE": "점심",
        "order": "1"
      },
      {
        "MENU": event.target.suda.value,
        "TITLE": "저녁",
        "order": "2"
      }]
    };
    console.log(sendArray);
      

    const testData = {
      test : 3
    }
    axios.post("http://localhost:3300/read",sendArray
    ).then(res => {
      console.log(res);
      console.log(res.data);
    });
  };

  render() {
    const { startDateHandleChange, endDateHandleChange, handleSubmit } = this;
    const { startDateValue, endDateValue, subDate, dateArray } = this.props;
    const MapToHeadComponent = dateArray.map(Adate => <FormDay date={Adate} key={Adate} />);
    return (
      <div>
        <h1>음식은 띄어쓰기로 구분해주세요</h1>
        <button>전주 작성하기</button>
        <input
          type="date"
          value={startDateValue}
          onChange={startDateHandleChange}
          min={startDateValue}
          readOnly
        />{" "}
        ~{" "}
        <input
          type="date" 
          value={endDateValue}
          onChange={endDateHandleChange}
          min={startDateValue}
          readOnly
        />
        <button>다음주 작성하기</button>
        <form onSubmit={this.subMitHandle}>
          <table border="1" name="sendForm">
            <tbody>
              <tr>
                <th colSpan="2"/>
                <th>월요일</th>
                <th>화요일</th>
                <th>수요일</th>
                <th>목요일</th>
                <th>금요일</th>
                <th>토요일</th>
                <th>일요일</th>
              </tr>
              <tr>
                <th colSpan="2" />
                {MapToHeadComponent}
              </tr>
              <tr>
                <td rowSpan="2">조식</td>
                <td>A</td>
                <td id="BreakA">
                  <textarea name="moba" />
                </td>
                <td id="BreakA">
                  <textarea name="tuba" />
                </td>
                <td id="BreakA">
                  <textarea name="weba" />
                </td>
                <td id="BreakA">
                  <textarea name="thba" />
                </td>
                <td id="BreakA">
                  <textarea name="frba" />
                </td>
                <td id="BreakA">
                  <textarea name="saba" />
                </td>
                <td id="BreakA">
                  <textarea name="suba" />
                </td>
              </tr>
              <tr>
                <td>B</td>
                <td id="BreakB">
                  <textarea name="mobb" />
                </td>
                <td id="BreakB">
                  <textarea name="tubb" />
                </td>
                <td id="BreakB">
                  <textarea name="webb" />
                </td>
                <td id="BreakB">
                  <textarea name="thbb" />
                </td>
                <td id="BreakB">
                  <textarea name="frbb" />
                </td>
                <td id="BreakB">
                  <textarea name="sabb" />
                </td>
                <td id="BreakB">
                  <textarea name="subb" />
                </td>
              </tr>
              <tr>
                <td rowSpan="2">중식</td>
                <td>A</td>
                <td id="LunchA">
                  <textarea name="mola" />
                </td>
                <td id="LunchA">
                  <textarea name="tula" />
                </td>
                <td id="LunchA">
                  <textarea name="wela" />
                </td>
                <td id="LunchA">
                  <textarea name="thla" />
                </td>
                <td id="LunchA">
                  <textarea name="frla" />
                </td>
                <td id="LunchA">
                  <textarea name="sala" />
                </td>
                <td id="LunchA">
                  <textarea name="sula" />
                </td>
              </tr>
              <tr>
                <td>B</td>
                <td id="LunchB">
                  <textarea name="molb" />
                </td>
                <td id="LunchB">
                  <textarea name="tulb" />
                </td>
                <td id="LunchB">
                  <textarea name="welb" />
                </td>
                <td id="LunchB">
                  <textarea name="thlb" />
                </td>
                <td id="LunchB">
                  <textarea name="frlb" />
                </td>
                <td id="LunchB">
                  <textarea name="salb" />
                </td>
                <td id="LunchB">
                  <textarea name="sulb" />
                </td>
              </tr>
              <tr>
                <td rowSpan="2">석식</td>
                <td>A</td>
                <td id="DinnerA">
                  <textarea name="moda" />
                </td>
                <td id="DinnerA">
                  <textarea name="tuda" />
                </td>
                <td id="DinnerA">
                  <textarea name="weda" />
                </td>
                <td id="DinnerA">
                  <textarea name="thda" />
                </td>
                <td id="DinnerA">
                  <textarea name="frda" />
                </td>
                <td id="DinnerA">
                  <textarea name="sada" />
                </td>
                <td id="DinnerA">
                  <textarea name="suda" />
                </td>
              </tr>
              <tr>
                <td>B</td>
                <td id="DinnerB">
                  <textarea name="modb" />
                </td>
                <td id="DinnerB">
                  <textarea name="tudb" />
                </td>
                <td id="DinnerB">
                  <textarea name="wedb" />
                </td>
                <td id="DinnerB">
                  <textarea name="thdb" />
                </td>
                <td id="DinnerB">
                  <textarea name="frdb" />
                </td>
                <td id="DinnerB">
                  <textarea name="sadb" />
                </td>
                <td id="DinnerB">
                  <textarea name="sudb" />
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <button type="submit">저장</button>
        </form>
      </div>
    );
  }
}

export default connect(
  ({ domitory }) => ({
    startDateValue: domitory.startDateValue,
    endDateValue: domitory.endDateValue,
    subDate: domitory.subDate,
    dateArray: domitory.dateArray
  }),
  dispatch => ({
    DomitoryActions: bindActionCreators(domitoryAction, dispatch)
  })
)(DomitoryContainer);
