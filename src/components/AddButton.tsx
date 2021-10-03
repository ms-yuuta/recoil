import { useCallback } from "react";
import { SetterOrUpdater, useRecoilState, useSetRecoilState } from "recoil"
import { todoListState } from "../atoms/TodoListAtom"
import { todoTitleFormState
 } from "../atoms/TodoTitleFormAtom";
import Todo from "../types/Todo";


export const AddButton: React.FC = () => {
  const [todoTitleFormValue, setTodoTitleFormValue] = useRecoilState(todoTitleFormState);
  const setTodoListValue: SetterOrUpdater<Todo[]> = useSetRecoilState(todoListState);

  const handleClick = useCallback(() => {
    setTodoListValue((prevList: Todo[]) => {
      return [...prevList, {title: todoTitleFormValue}]
    });
    setTodoTitleFormValue('');
  },[todoTitleFormValue, setTodoListValue, setTodoTitleFormValue])

  return <button onClick={handleClick}>ADD</button>
}