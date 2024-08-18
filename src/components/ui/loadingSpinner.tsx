import { LoaderCircle } from "lucide-react";

interface LoadingSpinnerProps {
  size?: number
}

export const LoadingSpinner = ({size} : LoadingSpinnerProps) => {
  return (
    <div className='loading-spinner_wrapper | f-width flex align-center justify-center'>
      <LoaderCircle size={size || 24} className="loading-spinner"/>
    </div>
  );
};