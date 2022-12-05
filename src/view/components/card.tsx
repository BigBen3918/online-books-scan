import React from "react";

function Card(props: BooksObject) {
    const [modalOpen, setModalOpen] = React.useState(false);
    const {
        thumbnail,
        title,
        authors,
        description,
        infoLink,
        language,
        pageCount,
        publishedDate,
        publisher,
    } = props;

    return (
        <>
            <div className="w-full col-span-6 sm:col-span-12 md:col-span-4 lg:col-span-3 xl:col-span-2 bg-gray-800 border border-gray-700 rounded-lg shadow-md">
                <img
                    className="w-full h-[200px] object-cover rounded-t-lg"
                    src={
                        thumbnail
                            ? thumbnail
                            : "https://random.imagecdn.app/500/150"
                    }
                    alt=""
                />
                <div className="p-5">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-white-900">
                        {title.length > 30 ? title.slice(0, 30) + "..." : title}
                    </h5>
                    <button
                        data-modal-toggle="defaultModal"
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-purple-700 rounded-lg hover:bg-purple-900 focus:outline-none cursor-pointer"
                        onClick={() => setModalOpen(true)}
                    >
                        Read more
                    </button>
                </div>
            </div>

            {/* Content Modal */}
            {modalOpen && (
                <>
                    <div className="bg-[#000000c0] z-[1] fixed top-0 left-0 w-full h-full outline-none overflow-x-hidden overflow-y-auto">
                        <div className="relative w-full pointer-events-none p-5 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] md:w-[800px]">
                            <div className="p-3 border-none shadow-lg relative flex flex-col pointer-events-auto bg-white rounded-md outline-none">
                                <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                                    <h5
                                        className="text-xl font-medium leading-normal text-gray-800"
                                        id="exampleModalScrollableLabel"
                                    >
                                        {title.length > 35
                                            ? title.slice(0, 35) + "..."
                                            : title}
                                    </h5>
                                    <button
                                        type="button"
                                        className="box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                                        onClick={() => setModalOpen(false)}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-6 h-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </button>
                                </div>
                                <div className="relative flex flex-col justify-center items-center p-4 text-black ">
                                    <div className="flex justify-center items-center flex-col sm:flex-row w-full">
                                        <div className="flex-1 flex justify-center items-center">
                                            <img
                                                src={thumbnail}
                                                alt=""
                                                className="h-full object-cover"
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <p>
                                                <b>Authors:</b> {authors}
                                            </p>
                                            <p>
                                                <b>Language:</b> {language}
                                            </p>
                                            <p>
                                                <b>PageCount:</b> {pageCount}
                                            </p>
                                            <p>
                                                <b>PublishedDate:</b>{" "}
                                                {publishedDate}
                                            </p>
                                            <p>
                                                <b>Publisher:</b> {publisher}
                                            </p>
                                        </div>
                                    </div>
                                    <p className="mt-5 h-[250px] overflow-scroll w-full overflow-x-hidden border border-purple-600 p-2">
                                        {description
                                            ? description
                                            : "No description"}
                                    </p>
                                </div>
                                <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                                    <a
                                        href={infoLink}
                                        className="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
                                        target={"_blank"}
                                    >
                                        Link
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}

export default Card;
