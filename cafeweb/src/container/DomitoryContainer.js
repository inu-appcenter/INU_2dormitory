import React, { Component } from "react";
import { Domitory, FormDay, InputFood } from "component";
import { connect } from "react-redux";
import * as domitoryAction from "store/modules/domitory";
import axios from "axios";

import { bindActionCreators, createStore } from "redux";
import { DomitoryActions } from "store/actionCreators";

class DomitoryContainer extends Component {
  startDateHandleChange = event => {
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
  };

  subMitHandle = event => {
    event.preventDefault();

    const {dateArray }=this.props
    //const test = event.state.a
    const b = "2018-07-04BreakA"
    console.log(event.target[b].value);
    /*const sendArray = [];
    var setQuery="";
    const data = dateArray.map(Sdate => (
      setQuery= {
        stdDate : Sdate,
        weekDay : "example",
        cafe1 : [
          {
            MENU : "what the hell",
            TITLE: "A코너",
            order:"0"
          }
        ]
      },
      sendArray.push(setQuery)
    ));*/

    const testData = {
      test : 3
    }
    axios.post("http://localhost:3300/read",testData
    ).then(res => {
      console.log(res);
      console.log(res.data);
    });
  };

  render() {
    const { startDateHandleChange, endDateHandleChange, handleSubmit } = this;
    const { startDateValue, endDateValue, subDate, dateArray } = this.props;
    const MapToHeadComponent = dateArray.map(Adate => <FormDay date={Adate} key={Adate} />);
    const MapToFormComponentBA = dateArray.map(Bdate => (
      <InputFood date="BreakA" key={Bdate+"BreakA"} name={Bdate+"BreakA"}/>
    ));
    const MapToFormComponentBB = dateArray.map(Bdate => (
      <InputFood date="BreakB" key={Bdate+"BreakB"} name={Bdate+"BreakB"}/>
    ));
    const MapToFormComponentLA = dateArray.map(Bdate => (
      <InputFood date="LunchA" key={Bdate+"LunchA"} name={Bdate+"LunchA"}/>
    ));
    const MapToFormComponentLB = dateArray.map(Bdate => (
      <InputFood date="LunchB" key={Bdate+"LunchB"} name={Bdate+"LunchB"}/>
    ));
    const MapToFormComponentDA = dateArray.map(Bdate => (
      <InputFood date="DinnerA" key={Bdate+"DinnerA"} name={Bdate+"DinnerA"}/>
    ));
    const MapToFormComponentDB = dateArray.map(Bdate => (
      <InputFood date="DinnerB" key={Bdate+"DinnerB"} name={Bdate+"DinnerB"}/>
    ));
    return (
      <div>
        <h1>음식은 띄어쓰기로 구분해주세요</h1>
        <input
          type="date"
          value={startDateValue}
          onChange={startDateHandleChange}
          min={startDateValue}
        />{" "}
        ~{" "}
        <input
          type="date"
          value={endDateValue}
          onChange={endDateHandleChange}
          min={startDateValue}
        />
        <form onSubmit={this.subMitHandle}>
          <table border="1" name="sendForm">
            <tbody>
              <tr>
                <th colSpan="2" />
                {MapToHeadComponent}
              </tr>
              <tr>
                <td rowSpan="2">조식</td>
                <td>A</td>
                {MapToFormComponentBA}
              </tr>
              <tr>
                <td>B</td>
                {MapToFormComponentBB}
              </tr>
              <tr>
                <td rowSpan="2">중식</td>
                <td>A</td>
                {MapToFormComponentLA}
              </tr>
              <tr>
                <td>B</td>
                {MapToFormComponentLB}
              </tr>
              <tr>
                <td rowSpan="2">석식</td>
                <td>A</td>
                {MapToFormComponentDA}
              </tr>
              <tr>
                <td>B</td>
                {MapToFormComponentDB}
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
