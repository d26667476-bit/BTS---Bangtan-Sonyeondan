const platformLabels = {
    youtube: "YouTube",
    spotify: "Spotify"
};

const goalLabels = {
    "1-million": "1 million",
    "100-million": "100 million",
    "200-million": "200 million",
    "300-million": "300 million",
    "400-million": "400 million",
    "500-million": "500 million",
    "600-million": "600 million",
    "700-million": "700 million",
    "800-million": "800 million",
    "900-million": "900 million",
    "1-billion": "1 billion",
    "1-5-billion": "1 billion to 1.5 billion",
    "2-billion": "1.5 billion to 2 billion"
};

const jinMilestoneImages = {
    "1-million": "jin soloverse songs need 1 miilion for next milestone.jpg",
    "100-million": "jin solovese spotify 100 m.jpg",
    "200-million": "jin soloverese spotify 200m.jpg",
    "300-million": "jin soloverse spotify 300m.jpg",
    "400-million": "jin soloverse spoitfy 400m.jpg",
    "500-million": "jin soloverese spotify 500m.jpg",
    "600-million": "jin soloverse spotify 600m.jpg",
    "700-million": "jin soloverse spotify 700m.jpg",
    "800-million": "jin soloverse spotify 800m.jpg",
    "900-million": "jin soloverse spotify 900m.jpg",
    "1-billion": "jin soloverse spotify 1billion.jpg",
    "1-5-billion": "jin soloverse spotify 1-1.5b.jpg",
    "2-billion": "jin soloverse spotify 1-5 b to 2 b.jpg"
};

const sugaMilestoneImages = {
    "1-million": "suga.jpg",
    "100-million": "suga soloverse 100m.jpg",
    "200-million": "suga soloverse 200m.jpg",
    "300-million": "suha soloverese 300m.jpg",
    "400-million": "suga soloverse 400m.jpg",
    "500-million": "suga soloverse 500m.jpg",
    "600-million": "suga soloverse 600m.jpg",
    "700-million": "suga solovere 700m.jpg",
    "800-million": "suga soloverse 800m.jpg",
    "900-million": "suga soloverse 900m.jpg",
    "1-billion": "suga soloverse 1b.jpg",
    "1-5-billion": "suga soloverse 1-1.5b.jpg",
    "2-billion": "suga soloverse 1.5-2b.jpg"
};

const youtubeMemberDescriptions = {
    jin: "Jin's official solo YouTube videos",
    suga: "SUGA and Agust D official YouTube MVs",
    jhope: "j-hope official and credited collaboration YouTube MVs",
    rm: "RM official solo and credited collaboration YouTube MVs",
    jimin: "Jimin official solo and credited collaboration YouTube MVs",
    v: "Taehyung (V) official solo and credited collaboration YouTube MVs",
    jungkook: "Jungkook official solo and credited collaboration YouTube MVs"
};

