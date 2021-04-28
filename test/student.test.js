const server = require("../server");
const chai = require("chai");
const chaihttp = require("chai-http");

// styling method
chai.should();

// middleware
chai.use(chaihttp);

describe("Testing Student Controller", () => {
  describe("Get All Students", () => {
    it("should return all students", (done) => {
      chai
        .request(server)
        .get("/students")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");

          done();
        });
    });
    it("should not return all students", (done) => {
      chai
        .request(server)
        .get("/student")
        .end((err, res) => {
          res.should.have.status(404);

          done();
        });
    });
  });

  describe("GET Single Student", () => {
    it("should return Single Student", (done) => {
      const studentId = "6061b58d1a6d6a5228bbc3d9";
      chai
        .request(server)
        .get(`/students/${studentId}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.an("object");

          done();
        });
    });

    it("should not return a Student", (done) => {
      const studentId = "6061b58d1a6d6a5228bbc3d9";
      chai
        .request(server)
        .get(`/student/${studentId}`)
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.be.an("object");

          done();
        });
    });
  });

  describe("CREATE a Student", () => {
    it("should create a student", (done) => {
      const student = {
        name: "Theresa",
        programme: "H. Econs",
        indexNumber: "CA123",
      };

      chai
        .request(server)
        .post(`/students`)
        .send(student)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.an("object");

          done();
        });
    });

    it("should not create a student", (done) => {
      const student = {
        programme: "H. Econs",
        indexNumber: "CA123",
      };

      chai
        .request(server)
        .post(`/students`)
        .send(student)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.an("object");

          done();
        });
    });
  });

  describe("UPDATE a Student", () => {
    it("should update a student", (done) => {
      const student = {
        name: "Theresa Bill",
        programme: "Home. Econs",
        indexNumber: "CA12356",
      };
      const studentId = "6061b9101a6d6a5228bbc3da";

      chai
        .request(server)
        .patch(`/students/${studentId}`)
        .send(student)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.an("object");

          done();
        });
    });
    it("should not update a student", (done) => {
      const student = {
        name: "Theresa Bill",
        programme: "Home. Econs",
        indexNumber: "CA12356",
      };
      const studentId = "6061b9101a6d6a5228bbc3da";
      chai
        .request(server)
        .patch(`/student/${studentId}`)
        .send(student)
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.be.an("object");

          done();
        });
    });
  });

  describe("DELETE a Student", () => {
    it("should delete a student", (done) => {
      const studentId = "6061b9101a6d6a5228bbc3da";

      chai
        .request(server)
        .delete(`/students/${studentId}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.an("object");

          done();
        });
    });

    it("should not delete a student", (done) => {
      const studentId = "6061b9101a6d6a5228bbc3da";

      chai
        .request(server)
        .delete(`/student/${studentId}`)
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.be.an("object");

          done();
        });
    });
  });
});
