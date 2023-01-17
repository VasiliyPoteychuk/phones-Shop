import _ from 'lodash';
import {NavLink} from "react-router-dom";
export default function Pagination({meta}){
    return (
        <nav>
            <ul className="pagination">
                <li className="page-item">
                    <NavLink className="page-link" to={`/products?page=${meta.current_page-1}`} aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </NavLink>
                </li>
                {_.range(1,meta.total_pages).map( (p)=> <li className="page-item"><NavLink  className={() => (p===meta.current_page ? 'active page-link' : 'page-link')} to={`/products?page=${p}`}>{p}</NavLink></li>)}
                <li className="page-item">
                    <NavLink className="page-link" to={`/products?page=${meta.current_page+1}`} aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}