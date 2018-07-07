import React, { Component } from "react";
import { FormDay} from "component";
import { connect } from "react-redux";
import * as domitoryAction from "store/modules/domitory";
import axios from "axios";

import { bindActionCreators } from "redux";
import { DomitoryActions } from "store/actionCreators";

class DomitoryContainer extends Component {
  state = {
    moBaVa : "",moBbVa : "",moLaVa : "",moLbVa : "",moDaVa : "",moDbVa : "",
    tuBaVa : "",tuBbVa : "",tuLaVa : "",tuLbVa : "",tuDaVa : "",tuDbVa : "",
    weBaVa : "",weBbVa : "",weLaVa : "",weLbVa : "",weDaVa : "",weDbVa : "",
    thBaVa : "",thBbVa : "",thLaVa : "",thLbVa : "",thDaVa : "",thDbVa : "",
    frBaVa : "",frBbVa : "",frLaVa : "",frLbVa : "",frDaVa : "",frDbVa : "",
    saBaVa : "",saBbVa : "",saLaVa : "",saLbVa : "",saDaVa : "",saDbVa : "",
    suBaVa : "",suBbVa : "",suLaVa : "",suLbVa : "",suDaVa : "",suDbVa : ""

  }
  nowWeekHandle = event => {
    const {dateArray} = this.props;
    dateArray.length = 0;
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
    setFriDay=yyyyfr + "-" + mmfr + "-" + ddfr;
    setSatDay=yyyysa + "-" + mmsa + "-" + ddsa;
    setSunDay = yyyysu + "-" + mmsu + "-" + ddsu;

    dateArray.push(setMonDay);
    dateArray.push(setTueDay);
    dateArray.push(setWenDay);
    dateArray.push(setThuDay);
    dateArray.push(setFriDay);
    dateArray.push(setSatDay);
    dateArray.push(setSunDay);
    DomitoryActions.startDateHandleChange(setMonDay);
    DomitoryActions.endDateHandleChange(setSunDay);
    DomitoryActions.nextWeekHandle(dateArray);
    axios.post("http://localhost:3300/read/all",dateArray
    ).then(res => {
    console.log(res.data);

    this.setState({
      moBaVa : res.data[0].BAMENU, moBbVa : res.data[0].BBMENU, 
      moLaVa : res.data[0].LAMENU, moLbVa : res.data[0].LBMENU,
      moDaVa : res.data[0].DAMENU, moDbVa : res.data[0].DBMENU,
      /////////////////////////////////////////////////////////
      tuBaVa : res.data[1].BAMENU, tuBbVa : res.data[1].BBMENU,
      tuLaVa : res.data[1].LAMENU, tuLbVa : res.data[1].LBMENU,
      tuDaVa : res.data[1].DAMENU, tuDbVa : res.data[1].DBMENU,
      /////////////////////////////////////////////////////////
      weBaVa : res.data[2].BAMENU, weBbVa : res.data[2].BBMENU,
      weLaVa : res.data[2].LAMENU, weLbVa : res.data[2].LBMENU,
      weDaVa : res.data[2].DAMENU, weDbVa : res.data[2].DBMENU,
      /////////////////////////////////////////////////////////
      thBaVa : res.data[3].BAMENU, thBbVa : res.data[3].BBMENU,
      thLaVa : res.data[3].LAMENU, thLbVa : res.data[3].LBMENU,
      thDaVa : res.data[3].DAMENU, thDbVa : res.data[3].DBMENU,
      /////////////////////////////////////////////////////////
      frBaVa : res.data[4].BAMENU, frBbVa : res.data[4].BBMENU,
      frLaVa : res.data[4].LAMENU, frLbVa : res.data[4].LBMENU,
      frDaVa : res.data[4].DAMENU, frDbVa : res.data[4].DBMENU,
      /////////////////////////////////////////////////////////
      saBaVa : res.data[5].BAMENU, saBbVa : res.data[5].BBMENU,
      saLaVa : res.data[5].LAMENU, saLbVa : res.data[5].LBMENU,
      saDaVa : res.data[5].DAMENU, saDbVa : res.data[5].DBMENU,
      /////////////////////////////////////////////////////////
      suBaVa : res.data[6].BAMENU, suBbVa : res.data[6].BBMENU,
      suLaVa : res.data[6].LAMENU, suLbVa : res.data[6].LBMENU,
      suDaVa : res.data[6].DAMENU, suDbVa : res.data[6].DBMENU});
    });

  }

