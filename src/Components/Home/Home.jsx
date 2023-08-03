import { useState } from 'react';
import Tasks from './Tasks/Tasks';
import AddTaskModal from '../AddTaskModal/AddTaskModal';
import { Link } from 'react-router-dom';

const Home = () => {
    const [state, setState] = useState(true)
    return (
        <div className='w-[90%] mx-auto my-[50px]'>
            <h1 className='text-center text-4xl font-bold mb-10'>Assign Task</h1>
            <Link onClick={()=>setState(true)} className="inline-block mb-2 rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500">
                Add Task
            </Link>
            <AddTaskModal state={state} setState={setState}></AddTaskModal>
            <div>
                <Tasks></Tasks>
            </div>
        </div>
    );
};

export default Home;