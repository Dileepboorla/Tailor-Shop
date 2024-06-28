// blouse.js
import { useState, useEffect } from 'react';
import axios from 'axios'
import PropTypes from 'prop-types';
import './blouse.css';

function Createcard(props) {
    return (
        <div key={props.id} className='card'>
            <p>{props.name}</p>
            <h1>{props.code}</h1>
            <img src={props.imgUrl} alt="IMAGE" />
            <p>{props.price}</p>
            <p>{props.description}</p>
        </div>
    );
}

Createcard.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

function Blouse() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://form-f623f-default-rtdb.firebaseio.com/form.json`);
                const dataArray = Object.keys(response.data).map(key => ({
                    id: key,
                    ...response.data[key]
                }));
                setData(dataArray);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
        <div className='background1'></div>
            <center><h1 className='h1tag1'>Here are few designs</h1></center>
            <div className="Container">
                {data.map(item => (
                    <Createcard
                        key={item.id}
                        name={item.name}
                        code={item.code}
                        imgUrl={item.imgUrl}
                        price={item.price}
                        description={item.description}
                    />
                ))}
            </div>
        </div>
    );
}

export default Blouse;
