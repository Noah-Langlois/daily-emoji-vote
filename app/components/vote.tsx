"use client";

import { useState } from "react";
import { Emoji } from "./emoji";
import { Result } from "./result";
import { randomEmoji } from "../service/emojis/emojis";

let emoji1 : string = ""
let emoji2 : string = ""

function initEmojis() {
    emoji1 = randomEmoji()
    emoji2 = randomEmoji()
    while(emoji1 == emoji2) {
        emoji2 = randomEmoji()
    }
}

initEmojis()

export function Vote() {
    const [result, setResult] = useState("");

    function vote(emoji: string) {
        setResult(emoji);
    }

    function clear() {
        setResult("");
        initEmojis();
    }

    return (
        <div>
            <div className="row" style={{height: '20em'}}>
                <div className="col p-0 mr-2">
                    <button type="button" className="btn btn-secondary w-100 h-100 border-white border-5" onClick={() => vote(emoji1)}>
                        <Emoji>{emoji1}</Emoji>
                    </button>
                </div>
                <div className="col p-0 ml-2">
                    <button type="button" className="btn btn-secondary w-100 h-100 border-white border-5" onClick={() => vote(emoji2)} color="secondary">
                        <Emoji>{emoji2}</Emoji>
                    </button>
                </div>
            </div>
            {
                result !== "" && 
                (
                    <div>
                        <div className="row mt-5">
                            <Result result={result} />
                        </div>
                        <div className="row">
                            <button type="button" className="btn btn-secondary" onClick={() => clear()}>Clear</button>
                        </div>
                    </div>
                )
            }
        </div>
    );
}