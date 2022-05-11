import React from "react";

export const Content = (props) => {
    const {items} = props;
    return <div className="Content">
        {items.map(data => 
            <div className="Content__card" key={data.id}>
                <img src={data.src} alt={data.alt} />
                <div className="Card__caption">
                    <h2>{data.title}</h2>
                    <p>{data.price}</p>
                </div>
            </div>
        )}
    </div>;
};
