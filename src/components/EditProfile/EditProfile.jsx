import style from './EditProfile.module.scss'
import React, {useEffect, useState} from "react";
import Preloader from "../Common/Preloader/Preloader";
import Button from "../Common/Button/Button";
import {NavLink, Redirect} from "react-router-dom";
import {Field, Form} from 'react-final-form'
import {Dropzone} from "../Common/Dropzone/Dropzone";
import SpanField from "../Common/SpanField/SpanField";


let EditProfile = ({profile, userId, isFetching, LogoutFromAPI, ApplyChanges, saved}) => {
    if (!userId) {
        return <Redirect to={"/login"}/>
    }
    if (isFetching) {
        return <div className={`${style.EditProfile} backgroundBlock`}><Preloader/></div>
    }
    return <div className={`${style.EditProfile} backgroundBlock`}><Button text={profile.fullName}/>
        <Form onSubmit={ApplyChanges}
              initialValues={{
                  status: profile.status,
                  lookingForAJob: profile.lookingForAJob,
                  fullName: profile.fullName,
                  lookingForAJobDescription: profile.lookingForAJobDescription,
                  aboutMe: profile.aboutMe,
                  website: profile.contacts.website,
                  github: profile.contacts.github,
                  vk: profile.contacts.vk,
                  youtube: profile.contacts.youtube,
                  facebook: profile.contacts.facebook,
                  twitter: profile.contacts.twitter,
                  instagram: profile.contacts.instagram,
                  mainLink: profile.contacts.mainLink,
              }}
              render={({handleSubmit, values}) => (
                  <form className={style.form} onSubmit={handleSubmit}>
                      <div className={style.photoContainer}>
                          <Field name={"photo"} className={style.choosePhotoInput} component={"input"}
                                 type="file">{props => <Dropzone {...props.input} photos={profile.photos}/>}</Field>
                      </div>
                      <SpanField name={"status"} span={"Статус"}/>
                      <SpanField name={"aboutMe"} span={"Обо мне"} required={true}/>
                      <SpanField name={"fullName"} span={"Имя"} required={true}/>
                      <SpanField name={"website"} span={"Веб-сайт"} isUrl={true}/>
                      <SpanField name={"github"} span={"GitHub"} isUrl={true}/>
                      <SpanField name={"vk"} span={"ВК"} isUrl={true}/>
                      <SpanField name={"youtube"} span={"Youtube"} isUrl={true}/>
                      <SpanField name={"facebook"} span={"Facebook"} isUrl={true}/>
                      <SpanField name={"twitter"} span={"Twitter"} isUrl={true}/>
                      <SpanField name={"instagram"} span={"Instagram"} isUrl={true}/>
                      <SpanField name={"mainLink"} span={"Дополнительная ссылка"} isUrl={true}/>
                      <div className={style.info}>Ищу работу: <Field className="checkbox" name="lookingForAJob"
                                                                     component="input" type="checkbox"/></div>
                      <SpanField name={"lookingForAJobDescription"} span={"Профессиональные навыки"} required={true}/>
                      <div className={style.buttonsBlock}>
                          <input type={"submit"} className={`${style.apply} Button`}
                                 value="Сохранить"/>
                          <NavLink to={'/user/' + profile.userId+'/'}><input type={"button"}
                                                                         className={`${style.apply} Button`}
                                                                         value="Посмотреть мой профиль"/></NavLink>
                          <Button className={`${style.apply} Button`} onClick={LogoutFromAPI} text={"Выйти"}/>
                          {saved ? <div className={style.saved}>Сохранено</div> : null}
                      </div>
                  </form>
              )}/>
    </div>
}
export default EditProfile