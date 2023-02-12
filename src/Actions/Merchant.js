import axios from "axios"

export const addShop = (shopname, description, category, GSTIN, state, city, pincode) => async(dispatch) => {

    try {

        dispatch({
            type:"addShopRequest"
        })

        const {data} = await axios.post(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/merchant/add/shop`,{
            shopname,
            description,
            category,
            GSTIN,
            state,
            city,
            pincode
        },{
            headers:{
                "Content-Type":"application/json"
            }
        })

        dispatch({
            type:"addShopSuccess",
            payload:data.message
        })
        
    } catch (error) {
        dispatch({
            type:"addShopFailure",
            payload:error.response.data.message
        })
    }
}