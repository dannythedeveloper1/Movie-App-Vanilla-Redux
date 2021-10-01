const initialState = {
	searchValue: "",
	searchData: [],
	movieDetail: {},
	favs: [],
};
const searchReducer = (state = initialState, action) => {
	switch (action.type) {
		case "SEARCH":
			return { ...state, searchData: action.payload };
		case "CHANGE":
			return { ...state, searchValue: action.payload.target.value };
		case "DETAIL":
			return { ...state, movieDetail: action.payload };
        case "FAVS":
            // const favsCopy = [...state.favs,action.payload];
            // console.log(favsCopy);
			return { ...state, favs:action.payload };
		default:
			return state;
	}
};

export default searchReducer;
