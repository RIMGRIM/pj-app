import React from 'react'

class AlertLink extends React.Component {

    constructor(props) {
        super(props);
    }

  render() {
    let {id, title, desc} = this.props.linkData;

    let alertClass = "";

    if (id % 3 == 0) {
        alertClass = "alert alert-info";
    } else if (id % 3 == 1) {
        alertClass = "alert alert-primary";
    } else if (id % 3 == 2) {
        alertClass = "alert alert-success";
    } 

    return (
        <>
      <div key={id} className={alertClass} row="alert">
        <a href="#" className="alert-link"><strong>{title}</strong></a>{desc}
      </div>
        </>
    )
  }
}