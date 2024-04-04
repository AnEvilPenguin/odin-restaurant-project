(()=>{"use strict";var e={365:(e,r,t)=>{t.d(r,{A:()=>c});var a=t(601),n=t.n(a),o=t(314),s=t.n(o),u=t(417),i=t.n(u),m=new URL(t(529),t.b),b=new URL(t(985),t.b),h=s()(n()),g=i()(m),l=i()(b);h.push([e.id,`@font-face {\n    font-family: "Burgers1";\n    src: url(${g}) format("woff"),\n        url(${l}) format("woff2");\n    font-style: normal;\n}\n\n:root {\n    --background-red: #e82939;\n    --background-yellow: #f6dd42;\n}\n\n.background {\n    background-color: var(--background-red);\n    margin: 0px;\n\n    min-height: 100vh;\n\n    display: flex;\n    flex-direction: column;\n}\n\nheader {\n    padding: 0px clamp(50px, 16vw, 50%);\n    margin: 0px;\n}\n\nnav {\n    padding: 0px 10px;\n\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    gap: 10px;\n\n    background-color: black;\n}\n\nbutton {\n    border: 0px;\n    min-height: clamp(50px, 10vh, 300px);\n    background-color: var(--background-yellow);\n\n    font-family: "Burgers1";\n    font-size: min(10vw, 4rem);\n\n    cursor: pointer;\n}\n\n.flexColumnCenter {\n    display: flex;\n\n    flex-direction: column;\n    align-items: center;\n}\n\n.content {\n    border: 10px solid black;\n    margin: 0px 12px 12px 12px;\n    background-color: var(--background-yellow);\n\n    flex: 1;\n}\n\nh1 {\n    font-family: "Burgers1";\n\n    font-size: 5rem;\n    font-weight: bolder;\n\n    margin-left: auto;\n    margin-right: auto;\n}\n\n.quoteMessage, .quote {\n    width: min(60ch, 80vw);\n}\n\n.regularMenu {\n    padding: 2em;\n    margin: 2em;\n\n    border: 10px solid #7a85a1;\n\n    background-color: #ecebe7;\n\n    min-width: clamp(150px, 50%, 1000px);\n}\n\nul {\n    list-style: none; \n    padding: 0px;\n    margin: 0px;\n}\n\n.menuItem {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: clamp(50px, 40%, 800px);\n\n    color: #234482;\n    font-family: cabin, sans-serif;\n    font-weight: bolder;\n    font-size: 1.25rem;\n}\n\n.menuItem p {\n    margin-top: clamp(0px, 1vh, 20px);\n    margin-bottom: clamp(0px, 1vh, 20px);\n}\n/* TODO Chalkboard for menu */\n;\n`,""]);const c=h},314:e=>{e.exports=function(e){var r=[];return r.toString=function(){return this.map((function(r){var t="",a=void 0!==r[5];return r[4]&&(t+="@supports (".concat(r[4],") {")),r[2]&&(t+="@media ".concat(r[2]," {")),a&&(t+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),t+=e(r),a&&(t+="}"),r[2]&&(t+="}"),r[4]&&(t+="}"),t})).join("")},r.i=function(e,t,a,n,o){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(a)for(var u=0;u<this.length;u++){var i=this[u][0];null!=i&&(s[i]=!0)}for(var m=0;m<e.length;m++){var b=[].concat(e[m]);a&&s[b[0]]||(void 0!==o&&(void 0===b[5]||(b[1]="@layer".concat(b[5].length>0?" ".concat(b[5]):""," {").concat(b[1],"}")),b[5]=o),t&&(b[2]?(b[1]="@media ".concat(b[2]," {").concat(b[1],"}"),b[2]=t):b[2]=t),n&&(b[4]?(b[1]="@supports (".concat(b[4],") {").concat(b[1],"}"),b[4]=n):b[4]="".concat(n)),r.push(b))}},r}},417:e=>{e.exports=function(e,r){return r||(r={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),r.hash&&(e+=r.hash),/["'() \t\n]|(%20)/.test(e)||r.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var r=[];function t(e){for(var t=-1,a=0;a<r.length;a++)if(r[a].identifier===e){t=a;break}return t}function a(e,a){for(var o={},s=[],u=0;u<e.length;u++){var i=e[u],m=a.base?i[0]+a.base:i[0],b=o[m]||0,h="".concat(m," ").concat(b);o[m]=b+1;var g=t(h),l={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==g)r[g].references++,r[g].updater(l);else{var c=n(l,a);a.byIndex=u,r.splice(u,0,{identifier:h,updater:c,references:1})}s.push(h)}return s}function n(e,r){var t=r.domAPI(r);return t.update(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap&&r.supports===e.supports&&r.layer===e.layer)return;t.update(e=r)}else t.remove()}}e.exports=function(e,n){var o=a(e=e||[],n=n||{});return function(e){e=e||[];for(var s=0;s<o.length;s++){var u=t(o[s]);r[u].references--}for(var i=a(e,n),m=0;m<o.length;m++){var b=t(o[m]);0===r[b].references&&(r[b].updater(),r.splice(b,1))}o=i}}},659:e=>{var r={};e.exports=function(e,t){var a=function(e){if(void 0===r[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}r[e]=t}return r[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},540:e=>{e.exports=function(e){var r=document.createElement("style");return e.setAttributes(r,e.attributes),e.insert(r,e.options),r}},56:(e,r,t)=>{e.exports=function(e){var r=t.nc;r&&e.setAttribute("nonce",r)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var r=e.insertStyleElement(e);return{update:function(t){!function(e,r,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var n=void 0!==t.layer;n&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,n&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),r.styleTagTransform(a,e,r.options)}(r,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)}}}},113:e=>{e.exports=function(e,r){if(r.styleSheet)r.styleSheet.cssText=e;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(e))}}},529:(e,r,t)=>{e.exports=t.p+"1d63f9e168cf04ff2d77.woff"},985:(e,r,t)=>{e.exports=t.p+"296e1f43083e224dcdf2.woff2"}},r={};function t(a){var n=r[a];if(void 0!==n)return n.exports;var o=r[a]={id:a,exports:{}};return e[a](o,o.exports,t),o.exports}t.m=e,t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var a in r)t.o(r,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:r[a]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var r=t.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var a=r.getElementsByTagName("script");if(a.length)for(var n=a.length-1;n>-1&&(!e||!/^http(s?):/.test(e));)e=a[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(72),r=t.n(e),a=t(825),n=t.n(a),o=t(659),s=t.n(o),u=t(56),i=t.n(u),m=t(540),b=t.n(m),h=t(113),g=t.n(h),l=t(365),c={};c.styleTagTransform=g(),c.setAttributes=i(),c.insert=s().bind(null,"head"),c.domAPI=n(),c.insertStyleElement=b(),r()(l.A,c),l.A&&l.A.locals&&l.A.locals;const d=JSON.parse('[{"name":"\\"new bacon-ings\\""},{"name":"the child molester","subtext":"Comes with Candy"},{"name":"foot feta-ish burger"},{"name":"tunami"},{"name":"mission a-corn-plished burger"},{"name":"pepper don\'t preach"},{"name":"rest in peas burger"},{"name":"fig-eta Bout it burger"},{"name":"chever which way but loose burger"},{"name":"the roquefort files burger"},{"name":"these collards don\'t run burger"},{"name":"totally radish burger","subtext":"Comes with Radish"},{"name":"onion burger - grilled... to death!"},{"name":"last of the mo-jicama burger","subtext":"Comes with Jicama"},{"name":"olive and let die burger"},{"name":"thank god it\'s fried egg burger"},{"name":"camembert-ly legal burger"},{"name":"krauted house burger"},{"name":"poblano picasso burger"},{"name":"salvador cauliflower burger"},{"name":"shoot out at the okra corral burger"},{"name":"hit me with your best shallot burger"},{"name":"the sound & the curry burger"},{"name":"i\'ve created a muenster burger"},{"name":"something\'s not fishy burger","subtext":"100% Beef"},{"name":"neither fish nor fowl burger","subtext":"100% Beef"},{"name":"one fish, two fish, red fish, hamburger"},{"name":"take me out to the burger","subtext":"Comes with Peanuts and Crackerjacks"},{"name":"i\'m mad about saffron","subtext":"Made with no saffron"},{"name":"chard to a crisp burger"},{"name":"burger a la mode","subtext":"Comes with ice cream (Not on top)"},{"name":"shake your honeymaker burger","subtext":"Comes with Honey Mustard"},{"name":"use it or bleus it burger","subtext":"Comes with Bleu Cheese"},{"name":"the one yam band burger","subtext":"Comes with brussel sprouts"},{"name":"papaya was a rolling stone burger"},{"name":"good night and good leek burger"},{"name":"band on the bun burger","subtext":"Comes with Wings"},{"name":"chorizo your own adventure burger"},{"name":"whats the worcestershire that could happen burger"},{"name":"where have you bean all my life burger","subtext":"Comes with Baked Beans"},{"name":"it\'s fun to eat at the ryemca burger","subtext":"Comes on Rye w/ Mustard, Cheese & Avocado"},{"name":"if looks could kale burger"},{"name":"little swiss bunshine burger","subtext":"Comes on a buttered bun"},{"name":"girls just wanna have fennel burger"},{"name":"the final kraut down burger","subtext":"Comes with sauerkraut"},{"name":"sweaty palms burger","subtext":"Comes with hearts of palm"},{"name":"poutine on the ritz burger","subtext":"Comes with poutine fries"},{"name":"mesclun around burger"},{"name":"the don\'t get creme fraiche with me burger"},{"name":"onion-tended consequences burger"},{"name":"bruchetta bout it burger"},{"name":"mediterrain\'t misbehaving burger"},{"name":"i\'m gonna get you succotash burger"},{"name":"every breath you tikka masala burger"},{"name":"two karat burger","subtext":"Comes with two carrots"},{"name":"say it ain\'t cilantro burger","subtext":"Doesn\'t come with cilantro, because cilantro is terrible"},{"name":"not if i can kelp it burger"},{"name":"the jack-o-lentil burger"},{"name":"itsy bitsy teeny weenie yellow polka-dot zucchini burger"},{"name":"summer thyme burger"},{"name":"butterface burger","subtext":"Served with butter lettuce"},{"name":"beets me burger"},{"name":"we\'re here, we\'re gruyer, get used to it burger"},{"name":"plymouth roquefort burger"},{"name":"she\'s a super leek burger","subtext":"Comes with braised leeks"},{"name":"Let\'s get Frisée Burger"},{"name":"open sesame burger","subtext":"Served open-faced on a sesame seed bun"},{"name":"chipoltle off the old block burger"},{"name":"don\'t give me no chive burger","subtext":"Served with no chives"},{"name":"pickle my funny bone burger"},{"name":"yes i cayenne burger"},{"name":"bean spirit burger","subtext":"Comes with beans"},{"name":"one horse open slaw burger","subtext":"Comes with slaw, no horse"},{"name":"santa clause is cumin to town burger","subtext":"With cumin"},{"name":"fifth day of christmas burger","subtext":"Comes with five golden rings of onion"},{"name":"jingle bell pepper burger"},{"name":"home for the challah-days burger","subtext":"Comes on a challah roll"},{"name":"the silentil night burger","subtext":"Comes with lentils"},{"name":"50 ways to leave your guava burger"},{"name":"ruta-bag-a burger"},{"name":"don\'t go brocking my heart burger","subtext":"Comes with broccoli and artichoke hearts"},{"name":"eggers can\'t be cheesers burger","subtext":"With fried egg and cheese"},{"name":"Freedom of choys burger","subtext":"Comes with bok choy"},{"name":"i heartichoke you burger"},{"name":"don\'t you four cheddar \'bout me burger","subtext":"Comes with four kinds of cheddar"},{"name":"i mint to do that burger","subtext":"Comes with mint relish"},{"name":"only the provolonely burger","subtext":"Comes with provolone"},{"name":"sharp cheddar dressed man","subtext":"Comes with sharp cheddar"},{"name":"i know why the cajun burger sings"},{"name":"tarragon in sixy seconds burger"},{"name":"chile relleno-you-didn\'t burger"},{"name":"top bun burger","subtext":"Comes with our best seven-grain bun"},{"name":"top butt burger","subtext":"your face looks like a butt"},{"name":"so many fennel so little thyme burger","subtext":"Comes with lots of fennel, no thyme","price":"$5.50"},{"name":"national pass-thyme burger"},{"name":"free to brie you and me burger"},{"name":"woulda coulda gouda burger"},{"name":"you gouda be kidding me burger"},{"name":"as gouda as it gets burger"},{"name":"gouda, gouda, gumdrops burger"},{"name":"a few gouda men burger"},{"name":"gouda, gouda, two shoes burger","subtext":"It comes with shoes"},{"name":"gouda day sir burger"},{"name":"the cauliflower\'s cumin from inside the house burger","subtext":"Comes with cauliflower and cumin"},{"name":"sprouts! sprouts! sprouts it all out! burger"},{"name":"a leak of their own burger"},{"name":"gourdon-hamsey burger","subtext":"Comes with squash and ham"},{"name":"i\'m ok, you\'re ok-ra burger"},{"name":"bohemian radishy burger"},{"name":"edward james olive-most burger"},{"name":"medium snare burger"},{"name":"cage-in burger"},{"name":"is this is your chard burger"},{"name":"caper magic to yourself burger","subtext":"Comes with capers - Also, Magic doesn\'t exist"},{"name":"i don\'t bay leaf in magic burger"},{"name":"winter muensterland burger","subtext":"Comes with Muesnter cheese - Side of snow peas"},{"name":"the longest chard burger"},{"name":"kale mary burger","subtext":"Served with kale"},{"name":"the troy oinkman burger","subtext":"Served with bacon"},{"name":"it\'s only sourdough burger (but i like it)"},{"name":"enoki doki burger","subtext":"Comes with enoki mushrooms"},{"name":"i fought the slaw burger (and the slaw won)"},{"name":"charbroil fair burger","subtext":"Comes with Parsley, Sage, Rosemary, and Thyme"},{"name":"beets of te southern wild burger"},{"name":"sympathy for the deviled egg burger"},{"name":"the life of the parsley burger"},{"name":"sweet home avocado burger"},{"name":"to err is cumin burger"},{"name":"onion ring around the rosemary burger"},{"name":"sgt. poblano pepper\'s lonely artichoke hearts club burger"},{"name":"parma, parma, parma, chameleon burger","subtext":"With parmesan crisp"},{"name":"bleu by you burger","subtext":"With locally sourced bleu cheese"},{"name":"the saffron saff-off burger"},{"name":"texas chainsaw massa-curd burger"},{"name":"the human plenta-pede burger"},{"name":"kales form the crypt burger"},{"name":"paranormal pepper jack-tivity burger"},{"name":"sub-concious burger","subtext":"On a sub roll"},{"name":"romanes of the day burger"},{"name":"parsinips-vous francais burger"},{"name":"beet-er late than never"},{"name":"peas and thank you burger"},{"name":"run gorgonzola run buger","subtext":"Made with Gorgonzola"},{"name":"bet it all on black garlic burger","subtext":"Made with black garlic"},{"name":"stupid black garlic burger"},{"name":"cheeses is born burger","subtext":"Comes with baby swiss"},{"name":"cajun gracefully burger"},{"name":"blondes have more fun-gus burger","subtext":"Comes with mushrooms"},{"name":"beets of burden burger"},{"name":"blue is the warmest cheese burger"},{"name":"three beets to the wind burger"},{"name":"the grand brie burger"},{"name":"a good manchego is hard to find burger"},{"name":"the garden of e-dumb burger","subtext":"Served with crapple"},{"name":"shoestring around the rosie burger"},{"name":"let is snow peas burger"},{"name":"knife to beet you burger","subtext":"With thinly slices beets"},{"name":"i ran, so taro way burger"},{"name":"curd-fect strangers burger","subtext":"Comes with cheese curds"},{"name":"sweet chilli o\' mine burger"},{"name":"the six scallion dollar man burger"},{"name":"let\'s give\'em something shiitake \'bout burger"},{"name":"if you\'ve got it, croissant it burger"},{"name":"parm-pit burger","subtext":"Comes with Parmesan"},{"name":"scent of a cumin burger"},{"name":"she\'ll be coming \'round the plantain burger"},{"name":"take a leek burger","subtext":"Comes with sautéed leeks"},{"name":"who wants to be a scallionaire burger"},{"name":"view to a kielbasa dog"},{"name":"the yam ship burger","subtext":"Comes with yams"},{"name":"you can\'t fight city challa burger","subtext":"Comes on a Challah roll"},{"name":"snipwrecked burger","subtext":"Comes with parsnips"},{"name":"breaking radish burger","subtext":"Comes with a slice of Radish"},{"name":"the pear tree burger","subtext":"With sliced pears - partridge not included"},{"name":"cole cam, cole slaw, cole conquered burger"},{"name":"be my valen-thime burger"},{"name":"the say cheese burger"},{"name":"it takes bun to know bun burger","subtext":"Served on a fancy bun"},{"name":"heads shoulders knees and tomatoes burger"},{"name":"i\'m picklish burger","subtext":"Comes with pickles"},{"name":"runny out of thyme burger","subtext":"comes with a runny fried egg"},{"name":"total eclipse of the havarti burger"},{"name":"ring around the collar burger"},{"name":"to thine own self be bleu burger","subtext":"Served with bleu cheese"},{"name":"edamame dearest burger","subtext":"Comes with edamame"},{"name":"barley davidson burger","subtext":"Comes on a barley roll"},{"name":"captain pepper jack marrow burger"},{"name":"curry on my wayward bun burger"},{"name":"frisee it, don\'t spray it burger"},{"name":"we bought a zucchini burger"},{"name":"all in a glaze work burger","subtext":"Served with a Balsamic Glaze"},{"name":"if at first you sesame seed, thai, thai, again burger"},{"name":"turn the other leek burger"},{"name":"fig lebowski burger"},{"name":"my farro lady burger"},{"name":"chutney the front door burger","subtext":"Comes with Mango Chutney"},{"name":"you\'re kimchi the best burger"},{"name":"teriyaki a new one burger"},{"name":"aw nuts burger","subtext":"Comes with peanut butter"},{"name":"the glass fromagerie burger"},{"name":"the hand that rocks the bagel burger","subtext":"Comes with an everything bagel"},{"name":"put me in poached burger","subtext":"Comes with a poached egg"},{"name":"endive had the time of my life burger"},{"name":"you spinach me right round spinach burger"},{"name":"wasabi my guest burger"},{"name":"muenster under the bun burger"},{"name":"do fry for me argentina burger"},{"name":"i know what you did last summer squash burger"},{"name":"chilli wonka burger"},{"name":"corned identity burger","subtext":"Comes with corned beef"},{"name":"tangled up in blueberry burger","subtext":"comes with a blueberry compote"},{"name":"when harry met salami burger"},{"name":"the olives kitteridge burger","subtext":"With olive tapenade"},{"name":"away in a mango burger"},{"name":"caper the friendly goat cheese burger","subtext":"Served with capers & feta"},{"name":"video killed the radicchio star burger"},{"name":"andrew diced carrots burger","subtext":"Comes with pickled diced carrots"},{"name":"garlic shandling burger"},{"name":"little red bruschett-a burger"},{"name":"walking in a winter comes-with-cran burger","subtext":"Comes with cranberry sauce"},{"name":"stilton on the dock of the bun burger"},{"name":"it\'s my havarti and i\'ll rye if i want to"},{"name":"fingerling brothers and barnum and bay leaves burger"},{"name":"citizen kale burger"},{"name":"it takes two to mango burger"},{"name":"nothing compares 2 blue (cheese) burger"},{"name":"for those about to roquefort we salute you burger"},{"name":"the oh con-pear burger"},{"name":"the choys are bok in town burger"},{"name":"emergency eggs-it burger"},{"name":"passion of the cress burger"},{"name":"creminis and misdemeanies burger","subtext":"comes with cremini mushrooms"},{"name":"glory glory jalapeño burger"},{"name":"riding in cars with bok choys"},{"name":"pear goes the neighbourhood","subtext":"Comes with a side of pear salad"},{"name":"the blanc canvas burger","subtext":"Comes with a fromage blanc"},{"name":"topless the morning to you burger"},{"name":"weekend at bernaise burger"},{"name":"the clear and present ginger burger"},{"name":"the catch me if you cran burger","subtext":"Served with cranberry sauce"},{"name":"the ebeneezer bleu-ge burger"},{"name":"twas the nut before christmas burger","subtext":"Comes with a walnut aoli"},{"name":"the shut up and swiss me burger"},{"name":"step into the okra-tagon burger"},{"name":"havarti like it\'s 1999 burger"},{"name":"smells like bean spirit burger"},{"name":"corn this way burger"},{"name":"the sous-vide and the banshees burger"},{"name":"the full head of heir-loom tomato burger"},{"name":"the what\'s kala-mata you burger"},{"name":"the olive what she\'s having burger"},{"name":"the rosemary\'s baby spinach burger"},{"name":"the wasabi with you? burger"},{"name":"the heirloom where it happens burger"},{"name":"judy garlic burger","subtext":"Comes with garlic tapenade"},{"name":"the paprika smurf burger","subtext":"Comes with blue potato fries"},{"name":"the here i am broccoli like a hurricane burger"},{"name":"portabello the belt burger"},{"name":"walk this waioli burger","subtext":"Comes with wasabi aioli"},{"name":"shishito corleone burger","subtext":"Comes with Shishito Peppers"},{"name":"the gouda wife burger","subtext":"Comes with mature gouda"},{"name":"the sun\'ll come out to-marrow burger","subtext":"Comes with bone marrow"},{"name":"the sneakin\' celery down the alley burger","subtext":"Comes with pomegraate glaze"},{"name":"the i\'m getting too old for this shishito burger"},{"name":"the stop or my mom will shoots burger","subtext":"Topped with pea shoots"},{"name":"the dragonfruit me to hell burger"},{"name":"won\'t baguette fooled again burger"},{"name":"turmeric-a the beautiful burger"},{"name":"the finders capers burger"},{"name":"the cops and rabe-ers burger","subtext":"Topped with broccoli rabes"},{"name":"my bloody kale-entine burger"},{"name":"the absentee shallot burger","subtext":"Comes with crispy shallots"},{"name":"the land of the slaw-st burger","subtext":"Comes with pickle slaw"},{"name":"focaccia red handed burger","subtext":"On focaccia with beets"},{"name":"the frankie goes to hollandaise burger"},{"name":"the fifty glaze to eat your burger"},{"name":"the thwo your hands in the heirloom burger"},{"name":"the colby by your name burger"},{"name":"the around the wold in eighty dates burger"},{"name":"the figgy smalls burger"},{"name":"the dill crazy after all these gruyeres burger"},{"name":"the smilla\'s sense of snowpeas burger"},{"name":"the santa slaws is coming to town burger"},{"name":"the brussel and flow burger","subtext":"Served with brussel sprouts"},{"name":"the mush-aroom about nothing burger"},{"name":"the throw your hands in the gruyere burger"},{"name":"the sealed with a swiss burger"},{"name":"the two left beet burger"},{"name":"the i love you just the whey you are burger"},{"name":"the i hate to see you brie-ve but i love to watch you go burger"},{"name":"murder, kimchi wrote burger"},{"name":"the chevre little thing she does is magic burger"},{"name":"the gorgon-baby-gone burger","subtext":"Comes with gorgonzola cheese"},{"name":"the staight and marrow burger","subtext":"Comes with marrow"},{"name":"the all hot and collard burger"},{"name":"the someone raclette the bed burger","subtext":"Comes wth raclette cheese"},{"name":"the ruth tomater ginsburger","subtext":"Comes with raclette cheese"},{"name":"the devil\'s avocado-cate burger"},{"name":"the fleetwood jack burger","subtext":"Comes with sweet little pies, jack cheese"},{"name":"the judge brine-hold burger"},{"name":"one flew okra the couscous nest burger"},{"name":"lordy lordy look who\'s roquefort-y burger"},{"name":"the hickory chicory guac burger"},{"name":"the pea-brie\'s big adventure burger","subtext":"Pea protein burger with brie"},{"name":"the olive me why not take olive me? burger"},{"name":"the hunt for the red onion-tober burger"},{"name":"the what if peapod was one of us burger"},{"name":"the 28 maize later burger","subtext":"Comes with corn salsa"},{"name":"the corn-juring two burger","subtext":"Comes with even more corn salsa"},{"name":"the thousand chard stare burger","subtext":"Comes with thousand island dressing and swiss chard"},{"name":"the hawk and chickpeas burger"},{"name":"the twisted swiss-ter burger"},{"name":"the oaxaca waka waka burger","subtext":"Comes with oaxaca cheese"},{"name":"the creme fraiche prince of bell peppers"},{"name":"the fried off into the sunset burger","subtext":"Comes with a fried egg"},{"name":"the ber-gourda triangle burger"},{"name":"the mama said there\'d be glaze like this burger","subtext":"Comes with a Worcestershire glaze"},{"name":"the easy come, asiago burger"},{"name":"the random jacks of chive-ness burger","subtext":"With Monterrey Jack cheese and chives"},{"name":"the if it\'s yellow let is porobello burger","subtext":"With yellow peppers and portobello mushrooms"},{"name":"the thin red pepper burger"},{"name":"the goat tell it on the mountain burger","subtext":"Comes with goat cheese"},{"name":"the glazed and infused burger","subtext":"Bourbon glazed and infused with bacon"},{"name":"the \'shroom where it happens burger"},{"name":"the cloves encounters burger"},{"name":"in recotta da vida burger"},{"name":"nice guys spinach last burger"},{"name":"this is what it sounds like when cloves fry burger","subtext":"With fried garlic cloves"},{"name":"the happy pain patty\'s day burger","subtext":"Whiskey brushed patty"},{"name":"the hollandaise ro-o-oh-o-oh-o-oh-oh-oh-oll burger","subtext":"Comes with hollandaise sauce on a Kaiser roll"},{"name":"better cauliflower saul burger"},{"name":"the deep blue brie burger","subtext":"Comes with blue cheese and brie"},{"name":"the stayin\' a-chive burger"},{"name":"the almond butters band burger","subtext":"Comes with toasted almond butter"},{"name":"avoca-don\'t you want me baby? burger"},{"name":"take a picture fig\'ll last longer burger"},{"name":"the into thin heirloom burger"},{"name":"the bright leeks, big city burger","subtext":"Comes with grilled leeks"},{"name":"the what\'s the matter-horn burger","subtext":"With swiss cheese crisps"},{"name":"paint it blackberry burger"},{"name":"play it again yam burger"},{"name":"the night-pear on elm beet burger","subtext":"Comes with pear and beet relish"},{"name":"the bleu collard burger"},{"name":"the unbreakable kimchi schmidt burger"},{"name":"the guac! or my mom will shoot burger"},{"name":"the rye of the storm burger","subtext":"Served with a balasmic drizzle on a rye bun"},{"name":"asiago for broke burger"},{"name":"i\'m brie-ing of a white crisp-mas sliders","subtext":"Served with brie and crispy onions"},{"name":"the tikka look at me now burger"},{"name":"the for butter or for wurst burger","subtext":"With butter pickles and sausage"},{"name":"the green a little bean of me burger"},{"name":"graters of the sauced havart(i) burger"},{"name":"the pecorino on someone your own size burger","subtext":"Comes with pecorino crisps"},{"name":"the three cheeks to the wind burger","subtext":"Comes with guanicale"},{"name":"the groove is in the chard burger"},{"name":"step up 2: the beets burger"},{"name":"the mo, larry, and curry burger"},{"name":"the should i sautee or should i mango burger","subtext":"Comes with sautéed onions and mango salsa"},{"name":"do the cemini, do the thyme burger"},{"name":"parme-jean-claude van hamburger"},{"name":"the you can lead a horseradish to watercress burger"},{"name":"the brewster\'s scallions burger"},{"name":"take a bite out of lime burger","subtext":"With lime chutney"},{"name":"stilton crazy after all these gruyeres burger"},{"name":"the if i had a (pumper)nicke burger"},{"name":"the you had me at hellokra burger"},{"name":"grin and carrot burger"},{"name":"the leek-y cauldron burger"},{"name":"the marvelous mrs. basil burger"},{"name":"son of a peach-er man burger","subtext":"Comes with peach glaze"},{"name":"livin\' on  a pear burger"},{"name":"the full nettle jacket burger","subtext":"Comes with sautéed nettles"},{"name":"baby got bok choy burger"},{"name":"your cress is on my list burger","subtext":"Comes with watercress"},{"name":"i bean of greenie burger","subtext":"Comes with black bean parsley purée"},{"name":"a wrinkle in thyme burger"},{"name":"it\'s chive o\'clock some-pear burger"},{"name":"the lost in yam-slation burger"},{"name":"the challah and the chive-y burger"},{"name":"you cheddar watch out, you cheddar on rye burger"},{"name":"jingle bell peppers rock burger"},{"name":"it came upon a midnight gruyere burger"},{"name":"throw cardamom-ma from the train burger"},{"name":"don\'t dream it\'s okra burger"},{"name":"house of 1000 pork-ses burger","subtext":"Topped with ham and bacon"},{"name":"i stilton haven\'t found what thyme looking for burger"},{"name":"the rib long and prosper burger"},{"name":"the what we dill in the shadows burger"},{"name":"celery-brate good times, come on! burger"},{"name":"ready or not here i plum burger"},{"name":"the little sprouts on the prairie burger"},{"name":"burger she goat","subtext":"Comes with goat cheese"},{"name":"the leek-y tikki tavi burger"},{"name":"the sage of innocence burger"},{"name":"the mad flax curry road burger"},{"name":"the mr. smith goes to squash-ington burger"},{"name":"the i ain\'t mesclun you at all burger"},{"name":"i like walnuts and i cannot lie burger","subtext":"Comes with walnut pesto"},{"name":"mid-cucumber night\'s brie-m burger"},{"name":"dirty rotten tendrils burger","subtext":"Comes with pea tendrils, not rotten"},{"name":"cauliflow me maybe burger"},{"name":"all the world\'s a sage burger"},{"name":"the you burrata know burger"},{"name":"the kids are all rye burger"},{"name":"the take banh mi burger"},{"name":"cal-low your bliss burger","subtext":"Served with fried cauliflower"},{"name":"silence of the yams burger","subtext":"Served with a mild yam drizzle"},{"name":"guac-y horror picture show burger","subtext":"Smothered in guacamole"},{"name":"rosemary\'s baby corn burger","subtext":"With rosemary and baby corn"},{"name":"i\'m guacing here burger","subtext":"Comes with guacamole"},{"name":"surely you zest burger","subtext":"Comes with lemon zest"},{"name":"cheddar safe than chard-y burger"},{"name":"the pineapple on 34th street burger"},{"name":"the mould man and the sea burger","subtext":"Comes with blue cheese"},{"name":"the that girld is hoisin burger"},{"name":"the it\'s my parsley and i\'ll chive if i want to burger"},{"name":"the smells like poutine spirit burger"},{"name":"the olive and let rye burger"},{"name":"the romancing the prune burger"},{"name":"the edam and weep burger","subtext":"Served with edam cheese and raw onion"},{"name":"swiss-ter act 2 burger"},{"name":"rye here rye now burger"},{"name":"the chive easy peas-es burger"},{"name":"the let\'s get cheddar to rumble burger"},{"name":"the brussel-mania burger"},{"name":"the anything yuzu can do, rye can do cheddar burger"},{"name":"the plum fry with me burger"},{"name":"the mama told me gnocchi come burger"},{"name":"a leage of pear own burger"},{"name":"the burger ball pit"},{"name":"the corn identity burger","subtext":"Comes with corn relish"},{"name":"everything everywhere all at quince burger"},{"name":"the electric light okra-slaw burger"},{"name":"the good thime burger"},{"name":"broccoli rabe-in hood burger"},{"name":"mrs. krautfire burger"},{"name":"swiss congeniality burger"},{"name":"the scarlet cheddar burger","subtext":"Served with Burgandy Reduction"},{"name":"between a broc and a chard place burger"},{"name":"the curry up and wait burger"},{"name":"the hole in my heart burger","subtext":"Comes with artichoke heart chutney"},{"name":"the crying all the thyme burger"},{"name":"live to brie another day burger"},{"name":"the social swiss-stancing burger"},{"name":"the frankly gruyere i don\'t give a yam burger"},{"name":"thomas elphinstone hambledurger with manning coleslaw"},{"name":"émilie gorgonzola burger with j\'accusecumbers"}]'),p=JSON.parse('[{"name":"Regular","price":"$5.00"},{"name":"Special","price":"See board"},{"name":"Cheese","price":"Add .50"},{"name":"Fries","price":"$2.00"},{"name":"Side Salad","price":"$2.50"},{"name":"Soft Drink","price":"$2.00"},{"name":"Beer","price":"$4.00"}]'),w=JSON.parse('[{"attribution":"Gene","relation":"son","quote":"FRESH GROUND BEEF! UNUSUAL TOPPINGS!"},{"attribution":"Linda","relation":"wife","quote":"OWNED AND OPERATED BY A BEAUTIFUL FAMILY!"},{"attribution":"Tina","relation":"daughter","quote":"BOOTH SEATING."},{"attribution":"Louise","relation":"daughter","quote":"The best part about working here is my dad\'s total disregard for child labor laws. It feels great to be an accessory to a crime every single day without even trying"}]'),y=(()=>{const e=Math.floor(Math.random()*d.length);return{price:"$5.95",...d[e]}})();(()=>{document.querySelector("body").classList.add("background");const e=document.querySelector(".content"),r=document.querySelector("#Home"),t=document.querySelector("#Menu"),a=document.querySelector("#About"),n=()=>e.textContent="",o=(e,r,t,a)=>{const n=document.createElement(e);n.textContent=r,"string"==typeof a?n.classList.add(a):Array.isArray(a)&&a.forEach((e=>n.classList.add(e))),t.appendChild(n)},s=()=>{e.classList.add("flexColumnCenter"),o("h1","Bob's Burgers",e),o("h3","Conveniently located on Ocean Avenue, Seymour's Bay, New Jersey",e),o("p","Hi, I'm Bob of Bob's Burgers. Are you tired of restaurants saying, 'We have the best burgers in town'? Well, you're in luck, because I'm here to tell you that WE have the best burgers in town. Argument settled.",e,"quoteMessage");const r=document.createElement("ul");r.classList.add("quotes"),w.forEach((({attribution:e,relation:t,quote:a})=>{const n=document.createElement("li");o("p",a,n,"quote"),o("p",`-${e}, ${t}`,n,"quoteAttribution"),r.appendChild(n)})),e.appendChild(r)};r.addEventListener("click",n),r.addEventListener("click",s),t.addEventListener("click",n),t.addEventListener("click",(()=>{const r=document.createElement("div");r.classList.add("regularMenu");const t=document.createElement("ul");p.forEach((e=>((e,r)=>{const a=document.createElement("li");a.classList.add("menuItem"),o("p",e,a),o("p",r,a),t.appendChild(a)})(e.name,e.price))),r.appendChild(t),e.appendChild(r);const a=document.createElement("div");a.classList.add("chalkboard"),o("h1","BURGER",a,"specialTitle"),o("h2","OF THE DAY",a,"specialSubTitle"),o("p",y.name.toUpperCase(),a,"special"),y.subtext&&o("p",`(${y.subtext})`,a,"specialAside"),o("p",y.price,a,"specialCost"),e.appendChild(a)})),a.addEventListener("click",n),s()})()})()})();