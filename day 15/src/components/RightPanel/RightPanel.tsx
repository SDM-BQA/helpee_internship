import Meetings from './Meetings'
import Stats from './Stats'

const RightPanel = () => {
  return (
    <div className='h-dvh w-1/2 px-8 py-10 bg-[#f4f6fa] flex flex-col justify-between'>
        <Meetings/>
        <Stats/>
    </div>
  )
}

export default RightPanel