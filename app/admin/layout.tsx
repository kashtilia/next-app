import React from 'react';

interface IAdminLayoutProps {
    children: React.ReactNode;
}

const AdminLayout = ({children}:IAdminLayoutProps) => {
    return (
        <div className='flex'>
            <aside className='bg-slate-200 p-5 mr-5'>Admin Sidebar</aside>
            <div>{children}</div>
        </div>
    );
}

export default AdminLayout;