const members = {
    jin: {
        name: "Jin",
        image: "../assets/jin.jpg",
        milestoneSongs: {
            youtube: {
                "1-million": [],
                "100-million": [
                    { title: "Don't Say You Love Me (Official MV)", url: "https://www.youtube.com/watch?v=o7BcyAd6rqg", streams: 56440774 }
                ],
                "200-million": [
                    { title: "The Astronaut (Official MV)", url: "https://www.youtube.com/watch?v=c6ASQOwKkhk", streams: 137431520 }
                ]
            },
            spotify: {
                "1-million": [],
                "100-million": [
                    { title: "Tonight", url: "https://open.spotify.com/track/2P6PLe4ojigLUp4CWMkcAI", streams: 83321392 },
                    { title: "Heart on the Window (with WENDY)", url: "https://open.spotify.com/track/0gzXQHsv4zYHQ1pvlyYZZa", streams: 82700577 },
                    { title: "Nothing Without Your Love", url: "https://open.spotify.com/track/4H6s1mTZcjHAMU36ZF3Xoz", streams: 79858856 },
                    { title: "Background", url: "https://open.spotify.com/track/1qmcc6IRvBdhmqhLhSaJoo", streams: 71203651 },
                    { title: "Loser (feat. YENA)", url: "https://open.spotify.com/track/4WrkJNGb4zUwARc0FD3iNf", streams: 67794378 },
                    { title: "Rope It", url: "https://open.spotify.com/track/5566hAPt0WmMPr9Xn749L7", streams: 66027892 },
                    { title: "Another Level", url: "https://open.spotify.com/track/6L4VgCOiyt8MzYfH4llkQg", streams: 61114180 },
                    { title: "With the Clouds", url: "https://open.spotify.com/track/5RdKO1lsHG9jhbG03LL7cv", streams: 60703640 },
                    { title: "Falling", url: "https://open.spotify.com/track/5jxuw4S5IDEY6CjjAHvRAt", streams: 58001395 },
                    { title: "To Me, Today", url: "https://open.spotify.com/track/3f7rVNaBNocDLtPmnds9eE", streams: 57279523 },
                    { title: "Close to You", url: "https://open.spotify.com/track/4z0vfU3JiAsl99ZHL29hMm", streams: 54184786 },
                    { title: "I will come to you", url: "https://open.spotify.com/track/79ldP0lRJABss2gUdH346e", streams: 50171148 }
                ],
                "200-million": [
                    { title: "Abyss", url: "https://open.spotify.com/track/40BomFCBuJok3OjxM9oG7e", streams: 123851417 },
                    { title: "Super Tuna", url: "https://open.spotify.com/track/4pygz13A6EcLL6ti7kqGaf", streams: 108731996 }
                ],
                "300-million": [
                    { title: "It’s Definitely You", url: "https://open.spotify.com/track/4CW75mEldEGBIm2JXzqAPf", streams: 264917210 },
                    { title: "I’ll Be There", url: "https://open.spotify.com/track/2SR0alFA2oWYXSoePGTj0V", streams: 230898578 },
                    { title: "Yours", url: "https://open.spotify.com/track/66sBTYlkaiyBwf4fhbIHlZ", streams: 225893670 }
                ],
                "500-million": [
                    { title: "Running Wild", url: "https://open.spotify.com/track/45DB3yqxYGAnKN3YmLWbAX", streams: 456326071 }
                ],
                "700-million": [
                    { title: "The Astronaut", url: "https://open.spotify.com/track/0h7QMc9ZRzA9QJrbEHytn2", streams: 630468994 }
                ],
                "1-5-billion": [
                    { title: "Don’t Say You Love Me", url: "https://open.spotify.com/track/27xkOIER6uDLKALIelHylZ", streams: 1028898242 }
                ]
            }
        }
    },
    suga: {
        name: "SUGA",
        image: "../assets/suga.jpg",
        milestoneSongs: {
            youtube: {
                "1-million": [],
                "100-million": [
                    { title: "Agust D - Give It To Me (MV)", url: "https://www.youtube.com/watch?v=_Zgc12yL5ss", streams: 60638518 },
                    { title: "People Pt.2 (feat. IU) (Official MV)", url: "https://www.youtube.com/watch?v=uVD-YgzDzyY", streams: 52063246 }
                ],
                "200-million": [
                    { title: "eight (Prod. & Feat. SUGA of BTS) (Official MV)", url: "https://www.youtube.com/watch?v=TgOu00Mf3kI", streams: 195903384 },
                    { title: "Agust D (MV)", url: "https://www.youtube.com/watch?v=3Y_Eiyg4bfk", streams: 188388262 },
                    { title: "Haegeum (Official MV)", url: "https://www.youtube.com/watch?v=iy9qZR_OGa0", streams: 113744556 }
                ],
                "500-million": [
                    { title: "Daechwita (MV)", url: "https://www.youtube.com/watch?v=qGjAWJ2zWWI", streams: 494872338 }
                ],
                "700-million": [
                    { title: "That That (prod. & feat. SUGA of BTS) (Official MV)", url: "https://www.youtube.com/watch?v=8dJyRm2jJ-U", streams: 684996721 }
                ]
            },
            spotify: {
                "1-million": [
                    { title: "Girl Of My Dreams (with SUGA of BTS)", url: "https://open.spotify.com/track/59bY27SZQ4r25o02vqOhgC", streams: 187801725, target: 200000000 }
                ],
                "100-million": [
                    { title: "My Universe - SUGA's Remix", url: "https://open.spotify.com/track/6BeOJPXMstvXolxKbL09kR", streams: 51378553 }
                ],
                "200-million": [
                    { title: "Lilith (feat. SUGA of BTS) (Diablo IV Anthem)", url: "https://open.spotify.com/track/3l6LBCOL9nPsSY29TUY2VE", streams: 134075214 },
                    { title: "SUGA's Interlude", url: "https://open.spotify.com/track/1ZoQVu9XBssJBdeKMgF2eV", streams: 135604567 },
                    { title: "Girl Of My Dreams (with SUGA of BTS)", url: "https://open.spotify.com/track/59bY27SZQ4r25o02vqOhgC", streams: 187801725 }
                ],
                "300-million": [
                    { title: "Blueberry Eyes (feat. SUGA of BTS)", url: "https://open.spotify.com/track/5ibk0oLQ2DajYbhY0ZJOIM", streams: 278983690 }
                ],
                "400-million": [
                    { title: "eight (Prod. & Feat. SUGA of BTS)", url: "https://open.spotify.com/track/0pYacDCZuRhcrwGUA5nTBe", streams: 356336063 },
                    { title: "That That (prod. & feat. SUGA of BTS)", url: "https://open.spotify.com/track/7GNRUsU3M4XNDDB9xle5Dz", streams: 361161724 }
                ]
            }
        }
    },
    jhope: {
        name: "j-hope",
        image: "../assets/jhope.jpg",
        milestoneSongs: {
            youtube: {
                "1-million": [
                    { title: "MONA LISA (Official MV)", url: "https://www.youtube.com/watch?v=ECqGCH1TfLY", streams: 99942079, target: 100000000 }
                ],
                "100-million": [
                    { title: "MORE (Official MV)", url: "https://www.youtube.com/watch?v=pKdBFeewZYE", streams: 93262338 },
                    { title: "Airplane (MV)", url: "https://www.youtube.com/watch?v=8O_MwlZ2dEg", streams: 71276889 },
                    { title: "Arson (Official MV)", url: "https://www.youtube.com/watch?v=QmpTkkaKYSU", streams: 71239010 },
                    { title: "on the street (with J. Cole) (Official MV)", url: "https://www.youtube.com/watch?v=r6WbbU_lLCA", streams: 70250805 },
                    { title: "Rush Hour (feat. j-hope of BTS) (MV)", url: "https://www.youtube.com/watch?v=PS0qkO5qty0", streams: 64619033 },
                    { title: "Killin' It Girl (feat. GloRilla) (Official MV)", url: "https://www.youtube.com/watch?v=q9leDzlNEaY", streams: 58676854 },
                    { title: "Sweet Dreams (feat. Miguel) (Official MV)", url: "https://www.youtube.com/watch?v=kW1e8NtdW90", streams: 55306886 }
                ],
                "200-million": [
                    { title: "Daydream (MV)", url: "https://www.youtube.com/watch?v=OK3GJ0WIQ8s", streams: 172932102 },
                    { title: "SPAGHETTI (feat. j-hope of BTS) (Official MV)", url: "https://www.youtube.com/watch?v=TvVtYaqCni8", streams: 147651804 }
                ],
                "500-million": [
                    { title: "Chicken Noodle Soup (feat. Becky G) (MV)", url: "https://www.youtube.com/watch?v=i23NEQEFpgQ", streams: 428181888 }
                ]
            },
            spotify: {
                "1-million": [
                    { title: "Sweet Dreams (feat. Miguel)", url: "https://open.spotify.com/track/1yX9gy5fK02j6nBnGJ1S3k", streams: 199424689, target: 200000000 }
                ],
                "100-million": [
                    { title: "LV Bag (feat. j-hope of BTS & Pharrell Williams)", url: "https://open.spotify.com/track/1MhXchY126AX5Iuv4Odbe8", streams: 93420466 },
                    { title: "항상 (HANGSANG)", url: "https://open.spotify.com/track/270k38FpoKhnvZLv50NlTr", streams: 91346625 },
                    { title: "HUH?! (feat. j-hope)", url: "https://open.spotify.com/track/6XrPzwKeGzEvtan3acn7VH", streams: 83641015 },
                    { title: "Base Line", url: "https://open.spotify.com/track/3eSCPt6StovDAIps2XhZ2Z", streams: 74420854 },
                    { title: "Future", url: "https://open.spotify.com/track/0Puudh380z6cOCgMaTNm7h", streams: 57078683 },
                    { title: "P.O.P (Piece Of Peace) Pt. 1", url: "https://open.spotify.com/track/78GQP9XBSqpEDlMoPAbUAJ", streams: 56410028 },
                    { title: "Pandora's Box", url: "https://open.spotify.com/track/2On611HXKQAbaYkuc4NQAm", streams: 54813592 },
                    { title: "i don't know (with HUH YUNJIN of LE SSERAFIM)", url: "https://open.spotify.com/track/0ObH6HhEWiI2kXBJ4tusbQ", streams: 54775774 },
                    { title: "lock / unlock (with benny blanco & Nile Rodgers)", url: "https://open.spotify.com/track/3aKXtIPNRoD73KLpsNnNoK", streams: 54092549 },
                    { title: "Safety Zone", url: "https://open.spotify.com/track/00I41xsW6SunZDJ5fB8KAd", streams: 53259706 },
                    { title: "Intro", url: "https://open.spotify.com/track/0M7ai1yfYyb4OlyRgdmtTK", streams: 50478829 }
                ],
                "200-million": [
                    { title: "Sweet Dreams (feat. Miguel)", url: "https://open.spotify.com/track/1yX9gy5fK02j6nBnGJ1S3k", streams: 199424689 },
                    { title: "NEURON (with Gaeko & YOON MIRAE)", url: "https://open.spotify.com/track/11sirgYaEutV40tkvgpHN6", streams: 195352157 },
                    { title: "Daydream (백일몽)", url: "https://open.spotify.com/track/56sdcbPR74RxqmKVbQzJ8s", streams: 193075562 },
                    { title: "Killin' It Girl - Solo Version", url: "https://open.spotify.com/track/3efpTAvesRrJYCTx4w2UVc", streams: 184465068 },
                    { title: "i wonder... (with Jung Kook of BTS)", url: "https://open.spotify.com/track/3ajU531gR5fW71wqsw4tFX", streams: 150142929 },
                    { title: "= (Equal Sign)", url: "https://open.spotify.com/track/70XnKsO3UnIT4FnEwChQXx", streams: 124244035 },
                    { title: "Hope World", url: "https://open.spotify.com/track/5UMPPsXaGbR1qtzcnEtTpM", streams: 122200726 },
                    { title: "Airplane", url: "https://open.spotify.com/track/2jk6oBuLiCZJTDWhlJEzIw", streams: 121119939 },
                    { title: "Rush Hour (Feat. j-hope of BTS)", url: "https://open.spotify.com/track/5aucVLKiumD89mxVCB4zvS", streams: 113235953 },
                    { title: "Blue Side (Outro)", url: "https://open.spotify.com/track/20zr2Oef3PVeGRxjmSF5CC", streams: 104100575 }
                ],
                "300-million": [
                    { title: "Chicken Noodle Soup (feat. Becky G)", url: "https://open.spotify.com/track/2y6Ty2NPAsP84XJAtzLxuk", streams: 238660114 },
                    { title: "Arson", url: "https://open.spotify.com/track/2QWEMqQMJR1KDf6hDjJOs6", streams: 235994162 },
                    { title: "on the street (with J. Cole)", url: "https://open.spotify.com/track/5wxYxygyHpbgv0EXZuqb9V", streams: 224954460 }
                ],
                "400-million": [
                    { title: "Killin' It Girl (feat. GloRilla)", url: "https://open.spotify.com/track/2GzwtXPlI0gZEOS6xFOZ2j", streams: 365215555 },
                    { title: "MORE", url: "https://open.spotify.com/track/7GARzfC1mwhDuk4t9WOACq", streams: 344562597 },
                    { title: "SPAGHETTI", url: "https://open.spotify.com/track/2N9miXnewVmUrgl6JSK1FI", streams: 317014042 },
                    { title: "MONA LISA", url: "https://open.spotify.com/track/5hw1LOKS4L1CArahsDC9VA", streams: 305276794 }
                ]
            }
        }
    },
    rm: {
        name: "RM",
        image: "../assets/rm.jpg",
        milestoneSongs: {
            youtube: {
                "1-million": [],
                "200-million": [
                    { title: "Wild Flower (with youjeen) (Official MV)", url: "https://www.youtube.com/watch?v=u18be_kRmC0", streams: 136849297 }
                ]
            },
            spotify: {
                "1-million": [
                    { title: "tokyo", url: "https://open.spotify.com/track/2YCTRzLwXgiNvbod8xuCHl", streams: 99742038, target: 100000000 }
                ],
                "100-million": [
                    { title: "tokyo", url: "https://open.spotify.com/track/2YCTRzLwXgiNvbod8xuCHl", streams: 99742038 },
                    { title: "Strange (feat. RM)", url: "https://open.spotify.com/track/5sF4GOOSRELn8zn6DDGzUP", streams: 89563579 },
                    { title: "forever rain", url: "https://open.spotify.com/track/42DD4cLqkprJPih3YxXkAO", streams: 87667506 },
                    { title: "everythingoes (with Nell)", url: "https://open.spotify.com/track/0ZUtat3yQpzMRMJ9Qmz5k0", streams: 79764523 },
                    { title: "Change pt.2", url: "https://open.spotify.com/track/2hMvhh9FiCB6njOYR7tkT8", streams: 78043527 },
                    { title: "Don't ever say love me (feat. RM of BTS)", url: "https://open.spotify.com/track/4UMKAWKI1ljNHNxkmAAch0", streams: 69949123 },
                    { title: "uhgood", url: "https://open.spotify.com/track/5u9Pr2CujzeWFZJPALBPqQ", streams: 69028199 },
                    { title: "Stop The Rain (TABLO X RM)", url: "https://open.spotify.com/track/7kb6IV0z8Nd7vejSdAq0YN", streams: 63883564 },
                    { title: "All Day (with Tablo)", url: "https://open.spotify.com/track/3PgnXyzWXrEoE0oQdLMF3M", streams: 61101353 },
                    { title: "Yun (with Erykah Badu)", url: "https://open.spotify.com/track/3F3PuqGinS2T1ePmjUTw9t", streams: 58692781 },
                    { title: "No.2 (with parkjiyoon)", url: "https://open.spotify.com/track/2sXaFMTkBHYrEgfGJ2y27a", streams: 56242557 },
                    { title: "Nuts", url: "https://open.spotify.com/track/2sR1e5YFAvXVN6EiIwR2is", streams: 56091429 },
                    { title: "Hectic (with Colde)", url: "https://open.spotify.com/track/3ZCuqvHYhjDlliRH9oCs77", streams: 55109814 },
                    { title: "badbye (with eAeon)", url: "https://open.spotify.com/track/6CYJojwhuUyTTL5G6AsDHf", streams: 54913427 },
                    { title: "Forg_tful (with Kim Sawol)", url: "https://open.spotify.com/track/1mrS1j5cwaffpXsthTb2Qx", streams: 50596989 }
                ],
                "200-million": [
                    { title: "seoul (prod. HONNE)", url: "https://open.spotify.com/track/1sKsYTGy8XfHjCYqcudqG5", streams: 186945623 },
                    { title: "LOST!", url: "https://open.spotify.com/track/02H58MSfVESkKyx4diDgu7", streams: 183351575 },
                    { title: "moonchild", url: "https://open.spotify.com/track/6BnciRM9jyEP9cEjvoN5eI", streams: 141487817 },
                    { title: "Old Town Road (feat. RM of BTS) - Seoul Town Road Remix", url: "https://open.spotify.com/track/6woeVu3fVMflqen1t4N6pg", streams: 137246287 },
                    { title: "Come back to me", url: "https://open.spotify.com/track/62HKW77nt6tudsIHXT2A0M", streams: 127256991 },
                    { title: "Still Life (with Anderson .Paak)", url: "https://open.spotify.com/track/3p4N6mBFv42M8dI8SUoPre", streams: 122520803 },
                    { title: "Lonely", url: "https://open.spotify.com/track/49iPCmLYg3SS8r2MXcbR1N", streams: 110505450 },
                    { title: "Closer (with Paul Blanco, Mahalia)", url: "https://open.spotify.com/track/0Cuwd86fyu0lPVokzTp8Hu", streams: 101477255 }
                ],
                "300-million": [
                    { title: "Neva Play (feat. RM of BTS)", url: "https://open.spotify.com/track/2ZqTbIID9vFPTXaGyzbb4q", streams: 223622577 }
                ],
                "500-million": [
                    { title: "Wild Flower (with youjeen)", url: "https://open.spotify.com/track/1AZjCZSGEjlxUufFQwSszF", streams: 458468618 }
                ]
            }
        }
    },
    jimin: {
        name: "Jimin",
        image: "../assets/jimin.jpg",
        milestoneSongs: {
            youtube: {
                "1-million": [],
                "200-million": [
                    { title: "Set Me Free Pt.2 (Official MV)", url: "https://www.youtube.com/watch?v=UaywgAqcLxI", streams: 196568161 },
                    { title: "Like Crazy (Official MV)", url: "https://www.youtube.com/watch?v=nOI67IDlNMQ", streams: 191557994 },
                    { title: "Who (Official MV)", url: "https://www.youtube.com/watch?v=Av9DvtlJ9_M", streams: 181673310 }
                ]
            },
            spotify: {
                "1-million": [
                    { title: "Set Me Free Pt.2", url: "https://open.spotify.com/track/1fpj1CJPxY3YvN3AMAEYvt", streams: 493613829, target: 500000000 }
                ],
                "100-million": [
                    { title: "Who - Rock Remix", url: "https://open.spotify.com/track/1MC8JLPV4fbvVBqvGSLoDf", streams: 81658024 },
                    { title: "Who - Acoustic Remix", url: "https://open.spotify.com/track/10I5rhhFoWZDIN3kEc6Dbo", streams: 78223764 },
                    { title: "Who - Shibuyakei Remix", url: "https://open.spotify.com/track/1ySWoGgrduSzvtJ3PUzO41", streams: 63571174 },
                    { title: "Who - Instrumental", url: "https://open.spotify.com/track/1Px44tw80Q4rcCl8FxDGOi", streams: 62394624 },
                    { title: "Who - Funky Remix", url: "https://open.spotify.com/track/7KZNgri6Jxw88FAfATw6i9", streams: 61091794 },
                    { title: "Who - Beautiful Mind Remix", url: "https://open.spotify.com/track/2isRbZIIU4PqPrECffn7QO", streams: 60833559 },
                    { title: "Angel Pt. 1 - Trailer Version", url: "https://open.spotify.com/track/2rgCR1PPHPGJBppdBOqor0", streams: 55727634 },
                    { title: "Christmas Love", url: "https://open.spotify.com/track/5oaQsszgxYAdABuXoWEOUe", streams: 50958950 }
                ],
                "200-million": [
                    { title: "Face-off", url: "https://open.spotify.com/track/3OdIiWnYRHPYtC313Z0Bwy", streams: 173204712 },
                    { title: "Alone", url: "https://open.spotify.com/track/5Hfnps0jaWFpYg55WOPexG", streams: 159748151 },
                    { title: "Promise", url: "https://open.spotify.com/track/2RUcwyW74Sv4VracHFrKdh", streams: 156638995 },
                    { title: "Slow Dance (feat. Sofia Carson)", url: "https://open.spotify.com/track/3d2bsbugow8JiNvuaRupFH", streams: 155809197 },
                    { title: "Rebirth (Intro)", url: "https://open.spotify.com/track/7gMfVc4zfNIxuMyMGglOHa", streams: 147682129 },
                    { title: "Angel Pt. 2", url: "https://open.spotify.com/track/3gSobY1JXFJn6wh1ON35ni", streams: 136611729 },
                    { title: "Interlude : Showtime", url: "https://open.spotify.com/track/45zLrK0668WQ5JFMyiYmCS", streams: 129711123 },
                    { title: "Interlude : Dive", url: "https://open.spotify.com/track/2qg2jy3v50RwfV5FAqG3a2", streams: 128532411 }
                ],
                "300-million": [
                    { title: "Smeraldo Garden Marching Band (feat. Loco)", url: "https://open.spotify.com/track/1agDCV4zQqaFwJQNsTgmL1", streams: 283288991 },
                    { title: "VIBE (feat. Jimin of BTS)", url: "https://open.spotify.com/track/61AZsmFB3VoJdmraMk5ZSn", streams: 282209124 },
                    { title: "Angel Pt. 1", url: "https://open.spotify.com/track/1FEGCMAqh9wzjVM7bPBORE", streams: 250376008 }
                ],
                "400-million": [
                    { title: "Closer Than This", url: "https://open.spotify.com/track/6qafqn8bBMy7t5c5WqpyRk", streams: 342363973 },
                    { title: "With you", url: "https://open.spotify.com/track/2gzhQaCTeNgxpeB2TPllyY", streams: 330975038 }
                ],
                "500-million": [
                    { title: "Set Me Free Pt.2", url: "https://open.spotify.com/track/1fpj1CJPxY3YvN3AMAEYvt", streams: 493613829 },
                    { title: "Be Mine", url: "https://open.spotify.com/track/3LWVXp636uLT356Rj08Jaz", streams: 417630591 },
                    { title: "Like Crazy (English Version)", url: "https://open.spotify.com/track/0u8rZGtXJrLtiSe34FPjGG", streams: 407373865 }
                ],
                "1-5-billion": [
                    { title: "Like Crazy", url: "https://open.spotify.com/track/3Ua0m0YmEjrMi9XErKcNiR", streams: 1489271395 }
                ]
            }
        }
    },
    v: {
        name: "V",
        image: "../assets/taehyung.jpg",
        milestoneSongs: {
            youtube: {
                "1-million": [],
                "100-million": [
                    { title: "Slow Dancing (Official MV)", url: "https://www.youtube.com/watch?v=eI0iTRS0Ha8", streams: 77742903 },
                    { title: "Rainy Days (Official MV)", url: "https://www.youtube.com/watch?v=yTsINmrAK4I", streams: 72798316 }
                ],
                "200-million": [
                    { title: "Winter Bear", url: "https://www.youtube.com/watch?v=pk7ESz6vtyA", streams: 138013029 },
                    { title: "Love Me Again (Official MV)", url: "https://www.youtube.com/watch?v=HYzyRHAHJl8", streams: 134865872 }
                ]
            },
            spotify: {
                "1-million": [
                    { title: "Rainy Days", url: "https://open.spotify.com/track/54bg1e6ABcZfpU3yzwxnPf", streams: 391916826, target: 400000000 }
                ],
                "100-million": [
                    { title: "White Christmas (with V of BTS)", url: "https://open.spotify.com/track/7134tEHq45eL6am9oVazZU", streams: 86634445 },
                    { title: "Snow Flower (feat. Peakboy)", url: "https://open.spotify.com/track/34IGOyXR6cn0YI9VBu8m0y", streams: 75805380 },
                    { title: "Scenery", url: "https://open.spotify.com/track/1UHkDovEFqHzHCPyNe0BTy", streams: 65258659 }
                ],
                "200-million": [
                    { title: "For Us", url: "https://open.spotify.com/track/4HAOgAnILvXCbSODMoRnmD", streams: 187229537 },
                    { title: "Blue", url: "https://open.spotify.com/track/2UU11hvjN1JIn4iihEodNT", streams: 180119045 },
                    { title: "wherever u r (ft. V of BTS)", url: "https://open.spotify.com/track/1k255f17DRuRbGrfz5Ifmd", streams: 162959437 },
                    { title: "Slow Dancing (Piano Ver.)", url: "https://open.spotify.com/track/7pgbDdy7ax962o9d2xJceV", streams: 151348497 },
                    { title: "Winter Bear", url: "https://open.spotify.com/track/74ewFAgDzRkhZ7EX2eLtfZ", streams: 100331055 }
                ],
                "300-million": [
                    { title: "It's Definitely You", url: "https://open.spotify.com/track/4CW75mEldEGBIm2JXzqAPf", streams: 264917210 }
                ],
                "400-million": [
                    { title: "Rainy Days", url: "https://open.spotify.com/track/54bg1e6ABcZfpU3yzwxnPf", streams: 391916826 }
                ],
                "500-million": [
                    { title: "Sweet Night", url: "https://open.spotify.com/track/3Wno87vVBVbSVS2vUUFuKC", streams: 472053710 }
                ],
                "600-million": [
                    { title: "Christmas Tree", url: "https://open.spotify.com/track/186NCtNk1tUYS7c2DxgJ7O", streams: 513041437 }
                ],
                "700-million": [
                    { title: "Slow Dancing", url: "https://open.spotify.com/track/5h1BN75CEh8wdSwE1xrbSe", streams: 602299114 },
                    { title: "FRI(END)S", url: "https://open.spotify.com/track/0PBTlQ84CBJF0tBnKGmQa6", streams: 634932698 }
                ],
                "800-million": [
                    { title: "Winter Ahead (with PARK HYO SHIN)", url: "https://open.spotify.com/track/7G7mSV4BebkoHWwKTDvXu9", streams: 737849505 }
                ],
                "1-5-billion": [
                    { title: "Love Me Again", url: "https://open.spotify.com/track/0SftJDguUa1F5SsQwwkLw4", streams: 1156594618 }
                ]
            }
        }
    },
    jungkook: {
        name: "Jungkook",
        image: "../assets/jumgkook.jpg",
        milestoneSongs: {
            youtube: {
                "1-million": [],
                "300-million": [
                    { title: "Standing Next to You (Official MV)", url: "https://www.youtube.com/watch?v=UNo0TG9LwwI", streams: 243032807 }
                ],
                "400-million": [
                    { title: "3D (feat. Jack Harlow) (Official MV)", url: "https://www.youtube.com/watch?v=mHNCM-YALSA", streams: 301340125 }
                ],
                "700-million": [
                    { title: "Seven (feat. Latto) (Official MV)", url: "https://www.youtube.com/watch?v=QU9c0053UAU", streams: 656269257 }
                ]
            },
            spotify: {
                "1-million": [
                    { title: "My You", url: "https://open.spotify.com/track/0pNFrM5L0te1EXGxveeYiR", streams: 199102613, target: 200000000 }
                ],
                "100-million": [
                    { title: "3D (Alternate Ver.)", url: "https://open.spotify.com/track/5BKiMkWucQVb7wrFi29VtX", streams: 70869064 },
                    { title: "3D - Justin Timberlake Remix", url: "https://open.spotify.com/track/2mHw0KoEyDw8Yaw3yPoke6", streams: 63272407 }
                ],
                "200-million": [
                    { title: "My You", url: "https://open.spotify.com/track/0pNFrM5L0te1EXGxveeYiR", streams: 199102613 },
                    { title: "Shot Glass of Tears", url: "https://open.spotify.com/track/7AbqgE05nFl9qY4FRUiq2p", streams: 186053565 },
                    { title: "Too Sad to Dance", url: "https://open.spotify.com/track/3bNNvJA7hsGw0wSpGkfOBm", streams: 180983798 },
                    { title: "i wonder... (with Jung Kook of BTS)", url: "https://open.spotify.com/track/3ajU531gR5fW71wqsw4tFX", streams: 150305310 },
                    { title: "Standing Next to You - USHER Remix", url: "https://open.spotify.com/track/0VPFT123HKoQ2J6ipeDcI1", streams: 119319882 }
                ],
                "300-million": [
                    { title: "Please Don't Change (feat. DJ Snake)", url: "https://open.spotify.com/track/0k0GtcnyQLMiXrdEDbLXmJ", streams: 256557794 },
                    { title: "Never Let Go", url: "https://open.spotify.com/track/2nRMW95dnOILirpjbksLTs", streams: 249640377 },
                    { title: "Hate You", url: "https://open.spotify.com/track/5ONOlTiqymhzwcFjqcIT6E", streams: 240530945 },
                    { title: "Closer to You (feat. Major Lazer)", url: "https://open.spotify.com/track/06Qo2fYR2KS1F7bL338iVT", streams: 213323326 },
                    { title: "Somebody", url: "https://open.spotify.com/track/5KfJvZ0PZzRdwFRaTUDAA7", streams: 212275277 },
                    { title: "TOO MUCH", url: "https://open.spotify.com/track/0rKWJnmo6Q0ovoPOLoLm0t", streams: 207556964 }
                ],
                "400-million": [
                    { title: "Yes or No", url: "https://open.spotify.com/track/2gkVEnpahpE3bQuvGuCpAV", streams: 396112665 }
                ],
                "500-million": [
                    { title: "Stay Alive (Prod. SUGA of BTS)", url: "https://open.spotify.com/track/7CAdT0HdiQNlt1C7xk2hep", streams: 401287684 }
                ],
                "600-million": [
                    { title: "Dreamers", url: "https://open.spotify.com/track/0jY618wuln0b5b8sCxFgjk", streams: 564659807 },
                    { title: "Still With You", url: "https://open.spotify.com/track/0eFMbKCRw8KByXyWBw8WO7", streams: 518709799 }
                ],
                "1-5-billion": [
                    { title: "3D (feat. Jack Harlow)", url: "https://open.spotify.com/track/01qFKNWq73UfEslI0GvumE", streams: 1223606846 },
                    { title: "Left and Right (Feat. Jung Kook of BTS)", url: "https://open.spotify.com/track/5Odq8ohlgIbQKMZivbWkEo", streams: 1220464938 }
                ],
                "2-billion": [
                    { title: "Standing Next to You", url: "https://open.spotify.com/track/2KslE17cAJNHTsI2MI0jb2", streams: 1543860120 }
                ]
            }
        }
    }
};

