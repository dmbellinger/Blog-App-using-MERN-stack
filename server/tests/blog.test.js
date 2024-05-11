const { getAllBlogs , addBlog ,
    updateBlog ,getById , 
   deleteBlog , getByUserId } = require('../controller/blog-controller');
const Blog = require('../model/Blog');
const User = require("../model/User");
const supertest = require("supertest");
const blogRouter = require("../routes/blog-routes");
const userRouter = require("../routes/user-routes");
const express = require("express");
const baseURL = 'http://localhost:5001/'

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
        test('GetValue', async () => {
            await supertest(app)
           let user = {
                name: "Sample",
                email: "sample@mail.com",
                password: "samplePassW0rd567",
                blogs: []
            }
            .post(userRoute + '/signup')
            .send(user)
            let blog = 
                {title: 'My Blog',
                desc: 'New Blog',
                image: 'N/A',
                user: `:${user.params._id}`
            }
            .post(blogRoute + '/add')
            .send(blog)
        .get(blogRoute + `:${user.params._id}`)
        .expect(200)
        .then((response) => {

        });
        
        });
    });
    describe('PostBlog', () => {
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
                user: `:${user.params._id}`
            })
            .expect(201);
        });
    });
    describe('DeleteBlog', async () => {
        await supertest(app)
        blog = {title: 'My Blog',
        desc: 'New Blog',
        image: 'N/A',
        user: `:${user.params._id}`
    }
        .post(userRoute + '/signup')
        .send({
            name: "Sample",
            email: "sample@mail.com",
            password: "samplePassW0rd567",
            blogs: []
        })
        .post(blogRoute + '/add')
        .send(blog)
        .delete(blogRoute + `:${blog.params._id}`)
        .expect(200);
    });
    describe('GetUser', async () => {
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
            user: `:${user.params._id}`
        })
        .get(blogRoute + `/user/:${user.params._id}`)
        .expect(201);
    });
});