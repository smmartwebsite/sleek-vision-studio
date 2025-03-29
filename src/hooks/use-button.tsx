
import { useState } from 'react';
import { useButtonContext } from '@/contexts/ButtonContext';

interface UseButtonProps {
  initialLoading?: boolean;
  onClick?: () => Promise<void> | void;
}

export function useButton({ initialLoading = false, onClick }: UseButtonProps = {}) {
  const [localLoading, setLocalLoading] = useState(initialLoading);
  const { setIsLoading } = useButtonContext();
  
  const handleClick = async () => {
    if (!onClick) return;
    
    try {
      setLocalLoading(true);
      setIsLoading(true);
      await onClick();
    } finally {
      setLocalLoading(false);
      setIsLoading(false);
    }
  };
  
  return {
    isLoading: localLoading,
    handleClick,
  };
}
