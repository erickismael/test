import React,{Component} from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
// import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
// import ListIcon from '@material-ui/icons/List';
// import GetAppIcon from '@material-ui/icons/GetApp';
// import AddIcon from '@material-ui/icons/Add';
import Header from "./componentes/header";
import Body from './componentes/body'
import * as actions from "./store/actions";
// import { render } from '@testing-library/react';

class App extends Component{
  constructor(props){
    super(props);
    if(this.props.reducersDatos.datos.length==0){
      fetch(`https://jsonplaceholder.typicode.com/todos/`)
      .then(response => response.json())
      .then(data => {
        this.props.actions.actionDatos(data);
      });
    }
    fetch(`https://jsonplaceholder.typicode.com/users/`)
    .then(response => response.json())
    .then(data => {
      this.props.actions.actionUsuarios(data);
    });
    
  }
  render(){
    return (
      <div className="App">
        <Header/>
        <Body/>
      </div>
    );
  }
}

const mapStateToProps = ({ reducersDatos }) => {
  return { reducersDatos };
};

const mapDispatchToProps = (dispatch) => {
  return {
      actions: bindActionCreators(Object.assign({}, actions), dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);