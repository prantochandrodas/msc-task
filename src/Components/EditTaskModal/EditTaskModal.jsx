import React from 'react';

const EditTaskModal = ({editState,setEditState,handelEditTask}) => {
    return (
        <div>
        {
            editState ? (
                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="fixed inset-0 w-full h-full bg-black opacity-40" onClick={() => setState(false)}></div>
                    <div className="flex items-center min-h-screen px-4 py-8">
                        <div className="relative w-full max-w-lg mx-auto bg-white rounded-md shadow-lg">
                            <div className="flex items-center justify-between p-4 border-b">
                                <h4 className="text-lg font-medium text-gray-800">
                                    Add Task
                                </h4>
                                <button className="p-2 text-gray-400 rounded-md hover:bg-gray-100"
                                    onClick={() => setEditState(false)}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mx-auto" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </div>

                            {/* form to add task */}
                            <form onSubmit={handelEditTask} className='p-4'>

                                {/* title task */}
                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                                        Title
                                    </label>
                                    <input required  type="text" id="title" name="title" className="mt-1 w-full rounded-md border py-2 border-gray-200 bg-white text-sm text-gray-700 shadow-sm" />
                                </div>
                                {/* Description task */}
                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                                        Description
                                    </label>
                                    <textarea required name="description" className="mt-1 w-full rounded-md border py-2 border-gray-200 bg-white text-sm text-gray-700 shadow-sm" id="description" cols="30" rows="5"></textarea>
                                </div>

                                {/* Status task */}
                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="status" className="block text-sm font-medium text-gray-700">
                                        Status
                                    </label>
                                    <select required name="status" className='mt-1 w-full rounded-md border py-2 border-gray-200 bg-white text-sm text-gray-700 shadow-sm'>
                                        <option value="">Select Status</option>
                                        <option value="todo">Todo</option>
                                        <option value="inreview">Inreview</option>
                                        <option value="completed">Completed</option>
                                    </select>
                                </div>
                                <div className="flex items-center gap-3 py-4 mt-5">
                                    <button type='submit' className="px-6 py-2 text-white bg-indigo-600 rounded-md outline-none ring-offset-2 ring-indigo-600 focus:ring-2"
                                       
                                    >
                                        Add
                                    </button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            ) : ''
        }
    </div>
    );
};

export default EditTaskModal;