import { useState } from "react";

const Home = () => {
    const[click, setClick] = useState("");
    console.log(click);
    return (
        <div>
            <h1 className='text-6xl font-bold text-blue-200'>NextLevel<span className='text-blue-500'> Weather App</span></h1>
            <p className='text-lg text-gray-300 text-center py-4'>Check the weather in your city!</p>
            <div className='flex justify-center items-center'>
                <button 
                type="button"
                onClick={() => setClick("clicked")}
                className='bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded-3xl'>Check Weather</button>
            </div>
        </div>
    );
};

export default Home;