"use strict";

// Jani Haiko, 2020

const idp = require("saml-idp");

console.info("Starting Kissakalan Tunnistus IdP...");
idp.runServer({
    // Host settings
    host: "localhost",
    port: 443,

    // HTTPS
    // https://gist.github.com/fntlnz/cf14feb5a46b2eda428e000157447309
    https: true,
    httpsCert: "./certs/localhost.crt",
    httpsPrivateKey: "./certs/localhost.key",

    // IdP signing certificate
    cert: "./certs/idp-public-cert.pem",
    key: "./certs/idp-private-key.pem",

    // General IdP settings
    issuer: "urn:kissakala:idp",
    relayState: undefined, // Default relayState
    rollSession: false,
    disableRequestAcsUrl: true,
    authnContextClassRef: "urn:oasis:names:tc:SAML:2.0:ac:classes:PasswordProtectedTransport",
    configFile: "../../config.js",

    // Encrypted assertions
    encryptAssertion: false,
    //encryptionCert: "TODO",
    //encryptionPublicKey: "TODO",

    // SP metadata
    acsUrl: "TODO",
    sloUrl: "TODO",
    audience: "TODO", // SP Entity ID
    serviceProviderId: undefined
});