const path = require("path");

module.exports = {
  [path.resolve(
    __dirname,
    "../versioned_docs/version-0.8.0-rc0/admin/PUBLISHING.md"
  )]: {
    title: "How to Publish a New Version",
    modifiers: {
      [`[Container Images and Github Actions]()`]: `_Container Images and Github Actions_`,
    },
  },
  [path.resolve(
    __dirname,
    "../versioned_docs/version-0.8.0-rc0/docs/Endorser.md"
  )]: {
    modifiers: {
      [`![Class Diagram](./docs/assets/endorser-design.png)`]: `![Class Diagram](/docs/assets/endorser-design.png)`,
      [`![Sequence Diagram](./docs/assets/endorse-cred-def.png)`]: `![Sequence Diagram](/docs/assets/endorse-cred-def.png)`,
      [`![Sequence Diagram](./docs/assets/endorse-public-did.png)`]: `![Sequence Diagram](/docs/assets/endorse-public-did.png)`,
    },
  },
  [path.resolve(
    __dirname,
    "../versioned_docs/version-0.8.0-rc0/docs/JsonLdCredentials.md"
  )]: {
    modifiers: {
      [`> "\\<x> attributes dropped\. Provide definitions in context to correct\. \[\\<missing-properties>\]"`]: `<!-- > "\\<x> attributes dropped\. Provide definitions in context to correct\. \[\\<missing-properties>\]" -->`,
    },
  },
  [path.resolve(
    __dirname,
    "../versioned_docs/version-0.8.0-rc0/docs/SupportedRFCs.md"
  )]: {
    modifiers: {
      [`<br>`]: `<br />`,
    },
  },
  [path.resolve(
    __dirname,
    "../versioned_docs/version-0.8.0-rc0/docs/Troubleshooting.md"
  )]: {
    modifiers: {
      [`[Dev Greenlight ledger]()`]: `[Dev Greenlight ledger](http://dev.greenlight.bcovrin.vonx.io)`,
    },
  },
  [path.resolve(
    __dirname,
    "../versioned_docs/version-0.8.0-rc0/demo/AliceGetsAPhone.md"
  )]: {
    modifiers: {
      [`<img src="./collateral/revocation-2-ledger.png" alt="Ledger">`]: `<img src="./collateral/revocation-2-ledger.png" alt="Ledger" />`,
      [`<img src="./collateral/S-1-connect-1.jpg" alt="Accept Invitation">`]: `<img src="./collateral/S-1-connect-1.jpg" alt="Accept Invitation" />`,
      [`<img src="./collateral/S-1-connect-2.jpg" alt="Add Connection to Wallet">`]: `<img src="./collateral/S-1-connect-2.jpg" alt="Add Connection to Wallet" />`,
      [`<img src="./collateral/S-1-connect-3.jpg" alt="Add Connection to Wallet">`]: `<img src="./collateral/S-1-connect-3.jpg" alt="Add Connection to Wallet" />`,
      [`<img src="./collateral/S-3-credential-0.png" alt="Issue Credential">`]: `<img src="./collateral/S-3-credential-0.png" alt="Issue Credential" />`,
      [`<img src="./collateral/S-3-credential-1.jpg" alt="Credential Offer">`]: `<img src="./collateral/S-3-credential-1.jpg" alt="Credential Offer" />`,
      [`<img src="./collateral/S-3-credential-2.jpg" alt="Credential Details">`]: `<img src="./collateral/S-3-credential-2.jpg" alt="Credential Details" />`,
      [`<img src="./collateral/S-3-credential-3.jpg" alt="Credential Acceptance">`]: `<img src="./collateral/S-3-credential-3.jpg" alt="Credential Acceptance" />`,
      [`<img src="./collateral/S-4-proof-0.png" alt="Request Proof">`]: `<img src="./collateral/S-4-proof-0.png" alt="Request Proof" />`,
      [`<img src="./collateral/S-4-proof-1.jpg" alt="Proof Request Notice">`]: `<img src="./collateral/S-4-proof-1.jpg" alt="Proof Request Notice" />`,
      [`<img src="./collateral/S-4-proof-2.jpg" alt="Proof Request Details">`]: `<img src="./collateral/S-4-proof-2.jpg" alt="Proof Request Details" />`,
      [`<img src="./collateral/S-4-proof-3.jpg" alt="Proof Presentation">`]: `<img src="./collateral/S-4-proof-3.jpg" alt="Proof Presentation" />`,
      [`<img src="./collateral/S-4-proof-4.png" alt="Proof Validation">`]: `<img src="./collateral/S-4-proof-4.png" alt="Proof Validation" />`,
      [`<img src="./collateral/revocation-3-console.png" alt="Revocation">`]: `<img src="./collateral/revocation-3-console.png" alt="Revocation" />`,
    },
  },
  [path.resolve(
    __dirname,
    "../versioned_docs/version-0.8.0-rc0/demo/AriesOpenAPIDemo.md"
  )]: {
    modifiers: {
      [`<img src="./collateral/Faber-Agent.png" alt="Swagger Page for Faber Agent">`]: `<img src="./collateral/Faber-Agent.png" alt="Swagger Page for Faber Agent" />`,
      [`<img src="./collateral/Alice-Agent.png" alt="Swagger Page for Alice Agent">`]: `<img src="./collateral/Alice-Agent.png" alt="Swagger Page for Alice Agent" />`,
      [`<img src="./collateral/Faber-Agent-Local.png" alt="Swagger Page for Faber Agent">`]: `<img src="./collateral/Faber-Agent-Local.png" alt="Swagger Page for Faber Agent" />`,
      [`<img src="./collateral/Alice-Agent-Local.png" alt="Swagger Page for Alice Agent">`]: `<img src="./collateral/Alice-Agent-Local.png" alt="Swagger Page for Alice Agent" />`,
      [`<img src="./collateral/1-Faber-Invitation-1.png" alt="Create Invitation Request">`]: `<img src="./collateral/1-Faber-Invitation-1.png" alt="Create Invitation Request" />`,
      [`<img src="./collateral/1-Faber-Invitation-2.png" alt="Create Invitation Response">`]: `<img src="./collateral/1-Faber-Invitation-2.png" alt="Create Invitation Response" />`,
      [`<img src="./collateral/1-Faber-Invitation-3.png" alt="Create Invitation Response">`]: `<img src="./collateral/1-Faber-Invitation-3.png" alt="Create Invitation Response" />`,
      [`<img src="./collateral/1-Faber-Invitation-4.png" alt="Faber Connection Status">`]: `<img src="./collateral/1-Faber-Invitation-4.png" alt="Faber Connection Status" />`,
      [`<img src="./collateral/2-Alice-Invitation-1.png" alt="Receive Invitation Request">`]: `<img src="./collateral/2-Alice-Invitation-1.png" alt="Receive Invitation Request" />`,
      [`<img src="./collateral/2-Alice-Invitation-2.png" alt="Receive Invitation Request">`]: `<img src="./collateral/2-Alice-Invitation-2.png" alt="Receive Invitation Request" />`,
      [`<img src="./collateral/2-Alice-Invitation-3.png" alt="Invitation Status">`]: `<img src="./collateral/2-Alice-Invitation-3.png" alt="Invitation Status" />`,
      [`<img src="./collateral/2-Alice-Invitation-4.png" alt="Receive Invitation Request">`]: `<img src="./collateral/2-Alice-Invitation-4.png" alt="Receive Invitation Request" />`,
      [`<img src="./collateral/2-Alice-Invitation-5.png" alt="Receive Invitation Response">`]: `<img src="./collateral/2-Alice-Invitation-5.png" alt="Receive Invitation Response" />`,
      [`<img src="./collateral/3-Faber-Connection-2.png" alt="Connection Request Event">`]: `<img src="./collateral/3-Faber-Connection-2.png" alt="Connection Request Event" />`,
      [`<img src="./collateral/3-Faber-Connection-3.png" alt="Accept Connection Request">`]: `<img src="./collateral/3-Faber-Connection-3.png" alt="Accept Connection Request" />`,
      [`<img src="./collateral/3-Faber-Connection-4.png" alt="Accept Connection Request">`]: `<img src="./collateral/3-Faber-Connection-4.png" alt="Accept Connection Request" />`,
      [`<img src="./collateral/4-Alice-Connection-2.png" alt="Alice Connection Event">`]: `<img src="./collateral/4-Alice-Connection-2.png" alt="Alice Connection Event" />`,
      [`<img src="./collateral/4-Alice-Connection-1.png" alt="Alice Connection Status">`]: `<img src="./collateral/4-Alice-Connection-1.png" alt="Alice Connection Status" />`,
      [`<img src="./collateral/5-Faber-Connection-1.png" alt="Faber Connection Status">`]: `<img src="./collateral/5-Faber-Connection-1.png" alt="Faber Connection Status" />`,
      [`<img src="./collateral/6-Alice-Basic-Msg.png" alt="Alice Send Message">`]: `<img src="./collateral/6-Alice-Basic-Msg.png" alt="Alice Send Message" />`,
      [`<img src="./collateral/7-Faber-Basic-Msg.png" alt="Faber Receive Message">`]: `<img src="./collateral/7-Faber-Basic-Msg.png" alt="Faber Receive Message" />`,
      [`<img src="./collateral/8-Alice-Basic-Msg.png" alt="Alice Receive Message Confirmation">`]: `<img src="./collateral/8-Alice-Basic-Msg.png" alt="Alice Receive Message Confirmation" />`,
      [`<img src="./collateral/C-1-Faber-DID-Public.png" alt="Faber Public DID">`]: `<img src="./collateral/C-1-Faber-DID-Public.png" alt="Faber Public DID" />`,
      [`<img src="./collateral/C-2-Faber-Ledger-Search-0.png" alt="Search Ledger by DID">`]: `<img src="./collateral/C-2-Faber-Ledger-Search-0.png" alt="Search Ledger by DID" />`,
      [`<img src="./collateral/C-2-Faber-Ledger-Search-1.png" alt="DID Transaction">`]: `<img src="./collateral/C-2-Faber-Ledger-Search-1.png" alt="DID Transaction" />`,
      [`<img src="./collateral/C-2-Faber-Ledger-Search-2.png" alt="DID Endpoint Transaction">`]: `<img src="./collateral/C-2-Faber-Ledger-Search-2.png" alt="DID Endpoint Transaction" />`,
      [`<img src="./collateral/C-2-Faber-Ledger-Search-3.png" alt="Schema Transaction">`]: `<img src="./collateral/C-2-Faber-Ledger-Search-3.png" alt="Schema Transaction" />`,
      [`<img src="./collateral/C-2-Faber-Ledger-Search-4.png" alt="Credential Definition Transaction">`]: `<img src="./collateral/C-2-Faber-Ledger-Search-4.png" alt="Credential Definition Transaction" />`,
      [`<img src="./collateral/C-3-Faber-Info-2.png" alt="Search Schemas">`]: `<img src="./collateral/C-3-Faber-Info-2.png" alt="Search Schemas" />`,
      [`<img src="./collateral/C-3-Faber-Info-3.png" alt="Search Schemas">`]: `<img src="./collateral/C-3-Faber-Info-3.png" alt="Search Schemas" />`,
      [`<img src="./collateral/C-3-Faber-Info-4.png" alt="Search Credential Definitions">`]: `<img src="./collateral/C-3-Faber-Info-4.png" alt="Search Credential Definitions" />`,
      [`<img src="./collateral/C-3-Faber-Info-5.png" alt="Search Credential Definitions">`]: `<img src="./collateral/C-3-Faber-Info-5.png" alt="Search Credential Definitions" />`,
      [`<img src="./collateral/C-3-Faber-Info-1.png" alt="Connection Id">`]: `<img src="./collateral/C-3-Faber-Info-1.png" alt="Connection Id" />`,
      [`<img src="./collateral/C-4-Faber-Credential-Offer-1.png" alt="Faber Submit Credential Offer">`]: `<img src="./collateral/C-4-Faber-Credential-Offer-1.png" alt="Faber Submit Credential Offer" />`,
      [`<img src="./collateral/C-4-Faber-Credential-Offer-2.png" alt="Faber Submit Credential Offer">`]: `<img src="./collateral/C-4-Faber-Credential-Offer-2.png" alt="Faber Submit Credential Offer" />`,
      [`<img src="./collateral/C-5-Alice-Credential-Offer-1.png" alt="Issue Credential">`]: `<img src="./collateral/C-5-Alice-Credential-Offer-1.png" alt="Issue Credential" />`,
      [`<img src="./collateral/C-7-Alice-Store-Credential-1.png" alt="">`]: `<img src="./collateral/C-7-Alice-Store-Credential-1.png" alt="" />`,
      [`<img src="./collateral/C-7-Alice-Store-Credential-2.png" alt="">`]: `<img src="./collateral/C-7-Alice-Store-Credential-2.png" alt="" />`,
      [`<img src="./collateral/C-7-Alice-Store-Credential-3.png" alt="">`]: `<img src="./collateral/C-7-Alice-Store-Credential-3.png" alt="" />`,
      [`<img src="./collateral/C-7-Alice-Store-Credential-4.png" alt="">`]: `<img src="./collateral/C-7-Alice-Store-Credential-4.png" alt="" />`,
      [`<img src="./collateral/C-6-Faber-Credential-Request.png" alt="">`]: `<img src="./collateral/C-6-Faber-Credential-Request.png" alt="" />`,
      [`<img src="./collateral/C-8-Faber-Credential-Ack-0.png" alt="">`]: `<img src="./collateral/C-8-Faber-Credential-Ack-0.png" alt="" />`,
      [`<img src="./collateral/C-8-Faber-Credential-Ack-1.png" alt="">`]: `<img src="./collateral/C-8-Faber-Credential-Ack-1.png" alt="" />`,
      [`<img src="./collateral/C-8-Faber-Credential-Ack-2.png" alt="">`]: `<img src="./collateral/C-8-Faber-Credential-Ack-2.png" alt="" />`,
      [`<img src="./collateral/P-1-Faber-Proof-Request-1.png" alt="Send Proof Request">`]: `<img src="./collateral/P-1-Faber-Proof-Request-1.png" alt="Send Proof Request" />`,
      [`<img src="./collateral/P-1-Faber-Proof-Request-2.png" alt="Send Proof Request">`]: `<img src="./collateral/P-1-Faber-Proof-Request-2.png" alt="Send Proof Request" />`,
      [`<img src="./collateral/P-2-Alice-Proof-Request-1.png" alt="Proof Request">`]: `<img src="./collateral/P-2-Alice-Proof-Request-1.png" alt="Proof Request" />`,
      [`<img src="./collateral/P-2-Alice-Proof-Request-2.png" alt="Proof Request">`]: `<img src="./collateral/P-2-Alice-Proof-Request-2.png" alt="Proof Request" />`,
      [`<img src="./collateral/P-3-Faber-Proof-1.png" alt="Receive and Verify Proof">`]: `<img src="./collateral/P-3-Faber-Proof-1.png" alt="Receive and Verify Proof" />`,
      [`<img src="./collateral/P-3-Faber-Proof-2.png" alt="Receive and Verify Proof">`]: `<img src="./collateral/P-3-Faber-Proof-2.png" alt="Receive and Verify Proof" />`,
      [`<img src="./collateral/P-3-Faber-Proof-3.png" alt="Receive and Verify Proof">`]: `<img src="./collateral/P-3-Faber-Proof-3.png" alt="Receive and Verify Proof" />`,
    },
  },
  [path.resolve(
    __dirname,
    "../versioned_docs/version-0.8.0-rc0/demo/README.md"
  )]: {
    modifiers: {
      [`<img src="./collateral/multitenancy-admin-api.png" alt="Multi-tenancy via Admin API">`]: `<img src="./collateral/multitenancy-admin-api.png" alt="Multi-tenancy via Admin API" />`,
    },
  },
};
