const index = require("./index.routes")
const auth = require("./auth.routes")
const admin = require("./admin.routes")
const guru = require("./guru.routes")
const matpel = require("./matpel.routes")
const kelas = require("./kelas.routes")
const verify_token = require("../middleware/verify_token.middleware")

const routes = (app) => {
    app.use("/", index)
    app.use("/auth", auth)
    app.use("/guru", guru)
    app.use("/admin", admin)
    app.use("/matpel", matpel)
    app.use("/kelas", kelas)
}

module.exports = routes