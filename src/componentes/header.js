import React,{Component} from "react";
import { connect } from "react-redux";
import MenuIcon from '@material-ui/icons/Menu';
import RefreshIcon from '@material-ui/icons/Refresh';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CircularProgress from '@material-ui/core/CircularProgress';

class Header extends Component{
    render(){
        return(
            <div id="header">
                <div className="iconosIzquierda">
                    <MenuIcon style={{fontSize: 30}}/>
                    <span>Posts List</span>
                </div>
                <div className="iconosDerecha">
                    {this.props.reducersDatos.datos.length>0 && this.props.reducersDatos.usuarios.length>0?<RefreshIcon style={{fontSize: 30}}/>:<CircularProgress className="circular" style={{fontSize: 10}}/>}
                    <AccountCircleIcon style={{fontSize: 30}}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ reducersDatos }) => {
    return { reducersDatos };
};

export default connect(mapStateToProps)(Header);