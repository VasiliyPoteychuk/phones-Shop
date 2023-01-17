import { useEffect, useState } from "react"

import { Link, useParams } from "react-router-dom"
import Rating from "./rating"

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
      <Link to={'/products'}>назад</Link>
      <div className="card d-flex flex-row">
        <div>
          <img className="w-50 rounded mx-auto d-block" src={imgSrc[0]}/>
        </div>
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

  
          
        </div>
      </div>
    </div>
    
  )
}