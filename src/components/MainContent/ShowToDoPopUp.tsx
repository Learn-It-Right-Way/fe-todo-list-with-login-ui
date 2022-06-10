import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { ToDoType } from '../../models';

type Props = {
    id: number;
    closePopup: () => void
}

export const ShowToDoPopUp = (props: Props) => {
    console.log('---ShowToDoPopUp---');

    const [todo, setTodo] = useState<ToDoType>(null!)

    useEffect(() => {
        fetchToDo()
    }, [])

    const fetchToDo = () => {
        Axios.get(`https://jsonplaceholder.typicode.com/todos/${props.id}`)
            .then(function (response) {
                setTodo(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    return (
        <Modal show={true} onHide={props.closePopup}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>{todo && (
                <>
                    <p>id : {todo.id}</p>
                    <p>userId : {todo.userId}</p>
                    <p>title : {todo.title}</p>
                    <p>completed : {todo.completed}</p>
                </>
            )}</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.closePopup}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
