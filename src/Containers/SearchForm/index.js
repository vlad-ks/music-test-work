import {toJS} from "mobx";
import {observer} from "mobx-react-lite";
import debounce from "lodash/debounce";
import useRootStore from "store/useRootStore";
import SearchSuggest from "Components/SearchSuggest";


const SearchForm = () => {
	const {Search} = useRootStore();

	function changeHandler(val) {
		Search.getItems(val);
	}


	return (
		<SearchSuggest
			items={toJS(Search.items)}
			term={toJS(Search.term)}
			onChange={debounce(changeHandler, 100)}
		/>
	)
}

export default observer(SearchForm);