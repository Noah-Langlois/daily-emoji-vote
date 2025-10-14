"use client";

import { useState } from "react";
import { Emoji } from "./emoji";
import { Result } from "./result";
import {Button} from '@heroui/button'; 


export function Vote() {
    const [result, setResult] = useState("");

    function vote(emoji: string) {
        setResult(emoji);
    }

    return (
        <div>
            <Button onPress={() => vote("🐆")} color="primary">
                <Emoji>🐆</Emoji>
            </Button>
            <Button onPress={() => vote("🦕")} color="secondary">
                <Emoji>🦕</Emoji>
            </Button>
            <Result result={result} />
        </div>
    );
}