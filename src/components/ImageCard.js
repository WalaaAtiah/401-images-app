import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./main.css"
function ImageCard(props) {

    let [numOfliks, setNumOfliks] = useState(0);

    const IncreasNumOFLiks = () => {
        // increment num of liks
        setNumOfliks(numOfliks+1)
        // increment num of total likes
        props.increment();
    }

    return (
        <>
            <Card className='card' style={{ width: '18rem' }}>
            <Card.Title>{props.id}</Card.Title>
                <Card.Img className='img' variant="top" src={props.img} onClick={IncreasNumOFLiks} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        <p>Num of likes: {numOfliks} 💕 </p>
                    
                    </Card.Text>
                    
                </Card.Body>
            </Card>
        </>
    )
}

export default ImageCard;