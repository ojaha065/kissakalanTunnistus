
// Default values
const profile = {
  "urn:oid:1.2.246.21": "010170-0010",
  "urn:oid:2.5.4.3": "Meikäläinen Matti Sakari",
  "urn:oid:2.16.840.1.113730.3.1.241": "Matti Meikäläinen",
  "urn:oid:2.5.4.42": "Matti",
  "urn:oid:2.5.4.4": "Meikäläinen",
  "http://eidas.europa.eu/attributes/naturalperson/CurrentGivenName": "Matti Sakari"
};

// Assertion attributes
const metadata = [
  {
    id: "urn:oid:1.2.246.22",
    optional: true,
    displayName: "electronicIdentificationNumber",
    description: "Sähköinen asiointitunnus, satu",
    multiValue: false
  },
  {
    id: "urn:oid:1.2.246.21",
    optional: true,
    displayName: "nationalIdentificationNumber",
    description: "Henkilötunnus, hetu",
    multiValue: false
  },
  {
    id: "urn:oid:1.2.246.517.3003.113.4",
    optional: true,
    displayName: "kid",
    description: "Katso-ID",
    multiValue: false
  },
  {
    id: "urn:oid:2.5.4.3",
    optional: true,
    displayName: "cn",
    description: "Nimi, common name",
    multiValue: false
  },
  {
    id: "urn:oid:2.16.840.1.113730.3.1.241",
    optional: true,
    displayName: "displayName",
    description: "Koko nimi",
    multiValue: false
  },
  {
    id: "urn:oid:2.5.4.42",
    optional: true,
    displayName: "givenName",
    description: "Kutsumanimi",
    multiValue: false
  },
  {
    id: "urn:oid:2.5.4.4",
    optional: true,
    displayName: "sn",
    description: "Sukunimi",
    multiValue: false
  },
  {
    id: "http://eidas.europa.eu/attributes/naturalperson/CurrentGivenName",
    optional: true,
    displayName: "FirstName",
    description: "Etunimet",
    multiValue: false
  },
  {
    id: "urn:oid:1.2.246.517.3002.111.17",
    optional: true,
    displayName: "foreignPersonIdentifier",
    description: "Ulkomaisen henkilön tunniste",
    multiValue: false
  },
  {
    id: "http://eidas.europa.eu/attributes/naturalperson/CurrentFamilyName",
    optional: true,
    displayName: "FamilyName",
    description: "Sukunimi (eIDAS)",
    multiValue: false
  },
  {
    id: "http://eidas.europa.eu/attributes/naturalperson/DateOfBirth",
    optional: true,
    displayName: "DateOfBirth",
    description: "Syntymäaika (eIDAS)",
    multiValue: false
  },
  {
    id: "http://eidas.europa.eu/attributes/naturalperson/PersonIdentifier",
    optional: true,
    displayName: "PersonIdentifier",
    description: "PersonalIdentifier (eIDAS)",
    multiValue: false
  }
];

module.exports = {
  user: profile,
  metadata: metadata
};