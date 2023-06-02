import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './AllListTabs.css';
import { Typography,Box } from '@mui/material';

function AllListTabs() {
    return (
        <Box>
            <Typography variant="h3" style={{margin:"60px"}}>All Lists</Typography>
        <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3"
            fill
            justify
        >
            <Tab eventKey="home" title="Trending" >
                <Container>
                    <Row>
                        <Col style={{ fontSize: "25px", fontWeight: 500, paddingTop: "15px" }}>David Miller</Col>
                        <Col style={{ textAlign: "right", fontSize: "25px", fontWeight: 500, paddingTop: "15px" }}>37.81</Col>
                    </Row>
                    <Row>
                        <Col style={{ paddingTop: "15px", fontSize: "20px" }}>GT</Col>
                        <Col style={{ textAlign: "right", fontWeight: 500, fontSize: "20px", color: "red", paddingTop: "15px" }}>-16.33%</Col>
                    </Row><br />
                </Container>
                <hr />
                <Container>
                    <Row>
                        <Col style={{ fontSize: "25px", fontWeight: 500, paddingTop: "15px" }}>David Miller</Col>
                        <Col style={{ textAlign: "right", fontSize: "25px", fontWeight: 500, paddingTop: "15px" }}>37.81</Col>
                    </Row>
                    <Row>
                        <Col style={{ paddingTop: "15px", fontSize: "20px" }}>GT</Col>
                        <Col style={{ textAlign: "right", fontWeight: 500, fontSize: "20px", color: "red", paddingTop: "15px" }}>-16.33%</Col>
                    </Row><br />
                </Container>
                <hr />
                <Container>
                    <Row>
                        <Col style={{ fontSize: "25px", fontWeight: 500, paddingTop: "15px" }}>David Miller</Col>
                        <Col style={{ textAlign: "right", fontSize: "25px", fontWeight: 500, paddingTop: "15px" }}>37.81</Col>
                    </Row>
                    <Row>
                        <Col style={{ paddingTop: "15px", fontSize: "20px" }}>GT</Col>
                        <Col style={{ textAlign: "right", fontWeight: 500, fontSize: "20px", color: "red", paddingTop: "15px" }}>-16.33%</Col>
                    </Row><br />
                </Container>
                <hr />
            </Tab>
            <Tab eventKey="profile" title="New Players">
            <Container>
                    <Row>
                        <Col style={{ fontSize: "25px", fontWeight: 500, paddingTop: "15px" }}>David Miller</Col>
                        <Col style={{ textAlign: "right", fontSize: "25px", fontWeight: 500, paddingTop: "15px" }}>37.81</Col>
                    </Row>
                    <Row>
                        <Col style={{ paddingTop: "15px", fontSize: "20px" }}>GT</Col>
                        <Col style={{ textAlign: "right", fontWeight: 500, fontSize: "20px", color: "red", paddingTop: "15px" }}>-16.33%</Col>
                    </Row><br />
                </Container>
                <hr />
                <Container>
                    <Row>
                        <Col style={{ fontSize: "25px", fontWeight: 500, paddingTop: "15px" }}>David Miller</Col>
                        <Col style={{ textAlign: "right", fontSize: "25px", fontWeight: 500, paddingTop: "15px" }}>37.81</Col>
                    </Row>
                    <Row>
                        <Col style={{ paddingTop: "15px", fontSize: "20px" }}>GT</Col>
                        <Col style={{ textAlign: "right", fontWeight: 500, fontSize: "20px", color: "red", paddingTop: "15px" }}>-16.33%</Col>
                    </Row><br />
                </Container>
                <hr />
                <Container>
                    <Row>
                        <Col style={{ fontSize: "25px", fontWeight: 500, paddingTop: "15px" }}>David Miller</Col>
                        <Col style={{ textAlign: "right", fontSize: "25px", fontWeight: 500, paddingTop: "15px" }}>37.81</Col>
                    </Row>
                    <Row>
                        <Col style={{ paddingTop: "15px", fontSize: "20px" }}>GT</Col>
                        <Col style={{ textAlign: "right", fontWeight: 500, fontSize: "20px", color: "red", paddingTop: "15px" }}>-16.33%</Col>
                    </Row><br />
                </Container>
                <hr />
            </Tab>

        </Tabs>
        </Box>
    );
}

export default AllListTabs;