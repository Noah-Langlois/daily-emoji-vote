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
            <div className="row" style={{height: '20em'}}>
                <div className="col p-0 mr-2">
                    <button type="button" className="btn btn-secondary w-100 h-100 border-white border-5" onClick={() => vote("🐆")}>
                        <Emoji>🐆</Emoji>
                    </button>
                </div>
                <div className="col p-0 ml-2">
                    <button type="button" className="btn btn-secondary w-100 h-100 border-white border-5" onClick={() => vote("🦕")} color="secondary">
                        <Emoji>🦕</Emoji>
                    </button>
                </div>
            </div>
            <div className="row mt-5">
                <Result result={result} />
            </div>
        </div>
    );
}