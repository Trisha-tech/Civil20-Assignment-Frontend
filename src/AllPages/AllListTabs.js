import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './AllListTabs.css';
import { Typography, Box } from '@mui/material';

function AllListTabs() {
    const [players, setPlayers] = useState([]);

    const fetchData = () => {
        axios
            .get("https://civil20-backend.onrender.com/players/all-players")
            .then(response => {
                setPlayers(response.data.players);
                console.log(response.data.players);
            })
            .catch(error => {
                console.log({ error });
            })
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <Box>
            <Typography className='heading' variant="h3" style={{ margin: "4%", fontWeight: 700 }}>All Lists</Typography>
            <Tabs
                defaultActiveKey="profile"
                id="uncontrolled-tab-example"
                className="mb-3"
                fill
                justify
            >
                <Tab eventKey="home" title="Trending" >
                    {players.map(player => (
                        <Container key={player.id}>
                            <Row>
                                <Col style={{ fontSize: "25px", fontWeight: 500, paddingTop: "15px" }}>{player.name}</Col>
                                <Col style={{ textAlign: "right", fontSize: "25px", fontWeight: 500, paddingTop: "15px" }}>{player.score}</Col>
                            </Row>
                            <Row>
                                <Col style={{ paddingTop: "15px", fontSize: "20px" }}>{player.country}</Col>
                                <Col style={{ textAlign: "right", fontWeight: 500, fontSize: "20px", color: "red", paddingTop: "15px" }}>{player.percentage}</Col>
                            </Row><br /><hr />
                        </Container>

                    ))}
                </Tab>
                <Tab eventKey="profile" title="New Players">
                    {players.map(player => (
                        <Container key={player.id}>
                            <Row>
                                <Col style={{ fontSize: "25px", fontWeight: 500, paddingTop: "15px" }}>{player.name}</Col>
                                <Col style={{ textAlign: "right", fontSize: "25px", fontWeight: 500, paddingTop: "15px" }}>{player.score}</Col>
                            </Row>
                            <Row>
                                <Col style={{ paddingTop: "15px", fontSize: "20px" }}>{player.country}</Col>
                                <Col style={{ textAlign: "right", fontWeight: 500, fontSize: "20px", color: "red", paddingTop: "15px" }}>{player.percentage}</Col>
                            </Row><br /><hr />
                        </Container>

                    ))}
                </Tab>
            </Tabs>
        </Box>
    );
}

export default AllListTabs;