Feature: Login e navegação no Magento

  Scenario: Usuário faz login e navega para página de Conta
    Given que acesso a página de login
    When faço login com usuário "rafael@lorenz.com" e senha "rafael@1234"
    Then devo ver a página da conta do usuário
