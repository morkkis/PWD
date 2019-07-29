# mock-server
Basic mock server base on typescript 
Run `yarn serve` to start mock server.
From your root application you can run it like this:
`"scripts": {
    "mock:server": "cd ./mock-server && yarn serve",
},`

To add proxy to mock server we should enhance the script with something like this:
`"scripts": {
    "mock:server": "cd ./mock-server && yarn \"server -- {@}\" --",
},`
command: `yarn run mock:server -- --appProxy=http://google.com:8080 ---app2Proxy=http://google2.com:8080`
