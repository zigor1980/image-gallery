export default function fetchImages() {
    return async function (dispatch, getState) {
        try {
            let offset = getState().images.offset;
            let response = await fetch(`https://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=07tdqxOlkiUUHsHsIhyupUWo3nsUqmE1&offset=${offset}`);
            let json = await response.json();
            console.log(json);
            const { data, pagination } = json;
            let { total_count } = pagination;
            offset += 25;
            const end = (offset > total_count-25);
            dispatch({
                type: 'IMAGES_FETCH',
                data,
                offset,
                end,
            });
        } catch (error) {
            dispatch({
                type: 'IMAGES_ERROR',
                error,
            });
        }
    };
}
