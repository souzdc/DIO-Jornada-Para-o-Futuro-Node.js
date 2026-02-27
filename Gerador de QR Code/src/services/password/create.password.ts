import chalk from "chalk";
import handle from "./handle.password";


async function createPassword() {
    const password = await handle();
    console.log(chalk.green('Password created'));
    console.log(...password);
}

export default createPassword;