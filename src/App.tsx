import React, { useEffect } from 'react';

const App: React.FC = () => {
    useEffect(() => {
        function createSnowFlakes() {
            const snowContainer = document.createElement('div');
            snowContainer.className = 'snow fixed top-0 left-0 w-full h-full pointer-events-none z-[-1]';
            document.body.appendChild(snowContainer);

            for (let i = 0; i < 50; i++) {
                let snowFlake = document.createElement('div');
                snowFlake.style.position = 'absolute';
                snowFlake.style.width = snowFlake.style.height = `${Math.random() * 5 + 5}px`;
                snowFlake.style.background = 'white';
                snowFlake.style.borderRadius = '50%';
                snowFlake.style.opacity = Math.random().toString();
                snowFlake.style.left = `${Math.random() * 100}%`;
                snowFlake.style.top = `${Math.random() * 100}%`;
                snowFlake.style.animation = `fall ${Math.random() * 5 + 5}s linear infinite`;
                snowContainer.appendChild(snowFlake);
            }
        }
        createSnowFlakes();
    }, []);

    return (
        <div className="flex flex-col items-center justify-center h-screen text-white bg-cover bg-center" style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?snow,study')" }}>
            <div className="bg-black bg-opacity-50 p-8 rounded-xl shadow-lg text-center">
                <h1 className="text-4xl font-bold mb-4">눈 오는 날, 함께 공부해요!</h1>
                <p className="text-lg mb-6">따뜻한 분위기 속에서 공부를 함께하며 목표를 이루어가요.</p>
                <a href="#" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">스터디 참여하기</a>
            </div>
            <style>
                {`@keyframes fall { to { transform: translateY(100vh); } }`}
            </style>
        </div>
    );
};

export default App;
