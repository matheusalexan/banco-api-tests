const request = require('supertest')
const { expect } = require('chai')
require('dotenv').config()
const postLogin = require('../fixtures/postLogin.json')

    describe('Login', () => {
        describe('POST /login', () => {
            it('Deve retornar status 200 com um token em string quando usar credencias validas', async () => {
                const bodyLogin = { ...postLogin}
                const response = await request (process.env.BASE_URL)
                    .post('/login')
                    .set('Content-Type', 'application/json')
                    .send(bodyLogin)
 
                expect(response.status).to.equal(200);
                expect(response.body.token).to.be.a('string');   
                
            })

            it('Deve retornar status 400, quando os campos de login ficarem vazios/ausentes', async () => {
                const bodyLogin = { ...postLogin}
                bodyLogin.username = "" 
                bodyLogin.senha = ""

                const response = await request (process.env.BASE_URL)
                .post('/login')
                .set('Content-Type', 'application/json')
                .send(bodyLogin)

                expect(response.status).to.equal(400)

            })

        })

    })
        