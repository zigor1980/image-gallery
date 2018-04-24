export default function images(state, action) {
    if (!state) {
        return {
            items: [],
            offset: 0,
            end: false,
        };
    }
    switch (action.type) {
    case 'IMAGES_FETCH':
        return {
            ...state,
            items: [...state.items, ...action.data],
            offset: action.offset,
            end: action.end,
        };
    default:
        return state;
    }
}
