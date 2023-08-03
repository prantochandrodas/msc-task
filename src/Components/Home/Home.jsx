import React from 'react';

const Home = () => {
    return (
        <div className='w-[90%] mx-auto'>
            <form action="" className='lg:w-[300px] my-[100px] '>
                <div>
                    <label htmlFor="FirstName" className="block text-sm font-medium text-gray-700">
                       Add Task
                    </label>
                    <input type="text" id="FirstName" name="first_name" className="mt-1 w-full rounded-md border border-gray-600 bg-white text-sm text-gray-700 shadow-sm" />
                </div>
            </form>
        </div>
    );
};

export default Home;