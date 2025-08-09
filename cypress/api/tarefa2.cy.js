describe('CRUD usando a Fake Store API', () => {
  let productId;

  const baseUrl = 'https://fakestoreapi.com';

  it('Buscar todos os produtos', () => {
    cy.request(`${baseUrl}/products`).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.headers['content-type']).to.include('application/json');
      expect(response.body.length).to.be.greaterThan(0);
    });
  });

  it('Cadastrar um novo produto', () => {
    cy.fixture('product').then((product) => {
      cy.request('POST', `${baseUrl}/products`, product).then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body).to.have.property('id');
        expect(response.body.title).to.eq(product.title);
        productId = response.body.id;
      });
    });
  });

  it('Atualizar um produto', () => {
    cy.request('PUT', `${baseUrl}/products/${productId}`, {
      title: 'Produto atualizado',
      price: 1.23
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.title).to.eq('Produto atualizado');
      expect(response.body.price).to.eq(1.23);
    });
  });

  it('Deletar um produto', () => {
    cy.request('DELETE', `${baseUrl}/products/${productId}`).then((deleteResponse) => {
      expect(deleteResponse.status).to.eq(200);
    });

    cy.request('GET', `${baseUrl}/products/${productId}`).then((getResponse) => {
      expect(getResponse.status).to.eq(200);
      expect(getResponse.body).to.be.empty;
    });
  });
});