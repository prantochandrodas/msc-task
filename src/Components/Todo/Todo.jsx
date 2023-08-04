import { useState } from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
const Todo = ({ tododata,setEditState }) => {
    console.log(tododata);

    const [open, setOpen] = useState(false);
    return (
        <div className='bg-white my-4 rounded px-4 py-4'>
            <div className="float-right cursor-pointer ">
                <div onClick={() => setOpen(!open)}>
                    <BiDotsHorizontalRounded></BiDotsHorizontalRounded>
                </div>
            </div>
            <div className="inline-block float-right">
                {
                    open ? <div className="bg-[#f6f8fa]">
                        <button onClick={()=>setEditState(true)} className="block w-full font-normal p-[4px] hover:bg-[#00a35c] hover:text-white">Edit</button>
                        <button className="block font-normal p-[4px] hover:bg-[red] hover:text-white">Delete</button>
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