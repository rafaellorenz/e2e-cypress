describe('Validação da API Reqres', () => {

  const baseUrl = 'https://reqres.in/api';

  it('Busca um usuário', () => {
    cy.request({
      method: 'GET',
      url: `${baseUrl}/users/3`,
      headers: {
        'x-api-key': 'reqres-free-v1'
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.headers['content-type']).to.include('application/json');
    });
  });

  it('Busca um usuário inexistente', () => {
    cy.request({
      method: 'GET',
      url: `${baseUrl}/users/9999`,
      headers: {
        'x-api-key': 'reqres-free-v1'
      },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(404);
      expect(response.body).to.be.empty;
    });
  });
});
