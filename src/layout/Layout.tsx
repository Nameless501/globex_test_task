import { ReactNode } from 'react';

function Layout({ children }: { children: ReactNode }) {
    return <div className="page">{children}</div>;
}

export default Layout;
