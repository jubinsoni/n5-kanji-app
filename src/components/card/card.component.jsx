import React from "react";
import './card.styles.css'
import { useHistory } from 'react-router-dom';


export const Card = (props) => {
    const history = useHistory();
    return (
        <div className='card-container' onClick={() => history.push({pathname:`/details/${props.kanjiName.id}`,state:props.kanjiName})}>
            {/* <button onClick={() => props.history.push('/topics')}>sdds</button> */}
            {/* <img alt="kanji" src={`https://robohash.org/${props.kanjiName.id}?set=set2&size=180x180`} /> */}
            {/* <img alt="kanji" src={props.kanjiName.image} width="180" height="180"/> */}
            <img alt="kanji" src={props.kanjiName.image} />
            <h1>{ props.kanjiName.meaning }</h1>
            <p>{ props.kanjiName.onyomi.katakana } ({ props.kanjiName.onyomi.romaji })</p>
            <p>{ props.kanjiName.kunyomi.hiragana } ({ props.kanjiName.kunyomi.romaji })</p>
        </div>
    );
};