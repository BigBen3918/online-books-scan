import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBooks } from "../redux/reducer/bookSlice";

function Main() {
    const dispatch = useDispatch();
    const { books } = useSelector((state: any) => state.book);

    React.useEffect(() => {
        console.log(books);
    }, [books]);

    const handleClick = async () => {
        dispatch(
            getBooks({
                valueSearch: "",
                category: "all",
                sort: "relevance",
                maxResults: 10,
            })
        );
    };

    return (
        <div className="container">
            <h1>Welcome</h1>
            <button onClick={handleClick}>Scan</button>
        </div>
    );
}

export default Main;
