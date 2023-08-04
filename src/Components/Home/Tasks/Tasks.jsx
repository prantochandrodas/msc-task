
import Todo from '../../Todo/Todo';
import Inreview from '../../Inreview/Inreview';
import Complete from '../../Complete/Complete';
import { useState } from 'react';
import EditTaskModal from '../../EditTaskModal/EditTaskModal';
import { toast } from 'react-toastify';

const Tasks = ({task,refetch}) => {
    const [open, setOpen] = useState(false);
    const [editState, setEditState] = useState([]);
    const [loading,setLoading]=useState(false);
    console.log(editState);
    const handelEditTask=()=>{
        setLoading(true),
        event.preventDefault();
        const form=event.target;
        const title=form.title.value;
        const description=form.description.value;
        const status=form.status.value;
        const id=form.id.value;
        const task={
            id:id,
            title,
            description,
            status
        }
        fetch(`http://localhost:5000/editTask`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(task)
        })
        .then(res=>res.json())
        .then(result=>{
            if(result.acknowledged){
                toast.success('Edit Task Sucessfull', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
                    setEditState(false);
                    setLoading(false);
                    setOpen(false);
                    refetch();
            }
            console.log(result)
        })
        .catch(err=>{
            toast.error('There is an error Try again', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
            setEditState(false);
            setLoading(false)
        })
    }


    const deleteTask=(id)=>{
        console.log(id)
        fetch(`http://localhost:5000/deleteTask/${id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(result=>{
            if(result.deletedCount>0){
               
                toast.error('User Deleted', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
                    setOpen(false);
                refetch();
            }
        })
    

    }
    return (
        <div className='lg:flex'>
            <div className='rounded lg:w-[350px] bg-[#f6f8fa] lg:mr-4 p-4 font-semibold lg:min-h-screen'>
                <h5>Todo</h5>
                {
                    task[0]?.map(tododata=><Todo
                        setEditState={setEditState}
                        key={tododata._id}
                        tododata={tododata}
                        setOpen={setOpen}
                        open={open}
                        deleteTask={deleteTask}
                    ></Todo>)
                }
               <EditTaskModal  setEditState={setEditState}
                editState={editState} handelEditTask={handelEditTask}></EditTaskModal>
               
            </div>
            <div className='rounded lg:w-[350px] bg-[#f6f8fa] lg:mr-4 p-4 font-semibold lg:min-h-screen'>
                <h5>Inreview</h5>
                {
                    task[1]?.map(inreviewData=><Inreview
                        setEditState={setEditState}
                        key={inreviewData._id}
                        inreviewData={inreviewData}
                        setOpen={setOpen}
                        open={open} 
                        deleteTask={deleteTask}
                    ></Inreview>)
                }
              
            </div>
            <div className='rounded lg:w-[350px] bg-[#f6f8fa] lg:mr-4 p-4 font-semibold lg:min-h-screen'>
                <h5>Complete</h5>
                {
                    task[2]?.map(completedData=><Complete
                        setEditState={setEditState}
                        key={completedData._id}
                        completedData={completedData}
                        setOpen={setOpen}
                        open={open} 
                        deleteTask={deleteTask}
                    ></Complete>)
                }
                
            </div>

        </div>
    );
};

export default Tasks;