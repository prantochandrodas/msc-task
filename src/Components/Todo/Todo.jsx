import { useState } from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
const Todo = ({ tododata,setEditState,setOpen,open,deleteTask }) => {

   console.log(open);
    return (
        <div className='bg-white my-4 rounded px-4 py-4'>
            <div className="float-right cursor-pointer ">
                <div onClick={() => setOpen([!open[0],tododata._id])}>
                    <BiDotsHorizontalRounded></BiDotsHorizontalRounded>
                </div>
            </div>
            <div className="inline-block float-right">
                {
                 open[1]==tododata._id && open[0] ? <div className="bg-[#f6f8fa]">
                        <button onClick={()=>setEditState([tododata,true])} className="block w-full font-normal p-[4px] hover:bg-[#00a35c] hover:text-white">Edit</button>
                        <button onClick={()=>deleteTask(tododata._id)} className="block font-normal p-[4px] hover:bg-[red] hover:text-white">Delete</button>
                    </div> : <></>
                }
            </div>

            <h3 className='mb-2 font-semibold text-[#1a73e8]'>{tododata.title}</h3>
            <p className='font-normal'>{tododata.description}</p>
            <p className='text-[12px] bg-[red] inline text-white py-[4px] px-[6px] rounded-full'>{tododata.status}</p>
        </div>
    );
};

export default Todo;