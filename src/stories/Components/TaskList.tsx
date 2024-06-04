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
  return (
    <div>
      {tasks.map((item) => (
        <Task
          title={item.title}
          description={item.description}
          isComplete={item.isComplete}
        />
      ))}
    </div>
  );
};
