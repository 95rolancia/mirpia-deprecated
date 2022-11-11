import { useNavigate } from 'react-router-dom';
import { useMemo } from 'react';

interface IUseInternalRouter {
  goBack: () => void;
  push: (path: RoutePath) => void;
}

export function useInternalRouter(): IUseInternalRouter {
  const navigate = useNavigate();
  return useMemo(() => {
    return {
      goBack() {
        navigate(-1);
      },
      push(path: RoutePath) {
        navigate(path);
      },
    };
  }, [navigate]);
}

type RoutePath = '/main' | '/stats';
