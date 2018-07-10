const express = require("express");
const router = express.Router();
var form = require('../model/form');

router.post("/", function(req, res, next) {
  var mondayForm = new form();
  var tuedayForm = new form();
  var wendayForm = new form();
  var thudayForm = new form();
  var fridayForm = new form();
  var satdayForm = new form();
  var sundayForm = new form();

  mondayForm.DATE = req.body.day.MONDAY;
  mondayForm.BAMENU = req.body.monday.MOBA;
  mondayForm.BBMENU = req.body.monday.MOBB;
  mondayForm.LAMENU = req.body.monday.MOLA;
  mondayForm.LBMENU = req.body.monday.MOLB;
  mondayForm.DAMENU = req.body.monday.MODA;
  mondayForm.DBMENU = req.body.monday.MODB;

  tuedayForm.DATE = req.body.day.TUEDAY;
  tuedayForm.BAMENU = req.body.tueday.TUBA;
  tuedayForm.BBMENU = req.body.tueday.TUBB;
  tuedayForm.LAMENU = req.body.tueday.TULA;
  tuedayForm.LBMENU = req.body.tueday.TULB;
  tuedayForm.DAMENU = req.body.tueday.TUDA;
  tuedayForm.DBMENU = req.body.tueday.TUDB;

  wendayForm.DATE = req.body.day.WENDAY;
  wendayForm.BAMENU = req.body.wenday.WEBA;
  wendayForm.BBMENU = req.body.wenday.WEBB;
  wendayForm.LAMENU = req.body.wenday.WELA;
  wendayForm.LBMENU = req.body.wenday.WELB;
  wendayForm.DAMENU = req.body.wenday.WEDA;
  wendayForm.DBMENU = req.body.wenday.WEDB;

  thudayForm.DATE = req.body.day.THUDAY;
  thudayForm.BAMENU = req.body.thuday.THBA;
  thudayForm.BBMENU = req.body.thuday.THBB;
  thudayForm.LAMENU = req.body.thuday.THLA;
  thudayForm.LBMENU = req.body.thuday.THLB;
  thudayForm.DAMENU = req.body.thuday.THDA;
  thudayForm.DBMENU = req.body.thuday.THDB;

  fridayForm.DATE = req.body.day.FRIDAY;
  fridayForm.BAMENU = req.body.firday.FRBA;
  fridayForm.BBMENU = req.body.firday.FRBB;
  fridayForm.LAMENU = req.body.firday.FRLA;
  fridayForm.LBMENU = req.body.firday.FRLB;
  fridayForm.DAMENU = req.body.firday.FRDA;
  fridayForm.DBMENU = req.body.firday.FRDB;

  satdayForm.DATE = req.body.day.SATDAY;
  satdayForm.BAMENU = req.body.satday.SABA;
  satdayForm.BBMENU = req.body.satday.SABB;
  satdayForm.LAMENU = req.body.satday.SALA;
  satdayForm.LBMENU = req.body.satday.SALB;
  satdayForm.DAMENU = req.body.satday.SADA;
  satdayForm.DBMENU = req.body.satday.SADB;

  sundayForm.DATE = req.body.day.SUNDAY;
  sundayForm.BAMENU = req.body.sunday.SUBA;
  sundayForm.BBMENU = req.body.sunday.SUBB;
  sundayForm.LAMENU = req.body.sunday.SULA;
  sundayForm.LBMENU = req.body.sunday.SULB;
  sundayForm.DAMENU = req.body.sunday.SUDA;
  sundayForm.DBMENU = req.body.sunday.SUDB;

  console.log(req.body)
  if(req.body.pass === "withappcenter@@"){
  form.find({}, function(err,ans) {
    if(err) throw err;
    if(ans[0] == undefined) {
      mondayForm.save(function(err){
        if(err) {
          console.error(err);
          res.json({result:0});
          return;
        }
        return;
      })
    }else{
      form.update({DATE:mondayForm.DATE},{$set:{BAMENU:mondayForm.BAMENU,
                                                BBMENU:mondayForm.BBMENU,
                                                LAMENU:mondayForm.LAMENU,
                                                LBMENU:mondayForm.LBMENU,
                                                DAMENU:mondayForm.DAMENU,
                                                DBMENU:mondayForm.DBMENU}},{multi:true},function(err){
        if(err) throw err;
        return;
      })
    }
  }).where("DATE").equals(mondayForm.DATE)

  form.find({}, function(err,ans) {
    if(err) throw err;
    if(ans[0] == undefined) {
      tuedayForm.save(function(err){
        if(err) {
          console.error(err);
          res.json({result:0});
          return;
        }
        return;
      })
    }else{
      form.update({DATE:tuedayForm.DATE},{$set:{BAMENU:tuedayForm.BAMENU,
        BBMENU:tuedayForm.BBMENU,
        LAMENU:tuedayForm.LAMENU,
        LBMENU:tuedayForm.LBMENU,
        DAMENU:tuedayForm.DAMENU,
        DBMENU:tuedayForm.DBMENU}},{multi:true},function(err){
        if(err) throw err;
        return;
      })
    }
  }).where("DATE").equals(tuedayForm.DATE)

  form.find({}, function(err,ans) {
    if(err) throw err;
    if(ans[0] == undefined) {
      wendayForm.save(function(err){
        if(err) {
          console.error(err);
          res.json({result:0});
          return;
        }
        return;
      })
    }else{
      form.update({DATE:wendayForm.DATE},{$set:{BAMENU:wendayForm.BAMENU,
        BBMENU:wendayForm.BBMENU,
        LAMENU:wendayForm.LAMENU,
        LBMENU:wendayForm.LBMENU,
        DAMENU:wendayForm.DAMENU,
        DBMENU:wendayForm.DBMENU}},{multi:true},function(err){
        if(err) throw err;
        return;
      })
    }
  }).where("DATE").equals(wendayForm.DATE)

  form.find({}, function(err,ans) {
    if(err) throw err;
    if(ans[0] == undefined) {
      thudayForm.save(function(err){
        if(err) {
          console.error(err);
          res.json({result:0});
          return;
        }
        return;
      })
    }else{
      form.update({DATE:thudayForm.DATE},{$set:{BAMENU:thudayForm.BAMENU,
        BBMENU:thudayForm.BBMENU,
        LAMENU:thudayForm.LAMENU,
        LBMENU:thudayForm.LBMENU,
        DAMENU:thudayForm.DAMENU,
        DBMENU:thudayForm.DBMENU}},{multi:true},function(err){
        if(err) throw err;
        return;
      })
    }
  }).where("DATE").equals(thudayForm.DATE)

  form.find({}, function(err,ans) {
    if(err) throw err;
    if(ans[0] == undefined) {
      fridayForm.save(function(err){
        if(err) {
          console.error(err);
          res.json({result:0});
          return;
        }
        return;
      })
    }else{
      form.update({DATE:fridayForm.DATE},{$set:{BAMENU:fridayForm.BAMENU,
        BBMENU:fridayForm.BBMENU,
        LAMENU:fridayForm.LAMENU,
        LBMENU:fridayForm.LBMENU,
        DAMENU:fridayForm.DAMENU,
        DBMENU:fridayForm.DBMENU}},{multi:true},function(err){
        if(err) throw err;
        return;
      })
    }
  }).where("DATE").equals(fridayForm.DATE)

  form.find({}, function(err,ans) {
    if(err) throw err;
    if(ans[0] == undefined) {
      satdayForm.save(function(err){
        if(err) {
          console.error(err);
          res.json({result:0});
          return;
        }
        return;
      })
    }else{
      form.update({DATE:satdayForm.DATE},{$set:{BAMENU:satdayForm.BAMENU,
        BBMENU:satdayForm.BBMENU,
        LAMENU:satdayForm.LAMENU,
        LBMENU:satdayForm.LBMENU,
        DAMENU:satdayForm.DAMENU,
        DBMENU:satdayForm.DBMENU}},{multi:true},function(err){
        if(err) throw err;
        return;
      })
    }
  }).where("DATE").equals(satdayForm.DATE)

  form.find({}, function(err,ans) {
    if(err) throw err;
    if(ans[0] == undefined) {
      sundayForm.save(function(err){
        if(err) {
          console.error(err);
          res.json({result:0});
          return;
        }
        return;
      })
    }else{
      form.update({DATE:sundayForm.DATE},{$set:{BAMENU:sundayForm.BAMENU,
        BBMENU:sundayForm.BBMENU,
        LAMENU:sundayForm.LAMENU,
        LBMENU:sundayForm.LBMENU,
        DAMENU:sundayForm.DAMENU,
        DBMENU:sundayForm.DBMENU}},{multi:true},function(err){
        if(err) throw err;
        return;
      })
    }
  }).where("DATE").equals(sundayForm.DATE)
}
});


