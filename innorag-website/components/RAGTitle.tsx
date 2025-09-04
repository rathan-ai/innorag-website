import PipeOperator from './PipeOperator';

interface RAGTitleProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  animated?: boolean;
}

export default function RAGTitle({ size = 'lg', className = '', animated = true }: RAGTitleProps) {
  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-4xl md:text-6xl',
    xl: 'text-4xl md:text-6xl'
  };

  const pipeSize = {
    sm: 'sm' as const,
    md: 'md' as const, 
    lg: 'lg' as const,
    xl: 'xl' as const
  };

  const baseClasses = `
    ${textSizeClasses[size]} 
    font-extrabold text-orange-600 tracking-tight
    ${animated ? 'group' : ''}
    ${className}
  `;

  return (
    <span className={baseClasses}>
      <span className={animated ? 'group-hover:text-blue-600 transition-colors duration-500' : ''}>
        Retrieve
      </span>
      <span className="mx-2 md:mx-4">
        <PipeOperator size={pipeSize[size]} animated={animated} />
      </span>
      <span className={animated ? 'group-hover:text-purple-600 transition-colors duration-500 delay-200' : ''}>
        Augment
      </span>
      <span className="mx-2 md:mx-4">
        <PipeOperator size={pipeSize[size]} animated={animated} />
      </span>
      <span className={animated ? 'group-hover:text-green-600 transition-colors duration-500 delay-400' : ''}>
        Generate
      </span>
    </span>
  );
}