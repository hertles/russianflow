import InputChangeName from './InputChangeName'
import React from 'react'
import {connect} from "react-redux";

function mapStateToProps(state) {
    return {
        value: state.User.newNameText,
        placeholder: 'Введите новое имя',
        ok: 'Применить'
    }
}

function mapDispatchToProps(dispatch) {
    return {
        Change: (inputText) =>{
            dispatch({type:'CHANGE_NAME_TEXT_AREA',new_name:inputText})
        },
        Click: (inputText) =>{
            dispatch({type:'CHANGE_NAME_COMPLETED',new_name:inputText})
        }
    }
}

let InputChangeNameContainer = connect(mapStateToProps,mapDispatchToProps)(InputChangeName)
export default InputChangeNameContainer