curl -v -H "Content-Type: multipart/form-data" -H "jwt: $JWT" -X POST -F "file=@../public/bot.jpg" https://api.watsonwork.ibm.com/photos
