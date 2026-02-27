import prompt from "prompt";
import { mainPrompt } from "./prompts/prompt-schema-main";
import createQRCode from "./services/qr-code/create";
import createPassword from "./services/password/create.password";

async function main() {
    prompt.get(mainPrompt, async (err, result) => {
        
        if (Number(result.select) === 1) await createQRCode();

        else if (Number(result.select)) await createPassword();
    })

    prompt.start();
}

main();