import React, { useCallback } from "react";
import { SetterOrUpdater, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { todoTitleFormState } from "../atoms/TodoTitleFormAtom";

export const TitleForm: React.FC = () => {
  const [todoTitleFormValue, setTodoTitleFormValue] =
    useRecoilState(todoTitleFormState);

  // より厳密に書くと下記のようになる
  // const todoTitleFormValue: string = useRecoilValue(todoTitleFormState);
  // const setTodoTitleFormValue: SetterOrUpdater<string> = useSetRecoilState(todoTitleFormState);

  const titleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setTodoTitleFormValue(e.target.value);
    },
    [setTodoTitleFormValue]
  );

  return (
    <label>
      Task :
      <input
        type="text"
        value={todoTitleFormValue}
        onChange={titleChange}
        name="title"
        style={{ margin: 12 }}
      />
    </label>
  );
};
