import { Button } from "components/Button/Button";
import css from "./TaskForm.module.css";

import { useDispatch } from "react-redux";
// Импортируем генератор экшена
import { addTask, addChangeFilter } from "../../redux/actions";

export const TaskForm = () => {
  const dispatch = useDispatch();


  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    // Вызываем генератор экшена и передаем текст задачи для поля payload
    // Отправляем результат - экшен создания задачи
    dispatch(addTask(form.elements.text.value));
    form.reset();
  };

  const handleChange = e => {
    
    console.log(e.target.value);
    dispatch(addChangeFilter(e.target.value));
  }

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        className={css.field}
        type="text"
        name="text"
        placeholder="Enter task text..."
      />
      <Button type="submit">Add task</Button>
    </form>
  );
};