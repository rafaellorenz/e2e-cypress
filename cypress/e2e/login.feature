Feature: Login e navegação no Magento

  Scenario: Usuário faz login e navega para página de Conta
    Given que acesso a página de login
    When faço login com usuário "rafa@lorenz.com" e senha "raf@123456"
    Then devo ver a página da conta do usuário
