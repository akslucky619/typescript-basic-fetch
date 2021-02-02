import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";

interface TODO {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((res) => {
  const todo = res.data as TODO;

  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;
  logTodo(id,title,completed)
});

const logTodo = (id:number, title:string, completed:boolean) => {

    console.log(
        `Todo ID: ${id}
          Has Title:${title}
          Is it Finished:${completed}`
      );
    
}
