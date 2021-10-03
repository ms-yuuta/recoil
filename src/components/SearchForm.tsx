import React, { useCallback } from "react";
import { useRecoilState } from "recoil";
import { searchTextFormState } from "../atoms/SearchTextFormAtom";

export const SearchForm: React.FC = () => {
  const [SearchTextFormValue, setSearchTextFormValue] = useRecoilState(searchTextFormState)
  
  const formChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTextFormValue(e.target.value);
  }, [setSearchTextFormValue])
  
  return (
    <label>
      Search :
      <input
        type="text"
        value={SearchTextFormValue}
        onChange={formChange}
        name="title"
        style={{ margin: 12 }}
      />
    </label>
  );
};
