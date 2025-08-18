

interface HeaderBaseProps {
  className?: string;
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
}

export default function HeaderBase({className, leftContent, rightContent}: HeaderBaseProps) {
return (
    <div className={`flex justify-center items-center ${className}`}>
      {leftContent}
      {rightContent}
    </div>

  );
}
