import { GET_PRODUCTS, ADD_PRODUCT, DELETE_PRODUCT } from "./types";

export const fetchPost = () => dispatch => {
    /*fetch('https://jsonplaceholder.typicode.com/posts')
        .then(result => result.json())
        .then(posts => dispatch({
            type: FETCH_POSTS,
            payload: posts
        }));*/
};



export function addProduct(product)  {
	return (dispatch) => {
			dispatch({
			type : ADD_PRODUCT,
			payload: product
		});
	}
};

export function deleteProduct(product)  {
	console.log(product);
	return (dispatch) => {
			dispatch({
			type : DELETE_PRODUCT,
			payload: product
		});
	}
};