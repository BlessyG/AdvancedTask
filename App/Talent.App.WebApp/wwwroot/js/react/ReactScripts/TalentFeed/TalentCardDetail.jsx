import React from 'react';
import ReactDOM from 'react-dom';
import ReactPlayer from 'react-player';

export default class TalentCardDetail extends React.Component {
    render() {
        return (
            <div className="ui video custom">
                <ReactPlayer url="https://www.youtube.com/watch?v=sBws8MSXN7A" playing style={{ width: '450px', height: '360px'}}/>
                </div>
            )
    }
}