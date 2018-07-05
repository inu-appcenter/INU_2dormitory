const express = require("express");
const router = express.Router();
var form = require('../model/form');

router.post("/", function(req, res, next) {
  /*var testForm = new form();
  testForm.DATE = "this is date";
  testForm.BAMENU = "this is breakAmenu";
  testForm.BBMENU = "this is breakBmenu";
  testForm.LAMENU = "this is lunchAmenu";
  testForm.LBMENU = "this is lunchBmenu";
  testForm.DAMENU = "this is dinnerAmenu";
  testForm.DBMENU = "this is dinnerBmenu";

  testForm.save(function(err) {
    if(err) {
      console.error(err);
      res.json({result: 0});
      return;
    }

    res.json({result: 1});
  });*/

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

  mondayForm.save(function(err) {
    if(err) {
      console.error(err);
      res.json({result: 0});
      return;
    }
    tuedayForm.save(function(err) {
      if(err) {
        console.error(err);
        res.json({result: 0});
        return;
      }
      wendayForm.save(function(err) {
        if(err) {
          console.error(err);
          res.json({result: 0});
          return;
        }
        thudayForm.save(function(err) {
          if(err) {
            console.error(err);
            res.json({result: 0});
            return;
          }
          fridayForm.save(function(err) {
            if(err) {
              console.error(err);
              res.json({result: 0});
              return;
            }
            satdayForm.save(function(err) {
              if(err) {
                console.error(err);
                res.json({result: 0});
                return;
              }
              sundayForm.save(function(err) {
                if(err) {
                  console.error(err);
                  res.json({result: 0});
                  return;
                }
            
                res.json({result: 1});
              });
            });
          });
        });
      });
    });
  });

  console.log(req.body);
});

router.get("/", function(req, res, next) {
  console.log(req.body);
  res.send(true);
});

module.exports = router;
