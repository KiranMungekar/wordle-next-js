import constants from '../data/constants';
import { observer } from 'mobx-react-lite'

export default function Qwerty ({store}){
    return (
        <div className='mt-3 py-5'>
            {constants.keyboard.map((row,i) => {
                return <div key={i} className='flex justify-center items-center'>
                    {row.split('').map( (letter,j) => <button key={j} onClick={(e) => store.handleQwertyBtn(e)} data-mdb-ripple="true"
                            data-mdb-ripple-color="light" className='flex justify-center items-center w-9 h-9 bg-gray-400 hover:bg-gray-600 hover:shadow-md shadow-black text-white text-sm md:text-lg font-semibold rounded-md m-0.5 sm:m-1 sm:w-10 sm:h-10'> {letter.toUpperCase()}</button>)}
                </div>
            })}
        </div>
    )
};