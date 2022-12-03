import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBooks } from "../redux/reducer/bookSlice";
import Card from "./components/card";

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
        <div className="container mx-auto p-3">
            <div className="mt-[30px] p-[10px] rounded-md bg-gray-900">
                <div className="p-1 sm:p-4">
                    <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-4 md:col-span-5">
                            <input
                                type="text"
                                id="street-address"
                                placeholder="Search..."
                                className="mt-1 w-full rounded-md bg-transparent border border-purple-500 shadow-sm focus:border-purple-700 focus:outline-none text-[20px] p-2"
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-2 md:col-span-1">
                            <button
                                type="button"
                                className="text-white text-[20px] font-bold bg-purple-500 hover:bg-purple-800 ring-2 ring-purple-400 outline-none rounded-lg w-full h-full flex items-center justify-center"
                            >
                                <svg
                                    className="mr-2 -ml-1 w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    ></path>
                                </svg>
                                Submit
                            </button>
                        </div>

                        <div className="col-span-6 sm:col-span-3 lg:col-span-2 w-full">
                            <label
                                htmlFor="country"
                                className="block text-[18px] text-white-500"
                            >
                                Categories
                            </label>
                            <select
                                id="country"
                                className="mt-1 w-full bg-purple-900 text-[20px] rounded-md border border-purple-500 py-2 px-3 shadow-sm focus:outline-none focus:ring-purple-500 text-white-300"
                            >
                                <option>All</option>
                                <option>Art</option>
                                <option>Biography</option>
                                <option>Computers</option>
                                <option>History</option>
                                <option>Medical</option>
                                <option>Poetry</option>
                            </select>
                        </div>
                        <div className="col-span-6 sm:col-span-3 lg:col-span-2 w-full">
                            <label
                                htmlFor="country"
                                className="block text-[18px] text-white-500"
                            >
                                Sorting
                            </label>
                            <select
                                id="country"
                                className="mt-1 w-full bg-purple-900 text-[20px] rounded-md border border-purple-500 py-2 px-3 shadow-sm focus:outline-none focus:ring-purple-500 text-white-300"
                            >
                                <option>Relevance</option>
                                <option>Newest</option>
                            </select>
                        </div>
                        <div className="col-span-6 sm:col-span-6 lg:col-span-2 w-full">
                            <label
                                htmlFor="country"
                                className="block text-[18px] text-white-500"
                            >
                                Results
                            </label>
                            <input
                                type="number"
                                id="street-address"
                                min={1}
                                max={40}
                                placeholder="counts..."
                                className="mt-1 w-full rounded-md bg-transparent border border-purple-500 shadow-sm focus:border-purple-700 focus:outline-none text-[20px] p-2"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-6 sm:grid-cols-12 gap-6 w-full mt-3">
                {new Array(15).fill(0).map((item, index: number) => (
                    <Card key={index} />
                ))}
            </div>
        </div>
    );
}

export default Main;
