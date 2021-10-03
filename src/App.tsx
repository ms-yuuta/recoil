import React from "react";
import "./App.css";
import { AddButton } from "./components/AddButton";
import { SearchForm } from "./components/SearchForm";
import { TitleForm } from "./components/TitleForm";
import { TodoList } from "./components/TodoList";

const App: React.FC = () => {
  return (
    <div style={{ margin: 12 }}>
      <div>
        <TitleForm />
        <AddButton />
      </div>
      <SearchForm />
      <TodoList />
    </div>
  );
};

export default App;
