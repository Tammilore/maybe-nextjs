import React from 'react';
import ToolsList from '../components/ToolsList';
import CTAWaitlist from '../components/CTAWaitlist';

// Example data. In a real app, you'd fetch this data from an API or server.
const toolsData = [
    {
      id: 1,
      name: "Tool 1",
      description: "Description of Tool 1",
      category: {
        name: "Category 1",
        bgClass: "bg-blue-100",
        textClass: "text-blue-800",
        solidBgClass: "bg-blue-800",
      },
      icon: "calculator", // Example icon name
    },
    {
      id: 2,
      name: "Tool 2",
      description: "Description of Tool 2",
      category: {
        name: "Category 2",
        bgClass: "bg-blgreenue-100",
        textClass: "text-green-800",
        solidBgClass: "bg-green-800",
      },
      icon: "circle", // Example icon name
    },
    {
      id: 1,
      name: "Tool 3",
      description: "Description of Tool 3",
      category: {
        name: "Category 3",
        bgClass: "bg-red-100",
        textClass: "text-red-800",
        solidBgClass: "bg-red-800",
      },
      icon: "dollar", // Example icon name
    },
    // Add more tool objects here...
  ];

const ToolsPage: React.FC = () => {
  return (
    <div className="max-w-[1100px] mx-auto text-center">
      <div className="flex flex-col gap-y-2 max-w-[500px] mx-auto text-balance">
        <div className="flex items-center justify-center gap-x-2">
          <h1 className="text-3xl font-medium tracking-tight">Try our free financial tools and calculators</h1>
        </div>
        <p className="text-gray-600">All the interactive tools and calculators you need to visualize and navigate your financial journey.</p>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(min(288px,_100%),_1fr))] gap-4 mt-8">
        <ToolsList tools={toolsData} minHeight="200px" />
      </div>
      <CTAWaitlist />
    </div>
  );
};

export default ToolsPage;
