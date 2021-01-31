import React from 'react';
import ReactPlayer from 'react-player';
import { Button, ButtonLabel } from './audioplayer';
import WrapperMain from '../Wrapper/wrapper';

export default function CreatePlayer(){
    // var userUpload = "2";
    // document.getElementById('(user-file-upload').addEventListener("click", userUpload)
    var userUpload = document.getElementById('audioUpload');
    // const userUpload = input.files;

    return (
        <WrapperMain>
        <Button type="file" id="user-file-upload" value={userUpload} hidden/>
        <ButtonLabel for="user-file-upload"> Upload audio file</ButtonLabel>
        <ReactPlayer 
        url={userUpload}
        playing={false}
        controls={false}

        />
        </WrapperMain>
    );
};