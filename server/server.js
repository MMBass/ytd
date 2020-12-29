const express = require('express');
const fs = require('fs');
const cors = require('cors');
const ytdl = require('ytdl-core');
// const youtube_dl = require('youtube-dl');

const app = express();
const PORT = process.env.PORT||5000;

app.use(cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  res.set("Access-Control-Expose-Headers", 'Content-Length');
  next();
});

// app.get('/test', async (req,res)=>{
//     try{
//         res.send(true);
//     }catch (err){
//         console.log(err)
//         res.status(500).send();
//     }

// });

app.get('/getInfo',async (req,res)=>{
    try{
        let v_id = req.query.v_id;
        let info = await ytdl.getInfo(v_id);
        let avilableFormats = [];
        console.log(v_id);

        info.formats.forEach(function(item, index, array) {  
            if(item.qualityLabel != null && item.mimeType.indexOf('mp4') >= 0 && item.mimeType.indexOf('mp4a') >= 0){
                avilableFormats.push({quality:item.qualityLabel,code:item.itag});
            } 
        });

        res.send(avilableFormats);
    }catch (err){
        console.log(err);
        res.status(500).send();
    }

});

app.get('/download',async (req,res)=>{
    try{
        var v_id = req.query.v_id;
        var formtCode = req.query.format;
        var YT_URL = `https://youtu.be/${v_id}`;
        console.log(YT_URL);
        let info = await ytdl.getInfo(v_id);
        res.header('Content-Disposition', 'attachment; filename="'+info.videoDetails.title+'.mp4"');
        let format = ytdl.chooseFormat(info.formats, { quality: formtCode });

        ytdl(YT_URL,{format}).pipe(res);
    }catch (err){
        console.log(err);
        res.status(500).send();
    }

});

app.listen(PORT, () => {
    console.log('Listening on port '+PORT);
});
