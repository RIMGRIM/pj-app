import React from 'react';

class AlertLink extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let { id, title, desc } = this.props.linkData;

        let alertClass = id % 3 === 0 ? "alert alert-info" :
            id % 3 === 1 ? "alert alert-dark" :
                "alert alert-warning";

        return (
            <div key={id} className={alertClass} role="alert">
                <a href="#" className="alert-link"><strong>{title}</strong></a>{desc}
            </div>
        );
    }
}

export default AlertLink;
