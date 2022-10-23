import style from './River.module.css';
import {Map, YMaps} from 'react-yandex-maps';
import React, {useEffect, useLayoutEffect, useState} from "react";
import {useParams} from 'react-router-dom'
import Comment from "../../Common/Comment/Comment";
import Input from "../../Common/Input/Input";

function River(props) {
    let {riverid} = useParams()
    riverid = riverid ? Number(riverid) : props.customRiverId
    useLayoutEffect(() => {
        props.SetRiverId(riverid)
        props.SetComments(props.comments)
    }, [props.riverid])
    useEffect(() => {
        props.SetComments(props.comments)
    }, [props.comments.length])
    let Comments = props.comments.map(ThisComment => {
        let likesCount = (props.likes.filter(ThisLike => (ThisLike.commentid === ThisComment.commentid))).length
        let liked = props.likes.find(ThisLike => (ThisLike.commentid === ThisComment.commentid && ThisLike.userid === props.userId))

        let date = ThisComment.date
        let timeZoneDifference = date.getHours() - date.getUTCHours()
        let dateString = `${("0" + date.getDate()).slice(-2)}.${("0" + (date.getMonth() + 1)).slice(-2)}.${date.getFullYear()}  ${("0" + (date.getHours() + timeZoneDifference)).slice(-2)}:${("0" + date.getUTCMinutes()).slice(-2)}`
        return <Comment

            key={ThisComment.commentid}
            userId={ThisComment.userId}
            username={ThisComment.fullName}
            message={ThisComment.comment}
            likesCount={likesCount}
            liked={liked}
            commentID={ThisComment.commentid}
            date={dateString}
        />

    })
    return (
        <div key={props.riverid}>
            <YMaps>
                <div className='ymaps'>
                    <Map width='700px' height='425px' defaultState={{center: [57.399137, 57.205733], zoom: 11.4}}/>
                </div>
            </YMaps>
            <div data-testid="commentsCounter" className={style.CommentsHeader}>Комментарии: ({props.comments.length})
            </div>
            {Comments}
            <Input onSubmit={props.AddComment}/>

        </div>
    )
}

export default River;