  nextWeekHandle = event => {
    const {dateArray} = this.props;
    let monDate = dateArray[0],
        tueDate = dateArray[1],
        wenDate = dateArray[2],
        thuDate = dateArray[3],
        friDate = dateArray[4],
        satDate = dateArray[5],
        sunDate = dateArray[6];


    dateArray.length = 0;


        var nextMonDate = new Date(monDate);
        var pastMon = nextMonDate.getDate();
        nextMonDate.setDate(pastMon +7);
        var monYear = nextMonDate.getFullYear();
        var monMonth = nextMonDate.getMonth() +1;
        var monNextDate = nextMonDate.getDate();
        if (monMonth < 10) {
          monMonth = "0" + monMonth;
        }
        if(monNextDate < 10) {
          monNextDate = "0"+monNextDate;
        }
        var correctMon = monYear + "-" + monMonth + "-" + monNextDate;


        var nextTueDate = new Date(tueDate);
        var pastTue = nextTueDate.getDate();
        nextTueDate.setDate(pastTue +7);
        var tueYear = nextTueDate.getFullYear();
        var tueMonth = nextTueDate.getMonth() +1;
        var tueNextDate = nextTueDate.getDate();
        if (tueMonth < 10) {
          tueMonth = "0" + tueMonth;
        }
        if(tueNextDate < 10) {
          tueNextDate = "0"+tueNextDate;
        }
        var correctTue = tueYear + "-" + tueMonth + "-" + tueNextDate;
        


        var nextWenDate = new Date(wenDate);
        var pastWen = nextWenDate.getDate();
        nextWenDate.setDate(pastWen +7);
        var wenYear = nextWenDate.getFullYear();
        var wenMonth = nextWenDate.getMonth() +1;
        var wenNextDate = nextWenDate.getDate();
        if (wenMonth < 10) {
          wenMonth = "0" + wenMonth;
        }
        if(wenNextDate < 10) {
          wenNextDate = "0"+wenNextDate;
        }
        var correctWen = wenYear + "-" + wenMonth + "-" + wenNextDate;


        var nextThuDate = new Date(thuDate);
        var pastThu = nextThuDate.getDate();
        nextThuDate.setDate(pastThu +7);
        var thuYear = nextThuDate.getFullYear();
        var thuMonth = nextThuDate.getMonth() +1;
        var thuNextDate = nextThuDate.getDate();
        if (thuMonth < 10) {
          thuMonth = "0" + thuMonth;
        }
        if(thuNextDate < 10) {
          thuNextDate = "0"+thuNextDate;
        }
        var correctThu = thuYear + "-" + thuMonth + "-" + thuNextDate;


        var nextFriDate = new Date(friDate);
        var pastFri = nextFriDate.getDate();
        nextFriDate.setDate(pastFri +7);
        var friYear = nextFriDate.getFullYear();
        var friMonth = nextFriDate.getMonth() +1;
        var friNextDate = nextFriDate.getDate();
        if (friMonth < 10) {
          friMonth = "0" + friMonth;
        }
        if(friNextDate < 10) {
          friNextDate = "0"+friNextDate;
        }
        var correctFri = friYear + "-" + friMonth + "-" + friNextDate;


        var nextSatDate = new Date(satDate);
        var pastSat = nextSatDate.getDate();
        nextSatDate.setDate(pastSat +7);
        var satYear = nextSatDate.getFullYear();
        var satMonth = nextSatDate.getMonth() +1;
        var satNextDate = nextSatDate.getDate();
        if (satMonth < 10) {
          satMonth = "0" + satMonth;
        }
        if(satNextDate < 10) {
          satNextDate = "0"+satNextDate;
        }
        var correctSat = satYear + "-" + satMonth + "-" + satNextDate;


        var nextSunDate = new Date(sunDate);
        var pastSun = nextSunDate.getDate();
        nextSunDate.setDate(pastSun +7);
        var sunYear = nextSunDate.getFullYear();
        var sunMonth = nextSunDate.getMonth() +1;
        var sunNextDate = nextSunDate.getDate();
        if (sunMonth < 10) {
          sunMonth = "0" + sunMonth;
        }
        if(sunNextDate < 10) {
          sunNextDate = "0"+sunNextDate;
        }
        var correctSun = sunYear + "-" + sunMonth + "-" + sunNextDate;
        

        dateArray.push(correctMon);
        dateArray.push(correctTue);
        dateArray.push(correctWen);
        dateArray.push(correctThu);
        dateArray.push(correctFri);
        dateArray.push(correctSat);
        dateArray.push(correctSun);
        DomitoryActions.startDateHandleChange(correctMon);
        DomitoryActions.endDateHandleChange(correctSun);
        DomitoryActions.nextWeekHandle(dateArray);
        
        
        
        axios.post("http://localhost:3300/read/all",dateArray
    ).then(res => {
    console.log(res.data);

    this.setState({
      moBaVa : res.data[0].BAMENU, moBbVa : res.data[0].BBMENU, 
      moLaVa : res.data[0].LAMENU, moLbVa : res.data[0].LBMENU,
      moDaVa : res.data[0].DAMENU, moDbVa : res.data[0].DBMENU,
      /////////////////////////////////////////////////////////
      tuBaVa : res.data[1].BAMENU, tuBbVa : res.data[1].BBMENU,
      tuLaVa : res.data[1].LAMENU, tuLbVa : res.data[1].LBMENU,
      tuDaVa : res.data[1].DAMENU, tuDbVa : res.data[1].DBMENU,
      /////////////////////////////////////////////////////////
      weBaVa : res.data[2].BAMENU, weBbVa : res.data[2].BBMENU,
      weLaVa : res.data[2].LAMENU, weLbVa : res.data[2].LBMENU,
      weDaVa : res.data[2].DAMENU, weDbVa : res.data[2].DBMENU,
      /////////////////////////////////////////////////////////
      thBaVa : res.data[3].BAMENU, thBbVa : res.data[3].BBMENU,
      thLaVa : res.data[3].LAMENU, thLbVa : res.data[3].LBMENU,
      thDaVa : res.data[3].DAMENU, thDbVa : res.data[3].DBMENU,
      /////////////////////////////////////////////////////////
      frBaVa : res.data[4].BAMENU, frBbVa : res.data[4].BBMENU,
      frLaVa : res.data[4].LAMENU, frLbVa : res.data[4].LBMENU,
      frDaVa : res.data[4].DAMENU, frDbVa : res.data[4].DBMENU,
      /////////////////////////////////////////////////////////
      saBaVa : res.data[5].BAMENU, saBbVa : res.data[5].BBMENU,
      saLaVa : res.data[5].LAMENU, saLbVa : res.data[5].LBMENU,
      saDaVa : res.data[5].DAMENU, saDbVa : res.data[5].DBMENU,
      /////////////////////////////////////////////////////////
      suBaVa : res.data[6].BAMENU, suBbVa : res.data[6].BBMENU,
      suLaVa : res.data[6].LAMENU, suLbVa : res.data[6].LBMENU,
      suDaVa : res.data[6].DAMENU, suDbVa : res.data[6].DBMENU});
    });

  }

