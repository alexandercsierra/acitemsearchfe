import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    margin: 0 auto;
    background: rgb(0,0,0);
    background-image: url('https://s3.amazonaws.com/spoonflower/public/design_thumbnails/0050/6144/rgrass_pattern_3x3_shop_preview.png');
    padding: 2%;
    border-radius: 5px;

    @media(max-width: 1425px){
        width:60%;
    }

    @media(max-width: 830px){
        width:85%;
    }

    @media(max-width: 580px){
        width:90%;
    }

    @media(max-width: 440px){
        width:100%;
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
    flex-direction: column;
    width: 25%;
    @media(max-width: 1425px){
        width: 35%;
    }
    @media(max-width: 620px){
        width: 45%;
    }
    @media(max-width: 390px){
        width: 48%;
    }
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
    font-size: 1.2rem;
    text-align: left;
    text-shadow: 2px 4px 3px rgba(0,0,0,0.75);
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
    @media(max-width: 940px){
        width: 90%;
    }
    @media(max-width: 575px){
        width: 100%;
    }
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
    width: 50%;
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
`;

export const RemoveButton = styled.button`
    border-radius: 5px;
    padding: 1%;
    border: none;
    font-size: 1rem;
    margin-bottom: 2%;
    width: 20%;
    background: red;
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
`;

export const InfoButton = styled.div`
    background: rgba(0,0,0,.3);
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
    background: #a46f3d;
    color: black;
    width: 100%;
    padding: .3%;
    margin-top: 0;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
`;

export const Collected = styled.div`
    display: flex;
    // background: #a46f3d;
    background: #5E8D6F;
    color: #ffd04f;
    width: 100%;
    padding: .3%;
    margin-top: 0;
    font-size: 1.3rem;
    @media(max-width: 500px){
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

`;

export const InputDiv = styled.div`
    width: 60%;
    margin: 0 auto;
`;

export const Check = styled.input`
`;

export const CollectedItem = styled.div`
    width: 70%;
`;