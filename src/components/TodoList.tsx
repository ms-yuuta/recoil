import { useRecoilValue } from "recoil";
import { searchedTodoListSelector } from "../selectors/SearchedTodoListSelector";
import Todo from "../types/Todo";

export const TodoList: React.FC = () => {
  const list: Todo[] = useRecoilValue(searchedTodoListSelector);
  return (
    <div>
      <p>Task List</p>
      <ul>
        {list.map((todo: Todo, i: number) => {
          return <li key={`${todo.title}_${i}`}>{todo.title}</li>;
        })}
      </ul>
    </div>
  );
};
