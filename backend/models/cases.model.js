const mon=require('mongoose')
const caseSchema=new mon.Schema({
    petitioner_name:String,
    petitioner_advocate:String,
    respondent_name:String,
    respondent_advocate:String,
    first_hearing:String,
    recent_hearing:String,
    caseNumber:String
},{collection:'cases'})
const casemodel=mon.model('cases',caseSchema)
module.exports=casemodel;
