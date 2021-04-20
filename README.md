# auctionApp

Technologies used: Node JS, Express JS, Angular, Mongo DB

The password is hashed before being stored into the DB.
The password, name, username have constraints like minimum and maximum length.
The email is verified to be a valid email before registration.
A new user cannot register using an email that has already been used by another user.


ISSUES (delete when resolved) :
auctionApp\server\Database\controllers\posts.js 
auctionApp\server\Database\controllers\users.js