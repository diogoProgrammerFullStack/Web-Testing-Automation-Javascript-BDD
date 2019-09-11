
Feature('Google');

const googlePage = require('./pages/google_page');

Scenario('Teste pesquisa', (I) => {
    I.amOnPage('http://www.google.com');
    googlePage.pesquisa_algo('Codeceptjs');
    I.see('Codecept');
});
