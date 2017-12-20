import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

class Layout extends React.Component {
  render() {
    return (
      <div style={{paddingTop: 10}}>
        <Grid>
          <Row>
            <Col smHidden md={3}/>
            <Col md={6}>
              <div style={{textAlign: "center"}}>{this.props.children}</div>
            </Col>
            <Col smHidden md={3}/>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Layout;