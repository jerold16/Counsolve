import { KeyboardArrowRight } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import BeliveUs from './BeliveUs'
import Slider from 'react-slick'
import { Image } from 'react-bootstrap'
import ReactPaginate from 'react-paginate'

const Project = () => {
    let navigate=useNavigate()
    
     let arryobj=[
        {
            "title" : "Investment retired plan",
            "category" : "Investment",
            "photo" :"../assest/project-17-370x470.jpg"
        },
        {
            "title" : "Investment retired plan",
            "category" : "Investment",
            "photo" :"../assest/project-18-370x470.jpg"

        },
        {
            "title" : "Investment retired plan",
            "photo" :"../assest/project-20-370x470.jpg",
            "category" : "Money"
        },
        {
            "title" : "Investment retired plan",
            "photo" :"../assest/project-21-370x470.jpg",
            "category" : "Investment"
        },
       
    {
        "title" : "Investment retired plan",
        "photo" :"../assest/project-20-370x470.jpg",
        "category" : "Money 4"
    },
    {
        "title" : "Investment retired plan",
        "photo" :"../assest/project-21-370x470.jpg",
        "category" : "Investment7"
    },
    {
        "title" : "Investment retired plan",
        "photo" :"../assest/project-22-370x470.jpg",
        "category" : "Honey"
    },
    {
        "title" : "Retired plan",
        "photo" :"../assest/project-18-370x470.jpg",
        "category" : "Investment"
    }
     ]
     const [itemOffset, setItemOffset] = useState(0);
    const [currentItems,setcurrentItems]=useState([]);
    const [pageCount,setPageCount] =useState(0);
    const itemsPerPage=6;
    let [anime,setanime]=useState("")
    useEffect(()=>{
        const endOffset = itemOffset + itemsPerPage;
        setcurrentItems(arryobj.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(arryobj.length / itemsPerPage));
    },[arryobj,itemOffset])
    useEffect(()=>{
        setanime("animate__fadeIn");
        const element = document.querySelector('.durationani');
        element.style.setProperty('--animate-duration', '4s');
    },[])
    
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % arryobj.length;
      setItemOffset(newOffset);
    };
  return (
    <div className={`${anime} animate__animated transi durationani `}>
        <div id='head' className='position-relative transi'>
            <div id="servicetitle" className='d-block' alt="" ></div>
             <p style={{backgroundColor :"rgba(0,0,0,0.5)"}} 
             className='position-absolute text-white text-5xl md:text-7xl fw-semibold left-0 top-0 w-[100%] h-[100%] flex align-items-center  justify-center'>
                Projects</p>
                <p 
             className='position-absolute text-white text-xl fw-semibold left-0 top-0 w-[100%] h-[100%] flex align-items-end  justify-start p-5'>
                <a onClick={()=>navigate("/")} className='cursor-pointer no-underline text-white hover:underline'>Home</a> 
                <KeyboardArrowRight/> Projects</p>
        </div>

        <>
         <div className={`flex ${anime} animate__animated transi durationani  flex-wrap mx-auto mt-3  container gap-3 justify-between`}>
                   {
                    currentItems.map((obj)=>{
                    //   console.log(obj.photo);
                        return(
                <div className='position-relative w-auto h-auto'>
                  
                    {/* <img  className='d-block w-[100%] rounded-3xl'
                     src={require(`../assest/project-17-370x470.jpg`)} alt="" /> */}
                     <Image  className='d-block w-[100%] rounded-3xl' 
                     src={obj.photo} alt='missing'>

                     </Image>
                    <div  id='opchi'
                    className='position-absolute rounded-3xl d-flex align-items-end transi  p-3 md:p-5 justify-center top-0 left-0 w-[100%] h-[100%]'>
                        <div id='three-rounded'  className='bg-slate-100 py-3 rounded-t-3xl rounded-s-3xl w-full mp-3 px-4'>
                        <p className='text-violet-600'>{obj.category}</p>
                        <button onClick={()=>{
                            navigate(`/project/${obj.title}`)
                        }} className= 'lg:text-xl text-slate-900 transi text-start py-2 hover:text-violet-600'>
                            {obj.title}</button>
                        </div>
                    </div>
                   </div>
                         
                        )
                    })
                   }
                   </div>
                  <ReactPaginate
          breakLabel="..."
          nextLabel=">>"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel="<<"
          containerClassName='pagination'
          pageLinkClassName='page-num'
          previousLinkClassName='page-num'
          nextLinkClassName='page-num'
          activeLinkClassName='active'
        />  
    </>  
        {/* Belive us */}
        <BeliveUs/>
{/* Bielive us ends */}
    </div>
  )
}

export default Project