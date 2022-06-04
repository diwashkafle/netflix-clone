import axios from 'axios';
import {useState,useEffect} from 'react';
import Movie from './Movie';
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'

const Row = ({title,fetchURL,uniqueId}) => {
    const[movies,setMovies] = useState([]);

    useEffect(()=>{
        axios.get(fetchURL).then((response)=>{
            setMovies(response.data.results)
        });
    },[fetchURL]);

    const slideLeft = ()=>{
        var slider = document.getElementById('slider'+uniqueId);
        slider.scrollLeft = slider.scrollLeft-500;
    };
    const slideRight = ()=>{
        var slider = document.getElementById('slider'+uniqueId);
        slider.scrollLeft = slider.scrollLeft+500;
    };
  return (
    <>
<h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
<div className='relative flex items-center'>
    <MdChevronLeft onClick={slideLeft} className='bg-white rounded-full left-0 absolute opacity-20 hover:opacity-80 cursor-pointer z-10' size={40}/>
    <div className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative' id={"slider" + uniqueId}>
        {movies.map((item,id)=>{
           return <Movie item={item}/>
        })}
    </div>
    <MdChevronRight onClick={slideRight} className='bg-white rounded-full right-0 absolute opacity-20 hover:opacity-80 cursor-pointer z-10' size={40}/>
</div>
    </>
  )
}

export default Row