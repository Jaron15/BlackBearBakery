import React from "react";
import ControlledCarousel from '../components/Carousel';
import { Container } from 'react-bootstrap';
import Bio from '../components/Bio';
import TodoList from "../components/ToDoList";



const Home = () => {
  return (
    <div className="container">
      <Container>
        <ControlledCarousel />
        <Bio />
        <TodoList />
      </Container>
    </div>
  );
};


export default Home;
