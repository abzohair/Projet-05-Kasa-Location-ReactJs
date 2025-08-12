import Poster from './poster/Poster';
import FlatCards from '../flatCards/FlatCards';
import HomeImage from '../assets/images/source1.jpg';

const Home = () => {

    return (
        <>
            <Poster picture={HomeImage} title={'Chez vous, partout et ailleurs'} />
            <FlatCards />
        </>
    );

};

export default Home;