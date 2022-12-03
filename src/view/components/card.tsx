import React from "react";

function Card(props: any) {
    return (
        <div className="w-full col-span-6 sm:col-span-12 md:col-span-4 lg:col-span-3 xl:col-span-2 bg-gray-800 border border-gray-700 rounded-lg shadow-md">
            {/* <img
                className="rounded-t-lg"
                src="/docs/images/blog/image-1.jpg"
                alt=""
            /> */}
            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white-900">
                    Noteworthy technology acquisitions 2021
                </h5>
                <p className="mb-3 font-normal text-white-700">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                </p>
                <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-purple-700 rounded-lg hover:bg-purple-900 focus:ring-4 focus:outline-none focus:ring-blue-300 cursor-pointer">
                    Read more
                </div>
            </div>
        </div>
    );
}

export default Card;
