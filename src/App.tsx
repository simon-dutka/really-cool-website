import './app.scss';

import Header from './Header/Header';

const StarsGenerate = () => {
    let boxShadowRandom = '';

    for (let i = 0; i < 110; i++) {
        let color = 'rgba(255, 255, 255, 0.6)';
        let height = Math.floor(Math.random() * 100) + 1;
        let width = Math.floor(Math.random() * 100) + 1;

        boxShadowRandom += height + 'vw ' + width + 'vw ' + color;

        if (i < 109) {
            boxShadowRandom += ', ';
        }
    }

    return <div className='stars' style={{ boxShadow: boxShadowRandom }}></div>;
};

const App = () => (
    <div className='app'>
        <StarsGenerate />
        <Header />
    </div>
);

export default App;