router.get("/date",function(req,res,next){
  let queryDate = req.query.date;
  let yearDate = queryDate.substring(0,4);
  let monthDate = queryDate.substring(4,6);
  let dateDate = queryDate.substring(6);
  const correctQueryDate = yearDate+"-"+monthDate+"-"+dateDate;
  form.find({},function(err,ans) {
    if(err) throw err;
    var sendJsonArray = [];
    console.log(ans[0].BAMENU);
    if (ans[0].BAMENU == ""&&ans[0].BBMENU == ""&&ans[0].LAMENU == ""&&ans[0].LBMENU == ""&&ans[0].DAMENU == ""&&ans[0].DBMENU == "") {
      sendJsonArray = [
        {
          MENU: "",
          TITLE: "점심",
          order: "0"
         },
         {
          MENU: "",
          TITLE: "저녁",
          order: "1"
         }
      ]

      res.setHeader('Content-type', 'application/json');
      res.send(sendJsonArray);
      res.end();
    }else{

    var i =0;
    var orderNum = 0;

    while (i != 5){
      if(ans[0].BAMENU != ""){
        let breakA = {
          MENU : ans[0].BAMENU,
          TITLE : "아침",
          order : orderNum
        }
        sendJsonArray.push(breakA)
        i++
        orderNum++
      }
      if(ans[0].BBMENU != ""){
        let breakB = {
          MENU : ans[0].BBMENU,
          TITLE : "아침",
          order : orderNum
        }
        sendJsonArray.push(breakB)
        i++
        orderNum++
      }
      if(ans[0].LAMENU != ""){
        let lunchA = {
          MENU : ans[0].LAMENU,
          TITLE : "점심",
          order : orderNum
        }
        sendJsonArray.push(lunchA)
        i++
        orderNum++
      }
      if(ans[0].LBMENU != ""){
        let lunchB = {
          MENU : ans[0].LBMENU,
          TITLE : "점심",
          order : orderNum
        }
        sendJsonArray.push(lunchB)
        i++
        orderNum++
      }
      if(ans[0].DAMENU != ""){
        let dinnerA = {
          MENU : ans[0].DAMENU,
          TITLE : "저녁",
          order : orderNum
        }
        sendJsonArray.push(dinnerA)
        i++
        orderNum++
      }
      if(ans[0].DBMENU != ""){
        let dinnerB = {
          MENU : ans[0].DBMENU,
          TITLE : "저녁",
          order : orderNum
        }
        sendJsonArray.push(dinnerB)
        i=5;
        orderNum++
      }else {
        i=5;
      }
    }
    res.setHeader('Content-type', 'application/json');
    res.send(sendJsonArray);
    res.end();
}
  }).where("DATE").equals(correctQueryDate)
})



