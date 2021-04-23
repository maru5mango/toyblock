import React, { useRef, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Item from './Item';
import Container from '@material-ui/core/Container';

export default function GridCard() {
  const [items, setItems] = useState([
    {
      index: 1,
      title: "Nubmer 1",
      description: "description"
    },
    {
      index: 2,
      title: "Nubmer 2",
      description: "description"
    },
    {
      index: 3,
      title: "Nubmer 3",
      description: "description"
    }
  ]);
  const nextId = useRef(4);
  const onCreate = () => {
    const i = nextId.current;
    const new_item = {
      index: i,
      title: `number${i}`,
      description: "description"
    };
    setItems((items) => items.concat(new_item));
    nextId.current+=1;
  }
  return (
    <Container maxWidth = "lg">
      <h1>Grid Card Design</h1>
      <Button variant="contained" color="primary" onClick={onCreate}>Create</Button>
      <Grid container lg={12} md={12} spacing={3} >
        {items.map(item =>(
          <Item index={item.index} title={item.title} description={item.description} />
        ))}
      </Grid>
    </Container>
  );
}
