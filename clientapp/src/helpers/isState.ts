export function isSuccess(state: string | undefined) {
    if (state)
        return state.toLowerCase() === "success";
    else
        return false;
}