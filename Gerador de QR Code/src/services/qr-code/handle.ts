import chalk from 'chalk';
import qr from 'qrcode-terminal'

async function handle(err:any, result:any) {
    
    if (err) {
        console.log('error on application');
        return;
    }

    const isSmall = result.type == 2;
    qr.generate(result.link, {small: isSmall}, (qrcode) => {
        console.log(chalk.green('QRcode gerado com sucesso:\n'))
        console.log(qrcode);
    });
}

export default handle;