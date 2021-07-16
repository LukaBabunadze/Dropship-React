
export const getProductsAction = (products) => {
    return{
        type: "PRODUCT_FETCH",
        payload: products,
    }
};
// export const getSortAction = (products) => {
//     const sortArray = type => {
//         const types = {
//             highToLow: "price",
//             lowToHigh: "price",
//             aToZ: "title",
//             zToA: "title",
//         };
//         const sortProperty = types[type];
//         const sorted = [...products].sort((a, b) => {if (type === "highToLow") {
//                 return (b[sortProperty] - a[sortProperty]);
//             } else if (type === "lowToHigh") {
//                 return (a[sortProperty] - b[sortProperty]);
//             }
//             else if (type === "aToZ" && (b[sortProperty] > a[sortProperty])) {
//                 return -1;
//             }
//             else if (type === "zToA" && (a[sortProperty] > b[sortProperty])) {
//                 return - 1;
//             };
//             }
//         );
//         setProducts(sorted);
//     };
// };