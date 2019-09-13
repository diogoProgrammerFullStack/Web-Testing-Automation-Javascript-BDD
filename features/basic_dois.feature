@pesquisa_google_dois
Feature: Pesquisa Google dois
  Eu como usuario
  Desejo realizar uma pesquisa no Google

@teste01
Scenario: Pesquisa codecept google dois
   Given que estou na tela do google
   When pesquiso "Javascript"
   Then deve exibir "Javascript"
