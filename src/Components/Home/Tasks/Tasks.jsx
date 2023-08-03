import React from 'react';
import Todo from '../../Todo/Todo';
import Inreview from '../../Inreview/Inreview';
import Complete from '../../Complete/Complete';

const Tasks = () => {
    return (
        <div className='lg:flex'>
            <div className='rounded lg:w-[350px] bg-[#f6f8fa] lg:mr-4 p-4 font-semibold lg:min-h-screen'>
                <h5>Todo</h5>
                <Todo></Todo>
            </div>
            <div className='rounded lg:w-[350px] bg-[#f6f8fa] lg:mr-4 p-4 font-semibold lg:min-h-screen'>
                <h5>Inreview</h5>
                <Inreview></Inreview>
            </div>
            <div className='rounded lg:w-[350px] bg-[#f6f8fa] lg:mr-4 p-4 font-semibold lg:min-h-screen'>
                <h5>Complete</h5>
                <Complete></Complete>
            </div>
        </div>
    );
};

export default Tasks;