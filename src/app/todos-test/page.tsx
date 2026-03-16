"use client"
import { UseTodoStore } from "@/stores/todo-store"

export default function Page() {
    const todos = UseTodoStore((state) => state.todos)
    console.log('todo : ', todos)
    return (
        <ul className="mt-5 space-y-2">
            {
                todos.map((val) => (
                    <li key={val.id}>test{val.task}</li>
                ))
            }
            <h1>{todos.length}</h1>
        </ul>
    )

}