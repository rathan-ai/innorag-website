interface InnoragLogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function InnoragLogo({ size = 'md', className = '' }: InnoragLogoProps) {
  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-2xl',
    lg: 'text-3xl'
  };

  const paddingClasses = {
    sm: 'px-1.5 py-0.5',
    md: 'px-2 py-0.5',
    lg: 'px-2.5 py-1'
  };

  return (
    <span className={`inline-flex items-center gap-1 font-bold not-italic ${sizeClasses[size]} ${className}`}>
      <span className={`bg-black text-white rounded-md ${paddingClasses[size]}`}>
        <i>i</i>
      </span>
      <span className="text-black">nnorag</span>
      <span className="text-orange-600">.</span>
    </span>
  );
}