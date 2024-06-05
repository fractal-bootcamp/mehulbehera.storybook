import React from "react";
import "../../index.css";
import { useState } from "react";

export interface TaskProps {
  isComplete: boolean;
  title: string;
  description: string;
}

export const Task = ({
  task,
  onToggle,
}: {
  task: TaskProps;
  onToggle: () => void;
}) => {
  const complete = task.isComplete
    ? ".storybook-task--complete"
    : ".storybook-task--incomplete";

  const bgColor = task.isComplete ? "bg-green-700" : "bg-gray-200";
  const bgColorBox = task.isComplete ? "bg-green-200" : "bg-white";

  return (
    <div
      className={
        "flex flex-row max-w-sm p-6 border border-gray-100 rounded-lg shadow hover:bg-gray-100 " +
        bgColorBox
      }
    >
      <div className="flex align items-center">
        <button
          onClick={onToggle}
          className={"w-12 h-12 border border-gray-300 rounded-lg " + bgColor}
        />
      </div>
      <div className="flex flex-col justify-between p-4">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-black-900 dark:text-black">
          {task.title}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {task.description}
        </p>
      </div>
    </div>
  );
};
