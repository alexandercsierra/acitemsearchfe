import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: 0 auto;
    background: rgba(0,0,0,.4);
    padding: 2%;
    border-radius: 5px;

    @media(max-width: 830px){
        width:65%;
    }

    @media(max-width: 580px){
        width:80%;
    }

    @media(max-width: 440px){
        width:93%;
    }

`;

export const Input = styled.input`
    border-radius: 5px;
    padding: 2%;
    border: none;
    font-size: 1rem;
    margin-bottom: 2%;
`;

export const Select = styled.select`
    border-radius: 5px;
    border: none;
    font-size: 1rem;
    margin-bottom: 2%;
`;

export const TimeContainer = styled.div`
    display: flex;
    justify-content: center;
`;

export const Textarea = styled.textarea`
    border-radius: 5px;
    padding: 2%;
    border: none;
    font-size: 1rem;
    margin-bottom: 2%;
    resize: none;
`;

export const Label = styled.label`
    // border: 1px solid red;
    font-size: 1.2rem;
    text-align: left;
`;

export const Button = styled.button`
    margin: 0 auto;
    font-size: 1rem;
    width: 25%;
    padding: 2%
    margin-top: 3%;
    border: none;
    border-radius: 5px;
    border: 1px solid white;
    background: white;
    color: black;

    &:hover{
        background: transparent;
        color: white;
        border: 1px solid white;
        cursor: pointer;
    }
`;

export const SearchBar = styled.input`
    padding: 1%;
    font-size: 1rem;
    border-radius: 5px;
    width: 100%;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
`;

export const SearchContainer = styled.div`
    display: flex;
    margin: 0 auto;
    justify-content: space-around;
    @media(max-width: 775px){
        flex-direction: column-reverse;
        align-items: center;
    }
`;

export const SearchDiv = styled.div`
    width: 50%;
    margin: 0;
    z-index: 1;
`;

export const RowDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

export const NumInput=styled.input`
    border-radius: 5px;
    padding: 1%;
    border: none;
    font-size: 1rem;
    margin-bottom: 2%;
    width: 5%;
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
`;

export const RemoveButton = styled.button`
    border-radius: 5px;
    padding: 1%;
    border: none;
    font-size: 1rem;
    margin-bottom: 2%;
    width: 5%;
    background: red;
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
`;

export const InfoButton = styled.div`
    background: transparent;
    border: 1px solid white;
    color: white;
    font-size: .8rem;
    width: 20%;
    margin: 1% 0;
    border-radius: 5px;
    cursor: pointer;
    padding: 1% 0;
    &:hover{
        background: white;
        color: green;
    }
`;

export const SearchResults = styled.div`
    background: white;
    color: black;
    width: 100%;
    padding: .3%;
    margin-top: 0;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
`;

export const InputDiv = styled.div`
    width: 60%;
    margin: 0 auto;
`;