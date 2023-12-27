
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import React, { useEffect, useState } from 'react'
import { Col, Image } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import { useNavigate } from 'react-router';

const Pagination = (props) => {
    const {data} =props;
    console.log(data);
    const [itemOffset, setItemOffset] = useState(0);
    const [currentItems,setcurrentItems]=useState([]);
    const [pageCount,setPageCount] =useState(0);
    const itemsPerPage=12;
    useEffect(()=>{
        const endOffset = itemOffset + itemsPerPage;
        setcurrentItems(data.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(data.length / itemsPerPage));
    },[itemOffset,itemsPerPage,data])
     
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % data.length;
      setItemOffset(newOffset);
    };
  let navigate=useNavigate()
    return (
      <>
        <div className='flex flex-wrap mx-auto mt-3 container gap-3 justify-between'>
            {
                currentItems.map((item,index)=>{
                    return(
                        <div className="rounded w-[300px] md:w-[400px] mx-auto position-relative transi border-2 p-3 py-3">
                           
                            <p className='rounded-s-3xl rounded-t-3xl bg-slate-100 text-clr w-fit p-2 capitalize'>{item.Category}</p>
                            <div className='position-relative'>
                            <Image  className='d-block w-[100%] rounded-s-3xl rounded-t-3xl' 
                             src={item.img} alt='missing'>
                             </Image>
                             <div id='opchi' className='position-absolute rounded-t-3xl rounded-s-3xl flex p-10 align-items-end ali justify-end left-0 top-0 w-[100%] h-[100%] '>
                                   <p className='bg-white rounded-t-3xl h-fit rounded-s-3xl w-fit p-2'>
                                    <img onClick={()=>{
                                        navigate(`/blog/${item.id}`)
                                    }}  className='w-8 cursor-pointer h-8' src={require("../assest/zoom.png")} alt="" />
                                   </p>
                            </div>
                            </div>
                            <p className='text-3xl mt-2'>{item.Main_Title} , {item.id}</p>
                            <p onClick={()=>{
                                        navigate(`/blog/${item.id}`)
                                    }} className='cursor-pointer hover:text-violet-700 fw-semibold '>Explore more <KeyboardArrowRight/></p>
                        
                            
                        </div>
                    )

                })}
        </div>
        <ReactPaginate
          breakLabel="..."
          nextLabel=">>"
          onPageChange={handlePageClick}
          pageRangeDisplayed={1}
          pageCount={pageCount}
          previousLabel="<<"
          containerClassName='pagination'
          pageLinkClassName='page-num'
          previousLinkClassName='page-num'
          nextLinkClassName='page-num'
          activeLinkClassName='active'
        />
      </>
    );
}

export default Pagination