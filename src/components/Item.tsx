import React from 'react';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';

const Style =styled.div`
    position: relative;
    h2{ 
        text-align: center;
        margin: 1rem;
        padding: 0.5rem auto;
    }
    p{
        padding: 1rem;
        margin: 0;
    }
`;

const ImgStyle = styled.img`
    width: 100%;
    height: 320px;
`;

interface Iprops{
    index: number;
    title: string;
    description: string;
}
function Item({index, title, description}: Iprops) {
    return (
    <Grid item xs={6} md={4} lg={3}>
        <Style>
            <h2>{title}</h2>
            <ImgStyle src={`https://placeimg.com/320/320/${index}`} />
            <p>{description}</p>
        </Style>
    </Grid>
    )
}

export default Item;
