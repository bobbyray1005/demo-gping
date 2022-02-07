const express = require('express');
const router = express.Router();

const str = [
    {
        name: "Codr Kai",
        msg: "This is my first tweet!",
        username: "codrkai"
    },
    {
        name: "Samantha Kai",
        msg: "React JS is so simple!",
        username: "samanthakai"
    },
    {
        name: "John K",
        msg: "Sweep the leg!",
        username: "johnk"
    }
];

const users = [
    {
        username: "Codr Kai"
    },
    {
        username: "Samantha Kai"
    },
    {
        username: "John K"
    }
]

router.get('/tweets', (req, res)=>{
    res.end(JSON.stringify(str));
});

router.get('/alluser', (req, res)=>{
    res.end(JSON.stringify(users));
});

router.post('/addtweet', (req, res)=>{
    const isValid = true;
    if (isValid) {
        str.push({
            name: req.body.username,
            msg: req.body.content,
            username: req.body.contact
        });
    } else {
        console.log('error')
    }
    res.redirect('/tweets');
    res.send(req.body.inputUsername + ' added');
});


router.post('/adduser', (req, res)=>{
    const isValid = true;
    if (isValid) {
        users.push({
            username: req.body.inputUsername,
        });
    } else {
        console.log('error')
    }
    res.redirect('/alluser');
    res.send(req.body.inputUsername + ' added');
}
)

module.exports = router;