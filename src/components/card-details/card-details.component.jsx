import React from "react";
import './card-details.styles.css'
import { Howl } from 'howler';

export const CardDetails = (props) => {
    const kanjiDetails = props.location.state;

    const soundPlay = (src) => {
        const sound = new Howl({
            src,
            html5: true
        })
        sound.play();
    }

    return (<div className=''>
                <div className="card-details">
                    <div className="card-details-video">
                        <video poster={kanjiDetails.image}
                        onMouseOver={event => event.target.pause()} onMouseOut={event => event.target.play()}
                        src={kanjiDetails.video} autoPlay loop>
                            Your browser does not support the HTML5 Video element
                        </video>
                    </div>
                    <div className="card-details-contents">
                        <h1>kanji: {kanjiDetails.character}</h1>
                        <p>meaning: {kanjiDetails.meaning}</p>
                        <p>onyomi: {kanjiDetails.onyomi.katakana} ({kanjiDetails.onyomi.romaji})</p>
                        <p>kunyomi: {kanjiDetails.kunyomi.hiragana} ({kanjiDetails.kunyomi.romaji})</p>
                    </div>
                    <div className="card-details-examples">
                        {/* <p>Examples</p> */}
                        <table>
                            <tbody>
                                <tr>
                                    <th>Examples</th>
                                    <th>Meaning</th>
                                    <th>Play</th>
                                </tr>
                                {kanjiDetails.examples.map(ex => (
                                    <tr key={ex.id} className="card-details-examples-contents">
                                        <td>{parseInt(ex.id, 10)+1}. {ex.example_japanese}</td>
                                        <td>{ex.example_meaning} &nbsp;</td>
                                        <td><button onClick={() => soundPlay(ex.example_audio)}>&nbsp;&#9658;&nbsp;</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                {/* {console.log(kanjiDetails)} */}
            </div>
            );
};