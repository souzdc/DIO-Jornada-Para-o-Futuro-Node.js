import prompt from "prompt";
import promptQRCode from '../../prompts/prompt-schema-qrcode'
import handle from "./handle";

export async function createQRCode() {
    prompt.get(promptQRCode, handle);
}

export default createQRCode;