interface PipeOperatorProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  animated?: boolean;
}

export default function PipeOperator({ size = 'md', className = '', animated = true }: PipeOperatorProps) {
  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-xl', 
    lg: 'text-4xl',
    xl: 'text-6xl'
  };

  const baseClasses = `
    inline-flex items-center justify-center font-mono font-bold
    ${sizeClasses[size]}
    ${animated ? 'transition-all duration-700 ease-in-out' : ''}
    ${className}
  `;

  if (animated) {
    return (
      <span className={`${baseClasses} group`}>
        <span className="text-slate-600 group-hover:text-purple-500 transform group-hover:scale-110 transition-all duration-500">
          |
        </span>
        <span className="text-slate-600 group-hover:text-orange-500 transform group-hover:scale-110 transition-all duration-500 delay-100">
          &gt;
        </span>
      </span>
    );
  }

  return (
    <span className={baseClasses}>
      <span className="text-slate-600">|</span>
      <span className="text-slate-600">&gt;</span>
    </span>
  );
}