import './app.scss';

import Header from './Header/Header';

const StarsGenerate = () => {
    let boxShadowRandom: string = '';

    for (let i = 0; i < 110; i++) {
        let color: string = 'rgba(255, 255, 255, 0.6)';
        let height: number = Math.floor(Math.random() * 100) + 1;
        let width: number = Math.floor(Math.random() * 100) + 1;

        boxShadowRandom +=
            height.toString() + 'vw ' + width.toString() + 'vw ' + color;

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
