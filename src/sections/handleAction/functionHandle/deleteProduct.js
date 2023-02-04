import axiosAuth from 'src/utils/axios';
function deleteProduct(idProduct) {
    axiosAuth({
        method: 'DELETE',
        url: `/api/products/${idProduct}`
    })
        .then(res => console.log(res))
}
export default deleteProduct
