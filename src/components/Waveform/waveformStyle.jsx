import styled from 'styled-components';

const WaveformContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100px; width: 100%;
    background: transparent;
`;

const Wave = styled.div`
    width: 100%;
    height: 90px;
`;

const PlayButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    background: whitesmoke;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    padding-bottom: 3px;

    &:hover{
        background: #DDD
    }
`;

export {
    WaveformContainer,
    Wave,
    PlayButton,
}