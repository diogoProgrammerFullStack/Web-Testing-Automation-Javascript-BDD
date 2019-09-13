const googlePage = require('../pages/google_page');

const I = actor();
// Add in your custom step files

Given('que estou na tela do google', () => {
    I.amOnPage('/');
});

When('pesquiso {string}', (txt) => {
    googlePage.pesquisa_algo(txt);
});

Then('deve exibir {string}', (result) => {
    I.see(result);
});
