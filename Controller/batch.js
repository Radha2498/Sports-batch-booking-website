const batch= require('../Model/batch');  

//batch

exports.batchBook = (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const contact_number = req.body.contact_number;
    const batch_time = req.body.batch_time ;
    const date= req.body.date;
    const day = req.body.day;     //i have taken date instread of city
    const area =req.body.area;      //new
    const catagory = req.body.catagory;   //new
    const batch_new = new batch({ name: name, email: email, contact_number: contact_number, batch_time: batch_time,date:date,day:day,area:area,catagory:catagory });
    batch_new.save().then(result => {
        res.status(200).json({ message: "Batch booked Sucessfully", batch: result })
    }).catch(err => {
        res.status(500).json({ message: err })
    })
}