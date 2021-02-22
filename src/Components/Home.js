import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const StyledHome = styled.div`
    flex: 1 1 auto;
    padding: 20px;
    width: 100%;
    justify-content: center;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    h2 {
        color: black;
        font-size: 3rem;
        max-width: 1200px;
        text-align: center;
        text-transform: uppercase;
        margin-top: 0;
    }
    button {
        border: 1px;
        font-weight: bold;
        font-size: 2rem;
        border-radius: 10px;
        padding: 20px 30px;
        border-color: black;
        color: #fff;
        background: blue;
        letter-spacing: 3px;
        :hover {
            background: grey;
        }
    }
    @media screen and (max-width: 1200px) {
        h2 {
            font-size: 3.5rem;
            max-width: 800px;
        }
    }
`;

const Home = () => {
    let history = useHistory();

    const routeToForm = () => {
        history.push("/pizza");
    }

    return (
        <StyledHome>
            <h2>Your favorite food, delivered while coding</h2>
            <button onClick={routeToForm}>Pizza?</button>
        </StyledHome>
    )
}

export default Home;