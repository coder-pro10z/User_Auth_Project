import React, { useEffect, useState } from 'react';
import { Route, useNavigate,Navigate, useLocation, Outlet } from 'react-router-dom';
import { useAuth } from '../components/AuthContext';
import SuccessDialog from '../components/AlertBox';

interface PrivateRouteProps {
  element: React.ReactElement;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
    const [showDialog, setShowDialog] = useState(false);

    const { isAuthenticated } = useAuth();
    const location = useLocation();
    const navigate=useNavigate();

    useEffect(() => {
        if (!isAuthenticated) {
          setShowDialog(true);
        }
      }, [isAuthenticated]);

    const handleCloseDialog = () => {
        setShowDialog(false);
        navigate('/login'); // Redirect to Home after closing the dialog
      };
    
    if (!isAuthenticated) {
        // alert('Please log in first.');
        return(<>
                {showDialog && (<SuccessDialog message='Please log in first.' onClose={handleCloseDialog}  />)}
                 {/* <Navigate to="/login" state={{ from: location }} replace />; */}
             </>
            )
        }

  return <>{element}</>;
};


export default PrivateRoute;

