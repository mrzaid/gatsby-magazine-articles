import React from 'react'
import {Button,Card,CardTitle,CardBody,Form,FormGroup,Input} from 'reactstrap'
 const Sidebar = () => 
     {
         return(
<div>
            <Card>
                <CardBody>
                    <CardTitle className="text-centre text-uppercase mb-3">
                        NewsLetter
                    </CardTitle>
                        <Form className="text-centre">
                            <FormGroup>
                                <Input type="email" name="email" placeholder="your email address..." />
                                </FormGroup>
                                <button className='btn btn-outline-success text-uppercase'>
                                    Subscribe
                                </button>
                        </Form>
                </CardBody>
            </Card>
            <Card>
      <CardBody>
        <CardTitle className="text-center text-uppercase">
          Advertisement
        </CardTitle>
        <img
          src="https://via.placeholder.com/320x200"
          alt="Advert"
          style={{ width: '100%' }}
        />
      </CardBody>
    </Card>
        </div>
         )
     }
        
    

export default Sidebar 