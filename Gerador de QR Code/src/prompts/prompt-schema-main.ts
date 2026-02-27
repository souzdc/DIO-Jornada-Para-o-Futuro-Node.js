import chalk from "chalk";

export type Prompt = {
    name: string;
    description: string;
    pattern: RegExp;
    message: string;
    required: boolean;
}

export const mainPrompt: Prompt[] = [
    {
    name: "select",
    description: chalk.yellow("Escolha a ferramenta (1- QRCODE ou (2- PASSWORD"),
    pattern: /^[1-2]+$/,
    message: chalk.bgRed("Escolha apenas entre 1 e 2"),
    required: true
    }
]