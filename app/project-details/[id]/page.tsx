import ProjectDetailsPage from '@/components/project-details';
import React from 'react';

const page = async ({params} :{params: Promise<{id: number}>}) => {
    const id = (await params).id
   
    return (
        <div>
            <ProjectDetailsPage params={{id}} />
        </div>
    );
};

export default page;