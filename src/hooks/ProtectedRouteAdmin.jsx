import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { verifyToken } from '../api/authService';

function ProtectedRouteAdmin({ children }) {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkUserRole = async () => {
            try {
                const user = await verifyToken();
                if (user.role !== 'admin') {
                    navigate('/admin');
                }
            } catch (error) {
                navigate('/');                    
            } finally {
                setLoading(false);
            }
        };

        checkUserRole();
    }, [navigate]);

    if (loading) return <p>Checking access...</p>;

    return children;
}

export default ProtectedRouteAdmin;
