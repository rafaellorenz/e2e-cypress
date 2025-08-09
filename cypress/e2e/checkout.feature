Feature: Fluxo de checkout

  Scenario: Realizar uma compra com sucesso
    Given que acesso a página inicial do e-commerce
    And crio um novo usuário e verifico se já está logado
    When adiciono um produto ao carrinho
    And vou para o carrinho e inicio o checkout
    And preencho os dados de envio e pagamento
    Then devo ver a mensagem de confirmação da compra
