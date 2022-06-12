import type { Component } from "solid-js";
import { createSignal } from "solid-js";

const App: Component = () => {
  return (
    <div class="m-3 flex flex-col gap-3">
      <Counter />
      <Todo />
    </div>
  );
};

const Counter: Component = () => {
  const [getCount, setCount] = createSignal(0);

  return (
    <div>
      <h3 class="text-3xl">Counter</h3>
      <p>Count: {getCount()}</p>
      <div class="flex gap-3">
        <button onClick={() => setCount((prev) => prev + 5)} class="border border-black w-8 bg-green-300">
          +5
        </button>
        <button onClick={() => setCount((prev) => prev + 1)} class="border border-black w-8 bg-green-200">
          +1
        </button>
        <button onClick={() => setCount((prev) => prev - 1)} class="border border-black w-8 bg-red-200">
          -1
        </button>
        <button onClick={() => setCount((prev) => prev - 5)} class="border border-black w-8 bg-red-300">
          -5
        </button>
      </div>
    </div>
  );
};

type Todo = {
  title: string;
  desc: string;
};

const Todo: Component = () => {
  const [getTodo, setTodo] = createSignal<Todo[]>([]);

  const addTodo = (todo: Todo): void => {
    setTodo((prev) => [...prev, todo]);
  };

  return (
    <div>
      <h3 class="text-3xl">Todo</h3>
      <TodoForm addTodo={addTodo} />
      <p>Tasks: {getTodo().length}</p>
      <ul class="list-disc list-inside pl-3">
        {getTodo().map((todo) => (
          <li>
            <span class="font-semibold">{todo.title}</span> - <span class="font-light">{todo.desc}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

type TodoFormProps = {
  addTodo: (todo: Todo) => void;
};

const TodoForm: Component<TodoFormProps> = (props) => {
  const [title, setTitle] = createSignal<string>("");
  const [desc, setDesc] = createSignal<string>("");

  return (
    <div class="flex gap-3">
      <div class="flex gap-1">
        <label for="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          class="border border-black"
          value={title()}
          onInput={(event) => {
            setTitle(event.currentTarget.value);
          }}
        />
      </div>
      <div class="flex gap-1">
        <label for="desc">Description:</label>
        <input
          type="text"
          id="desc"
          name="desc"
          class="border border-black"
          value={desc()}
          onInput={(event) => {
            setDesc(event.currentTarget.value);
          }}
        />
      </div>
      <button class="border border-black bg-gray-200 w-10" onClick={() => props.addTodo({ title: title(), desc: desc() })}>
        Add
      </button>
    </div>
  );
};

export default App;
