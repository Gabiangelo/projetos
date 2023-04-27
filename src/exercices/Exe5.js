import {useEffect, useState} from 'react';

const Count = () => {
    const [count, updateCount] = useState(0);

    useEffect( () => {
            updateCount(count + 1);
    }, []);

    return (
        <div className='result'>
            {count}
        </div>
    );
};

export default Count;