import React, { useEffect, useState } from 'react';
import ProgramDetail from '../ProgramDetail/ProgramDetail';

const Programs = () => {
    const [programs, setPrograms] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/programs')
            .then(response => response.json())
            .then(data => setPrograms(data));
    }, []);

    return (
        <section className="mt-5 pt-5">
            <div className="text-center">
                <h1 style={{ color: 'rebeccapurple' }}>Our Programs</h1>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 row mt-3 pt-5">
                    {
                        programs.map(program => <ProgramDetail program={program} key={program._id}></ProgramDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Programs;