/* This is a temporary solution to identify dynamic FOT addresses.
 * These are pre-calculated from our shadow sampling where we noticed differences in the fees
 * returned by the on-chain fee fetcher vs GraphQL.
 * Once GraphQL exposes the "isDynamicFOT" field, we can remove this list (estimated Q3 2024).
 * More details at https://linear.app/uniswap/issue/ROUTE-111/
 * */
export class TokenFeeUtils {
  // Keep all lowercase
  static readonly DYNAMIC_FOT_ADDRESSES = new Set([
    '0x005d1123878fc55fbd56b54c73963b234a64af3c',
    '0x00ac2c9f3442f2ca74aa77168826cf60138081b7',
    '0x00b997f1c188e2e926c5e815e844c37edcb3d10e',
    '0x00ea0b90cf46482a0813996d13088a1e4b3f153f',
    '0x00feef969243d9fab0913b6e97a24dc6341a986b',
    '0x010840ad6cbbcd926e4d307bc963997d5c09b010',
    '0x016aa605b5506c7f5ce0a00ac66e957a9b41e9e5',
    '0x017e9db34fc69af0dc7c7b4b33511226971cddc7',
    '0x024db8665c2f63d5a48dd0c813701c7dc40eb404',
    '0x0288c1452dc2275920f49b0b7b251973cfe103d0',
    '0x029475acf474aa001000dcda273923d2f0188f64',
    '0x0451457348b43255a003281d0676c67f31f41987',
    '0x04bcfaa5a69bcd15be3092befbd96abc87194a57',
    '0x05b902c7fd6d221d582bb973fe6e253921568717',
    '0x07f7981a6fadadcaa5ba839a7e58ce9210e59691',
    '0x08291d36651ce809aabbd989ad6ebf1086f931a4',
    '0x09675e24ca1eb06023451ac8088eca1040f47585',
    '0x0a907b0bbff60702b29a36b19718d99253cfbd9f',
    '0x0e6fa9c050c8a707e7f56a2b3695665e4f9eac9b',
    '0x0e7981063c9c4c9bd97ec2ec5b038696bf5fca9a',
    '0x117d25add6f5e5cc56c0eee9e4e805b0c65f8df1',
    '0x11dc87e2ca685e3bfa8b33817380bae78c2fd3c2',
    '0x137e7b46d853c681c7edd08fccc44d8bdd2619d7',
    '0x15358f83d77544376667fb4191bfe8a02b989fa3',
    '0x170d30b104e97206ac10819748dfe4e6d1ce9502',
    '0x17dbf2add1400dd2d967232f69ea2c15fdd292fb',
    '0x18390bbcee69278ac698dc9fca9b5a4ada9be86e',
    '0x1929761e87667283f087ea9ab8370c174681b4e9',
    '0x19ae49b9f38dd836317363839a5f6bfbfa7e319a',
    '0x19f3c989827b96f8a6b28ccb4a0e9e1d6d35612b',
    '0x1ab4089322f2f9470e13c90f28003524f3c5ad78',
    '0x1d96cbdcfe23793ef4f01f003f7f89d3890139ee',
    '0x1e1c70f1113d847ede1239d4622782910c735bc1',
    '0x20107ae21eb8c3c92480ede035d7a003c91261a6',
    '0x21ad140cdfe3a790f06eb5f78be87aa4640cc8ba',
    '0x21de6b980762ba537330869048a740001306447b',
    '0x21fddd71511a312bc04f55d6745a1422cd95dc9c',
    '0x23ff1466b8f5b3480ac8b608ef7bf3dbc0fd8359',
    '0x26c0d62176f4bd490506152634db1efbd62606db',
    '0x26c42fa4c914f7061203499d6db3f8176c8bfa2e',
    '0x26f7f41a3a8645969e6ee3c9f6e3d6b9f7e317ce',
    '0x282a933beaac05b1836f36f6d3247a259d0f8945',
    '0x28a26b644193c8d0e98847e9430a0f72954ac91e',
    '0x299a1503e88433c0fd1bd68625c25c5a703eb64f',
    '0x29e27e11ed241640e6770e307564f34eed6ff568',
    '0x2a5fa016ffb20c70e2ef36058c08547f344677aa',
    '0x2ac85c60e753590c22e782f1f7d76dcc901bcacc',
    '0x2d6ff624a9b0f6b663c562a63cb6e45c6a04da06',
    '0x2eb6468ca9b47d2877711f1e83fa16fdff030b66',
    '0x301739698100845693116d8ae7c0df9b5d07e1e2',
    '0x31662ac5f032991531c1f67bfe299d5984177d4f',
    '0x32199a906eb44dde41f9d80f7c0d42507684d901',
    '0x3256cade5f8cb1256ac2bd1e2d854dec6d667bdf',
    '0x32e0ffa0e9523109f8e32e8746bd764fa842a67c',
    '0x32f7c36b13ba46e185879b7e4fe744b54db34072',
    '0x331e5f78fe03ef0247337e57eee63292da3f628d',
    '0x338be6a72db57a239f0d71d0ec4e5b1e38762e9f',
    '0x33ea42ecab4681b4a983b9d39c4a7e16dc107df8',
    '0x346847997f1fc967d3d0407ba6e796d2ef7640a8',
    '0x3572f4bb1224051587f9cf52edddb1428755be9b',
    '0x374ece8a34b8edc8974b5e23185e4aa31c88aaab',
    '0x37cd5e314eae46edd5b66876202e2dcfc79be598',
    '0x389999216860ab8e0175387a0c90e5c52522c945',
    '0x393997cb6a25016d7989e866bfae2ea01783271d',
    '0x3a1311b8c404629e38f61d566cefefed083b9670',
    '0x3a429a151ad985e678a834f9db057163181f58e8',
    '0x3b046fde911d3b6f9caa4759dbcfb034a87648ba',
    '0x3b56416c9d3a74c8a2eb68dfd78ee47e84c6d9da',
    '0x3b604747ad1720c01ded0455728b62c0d2f100f0',
    '0x3bc56b03fa65a5573939f855d8508b4b64dafe08',
    '0x3bf09c11dad43953d80175551b226d90375519b9',
    '0x3c22d22d2055c9bab8d02b8e6d80e0ea97beb47b',
    '0x3e348656d545dc29ebfed27079a50cac8306a45d',
    '0x3fd9feb0d6b6f35ca68fb75f610022283ccdc21f',
    '0x40790c442646df01bf09154402c63c42e55a96fa',
    '0x41f0481696e866df525c08196f0741bb7f38b5f8',
    '0x428fa25a46607f9d0309b032f043dc529436c347',
    '0x43ac4f547220df00a1453def27c00c51631a85aa',
    '0x44508a6fcf0068a745ce53c6743753a990af1add',
    '0x44753e0a9339340ca7206ab961e4916c4ce4abbc',
    '0x45804880de22913dafe09f4980848ece6ecbaf78',
    '0x4594cffbfc09bc5e7ecf1c2e1c1e24f0f7d29036',
    '0x460188f753371bd5bc53f20992c59635dd5618bb',
    '0x48734d207410d54419f226e10ca73f85a1373cf9',
    '0x487cb67786058d69f40cd68aa2e3f817314ec398',
    '0x4952437d654d595fe43c03608e3015fb951ab353',
    '0x49723512d5826639911f45e86ae25c64bf4cfbab',
    '0x4a8a90a0586a63b82c51f3decb436e5022dd7b37',
    '0x4ad434b8cdc3aa5ac97932d6bd18b5d313ab0f6f',
    '0x4c28b5d2cad6881c35a6e22657812cda9b032d0c',
    '0x4c5813b8c6fbbac76caa148aaf8910f236b56fdf',
    '0x4dda845f26bf78a17a91f862a9d9094ada9d9590',
    '0x4ed508400c17cb2dc310c4693409882dc37767de',
    '0x4edda85dc7fce71d2842e8a00ad793e20fb4ab0a',
    '0x514cd98afd4e396714d8ac186e281c5a405dc611',
    '0x517a23000b29b1b41b81493686a61e3e6b8ed0ee',
    '0x5255f518ed5d6832c540603705262c30ca477169',
    '0x52acf86689cc7ab10686e6aee34a3f628e5dcfea',
    '0x52f4d5ee6c91e01be67ca1f64b11ed0ee370817d',
    '0x532f3139b9609f946bb92d4bdb2287991e7139bd',
    '0x53b4d74c82c0cdca13a83a3fdec401d26aee1fba',
    '0x540df1ddfdc794457bd558bbace8419274aa47fb',
    '0x549d9d7f7ebc1f652eb808ce4a0111497d965d48',
    '0x54af8e530c8219f99e11448343828be12b532c93',
    '0x54d40688db8e7d15ae788fbd20c5d9d1022b6e61',
    '0x5547051051564f257223c32196b420c994299358',
    '0x562607e00db2a515e007be902bbc94859fd782f3',
    '0x562e362876c8aee4744fc2c6aac8394c312d215d',
    '0x56f40cdbbc62616d9d38e6e80d33452730ad8cdd',
    '0x59acf1dc7392f4dcf0601585cabb1d59bd75d1db',
    '0x5a57017b83dd611fd871db1873f126891e3ab002',
    '0x5aa4669dee99d636257625cd0a3910d995e18f39',
    '0x5ac83e07fd4c1aba982cef9100818013c20d5c20',
    '0x5afbcfa5048dbcae5e208d44cc81a81001fd78c8',
    '0x5c9f1bb28fc7667357c3677723cf4fad9b79b3b4',
    '0x5dcd6272c3cbb250823f0b7e6c618bce11b21f90',
    '0x5e39a61dccff6bade8baa001541e238881ce1466',
    '0x5e621e48fa36faeaef7834b3d5caabb10d755001',
    '0x5e9f35e8163c44cd7e606bdd716abed32ad2f1c6',
    '0x5ff46696d6e4896137acb1628b06e28c10ee9634',
    '0x61e2b2618a465f83831a26b49a3e79ca8bb1174f',
    '0x61ec6c39e46f53a71a888a4fda5ea0dfb15a849a',
    '0x63b7ed40185a3e925b172e9be73f1549322b4d34',
    '0x640924425f881451c803fb1a5d7cf7c99530c3c0',
    '0x6486e992bdbf80271fd2b8f97c67f0d7ca8affa3',
    '0x653761c87b076657c148bf44ea5922e70a0631f6',
    '0x66fbb5c6d0b6a4b63d24da4a05f23a14450678b5',
    '0x67dcf853ce1fd0f947e5ff584c3ef577061e0646',
    '0x680063bef14e017cb7aa111381ab9dc0b87f4876',
    '0x6988fc12f0258df53487c6ee826e111a1be0f3a8',
    '0x69b6ab6866bcebeca2a1afb203d210bac57d6267',
    '0x69f9d71c4b8218cfeba7d261f3b76a270da2c3de',
    '0x6adb2e268de2aa1abf6578e4a8119b960e02928f',
    '0x6c13cb81cad812c041ee3c049f7eeceb781c099f',
    '0x6ce7981e26ce91973b61a8760c6de117fba0e62d',
    '0x6dbda7db9272d444320ee7d48bb805f9ddacada9',
    '0x6df7280e3b05ec2e020d8005f98e27bcf8d547df',
    '0x6ea93a809f228ad7140058b597d2ac7b136c3160',
    '0x6ebda46f91e8015b94fe5ea68ee9426ec93bdefd',
    '0x7039cd6d7966672f194e8139074c3d5c4e6dcf65',
    '0x71e63826a2433180374a718fbe247a91b530ff84',
    '0x73a2e29356791c195102ff8a1dbba49281e93980',
    '0x743494393d802ac25c39d7882b10d7fd08293686',
    '0x74447fa85c9e5f3135d688a7b0494d8aa6fc1aa2',
    '0x7847dbe7bfc2f940275f67f21898c35fe2528b64',
    '0x7930d45a9ed754396da3a0c864f951ae84ceaa35',
    '0x7983ef254f02a555b69ac86fde5fad78f5d75c89',
    '0x7c4b63461a15d7b12266dac87e74078cbcb1943d',
    '0x7ceec758dfe5ef8c32cde7b2259cc79b1891e8ed',
    '0x7d0c49057c09501595a8ce23b773bb36a40b521f',
    '0x7d3429d38425c11d0efada070a63aa60f1979fb1',
    '0x802d0359e1308c32d13264be9bf248b06660d4e3',
    '0x80862725e0fb7970f8ee3a11dcf07b4767326ac1',
    '0x84b50564514c6002e54a558f5c9270adceccdc24',
    '0x8551353a87993c14329df0322f673bca640e3906',
    '0x85593631b26161ac29d15830ce8b6029d03a317a',
    '0x8636add2ff5ce1e3433b4967ee7e690489ec1603',
    '0x8669fa2b06829aa5fabc47b5e5d0e66b85f1522e',
    '0x868e6e01bebd455b2271d21070c0fded9578a486',
    '0x86c88e9523280d23f96c93962df824a43dd00806',
    '0x86d56343c9af02f8e88941c3a51d9c6e0385c7b6',
    '0x896410d8ea6204eb5ae6a0ce11f0d11944be8d66',
    '0x89cb023b65a2db832817baaac12c20a9fcab9d34',
    '0x8a0a9b663693a22235b896f70a229c4a22597623',
    '0x8a32082319bf86e426448add43f1040164f0ab36',
    '0x8b50984aba7d843689d2f2469a070618415afe67',
    '0x8b657cec7c576ac3f75a2550c9afb7f8a5e38461',
    '0x8d14f415a51b839484d02d6bd972c643d45c3059',
    '0x8d65a2eabde4b31cbd7e43f27e47559d1ccec86c',
    '0x8ebf125832b30eea7be7f885447c41226a8b0334',
    '0x8effab8fe56db6e5e1ea67a585abf709bd750593',
    '0x8f1e63f7051c93594f4948b2688e808f4b96c4f0',
    '0x9012744b7a564623b6c3e40b144fc196bdedf1a9',
    '0x90915b69ee20dcc500dbfcff98252cb30f5aba91',
    '0x90f6d6c071b5c58058b1fbf38e7c77a59c2d030e',
    '0x9326c50e4c4754943a2fcd02268066eb86d53837',
    '0x945a9f6c5be130190aad5bf436b3052d6a6f098f',
    '0x94b9d59f6e801d18f7452a98b95bbe510dc9726c',
    '0x9609831bb1d77de5ea10e18c9c718cb6c37d4284',
    '0x97d2fc7d16bc34121c3311f2e2e05d298c19956f',
    '0x9a2af0abb12bee5369b180976be01e8c80d0e7b6',
    '0x9aea04c8aa778fa69ce502f1fc0808c062ac02cc',
    '0x9af47ae3ea71384107e6b6b7469c18d7d5df7014',
    '0x9afffb7fd2de2d8024e9c3746be75476270eca68',
    '0x9b8307aa79b5257238e4dc32a348da590580f873',
    '0x9cc0baaf568d2a0f330b5b7aedea864acd2966b0',
    '0x9d0188dce454cf976274a6fce9e6ab8c4fd5ff78',
    '0x9d21168d89a258fc101a229d5935481fc97b43ec',
    '0x9dea1d90f0eaa6f190dc62d90fac9b4323d4fcd5',
    '0x9e4137b86a88a26e80ffcde6b076ee5b23891a14',
    '0x9e4825ba519f4b3bb0358321facb301954f55621',
    '0x9f0c7143a08b098773d4aa19e69fdffa21dfe9ab',
    '0x9f1c8593ded9ec5b9e94967c9522c9b7bc61039b',
    '0x9f2ebeae3f3281c1969da791fcc443fe572bbe0c',
    '0xa27e2697bd2be77bbb8e81b6aba10693530149a3',
    '0xa398307aaa33261a6bfa54d507cb64ee682d0d34',
    '0xa39a502824b66655e46607a0781cd2877ed12061',
    '0xa3e059c0b01f07f211c85bf7b4f1d907afb011df',
    '0xa616ec2e3f96827dc217e34938bc6140e276c236',
    '0xa6e3d207b065bea0f61438338828271ceca478c8',
    '0xa7107f177e61f757bf5f6293b41d9b201e269a86',
    '0xa7cb9aeb4df4d963b4fb6265c4aa85908e270438',
    '0xaa060fd9da0beed7386e3c1c31b395d4fd836b9a',
    '0xaab577a86c4a18ee5c3b4d4022605cc5f8d854e8',
    '0xab68da3c0e4877dbb0c0ff1b73384bc8d4db4afc',
    '0xab98093c7232e98a47d7270ce0c1c2106f61c73b',
    '0xabbb8418faf34b6166e5f45aba16fe5c16e60607',
    '0xabd0e3535ecfbf6959b1798220335faf1b7ada3a',
    '0xabf4bdb93f6e06775b1337d41e6db58fa80086f0',
    '0xacddd4725fb43f4f7be9b4088dd57c39797fdcba',
    '0xaef96db7b51379e51eebfbea0c834984a500ae34',
    '0xb033793679f43777b638bdb1f4cf50fe1d55c9f0',
    '0xb0b07ca7a249c061a2f63a16b3247f5ecd0f56ef',
    '0xb19189fb36c816f3e0f16065057b07b790998fdc',
    '0xb44377b74ef1773639b663d0754cb8410a847d02',
    '0xb568bd86b9a3f7e16a27786e9ed54871adc21561',
    '0xb65acea4dadd3a2d696d1df830b67ed7c897989c',
    '0xb70b49bc448e1cd35ad8719b61421b6a4caeab55',
    '0xb920727c79460f4baed93a872afd29d2a1240377',
    '0xb970e14df2161c0a2f32eba35901f2446581b482',
    '0xb982588d49081d806ae2b635c623f9e7aacd7a87',
    '0xbaaa6998d82fbe1c0972d58de1c432b148b05ee1',
    '0xbc3233d590580842cd822175da3501882a15a2ba',
    '0xbc6d2b801a8e2d322ddfc20e51bfaaf0107409f5',
    '0xbd7e92cf6f857be8541fca6abfb72aef8e16c307',
    '0xbdd9f583c4f206179856af40e92f0b994ee60364',
    '0xbe4d9c8c638b5f0864017d7f6a04b66c42953847',
    '0xc025e7475fa4e8f7c1d3669a9359752b24272971',
    '0xc03079cf5732a9b06f0e41359fe6268b5ad55bf5',
    '0xc0e24cc5162176fba60108f40d0ffe3bfff73ed6',
    '0xc106b98c4d0b3f1c92da0e9a6089e9c63ceacbb0',
    '0xc111f374e8c74b0a7805e1b2d60a6c9ce391b6b8',
    '0xc1519c2351e221e924fe0b727d04e7f77f0386fa',
    '0xc226470f19ca51f06ccbb829fd604ee355e34d66',
    '0xc291d9fa50325d4197b22eaf4fea117dbf805eae',
    '0xc30062d6d1dd72162afe14af4288ec81d36b63a5',
    '0xc36ad98e62598ae24d4487d8012209f687c30d45',
    '0xc3dbd99da846ea38d34430d852795684a211428b',
    '0xc40af1e4fecfa05ce6bab79dcd8b373d2e436c4e',
    '0xc48a1b27b521eded88b6677833a1bbc5fac969ad',
    '0xc4c75f2a0cb1a9acc33929512dc9733ea1fd6fde',
    '0xc5fc25a9de9e9411517aab065bab005e586d5efc',
    '0xc6221ac4e99066ea5443acd67d6108f874e2533d',
    '0xc65d9f879f947ac18bfa44a1482773b085aa389d',
    '0xc6ca3be750f827f132a603f293c21c336b9e3bb6',
    '0xc740181345c65552333e1edc797e03f11852b1c8',
    '0xc770e89e46293a37c21941ad01ed2ac042c1fa58',
    '0xc7a0c6227ae54689abbc4f4d8b484c945253cda7',
    '0xc8809f6c743179e794c4d9b95ca862aa24976e74',
    '0xc944552ee1732103155ffdcc31f3da6716e49afd',
    '0xc94a0d379b23479c1ae9f48e4e5ea2213403c54d',
    '0xcaa3eb4a361d74029783c5b77628c0549a6b2d41',
    '0xcb5542d5a9438c9d2de124292201fa118dbded26',
    '0xcd24ba0e3364233ee9301c1d608a14753c8739c5',
    '0xcd7492db29e2ab436e819b249452ee1bbdf52214',
    '0xce43854dd0b2a59aaba327730d3c64a1c94edc51',
    '0xd0b3a986fff305854a7238a8e099cce1ced01a3d',
    '0xd0d2ca11c5f244370ba419ee5f7df7b05f707d02',
    '0xd155fa55c40d010335aa152891aa687e2f3090bd',
    '0xd16fd95d949f996e3808eeea0e3881c59e76ef1e',
    '0xd21c0404c709a83bdf68e2c67accc0b2fad74ab2',
    '0xd25c56f3e0585e65a2ab68a47e882fd6f61ed889',
    '0xd289ea09aeece390629e9414d41b4d9d9bf43fd9',
    '0xd3f09b9858af593e0955057d81d5d12815019c1c',
    '0xd5281bb2d1ee94866b03a0fccdd4e900c8cb5091',
    '0xd6ae9190baf07fb0333669826a9106be2de9dfeb',
    '0xd718ad25285d65ef4d79262a6cd3aea6a8e01023',
    '0xd79f43113b22d1ea9f29cfcc7bb287489f8ee5e0',
    '0xd7e4af50a1e60065924fb89a8ca2ee497c6e34c0',
    '0xda629b1ec99f3fe6b10bfdd8da2f6fb12becb986',
    '0xdac18ae0b4c2dcc184705ced65aa09b5f0477e2f',
    '0xdad9f9fd3930edb77be4f7205d6606bf53488787',
    '0xdc145c943984dfb1a7478533c8e503d3d900f86f',
    '0xdc1814a3c63d8b337c8b573af38df180da4d2071',
    '0xdc247546a6551117c8ea82db2cc0ad6e048e5f6e',
    '0xdc349913d53b446485e98b76800b6254f43df695',
    '0xddaf27167929cd045a7d97d09a4fa1046ece3d89',
    '0xded355be6d124609819491859842c69b637d526e',
    '0xdfad36592b9abf86a203c9e1beaed0d844f9fa26',
    '0xe04d9c832069ef29d4f189379cb2d5fc7b0cf078',
    '0xe0ca9e4b62e4ae4d80f49315ae8479a5a76184ac',
    '0xe1103af5ccddf6a769a4f665bde932b16621bd93',
    '0xe14b7a963925e451761166ad08dc6118eceddb9a',
    '0xe2512a2f19f0388ad3d7a5263eaa82acd564827b',
    '0xe2e7c22ac891223529b62036eb98f56ddc051b6b',
    '0xe3b8b8c9b5f29cb6607b137db68338c23a57c2a2',
    '0xe4b1a74474bbe558743db1f293f7e3a1b9969ced',
    '0xe71495df5c9b668f11b597d0941fb4ccf1ee2b52',
    '0xe80f90720e00f329da65b40b07b2d8e92c6644ae',
    '0xe85d434bbc57340116820287108552d0fbcfd209',
    '0xe8764db4173d4802d926befff638f35ddacafe12',
    '0xe8b1e79d937c648ce1fe96e6739ddb2714058a18',
    '0xeb72bcd8915aaea6ea2f0286a4ab257032956c92',
    '0xeeac149ea6ab0a4eb2be9db1ad6c1866556e93d6',
    '0xf09e8762f9df7b54455d7b932371729a83bce791',
    '0xf1e48f1c72b44913aa7a6128aff240df5d83c39e',
    '0xf373af20eddce50573d6ecc3bc207f87511bdfb4',
    '0xf3c7cecf8cbc3066f9a87b310cebe198d00479ac',
    '0xf3f16b372fb47e54d4f00eff33e615d83744f601',
    '0xf520db1ecda4b0830cec6146c4a439b1d4586382',
    '0xf59bfeed034092e399cc43ff79edab15e2e18735',
    '0xf62ac0fcae17f9195280ced4de978313effe2daa',
    '0xf67dbb2785a85f6ba07b35ea66a1134a2fe72097',
    '0xf71de474c8d418971ff7cbafd91a7a2e7ce3c80d',
    '0xfa8851cd030327154f852d7d41233c3246df05ad',
    '0xfa955ec865f51c55e3b6ce02528a6844c2eb9c26',
    '0xfe14e3138d0e3f74c9f964583113c613a248cc32',
    '0xffb032d971469fd358f11a4192c4e0b852df5190',
  ])

  static isDynamicFOT(address: string): boolean {
    return TokenFeeUtils.DYNAMIC_FOT_ADDRESSES.has(address.toLowerCase())
  }
}
