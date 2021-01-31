import styled from 'styled-components';

const Button = styled.input`
margin-left: 60px;
`;

const ButtonLabel = styled.label`
    background-color: #e1394f;
    color: whitesmoke;
    padding: 0.5rem;
    border: 1px solid #f5f5f5;
    border-radius: 0.55rem;
    cursor: pointer;
    font-size: 20px;
    box-shadow: 5px 10px 10px rgb(30, 30, 31);
    text-shadow: none;

   :hover {
       color: #ebeaea;
       background-color: #962232;
       border-color: #bababa;
   }
`;

export {
    Button,
    ButtonLabel,
}