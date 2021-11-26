/**
 * TODO: register a user (used to save the admin data in the first use only when the admin login and change his data this endpoint will be closed!)
 * 1. add express router
 * 2. validate the data
 * 3. check if there's a user with the same username
 * 4. hash the password
 * 5. save the user data
 * 6. response with 200 and login the user (send the token instently)
 * 7. if there's errors response with 500 (if server error) 403 (if wrong data) 404 (if wrong request)
 */

/**
 * TODO: login a user
 * 1. use the same express router that used for the register process
 * 2. check if the user is already logged in (if so redirect him to /home)
 * 3. validate all the data first!
 * 4. check if the email is correct (if not response with 403)
 * 5. compare the password (if wrong response with 403)
 * 6. response with 200 and login the user
 * 7. if there's errors response with 500 (if server error) 403 (if wrong data) 404 (if wrong request)
 */