import React, { Component } from 'react';
import { Card, ListGroup } from 'react-bootstrap';

class Pckages extends Component {
    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', padding: 30 }}>
                <div><h2>Packages Page</h2>
                    <Card style={{ width: '18rem' }}>
                        <ListGroup>
                            <ListGroup.Item>Taquiza 2 meats </ListGroup.Item>
                            <ListGroup.Item>Taquiza 3 meats </ListGroup.Item>
                            <ListGroup.Item>Taquiza 3 meats plus Qesadillas </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </div>
            </div>
        );
    }
}

export default Packages;
