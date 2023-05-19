const mongoose = require("mongoose");
const request = require("supertest");
const dotenv = require('dotenv').config();

const app = require('../server');


/* Connecting to the database before each test. */
beforeEach(async () => {
    await mongoose.connect(process.env.URI);
  });
  
  /* Closing database connection after each test. */
  afterEach(async () => {
    await mongoose.connection.close();
  });

  let testId;


  describe("GET /api/v1/users", () => {
    it("should return all users", async () => {
      const res = await request(app).get("/api/v1/users");
      expect(res.status).toBe(200);
      expect(res.body.length).toBeGreaterThan(0);
    });
  });

  describe("GET /api/v1/users/:id", () => {
    it("should return a user", async () => {
      const res = await request(app).get(
        "/api/v1/users/64675a860ef86903d13dfa20"
      );
      expect(res.statusCode).toBe(200);
      expect(res.body.username).toBe("uche");
    });
  });


  describe("POST /api/v1/users/register", () => {

    it("should create a user", async () => {
      const res = await request(app).post("/api/v1/users/register").send({
        username: "tester",
        email: "tester@email.com",
        password: "mypwd",
      });
      expect(res.statusCode).toBe(201);
      expect(res.body.email).toBe("tester@email.com");

      testId = res.body._id;
    });
  });


  describe("PUT /api/v1/users/:id", () => {
    it("should update a user", async () => {
      const res = await request(app)
        .put(`/api/v1/users/${testId}`)
        .send({
          email: "updated@email.com",
        });
      expect(res.statusCode).toBe(200);
      expect(res.body.email).toBe("updated@email.com");
    });
  });

  describe("DELETE /api/v1/users/:id", () => {
    it("should delete a user", async () => {
      const res = await request(app).delete(`/api/v1/users/${testId}`);
      expect(res.statusCode).toBe(200);
    });
  });
  