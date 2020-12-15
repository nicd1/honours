import React from 'react';
import ReactPlayer from 'react-player';
import { Button } from './audioplayer';

export default function CreatePlayer(){
    // var userUpload = "2";
    // document.getElementById('(user-file-upload').addEventListener("click", userUpload)
    var userUpload = document.getElementById('audioUpload');
    // const userUpload = input.files;

    return (
        <>
        <h2>Upload an MP3 file...</h2>
        <Button type="file" id="user-file-upload" value={userUpload}/>
        <ReactPlayer 
        url={userUpload}
        playing={false}
        controls={false}

        />
        </>
    );
};