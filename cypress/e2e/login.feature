Feature: Login

  Scenario: Login com usuário válido
    Given que acesso a página de login
    When faço login com usuário "tomsmith" e senha "SuperSecretPassword!"
    Then devo ver a página de boas vindas
