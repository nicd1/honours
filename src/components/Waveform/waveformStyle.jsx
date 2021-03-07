import styled from 'styled-components';

const WaveformContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%; width: 100%;
    background: transparent;
    margin-top: 130px;
    margin-bottom: 130px;
`;

const Wave = styled.div`
    width: 100%;
    height: 300px;
`;

const PlayButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: auto;
  background: #EFEFEF;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  padding: 15px;
  :hover {
       color: #ebeaea;
       background-color: #9b9b9b;
       border-color: #bababa;
   }
`;

export {
    WaveformContainer,
    Wave,
    PlayButton,
}