const request = require("supertest"),
    Server = require("../server");



describe('test the web server', () => {
    it('should response with 404', async () => {
        await request(Server).get("/hi" , (err , res) => {
             expect(res.statusCode).toBe(404)
        })
    })
    it('should response object contain error with value true', async () => {
        await request(Server).get("/hi" , (err , res) => {
             expect(res.body.error).toBe(true)
        })
    })
    it('should response with 200', async () => {
        await request(Server).get("/" , (err , res) => {
             expect(res.statusCode).toBe(200)
        })
    })
});