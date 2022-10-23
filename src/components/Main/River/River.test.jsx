import {render, screen} from '@testing-library/react'
import React from 'react'
import River from "./River";
import store from "../../../Redux/reduxStore";
import {AddComment, SetComments, SetRiverId} from "../../../Redux/RiverReducer";
import userEvent from "@testing-library/user-event";
import {waitFor} from "@testing-library/react";
import RiverContainer from "./RiverContainer";
import {BrowserRouter, Router} from "react-router-dom";
import {Provider} from "react-redux";
import {useParams} from "react-router-dom";

describe("River Component", () => {
    let state = store.getState().River
    const riverid = 2
    const userId = 22470
    const comments = state.allComments.filter(elem => elem.riverid === riverid)
    test("Правильное количество комментариев", () => {
        render(<BrowserRouter>
            <Provider store={store}><River riverid={riverid} {...state}
                                           match={{params: {riverid: String(riverid)}}}/></Provider></BrowserRouter>)
        const commentsCounter = screen.getByTestId("commentsCounter")
        expect(commentsCounter.textContent).toBe("Комментарии: (" + comments.length + ")")
    })
    test("Новые комментарии добавляются", async () => {
        await render(<BrowserRouter>
            <Provider store={store}><RiverContainer SetComments={() => {
            }} riverid={riverid} customRiverId={riverid}
                                                    match={{params: {riverid: String(riverid)}}}/></Provider></BrowserRouter>)
        await userEvent.type(screen.getByTestId("input"), "  Hello World  ")
        await userEvent.click(screen.getByTestId("submit"))
        const commentsCounter = screen.getByTestId("commentsCounter")
        await waitFor(() => expect(commentsCounter.textContent).toBe("Комментарии: (" + (comments.length + 1) + ")"))
        let screenComments = await screen.getAllByTestId("comment")
        expect(screenComments[screenComments.length - 1].textContent).toBe("Hello World")
    })
})