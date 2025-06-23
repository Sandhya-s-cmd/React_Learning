import React, { Component } from 'react';

class ListColours extends Component {
  state = {
    title: 'ListColours Component',
    listColors: ['RED', 'BLUE', 'GREEN']
  };

  render() {
    return (
      <React.Fragment>
        <div className='container'>
          <h2 className='text-success'>{this.state.title}</h2>
          <ul className='list-group'>
            {/*this.state.listColors.map((eachColor) => (
              <li className='list-group-item' key={eachColor}>{eachColor}
              </li>))*/}
              {this.renderlistColors()}
          </ul>
        </div>
      </React.Fragment>
    );
  }
  renderlistColors(){
  return(
    this.state.listColors.map((eachColor) => (
    <li className='list-group-item' key={eachColor}>{eachColor}
    </li>))
  )
}
}







export default ListColours;
