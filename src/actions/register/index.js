export const REGISTER_DO_REGISTER = 'REGISTER_DO_REGISTER';

export function doRegister(data) {
    return {
        type: REGISTER_DO_REGISTER,
        payload: data
    }
}