import { BiDotsHorizontalRounded } from "react-icons/bi";
const Complete = ({ completedData,setEditState,setOpen,open,deleteTask }) => {
    return (
        <div className='bg-white my-4 rounded px-4 py-4'>
            {/* three dot  */}
        <div className="float-right cursor-pointer ">
            <div onClick={() => setOpen([!open[0],completedData._id])}>
                <BiDotsHorizontalRounded></BiDotsHorizontalRounded>
            </div>
        </div>

        {/* edit and delete button  */}
        <div className="inline-block float-right">
            {
             open[1]==completedData._id && open[0] ? <div className="bg-[#f6f8fa]">
                    <button onClick={()=>setEditState([completedData,true])} className="block w-full font-normal p-[4px] hover:bg-[#00a35c] hover:text-white">Edit</button>
                    <button onClick={()=>deleteTask(completedData._id)}  className="block font-normal p-[4px] hover:bg-[red] hover:text-white">Delete</button>
                </div> : <></>
            }
        </div>
        {/* title  */}
        <h3 className='mb-2 font-semibold text-[#1a73e8]'>{completedData.title}</h3>
            {/* description  */}
        <p className='font-normal'>{completedData.description}</p>
        {/* status  */}
        <p className='text-[12px] bg-[#218bff] inline text-white py-[4px] px-[6px] rounded-full'>{completedData.status}</p>
    </div>
    );
};

export default Complete;