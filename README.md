### Notes

1. The twitter api does not permit webapps to run requests via localhost due to some oauth policy:

  * For this case I just created a server in nodeJS and expressJS to serve mocks.

  * The mocks were recorded with the real responses of twitter API via POSTMAN (the only way to attack the api if not in production)

2. For this special case the components are at the same level as the main app.

  * In a normal case I would put each component in a separate repo and then import them in the main app.

3. The service worker has been generated creating a config file under `swconfig/` and running this command:
  * `$twitter-search-polymer> node_modules/.bin/sw-precache --config=swconfig/sw-precache-config.js --verbose`
### Running the app

**Polymer CLI** and **bower** must be installed globally

`npm install`
* will install node packages:
* **bower packages** will be installed automatically after.

`npm start` will run the mock server and the polymer server.