const parameters = new URLSearchParams(window.location.search);
const platform = parameters.get("platform");
const goal = parameters.get("goal");
const memberId = parameters.get("member");
const platformLabel = platformLabels[platform];
const goalLabel = goalLabels[goal];
const page = document.body.dataset.streamingPage;

if (!platformLabel || !goalLabel) {
    const error = document.getElementById("goal-error");
    error.hidden = false;
    error.textContent = "This streaming platform or milestone is not available.";
    document.querySelectorAll("[data-goal-type]").forEach((link) => {
        link.hidden = true;
    });
    document.querySelectorAll(".milestone-detail, .member-grid").forEach((section) => {
        section.hidden = true;
    });
} else if (page === "member" && !members[memberId]) {
    const error = document.getElementById("goal-error");
    error.hidden = false;
    error.textContent = "This BTS member is not available.";
    document.getElementById("member-content").hidden = true;
} else {
    const query = `?platform=${encodeURIComponent(platform)}&goal=${encodeURIComponent(goal)}`;
    const heading = document.getElementById("goal-heading");
    const description = document.getElementById("goal-description");
    const backLink = document.getElementById("milestones-back");

    if (page === "options") {
        heading.textContent = `${platformLabel} ${goalLabel} Streaming Goals`;
        description.textContent = "Choose Seven Souls or Solo Frequency for this milestone.";
        document.querySelectorAll("[data-goal-type]").forEach((link) => {
            const page = link.dataset.goalType === "solo-frequency"
                ? "solo-members"
                : link.dataset.goalType;
            link.href = `${page}.html${query}`;
        });
        backLink.href = `${platform}/index.html`;
    } else if (page === "category") {
        const category = document.body.dataset.goalType === "seven-souls"
            ? "Seven Souls"
            : "Solo Frequency";
        heading.textContent = `${category} — ${platformLabel} ${goalLabel}`;
        description.textContent = `${category} songs and playlists for the ${platformLabel} ${goalLabel} milestone.`;
        backLink.href = `options.html${query}`;

        if (category === "Seven Souls") {
            const streamingMilestones = document.querySelectorAll("[data-spotify-goal], [data-youtube-goal]");
            const placeholder = document.getElementById("seven-souls-placeholder");
            let showStreamingMilestones = false;

            streamingMilestones.forEach((section) => {
                const sectionGoal = platform === "spotify"
                    ? section.dataset.spotifyGoal
                    : section.dataset.youtubeGoal;
                const isSelectedMilestone = sectionGoal === goal;
                section.hidden = !isSelectedMilestone;
                showStreamingMilestones ||= isSelectedMilestone;
            });
            if (placeholder) {
                placeholder.hidden = showStreamingMilestones;
            }
        } else if (category === "Solo Frequency") {
            const content = document.getElementById("solo-frequency-content");
            content.innerHTML = `
                <h2>Choose a BTS member</h2>
                <p class="streaming-status">Browse solo songs and playlists by member.</p>
                <a class="streaming-card-link" href="solo-members.html${query}">Choose a member <span aria-hidden="true">→</span></a>
            `;
        }
    } else if (page === "members") {
        heading.textContent = "Choose a BTS Member";
        description.textContent = `Choose a member to explore solo ${platformLabel} songs near ${goalLabel}.`;
        backLink.href = `options.html${query}`;

        document.querySelectorAll("[data-member]").forEach((link) => {
            const id = link.dataset.member;
            link.href = `solo-member.html?member=${encodeURIComponent(id)}&platform=${encodeURIComponent(platform)}&goal=${encodeURIComponent(goal)}`;
        });
    } else if (page === "member") {
        const member = members[memberId];
        const milestoneImage = document.getElementById("member-milestone-image");
        const songs = document.getElementById("member-songs");
        const songsStatus = document.getElementById("member-songs-status");
        const songsSource = document.getElementById("member-songs-source");
        const playlistSection = document.getElementById("member-playlist-section");
        const playlistHeading = playlistSection.querySelector("h2");
        const playlist = document.getElementById("member-playlist");
        const playlistStatus = document.getElementById("playlist-status");
        const playlistUrl = member.playlists?.[platform] || "";
        const milestoneTargets = {
            "100-million": 100000000,
            "200-million": 200000000,
            "300-million": 300000000,
            "400-million": 400000000,
            "500-million": 500000000,
            "600-million": 600000000,
            "700-million": 700000000,
            "800-million": 800000000,
            "900-million": 900000000,
            "1-billion": 1000000000,
            "1-5-billion": 1500000000,
            "2-billion": 2000000000
        };
        const milestoneTargetLabels = {
            "100-million": "100M",
            "200-million": "200M",
            "300-million": "300M",
            "400-million": "400M",
            "500-million": "500M",
            "600-million": "600M",
            "700-million": "700M",
            "800-million": "800M",
            "900-million": "900M",
            "1-billion": "1B",
            "1-5-billion": "1.5B",
            "2-billion": "2B"
        };
        const milestoneLowerBounds = {
            "100-million": "50M",
            "200-million": "100M",
            "300-million": "200M",
            "400-million": "300M",
            "500-million": "400M",
            "600-million": "500M",
            "700-million": "600M",
            "800-million": "700M",
            "900-million": "800M",
            "1-billion": "900M",
            "1-5-billion": "1B",
            "2-billion": "1.5B"
        };
        const milestoneTarget = milestoneTargets[goal];
        const isSpotifyMilestonePage = (memberId === "jin" || memberId === "suga" || memberId === "jhope" || memberId === "rm" || memberId === "jimin" || memberId === "v" || memberId === "jungkook")
            && platform === "spotify"
            && (goal === "1-million" || milestoneTarget);

        heading.textContent = `${member.name} — ${platformLabel} Songs`;
        description.textContent = platform === "youtube" && youtubeMemberDescriptions[memberId]
            ? goal === "1-million"
                ? `${youtubeMemberDescriptions[memberId]} within 1 million views of their next milestone.`
                : `${youtubeMemberDescriptions[memberId]} nearing ${goalLabels[goal]} views.`
            : `${member.name}'s solo songs and playlist for the ${platformLabel} ${goalLabel} milestone.`;
        backLink.href = `solo-members.html${query}`;

        const memberMilestoneImage = (memberId === "jin" || memberId === "suga") && platform === "youtube"
            ? ""
            : (platform === "youtube" || platform === "spotify")
                ? memberId === "jin"
                ? jinMilestoneImages[goal]
                : memberId === "suga"
                    ? sugaMilestoneImages[goal]
                    : ""
            : "";
        if (memberMilestoneImage) {
            milestoneImage.src = `../assets/${memberMilestoneImage}`;
            milestoneImage.alt = `${member.name} — ${goalLabels[goal]} streaming milestone`;
            milestoneImage.hidden = false;
        } else {
            milestoneImage.removeAttribute("src");
            milestoneImage.alt = "";
            milestoneImage.hidden = true;
        }

        const milestoneSongs = member.milestoneSongs?.[platform]?.[goal];
        if (isSpotifyMilestonePage) {
            songs.replaceChildren();
            if (memberId === "jin" && goal === "1-million") {
                const item = document.createElement("li");
                const link = document.createElement("a");
                const streamCount = document.createElement("span");
                const remaining = document.createElement("code");

                link.href = "https://open.spotify.com/track/2P6PLe4ojigLUp4CWMkcAI";
                link.target = "_blank";
                link.rel = "noopener noreferrer";
                link.textContent = "Tonight";
                streamCount.className = "song-stream-count";
                streamCount.textContent = "83,321,392 streams";
                remaining.textContent = "16,678,608 more to 100M";
                item.append(link, streamCount, remaining);
                songs.replaceChildren(item);
                songsStatus.hidden = true;
                description.textContent = "Jin's Spotify songs within 1 million streams of their next milestone.";
            } else if (milestoneSongs?.length) {
                songs.replaceChildren(...milestoneSongs.map((song) => {
                    const item = document.createElement("li");
                    const link = document.createElement("a");
                    const streamCount = document.createElement("span");
                    const remaining = document.createElement("code");

                    link.href = song.url;
                    link.target = "_blank";
                    link.rel = "noopener noreferrer";
                    link.textContent = song.title;
                    streamCount.className = "song-stream-count";
                    streamCount.textContent = `${song.streams.toLocaleString()} streams`;
                    const target = song.target || milestoneTarget;
                    const targetLabel = goal === "1-million"
                        ? target >= 1000000000
                            ? `${target / 1000000000}B`
                            : `${target / 1000000}M`
                        : milestoneTargetLabels[goal];
                    remaining.textContent = `${(target - song.streams).toLocaleString()} more to ${targetLabel}`;

                    item.append(link, streamCount, remaining);
                    return item;
                }));
                songsStatus.hidden = true;
                description.textContent = memberId === "jin"
                    ? `Jin's solo Spotify songs for the ${goalLabels[goal]} milestone.`
                    : memberId === "suga"
                        ? `SUGA-credited Spotify tracks, including features, for the ${goalLabels[goal]} milestone.`
                        : memberId === "jhope"
                            ? `j-hope's Spotify tracks for the ${goalLabels[goal]} milestone.`
                            : memberId === "rm"
                                ? `RM's Spotify tracks for the ${goalLabels[goal]} milestone.`
                                : memberId === "jimin"
                                    ? `Jimin's Spotify tracks for the ${goalLabels[goal]} milestone.`
                                    : memberId === "v"
                                        ? `Taehyung's Spotify tracks for the ${goalLabels[goal]} milestone.`
                                        : `Jungkook's Spotify tracks for the ${goalLabels[goal]} milestone.`;
            } else {
                songsStatus.textContent = memberId === "jin"
                    ? `No Jin solo Spotify songs are listed in the ${milestoneLowerBounds[goal]}–${milestoneTargetLabels[goal]} range.`
                    : memberId === "suga"
                        ? `No SUGA-credited Spotify tracks are listed in the ${milestoneLowerBounds[goal]}–${milestoneTargetLabels[goal]} range.`
                        : memberId === "jhope"
                            ? `No j-hope Spotify tracks are listed in the ${milestoneLowerBounds[goal]}–${milestoneTargetLabels[goal]} range.`
                            : memberId === "rm"
                                ? `No RM Spotify tracks are listed in the ${milestoneLowerBounds[goal]}–${milestoneTargetLabels[goal]} range.`
                                : memberId === "jimin"
                                    ? `No Jimin Spotify tracks are listed in the ${milestoneLowerBounds[goal]}–${milestoneTargetLabels[goal]} range.`
                                    : memberId === "v"
                                        ? `No Taehyung Spotify tracks are listed in the ${milestoneLowerBounds[goal]}–${milestoneTargetLabels[goal]} range.`
                                        : `No Jungkook Spotify tracks are listed in the ${milestoneLowerBounds[goal]}–${milestoneTargetLabels[goal]} range.`;
                songsStatus.hidden = false;
                description.textContent = memberId === "jin"
                    ? `Jin's solo Spotify songs for the ${goalLabels[goal]} milestone.`
                    : memberId === "suga"
                        ? `SUGA-credited Spotify tracks, including features, for the ${goalLabels[goal]} milestone.`
                        : memberId === "jhope"
                            ? `j-hope's Spotify tracks for the ${goalLabels[goal]} milestone.`
                            : memberId === "rm"
                                ? `RM's Spotify tracks for the ${goalLabels[goal]} milestone.`
                                : memberId === "jimin"
                                    ? `Jimin's Spotify tracks for the ${goalLabels[goal]} milestone.`
                                    : memberId === "v"
                                        ? `Taehyung's Spotify tracks for the ${goalLabels[goal]} milestone.`
                                        : `Jungkook's Spotify tracks for the ${goalLabels[goal]} milestone.`;
            }
            songsSource.hidden = true;
            playlistSection.hidden = true;
        } else if (milestoneSongs?.length) {
            songs.replaceChildren(...milestoneSongs.map((song) => {
                const item = document.createElement("li");
                const link = document.createElement("a");
                const streamCount = document.createElement("span");
                const remaining = document.createElement("code");

                link.href = song.url;
                link.target = "_blank";
                link.rel = "noopener noreferrer";
                link.textContent = song.title;
                streamCount.className = "song-stream-count";
                streamCount.textContent = `${song.streams.toLocaleString()} ${platform === "youtube" ? "views" : "streams"}`;
                const target = song.target || milestoneTarget;
                const targetLabel = goal === "1-million"
                    ? target >= 1000000000
                        ? `${target / 1000000000}B`
                        : `${target / 1000000}M`
                    : target === 200000000
                        ? "200M"
                        : milestoneTargetLabels[goal] || goalLabels[goal];
                remaining.textContent = `${(target - song.streams).toLocaleString()} more to ${targetLabel}`;

                item.append(link, streamCount, remaining);
                return item;
            }));
            songsStatus.hidden = true;
            songsSource.hidden = true;
            playlistSection.hidden = true;
        } else if (youtubeMemberDescriptions[memberId] && platform === "youtube" && (goal === "1-million" || milestoneTarget)) {
            songs.replaceChildren();
            songsStatus.textContent = goal === "1-million"
                ? `No ${youtubeMemberDescriptions[memberId]} are currently within 1 million views of their next milestone.`
                : `No ${youtubeMemberDescriptions[memberId]} are currently in the ${milestoneLowerBounds[goal]}–${milestoneTargetLabels[goal]} view range.`;
            songsStatus.hidden = false;
            songsSource.hidden = true;
            playlistSection.hidden = true;
        } else if (member.songs?.length) {
            songs.replaceChildren(...member.songs.map((song) => {
                const item = document.createElement("li");
                item.textContent = song;
                return item;
            }));
            songsStatus.hidden = true;
        }

        if (playlistUrl) {
            const parsedUrl = new URL(playlistUrl, window.location.href);
            if (parsedUrl.protocol === "https:") {
                playlist.href = parsedUrl.href;
                playlist.hidden = false;
                playlistStatus.hidden = true;
            }
        }
    }
}
