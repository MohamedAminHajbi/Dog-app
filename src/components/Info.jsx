import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, List, ListItem, ListItemText, ListItemIcon, Card, CardContent, CardMedia, Box } from '@mui/material';

function Info() {
  const [dog, setDog] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    const fetchDogData = async () => {
      try {
        const req = await fetch(`https://api.thedogapi.com/v1/breeds/search?q=${name}`);
        const data = await req.json();
        setDog(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDogData();
  }, [name]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' , paddingTop:"90px"}}>
      <section style={{alignItems: "center" }}>
        {dog.map((item) => (
          <Box key={item.key} sx={{ width: 'fit-content' }}>
            <Card>
              <CardMedia
                component="img"
                src={`https://cdn2.thedogapi.com/images/${item.reference_image_id}.jpg`}
                alt=""
                sx={{ width: '100%', height: '400px' }}
              />
              <CardContent>
                <Typography variant="h3">{item.name}</Typography>
                {item.description && <Typography>{item.description}</Typography>}

                <List>
                  <ListItem>
                    <ListItemIcon>Bred For:</ListItemIcon>
                    <ListItemText primary={item.bred_for} />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>Height: </ListItemIcon>
                    <ListItemText primary={item.height.metric} />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>Weight: </ListItemIcon>
                    <ListItemText primary={item.weight.metric} />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>Breed Group: </ListItemIcon>
                    <ListItemText primary={item.breed_group} />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>Lifespan:</ListItemIcon>
                    <ListItemText primary={item.life_span} />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>Temperament:</ListItemIcon>
                    <ListItemText primary={item.temperament} />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Box>
        ))}
      </section>
    </div>
  );
}

export default Info;
