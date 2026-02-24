import prompt from "prompt";
import { mainPrompt } from "./prompts/prompt-main";
import createQRCode from "./services/qr-code/create";

async function main() {
    prompt.get(mainPrompt, async (err, result) => {
        
        if (Number(result.select) === 1) await createQRCode();

        else if (Number(result.select) === 2) {
            console.log("escolheu o password")
        }
    })

    prompt.start();
}

main();