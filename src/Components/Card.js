import React from 'react'
import '../Assets/Styles/Card.css'

export default function Card(props) {
    return (
        <div className="card_container">
            <div className="img_div">
                <img src={props.article.enclosure.url} width="100%" alt="img" />
            </div>
            <div className="content_div">
                <a rel="noreferrer" target="_blank" href={props.article.link}>{props.article.title}</a>
            </div>
        </div>
    )
}
