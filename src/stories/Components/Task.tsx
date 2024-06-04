import React from "react";
import "../../index.css";

interface TaskProps {
  isComplete?: boolean;
  title: string;
  description: string;
}

export const Task = ({ isComplete, title, description }: TaskProps) => {
  const complete = isComplete
    ? ".storybook-task--complete"
    : ".storybook-task--incomplete";
  return (
    <div className="flex items-start block max-w-sm p-6 bg-white border border-gray-100 rounded-lg shadow hover:bg-gray-100 dark:bg-white-100 dark:border-white-800 dark:hover:bg-white-800">
      <div className="flex items-center h-5">
        <input
          id="completebox"
          type="checkbox"
          value=""
          className="w-12 h-12 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-green-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
          required
        />
      </div>
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-black-900 dark:text-black">
          {title}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
      </div>
    </div>
  );
};
