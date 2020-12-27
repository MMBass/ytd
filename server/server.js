const express = require('express');
const fs = require('fs');
const cors = require('cors');
const ytdl = require('ytdl-core');
// const youtube_dl = require('youtube-dl');

const app = express();
app.use(cors());

const PORT = process.env.PORT||3000;

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