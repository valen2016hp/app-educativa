import React from 'react';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface SubjectCardProps {
  id: string;
  name: string;
  icon: LucideIcon;
  description: string;
  colorClass: string; // Tailwind bg class for the accent
}

const SubjectCard: React.FC<SubjectCardProps> = ({ id, name, icon: Icon, description, colorClass }) => {
  return (
    <Link 
      to={`/${id}`}
      className="group relative flex flex-col items-center p-6 bg-white rounded-3xl border-4 border-dyslexia-blue shadow-[8px_8px_0px_0px_rgba(26,54,93,1)] hover:shadow-[4px_4px_0px_0px_rgba(26,54,93,1)] hover:translate-x-1 hover:translate-y-1 transition-all duration-200"
    >
      <div className={`p-6 rounded-full ${colorClass} text-white mb-4 border-4 border-white shadow-md group-hover:scale-110 transition-transform duration-300`}>
        <Icon size={48} strokeWidth={2.5} />
      </div>
      <h3 className="text-2xl font-bold text-center mb-2">{name}</h3>
      <p className="text-center text-lg text-gray-600 leading-snug">{description}</p>
    </Link>
  );
};

export default SubjectCard;