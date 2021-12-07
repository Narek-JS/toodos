
import { useContext } from 'react';
import { ToodoContext } from '../../context';
import { useParams } from 'react-router';
import { List } from '..';

const WrapperLists = () => {
    const { data } = useParams();
    const { toodos } = useContext(ToodoContext);

    return toodos[data] ? toodos[data].map((itam, index) => (
        <List 
            key={index}
            itam={itam}
            index={index}
        />
    )) : []
}

export { WrapperLists }