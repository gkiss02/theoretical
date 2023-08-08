import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';

function RootLayout() {
    return (
        <>
            <Navigation></Navigation>
            <Outlet></Outlet>
        </>
    );
}

export default RootLayout;