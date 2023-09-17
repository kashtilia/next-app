'use client'
import React, {useState} from 'react';
import dynamic from "next/dynamic";
// Component lazy loading
const HeavyComponent = dynamic(() => import("@/app/components/HeavyComponent"), {
    loading: () => <div>Loading...</div>,
    // ssr: false //В некоторых случаях можно отключить SSR, если нет доступа из браузера к файлу
});

const HeavyPage = () => {
    const [isVisible, setVisible] = useState(false);
    return (
        <div>
            <p className='mb-5'> Heavy component page </p>

            <button className='btn btn-primary' onClick={ async ()=>{
                const _ = (await import('lodash')).default;
                setVisible(!isVisible);
                const users = [
                    { name: 'John'},
                    { name: 'Jane' },
                    {name: 'Mike' },
                ];
                const sortedUsers = _.orderBy(users, 'name');
                console.log(sortedUsers);
            }}>
                Show
            </button>
            {isVisible && <HeavyComponent/>}
        </div>
    );
}

export default HeavyPage;