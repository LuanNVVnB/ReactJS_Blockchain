export const GET_ALL_PROVINCE = 'GET_ALL_PROVINCE';

export const getAllProvinces = (formData) => {
    return {
        type: GET_ALL_PROVINCE,
        payload: formData
    }
}
