import dotenv from 'dotenv';

dotenv.config({quiet: true});

async function handlePassword () {
    const size = Number(process.env.SIZE);
    let charsPermitted: string[] = [];
    let password: string[] = [];

    if (process.env.UPPERCASE === 'true') charsPermitted.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    if (process.env.LOWERCASE === 'true') charsPermitted.push(..."abcdefghijklmnopqrstuvwxyz");
    if (process.env.NUMBERS === 'true') charsPermitted.push(..."0123456789");
    if (process.env.SPECIAL === 'true') charsPermitted.push(..."!@#$%¨&*()-_");

    for (let i = 0; i < size; i++) {
        const index = Math.floor(Math.random() * charsPermitted.length);
        password.push(charsPermitted[index]);
    }

    //console.dir(password)
    return password;
}

export default handlePassword;