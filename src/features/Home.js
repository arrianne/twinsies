import React, { Component } from 'react';
import { Image, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export default class Home extends Component {

constructor(props) {

  super(props);

  const allPhotos = [
   {
    id: 'randomstringimadeup43454356546',
    url: 'https://baconmockup.com/300/200'
   },
   {
    id: 'randomstringimadeup43523526534565',
    url: 'https://baconmockup.com/300/200'
   },
   {
    id: 'randomstringimadeup433245234534',
    url: 'https://baconmockup.com/300/200'
   }
  ]
  this.state = {
    allPhotos
  };
}

render() {
  // eslint-disable-next-line
        // our doppelganger images
        const allImages = this.state.allPhotos.map(photo => {
          return (
            <div key={photo.id}>
              <div style={{minHeight: '215px'}}>
                <i className="bottom-icon material-icons main-close">close</i>
                <Image style={{ width: '100%' }} src={photo.url} responsive />
              </div>
            </div>
          );
        })

        return (
          <div>

          // our doppelganger images created just above
          {allImages}

          // bottom nav bar
          <Container className="bottom-nav">
            <Row className="show-grid">
              <Col xs={4} className="col-bottom">
                  <Link to="/app/album"><i className="bottom-icon material-icons">collections</i></Link>
              </Col>
              <Col xs={4} className="col-bottom">
                  <i className="bottom-icon material-icons">camera_alt</i>
              </Col>
              <Col xs={4} className="col-bottom">
                <i className="bottom-icon material-icons">assignment_return</i>
              </Col>
            </Row>
          </Container>

          </div>
        );
 }
}
