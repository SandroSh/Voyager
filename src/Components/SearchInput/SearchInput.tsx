import { SetStateAction, useState } from "react";
import { InputContainer } from "./SearchInput.style"
// import { useDebounceSearch } from "../../CustomHooks/useDebounceSearch";
import { useDispatch} from "react-redux";
import { setValue } from "../../state/Search/searchSlice";





export const SearchInput = () => {
    const [searchedValue, setSearchedValue] = useState<string>("");
    // const debauncedSearch = useDebounceSearch(searchedValue);
    const dispatch = useDispatch();
    const handleChange = (e: { target: { value: SetStateAction<string>; }; }) => {
        setSearchedValue(e.target.value);
        dispatch(setValue(e.target.value));
    }
   
    return (
        <div>
            <InputContainer>
                <input type="text" value={searchedValue} onChange={handleChange} placeholder="Search Country..." />
            </InputContainer>

        </div>
    )
}




