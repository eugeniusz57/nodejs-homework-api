// const express = require("express");
// // const { describe, expect, test, beforeAll } = require("@jest/globals");
// const login = require("./login");
// const request = require("supertest");
// const service = { email: "user@gmail.com", password: "12345678" };

// const app = express();
// app.post("/api/users/login", login);

// describe("test singup controler", () => {
//   beforeAll(() => app.listen(3000));
//   afterAll(() => app.close());
//   test("singup return status 200", async () => {
//     const response = await request(app).post("/api/users/login").json(service);
//     expect(response.status).toBe(200);
//     // expect(response.body.token).toBe(String);
//     // const [user] = response.body;
//     // expect(typeof user.email).toBe("string");
//   });
// });
