"use strict";

// Jani Haiko, 2020

const idp = require("saml-idp");
const { env } = require("./env")

console.info("Starting Kissakalan Tunnistus IdP...");

idp.runServer({
    // Host settings
    host: env.HOST,
    port: env.PORT,

    // HTTPS
    // https://gist.github.com/fntlnz/cf14feb5a46b2eda428e000157447309
    https: env.SSL,
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
    acsUrl: env.ACS_URL,
    sloUrl: env.SLO_URL,
    audience: env.AUDIENCE, // SP Entity ID
    serviceProviderId: undefined
});