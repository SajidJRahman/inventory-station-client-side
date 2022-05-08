import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const useMyItems = () => {
    const [user] = useAuthState(auth);
    const [myItems, setMyItems] = useState([]);

    useEffect(() => {
        const currentUser = user.email;
        fetch(`http://localhost:5000/my-items?email=${currentUser}`)
            .then(response => response.json())
            .then(data => setMyItems(data))
    }, [user.email]);

    return [myItems, setMyItems]
};

export default useMyItems;