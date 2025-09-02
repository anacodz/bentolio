import React from 'react';
import { User } from 'lucide-react';

const About = () => {
  return (
    <div id="about" className="h-full p-4 md:p-6 flex flex-col justify-between">
      <div className="flex items-center gap-2 mb-3">
        <User size={18} className="text-[#111827]" />
        <h2 className="custom-connect-h2 text-lg font-semibold">About Me</h2>
      </div>
      
      <div className="flex-1">
        <p className="mb-3 text-[#111827]/80 text-sm">
          A final-year B.Tech IT student eager to begin my career at the intersection of data, technology, and business impact. I am passionate about building data-driven solutions from machine learning models to cloud-native services that transform raw information into actionable insights. With hands-on experience in projects like resume analyzers, job-role classifiers, and file-sharing systems.
        </p>
      </div>
      
      <div className="mt-4 text-[#eeddd3]">
        <h3 className="font-medium mb-3 text-sm text-[#111827]">Tech Stack</h3>
        <div className="flex flex-wrap gap-2 items-center">
          {/* Replace the src URLs with your own local assets if available */}
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="python" title="Python" className="h-10 w-10 bg rounded-full p-1" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="mysql" title="MySQL" className="h-10 w-10 bg rounded-full p-1" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="git" title="Git" className="h-10 w-10 bg rounded-full p-1" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" alt="c" title="C" className="h-10 w-10 bg rounded-full p-1" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" alt="linux" title="Linux" className="h-10 w-10 bg rounded-full p-1" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="figma" title="Figma" className="h-10 w-10 bg rounded-full p-1" />
          <img src="https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png" alt="vercel" title="Vercel" className="h-10 w-10 bg rounded-full p-1" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="java" title="Java" className="h-10 w-10 bg rounded-full p-1" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" alt="numpy" title="NumPy" className="h-10 w-10 bg rounded-full p-1" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" alt="tensorflow" title="TensorFlow" className="h-10 w-10 bg rounded-full p-1" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg" alt="matplotlib" title="Matplotlib" className="h-10 w-10 bg rounded-full p-1" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" alt="pandas" title="Pandas" className="h-10 w-10 bg rounded-full p-1" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="github" title="github" className="h-10 w-10 bg rounded-full p-1" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="vscode" title="VS Code" className="h-10 w-10 bg rounded-full p-1" />
        </div>
      </div>
    </div>
  );
};

export default About;