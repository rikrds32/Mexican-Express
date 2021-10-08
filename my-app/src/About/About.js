about

import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', padding: 30 }}>
                <div><h2>Mexican Express comenzo con el deseo de fusionar la cultura gastronomica del Norte y Sur de Mexico,
                    obteniendo lo mejor de los sabores de ambas culturas.
                    Chef Elizondo por la parte del norte trayendo los sabores de la carne a la parrilla, por otro lado
                    Ricardo aportando con su expiencia en la comida de la Ciudad de Mexico y Sur del paiz.

                    Mexican Express begins with the idea of a fusion between the traditional gastronomy from the North and South of Mexico,
                    bringing the best from both wolrds.
                    Chef Elizondo bringing the flavors of the grill, and Ricardo with his experience in food from Mexico City and South of Mexico.</h2>
                </div>
            </div>
        );
    }
}

export default About;
