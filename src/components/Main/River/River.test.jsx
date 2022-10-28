import {render, screen} from '@testing-library/react'
import React from 'react'
import store from "../../../Redux/reduxStore";
import userEvent from "@testing-library/user-event";
import {waitFor} from "@testing-library/react";
import RiverContainer from "./RiverContainer";
import {TestHoc} from "../../../utils/hoc/TestHoc";

describe("River Component", () => {
    let state = store.getState().River
    const riverid = 2
    const comments = state.allComments.filter(elem => elem.riverid === riverid)
    test("Правильное количество комментариев", () => {
        render(TestHoc(<RiverContainer customRiverId={riverid}/>))
        const commentsCounter = screen.getByTestId("commentsCounter")
        expect(commentsCounter.textContent).toBe("Комментарии: (" + comments.length + ")")
    })
    test("Новые комментарии добавляются", async () => {
        await render(TestHoc(<RiverContainer customRiverId={riverid}/>))
        await userEvent.type(screen.getByTestId("input"), "  Hello World  ")
        await userEvent.click(screen.getByTestId("submit"))
        const commentsCounter = screen.getByTestId("commentsCounter")
        await waitFor(() => expect(commentsCounter.textContent).toBe("Комментарии: (" + (comments.length + 1) + ")"))
        let screenComments = await screen.getAllByTestId("comment")
        expect(screenComments[screenComments.length - 1].textContent).toBe("Hello World")
    })
})