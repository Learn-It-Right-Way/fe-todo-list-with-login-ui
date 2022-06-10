import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { ToDoType } from '../../models';
import { NavigationBar } from './NavigationBar'
import { PaginatedItems } from './PaginatedItems';

export const MainContent = () => {
    console.log('---MainContent---');
    const [todoList, setTodoList] = useState<ToDoType[]>(null!);
    const validations = {
        hasTodos: todoList && Array.isArray(todoList) && todoList.length > 0
    }

    useEffect(() => {
        fetchAllToDos()
    }, [])

    const fetchAllToDos = () => {
        Axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(function (response) {
                setTodoList(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    return (
        <>
            <NavigationBar />
            {validations.hasTodos && <PaginatedItems itemsPerPage={10} items={todoList} />}
        </>
    )
}
