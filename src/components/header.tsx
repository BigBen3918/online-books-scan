import React from "react";

export default function Header() {
    return (
        <header>
            <nav className="bg-purple-900 border-gray-200 px-4 lg:px-3 py-3.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <div className="flex items-center">
                        <h1 className="self-center text-[30px] font-bold whitespace-nowrap text-purple-400">
                            Scan Books
                        </h1>
                    </div>
                </div>
            </nav>
        </header>
    );
}
