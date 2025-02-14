import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {addNewCrop} from "../slice/CropSlice.ts";

export function AddCrop() {
    const crop=useSelector((state:any)=>state.crop);
    const dispatch = useDispatch();

    const [cropId, setCropId] = useState('');
    const [cropName, setCropName] = useState('');
    const [scientificName, setScientificName] = useState('');
    const [image, setImage] = useState('');
    const [category, setCategory] = useState('');
    const [season, setSeason] = useState('');
    const [fieldCode, setFieldCode] = useState('');




    function handleSubmitCrop(event: React.FormEvent) {

        event.preventDefault();

        dispatch(addNewCrop({cropId,cropName,scientificName,image,category,season,fieldCode}));
        setCropId('');
        setCropName('');
        setScientificName('');
        setImage('');
        setCategory('');
        setSeason('');
        setFieldCode('');
    }








    return (
        <>
            <br/>

            <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Add New Crop</h2>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="crop_id" className="block text-sm font-medium text-gray-700">
                            Crop ID
                        </label>
                        <input
                            type="text"
                            id="crop_id"
                            name="crop_id"
                            value={cropId}
                            onChange={(e) => setCropId(e.target.value)}
                            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                        />
                    </div>

                    <div>
                        <label htmlFor="crop_name" className="block text-sm font-medium text-gray-700">
                            Crop Name
                        </label>
                        <input
                            type="text"
                            id="crop_name"
                            name="crop_name"
                            value={cropName}
                            onChange={(e) => setCropName(e.target.value)}
                            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                        />
                    </div>

                    <div>
                        <label htmlFor="scientific_name" className="block text-sm font-medium text-gray-700">
                            Scientific Name
                        </label>
                        <input
                            type="text"
                            id="scientific_name"
                            name="scientific_name"
                            value={scientificName}
                            onChange={(e) => setScientificName(e.target.value)}
                            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                        />
                    </div>

                    <div>
                        <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                            Image
                        </label>
                        <input
                            type="text"
                            id="image"
                            name="image"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                        />
                    </div>

                    <div>
                        <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                            Category
                        </label>
                        <input
                            type="text"
                            id="category"
                            name="category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                        />
                    </div>

                    <div>
                        <label htmlFor="season" className="block text-sm font-medium text-gray-700">
                            Season
                        </label>
                        <input
                            type="text"
                            id="season"
                            name="season"
                            value={season}
                            onChange={(e) => setSeason(e.target.value)}
                            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                        />
                    </div>

                    <div>
                        <label htmlFor="field_code" className="block text-sm font-medium text-gray-700">
                            Field Code
                        </label>
                        <input
                            type="text"
                            id="field_code"
                            name="field_code"
                            value={fieldCode}
                            onChange={(e) => setFieldCode(e.target.value)}
                            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                        />
                    </div>

                    <button
                        type="submit"
                        onClick={handleSubmitCrop}
                        className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                    >
                        Add Crop
                    </button>
                </form>
            </div>

            <ul>
                {crop.map((cropDetails: any, index: number) => (
                    <li key={index}>
                        {cropDetails.cropId}, {cropDetails.cropName},{cropDetails.scientificName},{cropDetails.image},{cropDetails.category},{cropDetails.season},{cropDetails.fieldCode}
                    </li>
                ))}
            </ul>
        </>
    )
}