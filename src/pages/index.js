import React from 'react';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';

import Header from '@sections/Header';
import About from '@sections/About'; 
/*import Brands from '@sections/Brands
import Team from '@sections/Team';
import Faq from '@sections/Faq'; ';*/
import Footer from '@sections/Footer';

import {Row, Col, Container, Form, Button} from "react" 

const IndexPage = () => (
  <Layout>
    <Navbar />
    <Header />
    <About>
      <Container>
        <Form name= "contact v1" method="post" data-netlify="true" onSubmit="submit">
         <input type="hidden" name="form-name" value="contact v1" />
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>First Name </Form.Label>
                <Form.Control required size="lg" type="text"/>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Last Name </Form.Label>
                <Form.Control required size="lg" type="text"/>
              </Form.Group>
            </Col>
          </Row>
          <Form.Group>
                <Form.Label>How can we help? </Form.Label>
                <Form.Control required as="textarea" rows="3" placeholder="What do you do?"/>
          </Form.Group>
          <Button type="submit"> Submit </Button>
        </Form>
      </Container>
    </About>
                
    <Footer />
  </Layout>
);

export default IndexPage;
