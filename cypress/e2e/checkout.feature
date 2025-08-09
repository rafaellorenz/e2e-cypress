Feature: Fluxo de checkout simples

  Scenario: Finalizar uma compra com sucesso
    Given que acesso a página inicial do e-commerce
    And faço login com usuário "rafa@lorenz.com" e senha "raf@123456"
    When adiciono um produto ao carrinho
    And vou para o carrinho e inicio o checkout
    And preencho os dados de envio e pagamento
    Then devo ver a mensagem de confirmação da compra
