const request = require('request');

// Default Toscana URL that APIs will called from.
const WW_URL = "https://api.watsonwork.ibm.com";

// API to authorize application and generate access token.
const AUTHORIZATION_API = "/oauth/token";

const APP_ID = process.argv[2];
const APP_SECRET = process.argv[3];

// Build request options for authentication.
const authenticationOptions = {
    "method": "POST",
    "url": `${WW_URL}${AUTHORIZATION_API}`,
    "auth": {
      "user": APP_ID,
      "pass": APP_SECRET
    },
    "form": {
      "grant_type": "client_credentials"
    }
  };

if (process.argv[2] == null) {
  console.log("Usage:\n");
  console.log("node getappJWT.js <appId> <appSecret>\n");
} else {
  // Authorize application and send message.
  request(authenticationOptions, function(err, response, body){

    // If successful authentication, a 200 response code is returned
    if(response.statusCode == 200){
      console.log ("Authentication successful\n");
      console.log ("user:" + authenticationOptions.auth.user);
      console.log ("pass:" + authenticationOptions.auth.pass + "\n");
      console.log ("access_token:\n\n" + JSON.parse(body).access_token + "\n");
      console.log ("token_type:" + JSON.parse(body).token_type);
      console.log ("expires_in:" + JSON.parse(body).expires_in);
      console.log ("\n");
    } else {
      console.log("Error authenticating with\nUser:" + authenticationOptions.auth.user + "\nPassword:" + authenticationOptions.auth.pass + "\n\n");
    }
  });

}
