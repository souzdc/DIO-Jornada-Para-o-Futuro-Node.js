
    async function permittedCharacters() {

        let permitted = []
        
            if (process.env.UPPERCASE_LETTERS === "true") {
                permitted.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ");
            }
        
            if (process.env.LOWERCASES_LETTERS === "true") {
                permitted.push(..."abcdefghijklmnopqrstuvwxyz");
            }
        
            if (process.env.NUMBERS === "true") {
                permitted.push(..."0123456789");
            }
        
            if (process.env.SPECIAL_CHARACTERS === "true") {
                permitted.push(..."!@#$%¨&*()-_");
            }    

            return permitted
    }


async function handle() {
    let characters = [];
    let password = "";

    const passwordLenght = process.env.PASSWORD_LENGHT;

    characters = await permittedCharacters()


    for (let i = 0; i < password.length; i++) {
        const index = Math.floor(Math.random() * characters.length);
        password += characters[index];
    }

    return password;
}


export default handle;