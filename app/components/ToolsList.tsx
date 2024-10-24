import React from 'react';
import Link from 'next/link';
import { Calculator, Circle, DollarSign, /* other icons */ } from 'lucide-react'; // Import specific icons

interface Tool {
  id: number;
  name: string;
  description: string;
  category?: {
    name: string;
    bgClass: string;
    textClass: string;
    solidBgClass: string;
  };
  icon: string; // The name of the icon
}

interface ToolsListProps {
  tools: Tool[];
  minHeight?: string;
}

// Mapping icon names to Lucide components
const iconComponents = {
  calculator: Calculator,
  circle: Circle,
  dollar: DollarSign,
  // Add other mappings as needed...
};

const ToolsList: React.FC<ToolsListProps> = ({ tools, minHeight }) => {
  return (
    <>
      {tools.map((tool) => {
        // Get the corresponding icon component based on the tool.icon name
        const IconComponent = iconComponents[tool.icon as keyof typeof iconComponents];

        return (
          <Link key={tool.id} href={`/tools/${tool.id}`} className="bg-white rounded-2xl border border-alpha-black-25 shadow-sm p-4 text-left cursor-pointer flex flex-col gap-4" style={{ minHeight }}>
            {tool.category && (
              <div className={`w-10 h-10 grid place-items-center rounded-xl ${tool.category.bgClass}`}>
                {/* Render the icon if it exists in the mapping */}
                {IconComponent ? <IconComponent className={`w-6 h-6 ${tool.category.textClass}`} /> : null}
              </div>
            )}
            <div className="mt-auto">
              <h2 className="font-medium">{tool.name}</h2>
              <p className="text-gray-600">{tool.description}</p>
            </div>
            {tool.category && (
              <div className="flex items-center gap-1.5 border border-alpha-black-100 w-max py-1 px-2 rounded-full">
                <div className={`w-2 h-2 ${tool.category.solidBgClass} rounded-full`}></div>
                <p className="text-gray-500 text-xs font-medium uppercase tracking-wide">{tool.category.name}</p>
              </div>
            )}
          </Link>
        );
      })}
    </>
  );
};

export default ToolsList;
