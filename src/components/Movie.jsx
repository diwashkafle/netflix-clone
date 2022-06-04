import {React,useState} from 'react';
import {FaHeart,FaRegHeart} from 'react-icons/fa';


const Movie = ({item}) => {
    const [like,setLike] = useState(false);

  return (
    <div className='w-[160px] sm:w-[200px] md:w-[240px] ld:w-[280] inline-block cursor-pointer relative p-2'>
               <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}  alt={item.title}/>
               <div className=" text-center absolute top-0 left-0 w-full h-full hover:bg-black opacity-0 hover:opacity-[80%] text-white">
                   <p className='pt-10 md:pt-14 text-sm md:text-lg whitespace-normal'>{item.title}</p>
                   <p>
                       {like?<FaHeart className='absolute top-4 left-4 text-gray-300'/>:<FaRegHeart className='absolute top-4 left-4 text-gray-300'/>}
                   </p>
               </div>
               </div>
  )
}

export default Movie