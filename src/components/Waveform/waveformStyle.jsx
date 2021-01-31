import styled from 'styled-components';

const WaveformContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100px; width: 100%;
    background: transparent;
`;

const Wave = styled.div`
    width: 100%;
    height: 90px;
`;

const PlayButton = styled.button`
margin-top: 1100px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 100px;
  background: #EFEFEF;
  border-radius: 50%;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 15px;
  &:hover {
    background: #DDD;
  }
`;

export {
    WaveformContainer,
    Wave,
    PlayButton,
}