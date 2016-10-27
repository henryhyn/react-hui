import React, { Component } from 'react';
import ScrollElement from 'rc-scroll-anim/lib/ScrollElement';

class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <section id='banner'>
                <ScrollElement scrollName='banner' className='page'>
                    Banner
                </ScrollElement>
            </section>
        );
    }
}

Banner.propTypes = {};

Banner.defaultProps = {};

export default Banner;
