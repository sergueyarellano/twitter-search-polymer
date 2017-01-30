The twitter api does not permit webapps to run requests via localhost due to some oauth policy.

For this case I just created a server in nodeJS and expressJS to serve mocks.

The mocks were recorded with the real responses of twitter API via POSTMAN (the only way to attack the api if not in production)

Polymer CLI and bower must be installed globally

`npm install` will install node packages:

* In the postinstall bower packages will be installed.

`npm start` will run the mock server and the polymer server.
