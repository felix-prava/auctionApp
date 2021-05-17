const { post } = require("request");
const reqeust_promise = require("request-promise");
const config = require("../config");

let uri =
  config.database_config.protocol +
  config.database_config.url +
  ":" +
  config.database_config.port;

//Get all the posts
const checkBidFinished = async () => {
  let posts = [];

  //get from database
  await reqeust_promise(uri + config.database_config.readall_api)
    .then((body) => {
      posts = JSON.parse(body);
    })
    .catch((err) => {
      console.log(err);
    });

    //check if is bid finished
  posts.forEach((post) => {
    //check if any post expired

    if (Date.parse(new Date()) >= Date.parse(post.bid_time_remaining) && post.bid_finished == false) {
        let new_uri = uri+config.database_config.update+"?_id="+post._id+"&bid_finished=true";
        reqeust_promise({ method: "PATCH", uri: new_uri })
        .then((body) => {
          let update_uri = uri + "/api/users/update?email="+post.last_bidder+"&won=true&bids_won="+post._id;
          console.log(update_uri);
           reqeust_promise({ method: "PATCH", uri: update_uri })
            .then((body) => {
              console.log("bidder updated");
           

        })
        .catch((err) => {
          console.log(err);
        });   

        })
        .catch((err) => {
          console.log(err);
        });
    }
  });
};

module.exports = {checkBidFinished};