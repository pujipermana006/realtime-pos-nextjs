"use client"

import { UseTodoStore } from "@/stores/todo-store"
import Link from "next/link";
import { FormEvent, useState } from "react"
export default function Todo() {
    const todos = UseTodoStore((state) => state.todos);
    const addTodo = UseTodoStore((state) => state.addTodo)
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const form = e.currentTarget;
        const formData = form.elements.namedItem('task') as HTMLFormElement
        const task = formData.value;

        console.log("task = ", task)

        if (!task) return
        addTodo(task)

        e.currentTarget.reset()

    }


    return (
        <div className="p-10">
            <h1>test todo</h1>
            <form
                onSubmit={onSubmit}
                className="flex">
                <input
                    name="task"
                    type="text"
                    placeholder="input name"
                    className="border border-slate-600 rounded outline-0 p-2 w-full"
                />
                <button
                    type="submit"
                    className="bg-slate-500 w-full outline-0 p-2 ml-2 cursor-pointer active:bg-slate-600 focus:outline-">
                    Submit
                </button>
            </form>
            <ul className="mt-5 space-y-2">
                {
                    todos.map((val) => (
                        <li key={val.id}>{val.task}</li>
                    ))
                }

            </ul>
            <Link
                href='/todos-test'
            >
                todos-test
            </Link>
        </div>
    )

}