router.get("/", function(req, res, next) {
  let today = new Date(),
      todayYear = today.getFullYear(),
      todayMonth = today.getMonth()+1,//월은 0부터시작합니다
      todayDate = today.getDate();
  if(todayMonth <10 ) {
    todayMonth = "0"+todayMonth;
  }
  if(todayDate <10 ) {
    todayDate = "0"+todayDate;
  }
  today = todayYear + "-" + todayMonth + "-" + todayDate;

  form.find({}, function(err, ans) {
    if(err) throw err;

    var sendJsonArray = [];
    if (ans[0] == undefined) {
      sendJsonArray = [
        {
          MENU: "",
          TITLE: "점심",
          order: "0"
         },
         {
          MENU: "",
          TITLE: "저녁",
          order: "1"
         }
      ]

      res.setHeader('Content-type', 'application/json');
      res.send(sendJsonArray);
      res.end();
    }else{

    var i =0;
    var orderNum = 0;

    while (i != 5){
      if(ans[0].BAMENU != ""){
        let breakA = {
          MENU : ans[0].BAMENU,
          TITLE : "아침",
          order : orderNum
        }
        sendJsonArray.push(breakA)
        i++
        orderNum++
      }
      if(ans[0].BBMENU != ""){
        let breakB = {
          MENU : ans[0].BBMENU,
          TITLE : "아침",
          order : orderNum
        }
        sendJsonArray.push(breakB)
        i++
        orderNum++
      }
      if(ans[0].LAMENU != ""){
        let lunchA = {
          MENU : ans[0].LAMENU,
          TITLE : "점심",
          order : orderNum
        }
        sendJsonArray.push(lunchA)
        i++
        orderNum++
      }
      if(ans[0].LBMENU != ""){
        let lunchB = {
          MENU : ans[0].LBMENU,
          TITLE : "점심",
          order : orderNum
        }
        sendJsonArray.push(lunchB)
        i++
        orderNum++
      }
      if(ans[0].DAMENU != ""){
        let dinnerA = {
          MENU : ans[0].DAMENU,
          TITLE : "저녁",
          order : orderNum
        }
        sendJsonArray.push(dinnerA)
        i++
        orderNum++
      }
      if(ans[0].DBMENU != ""){
        let dinnerB = {
          MENU : ans[0].DBMENU,
          TITLE : "저녁",
          order : orderNum
        }
        sendJsonArray.push(dinnerB)
        i=5;
        orderNum++
      }else {
        i=5;
      }
    }
    res.setHeader('Content-type', 'application/json');
    res.send(sendJsonArray);
    res.end();
    }
  }).where("DATE").equals(today)


});

