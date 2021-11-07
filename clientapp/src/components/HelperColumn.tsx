import { Component, ReactNode } from "react";

export class HelperColumn extends Component {
    render(): ReactNode {
        return (
            <div className="min-h-screen w-48 bg-gray-50 border-r border-gray-300 text-center">
                <div className="text-xl text-gray-600">Scenarios</div>
                <hr className="mx-5 mt-1 border-gray-300" />
                {Array.from({ length: 20 }).map((x, i) => {
                    return <div key={i} className="p-1 cursor-pointer text-gray-600 hover:bg-gray-200">Item {i}</div>
                })}
            </div>
        )
    }

}