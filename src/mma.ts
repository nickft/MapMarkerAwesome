
const mapMarkerAwesome = (function () {

  interface FontData {
    codes: { [key: string]: string };
    paths: { [key: string]: [number, string] };
  }

  type Template = string[];
  type SVG = string;

  interface TemplateValues {
    [key: string]: string | number;
  }

  interface RGBA extends TemplateValues {
    r: number;
    g: number;
    b: number;
    a?: number;
  }
  
  const fontAwesome: FontData = {
    "codes": {
      "glass": "\uf000",
      "music": "\uf001",
      "search": "\uf002",
      "envelope-o": "\uf003",
      "heart": "\uf004",
      "star": "\uf005",
      "star-o": "\uf006",
      "user": "\uf007",
      "film": "\uf008",
      "th-large": "\uf009",
      "th": "\uf00a",
      "th-list": "\uf00b",
      "check": "\uf00c",
      "times": "\uf00d",
      "search-plus": "\uf00e",
      "search-minus": "\uf010",
      "power-off": "\uf011",
      "signal": "\uf012",
      "cog": "\uf013",
      "trash-o": "\uf014",
      "home": "\uf015",
      "file-o": "\uf016",
      "clock-o": "\uf017",
      "road": "\uf018",
      "download": "\uf019",
      "arrow-circle-o-down": "\uf01a",
      "arrow-circle-o-up": "\uf01b",
      "inbox": "\uf01c",
      "play-circle-o": "\uf01d",
      "repeat": "\uf01e",
      "refresh": "\uf021",
      "list-alt": "\uf022",
      "lock": "\uf023",
      "flag": "\uf024",
      "headphones": "\uf025",
      "volume-off": "\uf026",
      "volume-down": "\uf027",
      "volume-up": "\uf028",
      "qrcode": "\uf029",
      "barcode": "\uf02a",
      "tag": "\uf02b",
      "tags": "\uf02c",
      "book": "\uf02d",
      "bookmark": "\uf02e",
      "print": "\uf02f",
      "camera": "\uf030",
      "font": "\uf031",
      "bold": "\uf032",
      "italic": "\uf033",
      "text-height": "\uf034",
      "text-width": "\uf035",
      "align-left": "\uf036",
      "align-center": "\uf037",
      "align-right": "\uf038",
      "align-justify": "\uf039",
      "list": "\uf03a",
      "outdent": "\uf03b",
      "indent": "\uf03c",
      "video-camera": "\uf03d",
      "picture-o": "\uf03e",
      "pencil": "\uf040",
      "map-marker": "\uf041",
      "adjust": "\uf042",
      "tint": "\uf043",
      "pencil-square-o": "\uf044",
      "share-square-o": "\uf045",
      "check-square-o": "\uf046",
      "arrows": "\uf047",
      "step-backward": "\uf048",
      "fast-backward": "\uf049",
      "backward": "\uf04a",
      "play": "\uf04b",
      "pause": "\uf04c",
      "stop": "\uf04d",
      "forward": "\uf04e",
      "fast-forward": "\uf050",
      "step-forward": "\uf051",
      "eject": "\uf052",
      "chevron-left": "\uf053",
      "chevron-right": "\uf054",
      "plus-circle": "\uf055",
      "minus-circle": "\uf056",
      "times-circle": "\uf057",
      "check-circle": "\uf058",
      "question-circle": "\uf059",
      "info-circle": "\uf05a",
      "crosshairs": "\uf05b",
      "times-circle-o": "\uf05c",
      "check-circle-o": "\uf05d",
      "ban": "\uf05e",
      "arrow-left": "\uf060",
      "arrow-right": "\uf061",
      "arrow-up": "\uf062",
      "arrow-down": "\uf063",
      "share": "\uf064",
      "expand": "\uf065",
      "compress": "\uf066",
      "plus": "\uf067",
      "minus": "\uf068",
      "asterisk": "\uf069",
      "exclamation-circle": "\uf06a",
      "gift": "\uf06b",
      "leaf": "\uf06c",
      "fire": "\uf06d",
      "eye": "\uf06e",
      "eye-slash": "\uf070",
      "exclamation-triangle": "\uf071",
      "plane": "\uf072",
      "calendar": "\uf073",
      "random": "\uf074",
      "comment": "\uf075",
      "magnet": "\uf076",
      "chevron-up": "\uf077",
      "chevron-down": "\uf078",
      "retweet": "\uf079",
      "shopping-cart": "\uf07a",
      "folder": "\uf07b",
      "folder-open": "\uf07c",
      "arrows-v": "\uf07d",
      "arrows-h": "\uf07e",
      "bar-chart": "\uf080",
      "twitter-square": "\uf081",
      "facebook-square": "\uf082",
      "camera-retro": "\uf083",
      "key": "\uf084",
      "cogs": "\uf085",
      "comments": "\uf086",
      "thumbs-o-up": "\uf087",
      "thumbs-o-down": "\uf088",
      "star-half": "\uf089",
      "heart-o": "\uf08a",
      "sign-out": "\uf08b",
      "linkedin-square": "\uf08c",
      "thumb-tack": "\uf08d",
      "external-link": "\uf08e",
      "sign-in": "\uf090",
      "trophy": "\uf091",
      "github-square": "\uf092",
      "upload": "\uf093",
      "lemon-o": "\uf094",
      "phone": "\uf095",
      "square-o": "\uf096",
      "bookmark-o": "\uf097",
      "phone-square": "\uf098",
      "twitter": "\uf099",
      "facebook": "\uf09a",
      "github": "\uf09b",
      "unlock": "\uf09c",
      "credit-card": "\uf09d",
      "rss": "\uf09e",
      "hdd-o": "\uf0a0",
      "bullhorn": "\uf0a1",
      "bell": "\uf0f3",
      "certificate": "\uf0a3",
      "hand-o-right": "\uf0a4",
      "hand-o-left": "\uf0a5",
      "hand-o-up": "\uf0a6",
      "hand-o-down": "\uf0a7",
      "arrow-circle-left": "\uf0a8",
      "arrow-circle-right": "\uf0a9",
      "arrow-circle-up": "\uf0aa",
      "arrow-circle-down": "\uf0ab",
      "globe": "\uf0ac",
      "wrench": "\uf0ad",
      "tasks": "\uf0ae",
      "filter": "\uf0b0",
      "briefcase": "\uf0b1",
      "arrows-alt": "\uf0b2",
      "users": "\uf0c0",
      "link": "\uf0c1",
      "cloud": "\uf0c2",
      "flask": "\uf0c3",
      "scissors": "\uf0c4",
      "files-o": "\uf0c5",
      "paperclip": "\uf0c6",
      "floppy-o": "\uf0c7",
      "square": "\uf0c8",
      "bars": "\uf0c9",
      "list-ul": "\uf0ca",
      "list-ol": "\uf0cb",
      "strikethrough": "\uf0cc",
      "underline": "\uf0cd",
      "table": "\uf0ce",
      "magic": "\uf0d0",
      "truck": "\uf0d1",
      "pinterest": "\uf0d2",
      "pinterest-square": "\uf0d3",
      "google-plus-square": "\uf0d4",
      "google-plus": "\uf0d5",
      "money": "\uf0d6",
      "caret-down": "\uf0d7",
      "caret-up": "\uf0d8",
      "caret-left": "\uf0d9",
      "caret-right": "\uf0da",
      "columns": "\uf0db",
      "sort": "\uf0dc",
      "sort-desc": "\uf0dd",
      "sort-asc": "\uf0de",
      "envelope": "\uf0e0",
      "linkedin": "\uf0e1",
      "undo": "\uf0e2",
      "gavel": "\uf0e3",
      "tachometer": "\uf0e4",
      "comment-o": "\uf0e5",
      "comments-o": "\uf0e6",
      "bolt": "\uf0e7",
      "sitemap": "\uf0e8",
      "umbrella": "\uf0e9",
      "clipboard": "\uf0ea",
      "lightbulb-o": "\uf0eb",
      "exchange": "\uf0ec",
      "cloud-download": "\uf0ed",
      "cloud-upload": "\uf0ee",
      "user-md": "\uf0f0",
      "stethoscope": "\uf0f1",
      "suitcase": "\uf0f2",
      "bell-o": "\uf0a2",
      "coffee": "\uf0f4",
      "cutlery": "\uf0f5",
      "file-text-o": "\uf0f6",
      "building-o": "\uf0f7",
      "hospital-o": "\uf0f8",
      "ambulance": "\uf0f9",
      "medkit": "\uf0fa",
      "fighter-jet": "\uf0fb",
      "beer": "\uf0fc",
      "h-square": "\uf0fd",
      "plus-square": "\uf0fe",
      "angle-double-left": "\uf100",
      "angle-double-right": "\uf101",
      "angle-double-up": "\uf102",
      "angle-double-down": "\uf103",
      "angle-left": "\uf104",
      "angle-right": "\uf105",
      "angle-up": "\uf106",
      "angle-down": "\uf107",
      "desktop": "\uf108",
      "laptop": "\uf109",
      "tablet": "\uf10a",
      "mobile": "\uf10b",
      "circle-o": "\uf10c",
      "quote-left": "\uf10d",
      "quote-right": "\uf10e",
      "spinner": "\uf110",
      "circle": "\uf111",
      "reply": "\uf112",
      "github-alt": "\uf113",
      "folder-o": "\uf114",
      "folder-open-o": "\uf115",
      "smile-o": "\uf118",
      "frown-o": "\uf119",
      "meh-o": "\uf11a",
      "gamepad": "\uf11b",
      "keyboard-o": "\uf11c",
      "flag-o": "\uf11d",
      "flag-checkered": "\uf11e",
      "terminal": "\uf120",
      "code": "\uf121",
      "reply-all": "\uf122",
      "star-half-o": "\uf123",
      "location-arrow": "\uf124",
      "crop": "\uf125",
      "code-fork": "\uf126",
      "chain-broken": "\uf127",
      "question": "\uf128",
      "info": "\uf129",
      "exclamation": "\uf12a",
      "superscript": "\uf12b",
      "subscript": "\uf12c",
      "eraser": "\uf12d",
      "puzzle-piece": "\uf12e",
      "microphone": "\uf130",
      "microphone-slash": "\uf131",
      "shield": "\uf132",
      "calendar-o": "\uf133",
      "fire-extinguisher": "\uf134",
      "rocket": "\uf135",
      "maxcdn": "\uf136",
      "chevron-circle-left": "\uf137",
      "chevron-circle-right": "\uf138",
      "chevron-circle-up": "\uf139",
      "chevron-circle-down": "\uf13a",
      "html5": "\uf13b",
      "css3": "\uf13c",
      "anchor": "\uf13d",
      "unlock-alt": "\uf13e",
      "bullseye": "\uf140",
      "ellipsis-h": "\uf141",
      "ellipsis-v": "\uf142",
      "rss-square": "\uf143",
      "play-circle": "\uf144",
      "ticket": "\uf145",
      "minus-square": "\uf146",
      "minus-square-o": "\uf147",
      "level-up": "\uf148",
      "level-down": "\uf149",
      "check-square": "\uf14a",
      "pencil-square": "\uf14b",
      "external-link-square": "\uf14c",
      "share-square": "\uf14d",
      "compass": "\uf14e",
      "caret-square-o-down": "\uf150",
      "caret-square-o-up": "\uf151",
      "caret-square-o-right": "\uf152",
      "eur": "\uf153",
      "gbp": "\uf154",
      "usd": "\uf155",
      "inr": "\uf156",
      "jpy": "\uf157",
      "rub": "\uf158",
      "krw": "\uf159",
      "btc": "\uf15a",
      "file": "\uf15b",
      "file-text": "\uf15c",
      "sort-alpha-asc": "\uf15d",
      "sort-alpha-desc": "\uf15e",
      "sort-amount-asc": "\uf160",
      "sort-amount-desc": "\uf161",
      "sort-numeric-asc": "\uf162",
      "sort-numeric-desc": "\uf163",
      "thumbs-up": "\uf164",
      "thumbs-down": "\uf165",
      "youtube-square": "\uf166",
      "youtube": "\uf167",
      "xing": "\uf168",
      "xing-square": "\uf169",
      "youtube-play": "\uf16a",
      "dropbox": "\uf16b",
      "stack-overflow": "\uf16c",
      "instagram": "\uf16d",
      "flickr": "\uf16e",
      "adn": "\uf170",
      "bitbucket": "\uf171",
      "bitbucket-square": "\uf172",
      "tumblr": "\uf173",
      "tumblr-square": "\uf174",
      "long-arrow-down": "\uf175",
      "long-arrow-up": "\uf176",
      "long-arrow-left": "\uf177",
      "long-arrow-right": "\uf178",
      "apple": "\uf179",
      "windows": "\uf17a",
      "android": "\uf17b",
      "linux": "\uf17c",
      "dribbble": "\uf17d",
      "skype": "\uf17e",
      "foursquare": "\uf180",
      "trello": "\uf181",
      "female": "\uf182",
      "male": "\uf183",
      "gratipay": "\uf184",
      "sun-o": "\uf185",
      "moon-o": "\uf186",
      "archive": "\uf187",
      "bug": "\uf188",
      "vk": "\uf189",
      "weibo": "\uf18a",
      "renren": "\uf18b",
      "pagelines": "\uf18c",
      "stack-exchange": "\uf18d",
      "arrow-circle-o-right": "\uf18e",
      "arrow-circle-o-left": "\uf190",
      "caret-square-o-left": "\uf191",
      "dot-circle-o": "\uf192",
      "wheelchair": "\uf193",
      "vimeo-square": "\uf194",
      "try": "\uf195",
      "plus-square-o": "\uf196",
      "space-shuttle": "\uf197",
      "slack": "\uf198",
      "envelope-square": "\uf199",
      "wordpress": "\uf19a",
      "openid": "\uf19b",
      "university": "\uf19c",
      "graduation-cap": "\uf19d",
      "yahoo": "\uf19e",
      "google": "\uf1a0",
      "reddit": "\uf1a1",
      "reddit-square": "\uf1a2",
      "stumbleupon-circle": "\uf1a3",
      "stumbleupon": "\uf1a4",
      "delicious": "\uf1a5",
      "digg": "\uf1a6",
      "pied-piper-pp": "\uf1a7",
      "pied-piper-alt": "\uf1a8",
      "drupal": "\uf1a9",
      "joomla": "\uf1aa",
      "language": "\uf1ab",
      "fax": "\uf1ac",
      "building": "\uf1ad",
      "child": "\uf1ae",
      "paw": "\uf1b0",
      "spoon": "\uf1b1",
      "cube": "\uf1b2",
      "cubes": "\uf1b3",
      "behance": "\uf1b4",
      "behance-square": "\uf1b5",
      "steam": "\uf1b6",
      "steam-square": "\uf1b7",
      "recycle": "\uf1b8",
      "car": "\uf1b9",
      "taxi": "\uf1ba",
      "tree": "\uf1bb",
      "spotify": "\uf1bc",
      "deviantart": "\uf1bd",
      "soundcloud": "\uf1be",
      "database": "\uf1c0",
      "file-pdf-o": "\uf1c1",
      "file-word-o": "\uf1c2",
      "file-excel-o": "\uf1c3",
      "file-powerpoint-o": "\uf1c4",
      "file-image-o": "\uf1c5",
      "file-archive-o": "\uf1c6",
      "file-audio-o": "\uf1c7",
      "file-video-o": "\uf1c8",
      "file-code-o": "\uf1c9",
      "vine": "\uf1ca",
      "codepen": "\uf1cb",
      "jsfiddle": "\uf1cc",
      "life-ring": "\uf1cd",
      "circle-o-notch": "\uf1ce",
      "rebel": "\uf1d0",
      "empire": "\uf1d1",
      "git-square": "\uf1d2",
      "git": "\uf1d3",
      "hacker-news": "\uf1d4",
      "tencent-weibo": "\uf1d5",
      "qq": "\uf1d6",
      "weixin": "\uf1d7",
      "paper-plane": "\uf1d8",
      "paper-plane-o": "\uf1d9",
      "history": "\uf1da",
      "circle-thin": "\uf1db",
      "header": "\uf1dc",
      "paragraph": "\uf1dd",
      "sliders": "\uf1de",
      "share-alt": "\uf1e0",
      "share-alt-square": "\uf1e1",
      "bomb": "\uf1e2",
      "futbol-o": "\uf1e3",
      "tty": "\uf1e4",
      "binoculars": "\uf1e5",
      "plug": "\uf1e6",
      "slideshare": "\uf1e7",
      "twitch": "\uf1e8",
      "yelp": "\uf1e9",
      "newspaper-o": "\uf1ea",
      "wifi": "\uf1eb",
      "calculator": "\uf1ec",
      "paypal": "\uf1ed",
      "google-wallet": "\uf1ee",
      "cc-visa": "\uf1f0",
      "cc-mastercard": "\uf1f1",
      "cc-discover": "\uf1f2",
      "cc-amex": "\uf1f3",
      "cc-paypal": "\uf1f4",
      "cc-stripe": "\uf1f5",
      "bell-slash": "\uf1f6",
      "bell-slash-o": "\uf1f7",
      "trash": "\uf1f8",
      "copyright": "\uf1f9",
      "at": "\uf1fa",
      "eyedropper": "\uf1fb",
      "paint-brush": "\uf1fc",
      "birthday-cake": "\uf1fd",
      "area-chart": "\uf1fe",
      "pie-chart": "\uf200",
      "line-chart": "\uf201",
      "lastfm": "\uf202",
      "lastfm-square": "\uf203",
      "toggle-off": "\uf204",
      "toggle-on": "\uf205",
      "bicycle": "\uf206",
      "bus": "\uf207",
      "ioxhost": "\uf208",
      "angellist": "\uf209",
      "cc": "\uf20a",
      "ils": "\uf20b",
      "meanpath": "\uf20c",
      "buysellads": "\uf20d",
      "connectdevelop": "\uf20e",
      "dashcube": "\uf210",
      "forumbee": "\uf211",
      "leanpub": "\uf212",
      "sellsy": "\uf213",
      "shirtsinbulk": "\uf214",
      "simplybuilt": "\uf215",
      "skyatlas": "\uf216",
      "cart-plus": "\uf217",
      "cart-arrow-down": "\uf218",
      "diamond": "\uf219",
      "ship": "\uf21a",
      "user-secret": "\uf21b",
      "motorcycle": "\uf21c",
      "street-view": "\uf21d",
      "heartbeat": "\uf21e",
      "venus": "\uf221",
      "mars": "\uf222",
      "mercury": "\uf223",
      "transgender": "\uf224",
      "transgender-alt": "\uf225",
      "venus-double": "\uf226",
      "mars-double": "\uf227",
      "venus-mars": "\uf228",
      "mars-stroke": "\uf229",
      "mars-stroke-v": "\uf22a",
      "mars-stroke-h": "\uf22b",
      "neuter": "\uf22c",
      "genderless": "\uf22d",
      "facebook-official": "\uf230",
      "pinterest-p": "\uf231",
      "whatsapp": "\uf232",
      "server": "\uf233",
      "user-plus": "\uf234",
      "user-times": "\uf235",
      "bed": "\uf236",
      "viacoin": "\uf237",
      "train": "\uf238",
      "subway": "\uf239",
      "medium": "\uf23a",
      "y-combinator": "\uf23b",
      "optin-monster": "\uf23c",
      "opencart": "\uf23d",
      "expeditedssl": "\uf23e",
      "battery-full": "\uf240",
      "battery-three-quarters": "\uf241",
      "battery-half": "\uf242",
      "battery-quarter": "\uf243",
      "battery-empty": "\uf244",
      "mouse-pointer": "\uf245",
      "i-cursor": "\uf246",
      "object-group": "\uf247",
      "object-ungroup": "\uf248",
      "sticky-note": "\uf249",
      "sticky-note-o": "\uf24a",
      "cc-jcb": "\uf24b",
      "cc-diners-club": "\uf24c",
      "clone": "\uf24d",
      "balance-scale": "\uf24e",
      "hourglass-o": "\uf250",
      "hourglass-start": "\uf251",
      "hourglass-half": "\uf252",
      "hourglass-end": "\uf253",
      "hourglass": "\uf254",
      "hand-rock-o": "\uf255",
      "hand-paper-o": "\uf256",
      "hand-scissors-o": "\uf257",
      "hand-lizard-o": "\uf258",
      "hand-spock-o": "\uf259",
      "hand-pointer-o": "\uf25a",
      "hand-peace-o": "\uf25b",
      "trademark": "\uf25c",
      "registered": "\uf25d",
      "creative-commons": "\uf25e",
      "gg": "\uf260",
      "gg-circle": "\uf261",
      "tripadvisor": "\uf262",
      "odnoklassniki": "\uf263",
      "odnoklassniki-square": "\uf264",
      "get-pocket": "\uf265",
      "wikipedia-w": "\uf266",
      "safari": "\uf267",
      "chrome": "\uf268",
      "firefox": "\uf269",
      "opera": "\uf26a",
      "internet-explorer": "\uf26b",
      "television": "\uf26c",
      "contao": "\uf26d",
      "500px": "\uf26e",
      "amazon": "\uf270",
      "calendar-plus-o": "\uf271",
      "calendar-minus-o": "\uf272",
      "calendar-times-o": "\uf273",
      "calendar-check-o": "\uf274",
      "industry": "\uf275",
      "map-pin": "\uf276",
      "map-signs": "\uf277",
      "map-o": "\uf278",
      "map": "\uf279",
      "commenting": "\uf27a",
      "commenting-o": "\uf27b",
      "houzz": "\uf27c",
      "vimeo": "\uf27d",
      "black-tie": "\uf27e",
      "fonticons": "\uf280",
      "reddit-alien": "\uf281",
      "edge": "\uf282",
      "credit-card-alt": "\uf283",
      "codiepie": "\uf284",
      "modx": "\uf285",
      "fort-awesome": "\uf286",
      "usb": "\uf287",
      "product-hunt": "\uf288",
      "mixcloud": "\uf289",
      "scribd": "\uf28a",
      "pause-circle": "\uf28b",
      "pause-circle-o": "\uf28c",
      "stop-circle": "\uf28d",
      "stop-circle-o": "\uf28e",
      "shopping-bag": "\uf290",
      "shopping-basket": "\uf291",
      "hashtag": "\uf292",
      "bluetooth": "\uf293",
      "bluetooth-b": "\uf294",
      "percent": "\uf295",
      "gitlab": "\uf296",
      "wpbeginner": "\uf297",
      "wpforms": "\uf298",
      "envira": "\uf299",
      "universal-access": "\uf29a",
      "wheelchair-alt": "\uf29b",
      "question-circle-o": "\uf29c",
      "blind": "\uf29d",
      "audio-description": "\uf29e",
      "volume-control-phone": "\uf2a0",
      "braille": "\uf2a1",
      "assistive-listening-systems": "\uf2a2",
      "american-sign-language-interpreting": "\uf2a3",
      "deaf": "\uf2a4",
      "glide": "\uf2a5",
      "glide-g": "\uf2a6",
      "sign-language": "\uf2a7",
      "low-vision": "\uf2a8",
      "viadeo": "\uf2a9",
      "viadeo-square": "\uf2aa",
      "snapchat": "\uf2ab",
      "snapchat-ghost": "\uf2ac",
      "snapchat-square": "\uf2ad",
      "pied-piper": "\uf2ae",
      "first-order": "\uf2b0",
      "yoast": "\uf2b1",
      "themeisle": "\uf2b2",
      "google-plus-official": "\uf2b3",
      "font-awesome": "\uf2b4",
      "handshake-o": "\uf2b5",
      "envelope-open": "\uf2b6",
      "envelope-open-o": "\uf2b7",
      "linode": "\uf2b8",
      "address-book": "\uf2b9",
      "address-book-o": "\uf2ba",
      "address-card": "\uf2bb",
      "address-card-o": "\uf2bc",
      "user-circle": "\uf2bd",
      "user-circle-o": "\uf2be",
      "user-o": "\uf2c0",
      "id-badge": "\uf2c1",
      "id-card": "\uf2c2",
      "id-card-o": "\uf2c3",
      "quora": "\uf2c4",
      "free-code-camp": "\uf2c5",
      "telegram": "\uf2c6",
      "thermometer-full": "\uf2c7",
      "thermometer-three-quarters": "\uf2c8",
      "thermometer-half": "\uf2c9",
      "thermometer-quarter": "\uf2ca",
      "thermometer-empty": "\uf2cb",
      "shower": "\uf2cc",
      "bath": "\uf2cd",
      "podcast": "\uf2ce",
      "window-maximize": "\uf2d0",
      "window-minimize": "\uf2d1",
      "window-restore": "\uf2d2",
      "window-close": "\uf2d3",
      "window-close-o": "\uf2d4",
      "bandcamp": "\uf2d5",
      "grav": "\uf2d6",
      "etsy": "\uf2d7",
      "imdb": "\uf2d8",
      "ravelry": "\uf2d9",
      "eercast": "\uf2da",
      "microchip": "\uf2db",
      "snowflake-o": "\uf2dc",
      "superpowers": "\uf2dd",
      "wpexplorer": "\uf2de",
      "meetup": "\uf2e0"
    },
    "paths": {
      "\uf000": [
        1792,
        "M1699 1350q0 -35 -43 -78l-632 -632v-768h320q26 0 45 -19t19 -45t-19 -45t-45 -19h-896q-26 0 -45 19t-19 45t19 45t45 19h320v768l-632 632q-43 43 -43 78q0 23 18 36.5t38 17.5t43 4h1408q23 0 43 -4t38 -17.5t18 -36.5z"
      ],
      "\uf001": [
        1536.0,
        "M1536 1312v-1120q0 -50 -34 -89t-86 -60.5t-103.5 -32t-96.5 -10.5t-96.5 10.5t-103.5 32t-86 60.5t-34 89t34 89t86 60.5t103.5 32t96.5 10.5q105 0 192 -39v537l-768 -237v-709q0 -50 -34 -89t-86 -60.5t-103.5 -32t-96.5 -10.5t-96.5 10.5t-103.5 32t-86 60.5t-34 89 t34 89t86 60.5t103.5 32t96.5 10.5q105 0 192 -39v967q0 31 19 56.5t49 35.5l832 256q12 4 28 4q40 0 68 -28t28 -68z"
      ],
      "\uf002": [
        1664,
        "M1152 704q0 185 -131.5 316.5t-316.5 131.5t-316.5 -131.5t-131.5 -316.5t131.5 -316.5t316.5 -131.5t316.5 131.5t131.5 316.5zM1664 -128q0 -52 -38 -90t-90 -38q-54 0 -90 38l-343 342q-179 -124 -399 -124q-143 0 -273.5 55.5t-225 150t-150 225t-55.5 273.5 t55.5 273.5t150 225t225 150t273.5 55.5t273.5 -55.5t225 -150t150 -225t55.5 -273.5q0 -220 -124 -399l343 -343q37 -37 37 -90z"
      ],
      "\uf003": [
        1792,
        "M1664 32v768q-32 -36 -69 -66q-268 -206 -426 -338q-51 -43 -83 -67t-86.5 -48.5t-102.5 -24.5h-1h-1q-48 0 -102.5 24.5t-86.5 48.5t-83 67q-158 132 -426 338q-37 30 -69 66v-768q0 -13 9.5 -22.5t22.5 -9.5h1472q13 0 22.5 9.5t9.5 22.5zM1664 1083v11v13.5t-0.5 13 t-3 12.5t-5.5 9t-9 7.5t-14 2.5h-1472q-13 0 -22.5 -9.5t-9.5 -22.5q0 -168 147 -284q193 -152 401 -317q6 -5 35 -29.5t46 -37.5t44.5 -31.5t50.5 -27.5t43 -9h1h1q20 0 43 9t50.5 27.5t44.5 31.5t46 37.5t35 29.5q208 165 401 317q54 43 100.5 115.5t46.5 131.5z M1792 1120v-1088q0 -66 -47 -113t-113 -47h-1472q-66 0 -113 47t-47 113v1088q0 66 47 113t113 47h1472q66 0 113 -47t47 -113z"
      ],
      "\uf004": [
        1792,
        "M896 -128q-26 0 -44 18l-624 602q-10 8 -27.5 26t-55.5 65.5t-68 97.5t-53.5 121t-23.5 138q0 220 127 344t351 124q62 0 126.5 -21.5t120 -58t95.5 -68.5t76 -68q36 36 76 68t95.5 68.5t120 58t126.5 21.5q224 0 351 -124t127 -344q0 -221 -229 -450l-623 -600 q-18 -18 -44 -18z"
      ],
      "\uf005": [
        1664,
        "M1664 889q0 -22 -26 -48l-363 -354l86 -500q1 -7 1 -20q0 -21 -10.5 -35.5t-30.5 -14.5q-19 0 -40 12l-449 236l-449 -236q-22 -12 -40 -12q-21 0 -31.5 14.5t-10.5 35.5q0 6 2 20l86 500l-364 354q-25 27 -25 48q0 37 56 46l502 73l225 455q19 41 49 41t49 -41l225 -455 l502 -73q56 -9 56 -46z"
      ],
      "\uf006": [
        1664,
        "M1137 532l306 297l-422 62l-189 382l-189 -382l-422 -62l306 -297l-73 -421l378 199l377 -199zM1664 889q0 -22 -26 -48l-363 -354l86 -500q1 -7 1 -20q0 -50 -41 -50q-19 0 -40 12l-449 236l-449 -236q-22 -12 -40 -12q-21 0 -31.5 14.5t-10.5 35.5q0 6 2 20l86 500 l-364 354q-25 27 -25 48q0 37 56 46l502 73l225 455q19 41 49 41t49 -41l225 -455l502 -73q56 -9 56 -46z"
      ],
      "\uf007": [
        1280,
        "M1280 137q0 -109 -62.5 -187t-150.5 -78h-854q-88 0 -150.5 78t-62.5 187q0 85 8.5 160.5t31.5 152t58.5 131t94 89t134.5 34.5q131 -128 313 -128t313 128q76 0 134.5 -34.5t94 -89t58.5 -131t31.5 -152t8.5 -160.5zM1024 1024q0 -159 -112.5 -271.5t-271.5 -112.5 t-271.5 112.5t-112.5 271.5t112.5 271.5t271.5 112.5t271.5 -112.5t112.5 -271.5z"
      ],
      "\uf008": [
        1920,
        "M384 -64v128q0 26 -19 45t-45 19h-128q-26 0 -45 -19t-19 -45v-128q0 -26 19 -45t45 -19h128q26 0 45 19t19 45zM384 320v128q0 26 -19 45t-45 19h-128q-26 0 -45 -19t-19 -45v-128q0 -26 19 -45t45 -19h128q26 0 45 19t19 45zM384 704v128q0 26 -19 45t-45 19h-128 q-26 0 -45 -19t-19 -45v-128q0 -26 19 -45t45 -19h128q26 0 45 19t19 45zM1408 -64v512q0 26 -19 45t-45 19h-768q-26 0 -45 -19t-19 -45v-512q0 -26 19 -45t45 -19h768q26 0 45 19t19 45zM384 1088v128q0 26 -19 45t-45 19h-128q-26 0 -45 -19t-19 -45v-128q0 -26 19 -45 t45 -19h128q26 0 45 19t19 45zM1792 -64v128q0 26 -19 45t-45 19h-128q-26 0 -45 -19t-19 -45v-128q0 -26 19 -45t45 -19h128q26 0 45 19t19 45zM1408 704v512q0 26 -19 45t-45 19h-768q-26 0 -45 -19t-19 -45v-512q0 -26 19 -45t45 -19h768q26 0 45 19t19 45zM1792 320v128 q0 26 -19 45t-45 19h-128q-26 0 -45 -19t-19 -45v-128q0 -26 19 -45t45 -19h128q26 0 45 19t19 45zM1792 704v128q0 26 -19 45t-45 19h-128q-26 0 -45 -19t-19 -45v-128q0 -26 19 -45t45 -19h128q26 0 45 19t19 45zM1792 1088v128q0 26 -19 45t-45 19h-128q-26 0 -45 -19 t-19 -45v-128q0 -26 19 -45t45 -19h128q26 0 45 19t19 45zM1920 1248v-1344q0 -66 -47 -113t-113 -47h-1600q-66 0 -113 47t-47 113v1344q0 66 47 113t113 47h1600q66 0 113 -47t47 -113z"
      ],
      "\uf009": [
        1664,
        "M768 512v-384q0 -52 -38 -90t-90 -38h-512q-52 0 -90 38t-38 90v384q0 52 38 90t90 38h512q52 0 90 -38t38 -90zM768 1280v-384q0 -52 -38 -90t-90 -38h-512q-52 0 -90 38t-38 90v384q0 52 38 90t90 38h512q52 0 90 -38t38 -90zM1664 512v-384q0 -52 -38 -90t-90 -38 h-512q-52 0 -90 38t-38 90v384q0 52 38 90t90 38h512q52 0 90 -38t38 -90zM1664 1280v-384q0 -52 -38 -90t-90 -38h-512q-52 0 -90 38t-38 90v384q0 52 38 90t90 38h512q52 0 90 -38t38 -90z"
      ],
      "\uf00a": [
        1792,
        "M512 288v-192q0 -40 -28 -68t-68 -28h-320q-40 0 -68 28t-28 68v192q0 40 28 68t68 28h320q40 0 68 -28t28 -68zM512 800v-192q0 -40 -28 -68t-68 -28h-320q-40 0 -68 28t-28 68v192q0 40 28 68t68 28h320q40 0 68 -28t28 -68zM1152 288v-192q0 -40 -28 -68t-68 -28h-320 q-40 0 -68 28t-28 68v192q0 40 28 68t68 28h320q40 0 68 -28t28 -68zM512 1312v-192q0 -40 -28 -68t-68 -28h-320q-40 0 -68 28t-28 68v192q0 40 28 68t68 28h320q40 0 68 -28t28 -68zM1152 800v-192q0 -40 -28 -68t-68 -28h-320q-40 0 -68 28t-28 68v192q0 40 28 68t68 28 h320q40 0 68 -28t28 -68zM1792 288v-192q0 -40 -28 -68t-68 -28h-320q-40 0 -68 28t-28 68v192q0 40 28 68t68 28h320q40 0 68 -28t28 -68zM1152 1312v-192q0 -40 -28 -68t-68 -28h-320q-40 0 -68 28t-28 68v192q0 40 28 68t68 28h320q40 0 68 -28t28 -68zM1792 800v-192 q0 -40 -28 -68t-68 -28h-320q-40 0 -68 28t-28 68v192q0 40 28 68t68 28h320q40 0 68 -28t28 -68zM1792 1312v-192q0 -40 -28 -68t-68 -28h-320q-40 0 -68 28t-28 68v192q0 40 28 68t68 28h320q40 0 68 -28t28 -68z"
      ],
      "\uf00b": [
        1792,
        "M512 288v-192q0 -40 -28 -68t-68 -28h-320q-40 0 -68 28t-28 68v192q0 40 28 68t68 28h320q40 0 68 -28t28 -68zM512 800v-192q0 -40 -28 -68t-68 -28h-320q-40 0 -68 28t-28 68v192q0 40 28 68t68 28h320q40 0 68 -28t28 -68zM1792 288v-192q0 -40 -28 -68t-68 -28h-960 q-40 0 -68 28t-28 68v192q0 40 28 68t68 28h960q40 0 68 -28t28 -68zM512 1312v-192q0 -40 -28 -68t-68 -28h-320q-40 0 -68 28t-28 68v192q0 40 28 68t68 28h320q40 0 68 -28t28 -68zM1792 800v-192q0 -40 -28 -68t-68 -28h-960q-40 0 -68 28t-28 68v192q0 40 28 68t68 28 h960q40 0 68 -28t28 -68zM1792 1312v-192q0 -40 -28 -68t-68 -28h-960q-40 0 -68 28t-28 68v192q0 40 28 68t68 28h960q40 0 68 -28t28 -68z"
      ],
      "\uf00c": [
        1792,
        "M1671 970q0 -40 -28 -68l-724 -724l-136 -136q-28 -28 -68 -28t-68 28l-136 136l-362 362q-28 28 -28 68t28 68l136 136q28 28 68 28t68 -28l294 -295l656 657q28 28 68 28t68 -28l136 -136q28 -28 28 -68z"
      ],
      "\uf00d": [
        1408,
        "M1298 214q0 -40 -28 -68l-136 -136q-28 -28 -68 -28t-68 28l-294 294l-294 -294q-28 -28 -68 -28t-68 28l-136 136q-28 28 -28 68t28 68l294 294l-294 294q-28 28 -28 68t28 68l136 136q28 28 68 28t68 -28l294 -294l294 294q28 28 68 28t68 -28l136 -136q28 -28 28 -68 t-28 -68l-294 -294l294 -294q28 -28 28 -68z"
      ],
      "\uf00e": [
        1664,
        "M1024 736v-64q0 -13 -9.5 -22.5t-22.5 -9.5h-224v-224q0 -13 -9.5 -22.5t-22.5 -9.5h-64q-13 0 -22.5 9.5t-9.5 22.5v224h-224q-13 0 -22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h224v224q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5 -9.5t9.5 -22.5v-224h224 q13 0 22.5 -9.5t9.5 -22.5zM1152 704q0 185 -131.5 316.5t-316.5 131.5t-316.5 -131.5t-131.5 -316.5t131.5 -316.5t316.5 -131.5t316.5 131.5t131.5 316.5zM1664 -128q0 -53 -37.5 -90.5t-90.5 -37.5q-54 0 -90 38l-343 342q-179 -124 -399 -124q-143 0 -273.5 55.5 t-225 150t-150 225t-55.5 273.5t55.5 273.5t150 225t225 150t273.5 55.5t273.5 -55.5t225 -150t150 -225t55.5 -273.5q0 -220 -124 -399l343 -343q37 -37 37 -90z"
      ],
      "\uf010": [
        1664,
        "M1024 736v-64q0 -13 -9.5 -22.5t-22.5 -9.5h-576q-13 0 -22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h576q13 0 22.5 -9.5t9.5 -22.5zM1152 704q0 185 -131.5 316.5t-316.5 131.5t-316.5 -131.5t-131.5 -316.5t131.5 -316.5t316.5 -131.5t316.5 131.5t131.5 316.5z M1664 -128q0 -53 -37.5 -90.5t-90.5 -37.5q-54 0 -90 38l-343 342q-179 -124 -399 -124q-143 0 -273.5 55.5t-225 150t-150 225t-55.5 273.5t55.5 273.5t150 225t225 150t273.5 55.5t273.5 -55.5t225 -150t150 -225t55.5 -273.5q0 -220 -124 -399l343 -343q37 -37 37 -90z "
      ],
      "\uf011": [
        1536.0,
        "M1536 640q0 -156 -61 -298t-164 -245t-245 -164t-298 -61t-298 61t-245 164t-164 245t-61 298q0 182 80.5 343t226.5 270q43 32 95.5 25t83.5 -50q32 -42 24.5 -94.5t-49.5 -84.5q-98 -74 -151.5 -181t-53.5 -228q0 -104 40.5 -198.5t109.5 -163.5t163.5 -109.5 t198.5 -40.5t198.5 40.5t163.5 109.5t109.5 163.5t40.5 198.5q0 121 -53.5 228t-151.5 181q-42 32 -49.5 84.5t24.5 94.5q31 43 84 50t95 -25q146 -109 226.5 -270t80.5 -343zM896 1408v-640q0 -52 -38 -90t-90 -38t-90 38t-38 90v640q0 52 38 90t90 38t90 -38t38 -90z"
      ],
      "\uf012": [
        1792,
        "M256 96v-192q0 -14 -9 -23t-23 -9h-192q-14 0 -23 9t-9 23v192q0 14 9 23t23 9h192q14 0 23 -9t9 -23zM640 224v-320q0 -14 -9 -23t-23 -9h-192q-14 0 -23 9t-9 23v320q0 14 9 23t23 9h192q14 0 23 -9t9 -23zM1024 480v-576q0 -14 -9 -23t-23 -9h-192q-14 0 -23 9t-9 23 v576q0 14 9 23t23 9h192q14 0 23 -9t9 -23zM1408 864v-960q0 -14 -9 -23t-23 -9h-192q-14 0 -23 9t-9 23v960q0 14 9 23t23 9h192q14 0 23 -9t9 -23zM1792 1376v-1472q0 -14 -9 -23t-23 -9h-192q-14 0 -23 9t-9 23v1472q0 14 9 23t23 9h192q14 0 23 -9t9 -23z"
      ],
      "\uf013": [
        1536.0,
        "M1024 640q0 106 -75 181t-181 75t-181 -75t-75 -181t75 -181t181 -75t181 75t75 181zM1536 749v-222q0 -12 -8 -23t-20 -13l-185 -28q-19 -54 -39 -91q35 -50 107 -138q10 -12 10 -25t-9 -23q-27 -37 -99 -108t-94 -71q-12 0 -26 9l-138 108q-44 -23 -91 -38 q-16 -136 -29 -186q-7 -28 -36 -28h-222q-14 0 -24.5 8.5t-11.5 21.5l-28 184q-49 16 -90 37l-141 -107q-10 -9 -25 -9q-14 0 -25 11q-126 114 -165 168q-7 10 -7 23q0 12 8 23q15 21 51 66.5t54 70.5q-27 50 -41 99l-183 27q-13 2 -21 12.5t-8 23.5v222q0 12 8 23t19 13 l186 28q14 46 39 92q-40 57 -107 138q-10 12 -10 24q0 10 9 23q26 36 98.5 107.5t94.5 71.5q13 0 26 -10l138 -107q44 23 91 38q16 136 29 186q7 28 36 28h222q14 0 24.5 -8.5t11.5 -21.5l28 -184q49 -16 90 -37l142 107q9 9 24 9q13 0 25 -10q129 -119 165 -170q7 -8 7 -22 q0 -12 -8 -23q-15 -21 -51 -66.5t-54 -70.5q26 -50 41 -98l183 -28q13 -2 21 -12.5t8 -23.5z"
      ],
      "\uf014": [
        1408,
        "M512 800v-576q0 -14 -9 -23t-23 -9h-64q-14 0 -23 9t-9 23v576q0 14 9 23t23 9h64q14 0 23 -9t9 -23zM768 800v-576q0 -14 -9 -23t-23 -9h-64q-14 0 -23 9t-9 23v576q0 14 9 23t23 9h64q14 0 23 -9t9 -23zM1024 800v-576q0 -14 -9 -23t-23 -9h-64q-14 0 -23 9t-9 23v576 q0 14 9 23t23 9h64q14 0 23 -9t9 -23zM1152 76v948h-896v-948q0 -22 7 -40.5t14.5 -27t10.5 -8.5h832q3 0 10.5 8.5t14.5 27t7 40.5zM480 1152h448l-48 117q-7 9 -17 11h-317q-10 -2 -17 -11zM1408 1120v-64q0 -14 -9 -23t-23 -9h-96v-948q0 -83 -47 -143.5t-113 -60.5h-832 q-66 0 -113 58.5t-47 141.5v952h-96q-14 0 -23 9t-9 23v64q0 14 9 23t23 9h309l70 167q15 37 54 63t79 26h320q40 0 79 -26t54 -63l70 -167h309q14 0 23 -9t9 -23z"
      ],
      "\uf015": [
        1664,
        "M1408 544v-480q0 -26 -19 -45t-45 -19h-384v384h-256v-384h-384q-26 0 -45 19t-19 45v480q0 1 0.5 3t0.5 3l575 474l575 -474q1 -2 1 -6zM1631 613l-62 -74q-8 -9 -21 -11h-3q-13 0 -21 7l-692 577l-692 -577q-12 -8 -24 -7q-13 2 -21 11l-62 74q-8 10 -7 23.5t11 21.5 l719 599q32 26 76 26t76 -26l244 -204v195q0 14 9 23t23 9h192q14 0 23 -9t9 -23v-408l219 -182q10 -8 11 -21.5t-7 -23.5z"
      ],
      "\uf016": [
        1536.0,
        "M1468 1156q28 -28 48 -76t20 -88v-1152q0 -40 -28 -68t-68 -28h-1344q-40 0 -68 28t-28 68v1600q0 40 28 68t68 28h896q40 0 88 -20t76 -48zM1024 1400v-376h376q-10 29 -22 41l-313 313q-12 12 -41 22zM1408 -128v1024h-416q-40 0 -68 28t-28 68v416h-768v-1536h1280z "
      ],
      "\uf017": [
        1536.0,
        "M896 992v-448q0 -14 -9 -23t-23 -9h-320q-14 0 -23 9t-9 23v64q0 14 9 23t23 9h224v352q0 14 9 23t23 9h64q14 0 23 -9t9 -23zM1312 640q0 148 -73 273t-198 198t-273 73t-273 -73t-198 -198t-73 -273t73 -273t198 -198t273 -73t273 73t198 198t73 273zM1536 640 q0 -209 -103 -385.5t-279.5 -279.5t-385.5 -103t-385.5 103t-279.5 279.5t-103 385.5t103 385.5t279.5 279.5t385.5 103t385.5 -103t279.5 -279.5t103 -385.5z"
      ],
      "\uf018": [
        1920,
        "M1111 540v4l-24 320q-1 13 -11 22.5t-23 9.5h-186q-13 0 -23 -9.5t-11 -22.5l-24 -320v-4q-1 -12 8 -20t21 -8h244q12 0 21 8t8 20zM1870 73q0 -73 -46 -73h-704q13 0 22 9.5t8 22.5l-20 256q-1 13 -11 22.5t-23 9.5h-272q-13 0 -23 -9.5t-11 -22.5l-20 -256 q-1 -13 8 -22.5t22 -9.5h-704q-46 0 -46 73q0 54 26 116l417 1044q8 19 26 33t38 14h339q-13 0 -23 -9.5t-11 -22.5l-15 -192q-1 -14 8 -23t22 -9h166q13 0 22 9t8 23l-15 192q-1 13 -11 22.5t-23 9.5h339q20 0 38 -14t26 -33l417 -1044q26 -62 26 -116z"
      ],
      "\uf019": [
        1664,
        "M1280 192q0 26 -19 45t-45 19t-45 -19t-19 -45t19 -45t45 -19t45 19t19 45zM1536 192q0 26 -19 45t-45 19t-45 -19t-19 -45t19 -45t45 -19t45 19t19 45zM1664 416v-320q0 -40 -28 -68t-68 -28h-1472q-40 0 -68 28t-28 68v320q0 40 28 68t68 28h465l135 -136 q58 -56 136 -56t136 56l136 136h464q40 0 68 -28t28 -68zM1339 985q17 -41 -14 -70l-448 -448q-18 -19 -45 -19t-45 19l-448 448q-31 29 -14 70q17 39 59 39h256v448q0 26 19 45t45 19h256q26 0 45 -19t19 -45v-448h256q42 0 59 -39z"
      ],
      "\uf01a": [
        1536.0,
        "M1120 608q0 -12 -10 -24l-319 -319q-11 -9 -23 -9t-23 9l-320 320q-15 16 -7 35q8 20 30 20h192v352q0 14 9 23t23 9h192q14 0 23 -9t9 -23v-352h192q14 0 23 -9t9 -23zM768 1184q-148 0 -273 -73t-198 -198t-73 -273t73 -273t198 -198t273 -73t273 73t198 198t73 273 t-73 273t-198 198t-273 73zM1536 640q0 -209 -103 -385.5t-279.5 -279.5t-385.5 -103t-385.5 103t-279.5 279.5t-103 385.5t103 385.5t279.5 279.5t385.5 103t385.5 -103t279.5 -279.5t103 -385.5z"
      ],
      "\uf01b": [
        1536.0,
        "M1118 660q-8 -20 -30 -20h-192v-352q0 -14 -9 -23t-23 -9h-192q-14 0 -23 9t-9 23v352h-192q-14 0 -23 9t-9 23q0 12 10 24l319 319q11 9 23 9t23 -9l320 -320q15 -16 7 -35zM768 1184q-148 0 -273 -73t-198 -198t-73 -273t73 -273t198 -198t273 -73t273 73t198 198 t73 273t-73 273t-198 198t-273 73zM1536 640q0 -209 -103 -385.5t-279.5 -279.5t-385.5 -103t-385.5 103t-279.5 279.5t-103 385.5t103 385.5t279.5 279.5t385.5 103t385.5 -103t279.5 -279.5t103 -385.5z"
      ],
      "\uf01c": [
        1536.0,
        "M1023 576h316q-1 3 -2.5 8.5t-2.5 7.5l-212 496h-708l-212 -496q-1 -3 -2.5 -8.5t-2.5 -7.5h316l95 -192h320zM1536 546v-482q0 -26 -19 -45t-45 -19h-1408q-26 0 -45 19t-19 45v482q0 62 25 123l238 552q10 25 36.5 42t52.5 17h832q26 0 52.5 -17t36.5 -42l238 -552 q25 -61 25 -123z"
      ],
      "\uf01d": [
        1536.0,
        "M1184 640q0 -37 -32 -55l-544 -320q-15 -9 -32 -9q-16 0 -32 8q-32 19 -32 56v640q0 37 32 56q33 18 64 -1l544 -320q32 -18 32 -55zM1312 640q0 148 -73 273t-198 198t-273 73t-273 -73t-198 -198t-73 -273t73 -273t198 -198t273 -73t273 73t198 198t73 273zM1536 640 q0 -209 -103 -385.5t-279.5 -279.5t-385.5 -103t-385.5 103t-279.5 279.5t-103 385.5t103 385.5t279.5 279.5t385.5 103t385.5 -103t279.5 -279.5t103 -385.5z"
      ],
      "\uf01e": [
        1536.0,
        "M1536 1280v-448q0 -26 -19 -45t-45 -19h-448q-42 0 -59 40q-17 39 14 69l138 138q-148 137 -349 137q-104 0 -198.5 -40.5t-163.5 -109.5t-109.5 -163.5t-40.5 -198.5t40.5 -198.5t109.5 -163.5t163.5 -109.5t198.5 -40.5q119 0 225 52t179 147q7 10 23 12q15 0 25 -9 l137 -138q9 -8 9.5 -20.5t-7.5 -22.5q-109 -132 -264 -204.5t-327 -72.5q-156 0 -298 61t-245 164t-164 245t-61 298t61 298t164 245t245 164t298 61q147 0 284.5 -55.5t244.5 -156.5l130 129q29 31 70 14q39 -17 39 -59z"
      ],
      "\uf021": [
        1536.0,
        "M1511 480q0 -5 -1 -7q-64 -268 -268 -434.5t-478 -166.5q-146 0 -282.5 55t-243.5 157l-129 -129q-19 -19 -45 -19t-45 19t-19 45v448q0 26 19 45t45 19h448q26 0 45 -19t19 -45t-19 -45l-137 -137q71 -66 161 -102t187 -36q134 0 250 65t186 179q11 17 53 117 q8 23 30 23h192q13 0 22.5 -9.5t9.5 -22.5zM1536 1280v-448q0 -26 -19 -45t-45 -19h-448q-26 0 -45 19t-19 45t19 45l138 138q-148 137 -349 137q-134 0 -250 -65t-186 -179q-11 -17 -53 -117q-8 -23 -30 -23h-199q-13 0 -22.5 9.5t-9.5 22.5v7q65 268 270 434.5t480 166.5 q146 0 284 -55.5t245 -156.5l130 129q19 19 45 19t45 -19t19 -45z"
      ],
      "\uf022": [
        1792,
        "M384 352v-64q0 -13 -9.5 -22.5t-22.5 -9.5h-64q-13 0 -22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5 -9.5t9.5 -22.5zM384 608v-64q0 -13 -9.5 -22.5t-22.5 -9.5h-64q-13 0 -22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5 -9.5t9.5 -22.5z M384 864v-64q0 -13 -9.5 -22.5t-22.5 -9.5h-64q-13 0 -22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5 -9.5t9.5 -22.5zM1536 352v-64q0 -13 -9.5 -22.5t-22.5 -9.5h-960q-13 0 -22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h960q13 0 22.5 -9.5t9.5 -22.5z M1536 608v-64q0 -13 -9.5 -22.5t-22.5 -9.5h-960q-13 0 -22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h960q13 0 22.5 -9.5t9.5 -22.5zM1536 864v-64q0 -13 -9.5 -22.5t-22.5 -9.5h-960q-13 0 -22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h960q13 0 22.5 -9.5 t9.5 -22.5zM1664 160v832q0 13 -9.5 22.5t-22.5 9.5h-1472q-13 0 -22.5 -9.5t-9.5 -22.5v-832q0 -13 9.5 -22.5t22.5 -9.5h1472q13 0 22.5 9.5t9.5 22.5zM1792 1248v-1088q0 -66 -47 -113t-113 -47h-1472q-66 0 -113 47t-47 113v1088q0 66 47 113t113 47h1472q66 0 113 -47 t47 -113z"
      ],
      "\uf023": [
        1152,
        "M320 768h512v192q0 106 -75 181t-181 75t-181 -75t-75 -181v-192zM1152 672v-576q0 -40 -28 -68t-68 -28h-960q-40 0 -68 28t-28 68v576q0 40 28 68t68 28h32v192q0 184 132 316t316 132t316 -132t132 -316v-192h32q40 0 68 -28t28 -68z"
      ],
      "\uf024": [
        1792,
        "M320 1280q0 -72 -64 -110v-1266q0 -13 -9.5 -22.5t-22.5 -9.5h-64q-13 0 -22.5 9.5t-9.5 22.5v1266q-64 38 -64 110q0 53 37.5 90.5t90.5 37.5t90.5 -37.5t37.5 -90.5zM1792 1216v-763q0 -25 -12.5 -38.5t-39.5 -27.5q-215 -116 -369 -116q-61 0 -123.5 22t-108.5 48 t-115.5 48t-142.5 22q-192 0 -464 -146q-17 -9 -33 -9q-26 0 -45 19t-19 45v742q0 32 31 55q21 14 79 43q236 120 421 120q107 0 200 -29t219 -88q38 -19 88 -19q54 0 117.5 21t110 47t88 47t54.5 21q26 0 45 -19t19 -45z"
      ],
      "\uf025": [
        1664,
        "M1664 650q0 -166 -60 -314l-20 -49l-185 -33q-22 -83 -90.5 -136.5t-156.5 -53.5v-32q0 -14 -9 -23t-23 -9h-64q-14 0 -23 9t-9 23v576q0 14 9 23t23 9h64q14 0 23 -9t9 -23v-32q71 0 130 -35.5t93 -95.5l68 12q29 95 29 193q0 148 -88 279t-236.5 209t-315.5 78 t-315.5 -78t-236.5 -209t-88 -279q0 -98 29 -193l68 -12q34 60 93 95.5t130 35.5v32q0 14 9 23t23 9h64q14 0 23 -9t9 -23v-576q0 -14 -9 -23t-23 -9h-64q-14 0 -23 9t-9 23v32q-88 0 -156.5 53.5t-90.5 136.5l-185 33l-20 49q-60 148 -60 314q0 151 67 291t179 242.5 t266 163.5t320 61t320 -61t266 -163.5t179 -242.5t67 -291z"
      ],
      "\uf026": [
        768,
        "M768 1184v-1088q0 -26 -19 -45t-45 -19t-45 19l-333 333h-262q-26 0 -45 19t-19 45v384q0 26 19 45t45 19h262l333 333q19 19 45 19t45 -19t19 -45z"
      ],
      "\uf027": [
        1152,
        "M768 1184v-1088q0 -26 -19 -45t-45 -19t-45 19l-333 333h-262q-26 0 -45 19t-19 45v384q0 26 19 45t45 19h262l333 333q19 19 45 19t45 -19t19 -45zM1152 640q0 -76 -42.5 -141.5t-112.5 -93.5q-10 -5 -25 -5q-26 0 -45 18.5t-19 45.5q0 21 12 35.5t29 25t34 23t29 36 t12 56.5t-12 56.5t-29 36t-34 23t-29 25t-12 35.5q0 27 19 45.5t45 18.5q15 0 25 -5q70 -27 112.5 -93t42.5 -142z"
      ],
      "\uf028": [
        1664,
        "M768 1184v-1088q0 -26 -19 -45t-45 -19t-45 19l-333 333h-262q-26 0 -45 19t-19 45v384q0 26 19 45t45 19h262l333 333q19 19 45 19t45 -19t19 -45zM1152 640q0 -76 -42.5 -141.5t-112.5 -93.5q-10 -5 -25 -5q-26 0 -45 18.5t-19 45.5q0 21 12 35.5t29 25t34 23t29 36 t12 56.5t-12 56.5t-29 36t-34 23t-29 25t-12 35.5q0 27 19 45.5t45 18.5q15 0 25 -5q70 -27 112.5 -93t42.5 -142zM1408 640q0 -153 -85 -282.5t-225 -188.5q-13 -5 -25 -5q-27 0 -46 19t-19 45q0 39 39 59q56 29 76 44q74 54 115.5 135.5t41.5 173.5t-41.5 173.5 t-115.5 135.5q-20 15 -76 44q-39 20 -39 59q0 26 19 45t45 19q13 0 26 -5q140 -59 225 -188.5t85 -282.5zM1664 640q0 -230 -127 -422.5t-338 -283.5q-13 -5 -26 -5q-26 0 -45 19t-19 45q0 36 39 59q7 4 22.5 10.5t22.5 10.5q46 25 82 51q123 91 192 227t69 289t-69 289 t-192 227q-36 26 -82 51q-7 4 -22.5 10.5t-22.5 10.5q-39 23 -39 59q0 26 19 45t45 19q13 0 26 -5q211 -91 338 -283.5t127 -422.5z"
      ],
      "\uf029": [
        1408,
        "M384 384v-128h-128v128h128zM384 1152v-128h-128v128h128zM1152 1152v-128h-128v128h128zM128 129h384v383h-384v-383zM128 896h384v384h-384v-384zM896 896h384v384h-384v-384zM640 640v-640h-640v640h640zM1152 128v-128h-128v128h128zM1408 128v-128h-128v128h128z M1408 640v-384h-384v128h-128v-384h-128v640h384v-128h128v128h128zM640 1408v-640h-640v640h640zM1408 1408v-640h-640v640h640z"
      ],
      "\uf02a": [
        1792,
        "M63 0h-63v1408h63v-1408zM126 1h-32v1407h32v-1407zM220 1h-31v1407h31v-1407zM377 1h-31v1407h31v-1407zM534 1h-62v1407h62v-1407zM660 1h-31v1407h31v-1407zM723 1h-31v1407h31v-1407zM786 1h-31v1407h31v-1407zM943 1h-63v1407h63v-1407zM1100 1h-63v1407h63v-1407z M1226 1h-63v1407h63v-1407zM1352 1h-63v1407h63v-1407zM1446 1h-63v1407h63v-1407zM1635 1h-94v1407h94v-1407zM1698 1h-32v1407h32v-1407zM1792 0h-63v1408h63v-1408z"
      ],
      "\uf02b": [
        1536.0,
        "M448 1088q0 53 -37.5 90.5t-90.5 37.5t-90.5 -37.5t-37.5 -90.5t37.5 -90.5t90.5 -37.5t90.5 37.5t37.5 90.5zM1515 512q0 -53 -37 -90l-491 -492q-39 -37 -91 -37q-53 0 -90 37l-715 716q-38 37 -64.5 101t-26.5 117v416q0 52 38 90t90 38h416q53 0 117 -26.5t102 -64.5 l715 -714q37 -39 37 -91z"
      ],
      "\uf02c": [
        1920,
        "M448 1088q0 53 -37.5 90.5t-90.5 37.5t-90.5 -37.5t-37.5 -90.5t37.5 -90.5t90.5 -37.5t90.5 37.5t37.5 90.5zM1515 512q0 -53 -37 -90l-491 -492q-39 -37 -91 -37q-53 0 -90 37l-715 716q-38 37 -64.5 101t-26.5 117v416q0 52 38 90t90 38h416q53 0 117 -26.5t102 -64.5 l715 -714q37 -39 37 -91zM1899 512q0 -53 -37 -90l-491 -492q-39 -37 -91 -37q-36 0 -59 14t-53 45l470 470q37 37 37 90q0 52 -37 91l-715 714q-38 38 -102 64.5t-117 26.5h224q53 0 117 -26.5t102 -64.5l715 -714q37 -39 37 -91z"
      ],
      "\uf02d": [
        1664,
        "M1639 1058q40 -57 18 -129l-275 -906q-19 -64 -76.5 -107.5t-122.5 -43.5h-923q-77 0 -148.5 53.5t-99.5 131.5q-24 67 -2 127q0 4 3 27t4 37q1 8 -3 21.5t-3 19.5q2 11 8 21t16.5 23.5t16.5 23.5q23 38 45 91.5t30 91.5q3 10 0.5 30t-0.5 28q3 11 17 28t17 23 q21 36 42 92t25 90q1 9 -2.5 32t0.5 28q4 13 22 30.5t22 22.5q19 26 42.5 84.5t27.5 96.5q1 8 -3 25.5t-2 26.5q2 8 9 18t18 23t17 21q8 12 16.5 30.5t15 35t16 36t19.5 32t26.5 23.5t36 11.5t47.5 -5.5l-1 -3q38 9 51 9h761q74 0 114 -56t18 -130l-274 -906 q-36 -119 -71.5 -153.5t-128.5 -34.5h-869q-27 0 -38 -15q-11 -16 -1 -43q24 -70 144 -70h923q29 0 56 15.5t35 41.5l300 987q7 22 5 57q38 -15 59 -43zM575 1056q-4 -13 2 -22.5t20 -9.5h608q13 0 25.5 9.5t16.5 22.5l21 64q4 13 -2 22.5t-20 9.5h-608q-13 0 -25.5 -9.5 t-16.5 -22.5zM492 800q-4 -13 2 -22.5t20 -9.5h608q13 0 25.5 9.5t16.5 22.5l21 64q4 13 -2 22.5t-20 9.5h-608q-13 0 -25.5 -9.5t-16.5 -22.5z"
      ],
      "\uf02e": [
        1280,
        "M1164 1408q23 0 44 -9q33 -13 52.5 -41t19.5 -62v-1289q0 -34 -19.5 -62t-52.5 -41q-19 -8 -44 -8q-48 0 -83 32l-441 424l-441 -424q-36 -33 -83 -33q-23 0 -44 9q-33 13 -52.5 41t-19.5 62v1289q0 34 19.5 62t52.5 41q21 9 44 9h1048z"
      ],
      "\uf02f": [
        1664,
        "M384 0h896v256h-896v-256zM384 640h896v384h-160q-40 0 -68 28t-28 68v160h-640v-640zM1536 576q0 26 -19 45t-45 19t-45 -19t-19 -45t19 -45t45 -19t45 19t19 45zM1664 576v-416q0 -13 -9.5 -22.5t-22.5 -9.5h-224v-160q0 -40 -28 -68t-68 -28h-960q-40 0 -68 28t-28 68 v160h-224q-13 0 -22.5 9.5t-9.5 22.5v416q0 79 56.5 135.5t135.5 56.5h64v544q0 40 28 68t68 28h672q40 0 88 -20t76 -48l152 -152q28 -28 48 -76t20 -88v-256h64q79 0 135.5 -56.5t56.5 -135.5z"
      ],
      "\uf030": [
        1920,
        "M960 864q119 0 203.5 -84.5t84.5 -203.5t-84.5 -203.5t-203.5 -84.5t-203.5 84.5t-84.5 203.5t84.5 203.5t203.5 84.5zM1664 1280q106 0 181 -75t75 -181v-896q0 -106 -75 -181t-181 -75h-1408q-106 0 -181 75t-75 181v896q0 106 75 181t181 75h224l51 136 q19 49 69.5 84.5t103.5 35.5h512q53 0 103.5 -35.5t69.5 -84.5l51 -136h224zM960 128q185 0 316.5 131.5t131.5 316.5t-131.5 316.5t-316.5 131.5t-316.5 -131.5t-131.5 -316.5t131.5 -316.5t316.5 -131.5z"
      ],
      "\uf031": [
        1664,
        "M725 977l-170 -450q33 0 136.5 -2t160.5 -2q19 0 57 2q-87 253 -184 452zM0 -128l2 79q23 7 56 12.5t57 10.5t49.5 14.5t44.5 29t31 50.5l237 616l280 724h75h53q8 -14 11 -21l205 -480q33 -78 106 -257.5t114 -274.5q15 -34 58 -144.5t72 -168.5q20 -45 35 -57 q19 -15 88 -29.5t84 -20.5q6 -38 6 -57q0 -5 -0.5 -13.5t-0.5 -12.5q-63 0 -190 8t-191 8q-76 0 -215 -7t-178 -8q0 43 4 78l131 28q1 0 12.5 2.5t15.5 3.5t14.5 4.5t15 6.5t11 8t9 11t2.5 14q0 16 -31 96.5t-72 177.5t-42 100l-450 2q-26 -58 -76.5 -195.5t-50.5 -162.5 q0 -22 14 -37.5t43.5 -24.5t48.5 -13.5t57 -8.5t41 -4q1 -19 1 -58q0 -9 -2 -27q-58 0 -174.5 10t-174.5 10q-8 0 -26.5 -4t-21.5 -4q-80 -14 -188 -14z"
      ],
      "\uf032": [
        1408,
        "M555 15q74 -32 140 -32q376 0 376 335q0 114 -41 180q-27 44 -61.5 74t-67.5 46.5t-80.5 25t-84 10.5t-94.5 2q-73 0 -101 -10q0 -53 -0.5 -159t-0.5 -158q0 -8 -1 -67.5t-0.5 -96.5t4.5 -83.5t12 -66.5zM541 761q42 -7 109 -7q82 0 143 13t110 44.5t74.5 89.5t25.5 142 q0 70 -29 122.5t-79 82t-108 43.5t-124 14q-50 0 -130 -13q0 -50 4 -151t4 -152q0 -27 -0.5 -80t-0.5 -79q0 -46 1 -69zM0 -128l2 94q15 4 85 16t106 27q7 12 12.5 27t8.5 33.5t5.5 32.5t3 37.5t0.5 34v35.5v30q0 982 -22 1025q-4 8 -22 14.5t-44.5 11t-49.5 7t-48.5 4.5 t-30.5 3l-4 83q98 2 340 11.5t373 9.5q23 0 68 -0.5t68 -0.5q70 0 136.5 -13t128.5 -42t108 -71t74 -104.5t28 -137.5q0 -52 -16.5 -95.5t-39 -72t-64.5 -57.5t-73 -45t-84 -40q154 -35 256.5 -134t102.5 -248q0 -100 -35 -179.5t-93.5 -130.5t-138 -85.5t-163.5 -48.5 t-176 -14q-44 0 -132 3t-132 3q-106 0 -307 -11t-231 -12z"
      ],
      "\uf033": [
        1024,
        "M0 -126l17 85q22 7 61.5 16.5t72 19t59.5 23.5q28 35 41 101q1 7 62 289t114 543.5t52 296.5v25q-24 13 -54.5 18.5t-69.5 8t-58 5.5l19 103q33 -2 120 -6.5t149.5 -7t120.5 -2.5q48 0 98.5 2.5t121 7t98.5 6.5q-5 -39 -19 -89q-30 -10 -101.5 -28.5t-108.5 -33.5 q-8 -19 -14 -42.5t-9 -40t-7.5 -45.5t-6.5 -42q-27 -148 -87.5 -419.5t-77.5 -355.5q-2 -9 -13 -58t-20 -90t-16 -83.5t-6 -57.5l1 -18q17 -4 185 -31q-3 -44 -16 -99q-11 0 -32.5 -1.5t-32.5 -1.5q-29 0 -87 10t-86 10q-138 2 -206 2q-51 0 -143 -9t-121 -11z"
      ],
      "\uf034": [
        1792,
        "M1744 128q33 0 42 -18.5t-11 -44.5l-126 -162q-20 -26 -49 -26t-49 26l-126 162q-20 26 -11 44.5t42 18.5h80v1024h-80q-33 0 -42 18.5t11 44.5l126 162q20 26 49 26t49 -26l126 -162q20 -26 11 -44.5t-42 -18.5h-80v-1024h80zM81 1407l54 -27q12 -5 211 -5q44 0 132 2 t132 2q36 0 107.5 -0.5t107.5 -0.5h293q6 0 21 -0.5t20.5 0t16 3t17.5 9t15 17.5l42 1q4 0 14 -0.5t14 -0.5q2 -112 2 -336q0 -80 -5 -109q-39 -14 -68 -18q-25 44 -54 128q-3 9 -11 48t-14.5 73.5t-7.5 35.5q-6 8 -12 12.5t-15.5 6t-13 2.5t-18 0.5t-16.5 -0.5 q-17 0 -66.5 0.5t-74.5 0.5t-64 -2t-71 -6q-9 -81 -8 -136q0 -94 2 -388t2 -455q0 -16 -2.5 -71.5t0 -91.5t12.5 -69q40 -21 124 -42.5t120 -37.5q5 -40 5 -50q0 -14 -3 -29l-34 -1q-76 -2 -218 8t-207 10q-50 0 -151 -9t-152 -9q-3 51 -3 52v9q17 27 61.5 43t98.5 29t78 27 q19 42 19 383q0 101 -3 303t-3 303v117q0 2 0.5 15.5t0.5 25t-1 25.5t-3 24t-5 14q-11 12 -162 12q-33 0 -93 -12t-80 -26q-19 -13 -34 -72.5t-31.5 -111t-42.5 -53.5q-42 26 -56 44v383z"
      ],
      "\uf035": [
        1536.0,
        "M81 1407l54 -27q12 -5 211 -5q44 0 132 2t132 2q70 0 246.5 1t304.5 0.5t247 -4.5q33 -1 56 31l42 1q4 0 14 -0.5t14 -0.5q2 -112 2 -336q0 -80 -5 -109q-39 -14 -68 -18q-25 44 -54 128q-3 9 -11 47.5t-15 73.5t-7 36q-10 13 -27 19q-5 2 -66 2q-30 0 -93 1t-103 1 t-94 -2t-96 -7q-9 -81 -8 -136l1 -152v52q0 -55 1 -154t1.5 -180t0.5 -153q0 -16 -2.5 -71.5t0 -91.5t12.5 -69q40 -21 124 -42.5t120 -37.5q5 -40 5 -50q0 -14 -3 -29l-34 -1q-76 -2 -218 8t-207 10q-50 0 -151 -9t-152 -9q-3 51 -3 52v9q17 27 61.5 43t98.5 29t78 27 q7 16 11.5 74t6 145.5t1.5 155t-0.5 153.5t-0.5 89q0 7 -2.5 21.5t-2.5 22.5q0 7 0.5 44t1 73t0 76.5t-3 67.5t-6.5 32q-11 12 -162 12q-41 0 -163 -13.5t-138 -24.5q-19 -12 -34 -71.5t-31.5 -111.5t-42.5 -54q-42 26 -56 44v383zM1310 125q12 0 42 -19.5t57.5 -41.5 t59.5 -49t36 -30q26 -21 26 -49t-26 -49q-4 -3 -36 -30t-59.5 -49t-57.5 -41.5t-42 -19.5q-13 0 -20.5 10.5t-10 28.5t-2.5 33.5t1.5 33t1.5 19.5h-1024q0 -2 1.5 -19.5t1.5 -33t-2.5 -33.5t-10 -28.5t-20.5 -10.5q-12 0 -42 19.5t-57.5 41.5t-59.5 49t-36 30q-26 21 -26 49 t26 49q4 3 36 30t59.5 49t57.5 41.5t42 19.5q13 0 20.5 -10.5t10 -28.5t2.5 -33.5t-1.5 -33t-1.5 -19.5h1024q0 2 -1.5 19.5t-1.5 33t2.5 33.5t10 28.5t20.5 10.5z"
      ],
      "\uf036": [
        1792,
        "M1792 192v-128q0 -26 -19 -45t-45 -19h-1664q-26 0 -45 19t-19 45v128q0 26 19 45t45 19h1664q26 0 45 -19t19 -45zM1408 576v-128q0 -26 -19 -45t-45 -19h-1280q-26 0 -45 19t-19 45v128q0 26 19 45t45 19h1280q26 0 45 -19t19 -45zM1664 960v-128q0 -26 -19 -45 t-45 -19h-1536q-26 0 -45 19t-19 45v128q0 26 19 45t45 19h1536q26 0 45 -19t19 -45zM1280 1344v-128q0 -26 -19 -45t-45 -19h-1152q-26 0 -45 19t-19 45v128q0 26 19 45t45 19h1152q26 0 45 -19t19 -45z"
      ],
      "\uf037": [
        1792,
        "M1792 192v-128q0 -26 -19 -45t-45 -19h-1664q-26 0 -45 19t-19 45v128q0 26 19 45t45 19h1664q26 0 45 -19t19 -45zM1408 576v-128q0 -26 -19 -45t-45 -19h-896q-26 0 -45 19t-19 45v128q0 26 19 45t45 19h896q26 0 45 -19t19 -45zM1664 960v-128q0 -26 -19 -45t-45 -19 h-1408q-26 0 -45 19t-19 45v128q0 26 19 45t45 19h1408q26 0 45 -19t19 -45zM1280 1344v-128q0 -26 -19 -45t-45 -19h-640q-26 0 -45 19t-19 45v128q0 26 19 45t45 19h640q26 0 45 -19t19 -45z"
      ],
      "\uf038": [
        1792,
        "M1792 192v-128q0 -26 -19 -45t-45 -19h-1664q-26 0 -45 19t-19 45v128q0 26 19 45t45 19h1664q26 0 45 -19t19 -45zM1792 576v-128q0 -26 -19 -45t-45 -19h-1280q-26 0 -45 19t-19 45v128q0 26 19 45t45 19h1280q26 0 45 -19t19 -45zM1792 960v-128q0 -26 -19 -45 t-45 -19h-1536q-26 0 -45 19t-19 45v128q0 26 19 45t45 19h1536q26 0 45 -19t19 -45zM1792 1344v-128q0 -26 -19 -45t-45 -19h-1152q-26 0 -45 19t-19 45v128q0 26 19 45t45 19h1152q26 0 45 -19t19 -45z"
      ],
      "\uf039": [
        1792,
        "M1792 192v-128q0 -26 -19 -45t-45 -19h-1664q-26 0 -45 19t-19 45v128q0 26 19 45t45 19h1664q26 0 45 -19t19 -45zM1792 576v-128q0 -26 -19 -45t-45 -19h-1664q-26 0 -45 19t-19 45v128q0 26 19 45t45 19h1664q26 0 45 -19t19 -45zM1792 960v-128q0 -26 -19 -45 t-45 -19h-1664q-26 0 -45 19t-19 45v128q0 26 19 45t45 19h1664q26 0 45 -19t19 -45zM1792 1344v-128q0 -26 -19 -45t-45 -19h-1664q-26 0 -45 19t-19 45v128q0 26 19 45t45 19h1664q26 0 45 -19t19 -45z"
      ],
      "\uf03a": [
        1792,
        "M256 224v-192q0 -13 -9.5 -22.5t-22.5 -9.5h-192q-13 0 -22.5 9.5t-9.5 22.5v192q0 13 9.5 22.5t22.5 9.5h192q13 0 22.5 -9.5t9.5 -22.5zM256 608v-192q0 -13 -9.5 -22.5t-22.5 -9.5h-192q-13 0 -22.5 9.5t-9.5 22.5v192q0 13 9.5 22.5t22.5 9.5h192q13 0 22.5 -9.5 t9.5 -22.5zM256 992v-192q0 -13 -9.5 -22.5t-22.5 -9.5h-192q-13 0 -22.5 9.5t-9.5 22.5v192q0 13 9.5 22.5t22.5 9.5h192q13 0 22.5 -9.5t9.5 -22.5zM1792 224v-192q0 -13 -9.5 -22.5t-22.5 -9.5h-1344q-13 0 -22.5 9.5t-9.5 22.5v192q0 13 9.5 22.5t22.5 9.5h1344 q13 0 22.5 -9.5t9.5 -22.5zM256 1376v-192q0 -13 -9.5 -22.5t-22.5 -9.5h-192q-13 0 -22.5 9.5t-9.5 22.5v192q0 13 9.5 22.5t22.5 9.5h192q13 0 22.5 -9.5t9.5 -22.5zM1792 608v-192q0 -13 -9.5 -22.5t-22.5 -9.5h-1344q-13 0 -22.5 9.5t-9.5 22.5v192q0 13 9.5 22.5 t22.5 9.5h1344q13 0 22.5 -9.5t9.5 -22.5zM1792 992v-192q0 -13 -9.5 -22.5t-22.5 -9.5h-1344q-13 0 -22.5 9.5t-9.5 22.5v192q0 13 9.5 22.5t22.5 9.5h1344q13 0 22.5 -9.5t9.5 -22.5zM1792 1376v-192q0 -13 -9.5 -22.5t-22.5 -9.5h-1344q-13 0 -22.5 9.5t-9.5 22.5v192 q0 13 9.5 22.5t22.5 9.5h1344q13 0 22.5 -9.5t9.5 -22.5z"
      ],
      "\uf03b": [
        1792,
        "M384 992v-576q0 -13 -9.5 -22.5t-22.5 -9.5q-14 0 -23 9l-288 288q-9 9 -9 23t9 23l288 288q9 9 23 9q13 0 22.5 -9.5t9.5 -22.5zM1792 224v-192q0 -13 -9.5 -22.5t-22.5 -9.5h-1728q-13 0 -22.5 9.5t-9.5 22.5v192q0 13 9.5 22.5t22.5 9.5h1728q13 0 22.5 -9.5 t9.5 -22.5zM1792 608v-192q0 -13 -9.5 -22.5t-22.5 -9.5h-1088q-13 0 -22.5 9.5t-9.5 22.5v192q0 13 9.5 22.5t22.5 9.5h1088q13 0 22.5 -9.5t9.5 -22.5zM1792 992v-192q0 -13 -9.5 -22.5t-22.5 -9.5h-1088q-13 0 -22.5 9.5t-9.5 22.5v192q0 13 9.5 22.5t22.5 9.5h1088 q13 0 22.5 -9.5t9.5 -22.5zM1792 1376v-192q0 -13 -9.5 -22.5t-22.5 -9.5h-1728q-13 0 -22.5 9.5t-9.5 22.5v192q0 13 9.5 22.5t22.5 9.5h1728q13 0 22.5 -9.5t9.5 -22.5z"
      ],
      "\uf03c": [
        1792,
        "M352 704q0 -14 -9 -23l-288 -288q-9 -9 -23 -9q-13 0 -22.5 9.5t-9.5 22.5v576q0 13 9.5 22.5t22.5 9.5q14 0 23 -9l288 -288q9 -9 9 -23zM1792 224v-192q0 -13 -9.5 -22.5t-22.5 -9.5h-1728q-13 0 -22.5 9.5t-9.5 22.5v192q0 13 9.5 22.5t22.5 9.5h1728q13 0 22.5 -9.5 t9.5 -22.5zM1792 608v-192q0 -13 -9.5 -22.5t-22.5 -9.5h-1088q-13 0 -22.5 9.5t-9.5 22.5v192q0 13 9.5 22.5t22.5 9.5h1088q13 0 22.5 -9.5t9.5 -22.5zM1792 992v-192q0 -13 -9.5 -22.5t-22.5 -9.5h-1088q-13 0 -22.5 9.5t-9.5 22.5v192q0 13 9.5 22.5t22.5 9.5h1088 q13 0 22.5 -9.5t9.5 -22.5zM1792 1376v-192q0 -13 -9.5 -22.5t-22.5 -9.5h-1728q-13 0 -22.5 9.5t-9.5 22.5v192q0 13 9.5 22.5t22.5 9.5h1728q13 0 22.5 -9.5t9.5 -22.5z"
      ],
      "\uf03d": [
        1792,
        "M1792 1184v-1088q0 -42 -39 -59q-13 -5 -25 -5q-27 0 -45 19l-403 403v-166q0 -119 -84.5 -203.5t-203.5 -84.5h-704q-119 0 -203.5 84.5t-84.5 203.5v704q0 119 84.5 203.5t203.5 84.5h704q119 0 203.5 -84.5t84.5 -203.5v-165l403 402q18 19 45 19q12 0 25 -5 q39 -17 39 -59z"
      ],
      "\uf03e": [
        1920,
        "M640 960q0 -80 -56 -136t-136 -56t-136 56t-56 136t56 136t136 56t136 -56t56 -136zM1664 576v-448h-1408v192l320 320l160 -160l512 512zM1760 1280h-1600q-13 0 -22.5 -9.5t-9.5 -22.5v-1216q0 -13 9.5 -22.5t22.5 -9.5h1600q13 0 22.5 9.5t9.5 22.5v1216 q0 13 -9.5 22.5t-22.5 9.5zM1920 1248v-1216q0 -66 -47 -113t-113 -47h-1600q-66 0 -113 47t-47 113v1216q0 66 47 113t113 47h1600q66 0 113 -47t47 -113z"
      ],
      "\uf040": [
        1536.0,
        "M363 0l91 91l-235 235l-91 -91v-107h128v-128h107zM886 928q0 22 -22 22q-10 0 -17 -7l-542 -542q-7 -7 -7 -17q0 -22 22 -22q10 0 17 7l542 542q7 7 7 17zM832 1120l416 -416l-832 -832h-416v416zM1515 1024q0 -53 -37 -90l-166 -166l-416 416l166 165q36 38 90 38 q53 0 91 -38l235 -234q37 -39 37 -91z"
      ],
      "\uf041": [
        1024,
        "M768 896q0 106 -75 181t-181 75t-181 -75t-75 -181t75 -181t181 -75t181 75t75 181zM1024 896q0 -109 -33 -179l-364 -774q-16 -33 -47.5 -52t-67.5 -19t-67.5 19t-46.5 52l-365 774q-33 70 -33 179q0 212 150 362t362 150t362 -150t150 -362z"
      ],
      "\uf042": [
        1536.0,
        "M768 96v1088q-148 0 -273 -73t-198 -198t-73 -273t73 -273t198 -198t273 -73zM1536 640q0 -209 -103 -385.5t-279.5 -279.5t-385.5 -103t-385.5 103t-279.5 279.5t-103 385.5t103 385.5t279.5 279.5t385.5 103t385.5 -103t279.5 -279.5t103 -385.5z"
      ],
      "\uf043": [
        1024,
        "M512 384q0 36 -20 69q-1 1 -15.5 22.5t-25.5 38t-25 44t-21 50.5q-4 16 -21 16t-21 -16q-7 -23 -21 -50.5t-25 -44t-25.5 -38t-15.5 -22.5q-20 -33 -20 -69q0 -53 37.5 -90.5t90.5 -37.5t90.5 37.5t37.5 90.5zM1024 512q0 -212 -150 -362t-362 -150t-362 150t-150 362 q0 145 81 275q6 9 62.5 90.5t101 151t99.5 178t83 201.5q9 30 34 47t51 17t51.5 -17t33.5 -47q28 -93 83 -201.5t99.5 -178t101 -151t62.5 -90.5q81 -127 81 -275z"
      ],
      "\uf044": [
        1792,
        "M888 352l116 116l-152 152l-116 -116v-56h96v-96h56zM1328 1072q-16 16 -33 -1l-350 -350q-17 -17 -1 -33t33 1l350 350q17 17 1 33zM1408 478v-190q0 -119 -84.5 -203.5t-203.5 -84.5h-832q-119 0 -203.5 84.5t-84.5 203.5v832q0 119 84.5 203.5t203.5 84.5h832 q63 0 117 -25q15 -7 18 -23q3 -17 -9 -29l-49 -49q-14 -14 -32 -8q-23 6 -45 6h-832q-66 0 -113 -47t-47 -113v-832q0 -66 47 -113t113 -47h832q66 0 113 47t47 113v126q0 13 9 22l64 64q15 15 35 7t20 -29zM1312 1216l288 -288l-672 -672h-288v288zM1756 1084l-92 -92 l-288 288l92 92q28 28 68 28t68 -28l152 -152q28 -28 28 -68t-28 -68z"
      ],
      "\uf045": [
        1664,
        "M1408 547v-259q0 -119 -84.5 -203.5t-203.5 -84.5h-832q-119 0 -203.5 84.5t-84.5 203.5v832q0 119 84.5 203.5t203.5 84.5h255v0q13 0 22.5 -9.5t9.5 -22.5q0 -27 -26 -32q-77 -26 -133 -60q-10 -4 -16 -4h-112q-66 0 -113 -47t-47 -113v-832q0 -66 47 -113t113 -47h832 q66 0 113 47t47 113v214q0 19 18 29q28 13 54 37q16 16 35 8q21 -9 21 -29zM1645 1043l-384 -384q-18 -19 -45 -19q-12 0 -25 5q-39 17 -39 59v192h-160q-323 0 -438 -131q-119 -137 -74 -473q3 -23 -20 -34q-8 -2 -12 -2q-16 0 -26 13q-10 14 -21 31t-39.5 68.5t-49.5 99.5 t-38.5 114t-17.5 122q0 49 3.5 91t14 90t28 88t47 81.5t68.5 74t94.5 61.5t124.5 48.5t159.5 30.5t196.5 11h160v192q0 42 39 59q13 5 25 5q26 0 45 -19l384 -384q19 -19 19 -45t-19 -45z"
      ],
      "\uf046": [
        1664,
        "M1408 606v-318q0 -119 -84.5 -203.5t-203.5 -84.5h-832q-119 0 -203.5 84.5t-84.5 203.5v832q0 119 84.5 203.5t203.5 84.5h832q63 0 117 -25q15 -7 18 -23q3 -17 -9 -29l-49 -49q-10 -10 -23 -10q-3 0 -9 2q-23 6 -45 6h-832q-66 0 -113 -47t-47 -113v-832 q0 -66 47 -113t113 -47h832q66 0 113 47t47 113v254q0 13 9 22l64 64q10 10 23 10q6 0 12 -3q20 -8 20 -29zM1639 1095l-814 -814q-24 -24 -57 -24t-57 24l-430 430q-24 24 -24 57t24 57l110 110q24 24 57 24t57 -24l263 -263l647 647q24 24 57 24t57 -24l110 -110 q24 -24 24 -57t-24 -57z"
      ],
      "\uf047": [
        1792,
        "M1792 640q0 -26 -19 -45l-256 -256q-19 -19 -45 -19t-45 19t-19 45v128h-384v-384h128q26 0 45 -19t19 -45t-19 -45l-256 -256q-19 -19 -45 -19t-45 19l-256 256q-19 19 -19 45t19 45t45 19h128v384h-384v-128q0 -26 -19 -45t-45 -19t-45 19l-256 256q-19 19 -19 45 t19 45l256 256q19 19 45 19t45 -19t19 -45v-128h384v384h-128q-26 0 -45 19t-19 45t19 45l256 256q19 19 45 19t45 -19l256 -256q19 -19 19 -45t-19 -45t-45 -19h-128v-384h384v128q0 26 19 45t45 19t45 -19l256 -256q19 -19 19 -45z"
      ],
      "\uf048": [
        1024,
        "M979 1395q19 19 32 13t13 -32v-1472q0 -26 -13 -32t-32 13l-710 710q-9 9 -13 19v-678q0 -26 -19 -45t-45 -19h-128q-26 0 -45 19t-19 45v1408q0 26 19 45t45 19h128q26 0 45 -19t19 -45v-678q4 10 13 19z"
      ],
      "\uf049": [
        1792,
        "M1747 1395q19 19 32 13t13 -32v-1472q0 -26 -13 -32t-32 13l-710 710q-9 9 -13 19v-710q0 -26 -13 -32t-32 13l-710 710q-9 9 -13 19v-678q0 -26 -19 -45t-45 -19h-128q-26 0 -45 19t-19 45v1408q0 26 19 45t45 19h128q26 0 45 -19t19 -45v-678q4 10 13 19l710 710 q19 19 32 13t13 -32v-710q4 10 13 19z"
      ],
      "\uf04a": [
        1664,
        "M1619 1395q19 19 32 13t13 -32v-1472q0 -26 -13 -32t-32 13l-710 710q-9 9 -13 19v-710q0 -26 -13 -32t-32 13l-710 710q-19 19 -19 45t19 45l710 710q19 19 32 13t13 -32v-710q4 10 13 19z"
      ],
      "\uf04b": [
        1408,
        "M1384 609l-1328 -738q-23 -13 -39.5 -3t-16.5 36v1472q0 26 16.5 36t39.5 -3l1328 -738q23 -13 23 -31t-23 -31z"
      ],
      "\uf04c": [
        1536.0,
        "M1536 1344v-1408q0 -26 -19 -45t-45 -19h-512q-26 0 -45 19t-19 45v1408q0 26 19 45t45 19h512q26 0 45 -19t19 -45zM640 1344v-1408q0 -26 -19 -45t-45 -19h-512q-26 0 -45 19t-19 45v1408q0 26 19 45t45 19h512q26 0 45 -19t19 -45z"
      ],
      "\uf04d": [
        1536.0,
        "M1536 1344v-1408q0 -26 -19 -45t-45 -19h-1408q-26 0 -45 19t-19 45v1408q0 26 19 45t45 19h1408q26 0 45 -19t19 -45z"
      ],
      "\uf04e": [
        1664,
        "M45 -115q-19 -19 -32 -13t-13 32v1472q0 26 13 32t32 -13l710 -710q9 -9 13 -19v710q0 26 13 32t32 -13l710 -710q19 -19 19 -45t-19 -45l-710 -710q-19 -19 -32 -13t-13 32v710q-4 -10 -13 -19z"
      ],
      "\uf050": [
        1792,
        "M45 -115q-19 -19 -32 -13t-13 32v1472q0 26 13 32t32 -13l710 -710q9 -9 13 -19v710q0 26 13 32t32 -13l710 -710q9 -9 13 -19v678q0 26 19 45t45 19h128q26 0 45 -19t19 -45v-1408q0 -26 -19 -45t-45 -19h-128q-26 0 -45 19t-19 45v678q-4 -10 -13 -19l-710 -710 q-19 -19 -32 -13t-13 32v710q-4 -10 -13 -19z"
      ],
      "\uf051": [
        1024,
        "M45 -115q-19 -19 -32 -13t-13 32v1472q0 26 13 32t32 -13l710 -710q9 -9 13 -19v678q0 26 19 45t45 19h128q26 0 45 -19t19 -45v-1408q0 -26 -19 -45t-45 -19h-128q-26 0 -45 19t-19 45v678q-4 -10 -13 -19z"
      ],
      "\uf052": [
        1538,
        "M14 557l710 710q19 19 45 19t45 -19l710 -710q19 -19 13 -32t-32 -13h-1472q-26 0 -32 13t13 32zM1473 0h-1408q-26 0 -45 19t-19 45v256q0 26 19 45t45 19h1408q26 0 45 -19t19 -45v-256q0 -26 -19 -45t-45 -19z"
      ],
      "\uf053": [
        1280,
        "M1171 1235l-531 -531l531 -531q19 -19 19 -45t-19 -45l-166 -166q-19 -19 -45 -19t-45 19l-742 742q-19 19 -19 45t19 45l742 742q19 19 45 19t45 -19l166 -166q19 -19 19 -45t-19 -45z"
      ],
      "\uf054": [
        1280,
        "M1107 659l-742 -742q-19 -19 -45 -19t-45 19l-166 166q-19 19 -19 45t19 45l531 531l-531 531q-19 19 -19 45t19 45l166 166q19 19 45 19t45 -19l742 -742q19 -19 19 -45t-19 -45z"
      ],
      "\uf055": [
        1536.0,
        "M1216 576v128q0 26 -19 45t-45 19h-256v256q0 26 -19 45t-45 19h-128q-26 0 -45 -19t-19 -45v-256h-256q-26 0 -45 -19t-19 -45v-128q0 -26 19 -45t45 -19h256v-256q0 -26 19 -45t45 -19h128q26 0 45 19t19 45v256h256q26 0 45 19t19 45zM1536 640q0 -209 -103 -385.5 t-279.5 -279.5t-385.5 -103t-385.5 103t-279.5 279.5t-103 385.5t103 385.5t279.5 279.5t385.5 103t385.5 -103t279.5 -279.5t103 -385.5z"
      ],
      "\uf056": [
        1536.0,
        "M1216 576v128q0 26 -19 45t-45 19h-768q-26 0 -45 -19t-19 -45v-128q0 -26 19 -45t45 -19h768q26 0 45 19t19 45zM1536 640q0 -209 -103 -385.5t-279.5 -279.5t-385.5 -103t-385.5 103t-279.5 279.5t-103 385.5t103 385.5t279.5 279.5t385.5 103t385.5 -103t279.5 -279.5 t103 -385.5z"
      ],
      "\uf057": [
        1536.0,
        "M1149 414q0 26 -19 45l-181 181l181 181q19 19 19 45q0 27 -19 46l-90 90q-19 19 -46 19q-26 0 -45 -19l-181 -181l-181 181q-19 19 -45 19q-27 0 -46 -19l-90 -90q-19 -19 -19 -46q0 -26 19 -45l181 -181l-181 -181q-19 -19 -19 -45q0 -27 19 -46l90 -90q19 -19 46 -19 q26 0 45 19l181 181l181 -181q19 -19 45 -19q27 0 46 19l90 90q19 19 19 46zM1536 640q0 -209 -103 -385.5t-279.5 -279.5t-385.5 -103t-385.5 103t-279.5 279.5t-103 385.5t103 385.5t279.5 279.5t385.5 103t385.5 -103t279.5 -279.5t103 -385.5z"
      ],
      "\uf058": [
        1536.0,
        "M1284 802q0 28 -18 46l-91 90q-19 19 -45 19t-45 -19l-408 -407l-226 226q-19 19 -45 19t-45 -19l-91 -90q-18 -18 -18 -46q0 -27 18 -45l362 -362q19 -19 45 -19q27 0 46 19l543 543q18 18 18 45zM1536 640q0 -209 -103 -385.5t-279.5 -279.5t-385.5 -103t-385.5 103 t-279.5 279.5t-103 385.5t103 385.5t279.5 279.5t385.5 103t385.5 -103t279.5 -279.5t103 -385.5z"
      ],
      "\uf059": [
        1536.0,
        "M896 160v192q0 14 -9 23t-23 9h-192q-14 0 -23 -9t-9 -23v-192q0 -14 9 -23t23 -9h192q14 0 23 9t9 23zM1152 832q0 88 -55.5 163t-138.5 116t-170 41q-243 0 -371 -213q-15 -24 8 -42l132 -100q7 -6 19 -6q16 0 25 12q53 68 86 92q34 24 86 24q48 0 85.5 -26t37.5 -59 q0 -38 -20 -61t-68 -45q-63 -28 -115.5 -86.5t-52.5 -125.5v-36q0 -14 9 -23t23 -9h192q14 0 23 9t9 23q0 19 21.5 49.5t54.5 49.5q32 18 49 28.5t46 35t44.5 48t28 60.5t12.5 81zM1536 640q0 -209 -103 -385.5t-279.5 -279.5t-385.5 -103t-385.5 103t-279.5 279.5 t-103 385.5t103 385.5t279.5 279.5t385.5 103t385.5 -103t279.5 -279.5t103 -385.5z"
      ],
      "\uf05a": [
        1536.0,
        "M1024 160v160q0 14 -9 23t-23 9h-96v512q0 14 -9 23t-23 9h-320q-14 0 -23 -9t-9 -23v-160q0 -14 9 -23t23 -9h96v-320h-96q-14 0 -23 -9t-9 -23v-160q0 -14 9 -23t23 -9h448q14 0 23 9t9 23zM896 1056v160q0 14 -9 23t-23 9h-192q-14 0 -23 -9t-9 -23v-160q0 -14 9 -23 t23 -9h192q14 0 23 9t9 23zM1536 640q0 -209 -103 -385.5t-279.5 -279.5t-385.5 -103t-385.5 103t-279.5 279.5t-103 385.5t103 385.5t279.5 279.5t385.5 103t385.5 -103t279.5 -279.5t103 -385.5z"
      ],
      "\uf05b": [
        1536.0,
        "M1197 512h-109q-26 0 -45 19t-19 45v128q0 26 19 45t45 19h109q-32 108 -112.5 188.5t-188.5 112.5v-109q0 -26 -19 -45t-45 -19h-128q-26 0 -45 19t-19 45v109q-108 -32 -188.5 -112.5t-112.5 -188.5h109q26 0 45 -19t19 -45v-128q0 -26 -19 -45t-45 -19h-109 q32 -108 112.5 -188.5t188.5 -112.5v109q0 26 19 45t45 19h128q26 0 45 -19t19 -45v-109q108 32 188.5 112.5t112.5 188.5zM1536 704v-128q0 -26 -19 -45t-45 -19h-143q-37 -161 -154.5 -278.5t-278.5 -154.5v-143q0 -26 -19 -45t-45 -19h-128q-26 0 -45 19t-19 45v143 q-161 37 -278.5 154.5t-154.5 278.5h-143q-26 0 -45 19t-19 45v128q0 26 19 45t45 19h143q37 161 154.5 278.5t278.5 154.5v143q0 26 19 45t45 19h128q26 0 45 -19t19 -45v-143q161 -37 278.5 -154.5t154.5 -278.5h143q26 0 45 -19t19 -45z"
      ],
      "\uf05c": [
        1536.0,
        "M1097 457l-146 -146q-10 -10 -23 -10t-23 10l-137 137l-137 -137q-10 -10 -23 -10t-23 10l-146 146q-10 10 -10 23t10 23l137 137l-137 137q-10 10 -10 23t10 23l146 146q10 10 23 10t23 -10l137 -137l137 137q10 10 23 10t23 -10l146 -146q10 -10 10 -23t-10 -23 l-137 -137l137 -137q10 -10 10 -23t-10 -23zM1312 640q0 148 -73 273t-198 198t-273 73t-273 -73t-198 -198t-73 -273t73 -273t198 -198t273 -73t273 73t198 198t73 273zM1536 640q0 -209 -103 -385.5t-279.5 -279.5t-385.5 -103t-385.5 103t-279.5 279.5t-103 385.5 t103 385.5t279.5 279.5t385.5 103t385.5 -103t279.5 -279.5t103 -385.5z"
      ],
      "\uf05d": [
        1536.0,
        "M1171 723l-422 -422q-19 -19 -45 -19t-45 19l-294 294q-19 19 -19 45t19 45l102 102q19 19 45 19t45 -19l147 -147l275 275q19 19 45 19t45 -19l102 -102q19 -19 19 -45t-19 -45zM1312 640q0 148 -73 273t-198 198t-273 73t-273 -73t-198 -198t-73 -273t73 -273t198 -198 t273 -73t273 73t198 198t73 273zM1536 640q0 -209 -103 -385.5t-279.5 -279.5t-385.5 -103t-385.5 103t-279.5 279.5t-103 385.5t103 385.5t279.5 279.5t385.5 103t385.5 -103t279.5 -279.5t103 -385.5z"
      ],
      "\uf05e": [
        1536.0,
        "M1312 643q0 161 -87 295l-754 -753q137 -89 297 -89q111 0 211.5 43.5t173.5 116.5t116 174.5t43 212.5zM313 344l755 754q-135 91 -300 91q-148 0 -273 -73t-198 -199t-73 -274q0 -162 89 -299zM1536 643q0 -157 -61 -300t-163.5 -246t-245 -164t-298.5 -61t-298.5 61 t-245 164t-163.5 246t-61 300t61 299.5t163.5 245.5t245 164t298.5 61t298.5 -61t245 -164t163.5 -245.5t61 -299.5z"
      ],
      "\uf060": [
        1536.0,
        "M1536 640v-128q0 -53 -32.5 -90.5t-84.5 -37.5h-704l293 -294q38 -36 38 -90t-38 -90l-75 -76q-37 -37 -90 -37q-52 0 -91 37l-651 652q-37 37 -37 90q0 52 37 91l651 650q38 38 91 38q52 0 90 -38l75 -74q38 -38 38 -91t-38 -91l-293 -293h704q52 0 84.5 -37.5 t32.5 -90.5z"
      ],
      "\uf061": [
        1536.0,
        "M1472 576q0 -54 -37 -91l-651 -651q-39 -37 -91 -37q-51 0 -90 37l-75 75q-38 38 -38 91t38 91l293 293h-704q-52 0 -84.5 37.5t-32.5 90.5v128q0 53 32.5 90.5t84.5 37.5h704l-293 294q-38 36 -38 90t38 90l75 75q38 38 90 38q53 0 91 -38l651 -651q37 -35 37 -90z"
      ],
      "\uf062": [
        1664,
        "M1611 565q0 -51 -37 -90l-75 -75q-38 -38 -91 -38q-54 0 -90 38l-294 293v-704q0 -52 -37.5 -84.5t-90.5 -32.5h-128q-53 0 -90.5 32.5t-37.5 84.5v704l-294 -293q-36 -38 -90 -38t-90 38l-75 75q-38 38 -38 90q0 53 38 91l651 651q35 37 90 37q54 0 91 -37l651 -651 q37 -39 37 -91z"
      ],
      "\uf063": [
        1664,
        "M1611 704q0 -53 -37 -90l-651 -652q-39 -37 -91 -37q-53 0 -90 37l-651 652q-38 36 -38 90q0 53 38 91l74 75q39 37 91 37q53 0 90 -37l294 -294v704q0 52 38 90t90 38h128q52 0 90 -38t38 -90v-704l294 294q37 37 90 37q52 0 91 -37l75 -75q37 -39 37 -91z"
      ],
      "\uf064": [
        1792,
        "M1792 896q0 -26 -19 -45l-512 -512q-19 -19 -45 -19t-45 19t-19 45v256h-224q-98 0 -175.5 -6t-154 -21.5t-133 -42.5t-105.5 -69.5t-80 -101t-48.5 -138.5t-17.5 -181q0 -55 5 -123q0 -6 2.5 -23.5t2.5 -26.5q0 -15 -8.5 -25t-23.5 -10q-16 0 -28 17q-7 9 -13 22 t-13.5 30t-10.5 24q-127 285 -127 451q0 199 53 333q162 403 875 403h224v256q0 26 19 45t45 19t45 -19l512 -512q19 -19 19 -45z"
      ],
      "\uf065": [
        1536.0,
        "M755 480q0 -13 -10 -23l-332 -332l144 -144q19 -19 19 -45t-19 -45t-45 -19h-448q-26 0 -45 19t-19 45v448q0 26 19 45t45 19t45 -19l144 -144l332 332q10 10 23 10t23 -10l114 -114q10 -10 10 -23zM1536 1344v-448q0 -26 -19 -45t-45 -19t-45 19l-144 144l-332 -332 q-10 -10 -23 -10t-23 10l-114 114q-10 10 -10 23t10 23l332 332l-144 144q-19 19 -19 45t19 45t45 19h448q26 0 45 -19t19 -45z"
      ],
      "\uf066": [
        1536.0,
        "M768 576v-448q0 -26 -19 -45t-45 -19t-45 19l-144 144l-332 -332q-10 -10 -23 -10t-23 10l-114 114q-10 10 -10 23t10 23l332 332l-144 144q-19 19 -19 45t19 45t45 19h448q26 0 45 -19t19 -45zM1523 1248q0 -13 -10 -23l-332 -332l144 -144q19 -19 19 -45t-19 -45 t-45 -19h-448q-26 0 -45 19t-19 45v448q0 26 19 45t45 19t45 -19l144 -144l332 332q10 10 23 10t23 -10l114 -114q10 -10 10 -23z"
      ],
      "\uf067": [
        1408,
        "M1408 800v-192q0 -40 -28 -68t-68 -28h-416v-416q0 -40 -28 -68t-68 -28h-192q-40 0 -68 28t-28 68v416h-416q-40 0 -68 28t-28 68v192q0 40 28 68t68 28h416v416q0 40 28 68t68 28h192q40 0 68 -28t28 -68v-416h416q40 0 68 -28t28 -68z"
      ],
      "\uf068": [
        1408,
        "M1408 800v-192q0 -40 -28 -68t-68 -28h-1216q-40 0 -68 28t-28 68v192q0 40 28 68t68 28h1216q40 0 68 -28t28 -68z"
      ],
      "\uf069": [
        1664,
        "M1482 486q46 -26 59.5 -77.5t-12.5 -97.5l-64 -110q-26 -46 -77.5 -59.5t-97.5 12.5l-266 153v-307q0 -52 -38 -90t-90 -38h-128q-52 0 -90 38t-38 90v307l-266 -153q-46 -26 -97.5 -12.5t-77.5 59.5l-64 110q-26 46 -12.5 97.5t59.5 77.5l266 154l-266 154 q-46 26 -59.5 77.5t12.5 97.5l64 110q26 46 77.5 59.5t97.5 -12.5l266 -153v307q0 52 38 90t90 38h128q52 0 90 -38t38 -90v-307l266 153q46 26 97.5 12.5t77.5 -59.5l64 -110q26 -46 12.5 -97.5t-59.5 -77.5l-266 -154z"
      ],
      "\uf06a": [
        1536.0,
        "M768 1408q209 0 385.5 -103t279.5 -279.5t103 -385.5t-103 -385.5t-279.5 -279.5t-385.5 -103t-385.5 103t-279.5 279.5t-103 385.5t103 385.5t279.5 279.5t385.5 103zM896 161v190q0 14 -9 23.5t-22 9.5h-192q-13 0 -23 -10t-10 -23v-190q0 -13 10 -23t23 -10h192 q13 0 22 9.5t9 23.5zM894 505l18 621q0 12 -10 18q-10 8 -24 8h-220q-14 0 -24 -8q-10 -6 -10 -18l17 -621q0 -10 10 -17.5t24 -7.5h185q14 0 23.5 7.5t10.5 17.5z"
      ],
      "\uf06b": [
        1536.0,
        "M928 180v56v468v192h-320v-192v-468v-56q0 -25 18 -38.5t46 -13.5h192q28 0 46 13.5t18 38.5zM472 1024h195l-126 161q-26 31 -69 31q-40 0 -68 -28t-28 -68t28 -68t68 -28zM1160 1120q0 40 -28 68t-68 28q-43 0 -69 -31l-125 -161h194q40 0 68 28t28 68zM1536 864v-320 q0 -14 -9 -23t-23 -9h-96v-416q0 -40 -28 -68t-68 -28h-1088q-40 0 -68 28t-28 68v416h-96q-14 0 -23 9t-9 23v320q0 14 9 23t23 9h440q-93 0 -158.5 65.5t-65.5 158.5t65.5 158.5t158.5 65.5q107 0 168 -77l128 -165l128 165q61 77 168 77q93 0 158.5 -65.5t65.5 -158.5 t-65.5 -158.5t-158.5 -65.5h440q14 0 23 -9t9 -23z"
      ],
      "\uf06c": [
        1792,
        "M1280 832q0 26 -19 45t-45 19q-172 0 -318 -49.5t-259.5 -134t-235.5 -219.5q-19 -21 -19 -45q0 -26 19 -45t45 -19q24 0 45 19q27 24 74 71t67 66q137 124 268.5 176t313.5 52q26 0 45 19t19 45zM1792 1030q0 -95 -20 -193q-46 -224 -184.5 -383t-357.5 -268 q-214 -108 -438 -108q-148 0 -286 47q-15 5 -88 42t-96 37q-16 0 -39.5 -32t-45 -70t-52.5 -70t-60 -32q-43 0 -63.5 17.5t-45.5 59.5q-2 4 -6 11t-5.5 10t-3 9.5t-1.5 13.5q0 35 31 73.5t68 65.5t68 56t31 48q0 4 -14 38t-16 44q-9 51 -9 104q0 115 43.5 220t119 184.5 t170.5 139t204 95.5q55 18 145 25.5t179.5 9t178.5 6t163.5 24t113.5 56.5l29.5 29.5t29.5 28t27 20t36.5 16t43.5 4.5q39 0 70.5 -46t47.5 -112t24 -124t8 -96z"
      ],
      "\uf06d": [
        1408,
        "M1408 -160v-64q0 -13 -9.5 -22.5t-22.5 -9.5h-1344q-13 0 -22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h1344q13 0 22.5 -9.5t9.5 -22.5zM1152 896q0 -78 -24.5 -144t-64 -112.5t-87.5 -88t-96 -77.5t-87.5 -72t-64 -81.5t-24.5 -96.5q0 -96 67 -224l-4 1l1 -1 q-90 41 -160 83t-138.5 100t-113.5 122.5t-72.5 150.5t-27.5 184q0 78 24.5 144t64 112.5t87.5 88t96 77.5t87.5 72t64 81.5t24.5 96.5q0 94 -66 224l3 -1l-1 1q90 -41 160 -83t138.5 -100t113.5 -122.5t72.5 -150.5t27.5 -184z"
      ],
      "\uf06e": [
        1792,
        "M1664 576q-152 236 -381 353q61 -104 61 -225q0 -185 -131.5 -316.5t-316.5 -131.5t-316.5 131.5t-131.5 316.5q0 121 61 225q-229 -117 -381 -353q133 -205 333.5 -326.5t434.5 -121.5t434.5 121.5t333.5 326.5zM944 960q0 20 -14 34t-34 14q-125 0 -214.5 -89.5 t-89.5 -214.5q0 -20 14 -34t34 -14t34 14t14 34q0 86 61 147t147 61q20 0 34 14t14 34zM1792 576q0 -34 -20 -69q-140 -230 -376.5 -368.5t-499.5 -138.5t-499.5 139t-376.5 368q-20 35 -20 69t20 69q140 229 376.5 368t499.5 139t499.5 -139t376.5 -368q20 -35 20 -69z"
      ],
      "\uf070": [
        1792,
        "M555 201l78 141q-87 63 -136 159t-49 203q0 121 61 225q-229 -117 -381 -353q167 -258 427 -375zM944 960q0 20 -14 34t-34 14q-125 0 -214.5 -89.5t-89.5 -214.5q0 -20 14 -34t34 -14t34 14t14 34q0 86 61 147t147 61q20 0 34 14t14 34zM1307 1151q0 -7 -1 -9 q-106 -189 -316 -567t-315 -566l-49 -89q-10 -16 -28 -16q-12 0 -134 70q-16 10 -16 28q0 12 44 87q-143 65 -263.5 173t-208.5 245q-20 31 -20 69t20 69q153 235 380 371t496 136q89 0 180 -17l54 97q10 16 28 16q5 0 18 -6t31 -15.5t33 -18.5t31.5 -18.5t19.5 -11.5 q16 -10 16 -27zM1344 704q0 -139 -79 -253.5t-209 -164.5l280 502q8 -45 8 -84zM1792 576q0 -35 -20 -69q-39 -64 -109 -145q-150 -172 -347.5 -267t-419.5 -95l74 132q212 18 392.5 137t301.5 307q-115 179 -282 294l63 112q95 -64 182.5 -153t144.5 -184q20 -34 20 -69z "
      ],
      "\uf071": [
        1792,
        "M1024 161v190q0 14 -9.5 23.5t-22.5 9.5h-192q-13 0 -22.5 -9.5t-9.5 -23.5v-190q0 -14 9.5 -23.5t22.5 -9.5h192q13 0 22.5 9.5t9.5 23.5zM1022 535l18 459q0 12 -10 19q-13 11 -24 11h-220q-11 0 -24 -11q-10 -7 -10 -21l17 -457q0 -10 10 -16.5t24 -6.5h185 q14 0 23.5 6.5t10.5 16.5zM1008 1469l768 -1408q35 -63 -2 -126q-17 -29 -46.5 -46t-63.5 -17h-1536q-34 0 -63.5 17t-46.5 46q-37 63 -2 126l768 1408q17 31 47 49t65 18t65 -18t47 -49z"
      ],
      "\uf072": [
        1408,
        "M1376 1376q44 -52 12 -148t-108 -172l-161 -161l160 -696q5 -19 -12 -33l-128 -96q-7 -6 -19 -6q-4 0 -7 1q-15 3 -21 16l-279 508l-259 -259l53 -194q5 -17 -8 -31l-96 -96q-9 -9 -23 -9h-2q-15 2 -24 13l-189 252l-252 189q-11 7 -13 23q-1 13 9 25l96 97q9 9 23 9 q6 0 8 -1l194 -53l259 259l-508 279q-14 8 -17 24q-2 16 9 27l128 128q14 13 30 8l665 -159l160 160q76 76 172 108t148 -12z"
      ],
      "\uf073": [
        1664,
        "M128 -128h288v288h-288v-288zM480 -128h320v288h-320v-288zM128 224h288v320h-288v-320zM480 224h320v320h-320v-320zM128 608h288v288h-288v-288zM864 -128h320v288h-320v-288zM480 608h320v288h-320v-288zM1248 -128h288v288h-288v-288zM864 224h320v320h-320v-320z M512 1088v288q0 13 -9.5 22.5t-22.5 9.5h-64q-13 0 -22.5 -9.5t-9.5 -22.5v-288q0 -13 9.5 -22.5t22.5 -9.5h64q13 0 22.5 9.5t9.5 22.5zM1248 224h288v320h-288v-320zM864 608h320v288h-320v-288zM1248 608h288v288h-288v-288zM1280 1088v288q0 13 -9.5 22.5t-22.5 9.5h-64 q-13 0 -22.5 -9.5t-9.5 -22.5v-288q0 -13 9.5 -22.5t22.5 -9.5h64q13 0 22.5 9.5t9.5 22.5zM1664 1152v-1280q0 -52 -38 -90t-90 -38h-1408q-52 0 -90 38t-38 90v1280q0 52 38 90t90 38h128v96q0 66 47 113t113 47h64q66 0 113 -47t47 -113v-96h384v96q0 66 47 113t113 47 h64q66 0 113 -47t47 -113v-96h128q52 0 90 -38t38 -90z"
      ],
      "\uf074": [
        1792,
        "M666 1055q-60 -92 -137 -273q-22 45 -37 72.5t-40.5 63.5t-51 56.5t-63 35t-81.5 14.5h-224q-14 0 -23 9t-9 23v192q0 14 9 23t23 9h224q250 0 410 -225zM1792 256q0 -14 -9 -23l-320 -320q-9 -9 -23 -9q-13 0 -22.5 9.5t-9.5 22.5v192q-32 0 -85 -0.5t-81 -1t-73 1 t-71 5t-64 10.5t-63 18.5t-58 28.5t-59 40t-55 53.5t-56 69.5q59 93 136 273q22 -45 37 -72.5t40.5 -63.5t51 -56.5t63 -35t81.5 -14.5h256v192q0 14 9 23t23 9q12 0 24 -10l319 -319q9 -9 9 -23zM1792 1152q0 -14 -9 -23l-320 -320q-9 -9 -23 -9q-13 0 -22.5 9.5t-9.5 22.5 v192h-256q-48 0 -87 -15t-69 -45t-51 -61.5t-45 -77.5q-32 -62 -78 -171q-29 -66 -49.5 -111t-54 -105t-64 -100t-74 -83t-90 -68.5t-106.5 -42t-128 -16.5h-224q-14 0 -23 9t-9 23v192q0 14 9 23t23 9h224q48 0 87 15t69 45t51 61.5t45 77.5q32 62 78 171q29 66 49.5 111 t54 105t64 100t74 83t90 68.5t106.5 42t128 16.5h256v192q0 14 9 23t23 9q12 0 24 -10l319 -319q9 -9 9 -23z"
      ],
      "\uf075": [
        1792,
        "M1792 640q0 -174 -120 -321.5t-326 -233t-450 -85.5q-70 0 -145 8q-198 -175 -460 -242q-49 -14 -114 -22q-17 -2 -30.5 9t-17.5 29v1q-3 4 -0.5 12t2 10t4.5 9.5l6 9t7 8.5t8 9q7 8 31 34.5t34.5 38t31 39.5t32.5 51t27 59t26 76q-157 89 -247.5 220t-90.5 281 q0 130 71 248.5t191 204.5t286 136.5t348 50.5q244 0 450 -85.5t326 -233t120 -321.5z"
      ],
      "\uf076": [
        1536.0,
        "M1536 704v-128q0 -201 -98.5 -362t-274 -251.5t-395.5 -90.5t-395.5 90.5t-274 251.5t-98.5 362v128q0 26 19 45t45 19h384q26 0 45 -19t19 -45v-128q0 -52 23.5 -90t53.5 -57t71 -30t64 -13t44 -2t44 2t64 13t71 30t53.5 57t23.5 90v128q0 26 19 45t45 19h384 q26 0 45 -19t19 -45zM512 1344v-384q0 -26 -19 -45t-45 -19h-384q-26 0 -45 19t-19 45v384q0 26 19 45t45 19h384q26 0 45 -19t19 -45zM1536 1344v-384q0 -26 -19 -45t-45 -19h-384q-26 0 -45 19t-19 45v384q0 26 19 45t45 19h384q26 0 45 -19t19 -45z"
      ],
      "\uf077": [
        1792,
        "M1683 205l-166 -165q-19 -19 -45 -19t-45 19l-531 531l-531 -531q-19 -19 -45 -19t-45 19l-166 165q-19 19 -19 45.5t19 45.5l742 741q19 19 45 19t45 -19l742 -741q19 -19 19 -45.5t-19 -45.5z"
      ],
      "\uf078": [
        1792,
        "M1683 728l-742 -741q-19 -19 -45 -19t-45 19l-742 741q-19 19 -19 45.5t19 45.5l166 165q19 19 45 19t45 -19l531 -531l531 531q19 19 45 19t45 -19l166 -165q19 -19 19 -45.5t-19 -45.5z"
      ],
      "\uf079": [
        1920,
        "M1280 32q0 -13 -9.5 -22.5t-22.5 -9.5h-960q-8 0 -13.5 2t-9 7t-5.5 8t-3 11.5t-1 11.5v13v11v160v416h-192q-26 0 -45 19t-19 45q0 24 15 41l320 384q19 22 49 22t49 -22l320 -384q15 -17 15 -41q0 -26 -19 -45t-45 -19h-192v-384h576q16 0 25 -11l160 -192q7 -10 7 -21 zM1920 448q0 -24 -15 -41l-320 -384q-20 -23 -49 -23t-49 23l-320 384q-15 17 -15 41q0 26 19 45t45 19h192v384h-576q-16 0 -25 12l-160 192q-7 9 -7 20q0 13 9.5 22.5t22.5 9.5h960q8 0 13.5 -2t9 -7t5.5 -8t3 -11.5t1 -11.5v-13v-11v-160v-416h192q26 0 45 -19t19 -45z "
      ],
      "\uf07a": [
        1664,
        "M640 0q0 -52 -38 -90t-90 -38t-90 38t-38 90t38 90t90 38t90 -38t38 -90zM1536 0q0 -52 -38 -90t-90 -38t-90 38t-38 90t38 90t90 38t90 -38t38 -90zM1664 1088v-512q0 -24 -16.5 -42.5t-40.5 -21.5l-1044 -122q13 -60 13 -70q0 -16 -24 -64h920q26 0 45 -19t19 -45 t-19 -45t-45 -19h-1024q-26 0 -45 19t-19 45q0 11 8 31.5t16 36t21.5 40t15.5 29.5l-177 823h-204q-26 0 -45 19t-19 45t19 45t45 19h256q16 0 28.5 -6.5t19.5 -15.5t13 -24.5t8 -26t5.5 -29.5t4.5 -26h1201q26 0 45 -19t19 -45z"
      ],
      "\uf07b": [
        1664,
        "M1664 928v-704q0 -92 -66 -158t-158 -66h-1216q-92 0 -158 66t-66 158v960q0 92 66 158t158 66h320q92 0 158 -66t66 -158v-32h672q92 0 158 -66t66 -158z"
      ],
      "\uf07c": [
        1920,
        "M1879 584q0 -31 -31 -66l-336 -396q-43 -51 -120.5 -86.5t-143.5 -35.5h-1088q-34 0 -60.5 13t-26.5 43q0 31 31 66l336 396q43 51 120.5 86.5t143.5 35.5h1088q34 0 60.5 -13t26.5 -43zM1536 928v-160h-832q-94 0 -197 -47.5t-164 -119.5l-337 -396l-5 -6q0 4 -0.5 12.5 t-0.5 12.5v960q0 92 66 158t158 66h320q92 0 158 -66t66 -158v-32h544q92 0 158 -66t66 -158z"
      ],
      "\uf07d": [
        768,
        "M704 1216q0 -26 -19 -45t-45 -19h-128v-1024h128q26 0 45 -19t19 -45t-19 -45l-256 -256q-19 -19 -45 -19t-45 19l-256 256q-19 19 -19 45t19 45t45 19h128v1024h-128q-26 0 -45 19t-19 45t19 45l256 256q19 19 45 19t45 -19l256 -256q19 -19 19 -45z"
      ],
      "\uf07e": [
        1792,
        "M1792 640q0 -26 -19 -45l-256 -256q-19 -19 -45 -19t-45 19t-19 45v128h-1024v-128q0 -26 -19 -45t-45 -19t-45 19l-256 256q-19 19 -19 45t19 45l256 256q19 19 45 19t45 -19t19 -45v-128h1024v128q0 26 19 45t45 19t45 -19l256 -256q19 -19 19 -45z"
      ],
      "\uf080": [
        2048,
        "M640 640v-512h-256v512h256zM1024 1152v-1024h-256v1024h256zM2048 0v-128h-2048v1536h128v-1408h1920zM1408 896v-768h-256v768h256zM1792 1280v-1152h-256v1152h256z"
      ],
      "\uf081": [
        1536.0,
        "M1280 926q-56 -25 -121 -34q68 40 93 117q-65 -38 -134 -51q-61 66 -153 66q-87 0 -148.5 -61.5t-61.5 -148.5q0 -29 5 -48q-129 7 -242 65t-192 155q-29 -50 -29 -106q0 -114 91 -175q-47 1 -100 26v-2q0 -75 50 -133.5t123 -72.5q-29 -8 -51 -8q-13 0 -39 4 q21 -63 74.5 -104t121.5 -42q-116 -90 -261 -90q-26 0 -50 3q148 -94 322 -94q112 0 210 35.5t168 95t120.5 137t75 162t24.5 168.5q0 18 -1 27q63 45 105 109zM1536 1120v-960q0 -119 -84.5 -203.5t-203.5 -84.5h-960q-119 0 -203.5 84.5t-84.5 203.5v960q0 119 84.5 203.5 t203.5 84.5h960q119 0 203.5 -84.5t84.5 -203.5z"
      ],
      "\uf082": [
        1536.0,
        "M1248 1408q119 0 203.5 -84.5t84.5 -203.5v-960q0 -119 -84.5 -203.5t-203.5 -84.5h-188v595h199l30 232h-229v148q0 56 23.5 84t91.5 28l122 1v207q-63 9 -178 9q-136 0 -217.5 -80t-81.5 -226v-171h-200v-232h200v-595h-532q-119 0 -203.5 84.5t-84.5 203.5v960 q0 119 84.5 203.5t203.5 84.5h960z"
      ],
      "\uf083": [
        1792,
        "M928 704q0 14 -9 23t-23 9q-66 0 -113 -47t-47 -113q0 -14 9 -23t23 -9t23 9t9 23q0 40 28 68t68 28q14 0 23 9t9 23zM1152 574q0 -106 -75 -181t-181 -75t-181 75t-75 181t75 181t181 75t181 -75t75 -181zM128 0h1536v128h-1536v-128zM1280 574q0 159 -112.5 271.5 t-271.5 112.5t-271.5 -112.5t-112.5 -271.5t112.5 -271.5t271.5 -112.5t271.5 112.5t112.5 271.5zM256 1216h384v128h-384v-128zM128 1024h1536v118v138h-828l-64 -128h-644v-128zM1792 1280v-1280q0 -53 -37.5 -90.5t-90.5 -37.5h-1536q-53 0 -90.5 37.5t-37.5 90.5v1280 q0 53 37.5 90.5t90.5 37.5h1536q53 0 90.5 -37.5t37.5 -90.5z"
      ],
      "\uf084": [
        1792,
        "M832 1024q0 80 -56 136t-136 56t-136 -56t-56 -136q0 -42 19 -83q-41 19 -83 19q-80 0 -136 -56t-56 -136t56 -136t136 -56t136 56t56 136q0 42 -19 83q41 -19 83 -19q80 0 136 56t56 136zM1683 320q0 -17 -49 -66t-66 -49q-9 0 -28.5 16t-36.5 33t-38.5 40t-24.5 26 l-96 -96l220 -220q28 -28 28 -68q0 -42 -39 -81t-81 -39q-40 0 -68 28l-671 671q-176 -131 -365 -131q-163 0 -265.5 102.5t-102.5 265.5q0 160 95 313t248 248t313 95q163 0 265.5 -102.5t102.5 -265.5q0 -189 -131 -365l355 -355l96 96q-3 3 -26 24.5t-40 38.5t-33 36.5 t-16 28.5q0 17 49 66t66 49q13 0 23 -10q6 -6 46 -44.5t82 -79.5t86.5 -86t73 -78t28.5 -41z"
      ],
      "\uf085": [
        1920,
        "M896 640q0 106 -75 181t-181 75t-181 -75t-75 -181t75 -181t181 -75t181 75t75 181zM1664 128q0 52 -38 90t-90 38t-90 -38t-38 -90q0 -53 37.5 -90.5t90.5 -37.5t90.5 37.5t37.5 90.5zM1664 1152q0 52 -38 90t-90 38t-90 -38t-38 -90q0 -53 37.5 -90.5t90.5 -37.5 t90.5 37.5t37.5 90.5zM1280 731v-185q0 -10 -7 -19.5t-16 -10.5l-155 -24q-11 -35 -32 -76q34 -48 90 -115q7 -11 7 -20q0 -12 -7 -19q-23 -30 -82.5 -89.5t-78.5 -59.5q-11 0 -21 7l-115 90q-37 -19 -77 -31q-11 -108 -23 -155q-7 -24 -30 -24h-186q-11 0 -20 7.5t-10 17.5 l-23 153q-34 10 -75 31l-118 -89q-7 -7 -20 -7q-11 0 -21 8q-144 133 -144 160q0 9 7 19q10 14 41 53t47 61q-23 44 -35 82l-152 24q-10 1 -17 9.5t-7 19.5v185q0 10 7 19.5t16 10.5l155 24q11 35 32 76q-34 48 -90 115q-7 11 -7 20q0 12 7 20q22 30 82 89t79 59q11 0 21 -7 l115 -90q34 18 77 32q11 108 23 154q7 24 30 24h186q11 0 20 -7.5t10 -17.5l23 -153q34 -10 75 -31l118 89q8 7 20 7q11 0 21 -8q144 -133 144 -160q0 -8 -7 -19q-12 -16 -42 -54t-45 -60q23 -48 34 -82l152 -23q10 -2 17 -10.5t7 -19.5zM1920 198v-140q0 -16 -149 -31 q-12 -27 -30 -52q51 -113 51 -138q0 -4 -4 -7q-122 -71 -124 -71q-8 0 -46 47t-52 68q-20 -2 -30 -2t-30 2q-14 -21 -52 -68t-46 -47q-2 0 -124 71q-4 3 -4 7q0 25 51 138q-18 25 -30 52q-149 15 -149 31v140q0 16 149 31q13 29 30 52q-51 113 -51 138q0 4 4 7q4 2 35 20 t59 34t30 16q8 0 46 -46.5t52 -67.5q20 2 30 2t30 -2q51 71 92 112l6 2q4 0 124 -70q4 -3 4 -7q0 -25 -51 -138q17 -23 30 -52q149 -15 149 -31zM1920 1222v-140q0 -16 -149 -31q-12 -27 -30 -52q51 -113 51 -138q0 -4 -4 -7q-122 -71 -124 -71q-8 0 -46 47t-52 68 q-20 -2 -30 -2t-30 2q-14 -21 -52 -68t-46 -47q-2 0 -124 71q-4 3 -4 7q0 25 51 138q-18 25 -30 52q-149 15 -149 31v140q0 16 149 31q13 29 30 52q-51 113 -51 138q0 4 4 7q4 2 35 20t59 34t30 16q8 0 46 -46.5t52 -67.5q20 2 30 2t30 -2q51 71 92 112l6 2q4 0 124 -70 q4 -3 4 -7q0 -25 -51 -138q17 -23 30 -52q149 -15 149 -31z"
      ],
      "\uf086": [
        1792,
        "M1408 768q0 -139 -94 -257t-256.5 -186.5t-353.5 -68.5q-86 0 -176 16q-124 -88 -278 -128q-36 -9 -86 -16h-3q-11 0 -20.5 8t-11.5 21q-1 3 -1 6.5t0.5 6.5t2 6l2.5 5t3.5 5.5t4 5t4.5 5t4 4.5q5 6 23 25t26 29.5t22.5 29t25 38.5t20.5 44q-124 72 -195 177t-71 224 q0 139 94 257t256.5 186.5t353.5 68.5t353.5 -68.5t256.5 -186.5t94 -257zM1792 512q0 -120 -71 -224.5t-195 -176.5q10 -24 20.5 -44t25 -38.5t22.5 -29t26 -29.5t23 -25q1 -1 4 -4.5t4.5 -5t4 -5t3.5 -5.5l2.5 -5t2 -6t0.5 -6.5t-1 -6.5q-3 -14 -13 -22t-22 -7 q-50 7 -86 16q-154 40 -278 128q-90 -16 -176 -16q-271 0 -472 132q58 -4 88 -4q161 0 309 45t264 129q125 92 192 212t67 254q0 77 -23 152q129 -71 204 -178t75 -230z"
      ],
      "\uf087": [
        1536.0,
        "M256 192q0 26 -19 45t-45 19t-45 -19t-19 -45t19 -45t45 -19t45 19t19 45zM1408 768q0 51 -39 89.5t-89 38.5h-352q0 58 48 159.5t48 160.5q0 98 -32 145t-128 47q-26 -26 -38 -85t-30.5 -125.5t-59.5 -109.5q-22 -23 -77 -91q-4 -5 -23 -30t-31.5 -41t-34.5 -42.5 t-40 -44t-38.5 -35.5t-40 -27t-35.5 -9h-32v-640h32q13 0 31.5 -3t33 -6.5t38 -11t35 -11.5t35.5 -12.5t29 -10.5q211 -73 342 -73h121q192 0 192 167q0 26 -5 56q30 16 47.5 52.5t17.5 73.5t-18 69q53 50 53 119q0 25 -10 55.5t-25 47.5q32 1 53.5 47t21.5 81zM1536 769 q0 -89 -49 -163q9 -33 9 -69q0 -77 -38 -144q3 -21 3 -43q0 -101 -60 -178q1 -139 -85 -219.5t-227 -80.5h-36h-93q-96 0 -189.5 22.5t-216.5 65.5q-116 40 -138 40h-288q-53 0 -90.5 37.5t-37.5 90.5v640q0 53 37.5 90.5t90.5 37.5h274q36 24 137 155q58 75 107 128 q24 25 35.5 85.5t30.5 126.5t62 108q39 37 90 37q84 0 151 -32.5t102 -101.5t35 -186q0 -93 -48 -192h176q104 0 180 -76t76 -179z"
      ],
      "\uf088": [
        1536.0,
        "M256 1088q0 26 -19 45t-45 19t-45 -19t-19 -45t19 -45t45 -19t45 19t19 45zM1408 512q0 35 -21.5 81t-53.5 47q15 17 25 47.5t10 55.5q0 69 -53 119q18 31 18 69q0 37 -17.5 73.5t-47.5 52.5q5 30 5 56q0 85 -49 126t-136 41h-128q-131 0 -342 -73q-5 -2 -29 -10.5 t-35.5 -12.5t-35 -11.5t-38 -11t-33 -6.5t-31.5 -3h-32v-640h32q16 0 35.5 -9t40 -27t38.5 -35.5t40 -44t34.5 -42.5t31.5 -41t23 -30q55 -68 77 -91q41 -43 59.5 -109.5t30.5 -125.5t38 -85q96 0 128 47t32 145q0 59 -48 160.5t-48 159.5h352q50 0 89 38.5t39 89.5z M1536 511q0 -103 -76 -179t-180 -76h-176q48 -99 48 -192q0 -118 -35 -186q-35 -69 -102 -101.5t-151 -32.5q-51 0 -90 37q-34 33 -54 82t-25.5 90.5t-17.5 84.5t-31 64q-48 50 -107 127q-101 131 -137 155h-274q-53 0 -90.5 37.5t-37.5 90.5v640q0 53 37.5 90.5t90.5 37.5 h288q22 0 138 40q128 44 223 66t200 22h112q140 0 226.5 -79t85.5 -216v-5q60 -77 60 -178q0 -22 -3 -43q38 -67 38 -144q0 -36 -9 -69q49 -73 49 -163z"
      ],
      "\uf089": [
        896,
        "M832 1504v-1339l-449 -236q-22 -12 -40 -12q-21 0 -31.5 14.5t-10.5 35.5q0 6 2 20l86 500l-364 354q-25 27 -25 48q0 37 56 46l502 73l225 455q19 41 49 41z"
      ],
      "\uf08a": [
        1792,
        "M1664 940q0 81 -21.5 143t-55 98.5t-81.5 59.5t-94 31t-98 8t-112 -25.5t-110.5 -64t-86.5 -72t-60 -61.5q-18 -22 -49 -22t-49 22q-24 28 -60 61.5t-86.5 72t-110.5 64t-112 25.5t-98 -8t-94 -31t-81.5 -59.5t-55 -98.5t-21.5 -143q0 -168 187 -355l581 -560l580 559 q188 188 188 356zM1792 940q0 -221 -229 -450l-623 -600q-18 -18 -44 -18t-44 18l-624 602q-10 8 -27.5 26t-55.5 65.5t-68 97.5t-53.5 121t-23.5 138q0 220 127 344t351 124q62 0 126.5 -21.5t120 -58t95.5 -68.5t76 -68q36 36 76 68t95.5 68.5t120 58t126.5 21.5 q224 0 351 -124t127 -344z"
      ],
      "\uf08b": [
        1664,
        "M640 96q0 -4 1 -20t0.5 -26.5t-3 -23.5t-10 -19.5t-20.5 -6.5h-320q-119 0 -203.5 84.5t-84.5 203.5v704q0 119 84.5 203.5t203.5 84.5h320q13 0 22.5 -9.5t9.5 -22.5q0 -4 1 -20t0.5 -26.5t-3 -23.5t-10 -19.5t-20.5 -6.5h-320q-66 0 -113 -47t-47 -113v-704 q0 -66 47 -113t113 -47h288h11h13t11.5 -1t11.5 -3t8 -5.5t7 -9t2 -13.5zM1568 640q0 -26 -19 -45l-544 -544q-19 -19 -45 -19t-45 19t-19 45v288h-448q-26 0 -45 19t-19 45v384q0 26 19 45t45 19h448v288q0 26 19 45t45 19t45 -19l544 -544q19 -19 19 -45z"
      ],
      "\uf08c": [
        1536.0,
        "M237 122h231v694h-231v-694zM483 1030q-1 52 -36 86t-93 34t-94.5 -34t-36.5 -86q0 -51 35.5 -85.5t92.5 -34.5h1q59 0 95 34.5t36 85.5zM1068 122h231v398q0 154 -73 233t-193 79q-136 0 -209 -117h2v101h-231q3 -66 0 -694h231v388q0 38 7 56q15 35 45 59.5t74 24.5 q116 0 116 -157v-371zM1536 1120v-960q0 -119 -84.5 -203.5t-203.5 -84.5h-960q-119 0 -203.5 84.5t-84.5 203.5v960q0 119 84.5 203.5t203.5 84.5h960q119 0 203.5 -84.5t84.5 -203.5z"
      ],
      "\uf08d": [
        1152,
        "M480 672v448q0 14 -9 23t-23 9t-23 -9t-9 -23v-448q0 -14 9 -23t23 -9t23 9t9 23zM1152 320q0 -26 -19 -45t-45 -19h-429l-51 -483q-2 -12 -10.5 -20.5t-20.5 -8.5h-1q-27 0 -32 27l-76 485h-404q-26 0 -45 19t-19 45q0 123 78.5 221.5t177.5 98.5v512q-52 0 -90 38 t-38 90t38 90t90 38h640q52 0 90 -38t38 -90t-38 -90t-90 -38v-512q99 0 177.5 -98.5t78.5 -221.5z"
      ],
      "\uf08e": [
        1792,
        "M1408 608v-320q0 -119 -84.5 -203.5t-203.5 -84.5h-832q-119 0 -203.5 84.5t-84.5 203.5v832q0 119 84.5 203.5t203.5 84.5h704q14 0 23 -9t9 -23v-64q0 -14 -9 -23t-23 -9h-704q-66 0 -113 -47t-47 -113v-832q0 -66 47 -113t113 -47h832q66 0 113 47t47 113v320 q0 14 9 23t23 9h64q14 0 23 -9t9 -23zM1792 1472v-512q0 -26 -19 -45t-45 -19t-45 19l-176 176l-652 -652q-10 -10 -23 -10t-23 10l-114 114q-10 10 -10 23t10 23l652 652l-176 176q-19 19 -19 45t19 45t45 19h512q26 0 45 -19t19 -45z"
      ],
      "\uf090": [
        1536.0,
        "M1184 640q0 -26 -19 -45l-544 -544q-19 -19 -45 -19t-45 19t-19 45v288h-448q-26 0 -45 19t-19 45v384q0 26 19 45t45 19h448v288q0 26 19 45t45 19t45 -19l544 -544q19 -19 19 -45zM1536 992v-704q0 -119 -84.5 -203.5t-203.5 -84.5h-320q-13 0 -22.5 9.5t-9.5 22.5 q0 4 -1 20t-0.5 26.5t3 23.5t10 19.5t20.5 6.5h320q66 0 113 47t47 113v704q0 66 -47 113t-113 47h-288h-11h-13t-11.5 1t-11.5 3t-8 5.5t-7 9t-2 13.5q0 4 -1 20t-0.5 26.5t3 23.5t10 19.5t20.5 6.5h320q119 0 203.5 -84.5t84.5 -203.5z"
      ],
      "\uf091": [
        1664,
        "M458 653q-74 162 -74 371h-256v-96q0 -78 94.5 -162t235.5 -113zM1536 928v96h-256q0 -209 -74 -371q141 29 235.5 113t94.5 162zM1664 1056v-128q0 -71 -41.5 -143t-112 -130t-173 -97.5t-215.5 -44.5q-42 -54 -95 -95q-38 -34 -52.5 -72.5t-14.5 -89.5q0 -54 30.5 -91 t97.5 -37q75 0 133.5 -45.5t58.5 -114.5v-64q0 -14 -9 -23t-23 -9h-832q-14 0 -23 9t-9 23v64q0 69 58.5 114.5t133.5 45.5q67 0 97.5 37t30.5 91q0 51 -14.5 89.5t-52.5 72.5q-53 41 -95 95q-113 5 -215.5 44.5t-173 97.5t-112 130t-41.5 143v128q0 40 28 68t68 28h288v96 q0 66 47 113t113 47h576q66 0 113 -47t47 -113v-96h288q40 0 68 -28t28 -68z"
      ],
      "\uf092": [
        1536.0,
        "M519 336q4 6 -3 13q-9 7 -14 2q-4 -6 3 -13q9 -7 14 -2zM491 377q-5 7 -12 4q-6 -4 0 -12q7 -8 12 -5q6 4 0 13zM450 417q2 4 -5 8q-7 2 -8 -2q-3 -5 4 -8q8 -2 9 2zM471 394q2 1 1.5 4.5t-3.5 5.5q-6 7 -10 3t1 -11q6 -6 11 -2zM557 319q2 7 -9 11q-9 3 -13 -4 q-2 -7 9 -11q9 -3 13 4zM599 316q0 8 -12 8q-10 0 -10 -8t11 -8t11 8zM638 323q-2 7 -13 5t-9 -9q2 -8 12 -6t10 10zM1280 640q0 212 -150 362t-362 150t-362 -150t-150 -362q0 -167 98 -300.5t252 -185.5q18 -3 26.5 5t8.5 20q0 52 -1 95q-6 -1 -15.5 -2.5t-35.5 -2t-48 4 t-43.5 20t-29.5 41.5q-23 59 -57 74q-2 1 -4.5 3.5l-8 8t-7 9.5t4 7.5t19.5 3.5q6 0 15 -2t30 -15.5t33 -35.5q16 -28 37.5 -42t43.5 -14t38 3.5t30 9.5q7 47 33 69q-49 6 -86 18.5t-73 39t-55.5 76t-19.5 119.5q0 79 53 137q-24 62 5 136q19 6 54.5 -7.5t60.5 -29.5l26 -16 q58 17 128 17t128 -17q11 7 28.5 18t55.5 26t57 9q29 -74 5 -136q53 -58 53 -137q0 -57 -14 -100.5t-35.5 -70t-53.5 -44.5t-62.5 -26t-68.5 -12q35 -31 35 -95q0 -40 -0.5 -89t-0.5 -51q0 -12 8.5 -20t26.5 -5q154 52 252 185.5t98 300.5zM1536 1120v-960 q0 -119 -84.5 -203.5t-203.5 -84.5h-960q-119 0 -203.5 84.5t-84.5 203.5v960q0 119 84.5 203.5t203.5 84.5h960q119 0 203.5 -84.5t84.5 -203.5z"
      ],
      "\uf093": [
        1664,
        "M1280 64q0 26 -19 45t-45 19t-45 -19t-19 -45t19 -45t45 -19t45 19t19 45zM1536 64q0 26 -19 45t-45 19t-45 -19t-19 -45t19 -45t45 -19t45 19t19 45zM1664 288v-320q0 -40 -28 -68t-68 -28h-1472q-40 0 -68 28t-28 68v320q0 40 28 68t68 28h427q21 -56 70.5 -92 t110.5 -36h256q61 0 110.5 36t70.5 92h427q40 0 68 -28t28 -68zM1339 936q-17 -40 -59 -40h-256v-448q0 -26 -19 -45t-45 -19h-256q-26 0 -45 19t-19 45v448h-256q-42 0 -59 40q-17 39 14 69l448 448q18 19 45 19t45 -19l448 -448q31 -30 14 -69z"
      ],
      "\uf094": [
        1536.0,
        "M1407 710q0 44 -7 113.5t-18 96.5q-12 30 -17 44t-9 36.5t-4 48.5q0 23 5 68.5t5 67.5q0 37 -10 55q-4 1 -13 1q-19 0 -58 -4.5t-59 -4.5q-60 0 -176 24t-175 24q-43 0 -94.5 -11.5t-85 -23.5t-89.5 -34q-137 -54 -202 -103q-96 -73 -159.5 -189.5t-88 -236t-24.5 -248.5 q0 -40 12.5 -120t12.5 -121q0 -23 -11 -66.5t-11 -65.5t12 -36.5t34 -14.5q24 0 72.5 11t73.5 11q57 0 169.5 -15.5t169.5 -15.5q181 0 284 36q129 45 235.5 152.5t166 245.5t59.5 275zM1535 712q0 -165 -70 -327.5t-196 -288t-281 -180.5q-124 -44 -326 -44 q-57 0 -170 14.5t-169 14.5q-24 0 -72.5 -14.5t-73.5 -14.5q-73 0 -123.5 55.5t-50.5 128.5q0 24 11 68t11 67q0 40 -12.5 120.5t-12.5 121.5q0 111 18 217.5t54.5 209.5t100.5 194t150 156q78 59 232 120q194 78 316 78q60 0 175.5 -24t173.5 -24q19 0 57 5t58 5 q81 0 118 -50.5t37 -134.5q0 -23 -5 -68t-5 -68q0 -13 2 -25t3.5 -16.5t7.5 -20.5t8 -20q16 -40 25 -118.5t9 -136.5z"
      ],
      "\uf095": [
        1408,
        "M1408 296q0 -27 -10 -70.5t-21 -68.5q-21 -50 -122 -106q-94 -51 -186 -51q-27 0 -53 3.5t-57.5 12.5t-47 14.5t-55.5 20.5t-49 18q-98 35 -175 83q-127 79 -264 216t-216 264q-48 77 -83 175q-3 9 -18 49t-20.5 55.5t-14.5 47t-12.5 57.5t-3.5 53q0 92 51 186 q56 101 106 122q25 11 68.5 21t70.5 10q14 0 21 -3q18 -6 53 -76q11 -19 30 -54t35 -63.5t31 -53.5q3 -4 17.5 -25t21.5 -35.5t7 -28.5q0 -20 -28.5 -50t-62 -55t-62 -53t-28.5 -46q0 -9 5 -22.5t8.5 -20.5t14 -24t11.5 -19q76 -137 174 -235t235 -174q2 -1 19 -11.5t24 -14 t20.5 -8.5t22.5 -5q18 0 46 28.5t53 62t55 62t50 28.5q14 0 28.5 -7t35.5 -21.5t25 -17.5q25 -15 53.5 -31t63.5 -35t54 -30q70 -35 76 -53q3 -7 3 -21z"
      ],
      "\uf096": [
        1408,
        "M1120 1280h-832q-66 0 -113 -47t-47 -113v-832q0 -66 47 -113t113 -47h832q66 0 113 47t47 113v832q0 66 -47 113t-113 47zM1408 1120v-832q0 -119 -84.5 -203.5t-203.5 -84.5h-832q-119 0 -203.5 84.5t-84.5 203.5v832q0 119 84.5 203.5t203.5 84.5h832 q119 0 203.5 -84.5t84.5 -203.5z"
      ],
      "\uf097": [
        1280,
        "M1152 1280h-1024v-1242l423 406l89 85l89 -85l423 -406v1242zM1164 1408q23 0 44 -9q33 -13 52.5 -41t19.5 -62v-1289q0 -34 -19.5 -62t-52.5 -41q-19 -8 -44 -8q-48 0 -83 32l-441 424l-441 -424q-36 -33 -83 -33q-23 0 -44 9q-33 13 -52.5 41t-19.5 62v1289 q0 34 19.5 62t52.5 41q21 9 44 9h1048z"
      ],
      "\uf098": [
        1536.0,
        "M1280 343q0 11 -2 16t-18 16.5t-40.5 25t-47.5 26.5t-45.5 25t-28.5 15q-5 3 -19 13t-25 15t-21 5q-15 0 -36.5 -20.5t-39.5 -45t-38.5 -45t-33.5 -20.5q-7 0 -16.5 3.5t-15.5 6.5t-17 9.5t-14 8.5q-99 55 -170 126.5t-127 170.5q-2 3 -8.5 14t-9.5 17t-6.5 15.5 t-3.5 16.5q0 13 20.5 33.5t45 38.5t45 39.5t20.5 36.5q0 10 -5 21t-15 25t-13 19q-3 6 -15 28.5t-25 45.5t-26.5 47.5t-25 40.5t-16.5 18t-16 2q-48 0 -101 -22q-46 -21 -80 -94.5t-34 -130.5q0 -16 2.5 -34t5 -30.5t9 -33t10 -29.5t12.5 -33t11 -30q60 -164 216.5 -320.5 t320.5 -216.5q6 -2 30 -11t33 -12.5t29.5 -10t33 -9t30.5 -5t34 -2.5q57 0 130.5 34t94.5 80q22 53 22 101zM1536 1120v-960q0 -119 -84.5 -203.5t-203.5 -84.5h-960q-119 0 -203.5 84.5t-84.5 203.5v960q0 119 84.5 203.5t203.5 84.5h960q119 0 203.5 -84.5t84.5 -203.5z "
      ],
      "\uf099": [
        1664,
        "M1620 1128q-67 -98 -162 -167q1 -14 1 -42q0 -130 -38 -259.5t-115.5 -248.5t-184.5 -210.5t-258 -146t-323 -54.5q-271 0 -496 145q35 -4 78 -4q225 0 401 138q-105 2 -188 64.5t-114 159.5q33 -5 61 -5q43 0 85 11q-112 23 -185.5 111.5t-73.5 205.5v4q68 -38 146 -41 q-66 44 -105 115t-39 154q0 88 44 163q121 -149 294.5 -238.5t371.5 -99.5q-8 38 -8 74q0 134 94.5 228.5t228.5 94.5q140 0 236 -102q109 21 205 78q-37 -115 -142 -178q93 10 186 50z"
      ],
      "\uf09a": [
        1024,
        "M959 1524v-264h-157q-86 0 -116 -36t-30 -108v-189h293l-39 -296h-254v-759h-306v759h-255v296h255v218q0 186 104 288.5t277 102.5q147 0 228 -12z"
      ],
      "\uf09b": [
        1536.0,
        "M768 1408q209 0 385.5 -103t279.5 -279.5t103 -385.5q0 -251 -146.5 -451.5t-378.5 -277.5q-27 -5 -40 7t-13 30q0 3 0.5 76.5t0.5 134.5q0 97 -52 142q57 6 102.5 18t94 39t81 66.5t53 105t20.5 150.5q0 119 -79 206q37 91 -8 204q-28 9 -81 -11t-92 -44l-38 -24 q-93 26 -192 26t-192 -26q-16 11 -42.5 27t-83.5 38.5t-85 13.5q-45 -113 -8 -204q-79 -87 -79 -206q0 -85 20.5 -150t52.5 -105t80.5 -67t94 -39t102.5 -18q-39 -36 -49 -103q-21 -10 -45 -15t-57 -5t-65.5 21.5t-55.5 62.5q-19 32 -48.5 52t-49.5 24l-20 3q-21 0 -29 -4.5 t-5 -11.5t9 -14t13 -12l7 -5q22 -10 43.5 -38t31.5 -51l10 -23q13 -38 44 -61.5t67 -30t69.5 -7t55.5 3.5l23 4q0 -38 0.5 -88.5t0.5 -54.5q0 -18 -13 -30t-40 -7q-232 77 -378.5 277.5t-146.5 451.5q0 209 103 385.5t279.5 279.5t385.5 103zM291 305q3 7 -7 12 q-10 3 -13 -2q-3 -7 7 -12q9 -6 13 2zM322 271q7 5 -2 16q-10 9 -16 3q-7 -5 2 -16q10 -10 16 -3zM352 226q9 7 0 19q-8 13 -17 6q-9 -5 0 -18t17 -7zM394 184q8 8 -4 19q-12 12 -20 3q-9 -8 4 -19q12 -12 20 -3zM451 159q3 11 -13 16q-15 4 -19 -7t13 -15q15 -6 19 6z M514 154q0 13 -17 11q-16 0 -16 -11q0 -13 17 -11q16 0 16 11zM572 164q-2 11 -18 9q-16 -3 -14 -15t18 -8t14 14z"
      ],
      "\uf09c": [
        1664,
        "M1664 960v-256q0 -26 -19 -45t-45 -19h-64q-26 0 -45 19t-19 45v256q0 106 -75 181t-181 75t-181 -75t-75 -181v-192h96q40 0 68 -28t28 -68v-576q0 -40 -28 -68t-68 -28h-960q-40 0 -68 28t-28 68v576q0 40 28 68t68 28h672v192q0 185 131.5 316.5t316.5 131.5 t316.5 -131.5t131.5 -316.5z"
      ],
      "\uf09d": [
        1920,
        "M1760 1408q66 0 113 -47t47 -113v-1216q0 -66 -47 -113t-113 -47h-1600q-66 0 -113 47t-47 113v1216q0 66 47 113t113 47h1600zM160 1280q-13 0 -22.5 -9.5t-9.5 -22.5v-224h1664v224q0 13 -9.5 22.5t-22.5 9.5h-1600zM1760 0q13 0 22.5 9.5t9.5 22.5v608h-1664v-608 q0 -13 9.5 -22.5t22.5 -9.5h1600zM256 128v128h256v-128h-256zM640 128v128h384v-128h-384z"
      ],
      "\uf09e": [
        1408,
        "M384 192q0 -80 -56 -136t-136 -56t-136 56t-56 136t56 136t136 56t136 -56t56 -136zM896 69q2 -28 -17 -48q-18 -21 -47 -21h-135q-25 0 -43 16.5t-20 41.5q-22 229 -184.5 391.5t-391.5 184.5q-25 2 -41.5 20t-16.5 43v135q0 29 21 47q17 17 43 17h5q160 -13 306 -80.5 t259 -181.5q114 -113 181.5 -259t80.5 -306zM1408 67q2 -27 -18 -47q-18 -20 -46 -20h-143q-26 0 -44.5 17.5t-19.5 42.5q-12 215 -101 408.5t-231.5 336t-336 231.5t-408.5 102q-25 1 -42.5 19.5t-17.5 43.5v143q0 28 20 46q18 18 44 18h3q262 -13 501.5 -120t425.5 -294 q187 -186 294 -425.5t120 -501.5z"
      ],
      "\uf0a0": [
        1536.0,
        "M1040 320q0 -33 -23.5 -56.5t-56.5 -23.5t-56.5 23.5t-23.5 56.5t23.5 56.5t56.5 23.5t56.5 -23.5t23.5 -56.5zM1296 320q0 -33 -23.5 -56.5t-56.5 -23.5t-56.5 23.5t-23.5 56.5t23.5 56.5t56.5 23.5t56.5 -23.5t23.5 -56.5zM1408 160v320q0 13 -9.5 22.5t-22.5 9.5 h-1216q-13 0 -22.5 -9.5t-9.5 -22.5v-320q0 -13 9.5 -22.5t22.5 -9.5h1216q13 0 22.5 9.5t9.5 22.5zM178 640h1180l-157 482q-4 13 -16 21.5t-26 8.5h-782q-14 0 -26 -8.5t-16 -21.5zM1536 480v-320q0 -66 -47 -113t-113 -47h-1216q-66 0 -113 47t-47 113v320q0 25 16 75 l197 606q17 53 63 86t101 33h782q55 0 101 -33t63 -86l197 -606q16 -50 16 -75z"
      ],
      "\uf0a1": [
        1792,
        "M1664 896q53 0 90.5 -37.5t37.5 -90.5t-37.5 -90.5t-90.5 -37.5v-384q0 -52 -38 -90t-90 -38q-417 347 -812 380q-58 -19 -91 -66t-31 -100.5t40 -92.5q-20 -33 -23 -65.5t6 -58t33.5 -55t48 -50t61.5 -50.5q-29 -58 -111.5 -83t-168.5 -11.5t-132 55.5q-7 23 -29.5 87.5 t-32 94.5t-23 89t-15 101t3.5 98.5t22 110.5h-122q-66 0 -113 47t-47 113v192q0 66 47 113t113 47h480q435 0 896 384q52 0 90 -38t38 -90v-384zM1536 292v954q-394 -302 -768 -343v-270q377 -42 768 -341z"
      ],
      "\uf0f3": [
        1792,
        "M912 -160q0 16 -16 16q-59 0 -101.5 42.5t-42.5 101.5q0 16 -16 16t-16 -16q0 -73 51.5 -124.5t124.5 -51.5q16 0 16 16zM1728 128q0 -52 -38 -90t-90 -38h-448q0 -106 -75 -181t-181 -75t-181 75t-75 181h-448q-52 0 -90 38t-38 90q50 42 91 88t85 119.5t74.5 158.5 t50 206t19.5 260q0 152 117 282.5t307 158.5q-8 19 -8 39q0 40 28 68t68 28t68 -28t28 -68q0 -20 -8 -39q190 -28 307 -158.5t117 -282.5q0 -139 19.5 -260t50 -206t74.5 -158.5t85 -119.5t91 -88z"
      ],
      "\uf0a3": [
        1536.0,
        "M1376 640l138 -135q30 -28 20 -70q-12 -41 -52 -51l-188 -48l53 -186q12 -41 -19 -70q-29 -31 -70 -19l-186 53l-48 -188q-10 -40 -51 -52q-12 -2 -19 -2q-31 0 -51 22l-135 138l-135 -138q-28 -30 -70 -20q-41 11 -51 52l-48 188l-186 -53q-41 -12 -70 19q-31 29 -19 70 l53 186l-188 48q-40 10 -52 51q-10 42 20 70l138 135l-138 135q-30 28 -20 70q12 41 52 51l188 48l-53 186q-12 41 19 70q29 31 70 19l186 -53l48 188q10 41 51 51q41 12 70 -19l135 -139l135 139q29 30 70 19q41 -10 51 -51l48 -188l186 53q41 12 70 -19q31 -29 19 -70 l-53 -186l188 -48q40 -10 52 -51q10 -42 -20 -70z"
      ],
      "\uf0a4": [
        1792,
        "M256 192q0 26 -19 45t-45 19t-45 -19t-19 -45t19 -45t45 -19t45 19t19 45zM1664 768q0 51 -39 89.5t-89 38.5h-576q0 20 15 48.5t33 55t33 68t15 84.5q0 67 -44.5 97.5t-115.5 30.5q-24 0 -90 -139q-24 -44 -37 -65q-40 -64 -112 -145q-71 -81 -101 -106 q-69 -57 -140 -57h-32v-640h32q72 0 167 -32t193.5 -64t179.5 -32q189 0 189 167q0 26 -5 56q30 16 47.5 52.5t17.5 73.5t-18 69q53 50 53 119q0 25 -10 55.5t-25 47.5h331q52 0 90 38t38 90zM1792 769q0 -105 -75.5 -181t-180.5 -76h-169q-4 -62 -37 -119q3 -21 3 -43 q0 -101 -60 -178q1 -139 -85 -219.5t-227 -80.5q-133 0 -322 69q-164 59 -223 59h-288q-53 0 -90.5 37.5t-37.5 90.5v640q0 53 37.5 90.5t90.5 37.5h288q10 0 21.5 4.5t23.5 14t22.5 18t24 22.5t20.5 21.5t19 21.5t14 17q65 74 100 129q13 21 33 62t37 72t40.5 63t55 49.5 t69.5 17.5q125 0 206.5 -67t81.5 -189q0 -68 -22 -128h374q104 0 180 -76t76 -179z"
      ],
      "\uf0a5": [
        1792,
        "M1376 128h32v640h-32q-35 0 -67.5 12t-62.5 37t-50 46t-49 54q-8 9 -12 14q-72 81 -112 145q-14 22 -38 68q-1 3 -10.5 22.5t-18.5 36t-20 35.5t-21.5 30.5t-18.5 11.5q-71 0 -115.5 -30.5t-44.5 -97.5q0 -43 15 -84.5t33 -68t33 -55t15 -48.5h-576q-50 0 -89 -38.5 t-39 -89.5q0 -52 38 -90t90 -38h331q-15 -17 -25 -47.5t-10 -55.5q0 -69 53 -119q-18 -32 -18 -69t17.5 -73.5t47.5 -52.5q-4 -24 -4 -56q0 -85 48.5 -126t135.5 -41q84 0 183 32t194 64t167 32zM1664 192q0 26 -19 45t-45 19t-45 -19t-19 -45t19 -45t45 -19t45 19t19 45z M1792 768v-640q0 -53 -37.5 -90.5t-90.5 -37.5h-288q-59 0 -223 -59q-190 -69 -317 -69q-142 0 -230 77.5t-87 217.5l1 5q-61 76 -61 178q0 22 3 43q-33 57 -37 119h-169q-105 0 -180.5 76t-75.5 181q0 103 76 179t180 76h374q-22 60 -22 128q0 122 81.5 189t206.5 67 q38 0 69.5 -17.5t55 -49.5t40.5 -63t37 -72t33 -62q35 -55 100 -129q2 -3 14 -17t19 -21.5t20.5 -21.5t24 -22.5t22.5 -18t23.5 -14t21.5 -4.5h288q53 0 90.5 -37.5t37.5 -90.5z"
      ],
      "\uf0a6": [
        1536.0,
        "M1280 -64q0 26 -19 45t-45 19t-45 -19t-19 -45t19 -45t45 -19t45 19t19 45zM1408 700q0 189 -167 189q-26 0 -56 -5q-16 30 -52.5 47.5t-73.5 17.5t-69 -18q-50 53 -119 53q-25 0 -55.5 -10t-47.5 -25v331q0 52 -38 90t-90 38q-51 0 -89.5 -39t-38.5 -89v-576 q-20 0 -48.5 15t-55 33t-68 33t-84.5 15q-67 0 -97.5 -44.5t-30.5 -115.5q0 -24 139 -90q44 -24 65 -37q64 -40 145 -112q81 -71 106 -101q57 -69 57 -140v-32h640v32q0 72 32 167t64 193.5t32 179.5zM1536 705q0 -133 -69 -322q-59 -164 -59 -223v-288q0 -53 -37.5 -90.5 t-90.5 -37.5h-640q-53 0 -90.5 37.5t-37.5 90.5v288q0 10 -4.5 21.5t-14 23.5t-18 22.5t-22.5 24t-21.5 20.5t-21.5 19t-17 14q-74 65 -129 100q-21 13 -62 33t-72 37t-63 40.5t-49.5 55t-17.5 69.5q0 125 67 206.5t189 81.5q68 0 128 -22v374q0 104 76 180t179 76 q105 0 181 -75.5t76 -180.5v-169q62 -4 119 -37q21 3 43 3q101 0 178 -60q139 1 219.5 -85t80.5 -227z"
      ],
      "\uf0a7": [
        1536.0,
        "M1408 576q0 84 -32 183t-64 194t-32 167v32h-640v-32q0 -35 -12 -67.5t-37 -62.5t-46 -50t-54 -49q-9 -8 -14 -12q-81 -72 -145 -112q-22 -14 -68 -38q-3 -1 -22.5 -10.5t-36 -18.5t-35.5 -20t-30.5 -21.5t-11.5 -18.5q0 -71 30.5 -115.5t97.5 -44.5q43 0 84.5 15t68 33 t55 33t48.5 15v-576q0 -50 38.5 -89t89.5 -39q52 0 90 38t38 90v331q46 -35 103 -35q69 0 119 53q32 -18 69 -18t73.5 17.5t52.5 47.5q24 -4 56 -4q85 0 126 48.5t41 135.5zM1280 1344q0 26 -19 45t-45 19t-45 -19t-19 -45t19 -45t45 -19t45 19t19 45zM1536 580 q0 -142 -77.5 -230t-217.5 -87l-5 1q-76 -61 -178 -61q-22 0 -43 3q-54 -30 -119 -37v-169q0 -105 -76 -180.5t-181 -75.5q-103 0 -179 76t-76 180v374q-54 -22 -128 -22q-121 0 -188.5 81.5t-67.5 206.5q0 38 17.5 69.5t49.5 55t63 40.5t72 37t62 33q55 35 129 100 q3 2 17 14t21.5 19t21.5 20.5t22.5 24t18 22.5t14 23.5t4.5 21.5v288q0 53 37.5 90.5t90.5 37.5h640q53 0 90.5 -37.5t37.5 -90.5v-288q0 -59 59 -223q69 -190 69 -317z"
      ],
      "\uf0a8": [
        1536.0,
        "M1280 576v128q0 26 -19 45t-45 19h-502l189 189q19 19 19 45t-19 45l-91 91q-18 18 -45 18t-45 -18l-362 -362l-91 -91q-18 -18 -18 -45t18 -45l91 -91l362 -362q18 -18 45 -18t45 18l91 91q18 18 18 45t-18 45l-189 189h502q26 0 45 19t19 45zM1536 640 q0 -209 -103 -385.5t-279.5 -279.5t-385.5 -103t-385.5 103t-279.5 279.5t-103 385.5t103 385.5t279.5 279.5t385.5 103t385.5 -103t279.5 -279.5t103 -385.5z"
      ],
      "\uf0a9": [
        1536.0,
        "M1285 640q0 27 -18 45l-91 91l-362 362q-18 18 -45 18t-45 -18l-91 -91q-18 -18 -18 -45t18 -45l189 -189h-502q-26 0 -45 -19t-19 -45v-128q0 -26 19 -45t45 -19h502l-189 -189q-19 -19 -19 -45t19 -45l91 -91q18 -18 45 -18t45 18l362 362l91 91q18 18 18 45zM1536 640 q0 -209 -103 -385.5t-279.5 -279.5t-385.5 -103t-385.5 103t-279.5 279.5t-103 385.5t103 385.5t279.5 279.5t385.5 103t385.5 -103t279.5 -279.5t103 -385.5z"
      ],
      "\uf0aa": [
        1536.0,
        "M1284 641q0 27 -18 45l-362 362l-91 91q-18 18 -45 18t-45 -18l-91 -91l-362 -362q-18 -18 -18 -45t18 -45l91 -91q18 -18 45 -18t45 18l189 189v-502q0 -26 19 -45t45 -19h128q26 0 45 19t19 45v502l189 -189q19 -19 45 -19t45 19l91 91q18 18 18 45zM1536 640 q0 -209 -103 -385.5t-279.5 -279.5t-385.5 -103t-385.5 103t-279.5 279.5t-103 385.5t103 385.5t279.5 279.5t385.5 103t385.5 -103t279.5 -279.5t103 -385.5z"
      ],
      "\uf0ab": [
        1536.0,
        "M1284 639q0 27 -18 45l-91 91q-18 18 -45 18t-45 -18l-189 -189v502q0 26 -19 45t-45 19h-128q-26 0 -45 -19t-19 -45v-502l-189 189q-19 19 -45 19t-45 -19l-91 -91q-18 -18 -18 -45t18 -45l362 -362l91 -91q18 -18 45 -18t45 18l91 91l362 362q18 18 18 45zM1536 640 q0 -209 -103 -385.5t-279.5 -279.5t-385.5 -103t-385.5 103t-279.5 279.5t-103 385.5t103 385.5t279.5 279.5t385.5 103t385.5 -103t279.5 -279.5t103 -385.5z"
      ],
      "\uf0ac": [
        1536.0,
        "M768 1408q209 0 385.5 -103t279.5 -279.5t103 -385.5t-103 -385.5t-279.5 -279.5t-385.5 -103t-385.5 103t-279.5 279.5t-103 385.5t103 385.5t279.5 279.5t385.5 103zM1042 887q-2 -1 -9.5 -9.5t-13.5 -9.5q2 0 4.5 5t5 11t3.5 7q6 7 22 15q14 6 52 12q34 8 51 -11 q-2 2 9.5 13t14.5 12q3 2 15 4.5t15 7.5l2 22q-12 -1 -17.5 7t-6.5 21q0 -2 -6 -8q0 7 -4.5 8t-11.5 -1t-9 -1q-10 3 -15 7.5t-8 16.5t-4 15q-2 5 -9.5 11t-9.5 10q-1 2 -2.5 5.5t-3 6.5t-4 5.5t-5.5 2.5t-7 -5t-7.5 -10t-4.5 -5q-3 2 -6 1.5t-4.5 -1t-4.5 -3t-5 -3.5 q-3 -2 -8.5 -3t-8.5 -2q15 5 -1 11q-10 4 -16 3q9 4 7.5 12t-8.5 14h5q-1 4 -8.5 8.5t-17.5 8.5t-13 6q-8 5 -34 9.5t-33 0.5q-5 -6 -4.5 -10.5t4 -14t3.5 -12.5q1 -6 -5.5 -13t-6.5 -12q0 -7 14 -15.5t10 -21.5q-3 -8 -16 -16t-16 -12q-5 -8 -1.5 -18.5t10.5 -16.5 q2 -2 1.5 -4t-3.5 -4.5t-5.5 -4t-6.5 -3.5l-3 -2q-11 -5 -20.5 6t-13.5 26q-7 25 -16 30q-23 8 -29 -1q-5 13 -41 26q-25 9 -58 4q6 1 0 15q-7 15 -19 12q3 6 4 17.5t1 13.5q3 13 12 23q1 1 7 8.5t9.5 13.5t0.5 6q35 -4 50 11q5 5 11.5 17t10.5 17q9 6 14 5.5t14.5 -5.5 t14.5 -5q14 -1 15.5 11t-7.5 20q12 -1 3 17q-4 7 -8 9q-12 4 -27 -5q-8 -4 2 -8q-1 1 -9.5 -10.5t-16.5 -17.5t-16 5q-1 1 -5.5 13.5t-9.5 13.5q-8 0 -16 -15q3 8 -11 15t-24 8q19 12 -8 27q-7 4 -20.5 5t-19.5 -4q-5 -7 -5.5 -11.5t5 -8t10.5 -5.5t11.5 -4t8.5 -3 q14 -10 8 -14q-2 -1 -8.5 -3.5t-11.5 -4.5t-6 -4q-3 -4 0 -14t-2 -14q-5 5 -9 17.5t-7 16.5q7 -9 -25 -6l-10 1q-4 0 -16 -2t-20.5 -1t-13.5 8q-4 8 0 20q1 4 4 2q-4 3 -11 9.5t-10 8.5q-46 -15 -94 -41q6 -1 12 1q5 2 13 6.5t10 5.5q34 14 42 7l5 5q14 -16 20 -25 q-7 4 -30 1q-20 -6 -22 -12q7 -12 5 -18q-4 3 -11.5 10t-14.5 11t-15 5q-16 0 -22 -1q-146 -80 -235 -222q7 -7 12 -8q4 -1 5 -9t2.5 -11t11.5 3q9 -8 3 -19q1 1 44 -27q19 -17 21 -21q3 -11 -10 -18q-1 2 -9 9t-9 4q-3 -5 0.5 -18.5t10.5 -12.5q-7 0 -9.5 -16t-2.5 -35.5 t-1 -23.5l2 -1q-3 -12 5.5 -34.5t21.5 -19.5q-13 -3 20 -43q6 -8 8 -9q3 -2 12 -7.5t15 -10t10 -10.5q4 -5 10 -22.5t14 -23.5q-2 -6 9.5 -20t10.5 -23q-1 0 -2.5 -1t-2.5 -1q3 -7 15.5 -14t15.5 -13q1 -3 2 -10t3 -11t8 -2q2 20 -24 62q-15 25 -17 29q-3 5 -5.5 15.5 t-4.5 14.5q2 0 6 -1.5t8.5 -3.5t7.5 -4t2 -3q-3 -7 2 -17.5t12 -18.5t17 -19t12 -13q6 -6 14 -19.5t0 -13.5q9 0 20 -10.5t17 -19.5q5 -8 8 -26t5 -24q2 -7 8.5 -13.5t12.5 -9.5l16 -8t13 -7q5 -2 18.5 -10.5t21.5 -11.5q10 -4 16 -4t14.5 2.5t13.5 3.5q15 2 29 -15t21 -21 q36 -19 55 -11q-2 -1 0.5 -7.5t8 -15.5t9 -14.5t5.5 -8.5q5 -6 18 -15t18 -15q6 4 7 9q-3 -8 7 -20t18 -10q14 3 14 32q-31 -15 -49 18q0 1 -2.5 5.5t-4 8.5t-2.5 8.5t0 7.5t5 3q9 0 10 3.5t-2 12.5t-4 13q-1 8 -11 20t-12 15q-5 -9 -16 -8t-16 9q0 -1 -1.5 -5.5t-1.5 -6.5 q-13 0 -15 1q1 3 2.5 17.5t3.5 22.5q1 4 5.5 12t7.5 14.5t4 12.5t-4.5 9.5t-17.5 2.5q-19 -1 -26 -20q-1 -3 -3 -10.5t-5 -11.5t-9 -7q-7 -3 -24 -2t-24 5q-13 8 -22.5 29t-9.5 37q0 10 2.5 26.5t3 25t-5.5 24.5q3 2 9 9.5t10 10.5q2 1 4.5 1.5t4.5 0t4 1.5t3 6q-1 1 -4 3 q-3 3 -4 3q7 -3 28.5 1.5t27.5 -1.5q15 -11 22 2q0 1 -2.5 9.5t-0.5 13.5q5 -27 29 -9q3 -3 15.5 -5t17.5 -5q3 -2 7 -5.5t5.5 -4.5t5 0.5t8.5 6.5q10 -14 12 -24q11 -40 19 -44q7 -3 11 -2t4.5 9.5t0 14t-1.5 12.5l-1 8v18l-1 8q-15 3 -18.5 12t1.5 18.5t15 18.5q1 1 8 3.5 t15.5 6.5t12.5 8q21 19 15 35q7 0 11 9q-1 0 -5 3t-7.5 5t-4.5 2q9 5 2 16q5 3 7.5 11t7.5 10q9 -12 21 -2q8 8 1 16q5 7 20.5 10.5t18.5 9.5q7 -2 8 2t1 12t3 12q4 5 15 9t13 5l17 11q3 4 0 4q18 -2 31 11q10 11 -6 20q3 6 -3 9.5t-15 5.5q3 1 11.5 0.5t10.5 1.5 q15 10 -7 16q-17 5 -43 -12zM879 10q206 36 351 189q-3 3 -12.5 4.5t-12.5 3.5q-18 7 -24 8q1 7 -2.5 13t-8 9t-12.5 8t-11 7q-2 2 -7 6t-7 5.5t-7.5 4.5t-8.5 2t-10 -1l-3 -1q-3 -1 -5.5 -2.5t-5.5 -3t-4 -3t0 -2.5q-21 17 -36 22q-5 1 -11 5.5t-10.5 7t-10 1.5t-11.5 -7 q-5 -5 -6 -15t-2 -13q-7 5 0 17.5t2 18.5q-3 6 -10.5 4.5t-12 -4.5t-11.5 -8.5t-9 -6.5t-8.5 -5.5t-8.5 -7.5q-3 -4 -6 -12t-5 -11q-2 4 -11.5 6.5t-9.5 5.5q2 -10 4 -35t5 -38q7 -31 -12 -48q-27 -25 -29 -40q-4 -22 12 -26q0 -7 -8 -20.5t-7 -21.5q0 -6 2 -16z"
      ],
      "\uf0ad": [
        1664,
        "M384 64q0 26 -19 45t-45 19t-45 -19t-19 -45t19 -45t45 -19t45 19t19 45zM1028 484l-682 -682q-37 -37 -90 -37q-52 0 -91 37l-106 108q-38 36 -38 90q0 53 38 91l681 681q39 -98 114.5 -173.5t173.5 -114.5zM1662 919q0 -39 -23 -106q-47 -134 -164.5 -217.5 t-258.5 -83.5q-185 0 -316.5 131.5t-131.5 316.5t131.5 316.5t316.5 131.5q58 0 121.5 -16.5t107.5 -46.5q16 -11 16 -28t-16 -28l-293 -169v-224l193 -107q5 3 79 48.5t135.5 81t70.5 35.5q15 0 23.5 -10t8.5 -25z"
      ],
      "\uf0ae": [
        1792,
        "M1024 128h640v128h-640v-128zM640 640h1024v128h-1024v-128zM1280 1152h384v128h-384v-128zM1792 320v-256q0 -26 -19 -45t-45 -19h-1664q-26 0 -45 19t-19 45v256q0 26 19 45t45 19h1664q26 0 45 -19t19 -45zM1792 832v-256q0 -26 -19 -45t-45 -19h-1664q-26 0 -45 19 t-19 45v256q0 26 19 45t45 19h1664q26 0 45 -19t19 -45zM1792 1344v-256q0 -26 -19 -45t-45 -19h-1664q-26 0 -45 19t-19 45v256q0 26 19 45t45 19h1664q26 0 45 -19t19 -45z"
      ],
      "\uf0b0": [
        1408,
        "M1403 1241q17 -41 -14 -70l-493 -493v-742q0 -42 -39 -59q-13 -5 -25 -5q-27 0 -45 19l-256 256q-19 19 -19 45v486l-493 493q-31 29 -14 70q17 39 59 39h1280q42 0 59 -39z"
      ],
      "\uf0b1": [
        1792,
        "M640 1280h512v128h-512v-128zM1792 640v-480q0 -66 -47 -113t-113 -47h-1472q-66 0 -113 47t-47 113v480h672v-160q0 -26 19 -45t45 -19h320q26 0 45 19t19 45v160h672zM1024 640v-128h-256v128h256zM1792 1120v-384h-1792v384q0 66 47 113t113 47h352v160q0 40 28 68 t68 28h576q40 0 68 -28t28 -68v-160h352q66 0 113 -47t47 -113z"
      ],
      "\uf0b2": [
        1536.0,
        "M1283 995l-355 -355l355 -355l144 144q29 31 70 14q39 -17 39 -59v-448q0 -26 -19 -45t-45 -19h-448q-42 0 -59 40q-17 39 14 69l144 144l-355 355l-355 -355l144 -144q31 -30 14 -69q-17 -40 -59 -40h-448q-26 0 -45 19t-19 45v448q0 42 40 59q39 17 69 -14l144 -144 l355 355l-355 355l-144 -144q-19 -19 -45 -19q-12 0 -24 5q-40 17 -40 59v448q0 26 19 45t45 19h448q42 0 59 -40q17 -39 -14 -69l-144 -144l355 -355l355 355l-144 144q-31 30 -14 69q17 40 59 40h448q26 0 45 -19t19 -45v-448q0 -42 -39 -59q-13 -5 -25 -5q-26 0 -45 19z "
      ],
      "\uf0c0": [
        1920,
        "M593 640q-162 -5 -265 -128h-134q-82 0 -138 40.5t-56 118.5q0 353 124 353q6 0 43.5 -21t97.5 -42.5t119 -21.5q67 0 133 23q-5 -37 -5 -66q0 -139 81 -256zM1664 3q0 -120 -73 -189.5t-194 -69.5h-874q-121 0 -194 69.5t-73 189.5q0 53 3.5 103.5t14 109t26.5 108.5 t43 97.5t62 81t85.5 53.5t111.5 20q10 0 43 -21.5t73 -48t107 -48t135 -21.5t135 21.5t107 48t73 48t43 21.5q61 0 111.5 -20t85.5 -53.5t62 -81t43 -97.5t26.5 -108.5t14 -109t3.5 -103.5zM640 1280q0 -106 -75 -181t-181 -75t-181 75t-75 181t75 181t181 75t181 -75 t75 -181zM1344 896q0 -159 -112.5 -271.5t-271.5 -112.5t-271.5 112.5t-112.5 271.5t112.5 271.5t271.5 112.5t271.5 -112.5t112.5 -271.5zM1920 671q0 -78 -56 -118.5t-138 -40.5h-134q-103 123 -265 128q81 117 81 256q0 29 -5 66q66 -23 133 -23q59 0 119 21.5t97.5 42.5 t43.5 21q124 0 124 -353zM1792 1280q0 -106 -75 -181t-181 -75t-181 75t-75 181t75 181t181 75t181 -75t75 -181z"
      ],
      "\uf0c1": [
        1664,
        "M1456 320q0 40 -28 68l-208 208q-28 28 -68 28q-42 0 -72 -32q3 -3 19 -18.5t21.5 -21.5t15 -19t13 -25.5t3.5 -27.5q0 -40 -28 -68t-68 -28q-15 0 -27.5 3.5t-25.5 13t-19 15t-21.5 21.5t-18.5 19q-33 -31 -33 -73q0 -40 28 -68l206 -207q27 -27 68 -27q40 0 68 26 l147 146q28 28 28 67zM753 1025q0 40 -28 68l-206 207q-28 28 -68 28q-39 0 -68 -27l-147 -146q-28 -28 -28 -67q0 -40 28 -68l208 -208q27 -27 68 -27q42 0 72 31q-3 3 -19 18.5t-21.5 21.5t-15 19t-13 25.5t-3.5 27.5q0 40 28 68t68 28q15 0 27.5 -3.5t25.5 -13t19 -15 t21.5 -21.5t18.5 -19q33 31 33 73zM1648 320q0 -120 -85 -203l-147 -146q-83 -83 -203 -83q-121 0 -204 85l-206 207q-83 83 -83 203q0 123 88 209l-88 88q-86 -88 -208 -88q-120 0 -204 84l-208 208q-84 84 -84 204t85 203l147 146q83 83 203 83q121 0 204 -85l206 -207 q83 -83 83 -203q0 -123 -88 -209l88 -88q86 88 208 88q120 0 204 -84l208 -208q84 -84 84 -204z"
      ],
      "\uf0c2": [
        1920,
        "M1920 384q0 -159 -112.5 -271.5t-271.5 -112.5h-1088q-185 0 -316.5 131.5t-131.5 316.5q0 132 71 241.5t187 163.5q-2 28 -2 43q0 212 150 362t362 150q158 0 286.5 -88t187.5 -230q70 62 166 62q106 0 181 -75t75 -181q0 -75 -41 -138q129 -30 213 -134.5t84 -239.5z "
      ],
      "\uf0c3": [
        1664,
        "M1527 88q56 -89 21.5 -152.5t-140.5 -63.5h-1152q-106 0 -140.5 63.5t21.5 152.5l503 793v399h-64q-26 0 -45 19t-19 45t19 45t45 19h512q26 0 45 -19t19 -45t-19 -45t-45 -19h-64v-399zM748 813l-272 -429h712l-272 429l-20 31v37v399h-128v-399v-37z"
      ],
      "\uf0c4": [
        1792,
        "M960 640q26 0 45 -19t19 -45t-19 -45t-45 -19t-45 19t-19 45t19 45t45 19zM1260 576l507 -398q28 -20 25 -56q-5 -35 -35 -51l-128 -64q-13 -7 -29 -7q-17 0 -31 8l-690 387l-110 -66q-8 -4 -12 -5q14 -49 10 -97q-7 -77 -56 -147.5t-132 -123.5q-132 -84 -277 -84 q-136 0 -222 78q-90 84 -79 207q7 76 56 147t131 124q132 84 278 84q83 0 151 -31q9 13 22 22l122 73l-122 73q-13 9 -22 22q-68 -31 -151 -31q-146 0 -278 84q-82 53 -131 124t-56 147q-5 59 15.5 113t63.5 93q85 79 222 79q145 0 277 -84q83 -52 132 -123t56 -148 q4 -48 -10 -97q4 -1 12 -5l110 -66l690 387q14 8 31 8q16 0 29 -7l128 -64q30 -16 35 -51q3 -36 -25 -56zM579 836q46 42 21 108t-106 117q-92 59 -192 59q-74 0 -113 -36q-46 -42 -21 -108t106 -117q92 -59 192 -59q74 0 113 36zM494 91q81 51 106 117t-21 108 q-39 36 -113 36q-100 0 -192 -59q-81 -51 -106 -117t21 -108q39 -36 113 -36q100 0 192 59zM672 704l96 -58v11q0 36 33 56l14 8l-79 47l-26 -26q-3 -3 -10 -11t-12 -12q-2 -2 -4 -3.5t-3 -2.5zM896 480l96 -32l736 576l-128 64l-768 -431v-113l-160 -96l9 -8q2 -2 7 -6 q4 -4 11 -12t11 -12l26 -26zM1600 64l128 64l-520 408l-177 -138q-2 -3 -13 -7z"
      ],
      "\uf0c5": [
        1792,
        "M1696 1152q40 0 68 -28t28 -68v-1216q0 -40 -28 -68t-68 -28h-960q-40 0 -68 28t-28 68v288h-544q-40 0 -68 28t-28 68v672q0 40 20 88t48 76l408 408q28 28 76 48t88 20h416q40 0 68 -28t28 -68v-328q68 40 128 40h416zM1152 939l-299 -299h299v299zM512 1323l-299 -299 h299v299zM708 676l316 316v416h-384v-416q0 -40 -28 -68t-68 -28h-416v-640h512v256q0 40 20 88t48 76zM1664 -128v1152h-384v-416q0 -40 -28 -68t-68 -28h-416v-640h896z"
      ],
      "\uf0c6": [
        1408,
        "M1404 151q0 -117 -79 -196t-196 -79q-135 0 -235 100l-777 776q-113 115 -113 271q0 159 110 270t269 111q158 0 273 -113l605 -606q10 -10 10 -22q0 -16 -30.5 -46.5t-46.5 -30.5q-13 0 -23 10l-606 607q-79 77 -181 77q-106 0 -179 -75t-73 -181q0 -105 76 -181 l776 -777q63 -63 145 -63q64 0 106 42t42 106q0 82 -63 145l-581 581q-26 24 -60 24q-29 0 -48 -19t-19 -48q0 -32 25 -59l410 -410q10 -10 10 -22q0 -16 -31 -47t-47 -31q-12 0 -22 10l-410 410q-63 61 -63 149q0 82 57 139t139 57q88 0 149 -63l581 -581q100 -98 100 -235 z"
      ],
      "\uf0c7": [
        1536.0,
        "M384 0h768v384h-768v-384zM1280 0h128v896q0 14 -10 38.5t-20 34.5l-281 281q-10 10 -34 20t-39 10v-416q0 -40 -28 -68t-68 -28h-576q-40 0 -68 28t-28 68v416h-128v-1280h128v416q0 40 28 68t68 28h832q40 0 68 -28t28 -68v-416zM896 928v320q0 13 -9.5 22.5t-22.5 9.5 h-192q-13 0 -22.5 -9.5t-9.5 -22.5v-320q0 -13 9.5 -22.5t22.5 -9.5h192q13 0 22.5 9.5t9.5 22.5zM1536 896v-928q0 -40 -28 -68t-68 -28h-1344q-40 0 -68 28t-28 68v1344q0 40 28 68t68 28h928q40 0 88 -20t76 -48l280 -280q28 -28 48 -76t20 -88z"
      ],
      "\uf0c8": [
        1536.0,
        "M1536 1120v-960q0 -119 -84.5 -203.5t-203.5 -84.5h-960q-119 0 -203.5 84.5t-84.5 203.5v960q0 119 84.5 203.5t203.5 84.5h960q119 0 203.5 -84.5t84.5 -203.5z"
      ],
      "\uf0c9": [
        1536.0,
        "M1536 192v-128q0 -26 -19 -45t-45 -19h-1408q-26 0 -45 19t-19 45v128q0 26 19 45t45 19h1408q26 0 45 -19t19 -45zM1536 704v-128q0 -26 -19 -45t-45 -19h-1408q-26 0 -45 19t-19 45v128q0 26 19 45t45 19h1408q26 0 45 -19t19 -45zM1536 1216v-128q0 -26 -19 -45 t-45 -19h-1408q-26 0 -45 19t-19 45v128q0 26 19 45t45 19h1408q26 0 45 -19t19 -45z"
      ],
      "\uf0ca": [
        1792,
        "M384 128q0 -80 -56 -136t-136 -56t-136 56t-56 136t56 136t136 56t136 -56t56 -136zM384 640q0 -80 -56 -136t-136 -56t-136 56t-56 136t56 136t136 56t136 -56t56 -136zM1792 224v-192q0 -13 -9.5 -22.5t-22.5 -9.5h-1216q-13 0 -22.5 9.5t-9.5 22.5v192q0 13 9.5 22.5 t22.5 9.5h1216q13 0 22.5 -9.5t9.5 -22.5zM384 1152q0 -80 -56 -136t-136 -56t-136 56t-56 136t56 136t136 56t136 -56t56 -136zM1792 736v-192q0 -13 -9.5 -22.5t-22.5 -9.5h-1216q-13 0 -22.5 9.5t-9.5 22.5v192q0 13 9.5 22.5t22.5 9.5h1216q13 0 22.5 -9.5t9.5 -22.5z M1792 1248v-192q0 -13 -9.5 -22.5t-22.5 -9.5h-1216q-13 0 -22.5 9.5t-9.5 22.5v192q0 13 9.5 22.5t22.5 9.5h1216q13 0 22.5 -9.5t9.5 -22.5z"
      ],
      "\uf0cb": [
        1792,
        "M381 -84q0 -80 -54.5 -126t-135.5 -46q-106 0 -172 66l57 88q49 -45 106 -45q29 0 50.5 14.5t21.5 42.5q0 64 -105 56l-26 56q8 10 32.5 43.5t42.5 54t37 38.5v1q-16 0 -48.5 -1t-48.5 -1v-53h-106v152h333v-88l-95 -115q51 -12 81 -49t30 -88zM383 543v-159h-362 q-6 36 -6 54q0 51 23.5 93t56.5 68t66 47.5t56.5 43.5t23.5 45q0 25 -14.5 38.5t-39.5 13.5q-46 0 -81 -58l-85 59q24 51 71.5 79.5t105.5 28.5q73 0 123 -41.5t50 -112.5q0 -50 -34 -91.5t-75 -64.5t-75.5 -50.5t-35.5 -52.5h127v60h105zM1792 224v-192q0 -13 -9.5 -22.5 t-22.5 -9.5h-1216q-13 0 -22.5 9.5t-9.5 22.5v192q0 14 9 23t23 9h1216q13 0 22.5 -9.5t9.5 -22.5zM384 1123v-99h-335v99h107q0 41 0.5 121.5t0.5 121.5v12h-2q-8 -17 -50 -54l-71 76l136 127h106v-404h108zM1792 736v-192q0 -13 -9.5 -22.5t-22.5 -9.5h-1216 q-13 0 -22.5 9.5t-9.5 22.5v192q0 14 9 23t23 9h1216q13 0 22.5 -9.5t9.5 -22.5zM1792 1248v-192q0 -13 -9.5 -22.5t-22.5 -9.5h-1216q-13 0 -22.5 9.5t-9.5 22.5v192q0 13 9.5 22.5t22.5 9.5h1216q13 0 22.5 -9.5t9.5 -22.5z"
      ],
      "\uf0cc": [
        1792,
        "M1760 640q14 0 23 -9t9 -23v-64q0 -14 -9 -23t-23 -9h-1728q-14 0 -23 9t-9 23v64q0 14 9 23t23 9h1728zM483 704q-28 35 -51 80q-48 98 -48 188q0 181 134 309q133 127 393 127q50 0 167 -19q66 -12 177 -48q10 -38 21 -118q14 -123 14 -183q0 -18 -5 -45l-12 -3l-84 6 l-14 2q-50 149 -103 205q-88 91 -210 91q-114 0 -182 -59q-67 -58 -67 -146q0 -73 66 -140t279 -129q69 -20 173 -66q58 -28 95 -52h-743zM990 448h411q7 -39 7 -92q0 -111 -41 -212q-23 -56 -71 -104q-37 -35 -109 -81q-80 -48 -153 -66q-80 -21 -203 -21q-114 0 -195 23 l-140 40q-57 16 -72 28q-8 8 -8 22v13q0 108 -2 156q-1 30 0 68l2 37v44l102 2q15 -34 30 -71t22.5 -56t12.5 -27q35 -57 80 -94q43 -36 105 -57q59 -22 132 -22q64 0 139 27q77 26 122 86q47 61 47 129q0 84 -81 157q-34 29 -137 71z"
      ],
      "\uf0cd": [
        1536.0,
        "M48 1313q-37 2 -45 4l-3 88q13 1 40 1q60 0 112 -4q132 -7 166 -7q86 0 168 3q116 4 146 5q56 0 86 2l-1 -14l2 -64v-9q-60 -9 -124 -9q-60 0 -79 -25q-13 -14 -13 -132q0 -13 0.5 -32.5t0.5 -25.5l1 -229l14 -280q6 -124 51 -202q35 -59 96 -92q88 -47 177 -47 q104 0 191 28q56 18 99 51q48 36 65 64q36 56 53 114q21 73 21 229q0 79 -3.5 128t-11 122.5t-13.5 159.5l-4 59q-5 67 -24 88q-34 35 -77 34l-100 -2l-14 3l2 86h84l205 -10q76 -3 196 10l18 -2q6 -38 6 -51q0 -7 -4 -31q-45 -12 -84 -13q-73 -11 -79 -17q-15 -15 -15 -41 q0 -7 1.5 -27t1.5 -31q8 -19 22 -396q6 -195 -15 -304q-15 -76 -41 -122q-38 -65 -112 -123q-75 -57 -182 -89q-109 -33 -255 -33q-167 0 -284 46q-119 47 -179 122q-61 76 -83 195q-16 80 -16 237v333q0 188 -17 213q-25 36 -147 39zM1536 -96v64q0 14 -9 23t-23 9h-1472 q-14 0 -23 -9t-9 -23v-64q0 -14 9 -23t23 -9h1472q14 0 23 9t9 23z"
      ],
      "\uf0ce": [
        1664,
        "M512 160v192q0 14 -9 23t-23 9h-320q-14 0 -23 -9t-9 -23v-192q0 -14 9 -23t23 -9h320q14 0 23 9t9 23zM512 544v192q0 14 -9 23t-23 9h-320q-14 0 -23 -9t-9 -23v-192q0 -14 9 -23t23 -9h320q14 0 23 9t9 23zM1024 160v192q0 14 -9 23t-23 9h-320q-14 0 -23 -9t-9 -23 v-192q0 -14 9 -23t23 -9h320q14 0 23 9t9 23zM512 928v192q0 14 -9 23t-23 9h-320q-14 0 -23 -9t-9 -23v-192q0 -14 9 -23t23 -9h320q14 0 23 9t9 23zM1024 544v192q0 14 -9 23t-23 9h-320q-14 0 -23 -9t-9 -23v-192q0 -14 9 -23t23 -9h320q14 0 23 9t9 23zM1536 160v192 q0 14 -9 23t-23 9h-320q-14 0 -23 -9t-9 -23v-192q0 -14 9 -23t23 -9h320q14 0 23 9t9 23zM1024 928v192q0 14 -9 23t-23 9h-320q-14 0 -23 -9t-9 -23v-192q0 -14 9 -23t23 -9h320q14 0 23 9t9 23zM1536 544v192q0 14 -9 23t-23 9h-320q-14 0 -23 -9t-9 -23v-192 q0 -14 9 -23t23 -9h320q14 0 23 9t9 23zM1536 928v192q0 14 -9 23t-23 9h-320q-14 0 -23 -9t-9 -23v-192q0 -14 9 -23t23 -9h320q14 0 23 9t9 23zM1664 1248v-1088q0 -66 -47 -113t-113 -47h-1344q-66 0 -113 47t-47 113v1088q0 66 47 113t113 47h1344q66 0 113 -47t47 -113 z"
      ],
      "\uf0d0": [
        1664,
        "M1190 955l293 293l-107 107l-293 -293zM1637 1248q0 -27 -18 -45l-1286 -1286q-18 -18 -45 -18t-45 18l-198 198q-18 18 -18 45t18 45l1286 1286q18 18 45 18t45 -18l198 -198q18 -18 18 -45zM286 1438l98 -30l-98 -30l-30 -98l-30 98l-98 30l98 30l30 98zM636 1276 l196 -60l-196 -60l-60 -196l-60 196l-196 60l196 60l60 196zM1566 798l98 -30l-98 -30l-30 -98l-30 98l-98 30l98 30l30 98zM926 1438l98 -30l-98 -30l-30 -98l-30 98l-98 30l98 30l30 98z"
      ],
      "\uf0d1": [
        1792,
        "M640 128q0 52 -38 90t-90 38t-90 -38t-38 -90t38 -90t90 -38t90 38t38 90zM256 640h384v256h-158q-13 0 -22 -9l-195 -195q-9 -9 -9 -22v-30zM1536 128q0 52 -38 90t-90 38t-90 -38t-38 -90t38 -90t90 -38t90 38t38 90zM1792 1216v-1024q0 -15 -4 -26.5t-13.5 -18.5 t-16.5 -11.5t-23.5 -6t-22.5 -2t-25.5 0t-22.5 0.5q0 -106 -75 -181t-181 -75t-181 75t-75 181h-384q0 -106 -75 -181t-181 -75t-181 75t-75 181h-64q-3 0 -22.5 -0.5t-25.5 0t-22.5 2t-23.5 6t-16.5 11.5t-13.5 18.5t-4 26.5q0 26 19 45t45 19v320q0 8 -0.5 35t0 38 t2.5 34.5t6.5 37t14 30.5t22.5 30l198 198q19 19 50.5 32t58.5 13h160v192q0 26 19 45t45 19h1024q26 0 45 -19t19 -45z"
      ],
      "\uf0d2": [
        1536.0,
        "M1536 640q0 -209 -103 -385.5t-279.5 -279.5t-385.5 -103q-111 0 -218 32q59 93 78 164q9 34 54 211q20 -39 73 -67.5t114 -28.5q121 0 216 68.5t147 188.5t52 270q0 114 -59.5 214t-172.5 163t-255 63q-105 0 -196 -29t-154.5 -77t-109 -110.5t-67 -129.5t-21.5 -134 q0 -104 40 -183t117 -111q30 -12 38 20q2 7 8 31t8 30q6 23 -11 43q-51 61 -51 151q0 151 104.5 259.5t273.5 108.5q151 0 235.5 -82t84.5 -213q0 -170 -68.5 -289t-175.5 -119q-61 0 -98 43.5t-23 104.5q8 35 26.5 93.5t30 103t11.5 75.5q0 50 -27 83t-77 33 q-62 0 -105 -57t-43 -142q0 -73 25 -122l-99 -418q-17 -70 -13 -177q-206 91 -333 281t-127 423q0 209 103 385.5t279.5 279.5t385.5 103t385.5 -103t279.5 -279.5t103 -385.5z"
      ],
      "\uf0d3": [
        1536.0,
        "M1248 1408q119 0 203.5 -84.5t84.5 -203.5v-960q0 -119 -84.5 -203.5t-203.5 -84.5h-725q85 122 108 210q9 34 53 209q21 -39 73.5 -67t112.5 -28q181 0 295.5 147.5t114.5 373.5q0 84 -35 162.5t-96.5 139t-152.5 97t-197 36.5q-104 0 -194.5 -28.5t-153 -76.5 t-107.5 -109.5t-66.5 -128t-21.5 -132.5q0 -102 39.5 -180t116.5 -110q13 -5 23.5 0t14.5 19q10 44 15 61q6 23 -11 42q-50 62 -50 150q0 150 103.5 256.5t270.5 106.5q149 0 232.5 -81t83.5 -210q0 -168 -67.5 -286t-173.5 -118q-60 0 -97 43.5t-23 103.5q8 34 26.5 92.5 t29.5 102t11 74.5q0 49 -26.5 81.5t-75.5 32.5q-61 0 -103.5 -56.5t-42.5 -139.5q0 -72 24 -121l-98 -414q-24 -100 -7 -254h-183q-119 0 -203.5 84.5t-84.5 203.5v960q0 119 84.5 203.5t203.5 84.5h960z"
      ],
      "\uf0d4": [
        1536.0,
        "M917 631q0 26 -6 64h-362v-132h217q-3 -24 -16.5 -50t-37.5 -53t-66.5 -44.5t-96.5 -17.5q-99 0 -169 71t-70 171t70 171t169 71q92 0 153 -59l104 101q-108 100 -257 100q-160 0 -272 -112.5t-112 -271.5t112 -271.5t272 -112.5q165 0 266.5 105t101.5 270zM1262 585 h109v110h-109v110h-110v-110h-110v-110h110v-110h110v110zM1536 1120v-960q0 -119 -84.5 -203.5t-203.5 -84.5h-960q-119 0 -203.5 84.5t-84.5 203.5v960q0 119 84.5 203.5t203.5 84.5h960q119 0 203.5 -84.5t84.5 -203.5z"
      ],
      "\uf0d5": [
        2304,
        "M1437 623q0 -208 -87 -370.5t-248 -254t-369 -91.5q-149 0 -285 58t-234 156t-156 234t-58 285t58 285t156 234t234 156t285 58q286 0 491 -192l-199 -191q-117 113 -292 113q-123 0 -227.5 -62t-165.5 -168.5t-61 -232.5t61 -232.5t165.5 -168.5t227.5 -62 q83 0 152.5 23t114.5 57.5t78.5 78.5t49 83t21.5 74h-416v252h692q12 -63 12 -122zM2304 745v-210h-209v-209h-210v209h-209v210h209v209h210v-209h209z"
      ],
      "\uf0d6": [
        1920,
        "M768 384h384v96h-128v448h-114l-148 -137l77 -80q42 37 55 57h2v-288h-128v-96zM1280 640q0 -70 -21 -142t-59.5 -134t-101.5 -101t-138 -39t-138 39t-101.5 101t-59.5 134t-21 142t21 142t59.5 134t101.5 101t138 39t138 -39t101.5 -101t59.5 -134t21 -142zM1792 384 v512q-106 0 -181 75t-75 181h-1152q0 -106 -75 -181t-181 -75v-512q106 0 181 -75t75 -181h1152q0 106 75 181t181 75zM1920 1216v-1152q0 -26 -19 -45t-45 -19h-1792q-26 0 -45 19t-19 45v1152q0 26 19 45t45 19h1792q26 0 45 -19t19 -45z"
      ],
      "\uf0d7": [
        1024,
        "M1024 832q0 -26 -19 -45l-448 -448q-19 -19 -45 -19t-45 19l-448 448q-19 19 -19 45t19 45t45 19h896q26 0 45 -19t19 -45z"
      ],
      "\uf0d8": [
        1024,
        "M1024 320q0 -26 -19 -45t-45 -19h-896q-26 0 -45 19t-19 45t19 45l448 448q19 19 45 19t45 -19l448 -448q19 -19 19 -45z"
      ],
      "\uf0d9": [
        640,
        "M640 1088v-896q0 -26 -19 -45t-45 -19t-45 19l-448 448q-19 19 -19 45t19 45l448 448q19 19 45 19t45 -19t19 -45z"
      ],
      "\uf0da": [
        640,
        "M576 640q0 -26 -19 -45l-448 -448q-19 -19 -45 -19t-45 19t-19 45v896q0 26 19 45t45 19t45 -19l448 -448q19 -19 19 -45z"
      ],
      "\uf0db": [
        1664,
        "M160 0h608v1152h-640v-1120q0 -13 9.5 -22.5t22.5 -9.5zM1536 32v1120h-640v-1152h608q13 0 22.5 9.5t9.5 22.5zM1664 1248v-1216q0 -66 -47 -113t-113 -47h-1344q-66 0 -113 47t-47 113v1216q0 66 47 113t113 47h1344q66 0 113 -47t47 -113z"
      ],
      "\uf0dc": [
        1024,
        "M1024 448q0 -26 -19 -45l-448 -448q-19 -19 -45 -19t-45 19l-448 448q-19 19 -19 45t19 45t45 19h896q26 0 45 -19t19 -45zM1024 832q0 -26 -19 -45t-45 -19h-896q-26 0 -45 19t-19 45t19 45l448 448q19 19 45 19t45 -19l448 -448q19 -19 19 -45z"
      ],
      "\uf0dd": [
        1024,
        "M1024 448q0 -26 -19 -45l-448 -448q-19 -19 -45 -19t-45 19l-448 448q-19 19 -19 45t19 45t45 19h896q26 0 45 -19t19 -45z"
      ],
      "\uf0de": [
        1024,
        "M1024 832q0 -26 -19 -45t-45 -19h-896q-26 0 -45 19t-19 45t19 45l448 448q19 19 45 19t45 -19l448 -448q19 -19 19 -45z"
      ],
      "\uf0e0": [
        1792,
        "M1792 826v-794q0 -66 -47 -113t-113 -47h-1472q-66 0 -113 47t-47 113v794q44 -49 101 -87q362 -246 497 -345q57 -42 92.5 -65.5t94.5 -48t110 -24.5h1h1q51 0 110 24.5t94.5 48t92.5 65.5q170 123 498 345q57 39 100 87zM1792 1120q0 -79 -49 -151t-122 -123 q-376 -261 -468 -325q-10 -7 -42.5 -30.5t-54 -38t-52 -32.5t-57.5 -27t-50 -9h-1h-1q-23 0 -50 9t-57.5 27t-52 32.5t-54 38t-42.5 30.5q-91 64 -262 182.5t-205 142.5q-62 42 -117 115.5t-55 136.5q0 78 41.5 130t118.5 52h1472q65 0 112.5 -47t47.5 -113z"
      ],
      "\uf0e1": [
        1536.0,
        "M349 911v-991h-330v991h330zM370 1217q1 -73 -50.5 -122t-135.5 -49h-2q-82 0 -132 49t-50 122q0 74 51.5 122.5t134.5 48.5t133 -48.5t51 -122.5zM1536 488v-568h-329v530q0 105 -40.5 164.5t-126.5 59.5q-63 0 -105.5 -34.5t-63.5 -85.5q-11 -30 -11 -81v-553h-329 q2 399 2 647t-1 296l-1 48h329v-144h-2q20 32 41 56t56.5 52t87 43.5t114.5 15.5q171 0 275 -113.5t104 -332.5z"
      ],
      "\uf0e2": [
        1536.0,
        "M1536 640q0 -156 -61 -298t-164 -245t-245 -164t-298 -61q-172 0 -327 72.5t-264 204.5q-7 10 -6.5 22.5t8.5 20.5l137 138q10 9 25 9q16 -2 23 -12q73 -95 179 -147t225 -52q104 0 198.5 40.5t163.5 109.5t109.5 163.5t40.5 198.5t-40.5 198.5t-109.5 163.5 t-163.5 109.5t-198.5 40.5q-98 0 -188 -35.5t-160 -101.5l137 -138q31 -30 14 -69q-17 -40 -59 -40h-448q-26 0 -45 19t-19 45v448q0 42 40 59q39 17 69 -14l130 -129q107 101 244.5 156.5t284.5 55.5q156 0 298 -61t245 -164t164 -245t61 -298z"
      ],
      "\uf0e3": [
        1792,
        "M1771 0q0 -53 -37 -90l-107 -108q-39 -37 -91 -37q-53 0 -90 37l-363 364q-38 36 -38 90q0 53 43 96l-256 256l-126 -126q-14 -14 -34 -14t-34 14q2 -2 12.5 -12t12.5 -13t10 -11.5t10 -13.5t6 -13.5t5.5 -16.5t1.5 -18q0 -38 -28 -68q-3 -3 -16.5 -18t-19 -20.5 t-18.5 -16.5t-22 -15.5t-22 -9t-26 -4.5q-40 0 -68 28l-408 408q-28 28 -28 68q0 13 4.5 26t9 22t15.5 22t16.5 18.5t20.5 19t18 16.5q30 28 68 28q10 0 18 -1.5t16.5 -5.5t13.5 -6t13.5 -10t11.5 -10t13 -12.5t12 -12.5q-14 14 -14 34t14 34l348 348q14 14 34 14t34 -14 q-2 2 -12.5 12t-12.5 13t-10 11.5t-10 13.5t-6 13.5t-5.5 16.5t-1.5 18q0 38 28 68q3 3 16.5 18t19 20.5t18.5 16.5t22 15.5t22 9t26 4.5q40 0 68 -28l408 -408q28 -28 28 -68q0 -13 -4.5 -26t-9 -22t-15.5 -22t-16.5 -18.5t-20.5 -19t-18 -16.5q-30 -28 -68 -28 q-10 0 -18 1.5t-16.5 5.5t-13.5 6t-13.5 10t-11.5 10t-13 12.5t-12 12.5q14 -14 14 -34t-14 -34l-126 -126l256 -256q43 43 96 43q52 0 91 -37l363 -363q37 -39 37 -91z"
      ],
      "\uf0e4": [
        1792,
        "M384 384q0 53 -37.5 90.5t-90.5 37.5t-90.5 -37.5t-37.5 -90.5t37.5 -90.5t90.5 -37.5t90.5 37.5t37.5 90.5zM576 832q0 53 -37.5 90.5t-90.5 37.5t-90.5 -37.5t-37.5 -90.5t37.5 -90.5t90.5 -37.5t90.5 37.5t37.5 90.5zM1004 351l101 382q6 26 -7.5 48.5t-38.5 29.5 t-48 -6.5t-30 -39.5l-101 -382q-60 -5 -107 -43.5t-63 -98.5q-20 -77 20 -146t117 -89t146 20t89 117q16 60 -6 117t-72 91zM1664 384q0 53 -37.5 90.5t-90.5 37.5t-90.5 -37.5t-37.5 -90.5t37.5 -90.5t90.5 -37.5t90.5 37.5t37.5 90.5zM1024 1024q0 53 -37.5 90.5 t-90.5 37.5t-90.5 -37.5t-37.5 -90.5t37.5 -90.5t90.5 -37.5t90.5 37.5t37.5 90.5zM1472 832q0 53 -37.5 90.5t-90.5 37.5t-90.5 -37.5t-37.5 -90.5t37.5 -90.5t90.5 -37.5t90.5 37.5t37.5 90.5zM1792 384q0 -261 -141 -483q-19 -29 -54 -29h-1402q-35 0 -54 29 q-141 221 -141 483q0 182 71 348t191 286t286 191t348 71t348 -71t286 -191t191 -286t71 -348z"
      ],
      "\uf0e5": [
        1792,
        "M896 1152q-204 0 -381.5 -69.5t-282 -187.5t-104.5 -255q0 -112 71.5 -213.5t201.5 -175.5l87 -50l-27 -96q-24 -91 -70 -172q152 63 275 171l43 38l57 -6q69 -8 130 -8q204 0 381.5 69.5t282 187.5t104.5 255t-104.5 255t-282 187.5t-381.5 69.5zM1792 640 q0 -174 -120 -321.5t-326 -233t-450 -85.5q-70 0 -145 8q-198 -175 -460 -242q-49 -14 -114 -22h-5q-15 0 -27 10.5t-16 27.5v1q-3 4 -0.5 12t2 10t4.5 9.5l6 9t7 8.5t8 9q7 8 31 34.5t34.5 38t31 39.5t32.5 51t27 59t26 76q-157 89 -247.5 220t-90.5 281q0 174 120 321.5 t326 233t450 85.5t450 -85.5t326 -233t120 -321.5z"
      ],
      "\uf0e6": [
        1792,
        "M704 1152q-153 0 -286 -52t-211.5 -141t-78.5 -191q0 -82 53 -158t149 -132l97 -56l-35 -84q34 20 62 39l44 31l53 -10q78 -14 153 -14q153 0 286 52t211.5 141t78.5 191t-78.5 191t-211.5 141t-286 52zM704 1280q191 0 353.5 -68.5t256.5 -186.5t94 -257t-94 -257 t-256.5 -186.5t-353.5 -68.5q-86 0 -176 16q-124 -88 -278 -128q-36 -9 -86 -16h-3q-11 0 -20.5 8t-11.5 21q-1 3 -1 6.5t0.5 6.5t2 6l2.5 5t3.5 5.5t4 5t4.5 5t4 4.5q5 6 23 25t26 29.5t22.5 29t25 38.5t20.5 44q-124 72 -195 177t-71 224q0 139 94 257t256.5 186.5 t353.5 68.5zM1526 111q10 -24 20.5 -44t25 -38.5t22.5 -29t26 -29.5t23 -25q1 -1 4 -4.5t4.5 -5t4 -5t3.5 -5.5l2.5 -5t2 -6t0.5 -6.5t-1 -6.5q-3 -14 -13 -22t-22 -7q-50 7 -86 16q-154 40 -278 128q-90 -16 -176 -16q-271 0 -472 132q58 -4 88 -4q161 0 309 45t264 129 q125 92 192 212t67 254q0 77 -23 152q129 -71 204 -178t75 -230q0 -120 -71 -224.5t-195 -176.5z"
      ],
      "\uf0e7": [
        896,
        "M885 970q18 -20 7 -44l-540 -1157q-13 -25 -42 -25q-4 0 -14 2q-17 5 -25.5 19t-4.5 30l197 808l-406 -101q-4 -1 -12 -1q-18 0 -31 11q-18 15 -13 39l201 825q4 14 16 23t28 9h328q19 0 32 -12.5t13 -29.5q0 -8 -5 -18l-171 -463l396 98q8 2 12 2q19 0 34 -15z"
      ],
      "\uf0e8": [
        1792,
        "M1792 288v-320q0 -40 -28 -68t-68 -28h-320q-40 0 -68 28t-28 68v320q0 40 28 68t68 28h96v192h-512v-192h96q40 0 68 -28t28 -68v-320q0 -40 -28 -68t-68 -28h-320q-40 0 -68 28t-28 68v320q0 40 28 68t68 28h96v192h-512v-192h96q40 0 68 -28t28 -68v-320 q0 -40 -28 -68t-68 -28h-320q-40 0 -68 28t-28 68v320q0 40 28 68t68 28h96v192q0 52 38 90t90 38h512v192h-96q-40 0 -68 28t-28 68v320q0 40 28 68t68 28h320q40 0 68 -28t28 -68v-320q0 -40 -28 -68t-68 -28h-96v-192h512q52 0 90 -38t38 -90v-192h96q40 0 68 -28t28 -68 z"
      ],
      "\uf0e9": [
        1664,
        "M896 708v-580q0 -104 -76 -180t-180 -76t-180 76t-76 180q0 26 19 45t45 19t45 -19t19 -45q0 -50 39 -89t89 -39t89 39t39 89v580q33 11 64 11t64 -11zM1664 681q0 -13 -9.5 -22.5t-22.5 -9.5q-11 0 -23 10q-49 46 -93 69t-102 23q-68 0 -128 -37t-103 -97 q-7 -10 -17.5 -28t-14.5 -24q-11 -17 -28 -17q-18 0 -29 17q-4 6 -14.5 24t-17.5 28q-43 60 -102.5 97t-127.5 37t-127.5 -37t-102.5 -97q-7 -10 -17.5 -28t-14.5 -24q-11 -17 -29 -17q-17 0 -28 17q-4 6 -14.5 24t-17.5 28q-43 60 -103 97t-128 37q-58 0 -102 -23t-93 -69 q-12 -10 -23 -10q-13 0 -22.5 9.5t-9.5 22.5q0 5 1 7q45 183 172.5 319.5t298 204.5t360.5 68q140 0 274.5 -40t246.5 -113.5t194.5 -187t115.5 -251.5q1 -2 1 -7zM896 1408v-98q-42 2 -64 2t-64 -2v98q0 26 19 45t45 19t45 -19t19 -45z"
      ],
      "\uf0ea": [
        1792,
        "M768 -128h896v640h-416q-40 0 -68 28t-28 68v416h-384v-1152zM1024 1312v64q0 13 -9.5 22.5t-22.5 9.5h-704q-13 0 -22.5 -9.5t-9.5 -22.5v-64q0 -13 9.5 -22.5t22.5 -9.5h704q13 0 22.5 9.5t9.5 22.5zM1280 640h299l-299 299v-299zM1792 512v-672q0 -40 -28 -68t-68 -28 h-960q-40 0 -68 28t-28 68v160h-544q-40 0 -68 28t-28 68v1344q0 40 28 68t68 28h1088q40 0 68 -28t28 -68v-328q21 -13 36 -28l408 -408q28 -28 48 -76t20 -88z"
      ],
      "\uf0eb": [
        1024,
        "M736 960q0 -13 -9.5 -22.5t-22.5 -9.5t-22.5 9.5t-9.5 22.5q0 46 -54 71t-106 25q-13 0 -22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5q50 0 99.5 -16t87 -54t37.5 -90zM896 960q0 72 -34.5 134t-90 101.5t-123 62t-136.5 22.5t-136.5 -22.5t-123 -62t-90 -101.5t-34.5 -134 q0 -101 68 -180q10 -11 30.5 -33t30.5 -33q128 -153 141 -298h228q13 145 141 298q10 11 30.5 33t30.5 33q68 79 68 180zM1024 960q0 -155 -103 -268q-45 -49 -74.5 -87t-59.5 -95.5t-34 -107.5q47 -28 47 -82q0 -37 -25 -64q25 -27 25 -64q0 -52 -45 -81q13 -23 13 -47 q0 -46 -31.5 -71t-77.5 -25q-20 -44 -60 -70t-87 -26t-87 26t-60 70q-46 0 -77.5 25t-31.5 71q0 24 13 47q-45 29 -45 81q0 37 25 64q-25 27 -25 64q0 54 47 82q-4 50 -34 107.5t-59.5 95.5t-74.5 87q-103 113 -103 268q0 99 44.5 184.5t117 142t164 89t186.5 32.5 t186.5 -32.5t164 -89t117 -142t44.5 -184.5z"
      ],
      "\uf0ec": [
        1792,
        "M1792 352v-192q0 -13 -9.5 -22.5t-22.5 -9.5h-1376v-192q0 -13 -9.5 -22.5t-22.5 -9.5q-12 0 -24 10l-319 320q-9 9 -9 22q0 14 9 23l320 320q9 9 23 9q13 0 22.5 -9.5t9.5 -22.5v-192h1376q13 0 22.5 -9.5t9.5 -22.5zM1792 896q0 -14 -9 -23l-320 -320q-9 -9 -23 -9 q-13 0 -22.5 9.5t-9.5 22.5v192h-1376q-13 0 -22.5 9.5t-9.5 22.5v192q0 13 9.5 22.5t22.5 9.5h1376v192q0 14 9 23t23 9q12 0 24 -10l319 -319q9 -9 9 -23z"
      ],
      "\uf0ed": [
        1920,
        "M1280 608q0 14 -9 23t-23 9h-224v352q0 13 -9.5 22.5t-22.5 9.5h-192q-13 0 -22.5 -9.5t-9.5 -22.5v-352h-224q-13 0 -22.5 -9.5t-9.5 -22.5q0 -14 9 -23l352 -352q9 -9 23 -9t23 9l351 351q10 12 10 24zM1920 384q0 -159 -112.5 -271.5t-271.5 -112.5h-1088 q-185 0 -316.5 131.5t-131.5 316.5q0 130 70 240t188 165q-2 30 -2 43q0 212 150 362t362 150q156 0 285.5 -87t188.5 -231q71 62 166 62q106 0 181 -75t75 -181q0 -76 -41 -138q130 -31 213.5 -135.5t83.5 -238.5z"
      ],
      "\uf0ee": [
        1920,
        "M1280 672q0 14 -9 23l-352 352q-9 9 -23 9t-23 -9l-351 -351q-10 -12 -10 -24q0 -14 9 -23t23 -9h224v-352q0 -13 9.5 -22.5t22.5 -9.5h192q13 0 22.5 9.5t9.5 22.5v352h224q13 0 22.5 9.5t9.5 22.5zM1920 384q0 -159 -112.5 -271.5t-271.5 -112.5h-1088 q-185 0 -316.5 131.5t-131.5 316.5q0 130 70 240t188 165q-2 30 -2 43q0 212 150 362t362 150q156 0 285.5 -87t188.5 -231q71 62 166 62q106 0 181 -75t75 -181q0 -76 -41 -138q130 -31 213.5 -135.5t83.5 -238.5z"
      ],
      "\uf0f0": [
        1408,
        "M384 192q0 -26 -19 -45t-45 -19t-45 19t-19 45t19 45t45 19t45 -19t19 -45zM1408 131q0 -121 -73 -190t-194 -69h-874q-121 0 -194 69t-73 190q0 68 5.5 131t24 138t47.5 132.5t81 103t120 60.5q-22 -52 -22 -120v-203q-58 -20 -93 -70t-35 -111q0 -80 56 -136t136 -56 t136 56t56 136q0 61 -35.5 111t-92.5 70v203q0 62 25 93q132 -104 295 -104t295 104q25 -31 25 -93v-64q-106 0 -181 -75t-75 -181v-89q-32 -29 -32 -71q0 -40 28 -68t68 -28t68 28t28 68q0 42 -32 71v89q0 52 38 90t90 38t90 -38t38 -90v-89q-32 -29 -32 -71q0 -40 28 -68 t68 -28t68 28t28 68q0 42 -32 71v89q0 68 -34.5 127.5t-93.5 93.5q0 10 0.5 42.5t0 48t-2.5 41.5t-7 47t-13 40q68 -15 120 -60.5t81 -103t47.5 -132.5t24 -138t5.5 -131zM1088 1024q0 -159 -112.5 -271.5t-271.5 -112.5t-271.5 112.5t-112.5 271.5t112.5 271.5t271.5 112.5 t271.5 -112.5t112.5 -271.5z"
      ],
      "\uf0f1": [
        1408,
        "M1280 832q0 26 -19 45t-45 19t-45 -19t-19 -45t19 -45t45 -19t45 19t19 45zM1408 832q0 -62 -35.5 -111t-92.5 -70v-395q0 -159 -131.5 -271.5t-316.5 -112.5t-316.5 112.5t-131.5 271.5v132q-164 20 -274 128t-110 252v512q0 26 19 45t45 19q6 0 16 -2q17 30 47 48 t65 18q53 0 90.5 -37.5t37.5 -90.5t-37.5 -90.5t-90.5 -37.5q-33 0 -64 18v-402q0 -106 94 -181t226 -75t226 75t94 181v402q-31 -18 -64 -18q-53 0 -90.5 37.5t-37.5 90.5t37.5 90.5t90.5 37.5q35 0 65 -18t47 -48q10 2 16 2q26 0 45 -19t19 -45v-512q0 -144 -110 -252 t-274 -128v-132q0 -106 94 -181t226 -75t226 75t94 181v395q-57 21 -92.5 70t-35.5 111q0 80 56 136t136 56t136 -56t56 -136z"
      ],
      "\uf0f2": [
        1792,
        "M640 1152h512v128h-512v-128zM288 1152v-1280h-64q-92 0 -158 66t-66 158v832q0 92 66 158t158 66h64zM1408 1152v-1280h-1024v1280h128v160q0 40 28 68t68 28h576q40 0 68 -28t28 -68v-160h128zM1792 928v-832q0 -92 -66 -158t-158 -66h-64v1280h64q92 0 158 -66 t66 -158z"
      ],
      "\uf0a2": [
        1792,
        "M912 -160q0 16 -16 16q-59 0 -101.5 42.5t-42.5 101.5q0 16 -16 16t-16 -16q0 -73 51.5 -124.5t124.5 -51.5q16 0 16 16zM246 128h1300q-266 300 -266 832q0 51 -24 105t-69 103t-121.5 80.5t-169.5 31.5t-169.5 -31.5t-121.5 -80.5t-69 -103t-24 -105q0 -532 -266 -832z M1728 128q0 -52 -38 -90t-90 -38h-448q0 -106 -75 -181t-181 -75t-181 75t-75 181h-448q-52 0 -90 38t-38 90q50 42 91 88t85 119.5t74.5 158.5t50 206t19.5 260q0 152 117 282.5t307 158.5q-8 19 -8 39q0 40 28 68t68 28t68 -28t28 -68q0 -20 -8 -39q190 -28 307 -158.5 t117 -282.5q0 -139 19.5 -260t50 -206t74.5 -158.5t85 -119.5t91 -88z"
      ],
      "\uf0f4": [
        1920,
        "M1664 896q0 80 -56 136t-136 56h-64v-384h64q80 0 136 56t56 136zM0 128h1792q0 -106 -75 -181t-181 -75h-1280q-106 0 -181 75t-75 181zM1856 896q0 -159 -112.5 -271.5t-271.5 -112.5h-64v-32q0 -92 -66 -158t-158 -66h-704q-92 0 -158 66t-66 158v736q0 26 19 45 t45 19h1152q159 0 271.5 -112.5t112.5 -271.5z"
      ],
      "\uf0f5": [
        1408,
        "M640 1472v-640q0 -61 -35.5 -111t-92.5 -70v-779q0 -52 -38 -90t-90 -38h-128q-52 0 -90 38t-38 90v779q-57 20 -92.5 70t-35.5 111v640q0 26 19 45t45 19t45 -19t19 -45v-416q0 -26 19 -45t45 -19t45 19t19 45v416q0 26 19 45t45 19t45 -19t19 -45v-416q0 -26 19 -45 t45 -19t45 19t19 45v416q0 26 19 45t45 19t45 -19t19 -45zM1408 1472v-1600q0 -52 -38 -90t-90 -38h-128q-52 0 -90 38t-38 90v512h-224q-13 0 -22.5 9.5t-9.5 22.5v800q0 132 94 226t226 94h256q26 0 45 -19t19 -45z"
      ],
      "\uf0f6": [
        1536.0,
        "M1468 1156q28 -28 48 -76t20 -88v-1152q0 -40 -28 -68t-68 -28h-1344q-40 0 -68 28t-28 68v1600q0 40 28 68t68 28h896q40 0 88 -20t76 -48zM1024 1400v-376h376q-10 29 -22 41l-313 313q-12 12 -41 22zM1408 -128v1024h-416q-40 0 -68 28t-28 68v416h-768v-1536h1280z M384 736q0 14 9 23t23 9h704q14 0 23 -9t9 -23v-64q0 -14 -9 -23t-23 -9h-704q-14 0 -23 9t-9 23v64zM1120 512q14 0 23 -9t9 -23v-64q0 -14 -9 -23t-23 -9h-704q-14 0 -23 9t-9 23v64q0 14 9 23t23 9h704zM1120 256q14 0 23 -9t9 -23v-64q0 -14 -9 -23t-23 -9h-704 q-14 0 -23 9t-9 23v64q0 14 9 23t23 9h704z"
      ],
      "\uf0f7": [
        1408,
        "M384 224v-64q0 -13 -9.5 -22.5t-22.5 -9.5h-64q-13 0 -22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5 -9.5t9.5 -22.5zM384 480v-64q0 -13 -9.5 -22.5t-22.5 -9.5h-64q-13 0 -22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5 -9.5t9.5 -22.5z M640 480v-64q0 -13 -9.5 -22.5t-22.5 -9.5h-64q-13 0 -22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5 -9.5t9.5 -22.5zM384 736v-64q0 -13 -9.5 -22.5t-22.5 -9.5h-64q-13 0 -22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5 -9.5t9.5 -22.5z M1152 224v-64q0 -13 -9.5 -22.5t-22.5 -9.5h-64q-13 0 -22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5 -9.5t9.5 -22.5zM896 480v-64q0 -13 -9.5 -22.5t-22.5 -9.5h-64q-13 0 -22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5 -9.5t9.5 -22.5z M640 736v-64q0 -13 -9.5 -22.5t-22.5 -9.5h-64q-13 0 -22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5 -9.5t9.5 -22.5zM384 992v-64q0 -13 -9.5 -22.5t-22.5 -9.5h-64q-13 0 -22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5 -9.5t9.5 -22.5z M1152 480v-64q0 -13 -9.5 -22.5t-22.5 -9.5h-64q-13 0 -22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5 -9.5t9.5 -22.5zM896 736v-64q0 -13 -9.5 -22.5t-22.5 -9.5h-64q-13 0 -22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5 -9.5t9.5 -22.5z M640 992v-64q0 -13 -9.5 -22.5t-22.5 -9.5h-64q-13 0 -22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5 -9.5t9.5 -22.5zM384 1248v-64q0 -13 -9.5 -22.5t-22.5 -9.5h-64q-13 0 -22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5 -9.5t9.5 -22.5z M1152 736v-64q0 -13 -9.5 -22.5t-22.5 -9.5h-64q-13 0 -22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5 -9.5t9.5 -22.5zM896 992v-64q0 -13 -9.5 -22.5t-22.5 -9.5h-64q-13 0 -22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5 -9.5t9.5 -22.5z M640 1248v-64q0 -13 -9.5 -22.5t-22.5 -9.5h-64q-13 0 -22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5 -9.5t9.5 -22.5zM1152 992v-64q0 -13 -9.5 -22.5t-22.5 -9.5h-64q-13 0 -22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5 -9.5t9.5 -22.5z M896 1248v-64q0 -13 -9.5 -22.5t-22.5 -9.5h-64q-13 0 -22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5 -9.5t9.5 -22.5zM1152 1248v-64q0 -13 -9.5 -22.5t-22.5 -9.5h-64q-13 0 -22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5 -9.5t9.5 -22.5z M896 -128h384v1536h-1152v-1536h384v224q0 13 9.5 22.5t22.5 9.5h320q13 0 22.5 -9.5t9.5 -22.5v-224zM1408 1472v-1664q0 -26 -19 -45t-45 -19h-1280q-26 0 -45 19t-19 45v1664q0 26 19 45t45 19h1280q26 0 45 -19t19 -45z"
      ],
      "\uf0f8": [
        1408,
        "M384 224v-64q0 -13 -9.5 -22.5t-22.5 -9.5h-64q-13 0 -22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5 -9.5t9.5 -22.5zM384 480v-64q0 -13 -9.5 -22.5t-22.5 -9.5h-64q-13 0 -22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5 -9.5t9.5 -22.5z M640 480v-64q0 -13 -9.5 -22.5t-22.5 -9.5h-64q-13 0 -22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5 -9.5t9.5 -22.5zM384 736v-64q0 -13 -9.5 -22.5t-22.5 -9.5h-64q-13 0 -22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5 -9.5t9.5 -22.5z M1152 224v-64q0 -13 -9.5 -22.5t-22.5 -9.5h-64q-13 0 -22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5 -9.5t9.5 -22.5zM896 480v-64q0 -13 -9.5 -22.5t-22.5 -9.5h-64q-13 0 -22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5 -9.5t9.5 -22.5z M640 736v-64q0 -13 -9.5 -22.5t-22.5 -9.5h-64q-13 0 -22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5 -9.5t9.5 -22.5zM1152 480v-64q0 -13 -9.5 -22.5t-22.5 -9.5h-64q-13 0 -22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5 -9.5t9.5 -22.5z M896 736v-64q0 -13 -9.5 -22.5t-22.5 -9.5h-64q-13 0 -22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5 -9.5t9.5 -22.5zM1152 736v-64q0 -13 -9.5 -22.5t-22.5 -9.5h-64q-13 0 -22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5 -9.5t9.5 -22.5z M896 -128h384v1152h-256v-32q0 -40 -28 -68t-68 -28h-448q-40 0 -68 28t-28 68v32h-256v-1152h384v224q0 13 9.5 22.5t22.5 9.5h320q13 0 22.5 -9.5t9.5 -22.5v-224zM896 1056v320q0 13 -9.5 22.5t-22.5 9.5h-64q-13 0 -22.5 -9.5t-9.5 -22.5v-96h-128v96q0 13 -9.5 22.5 t-22.5 9.5h-64q-13 0 -22.5 -9.5t-9.5 -22.5v-320q0 -13 9.5 -22.5t22.5 -9.5h64q13 0 22.5 9.5t9.5 22.5v96h128v-96q0 -13 9.5 -22.5t22.5 -9.5h64q13 0 22.5 9.5t9.5 22.5zM1408 1088v-1280q0 -26 -19 -45t-45 -19h-1280q-26 0 -45 19t-19 45v1280q0 26 19 45t45 19h320 v288q0 40 28 68t68 28h448q40 0 68 -28t28 -68v-288h320q26 0 45 -19t19 -45z"
      ],
      "\uf0f9": [
        1920,
        "M640 128q0 53 -37.5 90.5t-90.5 37.5t-90.5 -37.5t-37.5 -90.5t37.5 -90.5t90.5 -37.5t90.5 37.5t37.5 90.5zM256 640h384v256h-158q-14 -2 -22 -9l-195 -195q-7 -12 -9 -22v-30zM1536 128q0 53 -37.5 90.5t-90.5 37.5t-90.5 -37.5t-37.5 -90.5t37.5 -90.5t90.5 -37.5 t90.5 37.5t37.5 90.5zM1664 800v192q0 14 -9 23t-23 9h-224v224q0 14 -9 23t-23 9h-192q-14 0 -23 -9t-9 -23v-224h-224q-14 0 -23 -9t-9 -23v-192q0 -14 9 -23t23 -9h224v-224q0 -14 9 -23t23 -9h192q14 0 23 9t9 23v224h224q14 0 23 9t9 23zM1920 1344v-1152 q0 -26 -19 -45t-45 -19h-192q0 -106 -75 -181t-181 -75t-181 75t-75 181h-384q0 -106 -75 -181t-181 -75t-181 75t-75 181h-128q-26 0 -45 19t-19 45t19 45t45 19v416q0 26 13 58t32 51l198 198q19 19 51 32t58 13h160v320q0 26 19 45t45 19h1152q26 0 45 -19t19 -45z"
      ],
      "\uf0fa": [
        1792,
        "M1280 416v192q0 14 -9 23t-23 9h-224v224q0 14 -9 23t-23 9h-192q-14 0 -23 -9t-9 -23v-224h-224q-14 0 -23 -9t-9 -23v-192q0 -14 9 -23t23 -9h224v-224q0 -14 9 -23t23 -9h192q14 0 23 9t9 23v224h224q14 0 23 9t9 23zM640 1152h512v128h-512v-128zM256 1152v-1280h-32 q-92 0 -158 66t-66 158v832q0 92 66 158t158 66h32zM1440 1152v-1280h-1088v1280h160v160q0 40 28 68t68 28h576q40 0 68 -28t28 -68v-160h160zM1792 928v-832q0 -92 -66 -158t-158 -66h-32v1280h32q92 0 158 -66t66 -158z"
      ],
      "\uf0fb": [
        1920,
        "M1920 576q-1 -32 -288 -96l-352 -32l-224 -64h-64l-293 -352h69q26 0 45 -4.5t19 -11.5t-19 -11.5t-45 -4.5h-96h-160h-64v32h64v416h-160l-192 -224h-96l-32 32v192h32v32h128v8l-192 24v128l192 24v8h-128v32h-32v192l32 32h96l192 -224h160v416h-64v32h64h160h96 q26 0 45 -4.5t19 -11.5t-19 -11.5t-45 -4.5h-69l293 -352h64l224 -64l352 -32q128 -28 200 -52t80 -34z"
      ],
      "\uf0fc": [
        1664,
        "M640 640v384h-256v-256q0 -53 37.5 -90.5t90.5 -37.5h128zM1664 192v-192h-1152v192l128 192h-128q-159 0 -271.5 112.5t-112.5 271.5v320l-64 64l32 128h480l32 128h960l32 -192l-64 -32v-800z"
      ],
      "\uf0fd": [
        1536.0,
        "M1280 192v896q0 26 -19 45t-45 19h-128q-26 0 -45 -19t-19 -45v-320h-512v320q0 26 -19 45t-45 19h-128q-26 0 -45 -19t-19 -45v-896q0 -26 19 -45t45 -19h128q26 0 45 19t19 45v320h512v-320q0 -26 19 -45t45 -19h128q26 0 45 19t19 45zM1536 1120v-960 q0 -119 -84.5 -203.5t-203.5 -84.5h-960q-119 0 -203.5 84.5t-84.5 203.5v960q0 119 84.5 203.5t203.5 84.5h960q119 0 203.5 -84.5t84.5 -203.5z"
      ],
      "\uf0fe": [
        1536.0,
        "M1280 576v128q0 26 -19 45t-45 19h-320v320q0 26 -19 45t-45 19h-128q-26 0 -45 -19t-19 -45v-320h-320q-26 0 -45 -19t-19 -45v-128q0 -26 19 -45t45 -19h320v-320q0 -26 19 -45t45 -19h128q26 0 45 19t19 45v320h320q26 0 45 19t19 45zM1536 1120v-960 q0 -119 -84.5 -203.5t-203.5 -84.5h-960q-119 0 -203.5 84.5t-84.5 203.5v960q0 119 84.5 203.5t203.5 84.5h960q119 0 203.5 -84.5t84.5 -203.5z"
      ],
      "\uf100": [
        1024,
        "M627 160q0 -13 -10 -23l-50 -50q-10 -10 -23 -10t-23 10l-466 466q-10 10 -10 23t10 23l466 466q10 10 23 10t23 -10l50 -50q10 -10 10 -23t-10 -23l-393 -393l393 -393q10 -10 10 -23zM1011 160q0 -13 -10 -23l-50 -50q-10 -10 -23 -10t-23 10l-466 466q-10 10 -10 23 t10 23l466 466q10 10 23 10t23 -10l50 -50q10 -10 10 -23t-10 -23l-393 -393l393 -393q10 -10 10 -23z"
      ],
      "\uf101": [
        1024,
        "M595 576q0 -13 -10 -23l-466 -466q-10 -10 -23 -10t-23 10l-50 50q-10 10 -10 23t10 23l393 393l-393 393q-10 10 -10 23t10 23l50 50q10 10 23 10t23 -10l466 -466q10 -10 10 -23zM979 576q0 -13 -10 -23l-466 -466q-10 -10 -23 -10t-23 10l-50 50q-10 10 -10 23t10 23 l393 393l-393 393q-10 10 -10 23t10 23l50 50q10 10 23 10t23 -10l466 -466q10 -10 10 -23z"
      ],
      "\uf102": [
        1152,
        "M1075 224q0 -13 -10 -23l-50 -50q-10 -10 -23 -10t-23 10l-393 393l-393 -393q-10 -10 -23 -10t-23 10l-50 50q-10 10 -10 23t10 23l466 466q10 10 23 10t23 -10l466 -466q10 -10 10 -23zM1075 608q0 -13 -10 -23l-50 -50q-10 -10 -23 -10t-23 10l-393 393l-393 -393 q-10 -10 -23 -10t-23 10l-50 50q-10 10 -10 23t10 23l466 466q10 10 23 10t23 -10l466 -466q10 -10 10 -23z"
      ],
      "\uf103": [
        1152,
        "M1075 672q0 -13 -10 -23l-466 -466q-10 -10 -23 -10t-23 10l-466 466q-10 10 -10 23t10 23l50 50q10 10 23 10t23 -10l393 -393l393 393q10 10 23 10t23 -10l50 -50q10 -10 10 -23zM1075 1056q0 -13 -10 -23l-466 -466q-10 -10 -23 -10t-23 10l-466 466q-10 10 -10 23 t10 23l50 50q10 10 23 10t23 -10l393 -393l393 393q10 10 23 10t23 -10l50 -50q10 -10 10 -23z"
      ],
      "\uf104": [
        640,
        "M627 992q0 -13 -10 -23l-393 -393l393 -393q10 -10 10 -23t-10 -23l-50 -50q-10 -10 -23 -10t-23 10l-466 466q-10 10 -10 23t10 23l466 466q10 10 23 10t23 -10l50 -50q10 -10 10 -23z"
      ],
      "\uf105": [
        640,
        "M595 576q0 -13 -10 -23l-466 -466q-10 -10 -23 -10t-23 10l-50 50q-10 10 -10 23t10 23l393 393l-393 393q-10 10 -10 23t10 23l50 50q10 10 23 10t23 -10l466 -466q10 -10 10 -23z"
      ],
      "\uf106": [
        1152,
        "M1075 352q0 -13 -10 -23l-50 -50q-10 -10 -23 -10t-23 10l-393 393l-393 -393q-10 -10 -23 -10t-23 10l-50 50q-10 10 -10 23t10 23l466 466q10 10 23 10t23 -10l466 -466q10 -10 10 -23z"
      ],
      "\uf107": [
        1152,
        "M1075 800q0 -13 -10 -23l-466 -466q-10 -10 -23 -10t-23 10l-466 466q-10 10 -10 23t10 23l50 50q10 10 23 10t23 -10l393 -393l393 393q10 10 23 10t23 -10l50 -50q10 -10 10 -23z"
      ],
      "\uf108": [
        1920,
        "M1792 544v832q0 13 -9.5 22.5t-22.5 9.5h-1600q-13 0 -22.5 -9.5t-9.5 -22.5v-832q0 -13 9.5 -22.5t22.5 -9.5h1600q13 0 22.5 9.5t9.5 22.5zM1920 1376v-1088q0 -66 -47 -113t-113 -47h-544q0 -37 16 -77.5t32 -71t16 -43.5q0 -26 -19 -45t-45 -19h-512q-26 0 -45 19 t-19 45q0 14 16 44t32 70t16 78h-544q-66 0 -113 47t-47 113v1088q0 66 47 113t113 47h1600q66 0 113 -47t47 -113z"
      ],
      "\uf109": [
        1920,
        "M416 256q-66 0 -113 47t-47 113v704q0 66 47 113t113 47h1088q66 0 113 -47t47 -113v-704q0 -66 -47 -113t-113 -47h-1088zM384 1120v-704q0 -13 9.5 -22.5t22.5 -9.5h1088q13 0 22.5 9.5t9.5 22.5v704q0 13 -9.5 22.5t-22.5 9.5h-1088q-13 0 -22.5 -9.5t-9.5 -22.5z M1760 192h160v-96q0 -40 -47 -68t-113 -28h-1600q-66 0 -113 28t-47 68v96h160h1600zM1040 96q16 0 16 16t-16 16h-160q-16 0 -16 -16t16 -16h160z"
      ],
      "\uf10a": [
        1152,
        "M640 128q0 26 -19 45t-45 19t-45 -19t-19 -45t19 -45t45 -19t45 19t19 45zM1024 288v960q0 13 -9.5 22.5t-22.5 9.5h-832q-13 0 -22.5 -9.5t-9.5 -22.5v-960q0 -13 9.5 -22.5t22.5 -9.5h832q13 0 22.5 9.5t9.5 22.5zM1152 1248v-1088q0 -66 -47 -113t-113 -47h-832 q-66 0 -113 47t-47 113v1088q0 66 47 113t113 47h832q66 0 113 -47t47 -113z"
      ],
      "\uf10b": [
        768,
        "M464 128q0 33 -23.5 56.5t-56.5 23.5t-56.5 -23.5t-23.5 -56.5t23.5 -56.5t56.5 -23.5t56.5 23.5t23.5 56.5zM672 288v704q0 13 -9.5 22.5t-22.5 9.5h-512q-13 0 -22.5 -9.5t-9.5 -22.5v-704q0 -13 9.5 -22.5t22.5 -9.5h512q13 0 22.5 9.5t9.5 22.5zM480 1136 q0 16 -16 16h-160q-16 0 -16 -16t16 -16h160q16 0 16 16zM768 1152v-1024q0 -52 -38 -90t-90 -38h-512q-52 0 -90 38t-38 90v1024q0 52 38 90t90 38h512q52 0 90 -38t38 -90z"
      ],
      "\uf10c": [
        1536.0,
        "M768 1184q-148 0 -273 -73t-198 -198t-73 -273t73 -273t198 -198t273 -73t273 73t198 198t73 273t-73 273t-198 198t-273 73zM1536 640q0 -209 -103 -385.5t-279.5 -279.5t-385.5 -103t-385.5 103t-279.5 279.5t-103 385.5t103 385.5t279.5 279.5t385.5 103t385.5 -103 t279.5 -279.5t103 -385.5z"
      ],
      "\uf10d": [
        1664,
        "M768 576v-384q0 -80 -56 -136t-136 -56h-384q-80 0 -136 56t-56 136v704q0 104 40.5 198.5t109.5 163.5t163.5 109.5t198.5 40.5h64q26 0 45 -19t19 -45v-128q0 -26 -19 -45t-45 -19h-64q-106 0 -181 -75t-75 -181v-32q0 -40 28 -68t68 -28h224q80 0 136 -56t56 -136z M1664 576v-384q0 -80 -56 -136t-136 -56h-384q-80 0 -136 56t-56 136v704q0 104 40.5 198.5t109.5 163.5t163.5 109.5t198.5 40.5h64q26 0 45 -19t19 -45v-128q0 -26 -19 -45t-45 -19h-64q-106 0 -181 -75t-75 -181v-32q0 -40 28 -68t68 -28h224q80 0 136 -56t56 -136z"
      ],
      "\uf10e": [
        1664,
        "M768 1216v-704q0 -104 -40.5 -198.5t-109.5 -163.5t-163.5 -109.5t-198.5 -40.5h-64q-26 0 -45 19t-19 45v128q0 26 19 45t45 19h64q106 0 181 75t75 181v32q0 40 -28 68t-68 28h-224q-80 0 -136 56t-56 136v384q0 80 56 136t136 56h384q80 0 136 -56t56 -136zM1664 1216 v-704q0 -104 -40.5 -198.5t-109.5 -163.5t-163.5 -109.5t-198.5 -40.5h-64q-26 0 -45 19t-19 45v128q0 26 19 45t45 19h64q106 0 181 75t75 181v32q0 40 -28 68t-68 28h-224q-80 0 -136 56t-56 136v384q0 80 56 136t136 56h384q80 0 136 -56t56 -136z"
      ],
      "\uf110": [
        1792,
        "M526 142q0 -53 -37.5 -90.5t-90.5 -37.5q-52 0 -90 38t-38 90q0 53 37.5 90.5t90.5 37.5t90.5 -37.5t37.5 -90.5zM1024 -64q0 -53 -37.5 -90.5t-90.5 -37.5t-90.5 37.5t-37.5 90.5t37.5 90.5t90.5 37.5t90.5 -37.5t37.5 -90.5zM320 640q0 -53 -37.5 -90.5t-90.5 -37.5 t-90.5 37.5t-37.5 90.5t37.5 90.5t90.5 37.5t90.5 -37.5t37.5 -90.5zM1522 142q0 -52 -38 -90t-90 -38q-53 0 -90.5 37.5t-37.5 90.5t37.5 90.5t90.5 37.5t90.5 -37.5t37.5 -90.5zM558 1138q0 -66 -47 -113t-113 -47t-113 47t-47 113t47 113t113 47t113 -47t47 -113z M1728 640q0 -53 -37.5 -90.5t-90.5 -37.5t-90.5 37.5t-37.5 90.5t37.5 90.5t90.5 37.5t90.5 -37.5t37.5 -90.5zM1088 1344q0 -80 -56 -136t-136 -56t-136 56t-56 136t56 136t136 56t136 -56t56 -136zM1618 1138q0 -93 -66 -158.5t-158 -65.5q-93 0 -158.5 65.5t-65.5 158.5 q0 92 65.5 158t158.5 66q92 0 158 -66t66 -158z"
      ],
      "\uf111": [
        1536.0,
        "M1536 640q0 -209 -103 -385.5t-279.5 -279.5t-385.5 -103t-385.5 103t-279.5 279.5t-103 385.5t103 385.5t279.5 279.5t385.5 103t385.5 -103t279.5 -279.5t103 -385.5z"
      ],
      "\uf112": [
        1792,
        "M1792 416q0 -166 -127 -451q-3 -7 -10.5 -24t-13.5 -30t-13 -22q-12 -17 -28 -17q-15 0 -23.5 10t-8.5 25q0 9 2.5 26.5t2.5 23.5q5 68 5 123q0 101 -17.5 181t-48.5 138.5t-80 101t-105.5 69.5t-133 42.5t-154 21.5t-175.5 6h-224v-256q0 -26 -19 -45t-45 -19t-45 19 l-512 512q-19 19 -19 45t19 45l512 512q19 19 45 19t45 -19t19 -45v-256h224q713 0 875 -403q53 -134 53 -333z"
      ],
      "\uf113": [
        1664,
        "M640 320q0 -40 -12.5 -82t-43 -76t-72.5 -34t-72.5 34t-43 76t-12.5 82t12.5 82t43 76t72.5 34t72.5 -34t43 -76t12.5 -82zM1280 320q0 -40 -12.5 -82t-43 -76t-72.5 -34t-72.5 34t-43 76t-12.5 82t12.5 82t43 76t72.5 34t72.5 -34t43 -76t12.5 -82zM1440 320 q0 120 -69 204t-187 84q-41 0 -195 -21q-71 -11 -157 -11t-157 11q-152 21 -195 21q-118 0 -187 -84t-69 -204q0 -88 32 -153.5t81 -103t122 -60t140 -29.5t149 -7h168q82 0 149 7t140 29.5t122 60t81 103t32 153.5zM1664 496q0 -207 -61 -331q-38 -77 -105.5 -133t-141 -86 t-170 -47.5t-171.5 -22t-167 -4.5q-78 0 -142 3t-147.5 12.5t-152.5 30t-137 51.5t-121 81t-86 115q-62 123 -62 331q0 237 136 396q-27 82 -27 170q0 116 51 218q108 0 190 -39.5t189 -123.5q147 35 309 35q148 0 280 -32q105 82 187 121t189 39q51 -102 51 -218 q0 -87 -27 -168q136 -160 136 -398z"
      ],
      "\uf114": [
        1664,
        "M1536 224v704q0 40 -28 68t-68 28h-704q-40 0 -68 28t-28 68v64q0 40 -28 68t-68 28h-320q-40 0 -68 -28t-28 -68v-960q0 -40 28 -68t68 -28h1216q40 0 68 28t28 68zM1664 928v-704q0 -92 -66 -158t-158 -66h-1216q-92 0 -158 66t-66 158v960q0 92 66 158t158 66h320 q92 0 158 -66t66 -158v-32h672q92 0 158 -66t66 -158z"
      ],
      "\uf115": [
        1920,
        "M1781 605q0 35 -53 35h-1088q-40 0 -85.5 -21.5t-71.5 -52.5l-294 -363q-18 -24 -18 -40q0 -35 53 -35h1088q40 0 86 22t71 53l294 363q18 22 18 39zM640 768h768v160q0 40 -28 68t-68 28h-576q-40 0 -68 28t-28 68v64q0 40 -28 68t-68 28h-320q-40 0 -68 -28t-28 -68 v-853l256 315q44 53 116 87.5t140 34.5zM1909 605q0 -62 -46 -120l-295 -363q-43 -53 -116 -87.5t-140 -34.5h-1088q-92 0 -158 66t-66 158v960q0 92 66 158t158 66h320q92 0 158 -66t66 -158v-32h544q92 0 158 -66t66 -158v-160h192q54 0 99 -24.5t67 -70.5q15 -32 15 -68z "
      ],
      "\uf118": [
        1536.0,
        "M1134 461q-37 -121 -138 -195t-228 -74t-228 74t-138 195q-8 25 4 48.5t38 31.5q25 8 48.5 -4t31.5 -38q25 -80 92.5 -129.5t151.5 -49.5t151.5 49.5t92.5 129.5q8 26 32 38t49 4t37 -31.5t4 -48.5zM640 896q0 -53 -37.5 -90.5t-90.5 -37.5t-90.5 37.5t-37.5 90.5 t37.5 90.5t90.5 37.5t90.5 -37.5t37.5 -90.5zM1152 896q0 -53 -37.5 -90.5t-90.5 -37.5t-90.5 37.5t-37.5 90.5t37.5 90.5t90.5 37.5t90.5 -37.5t37.5 -90.5zM1408 640q0 130 -51 248.5t-136.5 204t-204 136.5t-248.5 51t-248.5 -51t-204 -136.5t-136.5 -204t-51 -248.5 t51 -248.5t136.5 -204t204 -136.5t248.5 -51t248.5 51t204 136.5t136.5 204t51 248.5zM1536 640q0 -209 -103 -385.5t-279.5 -279.5t-385.5 -103t-385.5 103t-279.5 279.5t-103 385.5t103 385.5t279.5 279.5t385.5 103t385.5 -103t279.5 -279.5t103 -385.5z"
      ],
      "\uf119": [
        1536.0,
        "M1134 307q8 -25 -4 -48.5t-37 -31.5t-49 4t-32 38q-25 80 -92.5 129.5t-151.5 49.5t-151.5 -49.5t-92.5 -129.5q-8 -26 -31.5 -38t-48.5 -4q-26 8 -38 31.5t-4 48.5q37 121 138 195t228 74t228 -74t138 -195zM640 896q0 -53 -37.5 -90.5t-90.5 -37.5t-90.5 37.5 t-37.5 90.5t37.5 90.5t90.5 37.5t90.5 -37.5t37.5 -90.5zM1152 896q0 -53 -37.5 -90.5t-90.5 -37.5t-90.5 37.5t-37.5 90.5t37.5 90.5t90.5 37.5t90.5 -37.5t37.5 -90.5zM1408 640q0 130 -51 248.5t-136.5 204t-204 136.5t-248.5 51t-248.5 -51t-204 -136.5t-136.5 -204 t-51 -248.5t51 -248.5t136.5 -204t204 -136.5t248.5 -51t248.5 51t204 136.5t136.5 204t51 248.5zM1536 640q0 -209 -103 -385.5t-279.5 -279.5t-385.5 -103t-385.5 103t-279.5 279.5t-103 385.5t103 385.5t279.5 279.5t385.5 103t385.5 -103t279.5 -279.5t103 -385.5z"
      ],
      "\uf11a": [
        1536.0,
        "M1152 448q0 -26 -19 -45t-45 -19h-640q-26 0 -45 19t-19 45t19 45t45 19h640q26 0 45 -19t19 -45zM640 896q0 -53 -37.5 -90.5t-90.5 -37.5t-90.5 37.5t-37.5 90.5t37.5 90.5t90.5 37.5t90.5 -37.5t37.5 -90.5zM1152 896q0 -53 -37.5 -90.5t-90.5 -37.5t-90.5 37.5 t-37.5 90.5t37.5 90.5t90.5 37.5t90.5 -37.5t37.5 -90.5zM1408 640q0 130 -51 248.5t-136.5 204t-204 136.5t-248.5 51t-248.5 -51t-204 -136.5t-136.5 -204t-51 -248.5t51 -248.5t136.5 -204t204 -136.5t248.5 -51t248.5 51t204 136.5t136.5 204t51 248.5zM1536 640 q0 -209 -103 -385.5t-279.5 -279.5t-385.5 -103t-385.5 103t-279.5 279.5t-103 385.5t103 385.5t279.5 279.5t385.5 103t385.5 -103t279.5 -279.5t103 -385.5z"
      ],
      "\uf11b": [
        1920,
        "M832 448v128q0 14 -9 23t-23 9h-192v192q0 14 -9 23t-23 9h-128q-14 0 -23 -9t-9 -23v-192h-192q-14 0 -23 -9t-9 -23v-128q0 -14 9 -23t23 -9h192v-192q0 -14 9 -23t23 -9h128q14 0 23 9t9 23v192h192q14 0 23 9t9 23zM1408 384q0 53 -37.5 90.5t-90.5 37.5t-90.5 -37.5 t-37.5 -90.5t37.5 -90.5t90.5 -37.5t90.5 37.5t37.5 90.5zM1664 640q0 53 -37.5 90.5t-90.5 37.5t-90.5 -37.5t-37.5 -90.5t37.5 -90.5t90.5 -37.5t90.5 37.5t37.5 90.5zM1920 512q0 -212 -150 -362t-362 -150q-192 0 -338 128h-220q-146 -128 -338 -128q-212 0 -362 150 t-150 362t150 362t362 150h896q212 0 362 -150t150 -362z"
      ],
      "\uf11c": [
        1920,
        "M384 368v-96q0 -16 -16 -16h-96q-16 0 -16 16v96q0 16 16 16h96q16 0 16 -16zM512 624v-96q0 -16 -16 -16h-224q-16 0 -16 16v96q0 16 16 16h224q16 0 16 -16zM384 880v-96q0 -16 -16 -16h-96q-16 0 -16 16v96q0 16 16 16h96q16 0 16 -16zM1408 368v-96q0 -16 -16 -16 h-864q-16 0 -16 16v96q0 16 16 16h864q16 0 16 -16zM768 624v-96q0 -16 -16 -16h-96q-16 0 -16 16v96q0 16 16 16h96q16 0 16 -16zM640 880v-96q0 -16 -16 -16h-96q-16 0 -16 16v96q0 16 16 16h96q16 0 16 -16zM1024 624v-96q0 -16 -16 -16h-96q-16 0 -16 16v96q0 16 16 16 h96q16 0 16 -16zM896 880v-96q0 -16 -16 -16h-96q-16 0 -16 16v96q0 16 16 16h96q16 0 16 -16zM1280 624v-96q0 -16 -16 -16h-96q-16 0 -16 16v96q0 16 16 16h96q16 0 16 -16zM1664 368v-96q0 -16 -16 -16h-96q-16 0 -16 16v96q0 16 16 16h96q16 0 16 -16zM1152 880v-96 q0 -16 -16 -16h-96q-16 0 -16 16v96q0 16 16 16h96q16 0 16 -16zM1408 880v-96q0 -16 -16 -16h-96q-16 0 -16 16v96q0 16 16 16h96q16 0 16 -16zM1664 880v-352q0 -16 -16 -16h-224q-16 0 -16 16v96q0 16 16 16h112v240q0 16 16 16h96q16 0 16 -16zM1792 128v896h-1664v-896 h1664zM1920 1024v-896q0 -53 -37.5 -90.5t-90.5 -37.5h-1664q-53 0 -90.5 37.5t-37.5 90.5v896q0 53 37.5 90.5t90.5 37.5h1664q53 0 90.5 -37.5t37.5 -90.5z"
      ],
      "\uf11d": [
        1792,
        "M1664 491v616q-169 -91 -306 -91q-82 0 -145 32q-100 49 -184 76.5t-178 27.5q-173 0 -403 -127v-599q245 113 433 113q55 0 103.5 -7.5t98 -26t77 -31t82.5 -39.5l28 -14q44 -22 101 -22q120 0 293 92zM320 1280q0 -35 -17.5 -64t-46.5 -46v-1266q0 -14 -9 -23t-23 -9 h-64q-14 0 -23 9t-9 23v1266q-29 17 -46.5 46t-17.5 64q0 53 37.5 90.5t90.5 37.5t90.5 -37.5t37.5 -90.5zM1792 1216v-763q0 -39 -35 -57q-10 -5 -17 -9q-218 -116 -369 -116q-88 0 -158 35l-28 14q-64 33 -99 48t-91 29t-114 14q-102 0 -235.5 -44t-228.5 -102 q-15 -9 -33 -9q-16 0 -32 8q-32 19 -32 56v742q0 35 31 55q35 21 78.5 42.5t114 52t152.5 49.5t155 19q112 0 209 -31t209 -86q38 -19 89 -19q122 0 310 112q22 12 31 17q31 16 62 -2q31 -20 31 -55z"
      ],
      "\uf11e": [
        1792,
        "M832 536v192q-181 -16 -384 -117v-185q205 96 384 110zM832 954v197q-172 -8 -384 -126v-189q215 111 384 118zM1664 491v184q-235 -116 -384 -71v224q-20 6 -39 15q-5 3 -33 17t-34.5 17t-31.5 15t-34.5 15.5t-32.5 13t-36 12.5t-35 8.5t-39.5 7.5t-39.5 4t-44 2 q-23 0 -49 -3v-222h19q102 0 192.5 -29t197.5 -82q19 -9 39 -15v-188q42 -17 91 -17q120 0 293 92zM1664 918v189q-169 -91 -306 -91q-45 0 -78 8v-196q148 -42 384 90zM320 1280q0 -35 -17.5 -64t-46.5 -46v-1266q0 -14 -9 -23t-23 -9h-64q-14 0 -23 9t-9 23v1266 q-29 17 -46.5 46t-17.5 64q0 53 37.5 90.5t90.5 37.5t90.5 -37.5t37.5 -90.5zM1792 1216v-763q0 -39 -35 -57q-10 -5 -17 -9q-218 -116 -369 -116q-88 0 -158 35l-28 14q-64 33 -99 48t-91 29t-114 14q-102 0 -235.5 -44t-228.5 -102q-15 -9 -33 -9q-16 0 -32 8 q-32 19 -32 56v742q0 35 31 55q35 21 78.5 42.5t114 52t152.5 49.5t155 19q112 0 209 -31t209 -86q38 -19 89 -19q122 0 310 112q22 12 31 17q31 16 62 -2q31 -20 31 -55z"
      ],
      "\uf120": [
        1664,
        "M585 553l-466 -466q-10 -10 -23 -10t-23 10l-50 50q-10 10 -10 23t10 23l393 393l-393 393q-10 10 -10 23t10 23l50 50q10 10 23 10t23 -10l466 -466q10 -10 10 -23t-10 -23zM1664 96v-64q0 -14 -9 -23t-23 -9h-960q-14 0 -23 9t-9 23v64q0 14 9 23t23 9h960q14 0 23 -9 t9 -23z"
      ],
      "\uf121": [
        1920,
        "M617 137l-50 -50q-10 -10 -23 -10t-23 10l-466 466q-10 10 -10 23t10 23l466 466q10 10 23 10t23 -10l50 -50q10 -10 10 -23t-10 -23l-393 -393l393 -393q10 -10 10 -23t-10 -23zM1208 1204l-373 -1291q-4 -13 -15.5 -19.5t-23.5 -2.5l-62 17q-13 4 -19.5 15.5t-2.5 24.5 l373 1291q4 13 15.5 19.5t23.5 2.5l62 -17q13 -4 19.5 -15.5t2.5 -24.5zM1865 553l-466 -466q-10 -10 -23 -10t-23 10l-50 50q-10 10 -10 23t10 23l393 393l-393 393q-10 10 -10 23t10 23l50 50q10 10 23 10t23 -10l466 -466q10 -10 10 -23t-10 -23z"
      ],
      "\uf122": [
        1792,
        "M640 454v-70q0 -42 -39 -59q-13 -5 -25 -5q-27 0 -45 19l-512 512q-19 19 -19 45t19 45l512 512q29 31 70 14q39 -17 39 -59v-69l-397 -398q-19 -19 -19 -45t19 -45zM1792 416q0 -58 -17 -133.5t-38.5 -138t-48 -125t-40.5 -90.5l-20 -40q-8 -17 -28 -17q-6 0 -9 1 q-25 8 -23 34q43 400 -106 565q-64 71 -170.5 110.5t-267.5 52.5v-251q0 -42 -39 -59q-13 -5 -25 -5q-27 0 -45 19l-512 512q-19 19 -19 45t19 45l512 512q29 31 70 14q39 -17 39 -59v-262q411 -28 599 -221q169 -173 169 -509z"
      ],
      "\uf123": [
        1664,
        "M1186 579l257 250l-356 52l-66 10l-30 60l-159 322v-963l59 -31l318 -168l-60 355l-12 66zM1638 841l-363 -354l86 -500q5 -33 -6 -51.5t-34 -18.5q-17 0 -40 12l-449 236l-449 -236q-23 -12 -40 -12q-23 0 -34 18.5t-6 51.5l86 500l-364 354q-32 32 -23 59.5t54 34.5 l502 73l225 455q20 41 49 41q28 0 49 -41l225 -455l502 -73q45 -7 54 -34.5t-24 -59.5z"
      ],
      "\uf124": [
        1408,
        "M1401 1187l-640 -1280q-17 -35 -57 -35q-5 0 -15 2q-22 5 -35.5 22.5t-13.5 39.5v576h-576q-22 0 -39.5 13.5t-22.5 35.5t4 42t29 30l1280 640q13 7 29 7q27 0 45 -19q15 -14 18.5 -34.5t-6.5 -39.5z"
      ],
      "\uf125": [
        1664,
        "M557 256h595v595zM512 301l595 595h-595v-595zM1664 224v-192q0 -14 -9 -23t-23 -9h-224v-224q0 -14 -9 -23t-23 -9h-192q-14 0 -23 9t-9 23v224h-864q-14 0 -23 9t-9 23v864h-224q-14 0 -23 9t-9 23v192q0 14 9 23t23 9h224v224q0 14 9 23t23 9h192q14 0 23 -9t9 -23 v-224h851l246 247q10 9 23 9t23 -9q9 -10 9 -23t-9 -23l-247 -246v-851h224q14 0 23 -9t9 -23z"
      ],
      "\uf126": [
        1024,
        "M288 64q0 40 -28 68t-68 28t-68 -28t-28 -68t28 -68t68 -28t68 28t28 68zM288 1216q0 40 -28 68t-68 28t-68 -28t-28 -68t28 -68t68 -28t68 28t28 68zM928 1088q0 40 -28 68t-68 28t-68 -28t-28 -68t28 -68t68 -28t68 28t28 68zM1024 1088q0 -52 -26 -96.5t-70 -69.5 q-2 -287 -226 -414q-67 -38 -203 -81q-128 -40 -169.5 -71t-41.5 -100v-26q44 -25 70 -69.5t26 -96.5q0 -80 -56 -136t-136 -56t-136 56t-56 136q0 52 26 96.5t70 69.5v820q-44 25 -70 69.5t-26 96.5q0 80 56 136t136 56t136 -56t56 -136q0 -52 -26 -96.5t-70 -69.5v-497 q54 26 154 57q55 17 87.5 29.5t70.5 31t59 39.5t40.5 51t28 69.5t8.5 91.5q-44 25 -70 69.5t-26 96.5q0 80 56 136t136 56t136 -56t56 -136z"
      ],
      "\uf127": [
        1664,
        "M439 265l-256 -256q-11 -9 -23 -9t-23 9q-9 10 -9 23t9 23l256 256q10 9 23 9t23 -9q9 -10 9 -23t-9 -23zM608 224v-320q0 -14 -9 -23t-23 -9t-23 9t-9 23v320q0 14 9 23t23 9t23 -9t9 -23zM384 448q0 -14 -9 -23t-23 -9h-320q-14 0 -23 9t-9 23t9 23t23 9h320 q14 0 23 -9t9 -23zM1648 320q0 -120 -85 -203l-147 -146q-83 -83 -203 -83q-121 0 -204 85l-334 335q-21 21 -42 56l239 18l273 -274q27 -27 68 -27.5t68 26.5l147 146q28 28 28 67q0 40 -28 68l-274 275l18 239q35 -21 56 -42l336 -336q84 -86 84 -204zM1031 1044l-239 -18 l-273 274q-28 28 -68 28q-39 0 -68 -27l-147 -146q-28 -28 -28 -67q0 -40 28 -68l274 -274l-18 -240q-35 21 -56 42l-336 336q-84 86 -84 204q0 120 85 203l147 146q83 83 203 83q121 0 204 -85l334 -335q21 -21 42 -56zM1664 960q0 -14 -9 -23t-23 -9h-320q-14 0 -23 9 t-9 23t9 23t23 9h320q14 0 23 -9t9 -23zM1120 1504v-320q0 -14 -9 -23t-23 -9t-23 9t-9 23v320q0 14 9 23t23 9t23 -9t9 -23zM1527 1353l-256 -256q-11 -9 -23 -9t-23 9q-9 10 -9 23t9 23l256 256q10 9 23 9t23 -9q9 -10 9 -23t-9 -23z"
      ],
      "\uf128": [
        1024,
        "M704 280v-240q0 -16 -12 -28t-28 -12h-240q-16 0 -28 12t-12 28v240q0 16 12 28t28 12h240q16 0 28 -12t12 -28zM1020 880q0 -54 -15.5 -101t-35 -76.5t-55 -59.5t-57.5 -43.5t-61 -35.5q-41 -23 -68.5 -65t-27.5 -67q0 -17 -12 -32.5t-28 -15.5h-240q-15 0 -25.5 18.5 t-10.5 37.5v45q0 83 65 156.5t143 108.5q59 27 84 56t25 76q0 42 -46.5 74t-107.5 32q-65 0 -108 -29q-35 -25 -107 -115q-13 -16 -31 -16q-12 0 -25 8l-164 125q-13 10 -15.5 25t5.5 28q160 266 464 266q80 0 161 -31t146 -83t106 -127.5t41 -158.5z"
      ],
      "\uf129": [
        640,
        "M640 192v-128q0 -26 -19 -45t-45 -19h-512q-26 0 -45 19t-19 45v128q0 26 19 45t45 19h64v384h-64q-26 0 -45 19t-19 45v128q0 26 19 45t45 19h384q26 0 45 -19t19 -45v-576h64q26 0 45 -19t19 -45zM512 1344v-192q0 -26 -19 -45t-45 -19h-256q-26 0 -45 19t-19 45v192 q0 26 19 45t45 19h256q26 0 45 -19t19 -45z"
      ],
      "\uf12a": [
        640,
        "M512 288v-224q0 -26 -19 -45t-45 -19h-256q-26 0 -45 19t-19 45v224q0 26 19 45t45 19h256q26 0 45 -19t19 -45zM542 1344l-28 -768q-1 -26 -20.5 -45t-45.5 -19h-256q-26 0 -45.5 19t-20.5 45l-28 768q-1 26 17.5 45t44.5 19h320q26 0 44.5 -19t17.5 -45z"
      ],
      "\uf12b": [
        1536.0,
        "M897 167v-167h-248l-159 252l-24 42q-8 9 -11 21h-3q-1 -3 -2.5 -6.5t-3.5 -8t-3 -6.5q-10 -20 -25 -44l-155 -250h-258v167h128l197 291l-185 272h-137v168h276l139 -228q2 -4 23 -42q8 -9 11 -21h3q3 9 11 21l25 42l140 228h257v-168h-125l-184 -267l204 -296h109z M1534 846v-206h-514l-3 27q-4 28 -4 46q0 64 26 117t65 86.5t84 65t84 54.5t65 54t26 64q0 38 -29.5 62.5t-70.5 24.5q-51 0 -97 -39q-14 -11 -36 -38l-105 92q26 37 63 66q83 65 188 65q110 0 178 -59.5t68 -158.5q0 -56 -24.5 -103t-62 -76.5t-81.5 -58.5t-82 -50.5 t-65.5 -51.5t-30.5 -63h232v80h126z"
      ],
      "\uf12c": [
        1536.0,
        "M897 167v-167h-248l-159 252l-24 42q-8 9 -11 21h-3q-1 -3 -2.5 -6.5t-3.5 -8t-3 -6.5q-10 -20 -25 -44l-155 -250h-258v167h128l197 291l-185 272h-137v168h276l139 -228q2 -4 23 -42q8 -9 11 -21h3q3 9 11 21l25 42l140 228h257v-168h-125l-184 -267l204 -296h109z M1536 -50v-206h-514l-4 27q-3 45 -3 46q0 64 26 117t65 86.5t84 65t84 54.5t65 54t26 64q0 38 -29.5 62.5t-70.5 24.5q-51 0 -97 -39q-14 -11 -36 -38l-105 92q26 37 63 66q80 65 188 65q110 0 178 -59.5t68 -158.5q0 -66 -34.5 -118.5t-84 -86t-99.5 -62.5t-87 -63t-41 -73 h232v80h126z"
      ],
      "\uf12d": [
        1920,
        "M896 128l336 384h-768l-336 -384h768zM1909 1205q15 -34 9.5 -71.5t-30.5 -65.5l-896 -1024q-38 -44 -96 -44h-768q-38 0 -69.5 20.5t-47.5 54.5q-15 34 -9.5 71.5t30.5 65.5l896 1024q38 44 96 44h768q38 0 69.5 -20.5t47.5 -54.5z"
      ],
      "\uf12e": [
        1664,
        "M1664 438q0 -81 -44.5 -135t-123.5 -54q-41 0 -77.5 17.5t-59 38t-56.5 38t-71 17.5q-110 0 -110 -124q0 -39 16 -115t15 -115v-5q-22 0 -33 -1q-34 -3 -97.5 -11.5t-115.5 -13.5t-98 -5q-61 0 -103 26.5t-42 83.5q0 37 17.5 71t38 56.5t38 59t17.5 77.5q0 79 -54 123.5 t-135 44.5q-84 0 -143 -45.5t-59 -127.5q0 -43 15 -83t33.5 -64.5t33.5 -53t15 -50.5q0 -45 -46 -89q-37 -35 -117 -35q-95 0 -245 24q-9 2 -27.5 4t-27.5 4l-13 2q-1 0 -3 1q-2 0 -2 1v1024q2 -1 17.5 -3.5t34 -5t21.5 -3.5q150 -24 245 -24q80 0 117 35q46 44 46 89 q0 22 -15 50.5t-33.5 53t-33.5 64.5t-15 83q0 82 59 127.5t144 45.5q80 0 134 -44.5t54 -123.5q0 -41 -17.5 -77.5t-38 -59t-38 -56.5t-17.5 -71q0 -57 42 -83.5t103 -26.5q64 0 180 15t163 17v-2q-1 -2 -3.5 -17.5t-5 -34t-3.5 -21.5q-24 -150 -24 -245q0 -80 35 -117 q44 -46 89 -46q22 0 50.5 15t53 33.5t64.5 33.5t83 15q82 0 127.5 -59t45.5 -143z"
      ],
      "\uf130": [
        1152,
        "M1152 832v-128q0 -221 -147.5 -384.5t-364.5 -187.5v-132h256q26 0 45 -19t19 -45t-19 -45t-45 -19h-640q-26 0 -45 19t-19 45t19 45t45 19h256v132q-217 24 -364.5 187.5t-147.5 384.5v128q0 26 19 45t45 19t45 -19t19 -45v-128q0 -185 131.5 -316.5t316.5 -131.5 t316.5 131.5t131.5 316.5v128q0 26 19 45t45 19t45 -19t19 -45zM896 1216v-512q0 -132 -94 -226t-226 -94t-226 94t-94 226v512q0 132 94 226t226 94t226 -94t94 -226z"
      ],
      "\uf131": [
        1408,
        "M271 591l-101 -101q-42 103 -42 214v128q0 26 19 45t45 19t45 -19t19 -45v-128q0 -53 15 -113zM1385 1193l-361 -361v-128q0 -132 -94 -226t-226 -94q-55 0 -109 19l-96 -96q97 -51 205 -51q185 0 316.5 131.5t131.5 316.5v128q0 26 19 45t45 19t45 -19t19 -45v-128 q0 -221 -147.5 -384.5t-364.5 -187.5v-132h256q26 0 45 -19t19 -45t-19 -45t-45 -19h-640q-26 0 -45 19t-19 45t19 45t45 19h256v132q-125 13 -235 81l-254 -254q-10 -10 -23 -10t-23 10l-82 82q-10 10 -10 23t10 23l1234 1234q10 10 23 10t23 -10l82 -82q10 -10 10 -23 t-10 -23zM1005 1325l-621 -621v512q0 132 94 226t226 94q102 0 184.5 -59t116.5 -152z"
      ],
      "\uf132": [
        1280,
        "M1088 576v640h-448v-1137q119 63 213 137q235 184 235 360zM1280 1344v-768q0 -86 -33.5 -170.5t-83 -150t-118 -127.5t-126.5 -103t-121 -77.5t-89.5 -49.5t-42.5 -20q-12 -6 -26 -6t-26 6q-16 7 -42.5 20t-89.5 49.5t-121 77.5t-126.5 103t-118 127.5t-83 150 t-33.5 170.5v768q0 26 19 45t45 19h1152q26 0 45 -19t19 -45z"
      ],
      "\uf133": [
        1664,
        "M128 -128h1408v1024h-1408v-1024zM512 1088v288q0 14 -9 23t-23 9h-64q-14 0 -23 -9t-9 -23v-288q0 -14 9 -23t23 -9h64q14 0 23 9t9 23zM1280 1088v288q0 14 -9 23t-23 9h-64q-14 0 -23 -9t-9 -23v-288q0 -14 9 -23t23 -9h64q14 0 23 9t9 23zM1664 1152v-1280 q0 -52 -38 -90t-90 -38h-1408q-52 0 -90 38t-38 90v1280q0 52 38 90t90 38h128v96q0 66 47 113t113 47h64q66 0 113 -47t47 -113v-96h384v96q0 66 47 113t113 47h64q66 0 113 -47t47 -113v-96h128q52 0 90 -38t38 -90z"
      ],
      "\uf134": [
        1408,
        "M512 1344q0 26 -19 45t-45 19t-45 -19t-19 -45t19 -45t45 -19t45 19t19 45zM1408 1376v-320q0 -16 -12 -25q-8 -7 -20 -7q-4 0 -7 1l-448 96q-11 2 -18 11t-7 20h-256v-102q111 -23 183.5 -111t72.5 -203v-800q0 -26 -19 -45t-45 -19h-512q-26 0 -45 19t-19 45v800 q0 106 62.5 190.5t161.5 114.5v111h-32q-59 0 -115 -23.5t-91.5 -53t-66 -66.5t-40.5 -53.5t-14 -24.5q-17 -35 -57 -35q-16 0 -29 7q-23 12 -31.5 37t3.5 49q5 10 14.5 26t37.5 53.5t60.5 70t85 67t108.5 52.5q-25 42 -25 86q0 66 47 113t113 47t113 -47t47 -113 q0 -33 -14 -64h302q0 11 7 20t18 11l448 96q3 1 7 1q12 0 20 -7q12 -9 12 -25z"
      ],
      "\uf135": [
        1664,
        "M1440 1088q0 40 -28 68t-68 28t-68 -28t-28 -68t28 -68t68 -28t68 28t28 68zM1664 1376q0 -249 -75.5 -430.5t-253.5 -360.5q-81 -80 -195 -176l-20 -379q-2 -16 -16 -26l-384 -224q-7 -4 -16 -4q-12 0 -23 9l-64 64q-13 14 -8 32l85 276l-281 281l-276 -85q-3 -1 -9 -1 q-14 0 -23 9l-64 64q-17 19 -5 39l224 384q10 14 26 16l379 20q96 114 176 195q188 187 358 258t431 71q14 0 24 -9.5t10 -22.5z"
      ],
      "\uf136": [
        1792,
        "M1745 763l-164 -763h-334l178 832q13 56 -15 88q-27 33 -83 33h-169l-204 -953h-334l204 953h-286l-204 -953h-334l204 953l-153 327h1276q101 0 189.5 -40.5t147.5 -113.5q60 -73 81 -168.5t0 -194.5z"
      ],
      "\uf137": [
        1536.0,
        "M909 141l102 102q19 19 19 45t-19 45l-307 307l307 307q19 19 19 45t-19 45l-102 102q-19 19 -45 19t-45 -19l-454 -454q-19 -19 -19 -45t19 -45l454 -454q19 -19 45 -19t45 19zM1536 640q0 -209 -103 -385.5t-279.5 -279.5t-385.5 -103t-385.5 103t-279.5 279.5 t-103 385.5t103 385.5t279.5 279.5t385.5 103t385.5 -103t279.5 -279.5t103 -385.5z"
      ],
      "\uf138": [
        1536.0,
        "M717 141l454 454q19 19 19 45t-19 45l-454 454q-19 19 -45 19t-45 -19l-102 -102q-19 -19 -19 -45t19 -45l307 -307l-307 -307q-19 -19 -19 -45t19 -45l102 -102q19 -19 45 -19t45 19zM1536 640q0 -209 -103 -385.5t-279.5 -279.5t-385.5 -103t-385.5 103t-279.5 279.5 t-103 385.5t103 385.5t279.5 279.5t385.5 103t385.5 -103t279.5 -279.5t103 -385.5z"
      ],
      "\uf139": [
        1536.0,
        "M1165 397l102 102q19 19 19 45t-19 45l-454 454q-19 19 -45 19t-45 -19l-454 -454q-19 -19 -19 -45t19 -45l102 -102q19 -19 45 -19t45 19l307 307l307 -307q19 -19 45 -19t45 19zM1536 640q0 -209 -103 -385.5t-279.5 -279.5t-385.5 -103t-385.5 103t-279.5 279.5 t-103 385.5t103 385.5t279.5 279.5t385.5 103t385.5 -103t279.5 -279.5t103 -385.5z"
      ],
      "\uf13a": [
        1536.0,
        "M813 237l454 454q19 19 19 45t-19 45l-102 102q-19 19 -45 19t-45 -19l-307 -307l-307 307q-19 19 -45 19t-45 -19l-102 -102q-19 -19 -19 -45t19 -45l454 -454q19 -19 45 -19t45 19zM1536 640q0 -209 -103 -385.5t-279.5 -279.5t-385.5 -103t-385.5 103t-279.5 279.5 t-103 385.5t103 385.5t279.5 279.5t385.5 103t385.5 -103t279.5 -279.5t103 -385.5z"
      ],
      "\uf13b": [
        1408,
        "M1130 939l16 175h-884l47 -534h612l-22 -228l-197 -53l-196 53l-13 140h-175l22 -278l362 -100h4v1l359 99l50 544h-644l-15 181h674zM0 1408h1408l-128 -1438l-578 -162l-574 162z"
      ],
      "\uf13c": [
        1792,
        "M275 1408h1505l-266 -1333l-804 -267l-698 267l71 356h297l-29 -147l422 -161l486 161l68 339h-1208l58 297h1209l38 191h-1208z"
      ],
      "\uf13d": [
        1792,
        "M960 1280q0 26 -19 45t-45 19t-45 -19t-19 -45t19 -45t45 -19t45 19t19 45zM1792 352v-352q0 -22 -20 -30q-8 -2 -12 -2q-12 0 -23 9l-93 93q-119 -143 -318.5 -226.5t-429.5 -83.5t-429.5 83.5t-318.5 226.5l-93 -93q-9 -9 -23 -9q-4 0 -12 2q-20 8 -20 30v352 q0 14 9 23t23 9h352q22 0 30 -20q8 -19 -7 -35l-100 -100q67 -91 189.5 -153.5t271.5 -82.5v647h-192q-26 0 -45 19t-19 45v128q0 26 19 45t45 19h192v163q-58 34 -93 92.5t-35 128.5q0 106 75 181t181 75t181 -75t75 -181q0 -70 -35 -128.5t-93 -92.5v-163h192q26 0 45 -19 t19 -45v-128q0 -26 -19 -45t-45 -19h-192v-647q149 20 271.5 82.5t189.5 153.5l-100 100q-15 16 -7 35q8 20 30 20h352q14 0 23 -9t9 -23z"
      ],
      "\uf13e": [
        1152,
        "M1056 768q40 0 68 -28t28 -68v-576q0 -40 -28 -68t-68 -28h-960q-40 0 -68 28t-28 68v576q0 40 28 68t68 28h32v320q0 185 131.5 316.5t316.5 131.5t316.5 -131.5t131.5 -316.5q0 -26 -19 -45t-45 -19h-64q-26 0 -45 19t-19 45q0 106 -75 181t-181 75t-181 -75t-75 -181 v-320h736z"
      ],
      "\uf140": [
        1536.0,
        "M1024 640q0 -106 -75 -181t-181 -75t-181 75t-75 181t75 181t181 75t181 -75t75 -181zM1152 640q0 159 -112.5 271.5t-271.5 112.5t-271.5 -112.5t-112.5 -271.5t112.5 -271.5t271.5 -112.5t271.5 112.5t112.5 271.5zM1280 640q0 -212 -150 -362t-362 -150t-362 150 t-150 362t150 362t362 150t362 -150t150 -362zM1408 640q0 130 -51 248.5t-136.5 204t-204 136.5t-248.5 51t-248.5 -51t-204 -136.5t-136.5 -204t-51 -248.5t51 -248.5t136.5 -204t204 -136.5t248.5 -51t248.5 51t204 136.5t136.5 204t51 248.5zM1536 640 q0 -209 -103 -385.5t-279.5 -279.5t-385.5 -103t-385.5 103t-279.5 279.5t-103 385.5t103 385.5t279.5 279.5t385.5 103t385.5 -103t279.5 -279.5t103 -385.5z"
      ],
      "\uf141": [
        1408,
        "M384 800v-192q0 -40 -28 -68t-68 -28h-192q-40 0 -68 28t-28 68v192q0 40 28 68t68 28h192q40 0 68 -28t28 -68zM896 800v-192q0 -40 -28 -68t-68 -28h-192q-40 0 -68 28t-28 68v192q0 40 28 68t68 28h192q40 0 68 -28t28 -68zM1408 800v-192q0 -40 -28 -68t-68 -28h-192 q-40 0 -68 28t-28 68v192q0 40 28 68t68 28h192q40 0 68 -28t28 -68z"
      ],
      "\uf142": [
        384,
        "M384 288v-192q0 -40 -28 -68t-68 -28h-192q-40 0 -68 28t-28 68v192q0 40 28 68t68 28h192q40 0 68 -28t28 -68zM384 800v-192q0 -40 -28 -68t-68 -28h-192q-40 0 -68 28t-28 68v192q0 40 28 68t68 28h192q40 0 68 -28t28 -68zM384 1312v-192q0 -40 -28 -68t-68 -28h-192 q-40 0 -68 28t-28 68v192q0 40 28 68t68 28h192q40 0 68 -28t28 -68z"
      ],
      "\uf143": [
        1536.0,
        "M512 256q0 53 -37.5 90.5t-90.5 37.5t-90.5 -37.5t-37.5 -90.5t37.5 -90.5t90.5 -37.5t90.5 37.5t37.5 90.5zM863 162q-13 233 -176.5 396.5t-396.5 176.5q-14 1 -24 -9t-10 -23v-128q0 -13 8.5 -22t21.5 -10q154 -11 264 -121t121 -264q1 -13 10 -21.5t22 -8.5h128 q13 0 23 10t9 24zM1247 161q-5 154 -56 297.5t-139.5 260t-205 205t-260 139.5t-297.5 56q-14 1 -23 -9q-10 -10 -10 -23v-128q0 -13 9 -22t22 -10q204 -7 378 -111.5t278.5 -278.5t111.5 -378q1 -13 10 -22t22 -9h128q13 0 23 10q11 9 9 23zM1536 1120v-960 q0 -119 -84.5 -203.5t-203.5 -84.5h-960q-119 0 -203.5 84.5t-84.5 203.5v960q0 119 84.5 203.5t203.5 84.5h960q119 0 203.5 -84.5t84.5 -203.5z"
      ],
      "\uf144": [
        1536.0,
        "M768 1408q209 0 385.5 -103t279.5 -279.5t103 -385.5t-103 -385.5t-279.5 -279.5t-385.5 -103t-385.5 103t-279.5 279.5t-103 385.5t103 385.5t279.5 279.5t385.5 103zM1152 585q32 18 32 55t-32 55l-544 320q-31 19 -64 1q-32 -19 -32 -56v-640q0 -37 32 -56 q16 -8 32 -8q17 0 32 9z"
      ],
      "\uf145": [
        1792,
        "M1024 1084l316 -316l-572 -572l-316 316zM813 105l618 618q19 19 19 45t-19 45l-362 362q-18 18 -45 18t-45 -18l-618 -618q-19 -19 -19 -45t19 -45l362 -362q18 -18 45 -18t45 18zM1702 742l-907 -908q-37 -37 -90.5 -37t-90.5 37l-126 126q56 56 56 136t-56 136 t-136 56t-136 -56l-125 126q-37 37 -37 90.5t37 90.5l907 906q37 37 90.5 37t90.5 -37l125 -125q-56 -56 -56 -136t56 -136t136 -56t136 56l126 -125q37 -37 37 -90.5t-37 -90.5z"
      ],
      "\uf146": [
        1536.0,
        "M1280 576v128q0 26 -19 45t-45 19h-896q-26 0 -45 -19t-19 -45v-128q0 -26 19 -45t45 -19h896q26 0 45 19t19 45zM1536 1120v-960q0 -119 -84.5 -203.5t-203.5 -84.5h-960q-119 0 -203.5 84.5t-84.5 203.5v960q0 119 84.5 203.5t203.5 84.5h960q119 0 203.5 -84.5 t84.5 -203.5z"
      ],
      "\uf147": [
        1408,
        "M1152 736v-64q0 -14 -9 -23t-23 -9h-832q-14 0 -23 9t-9 23v64q0 14 9 23t23 9h832q14 0 23 -9t9 -23zM1280 288v832q0 66 -47 113t-113 47h-832q-66 0 -113 -47t-47 -113v-832q0 -66 47 -113t113 -47h832q66 0 113 47t47 113zM1408 1120v-832q0 -119 -84.5 -203.5 t-203.5 -84.5h-832q-119 0 -203.5 84.5t-84.5 203.5v832q0 119 84.5 203.5t203.5 84.5h832q119 0 203.5 -84.5t84.5 -203.5z"
      ],
      "\uf148": [
        1024,
        "M1018 933q-18 -37 -58 -37h-192v-864q0 -14 -9 -23t-23 -9h-704q-21 0 -29 18q-8 20 4 35l160 192q9 11 25 11h320v640h-192q-40 0 -58 37q-17 37 9 68l320 384q18 22 49 22t49 -22l320 -384q27 -32 9 -68z"
      ],
      "\uf149": [
        1024,
        "M32 1280h704q13 0 22.5 -9.5t9.5 -23.5v-863h192q40 0 58 -37t-9 -69l-320 -384q-18 -22 -49 -22t-49 22l-320 384q-26 31 -9 69q18 37 58 37h192v640h-320q-14 0 -25 11l-160 192q-13 14 -4 34q9 19 29 19z"
      ],
      "\uf14a": [
        1536.0,
        "M685 237l614 614q19 19 19 45t-19 45l-102 102q-19 19 -45 19t-45 -19l-467 -467l-211 211q-19 19 -45 19t-45 -19l-102 -102q-19 -19 -19 -45t19 -45l358 -358q19 -19 45 -19t45 19zM1536 1120v-960q0 -119 -84.5 -203.5t-203.5 -84.5h-960q-119 0 -203.5 84.5 t-84.5 203.5v960q0 119 84.5 203.5t203.5 84.5h960q119 0 203.5 -84.5t84.5 -203.5z"
      ],
      "\uf14b": [
        1536.0,
        "M404 428l152 -152l-52 -52h-56v96h-96v56zM818 818q14 -13 -3 -30l-291 -291q-17 -17 -30 -3q-14 13 3 30l291 291q17 17 30 3zM544 128l544 544l-288 288l-544 -544v-288h288zM1152 736l92 92q28 28 28 68t-28 68l-152 152q-28 28 -68 28t-68 -28l-92 -92zM1536 1120 v-960q0 -119 -84.5 -203.5t-203.5 -84.5h-960q-119 0 -203.5 84.5t-84.5 203.5v960q0 119 84.5 203.5t203.5 84.5h960q119 0 203.5 -84.5t84.5 -203.5z"
      ],
      "\uf14c": [
        1536.0,
        "M1280 608v480q0 26 -19 45t-45 19h-480q-42 0 -59 -39q-17 -41 14 -70l144 -144l-534 -534q-19 -19 -19 -45t19 -45l102 -102q19 -19 45 -19t45 19l534 534l144 -144q18 -19 45 -19q12 0 25 5q39 17 39 59zM1536 1120v-960q0 -119 -84.5 -203.5t-203.5 -84.5h-960 q-119 0 -203.5 84.5t-84.5 203.5v960q0 119 84.5 203.5t203.5 84.5h960q119 0 203.5 -84.5t84.5 -203.5z"
      ],
      "\uf14d": [
        1536.0,
        "M1005 435l352 352q19 19 19 45t-19 45l-352 352q-30 31 -69 14q-40 -17 -40 -59v-160q-119 0 -216 -19.5t-162.5 -51t-114 -79t-76.5 -95.5t-44.5 -109t-21.5 -111.5t-5 -110.5q0 -181 167 -404q11 -12 25 -12q7 0 13 3q22 9 19 33q-44 354 62 473q46 52 130 75.5 t224 23.5v-160q0 -42 40 -59q12 -5 24 -5q26 0 45 19zM1536 1120v-960q0 -119 -84.5 -203.5t-203.5 -84.5h-960q-119 0 -203.5 84.5t-84.5 203.5v960q0 119 84.5 203.5t203.5 84.5h960q119 0 203.5 -84.5t84.5 -203.5z"
      ],
      "\uf14e": [
        1536.0,
        "M640 448l256 128l-256 128v-256zM1024 1039v-542l-512 -256v542zM1312 640q0 148 -73 273t-198 198t-273 73t-273 -73t-198 -198t-73 -273t73 -273t198 -198t273 -73t273 73t198 198t73 273zM1536 640q0 -209 -103 -385.5t-279.5 -279.5t-385.5 -103t-385.5 103 t-279.5 279.5t-103 385.5t103 385.5t279.5 279.5t385.5 103t385.5 -103t279.5 -279.5t103 -385.5z"
      ],
      "\uf150": [
        1536.0,
        "M1145 861q18 -35 -5 -66l-320 -448q-19 -27 -52 -27t-52 27l-320 448q-23 31 -5 66q17 35 57 35h640q40 0 57 -35zM1280 160v960q0 13 -9.5 22.5t-22.5 9.5h-960q-13 0 -22.5 -9.5t-9.5 -22.5v-960q0 -13 9.5 -22.5t22.5 -9.5h960q13 0 22.5 9.5t9.5 22.5zM1536 1120 v-960q0 -119 -84.5 -203.5t-203.5 -84.5h-960q-119 0 -203.5 84.5t-84.5 203.5v960q0 119 84.5 203.5t203.5 84.5h960q119 0 203.5 -84.5t84.5 -203.5z"
      ],
      "\uf151": [
        1536.0,
        "M1145 419q-17 -35 -57 -35h-640q-40 0 -57 35q-18 35 5 66l320 448q19 27 52 27t52 -27l320 -448q23 -31 5 -66zM1280 160v960q0 13 -9.5 22.5t-22.5 9.5h-960q-13 0 -22.5 -9.5t-9.5 -22.5v-960q0 -13 9.5 -22.5t22.5 -9.5h960q13 0 22.5 9.5t9.5 22.5zM1536 1120v-960 q0 -119 -84.5 -203.5t-203.5 -84.5h-960q-119 0 -203.5 84.5t-84.5 203.5v960q0 119 84.5 203.5t203.5 84.5h960q119 0 203.5 -84.5t84.5 -203.5z"
      ],
      "\uf152": [
        1536.0,
        "M1088 640q0 -33 -27 -52l-448 -320q-31 -23 -66 -5q-35 17 -35 57v640q0 40 35 57q35 18 66 -5l448 -320q27 -19 27 -52zM1280 160v960q0 14 -9 23t-23 9h-960q-14 0 -23 -9t-9 -23v-960q0 -14 9 -23t23 -9h960q14 0 23 9t9 23zM1536 1120v-960q0 -119 -84.5 -203.5 t-203.5 -84.5h-960q-119 0 -203.5 84.5t-84.5 203.5v960q0 119 84.5 203.5t203.5 84.5h960q119 0 203.5 -84.5t84.5 -203.5z"
      ],
      "\uf153": [
        1024,
        "M976 229l35 -159q3 -12 -3 -22.5t-17 -14.5l-5 -1q-4 -2 -10.5 -3.5t-16 -4.5t-21.5 -5.5t-25.5 -5t-30 -5t-33.5 -4.5t-36.5 -3t-38.5 -1q-234 0 -409 130.5t-238 351.5h-95q-13 0 -22.5 9.5t-9.5 22.5v113q0 13 9.5 22.5t22.5 9.5h66q-2 57 1 105h-67q-14 0 -23 9 t-9 23v114q0 14 9 23t23 9h98q67 210 243.5 338t400.5 128q102 0 194 -23q11 -3 20 -15q6 -11 3 -24l-43 -159q-3 -13 -14 -19.5t-24 -2.5l-4 1q-4 1 -11.5 2.5l-17.5 3.5t-22.5 3.5t-26 3t-29 2.5t-29.5 1q-126 0 -226 -64t-150 -176h468q16 0 25 -12q10 -12 7 -26 l-24 -114q-5 -26 -32 -26h-488q-3 -37 0 -105h459q15 0 25 -12q9 -12 6 -27l-24 -112q-2 -11 -11 -18.5t-20 -7.5h-387q48 -117 149.5 -185.5t228.5 -68.5q18 0 36 1.5t33.5 3.5t29.5 4.5t24.5 5t18.5 4.5l12 3l5 2q13 5 26 -2q12 -7 15 -21z"
      ],
      "\uf154": [
        1024,
        "M1020 399v-367q0 -14 -9 -23t-23 -9h-956q-14 0 -23 9t-9 23v150q0 13 9.5 22.5t22.5 9.5h97v383h-95q-14 0 -23 9.5t-9 22.5v131q0 14 9 23t23 9h95v223q0 171 123.5 282t314.5 111q185 0 335 -125q9 -8 10 -20.5t-7 -22.5l-103 -127q-9 -11 -22 -12q-13 -2 -23 7 q-5 5 -26 19t-69 32t-93 18q-85 0 -137 -47t-52 -123v-215h305q13 0 22.5 -9t9.5 -23v-131q0 -13 -9.5 -22.5t-22.5 -9.5h-305v-379h414v181q0 13 9 22.5t23 9.5h162q14 0 23 -9.5t9 -22.5z"
      ],
      "\uf155": [
        1024,
        "M978 351q0 -153 -99.5 -263.5t-258.5 -136.5v-175q0 -14 -9 -23t-23 -9h-135q-13 0 -22.5 9.5t-9.5 22.5v175q-66 9 -127.5 31t-101.5 44.5t-74 48t-46.5 37.5t-17.5 18q-17 21 -2 41l103 135q7 10 23 12q15 2 24 -9l2 -2q113 -99 243 -125q37 -8 74 -8q81 0 142.5 43 t61.5 122q0 28 -15 53t-33.5 42t-58.5 37.5t-66 32t-80 32.5q-39 16 -61.5 25t-61.5 26.5t-62.5 31t-56.5 35.5t-53.5 42.5t-43.5 49t-35.5 58t-21 66.5t-8.5 78q0 138 98 242t255 134v180q0 13 9.5 22.5t22.5 9.5h135q14 0 23 -9t9 -23v-176q57 -6 110.5 -23t87 -33.5 t63.5 -37.5t39 -29t15 -14q17 -18 5 -38l-81 -146q-8 -15 -23 -16q-14 -3 -27 7q-3 3 -14.5 12t-39 26.5t-58.5 32t-74.5 26t-85.5 11.5q-95 0 -155 -43t-60 -111q0 -26 8.5 -48t29.5 -41.5t39.5 -33t56 -31t60.5 -27t70 -27.5q53 -20 81 -31.5t76 -35t75.5 -42.5t62 -50 t53 -63.5t31.5 -76.5t13 -94z"
      ],
      "\uf156": [
        898,
        "M898 1066v-102q0 -14 -9 -23t-23 -9h-168q-23 -144 -129 -234t-276 -110q167 -178 459 -536q14 -16 4 -34q-8 -18 -29 -18h-195q-16 0 -25 12q-306 367 -498 571q-9 9 -9 22v127q0 13 9.5 22.5t22.5 9.5h112q132 0 212.5 43t102.5 125h-427q-14 0 -23 9t-9 23v102 q0 14 9 23t23 9h413q-57 113 -268 113h-145q-13 0 -22.5 9.5t-9.5 22.5v133q0 14 9 23t23 9h832q14 0 23 -9t9 -23v-102q0 -14 -9 -23t-23 -9h-233q47 -61 64 -144h171q14 0 23 -9t9 -23z"
      ],
      "\uf157": [
        1027,
        "M603 0h-172q-13 0 -22.5 9t-9.5 23v330h-288q-13 0 -22.5 9t-9.5 23v103q0 13 9.5 22.5t22.5 9.5h288v85h-288q-13 0 -22.5 9t-9.5 23v104q0 13 9.5 22.5t22.5 9.5h214l-321 578q-8 16 0 32q10 16 28 16h194q19 0 29 -18l215 -425q19 -38 56 -125q10 24 30.5 68t27.5 61 l191 420q8 19 29 19h191q17 0 27 -16q9 -14 1 -31l-313 -579h215q13 0 22.5 -9.5t9.5 -22.5v-104q0 -14 -9.5 -23t-22.5 -9h-290v-85h290q13 0 22.5 -9.5t9.5 -22.5v-103q0 -14 -9.5 -23t-22.5 -9h-290v-330q0 -13 -9.5 -22.5t-22.5 -9.5z"
      ],
      "\uf158": [
        1280,
        "M1043 971q0 100 -65 162t-171 62h-320v-448h320q106 0 171 62t65 162zM1280 971q0 -193 -126.5 -315t-326.5 -122h-340v-118h505q14 0 23 -9t9 -23v-128q0 -14 -9 -23t-23 -9h-505v-192q0 -14 -9.5 -23t-22.5 -9h-167q-14 0 -23 9t-9 23v192h-224q-14 0 -23 9t-9 23v128 q0 14 9 23t23 9h224v118h-224q-14 0 -23 9t-9 23v149q0 13 9 22.5t23 9.5h224v629q0 14 9 23t23 9h539q200 0 326.5 -122t126.5 -315z"
      ],
      "\uf159": [
        1792,
        "M514 341l81 299h-159l75 -300q1 -1 1 -3t1 -3q0 1 0.5 3.5t0.5 3.5zM630 768l35 128h-292l32 -128h225zM822 768h139l-35 128h-70zM1271 340l78 300h-162l81 -299q0 -1 0.5 -3.5t1.5 -3.5q0 1 0.5 3t0.5 3zM1382 768l33 128h-297l34 -128h230zM1792 736v-64q0 -14 -9 -23 t-23 -9h-213l-164 -616q-7 -24 -31 -24h-159q-24 0 -31 24l-166 616h-209l-167 -616q-7 -24 -31 -24h-159q-11 0 -19.5 7t-10.5 17l-160 616h-208q-14 0 -23 9t-9 23v64q0 14 9 23t23 9h175l-33 128h-142q-14 0 -23 9t-9 23v64q0 14 9 23t23 9h109l-89 344q-5 15 5 28 q10 12 26 12h137q26 0 31 -24l90 -360h359l97 360q7 24 31 24h126q24 0 31 -24l98 -360h365l93 360q5 24 31 24h137q16 0 26 -12q10 -13 5 -28l-91 -344h111q14 0 23 -9t9 -23v-64q0 -14 -9 -23t-23 -9h-145l-34 -128h179q14 0 23 -9t9 -23z"
      ],
      "\uf15a": [
        1280,
        "M1167 896q18 -182 -131 -258q117 -28 175 -103t45 -214q-7 -71 -32.5 -125t-64.5 -89t-97 -58.5t-121.5 -34.5t-145.5 -15v-255h-154v251q-80 0 -122 1v-252h-154v255q-18 0 -54 0.5t-55 0.5h-200l31 183h111q50 0 58 51v402h16q-6 1 -16 1v287q-13 68 -89 68h-111v164 l212 -1q64 0 97 1v252h154v-247q82 2 122 2v245h154v-252q79 -7 140 -22.5t113 -45t82.5 -78t36.5 -114.5zM952 351q0 36 -15 64t-37 46t-57.5 30.5t-65.5 18.5t-74 9t-69 3t-64.5 -1t-47.5 -1v-338q8 0 37 -0.5t48 -0.5t53 1.5t58.5 4t57 8.5t55.5 14t47.5 21t39.5 30 t24.5 40t9.5 51zM881 827q0 33 -12.5 58.5t-30.5 42t-48 28t-55 16.5t-61.5 8t-58 2.5t-54 -1t-39.5 -0.5v-307q5 0 34.5 -0.5t46.5 0t50 2t55 5.5t51.5 11t48.5 18.5t37 27t27 38.5t9 51z"
      ],
      "\uf15b": [
        1536.0,
        "M1024 1024v472q22 -14 36 -28l408 -408q14 -14 28 -36h-472zM896 992q0 -40 28 -68t68 -28h544v-1056q0 -40 -28 -68t-68 -28h-1344q-40 0 -68 28t-28 68v1600q0 40 28 68t68 28h800v-544z"
      ],
      "\uf15c": [
        1536.0,
        "M1468 1060q14 -14 28 -36h-472v472q22 -14 36 -28zM992 896h544v-1056q0 -40 -28 -68t-68 -28h-1344q-40 0 -68 28t-28 68v1600q0 40 28 68t68 28h800v-544q0 -40 28 -68t68 -28zM1152 160v64q0 14 -9 23t-23 9h-704q-14 0 -23 -9t-9 -23v-64q0 -14 9 -23t23 -9h704 q14 0 23 9t9 23zM1152 416v64q0 14 -9 23t-23 9h-704q-14 0 -23 -9t-9 -23v-64q0 -14 9 -23t23 -9h704q14 0 23 9t9 23zM1152 672v64q0 14 -9 23t-23 9h-704q-14 0 -23 -9t-9 -23v-64q0 -14 9 -23t23 -9h704q14 0 23 9t9 23z"
      ],
      "\uf15d": [
        1664,
        "M1191 1128h177l-72 218l-12 47q-2 16 -2 20h-4l-3 -20q0 -1 -3.5 -18t-7.5 -29zM736 96q0 -12 -10 -24l-319 -319q-10 -9 -23 -9q-12 0 -23 9l-320 320q-15 16 -7 35q8 20 30 20h192v1376q0 14 9 23t23 9h192q14 0 23 -9t9 -23v-1376h192q14 0 23 -9t9 -23zM1572 -23 v-233h-584v90l369 529q12 18 21 27l11 9v3q-2 0 -6.5 -0.5t-7.5 -0.5q-12 -3 -30 -3h-232v-115h-120v229h567v-89l-369 -530q-6 -8 -21 -26l-11 -11v-2l14 2q9 2 30 2h248v119h121zM1661 874v-106h-288v106h75l-47 144h-243l-47 -144h75v-106h-287v106h70l230 662h162 l230 -662h70z"
      ],
      "\uf15e": [
        1664,
        "M1191 104h177l-72 218l-12 47q-2 16 -2 20h-4l-3 -20q0 -1 -3.5 -18t-7.5 -29zM736 96q0 -12 -10 -24l-319 -319q-10 -9 -23 -9q-12 0 -23 9l-320 320q-15 16 -7 35q8 20 30 20h192v1376q0 14 9 23t23 9h192q14 0 23 -9t9 -23v-1376h192q14 0 23 -9t9 -23zM1661 -150 v-106h-288v106h75l-47 144h-243l-47 -144h75v-106h-287v106h70l230 662h162l230 -662h70zM1572 1001v-233h-584v90l369 529q12 18 21 27l11 9v3q-2 0 -6.5 -0.5t-7.5 -0.5q-12 -3 -30 -3h-232v-115h-120v229h567v-89l-369 -530q-6 -8 -21 -26l-11 -10v-3l14 3q9 1 30 1h248 v119h121z"
      ],
      "\uf160": [
        1792,
        "M736 96q0 -12 -10 -24l-319 -319q-10 -9 -23 -9q-12 0 -23 9l-320 320q-15 16 -7 35q8 20 30 20h192v1376q0 14 9 23t23 9h192q14 0 23 -9t9 -23v-1376h192q14 0 23 -9t9 -23zM1792 -32v-192q0 -14 -9 -23t-23 -9h-832q-14 0 -23 9t-9 23v192q0 14 9 23t23 9h832 q14 0 23 -9t9 -23zM1600 480v-192q0 -14 -9 -23t-23 -9h-640q-14 0 -23 9t-9 23v192q0 14 9 23t23 9h640q14 0 23 -9t9 -23zM1408 992v-192q0 -14 -9 -23t-23 -9h-448q-14 0 -23 9t-9 23v192q0 14 9 23t23 9h448q14 0 23 -9t9 -23zM1216 1504v-192q0 -14 -9 -23t-23 -9h-256 q-14 0 -23 9t-9 23v192q0 14 9 23t23 9h256q14 0 23 -9t9 -23z"
      ],
      "\uf161": [
        1792,
        "M1216 -32v-192q0 -14 -9 -23t-23 -9h-256q-14 0 -23 9t-9 23v192q0 14 9 23t23 9h256q14 0 23 -9t9 -23zM736 96q0 -12 -10 -24l-319 -319q-10 -9 -23 -9q-12 0 -23 9l-320 320q-15 16 -7 35q8 20 30 20h192v1376q0 14 9 23t23 9h192q14 0 23 -9t9 -23v-1376h192 q14 0 23 -9t9 -23zM1408 480v-192q0 -14 -9 -23t-23 -9h-448q-14 0 -23 9t-9 23v192q0 14 9 23t23 9h448q14 0 23 -9t9 -23zM1600 992v-192q0 -14 -9 -23t-23 -9h-640q-14 0 -23 9t-9 23v192q0 14 9 23t23 9h640q14 0 23 -9t9 -23zM1792 1504v-192q0 -14 -9 -23t-23 -9h-832 q-14 0 -23 9t-9 23v192q0 14 9 23t23 9h832q14 0 23 -9t9 -23z"
      ],
      "\uf162": [
        1536.0,
        "M1346 223q0 63 -44 116t-103 53q-52 0 -83 -37t-31 -94t36.5 -95t104.5 -38q50 0 85 27t35 68zM736 96q0 -12 -10 -24l-319 -319q-10 -9 -23 -9q-12 0 -23 9l-320 320q-15 16 -7 35q8 20 30 20h192v1376q0 14 9 23t23 9h192q14 0 23 -9t9 -23v-1376h192q14 0 23 -9t9 -23 zM1486 165q0 -62 -13 -121.5t-41 -114t-68 -95.5t-98.5 -65.5t-127.5 -24.5q-62 0 -108 16q-24 8 -42 15l39 113q15 -7 31 -11q37 -13 75 -13q84 0 134.5 58.5t66.5 145.5h-2q-21 -23 -61.5 -37t-84.5 -14q-106 0 -173 71.5t-67 172.5q0 105 72 178t181 73q123 0 205 -94.5 t82 -252.5zM1456 882v-114h-469v114h167v432q0 7 0.5 19t0.5 17v16h-2l-7 -12q-8 -13 -26 -31l-62 -58l-82 86l192 185h123v-654h165z"
      ],
      "\uf163": [
        1536.0,
        "M1346 1247q0 63 -44 116t-103 53q-52 0 -83 -37t-31 -94t36.5 -95t104.5 -38q50 0 85 27t35 68zM736 96q0 -12 -10 -24l-319 -319q-10 -9 -23 -9q-12 0 -23 9l-320 320q-15 16 -7 35q8 20 30 20h192v1376q0 14 9 23t23 9h192q14 0 23 -9t9 -23v-1376h192q14 0 23 -9 t9 -23zM1456 -142v-114h-469v114h167v432q0 7 0.5 19t0.5 17v16h-2l-7 -12q-8 -13 -26 -31l-62 -58l-82 86l192 185h123v-654h165zM1486 1189q0 -62 -13 -121.5t-41 -114t-68 -95.5t-98.5 -65.5t-127.5 -24.5q-62 0 -108 16q-24 8 -42 15l39 113q15 -7 31 -11q37 -13 75 -13 q84 0 134.5 58.5t66.5 145.5h-2q-21 -23 -61.5 -37t-84.5 -14q-106 0 -173 71.5t-67 172.5q0 105 72 178t181 73q123 0 205 -94.5t82 -252.5z"
      ],
      "\uf164": [
        1664,
        "M256 192q0 26 -19 45t-45 19q-27 0 -45.5 -19t-18.5 -45q0 -27 18.5 -45.5t45.5 -18.5q26 0 45 18.5t19 45.5zM416 704v-640q0 -26 -19 -45t-45 -19h-288q-26 0 -45 19t-19 45v640q0 26 19 45t45 19h288q26 0 45 -19t19 -45zM1600 704q0 -86 -55 -149q15 -44 15 -76 q3 -76 -43 -137q17 -56 0 -117q-15 -57 -54 -94q9 -112 -49 -181q-64 -76 -197 -78h-36h-76h-17q-66 0 -144 15.5t-121.5 29t-120.5 39.5q-123 43 -158 44q-26 1 -45 19.5t-19 44.5v641q0 25 18 43.5t43 20.5q24 2 76 59t101 121q68 87 101 120q18 18 31 48t17.5 48.5 t13.5 60.5q7 39 12.5 61t19.5 52t34 50q19 19 45 19q46 0 82.5 -10.5t60 -26t40 -40.5t24 -45t12 -50t5 -45t0.5 -39q0 -38 -9.5 -76t-19 -60t-27.5 -56q-3 -6 -10 -18t-11 -22t-8 -24h277q78 0 135 -57t57 -135z"
      ],
      "\uf165": [
        1664,
        "M256 960q0 -26 -19 -45t-45 -19q-27 0 -45.5 19t-18.5 45q0 27 18.5 45.5t45.5 18.5q26 0 45 -18.5t19 -45.5zM416 448v640q0 26 -19 45t-45 19h-288q-26 0 -45 -19t-19 -45v-640q0 -26 19 -45t45 -19h288q26 0 45 19t19 45zM1545 597q55 -61 55 -149q-1 -78 -57.5 -135 t-134.5 -57h-277q4 -14 8 -24t11 -22t10 -18q18 -37 27 -57t19 -58.5t10 -76.5q0 -24 -0.5 -39t-5 -45t-12 -50t-24 -45t-40 -40.5t-60 -26t-82.5 -10.5q-26 0 -45 19q-20 20 -34 50t-19.5 52t-12.5 61q-9 42 -13.5 60.5t-17.5 48.5t-31 48q-33 33 -101 120q-49 64 -101 121 t-76 59q-25 2 -43 20.5t-18 43.5v641q0 26 19 44.5t45 19.5q35 1 158 44q77 26 120.5 39.5t121.5 29t144 15.5h17h76h36q133 -2 197 -78q58 -69 49 -181q39 -37 54 -94q17 -61 0 -117q46 -61 43 -137q0 -32 -15 -76z"
      ],
      "\uf166": [
        1536.0,
        "M919 233v157q0 50 -29 50q-17 0 -33 -16v-224q16 -16 33 -16q29 0 29 49zM1103 355h66v34q0 51 -33 51t-33 -51v-34zM532 621v-70h-80v-423h-74v423h-78v70h232zM733 495v-367h-67v40q-39 -45 -76 -45q-33 0 -42 28q-6 17 -6 54v290h66v-270q0 -24 1 -26q1 -15 15 -15 q20 0 42 31v280h67zM985 384v-146q0 -52 -7 -73q-12 -42 -53 -42q-35 0 -68 41v-36h-67v493h67v-161q32 40 68 40q41 0 53 -42q7 -21 7 -74zM1236 255v-9q0 -29 -2 -43q-3 -22 -15 -40q-27 -40 -80 -40q-52 0 -81 38q-21 27 -21 86v129q0 59 20 86q29 38 80 38t78 -38 q21 -29 21 -86v-76h-133v-65q0 -51 34 -51q24 0 30 26q0 1 0.5 7t0.5 16.5v21.5h68zM785 1079v-156q0 -51 -32 -51t-32 51v156q0 52 32 52t32 -52zM1318 366q0 177 -19 260q-10 44 -43 73.5t-76 34.5q-136 15 -412 15q-275 0 -411 -15q-44 -5 -76.5 -34.5t-42.5 -73.5 q-20 -87 -20 -260q0 -176 20 -260q10 -43 42.5 -73t75.5 -35q137 -15 412 -15t412 15q43 5 75.5 35t42.5 73q20 84 20 260zM563 1017l90 296h-75l-51 -195l-53 195h-78q7 -23 23 -69l24 -69q35 -103 46 -158v-201h74v201zM852 936v130q0 58 -21 87q-29 38 -78 38 q-51 0 -78 -38q-21 -29 -21 -87v-130q0 -58 21 -87q27 -38 78 -38q49 0 78 38q21 27 21 87zM1033 816h67v370h-67v-283q-22 -31 -42 -31q-15 0 -16 16q-1 2 -1 26v272h-67v-293q0 -37 6 -55q11 -27 43 -27q36 0 77 45v-40zM1536 1120v-960q0 -119 -84.5 -203.5t-203.5 -84.5 h-960q-119 0 -203.5 84.5t-84.5 203.5v960q0 119 84.5 203.5t203.5 84.5h960q119 0 203.5 -84.5t84.5 -203.5z"
      ],
      "\uf167": [
        1536.0,
        "M971 292v-211q0 -67 -39 -67q-23 0 -45 22v301q22 22 45 22q39 0 39 -67zM1309 291v-46h-90v46q0 68 45 68t45 -68zM343 509h107v94h-312v-94h105v-569h100v569zM631 -60h89v494h-89v-378q-30 -42 -57 -42q-18 0 -21 21q-1 3 -1 35v364h-89v-391q0 -49 8 -73 q12 -37 58 -37q48 0 102 61v-54zM1060 88v197q0 73 -9 99q-17 56 -71 56q-50 0 -93 -54v217h-89v-663h89v48q45 -55 93 -55q54 0 71 55q9 27 9 100zM1398 98v13h-91q0 -51 -2 -61q-7 -36 -40 -36q-46 0 -46 69v87h179v103q0 79 -27 116q-39 51 -106 51q-68 0 -107 -51 q-28 -37 -28 -116v-173q0 -79 29 -116q39 -51 108 -51q72 0 108 53q18 27 21 54q2 9 2 58zM790 1011v210q0 69 -43 69t-43 -69v-210q0 -70 43 -70t43 70zM1509 260q0 -234 -26 -350q-14 -59 -58 -99t-102 -46q-184 -21 -555 -21t-555 21q-58 6 -102.5 46t-57.5 99 q-26 112 -26 350q0 234 26 350q14 59 58 99t103 47q183 20 554 20t555 -20q58 -7 102.5 -47t57.5 -99q26 -112 26 -350zM511 1536h102l-121 -399v-271h-100v271q-14 74 -61 212q-37 103 -65 187h106l71 -263zM881 1203v-175q0 -81 -28 -118q-38 -51 -106 -51q-67 0 -105 51 q-28 38 -28 118v175q0 80 28 117q38 51 105 51q68 0 106 -51q28 -37 28 -117zM1216 1365v-499h-91v55q-53 -62 -103 -62q-46 0 -59 37q-8 24 -8 75v394h91v-367q0 -33 1 -35q3 -22 21 -22q27 0 57 43v381h91z"
      ],
      "\uf168": [
        1408,
        "M597 869q-10 -18 -257 -456q-27 -46 -65 -46h-239q-21 0 -31 17t0 36l253 448q1 0 0 1l-161 279q-12 22 -1 37q9 15 32 15h239q40 0 66 -45zM1403 1511q11 -16 0 -37l-528 -934v-1l336 -615q11 -20 1 -37q-10 -15 -32 -15h-239q-42 0 -66 45l-339 622q18 32 531 942 q25 45 64 45h241q22 0 31 -15z"
      ],
      "\uf169": [
        1536.0,
        "M685 771q0 1 -126 222q-21 34 -52 34h-184q-18 0 -26 -11q-7 -12 1 -29l125 -216v-1l-196 -346q-9 -14 0 -28q8 -13 24 -13h185q31 0 50 36zM1309 1268q-7 12 -24 12h-187q-30 0 -49 -35l-411 -729q1 -2 262 -481q20 -35 52 -35h184q18 0 25 12q8 13 -1 28l-260 476v1 l409 723q8 16 0 28zM1536 1120v-960q0 -119 -84.5 -203.5t-203.5 -84.5h-960q-119 0 -203.5 84.5t-84.5 203.5v960q0 119 84.5 203.5t203.5 84.5h960q119 0 203.5 -84.5t84.5 -203.5z"
      ],
      "\uf16a": [
        1792,
        "M711 408l484 250l-484 253v-503zM896 1270q168 0 324.5 -4.5t229.5 -9.5l73 -4q1 0 17 -1.5t23 -3t23.5 -4.5t28.5 -8t28 -13t31 -19.5t29 -26.5q6 -6 15.5 -18.5t29 -58.5t26.5 -101q8 -64 12.5 -136.5t5.5 -113.5v-40v-136q1 -145 -18 -290q-7 -55 -25 -99.5t-32 -61.5 l-14 -17q-14 -15 -29 -26.5t-31 -19t-28 -12.5t-28.5 -8t-24 -4.5t-23 -3t-16.5 -1.5q-251 -19 -627 -19q-207 2 -359.5 6.5t-200.5 7.5l-49 4l-36 4q-36 5 -54.5 10t-51 21t-56.5 41q-6 6 -15.5 18.5t-29 58.5t-26.5 101q-8 64 -12.5 136.5t-5.5 113.5v40v136 q-1 145 18 290q7 55 25 99.5t32 61.5l14 17q14 15 29 26.5t31 19.5t28 13t28.5 8t23.5 4.5t23 3t17 1.5q251 18 627 18z"
      ],
      "\uf16b": [
        1792,
        "M402 829l494 -305l-342 -285l-490 319zM1388 274v-108l-490 -293v-1l-1 1l-1 -1v1l-489 293v108l147 -96l342 284v2l1 -1l1 1v-2l343 -284zM554 1418l342 -285l-494 -304l-338 270zM1390 829l338 -271l-489 -319l-343 285zM1239 1418l489 -319l-338 -270l-494 304z"
      ],
      "\uf16c": [
        1536.0,
        "M1289 -96h-1118v480h-160v-640h1438v640h-160v-480zM347 428l33 157l783 -165l-33 -156zM450 802l67 146l725 -339l-67 -145zM651 1158l102 123l614 -513l-102 -123zM1048 1536l477 -641l-128 -96l-477 641zM330 65v159h800v-159h-800z"
      ],
      "\uf16d": [
        1536.0,
        "M1024 640q0 106 -75 181t-181 75t-181 -75t-75 -181t75 -181t181 -75t181 75t75 181zM1162 640q0 -164 -115 -279t-279 -115t-279 115t-115 279t115 279t279 115t279 -115t115 -279zM1270 1050q0 -38 -27 -65t-65 -27t-65 27t-27 65t27 65t65 27t65 -27t27 -65zM768 1270 q-7 0 -76.5 0.5t-105.5 0t-96.5 -3t-103 -10t-71.5 -18.5q-50 -20 -88 -58t-58 -88q-11 -29 -18.5 -71.5t-10 -103t-3 -96.5t0 -105.5t0.5 -76.5t-0.5 -76.5t0 -105.5t3 -96.5t10 -103t18.5 -71.5q20 -50 58 -88t88 -58q29 -11 71.5 -18.5t103 -10t96.5 -3t105.5 0t76.5 0.5 t76.5 -0.5t105.5 0t96.5 3t103 10t71.5 18.5q50 20 88 58t58 88q11 29 18.5 71.5t10 103t3 96.5t0 105.5t-0.5 76.5t0.5 76.5t0 105.5t-3 96.5t-10 103t-18.5 71.5q-20 50 -58 88t-88 58q-29 11 -71.5 18.5t-103 10t-96.5 3t-105.5 0t-76.5 -0.5zM1536 640q0 -229 -5 -317 q-10 -208 -124 -322t-322 -124q-88 -5 -317 -5t-317 5q-208 10 -322 124t-124 322q-5 88 -5 317t5 317q10 208 124 322t322 124q88 5 317 5t317 -5q208 -10 322 -124t124 -322q5 -88 5 -317z"
      ],
      "\uf16e": [
        1536.0,
        "M1248 1408q119 0 203.5 -84.5t84.5 -203.5v-960q0 -119 -84.5 -203.5t-203.5 -84.5h-960q-119 0 -203.5 84.5t-84.5 203.5v960q0 119 84.5 203.5t203.5 84.5h960zM698 640q0 88 -62 150t-150 62t-150 -62t-62 -150t62 -150t150 -62t150 62t62 150zM1262 640q0 88 -62 150 t-150 62t-150 -62t-62 -150t62 -150t150 -62t150 62t62 150z"
      ],
      "\uf170": [
        1536.0,
        "M768 914l201 -306h-402zM1133 384h94l-459 691l-459 -691h94l104 160h522zM1536 640q0 -209 -103 -385.5t-279.5 -279.5t-385.5 -103t-385.5 103t-279.5 279.5t-103 385.5t103 385.5t279.5 279.5t385.5 103t385.5 -103t279.5 -279.5t103 -385.5z"
      ],
      "\uf171": [
        1408,
        "M815 677q8 -63 -50.5 -101t-111.5 -6q-39 17 -53.5 58t-0.5 82t52 58q36 18 72.5 12t64 -35.5t27.5 -67.5zM926 698q-14 107 -113 164t-197 13q-63 -28 -100.5 -88.5t-34.5 -129.5q4 -91 77.5 -155t165.5 -56q91 8 152 84t50 168zM1165 1240q-20 27 -56 44.5t-58 22 t-71 12.5q-291 47 -566 -2q-43 -7 -66 -12t-55 -22t-50 -43q30 -28 76 -45.5t73.5 -22t87.5 -11.5q228 -29 448 -1q63 8 89.5 12t72.5 21.5t75 46.5zM1222 205q-8 -26 -15.5 -76.5t-14 -84t-28.5 -70t-58 -56.5q-86 -48 -189.5 -71.5t-202 -22t-201.5 18.5q-46 8 -81.5 18 t-76.5 27t-73 43.5t-52 61.5q-25 96 -57 292l6 16l18 9q223 -148 506.5 -148t507.5 148q21 -6 24 -23t-5 -45t-8 -37zM1403 1166q-26 -167 -111 -655q-5 -30 -27 -56t-43.5 -40t-54.5 -31q-252 -126 -610 -88q-248 27 -394 139q-15 12 -25.5 26.5t-17 35t-9 34t-6 39.5 t-5.5 35q-9 50 -26.5 150t-28 161.5t-23.5 147.5t-22 158q3 26 17.5 48.5t31.5 37.5t45 30t46 22.5t48 18.5q125 46 313 64q379 37 676 -50q155 -46 215 -122q16 -20 16.5 -51t-5.5 -54z"
      ],
      "\uf172": [
        1536.0,
        "M848 666q0 43 -41 66t-77 1q-43 -20 -42.5 -72.5t43.5 -70.5q39 -23 81 4t36 72zM928 682q8 -66 -36 -121t-110 -61t-119 40t-56 113q-2 49 25.5 93t72.5 64q70 31 141.5 -10t81.5 -118zM1100 1073q-20 -21 -53.5 -34t-53 -16t-63.5 -8q-155 -20 -324 0q-44 6 -63 9.5 t-52.5 16t-54.5 32.5q13 19 36 31t40 15.5t47 8.5q198 35 408 1q33 -5 51 -8.5t43 -16t39 -31.5zM1142 327q0 7 5.5 26.5t3 32t-17.5 16.5q-161 -106 -365 -106t-366 106l-12 -6l-5 -12q26 -154 41 -210q47 -81 204 -108q249 -46 428 53q34 19 49 51.5t22.5 85.5t12.5 71z M1272 1020q9 53 -8 75q-43 55 -155 88q-216 63 -487 36q-132 -12 -226 -46q-38 -15 -59.5 -25t-47 -34t-29.5 -54q8 -68 19 -138t29 -171t24 -137q1 -5 5 -31t7 -36t12 -27t22 -28q105 -80 284 -100q259 -28 440 63q24 13 39.5 23t31 29t19.5 40q48 267 80 473zM1536 1120 v-960q0 -119 -84.5 -203.5t-203.5 -84.5h-960q-119 0 -203.5 84.5t-84.5 203.5v960q0 119 84.5 203.5t203.5 84.5h960q119 0 203.5 -84.5t84.5 -203.5z"
      ],
      "\uf173": [
        1024,
        "M944 207l80 -237q-23 -35 -111 -66t-177 -32q-104 -2 -190.5 26t-142.5 74t-95 106t-55.5 120t-16.5 118v544h-168v215q72 26 129 69.5t91 90t58 102t34 99t15 88.5q1 5 4.5 8.5t7.5 3.5h244v-424h333v-252h-334v-518q0 -30 6.5 -56t22.5 -52.5t49.5 -41.5t81.5 -14 q78 2 134 29z"
      ],
      "\uf174": [
        1536.0,
        "M1136 75l-62 183q-44 -22 -103 -22q-36 -1 -62 10.5t-38.5 31.5t-17.5 40.5t-5 43.5v398h257v194h-256v326h-188q-8 0 -9 -10q-5 -44 -17.5 -87t-39 -95t-77 -95t-118.5 -68v-165h130v-418q0 -57 21.5 -115t65 -111t121 -85.5t176.5 -30.5q69 1 136.5 25t85.5 50z M1536 1120v-960q0 -119 -84.5 -203.5t-203.5 -84.5h-960q-119 0 -203.5 84.5t-84.5 203.5v960q0 119 84.5 203.5t203.5 84.5h960q119 0 203.5 -84.5t84.5 -203.5z"
      ],
      "\uf175": [
        768,
        "M765 237q8 -19 -5 -35l-350 -384q-10 -10 -23 -10q-14 0 -24 10l-355 384q-13 16 -5 35q9 19 29 19h224v1248q0 14 9 23t23 9h192q14 0 23 -9t9 -23v-1248h224q21 0 29 -19z"
      ],
      "\uf176": [
        768,
        "M765 1043q-9 -19 -29 -19h-224v-1248q0 -14 -9 -23t-23 -9h-192q-14 0 -23 9t-9 23v1248h-224q-21 0 -29 19t5 35l350 384q10 10 23 10q14 0 24 -10l355 -384q13 -16 5 -35z"
      ],
      "\uf177": [
        1792,
        "M1792 736v-192q0 -14 -9 -23t-23 -9h-1248v-224q0 -21 -19 -29t-35 5l-384 350q-10 10 -10 23q0 14 10 24l384 354q16 14 35 6q19 -9 19 -29v-224h1248q14 0 23 -9t9 -23z"
      ],
      "\uf178": [
        1792,
        "M1728 643q0 -14 -10 -24l-384 -354q-16 -14 -35 -6q-19 9 -19 29v224h-1248q-14 0 -23 9t-9 23v192q0 14 9 23t23 9h1248v224q0 21 19 29t35 -5l384 -350q10 -10 10 -23z"
      ],
      "\uf179": [
        1408,
        "M1393 321q-39 -125 -123 -250q-129 -196 -257 -196q-49 0 -140 32q-86 32 -151 32q-61 0 -142 -33q-81 -34 -132 -34q-152 0 -301 259q-147 261 -147 503q0 228 113 374q113 144 284 144q72 0 177 -30q104 -30 138 -30q45 0 143 34q102 34 173 34q119 0 213 -65 q52 -36 104 -100q-79 -67 -114 -118q-65 -94 -65 -207q0 -124 69 -223t158 -126zM1017 1494q0 -61 -29 -136q-30 -75 -93 -138q-54 -54 -108 -72q-37 -11 -104 -17q3 149 78 257q74 107 250 148q1 -3 2.5 -11t2.5 -11q0 -4 0.5 -10t0.5 -10z"
      ],
      "\uf17a": [
        1664,
        "M682 530v-651l-682 94v557h682zM682 1273v-659h-682v565zM1664 530v-786l-907 125v661h907zM1664 1408v-794h-907v669z"
      ],
      "\uf17b": [
        1408,
        "M493 1053q16 0 27.5 11.5t11.5 27.5t-11.5 27.5t-27.5 11.5t-27 -11.5t-11 -27.5t11 -27.5t27 -11.5zM915 1053q16 0 27 11.5t11 27.5t-11 27.5t-27 11.5t-27.5 -11.5t-11.5 -27.5t11.5 -27.5t27.5 -11.5zM103 869q42 0 72 -30t30 -72v-430q0 -43 -29.5 -73t-72.5 -30 t-73 30t-30 73v430q0 42 30 72t73 30zM1163 850v-666q0 -46 -32 -78t-77 -32h-75v-227q0 -43 -30 -73t-73 -30t-73 30t-30 73v227h-138v-227q0 -43 -30 -73t-73 -30q-42 0 -72 30t-30 73l-1 227h-74q-46 0 -78 32t-32 78v666h918zM931 1255q107 -55 171 -153.5t64 -215.5 h-925q0 117 64 215.5t172 153.5l-71 131q-7 13 5 20q13 6 20 -6l72 -132q95 42 201 42t201 -42l72 132q7 12 20 6q12 -7 5 -20zM1408 767v-430q0 -43 -30 -73t-73 -30q-42 0 -72 30t-30 73v430q0 43 30 72.5t72 29.5q43 0 73 -29.5t30 -72.5z"
      ],
      "\uf17c": [
        1536.0,
        "M663 1125q-11 -1 -15.5 -10.5t-8.5 -9.5q-5 -1 -5 5q0 12 19 15h10zM750 1111q-4 -1 -11.5 6.5t-17.5 4.5q24 11 32 -2q3 -6 -3 -9zM399 684q-4 1 -6 -3t-4.5 -12.5t-5.5 -13.5t-10 -13q-10 -11 -1 -12q4 -1 12.5 7t12.5 18q1 3 2 7t2 6t1.5 4.5t0.5 4v3t-1 2.5t-3 2z M1254 325q0 18 -55 42q4 15 7.5 27.5t5 26t3 21.5t0.5 22.5t-1 19.5t-3.5 22t-4 20.5t-5 25t-5.5 26.5q-10 48 -47 103t-72 75q24 -20 57 -83q87 -162 54 -278q-11 -40 -50 -42q-31 -4 -38.5 18.5t-8 83.5t-11.5 107q-9 39 -19.5 69t-19.5 45.5t-15.5 24.5t-13 15t-7.5 7 q-14 62 -31 103t-29.5 56t-23.5 33t-15 40q-4 21 6 53.5t4.5 49.5t-44.5 25q-15 3 -44.5 18t-35.5 16q-8 1 -11 26t8 51t36 27q37 3 51 -30t4 -58q-11 -19 -2 -26.5t30 -0.5q13 4 13 36v37q-5 30 -13.5 50t-21 30.5t-23.5 15t-27 7.5q-107 -8 -89 -134q0 -15 -1 -15 q-9 9 -29.5 10.5t-33 -0.5t-15.5 5q1 57 -16 90t-45 34q-27 1 -41.5 -27.5t-16.5 -59.5q-1 -15 3.5 -37t13 -37.5t15.5 -13.5q10 3 16 14q4 9 -7 8q-7 0 -15.5 14.5t-9.5 33.5q-1 22 9 37t34 14q17 0 27 -21t9.5 -39t-1.5 -22q-22 -15 -31 -29q-8 -12 -27.5 -23.5 t-20.5 -12.5q-13 -14 -15.5 -27t7.5 -18q14 -8 25 -19.5t16 -19t18.5 -13t35.5 -6.5q47 -2 102 15q2 1 23 7t34.5 10.5t29.5 13t21 17.5q9 14 20 8q5 -3 6.5 -8.5t-3 -12t-16.5 -9.5q-20 -6 -56.5 -21.5t-45.5 -19.5q-44 -19 -70 -23q-25 -5 -79 2q-10 2 -9 -2t17 -19 q25 -23 67 -22q17 1 36 7t36 14t33.5 17.5t30 17t24.5 12t17.5 2.5t8.5 -11q0 -2 -1 -4.5t-4 -5t-6 -4.5t-8.5 -5t-9 -4.5t-10 -5t-9.5 -4.5q-28 -14 -67.5 -44t-66.5 -43t-49 -1q-21 11 -63 73q-22 31 -25 22q-1 -3 -1 -10q0 -25 -15 -56.5t-29.5 -55.5t-21 -58t11.5 -63 q-23 -6 -62.5 -90t-47.5 -141q-2 -18 -1.5 -69t-5.5 -59q-8 -24 -29 -3q-32 31 -36 94q-2 28 4 56q4 19 -1 18q-2 -1 -4 -5q-36 -65 10 -166q5 -12 25 -28t24 -20q20 -23 104 -90.5t93 -76.5q16 -15 17.5 -38t-14 -43t-45.5 -23q8 -15 29 -44.5t28 -54t7 -70.5q46 24 7 92 q-4 8 -10.5 16t-9.5 12t-2 6q3 5 13 9.5t20 -2.5q46 -52 166 -36q133 15 177 87q23 38 34 30q12 -6 10 -52q-1 -25 -23 -92q-9 -23 -6 -37.5t24 -15.5q3 19 14.5 77t13.5 90q2 21 -6.5 73.5t-7.5 97t23 70.5q15 18 51 18q1 37 34.5 53t72.5 10.5t60 -22.5zM626 1152 q3 17 -2.5 30t-11.5 15q-9 2 -9 -7q2 -5 5 -6q10 0 7 -15q-3 -20 8 -20q3 0 3 3zM1045 955q-2 8 -6.5 11.5t-13 5t-14.5 5.5q-5 3 -9.5 8t-7 8t-5.5 6.5t-4 4t-4 -1.5q-14 -16 7 -43.5t39 -31.5q9 -1 14.5 8t3.5 20zM867 1168q0 11 -5 19.5t-11 12.5t-9 3q-6 0 -8 -2t0 -4 t5 -3q14 -4 18 -31q0 -3 8 2q2 2 2 3zM921 1401q0 2 -2.5 5t-9 7t-9.5 6q-15 15 -24 15q-9 -1 -11.5 -7.5t-1 -13t-0.5 -12.5q-1 -4 -6 -10.5t-6 -9t3 -8.5q4 -3 8 0t11 9t15 9q1 1 9 1t15 2t9 7zM1486 60q20 -12 31 -24.5t12 -24t-2.5 -22.5t-15.5 -22t-23.5 -19.5 t-30 -18.5t-31.5 -16.5t-32 -15.5t-27 -13q-38 -19 -85.5 -56t-75.5 -64q-17 -16 -68 -19.5t-89 14.5q-18 9 -29.5 23.5t-16.5 25.5t-22 19.5t-47 9.5q-44 1 -130 1q-19 0 -57 -1.5t-58 -2.5q-44 -1 -79.5 -15t-53.5 -30t-43.5 -28.5t-53.5 -11.5q-29 1 -111 31t-146 43 q-19 4 -51 9.5t-50 9t-39.5 9.5t-33.5 14.5t-17 19.5q-10 23 7 66.5t18 54.5q1 16 -4 40t-10 42.5t-4.5 36.5t10.5 27q14 12 57 14t60 12q30 18 42 35t12 51q21 -73 -32 -106q-32 -20 -83 -15q-34 3 -43 -10q-13 -15 5 -57q2 -6 8 -18t8.5 -18t4.5 -17t1 -22q0 -15 -17 -49 t-14 -48q3 -17 37 -26q20 -6 84.5 -18.5t99.5 -20.5q24 -6 74 -22t82.5 -23t55.5 -4q43 6 64.5 28t23 48t-7.5 58.5t-19 52t-20 36.5q-121 190 -169 242q-68 74 -113 40q-11 -9 -15 15q-3 16 -2 38q1 29 10 52t24 47t22 42q8 21 26.5 72t29.5 78t30 61t39 54 q110 143 124 195q-12 112 -16 310q-2 90 24 151.5t106 104.5q39 21 104 21q53 1 106 -13.5t89 -41.5q57 -42 91.5 -121.5t29.5 -147.5q-5 -95 30 -214q34 -113 133 -218q55 -59 99.5 -163t59.5 -191q8 -49 5 -84.5t-12 -55.5t-20 -22q-10 -2 -23.5 -19t-27 -35.5 t-40.5 -33.5t-61 -14q-18 1 -31.5 5t-22.5 13.5t-13.5 15.5t-11.5 20.5t-9 19.5q-22 37 -41 30t-28 -49t7 -97q20 -70 1 -195q-10 -65 18 -100.5t73 -33t85 35.5q59 49 89.5 66.5t103.5 42.5q53 18 77 36.5t18.5 34.5t-25 28.5t-51.5 23.5q-33 11 -49.5 48t-15 72.5 t15.5 47.5q1 -31 8 -56.5t14.5 -40.5t20.5 -28.5t21 -19t21.5 -13t16.5 -9.5z"
      ],
      "\uf17d": [
        1536.0,
        "M1024 36q-42 241 -140 498h-2l-2 -1q-16 -6 -43 -16.5t-101 -49t-137 -82t-131 -114.5t-103 -148l-15 11q184 -150 418 -150q132 0 256 52zM839 643q-21 49 -53 111q-311 -93 -673 -93q-1 -7 -1 -21q0 -124 44 -236.5t124 -201.5q50 89 123.5 166.5t142.5 124.5t130.5 81 t99.5 48l37 13q4 1 13 3.5t13 4.5zM732 855q-120 213 -244 378q-138 -65 -234 -186t-128 -272q302 0 606 80zM1416 536q-210 60 -409 29q87 -239 128 -469q111 75 185 189.5t96 250.5zM611 1277q-1 0 -2 -1q1 1 2 1zM1201 1132q-185 164 -433 164q-76 0 -155 -19 q131 -170 246 -382q69 26 130 60.5t96.5 61.5t65.5 57t37.5 40.5zM1424 647q-3 232 -149 410l-1 -1q-9 -12 -19 -24.5t-43.5 -44.5t-71 -60.5t-100 -65t-131.5 -64.5q25 -53 44 -95q2 -5 6.5 -17t7.5 -17q36 5 74.5 7t73.5 2t69 -1.5t64 -4t56.5 -5.5t48 -6.5t36.5 -6 t25 -4.5zM1536 640q0 -209 -103 -385.5t-279.5 -279.5t-385.5 -103t-385.5 103t-279.5 279.5t-103 385.5t103 385.5t279.5 279.5t385.5 103t385.5 -103t279.5 -279.5t103 -385.5z"
      ],
      "\uf17e": [
        1536.0,
        "M1173 473q0 50 -19.5 91.5t-48.5 68.5t-73 49t-82.5 34t-87.5 23l-104 24q-30 7 -44 10.5t-35 11.5t-30 16t-16.5 21t-7.5 30q0 77 144 77q43 0 77 -12t54 -28.5t38 -33.5t40 -29t48 -12q47 0 75.5 32t28.5 77q0 55 -56 99.5t-142 67.5t-182 23q-68 0 -132 -15.5 t-119.5 -47t-89 -87t-33.5 -128.5q0 -61 19 -106.5t56 -75.5t80 -48.5t103 -32.5l146 -36q90 -22 112 -36q32 -20 32 -60q0 -39 -40 -64.5t-105 -25.5q-51 0 -91.5 16t-65 38.5t-45.5 45t-46 38.5t-54 16q-50 0 -75.5 -30t-25.5 -75q0 -92 122 -157.5t291 -65.5 q73 0 140 18.5t122.5 53.5t88.5 93.5t33 131.5zM1536 256q0 -159 -112.5 -271.5t-271.5 -112.5q-130 0 -234 80q-77 -16 -150 -16q-143 0 -273.5 55.5t-225 150t-150 225t-55.5 273.5q0 73 16 150q-80 104 -80 234q0 159 112.5 271.5t271.5 112.5q130 0 234 -80 q77 16 150 16q143 0 273.5 -55.5t225 -150t150 -225t55.5 -273.5q0 -73 -16 -150q80 -104 80 -234z"
      ],
      "\uf180": [
        1280,
        "M1000 1102l37 194q5 23 -9 40t-35 17h-712q-23 0 -38.5 -17t-15.5 -37v-1101q0 -7 6 -1l291 352q23 26 38 33.5t48 7.5h239q22 0 37 14.5t18 29.5q24 130 37 191q4 21 -11.5 40t-36.5 19h-294q-29 0 -48 19t-19 48v42q0 29 19 47.5t48 18.5h346q18 0 35 13.5t20 29.5z M1227 1324q-15 -73 -53.5 -266.5t-69.5 -350t-35 -173.5q-6 -22 -9 -32.5t-14 -32.5t-24.5 -33t-38.5 -21t-58 -10h-271q-13 0 -22 -10q-8 -9 -426 -494q-22 -25 -58.5 -28.5t-48.5 5.5q-55 22 -55 98v1410q0 55 38 102.5t120 47.5h888q95 0 127 -53t10 -159zM1227 1324 l-158 -790q4 17 35 173.5t69.5 350t53.5 266.5z"
      ],
      "\uf181": [
        1536.0,
        "M704 192v1024q0 14 -9 23t-23 9h-480q-14 0 -23 -9t-9 -23v-1024q0 -14 9 -23t23 -9h480q14 0 23 9t9 23zM1376 576v640q0 14 -9 23t-23 9h-480q-14 0 -23 -9t-9 -23v-640q0 -14 9 -23t23 -9h480q14 0 23 9t9 23zM1536 1344v-1408q0 -26 -19 -45t-45 -19h-1408 q-26 0 -45 19t-19 45v1408q0 26 19 45t45 19h1408q26 0 45 -19t19 -45z"
      ],
      "\uf182": [
        1280,
        "M1280 480q0 -40 -28 -68t-68 -28q-51 0 -80 43l-227 341h-45v-132l247 -411q9 -15 9 -33q0 -26 -19 -45t-45 -19h-192v-272q0 -46 -33 -79t-79 -33h-160q-46 0 -79 33t-33 79v272h-192q-26 0 -45 19t-19 45q0 18 9 33l247 411v132h-45l-227 -341q-29 -43 -80 -43 q-40 0 -68 28t-28 68q0 29 16 53l256 384q73 107 176 107h384q103 0 176 -107l256 -384q16 -24 16 -53zM864 1280q0 -93 -65.5 -158.5t-158.5 -65.5t-158.5 65.5t-65.5 158.5t65.5 158.5t158.5 65.5t158.5 -65.5t65.5 -158.5z"
      ],
      "\uf183": [
        1024,
        "M1024 832v-416q0 -40 -28 -68t-68 -28t-68 28t-28 68v352h-64v-912q0 -46 -33 -79t-79 -33t-79 33t-33 79v464h-64v-464q0 -46 -33 -79t-79 -33t-79 33t-33 79v912h-64v-352q0 -40 -28 -68t-68 -28t-68 28t-28 68v416q0 80 56 136t136 56h640q80 0 136 -56t56 -136z M736 1280q0 -93 -65.5 -158.5t-158.5 -65.5t-158.5 65.5t-65.5 158.5t65.5 158.5t158.5 65.5t158.5 -65.5t65.5 -158.5z"
      ],
      "\uf184": [
        1536.0,
        "M773 234l350 473q16 22 24.5 59t-6 85t-61.5 79q-40 26 -83 25.5t-73.5 -17.5t-54.5 -45q-36 -40 -96 -40q-59 0 -95 40q-24 28 -54.5 45t-73.5 17.5t-84 -25.5q-46 -31 -60.5 -79t-6 -85t24.5 -59zM1536 640q0 -209 -103 -385.5t-279.5 -279.5t-385.5 -103t-385.5 103 t-279.5 279.5t-103 385.5t103 385.5t279.5 279.5t385.5 103t385.5 -103t279.5 -279.5t103 -385.5z"
      ],
      "\uf185": [
        1792,
        "M1472 640q0 117 -45.5 223.5t-123 184t-184 123t-223.5 45.5t-223.5 -45.5t-184 -123t-123 -184t-45.5 -223.5t45.5 -223.5t123 -184t184 -123t223.5 -45.5t223.5 45.5t184 123t123 184t45.5 223.5zM1748 363q-4 -15 -20 -20l-292 -96v-306q0 -16 -13 -26q-15 -10 -29 -4 l-292 94l-180 -248q-10 -13 -26 -13t-26 13l-180 248l-292 -94q-14 -6 -29 4q-13 10 -13 26v306l-292 96q-16 5 -20 20q-5 17 4 29l180 248l-180 248q-9 13 -4 29q4 15 20 20l292 96v306q0 16 13 26q15 10 29 4l292 -94l180 248q9 12 26 12t26 -12l180 -248l292 94 q14 6 29 -4q13 -10 13 -26v-306l292 -96q16 -5 20 -20q5 -16 -4 -29l-180 -248l180 -248q9 -12 4 -29z"
      ],
      "\uf186": [
        1536.0,
        "M1262 233q-54 -9 -110 -9q-182 0 -337 90t-245 245t-90 337q0 192 104 357q-201 -60 -328.5 -229t-127.5 -384q0 -130 51 -248.5t136.5 -204t204 -136.5t248.5 -51q144 0 273.5 61.5t220.5 171.5zM1465 318q-94 -203 -283.5 -324.5t-413.5 -121.5q-156 0 -298 61 t-245 164t-164 245t-61 298q0 153 57.5 292.5t156 241.5t235.5 164.5t290 68.5q44 2 61 -39q18 -41 -15 -72q-86 -78 -131.5 -181.5t-45.5 -218.5q0 -148 73 -273t198 -198t273 -73q118 0 228 51q41 18 72 -13q14 -14 17.5 -34t-4.5 -38z"
      ],
      "\uf187": [
        1792,
        "M1088 704q0 26 -19 45t-45 19h-256q-26 0 -45 -19t-19 -45t19 -45t45 -19h256q26 0 45 19t19 45zM1664 896v-960q0 -26 -19 -45t-45 -19h-1408q-26 0 -45 19t-19 45v960q0 26 19 45t45 19h1408q26 0 45 -19t19 -45zM1728 1344v-256q0 -26 -19 -45t-45 -19h-1536 q-26 0 -45 19t-19 45v256q0 26 19 45t45 19h1536q26 0 45 -19t19 -45z"
      ],
      "\uf188": [
        1664,
        "M1632 576q0 -26 -19 -45t-45 -19h-224q0 -171 -67 -290l208 -209q19 -19 19 -45t-19 -45q-18 -19 -45 -19t-45 19l-198 197q-5 -5 -15 -13t-42 -28.5t-65 -36.5t-82 -29t-97 -13v896h-128v-896q-51 0 -101.5 13.5t-87 33t-66 39t-43.5 32.5l-15 14l-183 -207 q-20 -21 -48 -21q-24 0 -43 16q-19 18 -20.5 44.5t15.5 46.5l202 227q-58 114 -58 274h-224q-26 0 -45 19t-19 45t19 45t45 19h224v294l-173 173q-19 19 -19 45t19 45t45 19t45 -19l173 -173h844l173 173q19 19 45 19t45 -19t19 -45t-19 -45l-173 -173v-294h224q26 0 45 -19 t19 -45zM1152 1152h-640q0 133 93.5 226.5t226.5 93.5t226.5 -93.5t93.5 -226.5z"
      ],
      "\uf189": [
        1920,
        "M1917 1016q23 -64 -150 -294q-24 -32 -65 -85q-40 -51 -55 -72t-30.5 -49.5t-12 -42t13 -34.5t32.5 -43t57 -53q4 -2 5 -4q141 -131 191 -221q3 -5 6.5 -12.5t7 -26.5t-0.5 -34t-25 -27.5t-59 -12.5l-256 -4q-24 -5 -56 5t-52 22l-20 12q-30 21 -70 64t-68.5 77.5t-61 58 t-56.5 15.5q-3 -1 -8 -3.5t-17 -14.5t-21.5 -29.5t-17 -52t-6.5 -77.5q0 -15 -3.5 -27.5t-7.5 -18.5l-4 -5q-18 -19 -53 -22h-115q-71 -4 -146 16.5t-131.5 53t-103 66t-70.5 57.5l-25 24q-10 10 -27.5 30t-71.5 91t-106 151t-122.5 211t-130.5 272q-6 16 -6 27t3 16l4 6 q15 19 57 19l274 2q12 -2 23 -6.5t16 -8.5l5 -3q16 -11 24 -32q20 -50 46 -103.5t41 -81.5l16 -29q29 -60 56 -104t48.5 -68.5t41.5 -38.5t34 -14t27 5q2 1 5 5t12 22t13.5 47t9.5 81t0 125q-2 40 -9 73t-14 46l-6 12q-25 34 -85 43q-13 2 5 24q16 19 38 30q53 26 239 24 q82 -1 135 -13q20 -5 33.5 -13.5t20.5 -24t10.5 -32t3.5 -45.5t-1 -55t-2.5 -70.5t-1.5 -82.5q0 -11 -1 -42t-0.5 -48t3.5 -40.5t11.5 -39t22.5 -24.5q8 -2 17 -4t26 11t38 34.5t52 67t68 107.5q60 104 107 225q4 10 10 17.5t11 10.5l4 3l5 2.5t13 3t20 0.5l288 2 q39 5 64 -2.5t31 -16.5z"
      ],
      "\uf18a": [
        1792,
        "M675 252q21 34 11 69t-45 50q-34 14 -73 1t-60 -46q-22 -34 -13 -68.5t43 -50.5t74.5 -2.5t62.5 47.5zM769 373q8 13 3.5 26.5t-17.5 18.5q-14 5 -28.5 -0.5t-21.5 -18.5q-17 -31 13 -45q14 -5 29 0.5t22 18.5zM943 266q-45 -102 -158 -150t-224 -12 q-107 34 -147.5 126.5t6.5 187.5q47 93 151.5 139t210.5 19q111 -29 158.5 -119.5t2.5 -190.5zM1255 426q-9 96 -89 170t-208.5 109t-274.5 21q-223 -23 -369.5 -141.5t-132.5 -264.5q9 -96 89 -170t208.5 -109t274.5 -21q223 23 369.5 141.5t132.5 264.5zM1563 422 q0 -68 -37 -139.5t-109 -137t-168.5 -117.5t-226 -83t-270.5 -31t-275 33.5t-240.5 93t-171.5 151t-65 199.5q0 115 69.5 245t197.5 258q169 169 341.5 236t246.5 -7q65 -64 20 -209q-4 -14 -1 -20t10 -7t14.5 0.5t13.5 3.5l6 2q139 59 246 59t153 -61q45 -63 0 -178 q-2 -13 -4.5 -20t4.5 -12.5t12 -7.5t17 -6q57 -18 103 -47t80 -81.5t34 -116.5zM1489 1046q42 -47 54.5 -108.5t-6.5 -117.5q-8 -23 -29.5 -34t-44.5 -4q-23 8 -34 29.5t-4 44.5q20 63 -24 111t-107 35q-24 -5 -45 8t-25 37q-5 24 8 44.5t37 25.5q60 13 119 -5.5t101 -65.5z M1670 1209q87 -96 112.5 -222.5t-13.5 -241.5q-9 -27 -34 -40t-52 -4t-40 34t-5 52q28 82 10 172t-80 158q-62 69 -148 95.5t-173 8.5q-28 -6 -52 9.5t-30 43.5t9.5 51.5t43.5 29.5q123 26 244 -11.5t208 -134.5z"
      ],
      "\uf18b": [
        1536.0,
        "M1133 -34q-171 -94 -368 -94q-196 0 -367 94q138 87 235.5 211t131.5 268q35 -144 132.5 -268t235.5 -211zM638 1394v-485q0 -252 -126.5 -459.5t-330.5 -306.5q-181 215 -181 495q0 187 83.5 349.5t229.5 269.5t325 137zM1536 638q0 -280 -181 -495 q-204 99 -330.5 306.5t-126.5 459.5v485q179 -30 325 -137t229.5 -269.5t83.5 -349.5z"
      ],
      "\uf18c": [
        1408,
        "M1402 433q-32 -80 -76 -138t-91 -88.5t-99 -46.5t-101.5 -14.5t-96.5 8.5t-86.5 22t-69.5 27.5t-46 22.5l-17 10q-113 -228 -289.5 -359.5t-384.5 -132.5q-19 0 -32 13t-13 32t13 31.5t32 12.5q173 1 322.5 107.5t251.5 294.5q-36 -14 -72 -23t-83 -13t-91 2.5t-93 28.5 t-92 59t-84.5 100t-74.5 146q114 47 214 57t167.5 -7.5t124.5 -56.5t88.5 -77t56.5 -82q53 131 79 291q-7 -1 -18 -2.5t-46.5 -2.5t-69.5 0.5t-81.5 10t-88.5 23t-84 42.5t-75 65t-54.5 94.5t-28.5 127.5q70 28 133.5 36.5t112.5 -1t92 -30t73.5 -50t56 -61t42 -63t27.5 -56 t16 -39.5l4 -16q12 122 12 195q-8 6 -21.5 16t-49 44.5t-63.5 71.5t-54 93t-33 112.5t12 127t70 138.5q73 -25 127.5 -61.5t84.5 -76.5t48 -85t20.5 -89t-0.5 -85.5t-13 -76.5t-19 -62t-17 -42l-7 -15q1 -4 1 -50t-1 -72q3 7 10 18.5t30.5 43t50.5 58t71 55.5t91.5 44.5 t112 14.5t132.5 -24q-2 -78 -21.5 -141.5t-50 -104.5t-69.5 -71.5t-81.5 -45.5t-84.5 -24t-80 -9.5t-67.5 1t-46.5 4.5l-17 3q-23 -147 -73 -283q6 7 18 18.5t49.5 41t77.5 52.5t99.5 42t117.5 20t129 -23.5t137 -77.5z"
      ],
      "\uf18d": [
        1280,
        "M1259 283v-66q0 -85 -57.5 -144.5t-138.5 -59.5h-57l-260 -269v269h-529q-81 0 -138.5 59.5t-57.5 144.5v66h1238zM1259 609v-255h-1238v255h1238zM1259 937v-255h-1238v255h1238zM1259 1077v-67h-1238v67q0 84 57.5 143.5t138.5 59.5h846q81 0 138.5 -59.5t57.5 -143.5z "
      ],
      "\uf18e": [
        1536.0,
        "M1152 640q0 -14 -9 -23l-320 -320q-9 -9 -23 -9q-13 0 -22.5 9.5t-9.5 22.5v192h-352q-13 0 -22.5 9.5t-9.5 22.5v192q0 13 9.5 22.5t22.5 9.5h352v192q0 14 9 23t23 9q12 0 24 -10l319 -319q9 -9 9 -23zM1312 640q0 148 -73 273t-198 198t-273 73t-273 -73t-198 -198 t-73 -273t73 -273t198 -198t273 -73t273 73t198 198t73 273zM1536 640q0 -209 -103 -385.5t-279.5 -279.5t-385.5 -103t-385.5 103t-279.5 279.5t-103 385.5t103 385.5t279.5 279.5t385.5 103t385.5 -103t279.5 -279.5t103 -385.5z"
      ],
      "\uf190": [
        1536.0,
        "M1152 736v-192q0 -13 -9.5 -22.5t-22.5 -9.5h-352v-192q0 -14 -9 -23t-23 -9q-12 0 -24 10l-319 319q-9 9 -9 23t9 23l320 320q9 9 23 9q13 0 22.5 -9.5t9.5 -22.5v-192h352q13 0 22.5 -9.5t9.5 -22.5zM1312 640q0 148 -73 273t-198 198t-273 73t-273 -73t-198 -198 t-73 -273t73 -273t198 -198t273 -73t273 73t198 198t73 273zM1536 640q0 -209 -103 -385.5t-279.5 -279.5t-385.5 -103t-385.5 103t-279.5 279.5t-103 385.5t103 385.5t279.5 279.5t385.5 103t385.5 -103t279.5 -279.5t103 -385.5z"
      ],
      "\uf191": [
        1536.0,
        "M1024 960v-640q0 -26 -19 -45t-45 -19q-20 0 -37 12l-448 320q-27 19 -27 52t27 52l448 320q17 12 37 12q26 0 45 -19t19 -45zM1280 160v960q0 13 -9.5 22.5t-22.5 9.5h-960q-13 0 -22.5 -9.5t-9.5 -22.5v-960q0 -13 9.5 -22.5t22.5 -9.5h960q13 0 22.5 9.5t9.5 22.5z M1536 1120v-960q0 -119 -84.5 -203.5t-203.5 -84.5h-960q-119 0 -203.5 84.5t-84.5 203.5v960q0 119 84.5 203.5t203.5 84.5h960q119 0 203.5 -84.5t84.5 -203.5z"
      ],
      "\uf192": [
        1536.0,
        "M1024 640q0 -106 -75 -181t-181 -75t-181 75t-75 181t75 181t181 75t181 -75t75 -181zM768 1184q-148 0 -273 -73t-198 -198t-73 -273t73 -273t198 -198t273 -73t273 73t198 198t73 273t-73 273t-198 198t-273 73zM1536 640q0 -209 -103 -385.5t-279.5 -279.5 t-385.5 -103t-385.5 103t-279.5 279.5t-103 385.5t103 385.5t279.5 279.5t385.5 103t385.5 -103t279.5 -279.5t103 -385.5z"
      ],
      "\uf193": [
        1664,
        "M1023 349l102 -204q-58 -179 -210 -290t-339 -111q-156 0 -288.5 77.5t-210 210t-77.5 288.5q0 181 104.5 330t274.5 211l17 -131q-122 -54 -195 -165.5t-73 -244.5q0 -185 131.5 -316.5t316.5 -131.5q126 0 232.5 65t165 175.5t49.5 236.5zM1571 249l58 -114l-256 -128 q-13 -7 -29 -7q-40 0 -57 35l-239 477h-472q-24 0 -42.5 16.5t-21.5 40.5l-96 779q-2 17 6 42q14 51 57 82.5t97 31.5q66 0 113 -47t47 -113q0 -69 -52 -117.5t-120 -41.5l37 -289h423v-128h-407l16 -128h455q40 0 57 -35l228 -455z"
      ],
      "\uf194": [
        1536.0,
        "M1292 898q10 216 -161 222q-231 8 -312 -261q44 19 82 19q85 0 74 -96q-4 -57 -74 -167t-105 -110q-43 0 -82 169q-13 54 -45 255q-30 189 -160 177q-59 -7 -164 -100l-81 -72l-81 -72l52 -67q76 52 87 52q57 0 107 -179q15 -55 45 -164.5t45 -164.5q68 -179 164 -179 q157 0 383 294q220 283 226 444zM1536 1120v-960q0 -119 -84.5 -203.5t-203.5 -84.5h-960q-119 0 -203.5 84.5t-84.5 203.5v960q0 119 84.5 203.5t203.5 84.5h960q119 0 203.5 -84.5t84.5 -203.5z"
      ],
      "\uf195": [
        1152,
        "M1152 704q0 -191 -94.5 -353t-256.5 -256.5t-353 -94.5h-160q-14 0 -23 9t-9 23v611l-215 -66q-3 -1 -9 -1q-10 0 -19 6q-13 10 -13 26v128q0 23 23 31l233 71v93l-215 -66q-3 -1 -9 -1q-10 0 -19 6q-13 10 -13 26v128q0 23 23 31l233 71v250q0 14 9 23t23 9h160 q14 0 23 -9t9 -23v-181l375 116q15 5 28 -5t13 -26v-128q0 -23 -23 -31l-393 -121v-93l375 116q15 5 28 -5t13 -26v-128q0 -23 -23 -31l-393 -121v-487q188 13 318 151t130 328q0 14 9 23t23 9h160q14 0 23 -9t9 -23z"
      ],
      "\uf196": [
        1408,
        "M1152 736v-64q0 -14 -9 -23t-23 -9h-352v-352q0 -14 -9 -23t-23 -9h-64q-14 0 -23 9t-9 23v352h-352q-14 0 -23 9t-9 23v64q0 14 9 23t23 9h352v352q0 14 9 23t23 9h64q14 0 23 -9t9 -23v-352h352q14 0 23 -9t9 -23zM1280 288v832q0 66 -47 113t-113 47h-832 q-66 0 -113 -47t-47 -113v-832q0 -66 47 -113t113 -47h832q66 0 113 47t47 113zM1408 1120v-832q0 -119 -84.5 -203.5t-203.5 -84.5h-832q-119 0 -203.5 84.5t-84.5 203.5v832q0 119 84.5 203.5t203.5 84.5h832q119 0 203.5 -84.5t84.5 -203.5z"
      ],
      "\uf197": [
        2176,
        "M620 416q-110 -64 -268 -64h-128v64h-64q-13 0 -22.5 23.5t-9.5 56.5q0 24 7 49q-58 2 -96.5 10.5t-38.5 20.5t38.5 20.5t96.5 10.5q-7 25 -7 49q0 33 9.5 56.5t22.5 23.5h64v64h128q158 0 268 -64h1113q42 -7 106.5 -18t80.5 -14q89 -15 150 -40.5t83.5 -47.5t22.5 -40 t-22.5 -40t-83.5 -47.5t-150 -40.5q-16 -3 -80.5 -14t-106.5 -18h-1113zM1739 668q53 -36 53 -92t-53 -92l81 -30q68 48 68 122t-68 122zM625 400h1015q-217 -38 -456 -80q-57 0 -113 -24t-83 -48l-28 -24l-288 -288q-26 -26 -70.5 -45t-89.5 -19h-96l-93 464h29 q157 0 273 64zM352 816h-29l93 464h96q46 0 90 -19t70 -45l288 -288q4 -4 11 -10.5t30.5 -23t48.5 -29t61.5 -23t72.5 -10.5l456 -80h-1015q-116 64 -273 64z"
      ],
      "\uf198": [
        1664,
        "M1519 760q62 0 103.5 -40.5t41.5 -101.5q0 -97 -93 -130l-172 -59l56 -167q7 -21 7 -47q0 -59 -42 -102t-101 -43q-47 0 -85.5 27t-53.5 72l-55 165l-310 -106l55 -164q8 -24 8 -47q0 -59 -42 -102t-102 -43q-47 0 -85 27t-53 72l-55 163l-153 -53q-29 -9 -50 -9 q-61 0 -101.5 40t-40.5 101q0 47 27.5 85t71.5 53l156 53l-105 313l-156 -54q-26 -8 -48 -8q-60 0 -101 40.5t-41 100.5q0 47 27.5 85t71.5 53l157 53l-53 159q-8 24 -8 47q0 60 42 102.5t102 42.5q47 0 85 -27t53 -72l54 -160l310 105l-54 160q-8 24 -8 47q0 59 42.5 102 t101.5 43q47 0 85.5 -27.5t53.5 -71.5l53 -161l162 55q21 6 43 6q60 0 102.5 -39.5t42.5 -98.5q0 -45 -30 -81.5t-74 -51.5l-157 -54l105 -316l164 56q24 8 46 8zM725 498l310 105l-105 315l-310 -107z"
      ],
      "\uf199": [
        1536.0,
        "M1248 1408q119 0 203.5 -84.5t84.5 -203.5v-960q0 -119 -84.5 -203.5t-203.5 -84.5h-960q-119 0 -203.5 84.5t-84.5 203.5v960q0 119 84.5 203.5t203.5 84.5h960zM1280 352v436q-31 -35 -64 -55q-34 -22 -132.5 -85t-151.5 -99q-98 -69 -164 -69v0v0q-66 0 -164 69 q-47 32 -142 92.5t-142 92.5q-12 8 -33 27t-31 27v-436q0 -40 28 -68t68 -28h832q40 0 68 28t28 68zM1280 925q0 41 -27.5 70t-68.5 29h-832q-40 0 -68 -28t-28 -68q0 -37 30.5 -76.5t67.5 -64.5q47 -32 137.5 -89t129.5 -83q3 -2 17 -11.5t21 -14t21 -13t23.5 -13 t21.5 -9.5t22.5 -7.5t20.5 -2.5t20.5 2.5t22.5 7.5t21.5 9.5t23.5 13t21 13t21 14t17 11.5l267 174q35 23 66.5 62.5t31.5 73.5z"
      ],
      "\uf19a": [
        1792,
        "M127 640q0 163 67 313l367 -1005q-196 95 -315 281t-119 411zM1415 679q0 -19 -2.5 -38.5t-10 -49.5t-11.5 -44t-17.5 -59t-17.5 -58l-76 -256l-278 826q46 3 88 8q19 2 26 18.5t-2.5 31t-28.5 13.5l-205 -10q-75 1 -202 10q-12 1 -20.5 -5t-11.5 -15t-1.5 -18.5t9 -16.5 t19.5 -8l80 -8l120 -328l-168 -504l-280 832q46 3 88 8q19 2 26 18.5t-2.5 31t-28.5 13.5l-205 -10q-7 0 -23 0.5t-26 0.5q105 160 274.5 253.5t367.5 93.5q147 0 280.5 -53t238.5 -149h-10q-55 0 -92 -40.5t-37 -95.5q0 -12 2 -24t4 -21.5t8 -23t9 -21t12 -22.5t12.5 -21 t14.5 -24t14 -23q63 -107 63 -212zM909 573l237 -647q1 -6 5 -11q-126 -44 -255 -44q-112 0 -217 32zM1570 1009q95 -174 95 -369q0 -209 -104 -385.5t-279 -278.5l235 678q59 169 59 276q0 42 -6 79zM896 1536q182 0 348 -71t286 -191t191 -286t71 -348t-71 -348t-191 -286 t-286 -191t-348 -71t-348 71t-286 191t-191 286t-71 348t71 348t191 286t286 191t348 71zM896 -215q173 0 331.5 68t273 182.5t182.5 273t68 331.5t-68 331.5t-182.5 273t-273 182.5t-331.5 68t-331.5 -68t-273 -182.5t-182.5 -273t-68 -331.5t68 -331.5t182.5 -273 t273 -182.5t331.5 -68z"
      ],
      "\uf19b": [
        1792,
        "M1086 1536v-1536l-272 -128q-228 20 -414 102t-293 208.5t-107 272.5q0 140 100.5 263.5t275 205.5t391.5 108v-172q-217 -38 -356.5 -150t-139.5 -255q0 -152 154.5 -267t388.5 -145v1360zM1755 954l37 -390l-525 114l147 83q-119 70 -280 99v172q277 -33 481 -157z"
      ],
      "\uf19c": [
        2048,
        "M960 1536l960 -384v-128h-128q0 -26 -20.5 -45t-48.5 -19h-1526q-28 0 -48.5 19t-20.5 45h-128v128zM256 896h256v-768h128v768h256v-768h128v768h256v-768h128v768h256v-768h59q28 0 48.5 -19t20.5 -45v-64h-1664v64q0 26 20.5 45t48.5 19h59v768zM1851 -64 q28 0 48.5 -19t20.5 -45v-128h-1920v128q0 26 20.5 45t48.5 19h1782z"
      ],
      "\uf19d": [
        2304,
        "M1774 700l18 -316q4 -69 -82 -128t-235 -93.5t-323 -34.5t-323 34.5t-235 93.5t-82 128l18 316l574 -181q22 -7 48 -7t48 7zM2304 1024q0 -23 -22 -31l-1120 -352q-4 -1 -10 -1t-10 1l-652 206q-43 -34 -71 -111.5t-34 -178.5q63 -36 63 -109q0 -69 -58 -107l58 -433 q2 -14 -8 -25q-9 -11 -24 -11h-192q-15 0 -24 11q-10 11 -8 25l58 433q-58 38 -58 107q0 73 65 111q11 207 98 330l-333 104q-22 8 -22 31t22 31l1120 352q4 1 10 1t10 -1l1120 -352q22 -8 22 -31z"
      ],
      "\uf19e": [
        1536.0,
        "M859 579l13 -707q-62 11 -105 11q-41 0 -105 -11l13 707q-40 69 -168.5 295.5t-216.5 374.5t-181 287q58 -15 108 -15q44 0 111 15q63 -111 133.5 -229.5t167 -276.5t138.5 -227q37 61 109.5 177.5t117.5 190t105 176t107 189.5q54 -14 107 -14q56 0 114 14v0 q-28 -39 -60 -88.5t-49.5 -78.5t-56.5 -96t-49 -84q-146 -248 -353 -610z"
      ],
      "\uf1a0": [
        1536.0,
        "M768 750h725q12 -67 12 -128q0 -217 -91 -387.5t-259.5 -266.5t-386.5 -96q-157 0 -299 60.5t-245 163.5t-163.5 245t-60.5 299t60.5 299t163.5 245t245 163.5t299 60.5q300 0 515 -201l-209 -201q-123 119 -306 119q-129 0 -238.5 -65t-173.5 -176.5t-64 -243.5 t64 -243.5t173.5 -176.5t238.5 -65q87 0 160 24t120 60t82 82t51.5 87t22.5 78h-436v264z"
      ],
      "\uf1a1": [
        1792,
        "M1095 369q16 -16 0 -31q-62 -62 -199 -62t-199 62q-16 15 0 31q6 6 15 6t15 -6q48 -49 169 -49q120 0 169 49q6 6 15 6t15 -6zM788 550q0 -37 -26 -63t-63 -26t-63.5 26t-26.5 63q0 38 26.5 64t63.5 26t63 -26.5t26 -63.5zM1183 550q0 -37 -26.5 -63t-63.5 -26t-63 26 t-26 63t26 63.5t63 26.5t63.5 -26t26.5 -64zM1434 670q0 49 -35 84t-85 35t-86 -36q-130 90 -311 96l63 283l200 -45q0 -37 26 -63t63 -26t63.5 26.5t26.5 63.5t-26.5 63.5t-63.5 26.5q-54 0 -80 -50l-221 49q-19 5 -25 -16l-69 -312q-180 -7 -309 -97q-35 37 -87 37 q-50 0 -85 -35t-35 -84q0 -35 18.5 -64t49.5 -44q-6 -27 -6 -56q0 -142 140 -243t337 -101q198 0 338 101t140 243q0 32 -7 57q30 15 48 43.5t18 63.5zM1792 640q0 -182 -71 -348t-191 -286t-286 -191t-348 -71t-348 71t-286 191t-191 286t-71 348t71 348t191 286t286 191 t348 71t348 -71t286 -191t191 -286t71 -348z"
      ],
      "\uf1a2": [
        1536.0,
        "M939 407q13 -13 0 -26q-53 -53 -171 -53t-171 53q-13 13 0 26q5 6 13 6t13 -6q42 -42 145 -42t145 42q5 6 13 6t13 -6zM676 563q0 -31 -23 -54t-54 -23t-54 23t-23 54q0 32 22.5 54.5t54.5 22.5t54.5 -22.5t22.5 -54.5zM1014 563q0 -31 -23 -54t-54 -23t-54 23t-23 54 q0 32 22.5 54.5t54.5 22.5t54.5 -22.5t22.5 -54.5zM1229 666q0 42 -30 72t-73 30q-42 0 -73 -31q-113 78 -267 82l54 243l171 -39q1 -32 23.5 -54t53.5 -22q32 0 54.5 22.5t22.5 54.5t-22.5 54.5t-54.5 22.5q-48 0 -69 -43l-189 42q-17 5 -21 -13l-60 -268q-154 -6 -265 -83 q-30 32 -74 32q-43 0 -73 -30t-30 -72q0 -30 16 -55t42 -38q-5 -25 -5 -48q0 -122 120 -208.5t289 -86.5q170 0 290 86.5t120 208.5q0 25 -6 49q25 13 40.5 37.5t15.5 54.5zM1536 1120v-960q0 -119 -84.5 -203.5t-203.5 -84.5h-960q-119 0 -203.5 84.5t-84.5 203.5v960 q0 119 84.5 203.5t203.5 84.5h960q119 0 203.5 -84.5t84.5 -203.5z"
      ],
      "\uf1a3": [
        1536.0,
        "M866 697l90 27v62q0 79 -58 135t-138 56t-138 -55.5t-58 -134.5v-283q0 -20 -14 -33.5t-33 -13.5t-32.5 13.5t-13.5 33.5v120h-151v-122q0 -82 57.5 -139t139.5 -57q81 0 138.5 56.5t57.5 136.5v280q0 19 13.5 33t33.5 14q19 0 32.5 -14t13.5 -33v-54zM1199 502v122h-150 v-126q0 -20 -13.5 -33.5t-33.5 -13.5q-19 0 -32.5 14t-13.5 33v123l-90 -26l-60 28v-123q0 -80 58 -137t139 -57t138.5 57t57.5 139zM1536 640q0 -209 -103 -385.5t-279.5 -279.5t-385.5 -103t-385.5 103t-279.5 279.5t-103 385.5t103 385.5t279.5 279.5t385.5 103 t385.5 -103t279.5 -279.5t103 -385.5z"
      ],
      "\uf1a4": [
        1920,
        "M1062 824v118q0 42 -30 72t-72 30t-72 -30t-30 -72v-612q0 -175 -126 -299t-303 -124q-178 0 -303.5 125.5t-125.5 303.5v266h328v-262q0 -43 30 -72.5t72 -29.5t72 29.5t30 72.5v620q0 171 126.5 292t301.5 121q176 0 302 -122t126 -294v-136l-195 -58zM1592 602h328 v-266q0 -178 -125.5 -303.5t-303.5 -125.5q-177 0 -303 124.5t-126 300.5v268l131 -61l195 58v-270q0 -42 30 -71.5t72 -29.5t72 29.5t30 71.5v275z"
      ],
      "\uf1a5": [
        1536.0,
        "M1472 160v480h-704v704h-480q-93 0 -158.5 -65.5t-65.5 -158.5v-480h704v-704h480q93 0 158.5 65.5t65.5 158.5zM1536 1120v-960q0 -119 -84.5 -203.5t-203.5 -84.5h-960q-119 0 -203.5 84.5t-84.5 203.5v960q0 119 84.5 203.5t203.5 84.5h960q119 0 203.5 -84.5 t84.5 -203.5z"
      ],
      "\uf1a6": [
        2048,
        "M328 1254h204v-983h-532v697h328v286zM328 435v369h-123v-369h123zM614 968v-697h205v697h-205zM614 1254v-204h205v204h-205zM901 968h533v-942h-533v163h328v82h-328v697zM1229 435v369h-123v-369h123zM1516 968h532v-942h-532v163h327v82h-327v697zM1843 435v369h-123 v-369h123z"
      ],
      "\uf1a7": [
        1536.0,
        "M1046 516q0 -64 -38 -109t-91 -45q-43 0 -70 15v277q28 17 70 17q53 0 91 -45.5t38 -109.5zM703 944q0 -64 -38 -109.5t-91 -45.5q-43 0 -70 15v277q28 17 70 17q53 0 91 -45t38 -109zM1265 513q0 134 -88 229t-213 95q-20 0 -39 -3q-23 -78 -78 -136q-87 -95 -211 -101 v-636l211 41v206q51 -19 117 -19q125 0 213 95t88 229zM922 940q0 134 -88.5 229t-213.5 95q-74 0 -141 -36h-186v-840l211 41v206q55 -19 116 -19q125 0 213.5 95t88.5 229zM1536 1120v-960q0 -119 -84.5 -203.5t-203.5 -84.5h-960q-119 0 -203.5 84.5t-84.5 203.5v960 q0 119 84.5 203.5t203.5 84.5h960q119 0 203.5 -84.5t84.5 -203.5z"
      ],
      "\uf1a8": [
        2038,
        "M1222 607q75 3 143.5 -20.5t118 -58.5t101 -94.5t84 -108t75.5 -120.5q33 -56 78.5 -109t75.5 -80.5t99 -88.5q-48 -30 -108.5 -57.5t-138.5 -59t-114 -47.5q-44 37 -74 115t-43.5 164.5t-33 180.5t-42.5 168.5t-72.5 123t-122.5 48.5l-10 -2l-6 -4q4 -5 13 -14 q6 -5 28 -23.5t25.5 -22t19 -18t18 -20.5t11.5 -21t10.5 -27.5t4.5 -31t4 -40.5l1 -33q1 -26 -2.5 -57.5t-7.5 -52t-12.5 -58.5t-11.5 -53q-35 1 -101 -9.5t-98 -10.5q-39 0 -72 10q-2 16 -2 47q0 74 3 96q2 13 31.5 41.5t57 59t26.5 51.5q-24 2 -43 -24 q-36 -53 -111.5 -99.5t-136.5 -46.5q-25 0 -75.5 63t-106.5 139.5t-84 96.5q-6 4 -27 30q-482 -112 -513 -112q-16 0 -28 11t-12 27q0 15 8.5 26.5t22.5 14.5l486 106q-8 14 -8 25t5.5 17.5t16 11.5t20 7t23 4.5t18.5 4.5q4 1 15.5 7.5t17.5 6.5q15 0 28 -16t20 -33 q163 37 172 37q17 0 29.5 -11t12.5 -28q0 -15 -8.5 -26t-23.5 -14l-182 -40l-1 -16q-1 -26 81.5 -117.5t104.5 -91.5q47 0 119 80t72 129q0 36 -23.5 53t-51 18.5t-51 11.5t-23.5 34q0 16 10 34l-68 19q43 44 43 117q0 26 -5 58q82 16 144 16q44 0 71.5 -1.5t48.5 -8.5 t31 -13.5t20.5 -24.5t15.5 -33.5t17 -47.5t24 -60l50 25q-3 -40 -23 -60t-42.5 -21t-40 -6.5t-16.5 -20.5zM1282 842q-5 5 -13.5 15.5t-12 14.5t-10.5 11.5t-10 10.5l-8 8t-8.5 7.5t-8 5t-8.5 4.5q-7 3 -14.5 5t-20.5 2.5t-22 0.5h-32.5h-37.5q-126 0 -217 -43 q16 30 36 46.5t54 29.5t65.5 36t46 36.5t50 55t43.5 50.5q12 -9 28 -31.5t32 -36.5t38 -13l12 1v-76l22 -1q247 95 371 190q28 21 50 39t42.5 37.5t33 31t29.5 34t24 31t24.5 37t23 38t27 47.5t29.5 53l7 9q-2 -53 -43 -139q-79 -165 -205 -264t-306 -142q-14 -3 -42 -7.5 t-50 -9.5t-39 -14q3 -19 24.5 -46t21.5 -34q0 -11 -26 -30zM1061 -79q39 26 131.5 47.5t146.5 21.5q9 0 22.5 -15.5t28 -42.5t26 -50t24 -51t14.5 -33q-121 -45 -244 -45q-61 0 -125 11zM822 568l48 12l109 -177l-73 -48zM1323 51q3 -15 3 -16q0 -7 -17.5 -14.5t-46 -13 t-54 -9.5t-53.5 -7.5t-32 -4.5l-7 43q21 2 60.5 8.5t72 10t60.5 3.5h14zM866 679l-96 -20l-6 17q10 1 32.5 7t34.5 6q19 0 35 -10zM1061 45h31l10 -83l-41 -12v95zM1950 1535v1v-1zM1950 1535l-1 -5l-2 -2l1 3zM1950 1535l1 1z"
      ],
      "\uf1a9": [
        1536.0,
        "M1167 -50q-5 19 -24 5q-30 -22 -87 -39t-131 -17q-129 0 -193 49q-5 4 -13 4q-11 0 -26 -12q-7 -6 -7.5 -16t7.5 -20q34 -32 87.5 -46t102.5 -12.5t99 4.5q41 4 84.5 20.5t65 30t28.5 20.5q12 12 7 29zM1128 65q-19 47 -39 61q-23 15 -76 15q-47 0 -71 -10 q-29 -12 -78 -56q-26 -24 -12 -44q9 -8 17.5 -4.5t31.5 23.5q3 2 10.5 8.5t10.5 8.5t10 7t11.5 7t12.5 5t15 4.5t16.5 2.5t20.5 1q27 0 44.5 -7.5t23 -14.5t13.5 -22q10 -17 12.5 -20t12.5 1q23 12 14 34zM1483 346q0 22 -5 44.5t-16.5 45t-34 36.5t-52.5 14 q-33 0 -97 -41.5t-129 -83.5t-101 -42q-27 -1 -63.5 19t-76 49t-83.5 58t-100 49t-111 19q-115 -1 -197 -78.5t-84 -178.5q-2 -112 74 -164q29 -20 62.5 -28.5t103.5 -8.5q57 0 132 32.5t134 71t120 70.5t93 31q26 -1 65 -31.5t71.5 -67t68 -67.5t55.5 -32q35 -3 58.5 14 t55.5 63q28 41 42.5 101t14.5 106zM1536 506q0 -164 -62 -304.5t-166 -236t-242.5 -149.5t-290.5 -54t-293 57.5t-247.5 157t-170.5 241.5t-64 302q0 89 19.5 172.5t49 145.5t70.5 118.5t78.5 94t78.5 69.5t64.5 46.5t42.5 24.5q14 8 51 26.5t54.5 28.5t48 30t60.5 44 q36 28 58 72.5t30 125.5q129 -155 186 -193q44 -29 130 -68t129 -66q21 -13 39 -25t60.5 -46.5t76 -70.5t75 -95t69 -122t47 -148.5t19.5 -177.5z"
      ],
      "\uf1aa": [
        1536.0,
        "M1070 463l-160 -160l-151 -152l-30 -30q-65 -64 -151.5 -87t-171.5 -2q-16 -70 -72 -115t-129 -45q-85 0 -145 60.5t-60 145.5q0 72 44.5 128t113.5 72q-22 86 1 173t88 152l12 12l151 -152l-11 -11q-37 -37 -37 -89t37 -90q37 -37 89 -37t89 37l30 30l151 152l161 160z M729 1145l12 -12l-152 -152l-12 12q-37 37 -89 37t-89 -37t-37 -89.5t37 -89.5l29 -29l152 -152l160 -160l-151 -152l-161 160l-151 152l-30 30q-68 67 -90 159.5t5 179.5q-70 15 -115 71t-45 129q0 85 60 145.5t145 60.5q76 0 133.5 -49t69.5 -123q84 20 169.5 -3.5 t149.5 -87.5zM1536 78q0 -85 -60 -145.5t-145 -60.5q-74 0 -131 47t-71 118q-86 -28 -179.5 -6t-161.5 90l-11 12l151 152l12 -12q37 -37 89 -37t89 37t37 89t-37 89l-30 30l-152 152l-160 160l152 152l160 -160l152 -152l29 -30q64 -64 87.5 -150.5t2.5 -171.5 q76 -11 126.5 -68.5t50.5 -134.5zM1534 1202q0 -77 -51 -135t-127 -69q26 -85 3 -176.5t-90 -158.5l-12 -12l-151 152l12 12q37 37 37 89t-37 89t-89 37t-89 -37l-30 -30l-152 -152l-160 -160l-152 152l161 160l152 152l29 30q67 67 159 89.5t178 -3.5q11 75 68.5 126 t135.5 51q85 0 145 -60.5t60 -145.5z"
      ],
      "\uf1ab": [
        1536.0,
        "M654 458q-1 -3 -12.5 0.5t-31.5 11.5l-20 9q-44 20 -87 49q-7 5 -41 31.5t-38 28.5q-67 -103 -134 -181q-81 -95 -105 -110q-4 -2 -19.5 -4t-18.5 0q6 4 82 92q21 24 85.5 115t78.5 118q17 30 51 98.5t36 77.5q-8 1 -110 -33q-8 -2 -27.5 -7.5t-34.5 -9.5t-17 -5 q-2 -2 -2 -10.5t-1 -9.5q-5 -10 -31 -15q-23 -7 -47 0q-18 4 -28 21q-4 6 -5 23q6 2 24.5 5t29.5 6q58 16 105 32q100 35 102 35q10 2 43 19.5t44 21.5q9 3 21.5 8t14.5 5.5t6 -0.5q2 -12 -1 -33q0 -2 -12.5 -27t-26.5 -53.5t-17 -33.5q-25 -50 -77 -131l64 -28 q12 -6 74.5 -32t67.5 -28q4 -1 10.5 -25.5t4.5 -30.5zM449 944q3 -15 -4 -28q-12 -23 -50 -38q-30 -12 -60 -12q-26 3 -49 26q-14 15 -18 41l1 3q3 -3 19.5 -5t26.5 0t58 16q36 12 55 14q17 0 21 -17zM1147 815l63 -227l-139 42zM39 15l694 232v1032l-694 -233v-1031z M1280 332l102 -31l-181 657l-100 31l-216 -536l102 -31l45 110l211 -65zM777 1294l573 -184v380zM1088 -29l158 -13l-54 -160l-40 66q-130 -83 -276 -108q-58 -12 -91 -12h-84q-79 0 -199.5 39t-183.5 85q-8 7 -8 16q0 8 5 13.5t13 5.5q4 0 18 -7.5t30.5 -16.5t20.5 -11 q73 -37 159.5 -61.5t157.5 -24.5q95 0 167 14.5t157 50.5q15 7 30.5 15.5t34 19t28.5 16.5zM1536 1050v-1079l-774 246q-14 -6 -375 -127.5t-368 -121.5q-13 0 -18 13q0 1 -1 3v1078q3 9 4 10q5 6 20 11q107 36 149 50v384l558 -198q2 0 160.5 55t316 108.5t161.5 53.5 q20 0 20 -21v-418z"
      ],
      "\uf1ac": [
        1792,
        "M288 1152q66 0 113 -47t47 -113v-1088q0 -66 -47 -113t-113 -47h-128q-66 0 -113 47t-47 113v1088q0 66 47 113t113 47h128zM1664 989q58 -34 93 -93t35 -128v-768q0 -106 -75 -181t-181 -75h-864q-66 0 -113 47t-47 113v1536q0 40 28 68t68 28h672q40 0 88 -20t76 -48 l152 -152q28 -28 48 -76t20 -88v-163zM928 0v128q0 14 -9 23t-23 9h-128q-14 0 -23 -9t-9 -23v-128q0 -14 9 -23t23 -9h128q14 0 23 9t9 23zM928 256v128q0 14 -9 23t-23 9h-128q-14 0 -23 -9t-9 -23v-128q0 -14 9 -23t23 -9h128q14 0 23 9t9 23zM928 512v128q0 14 -9 23 t-23 9h-128q-14 0 -23 -9t-9 -23v-128q0 -14 9 -23t23 -9h128q14 0 23 9t9 23zM1184 0v128q0 14 -9 23t-23 9h-128q-14 0 -23 -9t-9 -23v-128q0 -14 9 -23t23 -9h128q14 0 23 9t9 23zM1184 256v128q0 14 -9 23t-23 9h-128q-14 0 -23 -9t-9 -23v-128q0 -14 9 -23t23 -9h128 q14 0 23 9t9 23zM1184 512v128q0 14 -9 23t-23 9h-128q-14 0 -23 -9t-9 -23v-128q0 -14 9 -23t23 -9h128q14 0 23 9t9 23zM1440 0v128q0 14 -9 23t-23 9h-128q-14 0 -23 -9t-9 -23v-128q0 -14 9 -23t23 -9h128q14 0 23 9t9 23zM1440 256v128q0 14 -9 23t-23 9h-128 q-14 0 -23 -9t-9 -23v-128q0 -14 9 -23t23 -9h128q14 0 23 9t9 23zM1440 512v128q0 14 -9 23t-23 9h-128q-14 0 -23 -9t-9 -23v-128q0 -14 9 -23t23 -9h128q14 0 23 9t9 23zM1536 896v256h-160q-40 0 -68 28t-28 68v160h-640v-512h896z"
      ],
      "\uf1ad": [
        1536.0,
        "M1344 1536q26 0 45 -19t19 -45v-1664q0 -26 -19 -45t-45 -19h-1280q-26 0 -45 19t-19 45v1664q0 26 19 45t45 19h1280zM512 1248v-64q0 -14 9 -23t23 -9h64q14 0 23 9t9 23v64q0 14 -9 23t-23 9h-64q-14 0 -23 -9t-9 -23zM512 992v-64q0 -14 9 -23t23 -9h64q14 0 23 9 t9 23v64q0 14 -9 23t-23 9h-64q-14 0 -23 -9t-9 -23zM512 736v-64q0 -14 9 -23t23 -9h64q14 0 23 9t9 23v64q0 14 -9 23t-23 9h-64q-14 0 -23 -9t-9 -23zM512 480v-64q0 -14 9 -23t23 -9h64q14 0 23 9t9 23v64q0 14 -9 23t-23 9h-64q-14 0 -23 -9t-9 -23zM384 160v64 q0 14 -9 23t-23 9h-64q-14 0 -23 -9t-9 -23v-64q0 -14 9 -23t23 -9h64q14 0 23 9t9 23zM384 416v64q0 14 -9 23t-23 9h-64q-14 0 -23 -9t-9 -23v-64q0 -14 9 -23t23 -9h64q14 0 23 9t9 23zM384 672v64q0 14 -9 23t-23 9h-64q-14 0 -23 -9t-9 -23v-64q0 -14 9 -23t23 -9h64 q14 0 23 9t9 23zM384 928v64q0 14 -9 23t-23 9h-64q-14 0 -23 -9t-9 -23v-64q0 -14 9 -23t23 -9h64q14 0 23 9t9 23zM384 1184v64q0 14 -9 23t-23 9h-64q-14 0 -23 -9t-9 -23v-64q0 -14 9 -23t23 -9h64q14 0 23 9t9 23zM896 -96v192q0 14 -9 23t-23 9h-320q-14 0 -23 -9 t-9 -23v-192q0 -14 9 -23t23 -9h320q14 0 23 9t9 23zM896 416v64q0 14 -9 23t-23 9h-64q-14 0 -23 -9t-9 -23v-64q0 -14 9 -23t23 -9h64q14 0 23 9t9 23zM896 672v64q0 14 -9 23t-23 9h-64q-14 0 -23 -9t-9 -23v-64q0 -14 9 -23t23 -9h64q14 0 23 9t9 23zM896 928v64 q0 14 -9 23t-23 9h-64q-14 0 -23 -9t-9 -23v-64q0 -14 9 -23t23 -9h64q14 0 23 9t9 23zM896 1184v64q0 14 -9 23t-23 9h-64q-14 0 -23 -9t-9 -23v-64q0 -14 9 -23t23 -9h64q14 0 23 9t9 23zM1152 160v64q0 14 -9 23t-23 9h-64q-14 0 -23 -9t-9 -23v-64q0 -14 9 -23t23 -9h64 q14 0 23 9t9 23zM1152 416v64q0 14 -9 23t-23 9h-64q-14 0 -23 -9t-9 -23v-64q0 -14 9 -23t23 -9h64q14 0 23 9t9 23zM1152 672v64q0 14 -9 23t-23 9h-64q-14 0 -23 -9t-9 -23v-64q0 -14 9 -23t23 -9h64q14 0 23 9t9 23zM1152 928v64q0 14 -9 23t-23 9h-64q-14 0 -23 -9 t-9 -23v-64q0 -14 9 -23t23 -9h64q14 0 23 9t9 23zM1152 1184v64q0 14 -9 23t-23 9h-64q-14 0 -23 -9t-9 -23v-64q0 -14 9 -23t23 -9h64q14 0 23 9t9 23z"
      ],
      "\uf1ae": [
        1280,
        "M1188 988l-292 -292v-824q0 -46 -33 -79t-79 -33t-79 33t-33 79v384h-64v-384q0 -46 -33 -79t-79 -33t-79 33t-33 79v824l-292 292q-28 28 -28 68t28 68q29 28 68.5 28t67.5 -28l228 -228h368l228 228q28 28 68 28t68 -28q28 -29 28 -68.5t-28 -67.5zM864 1152 q0 -93 -65.5 -158.5t-158.5 -65.5t-158.5 65.5t-65.5 158.5t65.5 158.5t158.5 65.5t158.5 -65.5t65.5 -158.5z"
      ],
      "\uf1b0": [
        1664,
        "M780 1064q0 -60 -19 -113.5t-63 -92.5t-105 -39q-76 0 -138 57.5t-92 135.5t-30 151q0 60 19 113.5t63 92.5t105 39q77 0 138.5 -57.5t91.5 -135t30 -151.5zM438 581q0 -80 -42 -139t-119 -59q-76 0 -141.5 55.5t-100.5 133.5t-35 152q0 80 42 139.5t119 59.5 q76 0 141.5 -55.5t100.5 -134t35 -152.5zM832 608q118 0 255 -97.5t229 -237t92 -254.5q0 -46 -17 -76.5t-48.5 -45t-64.5 -20t-76 -5.5q-68 0 -187.5 45t-182.5 45q-66 0 -192.5 -44.5t-200.5 -44.5q-183 0 -183 146q0 86 56 191.5t139.5 192.5t187.5 146t193 59zM1071 819 q-61 0 -105 39t-63 92.5t-19 113.5q0 74 30 151.5t91.5 135t138.5 57.5q61 0 105 -39t63 -92.5t19 -113.5q0 -73 -30 -151t-92 -135.5t-138 -57.5zM1503 923q77 0 119 -59.5t42 -139.5q0 -74 -35 -152t-100.5 -133.5t-141.5 -55.5q-77 0 -119 59t-42 139q0 74 35 152.5 t100.5 134t141.5 55.5z"
      ],
      "\uf1b1": [
        768,
        "M704 1008q0 -145 -57 -243.5t-152 -135.5l45 -821q2 -26 -16 -45t-44 -19h-192q-26 0 -44 19t-16 45l45 821q-95 37 -152 135.5t-57 243.5q0 128 42.5 249.5t117.5 200t160 78.5t160 -78.5t117.5 -200t42.5 -249.5z"
      ],
      "\uf1b2": [
        1792,
        "M896 -93l640 349v636l-640 -233v-752zM832 772l698 254l-698 254l-698 -254zM1664 1024v-768q0 -35 -18 -65t-49 -47l-704 -384q-28 -16 -61 -16t-61 16l-704 384q-31 17 -49 47t-18 65v768q0 40 23 73t61 47l704 256q22 8 44 8t44 -8l704 -256q38 -14 61 -47t23 -73z "
      ],
      "\uf1b3": [
        2304,
        "M640 -96l384 192v314l-384 -164v-342zM576 358l404 173l-404 173l-404 -173zM1664 -96l384 192v314l-384 -164v-342zM1600 358l404 173l-404 173l-404 -173zM1152 651l384 165v266l-384 -164v-267zM1088 1030l441 189l-441 189l-441 -189zM2176 512v-416q0 -36 -19 -67 t-52 -47l-448 -224q-25 -14 -57 -14t-57 14l-448 224q-4 2 -7 4q-2 -2 -7 -4l-448 -224q-25 -14 -57 -14t-57 14l-448 224q-33 16 -52 47t-19 67v416q0 38 21.5 70t56.5 48l434 186v400q0 38 21.5 70t56.5 48l448 192q23 10 50 10t50 -10l448 -192q35 -16 56.5 -48t21.5 -70 v-400l434 -186q36 -16 57 -48t21 -70z"
      ],
      "\uf1b4": [
        2048,
        "M1848 1197h-511v-124h511v124zM1596 771q-90 0 -146 -52.5t-62 -142.5h408q-18 195 -200 195zM1612 186q63 0 122 32t76 87h221q-100 -307 -427 -307q-214 0 -340.5 132t-126.5 347q0 208 130.5 345.5t336.5 137.5q138 0 240.5 -68t153 -179t50.5 -248q0 -17 -2 -47h-658 q0 -111 57.5 -171.5t166.5 -60.5zM277 236h296q205 0 205 167q0 180 -199 180h-302v-347zM277 773h281q78 0 123.5 36.5t45.5 113.5q0 144 -190 144h-260v-294zM0 1282h594q87 0 155 -14t126.5 -47.5t90 -96.5t31.5 -154q0 -181 -172 -263q114 -32 172 -115t58 -204 q0 -75 -24.5 -136.5t-66 -103.5t-98.5 -71t-121 -42t-134 -13h-611v1260z"
      ],
      "\uf1b5": [
        1536.0,
        "M1248 1408q119 0 203.5 -84.5t84.5 -203.5v-960q0 -119 -84.5 -203.5t-203.5 -84.5h-960q-119 0 -203.5 84.5t-84.5 203.5v960q0 119 84.5 203.5t203.5 84.5h960zM499 1041h-371v-787h382q117 0 197 57.5t80 170.5q0 158 -143 200q107 52 107 164q0 57 -19.5 96.5 t-56.5 60.5t-79 29.5t-97 8.5zM477 723h-176v184h163q119 0 119 -90q0 -94 -106 -94zM486 388h-185v217h189q124 0 124 -113q0 -104 -128 -104zM1136 356q-68 0 -104 38t-36 107h411q1 10 1 30q0 132 -74.5 220.5t-203.5 88.5q-128 0 -210 -86t-82 -216q0 -135 79 -217 t213 -82q205 0 267 191h-138q-11 -34 -47.5 -54t-75.5 -20zM1126 722q113 0 124 -122h-254q4 56 39 89t91 33zM964 988h319v-77h-319v77z"
      ],
      "\uf1b6": [
        1792,
        "M1582 954q0 -101 -71.5 -172.5t-172.5 -71.5t-172.5 71.5t-71.5 172.5t71.5 172.5t172.5 71.5t172.5 -71.5t71.5 -172.5zM812 212q0 104 -73 177t-177 73q-27 0 -54 -6l104 -42q77 -31 109.5 -106.5t1.5 -151.5q-31 -77 -107 -109t-152 -1q-21 8 -62 24.5t-61 24.5 q32 -60 91 -96.5t130 -36.5q104 0 177 73t73 177zM1642 953q0 126 -89.5 215.5t-215.5 89.5q-127 0 -216.5 -89.5t-89.5 -215.5q0 -127 89.5 -216t216.5 -89q126 0 215.5 89t89.5 216zM1792 953q0 -189 -133.5 -322t-321.5 -133l-437 -319q-12 -129 -109 -218t-229 -89 q-121 0 -214 76t-118 192l-230 92v429l389 -157q79 48 173 48q13 0 35 -2l284 407q2 187 135.5 319t320.5 132q188 0 321.5 -133.5t133.5 -321.5z"
      ],
      "\uf1b7": [
        1536.0,
        "M1242 889q0 80 -57 136.5t-137 56.5t-136.5 -57t-56.5 -136q0 -80 56.5 -136.5t136.5 -56.5t137 56.5t57 136.5zM632 301q0 -83 -58 -140.5t-140 -57.5q-56 0 -103 29t-72 77q52 -20 98 -40q60 -24 120 1.5t85 86.5q24 60 -1.5 120t-86.5 84l-82 33q22 5 42 5 q82 0 140 -57.5t58 -140.5zM1536 1120v-960q0 -119 -84.5 -203.5t-203.5 -84.5h-960q-119 0 -203.5 84.5t-84.5 203.5v153l172 -69q20 -92 93.5 -152t168.5 -60q104 0 181 70t87 173l345 252q150 0 255.5 105.5t105.5 254.5q0 150 -105.5 255.5t-255.5 105.5 q-148 0 -253 -104.5t-107 -252.5l-225 -322q-9 1 -28 1q-75 0 -137 -37l-297 119v468q0 119 84.5 203.5t203.5 84.5h960q119 0 203.5 -84.5t84.5 -203.5zM1289 887q0 -100 -71 -170.5t-171 -70.5t-170.5 70.5t-70.5 170.5t70.5 171t170.5 71q101 0 171.5 -70.5t70.5 -171.5z "
      ],
      "\uf1b8": [
        1792,
        "M836 367l-15 -368l-2 -22l-420 29q-36 3 -67 31.5t-47 65.5q-11 27 -14.5 55t4 65t12 55t21.5 64t19 53q78 -12 509 -28zM449 953l180 -379l-147 92q-63 -72 -111.5 -144.5t-72.5 -125t-39.5 -94.5t-18.5 -63l-4 -21l-190 357q-17 26 -18 56t6 47l8 18q35 63 114 188 l-140 86zM1680 436l-188 -359q-12 -29 -36.5 -46.5t-43.5 -20.5l-18 -4q-71 -7 -219 -12l8 -164l-230 367l211 362l7 -173q170 -16 283 -5t170 33zM895 1360q-47 -63 -265 -435l-317 187l-19 12l225 356q20 31 60 45t80 10q24 -2 48.5 -12t42 -21t41.5 -33t36 -34.5 t36 -39.5t32 -35zM1550 1053l212 -363q18 -37 12.5 -76t-27.5 -74q-13 -20 -33 -37t-38 -28t-48.5 -22t-47 -16t-51.5 -14t-46 -12q-34 72 -265 436l313 195zM1407 1279l142 83l-220 -373l-419 20l151 86q-34 89 -75 166t-75.5 123.5t-64.5 80t-47 46.5l-17 13l405 -1 q31 3 58 -10.5t39 -28.5l11 -15q39 -61 112 -190z"
      ],
      "\uf1b9": [
        2048,
        "M480 448q0 66 -47 113t-113 47t-113 -47t-47 -113t47 -113t113 -47t113 47t47 113zM516 768h1016l-89 357q-2 8 -14 17.5t-21 9.5h-768q-9 0 -21 -9.5t-14 -17.5zM1888 448q0 66 -47 113t-113 47t-113 -47t-47 -113t47 -113t113 -47t113 47t47 113zM2048 544v-384 q0 -14 -9 -23t-23 -9h-96v-128q0 -80 -56 -136t-136 -56t-136 56t-56 136v128h-1024v-128q0 -80 -56 -136t-136 -56t-136 56t-56 136v128h-96q-14 0 -23 9t-9 23v384q0 93 65.5 158.5t158.5 65.5h28l105 419q23 94 104 157.5t179 63.5h768q98 0 179 -63.5t104 -157.5 l105 -419h28q93 0 158.5 -65.5t65.5 -158.5z"
      ],
      "\uf1ba": [
        2048,
        "M1824 640q93 0 158.5 -65.5t65.5 -158.5v-384q0 -14 -9 -23t-23 -9h-96v-64q0 -80 -56 -136t-136 -56t-136 56t-56 136v64h-1024v-64q0 -80 -56 -136t-136 -56t-136 56t-56 136v64h-96q-14 0 -23 9t-9 23v384q0 93 65.5 158.5t158.5 65.5h28l105 419q23 94 104 157.5 t179 63.5h128v224q0 14 9 23t23 9h448q14 0 23 -9t9 -23v-224h128q98 0 179 -63.5t104 -157.5l105 -419h28zM320 160q66 0 113 47t47 113t-47 113t-113 47t-113 -47t-47 -113t47 -113t113 -47zM516 640h1016l-89 357q-2 8 -14 17.5t-21 9.5h-768q-9 0 -21 -9.5t-14 -17.5z M1728 160q66 0 113 47t47 113t-47 113t-113 47t-113 -47t-47 -113t47 -113t113 -47z"
      ],
      "\uf1bb": [
        1536.0,
        "M1504 64q0 -26 -19 -45t-45 -19h-462q1 -17 6 -87.5t5 -108.5q0 -25 -18 -42.5t-43 -17.5h-320q-25 0 -43 17.5t-18 42.5q0 38 5 108.5t6 87.5h-462q-26 0 -45 19t-19 45t19 45l402 403h-229q-26 0 -45 19t-19 45t19 45l402 403h-197q-26 0 -45 19t-19 45t19 45l384 384 q19 19 45 19t45 -19l384 -384q19 -19 19 -45t-19 -45t-45 -19h-197l402 -403q19 -19 19 -45t-19 -45t-45 -19h-229l402 -403q19 -19 19 -45z"
      ],
      "\uf1bc": [
        1536.0,
        "M1127 326q0 32 -30 51q-193 115 -447 115q-133 0 -287 -34q-42 -9 -42 -52q0 -20 13.5 -34.5t35.5 -14.5q5 0 37 8q132 27 243 27q226 0 397 -103q19 -11 33 -11q19 0 33 13.5t14 34.5zM1223 541q0 40 -35 61q-237 141 -548 141q-153 0 -303 -42q-48 -13 -48 -64 q0 -25 17.5 -42.5t42.5 -17.5q7 0 37 8q122 33 251 33q279 0 488 -124q24 -13 38 -13q25 0 42.5 17.5t17.5 42.5zM1331 789q0 47 -40 70q-126 73 -293 110.5t-343 37.5q-204 0 -364 -47q-23 -7 -38.5 -25.5t-15.5 -48.5q0 -31 20.5 -52t51.5 -21q11 0 40 8q133 37 307 37 q159 0 309.5 -34t253.5 -95q21 -12 40 -12q29 0 50.5 20.5t21.5 51.5zM1536 640q0 -209 -103 -385.5t-279.5 -279.5t-385.5 -103t-385.5 103t-279.5 279.5t-103 385.5t103 385.5t279.5 279.5t385.5 103t385.5 -103t279.5 -279.5t103 -385.5z"
      ],
      "\uf1bd": [
        1024,
        "M1024 1233l-303 -582l24 -31h279v-415h-507l-44 -30l-142 -273l-30 -30h-301v303l303 583l-24 30h-279v415h507l44 30l142 273l30 30h301v-303z"
      ],
      "\uf1be": [
        2304,
        "M784 164l16 241l-16 523q-1 10 -7.5 17t-16.5 7q-9 0 -16 -7t-7 -17l-14 -523l14 -241q1 -10 7.5 -16.5t15.5 -6.5q22 0 24 23zM1080 193l11 211l-12 586q0 16 -13 24q-8 5 -16 5t-16 -5q-13 -8 -13 -24l-1 -6l-10 -579q0 -1 11 -236v-1q0 -10 6 -17q9 -11 23 -11 q11 0 20 9q9 7 9 20zM35 533l20 -128l-20 -126q-2 -9 -9 -9t-9 9l-17 126l17 128q2 9 9 9t9 -9zM121 612l26 -207l-26 -203q-2 -9 -10 -9q-9 0 -9 10l-23 202l23 207q0 9 9 9q8 0 10 -9zM401 159zM213 650l25 -245l-25 -237q0 -11 -11 -11q-10 0 -12 11l-21 237l21 245 q2 12 12 12q11 0 11 -12zM307 657l23 -252l-23 -244q-2 -13 -14 -13q-13 0 -13 13l-21 244l21 252q0 13 13 13q12 0 14 -13zM401 639l21 -234l-21 -246q-2 -16 -16 -16q-6 0 -10.5 4.5t-4.5 11.5l-20 246l20 234q0 6 4.5 10.5t10.5 4.5q14 0 16 -15zM784 164zM495 785 l21 -380l-21 -246q0 -7 -5 -12.5t-12 -5.5q-16 0 -18 18l-18 246l18 380q2 18 18 18q7 0 12 -5.5t5 -12.5zM589 871l19 -468l-19 -244q0 -8 -5.5 -13.5t-13.5 -5.5q-18 0 -20 19l-16 244l16 468q2 19 20 19q8 0 13.5 -5.5t5.5 -13.5zM687 911l18 -506l-18 -242 q-2 -21 -22 -21q-19 0 -21 21l-16 242l16 506q0 9 6.5 15.5t14.5 6.5q9 0 15 -6.5t7 -15.5zM1079 169v0v0v0zM881 915l15 -510l-15 -239q0 -10 -7.5 -17.5t-17.5 -7.5t-17 7t-8 18l-14 239l14 510q0 11 7.5 18t17.5 7t17.5 -7t7.5 -18zM980 896l14 -492l-14 -236 q0 -11 -8 -19t-19 -8t-19 8t-9 19l-12 236l12 492q1 12 9 20t19 8t18.5 -8t8.5 -20zM1192 404l-14 -231v0q0 -13 -9 -22t-22 -9t-22 9t-10 22l-6 114l-6 117l12 636v3q2 15 12 24q9 7 20 7q8 0 15 -5q14 -8 16 -26zM2304 423q0 -117 -83 -199.5t-200 -82.5h-786 q-13 2 -22 11t-9 22v899q0 23 28 33q85 34 181 34q195 0 338 -131.5t160 -323.5q53 22 110 22q117 0 200 -83t83 -201z"
      ],
      "\uf1c0": [
        1536.0,
        "M768 768q237 0 443 43t325 127v-170q0 -69 -103 -128t-280 -93.5t-385 -34.5t-385 34.5t-280 93.5t-103 128v170q119 -84 325 -127t443 -43zM768 0q237 0 443 43t325 127v-170q0 -69 -103 -128t-280 -93.5t-385 -34.5t-385 34.5t-280 93.5t-103 128v170q119 -84 325 -127 t443 -43zM768 384q237 0 443 43t325 127v-170q0 -69 -103 -128t-280 -93.5t-385 -34.5t-385 34.5t-280 93.5t-103 128v170q119 -84 325 -127t443 -43zM768 1536q208 0 385 -34.5t280 -93.5t103 -128v-128q0 -69 -103 -128t-280 -93.5t-385 -34.5t-385 34.5t-280 93.5 t-103 128v128q0 69 103 128t280 93.5t385 34.5z"
      ],
      "\uf1c1": [
        1536.0,
        "M1468 1156q28 -28 48 -76t20 -88v-1152q0 -40 -28 -68t-68 -28h-1344q-40 0 -68 28t-28 68v1600q0 40 28 68t68 28h896q40 0 88 -20t76 -48zM1024 1400v-376h376q-10 29 -22 41l-313 313q-12 12 -41 22zM1408 -128v1024h-416q-40 0 -68 28t-28 68v416h-768v-1536h1280z M894 465q33 -26 84 -56q59 7 117 7q147 0 177 -49q16 -22 2 -52q0 -1 -1 -2l-2 -2v-1q-6 -38 -71 -38q-48 0 -115 20t-130 53q-221 -24 -392 -83q-153 -262 -242 -262q-15 0 -28 7l-24 12q-1 1 -6 5q-10 10 -6 36q9 40 56 91.5t132 96.5q14 9 23 -6q2 -2 2 -4q52 85 107 197 q68 136 104 262q-24 82 -30.5 159.5t6.5 127.5q11 40 42 40h21h1q23 0 35 -15q18 -21 9 -68q-2 -6 -4 -8q1 -3 1 -8v-30q-2 -123 -14 -192q55 -164 146 -238zM318 54q52 24 137 158q-51 -40 -87.5 -84t-49.5 -74zM716 974q-15 -42 -2 -132q1 7 7 44q0 3 7 43q1 4 4 8 q-1 1 -1 2q-1 2 -1 3q-1 22 -13 36q0 -1 -1 -2v-2zM592 313q135 54 284 81q-2 1 -13 9.5t-16 13.5q-76 67 -127 176q-27 -86 -83 -197q-30 -56 -45 -83zM1238 329q-24 24 -140 24q76 -28 124 -28q14 0 18 1q0 1 -2 3z"
      ],
      "\uf1c2": [
        1536.0,
        "M1468 1156q28 -28 48 -76t20 -88v-1152q0 -40 -28 -68t-68 -28h-1344q-40 0 -68 28t-28 68v1600q0 40 28 68t68 28h896q40 0 88 -20t76 -48zM1024 1400v-376h376q-10 29 -22 41l-313 313q-12 12 -41 22zM1408 -128v1024h-416q-40 0 -68 28t-28 68v416h-768v-1536h1280z M233 768v-107h70l164 -661h159l128 485q7 20 10 46q2 16 2 24h4l3 -24q1 -3 3.5 -20t5.5 -26l128 -485h159l164 661h70v107h-300v-107h90l-99 -438q-5 -20 -7 -46l-2 -21h-4q0 3 -0.5 6.5t-1.5 8t-1 6.5q-1 5 -4 21t-5 25l-144 545h-114l-144 -545q-2 -9 -4.5 -24.5 t-3.5 -21.5l-4 -21h-4l-2 21q-2 26 -7 46l-99 438h90v107h-300z"
      ],
      "\uf1c3": [
        1536.0,
        "M1468 1156q28 -28 48 -76t20 -88v-1152q0 -40 -28 -68t-68 -28h-1344q-40 0 -68 28t-28 68v1600q0 40 28 68t68 28h896q40 0 88 -20t76 -48zM1024 1400v-376h376q-10 29 -22 41l-313 313q-12 12 -41 22zM1408 -128v1024h-416q-40 0 -68 28t-28 68v416h-768v-1536h1280z M429 106v-106h281v106h-75l103 161q5 7 10 16.5t7.5 13.5t3.5 4h2q1 -4 5 -10q2 -4 4.5 -7.5t6 -8t6.5 -8.5l107 -161h-76v-106h291v106h-68l-192 273l195 282h67v107h-279v-107h74l-103 -159q-4 -7 -10 -16.5t-9 -13.5l-2 -3h-2q-1 4 -5 10q-6 11 -17 23l-106 159h76v107 h-290v-107h68l189 -272l-194 -283h-68z"
      ],
      "\uf1c4": [
        1536.0,
        "M1468 1156q28 -28 48 -76t20 -88v-1152q0 -40 -28 -68t-68 -28h-1344q-40 0 -68 28t-28 68v1600q0 40 28 68t68 28h896q40 0 88 -20t76 -48zM1024 1400v-376h376q-10 29 -22 41l-313 313q-12 12 -41 22zM1408 -128v1024h-416q-40 0 -68 28t-28 68v416h-768v-1536h1280z M416 106v-106h327v106h-93v167h137q76 0 118 15q67 23 106.5 87t39.5 146q0 81 -37 141t-100 87q-48 19 -130 19h-368v-107h92v-555h-92zM769 386h-119v268h120q52 0 83 -18q56 -33 56 -115q0 -89 -62 -120q-31 -15 -78 -15z"
      ],
      "\uf1c5": [
        1536.0,
        "M1468 1156q28 -28 48 -76t20 -88v-1152q0 -40 -28 -68t-68 -28h-1344q-40 0 -68 28t-28 68v1600q0 40 28 68t68 28h896q40 0 88 -20t76 -48zM1024 1400v-376h376q-10 29 -22 41l-313 313q-12 12 -41 22zM1408 -128v1024h-416q-40 0 -68 28t-28 68v416h-768v-1536h1280z M1280 320v-320h-1024v192l192 192l128 -128l384 384zM448 512q-80 0 -136 56t-56 136t56 136t136 56t136 -56t56 -136t-56 -136t-136 -56z"
      ],
      "\uf1c6": [
        1536.0,
        "M640 1152v128h-128v-128h128zM768 1024v128h-128v-128h128zM640 896v128h-128v-128h128zM768 768v128h-128v-128h128zM1468 1156q28 -28 48 -76t20 -88v-1152q0 -40 -28 -68t-68 -28h-1344q-40 0 -68 28t-28 68v1600q0 40 28 68t68 28h896q40 0 88 -20t76 -48zM1024 1400 v-376h376q-10 29 -22 41l-313 313q-12 12 -41 22zM1408 -128v1024h-416q-40 0 -68 28t-28 68v416h-128v-128h-128v128h-512v-1536h1280zM781 593l107 -349q8 -27 8 -52q0 -83 -72.5 -137.5t-183.5 -54.5t-183.5 54.5t-72.5 137.5q0 25 8 52q21 63 120 396v128h128v-128h79 q22 0 39 -13t23 -34zM640 128q53 0 90.5 19t37.5 45t-37.5 45t-90.5 19t-90.5 -19t-37.5 -45t37.5 -45t90.5 -19z"
      ],
      "\uf1c7": [
        1536.0,
        "M1468 1156q28 -28 48 -76t20 -88v-1152q0 -40 -28 -68t-68 -28h-1344q-40 0 -68 28t-28 68v1600q0 40 28 68t68 28h896q40 0 88 -20t76 -48zM1024 1400v-376h376q-10 29 -22 41l-313 313q-12 12 -41 22zM1408 -128v1024h-416q-40 0 -68 28t-28 68v416h-768v-1536h1280z M620 686q20 -8 20 -30v-544q0 -22 -20 -30q-8 -2 -12 -2q-12 0 -23 9l-166 167h-131q-14 0 -23 9t-9 23v192q0 14 9 23t23 9h131l166 167q16 15 35 7zM1037 -3q31 0 50 24q129 159 129 363t-129 363q-16 21 -43 24t-47 -14q-21 -17 -23.5 -43.5t14.5 -47.5 q100 -123 100 -282t-100 -282q-17 -21 -14.5 -47.5t23.5 -42.5q18 -15 40 -15zM826 145q27 0 47 20q87 93 87 219t-87 219q-18 19 -45 20t-46 -17t-20 -44.5t18 -46.5q52 -57 52 -131t-52 -131q-19 -20 -18 -46.5t20 -44.5q20 -17 44 -17z"
      ],
      "\uf1c8": [
        1536.0,
        "M1468 1156q28 -28 48 -76t20 -88v-1152q0 -40 -28 -68t-68 -28h-1344q-40 0 -68 28t-28 68v1600q0 40 28 68t68 28h896q40 0 88 -20t76 -48zM1024 1400v-376h376q-10 29 -22 41l-313 313q-12 12 -41 22zM1408 -128v1024h-416q-40 0 -68 28t-28 68v416h-768v-1536h1280z M768 768q52 0 90 -38t38 -90v-384q0 -52 -38 -90t-90 -38h-384q-52 0 -90 38t-38 90v384q0 52 38 90t90 38h384zM1260 766q20 -8 20 -30v-576q0 -22 -20 -30q-8 -2 -12 -2q-14 0 -23 9l-265 266v90l265 266q9 9 23 9q4 0 12 -2z"
      ],
      "\uf1c9": [
        1536.0,
        "M1468 1156q28 -28 48 -76t20 -88v-1152q0 -40 -28 -68t-68 -28h-1344q-40 0 -68 28t-28 68v1600q0 40 28 68t68 28h896q40 0 88 -20t76 -48zM1024 1400v-376h376q-10 29 -22 41l-313 313q-12 12 -41 22zM1408 -128v1024h-416q-40 0 -68 28t-28 68v416h-768v-1536h1280z M480 768q8 11 21 12.5t24 -6.5l51 -38q11 -8 12.5 -21t-6.5 -24l-182 -243l182 -243q8 -11 6.5 -24t-12.5 -21l-51 -38q-11 -8 -24 -6.5t-21 12.5l-226 301q-14 19 0 38zM1282 467q14 -19 0 -38l-226 -301q-8 -11 -21 -12.5t-24 6.5l-51 38q-11 8 -12.5 21t6.5 24l182 243 l-182 243q-8 11 -6.5 24t12.5 21l51 38q11 8 24 6.5t21 -12.5zM662 6q-13 2 -20.5 13t-5.5 24l138 831q2 13 13 20.5t24 5.5l63 -10q13 -2 20.5 -13t5.5 -24l-138 -831q-2 -13 -13 -20.5t-24 -5.5z"
      ],
      "\uf1ca": [
        1536.0,
        "M1497 709v-198q-101 -23 -198 -23q-65 -136 -165.5 -271t-181.5 -215.5t-128 -106.5q-80 -45 -162 3q-28 17 -60.5 43.5t-85 83.5t-102.5 128.5t-107.5 184t-105.5 244t-91.5 314.5t-70.5 390h283q26 -218 70 -398.5t104.5 -317t121.5 -235.5t140 -195q169 169 287 406 q-142 72 -223 220t-81 333q0 192 104 314.5t284 122.5q178 0 273 -105.5t95 -297.5q0 -159 -58 -286q-7 -1 -19.5 -3t-46 -2t-63 6t-62 25.5t-50.5 51.5q31 103 31 184q0 87 -29 132t-79 45q-53 0 -85 -49.5t-32 -140.5q0 -186 105 -293.5t267 -107.5q62 0 121 14z"
      ],
      "\uf1cb": [
        1792,
        "M216 367l603 -402v359l-334 223zM154 511l193 129l-193 129v-258zM973 -35l603 402l-269 180l-334 -223v-359zM896 458l272 182l-272 182l-272 -182zM485 733l334 223v359l-603 -402zM1445 640l193 -129v258zM1307 733l269 180l-603 402v-359zM1792 913v-546 q0 -41 -34 -64l-819 -546q-21 -13 -43 -13t-43 13l-819 546q-34 23 -34 64v546q0 41 34 64l819 546q21 13 43 13t43 -13l819 -546q34 -23 34 -64z"
      ],
      "\uf1cc": [
        2048,
        "M1800 764q111 -46 179.5 -145.5t68.5 -221.5q0 -164 -118 -280.5t-285 -116.5q-4 0 -11.5 0.5t-10.5 0.5h-1209h-1h-2h-5q-170 10 -288 125.5t-118 280.5q0 110 55 203t147 147q-12 39 -12 82q0 115 82 196t199 81q95 0 172 -58q75 154 222.5 248t326.5 94 q166 0 306 -80.5t221.5 -218.5t81.5 -301q0 -6 -0.5 -18t-0.5 -18zM468 498q0 -122 84 -193t208 -71q137 0 240 99q-16 20 -47.5 56.5t-43.5 50.5q-67 -65 -144 -65q-55 0 -93.5 33.5t-38.5 87.5q0 53 38.5 87t91.5 34q44 0 84.5 -21t73 -55t65 -75t69 -82t77 -75t97 -55 t121.5 -21q121 0 204.5 71.5t83.5 190.5q0 121 -84 192t-207 71q-143 0 -241 -97l93 -108q66 64 142 64q52 0 92 -33t40 -84q0 -57 -37 -91.5t-94 -34.5q-43 0 -82.5 21t-72 55t-65.5 75t-69.5 82t-77.5 75t-96.5 55t-118.5 21q-122 0 -207 -70.5t-85 -189.5z"
      ],
      "\uf1cd": [
        1792,
        "M896 1536q182 0 348 -71t286 -191t191 -286t71 -348t-71 -348t-191 -286t-286 -191t-348 -71t-348 71t-286 191t-191 286t-71 348t71 348t191 286t286 191t348 71zM896 1408q-190 0 -361 -90l194 -194q82 28 167 28t167 -28l194 194q-171 90 -361 90zM218 279l194 194 q-28 82 -28 167t28 167l-194 194q-90 -171 -90 -361t90 -361zM896 -128q190 0 361 90l-194 194q-82 -28 -167 -28t-167 28l-194 -194q171 -90 361 -90zM896 256q159 0 271.5 112.5t112.5 271.5t-112.5 271.5t-271.5 112.5t-271.5 -112.5t-112.5 -271.5t112.5 -271.5 t271.5 -112.5zM1380 473l194 -194q90 171 90 361t-90 361l-194 -194q28 -82 28 -167t-28 -167z"
      ],
      "\uf1ce": [
        1792,
        "M1760 640q0 -176 -68.5 -336t-184 -275.5t-275.5 -184t-336 -68.5t-336 68.5t-275.5 184t-184 275.5t-68.5 336q0 213 97 398.5t265 305.5t374 151v-228q-221 -45 -366.5 -221t-145.5 -406q0 -130 51 -248.5t136.5 -204t204 -136.5t248.5 -51t248.5 51t204 136.5 t136.5 204t51 248.5q0 230 -145.5 406t-366.5 221v228q206 -31 374 -151t265 -305.5t97 -398.5z"
      ],
      "\uf1d0": [
        1792,
        "M19 662q8 217 116 406t305 318h5q0 -1 -1 -3q-8 -8 -28 -33.5t-52 -76.5t-60 -110.5t-44.5 -135.5t-14 -150.5t39 -157.5t108.5 -154q50 -50 102 -69.5t90.5 -11.5t69.5 23.5t47 32.5l16 16q39 51 53 116.5t6.5 122.5t-21 107t-26.5 80l-14 29q-10 25 -30.5 49.5t-43 41 t-43.5 29.5t-35 19l-13 6l104 115q39 -17 78 -52t59 -61l19 -27q1 48 -18.5 103.5t-40.5 87.5l-20 31l161 183l160 -181q-33 -46 -52.5 -102.5t-22.5 -90.5l-4 -33q22 37 61.5 72.5t67.5 52.5l28 17l103 -115q-44 -14 -85 -50t-60 -65l-19 -29q-31 -56 -48 -133.5t-7 -170 t57 -156.5q33 -45 77.5 -60.5t85 -5.5t76 26.5t57.5 33.5l21 16q60 53 96.5 115t48.5 121.5t10 121.5t-18 118t-37 107.5t-45.5 93t-45 72t-34.5 47.5l-13 17q-14 13 -7 13l10 -3q40 -29 62.5 -46t62 -50t64 -58t58.5 -65t55.5 -77t45.5 -88t38 -103t23.5 -117t10.5 -136 q3 -259 -108 -465t-312 -321t-456 -115q-185 0 -351 74t-283.5 198t-184 293t-60.5 353z"
      ],
      "\uf1d1": [
        1792,
        "M874 -102v-66q-208 6 -385 109.5t-283 275.5l58 34q29 -49 73 -99l65 57q148 -168 368 -212l-17 -86q65 -12 121 -13zM276 428l-83 -28q22 -60 49 -112l-57 -33q-98 180 -98 385t98 385l57 -33q-30 -56 -49 -112l82 -28q-35 -100 -35 -212q0 -109 36 -212zM1528 251 l58 -34q-106 -172 -283 -275.5t-385 -109.5v66q56 1 121 13l-17 86q220 44 368 212l65 -57q44 50 73 99zM1377 805l-233 -80q14 -42 14 -85t-14 -85l232 -80q-31 -92 -98 -169l-185 162q-57 -67 -147 -85l48 -241q-52 -10 -98 -10t-98 10l48 241q-90 18 -147 85l-185 -162 q-67 77 -98 169l232 80q-14 42 -14 85t14 85l-233 80q33 93 99 169l185 -162q59 68 147 86l-48 240q44 10 98 10t98 -10l-48 -240q88 -18 147 -86l185 162q66 -76 99 -169zM874 1448v-66q-65 -2 -121 -13l17 -86q-220 -42 -368 -211l-65 56q-38 -42 -73 -98l-57 33 q106 172 282 275.5t385 109.5zM1705 640q0 -205 -98 -385l-57 33q27 52 49 112l-83 28q36 103 36 212q0 112 -35 212l82 28q-19 56 -49 112l57 33q98 -180 98 -385zM1585 1063l-57 -33q-35 56 -73 98l-65 -56q-148 169 -368 211l17 86q-56 11 -121 13v66q209 -6 385 -109.5 t282 -275.5zM1748 640q0 173 -67.5 331t-181.5 272t-272 181.5t-331 67.5t-331 -67.5t-272 -181.5t-181.5 -272t-67.5 -331t67.5 -331t181.5 -272t272 -181.5t331 -67.5t331 67.5t272 181.5t181.5 272t67.5 331zM1792 640q0 -182 -71 -348t-191 -286t-286 -191t-348 -71 t-348 71t-286 191t-191 286t-71 348t71 348t191 286t286 191t348 71t348 -71t286 -191t191 -286t71 -348z"
      ],
      "\uf1d2": [
        1536.0,
        "M582 228q0 -66 -93 -66q-107 0 -107 63q0 64 98 64q102 0 102 -61zM546 694q0 -85 -74 -85q-77 0 -77 84q0 90 77 90q36 0 55 -25.5t19 -63.5zM712 769v125q-78 -29 -135 -29q-50 29 -110 29q-86 0 -145 -57t-59 -143q0 -50 29.5 -102t73.5 -67v-3q-38 -17 -38 -85 q0 -53 41 -77v-3q-113 -37 -113 -139q0 -45 20 -78.5t54 -51t72 -25.5t81 -8q224 0 224 188q0 67 -48 99t-126 46q-27 5 -51.5 20.5t-24.5 39.5q0 44 49 52q77 15 122 70t45 134q0 24 -10 52q37 9 49 13zM771 350h137q-2 27 -2 82v387q0 46 2 69h-137q3 -23 3 -71v-392 q0 -50 -3 -75zM1280 366v121q-30 -21 -68 -21q-53 0 -53 82v225h52q9 0 26.5 -1t26.5 -1v117h-105q0 82 3 102h-140q4 -24 4 -55v-47h-60v-117q36 3 37 3q3 0 11 -0.5t12 -0.5v-2h-2v-217q0 -37 2.5 -64t11.5 -56.5t24.5 -48.5t43.5 -31t66 -12q64 0 108 24zM924 1072 q0 36 -24 63.5t-60 27.5t-60.5 -27t-24.5 -64q0 -36 25 -62.5t60 -26.5t59.5 27t24.5 62zM1536 1120v-960q0 -119 -84.5 -203.5t-203.5 -84.5h-960q-119 0 -203.5 84.5t-84.5 203.5v960q0 119 84.5 203.5t203.5 84.5h960q119 0 203.5 -84.5t84.5 -203.5z"
      ],
      "\uf1d3": [
        1792,
        "M595 22q0 100 -165 100q-158 0 -158 -104q0 -101 172 -101q151 0 151 105zM536 777q0 61 -30 102t-89 41q-124 0 -124 -145q0 -135 124 -135q119 0 119 137zM805 1101v-202q-36 -12 -79 -22q16 -43 16 -84q0 -127 -73 -216.5t-197 -112.5q-40 -8 -59.5 -27t-19.5 -58 q0 -31 22.5 -51.5t58 -32t78.5 -22t86 -25.5t78.5 -37.5t58 -64t22.5 -98.5q0 -304 -363 -304q-69 0 -130 12.5t-116 41t-87.5 82t-32.5 127.5q0 165 182 225v4q-67 41 -67 126q0 109 63 137v4q-72 24 -119.5 108.5t-47.5 165.5q0 139 95 231.5t235 92.5q96 0 178 -47 q98 0 218 47zM1123 220h-222q4 45 4 134v609q0 94 -4 128h222q-4 -33 -4 -124v-613q0 -89 4 -134zM1724 442v-196q-71 -39 -174 -39q-62 0 -107 20t-70 50t-39.5 78t-18.5 92t-4 103v351h2v4q-7 0 -19 1t-18 1q-21 0 -59 -6v190h96v76q0 54 -6 89h227q-6 -41 -6 -165h171 v-190q-15 0 -43.5 2t-42.5 2h-85v-365q0 -131 87 -131q61 0 109 33zM1148 1389q0 -58 -39 -101.5t-96 -43.5q-58 0 -98 43.5t-40 101.5q0 59 39.5 103t98.5 44q58 0 96.5 -44.5t38.5 -102.5z"
      ],
      "\uf1d4": [
        1536.0,
        "M809 532l266 499h-112l-157 -312q-24 -48 -44 -92l-42 92l-155 312h-120l263 -493v-324h101v318zM1536 1120v-960q0 -119 -84.5 -203.5t-203.5 -84.5h-960q-119 0 -203.5 84.5t-84.5 203.5v960q0 119 84.5 203.5t203.5 84.5h960q119 0 203.5 -84.5t84.5 -203.5z"
      ],
      "\uf1d5": [
        1280,
        "M842 964q0 -80 -57 -136.5t-136 -56.5q-60 0 -111 35q-62 -67 -115 -146q-247 -371 -202 -859q1 -22 -12.5 -38.5t-34.5 -18.5h-5q-20 0 -35 13.5t-17 33.5q-14 126 -3.5 247.5t29.5 217t54 186t69 155.5t74 125q61 90 132 165q-16 35 -16 77q0 80 56.5 136.5t136.5 56.5 t136.5 -56.5t56.5 -136.5zM1223 953q0 -158 -78 -292t-212.5 -212t-292.5 -78q-64 0 -131 14q-21 5 -32.5 23.5t-6.5 39.5q5 20 23 31.5t39 7.5q51 -13 108 -13q97 0 186 38t153 102t102 153t38 186t-38 186t-102 153t-153 102t-186 38t-186 -38t-153 -102t-102 -153 t-38 -186q0 -114 52 -218q10 -20 3.5 -40t-25.5 -30t-39.5 -3t-30.5 26q-64 123 -64 265q0 119 46.5 227t124.5 186t186 124t226 46q158 0 292.5 -78t212.5 -212.5t78 -292.5z"
      ],
      "\uf1d6": [
        1792,
        "M270 730q-8 19 -8 52q0 20 11 49t24 45q-1 22 7.5 53t22.5 43q0 139 92.5 288.5t217.5 209.5q139 66 324 66q133 0 266 -55q49 -21 90 -48t71 -56t55 -68t42 -74t32.5 -84.5t25.5 -89.5t22 -98l1 -5q55 -83 55 -150q0 -14 -9 -40t-9 -38q0 -1 1.5 -3.5t3.5 -5t2 -3.5 q77 -114 120.5 -214.5t43.5 -208.5q0 -43 -19.5 -100t-55.5 -57q-9 0 -19.5 7.5t-19 17.5t-19 26t-16 26.5t-13.5 26t-9 17.5q-1 1 -3 1l-5 -4q-59 -154 -132 -223q20 -20 61.5 -38.5t69 -41.5t35.5 -65q-2 -4 -4 -16t-7 -18q-64 -97 -302 -97q-53 0 -110.5 9t-98 20 t-104.5 30q-15 5 -23 7q-14 4 -46 4.5t-40 1.5q-41 -45 -127.5 -65t-168.5 -20q-35 0 -69 1.5t-93 9t-101 20.5t-74.5 40t-32.5 64q0 40 10 59.5t41 48.5q11 2 40.5 13t49.5 12q4 0 14 2q2 2 2 4l-2 3q-48 11 -108 105.5t-73 156.5l-5 3q-4 0 -12 -20q-18 -41 -54.5 -74.5 t-77.5 -37.5h-1q-4 0 -6 4.5t-5 5.5q-23 54 -23 100q0 275 252 466z"
      ],
      "\uf1d7": [
        2048,
        "M580 1075q0 41 -25 66t-66 25q-43 0 -76 -25.5t-33 -65.5q0 -39 33 -64.5t76 -25.5q41 0 66 24.5t25 65.5zM1323 568q0 28 -25.5 50t-65.5 22q-27 0 -49.5 -22.5t-22.5 -49.5q0 -28 22.5 -50.5t49.5 -22.5q40 0 65.5 22t25.5 51zM1087 1075q0 41 -24.5 66t-65.5 25 q-43 0 -76 -25.5t-33 -65.5q0 -39 33 -64.5t76 -25.5q41 0 65.5 24.5t24.5 65.5zM1722 568q0 28 -26 50t-65 22q-27 0 -49.5 -22.5t-22.5 -49.5q0 -28 22.5 -50.5t49.5 -22.5q39 0 65 22t26 51zM1456 965q-31 4 -70 4q-169 0 -311 -77t-223.5 -208.5t-81.5 -287.5 q0 -78 23 -152q-35 -3 -68 -3q-26 0 -50 1.5t-55 6.5t-44.5 7t-54.5 10.5t-50 10.5l-253 -127l72 218q-290 203 -290 490q0 169 97.5 311t264 223.5t363.5 81.5q176 0 332.5 -66t262 -182.5t136.5 -260.5zM2048 404q0 -117 -68.5 -223.5t-185.5 -193.5l55 -181l-199 109 q-150 -37 -218 -37q-169 0 -311 70.5t-223.5 191.5t-81.5 264t81.5 264t223.5 191.5t311 70.5q161 0 303 -70.5t227.5 -192t85.5 -263.5z"
      ],
      "\uf1d8": [
        1792,
        "M1764 1525q33 -24 27 -64l-256 -1536q-5 -29 -32 -45q-14 -8 -31 -8q-11 0 -24 5l-453 185l-242 -295q-18 -23 -49 -23q-13 0 -22 4q-19 7 -30.5 23.5t-11.5 36.5v349l864 1059l-1069 -925l-395 162q-37 14 -40 55q-2 40 32 59l1664 960q15 9 32 9q20 0 36 -11z"
      ],
      "\uf1d9": [
        1792,
        "M1764 1525q33 -24 27 -64l-256 -1536q-5 -29 -32 -45q-14 -8 -31 -8q-11 0 -24 5l-527 215l-298 -327q-18 -21 -47 -21q-14 0 -23 4q-19 7 -30 23.5t-11 36.5v452l-472 193q-37 14 -40 55q-3 39 32 59l1664 960q35 21 68 -2zM1422 26l221 1323l-1434 -827l336 -137 l863 639l-478 -797z"
      ],
      "\uf1da": [
        1536.0,
        "M1536 640q0 -156 -61 -298t-164 -245t-245 -164t-298 -61q-172 0 -327 72.5t-264 204.5q-7 10 -6.5 22.5t8.5 20.5l137 138q10 9 25 9q16 -2 23 -12q73 -95 179 -147t225 -52q104 0 198.5 40.5t163.5 109.5t109.5 163.5t40.5 198.5t-40.5 198.5t-109.5 163.5 t-163.5 109.5t-198.5 40.5q-98 0 -188 -35.5t-160 -101.5l137 -138q31 -30 14 -69q-17 -40 -59 -40h-448q-26 0 -45 19t-19 45v448q0 42 40 59q39 17 69 -14l130 -129q107 101 244.5 156.5t284.5 55.5q156 0 298 -61t245 -164t164 -245t61 -298zM896 928v-448q0 -14 -9 -23 t-23 -9h-320q-14 0 -23 9t-9 23v64q0 14 9 23t23 9h224v352q0 14 9 23t23 9h64q14 0 23 -9t9 -23z"
      ],
      "\uf1db": [
        1536.0,
        "M768 1280q-130 0 -248.5 -51t-204 -136.5t-136.5 -204t-51 -248.5t51 -248.5t136.5 -204t204 -136.5t248.5 -51t248.5 51t204 136.5t136.5 204t51 248.5t-51 248.5t-136.5 204t-204 136.5t-248.5 51zM1536 640q0 -209 -103 -385.5t-279.5 -279.5t-385.5 -103t-385.5 103 t-279.5 279.5t-103 385.5t103 385.5t279.5 279.5t385.5 103t385.5 -103t279.5 -279.5t103 -385.5z"
      ],
      "\uf1dc": [
        1792,
        "M1682 -128q-44 0 -132.5 3.5t-133.5 3.5q-44 0 -132 -3.5t-132 -3.5q-24 0 -37 20.5t-13 45.5q0 31 17 46t39 17t51 7t45 15q33 21 33 140l-1 391q0 21 -1 31q-13 4 -50 4h-675q-38 0 -51 -4q-1 -10 -1 -31l-1 -371q0 -142 37 -164q16 -10 48 -13t57 -3.5t45 -15 t20 -45.5q0 -26 -12.5 -48t-36.5 -22q-47 0 -139.5 3.5t-138.5 3.5q-43 0 -128 -3.5t-127 -3.5q-23 0 -35.5 21t-12.5 45q0 30 15.5 45t36 17.5t47.5 7.5t42 15q33 23 33 143l-1 57v813q0 3 0.5 26t0 36.5t-1.5 38.5t-3.5 42t-6.5 36.5t-11 31.5t-16 18q-15 10 -45 12t-53 2 t-41 14t-18 45q0 26 12 48t36 22q46 0 138.5 -3.5t138.5 -3.5q42 0 126.5 3.5t126.5 3.5q25 0 37.5 -22t12.5 -48q0 -30 -17 -43.5t-38.5 -14.5t-49.5 -4t-43 -13q-35 -21 -35 -160l1 -320q0 -21 1 -32q13 -3 39 -3h699q25 0 38 3q1 11 1 32l1 320q0 139 -35 160 q-18 11 -58.5 12.5t-66 13t-25.5 49.5q0 26 12.5 48t37.5 22q44 0 132 -3.5t132 -3.5q43 0 129 3.5t129 3.5q25 0 37.5 -22t12.5 -48q0 -30 -17.5 -44t-40 -14.5t-51.5 -3t-44 -12.5q-35 -23 -35 -161l1 -943q0 -119 34 -140q16 -10 46 -13.5t53.5 -4.5t41.5 -15.5t18 -44.5 q0 -26 -12 -48t-36 -22z"
      ],
      "\uf1dd": [
        1280,
        "M1278 1347v-73q0 -29 -18.5 -61t-42.5 -32q-50 0 -54 -1q-26 -6 -32 -31q-3 -11 -3 -64v-1152q0 -25 -18 -43t-43 -18h-108q-25 0 -43 18t-18 43v1218h-143v-1218q0 -25 -17.5 -43t-43.5 -18h-108q-26 0 -43.5 18t-17.5 43v496q-147 12 -245 59q-126 58 -192 179 q-64 117 -64 259q0 166 88 286q88 118 209 159q111 37 417 37h479q25 0 43 -18t18 -43z"
      ],
      "\uf1de": [
        1536.0,
        "M352 128v-128h-352v128h352zM704 256q26 0 45 -19t19 -45v-256q0 -26 -19 -45t-45 -19h-256q-26 0 -45 19t-19 45v256q0 26 19 45t45 19h256zM864 640v-128h-864v128h864zM224 1152v-128h-224v128h224zM1536 128v-128h-736v128h736zM576 1280q26 0 45 -19t19 -45v-256 q0 -26 -19 -45t-45 -19h-256q-26 0 -45 19t-19 45v256q0 26 19 45t45 19h256zM1216 768q26 0 45 -19t19 -45v-256q0 -26 -19 -45t-45 -19h-256q-26 0 -45 19t-19 45v256q0 26 19 45t45 19h256zM1536 640v-128h-224v128h224zM1536 1152v-128h-864v128h864z"
      ],
      "\uf1e0": [
        1536.0,
        "M1216 512q133 0 226.5 -93.5t93.5 -226.5t-93.5 -226.5t-226.5 -93.5t-226.5 93.5t-93.5 226.5q0 12 2 34l-360 180q-92 -86 -218 -86q-133 0 -226.5 93.5t-93.5 226.5t93.5 226.5t226.5 93.5q126 0 218 -86l360 180q-2 22 -2 34q0 133 93.5 226.5t226.5 93.5 t226.5 -93.5t93.5 -226.5t-93.5 -226.5t-226.5 -93.5q-126 0 -218 86l-360 -180q2 -22 2 -34t-2 -34l360 -180q92 86 218 86z"
      ],
      "\uf1e1": [
        1536.0,
        "M1280 341q0 88 -62.5 151t-150.5 63q-84 0 -145 -58l-241 120q2 16 2 23t-2 23l241 120q61 -58 145 -58q88 0 150.5 63t62.5 151t-62.5 150.5t-150.5 62.5t-151 -62.5t-63 -150.5q0 -7 2 -23l-241 -120q-62 57 -145 57q-88 0 -150.5 -62.5t-62.5 -150.5t62.5 -150.5 t150.5 -62.5q83 0 145 57l241 -120q-2 -16 -2 -23q0 -88 63 -150.5t151 -62.5t150.5 62.5t62.5 150.5zM1536 1120v-960q0 -119 -84.5 -203.5t-203.5 -84.5h-960q-119 0 -203.5 84.5t-84.5 203.5v960q0 119 84.5 203.5t203.5 84.5h960q119 0 203.5 -84.5t84.5 -203.5z"
      ],
      "\uf1e2": [
        1792,
        "M571 947q-10 25 -34 35t-49 0q-108 -44 -191 -127t-127 -191q-10 -25 0 -49t35 -34q13 -5 24 -5q42 0 60 40q34 84 98.5 148.5t148.5 98.5q25 11 35 35t0 49zM1513 1303l46 -46l-244 -243l68 -68q19 -19 19 -45.5t-19 -45.5l-64 -64q89 -161 89 -343q0 -143 -55.5 -273.5 t-150 -225t-225 -150t-273.5 -55.5t-273.5 55.5t-225 150t-150 225t-55.5 273.5t55.5 273.5t150 225t225 150t273.5 55.5q182 0 343 -89l64 64q19 19 45.5 19t45.5 -19l68 -68zM1521 1359q-10 -10 -22 -10q-13 0 -23 10l-91 90q-9 10 -9 23t9 23q10 9 23 9t23 -9l90 -91 q10 -9 10 -22.5t-10 -22.5zM1751 1129q-11 -9 -23 -9t-23 9l-90 91q-10 9 -10 22.5t10 22.5q9 10 22.5 10t22.5 -10l91 -90q9 -10 9 -23t-9 -23zM1792 1312q0 -14 -9 -23t-23 -9h-96q-14 0 -23 9t-9 23t9 23t23 9h96q14 0 23 -9t9 -23zM1600 1504v-96q0 -14 -9 -23t-23 -9 t-23 9t-9 23v96q0 14 9 23t23 9t23 -9t9 -23zM1751 1449l-91 -90q-10 -10 -22 -10q-13 0 -23 10q-10 9 -10 22.5t10 22.5l90 91q10 9 23 9t23 -9q9 -10 9 -23t-9 -23z"
      ],
      "\uf1e3": [
        1792,
        "M609 720l287 208l287 -208l-109 -336h-355zM896 1536q182 0 348 -71t286 -191t191 -286t71 -348t-71 -348t-191 -286t-286 -191t-348 -71t-348 71t-286 191t-191 286t-71 348t71 348t191 286t286 191t348 71zM1515 186q149 203 149 454v3l-102 -89l-240 224l63 323 l134 -12q-150 206 -389 282l53 -124l-287 -159l-287 159l53 124q-239 -76 -389 -282l135 12l62 -323l-240 -224l-102 89v-3q0 -251 149 -454l30 132l326 -40l139 -298l-116 -69q117 -39 240 -39t240 39l-116 69l139 298l326 40z"
      ],
      "\uf1e4": [
        1792,
        "M448 224v-192q0 -14 -9 -23t-23 -9h-192q-14 0 -23 9t-9 23v192q0 14 9 23t23 9h192q14 0 23 -9t9 -23zM256 608v-192q0 -14 -9 -23t-23 -9h-192q-14 0 -23 9t-9 23v192q0 14 9 23t23 9h192q14 0 23 -9t9 -23zM832 224v-192q0 -14 -9 -23t-23 -9h-192q-14 0 -23 9t-9 23 v192q0 14 9 23t23 9h192q14 0 23 -9t9 -23zM640 608v-192q0 -14 -9 -23t-23 -9h-192q-14 0 -23 9t-9 23v192q0 14 9 23t23 9h192q14 0 23 -9t9 -23zM66 768q-28 0 -47 19t-19 46v129h514v-129q0 -27 -19 -46t-46 -19h-383zM1216 224v-192q0 -14 -9 -23t-23 -9h-192 q-14 0 -23 9t-9 23v192q0 14 9 23t23 9h192q14 0 23 -9t9 -23zM1024 608v-192q0 -14 -9 -23t-23 -9h-192q-14 0 -23 9t-9 23v192q0 14 9 23t23 9h192q14 0 23 -9t9 -23zM1600 224v-192q0 -14 -9 -23t-23 -9h-192q-14 0 -23 9t-9 23v192q0 14 9 23t23 9h192q14 0 23 -9t9 -23 zM1408 608v-192q0 -14 -9 -23t-23 -9h-192q-14 0 -23 9t-9 23v192q0 14 9 23t23 9h192q14 0 23 -9t9 -23zM1792 1016v-13h-514v10q0 104 -382 102q-382 -1 -382 -102v-10h-514v13q0 17 8.5 43t34 64t65.5 75.5t110.5 76t160 67.5t224 47.5t293.5 18.5t293 -18.5t224 -47.5 t160.5 -67.5t110.5 -76t65.5 -75.5t34 -64t8.5 -43zM1792 608v-192q0 -14 -9 -23t-23 -9h-192q-14 0 -23 9t-9 23v192q0 14 9 23t23 9h192q14 0 23 -9t9 -23zM1792 962v-129q0 -27 -19 -46t-46 -19h-384q-27 0 -46 19t-19 46v129h514z"
      ],
      "\uf1e5": [
        1792,
        "M704 1216v-768q0 -26 -19 -45t-45 -19v-576q0 -26 -19 -45t-45 -19h-512q-26 0 -45 19t-19 45v512l249 873q7 23 31 23h424zM1024 1216v-704h-256v704h256zM1792 320v-512q0 -26 -19 -45t-45 -19h-512q-26 0 -45 19t-19 45v576q-26 0 -45 19t-19 45v768h424q24 0 31 -23z M736 1504v-224h-352v224q0 14 9 23t23 9h288q14 0 23 -9t9 -23zM1408 1504v-224h-352v224q0 14 9 23t23 9h288q14 0 23 -9t9 -23z"
      ],
      "\uf1e6": [
        1792,
        "M1755 1083q37 -38 37 -90.5t-37 -90.5l-401 -400l150 -150l-160 -160q-163 -163 -389.5 -186.5t-411.5 100.5l-362 -362h-181v181l362 362q-124 185 -100.5 411.5t186.5 389.5l160 160l150 -150l400 401q38 37 91 37t90 -37t37 -90.5t-37 -90.5l-400 -401l234 -234 l401 400q38 37 91 37t90 -37z"
      ],
      "\uf1e7": [
        1792,
        "M873 796q0 -83 -63.5 -142.5t-152.5 -59.5t-152.5 59.5t-63.5 142.5q0 84 63.5 143t152.5 59t152.5 -59t63.5 -143zM1375 796q0 -83 -63 -142.5t-153 -59.5q-89 0 -152.5 59.5t-63.5 142.5q0 84 63.5 143t152.5 59q90 0 153 -59t63 -143zM1600 616v667q0 87 -32 123.5 t-111 36.5h-1112q-83 0 -112.5 -34t-29.5 -126v-673q43 -23 88.5 -40t81 -28t81 -18.5t71 -11t70 -4t58.5 -0.5t56.5 2t44.5 2q68 1 95 -27q6 -6 10 -9q26 -25 61 -51q7 91 118 87q5 0 36.5 -1.5t43 -2t45.5 -1t53 1t54.5 4.5t61 8.5t62 13.5t67 19.5t67.5 27t72 34.5z M1763 621q-121 -149 -372 -252q84 -285 -23 -465q-66 -113 -183 -148q-104 -32 -182 15q-86 51 -82 164l-1 326v1q-8 2 -24.5 6t-23.5 5l-1 -338q4 -114 -83 -164q-79 -47 -183 -15q-117 36 -182 150q-105 180 -22 463q-251 103 -372 252q-25 37 -4 63t60 -1q4 -2 11.5 -7 t10.5 -8v694q0 72 47 123t114 51h1257q67 0 114 -51t47 -123v-694l21 15q39 27 60 1t-4 -63z"
      ],
      "\uf1e8": [
        1792,
        "M896 1102v-434h-145v434h145zM1294 1102v-434h-145v434h145zM1294 342l253 254v795h-1194v-1049h326v-217l217 217h398zM1692 1536v-1013l-434 -434h-326l-217 -217h-217v217h-398v1158l109 289h1483z"
      ],
      "\uf1e9": [
        1536.0,
        "M773 217v-127q-1 -292 -6 -305q-12 -32 -51 -40q-54 -9 -181.5 38t-162.5 89q-13 15 -17 36q-1 12 4 26q4 10 34 47t181 216q1 0 60 70q15 19 39.5 24.5t49.5 -3.5q24 -10 37.5 -29t12.5 -42zM624 468q-3 -55 -52 -70l-120 -39q-275 -88 -292 -88q-35 2 -54 36 q-12 25 -17 75q-8 76 1 166.5t30 124.5t56 32q13 0 202 -77q71 -29 115 -47l84 -34q23 -9 35.5 -30.5t11.5 -48.5zM1450 171q-7 -54 -91.5 -161t-135.5 -127q-37 -14 -63 7q-14 10 -184 287l-47 77q-14 21 -11.5 46t19.5 46q35 43 83 26q1 -1 119 -40q203 -66 242 -79.5 t47 -20.5q28 -22 22 -61zM778 803q5 -102 -54 -122q-58 -17 -114 71l-378 598q-8 35 19 62q41 43 207.5 89.5t224.5 31.5q40 -10 49 -45q3 -18 22 -305.5t24 -379.5zM1440 695q3 -39 -26 -59q-15 -10 -329 -86q-67 -15 -91 -23l1 2q-23 -6 -46 4t-37 32q-30 47 0 87 q1 1 75 102q125 171 150 204t34 39q28 19 65 2q48 -23 123 -133.5t81 -167.5v-3z"
      ],
      "\uf1ea": [
        2048,
        "M1024 1024h-384v-384h384v384zM1152 384v-128h-640v128h640zM1152 1152v-640h-640v640h640zM1792 384v-128h-512v128h512zM1792 640v-128h-512v128h512zM1792 896v-128h-512v128h512zM1792 1152v-128h-512v128h512zM256 192v960h-128v-960q0 -26 19 -45t45 -19t45 19 t19 45zM1920 192v1088h-1536v-1088q0 -33 -11 -64h1483q26 0 45 19t19 45zM2048 1408v-1216q0 -80 -56 -136t-136 -56h-1664q-80 0 -136 56t-56 136v1088h256v128h1792z"
      ],
      "\uf1eb": [
        2048,
        "M1024 13q-20 0 -93 73.5t-73 93.5q0 32 62.5 54t103.5 22t103.5 -22t62.5 -54q0 -20 -73 -93.5t-93 -73.5zM1294 284q-2 0 -40 25t-101.5 50t-128.5 25t-128.5 -25t-101 -50t-40.5 -25q-18 0 -93.5 75t-75.5 93q0 13 10 23q78 77 196 121t233 44t233 -44t196 -121 q10 -10 10 -23q0 -18 -75.5 -93t-93.5 -75zM1567 556q-11 0 -23 8q-136 105 -252 154.5t-268 49.5q-85 0 -170.5 -22t-149 -53t-113.5 -62t-79 -53t-31 -22q-17 0 -92 75t-75 93q0 12 10 22q132 132 320 205t380 73t380 -73t320 -205q10 -10 10 -22q0 -18 -75 -93t-92 -75z M1838 827q-11 0 -22 9q-179 157 -371.5 236.5t-420.5 79.5t-420.5 -79.5t-371.5 -236.5q-11 -9 -22 -9q-17 0 -92.5 75t-75.5 93q0 13 10 23q187 186 445 288t527 102t527 -102t445 -288q10 -10 10 -23q0 -18 -75.5 -93t-92.5 -75z"
      ],
      "\uf1ec": [
        1792,
        "M384 0q0 53 -37.5 90.5t-90.5 37.5t-90.5 -37.5t-37.5 -90.5t37.5 -90.5t90.5 -37.5t90.5 37.5t37.5 90.5zM768 0q0 53 -37.5 90.5t-90.5 37.5t-90.5 -37.5t-37.5 -90.5t37.5 -90.5t90.5 -37.5t90.5 37.5t37.5 90.5zM384 384q0 53 -37.5 90.5t-90.5 37.5t-90.5 -37.5 t-37.5 -90.5t37.5 -90.5t90.5 -37.5t90.5 37.5t37.5 90.5zM1152 0q0 53 -37.5 90.5t-90.5 37.5t-90.5 -37.5t-37.5 -90.5t37.5 -90.5t90.5 -37.5t90.5 37.5t37.5 90.5zM768 384q0 53 -37.5 90.5t-90.5 37.5t-90.5 -37.5t-37.5 -90.5t37.5 -90.5t90.5 -37.5t90.5 37.5 t37.5 90.5zM384 768q0 53 -37.5 90.5t-90.5 37.5t-90.5 -37.5t-37.5 -90.5t37.5 -90.5t90.5 -37.5t90.5 37.5t37.5 90.5zM1152 384q0 53 -37.5 90.5t-90.5 37.5t-90.5 -37.5t-37.5 -90.5t37.5 -90.5t90.5 -37.5t90.5 37.5t37.5 90.5zM768 768q0 53 -37.5 90.5t-90.5 37.5 t-90.5 -37.5t-37.5 -90.5t37.5 -90.5t90.5 -37.5t90.5 37.5t37.5 90.5zM1536 0v384q0 52 -38 90t-90 38t-90 -38t-38 -90v-384q0 -52 38 -90t90 -38t90 38t38 90zM1152 768q0 53 -37.5 90.5t-90.5 37.5t-90.5 -37.5t-37.5 -90.5t37.5 -90.5t90.5 -37.5t90.5 37.5t37.5 90.5z M1536 1088v256q0 26 -19 45t-45 19h-1280q-26 0 -45 -19t-19 -45v-256q0 -26 19 -45t45 -19h1280q26 0 45 19t19 45zM1536 768q0 53 -37.5 90.5t-90.5 37.5t-90.5 -37.5t-37.5 -90.5t37.5 -90.5t90.5 -37.5t90.5 37.5t37.5 90.5zM1664 1408v-1536q0 -52 -38 -90t-90 -38 h-1408q-52 0 -90 38t-38 90v1536q0 52 38 90t90 38h1408q52 0 90 -38t38 -90z"
      ],
      "\uf1ed": [
        1536.0,
        "M1519 890q18 -84 -4 -204q-87 -444 -565 -444h-44q-25 0 -44 -16.5t-24 -42.5l-4 -19l-55 -346l-2 -15q-5 -26 -24.5 -42.5t-44.5 -16.5h-251q-21 0 -33 15t-9 36q9 56 26.5 168t26.5 168t27 167.5t27 167.5q5 37 43 37h131q133 -2 236 21q175 39 287 144q102 95 155 246 q24 70 35 133q1 6 2.5 7.5t3.5 1t6 -3.5q79 -59 98 -162zM1347 1172q0 -107 -46 -236q-80 -233 -302 -315q-113 -40 -252 -42q0 -1 -90 -1l-90 1q-100 0 -118 -96q-2 -8 -85 -530q-1 -10 -12 -10h-295q-22 0 -36.5 16.5t-11.5 38.5l232 1471q5 29 27.5 48t51.5 19h598 q34 0 97.5 -13t111.5 -32q107 -41 163.5 -123t56.5 -196z"
      ],
      "\uf1ee": [
        1792,
        "M441 864q33 0 52 -26q266 -364 362 -774h-446q-127 441 -367 749q-12 16 -3 33.5t29 17.5h373zM1000 507q-49 -199 -125 -393q-79 310 -256 594q40 221 44 449q211 -340 337 -650zM1099 1216q235 -324 384.5 -698.5t184.5 -773.5h-451q-41 665 -553 1472h435zM1792 640 q0 -424 -101 -812q-67 560 -359 1083q-25 301 -106 584q-4 16 5.5 28.5t25.5 12.5h359q21 0 38.5 -13t22.5 -33q115 -409 115 -850z"
      ],
      "\uf1f0": [
        2304,
        "M1975 546h-138q14 37 66 179l3 9q4 10 10 26t9 26l12 -55zM531 611l-58 295q-11 54 -75 54h-268l-2 -13q311 -79 403 -336zM710 960l-162 -438l-17 89q-26 70 -85 129.5t-131 88.5l135 -510h175l261 641h-176zM849 318h166l104 642h-166zM1617 944q-69 27 -149 27 q-123 0 -201 -59t-79 -153q-1 -102 145 -174q48 -23 67 -41t19 -39q0 -30 -30 -46t-69 -16q-86 0 -156 33l-22 11l-23 -144q74 -34 185 -34q130 -1 208.5 59t80.5 160q0 106 -140 174q-49 25 -71 42t-22 38q0 22 24.5 38.5t70.5 16.5q70 1 124 -24l15 -8zM2042 960h-128 q-65 0 -87 -54l-246 -588h174l35 96h212q5 -22 20 -96h154zM2304 1280v-1280q0 -52 -38 -90t-90 -38h-2048q-52 0 -90 38t-38 90v1280q0 52 38 90t90 38h2048q52 0 90 -38t38 -90z"
      ],
      "\uf1f1": [
        2304,
        "M1119 1195q-128 85 -281 85q-103 0 -197.5 -40.5t-162.5 -108.5t-108.5 -162t-40.5 -197q0 -104 40.5 -198t108.5 -162t162 -108.5t198 -40.5q153 0 281 85q-131 107 -178 265.5t0.5 316.5t177.5 265zM1152 1171q-126 -99 -172 -249.5t-0.5 -300.5t172.5 -249 q127 99 172.5 249t-0.5 300.5t-172 249.5zM1185 1195q130 -107 177.5 -265.5t0.5 -317t-178 -264.5q128 -85 281 -85q104 0 198 40.5t162 108.5t108.5 162t40.5 198q0 103 -40.5 197t-108.5 162t-162.5 108.5t-197.5 40.5q-153 0 -281 -85zM1926 473h7v3h-17v-3h7v-17h3v17z M1955 456h4v20h-5l-6 -13l-6 13h-5v-20h3v15l6 -13h4l5 13v-15zM1947 16v-2h-2h-3v3h3h2v-1zM1947 7h3l-4 5h2l1 1q1 1 1 3t-1 3l-1 1h-3h-6v-13h3v5h1zM685 75q0 19 11 31t30 12q18 0 29 -12.5t11 -30.5q0 -19 -11 -31t-29 -12q-19 0 -30 12t-11 31zM1158 119q30 0 35 -32 h-70q5 32 35 32zM1514 75q0 19 11 31t29 12t29.5 -12.5t11.5 -30.5q0 -19 -11 -31t-30 -12q-18 0 -29 12t-11 31zM1786 75q0 18 11.5 30.5t29.5 12.5t29.5 -12.5t11.5 -30.5q0 -19 -11.5 -31t-29.5 -12t-29.5 12.5t-11.5 30.5zM1944 3q-2 0 -4 1q-1 0 -3 2t-2 3q-1 2 -1 4 q0 3 1 4q0 2 2 4l1 1q2 0 2 1q2 1 4 1q3 0 4 -1l4 -2l2 -4v-1q1 -2 1 -3l-1 -1v-3t-1 -1l-1 -2q-2 -2 -4 -2q-1 -1 -4 -1zM599 7h30v85q0 24 -14.5 38.5t-39.5 15.5q-32 0 -47 -24q-14 24 -45 24q-24 0 -39 -20v16h-30v-135h30v75q0 36 33 36q30 0 30 -36v-75h29v75 q0 36 33 36q30 0 30 -36v-75zM765 7h29v68v67h-29v-16q-17 20 -43 20q-29 0 -48 -20t-19 -51t19 -51t48 -20q28 0 43 20v-17zM943 48q0 34 -47 40l-14 2q-23 4 -23 14q0 15 25 15q23 0 43 -11l12 24q-22 14 -55 14q-26 0 -41 -12t-15 -32q0 -33 47 -39l13 -2q24 -4 24 -14 q0 -17 -31 -17q-25 0 -45 14l-13 -23q25 -17 58 -17q29 0 45.5 12t16.5 32zM1073 14l-8 25q-13 -7 -26 -7q-19 0 -19 22v61h48v27h-48v41h-30v-41h-28v-27h28v-61q0 -50 47 -50q21 0 36 10zM1159 146q-29 0 -48 -20t-19 -51q0 -32 19.5 -51.5t49.5 -19.5q33 0 55 19l-14 22 q-18 -15 -39 -15q-34 0 -41 33h101v12q0 32 -18 51.5t-46 19.5zM1318 146q-23 0 -35 -20v16h-30v-135h30v76q0 35 29 35q10 0 18 -4l9 28q-9 4 -21 4zM1348 75q0 -31 19.5 -51t52.5 -20q29 0 48 16l-14 24q-18 -13 -35 -12q-18 0 -29.5 12t-11.5 31t11.5 31t29.5 12 q19 0 35 -12l14 24q-20 16 -48 16q-33 0 -52.5 -20t-19.5 -51zM1593 7h30v68v67h-30v-16q-15 20 -42 20q-29 0 -48.5 -20t-19.5 -51t19.5 -51t48.5 -20q28 0 42 20v-17zM1726 146q-23 0 -35 -20v16h-29v-135h29v76q0 35 29 35q10 0 18 -4l9 28q-8 4 -21 4zM1866 7h29v68v122 h-29v-71q-15 20 -43 20t-47.5 -20.5t-19.5 -50.5t19.5 -50.5t47.5 -20.5q29 0 43 20v-17zM1944 27l-2 -1h-3q-2 -1 -4 -3q-3 -1 -3 -4q-1 -2 -1 -6q0 -3 1 -5q0 -2 3 -4q2 -2 4 -3t5 -1q4 0 6 1q0 1 2 2l2 1q1 1 3 4q1 2 1 5q0 4 -1 6q-1 1 -3 4q0 1 -2 2l-2 1q-1 0 -3 0.5 t-3 0.5zM2304 1280v-1280q0 -52 -38 -90t-90 -38h-2048q-52 0 -90 38t-38 90v1280q0 52 38 90t90 38h2048q52 0 90 -38t38 -90z"
      ],
      "\uf1f2": [
        2304,
        "M313 759q0 -51 -36 -84q-29 -26 -89 -26h-17v220h17q61 0 89 -27q36 -31 36 -83zM2089 824q0 -52 -64 -52h-19v101h20q63 0 63 -49zM380 759q0 74 -50 120.5t-129 46.5h-95v-333h95q74 0 119 38q60 51 60 128zM410 593h65v333h-65v-333zM730 694q0 40 -20.5 62t-75.5 42 q-29 10 -39.5 19t-10.5 23q0 16 13.5 26.5t34.5 10.5q29 0 53 -27l34 44q-41 37 -98 37q-44 0 -74 -27.5t-30 -67.5q0 -35 18 -55.5t64 -36.5q37 -13 45 -19q19 -12 19 -34q0 -20 -14 -33.5t-36 -13.5q-48 0 -71 44l-42 -40q44 -64 115 -64q51 0 83 30.5t32 79.5zM1008 604 v77q-37 -37 -78 -37q-49 0 -80.5 32.5t-31.5 82.5q0 48 31.5 81.5t77.5 33.5q43 0 81 -38v77q-40 20 -80 20q-74 0 -125.5 -50.5t-51.5 -123.5t51 -123.5t125 -50.5q42 0 81 19zM2240 0v527q-65 -40 -144.5 -84t-237.5 -117t-329.5 -137.5t-417.5 -134.5t-504 -118h1569 q26 0 45 19t19 45zM1389 757q0 75 -53 128t-128 53t-128 -53t-53 -128t53 -128t128 -53t128 53t53 128zM1541 584l144 342h-71l-90 -224l-89 224h-71l142 -342h35zM1714 593h184v56h-119v90h115v56h-115v74h119v57h-184v-333zM2105 593h80l-105 140q76 16 76 94q0 47 -31 73 t-87 26h-97v-333h65v133h9zM2304 1274v-1268q0 -56 -38.5 -95t-93.5 -39h-2040q-55 0 -93.5 39t-38.5 95v1268q0 56 38.5 95t93.5 39h2040q55 0 93.5 -39t38.5 -95z"
      ],
      "\uf1f3": [
        2304,
        "M119 854h89l-45 108zM740 328l74 79l-70 79h-163v-49h142v-55h-142v-54h159zM898 406l99 -110v217zM1186 453q0 33 -40 33h-84v-69h83q41 0 41 36zM1475 457q0 29 -42 29h-82v-61h81q43 0 43 32zM1197 923q0 29 -42 29h-82v-60h81q43 0 43 31zM1656 854h89l-44 108z M699 1009v-271h-66v212l-94 -212h-57l-94 212v-212h-132l-25 60h-135l-25 -60h-70l116 271h96l110 -257v257h106l85 -184l77 184h108zM1255 453q0 -20 -5.5 -35t-14 -25t-22.5 -16.5t-26 -10t-31.5 -4.5t-31.5 -1t-32.5 0.5t-29.5 0.5v-91h-126l-80 90l-83 -90h-256v271h260 l80 -89l82 89h207q109 0 109 -89zM964 794v-56h-217v271h217v-57h-152v-49h148v-55h-148v-54h152zM2304 235v-229q0 -55 -38.5 -94.5t-93.5 -39.5h-2040q-55 0 -93.5 39.5t-38.5 94.5v678h111l25 61h55l25 -61h218v46l19 -46h113l20 47v-47h541v99l10 1q10 0 10 -14v-86h279 v23q23 -12 55 -18t52.5 -6.5t63 0.5t51.5 1l25 61h56l25 -61h227v58l34 -58h182v378h-180v-44l-25 44h-185v-44l-23 44h-249q-69 0 -109 -22v22h-172v-22q-24 22 -73 22h-628l-43 -97l-43 97h-198v-44l-22 44h-169l-78 -179v391q0 55 38.5 94.5t93.5 39.5h2040 q55 0 93.5 -39.5t38.5 -94.5v-678h-120q-51 0 -81 -22v22h-177q-55 0 -78 -22v22h-316v-22q-31 22 -87 22h-209v-22q-23 22 -91 22h-234l-54 -58l-50 58h-349v-378h343l55 59l52 -59h211v89h21q59 0 90 13v-102h174v99h8q8 0 10 -2t2 -10v-87h529q57 0 88 24v-24h168 q60 0 95 17zM1546 469q0 -23 -12 -43t-34 -29q25 -9 34 -26t9 -46v-54h-65v45q0 33 -12 43.5t-46 10.5h-69v-99h-65v271h154q48 0 77 -15t29 -58zM1269 936q0 -24 -12.5 -44t-33.5 -29q26 -9 34.5 -25.5t8.5 -46.5v-53h-65q0 9 0.5 26.5t0 25t-3 18.5t-8.5 16t-17.5 8.5 t-29.5 3.5h-70v-98h-64v271l153 -1q49 0 78 -14.5t29 -57.5zM1798 327v-56h-216v271h216v-56h-151v-49h148v-55h-148v-54zM1372 1009v-271h-66v271h66zM2065 357q0 -86 -102 -86h-126v58h126q34 0 34 25q0 16 -17 21t-41.5 5t-49.5 3.5t-42 22.5t-17 55q0 39 26 60t66 21 h130v-57h-119q-36 0 -36 -25q0 -16 17.5 -20.5t42 -4t49 -2.5t42 -21.5t17.5 -54.5zM2304 407v-101q-24 -35 -88 -35h-125v58h125q33 0 33 25q0 13 -12.5 19t-31 5.5t-40 2t-40 8t-31 24t-12.5 48.5q0 39 26.5 60t66.5 21h129v-57h-118q-36 0 -36 -25q0 -20 29 -22t68.5 -5 t56.5 -26zM2139 1008v-270h-92l-122 203v-203h-132l-26 60h-134l-25 -60h-75q-129 0 -129 133q0 138 133 138h63v-59q-7 0 -28 1t-28.5 0.5t-23 -2t-21.5 -6.5t-14.5 -13.5t-11.5 -23t-3 -33.5q0 -38 13.5 -58t49.5 -20h29l92 213h97l109 -256v256h99l114 -188v188h66z"
      ],
      "\uf1f4": [
        2304,
        "M745 630q0 -37 -25.5 -61.5t-62.5 -24.5q-29 0 -46.5 16t-17.5 44q0 37 25 62.5t62 25.5q28 0 46.5 -16.5t18.5 -45.5zM1530 779q0 -42 -22 -57t-66 -15l-32 -1l17 107q2 11 13 11h18q22 0 35 -2t25 -12.5t12 -30.5zM1881 630q0 -36 -25.5 -61t-61.5 -25q-29 0 -47 16 t-18 44q0 37 25 62.5t62 25.5q28 0 46.5 -16.5t18.5 -45.5zM513 801q0 59 -38.5 85.5t-100.5 26.5h-160q-19 0 -21 -19l-65 -408q-1 -6 3 -11t10 -5h76q20 0 22 19l18 110q1 8 7 13t15 6.5t17 1.5t19 -1t14 -1q86 0 135 48.5t49 134.5zM822 489l41 261q1 6 -3 11t-10 5h-76 q-14 0 -17 -33q-27 40 -95 40q-72 0 -122.5 -54t-50.5 -127q0 -59 34.5 -94t92.5 -35q28 0 58 12t48 32q-4 -12 -4 -21q0 -16 13 -16h69q19 0 22 19zM1269 752q0 5 -4 9.5t-9 4.5h-77q-11 0 -18 -10l-106 -156l-44 150q-5 16 -22 16h-75q-5 0 -9 -4.5t-4 -9.5q0 -2 19.5 -59 t42 -123t23.5 -70q-82 -112 -82 -120q0 -13 13 -13h77q11 0 18 10l255 368q2 2 2 7zM1649 801q0 59 -38.5 85.5t-100.5 26.5h-159q-20 0 -22 -19l-65 -408q-1 -6 3 -11t10 -5h82q12 0 16 13l18 116q1 8 7 13t15 6.5t17 1.5t19 -1t14 -1q86 0 135 48.5t49 134.5zM1958 489 l41 261q1 6 -3 11t-10 5h-76q-14 0 -17 -33q-26 40 -95 40q-72 0 -122.5 -54t-50.5 -127q0 -59 34.5 -94t92.5 -35q29 0 59 12t47 32q0 -1 -2 -9t-2 -12q0 -16 13 -16h69q19 0 22 19zM2176 898v1q0 14 -13 14h-74q-11 0 -13 -11l-65 -416l-1 -2q0 -5 4 -9.5t10 -4.5h66 q19 0 21 19zM392 764q-5 -35 -26 -46t-60 -11l-33 -1l17 107q2 11 13 11h19q40 0 58 -11.5t12 -48.5zM2304 1280v-1280q0 -52 -38 -90t-90 -38h-2048q-52 0 -90 38t-38 90v1280q0 52 38 90t90 38h2048q52 0 90 -38t38 -90z"
      ],
      "\uf1f5": [
        2304,
        "M1597 633q0 -69 -21 -106q-19 -35 -52 -35q-23 0 -41 9v224q29 30 57 30q57 0 57 -122zM2035 669h-110q6 98 56 98q51 0 54 -98zM476 534q0 59 -33 91.5t-101 57.5q-36 13 -52 24t-16 25q0 26 38 26q58 0 124 -33l18 112q-67 32 -149 32q-77 0 -123 -38q-48 -39 -48 -109 q0 -58 32.5 -90.5t99.5 -56.5q39 -14 54.5 -25.5t15.5 -27.5q0 -31 -48 -31q-29 0 -70 12.5t-72 30.5l-18 -113q72 -41 168 -41q81 0 129 37q51 41 51 117zM771 749l19 111h-96v135l-129 -21l-18 -114l-46 -8l-17 -103h62v-219q0 -84 44 -120q38 -30 111 -30q32 0 79 11v118 q-32 -7 -44 -7q-42 0 -42 50v197h77zM1087 724v139q-15 3 -28 3q-32 0 -55.5 -16t-33.5 -46l-10 56h-131v-471h150v306q26 31 82 31q16 0 26 -2zM1124 389h150v471h-150v-471zM1746 638q0 122 -45 179q-40 52 -111 52q-64 0 -117 -56l-8 47h-132v-645l150 25v151 q36 -11 68 -11q83 0 134 56q61 65 61 202zM1278 986q0 33 -23 56t-56 23t-56 -23t-23 -56t23 -56.5t56 -23.5t56 23.5t23 56.5zM2176 629q0 113 -48 176q-50 64 -144 64q-96 0 -151.5 -66t-55.5 -180q0 -128 63 -188q55 -55 161 -55q101 0 160 40l-16 103q-57 -31 -128 -31 q-43 0 -63 19q-23 19 -28 66h248q2 14 2 52zM2304 1280v-1280q0 -52 -38 -90t-90 -38h-2048q-52 0 -90 38t-38 90v1280q0 52 38 90t90 38h2048q52 0 90 -38t38 -90z"
      ],
      "\uf1f6": [
        2048,
        "M1558 684q61 -356 298 -556q0 -52 -38 -90t-90 -38h-448q0 -106 -75 -181t-181 -75t-180.5 74.5t-75.5 180.5zM1024 -176q16 0 16 16t-16 16q-59 0 -101.5 42.5t-42.5 101.5q0 16 -16 16t-16 -16q0 -73 51.5 -124.5t124.5 -51.5zM2026 1424q8 -10 7.5 -23.5t-10.5 -22.5 l-1872 -1622q-10 -8 -23.5 -7t-21.5 11l-84 96q-8 10 -7.5 23.5t10.5 21.5l186 161q-19 32 -19 66q50 42 91 88t85 119.5t74.5 158.5t50 206t19.5 260q0 152 117 282.5t307 158.5q-8 19 -8 39q0 40 28 68t68 28t68 -28t28 -68q0 -20 -8 -39q124 -18 219 -82.5t148 -157.5 l418 363q10 8 23.5 7t21.5 -11z"
      ],
      "\uf1f7": [
        2048,
        "M1040 -160q0 16 -16 16q-59 0 -101.5 42.5t-42.5 101.5q0 16 -16 16t-16 -16q0 -73 51.5 -124.5t124.5 -51.5q16 0 16 16zM503 315l877 760q-42 88 -132.5 146.5t-223.5 58.5q-93 0 -169.5 -31.5t-121.5 -80.5t-69 -103t-24 -105q0 -384 -137 -645zM1856 128 q0 -52 -38 -90t-90 -38h-448q0 -106 -75 -181t-181 -75t-180.5 74.5t-75.5 180.5l149 129h757q-166 187 -227 459l111 97q61 -356 298 -556zM1942 1520l84 -96q8 -10 7.5 -23.5t-10.5 -22.5l-1872 -1622q-10 -8 -23.5 -7t-21.5 11l-84 96q-8 10 -7.5 23.5t10.5 21.5l186 161 q-19 32 -19 66q50 42 91 88t85 119.5t74.5 158.5t50 206t19.5 260q0 152 117 282.5t307 158.5q-8 19 -8 39q0 40 28 68t68 28t68 -28t28 -68q0 -20 -8 -39q124 -18 219 -82.5t148 -157.5l418 363q10 8 23.5 7t21.5 -11z"
      ],
      "\uf1f8": [
        1408,
        "M512 160v704q0 14 -9 23t-23 9h-64q-14 0 -23 -9t-9 -23v-704q0 -14 9 -23t23 -9h64q14 0 23 9t9 23zM768 160v704q0 14 -9 23t-23 9h-64q-14 0 -23 -9t-9 -23v-704q0 -14 9 -23t23 -9h64q14 0 23 9t9 23zM1024 160v704q0 14 -9 23t-23 9h-64q-14 0 -23 -9t-9 -23v-704 q0 -14 9 -23t23 -9h64q14 0 23 9t9 23zM480 1152h448l-48 117q-7 9 -17 11h-317q-10 -2 -17 -11zM1408 1120v-64q0 -14 -9 -23t-23 -9h-96v-948q0 -83 -47 -143.5t-113 -60.5h-832q-66 0 -113 58.5t-47 141.5v952h-96q-14 0 -23 9t-9 23v64q0 14 9 23t23 9h309l70 167 q15 37 54 63t79 26h320q40 0 79 -26t54 -63l70 -167h309q14 0 23 -9t9 -23z"
      ],
      "\uf1f9": [
        1536.0,
        "M1150 462v-109q0 -50 -36.5 -89t-94 -60.5t-118 -32.5t-117.5 -11q-205 0 -342.5 139t-137.5 346q0 203 136 339t339 136q34 0 75.5 -4.5t93 -18t92.5 -34t69 -56.5t28 -81v-109q0 -16 -16 -16h-118q-16 0 -16 16v70q0 43 -65.5 67.5t-137.5 24.5q-140 0 -228.5 -91.5 t-88.5 -237.5q0 -151 91.5 -249.5t233.5 -98.5q68 0 138 24t70 66v70q0 7 4.5 11.5t10.5 4.5h119q6 0 11 -4.5t5 -11.5zM768 1280q-130 0 -248.5 -51t-204 -136.5t-136.5 -204t-51 -248.5t51 -248.5t136.5 -204t204 -136.5t248.5 -51t248.5 51t204 136.5t136.5 204t51 248.5 t-51 248.5t-136.5 204t-204 136.5t-248.5 51zM1536 640q0 -209 -103 -385.5t-279.5 -279.5t-385.5 -103t-385.5 103t-279.5 279.5t-103 385.5t103 385.5t279.5 279.5t385.5 103t385.5 -103t279.5 -279.5t103 -385.5z"
      ],
      "\uf1fa": [
        1536.0,
        "M972 761q0 108 -53.5 169t-147.5 61q-63 0 -124 -30.5t-110 -84.5t-79.5 -137t-30.5 -180q0 -112 53.5 -173t150.5 -61q96 0 176 66.5t122.5 166t42.5 203.5zM1536 640q0 -111 -37 -197t-98.5 -135t-131.5 -74.5t-145 -27.5q-6 0 -15.5 -0.5t-16.5 -0.5q-95 0 -142 53 q-28 33 -33 83q-52 -66 -131.5 -110t-173.5 -44q-161 0 -249.5 95.5t-88.5 269.5q0 157 66 290t179 210.5t246 77.5q87 0 155 -35.5t106 -99.5l2 19l11 56q1 6 5.5 12t9.5 6h118q5 0 13 -11q5 -5 3 -16l-120 -614q-5 -24 -5 -48q0 -39 12.5 -52t44.5 -13q28 1 57 5.5t73 24 t77 50t57 89.5t24 137q0 292 -174 466t-466 174q-130 0 -248.5 -51t-204 -136.5t-136.5 -204t-51 -248.5t51 -248.5t136.5 -204t204 -136.5t248.5 -51q228 0 405 144q11 9 24 8t21 -12l41 -49q8 -12 7 -24q-2 -13 -12 -22q-102 -83 -227.5 -128t-258.5 -45q-156 0 -298 61 t-245 164t-164 245t-61 298t61 298t164 245t245 164t298 61q344 0 556 -212t212 -556z"
      ],
      "\uf1fb": [
        1792,
        "M1698 1442q94 -94 94 -226.5t-94 -225.5l-225 -223l104 -104q10 -10 10 -23t-10 -23l-210 -210q-10 -10 -23 -10t-23 10l-105 105l-603 -603q-37 -37 -90 -37h-203l-256 -128l-64 64l128 256v203q0 53 37 90l603 603l-105 105q-10 10 -10 23t10 23l210 210q10 10 23 10 t23 -10l104 -104l223 225q93 94 225.5 94t226.5 -94zM512 64l576 576l-192 192l-576 -576v-192h192z"
      ],
      "\uf1fc": [
        1792,
        "M1615 1536q70 0 122.5 -46.5t52.5 -116.5q0 -63 -45 -151q-332 -629 -465 -752q-97 -91 -218 -91q-126 0 -216.5 92.5t-90.5 219.5q0 128 92 212l638 579q59 54 130 54zM706 502q39 -76 106.5 -130t150.5 -76l1 -71q4 -213 -129.5 -347t-348.5 -134q-123 0 -218 46.5 t-152.5 127.5t-86.5 183t-29 220q7 -5 41 -30t62 -44.5t59 -36.5t46 -17q41 0 55 37q25 66 57.5 112.5t69.5 76t88 47.5t103 25.5t125 10.5z"
      ],
      "\uf1fd": [
        1792,
        "M1792 128v-384h-1792v384q45 0 85 14t59 27.5t47 37.5q30 27 51.5 38t56.5 11q24 0 44 -7t31 -15t33 -27q29 -25 47 -38t58 -27t86 -14q45 0 85 14.5t58 27t48 37.5q21 19 32.5 27t31 15t43.5 7q35 0 56.5 -11t51.5 -38q28 -24 47 -37.5t59 -27.5t85 -14t85 14t59 27.5 t47 37.5q30 27 51.5 38t56.5 11q34 0 55.5 -11t51.5 -38q28 -24 47 -37.5t59 -27.5t85 -14zM1792 448v-192q-24 0 -44 7t-31 15t-33 27q-29 25 -47 38t-58 27t-85 14q-46 0 -86 -14t-58 -27t-47 -38q-22 -19 -33 -27t-31 -15t-44 -7q-35 0 -56.5 11t-51.5 38q-29 25 -47 38 t-58 27t-86 14q-45 0 -85 -14.5t-58 -27t-48 -37.5q-21 -19 -32.5 -27t-31 -15t-43.5 -7q-35 0 -56.5 11t-51.5 38q-28 24 -47 37.5t-59 27.5t-85 14q-46 0 -86 -14t-58 -27t-47 -38q-30 -27 -51.5 -38t-56.5 -11v192q0 80 56 136t136 56h64v448h256v-448h256v448h256v-448 h256v448h256v-448h64q80 0 136 -56t56 -136zM512 1312q0 -77 -36 -118.5t-92 -41.5q-53 0 -90.5 37.5t-37.5 90.5q0 29 9.5 51t23.5 34t31 28t31 31.5t23.5 44.5t9.5 67q38 0 83 -74t45 -150zM1024 1312q0 -77 -36 -118.5t-92 -41.5q-53 0 -90.5 37.5t-37.5 90.5 q0 29 9.5 51t23.5 34t31 28t31 31.5t23.5 44.5t9.5 67q38 0 83 -74t45 -150zM1536 1312q0 -77 -36 -118.5t-92 -41.5q-53 0 -90.5 37.5t-37.5 90.5q0 29 9.5 51t23.5 34t31 28t31 31.5t23.5 44.5t9.5 67q38 0 83 -74t45 -150z"
      ],
      "\uf1fe": [
        2048,
        "M2048 0v-128h-2048v1536h128v-1408h1920zM1664 1024l256 -896h-1664v576l448 576l576 -576z"
      ],
      "\uf200": [
        1792,
        "M768 646l546 -546q-106 -108 -247.5 -168t-298.5 -60q-209 0 -385.5 103t-279.5 279.5t-103 385.5t103 385.5t279.5 279.5t385.5 103v-762zM955 640h773q0 -157 -60 -298.5t-168 -247.5zM1664 768h-768v768q209 0 385.5 -103t279.5 -279.5t103 -385.5z"
      ],
      "\uf201": [
        2048,
        "M2048 0v-128h-2048v1536h128v-1408h1920zM1920 1248v-435q0 -21 -19.5 -29.5t-35.5 7.5l-121 121l-633 -633q-10 -10 -23 -10t-23 10l-233 233l-416 -416l-192 192l585 585q10 10 23 10t23 -10l233 -233l464 464l-121 121q-16 16 -7.5 35.5t29.5 19.5h435q14 0 23 -9 t9 -23z"
      ],
      "\uf202": [
        1792,
        "M1292 832q0 -6 10 -41q10 -29 25 -49.5t41 -34t44 -20t55 -16.5q325 -91 325 -332q0 -146 -105.5 -242.5t-254.5 -96.5q-59 0 -111.5 18.5t-91.5 45.5t-77 74.5t-63 87.5t-53.5 103.5t-43.5 103t-39.5 106.5t-35.5 95q-32 81 -61.5 133.5t-73.5 96.5t-104 64t-142 20 q-96 0 -183 -55.5t-138 -144.5t-51 -185q0 -160 106.5 -279.5t263.5 -119.5q177 0 258 95q56 63 83 116l84 -152q-15 -34 -44 -70l1 -1q-131 -152 -388 -152q-147 0 -269.5 79t-190.5 207.5t-68 274.5q0 105 43.5 206t116 176.5t172 121.5t204.5 46q87 0 159 -19t123.5 -50 t95 -80t72.5 -99t58.5 -117t50.5 -124.5t50 -130.5t55 -127q96 -200 233 -200q81 0 138.5 48.5t57.5 128.5q0 42 -19 72t-50.5 46t-72.5 31.5t-84.5 27t-87.5 34t-81 52t-65 82t-39 122.5q-3 16 -3 33q0 110 87.5 192t198.5 78q78 -3 120.5 -14.5t90.5 -53.5h-1 q12 -11 23 -24.5t26 -36t19 -27.5l-129 -99q-26 49 -54 70v1q-23 21 -97 21q-49 0 -84 -33t-35 -83z"
      ],
      "\uf203": [
        1536.0,
        "M1432 484q0 173 -234 239q-35 10 -53 16.5t-38 25t-29 46.5q0 2 -2 8.5t-3 12t-1 7.5q0 36 24.5 59.5t60.5 23.5q54 0 71 -15h-1q20 -15 39 -51l93 71q-39 54 -49 64q-33 29 -67.5 39t-85.5 10q-80 0 -142 -57.5t-62 -137.5q0 -7 2 -23q16 -96 64.5 -140t148.5 -73 q29 -8 49 -15.5t45 -21.5t38.5 -34.5t13.5 -46.5v-5q1 -58 -40.5 -93t-100.5 -35q-97 0 -167 144q-23 47 -51.5 121.5t-48 125.5t-54 110.5t-74 95.5t-103.5 60.5t-147 24.5q-101 0 -192 -56t-144 -148t-50 -192v-1q4 -108 50.5 -199t133.5 -147.5t196 -56.5q186 0 279 110 q20 27 31 51l-60 109q-42 -80 -99 -116t-146 -36q-115 0 -191 87t-76 204q0 105 82 189t186 84q112 0 170 -53.5t104 -172.5q8 -21 25.5 -68.5t28.5 -76.5t31.5 -74.5t38.5 -74t45.5 -62.5t55.5 -53.5t66 -33t80 -13.5q107 0 183 69.5t76 174.5zM1536 1120v-960 q0 -119 -84.5 -203.5t-203.5 -84.5h-960q-119 0 -203.5 84.5t-84.5 203.5v960q0 119 84.5 203.5t203.5 84.5h960q119 0 203.5 -84.5t84.5 -203.5z"
      ],
      "\uf204": [
        2048,
        "M1152 640q0 104 -40.5 198.5t-109.5 163.5t-163.5 109.5t-198.5 40.5t-198.5 -40.5t-163.5 -109.5t-109.5 -163.5t-40.5 -198.5t40.5 -198.5t109.5 -163.5t163.5 -109.5t198.5 -40.5t198.5 40.5t163.5 109.5t109.5 163.5t40.5 198.5zM1920 640q0 104 -40.5 198.5 t-109.5 163.5t-163.5 109.5t-198.5 40.5h-386q119 -90 188.5 -224t69.5 -288t-69.5 -288t-188.5 -224h386q104 0 198.5 40.5t163.5 109.5t109.5 163.5t40.5 198.5zM2048 640q0 -130 -51 -248.5t-136.5 -204t-204 -136.5t-248.5 -51h-768q-130 0 -248.5 51t-204 136.5 t-136.5 204t-51 248.5t51 248.5t136.5 204t204 136.5t248.5 51h768q130 0 248.5 -51t204 -136.5t136.5 -204t51 -248.5z"
      ],
      "\uf205": [
        2048,
        "M0 640q0 130 51 248.5t136.5 204t204 136.5t248.5 51h768q130 0 248.5 -51t204 -136.5t136.5 -204t51 -248.5t-51 -248.5t-136.5 -204t-204 -136.5t-248.5 -51h-768q-130 0 -248.5 51t-204 136.5t-136.5 204t-51 248.5zM1408 128q104 0 198.5 40.5t163.5 109.5 t109.5 163.5t40.5 198.5t-40.5 198.5t-109.5 163.5t-163.5 109.5t-198.5 40.5t-198.5 -40.5t-163.5 -109.5t-109.5 -163.5t-40.5 -198.5t40.5 -198.5t109.5 -163.5t163.5 -109.5t198.5 -40.5z"
      ],
      "\uf206": [
        2304,
        "M762 384h-314q-40 0 -57.5 35t6.5 67l188 251q-65 31 -137 31q-132 0 -226 -94t-94 -226t94 -226t226 -94q115 0 203 72.5t111 183.5zM576 512h186q-18 85 -75 148zM1056 512l288 384h-480l-99 -132q105 -103 126 -252h165zM2176 448q0 132 -94 226t-226 94 q-60 0 -121 -24l174 -260q15 -23 10 -49t-27 -40q-15 -11 -36 -11q-35 0 -53 29l-174 260q-93 -95 -93 -225q0 -132 94 -226t226 -94t226 94t94 226zM2304 448q0 -185 -131.5 -316.5t-316.5 -131.5t-316.5 131.5t-131.5 316.5q0 97 39.5 183.5t109.5 149.5l-65 98l-353 -469 q-18 -26 -51 -26h-197q-23 -164 -149 -274t-294 -110q-185 0 -316.5 131.5t-131.5 316.5t131.5 316.5t316.5 131.5q114 0 215 -55l137 183h-224q-26 0 -45 19t-19 45t19 45t45 19h384v-128h435l-85 128h-222q-26 0 -45 19t-19 45t19 45t45 19h256q33 0 53 -28l267 -400 q91 44 192 44q185 0 316.5 -131.5t131.5 -316.5z"
      ],
      "\uf207": [
        1536.0,
        "M384 320q0 53 -37.5 90.5t-90.5 37.5t-90.5 -37.5t-37.5 -90.5t37.5 -90.5t90.5 -37.5t90.5 37.5t37.5 90.5zM1408 320q0 53 -37.5 90.5t-90.5 37.5t-90.5 -37.5t-37.5 -90.5t37.5 -90.5t90.5 -37.5t90.5 37.5t37.5 90.5zM1362 716l-72 384q-5 23 -22.5 37.5t-40.5 14.5 h-918q-23 0 -40.5 -14.5t-22.5 -37.5l-72 -384q-5 -30 14 -53t49 -23h1062q30 0 49 23t14 53zM1136 1328q0 20 -14 34t-34 14h-640q-20 0 -34 -14t-14 -34t14 -34t34 -14h640q20 0 34 14t14 34zM1536 603v-603h-128v-128q0 -53 -37.5 -90.5t-90.5 -37.5t-90.5 37.5 t-37.5 90.5v128h-768v-128q0 -53 -37.5 -90.5t-90.5 -37.5t-90.5 37.5t-37.5 90.5v128h-128v603q0 112 25 223l103 454q9 78 97.5 137t230 89t312.5 30t312.5 -30t230 -89t97.5 -137l105 -454q23 -102 23 -223z"
      ],
      "\uf208": [
        2048,
        "M1463 704q0 -35 -25 -60.5t-61 -25.5h-702q-36 0 -61 25.5t-25 60.5t25 60.5t61 25.5h702q36 0 61 -25.5t25 -60.5zM1677 704q0 86 -23 170h-982q-36 0 -61 25t-25 60q0 36 25 61t61 25h908q-88 143 -235 227t-320 84q-177 0 -327.5 -87.5t-238 -237.5t-87.5 -327 q0 -86 23 -170h982q36 0 61 -25t25 -60q0 -36 -25 -61t-61 -25h-908q88 -143 235.5 -227t320.5 -84q132 0 253 51.5t208 139t139 208t52 253.5zM2048 959q0 -35 -25 -60t-61 -25h-131q17 -85 17 -170q0 -167 -65.5 -319.5t-175.5 -263t-262.5 -176t-319.5 -65.5 q-246 0 -448.5 133t-301.5 350h-189q-36 0 -61 25t-25 61q0 35 25 60t61 25h132q-17 85 -17 170q0 167 65.5 319.5t175.5 263t262.5 176t320.5 65.5q245 0 447.5 -133t301.5 -350h188q36 0 61 -25t25 -61z"
      ],
      "\uf209": [
        1280,
        "M953 1158l-114 -328l117 -21q165 451 165 518q0 56 -38 56q-57 0 -130 -225zM654 471l33 -88q37 42 71 67l-33 5.5t-38.5 7t-32.5 8.5zM362 1367q0 -98 159 -521q17 10 49 10q15 0 75 -5l-121 351q-75 220 -123 220q-19 0 -29 -17.5t-10 -37.5zM283 608q0 -36 51.5 -119 t117.5 -153t100 -70q14 0 25.5 13t11.5 27q0 24 -32 102q-13 32 -32 72t-47.5 89t-61.5 81t-62 32q-20 0 -45.5 -27t-25.5 -47zM125 273q0 -41 25 -104q59 -145 183.5 -227t281.5 -82q227 0 382 170q152 169 152 427q0 43 -1 67t-11.5 62t-30.5 56q-56 49 -211.5 75.5 t-270.5 26.5q-37 0 -49 -11q-12 -5 -12 -35q0 -34 21.5 -60t55.5 -40t77.5 -23.5t87.5 -11.5t85 -4t70 0h23q24 0 40 -19q15 -19 19 -55q-28 -28 -96 -54q-61 -22 -93 -46q-64 -46 -108.5 -114t-44.5 -137q0 -31 18.5 -88.5t18.5 -87.5l-3 -12q-4 -12 -4 -14 q-137 10 -146 216q-8 -2 -41 -2q2 -7 2 -21q0 -53 -40.5 -89.5t-94.5 -36.5q-82 0 -166.5 78t-84.5 159q0 34 33 67q52 -64 60 -76q77 -104 133 -104q12 0 26.5 8.5t14.5 20.5q0 34 -87.5 145t-116.5 111q-43 0 -70 -44.5t-27 -90.5zM11 264q0 101 42.5 163t136.5 88 q-28 74 -28 104q0 62 61 123t122 61q29 0 70 -15q-163 462 -163 567q0 80 41 130.5t119 50.5q131 0 325 -581q6 -17 8 -23q6 16 29 79.5t43.5 118.5t54 127.5t64.5 123t70.5 86.5t76.5 36q71 0 112 -49t41 -122q0 -108 -159 -550q61 -15 100.5 -46t58.5 -78t26 -93.5 t7 -110.5q0 -150 -47 -280t-132 -225t-211 -150t-278 -55q-111 0 -223 42q-149 57 -258 191.5t-109 286.5z"
      ],
      "\uf20a": [
        2048,
        "M785 528h207q-14 -158 -98.5 -248.5t-214.5 -90.5q-162 0 -254.5 116t-92.5 316q0 194 93 311.5t233 117.5q148 0 232 -87t97 -247h-203q-5 64 -35.5 99t-81.5 35q-57 0 -88.5 -60.5t-31.5 -177.5q0 -48 5 -84t18 -69.5t40 -51.5t66 -18q95 0 109 139zM1497 528h206 q-14 -158 -98 -248.5t-214 -90.5q-162 0 -254.5 116t-92.5 316q0 194 93 311.5t233 117.5q148 0 232 -87t97 -247h-204q-4 64 -35 99t-81 35q-57 0 -88.5 -60.5t-31.5 -177.5q0 -48 5 -84t18 -69.5t39.5 -51.5t65.5 -18q49 0 76.5 38t33.5 101zM1856 647q0 207 -15.5 307 t-60.5 161q-6 8 -13.5 14t-21.5 15t-16 11q-86 63 -697 63q-625 0 -710 -63q-5 -4 -17.5 -11.5t-21 -14t-14.5 -14.5q-45 -60 -60 -159.5t-15 -308.5q0 -208 15 -307.5t60 -160.5q6 -8 15 -15t20.5 -14t17.5 -12q44 -33 239.5 -49t470.5 -16q610 0 697 65q5 4 17 11t20.5 14 t13.5 16q46 60 61 159t15 309zM2048 1408v-1536h-2048v1536h2048z"
      ],
      "\uf20b": [
        1536.0,
        "M992 912v-496q0 -14 -9 -23t-23 -9h-160q-14 0 -23 9t-9 23v496q0 112 -80 192t-192 80h-272v-1152q0 -14 -9 -23t-23 -9h-160q-14 0 -23 9t-9 23v1344q0 14 9 23t23 9h464q135 0 249 -66.5t180.5 -180.5t66.5 -249zM1376 1376v-880q0 -135 -66.5 -249t-180.5 -180.5 t-249 -66.5h-464q-14 0 -23 9t-9 23v960q0 14 9 23t23 9h160q14 0 23 -9t9 -23v-768h272q112 0 192 80t80 192v880q0 14 9 23t23 9h160q14 0 23 -9t9 -23z"
      ],
      "\uf20c": [
        1536.0,
        "M1311 694v-114q0 -24 -13.5 -38t-37.5 -14h-202q-24 0 -38 14t-14 38v114q0 24 14 38t38 14h202q24 0 37.5 -14t13.5 -38zM821 464v250q0 53 -32.5 85.5t-85.5 32.5h-133q-68 0 -96 -52q-28 52 -96 52h-130q-53 0 -85.5 -32.5t-32.5 -85.5v-250q0 -22 21 -22h55 q22 0 22 22v230q0 24 13.5 38t38.5 14h94q24 0 38 -14t14 -38v-230q0 -22 21 -22h54q22 0 22 22v230q0 24 14 38t38 14h97q24 0 37.5 -14t13.5 -38v-230q0 -22 22 -22h55q21 0 21 22zM1410 560v154q0 53 -33 85.5t-86 32.5h-264q-53 0 -86 -32.5t-33 -85.5v-410 q0 -21 22 -21h55q21 0 21 21v180q31 -42 94 -42h191q53 0 86 32.5t33 85.5zM1536 1176v-1072q0 -96 -68 -164t-164 -68h-1072q-96 0 -164 68t-68 164v1072q0 96 68 164t164 68h1072q96 0 164 -68t68 -164z"
      ],
      "\uf20d": [
        1536.0,
        "M915 450h-294l147 551zM1001 128h311l-324 1024h-440l-324 -1024h311l383 314zM1536 1120v-960q0 -118 -85 -203t-203 -85h-960q-118 0 -203 85t-85 203v960q0 118 85 203t203 85h960q118 0 203 -85t85 -203z"
      ],
      "\uf20e": [
        2048,
        "M2048 641q0 -21 -13 -36.5t-33 -19.5l-205 -356q3 -9 3 -18q0 -20 -12.5 -35.5t-32.5 -19.5l-193 -337q3 -8 3 -16q0 -23 -16.5 -40t-40.5 -17q-25 0 -41 18h-400q-17 -20 -43 -20t-43 20h-399q-17 -20 -43 -20q-23 0 -40 16.5t-17 40.5q0 8 4 20l-193 335 q-20 4 -32.5 19.5t-12.5 35.5q0 9 3 18l-206 356q-20 5 -32.5 20.5t-12.5 35.5q0 21 13.5 36.5t33.5 19.5l199 344q0 1 -0.5 3t-0.5 3q0 36 34 51l209 363q-4 10 -4 18q0 24 17 40.5t40 16.5q26 0 44 -21h396q16 21 43 21t43 -21h398q18 21 44 21q23 0 40 -16.5t17 -40.5 q0 -6 -4 -18l207 -358q23 -1 39 -17.5t16 -38.5q0 -13 -7 -27l187 -324q19 -4 31.5 -19.5t12.5 -35.5zM1063 -158h389l-342 354h-143l-342 -354h360q18 16 39 16t39 -16zM112 654q1 -4 1 -13q0 -10 -2 -15l208 -360l15 -6l188 199v347l-187 194q-13 -8 -29 -10zM986 1438 h-388l190 -200l554 200h-280q-16 -16 -38 -16t-38 16zM1689 226q1 6 5 11l-64 68l-17 -79h76zM1583 226l22 105l-252 266l-296 -307l63 -64h463zM1495 -142l16 28l65 310h-427l333 -343q8 4 13 5zM578 -158h5l342 354h-373v-335l4 -6q14 -5 22 -13zM552 226h402l64 66 l-309 321l-157 -166v-221zM359 226h163v189l-168 -177q4 -8 5 -12zM358 1051q0 -1 0.5 -2t0.5 -2q0 -16 -8 -29l171 -177v269zM552 1121v-311l153 -157l297 314l-223 236zM556 1425l-4 -8v-264l205 74l-191 201q-6 -2 -10 -3zM1447 1438h-16l-621 -224l213 -225zM1023 946 l-297 -315l311 -319l296 307zM688 634l-136 141v-284zM1038 270l-42 -44h85zM1374 618l238 -251l132 624l-3 5l-1 1zM1718 1018q-8 13 -8 29v2l-216 376q-5 1 -13 5l-437 -463l310 -327zM522 1142v223l-163 -282zM522 196h-163l163 -283v283zM1607 196l-48 -227l130 227h-82 zM1729 266l207 361q-2 10 -2 14q0 1 3 16l-171 296l-129 -612l77 -82q5 3 15 7z"
      ],
      "\uf210": [
        1536.0,
        "M0 856q0 131 91.5 226.5t222.5 95.5h742l352 358v-1470q0 -132 -91.5 -227t-222.5 -95h-780q-131 0 -222.5 95t-91.5 227v790zM1232 102l-176 180v425q0 46 -32 79t-78 33h-484q-46 0 -78 -33t-32 -79v-492q0 -46 32.5 -79.5t77.5 -33.5h770z"
      ],
      "\uf211": [
        1536.0,
        "M934 1386q-317 -121 -556 -362.5t-358 -560.5q-20 89 -20 176q0 208 102.5 384.5t278.5 279t384 102.5q82 0 169 -19zM1203 1267q93 -65 164 -155q-389 -113 -674.5 -400.5t-396.5 -676.5q-93 72 -155 162q112 386 395 671t667 399zM470 -67q115 356 379.5 622t619.5 384 q40 -92 54 -195q-292 -120 -516 -345t-343 -518q-103 14 -194 52zM1536 -125q-193 50 -367 115q-135 -84 -290 -107q109 205 274 370.5t369 275.5q-21 -152 -101 -284q65 -175 115 -370z"
      ],
      "\uf212": [
        2048,
        "M1893 1144l155 -1272q-131 0 -257 57q-200 91 -393 91q-226 0 -374 -148q-148 148 -374 148q-193 0 -393 -91q-128 -57 -252 -57h-5l155 1272q224 127 482 127q233 0 387 -106q154 106 387 106q258 0 482 -127zM1398 157q129 0 232 -28.5t260 -93.5l-124 1021 q-171 78 -368 78q-224 0 -374 -141q-150 141 -374 141q-197 0 -368 -78l-124 -1021q105 43 165.5 65t148.5 39.5t178 17.5q202 0 374 -108q172 108 374 108zM1438 191l-55 907q-211 -4 -359 -155q-152 155 -374 155q-176 0 -336 -66l-114 -941q124 51 228.5 76t221.5 25 q209 0 374 -102q172 107 374 102z"
      ],
      "\uf213": [
        2048,
        "M1500 165v733q0 21 -15 36t-35 15h-93q-20 0 -35 -15t-15 -36v-733q0 -20 15 -35t35 -15h93q20 0 35 15t15 35zM1216 165v531q0 20 -15 35t-35 15h-101q-20 0 -35 -15t-15 -35v-531q0 -20 15 -35t35 -15h101q20 0 35 15t15 35zM924 165v429q0 20 -15 35t-35 15h-101 q-20 0 -35 -15t-15 -35v-429q0 -20 15 -35t35 -15h101q20 0 35 15t15 35zM632 165v362q0 20 -15 35t-35 15h-101q-20 0 -35 -15t-15 -35v-362q0 -20 15 -35t35 -15h101q20 0 35 15t15 35zM2048 311q0 -166 -118 -284t-284 -118h-1244q-166 0 -284 118t-118 284 q0 116 63 214.5t168 148.5q-10 34 -10 73q0 113 80.5 193.5t193.5 80.5q102 0 180 -67q45 183 194 300t338 117q149 0 275 -73.5t199.5 -199.5t73.5 -275q0 -66 -14 -122q135 -33 221 -142.5t86 -247.5z"
      ],
      "\uf214": [
        1536.0,
        "M0 1536h1536v-1392l-776 -338l-760 338v1392zM1436 209v926h-1336v-926l661 -294zM1436 1235v201h-1336v-201h1336zM181 937v-115h-37v115h37zM181 789v-115h-37v115h37zM181 641v-115h-37v115h37zM181 493v-115h-37v115h37zM181 345v-115h-37v115h37zM207 202l15 34 l105 -47l-15 -33zM343 142l15 34l105 -46l-15 -34zM478 82l15 34l105 -46l-15 -34zM614 23l15 33l104 -46l-15 -34zM797 10l105 46l15 -33l-105 -47zM932 70l105 46l15 -34l-105 -46zM1068 130l105 46l15 -34l-105 -46zM1203 189l105 47l15 -34l-105 -46zM259 1389v-36h-114 v36h114zM421 1389v-36h-115v36h115zM583 1389v-36h-115v36h115zM744 1389v-36h-114v36h114zM906 1389v-36h-114v36h114zM1068 1389v-36h-115v36h115zM1230 1389v-36h-115v36h115zM1391 1389v-36h-114v36h114zM181 1049v-79h-37v115h115v-36h-78zM421 1085v-36h-115v36h115z M583 1085v-36h-115v36h115zM744 1085v-36h-114v36h114zM906 1085v-36h-114v36h114zM1068 1085v-36h-115v36h115zM1230 1085v-36h-115v36h115zM1355 970v79h-78v36h115v-115h-37zM1355 822v115h37v-115h-37zM1355 674v115h37v-115h-37zM1355 526v115h37v-115h-37zM1355 378 v115h37v-115h-37zM1355 230v115h37v-115h-37zM760 265q-129 0 -221 91.5t-92 221.5q0 129 92 221t221 92q130 0 221.5 -92t91.5 -221q0 -130 -91.5 -221.5t-221.5 -91.5zM595 646q0 -36 19.5 -56.5t49.5 -25t64 -7t64 -2t49.5 -9t19.5 -30.5q0 -49 -112 -49q-97 0 -123 51 h-3l-31 -63q67 -42 162 -42q29 0 56.5 5t55.5 16t45.5 33t17.5 53q0 46 -27.5 69.5t-67.5 27t-79.5 3t-67 5t-27.5 25.5q0 21 20.5 33t40.5 15t41 3q34 0 70.5 -11t51.5 -34h3l30 58q-3 1 -21 8.5t-22.5 9t-19.5 7t-22 7t-20 4.5t-24 4t-23 1q-29 0 -56.5 -5t-54 -16.5 t-43 -34t-16.5 -53.5z"
      ],
      "\uf215": [
        2048,
        "M863 504q0 112 -79.5 191.5t-191.5 79.5t-191 -79.5t-79 -191.5t79 -191t191 -79t191.5 79t79.5 191zM1726 505q0 112 -79 191t-191 79t-191.5 -79t-79.5 -191q0 -113 79.5 -192t191.5 -79t191 79.5t79 191.5zM2048 1314v-1348q0 -44 -31.5 -75.5t-76.5 -31.5h-1832 q-45 0 -76.5 31.5t-31.5 75.5v1348q0 44 31.5 75.5t76.5 31.5h431q44 0 76 -31.5t32 -75.5v-161h754v161q0 44 32 75.5t76 31.5h431q45 0 76.5 -31.5t31.5 -75.5z"
      ],
      "\uf216": [
        2048,
        "M1430 953zM1690 749q148 0 253 -98.5t105 -244.5q0 -157 -109 -261.5t-267 -104.5q-85 0 -162 27.5t-138 73.5t-118 106t-109 126t-103.5 132.5t-108.5 126.5t-117 106t-136 73.5t-159 27.5q-154 0 -251.5 -91.5t-97.5 -244.5q0 -157 104 -250t263 -93q100 0 208 37.5 t193 98.5q5 4 21 18.5t30 24t22 9.5q14 0 24.5 -10.5t10.5 -24.5q0 -24 -60 -77q-101 -88 -234.5 -142t-260.5 -54q-133 0 -245.5 58t-180 165t-67.5 241q0 205 141.5 341t347.5 136q120 0 226.5 -43.5t185.5 -113t151.5 -153t139 -167.5t133.5 -153.5t149.5 -113 t172.5 -43.5q102 0 168.5 61.5t66.5 162.5q0 95 -64.5 159t-159.5 64q-30 0 -81.5 -18.5t-68.5 -18.5q-20 0 -35.5 15t-15.5 35q0 18 8.5 57t8.5 59q0 159 -107.5 263t-266.5 104q-58 0 -111.5 -18.5t-84 -40.5t-55.5 -40.5t-33 -18.5q-15 0 -25.5 10.5t-10.5 25.5 q0 19 25 46q59 67 147 103.5t182 36.5q191 0 318 -125.5t127 -315.5q0 -37 -4 -66q57 15 115 15z"
      ],
      "\uf217": [
        1664,
        "M1216 832q0 26 -19 45t-45 19h-128v128q0 26 -19 45t-45 19t-45 -19t-19 -45v-128h-128q-26 0 -45 -19t-19 -45t19 -45t45 -19h128v-128q0 -26 19 -45t45 -19t45 19t19 45v128h128q26 0 45 19t19 45zM640 0q0 -53 -37.5 -90.5t-90.5 -37.5t-90.5 37.5t-37.5 90.5 t37.5 90.5t90.5 37.5t90.5 -37.5t37.5 -90.5zM1536 0q0 -53 -37.5 -90.5t-90.5 -37.5t-90.5 37.5t-37.5 90.5t37.5 90.5t90.5 37.5t90.5 -37.5t37.5 -90.5zM1664 1088v-512q0 -24 -16 -42.5t-41 -21.5l-1044 -122q1 -7 4.5 -21.5t6 -26.5t2.5 -22q0 -16 -24 -64h920 q26 0 45 -19t19 -45t-19 -45t-45 -19h-1024q-26 0 -45 19t-19 45q0 14 11 39.5t29.5 59.5t20.5 38l-177 823h-204q-26 0 -45 19t-19 45t19 45t45 19h256q16 0 28.5 -6.5t20 -15.5t13 -24.5t7.5 -26.5t5.5 -29.5t4.5 -25.5h1201q26 0 45 -19t19 -45z"
      ],
      "\uf218": [
        1664,
        "M1280 832q0 26 -19 45t-45 19t-45 -19l-147 -146v293q0 26 -19 45t-45 19t-45 -19t-19 -45v-293l-147 146q-19 19 -45 19t-45 -19t-19 -45t19 -45l256 -256q19 -19 45 -19t45 19l256 256q19 19 19 45zM640 0q0 -53 -37.5 -90.5t-90.5 -37.5t-90.5 37.5t-37.5 90.5 t37.5 90.5t90.5 37.5t90.5 -37.5t37.5 -90.5zM1536 0q0 -53 -37.5 -90.5t-90.5 -37.5t-90.5 37.5t-37.5 90.5t37.5 90.5t90.5 37.5t90.5 -37.5t37.5 -90.5zM1664 1088v-512q0 -24 -16 -42.5t-41 -21.5l-1044 -122q1 -7 4.5 -21.5t6 -26.5t2.5 -22q0 -16 -24 -64h920 q26 0 45 -19t19 -45t-19 -45t-45 -19h-1024q-26 0 -45 19t-19 45q0 14 11 39.5t29.5 59.5t20.5 38l-177 823h-204q-26 0 -45 19t-19 45t19 45t45 19h256q16 0 28.5 -6.5t20 -15.5t13 -24.5t7.5 -26.5t5.5 -29.5t4.5 -25.5h1201q26 0 45 -19t19 -45z"
      ],
      "\uf219": [
        2048,
        "M212 768l623 -665l-300 665h-323zM1024 -4l349 772h-698zM538 896l204 384h-262l-288 -384h346zM1213 103l623 665h-323zM683 896h682l-204 384h-274zM1510 896h346l-288 384h-262zM1651 1382l384 -512q14 -18 13 -41.5t-17 -40.5l-960 -1024q-18 -20 -47 -20t-47 20 l-960 1024q-16 17 -17 40.5t13 41.5l384 512q18 26 51 26h1152q33 0 51 -26z"
      ],
      "\uf21a": [
        2048,
        "M1811 -19q19 19 45 19t45 -19l128 -128l-90 -90l-83 83l-83 -83q-18 -19 -45 -19t-45 19l-83 83l-83 -83q-19 -19 -45 -19t-45 19l-83 83l-83 -83q-19 -19 -45 -19t-45 19l-83 83l-83 -83q-19 -19 -45 -19t-45 19l-83 83l-83 -83q-19 -19 -45 -19t-45 19l-83 83l-83 -83 q-19 -19 -45 -19t-45 19l-83 83l-83 -83q-19 -19 -45 -19t-45 19l-128 128l90 90l83 -83l83 83q19 19 45 19t45 -19l83 -83l83 83q19 19 45 19t45 -19l83 -83l83 83q19 19 45 19t45 -19l83 -83l83 83q19 19 45 19t45 -19l83 -83l83 83q19 19 45 19t45 -19l83 -83l83 83 q19 19 45 19t45 -19l83 -83zM237 19q-19 -19 -45 -19t-45 19l-128 128l90 90l83 -82l83 82q19 19 45 19t45 -19l83 -82l64 64v293l-210 314q-17 26 -7 56.5t40 40.5l177 58v299h128v128h256v128h256v-128h256v-128h128v-299l177 -58q30 -10 40 -40.5t-7 -56.5l-210 -314 v-293l19 18q19 19 45 19t45 -19l83 -82l83 82q19 19 45 19t45 -19l128 -128l-90 -90l-83 83l-83 -83q-18 -19 -45 -19t-45 19l-83 83l-83 -83q-19 -19 -45 -19t-45 19l-83 83l-83 -83q-19 -19 -45 -19t-45 19l-83 83l-83 -83q-19 -19 -45 -19t-45 19l-83 83l-83 -83 q-19 -19 -45 -19t-45 19l-83 83l-83 -83q-19 -19 -45 -19t-45 19l-83 83zM640 1152v-128l384 128l384 -128v128h-128v128h-512v-128h-128z"
      ],
      "\uf21b": [
        1536.0,
        "M576 0l96 448l-96 128l-128 64zM832 0l128 640l-128 -64l-96 -128zM992 1010q-2 4 -4 6q-10 8 -96 8q-70 0 -167 -19q-7 -2 -21 -2t-21 2q-97 19 -167 19q-86 0 -96 -8q-2 -2 -4 -6q2 -18 4 -27q2 -3 7.5 -6.5t7.5 -10.5q2 -4 7.5 -20.5t7 -20.5t7.5 -17t8.5 -17t9 -14 t12 -13.5t14 -9.5t17.5 -8t20.5 -4t24.5 -2q36 0 59 12.5t32.5 30t14.5 34.5t11.5 29.5t17.5 12.5h12q11 0 17.5 -12.5t11.5 -29.5t14.5 -34.5t32.5 -30t59 -12.5q13 0 24.5 2t20.5 4t17.5 8t14 9.5t12 13.5t9 14t8.5 17t7.5 17t7 20.5t7.5 20.5q2 7 7.5 10.5t7.5 6.5 q2 9 4 27zM1408 131q0 -121 -73 -190t-194 -69h-874q-121 0 -194 69t-73 190q0 61 4.5 118t19 125.5t37.5 123.5t63.5 103.5t93.5 74.5l-90 220h214q-22 64 -22 128q0 12 2 32q-194 40 -194 96q0 57 210 99q17 62 51.5 134t70.5 114q32 37 76 37q30 0 84 -31t84 -31t84 31 t84 31q44 0 76 -37q36 -42 70.5 -114t51.5 -134q210 -42 210 -99q0 -56 -194 -96q7 -81 -20 -160h214l-82 -225q63 -33 107.5 -96.5t65.5 -143.5t29 -151.5t8 -148.5z"
      ],
      "\uf21c": [
        2304,
        "M2301 500q12 -103 -22 -198.5t-99 -163.5t-158.5 -106t-196.5 -31q-161 11 -279.5 125t-134.5 274q-12 111 27.5 210.5t118.5 170.5l-71 107q-96 -80 -151 -194t-55 -244q0 -27 -18.5 -46.5t-45.5 -19.5h-256h-69q-23 -164 -149 -274t-294 -110q-185 0 -316.5 131.5 t-131.5 316.5t131.5 316.5t316.5 131.5q76 0 152 -27l24 45q-123 110 -304 110h-64q-26 0 -45 19t-19 45t19 45t45 19h128q78 0 145 -13.5t116.5 -38.5t71.5 -39.5t51 -36.5h512h115l-85 128h-222q-30 0 -49 22.5t-14 52.5q4 23 23 38t43 15h253q33 0 53 -28l70 -105 l114 114q19 19 46 19h101q26 0 45 -19t19 -45v-128q0 -26 -19 -45t-45 -19h-179l115 -172q131 63 275 36q143 -26 244 -134.5t118 -253.5zM448 128q115 0 203 72.5t111 183.5h-314q-35 0 -55 31q-18 32 -1 63l147 277q-47 13 -91 13q-132 0 -226 -94t-94 -226t94 -226 t226 -94zM1856 128q132 0 226 94t94 226t-94 226t-226 94q-60 0 -121 -24l174 -260q15 -23 10 -49t-27 -40q-15 -11 -36 -11q-35 0 -53 29l-174 260q-93 -95 -93 -225q0 -132 94 -226t226 -94z"
      ],
      "\uf21d": [
        1536.0,
        "M1408 0q0 -63 -61.5 -113.5t-164 -81t-225 -46t-253.5 -15.5t-253.5 15.5t-225 46t-164 81t-61.5 113.5q0 49 33 88.5t91 66.5t118 44.5t131 29.5q26 5 48 -10.5t26 -41.5q5 -26 -10.5 -48t-41.5 -26q-58 -10 -106 -23.5t-76.5 -25.5t-48.5 -23.5t-27.5 -19.5t-8.5 -12 q3 -11 27 -26.5t73 -33t114 -32.5t160.5 -25t201.5 -10t201.5 10t160.5 25t114 33t73 33.5t27 27.5q-1 4 -8.5 11t-27.5 19t-48.5 23.5t-76.5 25t-106 23.5q-26 4 -41.5 26t-10.5 48q4 26 26 41.5t48 10.5q71 -12 131 -29.5t118 -44.5t91 -66.5t33 -88.5zM1024 896v-384 q0 -26 -19 -45t-45 -19h-64v-384q0 -26 -19 -45t-45 -19h-256q-26 0 -45 19t-19 45v384h-64q-26 0 -45 19t-19 45v384q0 53 37.5 90.5t90.5 37.5h384q53 0 90.5 -37.5t37.5 -90.5zM928 1280q0 -93 -65.5 -158.5t-158.5 -65.5t-158.5 65.5t-65.5 158.5t65.5 158.5t158.5 65.5 t158.5 -65.5t65.5 -158.5z"
      ],
      "\uf21e": [
        1792,
        "M1280 512h305q-5 -6 -10 -10.5t-9 -7.5l-3 -4l-623 -600q-18 -18 -44 -18t-44 18l-624 602q-5 2 -21 20h369q22 0 39.5 13.5t22.5 34.5l70 281l190 -667q6 -20 23 -33t39 -13q21 0 38 13t23 33l146 485l56 -112q18 -35 57 -35zM1792 940q0 -145 -103 -300h-369l-111 221 q-8 17 -25.5 27t-36.5 8q-45 -5 -56 -46l-129 -430l-196 686q-6 20 -23.5 33t-39.5 13t-39 -13.5t-22 -34.5l-116 -464h-423q-103 155 -103 300q0 220 127 344t351 124q62 0 126.5 -21.5t120 -58t95.5 -68.5t76 -68q36 36 76 68t95.5 68.5t120 58t126.5 21.5q224 0 351 -124 t127 -344z"
      ],
      "\uf221": [
        1280,
        "M1152 960q0 -221 -147.5 -384.5t-364.5 -187.5v-260h224q14 0 23 -9t9 -23v-64q0 -14 -9 -23t-23 -9h-224v-224q0 -14 -9 -23t-23 -9h-64q-14 0 -23 9t-9 23v224h-224q-14 0 -23 9t-9 23v64q0 14 9 23t23 9h224v260q-150 16 -271.5 103t-186 224t-52.5 292 q11 134 80.5 249t182 188t245.5 88q170 19 319 -54t236 -212t87 -306zM128 960q0 -185 131.5 -316.5t316.5 -131.5t316.5 131.5t131.5 316.5t-131.5 316.5t-316.5 131.5t-316.5 -131.5t-131.5 -316.5z"
      ],
      "\uf222": [
        1536.0,
        "M1472 1408q26 0 45 -19t19 -45v-416q0 -14 -9 -23t-23 -9h-64q-14 0 -23 9t-9 23v262l-382 -383q126 -156 126 -359q0 -117 -45.5 -223.5t-123 -184t-184 -123t-223.5 -45.5t-223.5 45.5t-184 123t-123 184t-45.5 223.5t45.5 223.5t123 184t184 123t223.5 45.5 q203 0 359 -126l382 382h-261q-14 0 -23 9t-9 23v64q0 14 9 23t23 9h416zM576 0q185 0 316.5 131.5t131.5 316.5t-131.5 316.5t-316.5 131.5t-316.5 -131.5t-131.5 -316.5t131.5 -316.5t316.5 -131.5z"
      ],
      "\uf223": [
        1280,
        "M830 1220q145 -72 233.5 -210.5t88.5 -305.5q0 -221 -147.5 -384.5t-364.5 -187.5v-132h96q14 0 23 -9t9 -23v-64q0 -14 -9 -23t-23 -9h-96v-96q0 -14 -9 -23t-23 -9h-64q-14 0 -23 9t-9 23v96h-96q-14 0 -23 9t-9 23v64q0 14 9 23t23 9h96v132q-217 24 -364.5 187.5 t-147.5 384.5q0 167 88.5 305.5t233.5 210.5q-165 96 -228 273q-6 16 3.5 29.5t26.5 13.5h69q21 0 29 -20q44 -106 140 -171t214 -65t214 65t140 171q8 20 37 20h61q17 0 26.5 -13.5t3.5 -29.5q-63 -177 -228 -273zM576 256q185 0 316.5 131.5t131.5 316.5t-131.5 316.5 t-316.5 131.5t-316.5 -131.5t-131.5 -316.5t131.5 -316.5t316.5 -131.5z"
      ],
      "\uf224": [
        1536.0,
        "M1024 1504q0 14 9 23t23 9h288q26 0 45 -19t19 -45v-288q0 -14 -9 -23t-23 -9h-64q-14 0 -23 9t-9 23v134l-254 -255q126 -158 126 -359q0 -221 -147.5 -384.5t-364.5 -187.5v-132h96q14 0 23 -9t9 -23v-64q0 -14 -9 -23t-23 -9h-96v-96q0 -14 -9 -23t-23 -9h-64 q-14 0 -23 9t-9 23v96h-96q-14 0 -23 9t-9 23v64q0 14 9 23t23 9h96v132q-149 16 -270.5 103t-186.5 223.5t-53 291.5q16 204 160 353.5t347 172.5q118 14 228 -19t198 -103l255 254h-134q-14 0 -23 9t-9 23v64zM576 256q185 0 316.5 131.5t131.5 316.5t-131.5 316.5 t-316.5 131.5t-316.5 -131.5t-131.5 -316.5t131.5 -316.5t316.5 -131.5z"
      ],
      "\uf225": [
        1792,
        "M1280 1504q0 14 9 23t23 9h288q26 0 45 -19t19 -45v-288q0 -14 -9 -23t-23 -9h-64q-14 0 -23 9t-9 23v134l-254 -255q126 -158 126 -359q0 -221 -147.5 -384.5t-364.5 -187.5v-132h96q14 0 23 -9t9 -23v-64q0 -14 -9 -23t-23 -9h-96v-96q0 -14 -9 -23t-23 -9h-64 q-14 0 -23 9t-9 23v96h-96q-14 0 -23 9t-9 23v64q0 14 9 23t23 9h96v132q-217 24 -364.5 187.5t-147.5 384.5q0 201 126 359l-52 53l-101 -111q-9 -10 -22 -10.5t-23 7.5l-48 44q-10 8 -10.5 21.5t8.5 23.5l105 115l-111 112v-134q0 -14 -9 -23t-23 -9h-64q-14 0 -23 9 t-9 23v288q0 26 19 45t45 19h288q14 0 23 -9t9 -23v-64q0 -14 -9 -23t-23 -9h-133l106 -107l86 94q9 10 22 10.5t23 -7.5l48 -44q10 -8 10.5 -21.5t-8.5 -23.5l-90 -99l57 -56q158 126 359 126t359 -126l255 254h-134q-14 0 -23 9t-9 23v64zM832 256q185 0 316.5 131.5 t131.5 316.5t-131.5 316.5t-316.5 131.5t-316.5 -131.5t-131.5 -316.5t131.5 -316.5t316.5 -131.5z"
      ],
      "\uf226": [
        1792,
        "M1790 1007q12 -155 -52.5 -292t-186 -224t-271.5 -103v-260h224q14 0 23 -9t9 -23v-64q0 -14 -9 -23t-23 -9h-224v-224q0 -14 -9 -23t-23 -9h-64q-14 0 -23 9t-9 23v224h-512v-224q0 -14 -9 -23t-23 -9h-64q-14 0 -23 9t-9 23v224h-224q-14 0 -23 9t-9 23v64q0 14 9 23 t23 9h224v260q-150 16 -271.5 103t-186 224t-52.5 292q17 206 164.5 356.5t352.5 169.5q206 21 377 -94q171 115 377 94q205 -19 352.5 -169.5t164.5 -356.5zM896 647q128 131 128 313t-128 313q-128 -131 -128 -313t128 -313zM576 512q115 0 218 57q-154 165 -154 391 q0 224 154 391q-103 57 -218 57q-185 0 -316.5 -131.5t-131.5 -316.5t131.5 -316.5t316.5 -131.5zM1152 128v260q-137 15 -256 94q-119 -79 -256 -94v-260h512zM1216 512q185 0 316.5 131.5t131.5 316.5t-131.5 316.5t-316.5 131.5q-115 0 -218 -57q154 -167 154 -391 q0 -226 -154 -391q103 -57 218 -57z"
      ],
      "\uf227": [
        1920,
        "M1536 1120q0 14 9 23t23 9h288q26 0 45 -19t19 -45v-288q0 -14 -9 -23t-23 -9h-64q-14 0 -23 9t-9 23v134l-254 -255q76 -95 107.5 -214t9.5 -247q-31 -182 -166 -312t-318 -156q-210 -29 -384.5 80t-241.5 300q-117 6 -221 57.5t-177.5 133t-113.5 192.5t-32 230 q9 135 78 252t182 191.5t248 89.5q118 14 227.5 -19t198.5 -103l255 254h-134q-14 0 -23 9t-9 23v64q0 14 9 23t23 9h288q26 0 45 -19t19 -45v-288q0 -14 -9 -23t-23 -9h-64q-14 0 -23 9t-9 23v134l-254 -255q59 -74 93 -169q182 -9 328 -124l255 254h-134q-14 0 -23 9 t-9 23v64zM1024 704q0 20 -4 58q-162 -25 -271 -150t-109 -292q0 -20 4 -58q162 25 271 150t109 292zM128 704q0 -168 111 -294t276 -149q-3 29 -3 59q0 210 135 369.5t338 196.5q-53 120 -163.5 193t-245.5 73q-185 0 -316.5 -131.5t-131.5 -316.5zM1088 -128 q185 0 316.5 131.5t131.5 316.5q0 168 -111 294t-276 149q3 -28 3 -59q0 -210 -135 -369.5t-338 -196.5q53 -120 163.5 -193t245.5 -73z"
      ],
      "\uf228": [
        2048,
        "M1664 1504q0 14 9 23t23 9h288q26 0 45 -19t19 -45v-288q0 -14 -9 -23t-23 -9h-64q-14 0 -23 9t-9 23v134l-254 -255q76 -95 107.5 -214t9.5 -247q-32 -180 -164.5 -310t-313.5 -157q-223 -34 -409 90q-117 -78 -256 -93v-132h96q14 0 23 -9t9 -23v-64q0 -14 -9 -23 t-23 -9h-96v-96q0 -14 -9 -23t-23 -9h-64q-14 0 -23 9t-9 23v96h-96q-14 0 -23 9t-9 23v64q0 14 9 23t23 9h96v132q-155 17 -279.5 109.5t-187 237.5t-39.5 307q25 187 159.5 322.5t320.5 164.5q224 34 410 -90q146 97 320 97q201 0 359 -126l255 254h-134q-14 0 -23 9 t-9 23v64zM896 391q128 131 128 313t-128 313q-128 -131 -128 -313t128 -313zM128 704q0 -185 131.5 -316.5t316.5 -131.5q117 0 218 57q-154 167 -154 391t154 391q-101 57 -218 57q-185 0 -316.5 -131.5t-131.5 -316.5zM1216 256q185 0 316.5 131.5t131.5 316.5 t-131.5 316.5t-316.5 131.5q-117 0 -218 -57q154 -167 154 -391t-154 -391q101 -57 218 -57z"
      ],
      "\uf229": [
        1536.0,
        "M1472 1408q26 0 45 -19t19 -45v-416q0 -14 -9 -23t-23 -9h-64q-14 0 -23 9t-9 23v262l-213 -214l140 -140q9 -10 9 -23t-9 -22l-46 -46q-9 -9 -22 -9t-23 9l-140 141l-78 -79q126 -156 126 -359q0 -117 -45.5 -223.5t-123 -184t-184 -123t-223.5 -45.5t-223.5 45.5 t-184 123t-123 184t-45.5 223.5t45.5 223.5t123 184t184 123t223.5 45.5q203 0 359 -126l78 78l-172 172q-9 10 -9 23t9 22l46 46q9 9 22 9t23 -9l172 -172l213 213h-261q-14 0 -23 9t-9 23v64q0 14 9 23t23 9h416zM576 0q185 0 316.5 131.5t131.5 316.5t-131.5 316.5 t-316.5 131.5t-316.5 -131.5t-131.5 -316.5t131.5 -316.5t316.5 -131.5z"
      ],
      "\uf22a": [
        1280,
        "M640 892q217 -24 364.5 -187.5t147.5 -384.5q0 -167 -87 -306t-236 -212t-319 -54q-133 15 -245.5 88t-182 188t-80.5 249q-12 155 52.5 292t186 224t271.5 103v132h-160q-14 0 -23 9t-9 23v64q0 14 9 23t23 9h160v165l-92 -92q-10 -9 -23 -9t-22 9l-46 46q-9 9 -9 22 t9 23l202 201q19 19 45 19t45 -19l202 -201q9 -10 9 -23t-9 -22l-46 -46q-9 -9 -22 -9t-23 9l-92 92v-165h160q14 0 23 -9t9 -23v-64q0 -14 -9 -23t-23 -9h-160v-132zM576 -128q185 0 316.5 131.5t131.5 316.5t-131.5 316.5t-316.5 131.5t-316.5 -131.5t-131.5 -316.5 t131.5 -316.5t316.5 -131.5z"
      ],
      "\uf22b": [
        2048,
        "M1901 621q19 -19 19 -45t-19 -45l-294 -294q-9 -10 -22.5 -10t-22.5 10l-45 45q-10 9 -10 22.5t10 22.5l185 185h-294v-224q0 -14 -9 -23t-23 -9h-64q-14 0 -23 9t-9 23v224h-132q-24 -217 -187.5 -364.5t-384.5 -147.5q-167 0 -306 87t-212 236t-54 319q15 133 88 245.5 t188 182t249 80.5q155 12 292 -52.5t224 -186t103 -271.5h132v224q0 14 9 23t23 9h64q14 0 23 -9t9 -23v-224h294l-185 185q-10 9 -10 22.5t10 22.5l45 45q9 10 22.5 10t22.5 -10zM576 128q185 0 316.5 131.5t131.5 316.5t-131.5 316.5t-316.5 131.5t-316.5 -131.5 t-131.5 -316.5t131.5 -316.5t316.5 -131.5z"
      ],
      "\uf22c": [
        1280,
        "M1152 960q0 -221 -147.5 -384.5t-364.5 -187.5v-612q0 -14 -9 -23t-23 -9h-64q-14 0 -23 9t-9 23v612q-217 24 -364.5 187.5t-147.5 384.5q0 117 45.5 223.5t123 184t184 123t223.5 45.5t223.5 -45.5t184 -123t123 -184t45.5 -223.5zM576 512q185 0 316.5 131.5 t131.5 316.5t-131.5 316.5t-316.5 131.5t-316.5 -131.5t-131.5 -316.5t131.5 -316.5t316.5 -131.5z"
      ],
      "\uf22d": [
        1280,
        "M1024 576q0 185 -131.5 316.5t-316.5 131.5t-316.5 -131.5t-131.5 -316.5t131.5 -316.5t316.5 -131.5t316.5 131.5t131.5 316.5zM1152 576q0 -117 -45.5 -223.5t-123 -184t-184 -123t-223.5 -45.5t-223.5 45.5t-184 123t-123 184t-45.5 223.5t45.5 223.5t123 184t184 123 t223.5 45.5t223.5 -45.5t184 -123t123 -184t45.5 -223.5z"
      ],
      "\uf230": [
        1536.0,
        "M1451 1408q35 0 60 -25t25 -60v-1366q0 -35 -25 -60t-60 -25h-391v595h199l30 232h-229v148q0 56 23.5 84t91.5 28l122 1v207q-63 9 -178 9q-136 0 -217.5 -80t-81.5 -226v-171h-200v-232h200v-595h-735q-35 0 -60 25t-25 60v1366q0 35 25 60t60 25h1366z"
      ],
      "\uf231": [
        1280,
        "M0 939q0 108 37.5 203.5t103.5 166.5t152 123t185 78t202 26q158 0 294 -66.5t221 -193.5t85 -287q0 -96 -19 -188t-60 -177t-100 -149.5t-145 -103t-189 -38.5q-68 0 -135 32t-96 88q-10 -39 -28 -112.5t-23.5 -95t-20.5 -71t-26 -71t-32 -62.5t-46 -77.5t-62 -86.5 l-14 -5l-9 10q-15 157 -15 188q0 92 21.5 206.5t66.5 287.5t52 203q-32 65 -32 169q0 83 52 156t132 73q61 0 95 -40.5t34 -102.5q0 -66 -44 -191t-44 -187q0 -63 45 -104.5t109 -41.5q55 0 102 25t78.5 68t56 95t38 110.5t20 111t6.5 99.5q0 173 -109.5 269.5t-285.5 96.5 q-200 0 -334 -129.5t-134 -328.5q0 -44 12.5 -85t27 -65t27 -45.5t12.5 -30.5q0 -28 -15 -73t-37 -45q-2 0 -17 3q-51 15 -90.5 56t-61 94.5t-32.5 108t-11 106.5z"
      ],
      "\uf232": [
        1536.0,
        "M985 562q13 0 97.5 -44t89.5 -53q2 -5 2 -15q0 -33 -17 -76q-16 -39 -71 -65.5t-102 -26.5q-57 0 -190 62q-98 45 -170 118t-148 185q-72 107 -71 194v8q3 91 74 158q24 22 52 22q6 0 18 -1.5t19 -1.5q19 0 26.5 -6.5t15.5 -27.5q8 -20 33 -88t25 -75q0 -21 -34.5 -57.5 t-34.5 -46.5q0 -7 5 -15q34 -73 102 -137q56 -53 151 -101q12 -7 22 -7q15 0 54 48.5t52 48.5zM782 32q127 0 243.5 50t200.5 134t134 200.5t50 243.5t-50 243.5t-134 200.5t-200.5 134t-243.5 50t-243.5 -50t-200.5 -134t-134 -200.5t-50 -243.5q0 -203 120 -368l-79 -233 l242 77q158 -104 345 -104zM782 1414q153 0 292.5 -60t240.5 -161t161 -240.5t60 -292.5t-60 -292.5t-161 -240.5t-240.5 -161t-292.5 -60q-195 0 -365 94l-417 -134l136 405q-108 178 -108 389q0 153 60 292.5t161 240.5t240.5 161t292.5 60z"
      ],
      "\uf233": [
        1792,
        "M128 128h1024v128h-1024v-128zM128 640h1024v128h-1024v-128zM1696 192q0 40 -28 68t-68 28t-68 -28t-28 -68t28 -68t68 -28t68 28t28 68zM128 1152h1024v128h-1024v-128zM1696 704q0 40 -28 68t-68 28t-68 -28t-28 -68t28 -68t68 -28t68 28t28 68zM1696 1216 q0 40 -28 68t-68 28t-68 -28t-28 -68t28 -68t68 -28t68 28t28 68zM1792 384v-384h-1792v384h1792zM1792 896v-384h-1792v384h1792zM1792 1408v-384h-1792v384h1792z"
      ],
      "\uf234": [
        2048,
        "M704 640q-159 0 -271.5 112.5t-112.5 271.5t112.5 271.5t271.5 112.5t271.5 -112.5t112.5 -271.5t-112.5 -271.5t-271.5 -112.5zM1664 512h352q13 0 22.5 -9.5t9.5 -22.5v-192q0 -13 -9.5 -22.5t-22.5 -9.5h-352v-352q0 -13 -9.5 -22.5t-22.5 -9.5h-192q-13 0 -22.5 9.5 t-9.5 22.5v352h-352q-13 0 -22.5 9.5t-9.5 22.5v192q0 13 9.5 22.5t22.5 9.5h352v352q0 13 9.5 22.5t22.5 9.5h192q13 0 22.5 -9.5t9.5 -22.5v-352zM928 288q0 -52 38 -90t90 -38h256v-238q-68 -50 -171 -50h-874q-121 0 -194 69t-73 190q0 53 3.5 103.5t14 109t26.5 108.5 t43 97.5t62 81t85.5 53.5t111.5 20q19 0 39 -17q79 -61 154.5 -91.5t164.5 -30.5t164.5 30.5t154.5 91.5q20 17 39 17q132 0 217 -96h-223q-52 0 -90 -38t-38 -90v-192z"
      ],
      "\uf235": [
        2048,
        "M704 640q-159 0 -271.5 112.5t-112.5 271.5t112.5 271.5t271.5 112.5t271.5 -112.5t112.5 -271.5t-112.5 -271.5t-271.5 -112.5zM1781 320l249 -249q9 -9 9 -23q0 -13 -9 -22l-136 -136q-9 -9 -22 -9q-14 0 -23 9l-249 249l-249 -249q-9 -9 -23 -9q-13 0 -22 9l-136 136 q-9 9 -9 22q0 14 9 23l249 249l-249 249q-9 9 -9 23q0 13 9 22l136 136q9 9 22 9q14 0 23 -9l249 -249l249 249q9 9 23 9q13 0 22 -9l136 -136q9 -9 9 -22q0 -14 -9 -23zM1283 320l-181 -181q-37 -37 -37 -91q0 -53 37 -90l83 -83q-21 -3 -44 -3h-874q-121 0 -194 69 t-73 190q0 53 3.5 103.5t14 109t26.5 108.5t43 97.5t62 81t85.5 53.5t111.5 20q19 0 39 -17q154 -122 319 -122t319 122q20 17 39 17q28 0 57 -6q-28 -27 -41 -50t-13 -56q0 -54 37 -91z"
      ],
      "\uf236": [
        2048,
        "M256 512h1728q26 0 45 -19t19 -45v-448h-256v256h-1536v-256h-256v1216q0 26 19 45t45 19h128q26 0 45 -19t19 -45v-704zM832 832q0 106 -75 181t-181 75t-181 -75t-75 -181t75 -181t181 -75t181 75t75 181zM2048 576v64q0 159 -112.5 271.5t-271.5 112.5h-704 q-26 0 -45 -19t-19 -45v-384h1152z"
      ],
      "\uf237": [
        1536.0,
        "M1536 1536l-192 -448h192v-192h-274l-55 -128h329v-192h-411l-357 -832l-357 832h-411v192h329l-55 128h-274v192h192l-192 448h256l323 -768h378l323 768h256zM768 320l108 256h-216z"
      ],
      "\uf238": [
        1536.0,
        "M1088 1536q185 0 316.5 -93.5t131.5 -226.5v-896q0 -130 -125.5 -222t-305.5 -97l213 -202q16 -15 8 -35t-30 -20h-1056q-22 0 -30 20t8 35l213 202q-180 5 -305.5 97t-125.5 222v896q0 133 131.5 226.5t316.5 93.5h640zM768 192q80 0 136 56t56 136t-56 136t-136 56 t-136 -56t-56 -136t56 -136t136 -56zM1344 768v512h-1152v-512h1152z"
      ],
      "\uf239": [
        1536.0,
        "M1088 1536q185 0 316.5 -93.5t131.5 -226.5v-896q0 -130 -125.5 -222t-305.5 -97l213 -202q16 -15 8 -35t-30 -20h-1056q-22 0 -30 20t8 35l213 202q-180 5 -305.5 97t-125.5 222v896q0 133 131.5 226.5t316.5 93.5h640zM288 224q66 0 113 47t47 113t-47 113t-113 47 t-113 -47t-47 -113t47 -113t113 -47zM704 768v512h-544v-512h544zM1248 224q66 0 113 47t47 113t-47 113t-113 47t-113 -47t-47 -113t47 -113t113 -47zM1408 768v512h-576v-512h576z"
      ],
      "\uf23a": [
        1792,
        "M597 1115v-1173q0 -25 -12.5 -42.5t-36.5 -17.5q-17 0 -33 8l-465 233q-21 10 -35.5 33.5t-14.5 46.5v1140q0 20 10 34t29 14q14 0 44 -15l511 -256q3 -3 3 -5zM661 1014l534 -866l-534 266v600zM1792 996v-1054q0 -25 -14 -40.5t-38 -15.5t-47 13l-441 220zM1789 1116 q0 -3 -256.5 -419.5t-300.5 -487.5l-390 634l324 527q17 28 52 28q14 0 26 -6l541 -270q4 -2 4 -6z"
      ],
      "\uf23b": [
        1536.0,
        "M809 532l266 499h-112l-157 -312q-24 -48 -44 -92l-42 92l-155 312h-120l263 -493v-324h101v318zM1536 1408v-1536h-1536v1536h1536z"
      ],
      "\uf23c": [
        2296,
        "M478 -139q-8 -16 -27 -34.5t-37 -25.5q-25 -9 -51.5 3.5t-28.5 31.5q-1 22 40 55t68 38q23 4 34 -21.5t2 -46.5zM1819 -139q7 -16 26 -34.5t38 -25.5q25 -9 51.5 3.5t27.5 31.5q2 22 -39.5 55t-68.5 38q-22 4 -33 -21.5t-2 -46.5zM1867 -30q13 -27 56.5 -59.5t77.5 -41.5 q45 -13 82 4.5t37 50.5q0 46 -67.5 100.5t-115.5 59.5q-40 5 -63.5 -37.5t-6.5 -76.5zM428 -30q-13 -27 -56 -59.5t-77 -41.5q-45 -13 -82 4.5t-37 50.5q0 46 67.5 100.5t115.5 59.5q40 5 63 -37.5t6 -76.5zM1158 1094h1q-41 0 -76 -15q27 -8 44 -30.5t17 -49.5 q0 -35 -27 -60t-65 -25q-52 0 -80 43q-5 -23 -5 -42q0 -74 56 -126.5t135 -52.5q80 0 136 52.5t56 126.5t-56 126.5t-136 52.5zM1462 1312q-99 109 -220.5 131.5t-245.5 -44.5q27 60 82.5 96.5t118 39.5t121.5 -17t99.5 -74.5t44.5 -131.5zM2212 73q8 -11 -11 -42 q7 -23 7 -40q1 -56 -44.5 -112.5t-109.5 -91.5t-118 -37q-48 -2 -92 21.5t-66 65.5q-687 -25 -1259 0q-23 -41 -66.5 -65t-92.5 -22q-86 3 -179.5 80.5t-92.5 160.5q2 22 7 40q-19 31 -11 42q6 10 31 1q14 22 41 51q-7 29 2 38q11 10 39 -4q29 20 59 34q0 29 13 37 q23 12 51 -16q35 5 61 -2q18 -4 38 -19v73q-11 0 -18 2q-53 10 -97 44.5t-55 87.5q-9 38 0 81q15 62 93 95q2 17 19 35.5t36 23.5t33 -7.5t19 -30.5h13q46 -5 60 -23q3 -3 5 -7q10 1 30.5 3.5t30.5 3.5q-15 11 -30 17q-23 40 -91 43q0 6 1 10q-62 2 -118.5 18.5t-84.5 47.5 q-32 36 -42.5 92t-2.5 112q16 126 90 179q23 16 52 4.5t32 -40.5q0 -1 1.5 -14t2.5 -21t3 -20t5.5 -19t8.5 -10q27 -14 76 -12q48 46 98 74q-40 4 -162 -14l47 46q61 58 163 111q145 73 282 86q-20 8 -41 15.5t-47 14t-42.5 10.5t-47.5 11t-43 10q595 126 904 -139 q98 -84 158 -222q85 -10 121 9h1q5 3 8.5 10t5.5 19t3 19.5t3 21.5l1 14q3 28 32 40t52 -5q73 -52 91 -178q7 -57 -3.5 -113t-42.5 -91q-28 -32 -83.5 -48.5t-115.5 -18.5v-10q-71 -2 -95 -43q-14 -5 -31 -17q11 -1 32 -3.5t30 -3.5q1 5 5 8q16 18 60 23h13q5 18 19 30t33 8 t36 -23t19 -36q79 -32 93 -95q9 -40 1 -81q-12 -53 -56 -88t-97 -44q-10 -2 -17 -2q0 -49 -1 -73q20 15 38 19q26 7 61 2q28 28 51 16q14 -9 14 -37q33 -16 59 -34q27 13 38 4q10 -10 2 -38q28 -30 41 -51q23 8 31 -1zM1937 1025q0 -29 -9 -54q82 -32 112 -132 q4 37 -9.5 98.5t-41.5 90.5q-20 19 -36 17t-16 -20zM1859 925q35 -42 47.5 -108.5t-0.5 -124.5q67 13 97 45q13 14 18 28q-3 64 -31 114.5t-79 66.5q-15 -15 -52 -21zM1822 921q-30 0 -44 1q42 -115 53 -239q21 0 43 3q16 68 1 135t-53 100zM258 839q30 100 112 132 q-9 25 -9 54q0 18 -16.5 20t-35.5 -17q-28 -29 -41.5 -90.5t-9.5 -98.5zM294 737q29 -31 97 -45q-13 58 -0.5 124.5t47.5 108.5v0q-37 6 -52 21q-51 -16 -78.5 -66t-31.5 -115q9 -17 18 -28zM471 683q14 124 73 235q-19 -4 -55 -18l-45 -19v1q-46 -89 -20 -196q25 -3 47 -3z M1434 644q8 -38 16.5 -108.5t11.5 -89.5q3 -18 9.5 -21.5t23.5 4.5q40 20 62 85.5t23 125.5q-24 2 -146 4zM1152 1285q-116 0 -199 -82.5t-83 -198.5q0 -117 83 -199.5t199 -82.5t199 82.5t83 199.5q0 116 -83 198.5t-199 82.5zM1380 646q-105 2 -211 0v1q-1 -27 2.5 -86 t13.5 -66q29 -14 93.5 -14.5t95.5 10.5q9 3 11 39t-0.5 69.5t-4.5 46.5zM1112 447q8 4 9.5 48t-0.5 88t-4 63v1q-212 -3 -214 -3q-4 -20 -7 -62t0 -83t14 -46q34 -15 101 -16t101 10zM718 636q-16 -59 4.5 -118.5t77.5 -84.5q15 -8 24 -5t12 21q3 16 8 90t10 103 q-69 -2 -136 -6zM591 510q3 -23 -34 -36q132 -141 271.5 -240t305.5 -154q172 49 310.5 146t293.5 250q-33 13 -30 34q0 2 0.5 3.5t1.5 3t1 2.5v1v-1q-17 2 -50 5.5t-48 4.5q-26 -90 -82 -132q-51 -38 -82 1q-5 6 -9 14q-7 13 -17 62q-2 -5 -5 -9t-7.5 -7t-8 -5.5t-9.5 -4 l-10 -2.5t-12 -2l-12 -1.5t-13.5 -1t-13.5 -0.5q-106 -9 -163 11q-4 -17 -10 -26.5t-21 -15t-23 -7t-36 -3.5q-6 -1 -9 -1q-179 -17 -203 40q-2 -63 -56 -54q-47 8 -91 54q-12 13 -20 26q-17 29 -26 65q-58 -6 -87 -10q1 -2 4 -10zM507 -118q3 14 3 30q-17 71 -51 130 t-73 70q-41 12 -101.5 -14.5t-104.5 -80t-39 -107.5q35 -53 100 -93t119 -42q51 -2 94 28t53 79zM510 53q23 -63 27 -119q195 113 392 174q-98 52 -180.5 120t-179.5 165q-6 -4 -29 -13q0 -1 -1 -4t-1 -5q31 -18 22 -37q-12 -23 -56 -34q-10 -13 -29 -24h-1q-2 -83 1 -150 q19 -34 35 -73zM579 -113q532 -21 1145 0q-254 147 -428 196q-76 -35 -156 -57q-8 -3 -16 0q-65 21 -129 49q-208 -60 -416 -188h-1v-1q1 0 1 1zM1763 -67q4 54 28 120q14 38 33 71l-1 -1q3 77 3 153q-15 8 -30 25q-42 9 -56 33q-9 20 22 38q-2 4 -2 9q-16 4 -28 12 q-204 -190 -383 -284q198 -59 414 -176zM2155 -90q5 54 -39 107.5t-104 80t-102 14.5q-38 -11 -72.5 -70.5t-51.5 -129.5q0 -16 3 -30q10 -49 53 -79t94 -28q54 2 119 42t100 93z"
      ],
      "\uf23d": [
        2304,
        "M1524 -25q0 -68 -48 -116t-116 -48t-116.5 48t-48.5 116t48.5 116.5t116.5 48.5t116 -48.5t48 -116.5zM775 -25q0 -68 -48.5 -116t-116.5 -48t-116 48t-48 116t48 116.5t116 48.5t116.5 -48.5t48.5 -116.5zM0 1469q57 -60 110.5 -104.5t121 -82t136 -63t166 -45.5 t200 -31.5t250 -18.5t304 -9.5t372.5 -2.5q139 0 244.5 -5t181 -16.5t124 -27.5t71 -39.5t24 -51.5t-19.5 -64t-56.5 -76.5t-89.5 -91t-116 -104.5t-139 -119q-185 -157 -286 -247q29 51 76.5 109t94 105.5t94.5 98.5t83 91.5t54 80.5t13 70t-45.5 55.5t-116.5 41t-204 23.5 t-304 5q-168 -2 -314 6t-256 23t-204.5 41t-159.5 51.5t-122.5 62.5t-91.5 66.5t-68 71.5t-50.5 69.5t-40 68t-36.5 59.5z"
      ],
      "\uf23e": [
        1792,
        "M896 1472q-169 0 -323 -66t-265.5 -177.5t-177.5 -265.5t-66 -323t66 -323t177.5 -265.5t265.5 -177.5t323 -66t323 66t265.5 177.5t177.5 265.5t66 323t-66 323t-177.5 265.5t-265.5 177.5t-323 66zM896 1536q182 0 348 -71t286 -191t191 -286t71 -348t-71 -348 t-191 -286t-286 -191t-348 -71t-348 71t-286 191t-191 286t-71 348t71 348t191 286t286 191t348 71zM496 704q16 0 16 -16v-480q0 -16 -16 -16h-32q-16 0 -16 16v480q0 16 16 16h32zM896 640q53 0 90.5 -37.5t37.5 -90.5q0 -35 -17.5 -64t-46.5 -46v-114q0 -14 -9 -23 t-23 -9h-64q-14 0 -23 9t-9 23v114q-29 17 -46.5 46t-17.5 64q0 53 37.5 90.5t90.5 37.5zM896 1408q209 0 385.5 -103t279.5 -279.5t103 -385.5t-103 -385.5t-279.5 -279.5t-385.5 -103t-385.5 103t-279.5 279.5t-103 385.5t103 385.5t279.5 279.5t385.5 103zM544 928v-96 q0 -14 9 -23t23 -9h64q14 0 23 9t9 23v96q0 93 65.5 158.5t158.5 65.5t158.5 -65.5t65.5 -158.5v-96q0 -14 9 -23t23 -9h64q14 0 23 9t9 23v96q0 146 -103 249t-249 103t-249 -103t-103 -249zM1408 192v512q0 26 -19 45t-45 19h-896q-26 0 -45 -19t-19 -45v-512 q0 -26 19 -45t45 -19h896q26 0 45 19t19 45z"
      ],
      "\uf240": [
        2304,
        "M1920 1024v-768h-1664v768h1664zM2048 448h128v384h-128v288q0 14 -9 23t-23 9h-1856q-14 0 -23 -9t-9 -23v-960q0 -14 9 -23t23 -9h1856q14 0 23 9t9 23v288zM2304 832v-384q0 -53 -37.5 -90.5t-90.5 -37.5v-160q0 -66 -47 -113t-113 -47h-1856q-66 0 -113 47t-47 113 v960q0 66 47 113t113 47h1856q66 0 113 -47t47 -113v-160q53 0 90.5 -37.5t37.5 -90.5z"
      ],
      "\uf241": [
        2304,
        "M256 256v768h1280v-768h-1280zM2176 960q53 0 90.5 -37.5t37.5 -90.5v-384q0 -53 -37.5 -90.5t-90.5 -37.5v-160q0 -66 -47 -113t-113 -47h-1856q-66 0 -113 47t-47 113v960q0 66 47 113t113 47h1856q66 0 113 -47t47 -113v-160zM2176 448v384h-128v288q0 14 -9 23t-23 9 h-1856q-14 0 -23 -9t-9 -23v-960q0 -14 9 -23t23 -9h1856q14 0 23 9t9 23v288h128z"
      ],
      "\uf242": [
        2304,
        "M256 256v768h896v-768h-896zM2176 960q53 0 90.5 -37.5t37.5 -90.5v-384q0 -53 -37.5 -90.5t-90.5 -37.5v-160q0 -66 -47 -113t-113 -47h-1856q-66 0 -113 47t-47 113v960q0 66 47 113t113 47h1856q66 0 113 -47t47 -113v-160zM2176 448v384h-128v288q0 14 -9 23t-23 9 h-1856q-14 0 -23 -9t-9 -23v-960q0 -14 9 -23t23 -9h1856q14 0 23 9t9 23v288h128z"
      ],
      "\uf243": [
        2304,
        "M256 256v768h512v-768h-512zM2176 960q53 0 90.5 -37.5t37.5 -90.5v-384q0 -53 -37.5 -90.5t-90.5 -37.5v-160q0 -66 -47 -113t-113 -47h-1856q-66 0 -113 47t-47 113v960q0 66 47 113t113 47h1856q66 0 113 -47t47 -113v-160zM2176 448v384h-128v288q0 14 -9 23t-23 9 h-1856q-14 0 -23 -9t-9 -23v-960q0 -14 9 -23t23 -9h1856q14 0 23 9t9 23v288h128z"
      ],
      "\uf244": [
        2304,
        "M2176 960q53 0 90.5 -37.5t37.5 -90.5v-384q0 -53 -37.5 -90.5t-90.5 -37.5v-160q0 -66 -47 -113t-113 -47h-1856q-66 0 -113 47t-47 113v960q0 66 47 113t113 47h1856q66 0 113 -47t47 -113v-160zM2176 448v384h-128v288q0 14 -9 23t-23 9h-1856q-14 0 -23 -9t-9 -23 v-960q0 -14 9 -23t23 -9h1856q14 0 23 9t9 23v288h128z"
      ],
      "\uf245": [
        1280,
        "M1133 493q31 -30 14 -69q-17 -40 -59 -40h-382l201 -476q10 -25 0 -49t-34 -35l-177 -75q-25 -10 -49 0t-35 34l-191 452l-312 -312q-19 -19 -45 -19q-12 0 -24 5q-40 17 -40 59v1504q0 42 40 59q12 5 24 5q27 0 45 -19z"
      ],
      "\uf246": [
        1024,
        "M832 1408q-320 0 -320 -224v-416h128v-128h-128v-544q0 -224 320 -224h64v-128h-64q-272 0 -384 146q-112 -146 -384 -146h-64v128h64q320 0 320 224v544h-128v128h128v416q0 224 -320 224h-64v128h64q272 0 384 -146q112 146 384 146h64v-128h-64z"
      ],
      "\uf247": [
        2048,
        "M2048 1152h-128v-1024h128v-384h-384v128h-1280v-128h-384v384h128v1024h-128v384h384v-128h1280v128h384v-384zM1792 1408v-128h128v128h-128zM128 1408v-128h128v128h-128zM256 -128v128h-128v-128h128zM1664 0v128h128v1024h-128v128h-1280v-128h-128v-1024h128v-128 h1280zM1920 -128v128h-128v-128h128zM1280 896h384v-768h-896v256h-384v768h896v-256zM512 512h640v512h-640v-512zM1536 256v512h-256v-384h-384v-128h640z"
      ],
      "\uf248": [
        2304,
        "M2304 768h-128v-640h128v-384h-384v128h-896v-128h-384v384h128v128h-384v-128h-384v384h128v640h-128v384h384v-128h896v128h384v-384h-128v-128h384v128h384v-384zM2048 1024v-128h128v128h-128zM1408 1408v-128h128v128h-128zM128 1408v-128h128v128h-128zM256 256 v128h-128v-128h128zM1536 384h-128v-128h128v128zM384 384h896v128h128v640h-128v128h-896v-128h-128v-640h128v-128zM896 -128v128h-128v-128h128zM2176 -128v128h-128v-128h128zM2048 128v640h-128v128h-384v-384h128v-384h-384v128h-384v-128h128v-128h896v128h128z"
      ],
      "\uf249": [
        1536.0,
        "M1024 288v-416h-928q-40 0 -68 28t-28 68v1344q0 40 28 68t68 28h1344q40 0 68 -28t28 -68v-928h-416q-40 0 -68 -28t-28 -68zM1152 256h381q-15 -82 -65 -132l-184 -184q-50 -50 -132 -65v381z"
      ],
      "\uf24a": [
        1536.0,
        "M1400 256h-248v-248q29 10 41 22l185 185q12 12 22 41zM1120 384h288v896h-1280v-1280h896v288q0 40 28 68t68 28zM1536 1312v-1024q0 -40 -20 -88t-48 -76l-184 -184q-28 -28 -76 -48t-88 -20h-1024q-40 0 -68 28t-28 68v1344q0 40 28 68t68 28h1344q40 0 68 -28t28 -68 z"
      ],
      "\uf24b": [
        2304,
        "M1951 538q0 -26 -15.5 -44.5t-38.5 -23.5q-8 -2 -18 -2h-153v140h153q10 0 18 -2q23 -5 38.5 -23.5t15.5 -44.5zM1933 751q0 -25 -15 -42t-38 -21q-3 -1 -15 -1h-139v129h139q3 0 8.5 -0.5t6.5 -0.5q23 -4 38 -21.5t15 -42.5zM728 587v308h-228v-308q0 -58 -38 -94.5 t-105 -36.5q-108 0 -229 59v-112q53 -15 121 -23t109 -9l42 -1q328 0 328 217zM1442 403v113q-99 -52 -200 -59q-108 -8 -169 41t-61 142t61 142t169 41q101 -7 200 -58v112q-48 12 -100 19.5t-80 9.5l-28 2q-127 6 -218.5 -14t-140.5 -60t-71 -88t-22 -106t22 -106t71 -88 t140.5 -60t218.5 -14q101 4 208 31zM2176 518q0 54 -43 88.5t-109 39.5v3q57 8 89 41.5t32 79.5q0 55 -41 88t-107 36q-3 0 -12 0.5t-14 0.5h-455v-510h491q74 0 121.5 36.5t47.5 96.5zM2304 1280v-1280q0 -52 -38 -90t-90 -38h-2048q-52 0 -90 38t-38 90v1280q0 52 38 90 t90 38h2048q52 0 90 -38t38 -90z"
      ],
      "\uf24c": [
        2304,
        "M858 295v693q-106 -41 -172 -135.5t-66 -211.5t66 -211.5t172 -134.5zM1362 641q0 117 -66 211.5t-172 135.5v-694q106 41 172 135.5t66 211.5zM1577 641q0 -159 -78.5 -294t-213.5 -213.5t-294 -78.5q-119 0 -227.5 46.5t-187 125t-125 187t-46.5 227.5q0 159 78.5 294 t213.5 213.5t294 78.5t294 -78.5t213.5 -213.5t78.5 -294zM1960 634q0 139 -55.5 261.5t-147.5 205.5t-213.5 131t-252.5 48h-301q-176 0 -323.5 -81t-235 -230t-87.5 -335q0 -171 87 -317.5t236 -231.5t323 -85h301q129 0 251.5 50.5t214.5 135t147.5 202.5t55.5 246z M2304 1280v-1280q0 -52 -38 -90t-90 -38h-2048q-52 0 -90 38t-38 90v1280q0 52 38 90t90 38h2048q52 0 90 -38t38 -90z"
      ],
      "\uf24d": [
        1792,
        "M1664 -96v1088q0 13 -9.5 22.5t-22.5 9.5h-1088q-13 0 -22.5 -9.5t-9.5 -22.5v-1088q0 -13 9.5 -22.5t22.5 -9.5h1088q13 0 22.5 9.5t9.5 22.5zM1792 992v-1088q0 -66 -47 -113t-113 -47h-1088q-66 0 -113 47t-47 113v1088q0 66 47 113t113 47h1088q66 0 113 -47t47 -113 zM1408 1376v-160h-128v160q0 13 -9.5 22.5t-22.5 9.5h-1088q-13 0 -22.5 -9.5t-9.5 -22.5v-1088q0 -13 9.5 -22.5t22.5 -9.5h160v-128h-160q-66 0 -113 47t-47 113v1088q0 66 47 113t113 47h1088q66 0 113 -47t47 -113z"
      ],
      "\uf24e": [
        2304,
        "M1728 1088l-384 -704h768zM448 1088l-384 -704h768zM1269 1280q-14 -40 -45.5 -71.5t-71.5 -45.5v-1291h608q14 0 23 -9t9 -23v-64q0 -14 -9 -23t-23 -9h-1344q-14 0 -23 9t-9 23v64q0 14 9 23t23 9h608v1291q-40 14 -71.5 45.5t-45.5 71.5h-491q-14 0 -23 9t-9 23v64 q0 14 9 23t23 9h491q21 57 70 92.5t111 35.5t111 -35.5t70 -92.5h491q14 0 23 -9t9 -23v-64q0 -14 -9 -23t-23 -9h-491zM1088 1264q33 0 56.5 23.5t23.5 56.5t-23.5 56.5t-56.5 23.5t-56.5 -23.5t-23.5 -56.5t23.5 -56.5t56.5 -23.5zM2176 384q0 -73 -46.5 -131t-117.5 -91 t-144.5 -49.5t-139.5 -16.5t-139.5 16.5t-144.5 49.5t-117.5 91t-46.5 131q0 11 35 81t92 174.5t107 195.5t102 184t56 100q18 33 56 33t56 -33q4 -7 56 -100t102 -184t107 -195.5t92 -174.5t35 -81zM896 384q0 -73 -46.5 -131t-117.5 -91t-144.5 -49.5t-139.5 -16.5 t-139.5 16.5t-144.5 49.5t-117.5 91t-46.5 131q0 11 35 81t92 174.5t107 195.5t102 184t56 100q18 33 56 33t56 -33q4 -7 56 -100t102 -184t107 -195.5t92 -174.5t35 -81z"
      ],
      "\uf250": [
        1536.0,
        "M1408 1408q0 -261 -106.5 -461.5t-266.5 -306.5q160 -106 266.5 -306.5t106.5 -461.5h96q14 0 23 -9t9 -23v-64q0 -14 -9 -23t-23 -9h-1472q-14 0 -23 9t-9 23v64q0 14 9 23t23 9h96q0 261 106.5 461.5t266.5 306.5q-160 106 -266.5 306.5t-106.5 461.5h-96q-14 0 -23 9 t-9 23v64q0 14 9 23t23 9h1472q14 0 23 -9t9 -23v-64q0 -14 -9 -23t-23 -9h-96zM874 700q77 29 149 92.5t129.5 152.5t92.5 210t35 253h-1024q0 -132 35 -253t92.5 -210t129.5 -152.5t149 -92.5q19 -7 30.5 -23.5t11.5 -36.5t-11.5 -36.5t-30.5 -23.5q-77 -29 -149 -92.5 t-129.5 -152.5t-92.5 -210t-35 -253h1024q0 132 -35 253t-92.5 210t-129.5 152.5t-149 92.5q-19 7 -30.5 23.5t-11.5 36.5t11.5 36.5t30.5 23.5z"
      ],
      "\uf251": [
        1536.0,
        "M1408 1408q0 -261 -106.5 -461.5t-266.5 -306.5q160 -106 266.5 -306.5t106.5 -461.5h96q14 0 23 -9t9 -23v-64q0 -14 -9 -23t-23 -9h-1472q-14 0 -23 9t-9 23v64q0 14 9 23t23 9h96q0 261 106.5 461.5t266.5 306.5q-160 106 -266.5 306.5t-106.5 461.5h-96q-14 0 -23 9 t-9 23v64q0 14 9 23t23 9h1472q14 0 23 -9t9 -23v-64q0 -14 -9 -23t-23 -9h-96zM1280 1408h-1024q0 -66 9 -128h1006q9 61 9 128zM1280 -128q0 130 -34 249.5t-90.5 208t-126.5 152t-146 94.5h-230q-76 -31 -146 -94.5t-126.5 -152t-90.5 -208t-34 -249.5h1024z"
      ],
      "\uf252": [
        1536.0,
        "M1408 1408q0 -261 -106.5 -461.5t-266.5 -306.5q160 -106 266.5 -306.5t106.5 -461.5h96q14 0 23 -9t9 -23v-64q0 -14 -9 -23t-23 -9h-1472q-14 0 -23 9t-9 23v64q0 14 9 23t23 9h96q0 261 106.5 461.5t266.5 306.5q-160 106 -266.5 306.5t-106.5 461.5h-96q-14 0 -23 9 t-9 23v64q0 14 9 23t23 9h1472q14 0 23 -9t9 -23v-64q0 -14 -9 -23t-23 -9h-96zM1280 1408h-1024q0 -206 85 -384h854q85 178 85 384zM1223 192q-54 141 -145.5 241.5t-194.5 142.5h-230q-103 -42 -194.5 -142.5t-145.5 -241.5h910z"
      ],
      "\uf253": [
        1536.0,
        "M1408 1408q0 -261 -106.5 -461.5t-266.5 -306.5q160 -106 266.5 -306.5t106.5 -461.5h96q14 0 23 -9t9 -23v-64q0 -14 -9 -23t-23 -9h-1472q-14 0 -23 9t-9 23v64q0 14 9 23t23 9h96q0 261 106.5 461.5t266.5 306.5q-160 106 -266.5 306.5t-106.5 461.5h-96q-14 0 -23 9 t-9 23v64q0 14 9 23t23 9h1472q14 0 23 -9t9 -23v-64q0 -14 -9 -23t-23 -9h-96zM874 700q77 29 149 92.5t129.5 152.5t92.5 210t35 253h-1024q0 -132 35 -253t92.5 -210t129.5 -152.5t149 -92.5q19 -7 30.5 -23.5t11.5 -36.5t-11.5 -36.5t-30.5 -23.5q-137 -51 -244 -196 h700q-107 145 -244 196q-19 7 -30.5 23.5t-11.5 36.5t11.5 36.5t30.5 23.5z"
      ],
      "\uf254": [
        1536.0,
        "M1504 -64q14 0 23 -9t9 -23v-128q0 -14 -9 -23t-23 -9h-1472q-14 0 -23 9t-9 23v128q0 14 9 23t23 9h1472zM130 0q3 55 16 107t30 95t46 87t53.5 76t64.5 69.5t66 60t70.5 55t66.5 47.5t65 43q-43 28 -65 43t-66.5 47.5t-70.5 55t-66 60t-64.5 69.5t-53.5 76t-46 87 t-30 95t-16 107h1276q-3 -55 -16 -107t-30 -95t-46 -87t-53.5 -76t-64.5 -69.5t-66 -60t-70.5 -55t-66.5 -47.5t-65 -43q43 -28 65 -43t66.5 -47.5t70.5 -55t66 -60t64.5 -69.5t53.5 -76t46 -87t30 -95t16 -107h-1276zM1504 1536q14 0 23 -9t9 -23v-128q0 -14 -9 -23t-23 -9 h-1472q-14 0 -23 9t-9 23v128q0 14 9 23t23 9h1472z"
      ],
      "\uf255": [
        1536.0,
        "M768 1152q-53 0 -90.5 -37.5t-37.5 -90.5v-128h-32v93q0 48 -32 81.5t-80 33.5q-46 0 -79 -33t-33 -79v-429l-32 30v172q0 48 -32 81.5t-80 33.5q-46 0 -79 -33t-33 -79v-224q0 -47 35 -82l310 -296q39 -39 39 -102q0 -26 19 -45t45 -19h640q26 0 45 19t19 45v25 q0 41 10 77l108 436q10 36 10 77v246q0 48 -32 81.5t-80 33.5q-46 0 -79 -33t-33 -79v-32h-32v125q0 40 -25 72.5t-64 40.5q-14 2 -23 2q-46 0 -79 -33t-33 -79v-128h-32v122q0 51 -32.5 89.5t-82.5 43.5q-5 1 -13 1zM768 1280q84 0 149 -50q57 34 123 34q59 0 111 -27 t86 -76q27 7 59 7q100 0 170 -71.5t70 -171.5v-246q0 -51 -13 -108l-109 -436q-6 -24 -6 -71q0 -80 -56 -136t-136 -56h-640q-84 0 -138 58.5t-54 142.5l-308 296q-76 73 -76 175v224q0 99 70.5 169.5t169.5 70.5q11 0 16 -1q6 95 75.5 160t164.5 65q52 0 98 -21 q72 69 174 69z"
      ],
      "\uf256": [
        1792,
        "M880 1408q-46 0 -79 -33t-33 -79v-656h-32v528q0 46 -33 79t-79 33t-79 -33t-33 -79v-528v-256l-154 205q-38 51 -102 51q-53 0 -90.5 -37.5t-37.5 -90.5q0 -43 26 -77l384 -512q38 -51 102 -51h688q34 0 61 22t34 56l76 405q5 32 5 59v498q0 46 -33 79t-79 33t-79 -33 t-33 -79v-272h-32v528q0 46 -33 79t-79 33t-79 -33t-33 -79v-528h-32v656q0 46 -33 79t-79 33zM880 1536q68 0 125.5 -35.5t88.5 -96.5q19 4 42 4q99 0 169.5 -70.5t70.5 -169.5v-17q105 6 180.5 -64t75.5 -175v-498q0 -40 -8 -83l-76 -404q-14 -79 -76.5 -131t-143.5 -52 h-688q-60 0 -114.5 27.5t-90.5 74.5l-384 512q-51 68 -51 154q0 106 75 181t181 75q78 0 128 -34v434q0 99 70.5 169.5t169.5 70.5q23 0 42 -4q31 61 88.5 96.5t125.5 35.5z"
      ],
      "\uf257": [
        1792,
        "M1073 -128h-177q-163 0 -226 141q-23 49 -23 102v5q-62 30 -98.5 88.5t-36.5 127.5q0 38 5 48h-261q-106 0 -181 75t-75 181t75 181t181 75h113l-44 17q-74 28 -119.5 93.5t-45.5 145.5q0 106 75 181t181 75q46 0 91 -17l628 -239h401q106 0 181 -75t75 -181v-668 q0 -88 -54 -157.5t-140 -90.5l-339 -85q-92 -23 -186 -23zM1024 583l-155 -71l-163 -74q-30 -14 -48 -41.5t-18 -60.5q0 -46 33 -79t79 -33q26 0 46 10l338 154q-49 10 -80.5 50t-31.5 90v55zM1344 272q0 46 -33 79t-79 33q-26 0 -46 -10l-290 -132q-28 -13 -37 -17 t-30.5 -17t-29.5 -23.5t-16 -29t-8 -40.5q0 -50 31.5 -82t81.5 -32q20 0 38 9l352 160q30 14 48 41.5t18 60.5zM1112 1024l-650 248q-24 8 -46 8q-53 0 -90.5 -37.5t-37.5 -90.5q0 -40 22.5 -73t59.5 -47l526 -200v-64h-640q-53 0 -90.5 -37.5t-37.5 -90.5t37.5 -90.5 t90.5 -37.5h535l233 106v198q0 63 46 106l111 102h-69zM1073 0q82 0 155 19l339 85q43 11 70 45.5t27 78.5v668q0 53 -37.5 90.5t-90.5 37.5h-308l-136 -126q-36 -33 -36 -82v-296q0 -46 33 -77t79 -31t79 35t33 81v208h32v-208q0 -70 -57 -114q52 -8 86.5 -48.5t34.5 -93.5 q0 -42 -23 -78t-61 -53l-310 -141h91z"
      ],
      "\uf258": [
        2048,
        "M1151 1536q61 0 116 -28t91 -77l572 -781q118 -159 118 -359v-355q0 -80 -56 -136t-136 -56h-384q-80 0 -136 56t-56 136v177l-286 143h-546q-80 0 -136 56t-56 136v32q0 119 84.5 203.5t203.5 84.5h420l42 128h-686q-100 0 -173.5 67.5t-81.5 166.5q-65 79 -65 182v32 q0 80 56 136t136 56h959zM1920 -64v355q0 157 -93 284l-573 781q-39 52 -103 52h-959q-26 0 -45 -19t-19 -45q0 -32 1.5 -49.5t9.5 -40.5t25 -43q10 31 35.5 50t56.5 19h832v-32h-832q-26 0 -45 -19t-19 -45q0 -44 3 -58q8 -44 44 -73t81 -29h640h91q40 0 68 -28t28 -68 q0 -15 -5 -30l-64 -192q-10 -29 -35 -47.5t-56 -18.5h-443q-66 0 -113 -47t-47 -113v-32q0 -26 19 -45t45 -19h561q16 0 29 -7l317 -158q24 -13 38.5 -36t14.5 -50v-197q0 -26 19 -45t45 -19h384q26 0 45 19t19 45z"
      ],
      "\uf259": [
        2048,
        "M459 -256q-77 0 -137.5 47.5t-79.5 122.5l-101 401q-13 57 -13 108q0 45 -5 67l-116 477q-7 27 -7 57q0 93 62 161t155 78q17 85 82.5 139t152.5 54q83 0 148 -51.5t85 -132.5l83 -348l103 428q20 81 85 132.5t148 51.5q89 0 155.5 -57.5t80.5 -144.5q92 -10 152 -79 t60 -162q0 -24 -7 -59l-123 -512q10 7 37.5 28.5t38.5 29.5t35 23t41 20.5t41.5 11t49.5 5.5q105 0 180 -74t75 -179q0 -62 -28.5 -118t-78.5 -94l-507 -380q-68 -51 -153 -51h-694zM1104 1408q-38 0 -68.5 -24t-39.5 -62l-164 -682h-127l-145 602q-9 38 -39.5 62t-68.5 24 q-48 0 -80 -33t-32 -80q0 -15 3 -28l132 -547h-26l-99 408q-9 37 -40 62.5t-69 25.5q-47 0 -80 -33t-33 -79q0 -14 3 -26l116 -478q7 -28 9 -86t10 -88l100 -401q8 -32 34 -52.5t59 -20.5h694q42 0 76 26l507 379q56 43 56 110q0 52 -37.5 88.5t-89.5 36.5q-43 0 -77 -26 l-307 -230v227q0 4 32 138t68 282t39 161q4 18 4 29q0 47 -32 81t-79 34q-39 0 -69.5 -24t-39.5 -62l-116 -482h-26l150 624q3 14 3 28q0 48 -31.5 82t-79.5 34z"
      ],
      "\uf25a": [
        1792,
        "M640 1408q-53 0 -90.5 -37.5t-37.5 -90.5v-512v-384l-151 202q-41 54 -107 54q-52 0 -89 -38t-37 -90q0 -43 26 -77l384 -512q38 -51 102 -51h718q22 0 39.5 13.5t22.5 34.5l92 368q24 96 24 194v217q0 41 -28 71t-68 30t-68 -28t-28 -68h-32v61q0 48 -32 81.5t-80 33.5 q-46 0 -79 -33t-33 -79v-64h-32v90q0 55 -37 94.5t-91 39.5q-53 0 -90.5 -37.5t-37.5 -90.5v-96h-32v570q0 55 -37 94.5t-91 39.5zM640 1536q107 0 181.5 -77.5t74.5 -184.5v-220q22 2 32 2q99 0 173 -69q47 21 99 21q113 0 184 -87q27 7 56 7q94 0 159 -67.5t65 -161.5 v-217q0 -116 -28 -225l-92 -368q-16 -64 -68 -104.5t-118 -40.5h-718q-60 0 -114.5 27.5t-90.5 74.5l-384 512q-51 68 -51 154q0 105 74.5 180.5t179.5 75.5q71 0 130 -35v547q0 106 75 181t181 75zM768 128v384h-32v-384h32zM1024 128v384h-32v-384h32zM1280 128v384h-32 v-384h32z"
      ],
      "\uf25b": [
        1536.0,
        "M1288 889q60 0 107 -23q141 -63 141 -226v-177q0 -94 -23 -186l-85 -339q-21 -86 -90.5 -140t-157.5 -54h-668q-106 0 -181 75t-75 181v401l-239 628q-17 45 -17 91q0 106 75 181t181 75q80 0 145.5 -45.5t93.5 -119.5l17 -44v113q0 106 75 181t181 75t181 -75t75 -181 v-261q27 5 48 5q69 0 127.5 -36.5t88.5 -98.5zM1072 896q-33 0 -60.5 -18t-41.5 -48l-74 -163l-71 -155h55q50 0 90 -31.5t50 -80.5l154 338q10 20 10 46q0 46 -33 79t-79 33zM1293 761q-22 0 -40.5 -8t-29 -16t-23.5 -29.5t-17 -30.5t-17 -37l-132 -290q-10 -20 -10 -46 q0 -46 33 -79t79 -33q33 0 60.5 18t41.5 48l160 352q9 18 9 38q0 50 -32 81.5t-82 31.5zM128 1120q0 -22 8 -46l248 -650v-69l102 111q43 46 106 46h198l106 233v535q0 53 -37.5 90.5t-90.5 37.5t-90.5 -37.5t-37.5 -90.5v-640h-64l-200 526q-14 37 -47 59.5t-73 22.5 q-53 0 -90.5 -37.5t-37.5 -90.5zM1180 -128q44 0 78.5 27t45.5 70l85 339q19 73 19 155v91l-141 -310q-17 -38 -53 -61t-78 -23q-53 0 -93.5 34.5t-48.5 86.5q-44 -57 -114 -57h-208v32h208q46 0 81 33t35 79t-31 79t-77 33h-296q-49 0 -82 -36l-126 -136v-308 q0 -53 37.5 -90.5t90.5 -37.5h668z"
      ],
      "\uf25c": [
        1973,
        "M857 992v-117q0 -13 -9.5 -22t-22.5 -9h-298v-812q0 -13 -9 -22.5t-22 -9.5h-135q-13 0 -22.5 9t-9.5 23v812h-297q-13 0 -22.5 9t-9.5 22v117q0 14 9 23t23 9h793q13 0 22.5 -9.5t9.5 -22.5zM1895 995l77 -961q1 -13 -8 -24q-10 -10 -23 -10h-134q-12 0 -21 8.5 t-10 20.5l-46 588l-189 -425q-8 -19 -29 -19h-120q-20 0 -29 19l-188 427l-45 -590q-1 -12 -10 -20.5t-21 -8.5h-135q-13 0 -23 10q-9 10 -9 24l78 961q1 12 10 20.5t21 8.5h142q20 0 29 -19l220 -520q10 -24 20 -51q3 7 9.5 24.5t10.5 26.5l221 520q9 19 29 19h141 q13 0 22 -8.5t10 -20.5z"
      ],
      "\uf25d": [
        1792,
        "M1042 833q0 88 -60 121q-33 18 -117 18h-123v-281h162q66 0 102 37t36 105zM1094 548l205 -373q8 -17 -1 -31q-8 -16 -27 -16h-152q-20 0 -28 17l-194 365h-155v-350q0 -14 -9 -23t-23 -9h-134q-14 0 -23 9t-9 23v960q0 14 9 23t23 9h294q128 0 190 -24q85 -31 134 -109 t49 -180q0 -92 -42.5 -165.5t-115.5 -109.5q6 -10 9 -16zM896 1376q-150 0 -286 -58.5t-234.5 -157t-157 -234.5t-58.5 -286t58.5 -286t157 -234.5t234.5 -157t286 -58.5t286 58.5t234.5 157t157 234.5t58.5 286t-58.5 286t-157 234.5t-234.5 157t-286 58.5zM1792 640 q0 -182 -71 -348t-191 -286t-286 -191t-348 -71t-348 71t-286 191t-191 286t-71 348t71 348t191 286t286 191t348 71t348 -71t286 -191t191 -286t71 -348z"
      ],
      "\uf25e": [
        1792,
        "M605 303q153 0 257 104q14 18 3 36l-45 82q-6 13 -24 17q-16 2 -27 -11l-4 -3q-4 -4 -11.5 -10t-17.5 -13.5t-23.5 -14.5t-28.5 -13t-33.5 -9.5t-37.5 -3.5q-76 0 -125 50t-49 127q0 76 48 125.5t122 49.5q37 0 71.5 -14t50.5 -28l16 -14q11 -11 26 -10q16 2 24 14l53 78 q13 20 -2 39q-3 4 -11 12t-30 23.5t-48.5 28t-67.5 22.5t-86 10q-148 0 -246 -96.5t-98 -240.5q0 -146 97 -241.5t247 -95.5zM1235 303q153 0 257 104q14 18 4 36l-45 82q-8 14 -25 17q-16 2 -27 -11l-4 -3q-4 -4 -11.5 -10t-17.5 -13.5t-23.5 -14.5t-28.5 -13t-33.5 -9.5 t-37.5 -3.5q-76 0 -125 50t-49 127q0 76 48 125.5t122 49.5q37 0 71.5 -14t50.5 -28l16 -14q11 -11 26 -10q16 2 24 14l53 78q13 20 -2 39q-3 4 -11 12t-30 23.5t-48.5 28t-67.5 22.5t-86 10q-147 0 -245.5 -96.5t-98.5 -240.5q0 -146 97 -241.5t247 -95.5zM896 1376 q-150 0 -286 -58.5t-234.5 -157t-157 -234.5t-58.5 -286t58.5 -286t157 -234.5t234.5 -157t286 -58.5t286 58.5t234.5 157t157 234.5t58.5 286t-58.5 286t-157 234.5t-234.5 157t-286 58.5zM896 1536q182 0 348 -71t286 -191t191 -286t71 -348t-71 -348t-191 -286t-286 -191 t-348 -71t-348 71t-286 191t-191 286t-71 348t71 348t191 286t286 191t348 71z"
      ],
      "\uf260": [
        2048,
        "M736 736l384 -384l-384 -384l-672 672l672 672l168 -168l-96 -96l-72 72l-480 -480l480 -480l193 193l-289 287zM1312 1312l672 -672l-672 -672l-168 168l96 96l72 -72l480 480l-480 480l-193 -193l289 -287l-96 -96l-384 384z"
      ],
      "\uf261": [
        1792,
        "M717 182l271 271l-279 279l-88 -88l192 -191l-96 -96l-279 279l279 279l40 -40l87 87l-127 128l-454 -454zM1075 190l454 454l-454 454l-271 -271l279 -279l88 88l-192 191l96 96l279 -279l-279 -279l-40 40l-87 -88zM1792 640q0 -182 -71 -348t-191 -286t-286 -191 t-348 -71t-348 71t-286 191t-191 286t-71 348t71 348t191 286t286 191t348 71t348 -71t286 -191t191 -286t71 -348z"
      ],
      "\uf262": [
        2304,
        "M651 539q0 -39 -27.5 -66.5t-65.5 -27.5q-39 0 -66.5 27.5t-27.5 66.5q0 38 27.5 65.5t66.5 27.5q38 0 65.5 -27.5t27.5 -65.5zM1805 540q0 -39 -27.5 -66.5t-66.5 -27.5t-66.5 27.5t-27.5 66.5t27.5 66t66.5 27t66.5 -27t27.5 -66zM765 539q0 79 -56.5 136t-136.5 57 t-136.5 -56.5t-56.5 -136.5t56.5 -136.5t136.5 -56.5t136.5 56.5t56.5 136.5zM1918 540q0 80 -56.5 136.5t-136.5 56.5q-79 0 -136 -56.5t-57 -136.5t56.5 -136.5t136.5 -56.5t136.5 56.5t56.5 136.5zM850 539q0 -116 -81.5 -197.5t-196.5 -81.5q-116 0 -197.5 82t-81.5 197 t82 196.5t197 81.5t196.5 -81.5t81.5 -196.5zM2004 540q0 -115 -81.5 -196.5t-197.5 -81.5q-115 0 -196.5 81.5t-81.5 196.5t81.5 196.5t196.5 81.5q116 0 197.5 -81.5t81.5 -196.5zM1040 537q0 191 -135.5 326.5t-326.5 135.5q-125 0 -231 -62t-168 -168.5t-62 -231.5 t62 -231.5t168 -168.5t231 -62q191 0 326.5 135.5t135.5 326.5zM1708 1110q-254 111 -556 111q-319 0 -573 -110q117 0 223 -45.5t182.5 -122.5t122 -183t45.5 -223q0 115 43.5 219.5t118 180.5t177.5 123t217 50zM2187 537q0 191 -135 326.5t-326 135.5t-326.5 -135.5 t-135.5 -326.5t135.5 -326.5t326.5 -135.5t326 135.5t135 326.5zM1921 1103h383q-44 -51 -75 -114.5t-40 -114.5q110 -151 110 -337q0 -156 -77 -288t-209 -208.5t-287 -76.5q-133 0 -249 56t-196 155q-47 -56 -129 -179q-11 22 -53.5 82.5t-74.5 97.5 q-80 -99 -196.5 -155.5t-249.5 -56.5q-155 0 -287 76.5t-209 208.5t-77 288q0 186 110 337q-9 51 -40 114.5t-75 114.5h365q149 100 355 156.5t432 56.5q224 0 421 -56t348 -157z"
      ],
      "\uf263": [
        1280,
        "M640 629q-188 0 -321 133t-133 320q0 188 133 321t321 133t321 -133t133 -321q0 -187 -133 -320t-321 -133zM640 1306q-92 0 -157.5 -65.5t-65.5 -158.5q0 -92 65.5 -157.5t157.5 -65.5t157.5 65.5t65.5 157.5q0 93 -65.5 158.5t-157.5 65.5zM1163 574q13 -27 15 -49.5 t-4.5 -40.5t-26.5 -38.5t-42.5 -37t-61.5 -41.5q-115 -73 -315 -94l73 -72l267 -267q30 -31 30 -74t-30 -73l-12 -13q-31 -30 -74 -30t-74 30q-67 68 -267 268l-267 -268q-31 -30 -74 -30t-73 30l-12 13q-31 30 -31 73t31 74l267 267l72 72q-203 21 -317 94 q-39 25 -61.5 41.5t-42.5 37t-26.5 38.5t-4.5 40.5t15 49.5q10 20 28 35t42 22t56 -2t65 -35q5 -4 15 -11t43 -24.5t69 -30.5t92 -24t113 -11q91 0 174 25.5t120 50.5l38 25q33 26 65 35t56 2t42 -22t28 -35z"
      ],
      "\uf264": [
        1536.0,
        "M927 956q0 -66 -46.5 -112.5t-112.5 -46.5t-112.5 46.5t-46.5 112.5t46.5 112.5t112.5 46.5t112.5 -46.5t46.5 -112.5zM1141 593q-10 20 -28 32t-47.5 9.5t-60.5 -27.5q-10 -8 -29 -20t-81 -32t-127 -20t-124 18t-86 36l-27 18q-31 25 -60.5 27.5t-47.5 -9.5t-28 -32 q-22 -45 -2 -74.5t87 -73.5q83 -53 226 -67l-51 -52q-142 -142 -191 -190q-22 -22 -22 -52.5t22 -52.5l9 -9q22 -22 52.5 -22t52.5 22l191 191q114 -115 191 -191q22 -22 52.5 -22t52.5 22l9 9q22 22 22 52.5t-22 52.5l-191 190l-52 52q141 14 225 67q67 44 87 73.5t-2 74.5 zM1092 956q0 134 -95 229t-229 95t-229 -95t-95 -229t95 -229t229 -95t229 95t95 229zM1536 1120v-960q0 -119 -84.5 -203.5t-203.5 -84.5h-960q-119 0 -203.5 84.5t-84.5 203.5v960q0 119 84.5 203.5t203.5 84.5h960q119 0 203.5 -84.5t84.5 -203.5z"
      ],
      "\uf265": [
        1720,
        "M1565 1408q65 0 110 -45.5t45 -110.5v-519q0 -176 -68 -336t-182.5 -275t-274 -182.5t-334.5 -67.5q-176 0 -335.5 67.5t-274.5 182.5t-183 275t-68 336v519q0 64 46 110t110 46h1409zM861 344q47 0 82 33l404 388q37 35 37 85q0 49 -34.5 83.5t-83.5 34.5q-47 0 -82 -33 l-323 -310l-323 310q-35 33 -81 33q-49 0 -83.5 -34.5t-34.5 -83.5q0 -51 36 -85l405 -388q33 -33 81 -33z"
      ],
      "\uf266": [
        2304,
        "M1494 -103l-295 695q-25 -49 -158.5 -305.5t-198.5 -389.5q-1 -1 -27.5 -0.5t-26.5 1.5q-82 193 -255.5 587t-259.5 596q-21 50 -66.5 107.5t-103.5 100.5t-102 43q0 5 -0.5 24t-0.5 27h583v-50q-39 -2 -79.5 -16t-66.5 -43t-10 -64q26 -59 216.5 -499t235.5 -540 q31 61 140 266.5t131 247.5q-19 39 -126 281t-136 295q-38 69 -201 71v50l513 -1v-47q-60 -2 -93.5 -25t-12.5 -69q33 -70 87 -189.5t86 -187.5q110 214 173 363q24 55 -10 79.5t-129 26.5q1 7 1 25v24q64 0 170.5 0.5t180 1t92.5 0.5v-49q-62 -2 -119 -33t-90 -81 l-213 -442q13 -33 127.5 -290t121.5 -274l441 1017q-14 38 -49.5 62.5t-65 31.5t-55.5 8v50l460 -4l1 -2l-1 -44q-139 -4 -201 -145q-526 -1216 -559 -1291h-49z"
      ],
      "\uf267": [
        1792,
        "M949 643q0 -26 -16.5 -45t-41.5 -19q-26 0 -45 16.5t-19 41.5q0 26 17 45t42 19t44 -16.5t19 -41.5zM964 585l350 581q-9 -8 -67.5 -62.5t-125.5 -116.5t-136.5 -127t-117 -110.5t-50.5 -51.5l-349 -580q7 7 67 62t126 116.5t136 127t117 111t50 50.5zM1611 640 q0 -201 -104 -371q-3 2 -17 11t-26.5 16.5t-16.5 7.5q-13 0 -13 -13q0 -10 59 -44q-74 -112 -184.5 -190.5t-241.5 -110.5l-16 67q-1 10 -15 10q-5 0 -8 -5.5t-2 -9.5l16 -68q-72 -15 -146 -15q-199 0 -372 105q1 2 13 20.5t21.5 33.5t9.5 19q0 13 -13 13q-6 0 -17 -14.5 t-22.5 -34.5t-13.5 -23q-113 75 -192 187.5t-110 244.5l69 15q10 3 10 15q0 5 -5.5 8t-10.5 2l-68 -15q-14 72 -14 139q0 206 109 379q2 -1 18.5 -12t30 -19t17.5 -8q13 0 13 12q0 6 -12.5 15.5t-32.5 21.5l-20 12q77 112 189 189t244 107l15 -67q2 -10 15 -10q5 0 8 5.5 t2 10.5l-15 66q71 13 134 13q204 0 379 -109q-39 -56 -39 -65q0 -13 12 -13q11 0 48 64q111 -75 187.5 -186t107.5 -241l-56 -12q-10 -2 -10 -16q0 -5 5.5 -8t9.5 -2l57 13q14 -72 14 -140zM1696 640q0 163 -63.5 311t-170.5 255t-255 170.5t-311 63.5t-311 -63.5 t-255 -170.5t-170.5 -255t-63.5 -311t63.5 -311t170.5 -255t255 -170.5t311 -63.5t311 63.5t255 170.5t170.5 255t63.5 311zM1792 640q0 -182 -71 -348t-191 -286t-286 -191t-348 -71t-348 71t-286 191t-191 286t-71 348t71 348t191 286t286 191t348 71t348 -71t286 -191 t191 -286t71 -348z"
      ],
      "\uf268": [
        1792,
        "M893 1536q240 2 451 -120q232 -134 352 -372l-742 39q-160 9 -294 -74.5t-185 -229.5l-276 424q128 159 311 245.5t383 87.5zM146 1131l337 -663q72 -143 211 -217t293 -45l-230 -451q-212 33 -385 157.5t-272.5 316t-99.5 411.5q0 267 146 491zM1732 962 q58 -150 59.5 -310.5t-48.5 -306t-153 -272t-246 -209.5q-230 -133 -498 -119l405 623q88 131 82.5 290.5t-106.5 277.5zM896 942q125 0 213.5 -88.5t88.5 -213.5t-88.5 -213.5t-213.5 -88.5t-213.5 88.5t-88.5 213.5t88.5 213.5t213.5 88.5z"
      ],
      "\uf269": [
        1792,
        "M903 -256q-283 0 -504.5 150.5t-329.5 398.5q-58 131 -67 301t26 332.5t111 312t179 242.5l-11 -281q11 14 68 15.5t70 -15.5q42 81 160.5 138t234.5 59q-54 -45 -119.5 -148.5t-58.5 -163.5q25 -8 62.5 -13.5t63 -7.5t68 -4t50.5 -3q15 -5 9.5 -45.5t-30.5 -75.5 q-5 -7 -16.5 -18.5t-56.5 -35.5t-101 -34l15 -189l-139 67q-18 -43 -7.5 -81.5t36 -66.5t65.5 -41.5t81 -6.5q51 9 98 34.5t83.5 45t73.5 17.5q61 -4 89.5 -33t19.5 -65q-1 -2 -2.5 -5.5t-8.5 -12.5t-18 -15.5t-31.5 -10.5t-46.5 -1q-60 -95 -144.5 -135.5t-209.5 -29.5 q74 -61 162.5 -82.5t168.5 -6t154.5 52t128 87.5t80.5 104q43 91 39 192.5t-37.5 188.5t-78.5 125q87 -38 137 -79.5t77 -112.5q15 170 -57.5 343t-209.5 284q265 -77 412 -279.5t151 -517.5q2 -127 -40.5 -255t-123.5 -238t-189 -196t-247.5 -135.5t-288.5 -49.5z"
      ],
      "\uf26a": [
        1792,
        "M1493 1308q-165 110 -359 110q-155 0 -293 -73t-240 -200q-75 -93 -119.5 -218t-48.5 -266v-42q4 -141 48.5 -266t119.5 -218q102 -127 240 -200t293 -73q194 0 359 110q-121 -108 -274.5 -168t-322.5 -60q-29 0 -43 1q-175 8 -333 82t-272 193t-181 281t-67 339 q0 182 71 348t191 286t286 191t348 71h3q168 -1 320.5 -60.5t273.5 -167.5zM1792 640q0 -192 -77 -362.5t-213 -296.5q-104 -63 -222 -63q-137 0 -255 84q154 56 253.5 233t99.5 405q0 227 -99 404t-253 234q119 83 254 83q119 0 226 -65q135 -125 210.5 -295t75.5 -361z "
      ],
      "\uf26b": [
        1792,
        "M1792 599q0 -56 -7 -104h-1151q0 -146 109.5 -244.5t257.5 -98.5q99 0 185.5 46.5t136.5 130.5h423q-56 -159 -170.5 -281t-267.5 -188.5t-321 -66.5q-187 0 -356 83q-228 -116 -394 -116q-237 0 -237 263q0 115 45 275q17 60 109 229q199 360 475 606 q-184 -79 -427 -354q63 274 283.5 449.5t501.5 175.5q30 0 45 -1q255 117 433 117q64 0 116 -13t94.5 -40.5t66.5 -76.5t24 -115q0 -116 -75 -286q101 -182 101 -390zM1722 1239q0 83 -53 132t-137 49q-108 0 -254 -70q121 -47 222.5 -131.5t170.5 -195.5q51 135 51 216z M128 2q0 -86 48.5 -132.5t134.5 -46.5q115 0 266 83q-122 72 -213.5 183t-137.5 245q-98 -205 -98 -332zM632 715h728q-5 142 -113 237t-251 95q-144 0 -251.5 -95t-112.5 -237z"
      ],
      "\uf26c": [
        2048,
        "M1792 288v960q0 13 -9.5 22.5t-22.5 9.5h-1600q-13 0 -22.5 -9.5t-9.5 -22.5v-960q0 -13 9.5 -22.5t22.5 -9.5h1600q13 0 22.5 9.5t9.5 22.5zM1920 1248v-960q0 -66 -47 -113t-113 -47h-736v-128h352q14 0 23 -9t9 -23v-64q0 -14 -9 -23t-23 -9h-832q-14 0 -23 9t-9 23 v64q0 14 9 23t23 9h352v128h-736q-66 0 -113 47t-47 113v960q0 66 47 113t113 47h1600q66 0 113 -47t47 -113z"
      ],
      "\uf26d": [
        1792,
        "M138 1408h197q-70 -64 -126 -149q-36 -56 -59 -115t-30 -125.5t-8.5 -120t10.5 -132t21 -126t28 -136.5q4 -19 6 -28q51 -238 81 -329q57 -171 152 -275h-272q-48 0 -82 34t-34 82v1304q0 48 34 82t82 34zM1346 1408h308q48 0 82 -34t34 -82v-1304q0 -48 -34 -82t-82 -34 h-178q212 210 196 565l-469 -101q-2 -45 -12 -82t-31 -72t-59.5 -59.5t-93.5 -36.5q-123 -26 -199 40q-32 27 -53 61t-51.5 129t-64.5 258q-35 163 -45.5 263t-5.5 139t23 77q20 41 62.5 73t102.5 45q45 12 83.5 6.5t67 -17t54 -35t43 -48t34.5 -56.5l468 100 q-68 175 -180 287z"
      ],
      "\uf26e": [
        1536.0,
        "M1401 -11l-6 -6q-113 -113 -259 -175q-154 -64 -317 -64q-165 0 -317 64q-148 63 -259 175q-113 112 -175 258q-42 103 -54 189q-4 28 48 36q51 8 56 -20q1 -1 1 -4q18 -90 46 -159q50 -124 152 -226q98 -98 226 -152q132 -56 276 -56q143 0 276 56q128 55 225 152l6 6 q10 10 25 6q12 -3 33 -22q36 -37 17 -58zM929 604l-66 -66l63 -63q21 -21 -7 -49q-17 -17 -32 -17q-10 0 -19 10l-62 61l-66 -66q-5 -5 -15 -5q-15 0 -31 16l-2 2q-18 15 -18 29q0 7 8 17l66 65l-66 66q-16 16 14 45q18 18 31 18q6 0 13 -5l65 -66l65 65q18 17 48 -13 q27 -27 11 -44zM1400 547q0 -118 -46 -228q-45 -105 -126 -186q-80 -80 -187 -126t-228 -46t-228 46t-187 126q-82 82 -125 186q-15 33 -15 40h-1q-9 27 43 44q50 16 60 -12q37 -99 97 -167h1v339v2q3 136 102 232q105 103 253 103q147 0 251 -103t104 -249 q0 -147 -104.5 -251t-250.5 -104q-58 0 -112 16q-28 11 -13 61q16 51 44 43l14 -3q14 -3 33 -6t30 -3q104 0 176 71.5t72 174.5q0 101 -72 171q-71 71 -175 71q-107 0 -178 -80q-64 -72 -64 -160v-413q110 -67 242 -67q96 0 185 36.5t156 103.5t103.5 155t36.5 183 q0 198 -141 339q-140 140 -339 140q-200 0 -340 -140q-53 -53 -77 -87l-2 -2q-8 -11 -13 -15.5t-21.5 -9.5t-38.5 3q-21 5 -36.5 16.5t-15.5 26.5v680q0 15 10.5 26.5t27.5 11.5h877q30 0 30 -55t-30 -55h-811v-483h1q40 42 102 84t108 61q109 46 231 46q121 0 228 -46 t187 -126q81 -81 126 -186q46 -112 46 -229zM1369 1128q9 -8 9 -18t-5.5 -18t-16.5 -21q-26 -26 -39 -26q-9 0 -16 7q-106 91 -207 133q-128 56 -276 56q-133 0 -262 -49q-27 -10 -45 37q-9 25 -8 38q3 16 16 20q130 57 299 57q164 0 316 -64q137 -58 235 -152z"
      ],
      "\uf270": [
        1792,
        "M1551 60q15 6 26 3t11 -17.5t-15 -33.5q-13 -16 -44 -43.5t-95.5 -68t-141 -74t-188 -58t-229.5 -24.5q-119 0 -238 31t-209 76.5t-172.5 104t-132.5 105t-84 87.5q-8 9 -10 16.5t1 12t8 7t11.5 2t11.5 -4.5q192 -117 300 -166q389 -176 799 -90q190 40 391 135z M1758 175q11 -16 2.5 -69.5t-28.5 -102.5q-34 -83 -85 -124q-17 -14 -26 -9t0 24q21 45 44.5 121.5t6.5 98.5q-5 7 -15.5 11.5t-27 6t-29.5 2.5t-35 0t-31.5 -2t-31 -3t-22.5 -2q-6 -1 -13 -1.5t-11 -1t-8.5 -1t-7 -0.5h-5.5h-4.5t-3 0.5t-2 1.5l-1.5 3q-6 16 47 40t103 30 q46 7 108 1t76 -24zM1364 618q0 -31 13.5 -64t32 -58t37.5 -46t33 -32l13 -11l-227 -224q-40 37 -79 75.5t-58 58.5l-19 20q-11 11 -25 33q-38 -59 -97.5 -102.5t-127.5 -63.5t-140 -23t-137.5 21t-117.5 65.5t-83 113t-31 162.5q0 84 28 154t72 116.5t106.5 83t122.5 57 t130 34.5t119.5 18.5t99.5 6.5v127q0 65 -21 97q-34 53 -121 53q-6 0 -16.5 -1t-40.5 -12t-56 -29.5t-56 -59.5t-48 -96l-294 27q0 60 22 119t67 113t108 95t151.5 65.5t190.5 24.5q100 0 181 -25t129.5 -61.5t81 -83t45 -86t12.5 -73.5v-589zM692 597q0 -86 70 -133 q66 -44 139 -22q84 25 114 123q14 45 14 101v162q-59 -2 -111 -12t-106.5 -33.5t-87 -71t-32.5 -114.5z"
      ],
      "\uf271": [
        1792,
        "M1536 1280q52 0 90 -38t38 -90v-1280q0 -52 -38 -90t-90 -38h-1408q-52 0 -90 38t-38 90v1280q0 52 38 90t90 38h128v96q0 66 47 113t113 47h64q66 0 113 -47t47 -113v-96h384v96q0 66 47 113t113 47h64q66 0 113 -47t47 -113v-96h128zM1152 1376v-288q0 -14 9 -23t23 -9 h64q14 0 23 9t9 23v288q0 14 -9 23t-23 9h-64q-14 0 -23 -9t-9 -23zM384 1376v-288q0 -14 9 -23t23 -9h64q14 0 23 9t9 23v288q0 14 -9 23t-23 9h-64q-14 0 -23 -9t-9 -23zM1536 -128v1024h-1408v-1024h1408zM896 448h224q14 0 23 -9t9 -23v-64q0 -14 -9 -23t-23 -9h-224 v-224q0 -14 -9 -23t-23 -9h-64q-14 0 -23 9t-9 23v224h-224q-14 0 -23 9t-9 23v64q0 14 9 23t23 9h224v224q0 14 9 23t23 9h64q14 0 23 -9t9 -23v-224z"
      ],
      "\uf272": [
        1792,
        "M1152 416v-64q0 -14 -9 -23t-23 -9h-576q-14 0 -23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23 -9t9 -23zM128 -128h1408v1024h-1408v-1024zM512 1088v288q0 14 -9 23t-23 9h-64q-14 0 -23 -9t-9 -23v-288q0 -14 9 -23t23 -9h64q14 0 23 9t9 23zM1280 1088v288q0 14 -9 23 t-23 9h-64q-14 0 -23 -9t-9 -23v-288q0 -14 9 -23t23 -9h64q14 0 23 9t9 23zM1664 1152v-1280q0 -52 -38 -90t-90 -38h-1408q-52 0 -90 38t-38 90v1280q0 52 38 90t90 38h128v96q0 66 47 113t113 47h64q66 0 113 -47t47 -113v-96h384v96q0 66 47 113t113 47h64q66 0 113 -47 t47 -113v-96h128q52 0 90 -38t38 -90z"
      ],
      "\uf273": [
        1792,
        "M1111 151l-46 -46q-9 -9 -22 -9t-23 9l-188 189l-188 -189q-10 -9 -23 -9t-22 9l-46 46q-9 9 -9 22t9 23l189 188l-189 188q-9 10 -9 23t9 22l46 46q9 9 22 9t23 -9l188 -188l188 188q10 9 23 9t22 -9l46 -46q9 -9 9 -22t-9 -23l-188 -188l188 -188q9 -10 9 -23t-9 -22z M128 -128h1408v1024h-1408v-1024zM512 1088v288q0 14 -9 23t-23 9h-64q-14 0 -23 -9t-9 -23v-288q0 -14 9 -23t23 -9h64q14 0 23 9t9 23zM1280 1088v288q0 14 -9 23t-23 9h-64q-14 0 -23 -9t-9 -23v-288q0 -14 9 -23t23 -9h64q14 0 23 9t9 23zM1664 1152v-1280 q0 -52 -38 -90t-90 -38h-1408q-52 0 -90 38t-38 90v1280q0 52 38 90t90 38h128v96q0 66 47 113t113 47h64q66 0 113 -47t47 -113v-96h384v96q0 66 47 113t113 47h64q66 0 113 -47t47 -113v-96h128q52 0 90 -38t38 -90z"
      ],
      "\uf274": [
        1792,
        "M1303 572l-512 -512q-10 -9 -23 -9t-23 9l-288 288q-9 10 -9 23t9 22l46 46q9 9 22 9t23 -9l220 -220l444 444q10 9 23 9t22 -9l46 -46q9 -9 9 -22t-9 -23zM128 -128h1408v1024h-1408v-1024zM512 1088v288q0 14 -9 23t-23 9h-64q-14 0 -23 -9t-9 -23v-288q0 -14 9 -23 t23 -9h64q14 0 23 9t9 23zM1280 1088v288q0 14 -9 23t-23 9h-64q-14 0 -23 -9t-9 -23v-288q0 -14 9 -23t23 -9h64q14 0 23 9t9 23zM1664 1152v-1280q0 -52 -38 -90t-90 -38h-1408q-52 0 -90 38t-38 90v1280q0 52 38 90t90 38h128v96q0 66 47 113t113 47h64q66 0 113 -47 t47 -113v-96h384v96q0 66 47 113t113 47h64q66 0 113 -47t47 -113v-96h128q52 0 90 -38t38 -90z"
      ],
      "\uf275": [
        1792,
        "M448 1536q26 0 45 -19t19 -45v-891l536 429q17 14 40 14q26 0 45 -19t19 -45v-379l536 429q17 14 40 14q26 0 45 -19t19 -45v-1152q0 -26 -19 -45t-45 -19h-1664q-26 0 -45 19t-19 45v1664q0 26 19 45t45 19h384z"
      ],
      "\uf276": [
        1024,
        "M512 448q66 0 128 15v-655q0 -26 -19 -45t-45 -19h-128q-26 0 -45 19t-19 45v655q62 -15 128 -15zM512 1536q212 0 362 -150t150 -362t-150 -362t-362 -150t-362 150t-150 362t150 362t362 150zM512 1312q14 0 23 9t9 23t-9 23t-23 9q-146 0 -249 -103t-103 -249 q0 -14 9 -23t23 -9t23 9t9 23q0 119 84.5 203.5t203.5 84.5z"
      ],
      "\uf277": [
        1792,
        "M1745 1239q10 -10 10 -23t-10 -23l-141 -141q-28 -28 -68 -28h-1344q-26 0 -45 19t-19 45v256q0 26 19 45t45 19h576v64q0 26 19 45t45 19h128q26 0 45 -19t19 -45v-64h512q40 0 68 -28zM768 320h256v-512q0 -26 -19 -45t-45 -19h-128q-26 0 -45 19t-19 45v512zM1600 768 q26 0 45 -19t19 -45v-256q0 -26 -19 -45t-45 -19h-1344q-40 0 -68 28l-141 141q-10 10 -10 23t10 23l141 141q28 28 68 28h512v192h256v-192h576z"
      ],
      "\uf278": [
        2048,
        "M2020 1525q28 -20 28 -53v-1408q0 -20 -11 -36t-29 -23l-640 -256q-24 -11 -48 0l-616 246l-616 -246q-10 -5 -24 -5q-19 0 -36 11q-28 20 -28 53v1408q0 20 11 36t29 23l640 256q24 11 48 0l616 -246l616 246q32 13 60 -6zM736 1390v-1270l576 -230v1270zM128 1173 v-1270l544 217v1270zM1920 107v1270l-544 -217v-1270z"
      ],
      "\uf279": [
        1792,
        "M512 1536q13 0 22.5 -9.5t9.5 -22.5v-1472q0 -20 -17 -28l-480 -256q-7 -4 -15 -4q-13 0 -22.5 9.5t-9.5 22.5v1472q0 20 17 28l480 256q7 4 15 4zM1760 1536q13 0 22.5 -9.5t9.5 -22.5v-1472q0 -20 -17 -28l-480 -256q-7 -4 -15 -4q-13 0 -22.5 9.5t-9.5 22.5v1472 q0 20 17 28l480 256q7 4 15 4zM640 1536q8 0 14 -3l512 -256q18 -10 18 -29v-1472q0 -13 -9.5 -22.5t-22.5 -9.5q-8 0 -14 3l-512 256q-18 10 -18 29v1472q0 13 9.5 22.5t22.5 9.5z"
      ],
      "\uf27a": [
        1792,
        "M640 640q0 53 -37.5 90.5t-90.5 37.5t-90.5 -37.5t-37.5 -90.5t37.5 -90.5t90.5 -37.5t90.5 37.5t37.5 90.5zM1024 640q0 53 -37.5 90.5t-90.5 37.5t-90.5 -37.5t-37.5 -90.5t37.5 -90.5t90.5 -37.5t90.5 37.5t37.5 90.5zM1408 640q0 53 -37.5 90.5t-90.5 37.5 t-90.5 -37.5t-37.5 -90.5t37.5 -90.5t90.5 -37.5t90.5 37.5t37.5 90.5zM1792 640q0 -174 -120 -321.5t-326 -233t-450 -85.5q-110 0 -211 18q-173 -173 -435 -229q-52 -10 -86 -13q-12 -1 -22 6t-13 18q-4 15 20 37q5 5 23.5 21.5t25.5 23.5t23.5 25.5t24 31.5t20.5 37 t20 48t14.5 57.5t12.5 72.5q-146 90 -229.5 216.5t-83.5 269.5q0 174 120 321.5t326 233t450 85.5t450 -85.5t326 -233t120 -321.5z"
      ],
      "\uf27b": [
        1792,
        "M640 640q0 -53 -37.5 -90.5t-90.5 -37.5t-90.5 37.5t-37.5 90.5t37.5 90.5t90.5 37.5t90.5 -37.5t37.5 -90.5zM1024 640q0 -53 -37.5 -90.5t-90.5 -37.5t-90.5 37.5t-37.5 90.5t37.5 90.5t90.5 37.5t90.5 -37.5t37.5 -90.5zM1408 640q0 -53 -37.5 -90.5t-90.5 -37.5 t-90.5 37.5t-37.5 90.5t37.5 90.5t90.5 37.5t90.5 -37.5t37.5 -90.5zM896 1152q-204 0 -381.5 -69.5t-282 -187.5t-104.5 -255q0 -112 71.5 -213.5t201.5 -175.5l87 -50l-27 -96q-24 -91 -70 -172q152 63 275 171l43 38l57 -6q69 -8 130 -8q204 0 381.5 69.5t282 187.5 t104.5 255t-104.5 255t-282 187.5t-381.5 69.5zM1792 640q0 -174 -120 -321.5t-326 -233t-450 -85.5q-70 0 -145 8q-198 -175 -460 -242q-49 -14 -114 -22h-5q-15 0 -27 10.5t-16 27.5v1q-3 4 -0.5 12t2 10t4.5 9.5l6 9t7 8.5t8 9q7 8 31 34.5t34.5 38t31 39.5t32.5 51 t27 59t26 76q-157 89 -247.5 220t-90.5 281q0 130 71 248.5t191 204.5t286 136.5t348 50.5t348 -50.5t286 -136.5t191 -204.5t71 -248.5z"
      ],
      "\uf27c": [
        1024,
        "M512 345l512 295v-591l-512 -296v592zM0 640v-591l512 296zM512 1527v-591l-512 -296v591zM512 936l512 295v-591z"
      ],
      "\uf27d": [
        1792,
        "M1709 1018q-10 -236 -332 -651q-333 -431 -562 -431q-142 0 -240 263q-44 160 -132 482q-72 262 -157 262q-18 0 -127 -76l-77 98q24 21 108 96.5t130 115.5q156 138 241 146q95 9 153 -55.5t81 -203.5q44 -287 66 -373q55 -249 120 -249q51 0 154 161q101 161 109 246 q13 139 -109 139q-57 0 -121 -26q120 393 459 382q251 -8 236 -326z"
      ],
      "\uf27e": [
        1536.0,
        "M0 1408h1536v-1536h-1536v1536zM1085 293l-221 631l221 297h-634l221 -297l-221 -631l317 -304z"
      ],
      "\uf280": [
        1536.0,
        "M0 1408h1536v-1536h-1536v1536zM908 1088l-12 -33l75 -83l-31 -114l25 -25l107 57l107 -57l25 25l-31 114l75 83l-12 33h-95l-53 96h-32l-53 -96h-95zM641 925q32 0 44.5 -16t11.5 -63l174 21q0 55 -17.5 92.5t-50.5 56t-69 25.5t-85 7q-133 0 -199 -57.5t-66 -182.5v-72 h-96v-128h76q20 0 20 -8v-382q0 -14 -5 -20t-18 -7l-73 -7v-88h448v86l-149 14q-6 1 -8.5 1.5t-3.5 2.5t-0.5 4t1 7t0.5 10v387h191l38 128h-231q-6 0 -2 6t4 9v80q0 27 1.5 40.5t7.5 28t19.5 20t36.5 5.5zM1248 96v86l-54 9q-7 1 -9.5 2.5t-2.5 3t1 7.5t1 12v520h-275 l-23 -101l83 -22q23 -7 23 -27v-370q0 -14 -6 -18.5t-20 -6.5l-70 -9v-86h352z"
      ],
      "\uf281": [
        1792,
        "M1792 690q0 -58 -29.5 -105.5t-79.5 -72.5q12 -46 12 -96q0 -155 -106.5 -287t-290.5 -208.5t-400 -76.5t-399.5 76.5t-290 208.5t-106.5 287q0 47 11 94q-51 25 -82 73.5t-31 106.5q0 82 58 140.5t141 58.5q85 0 145 -63q218 152 515 162l116 521q3 13 15 21t26 5 l369 -81q18 37 54 59.5t79 22.5q62 0 106 -43.5t44 -105.5t-44 -106t-106 -44t-105.5 43.5t-43.5 105.5l-334 74l-104 -472q300 -9 519 -160q58 61 143 61q83 0 141 -58.5t58 -140.5zM418 491q0 -62 43.5 -106t105.5 -44t106 44t44 106t-44 105.5t-106 43.5q-61 0 -105 -44 t-44 -105zM1228 136q11 11 11 26t-11 26q-10 10 -25 10t-26 -10q-41 -42 -121 -62t-160 -20t-160 20t-121 62q-11 10 -26 10t-25 -10q-11 -10 -11 -25.5t11 -26.5q43 -43 118.5 -68t122.5 -29.5t91 -4.5t91 4.5t122.5 29.5t118.5 68zM1225 341q62 0 105.5 44t43.5 106 q0 61 -44 105t-105 44q-62 0 -106 -43.5t-44 -105.5t44 -106t106 -44z"
      ],
      "\uf282": [
        1792,
        "M69 741h1q16 126 58.5 241.5t115 217t167.5 176t223.5 117.5t276.5 43q231 0 414 -105.5t294 -303.5q104 -187 104 -442v-188h-1125q1 -111 53.5 -192.5t136.5 -122.5t189.5 -57t213 -3t208 46.5t173.5 84.5v-377q-92 -55 -229.5 -92t-312.5 -38t-316 53 q-189 73 -311.5 249t-124.5 372q-3 242 111 412t325 268q-48 -60 -78 -125.5t-46 -159.5h635q8 77 -8 140t-47 101.5t-70.5 66.5t-80.5 41t-75 20.5t-56 8.5l-22 1q-135 -5 -259.5 -44.5t-223.5 -104.5t-176 -140.5t-138 -163.5z"
      ],
      "\uf283": [
        2304,
        "M0 32v608h2304v-608q0 -66 -47 -113t-113 -47h-1984q-66 0 -113 47t-47 113zM640 256v-128h384v128h-384zM256 256v-128h256v128h-256zM2144 1408q66 0 113 -47t47 -113v-224h-2304v224q0 66 47 113t113 47h1984z"
      ],
      "\uf284": [
        1792,
        "M1584 246l-218 111q-74 -120 -196.5 -189t-263.5 -69q-147 0 -271 72t-196 196t-72 270q0 110 42.5 209.5t115 172t172 115t209.5 42.5q131 0 247.5 -60.5t192.5 -168.5l215 125q-110 169 -286.5 265t-378.5 96q-161 0 -308 -63t-253 -169t-169 -253t-63 -308t63 -308 t169 -253t253 -169t308 -63q213 0 397.5 107t290.5 292zM1030 643l693 -352q-116 -253 -334.5 -400t-492.5 -147q-182 0 -348 71t-286 191t-191 286t-71 348t71 348t191 286t286 191t348 71q260 0 470.5 -133.5t335.5 -366.5zM1543 640h-39v-160h-96v352h136q32 0 54.5 -20 t28.5 -48t1 -56t-27.5 -48t-57.5 -20z"
      ],
      "\uf285": [
        1792,
        "M1427 827l-614 386l92 151h855zM405 562l-184 116v858l1183 -743zM1424 697l147 -95v-858l-532 335zM1387 718l-500 -802h-855l356 571z"
      ],
      "\uf286": [
        1792,
        "M640 528v224q0 16 -16 16h-96q-16 0 -16 -16v-224q0 -16 16 -16h96q16 0 16 16zM1152 528v224q0 16 -16 16h-96q-16 0 -16 -16v-224q0 -16 16 -16h96q16 0 16 16zM1664 496v-752h-640v320q0 80 -56 136t-136 56t-136 -56t-56 -136v-320h-640v752q0 16 16 16h96 q16 0 16 -16v-112h128v624q0 16 16 16h96q16 0 16 -16v-112h128v112q0 16 16 16h96q16 0 16 -16v-112h128v112q0 6 2.5 9.5t8.5 5t9.5 2t11.5 0t9 -0.5v391q-32 15 -32 50q0 23 16.5 39t38.5 16t38.5 -16t16.5 -39q0 -35 -32 -50v-17q45 10 83 10q21 0 59.5 -7.5t54.5 -7.5 q17 0 47 7.5t37 7.5q16 0 16 -16v-210q0 -15 -35 -21.5t-62 -6.5q-18 0 -54.5 7.5t-55.5 7.5q-40 0 -90 -12v-133q1 0 9 0.5t11.5 0t9.5 -2t8.5 -5t2.5 -9.5v-112h128v112q0 16 16 16h96q16 0 16 -16v-112h128v112q0 16 16 16h96q16 0 16 -16v-624h128v112q0 16 16 16h96 q16 0 16 -16z"
      ],
      "\uf287": [
        2304,
        "M2288 731q16 -8 16 -27t-16 -27l-320 -192q-8 -5 -16 -5q-9 0 -16 4q-16 10 -16 28v128h-858q37 -58 83 -165q16 -37 24.5 -55t24 -49t27 -47t27 -34t31.5 -26t33 -8h96v96q0 14 9 23t23 9h320q14 0 23 -9t9 -23v-320q0 -14 -9 -23t-23 -9h-320q-14 0 -23 9t-9 23v96h-96 q-32 0 -61 10t-51 23.5t-45 40.5t-37 46t-33.5 57t-28.5 57.5t-28 60.5q-23 53 -37 81.5t-36 65t-44.5 53.5t-46.5 17h-360q-22 -84 -91 -138t-157 -54q-106 0 -181 75t-75 181t75 181t181 75q88 0 157 -54t91 -138h104q24 0 46.5 17t44.5 53.5t36 65t37 81.5q19 41 28 60.5 t28.5 57.5t33.5 57t37 46t45 40.5t51 23.5t61 10h107q21 57 70 92.5t111 35.5q80 0 136 -56t56 -136t-56 -136t-136 -56q-62 0 -111 35.5t-70 92.5h-107q-17 0 -33 -8t-31.5 -26t-27 -34t-27 -47t-24 -49t-24.5 -55q-46 -107 -83 -165h1114v128q0 18 16 28t32 -1z"
      ],
      "\uf288": [
        1792,
        "M1150 774q0 -56 -39.5 -95t-95.5 -39h-253v269h253q56 0 95.5 -39.5t39.5 -95.5zM1329 774q0 130 -91.5 222t-222.5 92h-433v-896h180v269h253q130 0 222 91.5t92 221.5zM1792 640q0 -182 -71 -348t-191 -286t-286 -191t-348 -71t-348 71t-286 191t-191 286t-71 348 t71 348t191 286t286 191t348 71t348 -71t286 -191t191 -286t71 -348z"
      ],
      "\uf289": [
        2304,
        "M1645 438q0 59 -34 106.5t-87 68.5q-7 -45 -23 -92q-7 -24 -27.5 -38t-44.5 -14q-12 0 -24 3q-31 10 -45 38.5t-4 58.5q23 71 23 143q0 123 -61 227.5t-166 165.5t-228 61q-134 0 -247 -73t-167 -194q108 -28 188 -106q22 -23 22 -55t-22 -54t-54 -22t-55 22 q-75 75 -180 75q-106 0 -181 -74.5t-75 -180.5t75 -180.5t181 -74.5h1046q79 0 134.5 55.5t55.5 133.5zM1798 438q0 -142 -100.5 -242t-242.5 -100h-1046q-169 0 -289 119.5t-120 288.5q0 153 100 267t249 136q62 184 221 298t354 114q235 0 408.5 -158.5t196.5 -389.5 q116 -25 192.5 -118.5t76.5 -214.5zM2048 438q0 -175 -97 -319q-23 -33 -64 -33q-24 0 -43 13q-26 17 -32 48.5t12 57.5q71 104 71 233t-71 233q-18 26 -12 57t32 49t57.5 11.5t49.5 -32.5q97 -142 97 -318zM2304 438q0 -244 -134 -443q-23 -34 -64 -34q-23 0 -42 13 q-26 18 -32.5 49t11.5 57q108 164 108 358q0 195 -108 357q-18 26 -11.5 57.5t32.5 48.5q26 18 57 12t49 -33q134 -198 134 -442z"
      ],
      "\uf28a": [
        1536.0,
        "M1500 -13q0 -89 -63 -152.5t-153 -63.5t-153.5 63.5t-63.5 152.5q0 90 63.5 153.5t153.5 63.5t153 -63.5t63 -153.5zM1267 268q-115 -15 -192.5 -102.5t-77.5 -205.5q0 -74 33 -138q-146 -78 -379 -78q-109 0 -201 21t-153.5 54.5t-110.5 76.5t-76 85t-44.5 83 t-23.5 66.5t-6 39.5q0 19 4.5 42.5t18.5 56t36.5 58t64 43.5t94.5 18t94 -17.5t63 -41t35.5 -53t17.5 -49t4 -33.5q0 -34 -23 -81q28 -27 82 -42t93 -17l40 -1q115 0 190 51t75 133q0 26 -9 48.5t-31.5 44.5t-49.5 41t-74 44t-93.5 47.5t-119.5 56.5q-28 13 -43 20 q-116 55 -187 100t-122.5 102t-72 125.5t-20.5 162.5q0 78 20.5 150t66 137.5t112.5 114t166.5 77t221.5 28.5q120 0 220 -26t164.5 -67t109.5 -94t64 -105.5t19 -103.5q0 -46 -15 -82.5t-36.5 -58t-48.5 -36t-49 -19.5t-39 -5h-8h-32t-39 5t-44 14t-41 28t-37 46t-24 70.5 t-10 97.5q-15 16 -59 25.5t-81 10.5l-37 1q-68 0 -117.5 -31t-70.5 -70t-21 -76q0 -24 5 -43t24 -46t53 -51t97 -53.5t150 -58.5q76 -25 138.5 -53.5t109 -55.5t83 -59t60.5 -59.5t41 -62.5t26.5 -62t14.5 -63.5t6 -62t1 -62.5z"
      ],
      "\uf28b": [
        1536.0,
        "M704 352v576q0 14 -9 23t-23 9h-256q-14 0 -23 -9t-9 -23v-576q0 -14 9 -23t23 -9h256q14 0 23 9t9 23zM1152 352v576q0 14 -9 23t-23 9h-256q-14 0 -23 -9t-9 -23v-576q0 -14 9 -23t23 -9h256q14 0 23 9t9 23zM1536 640q0 -209 -103 -385.5t-279.5 -279.5t-385.5 -103 t-385.5 103t-279.5 279.5t-103 385.5t103 385.5t279.5 279.5t385.5 103t385.5 -103t279.5 -279.5t103 -385.5z"
      ],
      "\uf28c": [
        1536.0,
        "M768 1408q209 0 385.5 -103t279.5 -279.5t103 -385.5t-103 -385.5t-279.5 -279.5t-385.5 -103t-385.5 103t-279.5 279.5t-103 385.5t103 385.5t279.5 279.5t385.5 103zM768 96q148 0 273 73t198 198t73 273t-73 273t-198 198t-273 73t-273 -73t-198 -198t-73 -273 t73 -273t198 -198t273 -73zM864 320q-14 0 -23 9t-9 23v576q0 14 9 23t23 9h192q14 0 23 -9t9 -23v-576q0 -14 -9 -23t-23 -9h-192zM480 320q-14 0 -23 9t-9 23v576q0 14 9 23t23 9h192q14 0 23 -9t9 -23v-576q0 -14 -9 -23t-23 -9h-192z"
      ],
      "\uf28d": [
        1536.0,
        "M1088 352v576q0 14 -9 23t-23 9h-576q-14 0 -23 -9t-9 -23v-576q0 -14 9 -23t23 -9h576q14 0 23 9t9 23zM1536 640q0 -209 -103 -385.5t-279.5 -279.5t-385.5 -103t-385.5 103t-279.5 279.5t-103 385.5t103 385.5t279.5 279.5t385.5 103t385.5 -103t279.5 -279.5 t103 -385.5z"
      ],
      "\uf28e": [
        1536.0,
        "M768 1408q209 0 385.5 -103t279.5 -279.5t103 -385.5t-103 -385.5t-279.5 -279.5t-385.5 -103t-385.5 103t-279.5 279.5t-103 385.5t103 385.5t279.5 279.5t385.5 103zM768 96q148 0 273 73t198 198t73 273t-73 273t-198 198t-273 73t-273 -73t-198 -198t-73 -273 t73 -273t198 -198t273 -73zM480 320q-14 0 -23 9t-9 23v576q0 14 9 23t23 9h576q14 0 23 -9t9 -23v-576q0 -14 -9 -23t-23 -9h-576z"
      ],
      "\uf290": [
        1792,
        "M1757 128l35 -313q3 -28 -16 -50q-19 -21 -48 -21h-1664q-29 0 -48 21q-19 22 -16 50l35 313h1722zM1664 967l86 -775h-1708l86 775q3 24 21 40.5t43 16.5h256v-128q0 -53 37.5 -90.5t90.5 -37.5t90.5 37.5t37.5 90.5v128h384v-128q0 -53 37.5 -90.5t90.5 -37.5 t90.5 37.5t37.5 90.5v128h256q25 0 43 -16.5t21 -40.5zM1280 1152v-256q0 -26 -19 -45t-45 -19t-45 19t-19 45v256q0 106 -75 181t-181 75t-181 -75t-75 -181v-256q0 -26 -19 -45t-45 -19t-45 19t-19 45v256q0 159 112.5 271.5t271.5 112.5t271.5 -112.5t112.5 -271.5z"
      ],
      "\uf291": [
        2048,
        "M1920 768q53 0 90.5 -37.5t37.5 -90.5t-37.5 -90.5t-90.5 -37.5h-15l-115 -662q-8 -46 -44 -76t-82 -30h-1280q-46 0 -82 30t-44 76l-115 662h-15q-53 0 -90.5 37.5t-37.5 90.5t37.5 90.5t90.5 37.5h1792zM485 -32q26 2 43.5 22.5t15.5 46.5l-32 416q-2 26 -22.5 43.5 t-46.5 15.5t-43.5 -22.5t-15.5 -46.5l32 -416q2 -25 20.5 -42t43.5 -17h5zM896 32v416q0 26 -19 45t-45 19t-45 -19t-19 -45v-416q0 -26 19 -45t45 -19t45 19t19 45zM1280 32v416q0 26 -19 45t-45 19t-45 -19t-19 -45v-416q0 -26 19 -45t45 -19t45 19t19 45zM1632 27l32 416 q2 26 -15.5 46.5t-43.5 22.5t-46.5 -15.5t-22.5 -43.5l-32 -416q-2 -26 15.5 -46.5t43.5 -22.5h5q25 0 43.5 17t20.5 42zM476 1244l-93 -412h-132l101 441q19 88 89 143.5t160 55.5h167q0 26 19 45t45 19h384q26 0 45 -19t19 -45h167q90 0 160 -55.5t89 -143.5l101 -441 h-132l-93 412q-11 44 -45.5 72t-79.5 28h-167q0 -26 -19 -45t-45 -19h-384q-26 0 -45 19t-19 45h-167q-45 0 -79.5 -28t-45.5 -72z"
      ],
      "\uf292": [
        1792,
        "M991 512l64 256h-254l-64 -256h254zM1759 1016l-56 -224q-7 -24 -31 -24h-327l-64 -256h311q15 0 25 -12q10 -14 6 -28l-56 -224q-5 -24 -31 -24h-327l-81 -328q-7 -24 -31 -24h-224q-16 0 -26 12q-9 12 -6 28l78 312h-254l-81 -328q-7 -24 -31 -24h-225q-15 0 -25 12 q-9 12 -6 28l78 312h-311q-15 0 -25 12q-9 12 -6 28l56 224q7 24 31 24h327l64 256h-311q-15 0 -25 12q-10 14 -6 28l56 224q5 24 31 24h327l81 328q7 24 32 24h224q15 0 25 -12q9 -12 6 -28l-78 -312h254l81 328q7 24 32 24h224q15 0 25 -12q9 -12 6 -28l-78 -312h311 q15 0 25 -12q9 -12 6 -28z"
      ],
      "\uf293": [
        1536.0,
        "M841 483l148 -148l-149 -149zM840 1094l149 -149l-148 -148zM710 -130l464 464l-306 306l306 306l-464 464v-611l-255 255l-93 -93l320 -321l-320 -321l93 -93l255 255v-611zM1429 640q0 -209 -32 -365.5t-87.5 -257t-140.5 -162.5t-181.5 -86.5t-219.5 -24.5 t-219.5 24.5t-181.5 86.5t-140.5 162.5t-87.5 257t-32 365.5t32 365.5t87.5 257t140.5 162.5t181.5 86.5t219.5 24.5t219.5 -24.5t181.5 -86.5t140.5 -162.5t87.5 -257t32 -365.5z"
      ],
      "\uf294": [
        1024,
        "M596 113l173 172l-173 172v-344zM596 823l173 172l-173 172v-344zM628 640l356 -356l-539 -540v711l-297 -296l-108 108l372 373l-372 373l108 108l297 -296v711l539 -540z"
      ],
      "\uf295": [
        1536.0,
        "M1280 256q0 52 -38 90t-90 38t-90 -38t-38 -90t38 -90t90 -38t90 38t38 90zM512 1024q0 52 -38 90t-90 38t-90 -38t-38 -90t38 -90t90 -38t90 38t38 90zM1536 256q0 -159 -112.5 -271.5t-271.5 -112.5t-271.5 112.5t-112.5 271.5t112.5 271.5t271.5 112.5t271.5 -112.5 t112.5 -271.5zM1440 1344q0 -20 -13 -38l-1056 -1408q-19 -26 -51 -26h-160q-26 0 -45 19t-19 45q0 20 13 38l1056 1408q19 26 51 26h160q26 0 45 -19t19 -45zM768 1024q0 -159 -112.5 -271.5t-271.5 -112.5t-271.5 112.5t-112.5 271.5t112.5 271.5t271.5 112.5 t271.5 -112.5t112.5 -271.5z"
      ],
      "\uf296": [
        1792,
        "M104 830l792 -1015l-868 630q-18 13 -25 34.5t0 42.5l101 308v0zM566 830h660l-330 -1015v0zM368 1442l198 -612h-462l198 612q8 23 33 23t33 -23zM1688 830l101 -308q7 -21 0 -42.5t-25 -34.5l-868 -630l792 1015v0zM1688 830h-462l198 612q8 23 33 23t33 -23z"
      ],
      "\uf297": [
        1792,
        "M384 704h160v224h-160v-224zM1221 372v92q-104 -36 -243 -38q-135 -1 -259.5 46.5t-220.5 122.5l1 -96q88 -80 212 -128.5t272 -47.5q129 0 238 49zM640 704h640v224h-640v-224zM1792 736q0 -187 -99 -352q89 -102 89 -229q0 -157 -129.5 -268t-313.5 -111 q-122 0 -225 52.5t-161 140.5q-19 -1 -57 -1t-57 1q-58 -88 -161 -140.5t-225 -52.5q-184 0 -313.5 111t-129.5 268q0 127 89 229q-99 165 -99 352q0 209 120 385.5t326.5 279.5t449.5 103t449.5 -103t326.5 -279.5t120 -385.5z"
      ],
      "\uf298": [
        1536.0,
        "M515 625v-128h-252v128h252zM515 880v-127h-252v127h252zM1273 369v-128h-341v128h341zM1273 625v-128h-672v128h672zM1273 880v-127h-672v127h672zM1408 20v1240q0 8 -6 14t-14 6h-32l-378 -256l-210 171l-210 -171l-378 256h-32q-8 0 -14 -6t-6 -14v-1240q0 -8 6 -14 t14 -6h1240q8 0 14 6t6 14zM553 1130l185 150h-406zM983 1130l221 150h-406zM1536 1260v-1240q0 -62 -43 -105t-105 -43h-1240q-62 0 -105 43t-43 105v1240q0 62 43 105t105 43h1240q62 0 105 -43t43 -105z"
      ],
      "\uf299": [
        1792,
        "M896 720q-104 196 -160 278q-139 202 -347 318q-34 19 -70 36q-89 40 -94 32t34 -38l39 -31q62 -43 112.5 -93.5t94.5 -116.5t70.5 -113t70.5 -131q9 -17 13 -25q44 -84 84 -153t98 -154t115.5 -150t131 -123.5t148.5 -90.5q153 -66 154 -60q1 3 -49 37q-53 36 -81 57 q-77 58 -179 211t-185 310zM549 177q-76 60 -132.5 125t-98 143.5t-71 154.5t-58.5 186t-52 209t-60.5 252t-76.5 289q273 0 497.5 -36t379 -92t271 -144.5t185.5 -172.5t110 -198.5t56 -199.5t12.5 -198.5t-9.5 -173t-20 -143.5t-13 -107l323 -327h-104l-281 285 q-22 -2 -91.5 -14t-121.5 -19t-138 -6t-160.5 17t-167.5 59t-179 111z"
      ],
      "\uf29a": [
        1792,
        "M1374 879q-6 26 -28.5 39.5t-48.5 7.5q-261 -62 -401 -62t-401 62q-26 6 -48.5 -7.5t-28.5 -39.5t7.5 -48.5t39.5 -28.5q194 -46 303 -58q-2 -158 -15.5 -269t-26.5 -155.5t-41 -115.5l-9 -21q-10 -25 1 -49t36 -34q9 -4 23 -4q44 0 60 41l8 20q54 139 71 259h42 q17 -120 71 -259l8 -20q16 -41 60 -41q14 0 23 4q25 10 36 34t1 49l-9 21q-28 71 -41 115.5t-26.5 155.5t-15.5 269q109 12 303 58q26 6 39.5 28.5t7.5 48.5zM1024 1024q0 53 -37.5 90.5t-90.5 37.5t-90.5 -37.5t-37.5 -90.5t37.5 -90.5t90.5 -37.5t90.5 37.5t37.5 90.5z M1600 640q0 -143 -55.5 -273.5t-150 -225t-225 -150t-273.5 -55.5t-273.5 55.5t-225 150t-150 225t-55.5 273.5t55.5 273.5t150 225t225 150t273.5 55.5t273.5 -55.5t225 -150t150 -225t55.5 -273.5zM896 1408q-156 0 -298 -61t-245 -164t-164 -245t-61 -298t61 -298 t164 -245t245 -164t298 -61t298 61t245 164t164 245t61 298t-61 298t-164 245t-245 164t-298 61zM1792 640q0 -182 -71 -348t-191 -286t-286 -191t-348 -71t-348 71t-286 191t-191 286t-71 348t71 348t191 286t286 191t348 71t348 -71t286 -191t191 -286t71 -348z"
      ],
      "\uf29b": [
        1536.0,
        "M1438 723q34 -35 29 -82l-44 -551q-4 -42 -34.5 -70t-71.5 -28q-6 0 -9 1q-44 3 -72.5 36.5t-25.5 77.5l35 429l-143 -8q55 -113 55 -240q0 -216 -148 -372l-137 137q91 101 91 235q0 145 -102.5 248t-247.5 103q-134 0 -236 -92l-137 138q120 114 284 141l264 300 l-149 87l-181 -161q-33 -30 -77 -27.5t-73 35.5t-26.5 77t34.5 73l239 213q26 23 60 26.5t64 -14.5l488 -283q36 -21 48 -68q17 -67 -26 -117l-205 -232l371 20q49 3 83 -32zM1240 1180q-74 0 -126 52t-52 126t52 126t126 52t126.5 -52t52.5 -126t-52.5 -126t-126.5 -52z M613 -62q106 0 196 61l139 -139q-146 -116 -335 -116q-148 0 -273.5 73t-198.5 198t-73 273q0 188 116 336l139 -139q-60 -88 -60 -197q0 -145 102.5 -247.5t247.5 -102.5z"
      ],
      "\uf29c": [
        1536.0,
        "M880 336v-160q0 -14 -9 -23t-23 -9h-160q-14 0 -23 9t-9 23v160q0 14 9 23t23 9h160q14 0 23 -9t9 -23zM1136 832q0 -50 -15 -90t-45.5 -69t-52 -44t-59.5 -36q-32 -18 -46.5 -28t-26 -24t-11.5 -29v-32q0 -14 -9 -23t-23 -9h-160q-14 0 -23 9t-9 23v68q0 35 10.5 64.5 t24 47.5t39 35.5t41 25.5t44.5 21q53 25 75 43t22 49q0 42 -43.5 71.5t-95.5 29.5q-56 0 -95 -27q-29 -20 -80 -83q-9 -12 -25 -12q-11 0 -19 6l-108 82q-10 7 -12 20t5 23q122 192 349 192q129 0 238.5 -89.5t109.5 -214.5zM768 1280q-130 0 -248.5 -51t-204 -136.5 t-136.5 -204t-51 -248.5t51 -248.5t136.5 -204t204 -136.5t248.5 -51t248.5 51t204 136.5t136.5 204t51 248.5t-51 248.5t-136.5 204t-204 136.5t-248.5 51zM1536 640q0 -209 -103 -385.5t-279.5 -279.5t-385.5 -103t-385.5 103t-279.5 279.5t-103 385.5t103 385.5 t279.5 279.5t385.5 103t385.5 -103t279.5 -279.5t103 -385.5z"
      ],
      "\uf29d": [
        1408,
        "M366 1225q-64 0 -110 45.5t-46 110.5q0 64 46 109.5t110 45.5t109.5 -45.5t45.5 -109.5q0 -65 -45.5 -110.5t-109.5 -45.5zM917 583q0 -50 -30 -67.5t-63.5 -6.5t-47.5 34l-367 438q-7 12 -14 15.5t-11 1.5l-3 -3q-7 -8 4 -21l122 -139l1 -354l-161 -457 q-67 -192 -92 -234q-15 -26 -28 -32q-50 -26 -103 -1q-29 13 -41.5 43t-9.5 57q2 17 197 618l5 416l-85 -164l35 -222q4 -24 -1 -42t-14 -27.5t-19 -16t-17 -7.5l-7 -2q-19 -3 -34.5 3t-24 16t-14 22t-7.5 19.5t-2 9.5l-46 299l211 381q23 34 113 34q75 0 107 -40l424 -521 q7 -5 14 -17l3 -3l-1 -1q7 -13 7 -29zM514 433q43 -113 88.5 -225t69.5 -168l24 -55q36 -93 42 -125q11 -70 -36 -97q-35 -22 -66 -16t-51 22t-29 35h-1q-6 16 -8 25l-124 351zM1338 -159q31 -49 31 -57q0 -5 -3 -7q-9 -5 -14.5 0.5t-15.5 26t-16 30.5q-114 172 -423 661 q3 -1 7 1t7 4l3 2q11 9 11 17z"
      ],
      "\uf29e": [
        2304,
        "M504 542h171l-1 265zM1530 641q0 87 -50.5 140t-146.5 53h-54v-388h52q91 0 145 57t54 138zM956 1018l1 -756q0 -14 -9.5 -24t-23.5 -10h-216q-14 0 -23.5 10t-9.5 24v62h-291l-55 -81q-10 -15 -28 -15h-267q-21 0 -30.5 18t3.5 35l556 757q9 14 27 14h332q14 0 24 -10 t10 -24zM1783 641q0 -193 -125.5 -303t-324.5 -110h-270q-14 0 -24 10t-10 24v756q0 14 10 24t24 10h268q200 0 326 -109t126 -302zM1939 640q0 -11 -0.5 -29t-8 -71.5t-21.5 -102t-44.5 -108t-73.5 -102.5h-51q38 45 66.5 104.5t41.5 112t21 98t9 72.5l1 27q0 8 -0.5 22.5 t-7.5 60t-20 91.5t-41 111.5t-66 124.5h43q41 -47 72 -107t45.5 -111.5t23 -96t10.5 -70.5zM2123 640q0 -11 -0.5 -29t-8 -71.5t-21.5 -102t-45 -108t-74 -102.5h-51q38 45 66.5 104.5t41.5 112t21 98t9 72.5l1 27q0 8 -0.5 22.5t-7.5 60t-19.5 91.5t-40.5 111.5t-66 124.5 h43q41 -47 72 -107t45.5 -111.5t23 -96t10.5 -70.5zM2304 640q0 -11 -0.5 -29t-8 -71.5t-21.5 -102t-44.5 -108t-73.5 -102.5h-51q38 45 66 104.5t41 112t21 98t9 72.5l1 27q0 8 -0.5 22.5t-7.5 60t-19.5 91.5t-40.5 111.5t-66 124.5h43q41 -47 72 -107t45.5 -111.5t23 -96 t9.5 -70.5z"
      ],
      "\uf2a0": [
        1408,
        "M617 -153q0 11 -13 58t-31 107t-20 69q-1 4 -5 26.5t-8.5 36t-13.5 21.5q-15 14 -51 14q-23 0 -70 -5.5t-71 -5.5q-34 0 -47 11q-6 5 -11 15.5t-7.5 20t-6.5 24t-5 18.5q-37 128 -37 255t37 255q1 4 5 18.5t6.5 24t7.5 20t11 15.5q13 11 47 11q24 0 71 -5.5t70 -5.5 q36 0 51 14q9 8 13.5 21.5t8.5 36t5 26.5q2 9 20 69t31 107t13 58q0 22 -43.5 52.5t-75.5 42.5q-20 8 -45 8q-34 0 -98 -18q-57 -17 -96.5 -40.5t-71 -66t-46 -70t-45.5 -94.5q-6 -12 -9 -19q-49 -107 -68 -216t-19 -244t19 -244t68 -216q56 -122 83 -161q63 -91 179 -127 l6 -2q64 -18 98 -18q25 0 45 8q32 12 75.5 42.5t43.5 52.5zM776 760q-26 0 -45 19t-19 45.5t19 45.5q37 37 37 90q0 52 -37 91q-19 19 -19 45t19 45t45 19t45 -19q75 -75 75 -181t-75 -181q-21 -19 -45 -19zM957 579q-27 0 -45 19q-19 19 -19 45t19 45q112 114 112 272 t-112 272q-19 19 -19 45t19 45t45 19t45 -19q150 -150 150 -362t-150 -362q-18 -19 -45 -19zM1138 398q-27 0 -45 19q-19 19 -19 45t19 45q90 91 138.5 208t48.5 245t-48.5 245t-138.5 208q-19 19 -19 45t19 45t45 19t45 -19q109 -109 167 -249t58 -294t-58 -294t-167 -249 q-18 -19 -45 -19z"
      ],
      "\uf2a1": [
        2176,
        "M192 352q-66 0 -113 -47t-47 -113t47 -113t113 -47t113 47t47 113t-47 113t-113 47zM704 352q-66 0 -113 -47t-47 -113t47 -113t113 -47t113 47t47 113t-47 113t-113 47zM704 864q-66 0 -113 -47t-47 -113t47 -113t113 -47t113 47t47 113t-47 113t-113 47zM1472 352 q-66 0 -113 -47t-47 -113t47 -113t113 -47t113 47t47 113t-47 113t-113 47zM1984 352q-66 0 -113 -47t-47 -113t47 -113t113 -47t113 47t47 113t-47 113t-113 47zM1472 864q-66 0 -113 -47t-47 -113t47 -113t113 -47t113 47t47 113t-47 113t-113 47zM1984 864 q-66 0 -113 -47t-47 -113t47 -113t113 -47t113 47t47 113t-47 113t-113 47zM1984 1376q-66 0 -113 -47t-47 -113t47 -113t113 -47t113 47t47 113t-47 113t-113 47zM384 192q0 -80 -56 -136t-136 -56t-136 56t-56 136t56 136t136 56t136 -56t56 -136zM896 192q0 -80 -56 -136 t-136 -56t-136 56t-56 136t56 136t136 56t136 -56t56 -136zM384 704q0 -80 -56 -136t-136 -56t-136 56t-56 136t56 136t136 56t136 -56t56 -136zM896 704q0 -80 -56 -136t-136 -56t-136 56t-56 136t56 136t136 56t136 -56t56 -136zM384 1216q0 -80 -56 -136t-136 -56 t-136 56t-56 136t56 136t136 56t136 -56t56 -136zM1664 192q0 -80 -56 -136t-136 -56t-136 56t-56 136t56 136t136 56t136 -56t56 -136zM896 1216q0 -80 -56 -136t-136 -56t-136 56t-56 136t56 136t136 56t136 -56t56 -136zM2176 192q0 -80 -56 -136t-136 -56t-136 56 t-56 136t56 136t136 56t136 -56t56 -136zM1664 704q0 -80 -56 -136t-136 -56t-136 56t-56 136t56 136t136 56t136 -56t56 -136zM2176 704q0 -80 -56 -136t-136 -56t-136 56t-56 136t56 136t136 56t136 -56t56 -136zM1664 1216q0 -80 -56 -136t-136 -56t-136 56t-56 136 t56 136t136 56t136 -56t56 -136zM2176 1216q0 -80 -56 -136t-136 -56t-136 56t-56 136t56 136t136 56t136 -56t56 -136z"
      ],
      "\uf2a2": [
        1792,
        "M128 -192q0 -26 -19 -45t-45 -19t-45 19t-19 45t19 45t45 19t45 -19t19 -45zM320 0q0 -26 -19 -45t-45 -19t-45 19t-19 45t19 45t45 19t45 -19t19 -45zM365 365l256 -256l-90 -90l-256 256zM704 384q0 -26 -19 -45t-45 -19t-45 19t-19 45t19 45t45 19t45 -19t19 -45z M1411 704q0 -59 -11.5 -108.5t-37.5 -93.5t-44 -67.5t-53 -64.5q-31 -35 -45.5 -54t-33.5 -50t-26.5 -64t-7.5 -74q0 -159 -112.5 -271.5t-271.5 -112.5q-26 0 -45 19t-19 45t19 45t45 19q106 0 181 75t75 181q0 57 11.5 105.5t37 91t43.5 66.5t52 63q40 46 59.5 72 t37.5 74.5t18 103.5q0 185 -131.5 316.5t-316.5 131.5t-316.5 -131.5t-131.5 -316.5q0 -26 -19 -45t-45 -19t-45 19t-19 45q0 117 45.5 223.5t123 184t184 123t223.5 45.5t223.5 -45.5t184 -123t123 -184t45.5 -223.5zM896 576q0 -26 -19 -45t-45 -19t-45 19t-19 45t19 45 t45 19t45 -19t19 -45zM1184 704q0 -26 -19 -45t-45 -19t-45 19t-19 45q0 93 -65.5 158.5t-158.5 65.5q-92 0 -158 -65.5t-66 -158.5q0 -26 -19 -45t-45 -19t-45 19t-19 45q0 146 103 249t249 103t249 -103t103 -249zM1578 993q10 -25 -1 -49t-36 -34q-9 -4 -23 -4 q-19 0 -35.5 11t-23.5 30q-68 178 -224 295q-21 16 -25 42t12 47q17 21 43 25t47 -12q183 -137 266 -351zM1788 1074q9 -25 -1.5 -49t-35.5 -34q-11 -4 -23 -4q-44 0 -60 41q-92 238 -297 393q-22 16 -25.5 42t12.5 47q16 22 42 25.5t47 -12.5q235 -175 341 -449z"
      ],
      "\uf2a3": [
        2304,
        "M1032 576q-59 2 -84 55q-17 34 -48 53.5t-68 19.5q-53 0 -90.5 -37.5t-37.5 -90.5q0 -56 36 -89l10 -8q34 -31 82 -31q37 0 68 19.5t48 53.5q25 53 84 55zM1600 704q0 56 -36 89l-10 8q-34 31 -82 31q-37 0 -68 -19.5t-48 -53.5q-25 -53 -84 -55q59 -2 84 -55 q17 -34 48 -53.5t68 -19.5q53 0 90.5 37.5t37.5 90.5zM1174 925q-17 -35 -55 -48t-73 4q-62 31 -134 31q-51 0 -99 -17q3 0 9.5 0.5t9.5 0.5q92 0 170.5 -50t118.5 -133q17 -36 3.5 -73.5t-49.5 -54.5q-18 -9 -39 -9q21 0 39 -9q36 -17 49.5 -54.5t-3.5 -73.5 q-40 -83 -118.5 -133t-170.5 -50h-6q-16 2 -44 4l-290 27l-239 -120q-14 -7 -29 -7q-40 0 -57 35l-160 320q-11 23 -4 47.5t29 37.5l209 119l148 267q17 155 91.5 291.5t195.5 236.5q31 25 70.5 21.5t64.5 -34.5t21.5 -70t-34.5 -65q-70 -59 -117 -128q123 84 267 101 q40 5 71.5 -19t35.5 -64q5 -40 -19 -71.5t-64 -35.5q-84 -10 -159 -55q46 10 99 10q115 0 218 -50q36 -18 49 -55.5t-5 -73.5zM2137 1085l160 -320q11 -23 4 -47.5t-29 -37.5l-209 -119l-148 -267q-17 -155 -91.5 -291.5t-195.5 -236.5q-26 -22 -61 -22q-45 0 -74 35 q-25 31 -21.5 70t34.5 65q70 59 117 128q-123 -84 -267 -101q-4 -1 -12 -1q-36 0 -63.5 24t-31.5 60q-5 40 19 71.5t64 35.5q84 10 159 55q-46 -10 -99 -10q-115 0 -218 50q-36 18 -49 55.5t5 73.5q17 35 55 48t73 -4q62 -31 134 -31q51 0 99 17q-3 0 -9.5 -0.5t-9.5 -0.5 q-92 0 -170.5 50t-118.5 133q-17 36 -3.5 73.5t49.5 54.5q18 9 39 9q-21 0 -39 9q-36 17 -49.5 54.5t3.5 73.5q40 83 118.5 133t170.5 50h6h1q14 -2 42 -4l291 -27l239 120q14 7 29 7q40 0 57 -35z"
      ],
      "\uf2a4": [
        1792,
        "M1056 704q0 -26 19 -45t45 -19t45 19t19 45q0 146 -103 249t-249 103t-249 -103t-103 -249q0 -26 19 -45t45 -19t45 19t19 45q0 93 66 158.5t158 65.5t158 -65.5t66 -158.5zM835 1280q-117 0 -223.5 -45.5t-184 -123t-123 -184t-45.5 -223.5q0 -26 19 -45t45 -19t45 19 t19 45q0 185 131.5 316.5t316.5 131.5t316.5 -131.5t131.5 -316.5q0 -55 -18 -103.5t-37.5 -74.5t-59.5 -72q-34 -39 -52 -63t-43.5 -66.5t-37 -91t-11.5 -105.5q0 -106 -75 -181t-181 -75q-26 0 -45 -19t-19 -45t19 -45t45 -19q159 0 271.5 112.5t112.5 271.5q0 41 7.5 74 t26.5 64t33.5 50t45.5 54q35 41 53 64.5t44 67.5t37.5 93.5t11.5 108.5q0 117 -45.5 223.5t-123 184t-184 123t-223.5 45.5zM591 561l226 -226l-579 -579q-12 -12 -29 -12t-29 12l-168 168q-12 12 -12 29t12 29zM1612 1524l168 -168q12 -12 12 -29t-12 -30l-233 -233 l-26 -25l-71 -71q-66 153 -195 258l91 91l207 207q13 12 30 12t29 -12z"
      ],
      "\uf2a5": [
        1536.0,
        "M866 1021q0 -27 -13 -94q-11 -50 -31.5 -150t-30.5 -150q-2 -11 -4.5 -12.5t-13.5 -2.5q-20 -2 -31 -2q-58 0 -84 49.5t-26 113.5q0 88 35 174t103 124q28 14 51 14q28 0 36.5 -16.5t8.5 -47.5zM1352 597q0 14 -39 75.5t-52 66.5q-21 8 -34 8q-91 0 -226 -77l-2 2 q3 22 27.5 135t24.5 178q0 233 -242 233q-24 0 -68 -6q-94 -17 -168.5 -89.5t-111.5 -166.5t-37 -189q0 -146 80.5 -225t227.5 -79q25 0 25 -3t-1 -5q-4 -34 -26 -117q-14 -52 -51.5 -101t-82.5 -49q-42 0 -42 47q0 24 10.5 47.5t25 39.5t29.5 28.5t26 20t11 8.5q0 3 -7 10 q-24 22 -58.5 36.5t-65.5 14.5q-35 0 -63.5 -34t-41 -75t-12.5 -75q0 -88 51.5 -142t138.5 -54q82 0 155 53t117.5 126t65.5 153q6 22 15.5 66.5t14.5 66.5q3 12 14 18q118 60 227 60q48 0 127 -18q1 -1 4 -1q5 0 9.5 4.5t4.5 8.5zM1536 1120v-960q0 -119 -84.5 -203.5 t-203.5 -84.5h-960q-119 0 -203.5 84.5t-84.5 203.5v960q0 119 84.5 203.5t203.5 84.5h960q119 0 203.5 -84.5t84.5 -203.5z"
      ],
      "\uf2a6": [
        1535,
        "M744 1231q0 24 -2 38.5t-8.5 30t-21 23t-37.5 7.5q-39 0 -78 -23q-105 -58 -159 -190.5t-54 -269.5q0 -44 8.5 -85.5t26.5 -80.5t52.5 -62.5t81.5 -23.5q4 0 18 -0.5t20 0t16 3t15 8.5t7 16q16 77 48 231.5t48 231.5q19 91 19 146zM1498 575q0 -7 -7.5 -13.5t-15.5 -6.5 l-6 1q-22 3 -62 11t-72 12.5t-63 4.5q-167 0 -351 -93q-15 -8 -21 -27q-10 -36 -24.5 -105.5t-22.5 -100.5q-23 -91 -70 -179.5t-112.5 -164.5t-154.5 -123t-185 -47q-135 0 -214.5 83.5t-79.5 219.5q0 53 19.5 117t63 116.5t97.5 52.5q38 0 120 -33.5t83 -61.5 q0 -1 -16.5 -12.5t-39.5 -31t-46 -44.5t-39 -61t-16 -74q0 -33 16.5 -53t48.5 -20q45 0 85 31.5t66.5 78t48 105.5t32.5 107t16 90v9q0 2 -3.5 3.5t-8.5 1.5h-10t-10 -0.5t-6 -0.5q-227 0 -352 122.5t-125 348.5q0 108 34.5 221t96 210t156 167.5t204.5 89.5q52 9 106 9 q374 0 374 -360q0 -98 -38 -273t-43 -211l3 -3q101 57 182.5 88t167.5 31q22 0 53 -13q19 -7 80 -102.5t61 -116.5z"
      ],
      "\uf2a7": [
        1664,
        "M831 863q32 0 59 -18l222 -148q61 -40 110 -97l146 -170q40 -46 29 -106l-72 -413q-6 -32 -29.5 -53.5t-55.5 -25.5l-527 -56l-352 -32h-9q-39 0 -67.5 28t-28.5 68q0 37 27 64t65 32l260 32h-448q-41 0 -69.5 30t-26.5 71q2 39 32 65t69 26l442 1l-521 64q-41 5 -66 37 t-19 73q6 35 34.5 57.5t65.5 22.5h10l481 -60l-351 94q-38 10 -62 41.5t-18 68.5q6 36 33 58.5t62 22.5q6 0 20 -2l448 -96l217 -37q1 0 3 -0.5t3 -0.5q23 0 30.5 23t-12.5 36l-186 125q-35 23 -42 63.5t18 73.5q27 38 76 38zM761 661l186 -125l-218 37l-5 2l-36 38 l-238 262q-1 1 -2.5 3.5t-2.5 3.5q-24 31 -18.5 70t37.5 64q31 23 68 17.5t64 -33.5l142 -147q-2 -1 -5 -3.5t-4 -4.5q-32 -45 -23 -99t55 -85zM1648 1115l15 -266q4 -73 -11 -147l-48 -219q-12 -59 -67 -87l-106 -54q2 62 -39 109l-146 170q-53 61 -117 103l-222 148 q-34 23 -76 23q-51 0 -88 -37l-235 312q-25 33 -18 73.5t41 63.5q33 22 71.5 14t62.5 -40l266 -352l-262 455q-21 35 -10.5 75t47.5 59q35 18 72.5 6t57.5 -46l241 -420l-136 337q-15 35 -4.5 74t44.5 56q37 19 76 6t56 -51l193 -415l101 -196q8 -15 23 -17.5t27 7.5t11 26 l-12 224q-2 41 26 71t69 31q39 0 67 -28.5t30 -67.5z"
      ],
      "\uf2a8": [
        1792,
        "M335 180q-2 0 -6 2q-86 57 -168.5 145t-139.5 180q-21 30 -21 69q0 9 2 19t4 18t7 18t8.5 16t10.5 17t10 15t12 15.5t11 14.5q184 251 452 365q-110 198 -110 211q0 19 17 29q116 64 128 64q18 0 28 -16l124 -229q92 19 192 19q266 0 497.5 -137.5t378.5 -369.5 q20 -31 20 -69t-20 -69q-91 -142 -218.5 -253.5t-278.5 -175.5q110 -198 110 -211q0 -20 -17 -29q-116 -64 -127 -64q-19 0 -29 16l-124 229l-64 119l-444 820l7 7q-58 -24 -99 -47q3 -5 127 -234t243 -449t119 -223q0 -7 -9 -9q-13 -3 -72 -3q-57 0 -60 7l-456 841 q-39 -28 -82 -68q24 -43 214 -393.5t190 -354.5q0 -10 -11 -10q-14 0 -82.5 22t-72.5 28l-106 197l-224 413q-44 -53 -78 -106q2 -3 18 -25t23 -34l176 -327q0 -10 -10 -10zM1165 282l49 -91q273 111 450 385q-180 277 -459 389q67 -64 103 -148.5t36 -176.5 q0 -106 -47 -200.5t-132 -157.5zM848 896q0 -20 14 -34t34 -14q86 0 147 -61t61 -147q0 -20 14 -34t34 -14t34 14t14 34q0 126 -89 215t-215 89q-20 0 -34 -14t-14 -34zM1214 961l-9 4l7 -7z"
      ],
      "\uf2a9": [
        1280,
        "M1050 430q0 -215 -147 -374q-148 -161 -378 -161q-232 0 -378 161q-147 159 -147 374q0 147 68 270.5t189 196.5t268 73q96 0 182 -31q-32 -62 -39 -126q-66 28 -143 28q-167 0 -280.5 -123t-113.5 -291q0 -170 112.5 -288.5t281.5 -118.5t281 118.5t112 288.5 q0 89 -32 166q66 13 123 49q41 -98 41 -212zM846 619q0 -192 -79.5 -345t-238.5 -253l-14 -1q-29 0 -62 5q83 32 146.5 102.5t99.5 154.5t58.5 189t30 192.5t7.5 178.5q0 69 -3 103q55 -160 55 -326zM791 947v-2q-73 214 -206 440q88 -59 142.5 -186.5t63.5 -251.5z M1035 744q-83 0 -160 75q218 120 290 247q19 37 21 56q-42 -94 -139.5 -166.5t-204.5 -97.5q-35 54 -35 113q0 37 17 79t43 68q46 44 157 74q59 16 106 58.5t74 100.5q74 -105 74 -253q0 -109 -24 -170q-32 -77 -88.5 -130.5t-130.5 -53.5z"
      ],
      "\uf2aa": [
        1536.0,
        "M1050 495q0 78 -28 147q-41 -25 -85 -34q22 -50 22 -114q0 -117 -77 -198.5t-193 -81.5t-193.5 81.5t-77.5 198.5q0 115 78 199.5t193 84.5q53 0 98 -19q4 43 27 87q-60 21 -125 21q-154 0 -257.5 -108.5t-103.5 -263.5t103.5 -261t257.5 -106t257.5 106.5t103.5 260.5z M872 850q2 -24 2 -71q0 -63 -5 -123t-20.5 -132.5t-40.5 -130t-68.5 -106t-100.5 -70.5q21 -3 42 -3h10q219 139 219 411q0 116 -38 225zM872 850q-4 80 -44 171.5t-98 130.5q92 -156 142 -302zM1207 955q0 102 -51 174q-41 -86 -124 -109q-69 -19 -109 -53.5t-40 -99.5 q0 -40 24 -77q74 17 140.5 67t95.5 115q-4 -52 -74.5 -111.5t-138.5 -97.5q52 -52 110 -52q51 0 90 37t60 90q17 42 17 117zM1536 1120v-960q0 -119 -84.5 -203.5t-203.5 -84.5h-960q-119 0 -203.5 84.5t-84.5 203.5v960q0 119 84.5 203.5t203.5 84.5h960q119 0 203.5 -84.5 t84.5 -203.5z"
      ],
      "\uf2ab": [
        1536.0,
        "M1279 388q0 22 -22 27q-67 15 -118 59t-80 108q-7 19 -7 25q0 15 19.5 26t43 17t43 20.5t19.5 36.5q0 19 -18.5 31.5t-38.5 12.5q-12 0 -32 -8t-31 -8q-4 0 -12 2q5 95 5 114q0 79 -17 114q-36 78 -103 121.5t-152 43.5q-199 0 -275 -165q-17 -35 -17 -114q0 -19 5 -114 q-4 -2 -14 -2q-12 0 -32 7.5t-30 7.5q-21 0 -38.5 -12t-17.5 -32q0 -21 19.5 -35.5t43 -20.5t43 -17t19.5 -26q0 -6 -7 -25q-64 -138 -198 -167q-22 -5 -22 -27q0 -46 137 -68q2 -5 6 -26t11.5 -30.5t23.5 -9.5q12 0 37.5 4.5t39.5 4.5q35 0 67 -15t54 -32.5t57.5 -32.5 t76.5 -15q43 0 79 15t57.5 32.5t53.5 32.5t67 15q14 0 39.5 -4t38.5 -4q16 0 23 10t11 30t6 25q137 22 137 68zM1536 640q0 -209 -103 -385.5t-279.5 -279.5t-385.5 -103t-385.5 103t-279.5 279.5t-103 385.5t103 385.5t279.5 279.5t385.5 103t385.5 -103t279.5 -279.5 t103 -385.5z"
      ],
      "\uf2ac": [
        1664,
        "M848 1408q134 1 240.5 -68.5t163.5 -192.5q27 -58 27 -179q0 -47 -9 -191q14 -7 28 -7q18 0 51 13.5t51 13.5q29 0 56 -18t27 -46q0 -32 -31.5 -54t-69 -31.5t-69 -29t-31.5 -47.5q0 -15 12 -43q37 -82 102.5 -150t144.5 -101q28 -12 80 -23q28 -6 28 -35 q0 -70 -219 -103q-7 -11 -11 -39t-14 -46.5t-33 -18.5q-20 0 -62 6.5t-64 6.5q-37 0 -62 -5q-32 -5 -63 -22.5t-58 -38t-58 -40.5t-76 -33.5t-99 -13.5q-52 0 -96.5 13.5t-75 33.5t-57.5 40.5t-58 38t-62 22.5q-26 5 -63 5q-24 0 -65.5 -7.5t-58.5 -7.5q-25 0 -35 18.5 t-14 47.5t-11 40q-219 33 -219 103q0 29 28 35q52 11 80 23q78 32 144.5 101t102.5 150q12 28 12 43q0 28 -31.5 47.5t-69.5 29.5t-69.5 31.5t-31.5 52.5q0 27 26 45.5t55 18.5q15 0 48 -13t53 -13q18 0 32 7q-9 142 -9 190q0 122 27 180q64 137 172 198t264 63z"
      ],
      "\uf2ad": [
        1536.0,
        "M1280 388q0 22 -22 27q-67 14 -118 58t-80 109q-7 14 -7 25q0 15 19.5 26t42.5 17t42.5 20.5t19.5 36.5q0 19 -18.5 31.5t-38.5 12.5q-11 0 -31 -8t-32 -8q-4 0 -12 2q5 63 5 115q0 78 -17 114q-36 78 -102.5 121.5t-152.5 43.5q-198 0 -275 -165q-18 -38 -18 -115 q0 -38 6 -114q-10 -2 -15 -2q-11 0 -31.5 8t-30.5 8q-20 0 -37.5 -12.5t-17.5 -32.5q0 -21 19.5 -35.5t42.5 -20.5t42.5 -17t19.5 -26q0 -11 -7 -25q-64 -138 -198 -167q-22 -5 -22 -27q0 -47 138 -69q2 -5 6 -26t11 -30.5t23 -9.5q13 0 38.5 5t38.5 5q35 0 67.5 -15 t54.5 -32.5t57.5 -32.5t76.5 -15q43 0 79 15t57.5 32.5t54 32.5t67.5 15q13 0 39 -4.5t39 -4.5q15 0 22.5 9.5t11.5 31t5 24.5q138 22 138 69zM1536 1120v-960q0 -119 -84.5 -203.5t-203.5 -84.5h-960q-119 0 -203.5 84.5t-84.5 203.5v960q0 119 84.5 203.5t203.5 84.5h960 q119 0 203.5 -84.5t84.5 -203.5z"
      ],
      "\uf2ae": [
        2304,
        "M2304 1536q-69 -46 -125 -92t-89 -81t-59.5 -71.5t-37.5 -57.5t-22 -44.5t-14 -29.5q-10 -18 -35.5 -136.5t-48.5 -164.5q-15 -29 -50 -60.5t-67.5 -50.5t-72.5 -41t-48 -28q-47 -31 -151 -231q-341 14 -630 -158q-92 -53 -303 -179q47 16 86 31t55 22l15 7 q71 27 163 64.5t133.5 53.5t108 34.5t142.5 31.5q186 31 465 -7q1 0 10 -3q11 -6 14 -17t-3 -22l-194 -345q-15 -29 -47 -22q-128 24 -354 24q-146 0 -402 -44.5t-392 -46.5q-82 -1 -149 13t-107 37t-61 40t-33 34l-1 1v2q0 6 6 6q138 0 371 55q192 366 374.5 524t383.5 158 q5 0 14.5 -0.5t38 -5t55 -12t61.5 -24.5t63 -39.5t54 -59t40 -82.5l102 177q2 4 21 42.5t44.5 86.5t61 109.5t84 133.5t100.5 137q66 82 128 141.5t121.5 96.5t92.5 53.5t88 39.5z"
      ],
      "\uf2b0": [
        1536.0,
        "M1322 640q0 -45 -5 -76l-236 14l224 -78q-19 -73 -58 -141l-214 103l177 -158q-44 -61 -107 -108l-157 178l103 -215q-61 -37 -140 -59l-79 228l14 -240q-38 -6 -76 -6t-76 6l14 238l-78 -226q-74 19 -140 59l103 215l-157 -178q-59 43 -108 108l178 158l-214 -104 q-39 69 -58 141l224 79l-237 -14q-5 42 -5 76q0 35 5 77l238 -14l-225 79q19 73 58 140l214 -104l-177 159q46 61 107 108l158 -178l-103 215q67 39 140 58l77 -224l-13 236q36 6 75 6q38 0 76 -6l-14 -237l78 225q74 -19 140 -59l-103 -214l158 178q61 -47 107 -108 l-177 -159l213 104q37 -62 58 -141l-224 -78l237 14q5 -31 5 -77zM1352 640q0 160 -78.5 295.5t-213 214t-292.5 78.5q-119 0 -227 -46.5t-186.5 -125t-124.5 -187.5t-46 -229q0 -119 46 -228t124.5 -187.5t186.5 -125t227 -46.5q158 0 292.5 78.5t213 214t78.5 294.5z M1425 1023v-766l-657 -383l-657 383v766l657 383zM768 -183l708 412v823l-708 411l-708 -411v-823zM1536 1088v-896l-768 -448l-768 448v896l768 448z"
      ],
      "\uf2b1": [
        1664,
        "M339 1318h691l-26 -72h-665q-110 0 -188.5 -79t-78.5 -189v-771q0 -95 60.5 -169.5t153.5 -93.5q23 -5 98 -5v-72h-45q-140 0 -239.5 100t-99.5 240v771q0 140 99.5 240t239.5 100zM1190 1536h247l-482 -1294q-23 -61 -40.5 -103.5t-45 -98t-54 -93.5t-64.5 -78.5 t-79.5 -65t-95.5 -41t-116 -18.5v195q163 26 220 182q20 52 20 105q0 54 -20 106l-285 733h228l187 -585zM1664 978v-1111h-795q37 55 45 73h678v1038q0 85 -49.5 155t-129.5 99l25 67q101 -34 163.5 -123.5t62.5 -197.5z"
      ],
      "\uf2b2": [
        1792,
        "M852 1227q0 -29 -17 -52.5t-45 -23.5t-45 23.5t-17 52.5t17 52.5t45 23.5t45 -23.5t17 -52.5zM688 -149v114q0 30 -20.5 51.5t-50.5 21.5t-50 -21.5t-20 -51.5v-114q0 -30 20.5 -52t49.5 -22q30 0 50.5 22t20.5 52zM860 -149v114q0 30 -20 51.5t-50 21.5t-50.5 -21.5 t-20.5 -51.5v-114q0 -30 20.5 -52t50.5 -22q29 0 49.5 22t20.5 52zM1034 -149v114q0 30 -20.5 51.5t-50.5 21.5t-50.5 -21.5t-20.5 -51.5v-114q0 -30 20.5 -52t50.5 -22t50.5 22t20.5 52zM1208 -149v114q0 30 -20.5 51.5t-50.5 21.5t-50.5 -21.5t-20.5 -51.5v-114 q0 -30 20.5 -52t50.5 -22t50.5 22t20.5 52zM1476 535q-84 -160 -232 -259.5t-323 -99.5q-123 0 -229.5 51.5t-178.5 137t-113 197.5t-41 232q0 88 21 174q-104 -175 -104 -390q0 -162 65 -312t185 -251q30 57 91 57q56 0 86 -50q32 50 87 50q56 0 86 -50q32 50 87 50t87 -50 q30 50 86 50q28 0 52.5 -15.5t37.5 -40.5q112 94 177 231.5t73 287.5zM1326 564q0 75 -72 75q-17 0 -47 -6q-95 -19 -149 -19q-226 0 -226 243q0 86 30 204q-83 -127 -83 -275q0 -150 89 -260.5t235 -110.5q111 0 210 70q13 48 13 79zM884 1223q0 50 -32 89.5t-81 39.5 t-81 -39.5t-32 -89.5q0 -51 31.5 -90.5t81.5 -39.5t81.5 39.5t31.5 90.5zM1513 884q0 96 -37.5 179t-113 137t-173.5 54q-77 0 -149 -35t-127 -94q-48 -159 -48 -268q0 -104 45.5 -157t147.5 -53q53 0 142 19q36 6 53 6q51 0 77.5 -28t26.5 -80q0 -26 -4 -46 q75 68 117.5 165.5t42.5 200.5zM1792 667q0 -111 -33.5 -249.5t-93.5 -204.5q-58 -64 -195 -142.5t-228 -104.5l-4 -1v-114q0 -43 -29.5 -75t-72.5 -32q-56 0 -86 50q-32 -50 -87 -50t-87 50q-30 -50 -86 -50q-55 0 -87 50q-30 -50 -86 -50q-47 0 -75 33.5t-28 81.5 q-90 -68 -198 -68q-118 0 -211 80q54 1 106 20q-113 31 -182 127q32 -7 71 -7q89 0 164 46q-192 192 -240 306q-24 56 -24 160q0 57 9 125.5t31.5 146.5t55 141t86.5 105t120 42q59 0 81 -52q19 29 42 54q2 3 12 13t13 16q10 15 23 38t25 42t28 39q87 111 211.5 177 t260.5 66q35 0 62 -4q59 64 146 64q83 0 140 -57q5 -5 5 -12q0 -5 -6 -13.5t-12.5 -16t-16 -17l-10.5 -10.5q17 -6 36 -18t19 -24q0 -6 -16 -25q157 -138 197 -378q25 30 60 30q45 0 100 -49q90 -80 90 -279z"
      ],
      "\uf2b3": [
        1536.0,
        "M917 631q0 33 -6 64h-362v-132h217q-12 -76 -74.5 -120.5t-142.5 -44.5q-99 0 -169 71.5t-70 170.5t70 170.5t169 71.5q93 0 153 -59l104 101q-108 100 -257 100q-160 0 -272 -112.5t-112 -271.5t112 -271.5t272 -112.5q165 0 266.5 105t101.5 270zM1262 585h109v110 h-109v110h-110v-110h-110v-110h110v-110h110v110zM1536 640q0 -209 -103 -385.5t-279.5 -279.5t-385.5 -103t-385.5 103t-279.5 279.5t-103 385.5t103 385.5t279.5 279.5t385.5 103t385.5 -103t279.5 -279.5t103 -385.5z"
      ],
      "\uf2b4": [
        1536.0,
        "M1536 1024v-839q0 -48 -49 -62q-174 -52 -338 -52q-73 0 -215.5 29.5t-227.5 29.5q-164 0 -370 -48v-338h-160v1368q-63 25 -101 81t-38 124q0 91 64 155t155 64t155 -64t64 -155q0 -68 -38 -124t-101 -81v-68q190 44 343 44q99 0 198 -15q14 -2 111.5 -22.5t149.5 -20.5 q77 0 165 18q11 2 80 21t89 19q26 0 45 -19t19 -45z"
      ],
      "\uf2b5": [
        2304,
        "M192 384q40 0 56 32t0 64t-56 32t-56 -32t0 -64t56 -32zM1665 442q-10 13 -38.5 50t-41.5 54t-38 49t-42.5 53t-40.5 47t-45 49l-125 -140q-83 -94 -208.5 -92t-205.5 98q-57 69 -56.5 158t58.5 157l177 206q-22 11 -51 16.5t-47.5 6t-56.5 -0.5t-49 -1q-92 0 -158 -66 l-158 -158h-155v-544q5 0 21 0.5t22 0t19.5 -2t20.5 -4.5t17.5 -8.5t18.5 -13.5l297 -292q115 -111 227 -111q78 0 125 47q57 -20 112.5 8t72.5 85q74 -6 127 44q20 18 36 45.5t14 50.5q10 -10 43 -10q43 0 77 21t49.5 53t12 71.5t-30.5 73.5zM1824 384h96v512h-93l-157 180 q-66 76 -169 76h-167q-89 0 -146 -67l-209 -243q-28 -33 -28 -75t27 -75q43 -51 110 -52t111 49l193 218q25 23 53.5 21.5t47 -27t8.5 -56.5q16 -19 56 -63t60 -68q29 -36 82.5 -105.5t64.5 -84.5q52 -66 60 -140zM2112 384q40 0 56 32t0 64t-56 32t-56 -32t0 -64t56 -32z M2304 960v-640q0 -26 -19 -45t-45 -19h-434q-27 -65 -82 -106.5t-125 -51.5q-33 -48 -80.5 -81.5t-102.5 -45.5q-42 -53 -104.5 -81.5t-128.5 -24.5q-60 -34 -126 -39.5t-127.5 14t-117 53.5t-103.5 81l-287 282h-358q-26 0 -45 19t-19 45v672q0 26 19 45t45 19h421 q14 14 47 48t47.5 48t44 40t50.5 37.5t51 25.5t62 19.5t68 5.5h117q99 0 181 -56q82 56 181 56h167q35 0 67 -6t56.5 -14.5t51.5 -26.5t44.5 -31t43 -39.5t39 -42t41 -48t41.5 -48.5h355q26 0 45 -19t19 -45z"
      ],
      "\uf2b6": [
        1792,
        "M1792 882v-978q0 -66 -47 -113t-113 -47h-1472q-66 0 -113 47t-47 113v978q0 15 11 24q8 7 39 34.5t41.5 36t45.5 37.5t70 55.5t96 73t143.5 107t192.5 140.5q5 4 52.5 40t71.5 52.5t64 35t69 18.5t69 -18.5t65 -35.5t71 -52t52 -40q110 -80 192.5 -140.5t143.5 -107 t96 -73t70 -55.5t45.5 -37.5t41.5 -36t39 -34.5q11 -9 11 -24zM1228 297q263 191 345 252q11 8 12.5 20.5t-6.5 23.5l-38 52q-8 11 -21 12.5t-24 -6.5q-231 -169 -343 -250q-5 -3 -52 -39t-71.5 -52.5t-64.5 -35t-69 -18.5t-69 18.5t-64.5 35t-71.5 52.5t-52 39 q-186 134 -343 250q-11 8 -24 6.5t-21 -12.5l-38 -52q-8 -11 -6.5 -23.5t12.5 -20.5q82 -61 345 -252q10 -8 50 -38t65 -47t64 -39.5t77.5 -33.5t75.5 -11t75.5 11t79 34.5t64.5 39.5t65 47.5t48 36.5z"
      ],
      "\uf2b7": [
        1792,
        "M1474 623l39 -51q8 -11 6.5 -23.5t-11.5 -20.5q-43 -34 -126.5 -98.5t-146.5 -113t-67 -51.5q-39 -32 -60 -48t-60.5 -41t-76.5 -36.5t-74 -11.5h-1h-1q-37 0 -74 11.5t-76 36.5t-61 41.5t-60 47.5q-5 4 -65 50.5t-143.5 111t-122.5 94.5q-11 8 -12.5 20.5t6.5 23.5 l37 52q8 11 21.5 13t24.5 -7q94 -73 306 -236q5 -4 43.5 -35t60.5 -46.5t56.5 -32.5t58.5 -17h1h1q24 0 58.5 17t56.5 32.5t60.5 46.5t43.5 35q258 198 313 242q11 8 24 6.5t21 -12.5zM1664 -96v928q-90 83 -159 139q-91 74 -389 304q-3 2 -43 35t-61 48t-56 32.5t-59 17.5 h-1h-1q-24 0 -59 -17.5t-56 -32.5t-61 -48t-43 -35q-215 -166 -315.5 -245.5t-129.5 -104t-82 -74.5q-14 -12 -21 -19v-928q0 -13 9.5 -22.5t22.5 -9.5h1472q13 0 22.5 9.5t9.5 22.5zM1792 832v-928q0 -66 -47 -113t-113 -47h-1472q-66 0 -113 47t-47 113v928q0 56 41 94 q123 114 350 290.5t233 181.5q36 30 59 47.5t61.5 42t76 36.5t74.5 12h1h1q37 0 74.5 -12t76 -36.5t61.5 -42t59 -47.5q43 -36 156 -122t226 -177t201 -173q41 -38 41 -94z"
      ],
      "\uf2b8": [
        1536.0,
        "M330 1l202 -214l-34 236l-216 213zM556 -225l274 218l-11 245l-300 -215zM245 413l227 -213l-48 327l-245 204zM495 189l317 214l-14 324l-352 -200zM843 178l95 -80l-2 239l-103 79q0 -1 1 -8.5t0 -12t-5 -7.5l-78 -52l85 -70q7 -6 7 -88zM138 930l256 -200l-68 465 l-279 173zM1173 267l15 234l-230 -164l2 -240zM417 722l373 194l-19 441l-423 -163zM1270 357l20 233l-226 142l-2 -105l144 -95q6 -4 4 -9l-7 -119zM1461 496l30 222l-179 -128l-20 -228zM1273 329l-71 49l-8 -117q0 -5 -4 -8l-234 -187q-7 -5 -14 0l-98 83l7 -161 q0 -5 -4 -8l-293 -234q-4 -2 -6 -2q-8 2 -8 3l-228 242q-4 4 -59 277q-2 7 5 11l61 37q-94 86 -95 92l-72 351q-2 7 6 12l94 45q-133 100 -135 108l-96 466q-2 10 7 13l433 135q5 0 8 -1l317 -153q6 -4 6 -9l20 -463q0 -7 -6 -10l-118 -61l126 -85q5 -2 5 -8l5 -123l121 74 q5 4 11 0l84 -56l3 110q0 6 5 9l206 126q6 3 11 0l245 -135q4 -4 5 -7t-6.5 -60t-17.5 -124.5t-10 -70.5q0 -5 -4 -7l-191 -153q-6 -5 -13 0z"
      ],
      "\uf2b9": [
        1664,
        "M1201 298q0 57 -5.5 107t-21 100.5t-39.5 86t-64 58t-91 22.5q-6 -4 -33.5 -20.5t-42.5 -24.5t-40.5 -20t-49 -17t-46.5 -5t-46.5 5t-49 17t-40.5 20t-42.5 24.5t-33.5 20.5q-51 0 -91 -22.5t-64 -58t-39.5 -86t-21 -100.5t-5.5 -107q0 -73 42 -121.5t103 -48.5h576 q61 0 103 48.5t42 121.5zM1028 892q0 108 -76.5 184t-183.5 76t-183.5 -76t-76.5 -184q0 -107 76.5 -183t183.5 -76t183.5 76t76.5 183zM1664 352v-192q0 -14 -9 -23t-23 -9h-96v-224q0 -66 -47 -113t-113 -47h-1216q-66 0 -113 47t-47 113v1472q0 66 47 113t113 47h1216 q66 0 113 -47t47 -113v-224h96q14 0 23 -9t9 -23v-192q0 -14 -9 -23t-23 -9h-96v-128h96q14 0 23 -9t9 -23v-192q0 -14 -9 -23t-23 -9h-96v-128h96q14 0 23 -9t9 -23z"
      ],
      "\uf2ba": [
        1664,
        "M1028 892q0 -107 -76.5 -183t-183.5 -76t-183.5 76t-76.5 183q0 108 76.5 184t183.5 76t183.5 -76t76.5 -184zM980 672q46 0 82.5 -17t60 -47.5t39.5 -67t24 -81t11.5 -82.5t3.5 -79q0 -67 -39.5 -118.5t-105.5 -51.5h-576q-66 0 -105.5 51.5t-39.5 118.5q0 48 4.5 93.5 t18.5 98.5t36.5 91.5t63 64.5t93.5 26h5q7 -4 32 -19.5t35.5 -21t33 -17t37 -16t35 -9t39.5 -4.5t39.5 4.5t35 9t37 16t33 17t35.5 21t32 19.5zM1664 928q0 -13 -9.5 -22.5t-22.5 -9.5h-96v-128h96q13 0 22.5 -9.5t9.5 -22.5v-192q0 -13 -9.5 -22.5t-22.5 -9.5h-96v-128h96 q13 0 22.5 -9.5t9.5 -22.5v-192q0 -13 -9.5 -22.5t-22.5 -9.5h-96v-224q0 -66 -47 -113t-113 -47h-1216q-66 0 -113 47t-47 113v1472q0 66 47 113t113 47h1216q66 0 113 -47t47 -113v-224h96q13 0 22.5 -9.5t9.5 -22.5v-192zM1408 -96v1472q0 13 -9.5 22.5t-22.5 9.5h-1216 q-13 0 -22.5 -9.5t-9.5 -22.5v-1472q0 -13 9.5 -22.5t22.5 -9.5h1216q13 0 22.5 9.5t9.5 22.5z"
      ],
      "\uf2bb": [
        2048,
        "M1024 405q0 64 -9 117.5t-29.5 103t-60.5 78t-97 28.5q-6 -4 -30 -18t-37.5 -21.5t-35.5 -17.5t-43 -14.5t-42 -4.5t-42 4.5t-43 14.5t-35.5 17.5t-37.5 21.5t-30 18q-57 0 -97 -28.5t-60.5 -78t-29.5 -103t-9 -117.5t37 -106.5t91 -42.5h512q54 0 91 42.5t37 106.5z M867 925q0 94 -66.5 160.5t-160.5 66.5t-160.5 -66.5t-66.5 -160.5t66.5 -160.5t160.5 -66.5t160.5 66.5t66.5 160.5zM1792 416v64q0 14 -9 23t-23 9h-576q-14 0 -23 -9t-9 -23v-64q0 -14 9 -23t23 -9h576q14 0 23 9t9 23zM1792 676v56q0 15 -10.5 25.5t-25.5 10.5h-568 q-15 0 -25.5 -10.5t-10.5 -25.5v-56q0 -15 10.5 -25.5t25.5 -10.5h568q15 0 25.5 10.5t10.5 25.5zM1792 928v64q0 14 -9 23t-23 9h-576q-14 0 -23 -9t-9 -23v-64q0 -14 9 -23t23 -9h576q14 0 23 9t9 23zM2048 1248v-1216q0 -66 -47 -113t-113 -47h-352v96q0 14 -9 23t-23 9 h-64q-14 0 -23 -9t-9 -23v-96h-768v96q0 14 -9 23t-23 9h-64q-14 0 -23 -9t-9 -23v-96h-352q-66 0 -113 47t-47 113v1216q0 66 47 113t113 47h1728q66 0 113 -47t47 -113z"
      ],
      "\uf2bc": [
        2048,
        "M1024 405q0 -64 -37 -106.5t-91 -42.5h-512q-54 0 -91 42.5t-37 106.5t9 117.5t29.5 103t60.5 78t97 28.5q6 -4 30 -18t37.5 -21.5t35.5 -17.5t43 -14.5t42 -4.5t42 4.5t43 14.5t35.5 17.5t37.5 21.5t30 18q57 0 97 -28.5t60.5 -78t29.5 -103t9 -117.5zM867 925 q0 -94 -66.5 -160.5t-160.5 -66.5t-160.5 66.5t-66.5 160.5t66.5 160.5t160.5 66.5t160.5 -66.5t66.5 -160.5zM1792 480v-64q0 -14 -9 -23t-23 -9h-576q-14 0 -23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23 -9t9 -23zM1792 732v-56q0 -15 -10.5 -25.5t-25.5 -10.5h-568 q-15 0 -25.5 10.5t-10.5 25.5v56q0 15 10.5 25.5t25.5 10.5h568q15 0 25.5 -10.5t10.5 -25.5zM1792 992v-64q0 -14 -9 -23t-23 -9h-576q-14 0 -23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23 -9t9 -23zM1920 32v1216q0 13 -9.5 22.5t-22.5 9.5h-1728q-13 0 -22.5 -9.5 t-9.5 -22.5v-1216q0 -13 9.5 -22.5t22.5 -9.5h352v96q0 14 9 23t23 9h64q14 0 23 -9t9 -23v-96h768v96q0 14 9 23t23 9h64q14 0 23 -9t9 -23v-96h352q13 0 22.5 9.5t9.5 22.5zM2048 1248v-1216q0 -66 -47 -113t-113 -47h-1728q-66 0 -113 47t-47 113v1216q0 66 47 113 t113 47h1728q66 0 113 -47t47 -113z"
      ],
      "\uf2bd": [
        1792,
        "M1523 197q-22 155 -87.5 257.5t-184.5 118.5q-67 -74 -159.5 -115.5t-195.5 -41.5t-195.5 41.5t-159.5 115.5q-119 -16 -184.5 -118.5t-87.5 -257.5q106 -150 271 -237.5t356 -87.5t356 87.5t271 237.5zM1280 896q0 159 -112.5 271.5t-271.5 112.5t-271.5 -112.5 t-112.5 -271.5t112.5 -271.5t271.5 -112.5t271.5 112.5t112.5 271.5zM1792 640q0 -182 -71 -347.5t-190.5 -286t-285.5 -191.5t-349 -71q-182 0 -348 71t-286 191t-191 286t-71 348t71 348t191 286t286 191t348 71t348 -71t286 -191t191 -286t71 -348z"
      ],
      "\uf2be": [
        1792,
        "M896 1536q182 0 348 -71t286 -191t191 -286t71 -348q0 -181 -70.5 -347t-190.5 -286t-286 -191.5t-349 -71.5t-349 71t-285.5 191.5t-190.5 286t-71 347.5t71 348t191 286t286 191t348 71zM1515 185q149 205 149 455q0 156 -61 298t-164 245t-245 164t-298 61t-298 -61 t-245 -164t-164 -245t-61 -298q0 -250 149 -455q66 327 306 327q131 -128 313 -128t313 128q240 0 306 -327zM1280 832q0 159 -112.5 271.5t-271.5 112.5t-271.5 -112.5t-112.5 -271.5t112.5 -271.5t271.5 -112.5t271.5 112.5t112.5 271.5z"
      ],
      "\uf2c0": [
        1536.0,
        "M1201 752q47 -14 89.5 -38t89 -73t79.5 -115.5t55 -172t22 -236.5q0 -154 -100 -263.5t-241 -109.5h-854q-141 0 -241 109.5t-100 263.5q0 131 22 236.5t55 172t79.5 115.5t89 73t89.5 38q-79 125 -79 272q0 104 40.5 198.5t109.5 163.5t163.5 109.5t198.5 40.5 t198.5 -40.5t163.5 -109.5t109.5 -163.5t40.5 -198.5q0 -147 -79 -272zM768 1408q-159 0 -271.5 -112.5t-112.5 -271.5t112.5 -271.5t271.5 -112.5t271.5 112.5t112.5 271.5t-112.5 271.5t-271.5 112.5zM1195 -128q88 0 150.5 71.5t62.5 173.5q0 239 -78.5 377t-225.5 145 q-145 -127 -336 -127t-336 127q-147 -7 -225.5 -145t-78.5 -377q0 -102 62.5 -173.5t150.5 -71.5h854z"
      ],
      "\uf2c1": [
        1280,
        "M1024 278q0 -64 -37 -107t-91 -43h-512q-54 0 -91 43t-37 107t9 118t29.5 104t61 78.5t96.5 28.5q80 -75 188 -75t188 75q56 0 96.5 -28.5t61 -78.5t29.5 -104t9 -118zM870 797q0 -94 -67.5 -160.5t-162.5 -66.5t-162.5 66.5t-67.5 160.5t67.5 160.5t162.5 66.5 t162.5 -66.5t67.5 -160.5zM1152 -96v1376h-1024v-1376q0 -13 9.5 -22.5t22.5 -9.5h960q13 0 22.5 9.5t9.5 22.5zM1280 1376v-1472q0 -66 -47 -113t-113 -47h-960q-66 0 -113 47t-47 113v1472q0 66 47 113t113 47h352v-96q0 -14 9 -23t23 -9h192q14 0 23 9t9 23v96h352 q66 0 113 -47t47 -113z"
      ],
      "\uf2c2": [
        2048,
        "M896 324q0 54 -7.5 100.5t-24.5 90t-51 68.5t-81 25q-64 -64 -156 -64t-156 64q-47 0 -81 -25t-51 -68.5t-24.5 -90t-7.5 -100.5q0 -55 31.5 -93.5t75.5 -38.5h426q44 0 75.5 38.5t31.5 93.5zM768 768q0 80 -56 136t-136 56t-136 -56t-56 -136t56 -136t136 -56t136 56 t56 136zM1792 288v64q0 14 -9 23t-23 9h-704q-14 0 -23 -9t-9 -23v-64q0 -14 9 -23t23 -9h704q14 0 23 9t9 23zM1408 544v64q0 14 -9 23t-23 9h-320q-14 0 -23 -9t-9 -23v-64q0 -14 9 -23t23 -9h320q14 0 23 9t9 23zM1792 544v64q0 14 -9 23t-23 9h-192q-14 0 -23 -9t-9 -23 v-64q0 -14 9 -23t23 -9h192q14 0 23 9t9 23zM1792 800v64q0 14 -9 23t-23 9h-704q-14 0 -23 -9t-9 -23v-64q0 -14 9 -23t23 -9h704q14 0 23 9t9 23zM128 1152h1792v96q0 14 -9 23t-23 9h-1728q-14 0 -23 -9t-9 -23v-96zM2048 1248v-1216q0 -66 -47 -113t-113 -47h-1728 q-66 0 -113 47t-47 113v1216q0 66 47 113t113 47h1728q66 0 113 -47t47 -113z"
      ],
      "\uf2c3": [
        2048,
        "M896 324q0 -55 -31.5 -93.5t-75.5 -38.5h-426q-44 0 -75.5 38.5t-31.5 93.5q0 54 7.5 100.5t24.5 90t51 68.5t81 25q64 -64 156 -64t156 64q47 0 81 -25t51 -68.5t24.5 -90t7.5 -100.5zM768 768q0 -80 -56 -136t-136 -56t-136 56t-56 136t56 136t136 56t136 -56t56 -136z M1792 352v-64q0 -14 -9 -23t-23 -9h-704q-14 0 -23 9t-9 23v64q0 14 9 23t23 9h704q14 0 23 -9t9 -23zM1408 608v-64q0 -14 -9 -23t-23 -9h-320q-14 0 -23 9t-9 23v64q0 14 9 23t23 9h320q14 0 23 -9t9 -23zM1792 608v-64q0 -14 -9 -23t-23 -9h-192q-14 0 -23 9t-9 23v64 q0 14 9 23t23 9h192q14 0 23 -9t9 -23zM1792 864v-64q0 -14 -9 -23t-23 -9h-704q-14 0 -23 9t-9 23v64q0 14 9 23t23 9h704q14 0 23 -9t9 -23zM1920 32v1120h-1792v-1120q0 -13 9.5 -22.5t22.5 -9.5h1728q13 0 22.5 9.5t9.5 22.5zM2048 1248v-1216q0 -66 -47 -113t-113 -47 h-1728q-66 0 -113 47t-47 113v1216q0 66 47 113t113 47h1728q66 0 113 -47t47 -113z"
      ],
      "\uf2c4": [
        1792,
        "M1255 749q0 318 -105 474.5t-330 156.5q-222 0 -326 -157t-104 -474q0 -316 104 -471.5t326 -155.5q74 0 131 17q-22 43 -39 73t-44 65t-53.5 56.5t-63 36t-77.5 14.5q-46 0 -79 -16l-49 97q105 91 276 91q132 0 215.5 -54t150.5 -155q67 149 67 402zM1645 117h117 q3 -27 -2 -67t-26.5 -95t-58 -100.5t-107 -78t-162.5 -32.5q-71 0 -130.5 19t-105.5 56t-79 78t-66 96q-97 -27 -205 -27q-150 0 -292.5 58t-253 158.5t-178 249t-67.5 317.5q0 170 67.5 319.5t178.5 250.5t253.5 159t291.5 58q121 0 238.5 -36t217 -106t176 -164.5 t119.5 -219t43 -261.5q0 -190 -80.5 -347.5t-218.5 -264.5q47 -70 93.5 -106.5t104.5 -36.5q61 0 94 37.5t38 85.5z"
      ],
      "\uf2c5": [
        2304,
        "M453 -101q0 -21 -16 -37.5t-37 -16.5q-1 0 -13 3q-63 15 -162 140q-225 284 -225 676q0 341 213 614q39 51 95 103.5t94 52.5q19 0 35 -13.5t16 -32.5q0 -27 -63 -90q-98 -102 -147 -184q-119 -199 -119 -449q0 -281 123 -491q50 -85 136 -173q2 -3 14.5 -16t19.5 -21 t17 -20.5t14.5 -23.5t4.5 -21zM1796 33q0 -29 -17.5 -48.5t-46.5 -19.5h-1081q-26 0 -45 19t-19 45q0 29 17.5 48.5t46.5 19.5h1081q26 0 45 -19t19 -45zM1581 644q0 -134 -67 -233q-25 -38 -69.5 -78.5t-83.5 -60.5q-16 -10 -27 -10q-7 0 -15 6t-8 12q0 9 19 30t42 46 t42 67.5t19 88.5q0 76 -35 130q-29 42 -46 42q-3 0 -3 -5q0 -12 7.5 -35.5t7.5 -36.5q0 -22 -21.5 -35t-44.5 -13q-66 0 -66 76q0 15 1.5 44t1.5 44q0 25 -10 46q-13 25 -42 53.5t-51 28.5q-5 0 -7 -0.5t-3.5 -2.5t-1.5 -6q0 -2 16 -26t16 -54q0 -37 -19 -68t-46 -54 t-53.5 -46t-45.5 -54t-19 -68q0 -98 42 -160q29 -43 79 -63q16 -5 17 -10q1 -2 1 -5q0 -16 -18 -16q-6 0 -33 11q-119 43 -195 139.5t-76 218.5q0 55 24.5 115.5t60 115t70.5 108.5t59.5 113.5t24.5 111.5q0 53 -25 94q-29 48 -56 64q-19 9 -19 21q0 20 41 20q50 0 110 -29 q41 -19 71 -44.5t49.5 -51t33.5 -62.5t22 -69t16 -80q0 -1 3 -17.5t4.5 -25t5.5 -25t9 -27t11 -21.5t14.5 -16.5t18.5 -5.5q23 0 37 14t14 37q0 25 -20 67t-20 52t10 10q27 0 93 -70q72 -76 102.5 -156t30.5 -186zM2304 615q0 -274 -138 -503q-19 -32 -48 -72t-68 -86.5 t-81 -77t-74 -30.5q-16 0 -31 15.5t-15 31.5q0 15 29 50.5t68.5 77t48.5 52.5q183 230 183 531q0 131 -20.5 235t-72.5 211q-58 119 -163 228q-2 3 -13 13.5t-16.5 16.5t-15 17.5t-15 20t-9.5 18.5t-4 19q0 19 16 35.5t35 16.5q70 0 196 -169q98 -131 146 -273t60 -314 q2 -42 2 -64z"
      ],
      "\uf2c6": [
        1792,
        "M1189 229l147 693q9 44 -10.5 63t-51.5 7l-864 -333q-29 -11 -39.5 -25t-2.5 -26.5t32 -19.5l221 -69l513 323q21 14 32 6q7 -5 -4 -15l-415 -375v0v0l-16 -228q23 0 45 22l108 104l224 -165q64 -36 81 38zM1792 640q0 -182 -71 -348t-191 -286t-286 -191t-348 -71 t-348 71t-286 191t-191 286t-71 348t71 348t191 286t286 191t348 71t348 -71t286 -191t191 -286t71 -348z"
      ],
      "\uf2c7": [
        1024,
        "M640 192q0 -80 -56 -136t-136 -56t-136 56t-56 136q0 60 35 110t93 71v907h128v-907q58 -21 93 -71t35 -110zM768 192q0 77 -34 144t-94 112v768q0 80 -56 136t-136 56t-136 -56t-56 -136v-768q-60 -45 -94 -112t-34 -144q0 -133 93.5 -226.5t226.5 -93.5t226.5 93.5 t93.5 226.5zM896 192q0 -185 -131.5 -316.5t-316.5 -131.5t-316.5 131.5t-131.5 316.5q0 182 128 313v711q0 133 93.5 226.5t226.5 93.5t226.5 -93.5t93.5 -226.5v-711q128 -131 128 -313zM1024 768v-128h-192v128h192zM1024 1024v-128h-192v128h192zM1024 1280v-128h-192 v128h192z"
      ],
      "\uf2c8": [
        1024,
        "M640 192q0 -80 -56 -136t-136 -56t-136 56t-56 136q0 60 35 110t93 71v651h128v-651q58 -21 93 -71t35 -110zM768 192q0 77 -34 144t-94 112v768q0 80 -56 136t-136 56t-136 -56t-56 -136v-768q-60 -45 -94 -112t-34 -144q0 -133 93.5 -226.5t226.5 -93.5t226.5 93.5 t93.5 226.5zM896 192q0 -185 -131.5 -316.5t-316.5 -131.5t-316.5 131.5t-131.5 316.5q0 182 128 313v711q0 133 93.5 226.5t226.5 93.5t226.5 -93.5t93.5 -226.5v-711q128 -131 128 -313zM1024 768v-128h-192v128h192zM1024 1024v-128h-192v128h192zM1024 1280v-128h-192 v128h192z"
      ],
      "\uf2c9": [
        1024,
        "M640 192q0 -80 -56 -136t-136 -56t-136 56t-56 136q0 60 35 110t93 71v395h128v-395q58 -21 93 -71t35 -110zM768 192q0 77 -34 144t-94 112v768q0 80 -56 136t-136 56t-136 -56t-56 -136v-768q-60 -45 -94 -112t-34 -144q0 -133 93.5 -226.5t226.5 -93.5t226.5 93.5 t93.5 226.5zM896 192q0 -185 -131.5 -316.5t-316.5 -131.5t-316.5 131.5t-131.5 316.5q0 182 128 313v711q0 133 93.5 226.5t226.5 93.5t226.5 -93.5t93.5 -226.5v-711q128 -131 128 -313zM1024 768v-128h-192v128h192zM1024 1024v-128h-192v128h192zM1024 1280v-128h-192 v128h192z"
      ],
      "\uf2ca": [
        1024,
        "M640 192q0 -80 -56 -136t-136 -56t-136 56t-56 136q0 60 35 110t93 71v139h128v-139q58 -21 93 -71t35 -110zM768 192q0 77 -34 144t-94 112v768q0 80 -56 136t-136 56t-136 -56t-56 -136v-768q-60 -45 -94 -112t-34 -144q0 -133 93.5 -226.5t226.5 -93.5t226.5 93.5 t93.5 226.5zM896 192q0 -185 -131.5 -316.5t-316.5 -131.5t-316.5 131.5t-131.5 316.5q0 182 128 313v711q0 133 93.5 226.5t226.5 93.5t226.5 -93.5t93.5 -226.5v-711q128 -131 128 -313zM1024 768v-128h-192v128h192zM1024 1024v-128h-192v128h192zM1024 1280v-128h-192 v128h192z"
      ],
      "\uf2cb": [
        1024,
        "M640 192q0 -80 -56 -136t-136 -56t-136 56t-56 136q0 79 56 135.5t136 56.5t136 -56.5t56 -135.5zM768 192q0 77 -34 144t-94 112v768q0 80 -56 136t-136 56t-136 -56t-56 -136v-768q-60 -45 -94 -112t-34 -144q0 -133 93.5 -226.5t226.5 -93.5t226.5 93.5t93.5 226.5z M896 192q0 -185 -131.5 -316.5t-316.5 -131.5t-316.5 131.5t-131.5 316.5q0 182 128 313v711q0 133 93.5 226.5t226.5 93.5t226.5 -93.5t93.5 -226.5v-711q128 -131 128 -313zM1024 768v-128h-192v128h192zM1024 1024v-128h-192v128h192zM1024 1280v-128h-192v128h192z"
      ],
      "\uf2cc": [
        1920,
        "M1433 1287q10 -10 10 -23t-10 -23l-626 -626q-10 -10 -23 -10t-23 10l-82 82q-10 10 -10 23t10 23l44 44q-72 91 -81.5 207t46.5 215q-74 71 -176 71q-106 0 -181 -75t-75 -181v-1280h-256v1280q0 104 40.5 198.5t109.5 163.5t163.5 109.5t198.5 40.5q106 0 201 -41 t166 -115q94 39 197 24.5t185 -79.5l44 44q10 10 23 10t23 -10zM1344 1024q26 0 45 -19t19 -45t-19 -45t-45 -19t-45 19t-19 45t19 45t45 19zM1600 896q-26 0 -45 19t-19 45t19 45t45 19t45 -19t19 -45t-19 -45t-45 -19zM1856 1024q26 0 45 -19t19 -45t-19 -45t-45 -19 t-45 19t-19 45t19 45t45 19zM1216 896q26 0 45 -19t19 -45t-19 -45t-45 -19t-45 19t-19 45t19 45t45 19zM1408 832q0 26 19 45t45 19t45 -19t19 -45t-19 -45t-45 -19t-45 19t-19 45zM1728 896q26 0 45 -19t19 -45t-19 -45t-45 -19t-45 19t-19 45t19 45t45 19zM1088 768 q26 0 45 -19t19 -45t-19 -45t-45 -19t-45 19t-19 45t19 45t45 19zM1344 640q-26 0 -45 19t-19 45t19 45t45 19t45 -19t19 -45t-19 -45t-45 -19zM1600 768q26 0 45 -19t19 -45t-19 -45t-45 -19t-45 19t-19 45t19 45t45 19zM1216 512q-26 0 -45 19t-19 45t19 45t45 19t45 -19 t19 -45t-19 -45t-45 -19zM1472 640q26 0 45 -19t19 -45t-19 -45t-45 -19t-45 19t-19 45t19 45t45 19zM1088 512q26 0 45 -19t19 -45t-19 -45t-45 -19t-45 19t-19 45t19 45t45 19zM1344 512q26 0 45 -19t19 -45t-19 -45t-45 -19t-45 19t-19 45t19 45t45 19zM1216 384 q26 0 45 -19t19 -45t-19 -45t-45 -19t-45 19t-19 45t19 45t45 19zM1088 256q26 0 45 -19t19 -45t-19 -45t-45 -19t-45 19t-19 45t19 45t45 19z"
      ],
      "\uf2cd": [
        1792,
        "M1664 448v-192q0 -169 -128 -286v-194q0 -14 -9 -23t-23 -9h-64q-14 0 -23 9t-9 23v118q-63 -22 -128 -22h-768q-65 0 -128 22v-110q0 -17 -9.5 -28.5t-22.5 -11.5h-64q-13 0 -22.5 11.5t-9.5 28.5v186q-128 117 -128 286v192h1536zM704 864q0 -14 -9 -23t-23 -9t-23 9 t-9 23t9 23t23 9t23 -9t9 -23zM768 928q0 -14 -9 -23t-23 -9t-23 9t-9 23t9 23t23 9t23 -9t9 -23zM704 992q0 -14 -9 -23t-23 -9t-23 9t-9 23t9 23t23 9t23 -9t9 -23zM832 992q0 -14 -9 -23t-23 -9t-23 9t-9 23t9 23t23 9t23 -9t9 -23zM768 1056q0 -14 -9 -23t-23 -9t-23 9 t-9 23t9 23t23 9t23 -9t9 -23zM704 1120q0 -14 -9 -23t-23 -9t-23 9t-9 23t9 23t23 9t23 -9t9 -23zM1792 608v-64q0 -14 -9 -23t-23 -9h-1728q-14 0 -23 9t-9 23v64q0 14 9 23t23 9h96v640q0 106 75 181t181 75q108 0 184 -78q46 19 98 12t93 -39l22 22q11 11 22 0l42 -42 q11 -11 0 -22l-314 -314q-11 -11 -22 0l-42 42q-11 11 0 22l22 22q-36 46 -40.5 104t23.5 108q-37 35 -88 35q-53 0 -90.5 -37.5t-37.5 -90.5v-640h1504q14 0 23 -9t9 -23zM896 1056q0 -14 -9 -23t-23 -9t-23 9t-9 23t9 23t23 9t23 -9t9 -23zM832 1120q0 -14 -9 -23t-23 -9 t-23 9t-9 23t9 23t23 9t23 -9t9 -23zM768 1184q0 -14 -9 -23t-23 -9t-23 9t-9 23t9 23t23 9t23 -9t9 -23zM960 1120q0 -14 -9 -23t-23 -9t-23 9t-9 23t9 23t23 9t23 -9t9 -23zM896 1184q0 -14 -9 -23t-23 -9t-23 9t-9 23t9 23t23 9t23 -9t9 -23zM832 1248q0 -14 -9 -23 t-23 -9t-23 9t-9 23t9 23t23 9t23 -9t9 -23zM1024 1184q0 -14 -9 -23t-23 -9t-23 9t-9 23t9 23t23 9t23 -9t9 -23zM960 1248q0 -14 -9 -23t-23 -9t-23 9t-9 23t9 23t23 9t23 -9t9 -23zM1088 1248q0 -14 -9 -23t-23 -9t-23 9t-9 23t9 23t23 9t23 -9t9 -23z"
      ],
      "\uf2ce": [
        1536.0,
        "M994 344q0 -86 -17 -197q-31 -215 -55 -313q-22 -90 -152 -90t-152 90q-24 98 -55 313q-17 110 -17 197q0 168 224 168t224 -168zM1536 768q0 -240 -134 -434t-350 -280q-8 -3 -15 3t-6 15q7 48 10 66q4 32 6 47q1 9 9 12q159 81 255.5 234t96.5 337q0 180 -91 330.5 t-247 234.5t-337 74q-124 -7 -237 -61t-193.5 -140.5t-128 -202t-46.5 -240.5q1 -184 99 -336.5t257 -231.5q7 -3 9 -12q3 -21 6 -45q1 -9 5 -32.5t6 -35.5q1 -9 -6.5 -15t-15.5 -2q-148 58 -261 169.5t-173.5 264t-52.5 319.5q7 143 66 273.5t154.5 227t225 157.5t272.5 70 q164 10 315.5 -46.5t261 -160.5t175 -250.5t65.5 -308.5zM994 800q0 -93 -65.5 -158.5t-158.5 -65.5t-158.5 65.5t-65.5 158.5t65.5 158.5t158.5 65.5t158.5 -65.5t65.5 -158.5zM1282 768q0 -122 -53.5 -228.5t-146.5 -177.5q-8 -6 -16 -2t-10 14q-6 52 -29 92q-7 10 3 20 q58 54 91 127t33 155q0 111 -58.5 204t-157.5 141.5t-212 36.5q-133 -15 -229 -113t-109 -231q-10 -92 23.5 -176t98.5 -144q10 -10 3 -20q-24 -41 -29 -93q-2 -9 -10 -13t-16 2q-95 74 -148.5 183t-51.5 234q3 131 69 244t177 181.5t241 74.5q144 7 268 -60t196.5 -187.5 t72.5 -263.5z"
      ],
      "\uf2d0": [
        1792,
        "M256 128h1280v768h-1280v-768zM1792 1248v-1216q0 -66 -47 -113t-113 -47h-1472q-66 0 -113 47t-47 113v1216q0 66 47 113t113 47h1472q66 0 113 -47t47 -113z"
      ],
      "\uf2d1": [
        1792,
        "M1792 224v-192q0 -66 -47 -113t-113 -47h-1472q-66 0 -113 47t-47 113v192q0 66 47 113t113 47h1472q66 0 113 -47t47 -113z"
      ],
      "\uf2d2": [
        2048,
        "M256 0h768v512h-768v-512zM1280 512h512v768h-768v-256h96q66 0 113 -47t47 -113v-352zM2048 1376v-960q0 -66 -47 -113t-113 -47h-608v-352q0 -66 -47 -113t-113 -47h-960q-66 0 -113 47t-47 113v960q0 66 47 113t113 47h608v352q0 66 47 113t113 47h960q66 0 113 -47 t47 -113z"
      ],
      "\uf2d3": [
        1792,
        "M1175 215l146 146q10 10 10 23t-10 23l-233 233l233 233q10 10 10 23t-10 23l-146 146q-10 10 -23 10t-23 -10l-233 -233l-233 233q-10 10 -23 10t-23 -10l-146 -146q-10 -10 -10 -23t10 -23l233 -233l-233 -233q-10 -10 -10 -23t10 -23l146 -146q10 -10 23 -10t23 10 l233 233l233 -233q10 -10 23 -10t23 10zM1792 1248v-1216q0 -66 -47 -113t-113 -47h-1472q-66 0 -113 47t-47 113v1216q0 66 47 113t113 47h1472q66 0 113 -47t47 -113z"
      ],
      "\uf2d4": [
        1792,
        "M1257 425l-146 -146q-10 -10 -23 -10t-23 10l-169 169l-169 -169q-10 -10 -23 -10t-23 10l-146 146q-10 10 -10 23t10 23l169 169l-169 169q-10 10 -10 23t10 23l146 146q10 10 23 10t23 -10l169 -169l169 169q10 10 23 10t23 -10l146 -146q10 -10 10 -23t-10 -23 l-169 -169l169 -169q10 -10 10 -23t-10 -23zM256 128h1280v1024h-1280v-1024zM1792 1248v-1216q0 -66 -47 -113t-113 -47h-1472q-66 0 -113 47t-47 113v1216q0 66 47 113t113 47h1472q66 0 113 -47t47 -113z"
      ],
      "\uf2d5": [
        1792,
        "M1070 358l306 564h-654l-306 -564h654zM1792 640q0 -182 -71 -348t-191 -286t-286 -191t-348 -71t-348 71t-286 191t-191 286t-71 348t71 348t191 286t286 191t348 71t348 -71t286 -191t191 -286t71 -348z"
      ],
      "\uf2d6": [
        1794,
        "M1291 1060q-15 17 -35 8.5t-26 -28.5t5 -38q14 -17 40 -14.5t34 20.5t-18 52zM895 814q-8 -8 -19.5 -8t-18.5 8q-8 8 -8 19t8 18q7 8 18.5 8t19.5 -8q7 -7 7 -18t-7 -19zM1060 740l-35 -35q-12 -13 -29.5 -13t-30.5 13l-38 38q-12 13 -12 30t12 30l35 35q12 12 29.5 12 t30.5 -12l38 -39q12 -12 12 -29.5t-12 -29.5zM951 870q-7 -8 -18.5 -8t-19.5 8q-7 8 -7 19t7 19q8 8 19 8t19 -8t8 -19t-8 -19zM1354 968q-34 -64 -107.5 -85.5t-127.5 16.5q-38 28 -61 66.5t-21 87.5t39 92t75.5 53t70.5 -5t70 -51q2 -2 13 -12.5t14.5 -13.5t13 -13.5 t12.5 -15.5t10 -15.5t8.5 -18t4 -18.5t1 -21t-5 -22t-9.5 -24zM1555 486q3 20 -8.5 34.5t-27.5 21.5t-33 17t-23 20q-40 71 -84 98.5t-113 11.5q19 13 40 18.5t33 4.5l12 -1q2 45 -34 90q6 20 6.5 40.5t-2.5 30.5l-3 10q43 24 71 65t34 91q10 84 -43 150.5t-137 76.5 q-60 7 -114 -18.5t-82 -74.5q-30 -51 -33.5 -101t14.5 -87t43.5 -64t56.5 -42q-45 4 -88 36t-57 88q-28 108 32 222q-16 21 -29 32q-50 0 -89 -19q19 24 42 37t36 14l13 1q0 50 -13 78q-10 21 -32.5 28.5t-47 -3.5t-37.5 -40q2 4 4 7q-7 -28 -6.5 -75.5t19 -117t48.5 -122.5 q-25 -14 -47 -36q-35 -16 -85.5 -70.5t-84.5 -101.5l-33 -46q-90 -34 -181 -125.5t-75 -162.5q1 -16 11 -27q-15 -12 -30 -30q-21 -25 -21 -54t21.5 -40t63.5 6q41 19 77 49.5t55 60.5q-2 2 -6.5 5t-20.5 7.5t-33 3.5q23 5 51 12.5t40 10t27.5 6t26 4t23.5 0.5q14 -7 22 34 q7 37 7 90q0 102 -40 150q106 -103 101 -219q-1 -29 -15 -50t-27 -27l-13 -6q-4 -7 -19 -32t-26 -45.5t-26.5 -52t-25 -61t-17 -63t-6.5 -66.5t10 -63q-35 54 -37 80q-22 -24 -34.5 -39t-33.5 -42t-30.5 -46t-16.5 -41t-0.5 -38t25.5 -27q45 -25 144 64t190.5 221.5 t122.5 228.5q86 52 145 115.5t86 119.5q47 -93 154 -178q104 -83 167 -80q39 2 46 43zM1794 640q0 -182 -71 -348t-191 -286t-286.5 -191t-348.5 -71t-348.5 71t-286.5 191t-191 286t-71 348t71 348t191 286t286.5 191t348.5 71t348.5 -71t286.5 -191t191 -286t71 -348z"
      ],
      "\uf2d7": [
        1536.0,
        "M518 1353v-655q103 -1 191.5 1.5t125.5 5.5l37 3q68 2 90.5 24.5t39.5 94.5l33 142h103l-14 -322l7 -319h-103l-29 127q-15 68 -45 93t-84 26q-87 8 -352 8v-556q0 -78 43.5 -115.5t133.5 -37.5h357q35 0 59.5 2t55 7.5t54 18t48.5 32t46 50.5t39 73l93 216h89 q-6 -37 -31.5 -252t-30.5 -276q-146 5 -263.5 8t-162.5 4h-44h-628l-376 -12v102l127 25q67 13 91.5 37t25.5 79l8 643q3 402 -8 645q-2 61 -25.5 84t-91.5 36l-127 24v102l376 -12h702q139 0 374 27q-6 -68 -14 -194.5t-12 -219.5l-5 -92h-93l-32 124q-31 121 -74 179.5 t-113 58.5h-548q-28 0 -35.5 -8.5t-7.5 -30.5z"
      ],
      "\uf2d8": [
        1536.0,
        "M922 739v-182q0 -4 0.5 -15t0 -15l-1.5 -12t-3.5 -11.5t-6.5 -7.5t-11 -5.5t-16 -1.5v309q9 0 16 -1t11 -5t6.5 -5.5t3.5 -9.5t1 -10.5v-13.5v-14zM1238 643v-121q0 -1 0.5 -12.5t0 -15.5t-2.5 -11.5t-7.5 -10.5t-13.5 -3q-9 0 -14 9q-4 10 -4 165v7v8.5v9t1.5 8.5l3.5 7 t5 5.5t8 1.5q6 0 10 -1.5t6.5 -4.5t4 -6t2 -8.5t0.5 -8v-9.5v-9zM180 407h122v472h-122v-472zM614 407h106v472h-159l-28 -221q-20 148 -32 221h-158v-472h107v312l45 -312h76l43 319v-319zM1039 712q0 67 -5 90q-3 16 -11 28.5t-17 20.5t-25 14t-26.5 8.5t-31 4t-29 1.5 h-29.5h-12h-91v-472h56q169 -1 197 24.5t25 180.5q-1 62 -1 100zM1356 515v133q0 29 -2 45t-9.5 33.5t-24.5 25t-46 7.5q-46 0 -77 -34v154h-117v-472h110l7 30q30 -36 77 -36q50 0 66 30.5t16 83.5zM1536 1248v-1216q0 -66 -47 -113t-113 -47h-1216q-66 0 -113 47t-47 113 v1216q0 66 47 113t113 47h1216q66 0 113 -47t47 -113z"
      ],
      "\uf2d9": [
        2176,
        "M1143 -197q-6 1 -11 4q-13 8 -36 23t-86 65t-116.5 104.5t-112 140t-89.5 172.5q-17 3 -175 37q66 -213 235 -362t391 -184zM502 409l168 -28q-25 76 -41 167.5t-19 145.5l-4 53q-84 -82 -121 -224q5 -65 17 -114zM612 1018q-43 -64 -77 -148q44 46 74 68zM2049 584 q0 161 -62 307t-167.5 252t-250.5 168.5t-304 62.5q-147 0 -281 -52.5t-240 -148.5q-30 -58 -45 -160q60 51 143 83.5t158.5 43t143 13.5t108.5 -1l40 -3q33 -1 53 -15.5t24.5 -33t6.5 -37t-1 -28.5q-126 11 -227.5 0.5t-183 -43.5t-142.5 -71.5t-131 -98.5 q4 -36 11.5 -92.5t35.5 -178t62 -179.5q123 -6 247.5 14.5t214.5 53.5t162.5 67t109.5 59l37 24q22 16 39.5 20.5t30.5 -5t17 -34.5q14 -97 -39 -121q-208 -97 -467 -134q-135 -20 -317 -16q41 -96 110 -176.5t137 -127t130.5 -79t101.5 -43.5l39 -12q143 -23 263 15 q195 99 314 289t119 418zM2123 621q-14 -135 -40 -212q-70 -208 -181.5 -346.5t-318.5 -253.5q-48 -33 -82 -44q-72 -26 -163 -16q-36 -3 -73 -3q-283 0 -504.5 173t-295.5 442q-1 0 -4 0.5t-5 0.5q-6 -50 2.5 -112.5t26 -115t36 -98t31.5 -71.5l14 -26q8 -12 54 -82 q-71 38 -124.5 106.5t-78.5 140t-39.5 137t-17.5 107.5l-2 42q-5 2 -33.5 12.5t-48.5 18t-53 20.5t-57.5 25t-50 25.5t-42.5 27t-25 25.5q19 -10 50.5 -25.5t113 -45.5t145.5 -38l2 32q11 149 94 290q41 202 176 365q28 115 81 214q15 28 32 45t49 32q158 74 303.5 104 t302 11t306.5 -97q220 -115 333 -336t87 -474z"
      ],
      "\uf2da": [
        1792,
        "M1341 752q29 44 -6.5 129.5t-121.5 142.5q-58 39 -125.5 53.5t-118 4.5t-68.5 -37q-12 -23 -4.5 -28t42.5 -10q23 -3 38.5 -5t44.5 -9.5t56 -17.5q36 -13 67.5 -31.5t53 -37t40 -38.5t30.5 -38t22 -34.5t16.5 -28.5t12 -18.5t10.5 -6t11 9.5zM1704 178 q-52 -127 -148.5 -220t-214.5 -141.5t-253 -60.5t-266 13.5t-251 91t-210 161.5t-141.5 235.5t-46.5 303.5q1 41 8.5 84.5t12.5 64t24 80.5t23 73q-51 -208 1 -397t173 -318t291 -206t346 -83t349 74.5t289 244.5q20 27 18 14q0 -4 -4 -14zM1465 627q0 -104 -40.5 -199 t-108.5 -164t-162 -109.5t-198 -40.5t-198 40.5t-162 109.5t-108.5 164t-40.5 199t40.5 199t108.5 164t162 109.5t198 40.5t198 -40.5t162 -109.5t108.5 -164t40.5 -199zM1752 915q-65 147 -180.5 251t-253 153.5t-292 53.5t-301 -36.5t-275.5 -129t-220 -211.5t-131 -297 t-10 -373q-49 161 -51.5 311.5t35.5 272.5t109 227t165.5 180.5t207 126t232 71t242.5 9t236 -54t216 -124.5t178 -197q33 -50 62 -121t31 -112zM1690 573q12 244 -136.5 416t-396.5 240q-8 0 -10 5t24 8q125 -4 230 -50t173 -120t116 -168.5t58.5 -199t-1 -208 t-61.5 -197.5t-122.5 -167t-185 -117.5t-248.5 -46.5q108 30 201.5 80t174 123t129.5 176.5t55 225.5z"
      ],
      "\uf2db": [
        1536.0,
        "M192 256v-128h-112q-16 0 -16 16v16h-48q-16 0 -16 16v32q0 16 16 16h48v16q0 16 16 16h112zM192 512v-128h-112q-16 0 -16 16v16h-48q-16 0 -16 16v32q0 16 16 16h48v16q0 16 16 16h112zM192 768v-128h-112q-16 0 -16 16v16h-48q-16 0 -16 16v32q0 16 16 16h48v16 q0 16 16 16h112zM192 1024v-128h-112q-16 0 -16 16v16h-48q-16 0 -16 16v32q0 16 16 16h48v16q0 16 16 16h112zM192 1280v-128h-112q-16 0 -16 16v16h-48q-16 0 -16 16v32q0 16 16 16h48v16q0 16 16 16h112zM1280 1440v-1472q0 -40 -28 -68t-68 -28h-832q-40 0 -68 28 t-28 68v1472q0 40 28 68t68 28h832q40 0 68 -28t28 -68zM1536 208v-32q0 -16 -16 -16h-48v-16q0 -16 -16 -16h-112v128h112q16 0 16 -16v-16h48q16 0 16 -16zM1536 464v-32q0 -16 -16 -16h-48v-16q0 -16 -16 -16h-112v128h112q16 0 16 -16v-16h48q16 0 16 -16zM1536 720v-32 q0 -16 -16 -16h-48v-16q0 -16 -16 -16h-112v128h112q16 0 16 -16v-16h48q16 0 16 -16zM1536 976v-32q0 -16 -16 -16h-48v-16q0 -16 -16 -16h-112v128h112q16 0 16 -16v-16h48q16 0 16 -16zM1536 1232v-32q0 -16 -16 -16h-48v-16q0 -16 -16 -16h-112v128h112q16 0 16 -16v-16 h48q16 0 16 -16z"
      ],
      "\uf2dc": [
        1664,
        "M1566 419l-167 -33l186 -107q23 -13 29.5 -38.5t-6.5 -48.5q-14 -23 -39 -29.5t-48 6.5l-186 106l55 -160q13 -38 -12 -63.5t-60.5 -20.5t-48.5 42l-102 300l-271 156v-313l208 -238q16 -18 17 -39t-11 -36.5t-28.5 -25t-37 -5.5t-36.5 22l-112 128v-214q0 -26 -19 -45 t-45 -19t-45 19t-19 45v214l-112 -128q-16 -18 -36.5 -22t-37 5.5t-28.5 25t-11 36.5t17 39l208 238v313l-271 -156l-102 -300q-13 -37 -48.5 -42t-60.5 20.5t-12 63.5l55 160l-186 -106q-23 -13 -48 -6.5t-39 29.5q-13 23 -6.5 48.5t29.5 38.5l186 107l-167 33 q-29 6 -42 29t-8.5 46.5t25.5 40t50 10.5l310 -62l271 157l-271 157l-310 -62q-4 -1 -13 -1q-27 0 -44 18t-19 40t11 43t40 26l167 33l-186 107q-23 13 -29.5 38.5t6.5 48.5t39 30t48 -7l186 -106l-55 160q-13 38 12 63.5t60.5 20.5t48.5 -42l102 -300l271 -156v313 l-208 238q-16 18 -17 39t11 36.5t28.5 25t37 5.5t36.5 -22l112 -128v214q0 26 19 45t45 19t45 -19t19 -45v-214l112 128q16 18 36.5 22t37 -5.5t28.5 -25t11 -36.5t-17 -39l-208 -238v-313l271 156l102 300q13 37 48.5 42t60.5 -20.5t12 -63.5l-55 -160l186 106 q23 13 48 6.5t39 -29.5q13 -23 6.5 -48.5t-29.5 -38.5l-186 -107l167 -33q27 -5 40 -26t11 -43t-19 -40t-44 -18q-9 0 -13 1l-310 62l-271 -157l271 -157l310 62q29 6 50 -10.5t25.5 -40t-8.5 -46.5t-42 -29z"
      ],
      "\uf2dd": [
        1792,
        "M1473 607q7 118 -33 226.5t-113 189t-177 131t-221 57.5q-116 7 -225.5 -32t-192 -110.5t-135 -175t-59.5 -220.5q-7 -118 33 -226.5t113 -189t177.5 -131t221.5 -57.5q155 -9 293 59t224 195.5t94 283.5zM1792 1536l-349 -348q120 -117 180.5 -272t50.5 -321 q-11 -183 -102 -339t-241 -255.5t-332 -124.5l-999 -132l347 347q-120 116 -180.5 271.5t-50.5 321.5q11 184 102 340t241.5 255.5t332.5 124.5q167 22 500 66t500 66z"
      ],
      "\uf2de": [
        1792,
        "M948 508l163 -329h-51l-175 350l-171 -350h-49l179 374l-78 33l21 49l240 -102l-21 -50zM563 1100l304 -130l-130 -304l-304 130zM907 915l240 -103l-103 -239l-239 102zM1188 765l191 -81l-82 -190l-190 81zM1680 640q0 159 -62 304t-167.5 250.5t-250.5 167.5t-304 62 t-304 -62t-250.5 -167.5t-167.5 -250.5t-62 -304t62 -304t167.5 -250.5t250.5 -167.5t304 -62t304 62t250.5 167.5t167.5 250.5t62 304zM1792 640q0 -182 -71 -348t-191 -286t-286 -191t-348 -71t-348 71t-286 191t-191 286t-71 348t71 348t191 286t286 191t348 71t348 -71 t286 -191t191 -286t71 -348z"
      ],
      "\uf2e0": [
        1920,
        "M1334 302q-4 24 -27.5 34t-49.5 10.5t-48.5 12.5t-25.5 38q-5 47 33 139.5t75 181t32 127.5q-14 101 -117 103q-45 1 -75 -16l-3 -2l-5 -2.5t-4.5 -2t-5 -2t-5 -0.5t-6 1.5t-6 3.5t-6.5 5q-3 2 -9 8.5t-9 9t-8.5 7.5t-9.5 7.5t-9.5 5.5t-11 4.5t-11.5 2.5q-30 5 -48 -3 t-45 -31q-1 -1 -9 -8.5t-12.5 -11t-15 -10t-16.5 -5.5t-17 3q-54 27 -84 40q-41 18 -94 -5t-76 -65q-16 -28 -41 -98.5t-43.5 -132.5t-40 -134t-21.5 -73q-22 -69 18.5 -119t110.5 -46q30 2 50.5 15t38.5 46q7 13 79 199.5t77 194.5q6 11 21.5 18t29.5 0q27 -15 21 -53 q-2 -18 -51 -139.5t-50 -132.5q-6 -38 19.5 -56.5t60.5 -7t55 49.5q4 8 45.5 92t81.5 163.5t46 88.5q20 29 41 28q29 0 25 -38q-2 -16 -65.5 -147.5t-70.5 -159.5q-12 -53 13 -103t74 -74q17 -9 51 -15.5t71.5 -8t62.5 14t20 48.5zM383 86q3 -15 -5 -27.5t-23 -15.5 q-14 -3 -26.5 5t-15.5 23q-3 14 5 27t22 16t27 -5t16 -23zM953 -177q12 -17 8.5 -37.5t-20.5 -32.5t-37.5 -8t-32.5 21q-11 17 -7.5 37.5t20.5 32.5t37.5 8t31.5 -21zM177 635q-18 -27 -49.5 -33t-57.5 13q-26 18 -32 50t12 58q18 27 49.5 33t57.5 -12q26 -19 32 -50.5 t-12 -58.5zM1467 -42q19 -28 13 -61.5t-34 -52.5t-60.5 -13t-51.5 34t-13 61t33 53q28 19 60.5 13t52.5 -34zM1579 562q69 -113 42.5 -244.5t-134.5 -207.5q-90 -63 -199 -60q-20 -80 -84.5 -127t-143.5 -44.5t-140 57.5q-12 -9 -13 -10q-103 -71 -225 -48.5t-193 126.5 q-50 73 -53 164q-83 14 -142.5 70.5t-80.5 128t-2 152t81 138.5q-36 60 -38 128t24.5 125t79.5 98.5t121 50.5q32 85 99 148t146.5 91.5t168 17t159.5 -66.5q72 21 140 17.5t128.5 -36t104.5 -80t67.5 -115t17.5 -140.5q52 -16 87 -57t45.5 -89t-5.5 -99.5t-58 -87.5z M455 1222q14 -20 9.5 -44.5t-24.5 -38.5q-19 -14 -43.5 -9.5t-37.5 24.5q-14 20 -9.5 44.5t24.5 38.5q19 14 43.5 9.5t37.5 -24.5zM614 1503q4 -16 -5 -30.5t-26 -18.5t-31 5.5t-18 26.5q-3 17 6.5 31t25.5 18q17 4 31 -5.5t17 -26.5zM1800 555q4 -20 -6.5 -37t-30.5 -21 q-19 -4 -36 6.5t-21 30.5t6.5 37t30.5 22q20 4 36.5 -7.5t20.5 -30.5zM1136 1448q16 -27 8.5 -58.5t-35.5 -47.5q-27 -16 -57.5 -8.5t-46.5 34.5q-16 28 -8.5 59t34.5 48t58 9t47 -36zM1882 792q4 -15 -4 -27.5t-23 -16.5q-15 -3 -27.5 5.5t-15.5 22.5q-3 15 5 28t23 16 q14 3 26.5 -5t15.5 -23zM1691 1033q15 -22 10.5 -49t-26.5 -43q-22 -15 -49 -10t-42 27t-10 49t27 43t48.5 11t41.5 -28z"
      ]
    }
  };

  function processTemplate(str: string): Template {
    const template = str.split('`');
    for (let i = 0, len = template.length; i < len; i += 2) template[i] = encodeURIComponent(template[i]);
    return template;
  }
  function applyTemplate(template: Template, values: TemplateValues): string {
    const result = template.slice();
    for (let i = 1, len = template.length; i < len; i += 2) result[i] = String(values[result[i]]);
    return result.join('');
  }

  const svgTemplate = processTemplate('<svg xmlns="http://www.w3.org/2000/svg" width="`width`" height="`height`" viewBox="0 0 `width` `height`"><g fill="none" fill-rule="evenodd" transform="scale(`scale`)"><path d="M22 11c0 1.42-.226 2.585-.677 3.496l-7.465 15.117c-.218.43-.543.77-.974 1.016-.43.246-.892.37-1.384.37-.492 0-.954-.124-1.384-.37-.43-.248-.75-.587-.954-1.017L1.677 14.496C1.227 13.586 1 12.42 1 11c0-2.76 1.025-5.117 3.076-7.07C6.126 1.977 8.602 1 11.5 1c2.898 0 5.373.977 7.424 2.93C20.974 5.883 22 8.24 22 11z" stroke="`stroke`" stroke-width=".6" fill="`fill`" fill-rule="nonzero"/>`glyph`</g></svg>');

  const pathTemplate = processTemplate('<path transform="`transform`" d="`path`" fill="`fill`"/>');
  const rgbTemplate = processTemplate('rgb(`r`,`g`,`b`)');
  const rgbaTemplate = processTemplate('rgba(`r`,`g`,`b`,`a`)');

  return function (code: string, {
    icon = { r: 255, g: 255, b: 255 },
    fill = { r: 65, g: 130, b: 195 },
    stroke = { r: 255, g: 255, b: 255 },
    height = 42,
    customTransform = ''
  }: {
      icon?: RGBA | false,
      fill?: RGBA,
      stroke?: RGBA,
      height?: number,
      customTransform?: string
    } = {}): SVG {
    
    const glyph = fontAwesome.paths[code] || fontAwesome.paths[fontAwesome.codes[code.replace(/^fa-/, '')]];
    if (!glyph) throw new Error(`Unknown FontAwesome character: ${code}`);

    let h: number, path: string;
    [h, path] = glyph;
    const scale = height / 32;
    const width = Math.round(23 * scale);
    const transform = `${customTransform} translate(11.5 14.5) scale(0.006 -0.006) translate(${h * -0.5}, 0)`;

    const svg = applyTemplate(svgTemplate, {
      width: width,
      height: height,
      scale: scale,
      fill: applyTemplate(fill.a == null ? rgbTemplate : rgbaTemplate, fill),
      stroke: applyTemplate(stroke.a == null ? rgbTemplate : rgbaTemplate, stroke),
      glyph: icon ? applyTemplate(pathTemplate, {
        transform: encodeURIComponent(transform),
        path: encodeURIComponent(path),
        fill: applyTemplate(icon.a == null ? rgbTemplate : rgbaTemplate, icon)
      }) : ''
    });
    return 'data:image/svg+xml,' + svg;
  }
})();
