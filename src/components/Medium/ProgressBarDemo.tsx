import React, { useState } from "react";

const ProgressBar: React.FC<{ progress: number }> = ({ progress }) => {
  return (
    <div className="w-full bg-gray-200 rounded-full h-6">
      <div
        className="bg-blue-500 h-6 rounded-full text-white flex items-center justify-center text-sm"
        style={{ width: `${progress}%` }}
      >
        {progress}%
      </div>
    </div>
  );
};
const ProgressBarDemo: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const increaseProgress = () => {
    setProgress((prevProgress) =>
      prevProgress < 100 ? prevProgress + 10 : 100
    );
  };
  return (
    <div className="flex flex-col items-center space-y-4 p-6">
      <ProgressBar progress={progress} />
      <button
        className="bg-amber-400 text-white px-4 py-2 rounded-lg hover:bg-amber-600"
        onClick={increaseProgress}
      >
        Increase Progress
      </button>
    </div>
  );
};

export default ProgressBarDemo;
