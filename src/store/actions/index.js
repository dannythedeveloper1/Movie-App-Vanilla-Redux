export const darkMode = () => {
    return {
        type: "DARK_MODE"
    };
}

export const search = (searchTerm) => {
    return {
        type: "SEARCH",
        payload: searchTerm
    };
}

export const change = (event) => {
    return {
        type: "CHANGE",
        payload: event
    };
}

export const detail = (movieId) => {
    return {
        type: "DETAIL",
        payload:movieId
    };
}

export const openModal = () => {
    return {
        type:'OPEN_MODAL'
    };
}

export const closeModal = () => {
    return {
        type:'CLOSE_MODAL'
    };
}

export const favs = (id) => {
    return {
        type: 'FAVS',
        payload: id
    }
}

export const delFavs = (id) => {
    return {
        type: 'DEL_FAVS',
        payload: id
    }
}

