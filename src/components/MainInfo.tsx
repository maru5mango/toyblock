import React from 'react'
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import Container from '@material-ui/core/Container';

const Style = styled.div`
    height: 500px;
    background: linear-gradient(to bottom, rgba(0,0,0,0)
        39%,rgba(0,0,0,0)
        41%,rgba(0,0,0,0.65)
        100%),
        url('https://placeimg.com/1500/1500/any'),
         #1c1c1c;
    background-repeat: no-repeat;
    width: 100%;
    background-size: 100%, cover;
    background-position: center, center;
    position: relative;
`;

const TextArea = styled.div`
    position: absolute;
    max-width: 500px;
    bottom: 4rem;  
    left: 4rem;
    h1 {
        color: white;
    }
    p {
        color: white;
        font-size: 1rem;
        height: 60px;
        overflow: hidden;
    }
`;

interface IProps{
    title: string;
    description: string;
    link: string;
}

function MainInfo({title, description, link}: IProps){
    console.log(title)
    return (
        <Container>
            <Style>
                <div>
                <TextArea>
                    <h1>{title}</h1>
                    <p>{description}</p>
                    <Button variant="contained" color="primary">
                        <Link to ={`${link}`} style={{textDecoration : 'none', color: 'white'}}>More</Link>
                    </Button>
                </TextArea>
                </div>
            </Style>
        </Container>
    )
}

export default MainInfo;
