import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';
import { ShowToDoPopUp } from './ShowToDoPopUp';

const Items = ({ currentItems }: any) => {
    const [showPopup, setShowPopup] = useState(false)
    const [todoId, setTodoId] = useState(1)

    const closePopup = () => {
        setShowPopup(false)
    }

    const openPopUp = (id: number) => {
        setShowPopup(true)
        setTodoId(id)
    }

    return (
        <>
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">User Id</th>
                            <th scope="col">title</th>
                            <th scope="col">completed</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems &&
                            currentItems.map((item: any) => (
                                <tr key={item.id}>
                                    <th scope="row">{item.id}</th>
                                    <td>{item.userId}</td>
                                    <td>{item.title}</td>
                                    <td>{item.completed}</td>
                                    <td><button className="btn btn-sm btn-success" onClick={() => openPopUp(item.id)}>view</button></td>
                                </tr>
                            ))}
                    </tbody>
                </table>
                {showPopup && <ShowToDoPopUp id={todoId} closePopup={closePopup} />}
            </div>
        </>
    );
}

export const PaginatedItems = ({ itemsPerPage, items }: any) => {
    // We start with an empty list of items.
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        // Fetch items from another resources.
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(items.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(items.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);

    // Invoke when user click to request another page.
    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    return (
        <>
            <Items currentItems={currentItems} />
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={undefined}
            />
        </>
    );
}
