import React from 'react';

const Bookinfo = (props) => {
    return (
        <div>
            <h4 className="year">{props.year}</h4>
            <h4 className="author">{props.author}</h4>
            <h4 className="title">{props.title}</h4>
        </div>
    );
}

export default Bookinfo;
