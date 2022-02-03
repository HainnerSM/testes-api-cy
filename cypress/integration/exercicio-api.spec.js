/// <reference types="cypress" />
const faker = require('faker');
const { reporters } = require('mocha');
import contrato from '../contracts/produtos.contract'



describe('Testes da Funcionalidade Usuários', () => {

     it('Deve validar contrato de usuários', () => {
          cy.request('produtos').then(response =>{
               expect(response.status).to.equal(200)
               return contrato.validateAsync(response.body)
               
          })

          
     });


     it('Deve cadastrar um usuário com sucesso', () => {

          let name = faker.name.firstName()
          let email = faker.internet.email()
          cy.cadastrarUsuario(name, email, 'teste1', 'false')
               .then((Response) => {
                    expect(Response.status).to.equal(201)
                    expect(Response.body.message).to.equal('Cadastro realizado com sucesso')


               })


     });

     it('Deve listar usuários cadastrados', () => {
          cy.request({
               method: 'GET',
               url: 'usuarios'
          }).then(response => { 
               expect(response.status).to.equal(200)
          })
     });



     it('Deve validar um usuário com email inválido', () => {
          let name = faker.name.firstName()

          cy.cadastrarUsuario(name, 'Javonte.Kling78@hotmail', 'teste1', 'false')
               .then((Response) => {
                    expect(Response.status).to.equal(400)
                    expect(Response.body.email).to.equal('email deve ser um email válido')

               })


     });

     it('Deve editar um usuário previamente cadastrado', () => {
          //Usa a posição do usuario na lista para recuperar o ID e alterar os dados do usuario
          cy.updateUser(0, 'jorge', 'testandoalt@miao.com.br', 'testetete', 'false')
              
     });

     it('Deve deletar um usuário previamente cadastrado', () => {
          //Usa a posição do usuario na lista para recuperar o ID e deletar o usuario
          cy.deletarUsuario(0)

     });


});
