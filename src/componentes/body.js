import React,{Component} from "react";
import { connect } from "react-redux";
import ListTwoToneIcon from '@material-ui/icons/ListTwoTone';
import Tabla from './Tabla'

class Body extends Component{
    render(){
        return(
            <div className="contenido">
                <div className="menuLateral">
                    <div className="opcionMenuSelected">
                        <ListTwoToneIcon style={{fontSize: 30, fontWeight:800, width:30}}/><span>Posts</span>
                    </div>
                    <div className="opcionMenu">
                        <ListTwoToneIcon style={{fontSize: 30, fontWeight:800, width:30}}/><span>Users</span>
                    </div>
                </div>
                <div className="tabla">
                    {this.props.reducersDatos.datos.length>0 && this.props.reducersDatos.usuarios.length>0?<Tabla datos={this.props.reducersDatos}/>:null}
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ reducersDatos }) => {
    return { reducersDatos };
};

export default connect(mapStateToProps)(Body);