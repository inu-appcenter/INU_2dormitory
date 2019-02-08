const express = require("express")
const router = express.Router()
const form = require('../model/form')

router.post("/",async (req,res) => {

    
    let monForm = new form()
    let tueForm = new form()
    let wenForm = new form()
    let thuForm = new form()
    let friForm = new form()
    let satForm = new form()

    monForm.DATE = req.body.day.monday
    monForm.LunchMenu = req.body.monday.LunchMenu
    monForm.DinnerMenu = req.body.monday.DinnerMenu

    tueForm.DATE = req.body.day.tueday
    tueForm.LunchMenu = req.body.tueday.LunchMenu
    tueForm.DinnerMenu = req.body.tueday.DinnerMenu

    wenForm.DATE = req.body.day.wenday
    wenForm.LunchMenu = req.body.wenday.LunchMenu
    wenForm.DinnerMenu = req.body.wenday.DinnerMenu

    thuForm.DATE = req.body.day.thuday
    thuForm.LunchMenu = req.body.thuday.LunchMenu
    thuForm.DinnerMenu = req.body.thuday.DinnerMenu

    friForm.DATE = req.body.day.friday
    friForm.LunchMenu = req.body.friday.LunchMenu
    friForm.DinnerMenu = req.body.friday.DinnerMenu

    satForm.DATE = req.body.day.satday
    satForm.LunchMenu = req.body.satday.LunchMenu
    satForm.DinnerMenu = req.body.satday.DinnerMenu



    //월요일 입력
    await form.find({}, function(err,ans) {
        if(err) throw err;
        if(ans[0] == undefined) {
          monForm.save(function(err){
            if(err) {
              console.error(err);
              res.json({result:0});
              return;
            }
            return;
          })
        }else{
          form.update({DATE:monForm.DATE},
            {$set:{
                LunchMenu:monForm.LunchMenu,
                DinnerMenu:monForm.DinnerMenu}},{multi:true},function(err){
            if(err) throw err;
            return;
          })
        }
      }).where("DATE").equals(monForm.DATE)

      
    //화요일입력
    await form.find({}, function(err,ans) {
    if(err) throw err;
    if(ans[0] == undefined) {
        tueForm.save(function(err){
        if(err) {
            console.error(err);
            res.json({result:0});
            return;
        }
        return;
        })
    }else{
        form.update({DATE:tueForm.DATE},
        {$set:{
            LunchMenu:tueForm.LunchMenu,
            DinnerMenu:tueForm.DinnerMenu}},{multi:true},function(err){
        if(err) throw err;
        return;
        })
    }
    }).where("DATE").equals(tueForm.DATE)


    //수요일입력
    await form.find({}, function(err,ans) {
    if(err) throw err;
    if(ans[0] == undefined) {
        wenForm.save(function(err){
        if(err) {
            console.error(err);
            res.json({result:0});
            return;
        }
        return;
        })
    }else{
        form.update({DATE:wenForm.DATE},
        {$set:{
            LunchMenu:wenForm.LunchMenu,
            DinnerMenu:wenForm.DinnerMenu}},{multi:true},function(err){
        if(err) throw err;
        return;
        })
    }
    }).where("DATE").equals(wenForm.DATE)

    //목요일입력
    await form.find({}, function(err,ans) {
    if(err) throw err;
    if(ans[0] == undefined) {
        thuForm.save(function(err){
        if(err) {
            console.error(err);
            res.json({result:0});
            return;
        }
        return;
        })
    }else{
        form.update({DATE:thuForm.DATE},
        {$set:{
            LunchMenu:thuForm.LunchMenu,
            DinnerMenu:thuForm.DinnerMenu}},{multi:true},function(err){
        if(err) throw err;
        return;
        })
    }
    }).where("DATE").equals(thuForm.DATE)

    //금요일입력
    await form.find({}, function(err,ans) {
    if(err) throw err;
    if(ans[0] == undefined) {
        friForm.save(function(err){
        if(err) {
            console.error(err);
            res.json({result:0});
            return;
        }
        return;
        })
    }else{
        form.update({DATE:friForm.DATE},
        {$set:{
            LunchMenu:friForm.LunchMenu,
            DinnerMenu:friForm.DinnerMenu}},{multi:true},function(err){
        if(err) throw err;
        return;
        })
    }
    }).where("DATE").equals(friForm.DATE)

    //토요일입력
    await form.find({}, function(err,ans) {
        if(err) throw err;
        if(ans[0] == undefined) {
            satForm.save(function(err){
            if(err) {
                console.error(err);
                res.json({result:0});
                return;
            }
            res.json({result:1})
            return;
            })
        }else{
            form.update({DATE:satForm.DATE},
            {$set:{
                LunchMenu:satForm.LunchMenu,
                DinnerMenu:satForm.DinnerMenu}},{multi:true},function(err){
            if(err) throw err;
            res.json({result:1})
            return;
            })
        }
        }).where("DATE").equals(satForm.DATE)
})

module.exports = router