import { ReactNode } from 'react';
import MainHeader from './header/MainHeader';

type Props = {
    children?: ReactNode;
};
const MainLayout = ({ children }: Props) => {
    return (
        <div className="default-layout-container">
            <MainHeader />
            <div>{children}</div>
        </div>
    )
}

export default MainLayout