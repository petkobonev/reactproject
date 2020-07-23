import React, {useContext, useState, useEffect} from "react";
import { Link, useHistory } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button} from 'reactstrap'
import {GlobalContext, addUser} from "../context/GlobalState";
import { v4 as uuid} from 'uuid';

export const EditUser = (props) => {
    const [selectedUser, setSelectedUser] = useState({
            id: '',
            name: ''
        }
    )
    const {users, editUser} = useContext(GlobalContext)
    const currentUserId = props.match.params.id;

    useEffect( () => {
        const userId = currentUserId
        const selectedUser = users.find(user => user.id === userId)
        setSelectedUser(selectedUser)
    }, [currentUserId, users])

    const history = useHistory()
    const onSubmit = () => {

        editUser(selectedUser)


        history.push('/')


    }

    const onChange = (e) => {

        setSelectedUser({...selectedUser, [e.target.name]: e.target.value})

    }


    return (
        <Form onSubmit={onSubmit}>
            <FormGroup>
                <Label>
                    Name
                </Label>
                <Input text='text' value={selectedUser.name} name='name' onChange={onChange}></Input>
            </FormGroup>
            <Button type={onsubmit}>Edit</Button>
            <Link to='/' className='btn btn-danger ml-2'>Cancel</Link>
        </Form>
    )
}