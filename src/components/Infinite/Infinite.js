import * as React from 'react';
import './Infinite.css';

export class Infinite extends React.Component {
    constructor(props) {
        super(props);
        this.onScroll = this.onScroll.bind(this);
        this.state = {
            loading: false,
        };
    }

    componentDidMount() {
        document.addEventListener('scroll', this.onScroll, { passive: true });
    }

    componentDidUpdate() {
        this.onScroll();
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.onScroll);
    }

    onScroll() {
        if (!this.container || this.state.loading) {
            return;
        }
        let scroll = document.documentElement.scrollTop;
        const containerSize = this.container.clientHeight;
        let visiblePat = window.innerHeight;
        if ((scroll + visiblePat >= containerSize) && (window.innerHeight > 412)) {
            this.nextPage();
        }
    }

    async nextPage() {
        this.setState({ loading: true });
        try {
            await this.props.fetchNext();
        } catch (err) {
            console.error(err);
        } finally {
            this.setState({ loading: false });
        }
    }

    render() {
        return (
            <div id="Container" ref={(container) => { this.container = container; }}>
                {this.props.children}
                {this.state.loading && (
                    <div className="spinner">
                        <div className="rect1" />
                        <div className="rect2" />
                        <div className="rect3" />
                        <div className="rect4" />
                        <div className="rect5" />
                    </div>
                )}
            </div>
        );
    }
}

