import { useEffect, useState } from "react";

export const useAsync = (asyncFunction, dependencies = []) => {
    const [data, setData] = useState({});
    const [fetchError, setFetchError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const executeAsync = async () => {
            setIsLoading(true);
            try {
                const data = await asyncFunction();
                setData(data);
            } catch (error) {
                setFetchError(error.message);
                setData({});
            } finally {
                setIsLoading(false);
            }
        };

        executeAsync();
    }, dependencies);

    return {
        data,
        fetchError,
        isLoading
    };
};
