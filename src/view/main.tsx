import React from "react";
import { useSelector } from "react-redux";

function Main() {
    const { books } = useSelector((state: any) => state.books);

    React.useEffect(() => {
        console.log(books);
    }, [books]);

    return (
        <div className="container">
            <div>
                <h1>Welcome</h1>
            </div>
        </div>
    );
}

export default Main;
