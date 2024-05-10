import styled from "styled-components";

export const Home = styled.section`
    width: 75%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    color: var(--white);

    h2{
        font-family: var(--source-font);
        font-weight: 100;
        font-size: 9.6rem;
    }

    h1{
        font-family: var(--lora-font);
        font-weight: normal;
        font-size: 12.8rem;
    }

    p{
        font-family: var(--source-font);
        font-weight: normal;
        font-size: 3.6rem;
    }

    button{
        width: 100%;
        margin-top: 8.6rem;
        font-family: var(--lora-font);
        color: var(--brown);
        font-size: 3.5rem;
        font-weight: bold;
        padding: 2.8rem 13.3rem;
        border-radius: 2.2rem;
        border: none;
    }

    button:hover{
        background-color: var(--gray-one);
        color: var(--black);
        cursor: pointer;
    }
`;

export const Content = styled.section`
    width: 100%;
    height: 100%;
    position: relative;


    .left{
        width: 20%;
        height: 100%;
        background-color: var(--white);
        position: absolute;
        left: 0;
        display: flex;
        flex-direction: column;
        //justify-content: center;
        align-items: center;
        text-align: center;
        border-right: .2rem solid var(--black);
    }

    .left h1{
        font-family: var(--lora-font);
        font-weight: bold;
        font-size: 4rem;
        color: var(--black);
        margin-bottom: 4.4rem;
        margin-top: 10px;
    }

    .left li{
        font-family: var(--source-font);
        font-weight: normal;
        font-size: 3rem;
        list-style: none;
        color: var(--gray-one);
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }

    .left li:hover{
        background-color: var(--gray-one);
        color: var(--white);
        cursor: pointer;
        padding: 2px 10px;
    }

    .right{
        width: 80%;
        height: 100%;
        background-color: var(--gray-two);
        position: absolute;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .right .card{
        max-width: 80vw;
        background-color: var(--white);
        padding: 6rem;
        border-radius: 4rem;
        -webkit-border-radius: 4rem;
        -moz-border-radius: 4rem;
        -ms-border-radius: 4rem;
        -o-border-radius: 4rem;
    }

    .right .search{
        display: flex;
        justify-content: space-between;
        margin-bottom: 6rem;
    }

    .right .search input{
        border: none;
        border-bottom: .2rem solid var(--brown);
        width: 70%;
        font-size: 4.8rem;
        font-weight: bold;
        color: var(--gray-two);
    }

    .right .search button{
        width: 20%;
        margin-top: .6rem;
        font-family: var(--lora-font);
        background-color: var(--brown);
        color: var(--white);
        font-size: 3.5rem;
        font-weight: bold;
        padding: .8rem .3rem;
        border-radius: 1.2rem;
        border: none;
        -webkit-border-radius: 1.2rem;
        -moz-border-radius: 1.2rem;
        -ms-border-radius: 1.2rem;
        -o-border-radius: 1.2rem;
        cursor: pointer;
    }

    .right h1{
        color: var(--black);
        font-family: var(--source-font);
        font-size: 6.4rem;
        font-weight: 500;
    }

    .right h2{
        color: var(--gray-one);
        font-family: var(--source-font);
        font-size: 3.2rem;
        font-weight: 500;
        margin-bottom: 6rem;
    }

    .right p{
        color: var(--brown);
        font-family: var(--source-font);
        font-size: 3.2rem;
        font-weight: 500;
        margin-bottom: 3rem;
    }

    .right span{
        color: var(--gray-one);
        font-family: var(--source-font);
        font-size: 3.2rem;
        font-weight: 100;
        font-style: italic;
        padding-left: 3rem;
        border-left: .4rem solid var(--brown);
    }
`;