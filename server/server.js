const express = require('express');
const fs = require('fs');
const cors = require('cors');
const ytdl = require('ytdl-core');
// const youtube_dl = require('youtube-dl');

const app = express();
const PORT = process.env.PORT||3000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  res.set("Access-Control-Expose-Headers", 'Content-Length');
  next();
});

app.get('/test', async (req,res)=>{
    try{
        res.send({true});
    }catch (err){
        console.log(err)
        res.status(500).send();
    }

});


app.get('/download',async (req,res)=>{
    try{
        var v_id = req.query.v_id;
        var formtCode = req.query.format;
        var URL = `https://youtu.be/${v_id}`;
       
        let info = await ytdl.getInfo(v_id);
        console.log(info.videoDetails)
        res.header('Content-Disposition', 'attachment; filename="'+info.videoDetails.title+'.mp4"');
        let format = ytdl.chooseFormat(info.formats, { quality: formtCode });

        ytdl(URL,{format}).pipe(res);
    }catch (err){
        console.log(err)
        res.status(500).send();
    }

});

app.listen(3000, () => {
    console.log('Listening on port '+PORT);
});
