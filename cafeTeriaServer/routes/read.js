const express = require("express");
const router = express.Router();
var form = require('../model/form');

router.get("/date",function(req,res,next){
  let queryDate = req.query.date;
  

  form.find({},function(err,ans) {
    if(err) throw err;
    var sendJsonArray = [];
    if (ans[0].LunchMenu == ""&&ans[0].DinnerMenu == "") {
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

    while (i != 2){
      if(ans[0].LunchMenu != ""){
        let Lunch = {
          MENU : ans[0].LunchMenu,
          TITLE : "점심",
          order : orderNum
        }
        sendJsonArray.push(Lunch)
        i++
        orderNum++
      }
      if(ans[0].DinnerMenu != ""){
        let Dinner = {
          MENU : ans[0].DinnerMenu,
          TITLE : "저녁",
          order : orderNum
        }
        sendJsonArray.push(Dinner)
        i=2;
        orderNum++
      }else {
        i=2;
      }
    }
    res.setHeader('Content-type', 'application/json');
    res.send(sendJsonArray);
    res.end();
}
  }).where("DATE").equals(queryDate)
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
  today = todayYear + "" + todayMonth + "" + todayDate;

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

    while (i != 2){
      if(ans[0].LunchMenu != ""){
        let Lunch = {
          MENU : ans[0].LunchMenu,
          TITLE : "점심",
          order : orderNum
        }
        sendJsonArray.push(Lunch)
        i++
        orderNum++
      }
      if(ans[0].DinnerMenu != ""){
        let Dinner = {
          MENU : ans[0].DinnerMenu,
          TITLE : "저녁",
          order : orderNum
        }
        sendJsonArray.push(Dinner)
        i=2;
        orderNum++
      }else {
        i=2;
      }
    }
    res.setHeader('Content-type', 'application/json');
    res.send(sendJsonArray);
    res.end();
    }
  }).where("DATE").equals(today)


});

router.post('/all',async function(req,res,next) {
  let iArray = [0,1,2,3,4,5,6];
  let i = 0;
  iArray.map(function(row){
    if(row<6){
    form.find({},function(err,ans){
      if(err) throw err;
      else{
        if(ans[0] === undefined){
          var nullForm = new form();
          nullForm.LunchMenu = ""
          nullForm.DinnerMenu = ""
          nullForm.DATE = req.body.date[row]
          nullForm.save(function(err){
            if(err) {
              console.error(err);
              res.json({result:0});
              return;
            }
            console.log("채워짐"+req.body.date[row])
            i=row
            return;
          })
        }
      }
    }).where("DATE").equals(req.body.date[row])}
      else{
        setTimeout(() => {
          form.find({$or:[{"DATE":req.body.date[0]},{"DATE":req.body.date[1]},{"DATE":req.body.date[2]},{"DATE":req.body.date[3]},
        {"DATE":req.body.date[4]},{"DATE":req.body.date[5]}]},function(err,ans) {
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
