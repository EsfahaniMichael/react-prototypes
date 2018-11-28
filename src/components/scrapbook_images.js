import React from 'react';

export default props => {
    console.log('scrabook props', props)
    const {src} = props.about;
    return (
        <img src={src}/>
    )
}