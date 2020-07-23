import React, {useContext, useState} from "react";
import { Link, useHistory } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button} from 'reactstrap'
import {GlobalContext, addUser} from "../context/GlobalState";
import { v4 as uuid} from 'uuid';


export const AddUser = () => {
    const [name, setName] = useState('')
    const {addUser} = useContext(GlobalContext)
    const history = useHistory()
    const onSubmit = () => {
        const newUser = {
            id: uuid(),
            name: name
        }
        history.push('/')
        addUser(newUser);

    }

    const onChange = (e) => {

        setName(e.target.value)
    }

    return (
        <Form onSubmit={onSubmit}>
            <FormGroup>
                <Label>
                    Name
                </Label>
                <Input value={name} onChange={onChange} text='text' placeholder="Enter Name"></Input>
            </FormGroup>
            <Button type='submit'>Submit</Button>
            <Link to='/' className='btn btn-danger ml-2'>Cancel</Link>
        </Form>
    )
}