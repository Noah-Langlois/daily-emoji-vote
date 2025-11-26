"use client";

import { useState } from "react";
import { Emoji } from "./emoji";
import { Result } from "./result";


export function Vote() {
    const [result, setResult] = useState("");

    function vote(emoji: string) {
        setResult(emoji);
    }

    return (
        <div>
            <button onClick={() => vote("🐆")} color="primary">
                <Emoji>🐆</Emoji>
            </button>
            <button onClick={() => vote("🦕")} color="secondary">
                <Emoji>🦕</Emoji>
            </button>
            <Result result={result} />
        </div>
    );
}