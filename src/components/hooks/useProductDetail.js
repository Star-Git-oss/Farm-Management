import { useEffect, useState } from "react";

const useProductDetail = (productId) => {
    const [singleProduct, setProduct] = useState({});
    console.log(singleProduct);

    useEffect(() => {
        const url = `https://cryptic-ridge-39056.herokuapp.com/product/${productId}`;

        console.log(url);
        fetch(url)
            .then((res) => res.json())
            .then((data) => setProduct(data));
    }, [singleProduct]);
    return [singleProduct];
};

export default useProductDetail;