  subMitHandle = event => {
    

    const {dateArray }=this.props
    const mon = dateArray[0],
        tue = dateArray[1],
        wen = dateArray[2],
        thu = dateArray[3],
        fri = dateArray[4],
        sat = dateArray[5],
        sun = dateArray[6];
    const sendArray = {
      day: {
        "MONDAY" : mon,
        "TUEDAY" : tue,
        "WENDAY" : wen,
        "THUDAY" : thu,
        "FRIDAY" : fri,
        "SATDAY" : sat,
        "SUNDAY" : sun
      },
      monday: {
        "MOBA" : event.target.moba.value,
        "MOBB" : event.target.mobb.value,
        "MOLA" : event.target.mola.value,
        "MOLB" : event.target.molb.value,
        "MODA" : event.target.moda.value,
        "MODB" : event.target.modb.value
      },
      tueday: {
        "TUBA" : event.target.tuba.value,
        "TUBB" : event.target.tubb.value,
        "TULA" : event.target.tula.value,
        "TULB" : event.target.tulb.value,
        "TUDA" : event.target.tuda.value,
        "TUDB" : event.target.tudb.value
      },
      wenday: {
        "WEBA" : event.target.weba.value,
        "WEBB" : event.target.webb.value,
        "WELA" : event.target.wela.value,
        "WELB" : event.target.welb.value,
        "WEDA" : event.target.weda.value,
        "WEDB" : event.target.wedb.value
      },
      thuday: {
        "THBA" : event.target.thba.value,
        "THBB" : event.target.thbb.value,
        "THLA" : event.target.thla.value,
        "THLB" : event.target.thlb.value,
        "THDA" : event.target.thda.value,
        "THDB" : event.target.thdb.value
      },
      firday: {
        "FRBA" : event.target.frba.value,
        "FRBB" : event.target.frbb.value,
        "FRLA" : event.target.frla.value,
        "FRLB" : event.target.frlb.value,
        "FRDA" : event.target.frda.value,
        "FRDB" : event.target.frdb.value
      },
      satday: {
        "SABA" : event.target.saba.value,
        "SABB" : event.target.sabb.value,
        "SALA" : event.target.sala.value,
        "SALB" : event.target.salb.value,
        "SADA" : event.target.sada.value,
        "SADB" : event.target.sadb.value
      },
      sunday: {
        "SUBA" : event.target.suba.value,
        "SUBB" : event.target.subb.value,
        "SULA" : event.target.sula.value,
        "SULB" : event.target.sulb.value,
        "SUDA" : event.target.suda.value,
        "SUDB" : event.target.sudb.value
      },
    };
      
    axios.post("http://localhost:3300/read",sendArray
    ).then(res => {
      console.log(res);
      console.log(res.data);
    });
  };
/////////////////////////////////////////////////////////////////////
  valueOnChageMoBa = event => {
    this.setState({moBaVa:event.target.value});
  }
  valueOnChageTuBa = event => {
    this.setState({tuBaVa:event.target.value});
  }
  valueOnChageWeBa = event => {
    this.setState({weBaVa:event.target.value});
  }
  valueOnChageThBa = event => {
    this.setState({thBaVa:event.target.value});
  }
  valueOnChageFrBa = event => {
    this.setState({frBaVa:event.target.value});
  }
  valueOnChageSaBa = event => {
    this.setState({saBaVa:event.target.value});
  }
  valueOnChageSuBa = event => {
    this.setState({suBaVa:event.target.value});
  }
/////////////////////////////////////////////////////////////////////
  valueOnChageMoBb = event => {
    this.setState({moBbVa:event.target.value});
  }
  valueOnChageTuBb = event => {
    this.setState({tuBbVa:event.target.value});
  }
  valueOnChageWeBb = event => {
    this.setState({weBbVa:event.target.value});
  }
  valueOnChageThBb = event => {
    this.setState({thBbVa:event.target.value});
  }
  valueOnChageFrBb = event => {
    this.setState({frBbVa:event.target.value});
  }
  valueOnChageSaBb = event => {
    this.setState({saBbVa:event.target.value});
  }
  valueOnChageSuBb = event => {
    this.setState({suBbVa:event.target.value});
  }
/////////////////////////////////////////////////////////////////////
  valueOnChageMoLa = event => {
    this.setState({moLaVa:event.target.value});
  }
  valueOnChageTuLa = event => {
    this.setState({tuLaVa:event.target.value});
  }
  valueOnChageWeLa = event => {
    this.setState({weLaVa:event.target.value});
  }
  valueOnChageThLa = event => {
    this.setState({thLaVa:event.target.value});
  }
  valueOnChageFrLa = event => {
    this.setState({frLaVa:event.target.value});
  }
  valueOnChageSaLa = event => {
    this.setState({saLaVa:event.target.value});
  }
  valueOnChageSuLa = event => {
    this.setState({suLaVa:event.target.value});
  }
/////////////////////////////////////////////////////////////////////
  valueOnChageMoLb = event => {
    this.setState({moLbVa:event.target.value});
  }
  valueOnChageTuLb = event => {
    this.setState({tuLbVa:event.target.value});
  }
  valueOnChageWeLb = event => {
    this.setState({weLbVa:event.target.value});
  }
  valueOnChageThLb = event => {
    this.setState({thLbVa:event.target.value});
  }
  valueOnChageFrLb = event => {
    this.setState({frLbVa:event.target.value});
  }
  valueOnChageSaLb = event => {
    this.setState({saLbVa:event.target.value});
  }
  valueOnChageSuLb = event => {
    this.setState({suLbVa:event.target.value});
  }
/////////////////////////////////////////////////////////////////////
  valueOnChageMoDa = event => {
    this.setState({moDaVa:event.target.value});
  }
  valueOnChageTuDa = event => {
    this.setState({tuDaVa:event.target.value});
  }
  valueOnChageWeDa = event => {
    this.setState({weDaVa:event.target.value});
  }
  valueOnChageThDa = event => {
    this.setState({thDaVa:event.target.value});
  }
  valueOnChageFrDa = event => {
    this.setState({frDaVa:event.target.value});
  }
  valueOnChageSaDa = event => {
    this.setState({saDaVa:event.target.value});
  }
  valueOnChageSuDa = event => {
    this.setState({suDaVa:event.target.value});
  }
/////////////////////////////////////////////////////////////////////
  valueOnChageMoDb = event => {
    this.setState({moDbVa:event.target.value});
  }
  valueOnChageTuDb = event => {
    this.setState({tuDbVa:event.target.value});
  }
  valueOnChageWeDb = event => {
    this.setState({weDbVa:event.target.value});
  }
  valueOnChageThDb = event => {
    this.setState({thDbVa:event.target.value});
  }
  valueOnChageFrDb = event => {
    this.setState({frDbVa:event.target.value});
  }
  valueOnChageSaDb = event => {
    this.setState({saDbVa:event.target.value});
  }
  valueOnChageSuDb = event => {
    this.setState({suDbVa:event.target.value});
  }


