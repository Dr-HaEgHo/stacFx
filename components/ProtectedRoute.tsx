import { useAppSelector } from '@/store/hooks';
import { useRouter } from 'next/navigation';
import React, { useEffect, ComponentType, useState } from 'react';
import Load from './Load';
import cogoToast from 'cogo-toast';

interface WithProtectedRouteProps {
  // Add any additional props that you expect WrappedComponent to receive
}

const withProtectedRoute = <props extends object>(
    WrappedComponent: React.FC<props>
) => {
  const ProtectedRoute: React.FC<props & WithProtectedRouteProps> = (props) => {
    // const { user } = useAuth();
    const router = useRouter();
    const user = useAppSelector(state => state.auth.userToken)
    const isLoading = useAppSelector(state => state.auth.loading)

    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
      if (!user) {
        router.push('/login');
      }
    }, [user, router]);

    useEffect(() => {
        if(isLoading === true){
            setLoading(true)
        }else {
            setLoading(false)
        }
    }, [])

    if (loading) {
        // Render a loading component or message
        return <Load/>;
      }
      if (!user) {
        // Display a message or loading indicator while redirecting
        cogoToast.error('This page requires login access')
      }
  

    return user ? <WrappedComponent {...props} /> : null;
  };

  return ProtectedRoute;
};

export default withProtectedRoute;
