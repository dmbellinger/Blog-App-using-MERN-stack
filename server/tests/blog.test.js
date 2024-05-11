const { getAllBlogs , addBlog ,
    updateBlog ,getById , 
   deleteBlog , getByUserId } = require('../controller/blog-controller');
const Blog = require('../model/Blog');
const User = require("../model/User");
const supertest = require("supertest");
const blogRouter = require("../routes/blog-routes");
const express = require("express");

const blogRoute = '/api/blogs';
const userRoute = '/api/users';
require("../config/db");
const cors = require("cors");

const app = express();

app.use(cors());

app.set("view engine", "ejs");
app.use(express.json());

describe('BlogControllerTest', () => {
    describe('GetAllTest', () => {
        test('GetAllValues', async () => {
            await supertest(app)
        .get(blogRoute)
        .expect(200)
        .then((response) => {

        });
        })
    })
    describe('Post Blog', () => {
        describe('SendBlog', async () => {
            await supertest(app)
            .post(userRoute + '/signup')
            .send({
                name: "Sample",
                email: "sample@mail.com",
                password: "samplePassW0rd567",
                blogs: []
            })
            .post(blogRoute + '/add')
            .send({title: 'My Blog',
                desc: 'New Blog',
                image: 'N/A',
                user: 'Sample'
            })
            .expect(201);
        })
    })
})