  componentDidMount(){
    const {dateArray} = this.props
    axios.post("http://localhost:3300/read/all",dateArray
    ).then(res => {
    console.log(res.data);

    this.setState({
      moBaVa : res.data[0].BAMENU, moBbVa : res.data[0].BBMENU, 
      moLaVa : res.data[0].LAMENU, moLbVa : res.data[0].LBMENU,
      moDaVa : res.data[0].DAMENU, moDbVa : res.data[0].DBMENU,
      /////////////////////////////////////////////////////////
      tuBaVa : res.data[1].BAMENU, tuBbVa : res.data[1].BBMENU,
      tuLaVa : res.data[1].LAMENU, tuLbVa : res.data[1].LBMENU,
      tuDaVa : res.data[1].DAMENU, tuDbVa : res.data[1].DBMENU,
      /////////////////////////////////////////////////////////
      weBaVa : res.data[2].BAMENU, weBbVa : res.data[2].BBMENU,
      weLaVa : res.data[2].LAMENU, weLbVa : res.data[2].LBMENU,
      weDaVa : res.data[2].DAMENU, weDbVa : res.data[2].DBMENU,
      /////////////////////////////////////////////////////////
      thBaVa : res.data[3].BAMENU, thBbVa : res.data[3].BBMENU,
      thLaVa : res.data[3].LAMENU, thLbVa : res.data[3].LBMENU,
      thDaVa : res.data[3].DAMENU, thDbVa : res.data[3].DBMENU,
      /////////////////////////////////////////////////////////
      frBaVa : res.data[4].BAMENU, frBbVa : res.data[4].BBMENU,
      frLaVa : res.data[4].LAMENU, frLbVa : res.data[4].LBMENU,
      frDaVa : res.data[4].DAMENU, frDbVa : res.data[4].DBMENU,
      /////////////////////////////////////////////////////////
      saBaVa : res.data[5].BAMENU, saBbVa : res.data[5].BBMENU,
      saLaVa : res.data[5].LAMENU, saLbVa : res.data[5].LBMENU,
      saDaVa : res.data[5].DAMENU, saDbVa : res.data[5].DBMENU,
      /////////////////////////////////////////////////////////
      suBaVa : res.data[6].BAMENU, suBbVa : res.data[6].BBMENU,
      suLaVa : res.data[6].LAMENU, suLbVa : res.data[6].LBMENU,
      suDaVa : res.data[6].DAMENU, suDbVa : res.data[6].DBMENU});
    });
  }

