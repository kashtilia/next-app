import React from 'react';
import {notFound} from "next/navigation";

interface UserDetailPageProps {
    params: {
        id: number
    }
}

const UserDetailPage = ({params: {id}}: UserDetailPageProps) => {
    if (id > 10) notFound();
    return (
        <div>UserDetailPage {id}</div>
    );
}

export default UserDetailPage;