'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "23f712087b3103ba4cdd68ec5f2dcc18",
".git/config": "238c66f154ed92f015b9eba9cd7ba9e3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "f2bfca0c117767f8c70a11ea8abf5c5e",
".git/HEAD": "34f1b48f0c4111f34920b6cf9b7cebef",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "124ece534d4f23abe0e9bc1efbf1579f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "10fef8b3bb2dc247f8f23d7d2192984a",
".git/logs/refs/heads/allCustomersOrder": "55c8ae0abcd44eba65ec56a289abb2f7",
".git/logs/refs/heads/customersOrder": "6826d481933a08c622a889195a9c925a",
".git/logs/refs/heads/main": "ac60059b4c3a6a72fc4b0893309b6ab8",
".git/logs/refs/remotes/origin/allCustomersOrder": "1b31e49f0f761193f34c538848519bf8",
".git/logs/refs/remotes/origin/customersOrder": "e3665b4f7c3b432dfaf1d7de631a16e2",
".git/logs/refs/remotes/origin/main": "5081ab66936e85f542939b92b1e6335d",
".git/objects/04/70206229523ca6b708a9a33e29fac84f3fc586": "8be95d1111cfb008f75e5c999de88b38",
".git/objects/05/d1e3d68cb60ff3a9526c9c1cb28fe9dd81f323": "255701dc43acd265526dbff52b283b2d",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/09/774efc1cebdeb8081f52f36559e605cd66735f": "807be6c11bc62886f23a42a33e9c4ee1",
".git/objects/0a/6f3b6d453b786f4c0a407ac6f183f2e8847260": "fda8b35d1593e04b7355fe73bd851ab7",
".git/objects/0b/96830e33b29aee8b8c1f04ef72b933a6b32152": "384882f9a1edf894e80f96ee6ff40247",
".git/objects/0e/c09df49cc6d9d989c94c270382371406dc1911": "1bb28399104eab0bd4d63375413ded8a",
".git/objects/13/aa4e9253f7c3ace07341d08e11d7420d806435": "2be7ec7ffda038e161d0497bda3c87ef",
".git/objects/15/c69ab305b51e976cac0e4ae00bc7be965f44d1": "5adc1f65b1af497c701361d57515cdc5",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/1e/f72f20e9d1e7af041386277e43957b2df30701": "26ab303abf92765596a6e1d67e71ee04",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1f/fdd42fbbb93a048e1191db0a442b7585ba1603": "71284df0b865cc23cc585f6ac7f7759e",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/21/614d9b2ef914cf913076d1ee0ddfb788290e23": "d6b11d64ace39ccd4cb62ad52c768a33",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/24/f0af69d6926f289487cea40f93d5ed4c388680": "447bbc6fff041f030c9bcb494f11bf72",
".git/objects/25/3c2127c5a395c04414ac3984a56c606108253d": "05ba0f8fc479907c63c69ddeb6a87cf9",
".git/objects/25/d14e3eb10fac7254e2b0d1a36bb603fec0961f": "09af6a45823064c1a6095a46d90ecfd5",
".git/objects/29/7dc4b3f78177b029b898da5c7eca968875e395": "1f3b4500ee2df6b451c9c43b4a37e7f6",
".git/objects/2f/07439ba1b336c37d7c2373407e26dca1f3b311": "16e2b0e342e5b496ce66ba7eb70c6be8",
".git/objects/30/7e14e7fe68fba7c78be4321298ce2c5609f8dd": "2e1e6f39163585f492d79295886774c7",
".git/objects/31/fcc87bac884cdfd62fe8243f3132958338d323": "f267fb1cc9211eeb905145a6df913b7e",
".git/objects/36/c9cd7ad4338f585c1398fade6c6bebb676e74e": "05bfcbc7aee52f330628d941944ec534",
".git/objects/38/afa8cb11bf7f3d728347f099e3eca61bcf560d": "17b6d615c4ab3c0bd6de22ca78e42582",
".git/objects/3c/40958c4632c774465438a8c698c90cdebc704d": "c50c99833b74d6cfff948eacec53796f",
".git/objects/3d/127ee870468d530b6f7e75c9fbcc88e75b65ec": "9a2cabcdf0e5f9a2504340a00a6576e4",
".git/objects/3f/09d28b5480d354df626ea5bdad9b4fcd2fa20e": "54c9d5a3506be8f0615b55c3c70cf2f8",
".git/objects/41/74867361efa583b3ad56a74b5e71db5fc971d5": "91b987dc25465072ff468a472e82ea4f",
".git/objects/43/d04dca118ca75bab29326aca08fd2970e22c3a": "102d9752d4bd5c7a5544d91750ca6a25",
".git/objects/49/5eb1aaba808fd217f8e3bb93afca325f284666": "29d234c770619fa215940aa14eafebf8",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4a/3a920bef0e945c13247a4381e21eef68d1801a": "72b22f9beeb4561845e607a8cc6e6c93",
".git/objects/51/b7152320baf855ca7fe4474898e2122425923c": "8b613b3f4b79492da9aa19de52913497",
".git/objects/58/87742d389e124962be2b2b8621d829c47e0f7f": "3c534279390e37367ecd0850c4c6cccc",
".git/objects/59/69d3d5c770d5b7d53ca1e5b755f9824eeb5e53": "2b8b13d10c3411b61fcf5629660ba32b",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/5a/81e49c22d1ee277e403f399972e1f4a8c74587": "5aa59ad649baa48e5d22776b2210db89",
".git/objects/5b/12e1924157ae8d1b0d39a3d141e4dfbe81c735": "63ce75d2b398e8450a88151f64878b7f",
".git/objects/5e/5dd8ca2b761e5aa21d48fa6def9264fda0357a": "23f8d29deffef54e40c32ee5b7848fa3",
".git/objects/60/8083af9cdce040c147b1f064413db7dfe0bd34": "2665a60ec5602504556162546657063a",
".git/objects/62/2c8b52f7383a9578b6cc0414bf8d0cdb12f0d4": "5c0ea56ab245d252495094a315709698",
".git/objects/69/8b935f546b9617de9d873c3f50ddeb258393de": "54b4d944da609454158b7f15a0b90e6e",
".git/objects/6d/453b9dcc751e319a2f8c26d56ae9e4f4bea2a1": "fdc637bbd599d3d0cc31b9a03884c171",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/70/1c6f2fd3a9c97b610e18c6fea08b2493ac6178": "8f08919a7db759929c4cf300cfa8cb0a",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/74/9cff738a008c7cd1eaa340d041d3cea5bd83cd": "9ce7847f7b843addaa6d8288bab524da",
".git/objects/75/7d914f95e6a30c735f941a2158c53fdebe0de7": "9663c06dfff7be7a1abdb329775fd6b1",
".git/objects/76/7841056da96a87b8725bbd2847460afa1459f2": "2cda37213abdbe2a0c086ae3be184db7",
".git/objects/77/f0dae9784e22075d16dc14e3bc957ad3d416c3": "166d0fc44b99545146fbc98bc858ea40",
".git/objects/79/a78ebd4a1b73a31399865171f6dd27c35c1655": "0a255d684112b6f316650b0d2fa0cf82",
".git/objects/7a/6f2a7eab20279729671e87d84530237a5409f4": "8eaea51d2f75d0afb962d8c25d15c9f7",
".git/objects/7c/8bf19f9a295928b576aac4e5b6f9bf2feb516a": "aebcf6c09bb306cc242d802306aa1705",
".git/objects/83/c44f26984c5b7ecc55f3dae259b62e6e3b4bf6": "fd485ac434eeb7b876b8bcf8f1c37bb8",
".git/objects/84/058f58c3e83db257c884047bcfa718ed9d6d4e": "2688b8084d55b690bca22caccae58543",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/93d7c3bb1ee25a866dc7debb1be093642e9aa1": "0342150be5e2c26697f5ea6dfe00e2e9",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/80e6bc6a23f711d0697efa906c8a73c2eef866": "f7bf6dbc982cc67559b822c8ff777260",
".git/objects/8f/e020ab4edab71e26fb9315f01d1faf41e17b08": "83648a96eb5998edfabf48c722f4652d",
".git/objects/93/96a737aed20f266b9f352740827e30a4908f56": "08a9852288dbc5fc56ea80d23bcdcb50",
".git/objects/94/4269fd527b133dab41e4412201a47a2a4ea60e": "6649bcd4f7e323ca08f2e8ee8d49ed8c",
".git/objects/94/427dc5b29a1e80f670dace49d797241635f33f": "4339b6599c2d9520bc2b2a2bbfe691ce",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/97/ff02e24b5b31e0070bb638db5a9a3db0f86fab": "061651217204677b540c222afd29733b",
".git/objects/9a/9f771eaaf3802a782dfb1fdd6b170cafd28b7d": "69b933b5163d6139dd59cc50fb5ed642",
".git/objects/a0/87f92b3c3a0746d0ef256ef99402941541f150": "3dde4e8a529ba6aa065d04641834d34b",
".git/objects/a0/d6c38a65268a20ffce6b25cd424c72d51a76af": "4e2f44c03646b63b08ac12ec5f9b2ea1",
".git/objects/a3/c6f652fadeadbd8e1cf4dbe1ab3174790debf4": "2884b888f2dceef62b135a35218c221b",
".git/objects/a3/eec771f34fab7978fa8a781bf47e81314d5306": "771386a4482fa73fb80f7f30eaf06d15",
".git/objects/a6/c42e062cc936da07960de5667d15817bfa83e5": "52b7a95cde5f788c6370f98604aac19a",
".git/objects/ab/52d7505bf1760080434f298fea6f728c62622f": "3e57dbe9a090ad3c371816acbda78f26",
".git/objects/ab/ea8841e226c48d44c3048a0b170c89c6222546": "d2fb37066ba9da5bfcb238c364e00ca7",
".git/objects/ac/9ac1ecd3c37fe5131645986e485b425929cde3": "716220fa5f03ea8b7050d74ac685bd60",
".git/objects/ae/f5db9c66dce591a41cfe17a759d50fa3a1d34e": "67c7cb2580ba852200151b9e6754779a",
".git/objects/af/588aaa90411d63cb0f405f48293f7887b1edd7": "4862c80fbec881840fb201b631ff5b4e",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b3/a397cf7bbe15e60b912b19e24335a18ef66450": "d7b3f9972e9d52dd6d91fcdae0e895c8",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/39d31102b622278a0dc6e65db0e27c0220e4b0": "40f400b659aacc634ed4204f54f5da3d",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bc/0513c10c8be98203d5ee521c326c4cadf84239": "7bd516a346dc00a2dcb11423e5e2fe61",
".git/objects/bc/ed990aa0a437d1b17122561d9d5b3e7288f1ad": "fd62aa2baae2b5a6c9dd1f5c7ee3208a",
".git/objects/c1/1caedf74d993cb1a24693af69f5740b4cc2994": "bc96db154ae4743a291e339367cf23ac",
".git/objects/c3/c21cec349dd221ec89e5e8054302cf0e786030": "55fe0366545367f61f3df8a146f7e55b",
".git/objects/c4/b4776e964f46f7ceb38a00385b8fcd6aa70a1c": "23df275bc7017675c44293632c25d3e9",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c6/897d6802711e55599efa0f1502418071a1ebaa": "7a7fde1bddccff2490c5aa1829091acb",
".git/objects/c7/7d77ff105e9801553e71cf55fabe4c559d3153": "7ff600fab769f40d5576cd07e98515b0",
".git/objects/d1/f20379fee2ac524ce6309170d7ab4945203e32": "ae1531cc50f478016f0d153406ea4d60",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/0a034a5852a8bc0f07273973f9a6285252b2ab": "ed37261c926a834c923857fd36f25688",
".git/objects/d6/9a104374b56023a7d565ef2ac12be5195dc6b6": "c2cad4c8b942f0b3d49c1234a99b054c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/4dc9a74498bab0eb5e091af9e1bdcb03278728": "80ad4576095471a681d6ac7745b3b775",
".git/objects/db/00faeeddbeb6683739979ddc47590ee127b87d": "072a153f0c6b8a215962f0b0d1f96b73",
".git/objects/e3/1c82cc0c0d61a5b5404ced9d70e7a25f664a69": "9a0e9d91ab01447df0352e7245f404e8",
".git/objects/e4/40d257e7365fa7b26fe705bc4fe977be78d202": "c01676f3d35924cd13034a96854a777c",
".git/objects/e4/d99b4356a7e669af8cc89811727e3bcd6a59a7": "ee85f2ef5f6f30f0ebc78c8c5b8edd29",
".git/objects/e7/b9fe195121c2bfcb5830a63090b4bec40b7c8f": "9faaf76f169499788c6234dde92951bb",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/f8e845889fbdc9644f329a4f8a1fbfaa16774f": "a02007fe323d57653030062e81a4e3e4",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/3c91d662bf3dbaf345789672c4170f3fe1a7be": "01b99267179665385ed663cb93a32a48",
".git/objects/fb/9e6cc6ba56b5af11c5360d62d5557eb245ae61": "38f6f997814965211bad605acb8e54e8",
".git/objects/fc/17e1b027d1cbb4006a0ff208ad6cc3a902ed53": "f3b3411233f074d23cba3b32e2b4942c",
".git/objects/fc/83cb5d38d83d8ae19b52d87d4f38dc95efc553": "21f14c45be0b679373a91992c71a13d6",
".git/ORIG_HEAD": "8b70b672922f3a1420b143b7fb5a9747",
".git/refs/heads/allCustomersOrder": "8b70b672922f3a1420b143b7fb5a9747",
".git/refs/heads/customersOrder": "8b70b672922f3a1420b143b7fb5a9747",
".git/refs/heads/main": "8b70b672922f3a1420b143b7fb5a9747",
".git/refs/remotes/origin/allCustomersOrder": "8b70b672922f3a1420b143b7fb5a9747",
".git/refs/remotes/origin/customersOrder": "8b70b672922f3a1420b143b7fb5a9747",
".git/refs/remotes/origin/main": "1ed3e138151a5474f0dbb356a2993aa1",
"assets/AssetManifest.bin": "0ea07fa3f6ae67cb88fd933e33b0ccd5",
"assets/AssetManifest.bin.json": "c87d3c94fa1ee9d57dbef746a473446f",
"assets/AssetManifest.json": "e08ad4899682e09b0b0e088d02875f7e",
"assets/assets/fonts/Cairo-Bold.ttf": "e558b6a116119d88b796afd3254cc864",
"assets/assets/fonts/Cairo-Light.ttf": "c4a2ada0dd57e03f921b8f7d45820268",
"assets/assets/fonts/Cairo-Regular.ttf": "5ccd08939f634db387c40d6b4b0979c3",
"assets/assets/fonts/ReadexPro-Light.ttf": "e857817431deb388a64a1765dce7fc3a",
"assets/assets/fonts/ReadexPro-Medium.ttf": "9fcf5e657533a95bccde973662918f6f",
"assets/assets/fonts/ReadexPro-Regular.ttf": "9b71940fede1d4126e456b7e19f03d29",
"assets/assets/fonts/ReadexPro-SemiBold.ttf": "72348d0ce734e904e654a514779bd4c6",
"assets/assets/icons/back_app_bar.svg": "70305763951c578e2faa3a3cade320c2",
"assets/assets/icons/back_side_menu.png": "74c0ffc0178be68e8160008fc1c1fd83",
"assets/assets/icons/icon_back_app_bar.png": "bd1819f4633ce73b1fe136b20f05a353",
"assets/assets/icons/icon_control_panel.png": "9201d6f8481591892acf0f243f2660a7",
"assets/assets/icons/icon_customer_account.png": "0095f6830f1e2a83b2517e2d1046d1db",
"assets/assets/icons/icon_customer_order.png": "0414dff062c57ffee6252ad5dbee4da5",
"assets/assets/icons/icon_list_tile.png": "b722e1e9986931f35fb32f7a67312274",
"assets/assets/icons/icon_manage_account.png": "0fa8805e5b82ce7e02b1382c94e9713f",
"assets/assets/icons/icon_manage_assets.png": "b35e5eab9532031a450e78989cfc7fa6",
"assets/assets/icons/icon_manage_customer_sales.png": "7a27061c0a02f3baad75d37f0ac7cd4d",
"assets/assets/icons/icon_manage_hajj_umrah%2520.png": "66ffca8aff427349e0a531c2655f542e",
"assets/assets/icons/icon_manage_hospital.png": "4ff32f9a16c774485a201edb237c876f",
"assets/assets/icons/icon_manage_human_capital.png": "aa9a810d88f2142efc1e892083842279",
"assets/assets/icons/icon_manage_logistics.png": "1b2c5695501364f129a49f92683117b4",
"assets/assets/icons/icon_manage_marketing_resource.png": "1b69d60863897529c2091420297dbdab",
"assets/assets/icons/icon_manage_plan.png": "219aa8001d576e2557bfcbc326ba22bd",
"assets/assets/icons/icon_manage_poin_sale.png": "401b99b24615e5cc465587accb3babd1",
"assets/assets/icons/icon_manage_project.png": "d6715b957c8ec07e080a88b842cd2709",
"assets/assets/icons/icon_manage_property.png": "8ad3bcf6c69713d79140f2bd9b10b4bf",
"assets/assets/icons/icon_manage_reservation.png": "b1a3ae926ce4b01a7ffd15cae37bb9e2",
"assets/assets/icons/icon_manage_supplier_purchasing.png": "f974bbee7587deaba081280b40a4d57c",
"assets/assets/icons/icon_manage_warehouse.png": "9b7eff98197cbfbf7993ac91144bdd82",
"assets/assets/icons/icon_point_sales.svg": "5abc74ca98a4b1a7ee7c7007e47546d3",
"assets/assets/icons/image_app_bar.png": "5950088cbb4355556f3ec793b1fab613",
"assets/assets/icons/instance.png": "8cd9d7e80986035c6034fd3001d1e22a",
"assets/assets/icons/logo_onix_ix.png": "5586c5a0430dc5722a4640f141516e98",
"assets/assets/icons/menu_app_bar.png": "2a8af39eeaa8aee6b137d069e56f9956",
"assets/assets/images/pdf_image.png": "832adf31435f6f1e24183b8a84544ff2",
"assets/FontManifest.json": "35f5920b19fd8f9c9daaa19260f956ef",
"assets/fonts/MaterialIcons-Regular.otf": "1653ffe25091a6605b7dc18b2dd16ccf",
"assets/NOTICES": "97c814901ac0c8658ba250ab3cf826d3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3c254d62305b72b96e570f76bf63ce85",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "48d921bfe293640d66433ee9c2a18741",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "1bf47d477d7bd84fb44f93e0d32dfb86",
"/": "1bf47d477d7bd84fb44f93e0d32dfb86",
"main.dart.js": "7372c449b2b2cfd92958f690829ddc2e",
"manifest.json": "2e1cb9e003cca78c350e07987d89fd13",
"version.json": "427d2b3d1b8b9dd8fb858a8492d728b0"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
