const Cont= require('../Model/contact'); 


exports.contact = (req, res, next) => {
    const uname = req.body.uname;
    const email = req.body.email;
    const note = req.body.note;
    
    const contact = new Cont({ uname:uname, email: email, note:note});
    contact.save().then(result => {
        res.status(200).json({ message: "Message Sent  Sucessfully", Cont: result })
    }).catch(err => {
        res.status(500).json({ message: err })
    })
}