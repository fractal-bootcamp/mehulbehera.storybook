import React from "react";
import "../../index.css";

export interface TaskProps {
  isComplete?: boolean;
  title: string;
  description: string;
}

export const Task = ({ isComplete, title, description }: TaskProps) => {
  const complete = isComplete
    ? ".storybook-task--complete"
    : ".storybook-task--incomplete";
  return (
    <div className="flex flex-row max-w-sm p-6 bg-white border border-gray-100 rounded-lg shadow hover:bg-gray-100 dark:bg-white-100 dark:border-white-800 dark:hover:bg-white-800">
      <div className="flex align items-center">
        <input
          id="completebox"
          type="checkbox"
          value=""
          className="w-12 h-12 accent-green-500 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          required
        />
      </div>
      <div className="flex flex-col justify-between p-4">
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
