import React from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default class LoginForm extends React.Component{
    render(){
        return (
            <div className=" d-flex justify-content-center align-items-center mt-3 ">
                <Form className="d-flex flex-column align-items-center p-7 p-sm-3 bg-secondary rounded border border-dark">
                    <Form.Label className=""><h3>Login</h3></Form.Label>
                    <Form.Group className="mx-5" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mx-5" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mx-5" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember Me" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}