import React, {useEffect, useState} from "react";
import style from "../../EditProfile/EditProfile.module.css";
import {useDropzone} from "react-dropzone";

export let Dropzone = props => {
    const [files, setFiles] = useState()
    const {getRootProps, getInputProps} = useDropzone({
        accept: "image/*",
        multiple: false,
        noDrag: true,
        onDrop: (acceptedFiles) => {
            const files = [...acceptedFiles]
            setFiles(files);
            if (props.onChange) {
                props.onChange(files);
            }
        }}
    );
    const [photo,setPhoto]=useState()
    useEffect(()=>{
        if (files){
            if (files.length===1 && !files[0].type.includes('gif')){
                setPhoto(URL.createObjectURL(files[0]))
            }
        }
        else {
            let photo = props.photos.large ? props.photos.large : 'https://gotrening.com/wp-content/uploads/2021/04/user.png'
            setPhoto(photo)
        }
    },[files])
    return <div {...getRootProps({className: 'dropzone'})}><img
        className={style.profilePhoto} src={photo}
        alt="your profile image"/><input className={"choosePhotoInput"} id={"choosePhotoInput"} {...getInputProps()}/><span className={style.choosePhotoSpan}>Выбрать фото</span></div>
}