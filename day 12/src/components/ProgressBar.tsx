import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import useTodoStore from '../store/TodoStore';
const ProgressBar = () => {

    const todos = useTodoStore((state)=>state.todos)

    const completedTodo = todos.filter((todo)=>todo.status==='completed')
    const percentage = Math.ceil((completedTodo.length / todos.length) * 100)


  return (
    <div  className='w-full flex border border-slate-600 p-5 rounded-xl justify-between items-center'>
        <div className="w-full flex flex-col gap-3">
            <span className='text-lg font-bold text-yellow-500'>Tasks Progress Report</span>
            <span className='text-md font-bold text-blue-600'>Total Tasks Added: {todos.length}</span>
            <span className='text-md font-bold text-green-600'>Total Tasks Completed: {completedTodo.length}</span>
        </div>
        <div className='h-30'>

        <CircularProgressbar className='h-full' value={percentage} text={`${percentage}%`} />
        </div>
    </div>
  )
}

export default ProgressBar