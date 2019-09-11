@pesquisa_google
Feature: Pesquisa Google
  Eu como usuario
  Desejo realizar uma pesquisa no Google

@teste01
Scenario: Pesquisa codecept google
   Given que estou na tela do google
   When pesquiso "Codeceptjs"
   Then deve exibir "Codecept"
