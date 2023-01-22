import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import api from '../../api/products';
import Slider from "./Slider";

export default function View(){

    const [product, setProduct] = useState();
    const {id} = useParams();

    useEffect(()=>{
      api.getProduct(id)
          .then(resp => setProduct(resp.data.data))
    },[id])

    return <div>
        {product &&
            (<div><h1>{product.title}</h1>
            <Slider images={product.images}/>
            </div>)
        }
    </div>
}