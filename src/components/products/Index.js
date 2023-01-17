import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchAll, metaSelect, productSelect} from "../../store/productSlice";
import Card from "./Card";
import '../../styles/products/card.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../../styles/products/rating.css';
import Pagination from "./Pagination";
import {useSearchParams} from "react-router-dom";

export default function Index() {
    const products = useSelector(productSelect)
    const meta = useSelector(metaSelect)
    const dispatch = useDispatch()
    const [searchParams] = useSearchParams();
    const page = searchParams.get('page') ?? 1;
    useEffect(() => {
        dispatch(fetchAll({page}))
    }, [page])
    return (<>
            <main className='products-container'>
                {products.map(p => <Card key={p.id} product={p}/>)}

            </main>
            <Pagination className='mt-5' meta={meta}/>
        </>)
}