router.post('/all',async function(req,res,next) {
  let iArray = [0,1,2,3,4,5,6,7];
  let i = 0;
console.log(req.body);
  iArray.map(function(row){
    if(row<7){
    form.find({},function(err,ans){
      if(err) throw err;
      else{
        if(ans[0] === undefined){
          var nullForm = new form();
          nullForm.BAMENU = ""
          nullForm.BBMENU = ""
          nullForm.LAMENU = ""
          nullForm.LBMENU = ""
          nullForm.DAMENU = ""
          nullForm.DBMENU = ""
          nullForm.DATE = req.body[row]
          nullForm.save(function(err){
            if(err) {
              console.error(err);
              res.json({result:0});
              return;
            }
            console.log("채워짐"+req.body[row])
            i=row
            return;
          })
        }
      }
    }).where("DATE").equals(req.body[row])}
      else{
        setTimeout(() => {
          form.find({$or:[{"DATE":req.body[0]},{"DATE":req.body[1]},{"DATE":req.body[2]},{"DATE":req.body[3]},
        {"DATE":req.body[4]},{"DATE":req.body[5]},{"DATE":req.body[6]}]},function(err,ans) {
        if(err) throw err;
        res.setHeader('Content-type','application/json');
        res.send(ans);
        res.end();
      }).sort({"DATE": 'asc'})
        }, 250);
      }
  })




})

module.exports = router;
