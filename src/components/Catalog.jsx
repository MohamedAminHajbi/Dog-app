import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import Card from './Card';
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CustomButton from './CustomButton';
import styled from '@emotion/styled';

const Catalog = () => {
  const [dogs, setDogs] = useState([]);
  const [sortedDogs, setSortedDogs] = useState([]);

  const SortButton = styled(Link)(({ theme }) => ({
    fontFamily: 'Roboto',
    textDecoration: 'none',
    width: '152px',
    backgroundColor: '#A22948',
    color: '#fff',
    fontWeight: '500',
    fontSize: '14px',
    cursor: 'pointer',
    padding: '0.5rem 1.25rem',
    borderRadius: '7px',
    textTransform: 'none',
    display: 'block',
    border: '2px solid transparent',
    '&:hover': {
      backgroundColor: '#fff',
      color: '#A22948',
      borderColor: '#A22948',
    },
  }));

  const sortDogsByLifeSpan = () => {
    const sortedArray = [...dogs];
    sortedArray.sort((a, b) => {
      const lifeSpanA = parseInt(a.life_span.split(' ')[0]);
      const lifeSpanB = parseInt(b.life_span.split(' ')[0]);
      return lifeSpanA - lifeSpanB;
    });
    setSortedDogs(sortedArray);
  };

  useEffect(() => {
    const fetchDogsData = async () => {
      try {
        const req = await fetch('https://api.thedogapi.com/v1/breeds');
        const data = await req.json();
        setDogs(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDogsData();
  }, []);

  return (
    <div style={{ paddingTop: '80px' }}>
      <Row className="justify-content-end mb-3">
        <Col xs="auto">
          <SortButton onClick={sortDogsByLifeSpan}>Sort By Life Span</SortButton>
        </Col>
      </Row>
      <Row xs={1} sm={2} md={3} lg={4} xl={5} xxl={6} className="g-4" style={{ paddingTop: '10px' }}>
        {sortedDogs.length > 0 ? (
          sortedDogs.map((dog) => (
            // Rendering sorted dogs
            <Col key={dog.id}>
              <Link to={`/${dog.name}`} style={{ textDecoration: 'none' }}>
                <Card image={dog.image.url} name={dog.name} bredFor={dog.bred_for} className="catalog-card" />
              </Link>
            </Col>
          ))
        ) : (
          dogs.map((dog) => (
            // Rendering original dogs array
            <Col key={dog.id}>
              <Link to={`/${dog.name}`} style={{ textDecoration: 'none' }}>
                <Card image={dog.image.url} name={dog.name} bredFor={dog.bred_for} className="catalog-card" />
              </Link>
            </Col>
          ))
        )}
      </Row>
    </div>
  );
};

export default Catalog;
