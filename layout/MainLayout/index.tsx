import React from "react";
import {MainLayoutProps} from "../../meta/props";

const MainLayout: React.FC<MainLayoutProps> = (props: MainLayoutProps) => {
    const { children, langDirection } = props

    return (
        <div>
            <main dir={langDirection.direction}>
                {React.Children.toArray(children)}
            </main>
        </div>
    );
}

export default MainLayout