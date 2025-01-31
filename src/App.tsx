
import React, { useState } from 'react';

const members = [
    { name: "박규리", role: "팀원" },
    { name: "김태희", role: "팀원" },
    { name: "백선영", role: "팀원" },
    { name: "김영석", role: "팀장" },
    { name: "최원준", role: "팀원" },
    { name: "조성권", role: "팀원" }
];

const Card: React.FC<{ name: string; role: string }> = ({ name, role }) => {
    const [flipped, setFlipped] = useState(false);

    return (
        <div className="card" onClick={() => setFlipped(!flipped)}>
            <div className={`card-inner ${flipped ? 'flipped' : ''}`}>
                <div className="card-front">{name}</div>
                <div className={`card-back ${role === '팀장' ? 'team-leader' : 'team-member'}`}>{role}</div>
            </div>
        </div>
    );
};

const App: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-2xl font-bold mb-6">팀장 뽑기</h1>
            <div className="grid grid-cols-3 gap-4">
                {members.map((member) => (
                    <Card key={member.name} name={member.name} role={member.role} />
                ))}
            </div>
        </div>
    );
};

export default App;