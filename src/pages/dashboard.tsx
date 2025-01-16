export function Dashboard(){

    return(
        <>


            <div className="min-h-screen bg-gray-100">

                <div className="flex">

                    <aside className="w-64 bg-gray-800 text-white h-screen py-6 px-4">
                        <h2 className="text-lg font-semibold mb-6">Navigation</h2>
                        <ul className="space-y-4">
                            <li>
                                <a href="#" className="block py-2 px-4 rounded hover:bg-gray-700">Dashboard</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-4 rounded hover:bg-gray-700">Fields</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-4 rounded hover:bg-gray-700">Crops</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-4 rounded hover:bg-gray-700">Equipment</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-4 rounded hover:bg-gray-700">Staff</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-4 rounded hover:bg-gray-700">Reports</a>
                            </li>
                        </ul>
                    </aside>


                    <main className="flex-1 p-6">
                        <h2 className="text-3xl font-bold text-gray-700 mb-6">Dashboard</h2>


                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                            <div className="bg-white rounded-lg shadow-md p-4">
                                <h3 className="text-lg font-semibold text-gray-600">Total Fields</h3>
                                <p className="text-4xl font-bold text-blue-600">30</p>
                            </div>


                            <div className="bg-white rounded-lg shadow-md p-4">
                                <h3 className="text-lg font-semibold text-gray-600">Total Crops</h3>
                                <p className="text-4xl font-bold text-green-600">12</p>
                            </div>


                            <div className="bg-white rounded-lg shadow-md p-4">
                                <h3 className="text-lg font-semibold text-gray-600">Active Equipment</h3>
                                <p className="text-4xl font-bold text-yellow-600">18</p>
                            </div>
                        </div>
                    </main>
                </div>
            </div>

        </>
    )

}