import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import Rating from "./rating"

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Product(){
const [product, setProduct] = useState({})
const [imgSrc, setImgSrc] = useState([])
const {id} = useParams()

useEffect(()=>{
  (async() => {
    const responce = await fetch(`http://194.87.94.216/api/products/${id}`)
    const json = await responce.json()
    setProduct(json.data)
    setImgSrc(json.data.images)
  })()
},[id])

  return(
    <div className="">
      <Link to={'/products'}>
        <button type="button" class="close" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </Link>
      <div className="card d-flex flex-row">
        {/* <div>
          <img src={imgSrc[0]}/>
        </div> */}

        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={100}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          //scrollbar={{ draggable: true }}
          className='w-50'
        >
          <SwiperSlide><img className="" src={imgSrc[0]}/></SwiperSlide>
          <SwiperSlide><img className="" src={imgSrc[1]}/></SwiperSlide>
          <SwiperSlide><img className="" src={imgSrc[2]}/></SwiperSlide>
          <SwiperSlide><img className="" src={imgSrc[3]}/></SwiperSlide>
          <SwiperSlide><img className="" src={imgSrc[4]}/></SwiperSlide>
          <SwiperSlide><img className="" src={imgSrc[5]}/></SwiperSlide>
        </Swiper>

        <div>
          <h3>{product.title}</h3>
          <p><Rating value={product.rating}/>{product.rating}</p>
          <p className="font-weight-bold">${product.price}</p>
         
          <table className="table">
            <tbody>
              <tr>
                <td className="p-0">бренд:</td>
                <td className="p-0">{product.brand}</td>
              </tr>
              <tr>
                <td className="p-0">год:</td>
                <td className="p-0">{product.year}</td>
              </tr>
              <tr>
                <td className="p-0">ОС:</td>
                <td className="p-0">{product.os}</td>
              </tr>
              <tr>
                <td className="p-0">ядро:</td>
                <td className="p-0">{product.core}</td>
              </tr>
              <tr>
                <td className="p-0">ядер:</td>
                <td className="p-0">{product.core_count}</td>
              </tr>
              <tr>
                <td className="p-0">ОЗУ:</td>
                <td className="p-0">{product.ram}GB</td>
              </tr>
              <tr>
                <td className="p-0">карта памяти:</td>
                <td className="p-0">{product.sdcart? "да":"нет"}</td>
              </tr>
              <tr>
                <td className="p-0">высота:</td>
                <td className="p-0">{product.height}мм</td>
              </tr>
              <tr>
                <td className="p-0">ширина:</td>
                <td className="p-0">{product.width}мм</td>
              </tr>
              <tr>
                <td className="p-0">толщина:</td>
                <td className="p-0">{product.thickness}мм</td>
              </tr>
              <tr>
                <td className="p-0">вес:</td>
                <td className="p-0">{product.weight}гр</td>
              </tr>
              <tr>
                <td className="p-0">сим:</td>
                <td className="p-0">{product.sim_count}</td>
              </tr>
              <tr>
                <td className="p-0">диагональ:</td>
                <td className="p-0">{product.screen_size}</td>
              </tr>
              <tr>
                <td className="p-0">материал:</td>
                <td className="p-0">{product.material}</td>
              </tr>
              <tr>
                <td className="p-0">цвет:</td>
                <td className="p-0">{product.color}</td>
              </tr>
              <tr>
                <td className="p-0">навигация:</td>
                <td className="p-0">{product.gps?'да':'нет'}</td>
              </tr>
              <tr>
                <td className="p-0">bluetooth:</td>
                <td className="p-0">{product.bluetooth?'да':'нет'}</td>
              </tr>
              <tr>
                <td className="p-0">wi-fi:</td>
                <td className="p-0">{product.wi_fi?'да':'нет'}</td>
              </tr>
              <tr>
                <td className="p-0">тип зарядки:</td>
                <td className="p-0">{product.connector}</td>
              </tr>
              <tr>
                <td className="p-0">безпроводная зарядка:</td>
                <td className="p-0">{product.wireless_charge?'да':'нет'}</td>
              </tr>
              <tr>
                <td className="p-0">быстрая зарядка:</td>
                <td className="p-0">{product.fast_charge?'да':'нет'}</td>
              </tr>
              <tr>
                <td className="p-0">аккумулятор: </td>
                <td className="p-0">{product.accumulator}</td>
              </tr>
              
            </tbody>
          </table>
          <div className="d-flex flex-row">
            <div className="form-check">
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
              <label className="form-check-label" for="flexRadioDefault1">черный</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
              <label className="form-check-label" for="flexRadioDefault2">белый</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3"/>
              <label className="form-check-label" for="flexRadioDefault3">красный </label>
            </div>
          </div>
          
          <div className="btn-group" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-warning">купить</button>
            <button type="button" className="btn btn-primary"><i className="bi bi-cart"></i>добавить в корзину</button>
            <button type="button" className="btn btn-light"><i className="bi bi-heart"></i>сохранить</button>
          </div>
  
          
        </div>
      </div>
    </div>
    
  )
}