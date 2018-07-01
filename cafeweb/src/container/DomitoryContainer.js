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
    axios.post("http://localhost:3300/read").then(res => {
      console.log(res);
      console.log(res.data);
    });
  };

  render() {
    const { startDateHandleChange, endDateHandleChange, handleSubmit } = this;
    const { startDateValue, endDateValue, subDate, dateArray } = this.props;
    const MapToHeadComponent = dateArray.map(Adate => <FormDay date={Adate} />);
    const MapToFormComponentBA = dateArray.map(Bdate => (
      <InputFood date="BreakA" key={Bdate} />
    ));
    const MapToFormComponentBB = dateArray.map(Bdate => (
      <InputFood date="BreakB" key={Bdate} />
    ));
    const MapToFormComponentLA = dateArray.map(Bdate => (
      <InputFood date="LunchA" key={Bdate} />
    ));
    const MapToFormComponentLB = dateArray.map(Bdate => (
      <InputFood date="LunchB" key={Bdate} />
    ));
    const MapToFormComponentDA = dateArray.map(Bdate => (
      <InputFood date="DinnerA" key={Bdate} />
    ));
    const MapToFormComponentDB = dateArray.map(Bdate => (
      <InputFood date="DinnerB" key={Bdate} />
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
          <table border="1">
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
