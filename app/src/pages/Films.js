import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { Link, Route } from 'react-router-dom';
// import LibraryCard from '../components/Library/LibraryCard';
import LibraryCard from '../components/Library/LibraryCard';
import "./css/Library.css";

const Films = () => (
        <div>    
            <LibraryCard />
        </div>
);

export default Films;