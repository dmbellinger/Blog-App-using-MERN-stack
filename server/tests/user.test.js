const {  getAllUser, signUp, logIn } = require('../controller/user-contoller');
const User = require('../model/User');
const supertest = require("supertest");
const express = require("express");
const userRouter = require("../routes/user-routes");
const baseURL = 'http://localhost:5001/'

const userRoute = '/api/users'
require("../config/db");
const cors = require("cors");

const app = express();

app.use(cors());

app.set("view engine", "ejs");
app.use(express.json());

describe('UserTest', () => {
    describe('GetAllTest', () => {
        test('GetAllValues', async () => {
    await supertest(app)
        .get(userRoute)
        .expect(200)
        .then((response) => {

        });
        })
    })

    describe('PostTest', () => {
        test('PostValue', async () => {
    await supertest(app)
        .post(userRoute)
        .expect(201)
        .then((response) => {

        });
        })
    })
})