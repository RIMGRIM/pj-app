import React from 'react';
import { Link } from 'react-router-dom';

function Card({ cardData }) {
    const { id, imgSrc, title, desc } = cardData;

    let route;
    switch (id) {
        case 1:
            route = '/A';
            break;
        case 2:
            route = '/B';
            break;
        case 3:
            route = '/C';
            break;
        case 4:
            route = '/D';
            break;
        default:
            route = '/';
            break;
    }

    return (
        <div className="card">
            <img src={`/pic/${imgSrc}`} className="card-img-top" alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{desc}</p>
                <Link to={route} className="btn btn-primary">詳細資料</Link>
            </div>
        </div>
    );
}

export default Card;
