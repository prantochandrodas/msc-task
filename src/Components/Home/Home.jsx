import { useState } from 'react';
import Tasks from './Tasks/Tasks';
import AddTaskModal from '../AddTaskModal/AddTaskModal';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';

const Home = () => {
    const [state, setState] = useState(false);
  
    const { data: task = [], isLoading, refetch } = useQuery({
        queryKey: ['task'],
        queryFn: async () => {
          const res = await fetch(`http://localhost:5000/task`, {
    
          });
          const data = await res.json();
          return data;
        }
      });
      const [loading,setLoading]=useState(false);
      const handelAddTask=(event)=>{
          setLoading(true),
          event.preventDefault();
          const form=event.target;
          const title=form.title.value;
          const description=form.description.value;
          const status=form.status.value;
          const task={
              title,
              description,
              status
          }
          fetch(`http://localhost:5000/Addtask`,{
              method:'POST',
              headers:{
                  'content-type':'application/json'
              },
              body:JSON.stringify(task)
          })
          .then(res=>res.json())
          .then(result=>{
              if(result.acknowledged){
                  toast.success('Add Task Sucessfull', {
                      position: "top-center",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "light",
                      });
                  setState(false);
                  setLoading(false);
                  refetch();
              }
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
              setState(false);
              setLoading(false)
          })
  
      }
    return (
        <div className='w-[90%] mx-auto my-[50px]'>

            
            <h1 className='text-center text-4xl font-bold mb-10'>Assign Task</h1>
         
         {/* button for open add task modal */}
            <Link onClick={()=>setState(true)} className="inline-block mb-2 rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500">
                Add Task
            </Link>
            <AddTaskModal state={state} handelAddTask={handelAddTask} setState={setState}></AddTaskModal>
          {/* task dashboard  */}
            <div>
                <Tasks task={task} refetch={refetch}></Tasks>
            </div>
        </div>
    );
};

export default Home;