import { useState, useEffect } from 'react';

export const useFetch = (url, options = {}) => {
    const [data, setData] = useState(); 
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            try {
                const response = await fetch(url, options);
                const data = await response.json();
                setData(data);
                setLoading(false);
            } catch (error) {
                setError(true);
                setLoading(false);
            }
        };
        fetchData();
    }, [url]);
    return { data, loading, error };
};
