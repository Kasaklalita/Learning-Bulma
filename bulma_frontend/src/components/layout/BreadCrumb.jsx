import React from 'react';

const BreadCrumb = () => {
    return (
        <div className="section pt-4 pb-6">
            <nav className="breadcrumb has-arrow-separator">
                <ul className="container is-size-7">
                    <li>
                        <a className="is-grey">Coffee Ninja</a>
                    </li>
                    <li>
                        <a className="is-grey">Shop</a>
                    </li>
                    <li className="is-active">
                        <a>Docker Dark Roast</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default BreadCrumb;