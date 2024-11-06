const request = require('supertest');
const app = require('../src/app');
const Course = require('../src/models/Course');
const { connectDB, disconnectDB } = require('../src/config/db');

beforeAll(async () => {
  await connectDB();
});

afterAll(async () => {
  await disconnectDB();
});

describe('Course API', () => {
  let courseId;

  describe('POST /courses/create', () => {
    it('should create a new course', async () => {
      const res = await request(app)
        .post('/courses/create')
        .send({
          title: 'Test Course',
          description: 'This is a test course',
          price: 100
        });

      expect(res.statusCode).toEqual(201);
      expect(res.body).toHaveProperty('course');
      courseId = res.body.course.id;
    });
  });

  describe('PUT /courses/update/:id', () => {
    it('should update an existing course', async () => {
      const res = await request(app)
        .put(`/courses/update/${courseId}`)
        .send({
          title: 'Updated Test Course',
          description: 'This is an updated test course',
          price: 150
        });

      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty('course');
      expect(res.body.course.title).toEqual('Updated Test Course');
    });
  });

  describe('DELETE /courses/delete/:id', () => {
    it('should delete a course', async () => {
      const res = await request(app)
        .delete(`/courses/delete/${courseId}`);

      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty('message', 'Course deleted successfully');
    });
  });

  describe('GET /courses/:id', () => {
    it('should retrieve a course by its identifier', async () => {
      const res = await request(app)
        .get(`/courses/${courseId}`);

      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty('course');
      expect(res.body.course.id).toEqual(courseId);
    });
  });
});