  render() {
    const { startDateHandleChange, endDateHandleChange,nextWeekHandle,nowWeekHandle,
      valueOnChageMoBa,valueOnChageTuBa,valueOnChageWeBa,valueOnChageThBa,valueOnChageFrBa,valueOnChageSaBa,valueOnChageSuBa,
      valueOnChageMoBb,valueOnChageTuBb,valueOnChageWeBb,valueOnChageThBb,valueOnChageFrBb,valueOnChageSaBb,valueOnChageSuBb,
      valueOnChageMoLa,valueOnChageTuLa,valueOnChageWeLa,valueOnChageThLa,valueOnChageFrLa,valueOnChageSaLa,valueOnChageSuLa,
      valueOnChageMoLb,valueOnChageTuLb,valueOnChageWeLb,valueOnChageThLb,valueOnChageFrLb,valueOnChageSaLb,valueOnChageSuLb,
      valueOnChageMoDa,valueOnChageTuDa,valueOnChageWeDa,valueOnChageThDa,valueOnChageFrDa,valueOnChageSaDa,valueOnChageSuDa,
      valueOnChageMoDb,valueOnChageTuDb,valueOnChageWeDb,valueOnChageThDb,valueOnChageFrDb,valueOnChageSaDb,valueOnChageSuDb } = this;
    const { startDateValue, endDateValue, dateArray, valueArray } = this.props;
    const MapToHeadComponent = dateArray.map(Adate => <FormDay date={Adate} key={Adate} />);

    return (
      <div>
        <h1>음식은 띄어쓰기로 구분해주세요</h1>
        <button onClick={nowWeekHandle}>이번 주 작성하기</button>
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
        <button onClick={nextWeekHandle}>다음주 작성하기</button>
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
                  <textarea name="moba" onChange={valueOnChageMoBa} value={this.state.moBaVa} />
                </td>
                <td id="BreakA">
                  <textarea name="tuba" onChange={valueOnChageTuBa} value={this.state.tuBaVa}/>
                </td>
                <td id="BreakA">
                  <textarea name="weba" onChange={valueOnChageWeBa} value={this.state.weBaVa}/>
                </td>
                <td id="BreakA">
                  <textarea name="thba" onChange={valueOnChageThBa} value={this.state.thBaVa}/>
                </td>
                <td id="BreakA">
                  <textarea name="frba" onChange={valueOnChageFrBa} value={this.state.frBaVa}/>
                </td>
                <td id="BreakA">
                  <textarea name="saba" onChange={valueOnChageSaBa} value={this.state.saBaVa}/>
                </td>
                <td id="BreakA">
                  <textarea name="suba" onChange={valueOnChageSuBa} value={this.state.suBaVa}/>
                </td>
              </tr>
              <tr>
                <td>B</td>
                <td id="BreakB">
                  <textarea name="mobb" onChange={valueOnChageMoBb} value={this.state.moBbVa}/>
                </td>
                <td id="BreakB">
                  <textarea name="tubb" onChange={valueOnChageTuBb} value={this.state.tuBbVa}/>
                </td>
                <td id="BreakB">
                  <textarea name="webb" onChange={valueOnChageWeBb} value={this.state.weBbVa}/>
                </td>
                <td id="BreakB">
                  <textarea name="thbb" onChange={valueOnChageThBb} value={this.state.thBbVa}/>
                </td>
                <td id="BreakB">
                  <textarea name="frbb" onChange={valueOnChageFrBb} value={this.state.frBbVa}/>
                </td>
                <td id="BreakB">
                  <textarea name="sabb" onChange={valueOnChageSaBb} value={this.state.saBbVa}/>
                </td>
                <td id="BreakB">
                  <textarea name="subb" onChange={valueOnChageSuBb} value={this.state.suBbVa}/>
                </td>
              </tr>
              <tr>
                <td rowSpan="2">중식</td>
                <td>A</td>
                <td id="LunchA">
                  <textarea name="mola" onChange={valueOnChageMoLa} value={this.state.moLaVa}/>
                </td>
                <td id="LunchA">
                  <textarea name="tula" onChange={valueOnChageTuLa} value={this.state.tuLaVa}/>
                </td>
                <td id="LunchA">
                  <textarea name="wela" onChange={valueOnChageWeLa} value={this.state.weLaVa}/>
                </td>
                <td id="LunchA">
                  <textarea name="thla" onChange={valueOnChageThLa} value={this.state.thLaVa}/>
                </td>
                <td id="LunchA">
                  <textarea name="frla" onChange={valueOnChageFrLa} value={this.state.frLaVa}/>
                </td>
                <td id="LunchA">
                  <textarea name="sala" onChange={valueOnChageSaLa} value={this.state.saLaVa}/>
                </td>
                <td id="LunchA">
                  <textarea name="sula" onChange={valueOnChageSuLa} value={this.state.suLaVa}/>
                </td>
              </tr>
              <tr>
                <td>B</td>
                <td id="LunchB">
                  <textarea name="molb" onChange={valueOnChageMoLb} value={this.state.moLbVa}/>
                </td>
                <td id="LunchB">
                  <textarea name="tulb" onChange={valueOnChageTuLb} value={this.state.tuLbVa}/>
                </td>
                <td id="LunchB">
                  <textarea name="welb" onChange={valueOnChageWeLb} value={this.state.weLbVa}/>
                </td>
                <td id="LunchB">
                  <textarea name="thlb" onChange={valueOnChageThLb} value={this.state.thLbVa}/>
                </td>
                <td id="LunchB">
                  <textarea name="frlb" onChange={valueOnChageFrLb} value={this.state.frLbVa}/>
                </td>
                <td id="LunchB">
                  <textarea name="salb" onChange={valueOnChageSaLb} value={this.state.saLbVa}/>
                </td>
                <td id="LunchB">
                  <textarea name="sulb" onChange={valueOnChageSuLb} value={this.state.suLbVa}/>
                </td>
              </tr>
              <tr>
                <td rowSpan="2">석식</td>
                <td>A</td>
                <td id="DinnerA">
                  <textarea name="moda" onChange={valueOnChageMoDa} value={this.state.moDaVa}/>
                </td>
                <td id="DinnerA">
                  <textarea name="tuda" onChange={valueOnChageTuDa} value={this.state.tuDaVa}/>
                </td>
                <td id="DinnerA">
                  <textarea name="weda" onChange={valueOnChageWeDa} value={this.state.weDaVa}/>
                </td>
                <td id="DinnerA">
                  <textarea name="thda" onChange={valueOnChageThDa} value={this.state.thDaVa}/>
                </td>
                <td id="DinnerA">
                  <textarea name="frda" onChange={valueOnChageFrDa} value={this.state.frDaVa}/>
                </td>
                <td id="DinnerA">
                  <textarea name="sada" onChange={valueOnChageSaDa} value={this.state.saDaVa}/>
                </td>
                <td id="DinnerA">
                  <textarea name="suda" onChange={valueOnChageSuDa} value={this.state.suDaVa}/>
                </td>
              </tr>
              <tr>
                <td>B</td>
                <td id="DinnerB">
                  <textarea name="modb" onChange={valueOnChageMoDb} value={this.state.moDbVa}/>
                </td>
                <td id="DinnerB">
                  <textarea name="tudb" onChange={valueOnChageTuDb} value={this.state.tuDbVa}/>
                </td>
                <td id="DinnerB">
                  <textarea name="wedb" onChange={valueOnChageWeDb} value={this.state.weDbVa}/>
                </td>
                <td id="DinnerB">
                  <textarea name="thdb" onChange={valueOnChageThDb} value={this.state.thDbVa}/>
                </td>
                <td id="DinnerB">
                  <textarea name="frdb" onChange={valueOnChageFrDb} value={this.state.frDbVa}/>
                </td>
                <td id="DinnerB">
                  <textarea name="sadb" onChange={valueOnChageSaDb} value={this.state.saDbVa}/>
                </td>
                <td id="DinnerB">
                  <textarea name="sudb" onChange={valueOnChageSuDb} value={this.state.suDbVa}/>
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
    dateArray: domitory.dateArray,
    valueArray :domitory.valueArray
  }),
  dispatch => ({
    DomitoryActions: bindActionCreators(domitoryAction, dispatch)
  })
)(DomitoryContainer);
