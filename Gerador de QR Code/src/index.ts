import prompt from "prompt";
import { mainPrompt, Prompt } from "./prompts/prompt-main";

async function main() {
    prompt.get(mainPrompt, async (err, result) => {
        
        if (Number(result.select) === 1) {
            console.log("escolheu o QRCODE")
        }

        else if (Number(result.select) === 2) {
            console.log("escolheu o password")
        }
    })
}

main();