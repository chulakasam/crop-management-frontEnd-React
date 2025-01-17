import {useState} from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';


export function Dashboard(){

    function CalendarCard() {
        const [currentDate, setCurrentDate] = useState(new Date());


        const currentMonth = currentDate.getMonth();
        const currentYear = currentDate.getFullYear();


        const getDaysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();


        const getFirstDayOfMonth = (month, year) => new Date(year, month, 1).getDay();


        const daysInMonth = getDaysInMonth(currentMonth, currentYear);
        const firstDayOfMonth = getFirstDayOfMonth(currentMonth, currentYear);
        const calendarDays = [];


        for (let i = 0; i < firstDayOfMonth; i++) {
            calendarDays.push(null);
        }
        for (let i = 1; i <= daysInMonth; i++) {
            calendarDays.push(i);
        }


        const nextMonth = () => {
            setCurrentDate(new Date(currentYear, currentMonth + 1, 1));
        };


        const prevMonth = () => {
            setCurrentDate(new Date(currentYear, currentMonth - 1, 1));
        };

        return (
            <div className="mt-6 bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-600">Calendar</h3>
                <div className="flex justify-between items-center mt-4">
                    <button
                        onClick={prevMonth}
                        className="bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700"
                    >
                        Prev
                    </button>
                    <p className="text-xl font-semibold text-gray-800">
                        {currentDate.toLocaleString("default", { month: "long" })} {currentYear}
                    </p>
                    <button
                        onClick={nextMonth}
                        className="bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700"
                    >
                        Next
                    </button>
                </div>

                <div className="grid grid-cols-7 gap-4 mt-6 text-center">
                    {/* Day Labels */}
                    <div className="font-semibold text-gray-600">Sun</div>
                    <div className="font-semibold text-gray-600">Mon</div>
                    <div className="font-semibold text-gray-600">Tue</div>
                    <div className="font-semibold text-gray-600">Wed</div>
                    <div className="font-semibold text-gray-600">Thu</div>
                    <div className="font-semibold text-gray-600">Fri</div>
                    <div className="font-semibold text-gray-600">Sat</div>

                    {/* Calendar Days */}
                    {calendarDays.map((day, index) => (
                        <div key={index} className={`py-3 ${day ? "bg-blue-100 text-gray-800 rounded-lg" : "text-transparent"}`}>{day}</div>
                    ))}
                </div>
            </div>
        );
    }
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
                                <a href="#" className="block py-2 px-4 rounded hover:bg-gray-700"> <i className="fas fa-tractor text-green-500 text-3xl"></i> Fields</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-4 rounded hover:bg-gray-700"><i className="fas fa-seedling text-green-500 text-3xl"></i> Crops</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-4 rounded hover:bg-gray-700"><i className="fas fa-cogs text-green-500 text-3xl"></i> Equipment</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-4 rounded hover:bg-gray-700"><i className="fas fa-users text-green-500 text-3xl"></i> Staff</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-4 rounded hover:bg-gray-700"><i className="fas fa-truck text-green-500 text-3xl"></i> Vehicle</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-4 rounded hover:bg-gray-700"><i className="fas fa-clipboard-list text-green-500 text-3xl"></i> Monitoring Log</a>
                            </li>
                        </ul>
                    </aside>


                    <main className="flex-1 p-6">
                        <h2 className="text-3xl font-bold text-gray-700 mb-6">Dashboard</h2>


                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                            <div className="bg-white rounded-lg shadow-md p-4">
                                <i className="fas fa-tractor text-green-500 text-3xl"></i>
                                <h3 className="text-lg font-semibold text-gray-600">Total Fields</h3>
                                <p className="text-4xl font-bold text-blue-600">30</p>
                            </div>


                            <div className="bg-white rounded-lg shadow-md p-4">
                                <i className="fas fa-seedling text-green-500 text-3xl"></i>
                                <h3 className="text-lg font-semibold text-gray-600">Total Crops</h3>
                                <p className="text-4xl font-bold text-green-600">12</p>
                            </div>


                            <div className="bg-white rounded-lg shadow-md p-4">
                                <i className="fas fa-cogs text-green-500 text-3xl"></i>
                                <h3 className="text-lg font-semibold text-gray-600">Active Equipment</h3>
                                <p className="text-4xl font-bold text-yellow-600">18</p>
                            </div>

                            <div className="mt-6 bg-white rounded-lg shadow-md p-6">
                                <h3 className="text-lg font-semibold text-gray-600">Weather Report</h3>
                                <div className="flex items-center justify-between mt-4">
                                    <div>
                                        <p className="text-xl text-gray-800 font-semibold">New York</p>
                                        <p className="text-lg text-gray-600">Sunny</p>
                                    </div>
                                    <div>
                                        <img src="https://openweathermap.org/img/wn/01d.png" alt="Sunny"
                                             className="w-12 h-12"/>
                                    </div>
                                </div>

                                <div className="mt-4">
                                    <p className="text-lg text-gray-700">Temperature: 23°C</p>
                                    <p className="text-lg text-gray-700">Wind Speed: 15 km/h</p>
                                    <p className="text-lg text-gray-700">Humidity: 65%</p>
                                </div>
                            </div>
                            <CalendarCard/>
                        </div>
                    </main>
                </div>
            </div>

        </>
    )

}