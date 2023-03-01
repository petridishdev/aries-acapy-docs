"use strict";(self.webpackChunkaries_cloud_agent_python_documentation=self.webpackChunkaries_cloud_agent_python_documentation||[]).push([[7895],{3905:(e,a,t)=>{t.d(a,{Zo:()=>s,kt:()=>p});var r=t(7294);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function _(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function n(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?_(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):_(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function d(e,a){if(null==e)return{};var t,r,l=function(e,a){if(null==e)return{};var t,r,l={},_=Object.keys(e);for(r=0;r<_.length;r++)t=_[r],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var _=Object.getOwnPropertySymbols(e);for(r=0;r<_.length;r++)t=_[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var i=r.createContext({}),o=function(e){var a=r.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):n(n({},a),e)),t},s=function(e){var a=o(e.components);return r.createElement(i.Provider,{value:a},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},g=r.forwardRef((function(e,a){var t=e.components,l=e.mdxType,_=e.originalType,i=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),u=o(t),g=l,p=u["".concat(i,".").concat(g)]||u[g]||m[g]||_;return t?r.createElement(p,n(n({ref:a},s),{},{components:t})):r.createElement(p,n({ref:a},s))}));function p(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var _=t.length,n=new Array(_);n[0]=g;var d={};for(var i in a)hasOwnProperty.call(a,i)&&(d[i]=a[i]);d.originalType=e,d[u]="string"==typeof e?e:l,n[1]=d;for(var o=2;o<_;o++)n[o]=t[o];return r.createElement.apply(null,n)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},1462:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>n,default:()=>m,frontMatter:()=>_,metadata:()=>d,toc:()=>o});var r=t(7462),l=(t(7294),t(3905));const _={},n="aries_cloudagent.ledger.merkel_validation package",d={unversionedId:"code/generated/aries_cloudagent.ledger.merkel_validation",id:"code/generated/aries_cloudagent.ledger.merkel_validation",title:"aries_cloudagent.ledger.merkel_validation package",description:"Submodules",source:"@site/docs/code/generated/aries_cloudagent.ledger.merkel_validation.md",sourceDirName:"code/generated",slug:"/code/generated/aries_cloudagent.ledger.merkel_validation",permalink:"/aries-acapy-docs/code/generated/aries_cloudagent.ledger.merkel_validation",draft:!1,editUrl:"https://github.com/hyperledger/aries-acapy-docs/tree/main/docs/docusaurus/docs/code/generated/aries_cloudagent.ledger.merkel_validation.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"aries_cloudagent.ledger package",permalink:"/aries-acapy-docs/code/generated/aries_cloudagent.ledger"},next:{title:"aries_cloudagent.ledger.multiple_ledger package",permalink:"/aries-acapy-docs/code/generated/aries_cloudagent.ledger.multiple_ledger"}},i={},o=[{value:"Submodules",id:"submodules",level:2},{value:"aries_cloudagent.ledger.merkel_validation.constants module",id:"aries_cloudagentledgermerkel_validationconstants-module",level:2},{value:"aries_cloudagent.ledger.merkel_validation.domain_txn_handler module",id:"aries_cloudagentledgermerkel_validationdomain_txn_handler-module",level:2},{value:"aries_cloudagent.ledger.merkel_validation.domain_txn_handler.decode_state_value(encoded_value)",id:"aries_cloudagentledgermerkel_validationdomain_txn_handlerdecode_state_valueencoded_value",level:3},{value:"aries_cloudagent.ledger.merkel_validation.domain_txn_handler.encode_state_value(value, seqNo, txnTime)",id:"aries_cloudagentledgermerkel_validationdomain_txn_handlerencode_state_valuevalue-seqno-txntime",level:3},{value:"aries_cloudagent.ledger.merkel_validation.domain_txn_handler.extract_params_write_request(data)",id:"aries_cloudagentledgermerkel_validationdomain_txn_handlerextract_params_write_requestdata",level:3},{value:"aries_cloudagent.ledger.merkel_validation.domain_txn_handler.get_proof_nodes(reply)",id:"aries_cloudagentledgermerkel_validationdomain_txn_handlerget_proof_nodesreply",level:3},{value:"aries_cloudagent.ledger.merkel_validation.domain_txn_handler.hash_of(text)",id:"aries_cloudagentledgermerkel_validationdomain_txn_handlerhash_oftext",level:3},{value:"aries_cloudagent.ledger.merkel_validation.domain_txn_handler.make_state_path_for_attr(did, attr_name, attr_is_hash=False)",id:"aries_cloudagentledgermerkel_validationdomain_txn_handlermake_state_path_for_attrdid-attr_name-attr_is_hashfalse",level:3},{value:"aries_cloudagent.ledger.merkel_validation.domain_txn_handler.make_state_path_for_claim_def(authors_did, schema_seq_no, signature_type, tag)",id:"aries_cloudagentledgermerkel_validationdomain_txn_handlermake_state_path_for_claim_defauthors_did-schema_seq_no-signature_type-tag",level:3},{value:"aries_cloudagent.ledger.merkel_validation.domain_txn_handler.make_state_path_for_nym(did)",id:"aries_cloudagentledgermerkel_validationdomain_txn_handlermake_state_path_for_nymdid",level:3},{value:"aries_cloudagent.ledger.merkel_validation.domain_txn_handler.make_state_path_for_revoc_def(authors_did, cred_def_id, revoc_def_type, revoc_def_tag)",id:"aries_cloudagentledgermerkel_validationdomain_txn_handlermake_state_path_for_revoc_defauthors_did-cred_def_id-revoc_def_type-revoc_def_tag",level:3},{value:"aries_cloudagent.ledger.merkel_validation.domain_txn_handler.make_state_path_for_revoc_reg_entry(revoc_reg_def_id)",id:"aries_cloudagentledgermerkel_validationdomain_txn_handlermake_state_path_for_revoc_reg_entryrevoc_reg_def_id",level:3},{value:"aries_cloudagent.ledger.merkel_validation.domain_txn_handler.make_state_path_for_revoc_reg_entry_accum(revoc_reg_def_id)",id:"aries_cloudagentledgermerkel_validationdomain_txn_handlermake_state_path_for_revoc_reg_entry_accumrevoc_reg_def_id",level:3},{value:"aries_cloudagent.ledger.merkel_validation.domain_txn_handler.make_state_path_for_schema(authors_did, schema_name, schema_version)",id:"aries_cloudagentledgermerkel_validationdomain_txn_handlermake_state_path_for_schemaauthors_did-schema_name-schema_version",level:3},{value:"aries_cloudagent.ledger.merkel_validation.domain_txn_handler.parse_attr_txn(txn_data)",id:"aries_cloudagentledgermerkel_validationdomain_txn_handlerparse_attr_txntxn_data",level:3},{value:"aries_cloudagent.ledger.merkel_validation.domain_txn_handler.prepare_attr_for_state(txn, path_only=False)",id:"aries_cloudagentledgermerkel_validationdomain_txn_handlerprepare_attr_for_statetxn-path_onlyfalse",level:3},{value:"aries_cloudagent.ledger.merkel_validation.domain_txn_handler.prepare_claim_def_for_state(txn, path_only=False)",id:"aries_cloudagentledgermerkel_validationdomain_txn_handlerprepare_claim_def_for_statetxn-path_onlyfalse",level:3},{value:"aries_cloudagent.ledger.merkel_validation.domain_txn_handler.prepare_for_state_read(reply)",id:"aries_cloudagentledgermerkel_validationdomain_txn_handlerprepare_for_state_readreply",level:3},{value:"aries_cloudagent.ledger.merkel_validation.domain_txn_handler.prepare_for_state_write(reply)",id:"aries_cloudagentledgermerkel_validationdomain_txn_handlerprepare_for_state_writereply",level:3},{value:"aries_cloudagent.ledger.merkel_validation.domain_txn_handler.prepare_get_attr_for_state(reply)",id:"aries_cloudagentledgermerkel_validationdomain_txn_handlerprepare_get_attr_for_statereply",level:3},{value:"aries_cloudagent.ledger.merkel_validation.domain_txn_handler.prepare_get_claim_def_for_state(reply)",id:"aries_cloudagentledgermerkel_validationdomain_txn_handlerprepare_get_claim_def_for_statereply",level:3},{value:"aries_cloudagent.ledger.merkel_validation.domain_txn_handler.prepare_get_nym_for_state(reply)",id:"aries_cloudagentledgermerkel_validationdomain_txn_handlerprepare_get_nym_for_statereply",level:3},{value:"aries_cloudagent.ledger.merkel_validation.domain_txn_handler.prepare_get_revoc_def_for_state(reply)",id:"aries_cloudagentledgermerkel_validationdomain_txn_handlerprepare_get_revoc_def_for_statereply",level:3},{value:"aries_cloudagent.ledger.merkel_validation.domain_txn_handler.prepare_get_revoc_reg_delta_for_state(reply)",id:"aries_cloudagentledgermerkel_validationdomain_txn_handlerprepare_get_revoc_reg_delta_for_statereply",level:3},{value:"aries_cloudagent.ledger.merkel_validation.domain_txn_handler.prepare_get_revoc_reg_entry_accum_for_state(reply)",id:"aries_cloudagentledgermerkel_validationdomain_txn_handlerprepare_get_revoc_reg_entry_accum_for_statereply",level:3},{value:"aries_cloudagent.ledger.merkel_validation.domain_txn_handler.prepare_get_revoc_reg_entry_for_state(reply)",id:"aries_cloudagentledgermerkel_validationdomain_txn_handlerprepare_get_revoc_reg_entry_for_statereply",level:3},{value:"aries_cloudagent.ledger.merkel_validation.domain_txn_handler.prepare_get_schema_for_state(reply)",id:"aries_cloudagentledgermerkel_validationdomain_txn_handlerprepare_get_schema_for_statereply",level:3},{value:"aries_cloudagent.ledger.merkel_validation.domain_txn_handler.prepare_nym_for_state(txn)",id:"aries_cloudagentledgermerkel_validationdomain_txn_handlerprepare_nym_for_statetxn",level:3},{value:"aries_cloudagent.ledger.merkel_validation.domain_txn_handler.prepare_revoc_def_for_state(txn, path_only=False)",id:"aries_cloudagentledgermerkel_validationdomain_txn_handlerprepare_revoc_def_for_statetxn-path_onlyfalse",level:3},{value:"aries_cloudagent.ledger.merkel_validation.domain_txn_handler.prepare_revoc_reg_entry_accum_for_state(txn)",id:"aries_cloudagentledgermerkel_validationdomain_txn_handlerprepare_revoc_reg_entry_accum_for_statetxn",level:3},{value:"aries_cloudagent.ledger.merkel_validation.domain_txn_handler.prepare_revoc_reg_entry_for_state(txn, path_only=False)",id:"aries_cloudagentledgermerkel_validationdomain_txn_handlerprepare_revoc_reg_entry_for_statetxn-path_onlyfalse",level:3},{value:"aries_cloudagent.ledger.merkel_validation.domain_txn_handler.prepare_schema_for_state(txn, path_only=False)",id:"aries_cloudagentledgermerkel_validationdomain_txn_handlerprepare_schema_for_statetxn-path_onlyfalse",level:3},{value:"aries_cloudagent.ledger.merkel_validation.hasher module",id:"aries_cloudagentledgermerkel_validationhasher-module",level:2},{value:"hash_children(left, right)",id:"hash_childrenleft-right",level:4},{value:"hash_leaf(data)",id:"hash_leafdata",level:4},{value:"hash_children(left, right)",id:"hash_childrenleft-right-1",level:4},{value:"hash_leaf(data)",id:"hash_leafdata-1",level:4},{value:"aries_cloudagent.ledger.merkel_validation.merkel_verifier module",id:"aries_cloudagentledgermerkel_validationmerkel_verifier-module",level:2},{value:"<em>class</em> aries_cloudagent.ledger.merkel_validation.merkel_verifier.MerkleVerifier(hasher=&lt;aries_cloudagent.ledger.merkel_validation.hasher.TreeHasher object&gt;)",id:"class-aries_cloudagentledgermerkel_validationmerkel_verifiermerkleverifierhasheraries_cloudagentledgermerkel_validationhashertreehasher-object",level:3},{value:"<em>async</em> calculate_root_hash(leaf, leaf_index, audit_path, tree_size)",id:"async-calculate_root_hashleaf-leaf_index-audit_path-tree_size",level:4},{value:"lsb(x)",id:"lsbx",level:4},{value:"aries_cloudagent.ledger.merkel_validation.trie module",id:"aries_cloudagentledgermerkel_validationtrie-module",level:2},{value:"<em>class</em> aries_cloudagent.ledger.merkel_validation.trie.SubTrie(root_hash=None)",id:"class-aries_cloudagentledgermerkel_validationtriesubtrieroot_hashnone",level:3},{value:"<em>async static</em> get_new_trie_with_proof_nodes(proof_nodes)",id:"async-static-get_new_trie_with_proof_nodesproof_nodes",level:4},{value:"<em>property</em> root_hash()",id:"property-root_hash",level:4},{value:"set_root_hash(root_hash=None)",id:"set_root_hashroot_hashnone",level:4},{value:"<em>async static</em> verify_spv_proof(expected_value, proof_nodes, serialized=True)",id:"async-static-verify_spv_proofexpected_value-proof_nodes-serializedtrue",level:4},{value:"aries_cloudagent.ledger.merkel_validation.utils module",id:"aries_cloudagentledgermerkel_validationutils-module",level:2},{value:"aries_cloudagent.ledger.merkel_validation.utils.ascii_chr(value)",id:"aries_cloudagentledgermerkel_validationutilsascii_chrvalue",level:3},{value:"aries_cloudagent.ledger.merkel_validation.utils.audit_path_length(index: int, tree_size: int)",id:"aries_cloudagentledgermerkel_validationutilsaudit_path_lengthindex-int-tree_size-int",level:3},{value:"aries_cloudagent.ledger.merkel_validation.utils.bin_to_nibbles(s)",id:"aries_cloudagentledgermerkel_validationutilsbin_to_nibbless",level:3},{value:"aries_cloudagent.ledger.merkel_validation.utils.encode_hex(b)",id:"aries_cloudagentledgermerkel_validationutilsencode_hexb",level:3},{value:"aries_cloudagent.ledger.merkel_validation.utils.sha3_256(x)",id:"aries_cloudagentledgermerkel_validationutilssha3_256x",level:3},{value:"aries_cloudagent.ledger.merkel_validation.utils.unpack_to_nibbles(bindata)",id:"aries_cloudagentledgermerkel_validationutilsunpack_to_nibblesbindata",level:3}],s={toc:o},u="wrapper";function m(e){let{components:a,...t}=e;return(0,l.kt)(u,(0,r.Z)({},s,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"aries_cloudagentledgermerkel_validation-package"},"aries_cloudagent.ledger.merkel_validation package"),(0,l.kt)("h2",{id:"submodules"},"Submodules"),(0,l.kt)("h2",{id:"aries_cloudagentledgermerkel_validationconstants-module"},"aries_cloudagent.ledger.merkel_validation.constants module"),(0,l.kt)("p",null,"Constants for State Proof and LeafHash Inclusion Verification."),(0,l.kt)("h2",{id:"aries_cloudagentledgermerkel_validationdomain_txn_handler-module"},"aries_cloudagent.ledger.merkel_validation.domain_txn_handler module"),(0,l.kt)("p",null,"Utilities for Processing Replies to Domain Read Requests."),(0,l.kt)("h3",{id:"aries_cloudagentledgermerkel_validationdomain_txn_handlerdecode_state_valueencoded_value"},"aries_cloudagent.ledger.merkel_validation.domain_txn_handler.decode_state_value(encoded_value)"),(0,l.kt)("p",null,"Return val, lsn, lut from encoded state value."),(0,l.kt)("h3",{id:"aries_cloudagentledgermerkel_validationdomain_txn_handlerencode_state_valuevalue-seqno-txntime"},"aries_cloudagent.ledger.merkel_validation.domain_txn_handler.encode_state_value(value, seqNo, txnTime)"),(0,l.kt)("p",null,"Return encoded state value."),(0,l.kt)("h3",{id:"aries_cloudagentledgermerkel_validationdomain_txn_handlerextract_params_write_requestdata"},"aries_cloudagent.ledger.merkel_validation.domain_txn_handler.extract_params_write_request(data)"),(0,l.kt)("p",null,"Return tree_size, leaf_index, audit_path, expected_root_hash from reply."),(0,l.kt)("h3",{id:"aries_cloudagentledgermerkel_validationdomain_txn_handlerget_proof_nodesreply"},"aries_cloudagent.ledger.merkel_validation.domain_txn_handler.get_proof_nodes(reply)"),(0,l.kt)("p",null,"Return proof_nodes from reply."),(0,l.kt)("h3",{id:"aries_cloudagentledgermerkel_validationdomain_txn_handlerhash_oftext"},"aries_cloudagent.ledger.merkel_validation.domain_txn_handler.hash_of(text)"),(0,l.kt)("p",null,"Return 256 bit hexadecimal digest of text."),(0,l.kt)("h3",{id:"aries_cloudagentledgermerkel_validationdomain_txn_handlermake_state_path_for_attrdid-attr_name-attr_is_hashfalse"},"aries_cloudagent.ledger.merkel_validation.domain_txn_handler.make_state_path_for_attr(did, attr_name, attr_is_hash=False)"),(0,l.kt)("p",null,"Return state_path for ATTR."),(0,l.kt)("h3",{id:"aries_cloudagentledgermerkel_validationdomain_txn_handlermake_state_path_for_claim_defauthors_did-schema_seq_no-signature_type-tag"},"aries_cloudagent.ledger.merkel_validation.domain_txn_handler.make_state_path_for_claim_def(authors_did, schema_seq_no, signature_type, tag)"),(0,l.kt)("p",null,"Return state_path for CLAIM DEF."),(0,l.kt)("h3",{id:"aries_cloudagentledgermerkel_validationdomain_txn_handlermake_state_path_for_nymdid"},"aries_cloudagent.ledger.merkel_validation.domain_txn_handler.make_state_path_for_nym(did)"),(0,l.kt)("p",null,"Return state_path for NYM."),(0,l.kt)("h3",{id:"aries_cloudagentledgermerkel_validationdomain_txn_handlermake_state_path_for_revoc_defauthors_did-cred_def_id-revoc_def_type-revoc_def_tag"},"aries_cloudagent.ledger.merkel_validation.domain_txn_handler.make_state_path_for_revoc_def(authors_did, cred_def_id, revoc_def_type, revoc_def_tag)"),(0,l.kt)("p",null,"Return state_path for REVOC_DEF."),(0,l.kt)("h3",{id:"aries_cloudagentledgermerkel_validationdomain_txn_handlermake_state_path_for_revoc_reg_entryrevoc_reg_def_id"},"aries_cloudagent.ledger.merkel_validation.domain_txn_handler.make_state_path_for_revoc_reg_entry(revoc_reg_def_id)"),(0,l.kt)("p",null,"Return state_path for REVOC_REG_ENTRY."),(0,l.kt)("h3",{id:"aries_cloudagentledgermerkel_validationdomain_txn_handlermake_state_path_for_revoc_reg_entry_accumrevoc_reg_def_id"},"aries_cloudagent.ledger.merkel_validation.domain_txn_handler.make_state_path_for_revoc_reg_entry_accum(revoc_reg_def_id)"),(0,l.kt)("p",null,"Return state_path for REVOC_REG_ENTRY_ACCUM."),(0,l.kt)("h3",{id:"aries_cloudagentledgermerkel_validationdomain_txn_handlermake_state_path_for_schemaauthors_did-schema_name-schema_version"},"aries_cloudagent.ledger.merkel_validation.domain_txn_handler.make_state_path_for_schema(authors_did, schema_name, schema_version)"),(0,l.kt)("p",null,"Return state_path for SCHEMA."),(0,l.kt)("h3",{id:"aries_cloudagentledgermerkel_validationdomain_txn_handlerparse_attr_txntxn_data"},"aries_cloudagent.ledger.merkel_validation.domain_txn_handler.parse_attr_txn(txn_data)"),(0,l.kt)("p",null,"Process txn_data and parse attr_txn based on attr_type."),(0,l.kt)("h3",{id:"aries_cloudagentledgermerkel_validationdomain_txn_handlerprepare_attr_for_statetxn-path_onlyfalse"},"aries_cloudagent.ledger.merkel_validation.domain_txn_handler.prepare_attr_for_state(txn, path_only=False)"),(0,l.kt)("p",null,"Return key, value pair for state from ATTR."),(0,l.kt)("h3",{id:"aries_cloudagentledgermerkel_validationdomain_txn_handlerprepare_claim_def_for_statetxn-path_onlyfalse"},"aries_cloudagent.ledger.merkel_validation.domain_txn_handler.prepare_claim_def_for_state(txn, path_only=False)"),(0,l.kt)("p",null,"Return key-value pair for state from CLAIM_DEF."),(0,l.kt)("h3",{id:"aries_cloudagentledgermerkel_validationdomain_txn_handlerprepare_for_state_readreply"},"aries_cloudagent.ledger.merkel_validation.domain_txn_handler.prepare_for_state_read(reply)"),(0,l.kt)("p",null,"Return state value from read requests reply."),(0,l.kt)("h3",{id:"aries_cloudagentledgermerkel_validationdomain_txn_handlerprepare_for_state_writereply"},"aries_cloudagent.ledger.merkel_validation.domain_txn_handler.prepare_for_state_write(reply)"),(0,l.kt)("p",null,"Return state key, value pair from write requests reply."),(0,l.kt)("h3",{id:"aries_cloudagentledgermerkel_validationdomain_txn_handlerprepare_get_attr_for_statereply"},"aries_cloudagent.ledger.merkel_validation.domain_txn_handler.prepare_get_attr_for_state(reply)"),(0,l.kt)("p",null,"Return value for state from GET_ATTR."),(0,l.kt)("h3",{id:"aries_cloudagentledgermerkel_validationdomain_txn_handlerprepare_get_claim_def_for_statereply"},"aries_cloudagent.ledger.merkel_validation.domain_txn_handler.prepare_get_claim_def_for_state(reply)"),(0,l.kt)("p",null,"Return value for state from GET_CLAIM_DEF."),(0,l.kt)("h3",{id:"aries_cloudagentledgermerkel_validationdomain_txn_handlerprepare_get_nym_for_statereply"},"aries_cloudagent.ledger.merkel_validation.domain_txn_handler.prepare_get_nym_for_state(reply)"),(0,l.kt)("p",null,"Return value for state from GET_NYM."),(0,l.kt)("h3",{id:"aries_cloudagentledgermerkel_validationdomain_txn_handlerprepare_get_revoc_def_for_statereply"},"aries_cloudagent.ledger.merkel_validation.domain_txn_handler.prepare_get_revoc_def_for_state(reply)"),(0,l.kt)("p",null,"Return value for state from GET_REVOC_DEF."),(0,l.kt)("h3",{id:"aries_cloudagentledgermerkel_validationdomain_txn_handlerprepare_get_revoc_reg_delta_for_statereply"},"aries_cloudagent.ledger.merkel_validation.domain_txn_handler.prepare_get_revoc_reg_delta_for_state(reply)"),(0,l.kt)("p",null,"Return value for state from GET_REVOC_REG_DELTA."),(0,l.kt)("h3",{id:"aries_cloudagentledgermerkel_validationdomain_txn_handlerprepare_get_revoc_reg_entry_accum_for_statereply"},"aries_cloudagent.ledger.merkel_validation.domain_txn_handler.prepare_get_revoc_reg_entry_accum_for_state(reply)"),(0,l.kt)("p",null,"Return value for state from GET_REVOC_REG_ENTRY_ACCUM."),(0,l.kt)("h3",{id:"aries_cloudagentledgermerkel_validationdomain_txn_handlerprepare_get_revoc_reg_entry_for_statereply"},"aries_cloudagent.ledger.merkel_validation.domain_txn_handler.prepare_get_revoc_reg_entry_for_state(reply)"),(0,l.kt)("p",null,"Return value for state from GET_REVOC_REG_ENTRY."),(0,l.kt)("h3",{id:"aries_cloudagentledgermerkel_validationdomain_txn_handlerprepare_get_schema_for_statereply"},"aries_cloudagent.ledger.merkel_validation.domain_txn_handler.prepare_get_schema_for_state(reply)"),(0,l.kt)("p",null,"Return value for state from GET_SCHEMA."),(0,l.kt)("h3",{id:"aries_cloudagentledgermerkel_validationdomain_txn_handlerprepare_nym_for_statetxn"},"aries_cloudagent.ledger.merkel_validation.domain_txn_handler.prepare_nym_for_state(txn)"),(0,l.kt)("p",null,"Return encoded state path from NYM."),(0,l.kt)("h3",{id:"aries_cloudagentledgermerkel_validationdomain_txn_handlerprepare_revoc_def_for_statetxn-path_onlyfalse"},"aries_cloudagent.ledger.merkel_validation.domain_txn_handler.prepare_revoc_def_for_state(txn, path_only=False)"),(0,l.kt)("p",null,"Return key-value pair for state from REVOC_DEF."),(0,l.kt)("h3",{id:"aries_cloudagentledgermerkel_validationdomain_txn_handlerprepare_revoc_reg_entry_accum_for_statetxn"},"aries_cloudagent.ledger.merkel_validation.domain_txn_handler.prepare_revoc_reg_entry_accum_for_state(txn)"),(0,l.kt)("p",null,"Return key-value pair for state from REVOC_REG_ENTRY_ACCUM."),(0,l.kt)("h3",{id:"aries_cloudagentledgermerkel_validationdomain_txn_handlerprepare_revoc_reg_entry_for_statetxn-path_onlyfalse"},"aries_cloudagent.ledger.merkel_validation.domain_txn_handler.prepare_revoc_reg_entry_for_state(txn, path_only=False)"),(0,l.kt)("p",null,"Return key-value pair for state from REVOC_REG_ENTRY."),(0,l.kt)("h3",{id:"aries_cloudagentledgermerkel_validationdomain_txn_handlerprepare_schema_for_statetxn-path_onlyfalse"},"aries_cloudagent.ledger.merkel_validation.domain_txn_handler.prepare_schema_for_state(txn, path_only=False)"),(0,l.kt)("p",null,"Return key-value pair for state from SCHEMA."),(0,l.kt)("h2",{id:"aries_cloudagentledgermerkel_validationhasher-module"},"aries_cloudagent.ledger.merkel_validation.hasher module"),(0,l.kt)("p",null,"Merkle tree hasher for leaf and children nodes."),(0,l.kt)("h4",{id:"hash_childrenleft-right"},"hash_children(left, right)"),(0,l.kt)("p",null,"Return parent node hash corresponding to 2 child nodes."),(0,l.kt)("h4",{id:"hash_leafdata"},"hash_leaf(data)"),(0,l.kt)("p",null,"Return leaf node hash."),(0,l.kt)("h4",{id:"hash_childrenleft-right-1"},"hash_children(left, right)"),(0,l.kt)("p",null,"Return parent node hash corresponding to 2 child nodes."),(0,l.kt)("h4",{id:"hash_leafdata-1"},"hash_leaf(data)"),(0,l.kt)("p",null,"Return leaf node hash."),(0,l.kt)("h2",{id:"aries_cloudagentledgermerkel_validationmerkel_verifier-module"},"aries_cloudagent.ledger.merkel_validation.merkel_verifier module"),(0,l.kt)("p",null,"Verify Leaf Inclusion."),(0,l.kt)("h3",{id:"class-aries_cloudagentledgermerkel_validationmerkel_verifiermerkleverifierhasheraries_cloudagentledgermerkel_validationhashertreehasher-object"},(0,l.kt)("em",{parentName:"h3"},"class")," aries_cloudagent.ledger.merkel_validation.merkel_verifier.MerkleVerifier(hasher=<aries_cloudagent.ledger.merkel_validation.hasher.TreeHasher object>)"),(0,l.kt)("p",null,"Bases: ",(0,l.kt)("a",{parentName:"p",href:"https://docs.python.org/3/library/functions.html#object"},(0,l.kt)("inlineCode",{parentName:"a"},"object"))),(0,l.kt)("p",null,"Utility class for verifying leaf inclusion."),(0,l.kt)("h4",{id:"async-calculate_root_hashleaf-leaf_index-audit_path-tree_size"},(0,l.kt)("em",{parentName:"h4"},"async")," calculate_root_hash(leaf, leaf_index, audit_path, tree_size)"),(0,l.kt)("p",null,"Calculate root hash, used to verify Merkel AuditPath."),(0,l.kt)("p",null,"Reference: section 2.1.1 of RFC6962."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"leaf")," \u2013 Leaf data.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"leaf_index")," \u2013 Index of the leaf in the tree.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"audit_path")," \u2013 A list of SHA-256 hashes representing the Merkle audit")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"path.")," \u2013")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"tree_size")," \u2013 tree size"))))),(0,l.kt)("h4",{id:"lsbx"},"lsb(x)"),(0,l.kt)("p",null,"Return Least Significant Bits."),(0,l.kt)("h2",{id:"aries_cloudagentledgermerkel_validationtrie-module"},"aries_cloudagent.ledger.merkel_validation.trie module"),(0,l.kt)("p",null,"Validates State Proof."),(0,l.kt)("h3",{id:"class-aries_cloudagentledgermerkel_validationtriesubtrieroot_hashnone"},(0,l.kt)("em",{parentName:"h3"},"class")," aries_cloudagent.ledger.merkel_validation.trie.SubTrie(root_hash=None)"),(0,l.kt)("p",null,"Bases: ",(0,l.kt)("a",{parentName:"p",href:"https://docs.python.org/3/library/functions.html#object"},(0,l.kt)("inlineCode",{parentName:"a"},"object"))),(0,l.kt)("p",null,"Utility class for SubTrie and State Proof validation."),(0,l.kt)("h4",{id:"async-static-get_new_trie_with_proof_nodesproof_nodes"},(0,l.kt)("em",{parentName:"h4"},"async static")," get_new_trie_with_proof_nodes(proof_nodes)"),(0,l.kt)("p",null,"Return SubTrie created from proof_nodes."),(0,l.kt)("h4",{id:"property-root_hash"},(0,l.kt)("em",{parentName:"h4"},"property")," root_hash()"),(0,l.kt)("p",null,"Return 32 bytes string."),(0,l.kt)("h4",{id:"set_root_hashroot_hashnone"},"set_root_hash(root_hash=None)"),(0,l.kt)("p",null,"."),(0,l.kt)("h4",{id:"async-static-verify_spv_proofexpected_value-proof_nodes-serializedtrue"},(0,l.kt)("em",{parentName:"h4"},"async static")," verify_spv_proof(expected_value, proof_nodes, serialized=True)"),(0,l.kt)("p",null,"Verify State Proof."),(0,l.kt)("h2",{id:"aries_cloudagentledgermerkel_validationutils-module"},"aries_cloudagent.ledger.merkel_validation.utils module"),(0,l.kt)("p",null,"Merkel Validation Utils."),(0,l.kt)("h3",{id:"aries_cloudagentledgermerkel_validationutilsascii_chrvalue"},"aries_cloudagent.ledger.merkel_validation.utils.ascii_chr(value)"),(0,l.kt)("p",null,"Return bytes object."),(0,l.kt)("h3",{id:"aries_cloudagentledgermerkel_validationutilsaudit_path_lengthindex-int-tree_size-int"},"aries_cloudagent.ledger.merkel_validation.utils.audit_path_length(index: ",(0,l.kt)("a",{parentName:"h3",href:"https://docs.python.org/3/library/functions.html#int"},"int"),", tree_size: ",(0,l.kt)("a",{parentName:"h3",href:"https://docs.python.org/3/library/functions.html#int"},"int"),")"),(0,l.kt)("p",null,"Return AuditPath length."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"index")," \u2013 Leaf index")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"tree_size")," \u2013 Tree size"))))),(0,l.kt)("h3",{id:"aries_cloudagentledgermerkel_validationutilsbin_to_nibbless"},"aries_cloudagent.ledger.merkel_validation.utils.bin_to_nibbles(s)"),(0,l.kt)("p",null,"Convert string s to nibbles (half-bytes)."),(0,l.kt)("h3",{id:"aries_cloudagentledgermerkel_validationutilsencode_hexb"},"aries_cloudagent.ledger.merkel_validation.utils.encode_hex(b)"),(0,l.kt)("p",null,"Return bytes object for string or hexadecimal rep for bytes input."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"b")," \u2013 string or bytes"))),(0,l.kt)("h3",{id:"aries_cloudagentledgermerkel_validationutilssha3_256x"},"aries_cloudagent.ledger.merkel_validation.utils.sha3_256(x)"),(0,l.kt)("p",null,"Return 256 bit digest."),(0,l.kt)("h3",{id:"aries_cloudagentledgermerkel_validationutilsunpack_to_nibblesbindata"},"aries_cloudagent.ledger.merkel_validation.utils.unpack_to_nibbles(bindata)"),(0,l.kt)("p",null,"Unpack packed binary data to nibbles."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"bindata")," \u2013 binary packed from nibbles"))))}m.isMDXComponent=!0}}]);