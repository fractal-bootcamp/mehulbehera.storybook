import { useState } from "react";
import "../../index.css";
import { Task, TaskProps } from "./Task";

//taskprops
//isComplete?: boolean;
//  title: string;
//  description: string;

interface TaskListProps {
  tasks: TaskProps[];
}

export const TaskList = ({ tasks }: TaskListProps) => {
  const [updateableTasks, setTasks] = useState(tasks);

  //update task when clicked
  function updateTasks(idToChange: number) {
    //flip the iscompleted  variable
    const updatedTasks = updateableTasks.map((task, index) => {
      if (index === idToChange) {
        return { ...task, isComplete: task.isComplete };
      }
      return task;
    });

    const sortedTasks = updatedTasks.sort((a, b) => {
      if (a.isComplete && !b.isComplete) {
        return -1;
      }
      if (!a.isComplete && b.isComplete) {
        return 1;
      }
      return 0;
    });

    setTasks(sortedTasks);
  }

  return (
    <div>
      {tasks.map((item, index) => {
        return <Task task={item} onToggle={() => updateTasks(index)} />;
      })}
    </div>
  );
};
