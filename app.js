(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./src/App.js":[function(require,module,exports){
var Backbone = require('backbone');
var jquery = require('jquery');

var Router = require('./AppRouter');

var data = require('../data');

Backbone.$ = jquery;

var Airports = require('./collections/Airports');
var AppView = require('./views/AppView');

var Application = function() {

  this.airports = new Airports(data.airports);

  this.appView = new AppView({
    airports: this.airports
  });

  this.appView.render();
  new Router({airports: this.airports});
  Backbone.history.start();
};

jquery(function() {
  var application = new Application();
});

},{"../data":"/Users/lfisher/git/airport-codes/data/index.js","./AppRouter":"/Users/lfisher/git/airport-codes/src/AppRouter.js","./collections/Airports":"/Users/lfisher/git/airport-codes/src/collections/Airports.js","./views/AppView":"/Users/lfisher/git/airport-codes/src/views/AppView.js","backbone":"/Users/lfisher/git/airport-codes/node_modules/backbone/backbone.js","jquery":"/Users/lfisher/git/airport-codes/node_modules/jquery/dist/jquery.js"}],"/Users/lfisher/git/airport-codes/data/index.js":[function(require,module,exports){
module.exports={airports:[{"id":"aal","code":"aal","name":"Aalborg Lufthavn","nameEnglish":"Aalborg Airport","city":"Aalborg","city2":"Nørresundby","state":"","stateShort":"","country":"Denmark","description":"Located in the city of Nørresundby, Aalborg Airport is the third largest in Denmark and serves the city of *Aal*borg.","imageCredit":"Greg Myers","imageCreditLink":"https://www.flickr.com/photos/greg_myers/"},{"id":"aar","code":"aar","name":"Aarhus Airport","city":"Aarhus","city2":"Tirstrup","state":"","stateShort":"","country":"Denmark","description":"Originally built in 1946, Aarhus Airport has since been the “temporary” primary airport for the city of *Aar*hus, despite being located in the city of Tirstrup nearly 50 kilometers away.","imageCredit":"Ekman","imageCreditLink":"http://en.wikipedia.org/wiki/Aarhus_Airport#/media/File:Denmark-Aarhus_Airport.JPG"},{"id":"abe","code":"abe","name":"Lehigh Valley International Airport","city":"Allentown","state":"Pennsylvania","stateShort":"PA","country":"USA","description":"Opened in 1929 and still operating from its original location, Lehigh Valley International gets its airport code from its former name: *A*llentown–*B*ethlehem–*E*aston International.","imageCredit":"Lehigh Valley, PA","imageCreditLink":"https://www.flickr.com/photos/lehighvalleypa/"},{"id":"abi","code":"abi","name":"Abilene Regional Airport","city":"Abilene","state":"Texas","stateShort":"TX","country":"USA","description":"Abilene Regional dates back to the 1930s and gets its three-letter airport code from its home in the city of *Abi*lene.","imageCredit":"Abilene Regional Airport","imageCreditLink":"http://iflyabi.com/"},{"id":"abq","code":"abq","name":"Albuquerque International Sunport","city":"Albuquerque","state":"New Mexico","stateShort":"NM","country":"USA","description":"Opened in 1939, New Mexico’s largest airport gets its name and airport code from its home in *A*l*b*u*q*uerque.","imageCredit":"David Basanta","imageCreditLink":"https://www.flickr.com/photos/dbasanta/"},{"id":"acc","code":"acc","name":"Kotoka International Airport","nameEnglish":"Kotoka International Airport","city":"Accra","state":"","stateShort":"","country":"Ghana","description":"Kotoka International is named after Lieutenant General Emmanuel Kwasi Kotoka and is the only international airport in Ghana. Its airport code comes from the city it serves, *Acc*ra.","imageCredit":"Rjruiziii","imageCreditLink":"http://commons.wikimedia.org/wiki/File:Kotoka_International_Airport,_Accra,_Ghana.JPG"},{"id":"ace","code":"ace","name":"Aeropuerto de Lanzarote","nameEnglish":"Lanzarote Airport","city":"Lanzarote","city2":"Arrecife","city3":"San Bartolomé","state":"Canary Islands","country":"Spain","description":"Lanzarote Airport began accepting civil traffic in 1946. It serves the island of Lanzarote and gets its airport code from the nearby city of *A*rre*c*if*e*.","imageCredit":"unai Pascual Loyarte","imageCreditLink":"https://www.flickr.com/photos/unaipascual/"},{"id":"ack","code":"ack","name":"Nantucket Memorial Airport","city":"Nantucket","state":"Massachusetts","stateShort":"MA","country":"USA","description":"When airport codes switched from two letters to three, the U.S. Navy reserved all codes starting with ‘N’. N*a*ntu*ck*et Memorial, then, used other letters in its name to get ACK.","imageCredit":"thisisbossi","imageCreditLink":"https://www.flickr.com/photos/thisisbossi/"},{"id":"add","code":"add","name":"Addis Ababa Bole International Airport","city":"Addis Ababa","city2":"Bole","state":"","stateShort":"","country":"Ethiopia","description":"Formerly Haile Selassie I Airport, Addis Ababa Bole International is located in the subcity of Bole and serves the capital city of *Add*is Ababa.","imageCredit":"Vob08","imageCreditLink":"http://en.wikipedia.org/wiki/Addis_Ababa_Bole_International_Airport#/media/File:Bole_international_airport.jpg"},{"id":"adl","code":"adl","name":"Adelaide Airport","city":"Adelaide","state":"South Australia","stateShort":"SA","country":"Australia","description":"First established in 1955, the main airport for Adelaide, Australia gets its airport code from its home in *AD*e*L*aide.","imageCredit":"Georgie Sharp","imageCreditLink":"https://www.flickr.com/photos/georgiesharp/"},{"id":"aep","code":"aep","name":"Aeroparque Jorge Newbery","nameEnglish":"Jorge Newbery Airfield","city":"Buenos Aires","city2":"Palermo","country":"Argentina","description":"Jorge Newbery Airfield serves as the main airport for the city of Buenos Aires and is named after an Argentine aviator. Its airport code comes from its Spanish name *Ae*ro*p*arque Jorge Newbery.","imageCredit":"Erik Araújo","imageCreditLink":"https://www.flickr.com/photos/pzado/"},{"id":"aer","code":"aer","name":"Sochi International Airport","city":"Sochi","state":"","stateShort":"","country":"Russia","description":"Sochi International served as the main airport for the 22nd Winter Olympics held in Sochi in 2014. Its airport code comes from its home in the *A*dl*er*sky District.","imageCredit":"Stefan Krasowski","imageCreditLink":"https://www.flickr.com/photos/rapidtravelchai/"},{"id":"aes","code":"aes","name":"Ålesund lufthavn, Vigra","nameEnglish":"Ålesund Airport, Vigra","city":"Ålesund","city2":"Vigra","country":"Norway","description":"Officially opened in 1958, Ålesund Airport is located on the island of Vigra and serves the city of *Å*l*es*und.","imageCredit":"Algkalv","imageCreditLink":"http://en.wikipedia.org/wiki/%C3%85lesund_Airport,_Vigra#/media/File:Alesund-lufthavn.jpg"},{"id":"aga","code":"aga","name":"Agadir–Al Massira Airport","city":"Agadir","state":"","stateShort":"","country":"Morocco","description":"With a capacity of 3 million travelers per year, Agadir – Al Massira Airport gets its airport code from the city of *Aga*dir.","imageCredit":"mhobl","imageCreditLink":"https://www.flickr.com/photos/87106931@N00/"},{"id":"agb","code":"agb","name":"Flughafen Augsburg","nameEnglish":"Augsburg Airport","city":"Augsburg","city2":"Affing","country":"Germany","description":"Originally opened in 1968, Augsburg Airport is located in Affing and serves the city of *A*u*g*s*b*urg.","imageCredit":"Markus Wichmann","imageCreditLink":"https://www.flickr.com/photos/m2w2/"},{"id":"agp","code":"agp","name":"Aeropuerto de Málaga-Costa del Sol","nameEnglish":"Málaga–Costa del Sol Airport","city":"Málaga","city2":"Costa del Sol","state":"","stateShort":"","country":"Spain","description":"Located in Málaga, Costa del Sol Airport didn’t think MAL was a good option as “mal” means “bad” in Spanish. Instead, it opted to use letters from Mál*ag*a and a filler letter ‘*P*’.","imageCredit":"Elliott Brown","imageCreditLink":"https://www.flickr.com/photos/ell-r-brown/"},{"id":"ags","code":"ags","name":"Augusta Regional Airport","city":"Augusta","state":"Georgia","stateShort":"GA","country":"USA","description":"First established as a flight school for the U.S. military, Augusta Regional has become a significant hub for the Central Savannah River Area (CSRA). Its airport code comes from the city of *A*u*g*u*s*ta.","imageCredit":"J. Stephen Conn","imageCreditLink":"https://www.flickr.com/photos/jstephenconn/"},{"id":"ajl","code":"ajl","name":"Lengpui Airport","city":"Aizawl","city2":"Aijal","state":"Mizoram","stateShort":"MZ","country":"India","description":"Lengpui Airport gets its name from the nearby Lengpui Village. Its airport code comes from an alternate spelling of its home city of Aizawl: *A*i*j*a*l*.","imageCredit":"Tluanga Colney","imageCreditLink":"http://commons.wikimedia.org/wiki/File:Lengpui_Airport_Building.JPG"},{"id":"akl","code":"akl","name":"Auckland Airport","city":"Auckland","city2":"Mangere","state":"","stateShort":"","country":"New Zealand","description":"Once the site for the Mangere Aerodrome, New Zealand’s busiest airport is located in Mangere, a suburb of *A*uc*kl*and.","imageCredit":"mario_ruckh","imageCreditLink":"https://www.flickr.com/photos/ruckh/"},{"id":"ala","code":"ala","name":"Almaty International Airport","city":"Almaty","city2":"Алматы","state":"","stateShort":"","country":"Kazakhstan","description":"Almaty International is Kazakhstan’s largest international airport. It is located 15km northeast from the city of Almaty and was formerly known as *Al*ma-*A*ta Airport.","imageCredit":"Vmenkov","imageCreditLink":"http://commons.wikimedia.org/wiki/Category:Almaty_International_Airport#/media/File:E8643-Almaty-Airport.jpg"},{"id":"alb","code":"alb","name":"Albany International Airport","city":"Albany","city2":"Colonie","state":"New York","stateShort":"NY","country":"USA","description":"*Alb*any International was the first municipal airport in the United States. It is the major air center for the Capital Region, northeastern New York, and western New England.","imageCredit":"Alan Levine","imageCreditLink":"https://www.flickr.com/photos/cogdog/"},{"id":"alc","code":"alc","name":"Aeropuerto de Alicante-Elche","nameEnglish":"Alicante–Elche Airport","city":"Alicante","city2":"Elche","city3":"Valencia","state":"","stateShort":"","country":"Spain","description":"Originally named El Altet, Alicante–Elche Airport is the sixth busiest airport in Spain. Located in Elche, it serves the cities of Valencia, Murica, and *Al*i*c*ante.","imageCredit":"Paul Thompson","imageCreditLink":"https://www.flickr.com/photos/redspike/"},{"id":"alg","code":"alg","name":"Houari Boumediene Airport","city":"Algiers","country":"Algeria","description":"Opened in 1924 as Maison Blanche Airport, Houari Boumediene Airport is now named after a former President of Algeria. Its airport code honors its home in the city of *Alg*iers.","imageCredit":"Poudou99","imageCreditLink":"http://en.wikipedia.org/wiki/Houari_Boumediene_Airport#/media/File:Aeroport_Houari_Boumediene_IMG_1381.JPG"},{"id":"amd","code":"amd","name":"Sardar Vallabhbhai Patel International Airport","city":"Ahmedabad","state":"Gujarat","stateShort":"GJ","country":"India","description":"Sardar Vallabhbhai Patel International is named after India’s first Deputy Prime Minister. Its airport code honors its home in the beautiful city of *A*h*m*e*d*abad.","imageCredit":"Htrapj","imageCreditLink":"http://en.wikipedia.org/wiki/File:AMD2.jpg"},{"id":"amm","code":"amm","name":"Queen Alia International Airport","city":"Amman","city2":"Zizya","state":"","stateShort":"","country":"Jordan","description":"Named after Queen Alia, third wife to the late King Hussein, Jordan’s largest airport is located in Zizya, 30 km (20 mi) south of the capital city of *Amm*an.","imageCredit":"Rajesh Pamnani","imageCreditLink":"https://www.flickr.com/photos/74821492@N00/"},{"id":"ams","code":"ams","name":"Luchthaven Schiphol","nameEnglish":"Amsterdam Airport Schiphol","city":"Amsterdam","city2":"Haarlemmermeer","city3":"Schiphol","state":"","stateShort":"","country":"Netherlands","description":"The name “Schiphol” came from the nearby Fort Schiphol, which translates to “ship grave” in English. Its airport code honors the city of *Ams*terdam.","imageCredit":"Wayne Taylor","imageCreditLink":"https://www.flickr.com/photos/wonderwheel/"},{"id":"anc","code":"anc","name":"Ted Stevens Anchorage International Airport","city":"Anchorage","state":"Alaska","stateShort":"AK","country":"USA","description":"In 2009, Anchorage International was renamed to honor U.S. Senator Ted Stevens, but its airport code still honors its home in *Anc*horage.","imageCredit":"Frank Kovalchek","imageCreditLink":"https://www.flickr.com/photos/72213316@N00/"},{"id":"anr","code":"anr","name":"Internationale Luchthaven Antwerpen","nameEnglish":"Antwerp International Airport","city":"Antwerp","city2":"Antwerpen","city3":"Deurne","state":"","stateShort":"","country":"Belgium","description":"Antwerp International is a small scale airport serving Belgium’s second biggest city. Its airport code refers directly to the city of *An*twe*r*p.","imageCredit":"Stijn Hosdez","imageCreditLink":"https://www.flickr.com/photos/shosdez/"},{"id":"anu","code":"anu","name":"V. C. Bird International Airport","city":"Saint John’s","country":"Antigua and Barbuda","description":"Built in 1942 by the U.S. Army as Coolidge Airfield, V. C. Bird International was renamed in 1985 in honor of the country’s first Prime Minister, Vere Cornwall Bird Sr. Its airport code comes from the island’s name, *An*tig*u*a.","imageCredit":"Lee Bryant","imageCreditLink":"https://www.flickr.com/photos/alihodza/"},{"id":"aoi","code":"aoi","name":"Aeroporto Raffaello Sanzio di Ancona-Falconara ","nameEnglish":"Ancona Falconara Raffaello Sanzio Airport","city":"Ancona","city2":"Falconara Marittima","country":"Italy","description":"Raffaello Sanzio Airport is named after the famous Renaissance artist, internationally known as Raphael. Located in Falconara Marittima, it serves the city of *A*nc*o*na, *I*taly.","imageCredit":"Turismo Marche","imageCreditLink":"https://www.flickr.com/photos/turismomarche/"},{"id":"apa","code":"apa","name":"Centennial Airport","city":"Denver","city2":"Aurora","city3":"Dove Valley","state":"Colorado","stateShort":"CO","country":"USA","description":"Centennial Airport serves the Denver-Aurora metro area in Colorado. It is located in the town of Dove Valley and was previously known *A*ra*pa*hoe County Airport.","imageCredit":"Jeffrey Beall","imageCreditLink":"https://www.flickr.com/photos/denverjeffrey/"},{"id":"aqj","code":"aqj","name":"King Hussein International Airport","city":"Aqaba","country":"Jordan","description":"King Hussein International is located within a 15-mile radius of Egypt, Saudi Arabia, and Israel. Its airport code honors its home in the city of *Aq*aba, *J*ordan.","imageCredit":"M7madameenwik","imageCreditLink":"http://en.wikipedia.org/wiki/King_Hussein_International_Airport#/media/File:King_hussein_international_airport.jpg"},{"id":"aqp","code":"aqp","name":"Aeropuerto Internacional Alfredo Rodríguez Ballón","nameEnglish":"Alfredo Rodríguez Ballón International Airport","city":"Arequipa","state":"","stateShort":"","country":"Peru","description":"Alfredo Rodríguez Ballón International shares its name with the Peruvian aviator. Its airport code honors its home in the city of *A*re*q*ui*p*a.","imageCredit":"Goss Nuzzo-Jones","imageCreditLink":"https://www.flickr.com/photos/gossnj/"},{"id":"arn","code":"arn","name":"Stockholm-Arlanda flygplats","nameEnglish":"Stockholm Arlanda Airport","city":"Stockholm","city2":"Märsta","city3":"Arlanda","state":"","stateShort":"","country":"Sweden","description":"Stockholm’s airport is named *Ar*la*n*da, a made-up word combining “Arland”, another name for the nearby parish of Ärlinghundra, and “landa”, Swedish verb meaning “to land.”","imageCredit":"Samuel Bietenholz","imageCreditLink":"https://www.flickr.com/photos/sunnyshine80/"},{"id":"ase","code":"ase","name":"Aspen–Pitkin County Airport","city":"Aspen","state":"Colorado","stateShort":"CO","country":"USA","description":"Officially dedicated in 1958, Aspen–Pitkin County Airport is also called Sardy Field, named after Commissioner Thomas J. Sardy. Its airport code comes from its home in the city of *As*p*e*n.","imageCredit":"Harper Reed","imageCreditLink":"https://www.flickr.com/photos/natatwo/"},{"id":"ath","code":"ath","name":"Diethnís Aeroliménas Athinón “Elefthérios Venizélos”","nameEnglish":"Athens International Airport “Eleftherios Venizelos”","city":"Athens","state":"","stateShort":"","country":"Greece","description":"Eleftherios Venizelos Airport is named after the Cretan political leader and Prime Minister of Greece who pushed the development of Greek aviation. Its airport code comes from the capital city of *Ath*ens.","imageCredit":"Dinos","imageCreditLink":"https://www.flickr.com/photos/netuser/"},{"id":"atl","code":"atl","name":"Hartsfield–Jackson International Airport","city":"Atlanta","state":"Georgia","stateShort":"GA","country":"USA","description":"The Hartsfield-Jackson Airport honors former mayors Maynard Jackson and William B. Hartsfield. The airport code honors *Atl*anta and has become the city’s beloved nickname.","imageCredit":"Jon Tan","imageCreditLink":"https://www.flickr.com/photos/jontangerine/"},{"id":"atq","code":"atq","name":"Sri Guru Ram Das Jee International Airport","city":"Amritsar","state":"Punjab","stateShort":"PB","country":"India","description":"Sri Guru Ram Das Jee International is named after Guru Ram Das, the fourth Sikh Guru and founder of the city of *A*mri*t*sar. Its code is completed by the letter ‘*Q*’, often used as a filler letter.","imageCredit":"Jliptoid","imageCreditLink":"https://www.flickr.com/photos/27629453@N06/"},{"id":"aua","code":"aua","name":"Internationale luchthaven Koningin Beatrix","nameEnglish":"Queen Beatrix International Airport","city":"Oranjestad","state":"Netherlands","country":"Aruba","description":"Queen Beatrix International is named after Princess Beatrix of the Netherlands, former Queen and head of state. Located in the capital city of Oranjestad, it serves the island of *A*r*u*b*a*.","imageCredit":"David Amundsen","imageCreditLink":"https://www.flickr.com/photos/dmamundsen/"},{"id":"auh","code":"auh","name":"Abu Dhabi International Airport","city":"Abu Dhabi","state":"","stateShort":"","country":"United Arab Emirates","description":"In 1982, Abu Dhabi International replaced Al Bateen Airport as the primary airport for the city of *A*b*u* D*h*abi.","imageCredit":"Marco Zanferrari","imageCreditLink":"https://www.flickr.com/photos/tuttotutto/"},{"id":"aus","code":"aus","name":"Austin–Bergstrom International Airport","city":"Austin","state":"Texas","stateShort":"TX","country":"USA","description":"Once the location for Bergstrom Air Force Base (BSM), *Aus*tin-Bergstrom Airport opened in 1999 and took the airport code AUS from Mueller Airport which closed that same year.","imageCredit":"Jon Collier","imageCreditLink":"https://www.flickr.com/photos/imnotquitejack/"},{"id":"avl","code":"avl","name":"Asheville Regional Airport","city":"Asheville","state":"North Carolina","stateShort":"NC","country":"USA","description":"Opened in 1961, Asheville Regional is located near the town of Fletcher and serves the city of *A*she*v*il*l*e.","imageCredit":"redlegsfan21","imageCreditLink":"https://www.flickr.com/photos/redlegsfan21/"},{"id":"avp","code":"avp","name":"Wilkes-Barre/Scranton International Airport","city":"Avoca","city2":"Scranton","state":"Pennsylvania","stateShort":"PA","country":"USA","description":"Granted “international” status in 1975, Wilkes-Barre/Scranton International serves the cities of Wilkes-Barre and Scranton, but is located in the city of *Av*oca, *P*ennsylvania.","imageCredit":"Vasiliy Meshko","imageCreditLink":"http://en.wikipedia.org/wiki/Wilkes-Barre/Scranton_International_Airport#/media/File:KAVP_pano.jpg"},{"id":"aza","code":"aza","name":"Phoenix-Mesa Gateway Airport","city":"Phoenix","city2":"Mesa","state":"Arizona","stateShort":"AZ","country":"USA","description":"Formerly named after 1st Lt. Charles Williams of the U.S. Army Air Corps, Phoenix-Mesa Gateway is the lucky airport whose airport code honors its home state of *A*ri*z*on*a*.","imageCredit":"David Crummey","imageCreditLink":"https://www.flickr.com/photos/dcrummey/"},{"id":"azo","code":"azo","name":"Kalamazoo/Battle Creek International Airport","city":"Kalamazoo","city2":"Battle Creek","state":"Michigan","stateShort":"MI","country":"USA","description":"The FCC restricted U.S. airport codes from beginning with the letters ‘W’ and ‘K’, reserving them for radio station designations. Kalamazoo/Battle Creek International opted, then, to use other letters from K*a*lama*zo*o.","imageCredit":"not_Aaron","imageCreditLink":"https://www.flickr.com/photos/mtmra70/"},{"id":"bah","code":"bah","name":"Bahrain International Airport","city":"Muharraq","country":"Bahrain","description":"Located on Muharraq Island, Bahrain Airport became the first international airport in the Persian Gulf in 1932. It serves the entire country of *Bah*rain.","imageCredit":"yosoynuts","imageCreditLink":"https://www.flickr.com/photos/yosoynuts/"},{"id":"bal","code":"bal","name":"Batman Havaalanı","nameEnglish":"Batman Airport","city":"Batman","country":"Turkey","description":"Batman Airport is a civil-military airport serving the city of Batman in *Ba*tman i*l*i, Turkey.","imageCredit":"Ümit Kılıç","imageCreditLink":"https://www.flickr.com/photos/97094516@N05/"},{"id":"baq","code":"baq","name":"Aeropuerto Internacional Ernesto Cortissoz","nameEnglish":"Ernesto Cortissoz International Airport","city":"Barranquilla","city2":"Soledad","country":"Colombia","description":"Dedicated in 1981, Ernesto Cortissoz International is named after Ernesto Cortissoz, Colombian aviation pioneer. It is located in the suburb of Soledad and serves the city of *Ba*rran*q*uilla.","imageCredit":"Jdvillalobos","imageCreditLink":"http://en.wikipedia.org/wiki/Ernesto_Cortissoz_International_Airport#/media/File:30_mar_08_-_Torre_de_Control_Aeropuerto_Ernesto_Cortissoz.jpg"},{"id":"bcn","code":"bcn","name":"Aeropuerto de Barcelona-El Prat","nameEnglish":"Barcelona–El Prat Airport","city":"Barcelona","city2":"El Prat de Llobregat","state":"","stateShort":"","country":"Spain","description":"Barcelona’s first airfield was built in 1916, but a new location in El Prat was chosen in 1918. The airport now uses the code BCN which stands for *B*ar*c*elo*n*a.","imageCredit":" Camilo Rueda López","imageCreditLink":"https://www.flickr.com/photos/kozumel/"},{"id":"bdl","code":"bdl","name":"Bradley International Airport","city":"Hartford","city2":"Windsor Locks","city3":"Springfield","state":"Connecticut","stateShort":"CT","country":"USA","description":"Originally a National Guard air base during World War II, Bradley International is named after U.S. Air Force Lieutenant Eugene M. *B*ra*dl*ey.","imageCredit":"Pixel","imageCreditLink":"https://www.flickr.com/photos/improbcat/"},{"id":"bdo","code":"bdo","name":"Bandar Udara Internasional Husein Sastranegara","nameEnglish":"Husein Sastranegara International Airport","city":"Bandung","state":"West Java","stateShort":"","country":"Indonesia","description":"Husein Sastranegara International was built by Dutch settlers and named after Husein Sastranegara, aviator from West Java. Its airport code comes from an old spelling of the city of Bandung: *B*an*DO*eng.","imageCredit":"Ikhlasul Amal","imageCreditLink":"https://www.flickr.com/photos/ikhlasulamal/"},{"id":"bed","code":"bed","name":"Laurence G. Hanscom Field","city":"Bedford","state":"Massachusetts","stateShort":"MA","country":"USA","description":"Laurence G. Hanscom Field is named after a local aviator who was killed in a plane crash in 1941. Its airport code comes from its home in the city of *Bed*ford.","imageCredit":"Chris Devers","imageCreditLink":"https://www.flickr.com/photos/cdevers/"},{"id":"beg","code":"beg","name":"Aerodrom Beograd - Nikola Tesla","nameEnglish":"Belgrade Nikola Tesla Airport","city":"Belgrade","state":"","stateShort":"","country":"Serbia","description":"Previously known as *Be*l*g*rade Airport or Surčin Airport, it was renamed in 2006 in honor of Serbian scientist and inventor Nikola Tesla. It is the busiest airport in the former Yugoslavia.","imageCredit":"Paradasos","imageCreditLink":"https://www.flickr.com/photos/paradasos/"},{"id":"bey","code":"bey","name":"Beirut–Rafic Hariri International Airport","city":"Beirut","state":"","stateShort":"","country":"Lebanon","description":"Located in the suburbs of Beirut, Lebanon’s only commercial airport gets its three-letter airport code from the French spelling of Beirut: *Bey*routh.","imageCredit":"chuck holton","imageCreditLink":"https://www.flickr.com/photos/rangerholton/"},{"id":"bfi","code":"bfi","name":"King County International Airport / Boeing Field","city":"Seattle","state":"Washington","stateShort":"WA","country":"USA","description":"King County International is located in Seattle, Washington and is also known as *B*oeing *Fi*eld, named after William E. Boeing, founder of The Boeing Company.","imageCredit":"King County, WA","imageCreditLink":"https://www.flickr.com/photos/kingcounty/"},{"id":"bfs","code":"bfs","name":"Belfast International Airport","city":"Belfast","city2":"Aldergrove","state":"Northern Ireland","stateShort":"","country":"UK","description":"Formerly named and commonly still called Aldergrove Airport, *B*el*f*a*s*t International is located between the villages of Killead and Aldergrove. It is the busiest airport in Northern Ireland.","imageCredit":"NATS Press Office","imageCreditLink":"https://www.flickr.com/photos/natspressoffice/"},{"id":"bgi","code":"bgi","name":"Grantley Adams International Airport","city":"Bridgetown","city2":"Seawell","city3":"Christ Church","state":"","stateShort":"","country":"Barbados","description":"Grantley Adams International is named after the founder of the Barbados Labour Party. Located in the Seawell area of Bridgetown, its airport code stands for *B*rid*g*etown *I*nternational.","imageCredit":"Dick Pountain","imageCreditLink":"https://www.flickr.com/photos/dick_pountain/"},{"id":"bgo","code":"bgo","name":"Bergen lufthavn, Flesland","nameEnglish":"Bergen Airport, Flesland","city":"Bergen","city2":"Flesland","country":"Norway","description":"Opened in 1955, Bergen Airport is located in the village of Flesland and is the second busiest airport in Norway. Its airport code comes from *B*er*g*en and the ‘O’ could come from N*o*rway, but is likely a filler letter.","imageCredit":"Arne Halvorsen","imageCreditLink":"https://www.flickr.com/photos/arne-halvorsen/"},{"id":"bgr","code":"bgr","name":"Bangor International Airport","city":"Bangor","state":"Maine","stateShort":"ME","country":"USA","description":"Originally known as Godfrey Field, Bangor International was an army air field during and after World War II. Its airport code comes from its home in *B*an*g*o*r*.","imageCredit":"Tim Rodenberg","imageCreditLink":"https://www.flickr.com/photos/sheriffaj/"},{"id":"bgw","code":"bgw","name":"Baghdad International Airport","city":"Baghdad","country":"Iraq","description":"Baghdad Airport was formerly named after Saddam Hussein and used the code SDA. When the named changed, its airport code changed to BGW, which previously referred to all *B*a*g*hdad airports. The ‘*W*’ is a filler letter.","imageCredit":"toyohara","imageCreditLink":"https://www.flickr.com/photos/toyohara/"},{"id":"bgy","code":"bgy","name":"Aeroporto di Bergamo-Orio al Serio Il Caravaggio","nameEnglish":"Il Caravaggio International Airport","city":"Bergamo","city2":"Orio al Serio","city3":"Milan","country":"Italy","description":"Il Caravaggio International is named after the famous Baroque painter. It is located in the comune of Orio al Serio, near the city of *B*er*g*amo. The ‘*Y*’ in BGY likely comes from Lombard*y* or Ital*y*.","imageCredit":"Cha già José","imageCreditLink":"https://www.flickr.com/photos/chagiajose/"},{"id":"bhd","code":"bhd","name":"George Best Belfast City Airport","city":"Belfast","state":"Northern Ireland","stateShort":"","country":"UK","description":"Opened in 1983, George Best Belfast City Airport was renamed in 2006 in honor of the Northern Irish footballer George Best. It was originally known as *B*elfast *H*arbour Airport, located in County *D*own.","imageCredit":"Gwydion M. Williams","imageCreditLink":"https://www.flickr.com/photos/45909111@N00/"},{"id":"bhm","code":"bhm","name":"Birmingham–Shuttlesworth International Airport","city":"Birmingham","state":"Alabama","stateShort":"AL","country":"USA","description":"Birmingham-Shuttlesworth International shares its name with Alabama civil rights activist Fred Shuttlesworth, but it gets its airport code from its home in *B*irming*h*a*m*.","imageCredit":"mary","imageCreditLink":"https://www.flickr.com/photos/maryatuab/"},{"id":"bhx","code":"bhx","name":"Birmingham Airport","city":"Birmingham","state":"England","stateShort":"","country":"UK","description":"Many airports use the letter ‘X’ to fill in when the desired letters are already taken. Previously Elmdon Airport, *B*irming*h*am Airport’s name gives us the first two letters plus that helpful ‘*X*’.","imageCredit":"Martin Hartland","imageCreditLink":"https://www.flickr.com/photos/martin_hartland/"},{"id":"bio","code":"bio","name":"Aeropuerto de Bilbao","nameEnglish":"Bilbao Airport","city":"Bilbao","city2":"Biscay","state":"","stateShort":"","country":"Spain","description":"Opened for passenger travel in 1948, Bilbao Airport serves the Basque Country and northern Spain from the city of *Bi*lba*o*.","imageCredit":" Kent Wang","imageCreditLink":"https://www.flickr.com/photos/kentwang/"},{"id":"bjc","code":"bjc","name":"Rocky Mountain Metropolitan Airport","city":"Denver","state":"Colorado","stateShort":"CO","country":"USA","description":"Renamed in 2006, Rocky Mountain Metropolitan Airport serves the Denver area and gets its airport code from the nearby town of *B*roomfield in *J*efferson *C*ounty.","imageCredit":"M Lane","imageCreditLink":"https://www.flickr.com/photos/mflane/"},{"id":"bkf","code":"bkf","name":"Lake Brooks Seaplane Base","city":"Katmai National Park","city2":"Brooks Camp","city3":"Lake and Peninsula Borough","state":"Alaska","stateShort":"AK","country":"USA","description":"Lake Brooks Seaplane Base is a seaplane landing area on Naknek Lake in Katmai National Park. Its airport code comes from the nearby *B*roo*k*s *F*alls.","imageCredit":"Mark Stevens","imageCreditLink":"https://www.flickr.com/photos/14723335@N05/"},{"id":"bki","code":"bki","name":"Lapangan Terbang Antarabangsa Kota Kinabalu","nameEnglish":"Kota Kinabalu International Airport","city":"Kota Kinabalu","state":"Sabah","stateShort":"","country":"Malaysia","description":"Kota Kinabalu International is Malaysia’s second-busiest airport. Its airport code comes from its location on *B*orneo and in the city of Kota *Ki*nabalu.","imageCredit":"aeab","imageCreditLink":"https://www.flickr.com/photos/aeab/"},{"id":"bkk","code":"bkk","name":"Suvarnabhumi Airport","city":"Bangkok","state":"","stateShort":"","country":"Thailand","description":"Suvarnabhumi Airport was named by King Bhumibol Adulyadej after the mythical golden kingdom said to be located in Southeast Asia. Its airport code comes from the capital city of *B*ang*k*o*k*.","imageCredit":"Roger Price","imageCreditLink":"https://www.flickr.com/photos/83555001@N00"},{"id":"bko","code":"bko","name":"Aéroport international de Bamako–Sénou","nameEnglish":"Bamako–Sénou International Airport","city":"Bamako","country":"Mali","description":"Opened in 1974, Sénou International gets its three-letter airport code from its home in the capital city of *B*ama*ko*.","imageCredit":"PetterLundkvist","imageCreditLink":"http://en.wikipedia.org/wiki/Bamako%E2%80%93S%C3%A9nou_International_Airport#/media/File:Entrance_to_terminal_building_at_Bamako-S%C3%A9nou_International_Airport.jpg"},{"id":"blk","code":"blk","name":"Blackpool Airport","city":"Blackpool","state":"England","country":"UK","description":"Located on the coast of Lancashire, Blackpool Airport was formerly known as Squires Gate Airport. Its airport code comes from the city of *Bl*ac*k*pool.","imageCredit":"jay-jerry","imageCreditLink":"https://www.flickr.com/photos/jayjerry/"},{"id":"blr","code":"blr","name":"Kempegowda International Airport","city":"Bengaluru","city2":"Bangalore","city3":"Devanahalli","state":"Karnataka","stateShort":"KA","country":"India","description":"Kempegowda International was renamed in 2013 to honor the city’s founder, Kempe Gowda I. Its airport code comes from a former spelling of Bengaluru: *B*anga*l*o*r*e.","imageCredit":"Ramesh NG","imageCreditLink":"https://www.flickr.com/photos/rameshng/"},{"id":"bma","code":"bma","name":"Stockholm-Bromma flygplats","nameEnglish":"Stockholm Bromma Airport","city":"Stockholm","city2":"Bromma","state":"","stateShort":"","country":"Sweden","description":"Opened in 1936, Stockholm Bromma Airport serves the city of Stockholm and is located in the borough of *B*rom*ma*.","imageCredit":"Helen Simonsson","imageCreditLink":"https://www.flickr.com/photos/hesim/"},{"id":"bmi","code":"bmi","name":"Central Illinois Regional Airport","city":"Bloomington","state":"Illinois","stateShort":"IL","country":"USA","description":"Previously know as Bloomington/Normal Airport, Central Illinois Regional was renamed in 1996 to reflect its central location. Its airport code honors its home in *B*loo*mi*ngton.","imageCredit":"Kent Kanouse","imageCreditLink":"https://www.flickr.com/photos/kkanouse"},{"id":"bna","code":"bna","name":"Nashville International Airport","city":"Nashville","state":"Tennessee","stateShort":"TN","country":"USA","description":"Nashville International was originally named after Colonel Harry S. Berry. Codes with first letter ‘N’ were reserved for the U.S. Navy, so it used *B*erry Field *Na*shville to get BNA.","imageCredit":"Shooting Chris","imageCreditLink":"https://www.flickr.com/photos/shootingchris/"},{"id":"bne","code":"bne","name":"Brisbane Airport","city":"Brisbane","state":"Queensland","stateShort":"QLD","country":"Australia","description":"Opened in 1988, Brisbane Airport replaced Eagle Farm Airport as the primary airport serving the city of *B*risba*ne* in Queensland.","imageCredit":"Andrew Sutherland","imageCreditLink":"https://www.flickr.com/photos/fishyone1/"},{"id":"bog","code":"bog","name":"Aeropuerto Internacional El Dorado","nameEnglish":"El Dorado International Airport","city":"Bogotá","state":"","stateShort":"","country":"Colombia","description":"El Dorado International may be named after the mythical city of gold, but its airport code comes from its home in *Bog*otá.","imageCredit":"Stephen Downes","imageCreditLink":"https://www.flickr.com/photos/stephen_downes/"},{"id":"boh","code":"boh","name":"Bournemouth Airport","city":"Bournemouth","city2":"Hurn","state":"England","stateShort":"","country":"UK","description":"Started during World War II, RAF Hurn was renamed in 1969 to *Bo*urnemout*h* Airport after the nearby town in southern England.","imageCredit":"Dean Morley","imageCreditLink":"https://www.flickr.com/photos/33465428@N02/"},{"id":"boi","code":"boi","name":"Boise Airport","city":"Boise","state":"Idaho","stateShort":"ID","country":"USA","description":"Originally named (and often still called) Gowen Field, Boise Airport honored U.S. Army 1st Lieutenant Paul R. Gowen. Its airport code honors its home in *Boi*se.","imageCredit":"Mark Hillary","imageCreditLink":"https://www.flickr.com/photos/markhillary/"},{"id":"bom","code":"bom","name":"Chhatrapati Shivaji International Airport","city":"Mumbai","state":"Maharashtra","stateShort":"MH","country":"India","description":"The Mumbai airport was previously named Sahar International, but it gets its three-letter code from the city’s former English name, *Bom*bay, changed in 1995.","imageCredit":"Chris Hoare","imageCreditLink":"https://www.flickr.com/photos/u07ch/"},{"id":"bos","code":"bos","name":"Logan International Airport","city":"Boston","city2":"Paradise","state":"Massachusetts","stateShort":"MA","country":"USA","description":"Formerly Jeffery Field, Logan Airport was renamed in 1943 to honor Edward Lawrence Logan, U.S. Army Lt. General and MA state representative. Its airport code honors its home in *Bos*ton.","imageCredit":"Andrew Malone","imageCreditLink":"https://www.flickr.com/photos/andrewmalone/"},{"id":"bpn","code":"bpn","name":"Bandar Udara Internasional Sultan Aji Muhammad Sulaiman","nameEnglish":"Sultan Aji Muhammad Sulaiman International Airport","city":"Balikpapan","city2":"East Kalimantan","state":"","stateShort":"","country":"Indonesia","description":"Sultan Aji Muhammad Sulaiman International, formerly Sepinggan Airport, is the busiest airport in Kalimantan. It serves the nearby city of *B*alik*p*apa*n*.","imageCredit":"Rizki Aftarianto","imageCreditLink":"https://www.flickr.com/photos/rizuki/"},{"id":"bre","code":"bre","name":"Flughafen Bremen","nameEnglish":"Bremen Airport","city":"Bremen","country":"Germany","description":"Opened in 1920 and originally called Neuenlander Feld, *Bre*men Airport serves as a starting point for commercial pilot careers at Lufthansa.","imageCredit":"Peronimo","imageCreditLink":"https://www.flickr.com/photos/peronimo/"},{"id":"brq","code":"brq","name":"Letiště Brno–Tuřany","nameEnglish":"Brno–Tuřany Airport","city":"Brno","city2":"Tuřany","country":"Czech Republic","description":"Built in the 1950s, Brno–Tuřany Airport gets its airport code from the city of *Br*no, plus a helpful ‘*Q*’ as a filler letter.","imageCredit":"Eugene Tarasov","imageCreditLink":"https://www.flickr.com/photos/eugeneti/"},{"id":"brs","code":"brs","name":"Bristol Airport","city":"Bristol","city2":"Lulsgate Bottom","state":"England","stateShort":"","country":"UK","description":"Used as RAF Lulsgate Bottom during World War II, Bristol Airport is located at Lulsgate Bottom in North Somerset and serves the city of *Br*i*s*tol.","imageCredit":"Andy Munzer","imageCreditLink":"https://www.flickr.com/photos/munzer/"},{"id":"bru","code":"bru","name":"Luchthaven Brussel-Nationaal","city":"Brussels","city2":"Zaventem","city3":"Machelen","state":"","stateShort":"","country":"Belgium","description":"Built during World War II and originally called Fliegerhorst Melsbroek, Belgium’s largest airport is located between Zaventem and Machelen, northeast of *Bru*ssels.","imageCredit":"Patrice Heylighen","imageCreditLink":"https://www.flickr.com/photos/126981452@N07/"},{"id":"brw","code":"brw","name":"Wiley Post–Will Rogers Memorial Airport","city":"Barrow","state":"Alaska","stateShort":"AK","country":"USA","description":"Wiley Post–Will Rogers Memorial Airport honors the late entertainer Will Rogers and aviator Wiley Post whose plane crashed nearby in 1935. Its airport code honors its home in *B*a*r*ro*w*.","imageCredit":"Mike Smail","imageCreditLink":"https://www.flickr.com/photos/smailtronic/"},{"id":"bsb","code":"bsb","name":"Aeroporto Internacional de Brasília–Pres. Juscelino Kubitschek","nameEnglish":"Brasília–Presidente Juscelino Kubitschek International Airport","city":"Brasília","city2":"Brasilia","state":"","stateShort":"","country":"Brazil","description":"Renamed in 1999 to honor former President Juscelino Kubitschek de Oliveira, Brasília International gets its airport code from its home in the capital city of *B*ra*s*ília, *B*razil.","imageCredit":"Bruno Coutinho","imageCreditLink":"https://www.flickr.com/photos/coutinhobr/"},{"id":"bsl","code":"bsl","name":"EuroAirport Basel–Mulhouse–Freiburg","city":"Basel","city2":"Saint-Louis","city3":"Freiburg","state":"France","stateShort":"","country":"Switzerland","description":"EuroAirport *B*a*s*e*l*-Mulhouse-Freiburg has two IATA codes (MLH is the other one). It is actually located in Saint-Louis, France but is one of only a few airports in the world operated jointly by two countries, in this case France and Switzerland.","imageCredit":"AURM","imageCreditLink":"https://www.flickr.com/photos/aurmulhouse/"},{"id":"btj","code":"btj","name":"Bandar Udara Internasional Sultan Iskandar Muda","nameEnglish":"Sultan Iskander Muda International Airport","city":"Banda Aceh","city2":"Blang Bintang","city3":"Aceh Basar","state":"","stateShort":"","country":"Indonesia","description":"The Sultan Iskander Muda International serves the area near Banda Aceh. Its airport code refers to the nearby subdistricts of *B*lang Bin*t*ang and *J*antho.","imageCredit":"Dinokl","imageCreditLink":"http://en.wikipedia.org/wiki/File:MTB_SultanIskandarMudaIntlAirport.JPG"},{"id":"btm","code":"btm","name":"Bert Mooney Airport","city":"Butte","state":"Montana","stateShort":"MT","country":"USA","description":"Bert Mooney Airport in Butte, Montana is named for the first pilot to fly mail into Yellowstone National Park. It opened in 1926 as *B*u*t*te *M*unicipal Airport.","imageCredit":"Sergei Scurfield","imageCreditLink":"https://www.flickr.com/photos/5of7/"},{"id":"bts","code":"bts","name":"Letisko M. R. Štefánika","nameEnglish":"M. R. Štefánik Airport","city":"Bratislava","state":"","stateShort":"","country":"Slovakia","description":"M. R. Štefánik Airport, also called *B*ra*t*i*s*lava Airport, was renamed in 1993 after General Milan Rastislav Štefánik, whose aircraft crashed near Bratislava in 1919.","imageCredit":"Airliners.sk, o.z.","imageCreditLink":"https://www.flickr.com/photos/airliners_sk/"},{"id":"btv","code":"btv","name":"Burlington International Airport","city":"Burlington","state":"Vermont","stateShort":"VT","country":"USA","description":"In 1920, Burlington Municipal Airport opened, honoring and serving the city of *B*urling*t*on, *V*ermont.","imageCredit":"Neil Hunt","imageCreditLink":"https://www.flickr.com/photos/nhunt/"},{"id":"bud","code":"bud","name":"Budapest Liszt Ferenc Nemzetközi Repülőtér","nameEnglish":"Budapest Ferenc Liszt International Airport","city":"Budapest","state":"","stateShort":"","country":"Hungary","description":"Still called “Ferihegy” for the surrounding neighborhood, *Bud*apest’s airport was renamed in 2011 to honor Hungarian composer Ferenc Liszt.","imageCredit":"HatM","imageCreditLink":"https://www.flickr.com/photos/hatm/"},{"id":"buf","code":"buf","name":"Buffalo Niagara International Airport","city":"Buffalo","city2":"Cheektowaga","city3":"Niagara Falls","state":"New York","stateShort":"NY","country":"USA","description":"Opened in 1926 as Buffalo Municipal, *Buf*falo Niagara International was rebuilt and renamed in 1997 to honor the oft-visited Niagara Falls.","imageCredit":"Julien Bowry","imageCreditLink":"https://www.flickr.com/photos/jjbowry_blogspot_com/"},{"id":"bur","code":"bur","name":"Bob Hope Airport","city":"Burbank","city2":"Los Angeles","city3":"Hollywood","state":"California","stateShort":"CA","country":"USA","description":"Bob Hope Airport has gone by six names since its opening in 1930. It was renamed most recently in 2003 to honor entertainer Bob Hope. Like two of its former names, its code refers to its location in the Los Angeles suburb of *BUR*bank.","imageCredit":"Karol Franks","imageCreditLink":"https://www.flickr.com/photos/karolfranks/"},{"id":"but","code":"but","name":"Bathpalathang Airport","city":"Jakar","country":"Bhutan","description":"Bathpalathang Airport is located in the city of Jakar. Its three-letter airport code comes from the *Bu*m*t*hang District.","imageCredit":"Richard Furlong","imageCreditLink":"https://www.flickr.com/photos/richfurlong/"},{"id":"bwi","code":"bwi","name":"Baltimore/Washington International Thurgood Marshall Airport","city":"Baltimore","city2":"Glen Burnie","city3":"Washington D.C.","state":"Maryland","stateShort":"MD","country":"USA","description":"Originally Friendship International (perhaps the best airport name ever), *B*altimore/*W*ashington *I*nternational was renamed in 1973 and again in 2005 to honor Thurgood Marshall, former U.S. Supreme Court justice.","imageCredit":"Mike Procario","imageCreditLink":"https://www.flickr.com/photos/procario/"},{"id":"bwn","code":"bwn","name":"Brunei International Airport","city":"Bandar Seri Begawan","state":"","stateShort":"","country":"Brunei","description":"Opened in 1974, Brunei International serves the country of Brunei and its capital city of Bandar Seri *B*ega*w*a*n*.","imageCredit":"Mark Meng","imageCreditLink":"https://www.flickr.com/photos/mark-meng/"},{"id":"bzn","code":"bzn","name":"Bozeman Yellowstone International Airport","city":"Bozeman","city2":"Belgrade","state":"Montana","stateShort":"MT","country":"USA","description":"In 2005, Gallatin Field was renamed to *B*o*z*ema*n* Yellowstone International in honor of the famous national park.","imageCredit":"Roderick Hsiao","imageCreditLink":"https://www.flickr.com/photos/roderickhsiao/"},{"id":"cae","code":"cae","name":"Columbia Metropolitan Airport","city":"Columbia","city2":"Cayce","city3":"Lexington County","state":"South Carolina","stateShort":"SC","country":"USA","description":"Built in 1940 and originally named Lexington County Airport, Columbia Metropolitan gets its airport code from the nearby city of *Ca*yc*e*.","imageCredit":"Mark Hesseltine","imageCreditLink":"https://www.flickr.com/photos/9464504@N06/"},{"id":"cai","code":"cai","name":"Cairo International Airport","city":"Cairo","state":"","stateShort":"","country":"Egypt","description":"Originally built during World War II and known as Payne Airfield, Egypt’s busiest airport serves the capital city of *Cai*ro.","imageCredit":"Courtney Collison","imageCreditLink":"https://www.flickr.com/photos/courtney_/"},{"id":"cak","code":"cak","name":"Akron–Canton Airport","city":"Akron","city2":"Canton","city3":"Green","state":"Ohio","stateShort":"OH","country":"USA","description":"Dedicated in 1946, Akron–Canton Airport is actually located in the city of Green, Ohio. Its airport code comes from the nearby cities of *C*anton and *Ak*ron.","imageCredit":"Ken Lund","imageCreditLink":"https://www.flickr.com/photos/kenlund/"},{"id":"can","code":"can","name":"Guangzhou Baiyun International Airport","city":"Guangzhou","state":"Guangdong","stateShort":"","country":"China","description":"Guangzhou Baiyun International opened in 2004 as a replacement for the 72-year-old airport with the same name. Its airport code comes from Guangzhou’s former English name: *Can*ton.","imageCredit":"Matt Weibo","imageCreditLink":"https://www.flickr.com/photos/mattweibo/"},{"id":"cbg","code":"cbg","name":"Cambridge Airport","city":"Cambridge","city2":"Teversham","state":"England","country":"UK","description":"Cambridge Airport, briefly known as Marshall Airport Cambridge UK, originally opened in 1938. Its airport code honors its home in the city of *C*am*b*rid*g*e.","imageCredit":"Neil McIntosh","imageCreditLink":"https://www.flickr.com/photos/harlequeen/"},{"id":"cbr","code":"cbr","name":"Canberra International Airport","city":"Canberra","city2":"Queanbeyan","state":"Australian Capital Territory","stateShort":"ACT","country":"Australia","description":"Originally an airstrip built in the 1920s, Canberra International now serves the cities of *C*an*b*e*r*ra and Queanbeyan in New South Wales.","imageCredit":"Michael Coghlan","imageCreditLink":"https://www.flickr.com/photos/mikecogh/"},{"id":"ccf","code":"ccf","name":"Aéroport de Carcassonne","nameEnglish":"Carcassonne Airport","city":"Carcassonne","country":"France","description":"Sometimes called Salvaza Airport, Carcassonne Airport gets its three-letter code from its home in *C*ar*c*assonne, *F*rance.","imageCredit":"Ad Meskens","imageCreditLink":"http://en.wikipedia.org/wiki/Carcassonne_Airport#/media/File:Carcassonne_aeroport_Salveza2.jpg"},{"id":"ccj","code":"ccj","name":"Calicut International Airport","city":"Karipur","city2":"Kozhikode","city3":"Malappuram","state":"Kerala","stateShort":"KL","country":"India","description":"Calicut International is named after the city of Kozhikode, *C*ali*c*ut in English. Its code is completed by the letter ‘*J*’, often used as a filler letter.","imageCredit":"Sreejithk2000","imageCreditLink":"http://commons.wikimedia.org/wiki/User:Sreejithk2000"},{"id":"ccp","code":"ccp","name":"Aeropuerto Carriel Sur","nameEnglish":"Carriel Sur International Airport","city":"Concepción","state":"","stateShort":"","country":"Chile","description":"Opened in 1968, Carriel Sur International is located in the city of *C*on*c*e*p*ción, Chile.","imageCredit":"César Melgarejo","imageCreditLink":"https://www.flickr.com/photos/edulcorante/"},{"id":"ccs","code":"ccs","name":"Aeropuerto Internacional de Maiquetia “Simón Bolívar”","nameEnglish":"Simón Bolívar International Airport","city":"Caracas","city2":"Maiquetía","state":"","stateShort":"","country":"Venezuela","description":"Often called just “Maiquetía” by locals, Simón Bolívar International is named after the former Venezuelan president. Its airport code stands for *C*ara*c*a*s*.","imageCredit":"Carlos Graterol","imageCreditLink":"https://www.flickr.com/photos/galletonn/"},{"id":"ccu","code":"ccu","name":"Netaji Subhas Chandra Bose International Airport","city":"Kolkata","city2":"Calcutta","state":"West Bengal","stateShort":"WB","country":"India","description":"Previously Dum Dum Aiport, Netjai Subhas Chandra Bose International was renamed in 1995 to honor the Indian freedom fighter. Its airport code comes from a former spelling of Kolkata: *C*al*cu*tta.","imageCredit":"Paul Hamilton","imageCreditLink":"https://www.flickr.com/photos/paulhami/"},{"id":"cdg","code":"cdg","name":"Aéroport de Paris-Charles-de-Gaulle","nameEnglish":"Charles de Gaulle Airport","city":"Paris","state":"","stateShort":"","country":"France","description":"Renamed and officially opened in 1974, France's largest airport is named after *C*harles *d*e *G*aulle, former President and founder of the French Fifth Republic.","imageCredit":"Giacomo Carena","imageCreditLink":"https://www.flickr.com/photos/jekkone/"},{"id":"ceb","code":"ceb","name":"Paliparang Pandaigdig ng Mactan–Cebu","nameEnglish":"Mactan–Cebu International Airport","city":"Cebu","city2":"Lapu-Lapu City","city3":"Mactan Island","state":"","stateShort":"","country":"Philippines","description":"First opened in 1956, Mactan–Cebu International is located in Lapu-Lapu City and serves greater Metro *Ceb*u.","imageCredit":"CyberJos","imageCreditLink":"https://www.flickr.com/photos/cyberjos/"},{"id":"cfb","code":"cfb","name":"Aeroporto Internacional de Cabo Frio","nameEnglish":"Cabo Frio International Airport","city":"Cabo Frio","state":"Rio de Janeiro","stateShort":"RJ","country":"Brazil","description":"Inaugurated in 1998, Cabo Frio International is privately operated and serves the city of *C*abo *F*rio, *B*razil.","imageCredit":"Fabius Alvim","imageCreditLink":"https://www.flickr.com/photos/fabiuss/"},{"id":"cgh","code":"cgh","name":"Aeroporto de São Paulo/Congonhas","nameEnglish":"Congonhas Airport","city":"São Paulo","city2":"Sao Paulo","state":"São Paulo","stateShort":"SP","country":"Brazil","description":"São Paulo/Congonhas Airport opened in 1936 and is named after the neighborhood where it’s located, Vila *C*on*g*on*h*as.","imageCredit":"Barbara Dieu","imageCreditLink":"https://www.flickr.com/photos/bee/"},{"id":"cgk","code":"cgk","name":"Bandar Udara Internasional Soekarno–Hatta","nameEnglish":"Soekarno–Hatta International Airport","city":"Jakarta","city2":"Tangerang","city3":"Jabodetabek","state":"Banten","stateShort":"","country":"Indonesia","description":"Soekarno–Hatta International serves the capital city of Jakarta and honors Indonesia’s first president and vice-president. It receives its code from the *C*en*gk*areng district in the city of Tangerang, where it’s located.","imageCredit":"donoshsugi","imageCreditLink":"https://www.flickr.com/photos/12099048@N00/"},{"id":"cgn","code":"cgn","name":"Flughafen Köln/Bonn","nameEnglish":"Cologne Bonn Airport","city":"Cologne","city2":"Bonn","state":"","stateShort":"","country":"Germany","description":"Cologne Bonn Airport is christened after Konrad Adenauer, Germany’s first Chancellor following World War II, but its airport code comes from its home in *C*olo*gn*e.","imageCredit":".mw","imageCreditLink":"https://www.flickr.com/photos/mwillms/"},{"id":"cgr","code":"cgr","name":"Aeroporto Internacional de Campo Grande","nameEnglish":"Campo Grande International Airport","city":"Campo Grande","state":"Mato Grosso do Sul","stateShort":"MS","country":"Brazil","description":"Opened in 1953, Campo Grande International is located in the municipality of Antônio João and is often called Antônio João Airport. It serves the city of *C*ampo *Gr*ande.","imageCredit":"Arthur Zapparoli","imageCreditLink":"https://www.flickr.com/photos/arthurgeek/"},{"id":"cha","code":"cha","name":"Chattanooga Metropolitan Airport","city":"Chattanooga","state":"Tennessee","stateShort":"TN","country":"USA","description":"Opened in 1930 as Lovell Field, Chattanooga Metropolitan Airport gets its three-letter code from its home in the city of *Cha*ttanooga.","imageCredit":"Larry Miller","imageCreditLink":"https://www.flickr.com/photos/drmillerlg/"},{"id":"chc","code":"chc","name":"Christchurch International Airport","city":"Christchurch","city2":"Harewood","country":"New Zealand","description":"Opened in 1940, Christchurch International became New Zealand’s first international airport in 1950. Located in the suburb of Harewood, its airport code comes from the city of *Ch*rist*c*hurch.","imageCredit":"Sarah-Rose","imageCreditLink":"https://www.flickr.com/photos/oh_darling/"},{"id":"chs","code":"chs","name":"Charleston International Airport","city":"Charleston","city2":"North Charleston","state":"South Carolina","stateShort":"SC","country":"USA","description":"Used as a military airfield during World War II and the Korean War, Charleston International’s airport code comes from its home in *Ch*arle*s*ton, South Carolina.","imageCredit":"scpetrel","imageCreditLink":"https://www.flickr.com/photos/scpetrel/"},{"id":"cia","code":"cia","name":"Ciampino–Aeroporto Internazionale G. B. Pastine","nameEnglish":"Ciampino–G. B. Pastine International Airport","city":"Rome","city2":"Ciampino","state":"","stateShort":"","country":"Italy","description":"Often called just Rome Ciampino Airport, G.B. Pastine International is named after World War I aviator, Giovan Battista Pastine. It serves the city of Rome and is located in *Cia*mpino.","imageCredit":"Sean MacEntee","imageCreditLink":"https://www.flickr.com/photos/smemon/"},{"id":"cid","code":"cid","name":"The Eastern Iowa Airport","city":"Cedar Rapids","state":"Iowa","stateShort":"IA","country":"USA","description":"Before being renamed in 1997, The Eastern Iowa Airport was known as *C*edar Rap*id*s Municipal.","imageCredit":"Carole","imageCreditLink":"https://www.flickr.com/photos/leita/"},{"id":"cju","code":"cju","name":"Jeju International Airport","city":"Jeju","city2":"Cheju","state":"Korea","stateShort":"","country":"South Korea","description":"Jeju International is South Korea’s second largest airport. Its three-letter code comes from the McCune-Reischauer romanization of Jeju: *C*he*ju*.","imageCredit":"forester401","imageCreditLink":"https://www.flickr.com/photos/401forester/"},{"id":"cld","code":"cld","name":"McClellan-Palomar Airport","city":"Carlsbad","state":"California","stateShort":"CA","country":"USA","description":"McClellan-Palomar Airport is located in northwest San Diego county and is named after George McClellan, local aviator and civic leader.  Its airport code comes from its city of *C*ar*L*sba*D*.","imageCredit":"Alan Cordova","imageCreditLink":"https://www.flickr.com/photos/acordova/"},{"id":"cle","code":"cle","name":"Hopkins International Airport","city":"Cleveland","state":"Ohio","stateShort":"OH","country":"USA","description":"Hopkins International is named after former mayor William R. Hopkins. Its airport code honors its home in *Cle*veland.","imageCredit":"Trey Ratcliff","imageCreditLink":"https://www.flickr.com/photos/stuckincustoms/"},{"id":"clj","code":"clj","name":"Aeroportul International “Avram Iancu” Cluj","nameEnglish":"Cluj International Airport","city":"Cluj-Napoca","state":"","stateShort":"","country":"Romania","description":"Founded in 1932, Cluj Avram Iancu International is named after Romanian revolutionary Avram Iancu. Its airport code comes from its home city of *Cl*u*j*-Napoca.","imageCredit":"Cluj Kolozsvár Klausenburg","imageCreditLink":"https://www.flickr.com/photos/34943593@N06/"},{"id":"cll","code":"cll","name":"Easterwood Airport","city":"College Station","state":"Texas","stateShort":"TX","country":"USA","description":"Opened in 1940, Easterwood Airport is named after U.S. Navy Lt. Jesse L. Easterwood. It is owned by Texas A&M University and is located in the city of *C*o*ll*ege Station.","imageCredit":"Torch Magazine","imageCreditLink":"https://www.flickr.com/photos/63590594@N05/"},{"id":"clo","code":"clo","name":"Aeropuerto Internacional Alfonso Bonilla Aragón","nameEnglish":"Alfonso Bonilla Aragón International Airport","city":"Santiago de Cali","city2":"Cali","city3":"Palmira","state":"","stateShort":"","country":"Colombia","description":"Formerly Palmaseca International, Cali’s airport is named after Alfonso Bonilla Aragón, local civic leader and journalist. Its airport code comes from an early nickname: *C*a*l*ipuert*o*.","imageCredit":"Mario Carvajal","imageCreditLink":"https://www.flickr.com/photos/mario_carvajal/"},{"id":"clt","code":"clt","name":"Douglas International Airport","city":"Charlotte","state":"North Carolina","stateShort":"NC","country":"USA","description":"Formerly Morris Field Air Base, Douglas Airport was renamed in 1954 to honor former mayor Ben Elbert Douglas, Sr., but its airport code honors its home in *C*har*l*o*t*te.","imageCredit":"Steve & Sara Emry","imageCreditLink":"https://www.flickr.com/photos/emry/"},{"id":"cmb","code":"cmb","name":"Bandaranaike International Airport","city":"Colombo","city2":"Katunayake","state":"Western Province","stateShort":"","country":"Sri Lanka","description":"Bandaranaike International is named after former Prime Minister S. W. R. D. Bandaranaike and is one of the busiest hub airports in South Asia. Its airport code honors the city it serves, *C*olo*mb*o.","imageCredit":"Anshu","imageCreditLink":"https://www.flickr.com/photos/anshu_si/"},{"id":"cmh","code":"cmh","name":"Port Columbus International Airport","city":"Columbus","state":"Ohio","stateShort":"OH","country":"USA","description":"Opened in 1929, Port Columbus is now the second busiest airport in Ohio. Its three-letter airport code comes from its original name *C*olumbus *M*unicipal *H*angar.","imageCredit":"GmanViz","imageCreditLink":"https://www.flickr.com/photos/gmanviz/"},{"id":"cmn","code":"cmn","name":"Mohammed V International Airport","city":"Casablanca","city2":"Nouasseur","city3":"Nouaceur","state":"","stateShort":"","country":"Morocco","description":"Originally known as Berrechid Airfield, Mohammed V International’s airport code comes from its full name and location: *C*asablanca *M*ohammed V International Airport, *N*ouaceur.","imageCredit":"Dan Diffendale","imageCreditLink":"https://www.flickr.com/photos/dandiffendale/"},{"id":"cnf","code":"cnf","name":"Aeroporto Internacional Tancredo Neves - Confins","nameEnglish":"Tancredo Neves/Confins International Airport","city":"Belo Horizonte","city2":"Confins","state":"Minas Gerais","stateShort":"MG","country":"Brazil","description":"Named after former Brazilian President-elect Tancredo Neves, the airport that serves the Belo Horizonte metro area is located in the municipality of *C*o*nf*ins.","imageCredit":"pacgov","imageCreditLink":"https://www.flickr.com/photos/pacgov/"},{"id":"cnx","code":"cnx","name":"Chiang Mai International Airport","city":"Chiang Mai","city2":"Lamphun","state":"","stateShort":"","country":"Thailand","description":"Many airports use the letter ‘X’ to fill in when the desired letters are already taken. *C*hia*n*g Mai International, a major gateway to the north of Thailand, uses that helpful ‘*X*’ in its airport code.","imageCredit":"autan","imageCreditLink":"https://www.flickr.com/photos/autanex/"},{"id":"cok","code":"cok","name":"Cochin International Airport","city":"Kochi","city2":"Cochin","state":"Kerala","stateShort":"KL","country":"India","description":"Cochin International is located in the city of Kochi, previously known as Cochin. Its airport code pulls letters from the new name, *Koc*hi, but reverses them.","imageCredit":"Prasad Pillai","imageCreditLink":"https://www.flickr.com/photos/prasad-om/"},{"id":"cph","code":"cph","name":"Københavns Lufthavn, Kastrup","nameEnglish":"Copenhagen Airport, Kastrup","city":"Copenhagen","city2":"Kastrup","state":"Tårnby","stateShort":"","country":"Denmark","description":"Located in the small town of Kastrup and founded in 1925, *C*o*p*en*h*agen Airport is one of the oldest civil airports in the world.","imageCredit":"Arnþór Snær Sævarsson","imageCreditLink":"https://www.flickr.com/photos/easysleazycheesy/"},{"id":"cpt","code":"cpt","name":"Cape Town International Airport","city":"Cape Town","state":"","stateShort":"","country":"South Africa","description":"Opened in 1954 to replace Wingfield Aerodrome, Africa’s third busiest airport is located in the city of *C*a*p*e *T*own, South Africa.","imageCredit":"flowcomm","imageCreditLink":"https://www.flickr.com/photos/flowcomm/"},{"id":"crk","code":"crk","name":"Paliparang Pandaigdig ng Clark","nameEnglish":"Clark International Airport","city":"Manila","city2":"Clark Freeport Zone","city3":"Mabalacat City","country":"Philippines","description":"Originally established as Clark Air Base by the U.S. Army in 1903, *C*la*rk* International is named after Major Harold M. Clark. It was known as Diosdado Macapagal International from 2003 until 2012.","imageCredit":"TheJMP617","imageCreditLink":"http://en.wikipedia.org/wiki/Clark_International_Airport#/media/File:Clark_International_Airport_Departure_Hall_View.jpg"},{"id":"crl","code":"crl","name":"Aéroport de Charleroi Bruxelles Sud","nameEnglish":"Brussels South Charleroi Airport","city":"Charleroi","city2":"Gosselies","state":"","stateShort":"","country":"Belgium","description":"Brussels South Charleroi International started as a flying school in 1919. Its airport code honors its home in the city of *C*ha*rl*eroi.","imageCredit":"LANZATE","imageCreditLink":"https://www.flickr.com/photos/lanzate21/"},{"id":"crp","code":"crp","name":"Corpus Christi International Airport","city":"Corpus Christi","state":"Texas","stateShort":"TX","country":"USA","description":"Corpus Christi International opened a new six-gate terminal named Hayden W. Head Terminal in 2002. It is city-owned and available for public-use just west of *C*o*rp*us Christi, in Nueces County, Texas.","imageCredit":"TravelingOtter","imageCreditLink":"https://www.flickr.com/photos/travelingotter/"},{"id":"crw","code":"crw","name":"Yeager Airport","city":"Charleston","state":"West Virginia","stateShort":"WV","country":"USA","description":"Yeager Airport is named after U.S. Army Brigadier General Chuck Yeager, but its airport code honors its home in *C*ha*r*leston, *W*est Virginia.","imageCredit":"Rich","imageCreditLink":"https://www.flickr.com/photos/richmanwisco/"},{"id":"ctg","code":"ctg","name":"Aeropuerto Internacional Rafael Núñez","nameEnglish":"Rafael Núñez International Airport","city":"Cartagena","state":"Bolívar","stateShort":"","country":"Colombia","description":"Rafael Núñez International is named after the former Colombian president who wrote the verses for the country’s national anthem. Its airport code honors its home in the city of *C*ar*t*a*g*ena.","imageCredit":"David Shankbone","imageCreditLink":"https://www.flickr.com/photos/shankbone/"},{"id":"cts","code":"cts","name":"New Chitose Airport","city":"Sapporo","city2":"Chitose","city3":"Tomakomai","state":"","stateShort":"","country":"Japan","description":"Opened in 1991, New Chitose Airport replaced the original Chitose Airport. It serves the Sapporo area and at first had the three-letter code of SPK. Its current code comes from its name and the nearby city of *C*hi*t*o*s*e.","imageCredit":"Tzuhsun Hsu","imageCreditLink":"https://www.flickr.com/photos/alberth2/"},{"id":"cul","code":"cul","name":"Aeropuerto Internacional Federal de Bachigualato","nameEnglish":"Bachigualato Federal International Airport","city":"Culiacán","city2":"Navolato","state":"Sinaloa","stateShort":"SI","country":"Mexico","description":"Often called Culiacán Airport, Bachigualato Federal International is named after Bachigualato, the neighborhood where it’s located. Its airport code comes from *Cul*iacán, the city it serves.","imageCredit":"Malova Gobernador","imageCreditLink":"https://www.flickr.com/photos/malova2010/"},{"id":"cuz","code":"cuz","name":"Aeropuerto Internacional Alejandro Velasco Astete","nameEnglish":"Alejandro Velasco Astete International Airport","city":"Cusco","state":"","stateShort":"","country":"Peru","description":"Alejandro Velasco Astete International is named after the Peruvian pilot first to cross the Andes in 1925. It serves the city of Cusco, often spelled *Cuz*co.","imageCredit":"Davide","imageCreditLink":"https://www.flickr.com/photos/devedeve/"},{"id":"cvg","code":"cvg","name":"Cincinnati/Northern Kentucky International Airport","city":"Hebron","city2":"Cincinnati","city3":"Ohio","state":"Kentucky","stateShort":"KY","country":"USA","description":"Serving the greater Cincinnati metro area, Cincinnati/Northern Kentucky's airport code comes from the nearby city of *C*o*v*in*g*ton.","imageCredit":"Robert S. Donovan","imageCreditLink":"https://www.flickr.com/photos/booleansplit/"},{"id":"cwb","code":"cwb","name":"Aeroporto Internacional de Curitiba - Afonso Pena","nameEnglish":"Afonso Pena International Airport","city":"Curitiba","city2":"São José dos Pinhais","state":"Paraná","stateShort":"PR","country":"Brazil","description":"Built in 1944 for the Brazilian Air Force, Afonso Pena International is named after Brazil’s 6th president. With the codes CUR and CUB already taken, *C*uriti*b*a subbed a ‘*W*’ for the ‘U’.","imageCredit":"Infraero","imageCreditLink":"https://www.flickr.com/photos/infraero/"},{"id":"cwl","code":"cwl","name":"Maes Awyr Caerdydd","nameEnglish":"Cardiff Airport","city":"Cardiff","state":"Wales","stateShort":"","country":"UK","description":"Started as a satellite aerodrome during World War II, Cardiff Airport gets its airport code from its home in *C*ardiff, *W*a*l*es.","imageCredit":"NATS Press Office","imageCreditLink":"https://www.flickr.com/photos/natspressoffice/"},{"id":"dab","code":"dab","name":"Daytona Beach International Airport","city":"Daytona Beach","state":"Florida","stateShort":"FL","country":"USA","description":"Started in 1930 as Sholtz Field, Daytona Beach International evolved from an uncommonly successful beach airport. Located next to Daytona International Speedway, it serves the city of *D*ayton*a* *B*each.","imageCredit":"Micah Maziar","imageCreditLink":"https://www.flickr.com/photos/mzwp/"},{"id":"dac","code":"dac","name":"Hazrat Shahjalal International Airport","city":"Dhaka","city2":"Kurmitola","state":"","stateShort":"","country":"Bangladesh","description":"In 2010, Hazrat Shahjalal International was renamed to honor the Sufi saint Shah Jalal. Its airport code comes from a former spelling for the city of Dhaka: *Dac*ca.","imageCredit":"Zaed Zaman","imageCreditLink":"https://www.flickr.com/photos/63395675@N05/"},{"id":"dad","code":"dad","name":"Sân bay Quốc tế Đà Nẵng","nameEnglish":"Da Nang International Airport","city":"Da Nang","state":"","stateShort":"","country":"Vietnam","description":"Da Nang International is located in *Da* Nang, the largest city in central Vietnam. Its code’s last letter likely comes from Quảng Nam-*Đ*à Nẵng, the province Da Nong belonged to before becoming an independent municipality in 1997.","imageCredit":"Dragfyre","imageCreditLink":"http://en.wikipedia.org/wiki/Da_Nang_International_Airport#/media/File:DAD_new_terminal_2012_01.JPG"},{"id":"dal","code":"dal","name":"Dallas Love Field","city":"Dallas","city2":"Fort Worth","city3":"Arlington","state":"Texas","stateShort":"TX","country":"USA","description":"Founded and named in 1917, Love Field honors U.S. Army pilot Moss L. Love. Its airport code honors its home in the city of *Dal*las.","imageCredit":"jayRaz","imageCreditLink":"https://www.flickr.com/photos/shnakepup/"},{"id":"dam","code":"dam","name":"Damascus International Airport","city":"Damascus","country":"Syria","description":"Inaugurated in the 1970s, Damascus International get its airport code from its home in the capital city of *Dam*ascus.","imageCredit":"alexander kohlhofer","imageCreditLink":"https://www.flickr.com/photos/plasticshore/"},{"id":"dar","code":"dar","name":"Julius Nyerere International Airport","city":"Dar es Salaam","state":"","stateShort":"","country":"Tanzania","description":"Renamed in 2006, Julius Nyerere International honors Tanzania’s first president. It was previously named *Dar* es Salaam International after its home city.","imageCredit":"Roland","imageCreditLink":"https://www.flickr.com/photos/rolandh/"},{"id":"day","code":"day","name":"James M. Cox Dayton International Airport","city":"Dayton","state":"Ohio","stateShort":"OH","country":"USA","description":"In 1952, Dayton Municipal was renamed to honor James M. Cox, former governor of Ohio. Its airport code honors its home in *Day*ton.","imageCredit":"redlegsfan21","imageCreditLink":"https://www.flickr.com/photos/redlegsfan21/"},{"id":"dbq","code":"dbq","name":"Dubuque Regional Airport","city":"Dubuque","state":"Iowa","stateShort":"IA","country":"USA","description":"Dubuque Regional features two runways and serves as a general aviation and commercial airport. Its three-letter code comes from its home city of *D*u*b*u*q*ue.","imageCredit":"AzDesign2010","imageCreditLink":"https://www.flickr.com/photos/48323057@N06/"},{"id":"dca","code":"dca","name":"Ronald Reagan Washington National Airport","city":"Washington D.C.","city2":"Arlington County","state":"Virginia","stateShort":"VA","country":"USA","description":"In 1998, Washington National Airport was renamed to honor former U.S. President Ronald Reagan. Its airport code honors its home in *D*istrict of *C*olumbi*a*.","imageCredit":"thisisbossi","imageCreditLink":"https://www.flickr.com/photos/thisisbossi/"},{"id":"deb","code":"deb","name":"Debreceni Nemzetközi Repülőtér","nameEnglish":"Debrecen International Airport","city":"Debrecen","country":"Hungary","description":"Originally opened in the 1930s, Debrecen International gets its airport code from its home in the city of *Deb*recen.","imageCredit":"Timon91","imageCreditLink":"https://www.flickr.com/photos/timon91/"},{"id":"del","code":"del","name":"Indira Gandhi International Airport","city":"New Delhi","city2":"Delhi","state":"Delhi","stateShort":"DL","country":"India","description":"Previously known as Palam Aiport, Indira Gandhi International was renamed in 1986 to honor the former Indian prime minister. Its airport code honors its home in *Del*hi.","imageCredit":"Nadir Hashmi","imageCreditLink":"https://www.flickr.com/photos/nadircruise/"},{"id":"den","code":"den","name":"Denver International Airport","city":"Denver","state":"Colorado","stateShort":"CO","country":"USA","description":"Until 1995, Stapleton International Airport served the *Den*ver area with airport code DEN. When Stapleton closed, the new airport switched from DVX to DEN.","imageCredit":"Bart Heird","imageCreditLink":"https://www.flickr.com/photos/chicagobart/"},{"id":"det","code":"det","name":"Coleman A. Young International Airport","city":"Detroit","state":"Michigan","stateShort":"MI","country":"USA","description":"Formerly Detroit City Airport, Coleman A. Young International is named after Coleman Young who served as mayor from 1974 to 1994. Its three-letter code honors the city of *Det*roit.","imageCredit":"Mark H Anbinder","imageCreditLink":"https://www.flickr.com/photos/mhaithaca/"},{"id":"dfw","code":"dfw","name":"Dallas/Fort Worth International Airport","city":"Dallas–Fort Worth","city2":"Fort Worth","state":"Texas","stateShort":"TX","country":"USA","description":"For decades Dallas and Fort Worth ran competing airports, but in 1969 construction finally began on a joint airport to serve the *D*allas-*F*ort *W*orth area.","imageCredit":"Jim Nix","imageCreditLink":"https://www.flickr.com/photos/jimnix/"},{"id":"dkr","code":"dkr","name":"Léopold Sédar Senghor International Airport","city":"Dakar","city2":"Yoff","country":"Senegal","description":"Formerly known as Dakar Yoff Airport, Léopold Sédar Senghor International is now named after the first President of Senegal. Located in Yoff, it serves the capital city of *D*a*k*a*r*.","imageCredit":"Kalyan Neelamraju","imageCreditLink":"https://www.flickr.com/photos/kalyan3/"},{"id":"dme","code":"dme","name":"Domodedovo International Airport","city":"Moscow","state":"","stateShort":"","country":"Russia","description":"Officially opened in 1965, Russia’s busiest airport serves the capital city of Moscow. It is actually located in the nearby town of *D*o*m*od*e*dovo.","imageCredit":"Luis Jou García","imageCreditLink":"https://www.flickr.com/photos/luisjoujr/"},{"id":"dmk","code":"dmk","name":"Don Mueang International Airport","city":"Bangkok","city2":"Don Mueang","country":"Thailand","description":"Originally Bangkok International, Don Mueang Airport was renamed when Suvarnabhumi Airport opened in 2006. It gave up its BKK code and received a new one derived from *D*on *M*ueang and carrying over the ‘*K*’ from the old code.","imageCredit":"Jon Collier","imageCreditLink":"https://www.flickr.com/photos/imnotquitejack/"},{"id":"dmm","code":"dmm","name":"King Fahd International Airport","city":"Dammam","state":"Eastern Province","stateShort":"","country":"Saudi Arabia","description":"Opened in 1999, King Fahd International is the world’s largest airport by land area. Its airport code honors its home in the city of *D*a*mm*am.","imageCredit":"biboyworxxx","imageCreditLink":"https://www.flickr.com/photos/groundzero02/"},{"id":"dnd","code":"dnd","name":"Port-adhair Dhùn Dèagh","nameEnglish":"Dundee Airport","city":"Dundee","state":"Scotland","country":"UK","description":"Opened in 1963, Dundee Airport gets its airport code from *D*u*nd*ee, Scotland’s fourth largest city.","imageCredit":"Matthew Jackson","imageCreditLink":"https://www.flickr.com/photos/aeronautjackson/"},{"id":"dnk","code":"dnk","name":"Dnipropetrovsk International Airport","city":"Dnipropetrovsk","state":"","stateShort":"","country":"Ukraine","description":"Opened in 1943, Dnipropetrovsk International Airport is located 15 km southeast from the center of the city which gave it the name and the code - *Dn*ipropetrovs*k*.","imageCredit":"Gnesener1900","imageCreditLink":"http://en.wikipedia.org/wiki/Dnipropetrovsk_International_Airport#/media/File:Main_terminal_at_Dnipropetrovsk_International_Airport.jpg"},{"id":"doh","code":"doh","name":"Hamad International Airport","city":"Doha","state":"","stateShort":"","country":"Qatar","description":"Often called “New Doha Airport,” Hamad International opened in May of 2014, replacing *Doh*a International Airport as the primary airport for Qatar’s capital city.","imageCredit":"Takahiro Hayashi","imageCreditLink":"https://www.flickr.com/photos/mayor_of_clutch/"},{"id":"dps","code":"dps","name":"Bandar Udara Internasional Ngurah Rai","nameEnglish":"Ngurah Rai International Airport","city":"Denpasar","city2":"Badung","state":"Bali","stateShort":"","country":"Indonesia","description":"Ngurah Rai International serves the tourist destination of Bali and is named for I Gusti Ngurah Rai, national hero of Indonesia. Its airport code comes from *D*en*p*a*s*ar, the capital of the island.","imageCredit":"Sony Dwi Fajrian","imageCreditLink":"https://www.flickr.com/photos/sonyxyde/"},{"id":"drw","code":"drw","name":"Darwin International Airport","city":"Darwn","city2":"Marrara","state":"Northern Territory","stateShort":"NT","country":"Australia","description":"In 1945, *D*a*rw*in Airport began serving non-military passengers and currently still shares a runway with RAAF Base Darwin. The airport is named after its city which honors famous naturalist Charles Darwin.","imageCredit":"Ken Hodge","imageCreditLink":"https://www.flickr.com/photos/40132991@N07/"},{"id":"dsa","code":"dsa","name":"Robin Hood Airport Doncaster Sheffield","city":"Finningley","city2":"Doncaster","city3":"Sheffield","state":"England","stateShort":"","country":"UK","description":"Robin Hood Airport is named after the legendary outlaw of English folklore. Its airport code comes from the rest of its name, *D*oncaster *S*heffield *A*irport.","imageCredit":"Victor","imageCreditLink":"https://www.flickr.com/photos/vic_206/"},{"id":"dsm","code":"dsm","name":"Des Moines International Airport","city":"Des Moines","state":"Iowa","stateShort":"IA","country":"USA","description":"Des Moines Airport was renamed “International” in 1986 to promote the presence of the U.S. Customs Service at the airport. Its airport code honors its home in the city of *D*e*s* *M*oines.","imageCredit":"WordShore","imageCreditLink":"https://www.flickr.com/photos/silversprite/"},{"id":"dtm","code":"dtm","name":"Flughafen Dortmund","nameEnglish":"Dortmund Airport","city":"Dortmund","state":"","stateShort":"","country":"Germany","description":"Initially located in the suburb of Brackel, the airport serving the eastern Rhine-Ruhr area was moved to the city of *D*or*tm*und after World War II.","imageCredit":"Andreas","imageCreditLink":"https://www.flickr.com/photos/zargony/"},{"id":"dtn","code":"dtn","name":"Shreveport Downtown Airport","city":"Shreveport","state":"Louisiana","stateShort":"LA","country":"USA","description":"Shreveport Downtown Airport serves the city of Shreveport along with Shreveport Regional (SHV). Its airport code comes from its close proximty to the city’s *d*own*t*ow*n*.","imageCredit":"RedTail_Panther","imageCreditLink":"https://www.flickr.com/photos/redtailpanther/"},{"id":"dtw","code":"dtw","name":"Detroit Metropolitan Wayne County Airport","city":"Detroit","state":"Michigan","stateShort":"MI","country":"USA","description":"During World War II Detroit’s airport was known as Romulus Field, but in 1947 it was renamed to *D*etroi*t*-*W*ayne Major Airport.","imageCredit":"Scott Beale","imageCreditLink":"https://www.flickr.com/photos/laughingsquid/"},{"id":"dub","code":"dub","name":"Aerfort Bhaile Átha Cliath","nameEnglish":"Dublin Airport","city":"Dublin","city2":"Collinstown","state":"","stateShort":"","country":"Ireland","description":"Opened in 1940, Ireland’s busiest airport is located in its capital city of *Dub*lin.","imageCredit":"tearbringer","imageCreditLink":"https://www.flickr.com/photos/tearbringer/"},{"id":"dus","code":"dus","name":"Flughafen Düsseldorf","nameEnglish":"Düsseldorf Airport","city":"Düsseldorf","city2":"Dusseldorf","state":"","stateShort":"","country":"Germany","description":"In 1998, Rhine Ruhr Airport was renamed to *Düs*seldorf International, but dropped the ‘International’ in 2013.","imageCredit":"Éole Wind","imageCreditLink":"https://www.flickr.com/photos/eole/"},{"id":"dvo","code":"dvo","name":"Paliparang Pandaigdig ng Francisco Bangoy","nameEnglish":"Francisco Bangoy International Airport","city":"Davao City","city2":"Catitipan","state":"Mindanao","stateShort":"","country":"Philippines","description":"Francisco Bangoy International is named after Francisco Bangoy who donated the land on which the airport sits. Its airport code comes from its home in *D*a*v*a*o* City.","imageCredit":"danes96","imageCreditLink":"https://www.flickr.com/photos/danes96/"},{"id":"dxb","code":"dxb","name":"Dubai International Airport","city":"Dubai","city2":"Al Garhoud","state":"","stateShort":"","country":"United Arab Emirates","description":"When Dubai International opened in 1960, the airport code DUB was already in use by Dublin, Ireland. *D*u*b*ai subbed an ‘X’ for the U, making its unique airport code of DXB.","imageCredit":"Roger Price","imageCreditLink":"https://www.flickr.com/photos/rwp-roger/"},{"id":"dxr","code":"dxr","name":"Danbury Municipal Airport","city":"Danbury","state":"Connecticut","stateShort":"CT","country":"USA","description":"Opened in 1930, Danbury Municipal is a two-runway airport in Connecticut. Its airport code comes from *D*anbu*r*y, with an added ‘*X*’ as a filler letter once codes switched from two letters to three.","imageCredit":"Chris Burke","imageCreditLink":"https://www.flickr.com/photos/thirdworld/"},{"id":"dyu","code":"dyu","name":"Dushanbe International Airport","city":"Dushanbe","country":"Tajikistan","description":"Built in 1924, Dushanbe International was the first airport in Tajikistan. Until 1929, the city of Dushanbe was known in Russian as *Dyu*shambe, explaining its three-letter code of DYU.","imageCredit":"Irene2005","imageCreditLink":"https://www.flickr.com/photos/irene2005/"},{"id":"eat","code":"eat","name":"Pangborn Memorial Airport","city":"Wenatchee","state":"Washington","stateShort":"WA","country":"USA","description":"The FCC restricted U.S. airport codes from beginning with the letters ‘W’ and ‘K’, reserving them for radio station designations. Pangborn Memorial, located in the city of W*e*n*at*chee, opted for other letters to form EAT.","imageCredit":"Wendy House","imageCreditLink":"https://www.flickr.com/photos/thewendyhouse/"},{"id":"ebb","code":"ebb","name":"Entebbe International Airport","city":"Entebbe","city2":"Kampala","country":"Uganda","description":"Constructed in the late 1920s, Entebbe International is the primary international airport in Uganda. It serves the cities of *E*nte*bb*e and Kampala.","imageCredit":"LTC David Konop","imageCreditLink":"http://en.wikipedia.org/wiki/Entebbe_International_Airport#/media/File:Entebbe-international-airport-2009-001.jpg"},{"id":"edi","code":"edi","name":"Port-adhair Dhùn Èideann","nameEnglish":"Edinburgh Airport","city":"Edinburgh","state":"Scotland","stateShort":"","country":"UK","description":"Previously the location for Turnhouse Aerodrome and RAF Turnhouse airfield, Scotland’s busiest airport is located in the city of *Edi*nburgh.","imageCredit":"Paradasos","imageCreditLink":"https://www.flickr.com/photos/paradasos/"},{"id":"ege","code":"ege","name":"Eagle County Regional Airport","city":"Eagle","city2":"Gypsum","state":"Colorado","stateShort":"CO","country":"USA","description":"Eagle County Regional is sometimes called Vail/Eagle Airport, serving the ski resorts in Vail and Beaver Creek. Its airport code comes from its home in *E*a*g*l*e* County.","imageCredit":"David Benbennick","imageCreditLink":"http://en.wikipedia.org/wiki/Eagle_County_Regional_Airport#/media/File:Eagle_County_Airport_terminal.jpg"},{"id":"ein","code":"ein","name":"Vliegbasis Eindhoven","nameEnglish":"Eindhoven Airport","city":"Eindhoven","state":"","stateShort":"","country":"Netherlands","description":"Eindhoven Airport is also a military airbase, hosting the European Air Transport Command and the Movement Coordination Centre Europe. Its airport code comes from its home in *Ein*dhoven.","imageCredit":"Noel Hidalgo","imageCreditLink":"https://www.flickr.com/photos/noneck/"},{"id":"ema","code":"ema","name":"East Midlands Airport","city":"Nottingham","city2":"Castle Donington","city3":"Leicestershire","state":"England","stateShort":"","country":"UK","description":"Originally a Royal Air Force station, *E*ast *M*idlands *A*irport is located in Castle Donington in the East Midlands of England.","imageCredit":"Matt Buck","imageCreditLink":"https://www.flickr.com/photos/mattbuck007/"},{"id":"ens","code":"ens","name":"Enschede Vliegbasis Twente","nameEnglish":"Enschede Airport Twente","city":"Enschede","country":"Netherlands","description":"Originally opened in 1931, *Ens*chede Airport Twente no longer serves military or passenger flights. Traffic is limited to regional flying clubs for recreational use.","imageCredit":"Stefan Schlautmann","imageCreditLink":"https://www.flickr.com/photos/schlaus/"},{"id":"eri","code":"eri","name":"Erie International Airport","city":"Erie","state":"Pennsylvania","stateShort":"PA","country":"USA","description":"Also known as Tom Ridge Field, Erie International is a public airport serving the city of *Eri*e, Pennsylvania.","imageCredit":"John McCullough","imageCreditLink":"https://www.flickr.com/photos/cup_prof/"},{"id":"evn","code":"evn","name":"Zvart'nots' Mijazgayin Odanavakayan","nameEnglish":"Zvartnots International Airport","city":"Yerevan","city2":"Zvartnots","state":"","stateShort":"","country":"Armenia","description":"Armenia’s busiest airport get its name from its home in Zvartnots, but its airport code comes from the nearby capital city of Yer*ev*a*n*.","imageCredit":"p.fabian","imageCreditLink":"https://www.flickr.com/photos/fabianp/"},{"id":"ewr","code":"ewr","name":"Liberty International Airport","city":"Newark","state":"New Jersey","stateShort":"NJ","country":"USA","description":"When airport codes switched from two letters to three, the U.S. Navy reserved all codes starting with ‘N’. N*ew*a*r*k, then, used the other letters in its name to make EWR.","imageCredit":"BartNJ","imageCreditLink":"https://www.flickr.com/photos/bartzoni/"},{"id":"eyw","code":"eyw","name":"Key West International Airport","city":"Key West","state":"Florida","stateShort":"FL","country":"USA","description":"The FCC restricted U.S. airport codes from beginning with the letters ‘W’ and ‘K’, reserving them for radio station designations. K*ey* *W*est International, featuring one of the shortest runways in the U.S., opted for EYW.","imageCredit":"S Kaiser","imageCreditLink":"https://www.flickr.com/photos/ksr8s/"},{"id":"eze","code":"eze","name":"Aeropuerto Internacional Ministro Pistarini","nameEnglish":"Ministro Pistarini International Airport","city":"Buenos Aires","city2":"Ezeiza","state":"","stateShort":"","country":"Argentina","description":"Named after former Minister of Public Works, Juan Pistarini, the Buenos Aires airport’s code comes from *Eze*iza Partido where the airport is located. ","imageCredit":"Gilmar Mattos","imageCreditLink":"https://www.flickr.com/photos/gijlmar/"},{"id":"fae","code":"fae","name":"Vága Floghavn","nameEnglish":"Vágar Airport","city":"Sørvágur","city2":"Tórshavn","city3":"Vagar","state":"Vágar","stateShort":"","country":"Faroe Islands","description":"Built on the island of Vágar by the British Army during WWII, Vágar Airport is the only airport in the *Fa*ro*e* Islands.","imageCredit":"Arne List","imageCreditLink":"https://www.flickr.com/photos/arne-list/"},{"id":"fao","code":"fao","name":"Aeroporto Internacional de Faro","nameEnglish":"Faro International Airport","city":"Faro","state":"Algarve","stateShort":"","country":"Portugal","description":"Also known as Algarve Airport, Faro International opened in 1966. Its airport code honors its home in the city of *Fa*r*o*.","imageCredit":"Owen Rudge","imageCreditLink":"https://www.flickr.com/photos/orudge/"},{"id":"far","code":"far","name":"Hector International Airport","city":"Fargo","city2":"Moorhead","state":"North Dakota","stateShort":"ND","country":"USA","description":"Hector International is named after Martin Hector, local businessman who donated the land on which the aiport now sits. It serves the nearby cities of *Far*go and Moorhead.","imageCredit":"North Dakota National Guard","imageCreditLink":"https://www.flickr.com/photos/ndguard/"},{"id":"fat","code":"fat","name":"Fresno Yosemite International Airport","city":"Fresno","state":"California","stateShort":"CA","country":"USA","description":"Located about 60 miles south of its namesake national park, Fresno Yosemite International Airport was renamed in 1947 from *F*resno *A*ir *T*erminal.","imageCredit":"Mike Boening","imageCreditLink":"https://www.flickr.com/photos/memoriesbymike/"},{"id":"fca","code":"fca","name":"Glacier Park International Airport","city":"Kalispell","city2":"Flathead County","state":"Montana","stateShort":"MT","country":"USA","description":"Before being renamed to honor Montana's natural beauty, Glacier Park International was known as *F*lathead *C*ounty *A*irport.","imageCredit":"theilr","imageCreditLink":"https://www.flickr.com/photos/theilr/"},{"id":"fco","code":"fco","name":"Fiumicino – Aeroporto Internazionale Leonardo da Vinci","nameEnglish":"Leonardo da Vinci International Airport","city":"Rome","state":"","stateShort":"","country":"Italy","description":"Rome’s international airport honors the original Renaissance man, Leonardo da Vinci. It is often referred to as just *F*iumi*c*in*o* Airport, explaining its airport code of FCO.","imageCredit":"Maurizio Pucci","imageCreditLink":"https://www.flickr.com/photos/the_night_flier/"},{"id":"fdf","code":"fdf","name":"Aéroport International Martinique Aimé Césaire","nameEnglish":"Martinique Aimé Césaire International Airport","city":"Fort-de-France","city2":"Le Lamentin","state":"","stateShort":"Martinique","country":"France","description":"Martinique International is named after Aimé Césaire, French author and politician. Located in the suburb of Le Lamentin, it serves the capital city of *F*ort-*d*e-*F*rance.","imageCredit":"yXeLLe ~@rtBrut~","imageCreditLink":"https://www.flickr.com/photos/yxelle/"},{"id":"fez","code":"fez","name":"Fes–Saïss Airport","city":"Fes","city2":"Saïss","city3":"Saiss","state":"","stateShort":"","country":"Morocco","description":"Fes–Saïss Airport, or just Saïss Airport, serves the second-largest city in Morocco, Fes. It gets its airport code from the city’s alternate spelling: *Fez*.","imageCredit":"Ruben Balderas","imageCreditLink":"https://www.flickr.com/photos/furumaru/"},{"id":"fih","code":"fih","name":"N'Djili International Airport","city":"Kinshasa","country":"Democratic Republic of the Congo","description":"N’Djili International is named after the nearby Ndjili River. The airport was built while the Congo was under Belgian rule, so it is said its airport code comes from the word *F*lem*i*s*h*.","imageCredit":"Humprey J. L. Boyelo","imageCreditLink":"http://en.wikipedia.org/wiki/N%27djili_Airport#/media/File:A%C3%A9roport_International_de_N%27djili_Kinshasa.JPG"},{"id":"fkb","code":"fkb","name":"Flughafen Karlsruhe/Baden-Baden","nameEnglish":"Baden Airpark","city":"Rheinmünster","city2":"Karlsruhe","city3":"Baden-Baden","country":"Germany","description":"Originally used as a military airfield, *F*lughafen *K*arlsruhe/*B*aden-Baden is located in the town of Rheinmünster and is a part of Baden Airpark.","imageCredit":"Tiago Miranda","imageCreditLink":"https://www.flickr.com/photos/tiago_miranda94/"},{"id":"fll","code":"fll","name":"Fort Lauderdale–Hollywood International Airport","city":"Fort Lauderdale","city2":"Miami","city3":"Broward County","state":"Florida","stateShort":"FL","country":"USA","description":"Formerly Broward County Airport, Fort Lauderdale–Hollywood International serves the greater Miami area, situated between the cities of *F*ort *L*auderda*l*e and Hollywood, Florida.","imageCredit":"Wally Gobetz","imageCreditLink":"https://www.flickr.com/photos/wallyg/"},{"id":"flr","code":"flr","name":"Aeroporto di Firenze-Peretola","nameEnglish":"Florence Airport, Peretola","city":"Florence","city2":"Peretola","state":"Tuscany","stateShort":"","country":"Italy","description":"Formally known as Amerigo Vespucci Airport after the Italian cartographer, *Fl*o*r*ence Airport is located in the suburb of Peretola.","imageCredit":"Martin Kalfatovic","imageCreditLink":"https://www.flickr.com/photos/travelinglibrarian/"},{"id":"fmo","code":"fmo","name":"Flughafen Münster/Osnabrück","nameEnglish":"Münster Osnabrück International Airport","city":"Münster","city2":"Osnabrück","city3":"Greven","state":"NRW","country":"Germany","description":"Located in the town of Greven, *F*lughafen *M*ünster *O*snabrück is a minor airport that serves the northern part of North Rhine-Westphalia and the surrounding areas since 1974.","imageCredit":"Rüdiger Wölk","imageCreditLink":"https://commons.wikimedia.org/wiki/File:Flughafen_M%C3%BCnster_Osnabr%C3%BCck8749.jpg"},{"id":"fnc","code":"fnc","name":"Aeroporto da Madeira","nameEnglish":"Madeira Airport","city":"Funchal","city2":"Santa Catarina","city3":"Santa Cruz","state":"Região Autónoma da Madeira","country":"Portugal","description":"Opened in 1964, Madeira Airport is the only airport in the Portuguese archipelago Madeira in the Atlantic Ocean. It serves the capital city of *F*u*nc*hal.","imageCredit":"Alexander Baxevanis","imageCreditLink":"https://www.flickr.com/photos/futureshape/"},{"id":"fnt","code":"fnt","name":"Bishop International Airport","city":"Flint","state":"Michigan","stateShort":"MI","country":"USA","description":"Bishop International is named after former General Motors board member, Arthur Bishop, whose farmland later became the airport grounds. Its airport code honors its home in the city of *F*li*nt*.","imageCredit":"nein09","imageCreditLink":"https://www.flickr.com/photos/nein09/"},{"id":"fra","code":"fra","name":"Flughafen Frankfurt am Main","nameEnglish":"Frankfurt Airport","city":"Frankfurt","state":"","stateShort":"","country":"Germany","description":"Opened commercially in 1936, Germany’s busiest airport is located in the city of *Fra*nkfurt.","imageCredit":"Nicolás Rupcich","imageCreditLink":"https://www.flickr.com/photos/nicolasrupcich/"},{"id":"fru","code":"fru","name":"Manas International Airport","city":"Bishkek","state":"","stateShort":"","country":"Kyrgyzstan","description":"Opened in 1974, Manas International is named after Manas, the epic hero of the Kyrgyz people. Its airport code comes from the capital city of Bishkek’s former name: *Fru*nze.","imageCredit":"Glen Osokin","imageCreditLink":"http://en.wikipedia.org/wiki/Manas_International_Airport#/media/File:Bishkek_-_Manas_(FRU_-_UAFM)_AN1593528.jpg"},{"id":"fsc","code":"fsc","name":"Aéroport Figari-Sud Corse","nameEnglish":"Figari South Corsica Airport","city":"Porto-Vecchio","city2":"Figari","city3":"Corse-du-Sud","country":"France","description":"Opened in 1975, Figari–Sud Corse Airport is located on the island of Corsica near the commune of Porto-Vecchio. It is also referred to as *F*igari *S*outh *C*orsica Airport.","imageCredit":"Patrick Nouhailler","imageCreditLink":"https://www.flickr.com/photos/patrick_nouhailler/"},{"id":"fsd","code":"fsd","name":"Sioux Falls Regional Airport","city":"Sioux Falls","state":"South Dakota","stateShort":"SD","country":"USA","description":"Sioux Falls Regional is also known as Joe *F*o*s*s Fiel*d*, named after aviator and Medal of Honor recipient Joe Foss.","imageCredit":"Donna","imageCreditLink":"https://www.flickr.com/photos/pugfreak/"},{"id":"fsp","code":"fsp","name":"Aéroport de Saint-Pierre","nameEnglish":"Saint-Pierre Airport","city":"Saint-Pierre, Saint Pierre and Miquelon","country":"France","description":"Opened in 1999, Saint-Pierre Airport serves the city of Saint-Pierre, capital of the overseas collectivity of *F*rance, *S*aint *P*ierre and Miquelon.","imageCredit":"Peg Haese & Paul DeWitte","imageCreditLink":"http://hamradio.pnpfarms.com/"},{"id":"fsz","code":"fsz","name":"Shizuoka Airport","city":"Shizuoka","city2":"Makinohara","city3":"Shimada","state":"","stateShort":"","country":"Japan","description":"Located in Makinohara and Shimada, Shizuoka Airport is often called Mt. *F*uji *S*hi*z*uoka Airport.","imageCredit":"peaceful-jp-scenery","imageCreditLink":"https://www.flickr.com/photos/peaceful-jp-scenery/"},{"id":"fuk","code":"fuk","name":"Fukuoka Airport","city":"Fukuoka","country":"Japan","description":"Originally built in 1943 and formerly known as Mushiroda Airfield and Itazuke Air Base, Fukuoka Airport gets its three-letter code from the city of *Fuk*uoka.","imageCredit":"Naoko Takano","imageCreditLink":"https://www.flickr.com/photos/naokomc/"},{"id":"fun","code":"fun","name":"Funafuti International Airport","city":"Funafuti","state":"","stateShort":"","country":"Tuvalu","description":"Originally built by the U.S. Navy during World War II, Funafuti International now serves the capital city of *Fun*afuti with three flights per week.","imageCredit":"Nick Hobgood","imageCreditLink":"https://www.flickr.com/photos/globalvoyager/"},{"id":"fwa","code":"fwa","name":"Fort Wayne International Airport","city":"Fort Wayne","state":"Indiana","stateShort":"IN","country":"USA","description":"Renamed in 1991, Fort Wayne International was previously named Baer Field, after Lieutenant Paul Baer, the first flying ace in U.S. military history. Its airport code honors the city of *F*ort *Wa*yne.","imageCredit":"Samuraijohnny","imageCreditLink":"https://www.flickr.com/photos/samuraislice/"},{"id":"gan","code":"gan","name":"Gan International Airport","city":"Gan","state":"Addu Atoll","stateShort":"","country":"Maldives","description":"Used as a military air base until 1976, Gan International gets its airport code from its home on the island of *Gan* in Addu Atoll.","imageCredit":"DD","imageCreditLink":"https://www.flickr.com/photos/didi8/"},{"id":"gau","code":"gau","name":"Lokpriya Gopinath Bordoloi International Airport","city":"Guwahati","city2":"Gowhatty","city3":"Gauhati","state":"Assam","stateShort":"AS","country":"India","description":"Lokpriya Gopinath Bordoloi International is named after the freedom fighter and former first Chief Minister of its home state, Assam. Its airport code comes from a former spelling of Guwahati: *Gau*hati.","imageCredit":"Abymac","imageCreditLink":"http://commons.wikimedia.org/wiki/File:Guwahati_Airport_in_2011.jpg"},{"id":"gdl","code":"gdl","name":"Aeropuerto Internacional de Guadalajara","nameEnglish":"Guadalajara International Airport","city":"Guadalajara","state":"Jalisco","stateShort":"JAL","country":"Mexico","description":"Guadalajara International’s ceremonial name honors Miguel Hidalgo, leader of the Mexican War of Independence. Its airport code honors its home in the city of *G*ua*d*a*l*ajara.","imageCredit":"Bill Bumgarner","imageCreditLink":"https://www.flickr.com/photos/bbum/"},{"id":"gdn","code":"gdn","name":"Port Lotniczy Gdańsk im. Lecha Wałęsy","nameEnglish":"Gdansk Lech Walesa Airport","city":"Gdańsk","state":"","stateShort":"","country":"Poland","description":"Opened in 1974, Gdansk Lech Walesa Airport is named after Lech Walesa, former Polish president. Its airport code honors its home city of *Gd*a*n*sk.","imageCredit":"magro_kr","imageCreditLink":"https://www.flickr.com/photos/iks_berto/"},{"id":"geg","code":"geg","name":"Spokane International Airport","city":"Spokane","state":"Washington","stateShort":"WA","country":"USA","description":"Before being renamed in 1960, Spokane International was known as *Ge*i*g*er Field, honoring U.S. Army aviator, Major Harold Geiger.","imageCredit":"Brendan Biele","imageCreditLink":"https://www.flickr.com/photos/brendanbiele/"},{"id":"ggt","code":"ggt","name":"Exuma International Airport","city":"Great Exuma","city2":"Moss Town","city3":"George Town","country":"Bahamas","description":"Exuma International is located on the island of Great Exuma near the city of Moss Town. Its airport code comes from the Exuma capital city of *G*eor*g*e *T*own.","imageCredit":"Daniel Piraino","imageCreditLink":"https://www.flickr.com/photos/aerialcamera/"},{"id":"gib","code":"gib","name":"Gibraltar International Airport","city":"Gibraltar","state":"","stateShort":"","country":"UK","description":"Gibraltar International is one of the “Most Extreme Airports” due to Winston Churchill Avenue directly intersecting the runway. Its airport code comes from its location in *Gib*raltar.","imageCredit":"Steve Slater","imageCreditLink":"https://www.flickr.com/photos/wildlife_encounters/"},{"id":"gig","code":"gig","name":"Aeroporto Internacional do Galeão–Antonio Carlos Jobim","nameEnglish":"Galeão–Antonio Carlos Jobim International Airport","city":"Rio de Janeiro","state":"Rio de Janeiro","stateShort":"RJ","country":"Brazil","description":"Formerly known as Galeão Air Force Base, Galeão International was created in 1941 on *G*overnador *I*sland’s *G*aleão Beach in Rio de Janeiro.","imageCredit":"Victor Camilo","imageCreditLink":"https://www.flickr.com/photos/victorcamilo/"},{"id":"gjt","code":"gjt","name":"Grand Junction Regional Airport","city":"Grand Junction","state":"Colorado","stateShort":"CO","country":"USA","description":"*G*rand *J*unc*t*ion Regional is also called Walker Field, named after Walter Walker, a local publisher who helped raise funding and support for the airport’s development.","imageCredit":"Marshall Segal","imageCreditLink":"https://www.flickr.com/photos/marshallsegal/"},{"id":"gla","code":"gla","name":"Port-adhair Eadar-nàiseanta Ghlaschu","nameEnglish":"Glasgow Airport","city":"Glasgow","state":"Scotland","stateShort":"","country":"UK","description":"Known as HMS Sanderling during World War II and later as Glasgow Abbotsinch Airport, Scotland’s second busiest airport honors its home in *Gla*sgow.","imageCredit":"Paisley Scotland","imageCreditLink":"https://www.flickr.com/photos/paisleyorguk/"},{"id":"glu","code":"glu","name":"Gelephu Airport","city":"Gelephu","country":"Bhutan","description":"Inaugurated in 2012, Gelephu Airport has been closed until a new terminal and control tower can be built. Its airport code comes from its home near the town of *G*e*l*eph*u* in Sarpang District.","imageCredit":"Andrea Williams","imageCreditLink":"https://www.flickr.com/photos/greentea/"},{"id":"gmp","code":"gmp","name":"Gimpo International Airport","city":"Seoul","city2":"Gangseo District","state":"Korea","country":"South Korea","description":"*G*i*mp*o International Airport, located in Gangseo-gu of Seoul, was the main airport for Seoul and South Korea until being replaced by Incheon International Airport in 2011.","imageCredit":"Seoul Korea","imageCreditLink":"https://www.flickr.com/photos/seoulkorea/"},{"id":"gnv","code":"gnv","name":"Gainesville Regional Airport","city":"Gainesville","state":"Florida","stateShort":"FL","country":"USA","description":"Gainesville Regional, renamed in 1977, was previously known as John R. Alison Airport. Its airport code honors its home in the city of *G*ai*n*es*v*ille, Florida.","imageCredit":"DouglasGreen","imageCreditLink":"http://commons.wikimedia.org/wiki/File:Dsg_Gainesville_Regional_Airport_Interior_West_Lobby_20050507.jpg"},{"id":"goi","code":"goi","name":"Goa International Airport","city":"Dabolim","state":"Goa","stateShort":"GA","country":"India","description":"Goa Airport is located in the city of Dabolim and is the only airport in the state. Its airport code comes from its name, *Go*a *I*nternational.","imageCredit":"Daniel Incandela","imageCreditLink":"https://www.flickr.com/photos/incandopolis/"},{"id":"got","code":"got","name":"Göteborg Landvetter Airport","nameEnglish":"Goteborg Landvetter Airport","city":"Gothenburg","city2":"Landvetter","state":"","stateShort":"","country":"Sweden","description":"Originally opened in 1977, Göteborg Landvetter Airport is Sweden’s second-largest airport and gets its airport code from the city it serves: *Got*henburg.","imageCredit":"Silfa Zoidberg","imageCreditLink":"https://www.flickr.com/photos/95567397@N02/"},{"id":"gov","code":"gov","name":"Gove Airport","city":"Nhulunbuy","city2":"Gove Peninsula","state":"Northern Territory","stateShort":"NT","country":"Australia","description":"Built during World War II as RAAF Base Gove, Gove Airport serves the city of Nhulunbuy and several Aboriginal communities. It gets its name and airport code from its home on the *Gov*e Peninsula.","imageCredit":"Stephen Michael Barnett","imageCreditLink":"https://www.flickr.com/photos/httpwwwflickrcomphotostopend/"},{"id":"grb","code":"grb","name":"Austin Straubel International Airport","city":"Green Bay","state":"Wisconsin","stateShort":"WI","country":"USA","description":"Austin Straubel International is named after U.S. Army Air Corps Lt. Col. Austin Straubel, the first Brown County aviator to die while in service. Its code comes from the city of *Gr*een *B*ay.","imageCredit":"GRBAirport","imageCreditLink":"https://twitter.com/grbairport/"},{"id":"gro","code":"gro","name":"Aeropuerto de Girona-Costa Brava","nameEnglish":"Girona–Costa Brava Airport","city":"Girona","city2":"Costa Brava","state":"","stateShort":"","country":"Spain","description":"Built in 1965 and located near the village of Vilobí d'Onyar, Girona–Costa Brava Airport gets its code from the city of *G*i*ro*na.","imageCredit":"Lukáš Lalinský","imageCreditLink":"https://www.flickr.com/photos/lukasl/"},{"id":"grr","code":"grr","name":"Gerald R. Ford International Airport","city":"Grand Rapids","state":"Michigan","stateShort":"MI","country":"USA","description":"In December of 1999, Kent County International Airport was renamed to honor former President Gerald R. Ford. Its airport code honors its home in *Gr*and *R*apids.","imageCredit":"Bill Couch","imageCreditLink":"https://www.flickr.com/photos/wcouch/"},{"id":"gru","code":"gru","name":"Aeroporto Internacional Guarulhos–Governador André Franco Montoro","nameEnglish":"Guarulhos–Governador André Franco Montoro International Airport","city":"São Paulo","city2":"Sao Paulo","city3":"Guarulhos","state":"São Paulo","stateShort":"SP","country":"Brazil","description":"The São Paulo Airport’s name honors former governor André Franco Montoro, but its airport code honors its home in *G*ua*ru*lhos.","imageCredit":"Fernando Stankuns","imageCreditLink":"https://www.flickr.com/photos/stankuns/"},{"id":"gso","code":"gso","name":"Piedmont Triad International Airport","city":"Greensboro","city2":"High Point","city3":"Winston-Salem","state":"North Carolina","stateShort":"NC","country":"USA","description":"Often called PTI, Piedmont Triad International dates back to the late 1920s and serves the Piedmont Triad area of North Carolina including the cities of *G*reen*s*bor*o*, High Point, and Winston-Salem.","imageCredit":"Thomas Lillis IV","imageCreditLink":"https://www.flickr.com/photos/ct_barbarian/"},{"id":"gsp","code":"gsp","name":"Greenville–Spartanburg International Airport","city":"Greenville","city2":"Spartanburg","city3":"Greer","state":"South Carolina","stateShort":"SC","country":"USA","description":"Located in Greer and often called Roger Milliken Field, Greenville–Spartanburg International’s code comes from *G*reenville and *Sp*artanburg, the two cities it serves.","imageCredit":"Randy Nichols","imageCreditLink":"https://www.flickr.com/photos/randynickatnite/"},{"id":"gtr","code":"gtr","name":"Golden Triangle Regional Airport","city":"Columbus","city2":"Starkville","city3":"West Point","state":"Mississippi","stateShort":"MS","country":"USA","description":"Golden Triangle Regional Airport serves the *G*olden *Tr*iangle region of Mississippi, made by the three cities of Columbus, Starkville, and West Point.","imageCredit":"Roger Smith","imageCreditLink":"https://www.flickr.com/photos/rogersmith/"},{"id":"gua","code":"gua","name":"Aeropuerto Internacional La Aurora","nameEnglish":"La Aurora International Airport","city":"Guatemala City","state":"","stateShort":"","country":"Guatemala","description":"La Aurora International was developed as *Gua*temala City Air Base by the U.S. Army Air Forces during World War II. In 1949, the base was closed and handed over to Guatemala. Today it is the primary airport in Guatemala.","imageCredit":"xiroro","imageCreditLink":"https://www.flickr.com/photos/xiroro/"},{"id":"gva","code":"gva","name":"Aéroport international de Genève","nameEnglish":"Geneva International Airport","city":"Geneva","city2":"Meyrin","city3":"Le Grand-Saconnex","state":"","stateShort":"","country":"Switzerland","description":"Started in 1919, Geneva International is partially located in both the municipalities of Meyrin and Le Grand-Saconnex. Its airport code comes from the city it serves, *G*ene*va*.","imageCredit":"Julien Belli","imageCreditLink":"https://www.flickr.com/photos/julienbelli/"},{"id":"gyd","code":"gyd","name":"Heydar Aliyev International Airport","city":"Baku","state":"","stateShort":"","country":"Azerbaijan","description":"In 2004, Baku’s airport was renamed and changed its airport code from BAK to GYD in honor of former Azerbaijan President Heydar Aliyev, sometimes spelled *G*a*yd*ar Aliev.","imageCredit":"ge'shmally","imageCreditLink":"https://www.flickr.com/photos/geshmally/"},{"id":"gye","code":"gye","name":"Aeropuerto Internacional José Joaquín de Olmedo","nameEnglish":"José Joaquín de Olmedo International Airport","city":"Guayaquil","state":"Guayas","stateShort":"","country":"Ecuador","description":"José Joaquín de Olmedo International is named after former President José Joaquín de Olmedo. Its airport code comes from its home in the city of *G*ua*y*aquil, *E*cuador.","imageCredit":"Celina Ortelli","imageCreditLink":"https://www.flickr.com/photos/celi-online/"},{"id":"gyn","code":"gyn","name":"Aeroporto Internacional Santa Genoveva","nameEnglish":"Santa Genoveva International Airport","city":"Goiânia","city2":"Goiania","state":"Goiás","stateShort":"GO","country":"Brazil","description":"Inaugurated in 1955, Santa Genoveva International is named after Genoveva Torres Morales and its code comes from *G*oiâ*n*ia. The ‘*Y*’ could come from Go*y*az, Goiás state’s former name, but it is likely a filler letter.","imageCredit":"Infraero Aeroportos","imageCreditLink":"https://www.flickr.com/photos/infraero/"},{"id":"haj","code":"haj","name":"Flughafen Hannover-Langenhagen","nameEnglish":"Hannover Airport","city":"Hannover","city2":"Langenhagen","state":"","stateShort":"","country":"Germany","description":"Located in the town of Langenhagen, Hannover Airport’s code combines its home in *Ha*nnover and German aviator Karl *J*atho, who also lends his name to one of the terminals.","imageCredit":"Jan-Christoph Behre","imageCreditLink":"https://www.flickr.com/photos/jcbehre/"},{"id":"ham","code":"ham","name":"Flughafen Hamburg","nameEnglish":"Hamburg Airport","city":"Hamburg","state":"","stateShort":"","country":"Germany","description":"Hamburg Airport was opened in January of 1911 and serves Germany’s second-largest city, *Ham*burg.","imageCredit":"Medvedev","imageCreditLink":"http://en.wikipedia.org/wiki/Hamburg_Airport#/media/File:HH-Airport_Terminal2_03.jpg"},{"id":"haq","code":"haq","name":"Hanimaadhoo International Airport","city":"Hanimaadhoo","state":"Haa Dhaalu Atoll","country":"Maldives","description":"Upgraded to an international airport in 2012, Hanimaadhoo Airport is located in Haa Dhaalu Atoll. Its airport code comes from the island of *Ha*nimaadhoo, plus a helpful ‘*Q*’ as a filler letter.","imageCredit":"Andreas Faessler","imageCreditLink":"http://en.wikipedia.org/wiki/Hanimaadhoo_International_Airport#/media/File:Hanimaadhoo_Airport.jpg"},{"id":"hav","code":"hav","name":"Aeropuerto José Martí","nameEnglish":"José Martí International Airport","city":"Havana","state":"","country":"Cuba","description":"Originally Rancho-Boyeros Airport, José Martí International is named after Cuban national hero and poet, José Martí. Its airport code honors its home in the city of *Hav*ana.","imageCredit":"Travel Aficionado","imageCreditLink":"https://www.flickr.com/photos/travel_aficionado/"},{"id":"hel","code":"hel","name":"Helsinki-Vantaan lentoasema","nameEnglish":"Helsinki-Vantaa Airport","city":"Helsinki","city2":"Vantaa","state":"","stateShort":"","country":"Finland","description":"Located in the city of Vantaa, Finland’s busiest airport was originally built for the 1952 Summer Olympics in *Hel*sinki.","imageCredit":"Sergey Nazarov","imageCreditLink":"https://www.flickr.com/photos/phearnot/"},{"id":"hgh","code":"hgh","name":"Hangzhou Xiaoshan International Airport","city":"Hangzhou","city2":"Zhejiang","state":"Xiaoshan District","stateShort":"","country":"China","description":"Originally opened in 2000 and replacing Hangzhou Jianqiao Airport, Hangzhou Xiaoshan International gets its airport code from its home in *H*an*g*z*h*ou.","imageCredit":"eager","imageCreditLink":"https://www.flickr.com/photos/eager/"},{"id":"hhn","code":"hhn","name":"Flughafen Frankfurt-Hahn","nameEnglish":"Frankfurt–Hahn Airport","city":"Kirchberg","state":"Rhineland-Palatinate","stateShort":"","country":"Germany","description":"Originally Hahn Air Base, Frankfurt–Hahn Airport gets its name and airport code from the nearby village of *H*a*hn* in Rhineland-Palatinate.","imageCredit":"N.","imageCreditLink":"https://www.flickr.com/photos/cmdrfire/"},{"id":"hkd","code":"hkd","name":"Hakodate Airport","city":"Hakodate","city2":"Hokkaido","state":"","stateShort":"","country":"Japan","description":"Opened in 1961, Hakodate Airport gets its airport code from its home in the city of *H*a*k*o*d*ate.","imageCredit":"Hideyuki KAMON","imageCreditLink":"https://www.flickr.com/photos/hyougushi/"},{"id":"hkg","code":"hkg","name":"Hong Kong International Airport","city":"Hong Kong","city2":"Chek Lap Kok","state":"","stateShort":"","country":"China","description":"Hong Kong International is located on the island of Chek Lap Kok and is often called Chek Lap Kok Airport. Its three-letter airport code stands for *H*ong *K*on*g*.","imageCredit":"Chris","imageCreditLink":"https://www.flickr.com/photos/dcmaster/"},{"id":"hkt","code":"hkt","name":"Phuket International Airport","city":"Phuket","state":"","stateShort":"","country":"Thailand","description":"Phuket International is an important gateway to Thailand for tourists visiting P*h*u*k*e*t* Island. It is Thailand’s third busiest airport.","imageCredit":"Andy Mitchell","imageCreditLink":"https://www.flickr.com/photos/monstermunch/"},{"id":"hlp","code":"hlp","name":"Bandar Udara Halim Perdanakusuma","nameEnglish":"Halim Perdanakusuma International Airport","city":"Jakarta","city2":"East Jakarta","state":"","stateShort":"","country":"Indonesia","description":"Halim Perdanakusuma International is Jakarta’s primary airport for military, private, and government flights. It is named after Air Vice-Marshal and national hero Abdul *H*a*l*im *P*erdanakusuma for his service in World War II.","imageCredit":"Andri Priyo Utomo","imageCreditLink":"https://www.flickr.com/photos/icokz/"},{"id":"hmo","code":"hmo","name":"Aeropuerto Internacional General Ignacio Pesqueira García","nameEnglish":"General Ignacio Pesqueira García International Airport","city":"Hermosillo","state":"Sonora","stateShort":"SO","country":"Mexico","description":"Often called just Hermosillo Airport, General Ignacio Pesqueira García International is named after Ignacio Pesqueira, 19th century Mexican army general. Its airport code honors its home in the city of *H*er*mo*sillo.","imageCredit":"Octavio Ruiz Cervera","imageCreditLink":"https://www.flickr.com/photos/tacvbo/"},{"id":"hnd","code":"hnd","name":"Tokyo International Airport","city":"Tokyo","state":"","stateShort":"","country":"Japan","description":"Up until 1952, the Tokyo Airport was officially named after Haneda, the former fishing town where it is now located. Many still call it the *H*a*n*e*d*a Airport.","imageCredit":"Hideyuki KAMON","imageCreditLink":"https://www.flickr.com/photos/hyougushi/"},{"id":"hnl","code":"hnl","name":"Honolulu International Airport","city":"Honolulu","city2":"Oahu","state":"Hawaii","stateShort":"HI","country":"USA","description":"Before being renamed in 1947, Honolulu International was known as John Rodgers Airport, honoring the World War II naval officer. Its airport code honors its home in *H*o*n*o*l*ulu.","imageCredit":"Brian Burger","imageCreditLink":"https://www.flickr.com/photos/wirelizard/"},{"id":"hnm","code":"hnm","name":"Hana Airport","city":"Hana","state":"Hawaii","stateShort":"HI","country":"USA","description":"Hana Airport is a single runway located near the town of *H*a*n*a, on the east shore of *M*aui.","imageCredit":"Forest and Kim Starr","imageCreditLink":"https://www.flickr.com/photos/starr-environmental/"},{"id":"hog","code":"hog","name":"Frank País Airport","city":"Holguín","city2":"Holguin","state":"","country":"Cuba","description":"Originally a postal airport which opened in 1943, Frank País Airport is now home to the Cuban Revolutionary Armed Forces Eastern Command. The airport gets its code from *Ho*l*g*uín, the city in which it’s located.","imageCredit":"Willem van Bergen","imageCreditLink":"https://www.flickr.com/photos/willimvanbergen/"},{"id":"hou","code":"hou","name":"William P. Hobby Airport","city":"Houston","state":"Texas","stateShort":"TX","country":"USA","description":"Once named after aviator Howard Hughes, *Hou*ston’s oldest commercial airport was renamed in 1967 to honor former Texas governor William P. Hobby.","imageCredit":"Ryan Basilio","imageCreditLink":"https://www.flickr.com/photos/thetalesend/"},{"id":"hpn","code":"hpn","name":"Westchester County Airport","city":"White Plains","state":"New York","stateShort":"NY","country":"USA","description":"Built during World War II for the Air National Guard, Westchester County Airport gets its airport code from three Westchester towns: *H*arrison, *P*urchase, and *N*orth Castle.","imageCredit":"Terretta","imageCreditLink":"https://www.flickr.com/photos/terretta/"},{"id":"hqm","code":"hqm","name":"Bowerman Airport","city":"Hoquiam","city2":"Grays Harbor County","state":"Washington","stateShort":"WA","country":"USA","description":"Originally built during World War II, Bowerman Airport is named after Lt. Robert C. Bowerman, U.S. Air Force pilot. Its airport code comes from its home in the city of *H*o*q*uia*m*.","imageCredit":"Steve Voght","imageCreditLink":"https://www.flickr.com/photos/voght/"},{"id":"hre","code":"hre","name":"Harare International Airport","city":"Harare","country":"Zimbabwe","description":"Opened in 1957 as Salisbury Airport, Harare International serves the city of *H*ara*re* in Zimbabwe.","imageCredit":"Annette Lyn O'Neil","imageCreditLink":"https://www.flickr.com/photos/annette_oneil/"},{"id":"hri","code":"hri","name":"Mattala Rajapaksa International Airport","city":"Hambantota","city2":"Mattala","state":"","stateShort":"","country":"Sri Lanka","description":"Mattala Rajapaksa International is named after the Rajapaksas, a prominent political family. Its airport codes comes from its location near *H*ambantota, S*ri* Lanka.","imageCredit":"Anuradha Dullewe Wijeyeratne","imageCreditLink":"http://en.wikipedia.org/wiki/Mattala_Rajapaksa_International_Airport#/media/File:Mattala_Rajapaksa_International_Airport_Check-in_counters.jpg"},{"id":"hsv","code":"hsv","name":"Huntsville International Airport","city":"Huntsville","state":"Alabama","stateShort":"AL","country":"USA","description":"Opened in 1967, Huntsville International gets its three-letter airport code from its home in the city of *H*unt*sv*ille.","imageCredit":"Richard Bitting","imageCreditLink":"https://www.flickr.com/photos/rbitting/"},{"id":"hya","code":"hya","name":"Barnstable Municipal Airport","city":"Cape Cod","city2":"Hyannis","state":"Massachusetts","stateShort":"MA","country":"USA","description":"Founded in 1928, Barnstable Municipal is also called Boardman/Polando Field, named after aviators Russell Boardman and John Polando. It serves Cape Cod and is located in the village of *Hya*nnis in Barnstable.","imageCredit":"Nick Sherman","imageCreditLink":"https://www.flickr.com/photos/nicksherman/"},{"id":"hyd","code":"hyd","name":"Rajiv Gandhi International Airport","city":"Hyderabad","state":"Telangana","stateShort":"TG","country":"India","description":"Rajiv Gandhi International was named to honor the former Indian prime minister. Its airport code honors its home in the city of *Hyd*erabad.","imageCredit":"vijaynov","imageCreditLink":"https://www.flickr.com/photos/vijaynov/"},{"id":"iad","code":"iad","name":"Dulles International Airport","city":"Washington D.C.","state":"Virginia","stateShort":"VA","country":"USA","description":"*D*ulles *I*nternational *A*irport’s three-letter code was once DIA. When hand-written, it was often misread as DCA, another Washington airport. It was reversed to IAD to avoid confusion.","imageCredit":"The Q Speaks","imageCreditLink":"https://www.flickr.com/photos/theqspeaks/"},{"id":"iah","code":"iah","name":"George Bush Intercontinental Airport","city":"Houston","state":"Texas","stateShort":"TX","country":"USA","description":"In 1997 the airport was renamed after former President George H.W. Bush, but was previously known as *I*ntercontinental *A*irport *H*ouston.","imageCredit":"Josh Hallett","imageCreditLink":"https://www.flickr.com/photos/hyku/"},{"id":"icn","code":"icn","name":"Incheon International Airport","city":"Seoul","city2":"Jung District","state":"Korea","stateShort":"","country":"South Korea","description":"The airport that serves the Seoul Metro Area is actually located on a man-made piece of land between Yeongjong and Yongyu islands, west of *I*n*c*heo*n*’s city center.","imageCredit":"Marcella Bona","imageCreditLink":"https://www.flickr.com/photos/marcella_bona/"},{"id":"ict","code":"ict","name":"Dwight D. Eisenhower National Airport","city":"Wichita","state":"Kansas","stateShort":"KS","country":"USA","description":"The FCC restricted U.S. airport codes from beginning with the letters ‘W’ and ‘K’, reserving them for radio station designations. Formerly named Mid-Continent Airport, W*ic*hi*t*a opted for ICT.","imageCredit":"Michael Sauers","imageCreditLink":"https://www.flickr.com/photos/travelinlibrarian/"},{"id":"ida","code":"ida","name":"Idaho Falls Regional Airport","city":"Idaho Falls","city2":"Bonneville County","state":"Idaho","stateShort":"ID","country":"USA","description":"Owned by the city of *Ida*ho Falls and formerly known as Fanning Field, Idaho Falls Regional’s current terminal was built in 1959 and has been remodeled several times since.","imageCredit":"Dean Shareski","imageCreditLink":"https://www.flickr.com/photos/shareski/"},{"id":"idr","code":"idr","name":"Devi Ahilyabai Holkar Airport","city":"Indore","state":"Madhya Pradesh","stateShort":"MP","country":"India","description":"Devi Ahilyabai Holkar is named after Maharani Ahilya Bai Holkar, Holkar Queen of the Maratha Empire. Its airport code comes from its home in the city of *I*n*d*o*r*e.","imageCredit":"Srinivasan Rajappa","imageCreditLink":"https://www.flickr.com/photos/103156856@N05/"},{"id":"iev","code":"iev","name":"Kyiv International Airport","city":"Kiev","city2":"Zhuliany","state":"","stateShort":"","country":"Ukraine","description":"Started in 1923 as a military airfield, Kyiv International’s terminal building wasn't built until 1949. Located in the neighborhood of Zhuliany, its airport code comes from the capital city of K*iev*.","imageCredit":"Igor Bubin","imageCreditLink":"http://en.wikipedia.org/wiki/Kyiv_International_Airport_%28Zhuliany%29#/media/File:Kiev_-_Zhulyany_(IEV_-_UKKK)_AN2250734.jpg"},{"id":"ika","code":"ika","name":"Tehran Imam Khomeini International Airport","city":"Tehran","city2":"Ahmadabad","country":"Iran","description":"Located in Ahmadabad and serving the city of Tehran, *I*mam *K*homeini *A*irport is named after Ruhollah Khomeini, leader of the 1979 Iranian Revolution.","imageCredit":"Mamooli","imageCreditLink":"https://www.flickr.com/photos/babairan/"},{"id":"ind","code":"ind","name":"Indianapolis International Airport","city":"Indianapolis","state":"Indiana","stateShort":"IN","country":"USA","description":"Before being renamed in 1976, Indianapolis International was called Weir-Cook Municipal, honoring World War I flying ace Colonel Harvey Weir-Cook. Its airport code honors its home in *Ind*ianapolis.","imageCredit":"Don J Schulte","imageCreditLink":"https://www.flickr.com/photos/oxherder/"},{"id":"inv","code":"inv","name":"Port-adhair Inbhir Nis","nameEnglish":"Inverness Airport","city":"Inverness","city2":"Dalcross","state":"Scotland","stateShort":"","country":"UK","description":"Originally built in 1940 as a Royal Air Force station, Inverness Airport is located in Dalcross, Highland and serves the city of *Inv*erness.","imageCredit":"Di’s Motion Pictures","imageCreditLink":"https://www.flickr.com/photos/dianakayjordan/"},{"id":"iom","code":"iom","name":"Isle of Man Airport","city":"Ronaldsway","stateShort":"Isle of Man","country":"UK","description":"Started as an airfield in 1928, *I*sle *o*f *M*an Airport is located in Ronaldsway and is often referred to as Ronaldsway Airport.","imageCredit":"calflier001","imageCreditLink":"https://www.flickr.com/photos/calflier001/"},{"id":"ipc","code":"ipc","name":"Mataveri International Airport","city":"Easter Island","city2":"Rapa Nui","city3":"Isla de Pascua","state":"","stateShort":"","country":"Chile","description":"The most remote airport in the world, Mataveri International serves as the main entry point for people visiting or living on Easter Island. Its airport code comes from the Spanish name for Easter Island, *I*sla de *P*as*c*ua.","imageCredit":"Uncommon Fritillary","imageCreditLink":"https://www.flickr.com/photos/30473186@N05/"},{"id":"ipn","code":"ipn","name":"Aeroporto da Usiminas","nameEnglish":"Usiminas Airport","city":"Ipatinga","city2":"Santana do Paraíso","state":"Minas Gerais","stateShort":"MG","country":"Brazil","description":"Usiminas Airport is owned by and named after Usiminas, a Brazilian steel manufacturer. Located in Santana do Paraíso, its airport code comes from the city it serves, *Ip*ati*n*ga.","imageCredit":"HVL","imageCreditLink":"http://en.wikipedia.org/wiki/Usiminas_Airport#/media/File:Aeroporto_da_Usiminas,_Ipatinga-Santana_do_Para%C3%ADso_MG.JPG"},{"id":"iqt","code":"iqt","name":"Aeropuerto Internacional Coronel FAP Francisco Secada Vignetta","nameEnglish":"Coronel FAP Francisco Secada Vignetta International Airport","city":"Iquitos","country":"Peru","description":"Coronel FAP Francisco Secada Vignetta International is one of the main gateways to the Peruvian Amazon Rainforest. Its airport code comes from the city of *Iq*ui*t*os.","imageCredit":"cameranaturalist","imageCreditLink":"https://www.flickr.com/photos/49115750@N00/"},{"id":"isb","code":"isb","name":"Benazir Bhutto International Airport","city":"Islamabad","city2":"Rawalpindi","state":"Punjab","stateShort":"PB","country":"Pakistan","description":"Renamed in 2008, Benazir Bhutto International honors the former prime minister of Pakistan. Its airport code honors its home in the twin cities of Rawalpindi and *Is*lama*b*ad.","imageCredit":"Muzaffar Bukhari","imageCreditLink":"https://www.flickr.com/photos/mbukhari/"},{"id":"isp","code":"isp","name":"Long Island MacArthur Airport","city":"Long Island","city2":"Islip","state":"New York","stateShort":"NY","country":"USA","description":"Long Island Airport got its start in the 1940s and is named after U.S. Army General Douglas MacArthur. Its airport code comes from its original name of *Is*li*p* Airport.","imageCredit":"Mr.TinDC","imageCreditLink":"https://www.flickr.com/photos/mr_t_in_dc/"},{"id":"ist","code":"ist","name":"İstanbul Atatürk Havalimanı","nameEnglish":"Istanbul Atatürk Airport","city":"Istanbul","city2":"Yeşilköy","state":"","stateShort":"","country":"Turkey","description":"Turkey’s busiest airport honors the first president of the Republic of Turkey, Mustafa Kemal Atatürk. Its airport code honors the city of *Ist*anbul.","imageCredit":"jaime.silva","imageCreditLink":"https://www.flickr.com/photos/20792787@N00/"},{"id":"itm","code":"itm","name":"Osaka International Airport","city":"Osaka","city2":"Itami","state":"","stateShort":"","country":"Japan","description":"Formerly Itami Airport, Osaka International was renamed following its return to Japanese control in 1959. While it serves Osaka, it is actually located in the city of *It*a*m*i.","imageCredit":"Joe Jones","imageCreditLink":"https://www.flickr.com/photos/redjoe/"},{"id":"ito","code":"ito","name":"Hilo International Airport","city":"Hilo","state":"Hawaii","stateShort":"HI","country":"USA","description":"One theory about ITO says it was named after an early station manager, Mr. Ito. Though with HIL and ILO already taken, Hilo International likely took its three-letter code from the nickname H*i*lo *To*wn.","imageCredit":"Frances","imageCreditLink":"https://www.flickr.com/photos/50163579@N00/"},{"id":"ixa","code":"ixa","name":"Agartala Airport","city":"Agartala","state":"Tripura","stateShort":"TR","country":"India","description":"Agartala Airport is named after the capital of Tripura state in India. Its airport code comes from the new code series for India issued by IATA, *IX*, plus the city of *A*gartala.","imageCredit":"PP Yoonus","imageCreditLink":"http://commons.wikimedia.org/wiki/File:Agartala_Airport_Departure_Terminal.jpeg"},{"id":"ixb","code":"ixb","name":"Bagdogra Airport","city":"Bagdogra","city2":"Siliguri","state":"West Bengal","stateShort":"WB","country":"India","description":"Located in the town of Siliguri, Bagdogra Airport serves the Darjeeling district of West Bengal. Its airport code comes from the new code series for India issued by IATA, *IX*, plus the city of *B*agdogra.","imageCredit":"Abymac","imageCreditLink":"http://en.wikipedia.org/wiki/Bagdogra_Airport#/media/File:Bagdogra_International_Airport.jpg"},{"id":"ixc","code":"ixc","name":"Chandigarh International Airport","city":"Chandigarh","state":"Chandigarh","stateShort":"CH","country":"India","description":"Chandigarh International is named after the union territory in northern India, also known as “The City Beautiful.” Its airport code comes from the new code series for India issued by IATA, *IX*, plus the city of *C*handigarh.","imageCredit":"Aries Liang","imageCreditLink":"http://en.wikipedia.org/wiki/File:Chandigarh_Airport_-_mural.jpg"},{"id":"ixm","code":"ixm","name":"Madurai Airport","city":"Madurai","state":"Tamil Nadu","stateShort":"TN","country":"India","description":"Madurai Airport was established in 1957, after serving as a military airfield. Its airport code comes from the new code series for India issued by IATA, *IX*, plus the city of *M*adurai.","imageCredit":"SarThePhotographer","imageCreditLink":"http://en.wikipedia.org/wiki/Madurai_Airport#/media/File:MaduraiAirport.JPG"},{"id":"ixz","code":"ixz","name":"Veer Savarkar International Airport","city":"Port Blair","state":"Andaman and Nicobar Islands","stateShort":"AN","country":"India","description":"Veer Savarkar International is named after the Indian freedom activist Vinayak Damodar Savarkar. Its airport code comes from the new code series for India issued by IATA, *IX*, with the letter *Z* as filler.","imageCredit":"Jpatokal","imageCreditLink":"http://commons.wikimedia.org/wiki/File:PortBlairAirport.JPG"},{"id":"jac","code":"jac","name":"Jackson Hole Airport","city":"Jackson","city2":"Teton County","state":"Wyoming","stateShort":"WY","country":"USA","description":"Wyoming’s busiest airport, the only commercial airport located inside a U.S. national park, gets its airport code from the nearby town of *Jac*kson.","imageCredit":"Sarah Nichols","imageCreditLink":"https://www.flickr.com/photos/pocheco/"},{"id":"jai","code":"jai","name":"Jaipur International Airport","city":"Jaipur","state":"Rajasthan","stateShort":"RJ","country":"India","description":"Jaipur International is the only international airport in the state of Rajasthan. Its airport code honors its home in the city of *Jai*pur.","imageCredit":"Sranjanm2002","imageCreditLink":"http://commons.wikimedia.org/wiki/File:JaipurGate3.jpg/"},{"id":"jax","code":"jax","name":"Jacksonville International Airport","city":"Jacksonville","state":"Florida","stateShort":"FL","country":"USA","description":"Many airports use the letter ‘X’ to fill in when the desired letters are already taken. Jacksonville International gets its code from its home city of *Ja*cksonville plus that helpful ‘*X*’.","imageCredit":"Joe Shlabotnik","imageCreditLink":"https://www.flickr.com/photos/joeshlabotnik/"},{"id":"jed","code":"jed","name":"King Abdulaziz International Airport","city":"Jeddah","state":"","stateShort":"","country":"Saudi Arabia","description":"King Abdulaziz International is named after the first monarch of Saudi Arabia, and because of its proximity to Makkah, is best known for its spacious Hajj terminal. Its airport code honors the city of *Jed*dah.","imageCredit":"IFC Infrastructure","imageCreditLink":"https://www.flickr.com/photos/ifcinfrastructure/"},{"id":"jer","code":"jer","name":"Jersey Airport","city":"Saint Peter","city2":"Channel Islands","state":"","stateShort":"","country":"Jersey","description":"Opened by The States of Jersey in 1937, Jersey Airport serves the Bailiwick of *Jer*sey in the Channel Islands. It serves about 1.4 million passengers annually.","imageCredit":"Dan Marsh","imageCreditLink":"https://www.flickr.com/photos/dan-marsh/"},{"id":"jfk","code":"jfk","name":"John F. Kennedy International Airport","city":"New York City","state":"New York","stateShort":"NY","country":"USA","description":"In 1963, Idlewild Airport was renamed in dedication to *J*ohn *F*. *K*ennedy. Unlike many other airports, it also changed its three-letter airport code from IDL to JFK.","imageCredit":"Timothy Vogel","imageCreditLink":"https://www.flickr.com/photos/vogelium/"},{"id":"jhm","code":"jhm","name":"Kapalua Airport","city":"Kapalua","city2":"Lahaina","state":"Hawaii","stateShort":"HI","country":"USA","description":"Kapalua Airport serves the Kapalua Resort area and the nearby town of Lahaina. Its airport code comes from *J*ohn *H*enry *M*agoon, the president of Hawaiian Airlines when the airport was being developed.","imageCredit":"Forest and Kim Starr","imageCreditLink":"https://www.flickr.com/photos/starr-environmental/"},{"id":"jnb","code":"jnb","name":"O. R. Tambo International Airport","city":"Johannesburg","city2":"Kempton Park","state":"","stateShort":"","country":"South Africa","description":"Previously *J*oha*n*nes*b*urg International, O. R. Tambo International was renamed in 2006 to honor Oliver Tambo, former African National Congress President.","imageCredit":"Len Edgerly","imageCreditLink":"https://www.flickr.com/photos/lenedgerly/"},{"id":"jog","code":"jog","name":"Bandar Udara Internasional Adisucipto","nameEnglish":"Adisucipto International Airport","city":"Yogyakarta","city2":"Central Java","state":"","stateShort":"","country":"Indonesia","description":"Adisucipto International serves the Yogyakarta (previously anglicized *Jog*jakarta) metro area, and honors Agustinus Adisucipto, national hero and early figure in the Indonesian Air Force.","imageCredit":"Debbs.","imageCreditLink":"https://www.flickr.com/photos/anemptyhouse/"},{"id":"jsi","code":"jsi","name":"Skiathos Airport Alexandros Papadiamantis","city":"Skiathos","state":"Thessaly","country":"Greece","description":"Skiathos Airport is popular for its close take-offs and landings due to its short runway, similar to SXM. The ‘*SI*’ in its code comes from *S*k*i*athos, while the ‘*J*’ is likely a filler letter. JSI is one of nine Greek airports whose code begins with J.","imageCredit":"Aero Icarus","imageCreditLink":"https://www.flickr.com/photos/aero_icarus/"},{"id":"kbp","code":"kbp","name":"Boryspil International Airport","city":"Kiev","city2":"Boryspil","state":"","stateShort":"","country":"Ukraine","description":"Originally opened in 1959 and then reorganized in 1993, Boryspil International serves the capital of Ukraine, *K*iev, from the city of *B*orys*p*il.","imageCredit":"Marco Fieber","imageCreditLink":"https://www.flickr.com/photos/marcofieber/"},{"id":"kbr","code":"kbr","name":"Lapangan Terbang Sultan Ismail Petra","nameEnglish":"Sultan Ismail Petra Airport","city":"Kota Bharu","state":"Kelantan","country":"Malaysia","description":"Sultan Ismail Petra Airport is named after the thirteenth Sultan of Kelantan. Its three-letter code comes from its home in the city of *K*ota *B*ha*r*u.","imageCredit":"Snowidun","imageCreditLink":"http://en.wikipedia.org/wiki/Sultan_Ismail_Petra_Airport#/media/File:WMKCATC.JPG"},{"id":"kef","code":"kef","name":"Keflavíkurflugvöllur","nameEnglish":"Keflavík International Airport","city":"Keflavík","city2":"Reykjavík","state":"","stateShort":"","country":"Iceland","description":"Also known as Reykjavík-Keflavík Airport, Iceland’s largest airport is located near the town of *Kef*lavík and 50 km south of the capital city of Reykjavík.","imageCredit":"O Palsson","imageCreditLink":"https://www.flickr.com/photos/opalsson/"},{"id":"khi","code":"khi","name":"Jinnah International Airport","city":"Karachi","state":"Sindh","stateShort":"SN","country":"Pakistan","description":"Jinnah International is named after Muhammad Ali Jinnah, founder of Pakistan. Its airport code comes from its former name and home in the city of *K*arac*hi*.","imageCredit":"Andrew Wiseman","imageCreditLink":"https://www.flickr.com/photos/awiseman/"},{"id":"kia","code":"kia","name":"Kilimanjaro International Airport","city":"Arusha","city2":"Moshi","state":"Hai District","stateShort":"","country":"Tanzania","description":"Opened in 1971, Kilimanjaro International is often called the “Gateway to Africa’s Wildlife Heritage” and serves those visiting Mount Kilimanjaro National Park. Originally it was named just *Ki*limanjaro *A*irport.","imageCredit":"Jonathan Gill","imageCreditLink":"https://www.flickr.com/photos/jonnyg666/"},{"id":"kin","code":"kin","name":"Norman Manley International Airport","city":"Kingston","country":"Jamaica","description":"The nation’s gateway, Norman Manley International is situated less than twenty minutes from *Kin*gston, Jamaica’s capital city and the commercial center of the Caribbean.","imageCredit":"Wayne Marshall","imageCreditLink":"https://www.flickr.com/photos/wayneandwax/"},{"id":"kix","code":"kix","name":"Kansai International Airport","city":"Osaka","state":"","stateShort":"","country":"Japan","description":"Many airports use the letter ‘X’ to fill in when the desired letters are already taken. Fully built on an artificial island, Kansai Airport gets its code from the *K*ansa*i* region, plus that helpful ‘*X*’.","imageCredit":"Andi Halim","imageCreditLink":"https://www.flickr.com/photos/andihalimphotography/"},{"id":"kmg","code":"kmg","name":"Kunming Changshui International Airport","city":"Kunming","state":"Guandu District","stateShort":"","country":"China","description":"With construction completing in 2011, Kunming Changshui International was originally to be called Zheng He Airport. It serves the city of *K*un*m*in*g*.","imageCredit":"Buster&Bubby","imageCreditLink":"https://www.flickr.com/photos/buster-and-bubby/"},{"id":"kno","code":"kno","name":"Bandar Udara Internasional Kualanamu","nameEnglish":"Kualanamu International Airport","city":"Medan","city2":"Deli Serdang","state":"","stateShort":"","country":"Indonesia","description":"Kualanamu International is the busiest airport in Sumatra, built to replace the Polonia Airport and opened in 2013. It serves the Kuala Namu region (sometimes spelled Kuala Nemu, or *K*uala *N*am*o*).","imageCredit":"Picturepest","imageCreditLink":"https://www.flickr.com/photos/picksfromoutthere/"},{"id":"koa","code":"koa","name":"Kona International Airport","city":"Kailua-Kona","city2":"Kalaoa","city3":"Kona","state":"Hawaii","stateShort":"HI","country":"USA","description":"Opened in 1970 and originally known as Ke-āhole Airport, Kona International serves Kailua-Kona, usually referred to as just *Ko*n*a*.","imageCredit":"Thomas Tunsch","imageCreditLink":"https://www.flickr.com/photos/thtbln/"},{"id":"krk","code":"krk","name":"Kraków Airport im. Jana Pawła II","nameEnglish":"John Paul II International Airport","city":"Kraków","city2":"Balice","state":"","stateShort":"","country":"Poland","description":"Opened in 1964, Kraków–Balice Airport was renamed in 1995 to honor Pope John Paul II who before the Papacy had served as Archbishop for the city of *Kr*a*k*ów.","imageCredit":"Alquiler de Coches","imageCreditLink":"https://www.flickr.com/photos/reservasdecoches/"},{"id":"krn","code":"krn","name":"Kiruna flygplats","nameEnglish":"Kiruna Airport","city":"Kiruna","state":"Norrbotten","stateShort":"","country":"Sweden","description":"Kiruna Airport is the homebase for the Spaceport Sweden project, a venture in space and air travel. Its airport code comes from its home in the city of *K*i*r*u*n*a.","imageCredit":"TheCameraGirls","imageCreditLink":"https://www.flickr.com/photos/thecameragirls/"},{"id":"krr","code":"krr","name":"Krasnodar International Airport","city":"Krasnodar","state":"","stateShort":"","country":"Russia","description":"Krasnodar International, also known as Pashkovsky Airport, serves the southern *Kr*asnoda*r* region of Russia.","imageCredit":"Obakeneko","imageCreditLink":"https://commons.wikimedia.org/wiki/User:Obakeneko"},{"id":"ktm","code":"ktm","name":"Tribhuvan International Airport","city":"Kathmandu","state":"","stateShort":"","country":"Nepal","description":"Opened as an airfield in 1949, Tribhuvan International is named after Tribhuwan Bir Bikram Shah, former King of Nepal. Its airport code comes from its home city of *K*a*t*h*m*andu.","imageCredit":"Jay Galvin","imageCreditLink":"https://www.flickr.com/photos/jaygalvin/"},{"id":"ktt","code":"ktt","name":"Kittilän lentoasema","nameEnglish":"Kittilä Airport","city":"Kittilä","state":"","stateShort":"","country":"Finland","description":"Kittilä Airport is a general aviation and commercial airport located in the city of *K*i*tt*ilä, inside the Arctic Circle, and serves Northern Finland.","imageCredit":"Chiva Congelado","imageCreditLink":"https://www.flickr.com/photos/chivacongelado/"},{"id":"kul","code":"kul","name":"Lapangan Terbang Antarabangsa Kuala Lumpur","nameEnglish":"Kuala Lumpur International Airport","city":"Kuala Lumpur","city2":"Sepang","state":"","stateShort":"","country":"Malaysia","description":"Upon completion, Kuala Lumpur International replaced Subang Airport as *Ku*ala *L*umpur’s primary passenger airport. At the same time, it took the KUL code and Subang received a new code of SZB.","imageCredit":"J.","imageCreditLink":"https://www.flickr.com/photos/unstrungstudio/"},{"id":"kwi","code":"kwi","name":"Kuwait International Airport","city":"Kuwait City","state":"Farwaniya","stateShort":"","country":"Kuwait","description":"Located in Farwaniyah, Kuwait International is headquarters for the Kuwait Air Force at Al Mubarak Air Base. Its airport code honors its home in *K*u*w*a*i*t.","imageCredit":"Faris","imageCreditLink":"https://www.flickr.com/photos/flickr_faris/"},{"id":"laf","code":"laf","name":"Purdue University Airport","city":"Lafayette","city2":"West Lafayette","state":"Indiana","stateShort":"IN","country":"USA","description":"Purdue University Airport was the first university-owned airport in the U.S. and is the second busiest in Indiana. It is located in West Lafayette and serves its sister city of *Laf*ayette.","imageCredit":"Suzi Walker","imageCreditLink":"https://www.flickr.com/photos/suzanne_c_walker/"},{"id":"lan","code":"lan","name":"Capital Region International Airport","city":"Lansing","city2":"DeWitt Township","state":"Michigan","stateShort":"MI","country":"USA","description":"Capital Region International started passenger service in 1929. Located in DeWitt Township, it serves the capital city of *Lan*sing.","imageCredit":"Aaron Headly","imageCreditLink":"https://www.flickr.com/photos/mugland/"},{"id":"las","code":"las","name":"McCarran International Airport","city":"Las Vegas","city2":"Paradise","state":"Nevada","stateShort":"NV","country":"USA","description":"Formerly called Alamo Field, McCarron Airport was renamed in 1948 after Pat McCarran, a senator and author of the Civil Aeronautics Act. Its airport code honors its home in *Las* Vegas.","imageCredit":"Kevin Reese","imageCreditLink":"https://www.flickr.com/photos/kevinreese/"},{"id":"lax","code":"lax","name":"Los Angeles International Airport","city":"Los Angeles","state":"California","stateShort":"CA","country":"USA","description":"Before the 1930’s, airports had two-letter codes. When codes switched to three letters, many added the letter ‘X’ to the end. LA (*L*os *A*ngeles) became LAX.","imageCredit":"Thomas Hawk","imageCreditLink":"https://www.flickr.com/photos/thomashawk/"},{"id":"lba","code":"lba","name":"Leeds Bradford International Airport","city":"Leeds","city2":"Bradford","city3":"Yorkshire","state":"England","stateShort":"","country":"UK","description":"Opened in 1931 as Yeadon Aerodrome, *L*eeds *B*radford *A*irport serves the cities of Leeds and Bradford, along with the Yorkshire region.","imageCredit":"Dave Rutt","imageCreditLink":"https://www.flickr.com/photos/rutty/"},{"id":"lbb","code":"lbb","name":"Lubbock Preston Smith International Airport","city":"Lubbock","state":"Texas","stateShort":"TX","country":"USA","description":"Opened in 1937 and originally named South Plains Airport, Lubbock International is now named after Preston E. Smith, former Texas governor. Its airport code honors its home in the city of *L*u*bb*ock.","imageCredit":"marco antonio torres","imageCreditLink":"https://www.flickr.com/photos/torres21/"},{"id":"lbu","code":"lbu","name":"Lapangan Terbang Labuan","nameEnglish":"Labuan Airport","city":"Labuan","state":"","stateShort":"","country":"Malaysia","description":"Labuan Airport serves the country of Malaysia and gets its airport code from the territory of *L*a*bu*an.","imageCredit":"CEphoto, Uwe Aranas","imageCreditLink":"http://en.wikipedia.org/wiki/Labuan_Airport#/media/File:Labuan_Malaysia_Airport-01.jpg"},{"id":"lca","code":"lca","name":"Larnaca International Airport","city":"Larnaca","country":"Cyprus","description":"Larnaca Airport was developed in 1974 after Turkey invaded Cyprus and Nicosia International subsequently closed. It now serves the city of *L*arna*ca*.","imageCredit":"Christopher Rose","imageCreditLink":"https://www.flickr.com/photos/khowaga/"},{"id":"lcg","code":"lcg","name":"Aeroporto da Coruña-Alvedro","nameEnglish":"A Coruña Airport","city":"A Coruña","city2":"Galicia","city3":"Culleredo","state":"","stateShort":"","country":"Spain","description":"Formerly known as Alvedro Airport, A Coruña Airport was inaugurated in 1963. Its airport code comes from the Spanish city of *L*a *C*oruña, *G*alicia.","imageCredit":"Caneles","imageCreditLink":"https://www.flickr.com/photos/94446676@N00/"},{"id":"lck","code":"lck","name":"Rickenbacker International Airport","city":"Columbus","city2":"Lockbourne","state":"Ohio","stateShort":"OH","country":"USA","description":"Opened in 1942, Rickenbacker International is now named after World War I pilot Eddie Rickenbacker. It was originally known as Lockbourne Army Airfield for the nearby town of *L*o*ck*bourne.","imageCredit":"apocaknits","imageCreditLink":"https://www.flickr.com/photos/apocaknits/"},{"id":"lcy","code":"lcy","name":"London City Airport","city":"London","city2":"Silvertown","state":"England","stateShort":"","country":"UK","description":"Located in the Royal Docks and near London’s financial district, *L*ondon *C*it*y* Airport primarily serves business travelers. Recently though, it has started serving more leisure destinations.","imageCredit":"Jonathan E. Shaw","imageCreditLink":"https://www.flickr.com/photos/johnnyshaw/"},{"id":"led","code":"led","name":"Aeroport Pulkovo","nameEnglish":"Pulkovo International Airport","city":"Saint Petersburg","state":"","stateShort":"","country":"Russia","description":"Pulkovo Airport opened in the city of *Le*ningra*d* in 1932. In 1991, the city returned to its original name of Saint Petersburg and kept the airport code, now associated with LED lights for many visitors.","imageCredit":"Dmitriy Korzhev","imageCreditLink":"https://www.flickr.com/photos/korzhevdp/"},{"id":"lex","code":"lex","name":"Blue Grass Airport","city":"Lexington","state":"Kentucky","stateShort":"KY","country":"USA","description":"Located in the Horse Capital of the World, Blue Grass Airport opened in 1946. Its airport code honors its home in *Lex*ington, Kentucky.","imageCredit":"Blue Grass Airport","imageCreditLink":"http://www.bluegrassairport.com/"},{"id":"lga","code":"lga","name":"LaGuardia Airport","city":"New York City","state":"New York","stateShort":"NY","country":"USA","description":"LaGuardia has had many names and the land it sits on was once an amusement park. Its current name comes from Fiorello *L*a *G*uardi*a*, former mayor of New York who championed its construction.","imageCredit":"stantontcady","imageCreditLink":"https://www.flickr.com/photos/terrycady/"},{"id":"lgg","code":"lgg","name":"Liège Airport","city":"Liège","city2":"Liege","state":"","country":"Belgium","description":"Often called Liège-Bierset, Liège Airport is located in Grâce-Hollogne and serves the city of *L*iè*g*e, Bel*g*ium.","imageCredit":"Albert Massar","imageCreditLink":"https://www.flickr.com/photos/a-massar/"},{"id":"lgk","code":"lgk","name":"Lapangan Terbang Antarabangsa Langkawi","nameEnglish":"Langkawi International Airport","city":"Langkawi","city2":"Perlis","state":"","stateShort":"","country":"Malaysia","description":"Located in the town of Padang Matsirat, Langkawi International serves the *L*an*gk*awi islands in Malaysia. It hosts an international maritime and aerospace exhibition every two years.","imageCredit":"Jack","imageCreditLink":"https://www.flickr.com/photos/33027605@N00/"},{"id":"lgw","code":"lgw","name":"Gatwick Airport","city":"London","city2":"Crawley","state":"England","stateShort":"","country":"UK","description":"Close to *L*ondon, *G*at*w*ick Airport is the second-largest airport in Britain. It’s the world’s busiest single-use runway and is named after Gatwick manor house that used to stand on the site.","imageCredit":"Antoine Camelin","imageCreditLink":"https://www.flickr.com/photos/antwaan/"},{"id":"lhe","code":"lhe","name":"Allama Iqbal International Airport","city":"Lahore","state":"Punjab","stateShort":"PB","country":"Pakistan","description":"Renamed in 2003, Allama Iqbal International honors Muhammad Iqbal, poet-philosopher and advocate for the Pakistan Movement. Its airport code honors its former name and home in *L*a*h*or*e*.","imageCredit":"Jibran Bin Dawood","imageCreditLink":"https://www.flickr.com/photos/jibraan/"},{"id":"lhr","code":"lhr","name":"London Heathrow Airport","city":"London","state":"England","stateShort":"","country":"UK","description":"*L*ondon *H*eath*r*ow takes its name from Heathrow, a hamlet north-west of where the (then) small airfield was started in 1929.","imageCredit":"twinkabauter","imageCreditLink":"https://www.flickr.com/photos/twinkabauter/"},{"id":"lih","code":"lih","name":"Lihue Airport","city":"Lihue","city2":"Kauai","state":"Hawaii","stateShort":"HI","country":"USA","description":"Opened in 1949, Lihue Airport is the primary airport on the Hawaiian island of Kauai. Its airport code honors its home in the city of *Lih*ue.","imageCredit":"Brian Snelson","imageCreditLink":"https://www.flickr.com/photos/exfordy/"},{"id":"lim","code":"lim","name":"Aeropuerto Internacional Jorge Chávez","nameEnglish":"Jorge Chávez International Airport","city":"Lima","city2":"Callao","state":"","stateShort":"","country":"Peru","description":"Originally named *Lim*a-Callao Airport, Jorge Chávez International was renamed in 1965 to honor the Peruvian aviator.","imageCredit":"VasenkaPhotography","imageCreditLink":"https://www.flickr.com/photos/vasenka/"},{"id":"lin","code":"lin","name":"Aeroporto di Milano-Linate","nameEnglish":"Milan Linate Airport","city":"Milan","city2":"Linate","city3":"Peschiera Borromeo","state":"","stateShort":"","country":"Italy","description":"Milan Linate Airport is officially named Airport Enrico Forlanini after the Italian inventor. Its airport code comes from the village of *Lin*ate in the town of Peschiera Borromeo.","imageCredit":"Stefano F","imageCreditLink":"https://www.flickr.com/photos/stefof/"},{"id":"lir","code":"lir","name":"Aeropuerto Internacional Daniel Oduber Quirós","nameEnglish":"Daniel Oduber Quirós International Airport","city":"Liberia","state":"","stateShort":"","country":"Costa Rica","description":"Daniel Oduber Quirós International is named after the former President of Costa Rica and serves the city of *Li*be*r*ia.","imageCredit":"Kansas Sebastian","imageCreditLink":"https://www.flickr.com/photos/kansas_sebastian/"},{"id":"lis","code":"lis","name":"Aeroporto da Portela","nameEnglish":"Lisbon Portela Airport","city":"Lisbon","city2":"Portela","state":"","stateShort":"","country":"Portugal","description":"Portugal’s busiest airport is named for its neighboring parish, Portela, but its airport code comes from the capital city of *Lis*bon.","imageCredit":"hom26","imageCreditLink":"https://www.flickr.com/photos/hom26/"},{"id":"lit","code":"lit","name":"Bill and Hillary Clinton National Airport","city":"Little Rock","city2":"Adams Field","city3":"Clinton","state":"Arkansas","stateShort":"AR","country":"USA","description":"Still referred to as Adams Field, Arkansas’ largest airport is now named after former U.S. President Bill Clinton and his wife, Hillary. Its aiport code honors its home in *Lit*tle Rock.","imageCredit":"Johnathan Jianu","imageCreditLink":"https://www.flickr.com/photos/commanderclicktft/"},{"id":"lju","code":"lju","name":"Letališče Jožeta Pučnika Ljubljana","nameEnglish":"Ljubljana Jože Pučnik Airport","city":"Ljubljana","city2":"Zgornji Brnik","state":"","stateShort":"","country":"Slovenia","description":"In 2007, Ljubljana Jože Pučnik Airport was renamed to honor Jože Pučnik, considered one of the fathers of Slovenian independence. Its airport code honors its home in *Lju*bljana.","imageCredit":"Aaron Knox","imageCreditLink":"https://www.flickr.com/photos/aaronknox/"},{"id":"lko","code":"lko","name":"Chaudhary Charan Singh International Airport","city":"Lucknow","state":"Utter Pradesh","stateShort":"UP","country":"India","description":"Chaudhary Charan Singh International is named after India’s sixth Prime Minister. Its airport code honors its home in the city of *L*uc*k*n*o*w.","imageCredit":"Ahmedfaizy","imageCreditLink":"https://www.flickr.com/photos/83411782@N05/"},{"id":"los","code":"los","name":"Murtala Muhammed International Airport","city":"Lagos","city2":"Ikeja","state":"","stateShort":"","country":"Nigeria","description":"Formerly Lagos International, Murtala Muhammed International was renamed to honor assassinated head of state, General Murtala Ramat Muhammed. Its airport code honors its home in *L*ag*os*.","imageCredit":"afromusing","imageCreditLink":"https://www.flickr.com/photos/afropicmusing/"},{"id":"lpb","code":"lpb","name":"Aeropuerto Internacional El Alto","nameEnglish":"El Alto International Airport","city":"La Paz","city2":"El Alto","state":"","stateShort":"","country":"Bolivia","description":"The highest international airport in the world, at 13,325 ft (4061 m), El Alto’s airport code honors the nearby city of *L*a *P*az, *B*olivia.","imageCredit":" Carlos Hernández","imageCreditLink":"https://www.flickr.com/photos/38440152@N06/"},{"id":"lpl","code":"lpl","name":"Liverpool John Lennon Airport","city":"Liverpool","city2":"Speke","state":"England","stateShort":"","country":"UK","description":"Opened in 1930 and known locally as Speke Airport, Liverpool John Lennon Airport is named after late musician John Lennon of the Beatles. Its airport code honors its home in *L*iver*p*oo*l*.","imageCredit":"calflier001","imageCreditLink":"https://www.flickr.com/photos/calflier001/"},{"id":"lpq","code":"lpq","name":"Luang Prabang International Airport","city":"Luang Prabang","country":"Laos","description":"Luang Prabang International is one of few international airports in the country of Laos. Its three-letter code comes from *L*uang *P*rabang, plus a helpful ‘*Q*’ as a filler letter.","imageCredit":"uvmann","imageCreditLink":"https://www.flickr.com/photos/uvmann/"},{"id":"ltn","code":"ltn","name":"London Luton Airport","city":"London","city2":"Luton","state":"England","stateShort":"","country":"UK","description":"Previously Luton International, London Luton Airport was renamed in 1990 to emphasize its proximity to London. The airport itself is located in the town of *L*u*t*o*n*.","imageCredit":"David Precious","imageCreditLink":"https://www.flickr.com/photos/bigpresh/"},{"id":"luk","code":"luk","name":"Cincinnati Municipal Airport","city":"Cincinnati","state":"Ohio","stateShort":"OH","country":"USA","description":"Cincinnati Municipal is also known as Lunken Field, named after Eshelby *Lu*n*k*en and the Lunken family who donated the land where the airport now sits.","imageCredit":"Billy V","imageCreditLink":"https://www.flickr.com/photos/billyv/"},{"id":"lun","code":"lun","name":"Kenneth Kaunda International Airport","city":"Lusaka","country":"Zambia","description":"Renamed in 2011 in honor of Zambia’s first president, Kenneth Kaunda International is located in *Lu*saka, formerly the capital of *N*orthern Rhodesia.","imageCredit":"andresmh","imageCreditLink":"https://www.flickr.com/photos/amonroy/"},{"id":"lux","code":"lux","name":"Aéroport de Luxembourg","nameEnglish":"Luxembourg Findel Airport","city":"Luxembourg City","state":"Luxembourg","stateShort":"","country":"Luxembourg","description":"Located in the town of Findel, Luxembourg’s only international airport gets its airport code from its home country of *Lux*embourg.","imageCredit":"Jeff C","imageCreditLink":"https://www.flickr.com/photos/jeffc5000/"},{"id":"lvi","code":"lvi","name":"Harry Mwanga Nkumbula International Airport","city":"Livingstone","city2":"Victoria Falls","country":"Zambia","description":"Harry Mwanga Nkumbula International is named after the nationalist leader who fought for Northern Rhodesian independence. Its airport code comes from its home in the city of *L*i*vi*ngstone.","imageCredit":"stuart001uk","imageCreditLink":"https://www.flickr.com/photos/stuart001uk/"},{"id":"lwo","code":"lwo","name":"Lviv Danylo Halytskyi International Airport","city":"Lviv","state":"","stateShort":"","country":"Ukraine","description":"Lviv Danylo Halytskyi International is named after 13th century King Daniel of Galicia. Its airport code comes from the Polish spelling of Lviv: *Lwó*w.","imageCredit":"patrickmcd","imageCreditLink":"https://www.flickr.com/photos/patrickmcdev/"},{"id":"lyr","code":"lyr","name":"Svalbard lufthavn, Longyear","nameEnglish":"Svalbard Airport, Longyear","city":"Svalbard","city2":"Longyearbyen","city3":"Hotellneset","state":"","stateShort":"","country":"Norway","description":"Svalbard Airport gets its name from the city it serves. Its airport code comes from the nearby town of *L*ong*y*ea*r*byen.","imageCredit":"alvaroprieto","imageCreditLink":"https://www.flickr.com/photos/apg88/"},{"id":"lys","code":"lys","name":"Aéroport Lyon-Saint-Exupéry","nameEnglish":"Lyon–Saint Exupéry Airport","city":"Lyon","city2":"Colombier-Saugnieu","state":"","stateShort":"","country":"France","description":"In 2000, Lyon’s airport was renamed to honor French aviator Antoine de Saint-Exupéry. Its airport code comes from its original name, *Ly*on *S*atolas Airport. ","imageCredit":"mll","imageCreditLink":"https://www.flickr.com/photos/_mll_/"},{"id":"maa","code":"maa","name":"Chennai International Airport","city":"Chennai","city2":"Tirusulam","state":"Tamil Nadu","stateShort":"TN","country":"India","description":"Chennai International is located in Tirusulam, a suburb of Chennai, but gets its three-letter code from the city’s former name, *Ma*dr*a*s, changed in 1996.","imageCredit":"Sitik Das","imageCreditLink":"https://www.flickr.com/photos/sitik_das/"},{"id":"mad","code":"mad","name":"Aeropuerto Adolfo Suárez Madrid-Barajas","nameEnglish":"Adolfo Suárez Madrid–Barajas Airport","city":"Madrid","city2":"Barajas","state":"","stateShort":"","country":"Spain","description":"Spain’s largest airport honors former Prime Minister Adolfo Suárez, but its airport code honors its home in the capital city of *Mad*rid.","imageCredit":"Anh Dinh","imageCreditLink":"https://www.flickr.com/photos/anhgemus-photography/"},{"id":"maf","code":"maf","name":"Midland International Air and Space Port","city":"Midland","city2":"Odessa","state":"Texas","stateShort":"TX","country":"USA","description":"Midland International is located between the cities of Midland and Odessa. Its airport code comes from its time as a training base during World War II, named *M*idland Army *A*ir*f*ield.","imageCredit":"LoadedAaron","imageCreditLink":"https://www.flickr.com/photos/92854517@N00/"},{"id":"man","code":"man","name":"Manchester Airport","city":"Manchester","city2":"Ringway","state":"England","stateShort":"","country":"UK","description":"Once called Ringway Airport because of its location in the parish of Ringway, the UK’s third busiest airport serves the city of *Man*chester.","imageCredit":"Gary McNair","imageCreditLink":"https://www.flickr.com/photos/grandmookster/"},{"id":"mbj","code":"mbj","name":"Sangster International Airport","city":"Montego Bay","country":"Jamaica","description":"Sangster International is named in honor of former Jamaican Prime Minister Sir Donald Sangster. Its airport code honors its home in *M*ontego *B*ay, *J*amaica.","imageCredit":"Dave Malkoff","imageCreditLink":"https://www.flickr.com/photos/malkoff/"},{"id":"mbs","code":"mbs","name":"MBS International Airport","city":"Freeland","state":"Michigan","stateShort":"MI","country":"USA","description":"Formerly known as Freeland Tri-City Airport, MBS International is the third busiest airport in Michigan. Its airport code honors the three communities it serves: *M*idland, *B*ay City, and *S*aginaw.","imageCredit":"Doc Searls","imageCreditLink":"https://www.flickr.com/photos/docsearls/"},{"id":"mci","code":"mci","name":"Kansas City International Airport","city":"Kansas City","state":"Missouri","stateShort":"MO","country":"USA","description":"Before changing its name in 1972, Kansas City International was originally known as *M*id-*C*ontinent *I*nternational Airport.","imageCredit":"Zhao Shouren","imageCreditLink":"https://www.flickr.com/photos/ajanhelendam/"},{"id":"mco","code":"mco","name":"Orlando International Airport","city":"Orlando","state":"Florida","stateShort":"FL","country":"USA","description":"Renamed in 1976, Orlando’s airport was originally a military airfield known as *M*c*Co*y Airforce Base, honoring Colonel Michael Norman Wright McCoy.","imageCredit":"Benjamin Thompson","imageCreditLink":"https://www.flickr.com/photos/beija/"},{"id":"mct","code":"mct","name":"Muscat International Airport","city":"Muscat","state":"","stateShort":"","country":"Oman","description":"Opened in 1973 and originally named Seeb International, the largest airport in Oman is located in the city of *M*us*c*a*t*.","imageCredit":"Prasad Pillai","imageCreditLink":"https://www.flickr.com/photos/prasad-om/"},{"id":"mdc","code":"mdc","name":"Bandar Udara Internasional Sam Ratulangi","nameEnglish":"Sam Ratulangi International Airport","city":"Manado","city2":"East Kalimantan","state":"","stateShort":"","country":"Indonesia","description":"Often called Manado Airport, Sam Ratulangi International is named after the Minahasan independence hero Sam Ratulangi. Its airport code comes from nearby *M*ana*d*o *C*ity.","imageCredit":"Theo trieste","imageCreditLink":"https://www.flickr.com/photos/125768769@N08/"},{"id":"mde","code":"mde","name":"Aeropuerto Internacional José María Córdova","nameEnglish":"José María Córdova International Airport","city":"Medellín","city2":"Rionegro","country":"Colombia","description":"Opened in 1985, José María Córdova International is named after a General of the Colombian army. Actually located in the city of Rionegro, it gets its three-letter code from the city it serves, *M*e*de*llín.","imageCredit":"Sebastián Restrepo Calle","imageCreditLink":"https://www.flickr.com/photos/donsabas/"},{"id":"mdt","code":"mdt","name":"Harrisburg International Airport","city":"Harrisburg","city2":"Middletown","state":"Pennsylvania","stateShort":"PA","country":"USA","description":"Often called HIA incorrectly, Harrisburg International’s airport code comes from *M*i*d*dle*t*own, a nearby Harrisburg suburb.","imageCredit":"Timothy Rezendes","imageCreditLink":"https://www.flickr.com/photos/trezendes/"},{"id":"mdw","code":"mdw","name":"Midway International Airport","city":"Chicago","state":"Illinois","stateShort":"IL","country":"USA","description":"Once called Chicago Air Park and later Chicago Municipal, Midway International was renamed in 1949 to honor World War II’s Battle of *M*i*dw*ay.","imageCredit":"Jackie Popp","imageCreditLink":"https://www.flickr.com/photos/jackie-popp/"},{"id":"med","code":"med","name":"Prince Mohammad bin Abdulaziz International Airport","city":"Medina","state":"","stateShort":"","country":"Saudi Arabia","description":"Opened in 1950, Prince Mohammad bin Abdulaziz Internationali is named after the former Crown Prince. Its airport code comes from its home in the city of *Med*ina.","imageCredit":"PresidenciaRD","imageCreditLink":"https://www.flickr.com/photos/presidenciard/"},{"id":"mel","code":"mel","name":"Melbourne Airport","city":"Melbourne","city2":"Tullamarine","state":"Victoria","stateShort":"Vic","country":"Australia","description":"Located in the suburb of Tullamarine, Melbourne Airport is often called “Tullamarine Airport” or just “Tulla.” Its airport code comes from the city of *Mel*bourne.","imageCredit":"Christopher","imageCreditLink":"https://www.flickr.com/photos/chriscorneschi/"},{"id":"mem","code":"mem","name":"Memphis International Airport","city":"Memphis","state":"Tennessee","stateShort":"TN","country":"USA","description":"In 1969, Memphis Municipal Airport changed its name to “International”, presenting *Mem*phis as a hub for international travel and cargo.","imageCredit":"Joseph","imageCreditLink":"https://www.flickr.com/photos/josepha/"},{"id":"mex","code":"mex","name":"Aeropuerto Internacional Benito Juárez","nameEnglish":"Benito Juárez International Airport","city":"Mexico City","state":"Distrito Federal","stateShort":"DF","country":"Mexico","description":"Once called Central Airport and most commonly referred to as *Mex*ico City International, Mexico’s busiest airport is named in honor of 19th century president, Benito Juárez.","imageCredit":"George Oates","imageCreditLink":"https://www.flickr.com/photos/george/"},{"id":"mfd","code":"mfd","name":"Mansfield Lahm Regional Airport","city":"Mansfield","state":"Ohio","stateShort":"OH","country":"USA","description":"Mansfield Lahm Regional is home to Mansfield Lahm Air National Guard Base and hosts Mansfield Airport Day each year. Its airport code honors the city of *M*ans*f*iel*d*.","imageCredit":"OHWiki","imageCreditLink":"http://en.wikipedia.org/wiki/Mansfield_Lahm_Regional_Airport#/media/File:Mansfield_Lahm_Regional_Airport_Terminal.JPG"},{"id":"mgm","code":"mgm","name":"Montgomery Regional Airport","city":"Montgomery","state":"Alabama","stateShort":"AL","country":"USA","description":"Previously known as Dannelly Field, Montgomery Regional is located in and serves the city of *M*ont*g*o*m*ery.","imageCredit":"Rivers A. Langley","imageCreditLink":"http://en.wikipedia.org/wiki/Montgomery_Regional_Airport#/media/File:Montgomery_Regional_Airport_New_Terminal.JPG"},{"id":"mht","code":"mht","name":"Manchester–Boston Regional Airport","city":"Manchester","city2":"Londonberry","city3":"Boston","state":"New Hampshire","stateShort":"NH","country":"USA","description":"Manchester Airport added “-Boston Regional” to its name in 2005 to serve as another option for Boston travelers. Its airport code still honors its home in *M*anc*h*es*t*er.","imageCredit":"Elizabeth Krumbach Joseph","imageCreditLink":"https://www.flickr.com/photos/pleia2/"},{"id":"mia","code":"mia","name":"Miami International Airport","city":"Miami","state":"Florida","stateShort":"FL","country":"USA","description":"Once known as the 36th Street Airport, the three-letter code MIA stands for *Mia*mi and not the popular initialism for “missing in action.”","imageCredit":"Lotus Carroll","imageCreditLink":"https://www.flickr.com/photos/thelotuscarroll/"},{"id":"mke","code":"mke","name":"General Mitchell International Airport","city":"Milwaukee","state":"Wisconsin","stateShort":"WI","country":"USA","description":"General Mitchell International honors U.S. Army Air Service General Billy Mitchell, but its airport code honors its home in *M*ilwau*ke*e.","imageCredit":"Jasonic","imageCreditLink":"https://www.flickr.com/photos/jasonik/"},{"id":"mkg","code":"mkg","name":"Muskegon County Airport","city":"Norton Shores","city2":"Muskegon County","state":"Michigan","stateShort":"MI","country":"USA","description":"Located in Norton Shores, construction on Muskegon County Airport began in 1931. Its airport codes honors its home in *M*us*k*e*g*on County, Michigan.","imageCredit":"Nenyedi","imageCreditLink":"http://en.wikipedia.org/wiki/Muskegon_County_Airport#/media/File:MKGTermInt.JPG"},{"id":"mla","code":"mla","name":"Ajruport Internazzjonali ta 'Malta","nameEnglish":"Malta International Airport","city":"Valletta","city2":"Luqa","city3":"Gudja","country":"Malta","description":"Located between the villages of Luqa and Gudja near the capital city of Valletta, Malta International is the only airport serving the nation of *M*a*l*t*a*.","imageCredit":"A.Currell","imageCreditLink":"https://www.flickr.com/photos/23748404@N00/"},{"id":"mlb","code":"mlb","name":"Melbourne International Airport","city":"Melbourne","state":"Florida","stateShort":"FL","country":"USA","description":"Melbourne International dates back to the late 1920s and gets its airport code from its home in the city of *M*e*lb*ourne, Florida.","imageCredit":"Michael Seeley","imageCreditLink":"https://www.flickr.com/photos/mseeley1/"},{"id":"mle","code":"mle","name":"Ibrahim Nasir International Airport","city":"Male","state":"Kaafu Atoll","stateShort":"","country":"Maldives","description":"Ibrahim Nasir International is named after the first president of the Maldives. It is located on Hulhule Island, near the capital island of *M*a*le*.","imageCredit":"Ibrahim Asad","imageCreditLink":"https://www.flickr.com/photos/thundi/"},{"id":"mlh","code":"mlh","name":"EuroAirport Basel–Mulhouse–Freiburg","city":"Mulhouse","city2":"Saint-Louis","city3":"Freiburg","state":"Switzerland","stateShort":"","country":"France","description":"EuroAirport Basel-*M*u*lh*ouse-Freiburg has two IATA codes (BSL is the other one). It is located in Saint-Louis, France but is one of only a few airports in the world operated jointly by two countries, in this case France and Switzerland.","imageCredit":"AURM","imageCreditLink":"https://www.flickr.com/photos/aurmulhouse/"},{"id":"mli","code":"mli","name":"Quad City International Airport","city":"Moline","state":"Illinois","stateShort":"IL","country":"USA","description":"The QCIA serves the Quad City Metro area spanning the border of Iowa and Illinois. Its airport code comes from the city it resides in, *M*o*LI*ne.","imageCredit":"Farragutful","imageCreditLink":"http://commons.wikimedia.org/wiki/File:Velie_Monocoup_Moline.jpg"},{"id":"mme","code":"mme","name":"Durham Tees Valley Airport","city":"Darlington","city2":"Durham","city3":"Middlesbrough","state":"England","stateShort":"","country":"UK","description":"Commonly still called Teesside International, Durham Tees Valley started as RAF *M*iddl*e*ton St. George in 1941. Some say its code comes from *M*iddleton *M*ilitary *E*stablishment, but the airport itself has said the second ‘M’ is a filler letter.","imageCredit":"aebrookes","imageCreditLink":"https://www.flickr.com/photos/aebrookes/"},{"id":"mmx","code":"mmx","name":"Malmö flygplats","nameEnglish":"Malmö Airport","city":"Malmö","city2":"Malmo","city3":"Svedala","country":"Sweden","description":"Built in 1972 and formerly known as Sturup Airport, Malmö Airport gets its three-letter code from its home in *M*al*m*ö, plus a helpful ‘*X*’ as a filler letter.","imageCredit":"Håkan Dahlström","imageCreditLink":"https://www.flickr.com/photos/dahlstroms/"},{"id":"mnl","code":"mnl","name":"Paliparang Pandaigdig ng Ninoy Aquino","nameEnglish":"Ninoy Aquino International Airport","city":"Manila","city2":"Pasay","city3":"Parañaque","state":"","stateShort":"","country":"Philippines","description":"Originally named Manila International, Ninoy Aquino Airport was renamed in 1987 to honor assassinated Senator Benigno “Ninoy” Aquino, Jr. Its airport code honors the city it serves: *M*a*n*i*l*a.","imageCredit":"Philipp Manila Sonderegger","imageCreditLink":"https://www.flickr.com/photos/phswien/"},{"id":"mqc","code":"mqc","name":"Aéroport de Miquelon","nameEnglish":"Miquelon Airport","city":"Miquelon","stateShort":"Saint Pierre and Miquelon","country":"France","description":"Miquelon Airport gets its three-letter airport code from its location in the *M*i*q*uelon-Langlade *c*ommune in Saint Pierre and Miquelon.","imageCredit":"Yu210148","imageCreditLink":"http://en.wikipedia.org/wiki/Miquelon_Airport#/media/File:Miquelon_Flight_Airport.JPG"},{"id":"mrs","code":"mrs","name":"Aéroport de Marseille Provence","nameEnglish":"Marseille Provence Airport","city":"Marseille","city2":"Marignane","state":"","stateShort":"","country":"France","description":"Marseille Provence Airport is located in the commune of Marignane and was previously known as Marseille–Marignane Airport. Its airport code comes from the city it serves,  *M*a*rs*eille.","imageCredit":"Rupert Ganzer","imageCreditLink":"https://www.flickr.com/photos/loop_oh/"},{"id":"mru","code":"mru","name":"Sir Seewoosagur Ramgoolam International Airport","city":"Plaine Magnien","state":"","stateShort":"","country":"Mauritius","description":"Officially opened in 1945, Plaisance Airport was later renamed to honor former Prime Minister Seewoosagur Ramgoolam. It is located in the southernmost part of *M*au*r*iti*u*s.","imageCredit":"cypherone","imageCreditLink":"https://www.flickr.com/photos/cypherone/"},{"id":"mry","code":"mry","name":"Monterey Regional Airport","city":"Monterey","state":"California","stateShort":"CA","country":"USA","description":"Opened in 1936 and previously named Monterey Peninsula Airport, Monterey Regional was renamed in 2011 and serves the city of *M*onte*r*e*y*, California.","imageCredit":"Adam Burke","imageCreditLink":"https://www.flickr.com/photos/adamthelibrarian/"},{"id":"msn","code":"msn","name":"Dane County Regional Airport","city":"Madison","state":"Wisconsin","stateShort":"WI","country":"USA","description":"Formerly Truax Field, named after U.S. Army Air Forces Lieutenant Thomas L. Truax, Dane County Regional’s code honors its home in the city of *M*adi*s*o*n*.","imageCredit":"Diego Iaconelli","imageCreditLink":"https://www.flickr.com/photos/diegoiaconelli/"},{"id":"mso","code":"mso","name":"Missoula International Airport","city":"Missoula","state":"Montana","stateShort":"MT","country":"USA","description":"Previously known as Johnson-Bell Field, Missoula International opened in 1941 and serves the city of *M*is*so*ula, Montana.","imageCredit":"Alaskaair","imageCreditLink":"http://en.wikipedia.org/wiki/Missoula_International_Airport#/media/File:MSO4.jpg"},{"id":"msp","code":"msp","name":"Minneapolis–Saint Paul International Airport","city":"Twin Cities","city2":"Minneapolis","city3":"St. Paul","state":"Minnesota","stateShort":"MN","country":"USA","description":"Formerly known as Speedway Field and Wold–Chamberlain Field, MSP is now named after Minnesota's twin cities, *M*inneapolis and *S*aint *P*aul.","imageCredit":"Tom Kelly","imageCreditLink":"https://www.flickr.com/photos/tkellyphoto/"},{"id":"msq","code":"msq","name":"Minsk National Airport","city":"Minsk","city2":"Kastrychnitski","state":"","stateShort":"","country":"Belarus","description":"Minsk National, formerly known as Minsk-2 (yes, there is a Minsk-1), is the primary airport in Belarus. Its code comes from the city of *M*in*s*k. The ‘*Q*’ works phonetically, but is used as a filler letter.","imageCredit":"Laurence Vagner","imageCreditLink":"https://www.flickr.com/photos/redisdead/"},{"id":"mst","code":"mst","name":"Maastricht Aachen Airport","city":"Beek","city2":"Maastricht","city3":"Aachen","country":"Netherlands","description":"Located in the town of Beek and previously known as Beek Airfield, Maastricht Aachen Airport serves the cities of *M*aa*st*richt, Netherlands and Aachen, Germany.","imageCredit":"Rpvdk","imageCreditLink":"http://en.wikipedia.org/wiki/Maastricht_Aachen_Airport#/media/File:MaastrichtAachenAirportTerminal.JPG"},{"id":"msy","code":"msy","name":"Louis Armstrong International Airport","city":"New Orleans","state":"Louisiana","stateShort":"LA","country":"USA","description":"In 2001, the airport was named after jazz legend Louis Armstrong, but was previously called Moisant Field, after aviator John Moisant. Its airport code came from the nearby *M*oisant *S*tock *Y*ards.","imageCredit":"3dom","imageCreditLink":"https://www.flickr.com/photos/visualities/"},{"id":"mtj","code":"mtj","name":"Montrose Regional Airport","city":"Montrose","state":"Colorado","stateShort":"CO","country":"USA","description":"Dedicated in 1988, Montrose Regional is a non-towered, seasonal airport. Its code gets its first two letters from *M*on*t*rose. Some say the ‘J’ comes from *J*et Airport, but it is likely a filler letter.","imageCredit":"Charles Anderson","imageCreditLink":"https://www.flickr.com/photos/cw_anderson/"},{"id":"muc","code":"muc","name":"Flughafen München Franz Josef Strauß","nameEnglish":"Munich Airport","city":"Munich","city2":"Freising","state":"","stateShort":"","country":"Germany","description":"Rarely called by its full name, Munich Airport is named after German politician Franz Josef Strauss. Its airport code honors its home near the city of *Mu*ni*c*h.","imageCredit":"Gache Wurzn","imageCreditLink":"https://www.flickr.com/photos/gachewurzn/"},{"id":"mvd","code":"mvd","name":"Aeropuerto Internacional de Carrasco/General Cesáreo L. Berisso","nameEnglish":"Carrasco/General Cesáreo L. Berisso International Airport","city":"Montevideo","city2":"Canelones","state":"","stateShort":"","country":"Uruguay","description":"Carrasco International is named after aviation pioneer General Cesáreo L. Berisso. Its airport code comes from the capital city of *M*onte*v*i*d*eo.","imageCredit":"Andrés De León","imageCreditLink":"https://www.flickr.com/photos/arlekom/"},{"id":"mvy","code":"mvy","name":"Martha’s Vineyard Airport","city":"Martha’s Vineyard","state":"Massachusetts","stateShort":"MA","country":"USA","description":"Built in 1942 as a naval training facility, Martha’s Vineyard Airport is located near the community of Vineyard Haven on the island of *M*artha’s *V*ine*y*ard.","imageCredit":"Tracy Lee Carroll","imageCreditLink":"https://www.flickr.com/photos/tracylee/"},{"id":"mxe","code":"mxe","name":"Laurinburg–Maxton Airport","city":"Maxton","city2":"Laurinburg","city3":"Rockingham","state":"North Carolina","stateShort":"NC","country":"USA","description":"A former U.S. Army air base during World War II, Laurinburg–Maxton Airport is known today primarily as an airliner graveyard. Its code comes in part from *M*a*x*ton, but the ‘*E*’ is more of a mystery and is likely a filler letter.","imageCredit":"Caleb Howell","imageCreditLink":"https://www.flickr.com/photos/calebsphotography"},{"id":"mxp","code":"mxp","name":"Aeroporto di Milano-Malpensa","nameEnglish":"Milan–Malpensa Airport","city":"Milan","city2":"Ferno","state":"","stateShort":"","country":"Italy","description":"Many airports use the letter ‘X’ to fill in when the desired letters are already taken. Milan’s airport code comes from Cascina *M*al*p*ensa, where the airport got its start, plus that helpful ‘*X*’.","imageCredit":"Jorge Díaz","imageCreditLink":"https://www.flickr.com/photos/xurde/"},{"id":"myr","code":"myr","name":"Myrtle Beach International Airport","city":"Myrtle Beach","state":"South Carolina","stateShort":"SC","country":"USA","description":"Formerly Myrtle Beach Air Force Base, Myrtle Beach Airport gained international status in 1996. Its airport code comes from its home in *Myr*tle Beach.","imageCredit":"pollyalida","imageCreditLink":"https://www.flickr.com/photos/pollyalida/"},{"id":"nag","code":"nag","name":"Dr. Babasaheb Ambedkar International Airport","city":"Nagpur","state":"Maharashtra","stateShort":"MH","country":"India","description":"Dr. Babasaheb Ambedkar International is named after the chief architect of the Indian Constitution. Its airport code comes from its home in city of *Nag*pur.","imageCredit":"Nikkul","imageCreditLink":"http://commons.wikimedia.org/wiki/File:NagpurAirport.JPG"},{"id":"nap","code":"nap","name":"Aeroporto Internazionale di Napoli","nameEnglish":"Naples International Airport","city":"Naples","state":"","stateShort":"","country":"Italy","description":"Originally Capodichino Airport, Naples International is located in the Capodichino district in the city of *Nap*les.","imageCredit":"János Korom Dr.","imageCreditLink":"https://www.flickr.com/photos/korom/"},{"id":"nbo","code":"nbo","name":"Jomo Kenyatta International Airport","city":"Nairobi","city2":"Embakasi","state":"","stateShort":"","country":"Kenya","description":"Jomo Kenyatta International is named after Jomo Kenyatta, Kenya’s first president and prime minister. Its airport code comes from a combination of letters from the capital city of *N*air*ob*i.","imageCredit":"Nairobi123","imageCreditLink":"http://en.wikipedia.org/wiki/Jomo_Kenyatta_International_Airport#/media/File:Section_of_Terminal_1A,_JKIA.jpg"},{"id":"nce","code":"nce","name":"Aéroport Nice Côte d'Azur","nameEnglish":"Nice Côte d'Azur Airport","city":"Nice","city2":"Côte d'Azur","state":"","stateShort":"","country":"France","description":"France’s third busiest airport is named for the regions it serves: the city of *N*i*ce* and the Côte d'Azur (the French Riviera).","imageCredit":"m-louis .®","imageCreditLink":"https://www.flickr.com/photos/m-louis/"},{"id":"ncl","code":"ncl","name":"Newcastle International Airport","city":"Newcastle","city2":"Woolsington","state":"England","stateShort":"","country":"UK","description":"Opened in 1935, Newcastle International served 4.6 million passengers in 2014 making it one of the busiest in the United Kingdom. Its airport code honors its home in *N*ew*c*ast*l*e.","imageCredit":"Newcastle Airport","imageCreditLink":"http://www.newcastleairport.com/"},{"id":"ndl","code":"ndl","name":"N’Délé Airport","city":"N’Délé","country":"Central African Republic","description":"N’Délé Airport gets its three-letter airport code from its home in the city of *N*’*D*é*l*é in the Central African Republic.","imageCredit":"U.S. Department of Defense","imageCreditLink":"https://www.flickr.com/photos/39955793@N07/"},{"id":"ngo","code":"ngo","name":"Chūbu Centrair International Airport","city":"Nagoya","city2":"Tokoname City","state":"","stateShort":"","country":"Japan","description":"Chūbu Centrair International serves the Chūbu (central) region of Japan. Located in the city of *N*a*go*ya, it replaced Nagoya Airport in 2005 and inherited its airport code too.","imageCredit":"Gryffindor","imageCreditLink":"http://en.wikipedia.org/wiki/Ch%C5%ABbu_Centrair_International_Airport#/media/File:Chubu_Centrair2.JPG"},{"id":"nqy","code":"nqy","name":"Newquay Cornwall Airport","city":"Newquay","city2":"Cornwall","state":"England","country":"UK","description":"Located in St Mawgan in Pydar, Newquay Cornwall Airport began as a civilian airfield in 1933. Its airport code comes from the town of *N*ew*q*ua*y* in Cornwall.","imageCredit":"Christian Lee","imageCreditLink":"http://en.wikipedia.org/wiki/Newquay_Cornwall_Airport#/media/File:Newquay_Cornwall_airport.jpg"},{"id":"nrn","code":"nrn","name":"Flughafen Weeze","nameEnglish":"Weeze Airport","city":"Weeze","state":"North Rhine-Westphalia","stateShort":"","country":"Germany","description":"Weeze Airport’s three-letter code comes from its official name, Flughafen *N*iede*r*rhei*n*, with Niederrhein translating to the “Lower Rhine” that flows nearby.","imageCredit":"Sergey Melkonov","imageCreditLink":"https://www.flickr.com/photos/melkon/"},{"id":"nrt","code":"nrt","name":"Narita International Airport","city":"Tokyo","state":"","stateShort":"","country":"Japan","description":"Upon privitazation in 2004, New Tokyo International Airport was renamed in recognition of the city in which is located, *N*a*r*i*t*a.","imageCredit":"Ryan Healy","imageCreditLink":"https://www.flickr.com/photos/ryanhealy/"},{"id":"nte","code":"nte","name":"Aéroport Nantes Atlantique","nameEnglish":"Nantes Atlantique Airport","city":"Nantes","city2":"Bouguenais","country":"France","description":"Originally a French military airfield, Nantes Atlantique is located southwest of Bouguenais and serves the city of *N*an*te*s.","imageCredit":"Olivier Cabaret","imageCreditLink":"https://www.flickr.com/photos/oliviercabaret"},{"id":"nue","code":"nue","name":"Flughafen Nürnberg","nameEnglish":"Nuremberg Airport","city":"Nuremberg","city2":"Nürnberg","state":"Bavaria","country":"Germany","description":"Inaugurated in 1955, Nuremberg Airport is the second-busiest airport in Bavaria. It is christened after German artist Albrecht Dürer and serves the city of *Nu*remb*e*rg.","imageCredit":"Mark","imageCreditLink":"https://www.flickr.com/photos/markusnl/"},{"id":"nwi","code":"nwi","name":"Norwich International Airport","city":"Norwich","city2":"Norfolk","state":"England","country":"UK","description":"Norwich International was opened during World War II as RAF Horsham St Faith and is located in the city of *N*or*wi*ch in Norfolk.","imageCredit":"Elliott Brown","imageCreditLink":"https://www.flickr.com/photos/ell-r-brown/"},{"id":"nyo","code":"nyo","name":"Stockholm Skavsta flygplats","nameEnglish":"Stockholm Skavsta Airport","city":"Stockholm","city2":"Nyköping","country":"Sweden","description":"Stockholm Skavsta Airport served as a military airbase until 1980 and now serves the city of Stockholm. Its airport code comes from the town of *Ny*k*ö*ping, where it’s located.","imageCredit":"Tales of a Wanderer","imageCreditLink":"https://www.flickr.com/photos/erke86joc/"},{"id":"oak","code":"oak","name":"Oakland International Airport","city":"Oakland","state":"California","stateShort":"CA","country":"USA","description":"Oakland International was the departure site for Amelia Earhart’s final flight in 1937. It now serves the eastern part of the San Francisco Bay Area (the East Bay) and the city of *Oak*land.","imageCredit":"Sonny Abesamis","imageCreditLink":"https://www.flickr.com/photos/enerva/"},{"id":"ods","code":"ods","name":"Odessa International Airport","city":"Odessa","state":"","stateShort":"","country":"Ukraine","description":"Originally built in 1961, Odessa International serves Ukraine’s third largest city of *Od*e*s*sa.","imageCredit":"Aps","imageCreditLink":"http://en.wikipedia.org/wiki/Odessa_International_Airport#/media/File:Odessaaeroport.jpg"},{"id":"ogg","code":"ogg","name":"Kahului Airport","city":"Kahului","city2":"Maui","state":"Hawaii","stateShort":"HI","country":"USA","description":"Kahului Airport is named after its home city, but its airport code honors Hawaiian-born pilot Bertram J. H*ogg*.","imageCredit":"Jonathan Caves","imageCreditLink":"https://www.flickr.com/photos/j-and-p/"},{"id":"orh","code":"orh","name":"Worcester Regional Airport","city":"Worcester","state":"Massachusetts","stateShort":"MA","country":"USA","description":"The FCC restricted U.S. airport codes from beginning with the letters ‘W’ and ‘K’, reserving them for radio station designations. With ORC (and other OR- codes) already taken, W*or*cester opted for ORH.","imageCredit":"Terageorge","imageCreditLink":"http://en.wikipedia.org/wiki/Worcester_Regional_Airport#/media/File:Worcester_Airport_Curbfront.JPG"},{"id":"okc","code":"okc","name":"Will Rogers World Airport","city":"Oklahoma City","state":"Oklahoma","stateShort":"OK","country":"USA","description":"It may sound like an amusement park, but Will Rogers World Airport honors legendary cowboy and entertainer, Will Rogers. Its airport code honors its home in *Ok*lahoma *C*ity.","imageCredit":"Wesley Fryer","imageCreditLink":"https://www.flickr.com/photos/wfryer/"},{"id":"oma","code":"oma","name":"Eppley Airfield","city":"Omaha","state":"Nebraska","stateShort":"NE","country":"USA","description":"Eppley Airfield is Nebraska’s largest airport and honors hotel mogul Eugene C. Eppley. Its aiport code honors its home in *Oma*ha.","imageCredit":"Jimmy Emerson","imageCreditLink":"https://www.flickr.com/photos/auvet/"},{"id":"ome","code":"ome","name":"Nome Airport","city":"Nome","state":"Alaska","stateShort":"AK","country":"USA","description":"When airport codes switched from two letters to three, the U.S. Navy reserved all codes starting with ‘N’. Nome Airport then used the next few letters in its home city of N*ome* to get OME.","imageCredit":"t-dawg","imageCreditLink":"https://www.flickr.com/photos/wheatland/"},{"id":"ont","code":"ont","name":"LA/Ontario International Airport","city":"Ontario","state":"California","stateShort":"CA","country":"USA","description":"Established in 1929, Ontario Municipal was renamed “International” in 1946. In 2006, the “LA” was added to avoid confusion with the Canadian province that shares the name *Ont*ario.","imageCredit":"Rich","imageCreditLink":"https://www.flickr.com/photos/richmanwisco/"},{"id":"ool","code":"ool","name":"Gold Coast Airport","nameEnglish":"Coolangatta Airport","city":"Gold Coast","city2":"Bilinga","state":"Queensland","stateShort":"Qld","country":"Australia","description":"Gold Coast Airport is located in the suburb of Bilinga on the Gold Coast. Its airport code comes from its former name of C*ool*angatta Airport, an Aboriginal word meaning “Place of Good View.”","imageCredit":"monkeyc.net","imageCreditLink":"https://www.flickr.com/photos/monkeyc/"},{"id":"opo","code":"opo","name":"Aeroporto Francisco Sá Carneiro","nameEnglish":"Francisco de Sá Carneiro Airport","city":"Porto","city2":"Oporto","state":"","stateShort":"","country":"Portugal","description":"Portugal’s second busiest airport is named after former Prime Minister Francisco de Sá Carneiro. Its airport code comes from its home in Porto and its alternate English spelling: *Opo*rto.","imageCredit":"Alda Silva","imageCreditLink":"https://www.flickr.com/photos/aldasilva/"},{"id":"orb","code":"orb","name":"Örebro flygplats","nameEnglish":"Örebro Airport","city":"Örebro","city2":"Orebro","country":"Sweden","description":"Originally opened in 1979, Örebro Airport is located 10km from the city of *Ör*e*b*ro in Sweden.","imageCredit":"Magnus","imageCreditLink":"https://www.flickr.com/photos/kalasmannen/"},{"id":"ord","code":"ord","name":"O’Hare International Airport","city":"Chicago","state":"Illinois","stateShort":"IL","country":"USA","description":"Before the airport was renamed after Medal of Honor recipient Edward O’Hare in 1949, it was known as *Or*char*d* Field Airport.","imageCredit":"Nick Harris","imageCreditLink":"https://www.flickr.com/photos/nickharris1/"},{"id":"orf","code":"orf","name":"Norfolk International Airport","city":"Norfolk","state":"Virginia","stateShort":"VA","country":"USA","description":"When airport codes switched from two letters to three, the Navy reserved all codes starting with ‘N’. N*orf*olk, then, used the next letters in its name to make ORF.","imageCredit":"Stacey Huggins","imageCreditLink":"https://www.flickr.com/photos/staceyhuggins/"},{"id":"ork","code":"ork","name":"Cork Airport","city":"Cork","city2":"Ballygarvan","state":"","country":"Ireland","description":"Located in the village of Ballygarvan, Cork Airport is one of the three primary airports in Ireland. Its airport code comes from the city of C*ork*.","imageCredit":"Emanuela Zibordi","imageCreditLink":"https://www.flickr.com/photos/67421554@N00/"},{"id":"ory","code":"ory","name":"Aéroport de Paris-Orly","nameEnglish":"Paris Orly Airport","city":"Paris","city2":"Orly","city3":"Villeneuve","state":"","stateShort":"","country":"France","description":"Once named Villeneuve-Orly Airport, France’s second busiest airport is partially located in both Paris communes Villeneuve-le-Roi and *Or*l*y*.","imageCredit":"Grid","imageCreditLink":"https://www.flickr.com/photos/gridboy/"},{"id":"osl","code":"osl","name":"Oslo lufthavn","nameEnglish":"Oslo Airport","city":"Oslo","city2":"Gardermoen","state":"","stateShort":"","country":"Norway","description":"Norway’s busiest airport is actually located in Gardermoen, but its airport code honors the capital city of *Osl*o.","imageCredit":"jaime.silva","imageCreditLink":"https://www.flickr.com/photos/20792787@N00/"},{"id":"ost","code":"ost","name":"Internationale Luchthaven Oostende-Brugge","nameEnglish":"Ostend-Bruges International Airport","city":"Ostend","city2":"Bruges","state":"","stateShort":"","country":"Belgium","description":"Ostend-Bruges International serves mainly as a cargo and charter airport. Its airport code honors its coastal home city of *OST*end.","imageCredit":"Calflier001","imageCreditLink":"https://www.flickr.com/people/calflier001/"},{"id":"otp","code":"otp","name":"Aeroportul Internațional Henri Coandă","nameEnglish":"Bucharest Henri Coandǎ International Airport","city":"Bucharest","city2":"Otopeni","state":"","stateShort":"","country":"Romania","description":"Bucharest’s airport honors Henri Coandă, inventor of the first jet engine and discoverer of the Coandă effect in fluid dynamics. Its airport code comes from the nearby city of *Ot*o*p*eni.","imageCredit":"Cristian Bortes","imageCreditLink":"https://www.flickr.com/photos/bortescristian/"},{"id":"oul","code":"oul","name":"Oulun lentoasema","nameEnglish":"Oulu Airport","city":"Oulu","state":"","stateShort":"","country":"Finland","description":"Oulu Airport is Finland’s second busiest airport and its airport code reflects its home in the city of *Oul*u.","imageCredit":"Sami Oinonen","imageCreditLink":"https://www.flickr.com/photos/sami_oinonen/"},{"id":"pbg","code":"pbg","name":"Plattsburgh International Airport","city":"Plattsburgh","state":"New York","stateShort":"NY","country":"USA","description":"Located at the former Plattsburgh Air Force Base, Plattsburgh International took over traffice from Clinton County Airport in 2007. Its airport code comes from the city of *P*latts*b*ur*g*h.","imageCredit":"joshparent","imageCreditLink":"https://www.flickr.com/photos/joshparent/"},{"id":"pbh","code":"pbh","name":"Paro International Airport","city":"Paro","country":"Bhutan","description":"Originally built in 1968 to serve the Indian Armed Forces, Paro Airport is the only international airport in the country. Its airport code comes from the district of *P*aro, *Bh*utan.","imageCredit":"Göran Höglund (Kartläsarn)","imageCreditLink":"https://www.flickr.com/photos/kartlasarn/"},{"id":"pbi","code":"pbi","name":"Palm Beach International Airport","city":"Palm Beach","city2":"Miami","state":"Florida","stateShort":"FL","country":"USA","description":"Originally opened in 1936 and named Morrison Field, *P*alm *B*each *I*nternational was renamed in 1948, with a stint as Palm Beach Air Force Base from 1951-1962.","imageCredit":"D Ramey Logan","imageCreditLink":"http://en.wikipedia.org/wiki/Palm_Beach_International_Airport#/media/File:Palm_Beach_International_Airport_photo_D_Ramey_Logan.jpg"},{"id":"pdx","code":"pdx","name":"Portland International Airport","city":"Portland","state":"Oregon","stateShort":"OR","country":"USA","description":"Before the 1930’s, airports had two-letter codes. When codes switched to three letters, many added the letter ‘X’ to the end. PD (*P*ortlan*d*) became PDX.","imageCredit":"Kerry L","imageCreditLink":"https://www.flickr.com/photos/kerrypolka/"},{"id":"pek","code":"pek","name":"Beijing Capital International Airport","city":"Beijing","state":"Chaoyang District","stateShort":"","country":"China","description":"Boasting the second largest terminal in the world, Beijing’s Capital Airport is near the city’s center. Its airport code comes from an older English spelling of Beijing: *Pek*ing.","imageCredit":"Matt Weibo","imageCreditLink":"https://www.flickr.com/photos/mattweibo/"},{"id":"pen","code":"pen","name":"Lapangan Terbang Antarabangsa Pulau Pinang","nameEnglish":"Penang International Airport","city":"Pulau Pinang","city2":"Bayan Lepas","state":"Pulau Pinang","stateShort":"","country":"Malaysia","description":"Formerly named Bayan Lepas International, Penang International is located in the Bayan Lepas district in *Pen*ang, Malaysia.","imageCredit":"John Ong","imageCreditLink":"https://www.flickr.com/photos/ongline/"},{"id":"per","code":"per","name":"Perth Airport","city":"Perth","state":"Western Australia","stateShort":"WA","country":"Australia","description":"Known as RAAF Station Guildford during World War II, Perth Airport is now the fourth busiest in Australia and serves the city of *Per*th.","imageCredit":"David King","imageCreditLink":"https://www.flickr.com/photos/davidking/"},{"id":"pfo","code":"pfo","name":"Paphos International Airport","city":"Paphos","city2":"Timi","city3":"Acheleia","country":"Cyprus","description":"Paphos International is the second largest airport in Cyprus and a popular gateway for tourists. Its airport code honors its home in the city of Paphos, alternately spelled *P*a*fo*s.","imageCredit":"Karen Bryan","imageCreditLink":"https://www.flickr.com/photos/europealacarte/"},{"id":"phf","code":"phf","name":"Newport News/Williamsburg International Airport","city":"Newport News","city2":"Williamsburg","state":"Virginia","stateShort":"VA","country":"USA","description":"Renamed in 1990, Newport News/Williamsburg International was originally named Patrick Henry Airport after Camp Patrick Henry, a former army base. Its code represents *P*atrick *H*enry *F*ield.","imageCredit":"@flyPHF","imageCreditLink":"https://twitter.com/flyphf"},{"id":"phl","code":"phl","name":"Philadelphia International Airport","city":"Philadelphia","state":"Pennsylvania","stateShort":"PA","country":"USA","description":"During World War II, Philadelphia Municipal Airport served as an Air Force training field. Since 1945, it has been serving *Ph*i*l*adelphia and the Delaware Valley.","imageCredit":"uchiuska","imageCreditLink":"https://www.flickr.com/photos/uchiuska/"},{"id":"phx","code":"phx","name":"Sky Harbor International Airport","city":"Phoenix","state":"Arizona","stateShort":"AZ","country":"USA","description":"Before the 1930’s, airports had two-letter codes. When codes switched to three letters, many added the letter ‘X’ to the end. *Ph*oeni*x* is one where the ‘X’ makes perfect sense.","imageCredit":"Liebe5","imageCreditLink":"https://www.flickr.com/photos/68956811@N00/"},{"id":"pie","code":"pie","name":"St. Pete–Clearwater International Airport","city":"Clearwater","city2":"Pinellas County","city3":"St. Petersburg","state":"Florida","stateShort":"FL","country":"USA","description":"St. Pete–Clearwater International is named for the two cities it serves. Previously called Pinellas International Airport, but with PIA already taken, it took its code from *Pi*n*e*llas County.","imageCredit":"Eric Salard","imageCreditLink":"https://www.flickr.com/photos/airlines470/"},{"id":"pik","code":"pik","name":"Glasgow Prestwick Airport","city":"Glasgow","city2":"Prestwick","state":"Scotland","country":"UK","description":"Started as a training airfield in 1934, Glasgow Prestwick Airport claims to be the only place in the U.K. Elvis Presley ever set foot. Its airport code comes from its home in *P*restw*i*c*k*.","imageCredit":"The Shaun Woods","imageCreditLink":"https://www.flickr.com/photos/shaunwoods/"},{"id":"pit","code":"pit","name":"Pittsburgh International Airport","city":"Pittsburgh","city2":"Findlay","city3":"Moon","state":"Pennsylvania","stateShort":"PA","country":"USA","description":"Opened in 1952, the “Greater Pitt” Airport serves and honors the city of *Pit*tsburgh.","imageCredit":"John Marino","imageCreditLink":"https://www.flickr.com/photos/j26/"},{"id":"pmi","code":"pmi","name":"Aeropuerto de Palma de Mallorca","nameEnglish":"Palma de Mallorca Airport","city":"Mallorca","city2":"Palma de Mallorca","state":"","stateShort":"","country":"Spain","description":"Commonly called Son Sant Joan Airport, Palma de Mallorca Airport gets its airport code from its location in *P*alma on *M*allorca *I*sland.","imageCredit":"vosta","imageCreditLink":"https://www.flickr.com/photos/vosta/"},{"id":"pnh","code":"pnh","name":"Phnom Penh International Airport","city":"Phnom Penh","country":"Cambodia","description":"Formerly known as Pochentong Airport, Phnom Penh International is the largest airport in Cambodia. Its three-letter code comes from its home city of *P*hnom Pe*nh*.","imageCredit":"Jannah Brown","imageCreditLink":"https://www.flickr.com/photos/37084123@N00/"},{"id":"pnk","code":"pnk","name":"Bandar Udara Internasional Supadio","nameEnglish":"Supadio International Airport ","city":"Pontianak","state":"West Kalimantan","stateShort":"","country":"Indonesia","description":"Originally built in the 1940s and named Durian River Airport, Supadio International serves the city of *P*ontia*n*a*k* in West Kalimantan.","imageCredit":"Wakx","imageCreditLink":"https://www.flickr.com/photos/wak1/"},{"id":"pnq","code":"pnq","name":"Pune Airport","city":"Pune","city2":"Poona","state":"Maharashtra","stateShort":"MH","country":"India","description":"Pune airport is named after its home in the city of *P*u*n*e. Its code is completed by the letter ‘*Q*’, often used as a filler letter.","imageCredit":"Randy Breese","imageCreditLink":"https://www.flickr.com/photos/randybreese/"},{"id":"pns","code":"pns","name":"Pensacola International Airport","city":"Pensacola","state":"Florida","stateShort":"FL","country":"USA","description":"In 2011, Pensacola Gulf Coast Regional was renamed to Pensacola International, still serving the city of *P*e*ns*acola and its surrounding areas.","imageCredit":"chapstickaddict","imageCreditLink":"https://www.flickr.com/photos/chapstickaddict/"},{"id":"pom","code":"pom","name":"Jacksons International Airport","nameEnglish":"Port Moresby Airport","city":"Port Moresby","country":"Papua New Guinea","description":"Jacksons International is the busiest airport in Papua New Guinea. It is located just outside the city of *Po*rt *M*oresby and is often referred to as Port Moresby Airport.","imageCredit":"Kahunapule Michael Johnson","imageCreditLink":"https://www.flickr.com/photos/kahunapulej/"},{"id":"pos","code":"pos","name":"Piarco International Airport","city":"Piarco","city2":"Port of Spain","state":"","stateShort":"","country":"Trinidad and Tobago","description":"Opened in 1931, Piarco International is located in the town of Piarco, but serves the capital city of *P*ort *o*f *S*pain.","imageCredit":"Debangsu4","imageCreditLink":"https://www.flickr.com/photos/debangsu4/"},{"id":"ppg","code":"ppg","name":"Pago Pago International Airport","nameEnglish":"Tafuna Airport","city":"Pago Pago","city2":"Tafuna","state":"American Samoa","country":"USA","description":"Also known as Tafuna Airport, *P*ago *P*a*g*o is the largest of the three airports of American Samoa, a small unincorporated territory of the United States located in the south Pacific Ocean.","imageCredit":"US Air Force","imageCreditLink":"https://www.flickr.com/photos/usairforce/"},{"id":"ppt","code":"ppt","name":"Fa'a'ā International Airport","city":"Tahiti","city2":"Pape'ete","stateShort":"French Polynesia","country":"France","description":"Fa'a'ā International serves the island of Tahiti in French Polynesia. It is located in the commune of Fa'a'ā in the city of *P*a*p*e'e*t*e.","imageCredit":"Michael Stout","imageCreditLink":"https://www.flickr.com/photos/mc_sensei/"},{"id":"prg","code":"prg","name":"Letiště Václava Havla Praha","nameEnglish":"Václav Havel Airport Prague","city":"Prague","city2":"Ruzyně","state":"","stateShort":"","country":"Czech Republic","description":"In 2012, Prague Ruzyně International was renamed to honor Václav Havel, the Czech Republic’s first president. Its airport code honors its home in the capital city of *Pr*a*g*ue.","imageCredit":"Jill","imageCreditLink":"https://www.flickr.com/photos/73489862@N00/"},{"id":"psc","code":"psc","name":"Tri-Cities Airport","city":"Tri-Cities","city2":"Pasco","city3":"Richland","state":"Washington","stateShort":"WA","country":"USA","description":"The US Navy built Naval Air Station *P*a*sc*o during World War II. After the war, the Navy sold the field to the city of Pasco and it was redeveloped into Tri-Cities Airport.","imageCredit":"Matt McGee","imageCreditLink":"https://www.flickr.com/photos/pleeker/"},{"id":"psp","code":"psp","name":"Palm Springs International Airport","city":"Palm Springs","state":"California","stateShort":"CA","country":"USA","description":"Well known for its Sonny Bono Concourse named after the late entertainer, *P*alm *Sp*rings International has been called one of America’s “Most Stress-Free Airports.”","imageCredit":"Randy Heinitz","imageCreditLink":"https://www.flickr.com/photos/rheinitz/"},{"id":"ptp","code":"ptp","name":"Aérodrome de Pointe-à-Pitre Le Raizet","nameEnglish":"Pointe-à-Pitre Le Raizet Airport","city":"Pointe-à-Pitre","city2":"Grande-Terre","state":"Guadeloupe","stateShort":"","country":"France","description":"Located in Abymes, Pointe-à-Pitre Le Raizet Airport serves the city of *P*oin*t*e-à-*P*itre on the island of Grande-Terre in Guadeloupe, France.","imageCredit":"Martin Bartosch","imageCreditLink":"https://www.flickr.com/photos/30544210@N04/"},{"id":"pty","code":"pty","name":"Aeropuerto Internacional de Tocumen","nameEnglish":"Tocumen International Airport","city":"Panama City","state":"","stateShort":"","country":"Panama","description":"Inaugurated in 1947, Tocumen International gets its name from the nearby Tocumen River. Its airport code comes from its home in *P*anama Ci*ty*.","imageCredit":"Carlos Alberto González Palomino","imageCreditLink":"https://www.flickr.com/photos/carlos-alberto-gonzalez-palomino/"},{"id":"puf","code":"puf","name":"Aéroport Pau Pyrénées","nameEnglish":"Pau Pyrénées Airport","city":"Pau","city2":"Uzein","country":"France","description":"Located in the commune of Uzein and named after the Pyrenees Mountains, Pau Pyrénées Airport gets its three-letter code from the commune of *P*a*u*, *F*rance.","imageCredit":"Le Kizz","imageCreditLink":"https://www.flickr.com/photos/seankisby/"},{"id":"pvd","code":"pvd","name":"Theodore Francis Green Memorial State Airport","city":"Providence","city2":"Warwick","state":"Rhode Island","stateShort":"RI","country":"USA","description":"T.F. Green Airport, as it’s called for short, honors former Rhode Island governor Theodore F. Green. Actually located in the nearby city of Warwick, its airport code reflects the major city it serves: *P*ro*v*i*d*ence.","imageCredit":"Marc Choquette","imageCreditLink":"https://www.flickr.com/photos/23185977@N08/"},{"id":"pvg","code":"pvg","name":"Shanghai Pudong International Airport","city":"Shanghai","city2":"Pudong","state":"","stateShort":"","country":"China","description":"Shanghai Pudong International opened in 1999. Its airport code comes from the Shanghai district of *P*udon*g* with a filler ‘*V*’ replacing the ‘U’ to get PVG.","imageCredit":"GreenArcher04","imageCreditLink":"https://www.flickr.com/photos/iliveinphilippines/"},{"id":"pwm","code":"pwm","name":"Portland International Jetport","city":"Portland","city2":"Westbrook","state":"Maine","stateShort":"ME","country":"USA","description":"The airport serving the original Portland (in Maine) started as small Stroudwater Field, later renamed to *P*ortland-*W*estbrook *M*unicipal Airport.","imageCredit":"Jimmy Emerson","imageCreditLink":"https://www.flickr.com/photos/auvet/"},{"id":"pxo","code":"pxo","name":"Aeroporto de Porto Santo","nameEnglish":"Porto Santo Airport","city":"Porto Santo","stateShort":"Madeira","country":"Portugal","description":"Built in 1959, Porto Santo Airport was the first airport in the Madeira Islands. Its airport code comes from its home in *P*orto Sant*o*, plus a helpful ‘*X*’ as a filler letter.","imageCredit":"Marco Assini","imageCreditLink":"https://www.flickr.com/photos/marco_ask/"},{"id":"rak","code":"rak","name":"Marrakesh Menara Airport","city":"Marrakesh","state":"","stateShort":"","country":"Morocco","description":"Marrakesh Menara Airport gets part of its name from the nearby Menara Gardens and the other part from its home in the capital city of Mar*rak*esh.","imageCredit":"Thomas Leuthard","imageCreditLink":"https://www.flickr.com/photos/thomasleuthard/"},{"id":"rba","code":"rba","name":"Rabat–Salé Airport","city":"Rabat","city2":"Salé","state":"","stateShort":"","country":"Morocco","description":"While actually located in Salé, Rabat–Salé Airport gets its airport code from the Moroccan capital city of *R*a*ba*t.","imageCredit":"Frenchinmorocco","imageCreditLink":"https://commons.wikimedia.org/wiki/File:Reflets_-_a%C3%A9roport_Rabat-Sal%C3%A9.JPG#/media/File:Reflets_-_a%C3%A9roport_Rabat-Sal%C3%A9.JPG"},{"id":"rbd","code":"rbd","name":"Dallas Executive Airport","city":"Dallas","state":"Texas","stateShort":"TX","country":"USA","description":"Dallas Executive Airport serves the city of Dallas for general aviation and is a reliever airport for Dallas Love Field. Its airport code comes from its former name, *R*ed*b*ir*d* Airport.","imageCredit":"La Citta Vita","imageCreditLink":"https://www.flickr.com/photos/la-citta-vita/"},{"id":"rdd","code":"rdd","name":"Redding Municipal Airport","city":"Redding","state":"California","stateShort":"CA","country":"USA","description":"Originally Redding Army Airfield, Redding Municipal was a favorite for military airshows because of the nearby Shasta Lake. Its airport code comes from its home in the city of *R*e*dd*ing.","imageCredit":"Sergio Ruiz","imageCreditLink":"https://www.flickr.com/photos/sirgious/"},{"id":"rdu","code":"rdu","name":"Raleigh–Durham International Airport","city":"Raleigh","city2":"Durham","state":"North Carolina","stateShort":"NC","country":"USA","description":"Opened in 1943, Raleigh-Durham International is located in Wake County in between the cities of *R*aleigh and *Du*rham.","imageCredit":"Suzie Tremmel","imageCreditLink":"https://www.flickr.com/photos/23727257@N00/"},{"id":"rec","code":"rec","name":"Aeroporto Internacional do Recife/Guararapes–Gilberto Freyre","nameEnglish":"Recife/Guararapes–Gilberto Freyre International Airport","city":"Recife","state":"Pernambuco","stateShort":"PE","country":"Brazil","description":"Recife International’s full name honors the Battle of Guararapes during the Dutch-Portuguese War and Brazilian sociologist Gilberto Freyre. Its airport code honors its home in *Rec*ife.","imageCredit":"Thorsten Wöckener","imageCreditLink":"https://www.flickr.com/photos/125147892@N03/"},{"id":"rep","code":"rep","name":"Siem Reap International Airport","city":"Siem Reap","country":"Cambodia","description":"With a new terminal inaugurated in 2006, Siem Reap International gets its airport code from its home in the city of Siem *Re*a*p*, Cambodia.","imageCredit":"Zack Lee","imageCreditLink":"https://www.flickr.com/photos/riacale/"},{"id":"rfd","code":"rfd","name":"Chicago Rockford International Airport","city":"Rockford","state":"Illinois","stateShort":"IL","country":"USA","description":"Started in 1917 as Camp Grant, Chicago Rockford International achieved international status in 2004. Its airport code honors its home in the city of *R*ock*f*or*d*.","imageCredit":"Jake Mackenzie","imageCreditLink":"http://en.wikipedia.org/wiki/File:Chicago_Rockford_International_Airport.jpg"},{"id":"rgi","code":"rgi","name":"Rangiroa Airport","city":"Rangiroa","state":"","stateShort":"French Polynesia","country":"France","description":"Built in 1965, Rangiroa Airport serves the atoll of *R*an*gi*roa and French Polynesia.","imageCredit":"pablo_marx","imageCreditLink":"https://www.flickr.com/photos/pablo_marx/"},{"id":"rgn","code":"rgn","name":"Yangon International Airport","city":"Yangon","city2":"Rangoon","city3":"Mingaladon","state":"","stateShort":"","country":"Myanmar","description":"Located in the township of Mingaladon, Myanmar’s primary international airport serves the city of Yangon. Its airport code comes from an English spelling of Yangon: *R*an*g*oo*n*.","imageCredit":"Eugene Phoen","imageCreditLink":"https://www.flickr.com/photos/eugenephoen/"},{"id":"ric","code":"ric","name":"Richmond International Airport","city":"Richmond","city2":"Sandston","state":"Virginia","stateShort":"VA","country":"USA","description":"Originally dedicated in 1927 as Richard Evelyn Byrd Flying Field, *Ric*hmond International Airport is the busiest airport in central Virginia.","imageCredit":"Ronnie Pitman","imageCreditLink":"https://www.flickr.com/photos/pitmanra/"},{"id":"riw","code":"riw","name":"Riverton Regional Airport","city":"Riverton","state":"Wyoming","stateShort":"WY","country":"USA","description":"With the airport code RIV already taken by March Air Force Base in Riverside, California, Riverton Regional took its code from *Ri*verton and switched a ‘*W*‘ for the ‘V’.","imageCredit":"RecoilRick","imageCreditLink":"https://www.flickr.com/photos/magneticmediafed/"},{"id":"rix","code":"rix","name":"Starptautiskā lidosta “Rīga”","nameEnglish":"Riga International Airport”","city":"Riga","state":"","stateShort":"","country":"Latvia","description":"Many airports use the letter ‘X’ to fill in when the desired letters are already taken. Riga International was built relatively recently in 1973, so its airport code comes from *Ri*ga plus that helpful ‘*X*’.","imageCredit":"Dainis Matisons","imageCreditLink":"https://www.flickr.com/photos/dainismatisons/"},{"id":"rjl","code":"rjl","name":"Aeropuerto de Logroño-Agoncillo","nameEnglish":"Logroño-Agoncillo Airport","city":"Logroño","city2":"Agoncillo","state":"","stateShort":"","country":"Spain","description":"Built in 2003, Logroño-Agoncillo Airport is located in the city of Logroño. Its airport code comes from the nearby village of *R*eca*j*o in *L*a Rioja.","imageCredit":"Juanje 2712","imageCreditLink":"http://www.panoramio.com/photo/2797201"},{"id":"rms","code":"rms","name":"Ramstein Air Base","city":"Ramstein-Miesenbach","city2":"Kaiserslautern","state":"","stateShort":"","country":"Germany","description":"Ramstein Air Base is a United States Air Force Base located near the city of Kaiserslautern and gets its airport code from the town of *R*a*ms*tein-Miesenbach.","imageCredit":"TSGT David D. Underwood, Jr.","imageCreditLink":"http://en.wikipedia.org/wiki/Ramstein_Air_Base#/media/File:C-130_and_Ramstein_AB_Control_Tower.jpg"},{"id":"roa","code":"roa","name":"Roanoke–Blacksburg Regional Airport","city":"Roanoke","state":"Virginia","stateShort":"VA","country":"USA","description":"Roanoke-Blacksburg Regional is also known as Woodrum Field after former U.S. Representative Clifton A. Woodrum. Its airport code comes from its home in the city of *Roa*noke.","imageCredit":"Aaron Knox","imageCreditLink":"https://www.flickr.com/photos/aaronknox/"},{"id":"roc","code":"roc","name":"Greater Rochester International Airport","city":"Rochester","state":"New York","stateShort":"NY","country":"USA","description":"Starting out as Britton Field in 1927, Greater *Roc*hester International Airport serves the city it is named after and its surrounding counties.","imageCredit":"John W. Schulze","imageCreditLink":"https://www.flickr.com/photos/gruenemann"},{"id":"ros","code":"ros","name":"Aeropuerto Internacional Rosario Islas Malvinas","nameEnglish":"Rosario – Islas Malvinas International Airport","city":"Rosario","city2":"Funes","state":"Santa Fe","stateShort":"","country":"Argentina","description":"Rosario – Islas Malvinas International’s name reflects Argentina’s claim of sovereignty over the Falkland Islands (Islas Malvinas). Its airport code reflects its home in the city of *Ros*ario.","imageCredit":"Facu Fernández","imageCreditLink":"https://www.flickr.com/photos/lu6fpj/"},{"id":"rov","code":"rov","name":"Aeroport Rostov-na-Donu","nameEnglish":"Rostov-on-Don Airport","city":"Rostov-on-Don","state":"","stateShort":"","country":"Russia","description":"Originally built in 1925, Rostov-on-Don Airport became an international hub in 1986. Its airport code honors its home near the city of *Ro*sto*v*-on-Don.","imageCredit":"Serge Bystro","imageCreditLink":"https://www.flickr.com/photos/sergebystro/"},{"id":"row","code":"row","name":"Roswell International Air Center","city":"Roswell","state":"New Mexico","stateShort":"NM","country":"USA","description":"Previously named Walker Air Force Base after Medal of Honor winner General Kenneth Walker, Roswell Air Center serves the city of *Ro*s*w*ell and is near the location of the 1947 Roswell crash.","imageCredit":"Jeremy Noble","imageCreditLink":"https://www.flickr.com/photos/uberculture/"},{"id":"rpr","code":"rpr","name":"Swami Vivekananda International Airport","city":"Raipur","city2":"Mana","city3":"Naya Raipur","state":"Chhattisgarh","stateShort":"CT","country":"India","description":"Formerly known as Mana Airport, Swami Vivekananda International was renamed in 2012 to honor the well-known Indian saint. Its airport code honors the city it serves: *R*ai*p*u*r*.","imageCredit":"Ambuj Kulshresth","imageCreditLink":"http://en.wikipedia.org/wiki/File:Swami_Vivekananda_Airport_Raipur.JPG"},{"id":"rst","code":"rst","name":"Rochester International Airport","city":"Rochester","state":"Minnesota","stateShort":"MN","country":"USA","description":"The original Rochester Airport was built in 1928 by the Mayo Foundation. Later renamed to Lobb Field, the airport was closed in 1961 and replaced by the current *R*oche*st*er International.","imageCredit":"@flyrst","imageCreditLink":"https://twitter.com/flyrst"},{"id":"rsw","code":"rsw","name":"Southwest Florida International Airport","city":"Fort Myers","state":"Florida","stateShort":"FL","country":"USA","description":"Renamed “International” in 1993, Fort Myers’ airport was originally regional only. It takes its airport code from *R*egional *S*outh*w*est.","imageCredit":"B","imageCreditLink":"https://www.flickr.com/photos/11561957@N06/"},{"id":"rtm","code":"rtm","name":"Rotterdam The Hague Airport","city":"Rotterdam","city2":"The Hague","country":"Netherlands","description":"Opened in 1956, Rotterdam Airport was the Netherlands’ second national airport and was built in part to replace Waalhaven Airport, destroyed during World War II. Its code comes from the city of *R*o*t*terda*m*.","imageCredit":"OlBrug","imageCreditLink":"https://www.flickr.com/photos/olbr/"},{"id":"ruh","code":"ruh","name":"King Khalid International Airport","city":"Riyadh","country":"Saudi Arabia","description":"King Khalid International is named after the former Saudi Arabian king who ruled from 1975 to 1982. Its airport code comes from its home in the city of *R*iyad*h*, with a ‘*U*’ as a filler letter.","imageCredit":"Christopher Rose","imageCreditLink":"https://www.flickr.com/photos/khowaga/"},{"id":"rze","code":"rze","name":"Port Lotniczy Rzeszów-Jasionka","nameEnglish":"Rzeszów–Jasionka Airport","city":"Rzeszów","city2":"Jasionka","state":"","stateShort":"","country":"Poland","description":"Rzeszów–Jasionka Airport is located in southeastern Poland. Although situated in the village of Jasionka, its airport code comes from the nearby city it serves: *Rze*szów.","imageCredit":"Michalooo24","imageCreditLink":"http://upload.wikimedia.org/wikipedia/commons/1/1b/Nowy_terminal_portu_lotniczego_Rzeszów-Jasionka.JPG"},{"id":"saf","code":"saf","name":"Santa Fe Municipal Airport","city":"Santa Fe","state":"New Mexico","stateShort":"NM","country":"USA","description":"Santa Fe Municipal features three runways and serves the city of *S*ant*a* *F*e, New Mexico.","imageCredit":"David Basanta","imageCreditLink":"https://www.flickr.com/photos/dbasanta/"},{"id":"san","code":"san","name":"Lindbergh Field","city":"San Diego","state":"California","stateShort":"CA","country":"USA","description":"Following Charles Lindbergh’s historic flight, the city where his plane was built capitalized on public support to build its own airport. Its airport code comes from the city it serves, *San* Diego.","imageCredit":"Nathan Rupert","imageCreditLink":"https://www.flickr.com/photos/nathaninsandiego/"},{"id":"sat","code":"sat","name":"San Antonio International Airport","city":"San Antonio","state":"Texas","stateShort":"TX","country":"USA","description":"The gateway for south central Texas, San Antonio International was originally known as Alamo Field. Its airport code honors its home in the city of *S*an *A*ntonio, *T*exas.","imageCredit":"San Antonio Airport System","imageCreditLink":"https://www.sanantonio.gov/aviation/"},{"id":"sav","code":"sav","name":"Savannah/Hilton Head International Airport","city":"Savannah","city2":"Hilton Head Island","state":"Georgia","stateShort":"GA","country":"USA","description":"Despite having “International” in its name, Savannah/Hilton Head airport has no scheduled commercial flights outside the U.S. Its airport code comes from its home in the city of *Sav*annah.","imageCredit":"Nicolas Nova","imageCreditLink":"https://www.flickr.com/photos/nnova/"},{"id":"sba","code":"sba","name":"Santa Barbara Municipal Airport","city":"Santa Barbara","state":"California","stateShort":"CA","country":"USA","description":"Built on a former cow pasture, Santa Barbara Municipal gets its airport code from its home in the *S*anta *Ba*rbara/Goleta metropolitan area.","imageCredit":"Adam Fagen","imageCreditLink":"https://www.flickr.com/photos/afagen/"},{"id":"sbn","code":"sbn","name":"South Bend International Airport","city":"South Bend","state":"Indiana","stateShort":"IN","country":"USA","description":"Opened in 1933 as Bendix Field, South Bend International was once called Michiana Regional (a combination of Michigan and Indiana). Its airport code honors its home in *S*outh *B*e*n*d.","imageCredit":"Jo & Joey","imageCreditLink":"https://www.flickr.com/photos/eguchi_onion/"},{"id":"scl","code":"scl","name":"Aeropuerto Internacional Comodoro Arturo Merino Benítez","nameEnglish":"Comodoro Arturo Merino Benítez International Airport","city":"Santiago","city2":"Pudahuel","state":"","stateShort":"","country":"Chile","description":"Often called “Pudahuel Airport”, Comodoro Arturo Merino Benítez International honors the founder of the Chilean Air Force. Its airport code honors its home in *S*antiago, *C*hi*l*e.","imageCredit":"lane becker","imageCreditLink":"https://www.flickr.com/photos/monstro/"},{"id":"scq","code":"scq","name":"Aeroporto Internacional de Santiago de Compostela","nameEnglish":"Santiago de Compostela Airport","city":"Santiago de Compostela","city2":"Galicia","city3":"Lavacolla","state":"","stateShort":"","country":"Spain","description":"Santiago de Compostela Airport is the second-busiest in Spain. Its airport code comes from its home near *S*antiago de *C*ompostela, plus a ‘*Q*’ as a filler letter.","imageCredit":"Philips Indal. Lighting","imageCreditLink":"https://www.flickr.com/photos/indal-lighting/"},{"id":"sdf","code":"sdf","name":"Louisville International Airport","city":"Louisville","state":"Kentucky","stateShort":"KY","country":"USA","description":"Before being renamed in 1995, Louisville International was known as *S*tan*d*i*f*ord Field, honoring former state senator Elisha David Standiford.","imageCredit":"Lisa Padilla","imageCreditLink":"https://www.flickr.com/photos/lisap/"},{"id":"sdq","code":"sdq","name":"Aeropuerto Internacional Las Américas","nameEnglish":"Las Américas International Airport","city":"Santo Domingo","city2":"Punta Caucedo","city3":"Boca Chica","country":"Dominican Republic","description":"Opened in 1959, Las Américas International is located in Punta Caucedo. Its airport code comes from the capital city of *S*anto *D*omingo, plus a helpful ‘*Q*’ as a filler letter.","imageCredit":"Karen","imageCreditLink":"https://www.flickr.com/photos/karenblixen/"},{"id":"sdu","code":"sdu","name":"Aeroporto Santos Dumont","nameEnglish":"Santos Dumont Airport","city":"Rio de Janeiro","state":"Rio de Janeiro","stateShort":"RJ","country":"Brazil","description":"Originally known as Calabouço Airport, Santos Dumont Airport was inaugurated in 1936 and was named after Brazilian aviator Alberto *S*antos-*Du*mont.","imageCredit":"veroyama","imageCreditLink":"https://www.flickr.com/photos/veroyama/"},{"id":"sea","code":"sea","name":"Seattle–Tacoma International Airport","city":"Seattle","city2":"Tacoma","city3":"SeaTac","state":"Washington","stateShort":"WA","country":"USA","description":"“Sea-Tac” was once renamed after U.S. Senator Henry M. Jackson for a short while, but *Sea*ttle and Tacoma residents voted to keep their cities in the airport’s name.","imageCredit":"drburtoni","imageCreditLink":"https://www.flickr.com/photos/84346589@N00/"},{"id":"sen","code":"sen","name":"London Southend Airport","city":"London","city2":"Southend","city3":"Rochford","state":"England","country":"UK","description":"Serving London and its surrounding areas, London Southend Airport is situated between the towns of *S*outh*en*d and Rochford.","imageCredit":"calflier001","imageCreditLink":"https://www.flickr.com/photos/calflier001/"},{"id":"sex","code":"sex","name":"Sembach Kaserne","city":"Sembach","state":"","stateShort":"","country":"Germany","description":"Sembach Kaserne is a United States Army installation in Sembach, Germany. Its airport code comes from its former name as *Se*mbach Anne*x*.","imageCredit":"MSgt. Bill Thompson, USAF","imageCreditLink":"http://en.wikipedia.org/wiki/Sembach_Kaserne#/media/File:Sembach_Air_Base_aerial_view_1989.JPEG"},{"id":"sfo","code":"sfo","name":"San Francisco International Airport","city":"San Francisco","state":"California","stateShort":"CA","country":"USA","description":"Before the 1930’s, airports had two-letter codes. When codes switched to three letters, many added the letter ‘X’ to the end. *S*an *F*rancisc*o* instead used its last letter ‘O’.","imageCredit":"Richard Winchell","imageCreditLink":"https://www.flickr.com/photos/richardwinchell/"},{"id":"sgc","code":"sgc","name":"Surgut International Airport","city":"Surgut","country":"Russia","description":"Surgut International, also known as Surgut North, gets its three-letter airport code from its home in *S*ur*g*ut *C*ity.","imageCredit":"Sergey","imageCreditLink":"https://www.flickr.com/photos/zhaffsky/"},{"id":"sgn","code":"sgn","name":"Tân Sơn Nhất International Airport","name2":"Tan Son Nhat International Airport","city":"Ho Chi Minh City","city2":"Saigon","state":"","stateShort":"","country":"Vietnam","description":"Tân Sơn Nhất International is named for the township in which it’s located, but serves Ho Chi Minh City. Its airport code comes from Ho Chi Minh City’s former name: *S*ai*g*o*n*.","imageCredit":"Robertus B. Herdiyanto","imageCreditLink":"https://www.flickr.com/photos/rbherdiyanto/"},{"id":"sgy","code":"sgy","name":"Skagway Airport","city":"Skagway","state":"Alaska","stateShort":"AK","country":"USA","description":"Skagway, originally Skagua in Tlingit for “windy place”, was the largest city in Alaska by 1898 because of the Yukon gold rush. Its airport’s code honors its home in *S*ka*g*wa*y*.","imageCredit":"CruisAir","imageCreditLink":"https://www.flickr.com/photos/cruisair/"},{"id":"sha","code":"sha","name":"Shanghai Hongqiao International Airport","city":"Shanghai","city2":"Hongqiao","city3":"Changning District","state":"","stateShort":"","country":"China","description":"Shanghai Hongqiao International was the first airport built in Shanghai. Its airport code makes sense as *S*hanghai *H*ongqiao *A*irport, but comes from the city of *SHA*nghai.","imageCredit":"VeoLoo","imageCreditLink":"https://www.flickr.com/photos/veoloo/"},{"id":"shv","code":"shv","name":"Shreveport Regional Airport","city":"Shreveport","state":"Louisiana","stateShort":"LA","country":"USA","description":"Operational since 1931, Shreveport Regional Airport’s code honors its home in the city of *Sh*re*v*eport.","imageCredit":"Ken Lund","imageCreditLink":"https://www.flickr.com/photos/kenlund/"},{"id":"sin","code":"sin","name":"Lapangan Terbang Changi Singapura","nameEnglish":"Singapore Changi Airport","city":"Singapore","city2":"Changi","state":"","stateShort":"","country":"Singapore","description":"Often called just Changi Airport, *Sin*gapore’s main airport was named Skytrax “Best Airport in the World” three years in a row.","imageCredit":"Balaji Dutt M V","imageCreditLink":"https://www.flickr.com/photos/mvbalaji/"},{"id":"sjc","code":"sjc","name":"Norman Y. Mineta San Jose International Airport","city":"San Jose","state":"California","stateShort":"CA","country":"USA","description":"In 2001, San Jose International was renamed to honor former mayor Norman Mineta. Its airport code honors its home in *S*an *J*ose, *C*alifornia.","imageCredit":"Corey Seeman","imageCreditLink":"https://www.flickr.com/photos/cseeman/"},{"id":"sjj","code":"sjj","name":"Sarajevo International Airport","city":"Sarajevo","city2":"Butmir","country":"Bosnia and Herzegovina","description":"Opened in 1969, Sarajevo International is located in the suburb of Butmir and is often called Butmir Airport. Its airport code comes from the capital city of *S*ara*j*evo, with a second ‘*J*’ as a filler letter.","imageCredit":"Keno Photography","imageCreditLink":"https://www.flickr.com/photos/74721003@N06/"},{"id":"sjo","code":"sjo","name":"Aeropuerto Internacional Juan Santamaría","nameEnglish":"Juan Santamaría International Airport","city":"San José","city2":"San Jose","city3":"Alajuela","state":"San José","stateShort":"","country":"Costa Rica","description":"Juan Santamaría International honors Juan Santamaría, national hero of Costa Rica who was killed in the Second Battle of Rivas in 1856. Its code comes from the city it serves, *S*an *JO*sé","imageCredit":"Eric T Gunther","imageCreditLink":"http://en.wikipedia.org/wiki/Juan_Santamar%C3%ADa_International_Airport#/media/File:San_Jose_Costa_Rica_Airport.JPG"},{"id":"sju","code":"sju","name":"Aeropuerto Internacional Luis Muñoz Marín","nameEnglish":"Luis Muñoz Marín International Airport","city":"San Juan","city2":"Carolina","state":"","stateShort":"","country":"Puerto Rico","description":"Luis Muñoz Marín International is named for Puerto Rico’s first democratically elected governor. Although actually located in Carolina, its airport code reflects the capital city of *S*an *Ju*an.","imageCredit":"davsot","imageCreditLink":"https://www.flickr.com/photos/davsot/"},{"id":"skg","code":"skg","name":"Diethnís Kratikós Aeroliménas Thessaloníkis “Makedonía”","nameEnglish":"Thessaloniki International Airport “Macedonia”","city":"Thessaloniki","city2":"Mikra","country":"Greece","description":"Opened in 1930, Thessaloniki International is often called Macedonia Airport. Its three-letter code comes from an alternate name for the city of Thessaloniki: *S*aloni*k*a, *G*reece.","imageCredit":"Tilemahos Efthimiadis","imageCreditLink":"https://www.flickr.com/photos/telemax/"},{"id":"skp","code":"skp","name":"Aerodrom Skopje “Aleksandar Veliki”","nameEnglish":"Skopje “Alexander the Great” Airport","city":"Skopje ","city2":"Petrovec","country":"Macedonia","description":"Skopje Airport is named after Alexander the Great, ancient king and pharaoh. Located in the village of Petrovec, it serves the capital city of *Sk*o*p*je.","imageCredit":"Hristina Dojcinova","imageCreditLink":"http://en.wikipedia.org/wiki/Skopje_%22Alexander_the_Great%22_Airport#/media/File:Skopje_Alexander_the_Great_Airport.jpg"},{"id":"slc","code":"slc","name":"Salt Lake City International Airport","city":"Salt Lake City","state":"Utah","stateShort":"UT","country":"USA","description":"Originally named Woodward Field after local aviator John P. Woodward, Utah’s busiest airport now gets its name and airport code from state capital *S*alt *L*ake *C*ity.","imageCredit":"Andrew Herington","imageCreditLink":"https://www.flickr.com/photos/aherington/"},{"id":"smf","code":"smf","name":"Sacramento International Airport","city":"Sacramento","state":"California","stateShort":"CA","country":"USA","description":"When Sacramento International was built, the airport code SAC was already taken by (then named) Sacramento Municipal Airport. So it took its code from its original name, *S*acramento *M*etropolitan *F*ield.","imageCredit":"Rich","imageCreditLink":"https://www.flickr.com/photos/richmanwisco/"},{"id":"sna","code":"sna","name":"John Wayne International Airport","city":"Orange County","city2":"Santa Ana","state":"California","stateShort":"CA","country":"USA","description":"In 1979, Orange County Airport was renamed to honor John Wayne, legendary actor and resident of nearby Newport Beach. Its airport code honors its home in the city of *S*a*n*ta *A*na.","imageCredit":"Peter Talke","imageCreditLink":"https://www.flickr.com/photos/talkephotography/"},{"id":"snn","code":"snn","name":"Shannon Airport","city":"Shannon","state":"","country":"Ireland","description":"After World War II, Shannon Airport became the primary gateway for transatlantic flights to and from the U.S. Its airport code honors its home in the town of *S*ha*nn*on.","imageCredit":"Wolf32at","imageCreditLink":"http://en.wikipedia.org/wiki/Shannon_Airport#/media/File:Shannon-airport-building-2008.jpg"},{"id":"soc","code":"soc","name":"Bandar Udara Internasional Adisumarmo","nameEnglish":"Adisumarmo International Airport","city":"Surakarta","city2":"Ngemplak","city3":"Central Java","state":"","stateShort":"","country":"Indonesia","description":"Adisumarmo International honors Adisumarmo Wiryokusumo, national hero and pioneer of the Indonesian Air Force. It serves the city of Surakarta, also known as *So*lo *C*ity.","imageCredit":"WikiSanktGerard","imageCreditLink":"http://en.wikipedia.org/wiki/User:WikiSanktGerard"},{"id":"sof","code":"sof","name":"Letishte Sofiya","nameEnglish":"Sofia Airport","city":"Sofia","city2":"Vrazhdebna","state":"","stateShort":"","country":"Bulgaria","description":"Often called Sofia-Vrazhdebna Airport, Bulgaria’s primary airport gets its three-letter code from its home in *Sof*ia.","imageCredit":"emilstefanov","imageCreditLink":"https://www.flickr.com/photos/emilstefanov/"},{"id":"sou","code":"sou","name":"Southampton Airport","city":"Southampton","city2":"Eastleigh","state":"England","country":"UK","description":"Located in the Borough of Eastleigh, Southampton Airport was the site for the first Supermarine Spitfire test flight in 1936. Its airport code honors its home in the city of *Sou*thampton.","imageCredit":"Stuart Bryant","imageCreditLink":"https://www.flickr.com/photos/stuartbryant/"},{"id":"spg","code":"spg","name":"Albert Whitted Airport","city":"Saint Petersburg","city2":"Tampa Bay","state":"Florida","stateShort":"FL","country":"USA","description":"Opened in 1928, the airport is named after Navy Lieutenant James Albert Whitted, one of the first 250 Naval Aviators. Its airport code honors its home city, *S*aint *P*etersbur*g*.","imageCredit":"CityofStPete","imageCreditLink":"https://www.flickr.com/photos/cityofstpete/"},{"id":"spu","code":"spu","name":"Zračna luka Split","nameEnglish":"Split Airport","city":"Split","city2":"Kaštela","city3":"Kastela","state":"","stateShort":"","country":"Croatia","description":"Formerly Resnik Airport, Split Airport gets its first two letters from the city it serves, *Sp*lit. The ‘U’ isn't as clear, but could come from “*S*alonae *P*alati*u*m”, long-believed (erroneously) to be the origin of the city’s name.","imageCredit":"Ballota","imageCreditLink":"http://en.wikipedia.org/wiki/Split_Airport#/media/File:Split_Airport_terminal.jpg"},{"id":"sql","code":"sql","name":"San Carlos Airport","city":"San Carlos","state":"California","stateShort":"CA","country":"USA","description":"Opened during World War I and originally named San Carlos Flying Field, SQL is often misattributed as a reference to the nearby database company, Oracle. It actually stands for *S*an Car*l*os plus a helpful filler ‘*Q*’.","imageCredit":"Nelson Minar","imageCreditLink":"https://www.flickr.com/photos/nelsonminar/"},{"id":"srg","code":"srg","name":"Bandar Udara Internasional Ahmad Yani","nameEnglish":"Ahmad Yani International Airport","city":"Semarang","city2":"East Java","state":"","stateShort":"","country":"Indonesia","description":"Once a military airbase for the Armed Forces of Indonesia, Ahmad Yani International serves *S*ema*r*an*g* and its surrounding areas. It honors General Ahmad Yani, a major figure in the Indonesian National Revolution.","imageCredit":"Curtis Ferrell","imageCreditLink":"https://www.flickr.com/photos/curtisferrell/"},{"id":"srq","code":"srq","name":"Sarasota–Bradenton International Airport","city":"Sarasota","city2":"Bradenton","state":"Florida","stateShort":"FL","country":"USA","description":"Sarasota–Bradenton Airport’s first three-letter code was SSO for *S*ara*so*ta. Because it could easily be confused for the distress signal SOS, the IATA assigned *S*a*r*asota SRQ, with the ‘*Q*’ as a filler letter.","imageCredit":"Robert S. Donovan","imageCreditLink":"https://www.flickr.com/photos/booleansplit/"},{"id":"ssa","code":"ssa","name":"Aeroporto Internacional de Salvador-Deputado Luís Eduardo Magalhães ","nameEnglish":"Salvador-Deputado Luís Eduardo Magalhães International Airport","city":"Salvador","state":"Bahia","stateShort":"BA","country":"Brazil","description":"Named after Brazilian politician Luís Eduardo Magalhães, Salvador Aiport gets its three-letter code from the city of Salvador’s former name of *S*ão *Sa*lvador.","imageCredit":"Infraero Aeroportos","imageCreditLink":"https://www.flickr.com/photos/infraero/"},{"id":"ssf","code":"ssf","name":"Stinson Municipal Airport","city":"San Antonio","state":"Texas","stateShort":"TX","country":"USA","description":"Stinson Municipal was established in 1915 by aviators and teachers Katherine, Eddie, and Marjorie Stinson. Its airport code comes from its original name and purpose as *S*tinson *S*chool of *F*lying.","imageCredit":"San Antonio Airport System","imageCreditLink":"https://www.sanantonio.gov/aviation/"},{"id":"sti","code":"sti","name":"Aeropuerto Internacional del Cibao","nameEnglish":"Cibao International Airport","city":"Santiago de los Caballeros","country":"Dominican Republic","description":"Inaugurated in 2002, Cibao International serves the Cibao region of Dominican Republic. Its airport code comes from its home city of *S*an*ti*ago de los Caballeros.","imageCredit":"Lacreta","imageCreditLink":"http://en.wikipedia.org/wiki/Cibao_International_Airport#/media/File:COA-B772enSTI2007.JPG"},{"id":"stl","code":"stl","name":"Lambert–St. Louis International Airport","city":"St. Louis","state":"Missouri","stateShort":"MO","country":"USA","description":"Lambert-St. Louis International is named after Albert Bond Lambert, Olympic golfer and the first to receive a pilot's license in the city of *St*. *L*ouis.","imageCredit":"Rich","imageCreditLink":"https://www.flickr.com/photos/richmanwisco/"},{"id":"stn","code":"stn","name":"London Stansted Airport","city":"London","city2":"Stansted Mountfitchet","state":"England","stateShort":"","country":"UK","description":"Started as an airfield during World War II, London *St*a*n*sted Airport opened its first commercial terminal building in 1969 and is a base for many major European low-cost carriers.","imageCredit":"John Lord","imageCreditLink":"https://www.flickr.com/photos/yellowbookltd/"},{"id":"stp","code":"stp","name":"St. Paul Downtown Airport","city":"Saint Paul","city2":"Twin Cities","state":"Minnesota","stateShort":"MN","country":"USA","description":"Built in 1927, Holman Field was named after airline and stunt pilot Charles W. Holman. Today, the airport is known as the *St*. *P*aul Downtown Airport.","imageCredit":"Tony Webster","imageCreditLink":"https://www.flickr.com/photos/diversey/"},{"id":"str","code":"str","name":"Flughafen Stuttgart - Manfred Rommel Flughafen","nameEnglish":"Stuttgart Airport","city":"Stuttgart","state":"","stateShort":"","country":"Germany","description":"Stuttgart Airport was renamed in 2014 to honor former mayor Manfred Rommel. It is the sixth busiest airport in Germany and serves the city of *St*uttga*r*t.","imageCredit":"Dieter Weinelt","imageCreditLink":"https://www.flickr.com/photos/weinelt/"},{"id":"sts","code":"sts","name":"Charles M. Schulz - Sonoma County Airport","city":"Santa Rosa","city2":"Sonoma County","state":"California","stateShort":"CA","country":"USA","description":"In 2000, Charles M. Schulz Airport was renamed to honor the famed “Peanuts” cartoonist, a longtime resident of Sonoma County. The airport’s code recognizes the city in which it is located, *S*an*t*a Ro*s*a.","imageCredit":"Prayitno","imageCreditLink":"https://www.flickr.com/photos/prayitnophotography/"},{"id":"stt","code":"stt","name":"Cyril E. King Airport","city":"Saint Thomas","stateShort":"Virgin Islands","country":"USA","description":"Previously named after Harry S. Truman, Cyril E. King Airport was renamed in 1984 to honor the former governor of the U.S. Virgin Islands. Its airport code comes from its home on the island of *S*ain*t* *T*homas.","imageCredit":"Akshat Aranya","imageCreditLink":"https://www.flickr.com/photos/aaranya/"},{"id":"sub","code":"sub","name":"Bandar Udara Internasional Juanda","nameEnglish":"Juanda International Airport","city":"Surabaya","city2":"Sidoarjo","state":"East Java","stateShort":"","country":"Indonesia","description":"Juanda International is the second-busiest airport in Indonesia. It is named after the last Indonesian Prime Minister, Djuanda Kartawidjaja, but gets its airport code from the city it serves: *Su*ra*b*aya.","imageCredit":"123_456","imageCreditLink":"https://www.flickr.com/photos/123_456/"},{"id":"sun","code":"sun","name":"Friedman Memorial Airport","city":"Hailey","city2":"Sun Valley","city3":"Ketchum","state":"Idaho","stateShort":"ID","country":"USA","description":"Friedman Memorial is named after the Friedman family who donated the land to the city of Hailey in 1931. Its airport code comes from the nearby resort community it serves: *Sun* Valley.","imageCredit":"DieselDemon","imageCreditLink":"https://www.flickr.com/photos/28096801@N05"},{"id":"sux","code":"sux","name":"Sioux Gateway Airport","city":"Sioux City","state":"Iowa","stateShort":"IA","country":"USA","description":"*S*io*ux* City petitioned twice to have its airport code SUX changed. With no great alternatives, they stuck with it and now use the slogan “Fly SUX.”","imageCredit":"David Mulder","imageCreditLink":"https://www.flickr.com/photos/113026679@N03/"},{"id":"svg","code":"svg","name":"Stavanger lufthavn, Sola","nameEnglish":"Stavanger Airport, Sola","city":"Stavanger","city2":"Sola","country":"Norway","description":"Opened in 1937, Stavanger Airport is the second oldest in Norway. Located in Sola, it gets its airport code from the nearby city of *S*ta*v*an*g*er.","imageCredit":"karlrpet","imageCreditLink":"https://www.flickr.com/photos/54973802@N00/"},{"id":"svo","code":"svo","name":"Sheremetyevo International Airport","city":"Moscow","city2":"Khimki","state":"","stateShort":"","country":"Russia","description":"Opened in 1959, *S*heremetye*vo* International is located in the city of Khimki, but was named after the nearby village of Sheremetyevsky.","imageCredit":"Jaime-Silva","imageCreditLink":"https://www.flickr.com/photos/20792787@N00/"},{"id":"svq","code":"svq","name":"Aeropuerto de Sevilla","nameEnglish":"Seville Airport","city":"Seville","state":"","stateShort":"","country":"Spain","description":"Seville Airport, also known as San Pablo Airport, began commercial flights in 1919. Its airport code comes from the city of *S*e*v*ille, plus a ‘*Q*’ as a filler letter.","imageCredit":"Luis Jou García","imageCreditLink":"https://www.flickr.com/photos/luisjoujr/"},{"id":"svx","code":"svx","name":"Koltsovo International Airport","city":"Yekaterinburg","city2":"Sverdlovsk","state":"","stateShort":"","country":"Russia","description":"Many airports use the letter ‘X’ to fill in when the desired letters are already taken. Koltsovo International serves Yekaterinburg, industrial and cultural center of the Ural region. It was previously named *Sv*erdlovsk, plus that helpful ‘*X*’.","imageCredit":"Falschivomonetchick","imageCreditLink":"https://commons.wikimedia.org/wiki/User:Фальшивомонетчик"},{"id":"swf","code":"swf","name":"Stewart International Airport","city":"Newburgh","city2":"Hudson Valley","state":"New York","stateShort":"NY","country":"USA","description":"Founded in the 1930s, Stewart International gets its name from the Stewart family who donated the land for the future airport. It was previously the location for *S*te*w*art Dairy *F*arm.","imageCredit":"Eric Salard","imageCreditLink":"https://www.flickr.com/photos/airlines470/"},{"id":"sxf","code":"sxf","name":"Flughafen Berlin-Schönefeld","nameEnglish":"Berlin Schönefeld Airport","city":"Berlin","city2":"Schönefeld","city3":"Schonefeld","state":"","stateShort":"","country":"Germany","description":"Many airports use the letter ‘X’ to fill in when the desired letters are already taken. This Berlin airport get its code from its home in the town of *S*chöne*f*eld plus that helpful ‘*X*’.","imageCredit":"Aero Icarus","imageCreditLink":"https://www.flickr.com/photos/aero_icarus/"},{"id":"sxm","code":"sxm","name":"Princess Juliana International Airport","city":"Simpson Bay","city2":"Sint Maarten","city3":"France","state":"Netherlands","stateShort":"","country":"Saint Martin","description":"Many airports use the letter ‘X’ to fill in when the desired letters are already taken. Princess Juliana International was named after the crowned princess (at the time) of the Netherlands. Its airport code stands for *S*aint *M*artin, plus that helpful ‘*X*’.","imageCredit":"Aero Icarus","imageCreditLink":"https://www.flickr.com/photos/aero_icarus/"},{"id":"syd","code":"syd","name":"Sydney (Kingsford Smith) Airport","city":"Sydney","state":"New South Wales","stateShort":"NSW","country":"Australia","description":"Kingsford Smith Airport is named in honor of Sir Charles Kingsford Smith, Australian aviator. Its airport code honors its home in *Syd*ney.","imageCredit":"Bobby Das","imageCreditLink":"https://www.flickr.com/photos/bobbydas/"},{"id":"syr","code":"syr","name":"Syracuse Hancock International Airport","city":"Syracuse","state":"New York","stateShort":"NY","country":"USA","description":"Syracuse Hancock International opened for passenger travel in 1949 and honors Clarence E. Hancock, former New York congressman. Its airport codes honors the city of *Syr*acuse.","imageCredit":"New York National Guard","imageCreditLink":"https://www.flickr.com/photos/nyng/"},{"id":"szb","code":"szb","name":"Lapangan Terbang Sultan Abdul Aziz Shah","nameEnglish":"Sultan Abdul Aziz Shah Airport","city":"Subang","city2":"Kuala Lumpur","state":"Selangor","stateShort":"","country":"Malaysia","description":"Sultan Abdul Aziz Shah Airport gave its airport code KUL to Kuala Lumpur International in 1998. Its new code comes from its current and former names: *S*ultan Abdul A*z*iz Shah / Su*b*ang Airport.","imageCredit":"SunCon Photos","imageCreditLink":"https://www.flickr.com/photos/suncon/"},{"id":"szg","code":"szg","name":"Salzburg Airport W. A. Mozart","city":"Salzburg","state":"","stateShort":"","country":"Austria","description":"Austria’s second largest airport is named after classical composer Wolfgang Amadeus Mozart, but its airport code honors its home in *S*al*z*bur*g*.","imageCredit":"flightlog","imageCreditLink":"https://www.flickr.com/photos/flightlog/"},{"id":"tao","code":"tao","name":"Qingdao Liuting International Airport","city":"Qingdao","city2":"Shandong","state":"Chengyang District","stateShort":"","country":"China","description":"Qingdao Liuting Airport will soon be replaced by Qingdao Jiaodong International. Its airport code comes from an older English spelling of Qingdao: Tsing*tao*.","imageCredit":"byeangel","imageCreditLink":"https://www.flickr.com/photos/byeangel/"},{"id":"tas","code":"tas","name":"Toshkent Xalqaro Aeroporti","nameEnglish":"Tashkent International Airport","city":"Tashkent","state":"","stateShort":"","country":"Uzbekistan","description":"Tashkent International is the largest airport in Uzbekistan. Its airport code comes from its home in the city of *Tas*hkent.","imageCredit":"Ramón","imageCreditLink":"https://www.flickr.com/photos/sitomon/"},{"id":"tbs","code":"tbs","name":"Tbilisi International Airport","city":"Tbilisi","state":"","stateShort":"","country":"Georgia","description":"Formerly named Novo Alexeyevka International, Georgia’s largest airport is located in the capital city of *Tb*ili*s*i.","imageCredit":"James Emery","imageCreditLink":"https://www.flickr.com/photos/emeryjl/"},{"id":"tfn","code":"tfn","name":"Aeropuerto de Tenerife Norte","nameEnglish":"Tenerife North Airport","city":"Tenerife","city2":"Santa Cruz de Tenerife","state":"Canary Islands","country":"Spain","description":"Formerly known as Los Rodeos Airport, *T*eneri*f*e *N*orth Airport serves the island of Tenerife. Along with Tenerife South, it brings the most passenger traffic of all the Canary Islands.","imageCredit":"LioniceX","imageCreditLink":"https://www.flickr.com/photos/lionicex/"},{"id":"tfs","code":"tfs","name":"Aeropuerto de Tenerife Sur Reina Sofía","nameEnglish":"Tenerife South Reina Sofia Airport","city":"Tenerife","city2":"Playa de Las Américas","city3":"Granadilla de Abona","state":"Canary Islands","country":"Spain","description":"*T*eneri*f*e *S*outh Airport was built to accommodate heavy tourist traffic and to relieve Tenerife North which was often covered in trade winds. It opened in 1978 and was dedicated to Queen Sofía of Spain.","imageCredit":"MarinoCarlos","imageCreditLink":"https://www.flickr.com/photos/marino/"},{"id":"tgd","code":"tgd","name":"Podgorica Airport","city":"Podgorica","city2":"Golubovci","state":"","stateShort":"","country":"Montenegro","description":"The city of Podgorica was known as *T*ito*g*ra*d* from 1946 to 1992, after the Yugoslav leader Josip Broz Tito.","imageCredit":"estorde","imageCreditLink":"https://www.flickr.com/photos/estorde/"},{"id":"tgm","code":"tgm","name":"Aeroportul Transilvania Târgu Mureș","nameEnglish":"Transilvania Târgu Mureș Airport","city":"Târgu Mureș","city2":"Targu Mures","city3":"Vidrasău","state":"","stateShort":"","country":"Romania","description":"Opened in 1936, Transilvania Târgu Mureș Airport, often called just Transilvania Airport, is located in the village of Vidrasău and serves the city of *T*âr*g*u *M*ureș.","imageCredit":"Kulja","imageCreditLink":"http://en.wikipedia.org/wiki/T%C3%A2rgu_Mure%C8%99_International_Airport#/media/File:Transilvania_International_Airport.jpg"},{"id":"tgu","code":"tgu","name":"Aeropuerto Internacional Toncontín","nameEnglish":"Toncontín International Airport","city":"Tegucigalpa","country":"Honduras","description":"A notoriously difficult airport for landing, Toncontín opened in 1933 and gets its three-letter code from the city in which it is located, *T*e*gu*cigalpa, the capital of Honduras.","imageCredit":"enrique","imageCreditLink":"https://www.flickr.com/photos/egm757lover/"},{"id":"thr","code":"thr","name":"Mehrabad International Airport","city":"Tehran","country":"Iran","description":"Originally opened as an airfield in 1938, Mehrabad International was the primary airport for the city of *T*e*hr*an until 2007.","imageCredit":"Frode Bjørshol","imageCreditLink":"https://www.flickr.com/photos/froderamone/"},{"id":"tia","code":"tia","name":"Tirana International Airport Nënë Tereza","city":"Tirana","city2":"Rinas","state":"","stateShort":"","country":"Albania","description":"Often called Rinas International, Albania’s only international airport is named after Mother Teresa. Its airport code honors the nearby city of *Ti*ran*a*.","imageCredit":"George Redgrave","imageCreditLink":"https://www.flickr.com/photos/funfilledgeorgie/"},{"id":"tij","code":"tij","name":"Aeropuerto Internacional de Tijuana","nameEnglish":"Tijuana International Airport","city":"Tijuana","state":"Baja California","stateShort":"","country":"Mexico","description":"Opened in 1951 and sometimes referred to as General Abelardo L. Rodríguez International, its airport code comes from the city of *Tij*uana.","imageCredit":"Cesar Lozano","imageCreditLink":"https://www.flickr.com/photos/nopryingeyes/"},{"id":"tjm","code":"tjm","name":"Roshchino International Airport","city":"Tyumen","country":"Russia","description":"Built in 1968 and reconstructed in 1998, Roshchino International gets its airport code from its home city of *T*yu*m*en. The ‘J’ comes from the pronunciation of Tyumen, which sounds like *Tj*u*m*en.","imageCredit":"Aero Icarus","imageCreditLink":"https://www.flickr.com/photos/aero_icarus/"},{"id":"tll","code":"tll","name":"Lennart Meri Tallinna lennujaam","nameEnglish":"Lennart Meri Tallinn Airport","city":"Tallinn","state":"","stateShort":"","country":"Estonia","description":"Lennart Meri Airport is named after the second Estonian President, Lennart Meri. Its airport code honors its home in the city of *T*a*ll*inn.","imageCredit":"Ton Zijlstra","imageCreditLink":"https://www.flickr.com/photos/tonz/"},{"id":"tls","code":"tls","name":"Aéroport de Toulouse–Blagnac","nameEnglish":"Toulouse–Blagnac Airport","city":"Toulouse","city2":"Blagnac","state":"","stateShort":"","country":"France","description":"Toulouse–Blagnac Airport is located in the suburb of Blagnac and gets it airport code from the city of *T*ou*l*ou*s*e.","imageCredit":"Ekhinos","imageCreditLink":"https://www.flickr.com/photos/ekhinos/"},{"id":"tlv","code":"tlv","name":"Ben Gurion Airport","city":"Tel Aviv","state":"","stateShort":"","country":"Israel","description":"Renamed in 1973 to honor Israel’s first prime minister, Ben Gurion Airport is often called by its Hebrew acronym, “Natbag.” Its airport code comes from its proximity to the city of *T*e*l* Avi*v*.","imageCredit":"hjl","imageCreditLink":"https://www.flickr.com/photos/hjl/"},{"id":"tng","code":"tng","name":"Tangier Ibn Battouta Airport","city":"Tangier","state":"","stateShort":"","country":"Morocco","description":"Tangier Ibn Battouta Airport is named after Ibn Battouta, Moroccan explorer and scholar. Its airport code honors its home in the city of *T*a*ng*ier.","imageCredit":"calflier001","imageCreditLink":"https://www.flickr.com/photos/calflier001/"},{"id":"tnt","code":"tnt","name":"Dade-Collier Training and Transition Airport","city":"Miami","city2":"Fort Lauderdale","state":"Florida","stateShort":"FL","country":"USA","description":"Originally planned as the largest airport in the world with six runways servicing supersonic jets, Everglades Jetport’s construction was stopped due to environmental concerns. Its name was changed to Dade-Collier *T*raining a*n*d *T*ransition Airport.","imageCredit":"Larry Johnson","imageCreditLink":"https://www.flickr.com/photos/90518936@N06/"},{"id":"tol","code":"tol","name":"Toledo Express Airport","city":"Toledo","city2":"Swanton","city3":"Monclova","state":"Ohio","stateShort":"OH","country":"USA","description":"First opened in 1955, Toledo Express Airport is located in the townships of Swanton and Monclova. Its airport code honors the city it serves: *Tol*edo.","imageCredit":"Micah Maziar","imageCreditLink":"https://www.flickr.com/photos/mzwp/"},{"id":"tpa","code":"tpa","name":"Tampa International Airport","city":"Tampa","state":"Florida","stateShort":"FL","country":"USA","description":"Renamed in 1950, Tampa International was once Drew Field Municipal, named after land developer John H. Drew. Its airport code honors its home in the city of *T*am*pa*.","imageCredit":"Robert S. Donovan","imageCreditLink":"https://www.flickr.com/photos/booleansplit/"},{"id":"tpe","code":"tpe","name":"Taiwan Taoyuan International Airport","city":"Taipei","city2":"Taoyuan City","country":"Taiwan","description":"Previously named Chiang Kai-shek International after the former president, Taiwan’s largest airport is actually located in Taoyuan City. Its airport code honors the city it serves, *T*ai*pe*i.","imageCredit":"Ali Reza Zamli","imageCreditLink":"https://www.flickr.com/photos/azerila/"},{"id":"tri","code":"tri","name":"Tri-Cities Regional Airport","city":"Blountville","city2":"Bristol","city3":"Johnson City","state":"Tennessee","stateShort":"TN","country":"USA","description":"Tri-Cities Regional’s airport code honors the *Tri*-Cities area of NE Tennessee and SW Virginia, including the cities of Bristol, Kingsport, and Johnson City.","imageCredit":"Joevare","imageCreditLink":"https://www.flickr.com/photos/joevare/"},{"id":"trn","code":"trn","name":"Aeroporto di Torino Sandro Pertini","nameEnglish":"Turin Airport Sandro Pertini","city":"Turin","country":"Italy","description":"Built in 1953 at the site of a former World War II base, Turin Airport is now named after former Italian President Sandro Pertini. Its airport code honors its home in the city of *T*u*r*i*n*.","imageCredit":"Paolo Cerutti","imageCreditLink":"https://www.flickr.com/photos/paolins92/"},{"id":"trv","code":"trv","name":"Trivandrum International Airport","city":"Thiruvananthapuram","city2":"Trivandrum","state":"Kerala","stateShort":"KL","country":"India","description":"Trivandrum International was upgraded to an international airport in 1991. Located in Thiruvananthapuram, its name and code comes from the city’s short name, *Tr*i*v*andrum.","imageCredit":"Aleksandr Zykov","imageCreditLink":"https://www.flickr.com/photos/infanticida"},{"id":"tse","code":"tse","name":"Astana International Airport","city":"Astana","state":"","stateShort":"","country":"Kazakhstan","description":"Astana International is located in Astana, which became the capital city of Kazakhstan in 1997. In 1963 when the airport opened, Astana was named *Tse*linograd.","imageCredit":"Alex J. Butler","imageCreditLink":"https://www.flickr.com/photos/alexjbutler/"},{"id":"ttn","code":"ttn","name":"Trenton–Mercer Airport","city":"Trenton","city2":"Ewing Township","state":"New Jersey","stateShort":"NJ","country":"USA","description":"Previously known as Mercer County Airport, it was renamed in 1995 to Trenton–Mercer Airport to promote its location in the capital city of *T*ren*t*o*n*.","imageCredit":"Ken Lund","imageCreditLink":"https://www.flickr.com/photos/kenlund/"},{"id":"tul","code":"tul","name":"Tulsa International Airport","city":"Tulsa","state":"Oklahoma","stateShort":"OK","country":"USA","description":"Renamed ‘International’ in 1963, *Tul*sa Municipal Airport opened in 1928 and just two years later was the busiest airport in the world, outpacing London, Berlin, and Paris.","imageCredit":"Rex Brown","imageCreditLink":"https://www.flickr.com/photos/maduko/"},{"id":"tun","code":"tun","name":"Tunis–Carthage International Airport","city":"Tunis","city2":"Carthage","state":"","stateShort":"","country":"Tunisia","description":"Tunis–Carthage International is named after the nearby historic city of Carthage and the city it serves, *Tun*is.","imageCredit":"Habib M'henni","imageCreditLink":"https://www.flickr.com/photos/habibmhenni/"},{"id":"tus","code":"tus","name":"Tucson International Airport","city":"Tucson","state":"Arizona","stateShort":"AZ","country":"USA","description":"Tucson International is the second busiest airport in Arizona. Its airport code honors its home in the city of *Tu*c*s*on.","imageCredit":"Seen Not Heard","imageCreditLink":"https://www.flickr.com/photos/20186423@N00/"},{"id":"txl","code":"txl","name":"Flughafen Berlin-Tegel “Otto Lilienthal”","nameEnglish":"Berlin Tegel Airport","city":"Berlin","city2":"Tegel","state":"","stateShort":"","country":"Germany","description":"Many airports use the letter ‘X’ to fill in when the desired letters are already taken. This Berlin airport get its code from its home in the borough of *T*ege*l* plus that helpful ‘*X*’.","imageCredit":"Mika Stetsovski","imageCreditLink":"https://www.flickr.com/photos/psyxek/"},{"id":"tys","code":"tys","name":"McGhee Tyson Airport","city":"Knoxville","city2":"Alcoa","state":"Tennessee","stateShort":"TN","country":"USA","description":"Located in the city of Alcoa, south of Knoxville, McGhee Tyson Airport is named after U.S. Navy pilot Charles McGhee *Tys*on who was lost in action during World War I.","imageCredit":"Tasha Lutek","imageCreditLink":"https://www.flickr.com/photos/tashalutek/"},{"id":"ufa","code":"ufa","name":"Ufa International Airport","city":"Ufa","city2":"Bashkortostan","state":"","stateShort":"","country":"Russia","description":"Ufa International is the primary airport serving *Ufa*, the capital of the Republic of Bashkortostan in Russia. It is one of the few airport codes that matches the full name of the city it serves.","imageCredit":"Vhorvat","imageCreditLink":"http://en.wikipedia.org/wiki/Ufa_International_Airport#/media/File:Ufa_International_Airport.jpg"},{"id":"uio","code":"uio","name":"Aeropuerto Internacional Mariscal Sucre","nameEnglish":"Mariscal Sucre International Airport","city":"Quito","city2":"Tababela","state":"Pichincha","stateShort":"","country":"Ecuador","description":"Mariscal Sucre International is named after Antonio José de Sucre who fought for the independence of Quito, in what is now Ecuador. Because the FCC reserved codes starting with ‘Q’, it opted for other letters from its home city of Q*ui*t*o*.","imageCredit":"Aero Icarus","imageCreditLink":"https://www.flickr.com/photos/aero_icarus/"},{"id":"upg","code":"upg","name":"Bandar Udara Internasional Sultan Hasanuddin","nameEnglish":"Sultan Hasanuddin International Airport","city":"Makassar","city2":"South Sulawesi","state":"","stateShort":"","country":"Indonesia","description":"Sultan Hasanuddin International is the busiest airport in South Sulawesi and serves the city of Makassar. Its airport code comes from the city’s former name: *U*jung *P*andan*g*.","imageCredit":"Midori","imageCreditLink":"http://en.wikipedia.org/wiki/Sultan_Hasanuddin_International_Airport#/media/File:Bandar_Udara_Internasional_Sultan_Hasanuddin.jpg"},{"id":"ush","code":"ush","name":"Aeropuerto Internacional de Ushuaia Malvinas Argentinas","nameEnglish":"Ushuaia – Malvinas Argentinas International Airport","city":"Ushuaia","state":"","stateShort":"","country":"Argentina","description":"Ushuaia International’s full name reflects Argentina’s claim of sovereignty over the Falkland Islands (Islas Malvinas). Its airport code reflects its home in the city of *Ush*uaia.","imageCredit":"David Stanley","imageCreditLink":"https://www.flickr.com/photos/davidstanleytravel/"},{"id":"usm","code":"usm","name":"Samui International Airport","city":"Ko Samui ","country":"Thailand","description":"Samui International opened in 1989 and, except for its gift shop, is entirely outdoors. Its airport code USM is a combination of letters from the island of Ko *S*a*mu*i where it’s located.","imageCredit":"Sébastien Levaillant","imageCreditLink":"https://www.flickr.com/photos/s_levaillant/"},{"id":"uth","code":"uth","name":"Udon Thani International Airport","city":"Udon Thani","country":"Thailand","description":"Used as Udorn Royal Thai Air Force Base during the Vietnam War, Udon Thani International gets its three-letter code from its home in the city of *U*don *Th*ani.","imageCredit":"Top Koaysomboon","imageCreditLink":"https://www.flickr.com/photos/phonks/"},{"id":"uud","code":"uud","name":"Baikal International Airport","city":"Ulan-Ude","state":"","stateShort":"","country":"Russia","description":"Now named after Lake Baikal, Baikal International was once named after its home in the city of *U*lan-*Ud*e.","imageCredit":"Sergey Vladimirov","imageCreditLink":"https://www.flickr.com/photos/vlsergey/"},{"id":"vam","code":"vam","name":"Villa International Airport Maamigili","city":"Maamigili","state":"Alif Dhaal Atoll","stateShort":"","country":"Maldives","description":"Developed by Maldivian businessman Qasim Ibrahim, Maamigili’s international airport gets its airport code from its full name: *V*illa International *A*irport *M*aamigili.","imageCredit":"DD","imageCreditLink":"https://www.flickr.com/photos/didi8/"},{"id":"vce","code":"vce","name":"Aeroporto di Venezia Marco Polo","nameEnglish":"Venice Marco Polo Airport","city":"Venice","city2":"Tessera","state":"","stateShort":"","country":"Italy","description":"Marco Polo Airport shares its name with the famous Venetian merchant traveler. Its airport code comes from its home city of *V*eni*ce*.","imageCredit":"nekotank","imageCreditLink":"https://www.flickr.com/photos/knkcat/"},{"id":"vcp","code":"vcp","name":"Aeroporto Internacional de Viracopos/Campinas","nameEnglish":"Viracopos International Airport","city":"Campinas","city2":"São Paulo","city3":"Sao Paulo","state":"São Paulo","stateShort":"SP","country":"Brazil","description":"*V*ira*c*o*p*os/Campinas International Airport is sometimes referred to as São Paulo/Campinas, and is named after the neighborhood where it is located.","imageCredit":"Eduardo Otubo","imageCreditLink":"https://www.flickr.com/photos/otubo/"},{"id":"vie","code":"vie","name":"Flughafen Wien-Schwechat","nameEnglish":"Vienna International Airport","city":"Vienna","city2":"Schwechat","state":"","stateShort":"","country":"Austria","description":"Austria’s largest airport is actually located in the town of Schwechat, but gets its airport code from the nearby capital city of *Vie*nna.","imageCredit":"rosmary","imageCreditLink":"https://www.flickr.com/photos/rvoegtli/"},{"id":"vko","code":"vko","name":"Vnukovo International Airport","city":"Moscow","state":"","stateShort":"","country":"Russia","description":"Vnukovo International is Moscow’s oldest operating airport, originally opened in 1941. It received its name and airport code from the small nearby village of *V*nu*ko*vo.","imageCredit":"Peter PZ","imageCreditLink":"https://www.flickr.com/photos/ppz/"},{"id":"vlc","code":"vlc","name":"Aeropuerto de Valencia","nameEnglish":"Valencia Airport","city":"Valencia","city2":"Manises","state":"","stateShort":"","country":"Spain","description":"Spain’s 8th busiest airport is located in the town of Manises, but serves the city of *V*a*l*en*c*ia.","imageCredit":"Robyn Lee","imageCreditLink":"https://www.flickr.com/photos/roboppy/"},{"id":"vno","code":"vno","name":"Tarptautinis Vilniaus oro uostas","nameEnglish":"Vilnius International Airport","city":"Vilnius","state":"","stateShort":"","country":"Lithuania","description":"Opened in 1932, Vilnius International is the largest airport in Lithuania. The city of Vilnius has had many different spellings in various languages including Wilno, Vilna, and *V*il*no*.","imageCredit":"RecoilRick","imageCreditLink":"https://www.flickr.com/photos/magneticmediafed/"},{"id":"vns","code":"vns","name":"Lal Bahadur Shastri International Airport","city":"Varanasi","city2":"Benares","city3":"Banaras","city4":"Kashi","state":"Utter Pradesh","stateShort":"UP","country":"India","description":"Formerly Varanasi International, Lal Bahadur Shastri International was renamed in 2005 to honor India’s second Prime Minister. Its airport code honors one of the holiest of the seven sacred cities, *V*ara*n*a*s*i.","imageCredit":"Kevin Tsai","imageCreditLink":"https://www.flickr.com/photos/kevinetsai/"},{"id":"vps","code":"vps","name":"Destin–Fort Walton Beach Airport","city":"Fort Walton Beach","city2":"Destin","state":"Florida","stateShort":"FL","country":"USA","description":"Located within Eglin Air Force Base, Destin–Fort Walton Beach Airport gets its code from the nearby city of *V*al*p*arai*s*o, Florida.","imageCredit":"FlyVPS","imageCreditLink":"https://twitter.com/flyvps"},{"id":"vte","code":"vte","name":"Wattay International Airport","city":"Vientiane","country":"Laos","description":"Wattay International is an international airport in the country of Laos. Its airport code comes from the capital city of *V*ien*t*ian*e* where it’s located.","imageCredit":"Top Koaysomboon","imageCreditLink":"https://www.flickr.com/photos/phonks/"},{"id":"waw","code":"waw","name":"Lotnisko Chopina w Warszawie","nameEnglish":"Warsaw Chopin Airport","city":"Warsaw","city2":"Okęcie","city3":"Chopin","state":"","stateShort":"","country":"Poland","description":"Formerly named Okecie International, Warsaw Chopin Airport honors Polish composer Frédéric Chopin. Its airport code honors its home in *Wa*rsa*w*.","imageCredit":"Robert S. Donovan","imageCreditLink":"https://www.flickr.com/photos/booleansplit/"},{"id":"wlg","code":"wlg","name":"Wellington International Airport","city":"Wellington","city2":"Rongotai","state":"","stateShort":"","country":"New Zealand","description":"Located in the suburb of Rongotai, New Zealand’s third busiest airport serves its capital city of *W*e*l*lin*g*ton.","imageCredit":"Kathrin & Stefan Marks","imageCreditLink":"https://www.flickr.com/photos/ks_marks/"},{"id":"wmi","code":"wmi","name":"Mazowiecki Port Lotniczy","nameEnglish":"Warsaw–Modlin Mazovia Airport","city":"Warsaw","city2":"Nowy Dwór Mazowiecki","country":"Poland","description":"Opened in 2012, *W*arsaw–*M*odl*i*n Mazovia Airport is located in the town of Nowy Dwór Mazowiecki and serves the city of Warsaw.","imageCredit":"Maciek Lulko","imageCreditLink":"https://www.flickr.com/photos/lulek/"},{"id":"wro","code":"wro","name":"Port Lotniczy Wrocław im. Mikołaja Kopernika","nameEnglish":"Wroclaw–Copernicus Airport","city":"Wroclaw","state":"Lower Silesian Voivodeship","stateShort":"","country":"Poland","description":"Wroclaw–Copernicus Airport was renamed in 2005 after the famous astronomer Nicolaus Copernicus. Its airpot code honors its home in the city if *Wro*claw.","imageCredit":"Krzewi","imageCreditLink":"https://www.flickr.com/photos/krzewi/"},{"id":"xiy","code":"xiy","name":"Xi'an Xianyang International Airport","city":"Xi'an","city2":"Xianyang","city3":"Weicheng District","state":"Shaanxi","stateShort":"","country":"China","description":"Opened in 1991, Xi'an Xianyang International serves the city of Xi'an, and is located in the Weicheng District of *Xi*an*y*ang.","imageCredit":"AcidBomber","imageCreditLink":"http://en.wikipedia.org/wiki/Xi%27an_Xianyang_International_Airport#/media/File:XiAn_International_Airport.JPG"},{"id":"xmn","code":"xmn","name":"Xiamen Gaoqi International Airport","city":"Xiamen","state":"Huli District","stateShort":"","country":"China","description":"Xiamen Gaoqi International is the eighth busiest airport in China and is located on the north side of *X*ia*m*e*n* Island.","imageCredit":"Jerry Luo","imageCreditLink":"https://www.flickr.com/photos/jerryluo0520/"},{"id":"xnn","code":"xnn","name":"Xining Caojiabao Airport","city":"Xining","city2":"Huzhu","city3":"Haidong","state":"Qinghai","stateShort":"","country":"China","description":"Opened in 1991, Xining Caojiabao Airport is located in Qinghai, China. Its airport code comes from the city of *X*i*n*i*n*ng.","imageCredit":"johnlaudun","imageCreditLink":"https://www.flickr.com/photos/johnlaudun/"},{"id":"xry","code":"xry","name":"Aeropuerto de Jerez","nameEnglish":"Jerez Airport","city":"Jerez de la Frontera","state":"","stateShort":"","country":"Spain","description":"Jerez Airport serves the city of Jerez, famous for the fortified wine, sherry. Its airport code likely comes from a combination of an alternate spelling of Jerez, *X*e*r*es, and the English spelling, Sherr*y*.","imageCredit":"Pedro de Matos","imageCreditLink":"https://www.flickr.com/photos/lograi/"},{"id":"yaz","code":"yaz","name":"Tofino/Long Beach Airport","city":"Tofino","city2":"Long Beach","state":"British Columbia","stateShort":"BC","country":"Canada","description":"With a few exceptions, codes starting with ‘*Y*’ designate Canadian airports. Built to protect the coast during World War II, Tofino Airport can be the start or end of the country. Its code, then, is made of the first and last letters of the alphabet, ‘*AZ*’.","imageCredit":"adina*raul","imageCreditLink":"https://www.flickr.com/photos/adina-ana/"},{"id":"ydt","code":"ydt","name":"Boundary Bay Airport","city":"Vancouver","city2":"Delta","state":"British Columbia","stateShort":"BC","country":"Canada","description":"With a few exceptions, codes starting with ‘*Y*’ designate Canadian airports. Opened in 1983, Boundary Bay Airport serves the Vancouver area and is located in the town of *D*el*t*a.","imageCredit":"Gord McKenna","imageCreditLink":"https://www.flickr.com/photos/gord99/"},{"id":"yeg","code":"yeg","name":"Edmonton International Airport","city":"Edmonton","state":"Alberta","stateShort":"AB","country":"Canada","description":"With a few exceptions, airport codes starting with ‘*Y*’ designate Canadian airports. While the ‘G’ is a mystery and likely a filler letter, the airport joked its code stands for *E*dmonton, the *G*reatest Airport.","imageCredit":"Mack Male","imageCreditLink":"https://www.flickr.com/photos/mastermaq/"},{"id":"ygo","code":"ygo","name":"Gods Lake Narrows Airport","city":"Gods Lake Narrows","state":"Manitoba","stateShort":"MB","country":"Canada","description":"Airport codes starting with ‘*Y*’ designate Canadian airports. This Manitoba airport gets its other two letters from its home in the city of *Go*ds Lake Narrows.","imageCredit":"Lee Prouten","imageCreditLink":"https://www.flickr.com/photos/whyswomen/"},{"id":"yhz","code":"yhz","name":"Halifax Stanfield International Airport","city":"Halifax","city2":"Enfield","state":"Nova Scotia","stateShort":"NS","country":"Canada","description":"With a few exceptions, airport codes starting with ‘*Y*’ designate Canadian airports. Named after former Premier Robert Stanfield, Halifax International’s code is completed by *H*alifax and a helpful filler letter ‘*Z*’.","imageCredit":"Chris Campbell","imageCreditLink":"https://www.flickr.com/photos/cgc/"},{"id":"yip","code":"yip","name":"Willow Run Airport","city":"Ypsilanti","state":"Michigan","stateShort":"MI","country":"USA","description":"Until 1958, Willow Run was Detroit’s primary airport. Its three-letter code represents the nearby town of *Y*psilanti and its nickname’s pronunciation of “*Ip*-see.”","imageCredit":"ellenm1","imageCreditLink":"https://www.flickr.com/photos/ellenm1/"},{"id":"ylt","code":"ylt","name":"Alert Airport","city":"Alert","state":"Nunavut","stateShort":"NU","country":"Canada","description":"With a few exceptions, airport codes starting with ‘*Y*’ designate Canadian airports. The northernmost airport in the world gets its other two code letters from its home in the city of A*l*er*t*.","imageCredit":"Jason Belliveau","imageCreditLink":"https://www.flickr.com/photos/jasonbelliveau/"},{"id":"ylw","code":"ylw","name":"Kelowna International Airport","city":"Kelowna","state":"British Columbia","stateShort":"BC","country":"Canada","description":"With a few exceptions, airport codes starting with ‘*Y*’ designate Canadian airports. The ‘LW’ comes from the city’s name: Ke*l*o*w*na. The phrase ‘*Y*our *L*ink to the *W*orld’ (a backronym) has been used in the YLW branding to make the code more memorable.","imageCredit":"Adam Jones","imageCreditLink":"https://www.flickr.com/photos/adam_jones/"},{"id":"ymm","code":"ymm","name":"Fort McMurray International Airport","city":"Fort McMurray","state":"Alberta","stateShort":"AB","country":"Canada","description":"With a few exceptions, airport codes starting with ‘*Y*’ designate Canadian airports. The other letters for YMM come from its home city of Fort *M*c*M*urray.","imageCredit":"Gord McKenna","imageCreditLink":"https://www.flickr.com/photos/gord99/"},{"id":"ymx","code":"ymx","name":"Aéroport international Montréal–Mirabel","nameEnglish":"Montréal–Mirabel International Airport","city":"Montreal","city2":"Mirabel","state":"Quebec","stateShort":"QC","country":"Canada","description":"With a few exceptions, airport codes starting with ‘Y’ designate Canadian airports. Mirabel Airport is primarily a cargo airport near *M*ontreal. The ‘*X*’ in its code is a filler letter.","imageCredit":"Doug","imageCreditLink":"https://www.flickr.com/photos/caribb/"},{"id":"yng","code":"yng","name":"Youngstown–Warren Regional Airport","city":"Youngstown","city2":"Warren","state":"Ohio","stateShort":"OH","country":"USA","description":"Originally opened in 1940, Youngstown–Warren Regional is home to Youngstown–Warren Air Reserve Station. It serves the nearby cities of *Y*ou*ng*stown and Warren, Ohio.","imageCredit":"Charles Tilford","imageCreditLink":"tps://www.flickr.com/photos/charlestilford/"},{"id":"yon","code":"yon","name":"Yongphulla Airport","city":"Trashigang","country":"Bhutan","description":"Reopened in 2013 after resurfacing its runway, Yongphulla Airport serves the city of Trashigang. Its airport code comes from its name and the nearby village of *Yon*gphulla.","imageCredit":"kartografia","imageCreditLink":"https://www.flickr.com/photos/kartografia/"},{"id":"yow","code":"yow","name":"Ottawa Macdonald–Cartier International Airport","city":"Ottawa","state":"Ontario","stateShort":"ON","country":"Canada","description":"With a few exceptions, airport codes starting with ‘*Y*’ designate Canadian airports. Named after two Fathers of Confederation, Macdonald-Cartier International gets its other two letters from its home in *O*tta*w*a.","imageCredit":"Doug Zwick","imageCreditLink":"https://www.flickr.com/photos/dczwick/"},{"id":"yqb","code":"yqb","name":"Aéoport international Jean-Lesage de Québec","nameEnglish":"Québec City Jean Lesage International Airport","city":"Québec City","state":"Quebec","stateShort":"QC","country":"Canada","description":"With a few exceptions, airport codes starting with ‘*Y*’ designate Canadian airports.  The next two letters come from its home in *Q*ué*b*ec.","imageCredit":"Eric Bégin","imageCreditLink":"https://www.flickr.com/photos/ericbegin/"},{"id":"yqt","code":"yqt","name":"Thunder Bay International Airport","city":"Thunder Bay","state":"Ontario","stateShort":"ON","country":"Canada","description":"With a few exceptions, airport codes starting with ‘*Y*’ designate Canadian airports. The ‘*Q*’ is a filler letter and the ‘T’ comes from its home in the city of *T*hunder Bay.","imageCredit":"P199","imageCreditLink":"http://en.wikipedia.org/wiki/Thunder_Bay_International_Airport#/media/File:Thunder_Bay_Airport_1.JPG"},{"id":"yqx","code":"yqx","name":"Gander International Airport","city":"Gander","state":"Newfoundland and Labrador","stateShort":"NL","country":"Canada","description":"With a few exceptions, airport codes starting with ‘*Y*’ designate Canadian airports. Formerly named Newfoundland Airport, Gander International has one of the mysterious codes in which the other two letters were randomly assigned.","imageCredit":"Fuzzy Gerdes","imageCreditLink":"https://www.flickr.com/photos/fuzzy/"},{"id":"ytz","code":"ytz","name":"Billy Bishop Toronto City Airport","city":"Toronto","city2":"Toronto Division","state":"Ontario","stateShort":"ON","country":"Canada","description":"With a few exceptions, airport codes starting with ‘*Y*’ designate Canadian airports. The ‘*TZ*’ isn’t as clear, but it’s been said it represents the radio call of the airport’s weather station.","imageCredit":"Fanagt","imageCreditLink":"https://www.flickr.com/photos/fanagt/"},{"id":"yul","code":"yul","name":"Aéroport international Pierre-Elliott-Trudeau de Montréal","nameEnglish":"Montréal–Pierre Elliott Trudeau International Airport","city":"Montreal","city2":"Dorval","state":"Quebec","stateShort":"QC","country":"Canada","description":"With a few exceptions, airport codes starting with ‘*Y*’ designate Canadian airports. The ‘*UL*’ isn't as clear, but may be due to a nearby radio beacon which has continuously broadcast those letters since before the airport’s establishment in 1941.","imageCredit":"Hussein Abdallah","imageCreditLink":"https://www.flickr.com/photos/husseinabdallah/"},{"id":"yvr","code":"yvr","name":"Vancouver International Airport","city":"Vancouver","city2":"Richmond","state":"British Columbia","stateShort":"BC","country":"Canada","description":"With a few exceptions, airport codes starting with ‘*Y*’ designate Canadian airports. Vancouver International is actually located in the city of Richmond, but gets its other two letters from the major port city it serves, *V*ancouve*r*.","imageCredit":"Rick Schwartz","imageCreditLink":"https://www.flickr.com/photos/justenoughfocus/"},{"id":"ywg","code":"ywg","name":"James Armstrong Richardson International Airport","city":"Winnipeg","state":"Manitoba","stateShort":"MB","country":"Canada","description":"With a few exceptions, airport codes starting with ‘*Y*’ designate Canadian airports. James Armstrong Richardson International honors the Canadian aviator, but its airport code honors its home in *W*innipe*g*.","imageCredit":"AJ Batac","imageCreditLink":"https://www.flickr.com/photos/ajbatac/"},{"id":"yxu","code":"yxu","name":"London International Airport","city":"London","state":"Ontario","stateShort":"ON","country":"Canada","description":"With a few exceptions, airport codes starting with ‘*Y*’ designate Canadian airports. London International has one of the mysterious codes in which the other two letters were randomly assigned.","imageCredit":"Paranomia","imageCreditLink":"http://en.wikipedia.org/wiki/London_International_Airport#/media/File:Canadair_T-33_YXU.jpg"},{"id":"yxx","code":"yxx","name":"Abbotsford International Airport","city":"Abbotsford","state":"British Columbia","stateShort":"BC","country":"Canada","description":"With a few exceptions, airport codes starting with ‘*Y*’ designate Canadian airports. Abbotsford International in British Columbia has one of the mysterious codes in which the other two letters were randomly assigned.","imageCredit":"B.C. Ministry of Transportation","imageCreditLink":"https://www.flickr.com/photos/tranbc/"},{"id":"yxy","code":"yxy","name":"Erik Nielsen Whitehorse International Airport","city":"Whitehorse","state":"Yukon","stateShort":"YT","country":"Canada","description":"With a few exceptions, airport codes starting with ‘*Y*’ designate Canadian airports. The ‘*XY*’ isn’t as clear. The ‘*Y*’ likely stands for Yukon, and it’s said the ‘*X*’ is a filler letter.","imageCredit":"Canadian2006","imageCreditLink":"https://commons.wikimedia.org/wiki/File:Whitehorse_Airport_Terminal_2012.JPG"},{"id":"yyc","code":"yyc","name":"Calgary International Airport","city":"Calgary","state":"Alberta","stateShort":"AB","country":"Canada","description":"With a few exceptions, airport codes starting with ‘*Y*’ designate Canadian airports. The second ‘*Y*’ is a filler letter and the ‘C’ comes from its home in the city of *C*algary.","imageCredit":"Jordon Cooper","imageCreditLink":"https://www.flickr.com/photos/jordoncooper/"},{"id":"yyd","code":"yyd","name":"Smithers Regional Airport","city":"Smithers","state":"British Columbia","stateShort":"BC","country":"Canada","description":"With a few exceptions, airport codes starting with ‘*Y*’ designate Canadian airports. Smithers Regional in British Columbia has one of the mysterious codes in which the other two letters were randomly assigned.","imageCredit":"Asagan","imageCreditLink":"http://en.wikipedia.org/wiki/Smithers_Airport#/media/File:Cyyd22.jpg"},{"id":"yyj","code":"yyj","name":"Victoria International Airport","city":"Victoria","state":"British Columbia","stateShort":"BC","country":"Canada","description":"With a few exceptions, airport codes starting with ‘*Y*’ designate Canadian airports. Formerly called Patricia Bay Airport, Victoria International has one of the mysterious codes in which the other two letters were randomly assigned.","imageCredit":"Andy Nystrom","imageCreditLink":"https://www.flickr.com/photos/24917258@N05/"},{"id":"yyt","code":"yyt","name":"St. John’s International Airport","city":"St. John’s","state":"Newfoundland and Labrador","stateShort":"NL","country":"Canada","description":"With a few exceptions, airport codes starting with ‘*Y*’ designate Canadian airports. The second ‘*Y*’ is a filler letter and the ‘T’ comes from its former name, *T*orbay Airport. This helps differentiate it from the other Saint John Airport (YSJ).","imageCredit":"Patrick Handrigan","imageCreditLink":"http://en.wikipedia.org/wiki/St._John%27s_International_Airport#/media/File:St._John%27s_Airport_Terminal.JPG"},{"id":"yyz","code":"yyz","name":"Pearson International Airport","city":"Toronto","city2":"Malton","city3":"Mississauga","state":"Ontario","stateShort":"ON","country":"Canada","description":"With a few exceptions, airport codes starting with ‘*Y*’ designate Canadian airports. The ‘*YZ*’ isn't as clear, but is said to be the old railway station code for Malton, an area west of Toronto where the airport is located.","imageCredit":"Coralie Mercier","imageCreditLink":"https://www.flickr.com/photos/koalie/"},{"id":"yzf","code":"yzf","name":"Yellowknife Airport","city":"Yellowknife","state":"Northwest Territories","stateShort":"NT","country":"Canada","description":"With a few exceptions, airport codes starting with ‘*Y*’ designate Canadian airports. Yellowknife Airport has one of the mysterious codes in which the other two letters were randomly assigned.","imageCredit":"Hideyuki KAMON","imageCreditLink":"https://www.flickr.com/photos/hyougushi/"},{"id":"zag","code":"zag","name":"Međunarodna zračna luka Zagreb","nameEnglish":"Zagreb International Airport","city":"Zagreb","city2":"Pleso","state":"","stateShort":"","country":"Croatia","description":"Located in the suburb of Pleso and often called Pleso Airport, Croatia’s main international airport gets its code from the capital city of *Zag*reb.","imageCredit":"Andrew Nash","imageCreditLink":"https://www.flickr.com/photos/andynash/"},{"id":"zih","code":"zih","name":"Aeropuerto Internacional de Ixtapa-Zihuatanejo","nameEnglish":"Ixtapa-Zihuatanejo International Airport","city":"Zihuatanejo","city2":"Ixtapa","state":"Guerrero","stateShort":"GR","country":"Mexico","description":"Built in 1998, Ixtapa-Zihuatanejo International is a gateway for the many tourists of Mexico’s beaches and serves the Ixtapa-*Zih*uatanejo area.","imageCredit":"Vmzp85","imageCreditLink":"http://en.wikipedia.org/wiki/Ixtapa-Zihuatanejo_International_Airport#/media/File:ZIH_02.JPG"},{"id":"zqn","code":"zqn","name":"Queenstown Airport","city":"Queenstown","city2":"Frankton","country":"New Zealand","description":"Opened in 1961, Queenstown Airport is located in the suburb of Frankton. Its airport code comes from New *Z*ealand, *Q*ueenstow*n*.","imageCredit":"kielix","imageCreditLink":"https://www.flickr.com/photos/worldinside/"},{"id":"zrh","code":"zrh","name":"Flughafen Zürich","nameEnglish":"Zürich Airport","city":"Zürich","city2":"Zurich","state":"","stateShort":"","country":"Switzerland","description":"Not surprisingly, Switzerland’s busiest airport is located in its largest city of *Z*ü*r*ic*h*.","imageCredit":"Reto Fetz","imageCreditLink":"https://www.flickr.com/photos/swisscan/"}]};
},{}],"/Users/lfisher/git/airport-codes/node_modules/backbone/backbone.js":[function(require,module,exports){
//     Backbone.js 1.1.2

//     (c) 2010-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Backbone may be freely distributed under the MIT license.
//     For all details and documentation:
//     http://backbonejs.org

(function(root, factory) {

  // Set up Backbone appropriately for the environment. Start with AMD.
  if (typeof define === 'function' && define.amd) {
    define(['underscore', 'jquery', 'exports'], function(_, $, exports) {
      // Export global even in AMD case in case this script is loaded with
      // others that may still expect a global Backbone.
      root.Backbone = factory(root, exports, _, $);
    });

  // Next for Node.js or CommonJS. jQuery may not be needed as a module.
  } else if (typeof exports !== 'undefined') {
    var _ = require('underscore');
    factory(root, exports, _);

  // Finally, as a browser global.
  } else {
    root.Backbone = factory(root, {}, root._, (root.jQuery || root.Zepto || root.ender || root.$));
  }

}(this, function(root, Backbone, _, $) {

  // Initial Setup
  // -------------

  // Save the previous value of the `Backbone` variable, so that it can be
  // restored later on, if `noConflict` is used.
  var previousBackbone = root.Backbone;

  // Create local references to array methods we'll want to use later.
  var array = [];
  var push = array.push;
  var slice = array.slice;
  var splice = array.splice;

  // Current version of the library. Keep in sync with `package.json`.
  Backbone.VERSION = '1.1.2';

  // For Backbone's purposes, jQuery, Zepto, Ender, or My Library (kidding) owns
  // the `$` variable.
  Backbone.$ = $;

  // Runs Backbone.js in *noConflict* mode, returning the `Backbone` variable
  // to its previous owner. Returns a reference to this Backbone object.
  Backbone.noConflict = function() {
    root.Backbone = previousBackbone;
    return this;
  };

  // Turn on `emulateHTTP` to support legacy HTTP servers. Setting this option
  // will fake `"PATCH"`, `"PUT"` and `"DELETE"` requests via the `_method` parameter and
  // set a `X-Http-Method-Override` header.
  Backbone.emulateHTTP = false;

  // Turn on `emulateJSON` to support legacy servers that can't deal with direct
  // `application/json` requests ... will encode the body as
  // `application/x-www-form-urlencoded` instead and will send the model in a
  // form param named `model`.
  Backbone.emulateJSON = false;

  // Backbone.Events
  // ---------------

  // A module that can be mixed in to *any object* in order to provide it with
  // custom events. You may bind with `on` or remove with `off` callback
  // functions to an event; `trigger`-ing an event fires all callbacks in
  // succession.
  //
  //     var object = {};
  //     _.extend(object, Backbone.Events);
  //     object.on('expand', function(){ alert('expanded'); });
  //     object.trigger('expand');
  //
  var Events = Backbone.Events = {

    // Bind an event to a `callback` function. Passing `"all"` will bind
    // the callback to all events fired.
    on: function(name, callback, context) {
      if (!eventsApi(this, 'on', name, [callback, context]) || !callback) return this;
      this._events || (this._events = {});
      var events = this._events[name] || (this._events[name] = []);
      events.push({callback: callback, context: context, ctx: context || this});
      return this;
    },

    // Bind an event to only be triggered a single time. After the first time
    // the callback is invoked, it will be removed.
    once: function(name, callback, context) {
      if (!eventsApi(this, 'once', name, [callback, context]) || !callback) return this;
      var self = this;
      var once = _.once(function() {
        self.off(name, once);
        callback.apply(this, arguments);
      });
      once._callback = callback;
      return this.on(name, once, context);
    },

    // Remove one or many callbacks. If `context` is null, removes all
    // callbacks with that function. If `callback` is null, removes all
    // callbacks for the event. If `name` is null, removes all bound
    // callbacks for all events.
    off: function(name, callback, context) {
      var retain, ev, events, names, i, l, j, k;
      if (!this._events || !eventsApi(this, 'off', name, [callback, context])) return this;
      if (!name && !callback && !context) {
        this._events = void 0;
        return this;
      }
      names = name ? [name] : _.keys(this._events);
      for (i = 0, l = names.length; i < l; i++) {
        name = names[i];
        if (events = this._events[name]) {
          this._events[name] = retain = [];
          if (callback || context) {
            for (j = 0, k = events.length; j < k; j++) {
              ev = events[j];
              if ((callback && callback !== ev.callback && callback !== ev.callback._callback) ||
                  (context && context !== ev.context)) {
                retain.push(ev);
              }
            }
          }
          if (!retain.length) delete this._events[name];
        }
      }

      return this;
    },

    // Trigger one or many events, firing all bound callbacks. Callbacks are
    // passed the same arguments as `trigger` is, apart from the event name
    // (unless you're listening on `"all"`, which will cause your callback to
    // receive the true name of the event as the first argument).
    trigger: function(name) {
      if (!this._events) return this;
      var args = slice.call(arguments, 1);
      if (!eventsApi(this, 'trigger', name, args)) return this;
      var events = this._events[name];
      var allEvents = this._events.all;
      if (events) triggerEvents(events, args);
      if (allEvents) triggerEvents(allEvents, arguments);
      return this;
    },

    // Tell this object to stop listening to either specific events ... or
    // to every object it's currently listening to.
    stopListening: function(obj, name, callback) {
      var listeningTo = this._listeningTo;
      if (!listeningTo) return this;
      var remove = !name && !callback;
      if (!callback && typeof name === 'object') callback = this;
      if (obj) (listeningTo = {})[obj._listenId] = obj;
      for (var id in listeningTo) {
        obj = listeningTo[id];
        obj.off(name, callback, this);
        if (remove || _.isEmpty(obj._events)) delete this._listeningTo[id];
      }
      return this;
    }

  };

  // Regular expression used to split event strings.
  var eventSplitter = /\s+/;

  // Implement fancy features of the Events API such as multiple event
  // names `"change blur"` and jQuery-style event maps `{change: action}`
  // in terms of the existing API.
  var eventsApi = function(obj, action, name, rest) {
    if (!name) return true;

    // Handle event maps.
    if (typeof name === 'object') {
      for (var key in name) {
        obj[action].apply(obj, [key, name[key]].concat(rest));
      }
      return false;
    }

    // Handle space separated event names.
    if (eventSplitter.test(name)) {
      var names = name.split(eventSplitter);
      for (var i = 0, l = names.length; i < l; i++) {
        obj[action].apply(obj, [names[i]].concat(rest));
      }
      return false;
    }

    return true;
  };

  // A difficult-to-believe, but optimized internal dispatch function for
  // triggering events. Tries to keep the usual cases speedy (most internal
  // Backbone events have 3 arguments).
  var triggerEvents = function(events, args) {
    var ev, i = -1, l = events.length, a1 = args[0], a2 = args[1], a3 = args[2];
    switch (args.length) {
      case 0: while (++i < l) (ev = events[i]).callback.call(ev.ctx); return;
      case 1: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1); return;
      case 2: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2); return;
      case 3: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2, a3); return;
      default: while (++i < l) (ev = events[i]).callback.apply(ev.ctx, args); return;
    }
  };

  var listenMethods = {listenTo: 'on', listenToOnce: 'once'};

  // Inversion-of-control versions of `on` and `once`. Tell *this* object to
  // listen to an event in another object ... keeping track of what it's
  // listening to.
  _.each(listenMethods, function(implementation, method) {
    Events[method] = function(obj, name, callback) {
      var listeningTo = this._listeningTo || (this._listeningTo = {});
      var id = obj._listenId || (obj._listenId = _.uniqueId('l'));
      listeningTo[id] = obj;
      if (!callback && typeof name === 'object') callback = this;
      obj[implementation](name, callback, this);
      return this;
    };
  });

  // Aliases for backwards compatibility.
  Events.bind   = Events.on;
  Events.unbind = Events.off;

  // Allow the `Backbone` object to serve as a global event bus, for folks who
  // want global "pubsub" in a convenient place.
  _.extend(Backbone, Events);

  // Backbone.Model
  // --------------

  // Backbone **Models** are the basic data object in the framework --
  // frequently representing a row in a table in a database on your server.
  // A discrete chunk of data and a bunch of useful, related methods for
  // performing computations and transformations on that data.

  // Create a new model with the specified attributes. A client id (`cid`)
  // is automatically generated and assigned for you.
  var Model = Backbone.Model = function(attributes, options) {
    var attrs = attributes || {};
    options || (options = {});
    this.cid = _.uniqueId('c');
    this.attributes = {};
    if (options.collection) this.collection = options.collection;
    if (options.parse) attrs = this.parse(attrs, options) || {};
    attrs = _.defaults({}, attrs, _.result(this, 'defaults'));
    this.set(attrs, options);
    this.changed = {};
    this.initialize.apply(this, arguments);
  };

  // Attach all inheritable methods to the Model prototype.
  _.extend(Model.prototype, Events, {

    // A hash of attributes whose current and previous value differ.
    changed: null,

    // The value returned during the last failed validation.
    validationError: null,

    // The default name for the JSON `id` attribute is `"id"`. MongoDB and
    // CouchDB users may want to set this to `"_id"`.
    idAttribute: 'id',

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // Return a copy of the model's `attributes` object.
    toJSON: function(options) {
      return _.clone(this.attributes);
    },

    // Proxy `Backbone.sync` by default -- but override this if you need
    // custom syncing semantics for *this* particular model.
    sync: function() {
      return Backbone.sync.apply(this, arguments);
    },

    // Get the value of an attribute.
    get: function(attr) {
      return this.attributes[attr];
    },

    // Get the HTML-escaped value of an attribute.
    escape: function(attr) {
      return _.escape(this.get(attr));
    },

    // Returns `true` if the attribute contains a value that is not null
    // or undefined.
    has: function(attr) {
      return this.get(attr) != null;
    },

    // Set a hash of model attributes on the object, firing `"change"`. This is
    // the core primitive operation of a model, updating the data and notifying
    // anyone who needs to know about the change in state. The heart of the beast.
    set: function(key, val, options) {
      var attr, attrs, unset, changes, silent, changing, prev, current;
      if (key == null) return this;

      // Handle both `"key", value` and `{key: value}` -style arguments.
      if (typeof key === 'object') {
        attrs = key;
        options = val;
      } else {
        (attrs = {})[key] = val;
      }

      options || (options = {});

      // Run validation.
      if (!this._validate(attrs, options)) return false;

      // Extract attributes and options.
      unset           = options.unset;
      silent          = options.silent;
      changes         = [];
      changing        = this._changing;
      this._changing  = true;

      if (!changing) {
        this._previousAttributes = _.clone(this.attributes);
        this.changed = {};
      }
      current = this.attributes, prev = this._previousAttributes;

      // Check for changes of `id`.
      if (this.idAttribute in attrs) this.id = attrs[this.idAttribute];

      // For each `set` attribute, update or delete the current value.
      for (attr in attrs) {
        val = attrs[attr];
        if (!_.isEqual(current[attr], val)) changes.push(attr);
        if (!_.isEqual(prev[attr], val)) {
          this.changed[attr] = val;
        } else {
          delete this.changed[attr];
        }
        unset ? delete current[attr] : current[attr] = val;
      }

      // Trigger all relevant attribute changes.
      if (!silent) {
        if (changes.length) this._pending = options;
        for (var i = 0, l = changes.length; i < l; i++) {
          this.trigger('change:' + changes[i], this, current[changes[i]], options);
        }
      }

      // You might be wondering why there's a `while` loop here. Changes can
      // be recursively nested within `"change"` events.
      if (changing) return this;
      if (!silent) {
        while (this._pending) {
          options = this._pending;
          this._pending = false;
          this.trigger('change', this, options);
        }
      }
      this._pending = false;
      this._changing = false;
      return this;
    },

    // Remove an attribute from the model, firing `"change"`. `unset` is a noop
    // if the attribute doesn't exist.
    unset: function(attr, options) {
      return this.set(attr, void 0, _.extend({}, options, {unset: true}));
    },

    // Clear all attributes on the model, firing `"change"`.
    clear: function(options) {
      var attrs = {};
      for (var key in this.attributes) attrs[key] = void 0;
      return this.set(attrs, _.extend({}, options, {unset: true}));
    },

    // Determine if the model has changed since the last `"change"` event.
    // If you specify an attribute name, determine if that attribute has changed.
    hasChanged: function(attr) {
      if (attr == null) return !_.isEmpty(this.changed);
      return _.has(this.changed, attr);
    },

    // Return an object containing all the attributes that have changed, or
    // false if there are no changed attributes. Useful for determining what
    // parts of a view need to be updated and/or what attributes need to be
    // persisted to the server. Unset attributes will be set to undefined.
    // You can also pass an attributes object to diff against the model,
    // determining if there *would be* a change.
    changedAttributes: function(diff) {
      if (!diff) return this.hasChanged() ? _.clone(this.changed) : false;
      var val, changed = false;
      var old = this._changing ? this._previousAttributes : this.attributes;
      for (var attr in diff) {
        if (_.isEqual(old[attr], (val = diff[attr]))) continue;
        (changed || (changed = {}))[attr] = val;
      }
      return changed;
    },

    // Get the previous value of an attribute, recorded at the time the last
    // `"change"` event was fired.
    previous: function(attr) {
      if (attr == null || !this._previousAttributes) return null;
      return this._previousAttributes[attr];
    },

    // Get all of the attributes of the model at the time of the previous
    // `"change"` event.
    previousAttributes: function() {
      return _.clone(this._previousAttributes);
    },

    // Fetch the model from the server. If the server's representation of the
    // model differs from its current attributes, they will be overridden,
    // triggering a `"change"` event.
    fetch: function(options) {
      options = options ? _.clone(options) : {};
      if (options.parse === void 0) options.parse = true;
      var model = this;
      var success = options.success;
      options.success = function(resp) {
        if (!model.set(model.parse(resp, options), options)) return false;
        if (success) success(model, resp, options);
        model.trigger('sync', model, resp, options);
      };
      wrapError(this, options);
      return this.sync('read', this, options);
    },

    // Set a hash of model attributes, and sync the model to the server.
    // If the server returns an attributes hash that differs, the model's
    // state will be `set` again.
    save: function(key, val, options) {
      var attrs, method, xhr, attributes = this.attributes;

      // Handle both `"key", value` and `{key: value}` -style arguments.
      if (key == null || typeof key === 'object') {
        attrs = key;
        options = val;
      } else {
        (attrs = {})[key] = val;
      }

      options = _.extend({validate: true}, options);

      // If we're not waiting and attributes exist, save acts as
      // `set(attr).save(null, opts)` with validation. Otherwise, check if
      // the model will be valid when the attributes, if any, are set.
      if (attrs && !options.wait) {
        if (!this.set(attrs, options)) return false;
      } else {
        if (!this._validate(attrs, options)) return false;
      }

      // Set temporary attributes if `{wait: true}`.
      if (attrs && options.wait) {
        this.attributes = _.extend({}, attributes, attrs);
      }

      // After a successful server-side save, the client is (optionally)
      // updated with the server-side state.
      if (options.parse === void 0) options.parse = true;
      var model = this;
      var success = options.success;
      options.success = function(resp) {
        // Ensure attributes are restored during synchronous saves.
        model.attributes = attributes;
        var serverAttrs = model.parse(resp, options);
        if (options.wait) serverAttrs = _.extend(attrs || {}, serverAttrs);
        if (_.isObject(serverAttrs) && !model.set(serverAttrs, options)) {
          return false;
        }
        if (success) success(model, resp, options);
        model.trigger('sync', model, resp, options);
      };
      wrapError(this, options);

      method = this.isNew() ? 'create' : (options.patch ? 'patch' : 'update');
      if (method === 'patch') options.attrs = attrs;
      xhr = this.sync(method, this, options);

      // Restore attributes.
      if (attrs && options.wait) this.attributes = attributes;

      return xhr;
    },

    // Destroy this model on the server if it was already persisted.
    // Optimistically removes the model from its collection, if it has one.
    // If `wait: true` is passed, waits for the server to respond before removal.
    destroy: function(options) {
      options = options ? _.clone(options) : {};
      var model = this;
      var success = options.success;

      var destroy = function() {
        model.trigger('destroy', model, model.collection, options);
      };

      options.success = function(resp) {
        if (options.wait || model.isNew()) destroy();
        if (success) success(model, resp, options);
        if (!model.isNew()) model.trigger('sync', model, resp, options);
      };

      if (this.isNew()) {
        options.success();
        return false;
      }
      wrapError(this, options);

      var xhr = this.sync('delete', this, options);
      if (!options.wait) destroy();
      return xhr;
    },

    // Default URL for the model's representation on the server -- if you're
    // using Backbone's restful methods, override this to change the endpoint
    // that will be called.
    url: function() {
      var base =
        _.result(this, 'urlRoot') ||
        _.result(this.collection, 'url') ||
        urlError();
      if (this.isNew()) return base;
      return base.replace(/([^\/])$/, '$1/') + encodeURIComponent(this.id);
    },

    // **parse** converts a response into the hash of attributes to be `set` on
    // the model. The default implementation is just to pass the response along.
    parse: function(resp, options) {
      return resp;
    },

    // Create a new model with identical attributes to this one.
    clone: function() {
      return new this.constructor(this.attributes);
    },

    // A model is new if it has never been saved to the server, and lacks an id.
    isNew: function() {
      return !this.has(this.idAttribute);
    },

    // Check if the model is currently in a valid state.
    isValid: function(options) {
      return this._validate({}, _.extend(options || {}, { validate: true }));
    },

    // Run validation against the next complete set of model attributes,
    // returning `true` if all is well. Otherwise, fire an `"invalid"` event.
    _validate: function(attrs, options) {
      if (!options.validate || !this.validate) return true;
      attrs = _.extend({}, this.attributes, attrs);
      var error = this.validationError = this.validate(attrs, options) || null;
      if (!error) return true;
      this.trigger('invalid', this, error, _.extend(options, {validationError: error}));
      return false;
    }

  });

  // Underscore methods that we want to implement on the Model.
  var modelMethods = ['keys', 'values', 'pairs', 'invert', 'pick', 'omit'];

  // Mix in each Underscore method as a proxy to `Model#attributes`.
  _.each(modelMethods, function(method) {
    Model.prototype[method] = function() {
      var args = slice.call(arguments);
      args.unshift(this.attributes);
      return _[method].apply(_, args);
    };
  });

  // Backbone.Collection
  // -------------------

  // If models tend to represent a single row of data, a Backbone Collection is
  // more analagous to a table full of data ... or a small slice or page of that
  // table, or a collection of rows that belong together for a particular reason
  // -- all of the messages in this particular folder, all of the documents
  // belonging to this particular author, and so on. Collections maintain
  // indexes of their models, both in order, and for lookup by `id`.

  // Create a new **Collection**, perhaps to contain a specific type of `model`.
  // If a `comparator` is specified, the Collection will maintain
  // its models in sort order, as they're added and removed.
  var Collection = Backbone.Collection = function(models, options) {
    options || (options = {});
    if (options.model) this.model = options.model;
    if (options.comparator !== void 0) this.comparator = options.comparator;
    this._reset();
    this.initialize.apply(this, arguments);
    if (models) this.reset(models, _.extend({silent: true}, options));
  };

  // Default options for `Collection#set`.
  var setOptions = {add: true, remove: true, merge: true};
  var addOptions = {add: true, remove: false};

  // Define the Collection's inheritable methods.
  _.extend(Collection.prototype, Events, {

    // The default model for a collection is just a **Backbone.Model**.
    // This should be overridden in most cases.
    model: Model,

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // The JSON representation of a Collection is an array of the
    // models' attributes.
    toJSON: function(options) {
      return this.map(function(model){ return model.toJSON(options); });
    },

    // Proxy `Backbone.sync` by default.
    sync: function() {
      return Backbone.sync.apply(this, arguments);
    },

    // Add a model, or list of models to the set.
    add: function(models, options) {
      return this.set(models, _.extend({merge: false}, options, addOptions));
    },

    // Remove a model, or a list of models from the set.
    remove: function(models, options) {
      var singular = !_.isArray(models);
      models = singular ? [models] : _.clone(models);
      options || (options = {});
      var i, l, index, model;
      for (i = 0, l = models.length; i < l; i++) {
        model = models[i] = this.get(models[i]);
        if (!model) continue;
        delete this._byId[model.id];
        delete this._byId[model.cid];
        index = this.indexOf(model);
        this.models.splice(index, 1);
        this.length--;
        if (!options.silent) {
          options.index = index;
          model.trigger('remove', model, this, options);
        }
        this._removeReference(model, options);
      }
      return singular ? models[0] : models;
    },

    // Update a collection by `set`-ing a new list of models, adding new ones,
    // removing models that are no longer present, and merging models that
    // already exist in the collection, as necessary. Similar to **Model#set**,
    // the core operation for updating the data contained by the collection.
    set: function(models, options) {
      options = _.defaults({}, options, setOptions);
      if (options.parse) models = this.parse(models, options);
      var singular = !_.isArray(models);
      models = singular ? (models ? [models] : []) : _.clone(models);
      var i, l, id, model, attrs, existing, sort;
      var at = options.at;
      var targetModel = this.model;
      var sortable = this.comparator && (at == null) && options.sort !== false;
      var sortAttr = _.isString(this.comparator) ? this.comparator : null;
      var toAdd = [], toRemove = [], modelMap = {};
      var add = options.add, merge = options.merge, remove = options.remove;
      var order = !sortable && add && remove ? [] : false;

      // Turn bare objects into model references, and prevent invalid models
      // from being added.
      for (i = 0, l = models.length; i < l; i++) {
        attrs = models[i] || {};
        if (attrs instanceof Model) {
          id = model = attrs;
        } else {
          id = attrs[targetModel.prototype.idAttribute || 'id'];
        }

        // If a duplicate is found, prevent it from being added and
        // optionally merge it into the existing model.
        if (existing = this.get(id)) {
          if (remove) modelMap[existing.cid] = true;
          if (merge) {
            attrs = attrs === model ? model.attributes : attrs;
            if (options.parse) attrs = existing.parse(attrs, options);
            existing.set(attrs, options);
            if (sortable && !sort && existing.hasChanged(sortAttr)) sort = true;
          }
          models[i] = existing;

        // If this is a new, valid model, push it to the `toAdd` list.
        } else if (add) {
          model = models[i] = this._prepareModel(attrs, options);
          if (!model) continue;
          toAdd.push(model);
          this._addReference(model, options);
        }

        // Do not add multiple models with the same `id`.
        model = existing || model;
        if (order && (model.isNew() || !modelMap[model.id])) order.push(model);
        modelMap[model.id] = true;
      }

      // Remove nonexistent models if appropriate.
      if (remove) {
        for (i = 0, l = this.length; i < l; ++i) {
          if (!modelMap[(model = this.models[i]).cid]) toRemove.push(model);
        }
        if (toRemove.length) this.remove(toRemove, options);
      }

      // See if sorting is needed, update `length` and splice in new models.
      if (toAdd.length || (order && order.length)) {
        if (sortable) sort = true;
        this.length += toAdd.length;
        if (at != null) {
          for (i = 0, l = toAdd.length; i < l; i++) {
            this.models.splice(at + i, 0, toAdd[i]);
          }
        } else {
          if (order) this.models.length = 0;
          var orderedModels = order || toAdd;
          for (i = 0, l = orderedModels.length; i < l; i++) {
            this.models.push(orderedModels[i]);
          }
        }
      }

      // Silently sort the collection if appropriate.
      if (sort) this.sort({silent: true});

      // Unless silenced, it's time to fire all appropriate add/sort events.
      if (!options.silent) {
        for (i = 0, l = toAdd.length; i < l; i++) {
          (model = toAdd[i]).trigger('add', model, this, options);
        }
        if (sort || (order && order.length)) this.trigger('sort', this, options);
      }

      // Return the added (or merged) model (or models).
      return singular ? models[0] : models;
    },

    // When you have more items than you want to add or remove individually,
    // you can reset the entire set with a new list of models, without firing
    // any granular `add` or `remove` events. Fires `reset` when finished.
    // Useful for bulk operations and optimizations.
    reset: function(models, options) {
      options || (options = {});
      for (var i = 0, l = this.models.length; i < l; i++) {
        this._removeReference(this.models[i], options);
      }
      options.previousModels = this.models;
      this._reset();
      models = this.add(models, _.extend({silent: true}, options));
      if (!options.silent) this.trigger('reset', this, options);
      return models;
    },

    // Add a model to the end of the collection.
    push: function(model, options) {
      return this.add(model, _.extend({at: this.length}, options));
    },

    // Remove a model from the end of the collection.
    pop: function(options) {
      var model = this.at(this.length - 1);
      this.remove(model, options);
      return model;
    },

    // Add a model to the beginning of the collection.
    unshift: function(model, options) {
      return this.add(model, _.extend({at: 0}, options));
    },

    // Remove a model from the beginning of the collection.
    shift: function(options) {
      var model = this.at(0);
      this.remove(model, options);
      return model;
    },

    // Slice out a sub-array of models from the collection.
    slice: function() {
      return slice.apply(this.models, arguments);
    },

    // Get a model from the set by id.
    get: function(obj) {
      if (obj == null) return void 0;
      return this._byId[obj] || this._byId[obj.id] || this._byId[obj.cid];
    },

    // Get the model at the given index.
    at: function(index) {
      return this.models[index];
    },

    // Return models with matching attributes. Useful for simple cases of
    // `filter`.
    where: function(attrs, first) {
      if (_.isEmpty(attrs)) return first ? void 0 : [];
      return this[first ? 'find' : 'filter'](function(model) {
        for (var key in attrs) {
          if (attrs[key] !== model.get(key)) return false;
        }
        return true;
      });
    },

    // Return the first model with matching attributes. Useful for simple cases
    // of `find`.
    findWhere: function(attrs) {
      return this.where(attrs, true);
    },

    // Force the collection to re-sort itself. You don't need to call this under
    // normal circumstances, as the set will maintain sort order as each item
    // is added.
    sort: function(options) {
      if (!this.comparator) throw new Error('Cannot sort a set without a comparator');
      options || (options = {});

      // Run sort based on type of `comparator`.
      if (_.isString(this.comparator) || this.comparator.length === 1) {
        this.models = this.sortBy(this.comparator, this);
      } else {
        this.models.sort(_.bind(this.comparator, this));
      }

      if (!options.silent) this.trigger('sort', this, options);
      return this;
    },

    // Pluck an attribute from each model in the collection.
    pluck: function(attr) {
      return _.invoke(this.models, 'get', attr);
    },

    // Fetch the default set of models for this collection, resetting the
    // collection when they arrive. If `reset: true` is passed, the response
    // data will be passed through the `reset` method instead of `set`.
    fetch: function(options) {
      options = options ? _.clone(options) : {};
      if (options.parse === void 0) options.parse = true;
      var success = options.success;
      var collection = this;
      options.success = function(resp) {
        var method = options.reset ? 'reset' : 'set';
        collection[method](resp, options);
        if (success) success(collection, resp, options);
        collection.trigger('sync', collection, resp, options);
      };
      wrapError(this, options);
      return this.sync('read', this, options);
    },

    // Create a new instance of a model in this collection. Add the model to the
    // collection immediately, unless `wait: true` is passed, in which case we
    // wait for the server to agree.
    create: function(model, options) {
      options = options ? _.clone(options) : {};
      if (!(model = this._prepareModel(model, options))) return false;
      if (!options.wait) this.add(model, options);
      var collection = this;
      var success = options.success;
      options.success = function(model, resp) {
        if (options.wait) collection.add(model, options);
        if (success) success(model, resp, options);
      };
      model.save(null, options);
      return model;
    },

    // **parse** converts a response into a list of models to be added to the
    // collection. The default implementation is just to pass it through.
    parse: function(resp, options) {
      return resp;
    },

    // Create a new collection with an identical list of models as this one.
    clone: function() {
      return new this.constructor(this.models);
    },

    // Private method to reset all internal state. Called when the collection
    // is first initialized or reset.
    _reset: function() {
      this.length = 0;
      this.models = [];
      this._byId  = {};
    },

    // Prepare a hash of attributes (or other model) to be added to this
    // collection.
    _prepareModel: function(attrs, options) {
      if (attrs instanceof Model) return attrs;
      options = options ? _.clone(options) : {};
      options.collection = this;
      var model = new this.model(attrs, options);
      if (!model.validationError) return model;
      this.trigger('invalid', this, model.validationError, options);
      return false;
    },

    // Internal method to create a model's ties to a collection.
    _addReference: function(model, options) {
      this._byId[model.cid] = model;
      if (model.id != null) this._byId[model.id] = model;
      if (!model.collection) model.collection = this;
      model.on('all', this._onModelEvent, this);
    },

    // Internal method to sever a model's ties to a collection.
    _removeReference: function(model, options) {
      if (this === model.collection) delete model.collection;
      model.off('all', this._onModelEvent, this);
    },

    // Internal method called every time a model in the set fires an event.
    // Sets need to update their indexes when models change ids. All other
    // events simply proxy through. "add" and "remove" events that originate
    // in other collections are ignored.
    _onModelEvent: function(event, model, collection, options) {
      if ((event === 'add' || event === 'remove') && collection !== this) return;
      if (event === 'destroy') this.remove(model, options);
      if (model && event === 'change:' + model.idAttribute) {
        delete this._byId[model.previous(model.idAttribute)];
        if (model.id != null) this._byId[model.id] = model;
      }
      this.trigger.apply(this, arguments);
    }

  });

  // Underscore methods that we want to implement on the Collection.
  // 90% of the core usefulness of Backbone Collections is actually implemented
  // right here:
  var methods = ['forEach', 'each', 'map', 'collect', 'reduce', 'foldl',
    'inject', 'reduceRight', 'foldr', 'find', 'detect', 'filter', 'select',
    'reject', 'every', 'all', 'some', 'any', 'include', 'contains', 'invoke',
    'max', 'min', 'toArray', 'size', 'first', 'head', 'take', 'initial', 'rest',
    'tail', 'drop', 'last', 'without', 'difference', 'indexOf', 'shuffle',
    'lastIndexOf', 'isEmpty', 'chain', 'sample'];

  // Mix in each Underscore method as a proxy to `Collection#models`.
  _.each(methods, function(method) {
    Collection.prototype[method] = function() {
      var args = slice.call(arguments);
      args.unshift(this.models);
      return _[method].apply(_, args);
    };
  });

  // Underscore methods that take a property name as an argument.
  var attributeMethods = ['groupBy', 'countBy', 'sortBy', 'indexBy'];

  // Use attributes instead of properties.
  _.each(attributeMethods, function(method) {
    Collection.prototype[method] = function(value, context) {
      var iterator = _.isFunction(value) ? value : function(model) {
        return model.get(value);
      };
      return _[method](this.models, iterator, context);
    };
  });

  // Backbone.View
  // -------------

  // Backbone Views are almost more convention than they are actual code. A View
  // is simply a JavaScript object that represents a logical chunk of UI in the
  // DOM. This might be a single item, an entire list, a sidebar or panel, or
  // even the surrounding frame which wraps your whole app. Defining a chunk of
  // UI as a **View** allows you to define your DOM events declaratively, without
  // having to worry about render order ... and makes it easy for the view to
  // react to specific changes in the state of your models.

  // Creating a Backbone.View creates its initial element outside of the DOM,
  // if an existing element is not provided...
  var View = Backbone.View = function(options) {
    this.cid = _.uniqueId('view');
    options || (options = {});
    _.extend(this, _.pick(options, viewOptions));
    this._ensureElement();
    this.initialize.apply(this, arguments);
    this.delegateEvents();
  };

  // Cached regex to split keys for `delegate`.
  var delegateEventSplitter = /^(\S+)\s*(.*)$/;

  // List of view options to be merged as properties.
  var viewOptions = ['model', 'collection', 'el', 'id', 'attributes', 'className', 'tagName', 'events'];

  // Set up all inheritable **Backbone.View** properties and methods.
  _.extend(View.prototype, Events, {

    // The default `tagName` of a View's element is `"div"`.
    tagName: 'div',

    // jQuery delegate for element lookup, scoped to DOM elements within the
    // current view. This should be preferred to global lookups where possible.
    $: function(selector) {
      return this.$el.find(selector);
    },

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // **render** is the core function that your view should override, in order
    // to populate its element (`this.el`), with the appropriate HTML. The
    // convention is for **render** to always return `this`.
    render: function() {
      return this;
    },

    // Remove this view by taking the element out of the DOM, and removing any
    // applicable Backbone.Events listeners.
    remove: function() {
      this.$el.remove();
      this.stopListening();
      return this;
    },

    // Change the view's element (`this.el` property), including event
    // re-delegation.
    setElement: function(element, delegate) {
      if (this.$el) this.undelegateEvents();
      this.$el = element instanceof Backbone.$ ? element : Backbone.$(element);
      this.el = this.$el[0];
      if (delegate !== false) this.delegateEvents();
      return this;
    },

    // Set callbacks, where `this.events` is a hash of
    //
    // *{"event selector": "callback"}*
    //
    //     {
    //       'mousedown .title':  'edit',
    //       'click .button':     'save',
    //       'click .open':       function(e) { ... }
    //     }
    //
    // pairs. Callbacks will be bound to the view, with `this` set properly.
    // Uses event delegation for efficiency.
    // Omitting the selector binds the event to `this.el`.
    // This only works for delegate-able events: not `focus`, `blur`, and
    // not `change`, `submit`, and `reset` in Internet Explorer.
    delegateEvents: function(events) {
      if (!(events || (events = _.result(this, 'events')))) return this;
      this.undelegateEvents();
      for (var key in events) {
        var method = events[key];
        if (!_.isFunction(method)) method = this[events[key]];
        if (!method) continue;

        var match = key.match(delegateEventSplitter);
        var eventName = match[1], selector = match[2];
        method = _.bind(method, this);
        eventName += '.delegateEvents' + this.cid;
        if (selector === '') {
          this.$el.on(eventName, method);
        } else {
          this.$el.on(eventName, selector, method);
        }
      }
      return this;
    },

    // Clears all callbacks previously bound to the view with `delegateEvents`.
    // You usually don't need to use this, but may wish to if you have multiple
    // Backbone views attached to the same DOM element.
    undelegateEvents: function() {
      this.$el.off('.delegateEvents' + this.cid);
      return this;
    },

    // Ensure that the View has a DOM element to render into.
    // If `this.el` is a string, pass it through `$()`, take the first
    // matching element, and re-assign it to `el`. Otherwise, create
    // an element from the `id`, `className` and `tagName` properties.
    _ensureElement: function() {
      if (!this.el) {
        var attrs = _.extend({}, _.result(this, 'attributes'));
        if (this.id) attrs.id = _.result(this, 'id');
        if (this.className) attrs['class'] = _.result(this, 'className');
        var $el = Backbone.$('<' + _.result(this, 'tagName') + '>').attr(attrs);
        this.setElement($el, false);
      } else {
        this.setElement(_.result(this, 'el'), false);
      }
    }

  });

  // Backbone.sync
  // -------------

  // Override this function to change the manner in which Backbone persists
  // models to the server. You will be passed the type of request, and the
  // model in question. By default, makes a RESTful Ajax request
  // to the model's `url()`. Some possible customizations could be:
  //
  // * Use `setTimeout` to batch rapid-fire updates into a single request.
  // * Send up the models as XML instead of JSON.
  // * Persist models via WebSockets instead of Ajax.
  //
  // Turn on `Backbone.emulateHTTP` in order to send `PUT` and `DELETE` requests
  // as `POST`, with a `_method` parameter containing the true HTTP method,
  // as well as all requests with the body as `application/x-www-form-urlencoded`
  // instead of `application/json` with the model in a param named `model`.
  // Useful when interfacing with server-side languages like **PHP** that make
  // it difficult to read the body of `PUT` requests.
  Backbone.sync = function(method, model, options) {
    var type = methodMap[method];

    // Default options, unless specified.
    _.defaults(options || (options = {}), {
      emulateHTTP: Backbone.emulateHTTP,
      emulateJSON: Backbone.emulateJSON
    });

    // Default JSON-request options.
    var params = {type: type, dataType: 'json'};

    // Ensure that we have a URL.
    if (!options.url) {
      params.url = _.result(model, 'url') || urlError();
    }

    // Ensure that we have the appropriate request data.
    if (options.data == null && model && (method === 'create' || method === 'update' || method === 'patch')) {
      params.contentType = 'application/json';
      params.data = JSON.stringify(options.attrs || model.toJSON(options));
    }

    // For older servers, emulate JSON by encoding the request into an HTML-form.
    if (options.emulateJSON) {
      params.contentType = 'application/x-www-form-urlencoded';
      params.data = params.data ? {model: params.data} : {};
    }

    // For older servers, emulate HTTP by mimicking the HTTP method with `_method`
    // And an `X-HTTP-Method-Override` header.
    if (options.emulateHTTP && (type === 'PUT' || type === 'DELETE' || type === 'PATCH')) {
      params.type = 'POST';
      if (options.emulateJSON) params.data._method = type;
      var beforeSend = options.beforeSend;
      options.beforeSend = function(xhr) {
        xhr.setRequestHeader('X-HTTP-Method-Override', type);
        if (beforeSend) return beforeSend.apply(this, arguments);
      };
    }

    // Don't process data on a non-GET request.
    if (params.type !== 'GET' && !options.emulateJSON) {
      params.processData = false;
    }

    // If we're sending a `PATCH` request, and we're in an old Internet Explorer
    // that still has ActiveX enabled by default, override jQuery to use that
    // for XHR instead. Remove this line when jQuery supports `PATCH` on IE8.
    if (params.type === 'PATCH' && noXhrPatch) {
      params.xhr = function() {
        return new ActiveXObject("Microsoft.XMLHTTP");
      };
    }

    // Make the request, allowing the user to override any Ajax options.
    var xhr = options.xhr = Backbone.ajax(_.extend(params, options));
    model.trigger('request', model, xhr, options);
    return xhr;
  };

  var noXhrPatch =
    typeof window !== 'undefined' && !!window.ActiveXObject &&
      !(window.XMLHttpRequest && (new XMLHttpRequest).dispatchEvent);

  // Map from CRUD to HTTP for our default `Backbone.sync` implementation.
  var methodMap = {
    'create': 'POST',
    'update': 'PUT',
    'patch':  'PATCH',
    'delete': 'DELETE',
    'read':   'GET'
  };

  // Set the default implementation of `Backbone.ajax` to proxy through to `$`.
  // Override this if you'd like to use a different library.
  Backbone.ajax = function() {
    return Backbone.$.ajax.apply(Backbone.$, arguments);
  };

  // Backbone.Router
  // ---------------

  // Routers map faux-URLs to actions, and fire events when routes are
  // matched. Creating a new one sets its `routes` hash, if not set statically.
  var Router = Backbone.Router = function(options) {
    options || (options = {});
    if (options.routes) this.routes = options.routes;
    this._bindRoutes();
    this.initialize.apply(this, arguments);
  };

  // Cached regular expressions for matching named param parts and splatted
  // parts of route strings.
  var optionalParam = /\((.*?)\)/g;
  var namedParam    = /(\(\?)?:\w+/g;
  var splatParam    = /\*\w+/g;
  var escapeRegExp  = /[\-{}\[\]+?.,\\\^$|#\s]/g;

  // Set up all inheritable **Backbone.Router** properties and methods.
  _.extend(Router.prototype, Events, {

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // Manually bind a single named route to a callback. For example:
    //
    //     this.route('search/:query/p:num', 'search', function(query, num) {
    //       ...
    //     });
    //
    route: function(route, name, callback) {
      if (!_.isRegExp(route)) route = this._routeToRegExp(route);
      if (_.isFunction(name)) {
        callback = name;
        name = '';
      }
      if (!callback) callback = this[name];
      var router = this;
      Backbone.history.route(route, function(fragment) {
        var args = router._extractParameters(route, fragment);
        router.execute(callback, args);
        router.trigger.apply(router, ['route:' + name].concat(args));
        router.trigger('route', name, args);
        Backbone.history.trigger('route', router, name, args);
      });
      return this;
    },

    // Execute a route handler with the provided parameters.  This is an
    // excellent place to do pre-route setup or post-route cleanup.
    execute: function(callback, args) {
      if (callback) callback.apply(this, args);
    },

    // Simple proxy to `Backbone.history` to save a fragment into the history.
    navigate: function(fragment, options) {
      Backbone.history.navigate(fragment, options);
      return this;
    },

    // Bind all defined routes to `Backbone.history`. We have to reverse the
    // order of the routes here to support behavior where the most general
    // routes can be defined at the bottom of the route map.
    _bindRoutes: function() {
      if (!this.routes) return;
      this.routes = _.result(this, 'routes');
      var route, routes = _.keys(this.routes);
      while ((route = routes.pop()) != null) {
        this.route(route, this.routes[route]);
      }
    },

    // Convert a route string into a regular expression, suitable for matching
    // against the current location hash.
    _routeToRegExp: function(route) {
      route = route.replace(escapeRegExp, '\\$&')
                   .replace(optionalParam, '(?:$1)?')
                   .replace(namedParam, function(match, optional) {
                     return optional ? match : '([^/?]+)';
                   })
                   .replace(splatParam, '([^?]*?)');
      return new RegExp('^' + route + '(?:\\?([\\s\\S]*))?$');
    },

    // Given a route, and a URL fragment that it matches, return the array of
    // extracted decoded parameters. Empty or unmatched parameters will be
    // treated as `null` to normalize cross-browser behavior.
    _extractParameters: function(route, fragment) {
      var params = route.exec(fragment).slice(1);
      return _.map(params, function(param, i) {
        // Don't decode the search params.
        if (i === params.length - 1) return param || null;
        return param ? decodeURIComponent(param) : null;
      });
    }

  });

  // Backbone.History
  // ----------------

  // Handles cross-browser history management, based on either
  // [pushState](http://diveintohtml5.info/history.html) and real URLs, or
  // [onhashchange](https://developer.mozilla.org/en-US/docs/DOM/window.onhashchange)
  // and URL fragments. If the browser supports neither (old IE, natch),
  // falls back to polling.
  var History = Backbone.History = function() {
    this.handlers = [];
    _.bindAll(this, 'checkUrl');

    // Ensure that `History` can be used outside of the browser.
    if (typeof window !== 'undefined') {
      this.location = window.location;
      this.history = window.history;
    }
  };

  // Cached regex for stripping a leading hash/slash and trailing space.
  var routeStripper = /^[#\/]|\s+$/g;

  // Cached regex for stripping leading and trailing slashes.
  var rootStripper = /^\/+|\/+$/g;

  // Cached regex for detecting MSIE.
  var isExplorer = /msie [\w.]+/;

  // Cached regex for removing a trailing slash.
  var trailingSlash = /\/$/;

  // Cached regex for stripping urls of hash.
  var pathStripper = /#.*$/;

  // Has the history handling already been started?
  History.started = false;

  // Set up all inheritable **Backbone.History** properties and methods.
  _.extend(History.prototype, Events, {

    // The default interval to poll for hash changes, if necessary, is
    // twenty times a second.
    interval: 50,

    // Are we at the app root?
    atRoot: function() {
      return this.location.pathname.replace(/[^\/]$/, '$&/') === this.root;
    },

    // Gets the true hash value. Cannot use location.hash directly due to bug
    // in Firefox where location.hash will always be decoded.
    getHash: function(window) {
      var match = (window || this).location.href.match(/#(.*)$/);
      return match ? match[1] : '';
    },

    // Get the cross-browser normalized URL fragment, either from the URL,
    // the hash, or the override.
    getFragment: function(fragment, forcePushState) {
      if (fragment == null) {
        if (this._hasPushState || !this._wantsHashChange || forcePushState) {
          fragment = decodeURI(this.location.pathname + this.location.search);
          var root = this.root.replace(trailingSlash, '');
          if (!fragment.indexOf(root)) fragment = fragment.slice(root.length);
        } else {
          fragment = this.getHash();
        }
      }
      return fragment.replace(routeStripper, '');
    },

    // Start the hash change handling, returning `true` if the current URL matches
    // an existing route, and `false` otherwise.
    start: function(options) {
      if (History.started) throw new Error("Backbone.history has already been started");
      History.started = true;

      // Figure out the initial configuration. Do we need an iframe?
      // Is pushState desired ... is it available?
      this.options          = _.extend({root: '/'}, this.options, options);
      this.root             = this.options.root;
      this._wantsHashChange = this.options.hashChange !== false;
      this._wantsPushState  = !!this.options.pushState;
      this._hasPushState    = !!(this.options.pushState && this.history && this.history.pushState);
      var fragment          = this.getFragment();
      var docMode           = document.documentMode;
      var oldIE             = (isExplorer.exec(navigator.userAgent.toLowerCase()) && (!docMode || docMode <= 7));

      // Normalize root to always include a leading and trailing slash.
      this.root = ('/' + this.root + '/').replace(rootStripper, '/');

      if (oldIE && this._wantsHashChange) {
        var frame = Backbone.$('<iframe src="javascript:0" tabindex="-1">');
        this.iframe = frame.hide().appendTo('body')[0].contentWindow;
        this.navigate(fragment);
      }

      // Depending on whether we're using pushState or hashes, and whether
      // 'onhashchange' is supported, determine how we check the URL state.
      if (this._hasPushState) {
        Backbone.$(window).on('popstate', this.checkUrl);
      } else if (this._wantsHashChange && ('onhashchange' in window) && !oldIE) {
        Backbone.$(window).on('hashchange', this.checkUrl);
      } else if (this._wantsHashChange) {
        this._checkUrlInterval = setInterval(this.checkUrl, this.interval);
      }

      // Determine if we need to change the base url, for a pushState link
      // opened by a non-pushState browser.
      this.fragment = fragment;
      var loc = this.location;

      // Transition from hashChange to pushState or vice versa if both are
      // requested.
      if (this._wantsHashChange && this._wantsPushState) {

        // If we've started off with a route from a `pushState`-enabled
        // browser, but we're currently in a browser that doesn't support it...
        if (!this._hasPushState && !this.atRoot()) {
          this.fragment = this.getFragment(null, true);
          this.location.replace(this.root + '#' + this.fragment);
          // Return immediately as browser will do redirect to new url
          return true;

        // Or if we've started out with a hash-based route, but we're currently
        // in a browser where it could be `pushState`-based instead...
        } else if (this._hasPushState && this.atRoot() && loc.hash) {
          this.fragment = this.getHash().replace(routeStripper, '');
          this.history.replaceState({}, document.title, this.root + this.fragment);
        }

      }

      if (!this.options.silent) return this.loadUrl();
    },

    // Disable Backbone.history, perhaps temporarily. Not useful in a real app,
    // but possibly useful for unit testing Routers.
    stop: function() {
      Backbone.$(window).off('popstate', this.checkUrl).off('hashchange', this.checkUrl);
      if (this._checkUrlInterval) clearInterval(this._checkUrlInterval);
      History.started = false;
    },

    // Add a route to be tested when the fragment changes. Routes added later
    // may override previous routes.
    route: function(route, callback) {
      this.handlers.unshift({route: route, callback: callback});
    },

    // Checks the current URL to see if it has changed, and if it has,
    // calls `loadUrl`, normalizing across the hidden iframe.
    checkUrl: function(e) {
      var current = this.getFragment();
      if (current === this.fragment && this.iframe) {
        current = this.getFragment(this.getHash(this.iframe));
      }
      if (current === this.fragment) return false;
      if (this.iframe) this.navigate(current);
      this.loadUrl();
    },

    // Attempt to load the current URL fragment. If a route succeeds with a
    // match, returns `true`. If no defined routes matches the fragment,
    // returns `false`.
    loadUrl: function(fragment) {
      fragment = this.fragment = this.getFragment(fragment);
      return _.any(this.handlers, function(handler) {
        if (handler.route.test(fragment)) {
          handler.callback(fragment);
          return true;
        }
      });
    },

    // Save a fragment into the hash history, or replace the URL state if the
    // 'replace' option is passed. You are responsible for properly URL-encoding
    // the fragment in advance.
    //
    // The options object can contain `trigger: true` if you wish to have the
    // route callback be fired (not usually desirable), or `replace: true`, if
    // you wish to modify the current URL without adding an entry to the history.
    navigate: function(fragment, options) {
      if (!History.started) return false;
      if (!options || options === true) options = {trigger: !!options};

      var url = this.root + (fragment = this.getFragment(fragment || ''));

      // Strip the hash for matching.
      fragment = fragment.replace(pathStripper, '');

      if (this.fragment === fragment) return;
      this.fragment = fragment;

      // Don't include a trailing slash on the root.
      if (fragment === '' && url !== '/') url = url.slice(0, -1);

      // If pushState is available, we use it to set the fragment as a real URL.
      if (this._hasPushState) {
        this.history[options.replace ? 'replaceState' : 'pushState']({}, document.title, url);

      // If hash changes haven't been explicitly disabled, update the hash
      // fragment to store history.
      } else if (this._wantsHashChange) {
        this._updateHash(this.location, fragment, options.replace);
        if (this.iframe && (fragment !== this.getFragment(this.getHash(this.iframe)))) {
          // Opening and closing the iframe tricks IE7 and earlier to push a
          // history entry on hash-tag change.  When replace is true, we don't
          // want this.
          if(!options.replace) this.iframe.document.open().close();
          this._updateHash(this.iframe.location, fragment, options.replace);
        }

      // If you've told us that you explicitly don't want fallback hashchange-
      // based history, then `navigate` becomes a page refresh.
      } else {
        return this.location.assign(url);
      }
      if (options.trigger) return this.loadUrl(fragment);
    },

    // Update the hash location, either replacing the current entry, or adding
    // a new one to the browser history.
    _updateHash: function(location, fragment, replace) {
      if (replace) {
        var href = location.href.replace(/(javascript:|#).*$/, '');
        location.replace(href + '#' + fragment);
      } else {
        // Some browsers require that `hash` contains a leading #.
        location.hash = '#' + fragment;
      }
    }

  });

  // Create the default Backbone.history.
  Backbone.history = new History;

  // Helpers
  // -------

  // Helper function to correctly set up the prototype chain, for subclasses.
  // Similar to `goog.inherits`, but uses a hash of prototype properties and
  // class properties to be extended.
  var extend = function(protoProps, staticProps) {
    var parent = this;
    var child;

    // The constructor function for the new subclass is either defined by you
    // (the "constructor" property in your `extend` definition), or defaulted
    // by us to simply call the parent's constructor.
    if (protoProps && _.has(protoProps, 'constructor')) {
      child = protoProps.constructor;
    } else {
      child = function(){ return parent.apply(this, arguments); };
    }

    // Add static properties to the constructor function, if supplied.
    _.extend(child, parent, staticProps);

    // Set the prototype chain to inherit from `parent`, without calling
    // `parent`'s constructor function.
    var Surrogate = function(){ this.constructor = child; };
    Surrogate.prototype = parent.prototype;
    child.prototype = new Surrogate;

    // Add prototype properties (instance properties) to the subclass,
    // if supplied.
    if (protoProps) _.extend(child.prototype, protoProps);

    // Set a convenience property in case the parent's prototype is needed
    // later.
    child.__super__ = parent.prototype;

    return child;
  };

  // Set up inheritance for the model, collection, router, view and history.
  Model.extend = Collection.extend = Router.extend = View.extend = History.extend = extend;

  // Throw an error when a URL is needed, and none is supplied.
  var urlError = function() {
    throw new Error('A "url" property or function must be specified');
  };

  // Wrap an optional error callback with a fallback error event.
  var wrapError = function(model, options) {
    var error = options.error;
    options.error = function(resp) {
      if (error) error(model, resp, options);
      model.trigger('error', model, resp, options);
    };
  };

  return Backbone;

}));

},{"underscore":"/Users/lfisher/git/airport-codes/node_modules/backbone/node_modules/underscore/underscore.js"}],"/Users/lfisher/git/airport-codes/node_modules/backbone/node_modules/underscore/underscore.js":[function(require,module,exports){
//     Underscore.js 1.8.2
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.

(function() {

  // Baseline setup
  // --------------

  // Establish the root object, `window` in the browser, or `exports` on the server.
  var root = this;

  // Save the previous value of the `_` variable.
  var previousUnderscore = root._;

  // Save bytes in the minified (but not gzipped) version:
  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

  // Create quick reference variables for speed access to core prototypes.
  var
    push             = ArrayProto.push,
    slice            = ArrayProto.slice,
    toString         = ObjProto.toString,
    hasOwnProperty   = ObjProto.hasOwnProperty;

  // All **ECMAScript 5** native function implementations that we hope to use
  // are declared here.
  var
    nativeIsArray      = Array.isArray,
    nativeKeys         = Object.keys,
    nativeBind         = FuncProto.bind,
    nativeCreate       = Object.create;

  // Naked function reference for surrogate-prototype-swapping.
  var Ctor = function(){};

  // Create a safe reference to the Underscore object for use below.
  var _ = function(obj) {
    if (obj instanceof _) return obj;
    if (!(this instanceof _)) return new _(obj);
    this._wrapped = obj;
  };

  // Export the Underscore object for **Node.js**, with
  // backwards-compatibility for the old `require()` API. If we're in
  // the browser, add `_` as a global object.
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = _;
    }
    exports._ = _;
  } else {
    root._ = _;
  }

  // Current version.
  _.VERSION = '1.8.2';

  // Internal function that returns an efficient (for current engines) version
  // of the passed-in callback, to be repeatedly applied in other Underscore
  // functions.
  var optimizeCb = function(func, context, argCount) {
    if (context === void 0) return func;
    switch (argCount == null ? 3 : argCount) {
      case 1: return function(value) {
        return func.call(context, value);
      };
      case 2: return function(value, other) {
        return func.call(context, value, other);
      };
      case 3: return function(value, index, collection) {
        return func.call(context, value, index, collection);
      };
      case 4: return function(accumulator, value, index, collection) {
        return func.call(context, accumulator, value, index, collection);
      };
    }
    return function() {
      return func.apply(context, arguments);
    };
  };

  // A mostly-internal function to generate callbacks that can be applied
  // to each element in a collection, returning the desired result — either
  // identity, an arbitrary callback, a property matcher, or a property accessor.
  var cb = function(value, context, argCount) {
    if (value == null) return _.identity;
    if (_.isFunction(value)) return optimizeCb(value, context, argCount);
    if (_.isObject(value)) return _.matcher(value);
    return _.property(value);
  };
  _.iteratee = function(value, context) {
    return cb(value, context, Infinity);
  };

  // An internal function for creating assigner functions.
  var createAssigner = function(keysFunc, undefinedOnly) {
    return function(obj) {
      var length = arguments.length;
      if (length < 2 || obj == null) return obj;
      for (var index = 1; index < length; index++) {
        var source = arguments[index],
            keys = keysFunc(source),
            l = keys.length;
        for (var i = 0; i < l; i++) {
          var key = keys[i];
          if (!undefinedOnly || obj[key] === void 0) obj[key] = source[key];
        }
      }
      return obj;
    };
  };

  // An internal function for creating a new object that inherits from another.
  var baseCreate = function(prototype) {
    if (!_.isObject(prototype)) return {};
    if (nativeCreate) return nativeCreate(prototype);
    Ctor.prototype = prototype;
    var result = new Ctor;
    Ctor.prototype = null;
    return result;
  };

  // Helper for collection methods to determine whether a collection
  // should be iterated as an array or as an object
  // Related: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
  var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
  var isArrayLike = function(collection) {
    var length = collection && collection.length;
    return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
  };

  // Collection Functions
  // --------------------

  // The cornerstone, an `each` implementation, aka `forEach`.
  // Handles raw objects in addition to array-likes. Treats all
  // sparse array-likes as if they were dense.
  _.each = _.forEach = function(obj, iteratee, context) {
    iteratee = optimizeCb(iteratee, context);
    var i, length;
    if (isArrayLike(obj)) {
      for (i = 0, length = obj.length; i < length; i++) {
        iteratee(obj[i], i, obj);
      }
    } else {
      var keys = _.keys(obj);
      for (i = 0, length = keys.length; i < length; i++) {
        iteratee(obj[keys[i]], keys[i], obj);
      }
    }
    return obj;
  };

  // Return the results of applying the iteratee to each element.
  _.map = _.collect = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length,
        results = Array(length);
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      results[index] = iteratee(obj[currentKey], currentKey, obj);
    }
    return results;
  };

  // Create a reducing function iterating left or right.
  function createReduce(dir) {
    // Optimized iterator function as using arguments.length
    // in the main function will deoptimize the, see #1991.
    function iterator(obj, iteratee, memo, keys, index, length) {
      for (; index >= 0 && index < length; index += dir) {
        var currentKey = keys ? keys[index] : index;
        memo = iteratee(memo, obj[currentKey], currentKey, obj);
      }
      return memo;
    }

    return function(obj, iteratee, memo, context) {
      iteratee = optimizeCb(iteratee, context, 4);
      var keys = !isArrayLike(obj) && _.keys(obj),
          length = (keys || obj).length,
          index = dir > 0 ? 0 : length - 1;
      // Determine the initial value if none is provided.
      if (arguments.length < 3) {
        memo = obj[keys ? keys[index] : index];
        index += dir;
      }
      return iterator(obj, iteratee, memo, keys, index, length);
    };
  }

  // **Reduce** builds up a single result from a list of values, aka `inject`,
  // or `foldl`.
  _.reduce = _.foldl = _.inject = createReduce(1);

  // The right-associative version of reduce, also known as `foldr`.
  _.reduceRight = _.foldr = createReduce(-1);

  // Return the first value which passes a truth test. Aliased as `detect`.
  _.find = _.detect = function(obj, predicate, context) {
    var key;
    if (isArrayLike(obj)) {
      key = _.findIndex(obj, predicate, context);
    } else {
      key = _.findKey(obj, predicate, context);
    }
    if (key !== void 0 && key !== -1) return obj[key];
  };

  // Return all the elements that pass a truth test.
  // Aliased as `select`.
  _.filter = _.select = function(obj, predicate, context) {
    var results = [];
    predicate = cb(predicate, context);
    _.each(obj, function(value, index, list) {
      if (predicate(value, index, list)) results.push(value);
    });
    return results;
  };

  // Return all the elements for which a truth test fails.
  _.reject = function(obj, predicate, context) {
    return _.filter(obj, _.negate(cb(predicate)), context);
  };

  // Determine whether all of the elements match a truth test.
  // Aliased as `all`.
  _.every = _.all = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length;
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      if (!predicate(obj[currentKey], currentKey, obj)) return false;
    }
    return true;
  };

  // Determine if at least one element in the object matches a truth test.
  // Aliased as `any`.
  _.some = _.any = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length;
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      if (predicate(obj[currentKey], currentKey, obj)) return true;
    }
    return false;
  };

  // Determine if the array or object contains a given value (using `===`).
  // Aliased as `includes` and `include`.
  _.contains = _.includes = _.include = function(obj, target, fromIndex) {
    if (!isArrayLike(obj)) obj = _.values(obj);
    return _.indexOf(obj, target, typeof fromIndex == 'number' && fromIndex) >= 0;
  };

  // Invoke a method (with arguments) on every item in a collection.
  _.invoke = function(obj, method) {
    var args = slice.call(arguments, 2);
    var isFunc = _.isFunction(method);
    return _.map(obj, function(value) {
      var func = isFunc ? method : value[method];
      return func == null ? func : func.apply(value, args);
    });
  };

  // Convenience version of a common use case of `map`: fetching a property.
  _.pluck = function(obj, key) {
    return _.map(obj, _.property(key));
  };

  // Convenience version of a common use case of `filter`: selecting only objects
  // containing specific `key:value` pairs.
  _.where = function(obj, attrs) {
    return _.filter(obj, _.matcher(attrs));
  };

  // Convenience version of a common use case of `find`: getting the first object
  // containing specific `key:value` pairs.
  _.findWhere = function(obj, attrs) {
    return _.find(obj, _.matcher(attrs));
  };

  // Return the maximum element (or element-based computation).
  _.max = function(obj, iteratee, context) {
    var result = -Infinity, lastComputed = -Infinity,
        value, computed;
    if (iteratee == null && obj != null) {
      obj = isArrayLike(obj) ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value > result) {
          result = value;
        }
      }
    } else {
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index, list) {
        computed = iteratee(value, index, list);
        if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
          result = value;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Return the minimum element (or element-based computation).
  _.min = function(obj, iteratee, context) {
    var result = Infinity, lastComputed = Infinity,
        value, computed;
    if (iteratee == null && obj != null) {
      obj = isArrayLike(obj) ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value < result) {
          result = value;
        }
      }
    } else {
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index, list) {
        computed = iteratee(value, index, list);
        if (computed < lastComputed || computed === Infinity && result === Infinity) {
          result = value;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Shuffle a collection, using the modern version of the
  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
  _.shuffle = function(obj) {
    var set = isArrayLike(obj) ? obj : _.values(obj);
    var length = set.length;
    var shuffled = Array(length);
    for (var index = 0, rand; index < length; index++) {
      rand = _.random(0, index);
      if (rand !== index) shuffled[index] = shuffled[rand];
      shuffled[rand] = set[index];
    }
    return shuffled;
  };

  // Sample **n** random values from a collection.
  // If **n** is not specified, returns a single random element.
  // The internal `guard` argument allows it to work with `map`.
  _.sample = function(obj, n, guard) {
    if (n == null || guard) {
      if (!isArrayLike(obj)) obj = _.values(obj);
      return obj[_.random(obj.length - 1)];
    }
    return _.shuffle(obj).slice(0, Math.max(0, n));
  };

  // Sort the object's values by a criterion produced by an iteratee.
  _.sortBy = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    return _.pluck(_.map(obj, function(value, index, list) {
      return {
        value: value,
        index: index,
        criteria: iteratee(value, index, list)
      };
    }).sort(function(left, right) {
      var a = left.criteria;
      var b = right.criteria;
      if (a !== b) {
        if (a > b || a === void 0) return 1;
        if (a < b || b === void 0) return -1;
      }
      return left.index - right.index;
    }), 'value');
  };

  // An internal function used for aggregate "group by" operations.
  var group = function(behavior) {
    return function(obj, iteratee, context) {
      var result = {};
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index) {
        var key = iteratee(value, index, obj);
        behavior(result, value, key);
      });
      return result;
    };
  };

  // Groups the object's values by a criterion. Pass either a string attribute
  // to group by, or a function that returns the criterion.
  _.groupBy = group(function(result, value, key) {
    if (_.has(result, key)) result[key].push(value); else result[key] = [value];
  });

  // Indexes the object's values by a criterion, similar to `groupBy`, but for
  // when you know that your index values will be unique.
  _.indexBy = group(function(result, value, key) {
    result[key] = value;
  });

  // Counts instances of an object that group by a certain criterion. Pass
  // either a string attribute to count by, or a function that returns the
  // criterion.
  _.countBy = group(function(result, value, key) {
    if (_.has(result, key)) result[key]++; else result[key] = 1;
  });

  // Safely create a real, live array from anything iterable.
  _.toArray = function(obj) {
    if (!obj) return [];
    if (_.isArray(obj)) return slice.call(obj);
    if (isArrayLike(obj)) return _.map(obj, _.identity);
    return _.values(obj);
  };

  // Return the number of elements in an object.
  _.size = function(obj) {
    if (obj == null) return 0;
    return isArrayLike(obj) ? obj.length : _.keys(obj).length;
  };

  // Split a collection into two arrays: one whose elements all satisfy the given
  // predicate, and one whose elements all do not satisfy the predicate.
  _.partition = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var pass = [], fail = [];
    _.each(obj, function(value, key, obj) {
      (predicate(value, key, obj) ? pass : fail).push(value);
    });
    return [pass, fail];
  };

  // Array Functions
  // ---------------

  // Get the first element of an array. Passing **n** will return the first N
  // values in the array. Aliased as `head` and `take`. The **guard** check
  // allows it to work with `_.map`.
  _.first = _.head = _.take = function(array, n, guard) {
    if (array == null) return void 0;
    if (n == null || guard) return array[0];
    return _.initial(array, array.length - n);
  };

  // Returns everything but the last entry of the array. Especially useful on
  // the arguments object. Passing **n** will return all the values in
  // the array, excluding the last N.
  _.initial = function(array, n, guard) {
    return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
  };

  // Get the last element of an array. Passing **n** will return the last N
  // values in the array.
  _.last = function(array, n, guard) {
    if (array == null) return void 0;
    if (n == null || guard) return array[array.length - 1];
    return _.rest(array, Math.max(0, array.length - n));
  };

  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
  // Especially useful on the arguments object. Passing an **n** will return
  // the rest N values in the array.
  _.rest = _.tail = _.drop = function(array, n, guard) {
    return slice.call(array, n == null || guard ? 1 : n);
  };

  // Trim out all falsy values from an array.
  _.compact = function(array) {
    return _.filter(array, _.identity);
  };

  // Internal implementation of a recursive `flatten` function.
  var flatten = function(input, shallow, strict, startIndex) {
    var output = [], idx = 0;
    for (var i = startIndex || 0, length = input && input.length; i < length; i++) {
      var value = input[i];
      if (isArrayLike(value) && (_.isArray(value) || _.isArguments(value))) {
        //flatten current level of array or arguments object
        if (!shallow) value = flatten(value, shallow, strict);
        var j = 0, len = value.length;
        output.length += len;
        while (j < len) {
          output[idx++] = value[j++];
        }
      } else if (!strict) {
        output[idx++] = value;
      }
    }
    return output;
  };

  // Flatten out an array, either recursively (by default), or just one level.
  _.flatten = function(array, shallow) {
    return flatten(array, shallow, false);
  };

  // Return a version of the array that does not contain the specified value(s).
  _.without = function(array) {
    return _.difference(array, slice.call(arguments, 1));
  };

  // Produce a duplicate-free version of the array. If the array has already
  // been sorted, you have the option of using a faster algorithm.
  // Aliased as `unique`.
  _.uniq = _.unique = function(array, isSorted, iteratee, context) {
    if (array == null) return [];
    if (!_.isBoolean(isSorted)) {
      context = iteratee;
      iteratee = isSorted;
      isSorted = false;
    }
    if (iteratee != null) iteratee = cb(iteratee, context);
    var result = [];
    var seen = [];
    for (var i = 0, length = array.length; i < length; i++) {
      var value = array[i],
          computed = iteratee ? iteratee(value, i, array) : value;
      if (isSorted) {
        if (!i || seen !== computed) result.push(value);
        seen = computed;
      } else if (iteratee) {
        if (!_.contains(seen, computed)) {
          seen.push(computed);
          result.push(value);
        }
      } else if (!_.contains(result, value)) {
        result.push(value);
      }
    }
    return result;
  };

  // Produce an array that contains the union: each distinct element from all of
  // the passed-in arrays.
  _.union = function() {
    return _.uniq(flatten(arguments, true, true));
  };

  // Produce an array that contains every item shared between all the
  // passed-in arrays.
  _.intersection = function(array) {
    if (array == null) return [];
    var result = [];
    var argsLength = arguments.length;
    for (var i = 0, length = array.length; i < length; i++) {
      var item = array[i];
      if (_.contains(result, item)) continue;
      for (var j = 1; j < argsLength; j++) {
        if (!_.contains(arguments[j], item)) break;
      }
      if (j === argsLength) result.push(item);
    }
    return result;
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function(array) {
    var rest = flatten(arguments, true, true, 1);
    return _.filter(array, function(value){
      return !_.contains(rest, value);
    });
  };

  // Zip together multiple lists into a single array -- elements that share
  // an index go together.
  _.zip = function() {
    return _.unzip(arguments);
  };

  // Complement of _.zip. Unzip accepts an array of arrays and groups
  // each array's elements on shared indices
  _.unzip = function(array) {
    var length = array && _.max(array, 'length').length || 0;
    var result = Array(length);

    for (var index = 0; index < length; index++) {
      result[index] = _.pluck(array, index);
    }
    return result;
  };

  // Converts lists into objects. Pass either a single array of `[key, value]`
  // pairs, or two parallel arrays of the same length -- one of keys, and one of
  // the corresponding values.
  _.object = function(list, values) {
    var result = {};
    for (var i = 0, length = list && list.length; i < length; i++) {
      if (values) {
        result[list[i]] = values[i];
      } else {
        result[list[i][0]] = list[i][1];
      }
    }
    return result;
  };

  // Return the position of the first occurrence of an item in an array,
  // or -1 if the item is not included in the array.
  // If the array is large and already in sort order, pass `true`
  // for **isSorted** to use binary search.
  _.indexOf = function(array, item, isSorted) {
    var i = 0, length = array && array.length;
    if (typeof isSorted == 'number') {
      i = isSorted < 0 ? Math.max(0, length + isSorted) : isSorted;
    } else if (isSorted && length) {
      i = _.sortedIndex(array, item);
      return array[i] === item ? i : -1;
    }
    if (item !== item) {
      return _.findIndex(slice.call(array, i), _.isNaN);
    }
    for (; i < length; i++) if (array[i] === item) return i;
    return -1;
  };

  _.lastIndexOf = function(array, item, from) {
    var idx = array ? array.length : 0;
    if (typeof from == 'number') {
      idx = from < 0 ? idx + from + 1 : Math.min(idx, from + 1);
    }
    if (item !== item) {
      return _.findLastIndex(slice.call(array, 0, idx), _.isNaN);
    }
    while (--idx >= 0) if (array[idx] === item) return idx;
    return -1;
  };

  // Generator function to create the findIndex and findLastIndex functions
  function createIndexFinder(dir) {
    return function(array, predicate, context) {
      predicate = cb(predicate, context);
      var length = array != null && array.length;
      var index = dir > 0 ? 0 : length - 1;
      for (; index >= 0 && index < length; index += dir) {
        if (predicate(array[index], index, array)) return index;
      }
      return -1;
    };
  }

  // Returns the first index on an array-like that passes a predicate test
  _.findIndex = createIndexFinder(1);

  _.findLastIndex = createIndexFinder(-1);

  // Use a comparator function to figure out the smallest index at which
  // an object should be inserted so as to maintain order. Uses binary search.
  _.sortedIndex = function(array, obj, iteratee, context) {
    iteratee = cb(iteratee, context, 1);
    var value = iteratee(obj);
    var low = 0, high = array.length;
    while (low < high) {
      var mid = Math.floor((low + high) / 2);
      if (iteratee(array[mid]) < value) low = mid + 1; else high = mid;
    }
    return low;
  };

  // Generate an integer Array containing an arithmetic progression. A port of
  // the native Python `range()` function. See
  // [the Python documentation](http://docs.python.org/library/functions.html#range).
  _.range = function(start, stop, step) {
    if (arguments.length <= 1) {
      stop = start || 0;
      start = 0;
    }
    step = step || 1;

    var length = Math.max(Math.ceil((stop - start) / step), 0);
    var range = Array(length);

    for (var idx = 0; idx < length; idx++, start += step) {
      range[idx] = start;
    }

    return range;
  };

  // Function (ahem) Functions
  // ------------------

  // Determines whether to execute a function as a constructor
  // or a normal function with the provided arguments
  var executeBound = function(sourceFunc, boundFunc, context, callingContext, args) {
    if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
    var self = baseCreate(sourceFunc.prototype);
    var result = sourceFunc.apply(self, args);
    if (_.isObject(result)) return result;
    return self;
  };

  // Create a function bound to a given object (assigning `this`, and arguments,
  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
  // available.
  _.bind = function(func, context) {
    if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
    if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
    var args = slice.call(arguments, 2);
    var bound = function() {
      return executeBound(func, bound, context, this, args.concat(slice.call(arguments)));
    };
    return bound;
  };

  // Partially apply a function by creating a version that has had some of its
  // arguments pre-filled, without changing its dynamic `this` context. _ acts
  // as a placeholder, allowing any combination of arguments to be pre-filled.
  _.partial = function(func) {
    var boundArgs = slice.call(arguments, 1);
    var bound = function() {
      var position = 0, length = boundArgs.length;
      var args = Array(length);
      for (var i = 0; i < length; i++) {
        args[i] = boundArgs[i] === _ ? arguments[position++] : boundArgs[i];
      }
      while (position < arguments.length) args.push(arguments[position++]);
      return executeBound(func, bound, this, this, args);
    };
    return bound;
  };

  // Bind a number of an object's methods to that object. Remaining arguments
  // are the method names to be bound. Useful for ensuring that all callbacks
  // defined on an object belong to it.
  _.bindAll = function(obj) {
    var i, length = arguments.length, key;
    if (length <= 1) throw new Error('bindAll must be passed function names');
    for (i = 1; i < length; i++) {
      key = arguments[i];
      obj[key] = _.bind(obj[key], obj);
    }
    return obj;
  };

  // Memoize an expensive function by storing its results.
  _.memoize = function(func, hasher) {
    var memoize = function(key) {
      var cache = memoize.cache;
      var address = '' + (hasher ? hasher.apply(this, arguments) : key);
      if (!_.has(cache, address)) cache[address] = func.apply(this, arguments);
      return cache[address];
    };
    memoize.cache = {};
    return memoize;
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  _.delay = function(func, wait) {
    var args = slice.call(arguments, 2);
    return setTimeout(function(){
      return func.apply(null, args);
    }, wait);
  };

  // Defers a function, scheduling it to run after the current call stack has
  // cleared.
  _.defer = _.partial(_.delay, _, 1);

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time. Normally, the throttled function will run
  // as much as it can, without ever going more than once per `wait` duration;
  // but if you'd like to disable the execution on the leading edge, pass
  // `{leading: false}`. To disable execution on the trailing edge, ditto.
  _.throttle = function(func, wait, options) {
    var context, args, result;
    var timeout = null;
    var previous = 0;
    if (!options) options = {};
    var later = function() {
      previous = options.leading === false ? 0 : _.now();
      timeout = null;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    };
    return function() {
      var now = _.now();
      if (!previous && options.leading === false) previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0 || remaining > wait) {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        previous = now;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };
  };

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  _.debounce = function(func, wait, immediate) {
    var timeout, args, context, timestamp, result;

    var later = function() {
      var last = _.now() - timestamp;

      if (last < wait && last >= 0) {
        timeout = setTimeout(later, wait - last);
      } else {
        timeout = null;
        if (!immediate) {
          result = func.apply(context, args);
          if (!timeout) context = args = null;
        }
      }
    };

    return function() {
      context = this;
      args = arguments;
      timestamp = _.now();
      var callNow = immediate && !timeout;
      if (!timeout) timeout = setTimeout(later, wait);
      if (callNow) {
        result = func.apply(context, args);
        context = args = null;
      }

      return result;
    };
  };

  // Returns the first function passed as an argument to the second,
  // allowing you to adjust arguments, run code before and after, and
  // conditionally execute the original function.
  _.wrap = function(func, wrapper) {
    return _.partial(wrapper, func);
  };

  // Returns a negated version of the passed-in predicate.
  _.negate = function(predicate) {
    return function() {
      return !predicate.apply(this, arguments);
    };
  };

  // Returns a function that is the composition of a list of functions, each
  // consuming the return value of the function that follows.
  _.compose = function() {
    var args = arguments;
    var start = args.length - 1;
    return function() {
      var i = start;
      var result = args[start].apply(this, arguments);
      while (i--) result = args[i].call(this, result);
      return result;
    };
  };

  // Returns a function that will only be executed on and after the Nth call.
  _.after = function(times, func) {
    return function() {
      if (--times < 1) {
        return func.apply(this, arguments);
      }
    };
  };

  // Returns a function that will only be executed up to (but not including) the Nth call.
  _.before = function(times, func) {
    var memo;
    return function() {
      if (--times > 0) {
        memo = func.apply(this, arguments);
      }
      if (times <= 1) func = null;
      return memo;
    };
  };

  // Returns a function that will be executed at most one time, no matter how
  // often you call it. Useful for lazy initialization.
  _.once = _.partial(_.before, 2);

  // Object Functions
  // ----------------

  // Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
  var hasEnumBug = !{toString: null}.propertyIsEnumerable('toString');
  var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString',
                      'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];

  function collectNonEnumProps(obj, keys) {
    var nonEnumIdx = nonEnumerableProps.length;
    var constructor = obj.constructor;
    var proto = (_.isFunction(constructor) && constructor.prototype) || ObjProto;

    // Constructor is a special case.
    var prop = 'constructor';
    if (_.has(obj, prop) && !_.contains(keys, prop)) keys.push(prop);

    while (nonEnumIdx--) {
      prop = nonEnumerableProps[nonEnumIdx];
      if (prop in obj && obj[prop] !== proto[prop] && !_.contains(keys, prop)) {
        keys.push(prop);
      }
    }
  }

  // Retrieve the names of an object's own properties.
  // Delegates to **ECMAScript 5**'s native `Object.keys`
  _.keys = function(obj) {
    if (!_.isObject(obj)) return [];
    if (nativeKeys) return nativeKeys(obj);
    var keys = [];
    for (var key in obj) if (_.has(obj, key)) keys.push(key);
    // Ahem, IE < 9.
    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
  };

  // Retrieve all the property names of an object.
  _.allKeys = function(obj) {
    if (!_.isObject(obj)) return [];
    var keys = [];
    for (var key in obj) keys.push(key);
    // Ahem, IE < 9.
    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
  };

  // Retrieve the values of an object's properties.
  _.values = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var values = Array(length);
    for (var i = 0; i < length; i++) {
      values[i] = obj[keys[i]];
    }
    return values;
  };

  // Returns the results of applying the iteratee to each element of the object
  // In contrast to _.map it returns an object
  _.mapObject = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    var keys =  _.keys(obj),
          length = keys.length,
          results = {},
          currentKey;
      for (var index = 0; index < length; index++) {
        currentKey = keys[index];
        results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
      }
      return results;
  };

  // Convert an object into a list of `[key, value]` pairs.
  _.pairs = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var pairs = Array(length);
    for (var i = 0; i < length; i++) {
      pairs[i] = [keys[i], obj[keys[i]]];
    }
    return pairs;
  };

  // Invert the keys and values of an object. The values must be serializable.
  _.invert = function(obj) {
    var result = {};
    var keys = _.keys(obj);
    for (var i = 0, length = keys.length; i < length; i++) {
      result[obj[keys[i]]] = keys[i];
    }
    return result;
  };

  // Return a sorted list of the function names available on the object.
  // Aliased as `methods`
  _.functions = _.methods = function(obj) {
    var names = [];
    for (var key in obj) {
      if (_.isFunction(obj[key])) names.push(key);
    }
    return names.sort();
  };

  // Extend a given object with all the properties in passed-in object(s).
  _.extend = createAssigner(_.allKeys);

  // Assigns a given object with all the own properties in the passed-in object(s)
  // (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
  _.extendOwn = _.assign = createAssigner(_.keys);

  // Returns the first key on an object that passes a predicate test
  _.findKey = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = _.keys(obj), key;
    for (var i = 0, length = keys.length; i < length; i++) {
      key = keys[i];
      if (predicate(obj[key], key, obj)) return key;
    }
  };

  // Return a copy of the object only containing the whitelisted properties.
  _.pick = function(object, oiteratee, context) {
    var result = {}, obj = object, iteratee, keys;
    if (obj == null) return result;
    if (_.isFunction(oiteratee)) {
      keys = _.allKeys(obj);
      iteratee = optimizeCb(oiteratee, context);
    } else {
      keys = flatten(arguments, false, false, 1);
      iteratee = function(value, key, obj) { return key in obj; };
      obj = Object(obj);
    }
    for (var i = 0, length = keys.length; i < length; i++) {
      var key = keys[i];
      var value = obj[key];
      if (iteratee(value, key, obj)) result[key] = value;
    }
    return result;
  };

   // Return a copy of the object without the blacklisted properties.
  _.omit = function(obj, iteratee, context) {
    if (_.isFunction(iteratee)) {
      iteratee = _.negate(iteratee);
    } else {
      var keys = _.map(flatten(arguments, false, false, 1), String);
      iteratee = function(value, key) {
        return !_.contains(keys, key);
      };
    }
    return _.pick(obj, iteratee, context);
  };

  // Fill in a given object with default properties.
  _.defaults = createAssigner(_.allKeys, true);

  // Create a (shallow-cloned) duplicate of an object.
  _.clone = function(obj) {
    if (!_.isObject(obj)) return obj;
    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
  };

  // Invokes interceptor with the obj, and then returns obj.
  // The primary purpose of this method is to "tap into" a method chain, in
  // order to perform operations on intermediate results within the chain.
  _.tap = function(obj, interceptor) {
    interceptor(obj);
    return obj;
  };

  // Returns whether an object has a given set of `key:value` pairs.
  _.isMatch = function(object, attrs) {
    var keys = _.keys(attrs), length = keys.length;
    if (object == null) return !length;
    var obj = Object(object);
    for (var i = 0; i < length; i++) {
      var key = keys[i];
      if (attrs[key] !== obj[key] || !(key in obj)) return false;
    }
    return true;
  };


  // Internal recursive comparison function for `isEqual`.
  var eq = function(a, b, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b) return a !== 0 || 1 / a === 1 / b;
    // A strict comparison is necessary because `null == undefined`.
    if (a == null || b == null) return a === b;
    // Unwrap any wrapped objects.
    if (a instanceof _) a = a._wrapped;
    if (b instanceof _) b = b._wrapped;
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className !== toString.call(b)) return false;
    switch (className) {
      // Strings, numbers, regular expressions, dates, and booleans are compared by value.
      case '[object RegExp]':
      // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
      case '[object String]':
        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
        // equivalent to `new String("5")`.
        return '' + a === '' + b;
      case '[object Number]':
        // `NaN`s are equivalent, but non-reflexive.
        // Object(NaN) is equivalent to NaN
        if (+a !== +a) return +b !== +b;
        // An `egal` comparison is performed for other numeric values.
        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
      case '[object Date]':
      case '[object Boolean]':
        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
        // millisecond representations. Note that invalid dates with millisecond representations
        // of `NaN` are not equivalent.
        return +a === +b;
    }

    var areArrays = className === '[object Array]';
    if (!areArrays) {
      if (typeof a != 'object' || typeof b != 'object') return false;

      // Objects with different constructors are not equivalent, but `Object`s or `Array`s
      // from different frames are.
      var aCtor = a.constructor, bCtor = b.constructor;
      if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor &&
                               _.isFunction(bCtor) && bCtor instanceof bCtor)
                          && ('constructor' in a && 'constructor' in b)) {
        return false;
      }
    }
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
    
    // Initializing stack of traversed objects.
    // It's done here since we only need them for objects and arrays comparison.
    aStack = aStack || [];
    bStack = bStack || [];
    var length = aStack.length;
    while (length--) {
      // Linear search. Performance is inversely proportional to the number of
      // unique nested structures.
      if (aStack[length] === a) return bStack[length] === b;
    }

    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);

    // Recursively compare objects and arrays.
    if (areArrays) {
      // Compare array lengths to determine if a deep comparison is necessary.
      length = a.length;
      if (length !== b.length) return false;
      // Deep compare the contents, ignoring non-numeric properties.
      while (length--) {
        if (!eq(a[length], b[length], aStack, bStack)) return false;
      }
    } else {
      // Deep compare objects.
      var keys = _.keys(a), key;
      length = keys.length;
      // Ensure that both objects contain the same number of properties before comparing deep equality.
      if (_.keys(b).length !== length) return false;
      while (length--) {
        // Deep compare each member
        key = keys[length];
        if (!(_.has(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
      }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return true;
  };

  // Perform a deep comparison to check if two objects are equal.
  _.isEqual = function(a, b) {
    return eq(a, b);
  };

  // Is a given array, string, or object empty?
  // An "empty" object has no enumerable own-properties.
  _.isEmpty = function(obj) {
    if (obj == null) return true;
    if (isArrayLike(obj) && (_.isArray(obj) || _.isString(obj) || _.isArguments(obj))) return obj.length === 0;
    return _.keys(obj).length === 0;
  };

  // Is a given value a DOM element?
  _.isElement = function(obj) {
    return !!(obj && obj.nodeType === 1);
  };

  // Is a given value an array?
  // Delegates to ECMA5's native Array.isArray
  _.isArray = nativeIsArray || function(obj) {
    return toString.call(obj) === '[object Array]';
  };

  // Is a given variable an object?
  _.isObject = function(obj) {
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  };

  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError.
  _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error'], function(name) {
    _['is' + name] = function(obj) {
      return toString.call(obj) === '[object ' + name + ']';
    };
  });

  // Define a fallback version of the method in browsers (ahem, IE < 9), where
  // there isn't any inspectable "Arguments" type.
  if (!_.isArguments(arguments)) {
    _.isArguments = function(obj) {
      return _.has(obj, 'callee');
    };
  }

  // Optimize `isFunction` if appropriate. Work around some typeof bugs in old v8,
  // IE 11 (#1621), and in Safari 8 (#1929).
  if (typeof /./ != 'function' && typeof Int8Array != 'object') {
    _.isFunction = function(obj) {
      return typeof obj == 'function' || false;
    };
  }

  // Is a given object a finite number?
  _.isFinite = function(obj) {
    return isFinite(obj) && !isNaN(parseFloat(obj));
  };

  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
  _.isNaN = function(obj) {
    return _.isNumber(obj) && obj !== +obj;
  };

  // Is a given value a boolean?
  _.isBoolean = function(obj) {
    return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
  };

  // Is a given value equal to null?
  _.isNull = function(obj) {
    return obj === null;
  };

  // Is a given variable undefined?
  _.isUndefined = function(obj) {
    return obj === void 0;
  };

  // Shortcut function for checking if an object has a given property directly
  // on itself (in other words, not on a prototype).
  _.has = function(obj, key) {
    return obj != null && hasOwnProperty.call(obj, key);
  };

  // Utility Functions
  // -----------------

  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
  // previous owner. Returns a reference to the Underscore object.
  _.noConflict = function() {
    root._ = previousUnderscore;
    return this;
  };

  // Keep the identity function around for default iteratees.
  _.identity = function(value) {
    return value;
  };

  // Predicate-generating functions. Often useful outside of Underscore.
  _.constant = function(value) {
    return function() {
      return value;
    };
  };

  _.noop = function(){};

  _.property = function(key) {
    return function(obj) {
      return obj == null ? void 0 : obj[key];
    };
  };

  // Generates a function for a given object that returns a given property.
  _.propertyOf = function(obj) {
    return obj == null ? function(){} : function(key) {
      return obj[key];
    };
  };

  // Returns a predicate for checking whether an object has a given set of 
  // `key:value` pairs.
  _.matcher = _.matches = function(attrs) {
    attrs = _.extendOwn({}, attrs);
    return function(obj) {
      return _.isMatch(obj, attrs);
    };
  };

  // Run a function **n** times.
  _.times = function(n, iteratee, context) {
    var accum = Array(Math.max(0, n));
    iteratee = optimizeCb(iteratee, context, 1);
    for (var i = 0; i < n; i++) accum[i] = iteratee(i);
    return accum;
  };

  // Return a random integer between min and max (inclusive).
  _.random = function(min, max) {
    if (max == null) {
      max = min;
      min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
  };

  // A (possibly faster) way to get the current timestamp as an integer.
  _.now = Date.now || function() {
    return new Date().getTime();
  };

   // List of HTML entities for escaping.
  var escapeMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '`': '&#x60;'
  };
  var unescapeMap = _.invert(escapeMap);

  // Functions for escaping and unescaping strings to/from HTML interpolation.
  var createEscaper = function(map) {
    var escaper = function(match) {
      return map[match];
    };
    // Regexes for identifying a key that needs to be escaped
    var source = '(?:' + _.keys(map).join('|') + ')';
    var testRegexp = RegExp(source);
    var replaceRegexp = RegExp(source, 'g');
    return function(string) {
      string = string == null ? '' : '' + string;
      return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
    };
  };
  _.escape = createEscaper(escapeMap);
  _.unescape = createEscaper(unescapeMap);

  // If the value of the named `property` is a function then invoke it with the
  // `object` as context; otherwise, return it.
  _.result = function(object, property, fallback) {
    var value = object == null ? void 0 : object[property];
    if (value === void 0) {
      value = fallback;
    }
    return _.isFunction(value) ? value.call(object) : value;
  };

  // Generate a unique integer id (unique within the entire client session).
  // Useful for temporary DOM ids.
  var idCounter = 0;
  _.uniqueId = function(prefix) {
    var id = ++idCounter + '';
    return prefix ? prefix + id : id;
  };

  // By default, Underscore uses ERB-style template delimiters, change the
  // following template settings to use alternative delimiters.
  _.templateSettings = {
    evaluate    : /<%([\s\S]+?)%>/g,
    interpolate : /<%=([\s\S]+?)%>/g,
    escape      : /<%-([\s\S]+?)%>/g
  };

  // When customizing `templateSettings`, if you don't want to define an
  // interpolation, evaluation or escaping regex, we need one that is
  // guaranteed not to match.
  var noMatch = /(.)^/;

  // Certain characters need to be escaped so that they can be put into a
  // string literal.
  var escapes = {
    "'":      "'",
    '\\':     '\\',
    '\r':     'r',
    '\n':     'n',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  var escaper = /\\|'|\r|\n|\u2028|\u2029/g;

  var escapeChar = function(match) {
    return '\\' + escapes[match];
  };

  // JavaScript micro-templating, similar to John Resig's implementation.
  // Underscore templating handles arbitrary delimiters, preserves whitespace,
  // and correctly escapes quotes within interpolated code.
  // NB: `oldSettings` only exists for backwards compatibility.
  _.template = function(text, settings, oldSettings) {
    if (!settings && oldSettings) settings = oldSettings;
    settings = _.defaults({}, settings, _.templateSettings);

    // Combine delimiters into one regular expression via alternation.
    var matcher = RegExp([
      (settings.escape || noMatch).source,
      (settings.interpolate || noMatch).source,
      (settings.evaluate || noMatch).source
    ].join('|') + '|$', 'g');

    // Compile the template source, escaping string literals appropriately.
    var index = 0;
    var source = "__p+='";
    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
      source += text.slice(index, offset).replace(escaper, escapeChar);
      index = offset + match.length;

      if (escape) {
        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
      } else if (interpolate) {
        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
      } else if (evaluate) {
        source += "';\n" + evaluate + "\n__p+='";
      }

      // Adobe VMs need the match returned to produce the correct offest.
      return match;
    });
    source += "';\n";

    // If a variable is not specified, place data values in local scope.
    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

    source = "var __t,__p='',__j=Array.prototype.join," +
      "print=function(){__p+=__j.call(arguments,'');};\n" +
      source + 'return __p;\n';

    try {
      var render = new Function(settings.variable || 'obj', '_', source);
    } catch (e) {
      e.source = source;
      throw e;
    }

    var template = function(data) {
      return render.call(this, data, _);
    };

    // Provide the compiled source as a convenience for precompilation.
    var argument = settings.variable || 'obj';
    template.source = 'function(' + argument + '){\n' + source + '}';

    return template;
  };

  // Add a "chain" function. Start chaining a wrapped Underscore object.
  _.chain = function(obj) {
    var instance = _(obj);
    instance._chain = true;
    return instance;
  };

  // OOP
  // ---------------
  // If Underscore is called as a function, it returns a wrapped object that
  // can be used OO-style. This wrapper holds altered versions of all the
  // underscore functions. Wrapped objects may be chained.

  // Helper function to continue chaining intermediate results.
  var result = function(instance, obj) {
    return instance._chain ? _(obj).chain() : obj;
  };

  // Add your own custom functions to the Underscore object.
  _.mixin = function(obj) {
    _.each(_.functions(obj), function(name) {
      var func = _[name] = obj[name];
      _.prototype[name] = function() {
        var args = [this._wrapped];
        push.apply(args, arguments);
        return result(this, func.apply(_, args));
      };
    });
  };

  // Add all of the Underscore functions to the wrapper object.
  _.mixin(_);

  // Add all mutator Array functions to the wrapper.
  _.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      var obj = this._wrapped;
      method.apply(obj, arguments);
      if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
      return result(this, obj);
    };
  });

  // Add all accessor Array functions to the wrapper.
  _.each(['concat', 'join', 'slice'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      return result(this, method.apply(this._wrapped, arguments));
    };
  });

  // Extracts the result from a wrapped and chained object.
  _.prototype.value = function() {
    return this._wrapped;
  };

  // Provide unwrapping proxy for some methods used in engine operations
  // such as arithmetic and JSON stringification.
  _.prototype.valueOf = _.prototype.toJSON = _.prototype.value;
  
  _.prototype.toString = function() {
    return '' + this._wrapped;
  };

  // AMD registration happens at the end for compatibility with AMD loaders
  // that may not enforce next-turn semantics on modules. Even though general
  // practice for AMD registration is to be anonymous, underscore registers
  // as a named module because, like jQuery, it is a base library that is
  // popular enough to be bundled in a third party lib, but not be part of
  // an AMD load request. Those cases could generate an error when an
  // anonymous define() is called outside of a loader request.
  if (typeof define === 'function' && define.amd) {
    define('underscore', [], function() {
      return _;
    });
  }
}.call(this));

},{}],"/Users/lfisher/git/airport-codes/node_modules/browserify/node_modules/browser-resolve/empty.js":[function(require,module,exports){

},{}],"/Users/lfisher/git/airport-codes/node_modules/browserify/node_modules/inherits/inherits_browser.js":[function(require,module,exports){
if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}

},{}],"/Users/lfisher/git/airport-codes/node_modules/browserify/node_modules/process/browser.js":[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};
var queue = [];
var draining = false;

function drainQueue() {
    if (draining) {
        return;
    }
    draining = true;
    var currentQueue;
    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        var i = -1;
        while (++i < len) {
            currentQueue[i]();
        }
        len = queue.length;
    }
    draining = false;
}
process.nextTick = function (fun) {
    queue.push(fun);
    if (!draining) {
        setTimeout(drainQueue, 0);
    }
};

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

// TODO(shtylman)
process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],"/Users/lfisher/git/airport-codes/node_modules/browserify/node_modules/util/support/isBufferBrowser.js":[function(require,module,exports){
module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}
},{}],"/Users/lfisher/git/airport-codes/node_modules/browserify/node_modules/util/util.js":[function(require,module,exports){
(function (process,global){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  // Allow for deprecating things in the process of starting up.
  if (isUndefined(global.process)) {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  if (process.noDeprecation === true) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = require('./support/isBuffer');

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = require('inherits');

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./support/isBuffer":"/Users/lfisher/git/airport-codes/node_modules/browserify/node_modules/util/support/isBufferBrowser.js","_process":"/Users/lfisher/git/airport-codes/node_modules/browserify/node_modules/process/browser.js","inherits":"/Users/lfisher/git/airport-codes/node_modules/browserify/node_modules/inherits/inherits_browser.js"}],"/Users/lfisher/git/airport-codes/node_modules/jade/runtime.js":[function(require,module,exports){
(function (global){
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.jade=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

/**
 * Merge two attribute objects giving precedence
 * to values in object `b`. Classes are special-cased
 * allowing for arrays and merging/joining appropriately
 * resulting in a string.
 *
 * @param {Object} a
 * @param {Object} b
 * @return {Object} a
 * @api private
 */

exports.merge = function merge(a, b) {
  if (arguments.length === 1) {
    var attrs = a[0];
    for (var i = 1; i < a.length; i++) {
      attrs = merge(attrs, a[i]);
    }
    return attrs;
  }
  var ac = a['class'];
  var bc = b['class'];

  if (ac || bc) {
    ac = ac || [];
    bc = bc || [];
    if (!Array.isArray(ac)) ac = [ac];
    if (!Array.isArray(bc)) bc = [bc];
    a['class'] = ac.concat(bc).filter(nulls);
  }

  for (var key in b) {
    if (key != 'class') {
      a[key] = b[key];
    }
  }

  return a;
};

/**
 * Filter null `val`s.
 *
 * @param {*} val
 * @return {Boolean}
 * @api private
 */

function nulls(val) {
  return val != null && val !== '';
}

/**
 * join array as classes.
 *
 * @param {*} val
 * @return {String}
 */
exports.joinClasses = joinClasses;
function joinClasses(val) {
  return (Array.isArray(val) ? val.map(joinClasses) :
    (val && typeof val === 'object') ? Object.keys(val).filter(function (key) { return val[key]; }) :
    [val]).filter(nulls).join(' ');
}

/**
 * Render the given classes.
 *
 * @param {Array} classes
 * @param {Array.<Boolean>} escaped
 * @return {String}
 */
exports.cls = function cls(classes, escaped) {
  var buf = [];
  for (var i = 0; i < classes.length; i++) {
    if (escaped && escaped[i]) {
      buf.push(exports.escape(joinClasses([classes[i]])));
    } else {
      buf.push(joinClasses(classes[i]));
    }
  }
  var text = joinClasses(buf);
  if (text.length) {
    return ' class="' + text + '"';
  } else {
    return '';
  }
};


exports.style = function (val) {
  if (val && typeof val === 'object') {
    return Object.keys(val).map(function (style) {
      return style + ':' + val[style];
    }).join(';');
  } else {
    return val;
  }
};
/**
 * Render the given attribute.
 *
 * @param {String} key
 * @param {String} val
 * @param {Boolean} escaped
 * @param {Boolean} terse
 * @return {String}
 */
exports.attr = function attr(key, val, escaped, terse) {
  if (key === 'style') {
    val = exports.style(val);
  }
  if ('boolean' == typeof val || null == val) {
    if (val) {
      return ' ' + (terse ? key : key + '="' + key + '"');
    } else {
      return '';
    }
  } else if (0 == key.indexOf('data') && 'string' != typeof val) {
    if (JSON.stringify(val).indexOf('&') !== -1) {
      console.warn('Since Jade 2.0.0, ampersands (`&`) in data attributes ' +
                   'will be escaped to `&amp;`');
    };
    if (val && typeof val.toISOString === 'function') {
      console.warn('Jade will eliminate the double quotes around dates in ' +
                   'ISO form after 2.0.0');
    }
    return ' ' + key + "='" + JSON.stringify(val).replace(/'/g, '&apos;') + "'";
  } else if (escaped) {
    if (val && typeof val.toISOString === 'function') {
      console.warn('Jade will stringify dates in ISO form after 2.0.0');
    }
    return ' ' + key + '="' + exports.escape(val) + '"';
  } else {
    if (val && typeof val.toISOString === 'function') {
      console.warn('Jade will stringify dates in ISO form after 2.0.0');
    }
    return ' ' + key + '="' + val + '"';
  }
};

/**
 * Render the given attributes object.
 *
 * @param {Object} obj
 * @param {Object} escaped
 * @return {String}
 */
exports.attrs = function attrs(obj, terse){
  var buf = [];

  var keys = Object.keys(obj);

  if (keys.length) {
    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i]
        , val = obj[key];

      if ('class' == key) {
        if (val = joinClasses(val)) {
          buf.push(' ' + key + '="' + val + '"');
        }
      } else {
        buf.push(exports.attr(key, val, false, terse));
      }
    }
  }

  return buf.join('');
};

/**
 * Escape the given string of `html`.
 *
 * @param {String} html
 * @return {String}
 * @api private
 */

exports.escape = function escape(html){
  var result = String(html)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
  if (result === '' + html) return html;
  else return result;
};

/**
 * Re-throw the given `err` in context to the
 * the jade in `filename` at the given `lineno`.
 *
 * @param {Error} err
 * @param {String} filename
 * @param {String} lineno
 * @api private
 */

exports.rethrow = function rethrow(err, filename, lineno, str){
  if (!(err instanceof Error)) throw err;
  if ((typeof window != 'undefined' || !filename) && !str) {
    err.message += ' on line ' + lineno;
    throw err;
  }
  try {
    str = str || require('fs').readFileSync(filename, 'utf8')
  } catch (ex) {
    rethrow(err, null, lineno)
  }
  var context = 3
    , lines = str.split('\n')
    , start = Math.max(lineno - context, 0)
    , end = Math.min(lines.length, lineno + context);

  // Error context
  var context = lines.slice(start, end).map(function(line, i){
    var curr = i + start + 1;
    return (curr == lineno ? '  > ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'Jade') + ':' + lineno
    + '\n' + context + '\n\n' + err.message;
  throw err;
};

},{"fs":2}],2:[function(require,module,exports){

},{}]},{},[1])(1)
});
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"fs":"/Users/lfisher/git/airport-codes/node_modules/browserify/node_modules/browser-resolve/empty.js"}],"/Users/lfisher/git/airport-codes/node_modules/jquery/dist/jquery.js":[function(require,module,exports){
/*!
 * jQuery JavaScript Library v2.1.3
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-12-18T15:11Z
 */

(function( global, factory ) {

	if ( typeof module === "object" && typeof module.exports === "object" ) {
		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Support: Firefox 18+
// Can't be in strict mode, several libs including ASP.NET trace
// the stack via arguments.caller.callee and Firefox dies if
// you try to trace through "use strict" call chains. (#13335)
//

var arr = [];

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var support = {};



var
	// Use the correct document accordingly with window argument (sandbox)
	document = window.document,

	version = "2.1.3",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {
		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android<4.1
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([\da-z])/gi,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// Start with an empty selector
	selector: "",

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {
		return num != null ?

			// Return just the one element from the set
			( num < 0 ? this[ num + this.length ] : this[ num ] ) :

			// Return all the elements in a clean array
			slice.call( this );
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;
		ret.context = this.context;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	// (You can seed the arguments with an array of args, but this is
	// only used internally.)
	each: function( callback, args ) {
		return jQuery.each( this, callback, args );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map(this, function( elem, i ) {
			return callback.call( elem, i, elem );
		}));
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[j] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor(null);
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[0] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction(target) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {
		// Only deal with non-null/undefined values
		if ( (options = arguments[ i ]) != null ) {
			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)) ) ) {
					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && jQuery.isArray(src) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject(src) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend({
	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isFunction: function( obj ) {
		return jQuery.type(obj) === "function";
	},

	isArray: Array.isArray,

	isWindow: function( obj ) {
		return obj != null && obj === obj.window;
	},

	isNumeric: function( obj ) {
		// parseFloat NaNs numeric-cast false positives (null|true|false|"")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		// adding 1 corrects loss of precision from parseFloat (#15100)
		return !jQuery.isArray( obj ) && (obj - parseFloat( obj ) + 1) >= 0;
	},

	isPlainObject: function( obj ) {
		// Not plain objects:
		// - Any object or value whose internal [[Class]] property is not "[object Object]"
		// - DOM nodes
		// - window
		if ( jQuery.type( obj ) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
			return false;
		}

		if ( obj.constructor &&
				!hasOwn.call( obj.constructor.prototype, "isPrototypeOf" ) ) {
			return false;
		}

		// If the function hasn't returned already, we're confident that
		// |obj| is a plain object, created by {} or constructed with new Object
		return true;
	},

	isEmptyObject: function( obj ) {
		var name;
		for ( name in obj ) {
			return false;
		}
		return true;
	},

	type: function( obj ) {
		if ( obj == null ) {
			return obj + "";
		}
		// Support: Android<4.0, iOS<6 (functionish RegExp)
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call(obj) ] || "object" :
			typeof obj;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		var script,
			indirect = eval;

		code = jQuery.trim( code );

		if ( code ) {
			// If the code includes a valid, prologue position
			// strict mode pragma, execute code by injecting a
			// script tag into the document.
			if ( code.indexOf("use strict") === 1 ) {
				script = document.createElement("script");
				script.text = code;
				document.head.appendChild( script ).parentNode.removeChild( script );
			} else {
			// Otherwise, avoid the DOM node creation, insertion
			// and removal by using an indirect global eval
				indirect( code );
			}
		}
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Support: IE9-11+
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	nodeName: function( elem, name ) {
		return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
	},

	// args is for internal usage only
	each: function( obj, callback, args ) {
		var value,
			i = 0,
			length = obj.length,
			isArray = isArraylike( obj );

		if ( args ) {
			if ( isArray ) {
				for ( ; i < length; i++ ) {
					value = callback.apply( obj[ i ], args );

					if ( value === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					value = callback.apply( obj[ i ], args );

					if ( value === false ) {
						break;
					}
				}
			}

		// A special, fast, case for the most common use of each
		} else {
			if ( isArray ) {
				for ( ; i < length; i++ ) {
					value = callback.call( obj[ i ], i, obj[ i ] );

					if ( value === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					value = callback.call( obj[ i ], i, obj[ i ] );

					if ( value === false ) {
						break;
					}
				}
			}
		}

		return obj;
	},

	// Support: Android<4.1
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArraylike( Object(arr) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var value,
			i = 0,
			length = elems.length,
			isArray = isArraylike( elems ),
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArray ) {
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var tmp, args, proxy;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	now: Date.now,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
});

// Populate the class2type map
jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
});

function isArraylike( obj ) {
	var length = obj.length,
		type = jQuery.type( obj );

	if ( type === "function" || jQuery.isWindow( obj ) ) {
		return false;
	}

	if ( obj.nodeType === 1 && length ) {
		return true;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.2.0-pre
 * http://sizzlejs.com/
 *
 * Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-12-16
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// General-purpose constants
	MAX_NEGATIVE = 1 << 31,

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// http://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// Whitespace characters http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",
	// http://www.w3.org/TR/css3-syntax/#characters
	characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

	// Loosely modeled on CSS identifier characters
	// An unquoted value should be a CSS identifier http://www.w3.org/TR/css3-selectors/#attribute-selectors
	// Proper syntax: http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = characterEncoding.replace( "w", "w#" ),

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + characterEncoding + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + characterEncoding + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + characterEncoding + ")" ),
		"CLASS": new RegExp( "^\\.(" + characterEncoding + ")" ),
		"TAG": new RegExp( "^(" + characterEncoding.replace( "w", "w*" ) + ")" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,
	rescape = /'|\\/g,

	// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	};

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var match, elem, m, nodeType,
		// QSA vars
		i, groups, old, nid, newContext, newSelector;

	if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
		setDocument( context );
	}

	context = context || document;
	results = results || [];
	nodeType = context.nodeType;

	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	if ( !seed && documentIsHTML ) {

		// Try to shortcut find operations when possible (e.g., not under DocumentFragment)
		if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {
			// Speed-up: Sizzle("#ID")
			if ( (m = match[1]) ) {
				if ( nodeType === 9 ) {
					elem = context.getElementById( m );
					// Check parentNode to catch when Blackberry 4.6 returns
					// nodes that are no longer in the document (jQuery #6963)
					if ( elem && elem.parentNode ) {
						// Handle the case where IE, Opera, and Webkit return items
						// by name instead of ID
						if ( elem.id === m ) {
							results.push( elem );
							return results;
						}
					} else {
						return results;
					}
				} else {
					// Context is not a document
					if ( context.ownerDocument && (elem = context.ownerDocument.getElementById( m )) &&
						contains( context, elem ) && elem.id === m ) {
						results.push( elem );
						return results;
					}
				}

			// Speed-up: Sizzle("TAG")
			} else if ( match[2] ) {
				push.apply( results, context.getElementsByTagName( selector ) );
				return results;

			// Speed-up: Sizzle(".CLASS")
			} else if ( (m = match[3]) && support.getElementsByClassName ) {
				push.apply( results, context.getElementsByClassName( m ) );
				return results;
			}
		}

		// QSA path
		if ( support.qsa && (!rbuggyQSA || !rbuggyQSA.test( selector )) ) {
			nid = old = expando;
			newContext = context;
			newSelector = nodeType !== 1 && selector;

			// qSA works strangely on Element-rooted queries
			// We can work around this by specifying an extra ID on the root
			// and working up from there (Thanks to Andrew Dupont for the technique)
			// IE 8 doesn't work on object elements
			if ( nodeType === 1 && context.nodeName.toLowerCase() !== "object" ) {
				groups = tokenize( selector );

				if ( (old = context.getAttribute("id")) ) {
					nid = old.replace( rescape, "\\$&" );
				} else {
					context.setAttribute( "id", nid );
				}
				nid = "[id='" + nid + "'] ";

				i = groups.length;
				while ( i-- ) {
					groups[i] = nid + toSelector( groups[i] );
				}
				newContext = rsibling.test( selector ) && testContext( context.parentNode ) || context;
				newSelector = groups.join(",");
			}

			if ( newSelector ) {
				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch(qsaError) {
				} finally {
					if ( !old ) {
						context.removeAttribute("id");
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {Function(string, Object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created div and expects a boolean result
 */
function assert( fn ) {
	var div = document.createElement("div");

	try {
		return !!fn( div );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( div.parentNode ) {
			div.parentNode.removeChild( div );
		}
		// release memory in IE
		div = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = attrs.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			( ~b.sourceIndex || MAX_NEGATIVE ) -
			( ~a.sourceIndex || MAX_NEGATIVE );

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, parent,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// If no document and documentElement is available, return
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Set our document
	document = doc;
	docElem = doc.documentElement;
	parent = doc.defaultView;

	// Support: IE>8
	// If iframe document is assigned to "document" variable and if iframe has been reloaded,
	// IE will throw "permission denied" error when accessing "document" variable, see jQuery #13936
	// IE6-8 do not support the defaultView property so parent will be undefined
	if ( parent && parent !== parent.top ) {
		// IE11 does not have attachEvent, so all must suffer
		if ( parent.addEventListener ) {
			parent.addEventListener( "unload", unloadHandler, false );
		} else if ( parent.attachEvent ) {
			parent.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Support tests
	---------------------------------------------------------------------- */
	documentIsHTML = !isXML( doc );

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( div ) {
		div.className = "i";
		return !div.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( div ) {
		div.appendChild( doc.createComment("") );
		return !div.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( doc.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( div ) {
		docElem.appendChild( div ).id = expando;
		return !doc.getElementsByName || !doc.getElementsByName( expando ).length;
	});

	// ID find and filter
	if ( support.getById ) {
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var m = context.getElementById( id );
				// Check parentNode to catch when Blackberry 4.6 returns
				// nodes that are no longer in the document #6963
				return m && m.parentNode ? [ m ] : [];
			}
		};
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
	} else {
		// Support: IE6/7
		// getElementById is not reliable as a find shortcut
		delete Expr.find["ID"];

		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See http://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( doc.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( div ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// http://bugs.jquery.com/ticket/12359
			docElem.appendChild( div ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\f]' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( div.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !div.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.2+, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.7+
			if ( !div.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibing-combinator selector` fails
			if ( !div.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( div ) {
			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = doc.createElement("input");
			input.setAttribute( "type", "hidden" );
			div.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( div.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":enabled").length ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			div.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( div ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( div, "div" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( div, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully does not implement inclusive descendent
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === doc || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === doc || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === doc ? -1 :
				b === doc ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return doc;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, outerCache, node, diff, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) {
										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {
							// Seek `elem` from a previously-cached index
							outerCache = parent[ expando ] || (parent[ expando ] = {});
							cache = outerCache[ type ] || [];
							nodeIndex = cache[0] === dirruns && cache[1];
							diff = cache[0] === dirruns && cache[2];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									outerCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						// Use previously-cached element index if available
						} else if ( useCache && (cache = (elem[ expando ] || (elem[ expando ] = {}))[ type ]) && cache[0] === dirruns ) {
							diff = cache[1];

						// xml :nth-child(...) or :nth-last-child(...) or :nth(-last)?-of-type(...)
						} else {
							// Use the same loop as above to seek `elem` from the start
							while ( (node = ++nodeIndex && node && node[ dir ] ||
								(diff = nodeIndex = 0) || start.pop()) ) {

								if ( ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) && ++diff ) {
									// Cache the index of each encountered element
									if ( useCache ) {
										(node[ expando ] || (node[ expando ] = {}))[ type ] = [ dirruns, diff ];
									}

									if ( node === elem ) {
										break;
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": function( elem ) {
			return elem.disabled === false;
		},

		"disabled": function( elem ) {
			return elem.disabled === true;
		},

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		checkNonElements = base && dir === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from dir caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});
						if ( (oldCache = outerCache[ dir ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							outerCache[ dir ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context !== document && context;
			}

			// Add elements passing elementMatchers directly to results
			// Keep `i` a string if there are no elements so `matchedCount` will be "00" below
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context, xml ) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// Apply set filters to unmatched elements
			matchedCount += i;
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is no seed and only one group
	if ( match.length === 1 ) {

		// Take a shortcut and set the context if the root selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				support.getById && context.nodeType === 9 && documentIsHTML &&
				Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( div1 ) {
	// Should return 1, but returns 4 (following)
	return div1.compareDocumentPosition( document.createElement("div") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( div ) {
	div.innerHTML = "<a href='#'></a>";
	return div.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( div ) {
	div.innerHTML = "<input/>";
	div.firstChild.setAttribute( "value", "" );
	return div.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( div ) {
	return div.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;
jQuery.expr[":"] = jQuery.expr.pseudos;
jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;



var rneedsContext = jQuery.expr.match.needsContext;

var rsingleTag = (/^<(\w+)\s*\/?>(?:<\/\1>|)$/);



var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			/* jshint -W018 */
			return !!qualifier.call( elem, i, elem ) !== not;
		});

	}

	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		});

	}

	if ( typeof qualifier === "string" ) {
		if ( risSimple.test( qualifier ) ) {
			return jQuery.filter( qualifier, elements, not );
		}

		qualifier = jQuery.filter( qualifier, elements );
	}

	return jQuery.grep( elements, function( elem ) {
		return ( indexOf.call( qualifier, elem ) >= 0 ) !== not;
	});
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	return elems.length === 1 && elem.nodeType === 1 ?
		jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
		jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
			return elem.nodeType === 1;
		}));
};

jQuery.fn.extend({
	find: function( selector ) {
		var i,
			len = this.length,
			ret = [],
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter(function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			}) );
		}

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		// Needed because $( selector, context ) becomes $( context ).find( selector )
		ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
		ret.selector = this.selector ? this.selector + " " + selector : selector;
		return ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow(this, selector || [], false) );
	},
	not: function( selector ) {
		return this.pushStack( winnow(this, selector || [], true) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
});


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,

	init = jQuery.fn.init = function( selector, context ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[0] === "<" && selector[ selector.length - 1 ] === ">" && selector.length >= 3 ) {
				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && (match[1] || !context) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[1] ) {
					context = context instanceof jQuery ? context[0] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[1],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[1] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {
							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[2] );

					// Support: Blackberry 4.6
					// gEBID returns nodes no longer in the document (#6963)
					if ( elem && elem.parentNode ) {
						// Inject the element directly into the jQuery object
						this.length = 1;
						this[0] = elem;
					}

					this.context = document;
					this.selector = selector;
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || rootjQuery ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this.context = this[0] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return typeof rootjQuery.ready !== "undefined" ?
				rootjQuery.ready( selector ) :
				// Execute immediately if ready is not present
				selector( jQuery );
		}

		if ( selector.selector !== undefined ) {
			this.selector = selector.selector;
			this.context = selector.context;
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,
	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.extend({
	dir: function( elem, dir, until ) {
		var matched = [],
			truncate = until !== undefined;

		while ( (elem = elem[ dir ]) && elem.nodeType !== 9 ) {
			if ( elem.nodeType === 1 ) {
				if ( truncate && jQuery( elem ).is( until ) ) {
					break;
				}
				matched.push( elem );
			}
		}
		return matched;
	},

	sibling: function( n, elem ) {
		var matched = [];

		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				matched.push( n );
			}
		}

		return matched;
	}
});

jQuery.fn.extend({
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter(function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[i] ) ) {
					return true;
				}
			}
		});
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
				jQuery( selectors, context || this.context ) :
				0;

		for ( ; i < l; i++ ) {
			for ( cur = this[i]; cur && cur !== context; cur = cur.parentNode ) {
				// Always skip document fragments
				if ( cur.nodeType < 11 && (pos ?
					pos.index(cur) > -1 :

					// Don't pass non-elements to Sizzle
					cur.nodeType === 1 &&
						jQuery.find.matchesSelector(cur, selectors)) ) {

					matched.push( cur );
					break;
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.unique( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.unique(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter(selector)
		);
	}
});

function sibling( cur, dir ) {
	while ( (cur = cur[dir]) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each({
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return jQuery.dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return jQuery.dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return jQuery.dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return jQuery.sibling( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return jQuery.sibling( elem.firstChild );
	},
	contents: function( elem ) {
		return elem.contentDocument || jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {
			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.unique( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
});
var rnotwhite = (/\S+/g);



// String to Object options format cache
var optionsCache = {};

// Convert String-formatted options into Object-formatted ones and store in cache
function createOptions( options ) {
	var object = optionsCache[ options ] = {};
	jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	});
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		( optionsCache[ options ] || createOptions( options ) ) :
		jQuery.extend( {}, options );

	var // Last fire value (for non-forgettable lists)
		memory,
		// Flag to know if list was already fired
		fired,
		// Flag to know if list is currently firing
		firing,
		// First callback to fire (used internally by add and fireWith)
		firingStart,
		// End of the loop when firing
		firingLength,
		// Index of currently firing callback (modified by remove if needed)
		firingIndex,
		// Actual callback list
		list = [],
		// Stack of fire calls for repeatable lists
		stack = !options.once && [],
		// Fire callbacks
		fire = function( data ) {
			memory = options.memory && data;
			fired = true;
			firingIndex = firingStart || 0;
			firingStart = 0;
			firingLength = list.length;
			firing = true;
			for ( ; list && firingIndex < firingLength; firingIndex++ ) {
				if ( list[ firingIndex ].apply( data[ 0 ], data[ 1 ] ) === false && options.stopOnFalse ) {
					memory = false; // To prevent further calls using add
					break;
				}
			}
			firing = false;
			if ( list ) {
				if ( stack ) {
					if ( stack.length ) {
						fire( stack.shift() );
					}
				} else if ( memory ) {
					list = [];
				} else {
					self.disable();
				}
			}
		},
		// Actual Callbacks object
		self = {
			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {
					// First, we save the current length
					var start = list.length;
					(function add( args ) {
						jQuery.each( args, function( _, arg ) {
							var type = jQuery.type( arg );
							if ( type === "function" ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && type !== "string" ) {
								// Inspect recursively
								add( arg );
							}
						});
					})( arguments );
					// Do we need to add the callbacks to the
					// current firing batch?
					if ( firing ) {
						firingLength = list.length;
					// With memory, if we're not firing then
					// we should call right away
					} else if ( memory ) {
						firingStart = start;
						fire( memory );
					}
				}
				return this;
			},
			// Remove a callback from the list
			remove: function() {
				if ( list ) {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );
							// Handle firing indexes
							if ( firing ) {
								if ( index <= firingLength ) {
									firingLength--;
								}
								if ( index <= firingIndex ) {
									firingIndex--;
								}
							}
						}
					});
				}
				return this;
			},
			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ? jQuery.inArray( fn, list ) > -1 : !!( list && list.length );
			},
			// Remove all callbacks from the list
			empty: function() {
				list = [];
				firingLength = 0;
				return this;
			},
			// Have the list do nothing anymore
			disable: function() {
				list = stack = memory = undefined;
				return this;
			},
			// Is it disabled?
			disabled: function() {
				return !list;
			},
			// Lock the list in its current state
			lock: function() {
				stack = undefined;
				if ( !memory ) {
					self.disable();
				}
				return this;
			},
			// Is it locked?
			locked: function() {
				return !stack;
			},
			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( list && ( !fired || stack ) ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					if ( firing ) {
						stack.push( args );
					} else {
						fire( args );
					}
				}
				return this;
			},
			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},
			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


jQuery.extend({

	Deferred: function( func ) {
		var tuples = [
				// action, add listener, listener list, final state
				[ "resolve", "done", jQuery.Callbacks("once memory"), "resolved" ],
				[ "reject", "fail", jQuery.Callbacks("once memory"), "rejected" ],
				[ "notify", "progress", jQuery.Callbacks("memory") ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				then: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;
					return jQuery.Deferred(function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {
							var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];
							// deferred[ done | fail | progress ] for forwarding actions to newDefer
							deferred[ tuple[1] ](function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.done( newDefer.resolve )
										.fail( newDefer.reject )
										.progress( newDefer.notify );
								} else {
									newDefer[ tuple[ 0 ] + "With" ]( this === promise ? newDefer.promise() : this, fn ? [ returned ] : arguments );
								}
							});
						});
						fns = null;
					}).promise();
				},
				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Keep pipe for back-compat
		promise.pipe = promise.then;

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 3 ];

			// promise[ done | fail | progress ] = list.add
			promise[ tuple[1] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(function() {
					// state = [ resolved | rejected ]
					state = stateString;

				// [ reject_list | resolve_list ].disable; progress_list.lock
				}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
			}

			// deferred[ resolve | reject | notify ]
			deferred[ tuple[0] ] = function() {
				deferred[ tuple[0] + "With" ]( this === deferred ? promise : this, arguments );
				return this;
			};
			deferred[ tuple[0] + "With" ] = list.fireWith;
		});

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( subordinate /* , ..., subordinateN */ ) {
		var i = 0,
			resolveValues = slice.call( arguments ),
			length = resolveValues.length,

			// the count of uncompleted subordinates
			remaining = length !== 1 || ( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,

			// the master Deferred. If resolveValues consist of only a single Deferred, just use that.
			deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

			// Update function for both resolve and progress values
			updateFunc = function( i, contexts, values ) {
				return function( value ) {
					contexts[ i ] = this;
					values[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( values === progressValues ) {
						deferred.notifyWith( contexts, values );
					} else if ( !( --remaining ) ) {
						deferred.resolveWith( contexts, values );
					}
				};
			},

			progressValues, progressContexts, resolveContexts;

		// Add listeners to Deferred subordinates; treat others as resolved
		if ( length > 1 ) {
			progressValues = new Array( length );
			progressContexts = new Array( length );
			resolveContexts = new Array( length );
			for ( ; i < length; i++ ) {
				if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
					resolveValues[ i ].promise()
						.done( updateFunc( i, resolveContexts, resolveValues ) )
						.fail( deferred.reject )
						.progress( updateFunc( i, progressContexts, progressValues ) );
				} else {
					--remaining;
				}
			}
		}

		// If we're not waiting on anything, resolve the master
		if ( !remaining ) {
			deferred.resolveWith( resolveContexts, resolveValues );
		}

		return deferred.promise();
	}
});


// The deferred used on DOM ready
var readyList;

jQuery.fn.ready = function( fn ) {
	// Add the callback
	jQuery.ready.promise().done( fn );

	return this;
};

jQuery.extend({
	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Hold (or release) the ready event
	holdReady: function( hold ) {
		if ( hold ) {
			jQuery.readyWait++;
		} else {
			jQuery.ready( true );
		}
	},

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );

		// Trigger any bound ready events
		if ( jQuery.fn.triggerHandler ) {
			jQuery( document ).triggerHandler( "ready" );
			jQuery( document ).off( "ready" );
		}
	}
});

/**
 * The ready event handler and self cleanup method
 */
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed, false );
	window.removeEventListener( "load", completed, false );
	jQuery.ready();
}

jQuery.ready.promise = function( obj ) {
	if ( !readyList ) {

		readyList = jQuery.Deferred();

		// Catch cases where $(document).ready() is called after the browser event has already occurred.
		// We once tried to use readyState "interactive" here, but it caused issues like the one
		// discovered by ChrisS here: http://bugs.jquery.com/ticket/12282#comment:15
		if ( document.readyState === "complete" ) {
			// Handle it asynchronously to allow scripts the opportunity to delay ready
			setTimeout( jQuery.ready );

		} else {

			// Use the handy event callback
			document.addEventListener( "DOMContentLoaded", completed, false );

			// A fallback to window.onload, that will always work
			window.addEventListener( "load", completed, false );
		}
	}
	return readyList.promise( obj );
};

// Kick off the DOM ready check even if the user does not
jQuery.ready.promise();




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = jQuery.access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( jQuery.type( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			jQuery.access( elems, fn, i, key[i], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !jQuery.isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {
			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn( elems[i], key, raw ? value : value.call( elems[i], i, fn( elems[i], key ) ) );
			}
		}
	}

	return chainable ?
		elems :

		// Gets
		bulk ?
			fn.call( elems ) :
			len ? fn( elems[0], key ) : emptyGet;
};


/**
 * Determines whether an object can have data
 */
jQuery.acceptData = function( owner ) {
	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	/* jshint -W018 */
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};


function Data() {
	// Support: Android<4,
	// Old WebKit does not have Object.preventExtensions/freeze method,
	// return new empty object instead with no [[set]] accessor
	Object.defineProperty( this.cache = {}, 0, {
		get: function() {
			return {};
		}
	});

	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;
Data.accepts = jQuery.acceptData;

Data.prototype = {
	key: function( owner ) {
		// We can accept data for non-element nodes in modern browsers,
		// but we should not, see #8335.
		// Always return the key for a frozen object.
		if ( !Data.accepts( owner ) ) {
			return 0;
		}

		var descriptor = {},
			// Check if the owner object already has a cache key
			unlock = owner[ this.expando ];

		// If not, create one
		if ( !unlock ) {
			unlock = Data.uid++;

			// Secure it in a non-enumerable, non-writable property
			try {
				descriptor[ this.expando ] = { value: unlock };
				Object.defineProperties( owner, descriptor );

			// Support: Android<4
			// Fallback to a less secure definition
			} catch ( e ) {
				descriptor[ this.expando ] = unlock;
				jQuery.extend( owner, descriptor );
			}
		}

		// Ensure the cache object
		if ( !this.cache[ unlock ] ) {
			this.cache[ unlock ] = {};
		}

		return unlock;
	},
	set: function( owner, data, value ) {
		var prop,
			// There may be an unlock assigned to this node,
			// if there is no entry for this "owner", create one inline
			// and set the unlock as though an owner entry had always existed
			unlock = this.key( owner ),
			cache = this.cache[ unlock ];

		// Handle: [ owner, key, value ] args
		if ( typeof data === "string" ) {
			cache[ data ] = value;

		// Handle: [ owner, { properties } ] args
		} else {
			// Fresh assignments by object are shallow copied
			if ( jQuery.isEmptyObject( cache ) ) {
				jQuery.extend( this.cache[ unlock ], data );
			// Otherwise, copy the properties one-by-one to the cache object
			} else {
				for ( prop in data ) {
					cache[ prop ] = data[ prop ];
				}
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		// Either a valid cache is found, or will be created.
		// New caches will be created and the unlock returned,
		// allowing direct access to the newly created
		// empty data object. A valid owner object must be provided.
		var cache = this.cache[ this.key( owner ) ];

		return key === undefined ?
			cache : cache[ key ];
	},
	access: function( owner, key, value ) {
		var stored;
		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				((key && typeof key === "string") && value === undefined) ) {

			stored = this.get( owner, key );

			return stored !== undefined ?
				stored : this.get( owner, jQuery.camelCase(key) );
		}

		// [*]When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i, name, camel,
			unlock = this.key( owner ),
			cache = this.cache[ unlock ];

		if ( key === undefined ) {
			this.cache[ unlock ] = {};

		} else {
			// Support array or space separated string of keys
			if ( jQuery.isArray( key ) ) {
				// If "name" is an array of keys...
				// When data is initially created, via ("key", "val") signature,
				// keys will be converted to camelCase.
				// Since there is no way to tell _how_ a key was added, remove
				// both plain key and camelCase key. #12786
				// This will only penalize the array argument path.
				name = key.concat( key.map( jQuery.camelCase ) );
			} else {
				camel = jQuery.camelCase( key );
				// Try the string as a key before any manipulation
				if ( key in cache ) {
					name = [ key, camel ];
				} else {
					// If a key with the spaces exists, use it.
					// Otherwise, create an array by matching non-whitespace
					name = camel;
					name = name in cache ?
						[ name ] : ( name.match( rnotwhite ) || [] );
				}
			}

			i = name.length;
			while ( i-- ) {
				delete cache[ name[ i ] ];
			}
		}
	},
	hasData: function( owner ) {
		return !jQuery.isEmptyObject(
			this.cache[ owner[ this.expando ] ] || {}
		);
	},
	discard: function( owner ) {
		if ( owner[ this.expando ] ) {
			delete this.cache[ owner[ this.expando ] ];
		}
	}
};
var data_priv = new Data();

var data_user = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /([A-Z])/g;

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$1" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = data === "true" ? true :
					data === "false" ? false :
					data === "null" ? null :
					// Only convert to a number if it doesn't change the string
					+data + "" === data ? +data :
					rbrace.test( data ) ? jQuery.parseJSON( data ) :
					data;
			} catch( e ) {}

			// Make sure we set the data so it isn't changed later
			data_user.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend({
	hasData: function( elem ) {
		return data_user.hasData( elem ) || data_priv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return data_user.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		data_user.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to data_priv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return data_priv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		data_priv.remove( elem, name );
	}
});

jQuery.fn.extend({
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = data_user.get( elem );

				if ( elem.nodeType === 1 && !data_priv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE11+
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = jQuery.camelCase( name.slice(5) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					data_priv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each(function() {
				data_user.set( this, key );
			});
		}

		return access( this, function( value ) {
			var data,
				camelKey = jQuery.camelCase( key );

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {
				// Attempt to get data from the cache
				// with the key as-is
				data = data_user.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to get data from the cache
				// with the key camelized
				data = data_user.get( elem, camelKey );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, camelKey, undefined );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each(function() {
				// First, attempt to store a copy or reference of any
				// data that might've been store with a camelCased key.
				var data = data_user.get( this, camelKey );

				// For HTML5 data-* attribute interop, we have to
				// store property names with dashes in a camelCase form.
				// This might not apply to all properties...*
				data_user.set( this, camelKey, value );

				// *... In the case of properties that might _actually_
				// have dashes, we need to also store a copy of that
				// unchanged property.
				if ( key.indexOf("-") !== -1 && data !== undefined ) {
					data_user.set( this, key, value );
				}
			});
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each(function() {
			data_user.remove( this, key );
		});
	}
});


jQuery.extend({
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = data_priv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || jQuery.isArray( data ) ) {
					queue = data_priv.access( elem, type, jQuery.makeArray(data) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return data_priv.get( elem, key ) || data_priv.access( elem, key, {
			empty: jQuery.Callbacks("once memory").add(function() {
				data_priv.remove( elem, [ type + "queue", key ] );
			})
		});
	}
});

jQuery.fn.extend({
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[0], type );
		}

		return data === undefined ?
			this :
			this.each(function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[0] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			});
	},
	dequeue: function( type ) {
		return this.each(function() {
			jQuery.dequeue( this, type );
		});
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},
	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = data_priv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
});
var pnum = (/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;

var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHidden = function( elem, el ) {
		// isHidden might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;
		return jQuery.css( elem, "display" ) === "none" || !jQuery.contains( elem.ownerDocument, elem );
	};

var rcheckableType = (/^(?:checkbox|radio)$/i);



(function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Safari<=5.1
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Safari<=5.1, Android<4.2
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE<=11+
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
})();
var strundefined = typeof undefined;



support.focusinBubbles = "onfocusin" in window;


var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu)|click/,
	rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = data_priv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !(events = elemData.events) ) {
			events = elemData.events = {};
		}
		if ( !(eventHandle = elemData.handle) ) {
			eventHandle = elemData.handle = function( e ) {
				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== strundefined && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnotwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[t] ) || [];
			type = origType = tmp[1];
			namespaces = ( tmp[2] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend({
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join(".")
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !(handlers = events[ type ]) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup || special.setup.call( elem, data, namespaces, eventHandle ) === false ) {
					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle, false );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = data_priv.hasData( elem ) && data_priv.get( elem );

		if ( !elemData || !(events = elemData.events) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnotwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[t] ) || [];
			type = origType = tmp[1];
			namespaces = ( tmp[2] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[2] && new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector || selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown || special.teardown.call( elem, namespaces, elemData.handle ) === false ) {
					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			delete elemData.handle;
			data_priv.remove( elem, "events" );
		}
	},

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split(".") : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf(".") >= 0 ) {
			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split(".");
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf(":") < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join(".");
		event.namespace_re = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === (elem.ownerDocument || document) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( (cur = eventPath[i++]) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( data_priv.get( cur, "events" ) || {} )[ event.type ] && data_priv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && jQuery.acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( (!special._default || special._default.apply( eventPath.pop(), data ) === false) &&
				jQuery.acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					elem[ type ]();
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	dispatch: function( event ) {

		// Make a writable jQuery.Event from the native event object
		event = jQuery.event.fix( event );

		var i, j, ret, matched, handleObj,
			handlerQueue = [],
			args = slice.call( arguments ),
			handlers = ( data_priv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[0] = event;
		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( (matched = handlerQueue[ i++ ]) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( (handleObj = matched.handlers[ j++ ]) && !event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.namespace_re || event.namespace_re.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( (jQuery.event.special[ handleObj.origType ] || {}).handle || handleObj.handler )
							.apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( (event.result = ret) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, matches, sel, handleObj,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		// Black-hole SVG <use> instance trees (#13180)
		// Avoid non-left-click bubbling in Firefox (#3861)
		if ( delegateCount && cur.nodeType && (!event.button || event.type !== "click") ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.disabled !== true || event.type !== "click" ) {
					matches = [];
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matches[ sel ] === undefined ) {
							matches[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) >= 0 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matches[ sel ] ) {
							matches.push( handleObj );
						}
					}
					if ( matches.length ) {
						handlerQueue.push({ elem: cur, handlers: matches });
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		if ( delegateCount < handlers.length ) {
			handlerQueue.push({ elem: this, handlers: handlers.slice( delegateCount ) });
		}

		return handlerQueue;
	},

	// Includes some event props shared by KeyEvent and MouseEvent
	props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),

	fixHooks: {},

	keyHooks: {
		props: "char charCode key keyCode".split(" "),
		filter: function( event, original ) {

			// Add which for key events
			if ( event.which == null ) {
				event.which = original.charCode != null ? original.charCode : original.keyCode;
			}

			return event;
		}
	},

	mouseHooks: {
		props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
		filter: function( event, original ) {
			var eventDoc, doc, body,
				button = original.button;

			// Calculate pageX/Y if missing and clientX/Y available
			if ( event.pageX == null && original.clientX != null ) {
				eventDoc = event.target.ownerDocument || document;
				doc = eventDoc.documentElement;
				body = eventDoc.body;

				event.pageX = original.clientX + ( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) - ( doc && doc.clientLeft || body && body.clientLeft || 0 );
				event.pageY = original.clientY + ( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) - ( doc && doc.clientTop  || body && body.clientTop  || 0 );
			}

			// Add which for click: 1 === left; 2 === middle; 3 === right
			// Note: button is not normalized, so don't use it
			if ( !event.which && button !== undefined ) {
				event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
			}

			return event;
		}
	},

	fix: function( event ) {
		if ( event[ jQuery.expando ] ) {
			return event;
		}

		// Create a writable copy of the event object and normalize some properties
		var i, prop, copy,
			type = event.type,
			originalEvent = event,
			fixHook = this.fixHooks[ type ];

		if ( !fixHook ) {
			this.fixHooks[ type ] = fixHook =
				rmouseEvent.test( type ) ? this.mouseHooks :
				rkeyEvent.test( type ) ? this.keyHooks :
				{};
		}
		copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

		event = new jQuery.Event( originalEvent );

		i = copy.length;
		while ( i-- ) {
			prop = copy[ i ];
			event[ prop ] = originalEvent[ prop ];
		}

		// Support: Cordova 2.5 (WebKit) (#13255)
		// All events should have a target; Cordova deviceready doesn't
		if ( !event.target ) {
			event.target = document;
		}

		// Support: Safari 6.0+, Chrome<28
		// Target should not be a text node (#504, #13143)
		if ( event.target.nodeType === 3 ) {
			event.target = event.target.parentNode;
		}

		return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
	},

	special: {
		load: {
			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {
			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {
			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return jQuery.nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	},

	simulate: function( type, elem, event, bubble ) {
		// Piggyback on a donor event to simulate a different one.
		// Fake originalEvent to avoid donor's stopPropagation, but if the
		// simulated event prevents default then we do the same on the donor.
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true,
				originalEvent: {}
			}
		);
		if ( bubble ) {
			jQuery.event.trigger( e, null, elem );
		} else {
			jQuery.event.dispatch.call( elem, e );
		}
		if ( e.isDefaultPrevented() ) {
			event.preventDefault();
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle, false );
	}
};

jQuery.Event = function( src, props ) {
	// Allow instantiation without the 'new' keyword
	if ( !(this instanceof jQuery.Event) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&
				// Support: Android<4.0
				src.returnValue === false ?
			returnTrue :
			returnFalse;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && e.preventDefault ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && e.stopPropagation ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && e.stopImmediatePropagation ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Create mouseenter/leave events using mouseover/out and event-time checks
// Support: Chrome 15+
jQuery.each({
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mousenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || (related !== target && !jQuery.contains( target, related )) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
});

// Support: Firefox, Chrome, Safari
// Create "bubbling" focus and blur events
if ( !support.focusinBubbles ) {
	jQuery.each({ focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ), true );
			};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = data_priv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				data_priv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = data_priv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					data_priv.remove( doc, fix );

				} else {
					data_priv.access( doc, fix, attaches );
				}
			}
		};
	});
}

jQuery.fn.extend({

	on: function( types, selector, data, fn, /*INTERNAL*/ one ) {
		var origFn, type;

		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {
			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {
				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				this.on( type, selector, data, types[ type ], one );
			}
			return this;
		}

		if ( data == null && fn == null ) {
			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {
				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {
				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return this;
		}

		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {
				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};
			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return this.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		});
	},
	one: function( types, selector, data, fn ) {
		return this.on( types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {
			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {
			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {
			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each(function() {
			jQuery.event.remove( this, types, fn, selector );
		});
	},

	trigger: function( type, data ) {
		return this.each(function() {
			jQuery.event.trigger( type, data, this );
		});
	},
	triggerHandler: function( type, data ) {
		var elem = this[0];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
});


var
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
	rtagName = /<([\w:]+)/,
	rhtml = /<|&#?\w+;/,
	rnoInnerhtml = /<(?:script|style|link)/i,
	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptType = /^$|\/(?:java|ecma)script/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,

	// We have to close these tags to support XHTML (#13200)
	wrapMap = {

		// Support: IE9
		option: [ 1, "<select multiple='multiple'>", "</select>" ],

		thead: [ 1, "<table>", "</table>" ],
		col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

		_default: [ 0, "", "" ]
	};

// Support: IE9
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

// Support: 1.x compatibility
// Manipulating tables requires a tbody
function manipulationTarget( elem, content ) {
	return jQuery.nodeName( elem, "table" ) &&
		jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ?

		elem.getElementsByTagName("tbody")[0] ||
			elem.appendChild( elem.ownerDocument.createElement("tbody") ) :
		elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );

	if ( match ) {
		elem.type = match[ 1 ];
	} else {
		elem.removeAttribute("type");
	}

	return elem;
}

// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		data_priv.set(
			elems[ i ], "globalEval", !refElements || data_priv.get( refElements[ i ], "globalEval" )
		);
	}
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( data_priv.hasData( src ) ) {
		pdataOld = data_priv.access( src );
		pdataCur = data_priv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( data_user.hasData( src ) ) {
		udataOld = data_user.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		data_user.set( dest, udataCur );
	}
}

function getAll( context, tag ) {
	var ret = context.getElementsByTagName ? context.getElementsByTagName( tag || "*" ) :
			context.querySelectorAll ? context.querySelectorAll( tag || "*" ) :
			[];

	return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
		jQuery.merge( [ context ], ret ) :
		ret;
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

jQuery.extend({
	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	buildFragment: function( elems, context, scripts, selection ) {
		var elem, tmp, tag, wrap, contains, j,
			fragment = context.createDocumentFragment(),
			nodes = [],
			i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			elem = elems[ i ];

			if ( elem || elem === 0 ) {

				// Add nodes directly
				if ( jQuery.type( elem ) === "object" ) {
					// Support: QtWebKit, PhantomJS
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );

				// Convert html into DOM nodes
				} else {
					tmp = tmp || fragment.appendChild( context.createElement("div") );

					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;
					tmp.innerHTML = wrap[ 1 ] + elem.replace( rxhtmlTag, "<$1></$2>" ) + wrap[ 2 ];

					// Descend through wrappers to the right content
					j = wrap[ 0 ];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}

					// Support: QtWebKit, PhantomJS
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, tmp.childNodes );

					// Remember the top-level container
					tmp = fragment.firstChild;

					// Ensure the created nodes are orphaned (#12392)
					tmp.textContent = "";
				}
			}
		}

		// Remove wrapper from fragment
		fragment.textContent = "";

		i = 0;
		while ( (elem = nodes[ i++ ]) ) {

			// #4087 - If origin and destination elements are the same, and this is
			// that element, do not do anything
			if ( selection && jQuery.inArray( elem, selection ) !== -1 ) {
				continue;
			}

			contains = jQuery.contains( elem.ownerDocument, elem );

			// Append to fragment
			tmp = getAll( fragment.appendChild( elem ), "script" );

			// Preserve script evaluation history
			if ( contains ) {
				setGlobalEval( tmp );
			}

			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( (elem = tmp[ j++ ]) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}

		return fragment;
	},

	cleanData: function( elems ) {
		var data, elem, type, key,
			special = jQuery.event.special,
			i = 0;

		for ( ; (elem = elems[ i ]) !== undefined; i++ ) {
			if ( jQuery.acceptData( elem ) ) {
				key = elem[ data_priv.expando ];

				if ( key && (data = data_priv.cache[ key ]) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}
					if ( data_priv.cache[ key ] ) {
						// Discard any remaining `private` data
						delete data_priv.cache[ key ];
					}
				}
			}
			// Discard any remaining `user` data
			delete data_user.cache[ elem[ data_user.expando ] ];
		}
	}
});

jQuery.fn.extend({
	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each(function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				});
		}, null, value, arguments.length );
	},

	append: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		});
	},

	prepend: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		});
	},

	before: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		});
	},

	after: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		});
	},

	remove: function( selector, keepData /* Internal Use Only */ ) {
		var elem,
			elems = selector ? jQuery.filter( selector, this ) : this,
			i = 0;

		for ( ; (elem = elems[i]) != null; i++ ) {
			if ( !keepData && elem.nodeType === 1 ) {
				jQuery.cleanData( getAll( elem ) );
			}

			if ( elem.parentNode ) {
				if ( keepData && jQuery.contains( elem.ownerDocument, elem ) ) {
					setGlobalEval( getAll( elem, "script" ) );
				}
				elem.parentNode.removeChild( elem );
			}
		}

		return this;
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; (elem = this[i]) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map(function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		});
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = value.replace( rxhtmlTag, "<$1></$2>" );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var arg = arguments[ 0 ];

		// Make the changes, replacing each context element with the new content
		this.domManip( arguments, function( elem ) {
			arg = this.parentNode;

			jQuery.cleanData( getAll( this ) );

			if ( arg ) {
				arg.replaceChild( elem, this );
			}
		});

		// Force removal if there was no new content (e.g., from empty arguments)
		return arg && (arg.length || arg.nodeType) ? this : this.remove();
	},

	detach: function( selector ) {
		return this.remove( selector, true );
	},

	domManip: function( args, callback ) {

		// Flatten any nested arrays
		args = concat.apply( [], args );

		var fragment, first, scripts, hasScripts, node, doc,
			i = 0,
			l = this.length,
			set = this,
			iNoClone = l - 1,
			value = args[ 0 ],
			isFunction = jQuery.isFunction( value );

		// We can't cloneNode fragments that contain checked, in WebKit
		if ( isFunction ||
				( l > 1 && typeof value === "string" &&
					!support.checkClone && rchecked.test( value ) ) ) {
			return this.each(function( index ) {
				var self = set.eq( index );
				if ( isFunction ) {
					args[ 0 ] = value.call( this, index, self.html() );
				}
				self.domManip( args, callback );
			});
		}

		if ( l ) {
			fragment = jQuery.buildFragment( args, this[ 0 ].ownerDocument, false, this );
			first = fragment.firstChild;

			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}

			if ( first ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;

				// Use the original fragment for the last item instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;

					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );

						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {
							// Support: QtWebKit
							// jQuery.merge because push.apply(_, arraylike) throws
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}

					callback.call( this[ i ], node, i );
				}

				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;

					// Reenable scripts
					jQuery.map( scripts, restoreScript );

					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!data_priv.access( node, "globalEval" ) && jQuery.contains( doc, node ) ) {

							if ( node.src ) {
								// Optional AJAX dependency, but won't run scripts if not present
								if ( jQuery._evalUrl ) {
									jQuery._evalUrl( node.src );
								}
							} else {
								jQuery.globalEval( node.textContent.replace( rcleanScript, "" ) );
							}
						}
					}
				}
			}
		}

		return this;
	}
});

jQuery.each({
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: QtWebKit
			// .get() because push.apply(_, arraylike) throws
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
});


var iframe,
	elemdisplay = {};

/**
 * Retrieve the actual display of a element
 * @param {String} name nodeName of the element
 * @param {Object} doc Document object
 */
// Called only from within defaultDisplay
function actualDisplay( name, doc ) {
	var style,
		elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),

		// getDefaultComputedStyle might be reliably used only on attached element
		display = window.getDefaultComputedStyle && ( style = window.getDefaultComputedStyle( elem[ 0 ] ) ) ?

			// Use of this method is a temporary fix (more like optimization) until something better comes along,
			// since it was removed from specification and supported only in FF
			style.display : jQuery.css( elem[ 0 ], "display" );

	// We don't have any data stored on the element,
	// so use "detach" method as fast way to get rid of the element
	elem.detach();

	return display;
}

/**
 * Try to determine the default display value of an element
 * @param {String} nodeName
 */
function defaultDisplay( nodeName ) {
	var doc = document,
		display = elemdisplay[ nodeName ];

	if ( !display ) {
		display = actualDisplay( nodeName, doc );

		// If the simple way fails, read from inside an iframe
		if ( display === "none" || !display ) {

			// Use the already-created iframe if possible
			iframe = (iframe || jQuery( "<iframe frameborder='0' width='0' height='0'/>" )).appendTo( doc.documentElement );

			// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
			doc = iframe[ 0 ].contentDocument;

			// Support: IE
			doc.write();
			doc.close();

			display = actualDisplay( nodeName, doc );
			iframe.detach();
		}

		// Store the correct default display
		elemdisplay[ nodeName ] = display;
	}

	return display;
}
var rmargin = (/^margin/);

var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {
		// Support: IE<=11+, Firefox<=30+ (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		if ( elem.ownerDocument.defaultView.opener ) {
			return elem.ownerDocument.defaultView.getComputedStyle( elem, null );
		}

		return window.getComputedStyle( elem, null );
	};



function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,
		style = elem.style;

	computed = computed || getStyles( elem );

	// Support: IE9
	// getPropertyValue is only needed for .css('filter') (#12537)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];
	}

	if ( computed ) {

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// Support: iOS < 6
		// A tribute to the "awesome hack by Dean Edwards"
		// iOS < 6 (at least) returns percentage for a larger set of values, but width seems to be reliably pixels
		// this is against the CSSOM draft spec: http://dev.w3.org/csswg/cssom/#resolved-values
		if ( rnumnonpx.test( ret ) && rmargin.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?
		// Support: IE
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {
	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {
				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return (this.get = hookFn).apply( this, arguments );
		}
	};
}


(function() {
	var pixelPositionVal, boxSizingReliableVal,
		docElem = document.documentElement,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	if ( !div.style ) {
		return;
	}

	// Support: IE9-11+
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	container.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;" +
		"position:absolute";
	container.appendChild( div );

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computePixelPositionAndBoxSizingReliable() {
		div.style.cssText =
			// Support: Firefox<29, Android 2.3
			// Vendor-prefix box-sizing
			"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;" +
			"box-sizing:border-box;display:block;margin-top:1%;top:1%;" +
			"border:1px;padding:1px;width:4px;position:absolute";
		div.innerHTML = "";
		docElem.appendChild( container );

		var divStyle = window.getComputedStyle( div, null );
		pixelPositionVal = divStyle.top !== "1%";
		boxSizingReliableVal = divStyle.width === "4px";

		docElem.removeChild( container );
	}

	// Support: node.js jsdom
	// Don't assume that getComputedStyle is a property of the global object
	if ( window.getComputedStyle ) {
		jQuery.extend( support, {
			pixelPosition: function() {

				// This test is executed only once but we still do memoizing
				// since we can use the boxSizingReliable pre-computing.
				// No need to check if the test was already performed, though.
				computePixelPositionAndBoxSizingReliable();
				return pixelPositionVal;
			},
			boxSizingReliable: function() {
				if ( boxSizingReliableVal == null ) {
					computePixelPositionAndBoxSizingReliable();
				}
				return boxSizingReliableVal;
			},
			reliableMarginRight: function() {

				// Support: Android 2.3
				// Check if div with explicit width and no margin-right incorrectly
				// gets computed margin-right based on width of container. (#3333)
				// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
				// This support function is only executed once so no memoizing is needed.
				var ret,
					marginDiv = div.appendChild( document.createElement( "div" ) );

				// Reset CSS: box-sizing; display; margin; border; padding
				marginDiv.style.cssText = div.style.cssText =
					// Support: Firefox<29, Android 2.3
					// Vendor-prefix box-sizing
					"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" +
					"box-sizing:content-box;display:block;margin:0;border:0;padding:0";
				marginDiv.style.marginRight = marginDiv.style.width = "0";
				div.style.width = "1px";
				docElem.appendChild( container );

				ret = !parseFloat( window.getComputedStyle( marginDiv, null ).marginRight );

				docElem.removeChild( container );
				div.removeChild( marginDiv );

				return ret;
			}
		});
	}
})();


// A method for quickly swapping in/out CSS properties to get correct calculations.
jQuery.swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var
	// Swappable if display is none or starts with table except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rnumsplit = new RegExp( "^(" + pnum + ")(.*)$", "i" ),
	rrelNum = new RegExp( "^([+-])=(" + pnum + ")", "i" ),

	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "O", "Moz", "ms" ];

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( style, name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in style ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[0].toUpperCase() + name.slice(1),
		origName = name,
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in style ) {
			return name;
		}
	}

	return origName;
}

function setPositiveNumber( elem, value, subtract ) {
	var matches = rnumsplit.exec( value );
	return matches ?
		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 1 ] - ( subtract || 0 ) ) + ( matches[ 2 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i = extra === ( isBorderBox ? "border" : "content" ) ?
		// If we already have the right measurement, avoid augmentation
		4 :
		// Otherwise initialize for horizontal or vertical properties
		name === "width" ? 1 : 0,

		val = 0;

	for ( ; i < 4; i += 2 ) {
		// Both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {
			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// At this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {
			// At this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// At this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with offset property, which is equivalent to the border-box value
	var valueIsBorderBox = true,
		val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
		styles = getStyles( elem ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// Some non-html elements return undefined for offsetWidth, so check for null/undefined
	// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
	// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
	if ( val <= 0 || val == null ) {
		// Fall back to computed then uncomputed css if necessary
		val = curCSS( elem, name, styles );
		if ( val < 0 || val == null ) {
			val = elem.style[ name ];
		}

		// Computed unit is not pixels. Stop here and return.
		if ( rnumnonpx.test(val) ) {
			return val;
		}

		// Check for style in case a browser which returns unreliable values
		// for getComputedStyle silently falls back to the reliable elem.style
		valueIsBorderBox = isBorderBox &&
			( support.boxSizingReliable() || val === elem.style[ name ] );

		// Normalize "", auto, and prepare for extra
		val = parseFloat( val ) || 0;
	}

	// Use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

function showHide( elements, show ) {
	var display, elem, hidden,
		values = [],
		index = 0,
		length = elements.length;

	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		values[ index ] = data_priv.get( elem, "olddisplay" );
		display = elem.style.display;
		if ( show ) {
			// Reset the inline display of this element to learn if it is
			// being hidden by cascaded rules or not
			if ( !values[ index ] && display === "none" ) {
				elem.style.display = "";
			}

			// Set elements which have been overridden with display: none
			// in a stylesheet to whatever the default browser style is
			// for such an element
			if ( elem.style.display === "" && isHidden( elem ) ) {
				values[ index ] = data_priv.access( elem, "olddisplay", defaultDisplay(elem.nodeName) );
			}
		} else {
			hidden = isHidden( elem );

			if ( display !== "none" || !hidden ) {
				data_priv.set( elem, "olddisplay", hidden ? display : jQuery.css( elem, "display" ) );
			}
		}
	}

	// Set the display of most of the elements in a second loop
	// to avoid the constant reflow
	for ( index = 0; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}
		if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
			elem.style.display = show ? values[ index ] || "" : "none";
		}
	}

	return elements;
}

jQuery.extend({

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {
		"float": "cssFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			style = elem.style;

		name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( style, origName ) );

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && (ret = rrelNum.exec( value )) ) {
				value = ( ret[1] + 1 ) * ret[2] + parseFloat( jQuery.css( elem, name ) );
				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number, add 'px' to the (except for certain CSS properties)
			if ( type === "number" && !jQuery.cssNumber[ origName ] ) {
				value += "px";
			}

			// Support: IE9-11+
			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !("set" in hooks) || (value = hooks.set( elem, value, extra )) !== undefined ) {
				style[ name ] = value;
			}

		} else {
			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks && (ret = hooks.get( elem, false, extra )) !== undefined ) {
				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = jQuery.camelCase( name );

		// Make sure that we're working with the right name
		name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( elem.style, origName ) );

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || jQuery.isNumeric( num ) ? num || 0 : val;
		}
		return val;
	}
});

jQuery.each([ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) && elem.offsetWidth === 0 ?
					jQuery.swap( elem, cssShow, function() {
						return getWidthOrHeight( elem, name, extra );
					}) :
					getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var styles = extra && getStyles( elem );
			return setPositiveNumber( elem, value, extra ?
				augmentWidthOrHeight(
					elem,
					name,
					extra,
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				) : 0
			);
		}
	};
});

// Support: Android 2.3
jQuery.cssHooks.marginRight = addGetHookIf( support.reliableMarginRight,
	function( elem, computed ) {
		if ( computed ) {
			return jQuery.swap( elem, { "display": "inline-block" },
				curCSS, [ elem, "marginRight" ] );
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each({
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split(" ") : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
});

jQuery.fn.extend({
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( jQuery.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	},
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each(function() {
			if ( isHidden( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		});
	}
});


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || "swing";
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			if ( tween.elem[ tween.prop ] != null &&
				(!tween.elem.style || tween.elem.style[ tween.prop ] == null) ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );
			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {
			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.style && ( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null || jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE9
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	}
};

jQuery.fx = Tween.prototype.init;

// Back Compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, timerId,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rfxnum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" ),
	rrun = /queueHooks$/,
	animationPrefilters = [ defaultPrefilter ],
	tweeners = {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value ),
				target = tween.cur(),
				parts = rfxnum.exec( value ),
				unit = parts && parts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

				// Starting value computation is required for potential unit mismatches
				start = ( jQuery.cssNumber[ prop ] || unit !== "px" && +target ) &&
					rfxnum.exec( jQuery.css( tween.elem, prop ) ),
				scale = 1,
				maxIterations = 20;

			if ( start && start[ 3 ] !== unit ) {
				// Trust units reported by jQuery.css
				unit = unit || start[ 3 ];

				// Make sure we update the tween properties later on
				parts = parts || [];

				// Iteratively approximate from a nonzero starting point
				start = +target || 1;

				do {
					// If previous iteration zeroed out, double until we get *something*.
					// Use string for doubling so we don't accidentally see scale as unchanged below
					scale = scale || ".5";

					// Adjust and apply
					start = start / scale;
					jQuery.style( tween.elem, prop, start + unit );

				// Update scale, tolerating zero or NaN from tween.cur(),
				// break the loop if scale is unchanged or perfect, or if we've just had enough
				} while ( scale !== (scale = tween.cur() / target) && scale !== 1 && --maxIterations );
			}

			// Update tween properties
			if ( parts ) {
				start = tween.start = +start || +target || 0;
				tween.unit = unit;
				// If a +=/-= token was provided, we're doing a relative animation
				tween.end = parts[ 1 ] ?
					start + ( parts[ 1 ] + 1 ) * parts[ 2 ] :
					+parts[ 2 ];
			}

			return tween;
		} ]
	};

// Animations created synchronously will run synchronously
function createFxNow() {
	setTimeout(function() {
		fxNow = undefined;
	});
	return ( fxNow = jQuery.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4 ; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( tweeners[ prop ] || [] ).concat( tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( (tween = collection[ index ].call( animation, prop, value )) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	/* jshint validthis: true */
	var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHidden( elem ),
		dataShow = data_priv.get( elem, "fxshow" );

	// Handle queue: false promises
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always(function() {
			// Ensure the complete handler is called before this completes
			anim.always(function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			});
		});
	}

	// Height/width overflow pass
	if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {
		// Make sure that nothing sneaks out
		// Record all 3 overflow attributes because IE9-10 do not
		// change the overflow attribute when overflowX and
		// overflowY are set to the same value
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Set display property to inline-block for height/width
		// animations on inline elements that are having width/height animated
		display = jQuery.css( elem, "display" );

		// Test default display if display is currently "none"
		checkDisplay = display === "none" ?
			data_priv.get( elem, "olddisplay" ) || defaultDisplay( elem.nodeName ) : display;

		if ( checkDisplay === "inline" && jQuery.css( elem, "float" ) === "none" ) {
			style.display = "inline-block";
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always(function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		});
	}

	// show/hide pass
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.exec( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// If there is dataShow left over from a stopped hide or show and we are going to proceed with show, we should pretend to be hidden
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );

		// Any non-fx value stops us from restoring the original display value
		} else {
			display = undefined;
		}
	}

	if ( !jQuery.isEmptyObject( orig ) ) {
		if ( dataShow ) {
			if ( "hidden" in dataShow ) {
				hidden = dataShow.hidden;
			}
		} else {
			dataShow = data_priv.access( elem, "fxshow", {} );
		}

		// Store state if its toggle - enables .stop().toggle() to "reverse"
		if ( toggle ) {
			dataShow.hidden = !hidden;
		}
		if ( hidden ) {
			jQuery( elem ).show();
		} else {
			anim.done(function() {
				jQuery( elem ).hide();
			});
		}
		anim.done(function() {
			var prop;

			data_priv.remove( elem, "fxshow" );
			for ( prop in orig ) {
				jQuery.style( elem, prop, orig[ prop ] );
			}
		});
		for ( prop in orig ) {
			tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );

			if ( !( prop in dataShow ) ) {
				dataShow[ prop ] = tween.start;
				if ( hidden ) {
					tween.end = tween.start;
					tween.start = prop === "width" || prop === "height" ? 1 : 0;
				}
			}
		}

	// If this is a noop like .hide().hide(), restore an overwritten display value
	} else if ( (display === "none" ? defaultDisplay( elem.nodeName ) : display) === "inline" ) {
		style.display = display;
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( jQuery.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = animationPrefilters.length,
		deferred = jQuery.Deferred().always( function() {
			// Don't match elem in the :animated selector
			delete tick.elem;
		}),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),
				// Support: Android 2.3
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length ; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ]);

			if ( percent < 1 && length ) {
				return remaining;
			} else {
				deferred.resolveWith( elem, [ animation ] );
				return false;
			}
		},
		animation = deferred.promise({
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, { specialEasing: {} }, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,
					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		}),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length ; index++ ) {
		result = animationPrefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		})
	);

	// attach callbacks from options
	return animation.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );
}

jQuery.Animation = jQuery.extend( Animation, {

	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.split(" ");
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length ; index++ ) {
			prop = props[ index ];
			tweeners[ prop ] = tweeners[ prop ] || [];
			tweeners[ prop ].unshift( callback );
		}
	},

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			animationPrefilters.unshift( callback );
		} else {
			animationPrefilters.push( callback );
		}
	}
});

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration :
		opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend({
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHidden ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate({ opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {
				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || data_priv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each(function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = data_priv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && (type == null || timers[ index ].queue === type) ) {
					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		});
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each(function() {
			var index,
				data = data_priv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		});
	}
});

jQuery.each([ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
});

// Generate shortcuts for custom animations
jQuery.each({
	slideDown: genFx("show"),
	slideUp: genFx("hide"),
	slideToggle: genFx("toggle"),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
});

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];
		// Checks the timer has not already been removed
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	if ( timer() ) {
		jQuery.fx.start();
	} else {
		jQuery.timers.pop();
	}
};

jQuery.fx.interval = 13;

jQuery.fx.start = function() {
	if ( !timerId ) {
		timerId = setInterval( jQuery.fx.tick, jQuery.fx.interval );
	}
};

jQuery.fx.stop = function() {
	clearInterval( timerId );
	timerId = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,
	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = setTimeout( next, time );
		hooks.stop = function() {
			clearTimeout( timeout );
		};
	});
};


(function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: iOS<=5.1, Android<=4.2+
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE<=11+
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: Android<=2.3
	// Options inside disabled selects are incorrectly marked as disabled
	select.disabled = true;
	support.optDisabled = !opt.disabled;

	// Support: IE<=11+
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
})();


var nodeHook, boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend({
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each(function() {
			jQuery.removeAttr( this, name );
		});
	}
});

jQuery.extend({
	attr: function( elem, name, value ) {
		var hooks, ret,
			nType = elem.nodeType;

		// don't get/set attributes on text, comment and attribute nodes
		if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === strundefined ) {
			return jQuery.prop( elem, name, value );
		}

		// All attributes are lowercase
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			name = name.toLowerCase();
			hooks = jQuery.attrHooks[ name ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : nodeHook );
		}

		if ( value !== undefined ) {

			if ( value === null ) {
				jQuery.removeAttr( elem, name );

			} else if ( hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ) {
				return ret;

			} else {
				elem.setAttribute( name, value + "" );
				return value;
			}

		} else if ( hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ) {
			return ret;

		} else {
			ret = jQuery.find.attr( elem, name );

			// Non-existent attributes return null, we normalize to undefined
			return ret == null ?
				undefined :
				ret;
		}
	},

	removeAttr: function( elem, value ) {
		var name, propName,
			i = 0,
			attrNames = value && value.match( rnotwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( (name = attrNames[i++]) ) {
				propName = jQuery.propFix[ name ] || name;

				// Boolean attributes get special treatment (#10870)
				if ( jQuery.expr.match.bool.test( name ) ) {
					// Set corresponding property to false
					elem[ propName ] = false;
				}

				elem.removeAttribute( name );
			}
		}
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					jQuery.nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	}
});

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {
			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};
jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle;
		if ( !isXML ) {
			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ name ];
			attrHandle[ name ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				name.toLowerCase() :
				null;
			attrHandle[ name ] = handle;
		}
		return ret;
	};
});




var rfocusable = /^(?:input|select|textarea|button)$/i;

jQuery.fn.extend({
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each(function() {
			delete this[ jQuery.propFix[ name ] || name ];
		});
	}
});

jQuery.extend({
	propFix: {
		"for": "htmlFor",
		"class": "className"
	},

	prop: function( elem, name, value ) {
		var ret, hooks, notxml,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		notxml = nType !== 1 || !jQuery.isXMLDoc( elem );

		if ( notxml ) {
			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			return hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ?
				ret :
				( elem[ name ] = value );

		} else {
			return hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ?
				ret :
				elem[ name ];
		}
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {
				return elem.hasAttribute( "tabindex" ) || rfocusable.test( elem.nodeName ) || elem.href ?
					elem.tabIndex :
					-1;
			}
		}
	}
});

if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {
			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		}
	};
}

jQuery.each([
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
});




var rclass = /[\t\r\n\f]/g;

jQuery.fn.extend({
	addClass: function( value ) {
		var classes, elem, cur, clazz, j, finalValue,
			proceed = typeof value === "string" && value,
			i = 0,
			len = this.length;

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( j ) {
				jQuery( this ).addClass( value.call( this, j, this.className ) );
			});
		}

		if ( proceed ) {
			// The disjunction here is for better compressibility (see removeClass)
			classes = ( value || "" ).match( rnotwhite ) || [];

			for ( ; i < len; i++ ) {
				elem = this[ i ];
				cur = elem.nodeType === 1 && ( elem.className ?
					( " " + elem.className + " " ).replace( rclass, " " ) :
					" "
				);

				if ( cur ) {
					j = 0;
					while ( (clazz = classes[j++]) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// only assign if different to avoid unneeded rendering.
					finalValue = jQuery.trim( cur );
					if ( elem.className !== finalValue ) {
						elem.className = finalValue;
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, clazz, j, finalValue,
			proceed = arguments.length === 0 || typeof value === "string" && value,
			i = 0,
			len = this.length;

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( j ) {
				jQuery( this ).removeClass( value.call( this, j, this.className ) );
			});
		}
		if ( proceed ) {
			classes = ( value || "" ).match( rnotwhite ) || [];

			for ( ; i < len; i++ ) {
				elem = this[ i ];
				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( elem.className ?
					( " " + elem.className + " " ).replace( rclass, " " ) :
					""
				);

				if ( cur ) {
					j = 0;
					while ( (clazz = classes[j++]) ) {
						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) >= 0 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = value ? jQuery.trim( cur ) : "";
					if ( elem.className !== finalValue ) {
						elem.className = finalValue;
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( i ) {
				jQuery( this ).toggleClass( value.call(this, i, this.className, stateVal), stateVal );
			});
		}

		return this.each(function() {
			if ( type === "string" ) {
				// Toggle individual class names
				var className,
					i = 0,
					self = jQuery( this ),
					classNames = value.match( rnotwhite ) || [];

				while ( (className = classNames[ i++ ]) ) {
					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( type === strundefined || type === "boolean" ) {
				if ( this.className ) {
					// store className if set
					data_priv.set( this, "__className__", this.className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				this.className = this.className || value === false ? "" : data_priv.get( this, "__className__" ) || "";
			}
		});
	},

	hasClass: function( selector ) {
		var className = " " + selector + " ",
			i = 0,
			l = this.length;
		for ( ; i < l; i++ ) {
			if ( this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf( className ) >= 0 ) {
				return true;
			}
		}

		return false;
	}
});




var rreturn = /\r/g;

jQuery.fn.extend({
	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[0];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] || jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks && "get" in hooks && (ret = hooks.get( elem, "value" )) !== undefined ) {
					return ret;
				}

				ret = elem.value;

				return typeof ret === "string" ?
					// Handle most common string cases
					ret.replace(rreturn, "") :
					// Handle cases where value is null/undef or number
					ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each(function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( jQuery.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				});
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !("set" in hooks) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		});
	}
});

jQuery.extend({
	valHooks: {
		option: {
			get: function( elem ) {
				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :
					// Support: IE10-11+
					// option.text throws exceptions (#14686, #14858)
					jQuery.trim( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one" || index < 0,
					values = one ? null : [],
					max = one ? index + 1 : options.length,
					i = index < 0 ?
						max :
						one ? index : 0;

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// IE6-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&
							// Don't return options that are disabled or in a disabled optgroup
							( support.optDisabled ? !option.disabled : option.getAttribute( "disabled" ) === null ) &&
							( !option.parentNode.disabled || !jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];
					if ( (option.selected = jQuery.inArray( option.value, values ) >= 0) ) {
						optionSet = true;
					}
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
});

// Radios and checkboxes getter/setter
jQuery.each([ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( jQuery.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery(elem).val(), value ) >= 0 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute("value") === null ? "on" : elem.value;
		};
	}
});




// Return jQuery for attributes-only inclusion


jQuery.each( ("blur focus focusin focusout load resize scroll unload click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup error contextmenu").split(" "), function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
});

jQuery.fn.extend({
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	},

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {
		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ? this.off( selector, "**" ) : this.off( types, selector || "**", fn );
	}
});


var nonce = jQuery.now();

var rquery = (/\?/);



// Support: Android 2.3
// Workaround failure to string-cast null input
jQuery.parseJSON = function( data ) {
	return JSON.parse( data + "" );
};


// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml, tmp;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE9
	try {
		tmp = new DOMParser();
		xml = tmp.parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rhash = /#.*$/,
	rts = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,
	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,
	rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Document location
	ajaxLocation = window.location.href,

	// Segment location into parts
	ajaxLocParts = rurl.exec( ajaxLocation.toLowerCase() ) || [];

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];

		if ( jQuery.isFunction( func ) ) {
			// For each dataType in the dataTypeExpression
			while ( (dataType = dataTypes[i++]) ) {
				// Prepend if requested
				if ( dataType[0] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					(structure[ dataType ] = structure[ dataType ] || []).unshift( func );

				// Otherwise append
				} else {
					(structure[ dataType ] = structure[ dataType ] || []).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[ dataTypeOrTransport ] ) {
				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		});
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || (deep = {}) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {
		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[0] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}
		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},
		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

		// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {
								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s[ "throws" ] ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return { state: "parsererror", error: conv ? e : "No conversion from " + prev + " to " + current };
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend({

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: ajaxLocation,
		type: "GET",
		isLocal: rlocalProtocol.test( ajaxLocParts[ 1 ] ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /xml/,
			html: /html/,
			json: /json/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": jQuery.parseJSON,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,
			// URL without anti-cache param
			cacheURL,
			// Response headers
			responseHeadersString,
			responseHeaders,
			// timeout handle
			timeoutTimer,
			// Cross-domain detection vars
			parts,
			// To know if global events are to be dispatched
			fireGlobals,
			// Loop variable
			i,
			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),
			// Callbacks context
			callbackContext = s.context || s,
			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context && ( callbackContext.nodeType || callbackContext.jquery ) ?
				jQuery( callbackContext ) :
				jQuery.event,
			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks("once memory"),
			// Status-dependent callbacks
			statusCode = s.statusCode || {},
			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},
			// The jqXHR state
			state = 0,
			// Default abort message
			strAbort = "canceled",
			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( state === 2 ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( (match = rheaders.exec( responseHeadersString )) ) {
								responseHeaders[ match[1].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return state === 2 ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					var lname = name.toLowerCase();
					if ( !state ) {
						name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( !state ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( state < 2 ) {
							for ( code in map ) {
								// Lazy-add the new callback in a way that preserves old ones
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						} else {
							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR ).complete = completeDeferred.add;
		jqXHR.success = jqXHR.done;
		jqXHR.error = jqXHR.fail;

		// Remove hash character (#7531: and string promotion)
		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || ajaxLocation ) + "" ).replace( rhash, "" )
			.replace( rprotocol, ajaxLocParts[ 1 ] + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];

		// A cross-domain request is in order when we have a protocol:host:port mismatch
		if ( s.crossDomain == null ) {
			parts = rurl.exec( s.url.toLowerCase() );
			s.crossDomain = !!( parts &&
				( parts[ 1 ] !== ajaxLocParts[ 1 ] || parts[ 2 ] !== ajaxLocParts[ 2 ] ||
					( parts[ 3 ] || ( parts[ 1 ] === "http:" ? "80" : "443" ) ) !==
						( ajaxLocParts[ 3 ] || ( ajaxLocParts[ 1 ] === "http:" ? "80" : "443" ) ) )
			);
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( state === 2 ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger("ajaxStart");
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		cacheURL = s.url;

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL = ( s.url += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data );
				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add anti-cache in url if needed
			if ( s.cache === false ) {
				s.url = rts.test( cacheURL ) ?

					// If there is already a '_' parameter, set its value
					cacheURL.replace( rts, "$1_=" + nonce++ ) :

					// Otherwise add one to the end
					cacheURL + ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + nonce++;
			}
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[0] ] ?
				s.accepts[ s.dataTypes[0] ] + ( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend && ( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {
			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		for ( i in { success: 1, error: 1, complete: 1 } ) {
			jqXHR[ i ]( s[ i ] );
		}

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}
			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = setTimeout(function() {
					jqXHR.abort("timeout");
				}, s.timeout );
			}

			try {
				state = 1;
				transport.send( requestHeaders, done );
			} catch ( e ) {
				// Propagate exception as error if not done
				if ( state < 2 ) {
					done( -1, e );
				// Simply rethrow otherwise
				} else {
					throw e;
				}
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Called once
			if ( state === 2 ) {
				return;
			}

			// State is "done" now
			state = 2;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader("Last-Modified");
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader("etag");
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {
				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );
				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger("ajaxStop");
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
});

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {
		// Shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		return jQuery.ajax({
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		});
	};
});


jQuery._evalUrl = function( url ) {
	return jQuery.ajax({
		url: url,
		type: "GET",
		dataType: "script",
		async: false,
		global: false,
		"throws": true
	});
};


jQuery.fn.extend({
	wrapAll: function( html ) {
		var wrap;

		if ( jQuery.isFunction( html ) ) {
			return this.each(function( i ) {
				jQuery( this ).wrapAll( html.call(this, i) );
			});
		}

		if ( this[ 0 ] ) {

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map(function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			}).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each(function( i ) {
				jQuery( this ).wrapInner( html.call(this, i) );
			});
		}

		return this.each(function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		});
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each(function( i ) {
			jQuery( this ).wrapAll( isFunction ? html.call(this, i) : html );
		});
	},

	unwrap: function() {
		return this.parent().each(function() {
			if ( !jQuery.nodeName( this, "body" ) ) {
				jQuery( this ).replaceWith( this.childNodes );
			}
		}).end();
	}
});


jQuery.expr.filters.hidden = function( elem ) {
	// Support: Opera <= 12.12
	// Opera reports offsetWidths and offsetHeights less than zero on some elements
	return elem.offsetWidth <= 0 && elem.offsetHeight <= 0;
};
jQuery.expr.filters.visible = function( elem ) {
	return !jQuery.expr.filters.hidden( elem );
};




var r20 = /%20/g,
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( jQuery.isArray( obj ) ) {
		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {
				// Treat each array item as a scalar.
				add( prefix, v );

			} else {
				// Item is non-scalar (array or object), encode its numeric index.
				buildParams( prefix + "[" + ( typeof v === "object" ? i : "" ) + "]", v, traditional, add );
			}
		});

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {
		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {
		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, value ) {
			// If value is a function, invoke it and return its value
			value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
			s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
		};

	// Set traditional to true for jQuery <= 1.3.2 behavior.
	if ( traditional === undefined ) {
		traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {
		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		});

	} else {
		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" ).replace( r20, "+" );
};

jQuery.fn.extend({
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map(function() {
			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		})
		.filter(function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		})
		.map(function( i, elem ) {
			var val = jQuery( this ).val();

			return val == null ?
				null :
				jQuery.isArray( val ) ?
					jQuery.map( val, function( val ) {
						return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
					}) :
					{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		}).get();
	}
});


jQuery.ajaxSettings.xhr = function() {
	try {
		return new XMLHttpRequest();
	} catch( e ) {}
};

var xhrId = 0,
	xhrCallbacks = {},
	xhrSuccessStatus = {
		// file protocol always yields status code 0, assume 200
		0: 200,
		// Support: IE9
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

// Support: IE9
// Open requests must be manually aborted on unload (#5280)
// See https://support.microsoft.com/kb/2856746 for more info
if ( window.attachEvent ) {
	window.attachEvent( "onunload", function() {
		for ( var key in xhrCallbacks ) {
			xhrCallbacks[ key ]();
		}
	});
}

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport(function( options ) {
	var callback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr(),
					id = ++xhrId;

				xhr.open( options.type, options.url, options.async, options.username, options.password );

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers["X-Requested-With"] ) {
					headers["X-Requested-With"] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							delete xhrCallbacks[ id ];
							callback = xhr.onload = xhr.onerror = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {
								complete(
									// file: protocol always yields status 0; see #8605, #14207
									xhr.status,
									xhr.statusText
								);
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,
									// Support: IE9
									// Accessing binary-data responseText throws an exception
									// (#11426)
									typeof xhr.responseText === "string" ? {
										text: xhr.responseText
									} : undefined,
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				xhr.onerror = callback("error");

				// Create the abort callback
				callback = xhrCallbacks[ id ] = callback("abort");

				try {
					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {
					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
});




// Install script dataType
jQuery.ajaxSetup({
	accepts: {
		script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /(?:java|ecma)script/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
});

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
});

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {
	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery("<script>").prop({
					async: true,
					charset: s.scriptCharset,
					src: s.url
				}).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
});




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup({
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
});

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" && !( s.contentType || "" ).indexOf("application/x-www-form-urlencoded") && rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters["script json"] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always(function() {
			// Restore preexisting value
			window[ callbackName ] = overwritten;

			// Save back as free
			if ( s[ callbackName ] ) {
				// make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		});

		// Delegate to script
		return "script";
	}
});




// data: string of html
// context (optional): If specified, the fragment will be created in this context, defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( !data || typeof data !== "string" ) {
		return null;
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}
	context = context || document;

	var parsed = rsingleTag.exec( data ),
		scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[1] ) ];
	}

	parsed = jQuery.buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


// Keep a copy of the old load method
var _load = jQuery.fn.load;

/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	if ( typeof url !== "string" && _load ) {
		return _load.apply( this, arguments );
	}

	var selector, type, response,
		self = this,
		off = url.indexOf(" ");

	if ( off >= 0 ) {
		selector = jQuery.trim( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax({
			url: url,

			// if "type" variable is undefined, then "GET" method will be used
			type: type,
			dataType: "html",
			data: params
		}).done(function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery("<div>").append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		}).complete( callback && function( jqXHR, status ) {
			self.each( callback, response || [ jqXHR.responseText, status, jqXHR ] );
		});
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
});




jQuery.expr.filters.animated = function( elem ) {
	return jQuery.grep(jQuery.timers, function( fn ) {
		return elem === fn.elem;
	}).length;
};




var docElem = window.document.documentElement;

/**
 * Gets a window from an element
 */
function getWindow( elem ) {
	return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
}

jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf("auto") > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {
			options = options.call( elem, i, curOffset );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend({
	offset: function( options ) {
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each(function( i ) {
					jQuery.offset.setOffset( this, options, i );
				});
		}

		var docElem, win,
			elem = this[ 0 ],
			box = { top: 0, left: 0 },
			doc = elem && elem.ownerDocument;

		if ( !doc ) {
			return;
		}

		docElem = doc.documentElement;

		// Make sure it's not a disconnected DOM node
		if ( !jQuery.contains( docElem, elem ) ) {
			return box;
		}

		// Support: BlackBerry 5, iOS 3 (original iPhone)
		// If we don't have gBCR, just use 0,0 rather than error
		if ( typeof elem.getBoundingClientRect !== strundefined ) {
			box = elem.getBoundingClientRect();
		}
		win = getWindow( doc );
		return {
			top: box.top + win.pageYOffset - docElem.clientTop,
			left: box.left + win.pageXOffset - docElem.clientLeft
		};
	},

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// Fixed elements are offset from window (parentOffset = {top:0, left: 0}, because it is its only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {
			// Assume getBoundingClientRect is there when computed position is fixed
			offset = elem.getBoundingClientRect();

		} else {
			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset.top += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
			parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	offsetParent: function() {
		return this.map(function() {
			var offsetParent = this.offsetParent || docElem;

			while ( offsetParent && ( !jQuery.nodeName( offsetParent, "html" ) && jQuery.css( offsetParent, "position" ) === "static" ) ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || docElem;
		});
	}
});

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {
			var win = getWindow( elem );

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : window.pageXOffset,
					top ? val : window.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length, null );
	};
});

// Support: Safari<7+, Chrome<37+
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://code.google.com/p/chromium/issues/detail?id=229280
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );
				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
});


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name }, function( defaultExtra, funcName ) {
		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {
					// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
					// isn't a whole lot we can do. See pull request at this URL for discussion:
					// https://github.com/jquery/jquery/pull/764
					return elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?
					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable, null );
		};
	});
});


// The number of elements contained in the matched element set
jQuery.fn.size = function() {
	return this.length;
};

jQuery.fn.andSelf = jQuery.fn.addBack;




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof define === "function" && define.amd ) {
	define( "jquery", [], function() {
		return jQuery;
	});
}




var
	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( typeof noGlobal === strundefined ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;

}));

},{}],"/Users/lfisher/git/airport-codes/node_modules/markdown/lib/index.js":[function(require,module,exports){
// super simple module for the most common nodejs use case.
exports.markdown = require("./markdown");
exports.parse = exports.markdown.toHTML;

},{"./markdown":"/Users/lfisher/git/airport-codes/node_modules/markdown/lib/markdown.js"}],"/Users/lfisher/git/airport-codes/node_modules/markdown/lib/markdown.js":[function(require,module,exports){
// Released under MIT license
// Copyright (c) 2009-2010 Dominic Baggott
// Copyright (c) 2009-2010 Ash Berlin
// Copyright (c) 2011 Christoph Dorn <christoph@christophdorn.com> (http://www.christophdorn.com)

/*jshint browser:true, devel:true */

(function( expose ) {

/**
 *  class Markdown
 *
 *  Markdown processing in Javascript done right. We have very particular views
 *  on what constitutes 'right' which include:
 *
 *  - produces well-formed HTML (this means that em and strong nesting is
 *    important)
 *
 *  - has an intermediate representation to allow processing of parsed data (We
 *    in fact have two, both as [JsonML]: a markdown tree and an HTML tree).
 *
 *  - is easily extensible to add new dialects without having to rewrite the
 *    entire parsing mechanics
 *
 *  - has a good test suite
 *
 *  This implementation fulfills all of these (except that the test suite could
 *  do with expanding to automatically run all the fixtures from other Markdown
 *  implementations.)
 *
 *  ##### Intermediate Representation
 *
 *  *TODO* Talk about this :) Its JsonML, but document the node names we use.
 *
 *  [JsonML]: http://jsonml.org/ "JSON Markup Language"
 **/
var Markdown = expose.Markdown = function(dialect) {
  switch (typeof dialect) {
    case "undefined":
      this.dialect = Markdown.dialects.Gruber;
      break;
    case "object":
      this.dialect = dialect;
      break;
    default:
      if ( dialect in Markdown.dialects ) {
        this.dialect = Markdown.dialects[dialect];
      }
      else {
        throw new Error("Unknown Markdown dialect '" + String(dialect) + "'");
      }
      break;
  }
  this.em_state = [];
  this.strong_state = [];
  this.debug_indent = "";
};

/**
 *  parse( markdown, [dialect] ) -> JsonML
 *  - markdown (String): markdown string to parse
 *  - dialect (String | Dialect): the dialect to use, defaults to gruber
 *
 *  Parse `markdown` and return a markdown document as a Markdown.JsonML tree.
 **/
expose.parse = function( source, dialect ) {
  // dialect will default if undefined
  var md = new Markdown( dialect );
  return md.toTree( source );
};

/**
 *  toHTML( markdown, [dialect]  ) -> String
 *  toHTML( md_tree ) -> String
 *  - markdown (String): markdown string to parse
 *  - md_tree (Markdown.JsonML): parsed markdown tree
 *
 *  Take markdown (either as a string or as a JsonML tree) and run it through
 *  [[toHTMLTree]] then turn it into a well-formated HTML fragment.
 **/
expose.toHTML = function toHTML( source , dialect , options ) {
  var input = expose.toHTMLTree( source , dialect , options );

  return expose.renderJsonML( input );
};

/**
 *  toHTMLTree( markdown, [dialect] ) -> JsonML
 *  toHTMLTree( md_tree ) -> JsonML
 *  - markdown (String): markdown string to parse
 *  - dialect (String | Dialect): the dialect to use, defaults to gruber
 *  - md_tree (Markdown.JsonML): parsed markdown tree
 *
 *  Turn markdown into HTML, represented as a JsonML tree. If a string is given
 *  to this function, it is first parsed into a markdown tree by calling
 *  [[parse]].
 **/
expose.toHTMLTree = function toHTMLTree( input, dialect , options ) {
  // convert string input to an MD tree
  if ( typeof input ==="string" ) input = this.parse( input, dialect );

  // Now convert the MD tree to an HTML tree

  // remove references from the tree
  var attrs = extract_attr( input ),
      refs = {};

  if ( attrs && attrs.references ) {
    refs = attrs.references;
  }

  var html = convert_tree_to_html( input, refs , options );
  merge_text_nodes( html );
  return html;
};

// For Spidermonkey based engines
function mk_block_toSource() {
  return "Markdown.mk_block( " +
          uneval(this.toString()) +
          ", " +
          uneval(this.trailing) +
          ", " +
          uneval(this.lineNumber) +
          " )";
}

// node
function mk_block_inspect() {
  var util = require("util");
  return "Markdown.mk_block( " +
          util.inspect(this.toString()) +
          ", " +
          util.inspect(this.trailing) +
          ", " +
          util.inspect(this.lineNumber) +
          " )";

}

var mk_block = Markdown.mk_block = function(block, trail, line) {
  // Be helpful for default case in tests.
  if ( arguments.length == 1 ) trail = "\n\n";

  var s = new String(block);
  s.trailing = trail;
  // To make it clear its not just a string
  s.inspect = mk_block_inspect;
  s.toSource = mk_block_toSource;

  if ( line != undefined )
    s.lineNumber = line;

  return s;
};

function count_lines( str ) {
  var n = 0, i = -1;
  while ( ( i = str.indexOf("\n", i + 1) ) !== -1 ) n++;
  return n;
}

// Internal - split source into rough blocks
Markdown.prototype.split_blocks = function splitBlocks( input, startLine ) {
  input = input.replace(/(\r\n|\n|\r)/g, "\n");
  // [\s\S] matches _anything_ (newline or space)
  // [^] is equivalent but doesn't work in IEs.
  var re = /([\s\S]+?)($|\n#|\n(?:\s*\n|$)+)/g,
      blocks = [],
      m;

  var line_no = 1;

  if ( ( m = /^(\s*\n)/.exec(input) ) != null ) {
    // skip (but count) leading blank lines
    line_no += count_lines( m[0] );
    re.lastIndex = m[0].length;
  }

  while ( ( m = re.exec(input) ) !== null ) {
    if (m[2] == "\n#") {
      m[2] = "\n";
      re.lastIndex--;
    }
    blocks.push( mk_block( m[1], m[2], line_no ) );
    line_no += count_lines( m[0] );
  }

  return blocks;
};

/**
 *  Markdown#processBlock( block, next ) -> undefined | [ JsonML, ... ]
 *  - block (String): the block to process
 *  - next (Array): the following blocks
 *
 * Process `block` and return an array of JsonML nodes representing `block`.
 *
 * It does this by asking each block level function in the dialect to process
 * the block until one can. Succesful handling is indicated by returning an
 * array (with zero or more JsonML nodes), failure by a false value.
 *
 * Blocks handlers are responsible for calling [[Markdown#processInline]]
 * themselves as appropriate.
 *
 * If the blocks were split incorrectly or adjacent blocks need collapsing you
 * can adjust `next` in place using shift/splice etc.
 *
 * If any of this default behaviour is not right for the dialect, you can
 * define a `__call__` method on the dialect that will get invoked to handle
 * the block processing.
 */
Markdown.prototype.processBlock = function processBlock( block, next ) {
  var cbs = this.dialect.block,
      ord = cbs.__order__;

  if ( "__call__" in cbs ) {
    return cbs.__call__.call(this, block, next);
  }

  for ( var i = 0; i < ord.length; i++ ) {
    //D:this.debug( "Testing", ord[i] );
    var res = cbs[ ord[i] ].call( this, block, next );
    if ( res ) {
      //D:this.debug("  matched");
      if ( !isArray(res) || ( res.length > 0 && !( isArray(res[0]) ) ) )
        this.debug(ord[i], "didn't return a proper array");
      //D:this.debug( "" );
      return res;
    }
  }

  // Uhoh! no match! Should we throw an error?
  return [];
};

Markdown.prototype.processInline = function processInline( block ) {
  return this.dialect.inline.__call__.call( this, String( block ) );
};

/**
 *  Markdown#toTree( source ) -> JsonML
 *  - source (String): markdown source to parse
 *
 *  Parse `source` into a JsonML tree representing the markdown document.
 **/
// custom_tree means set this.tree to `custom_tree` and restore old value on return
Markdown.prototype.toTree = function toTree( source, custom_root ) {
  var blocks = source instanceof Array ? source : this.split_blocks( source );

  // Make tree a member variable so its easier to mess with in extensions
  var old_tree = this.tree;
  try {
    this.tree = custom_root || this.tree || [ "markdown" ];

    blocks:
    while ( blocks.length ) {
      var b = this.processBlock( blocks.shift(), blocks );

      // Reference blocks and the like won't return any content
      if ( !b.length ) continue blocks;

      this.tree.push.apply( this.tree, b );
    }
    return this.tree;
  }
  finally {
    if ( custom_root ) {
      this.tree = old_tree;
    }
  }
};

// Noop by default
Markdown.prototype.debug = function () {
  var args = Array.prototype.slice.call( arguments);
  args.unshift(this.debug_indent);
  if ( typeof print !== "undefined" )
      print.apply( print, args );
  if ( typeof console !== "undefined" && typeof console.log !== "undefined" )
      console.log.apply( null, args );
}

Markdown.prototype.loop_re_over_block = function( re, block, cb ) {
  // Dont use /g regexps with this
  var m,
      b = block.valueOf();

  while ( b.length && (m = re.exec(b) ) != null ) {
    b = b.substr( m[0].length );
    cb.call(this, m);
  }
  return b;
};

/**
 * Markdown.dialects
 *
 * Namespace of built-in dialects.
 **/
Markdown.dialects = {};

/**
 * Markdown.dialects.Gruber
 *
 * The default dialect that follows the rules set out by John Gruber's
 * markdown.pl as closely as possible. Well actually we follow the behaviour of
 * that script which in some places is not exactly what the syntax web page
 * says.
 **/
Markdown.dialects.Gruber = {
  block: {
    atxHeader: function atxHeader( block, next ) {
      var m = block.match( /^(#{1,6})\s*(.*?)\s*#*\s*(?:\n|$)/ );

      if ( !m ) return undefined;

      var header = [ "header", { level: m[ 1 ].length } ];
      Array.prototype.push.apply(header, this.processInline(m[ 2 ]));

      if ( m[0].length < block.length )
        next.unshift( mk_block( block.substr( m[0].length ), block.trailing, block.lineNumber + 2 ) );

      return [ header ];
    },

    setextHeader: function setextHeader( block, next ) {
      var m = block.match( /^(.*)\n([-=])\2\2+(?:\n|$)/ );

      if ( !m ) return undefined;

      var level = ( m[ 2 ] === "=" ) ? 1 : 2;
      var header = [ "header", { level : level }, m[ 1 ] ];

      if ( m[0].length < block.length )
        next.unshift( mk_block( block.substr( m[0].length ), block.trailing, block.lineNumber + 2 ) );

      return [ header ];
    },

    code: function code( block, next ) {
      // |    Foo
      // |bar
      // should be a code block followed by a paragraph. Fun
      //
      // There might also be adjacent code block to merge.

      var ret = [],
          re = /^(?: {0,3}\t| {4})(.*)\n?/,
          lines;

      // 4 spaces + content
      if ( !block.match( re ) ) return undefined;

      block_search:
      do {
        // Now pull out the rest of the lines
        var b = this.loop_re_over_block(
                  re, block.valueOf(), function( m ) { ret.push( m[1] ); } );

        if ( b.length ) {
          // Case alluded to in first comment. push it back on as a new block
          next.unshift( mk_block(b, block.trailing) );
          break block_search;
        }
        else if ( next.length ) {
          // Check the next block - it might be code too
          if ( !next[0].match( re ) ) break block_search;

          // Pull how how many blanks lines follow - minus two to account for .join
          ret.push ( block.trailing.replace(/[^\n]/g, "").substring(2) );

          block = next.shift();
        }
        else {
          break block_search;
        }
      } while ( true );

      return [ [ "code_block", ret.join("\n") ] ];
    },

    horizRule: function horizRule( block, next ) {
      // this needs to find any hr in the block to handle abutting blocks
      var m = block.match( /^(?:([\s\S]*?)\n)?[ \t]*([-_*])(?:[ \t]*\2){2,}[ \t]*(?:\n([\s\S]*))?$/ );

      if ( !m ) {
        return undefined;
      }

      var jsonml = [ [ "hr" ] ];

      // if there's a leading abutting block, process it
      if ( m[ 1 ] ) {
        jsonml.unshift.apply( jsonml, this.processBlock( m[ 1 ], [] ) );
      }

      // if there's a trailing abutting block, stick it into next
      if ( m[ 3 ] ) {
        next.unshift( mk_block( m[ 3 ] ) );
      }

      return jsonml;
    },

    // There are two types of lists. Tight and loose. Tight lists have no whitespace
    // between the items (and result in text just in the <li>) and loose lists,
    // which have an empty line between list items, resulting in (one or more)
    // paragraphs inside the <li>.
    //
    // There are all sorts weird edge cases about the original markdown.pl's
    // handling of lists:
    //
    // * Nested lists are supposed to be indented by four chars per level. But
    //   if they aren't, you can get a nested list by indenting by less than
    //   four so long as the indent doesn't match an indent of an existing list
    //   item in the 'nest stack'.
    //
    // * The type of the list (bullet or number) is controlled just by the
    //    first item at the indent. Subsequent changes are ignored unless they
    //    are for nested lists
    //
    lists: (function( ) {
      // Use a closure to hide a few variables.
      var any_list = "[*+-]|\\d+\\.",
          bullet_list = /[*+-]/,
          number_list = /\d+\./,
          // Capture leading indent as it matters for determining nested lists.
          is_list_re = new RegExp( "^( {0,3})(" + any_list + ")[ \t]+" ),
          indent_re = "(?: {0,3}\\t| {4})";

      // TODO: Cache this regexp for certain depths.
      // Create a regexp suitable for matching an li for a given stack depth
      function regex_for_depth( depth ) {

        return new RegExp(
          // m[1] = indent, m[2] = list_type
          "(?:^(" + indent_re + "{0," + depth + "} {0,3})(" + any_list + ")\\s+)|" +
          // m[3] = cont
          "(^" + indent_re + "{0," + (depth-1) + "}[ ]{0,4})"
        );
      }
      function expand_tab( input ) {
        return input.replace( / {0,3}\t/g, "    " );
      }

      // Add inline content `inline` to `li`. inline comes from processInline
      // so is an array of content
      function add(li, loose, inline, nl) {
        if ( loose ) {
          li.push( [ "para" ].concat(inline) );
          return;
        }
        // Hmmm, should this be any block level element or just paras?
        var add_to = li[li.length -1] instanceof Array && li[li.length - 1][0] == "para"
                   ? li[li.length -1]
                   : li;

        // If there is already some content in this list, add the new line in
        if ( nl && li.length > 1 ) inline.unshift(nl);

        for ( var i = 0; i < inline.length; i++ ) {
          var what = inline[i],
              is_str = typeof what == "string";
          if ( is_str && add_to.length > 1 && typeof add_to[add_to.length-1] == "string" ) {
            add_to[ add_to.length-1 ] += what;
          }
          else {
            add_to.push( what );
          }
        }
      }

      // contained means have an indent greater than the current one. On
      // *every* line in the block
      function get_contained_blocks( depth, blocks ) {

        var re = new RegExp( "^(" + indent_re + "{" + depth + "}.*?\\n?)*$" ),
            replace = new RegExp("^" + indent_re + "{" + depth + "}", "gm"),
            ret = [];

        while ( blocks.length > 0 ) {
          if ( re.exec( blocks[0] ) ) {
            var b = blocks.shift(),
                // Now remove that indent
                x = b.replace( replace, "");

            ret.push( mk_block( x, b.trailing, b.lineNumber ) );
          }
          else {
            break;
          }
        }
        return ret;
      }

      // passed to stack.forEach to turn list items up the stack into paras
      function paragraphify(s, i, stack) {
        var list = s.list;
        var last_li = list[list.length-1];

        if ( last_li[1] instanceof Array && last_li[1][0] == "para" ) {
          return;
        }
        if ( i + 1 == stack.length ) {
          // Last stack frame
          // Keep the same array, but replace the contents
          last_li.push( ["para"].concat( last_li.splice(1, last_li.length - 1) ) );
        }
        else {
          var sublist = last_li.pop();
          last_li.push( ["para"].concat( last_li.splice(1, last_li.length - 1) ), sublist );
        }
      }

      // The matcher function
      return function( block, next ) {
        var m = block.match( is_list_re );
        if ( !m ) return undefined;

        function make_list( m ) {
          var list = bullet_list.exec( m[2] )
                   ? ["bulletlist"]
                   : ["numberlist"];

          stack.push( { list: list, indent: m[1] } );
          return list;
        }


        var stack = [], // Stack of lists for nesting.
            list = make_list( m ),
            last_li,
            loose = false,
            ret = [ stack[0].list ],
            i;

        // Loop to search over block looking for inner block elements and loose lists
        loose_search:
        while ( true ) {
          // Split into lines preserving new lines at end of line
          var lines = block.split( /(?=\n)/ );

          // We have to grab all lines for a li and call processInline on them
          // once as there are some inline things that can span lines.
          var li_accumulate = "";

          // Loop over the lines in this block looking for tight lists.
          tight_search:
          for ( var line_no = 0; line_no < lines.length; line_no++ ) {
            var nl = "",
                l = lines[line_no].replace(/^\n/, function(n) { nl = n; return ""; });

            // TODO: really should cache this
            var line_re = regex_for_depth( stack.length );

            m = l.match( line_re );
            //print( "line:", uneval(l), "\nline match:", uneval(m) );

            // We have a list item
            if ( m[1] !== undefined ) {
              // Process the previous list item, if any
              if ( li_accumulate.length ) {
                add( last_li, loose, this.processInline( li_accumulate ), nl );
                // Loose mode will have been dealt with. Reset it
                loose = false;
                li_accumulate = "";
              }

              m[1] = expand_tab( m[1] );
              var wanted_depth = Math.floor(m[1].length/4)+1;
              //print( "want:", wanted_depth, "stack:", stack.length);
              if ( wanted_depth > stack.length ) {
                // Deep enough for a nested list outright
                //print ( "new nested list" );
                list = make_list( m );
                last_li.push( list );
                last_li = list[1] = [ "listitem" ];
              }
              else {
                // We aren't deep enough to be strictly a new level. This is
                // where Md.pl goes nuts. If the indent matches a level in the
                // stack, put it there, else put it one deeper then the
                // wanted_depth deserves.
                var found = false;
                for ( i = 0; i < stack.length; i++ ) {
                  if ( stack[ i ].indent != m[1] ) continue;
                  list = stack[ i ].list;
                  stack.splice( i+1, stack.length - (i+1) );
                  found = true;
                  break;
                }

                if (!found) {
                  //print("not found. l:", uneval(l));
                  wanted_depth++;
                  if ( wanted_depth <= stack.length ) {
                    stack.splice(wanted_depth, stack.length - wanted_depth);
                    //print("Desired depth now", wanted_depth, "stack:", stack.length);
                    list = stack[wanted_depth-1].list;
                    //print("list:", uneval(list) );
                  }
                  else {
                    //print ("made new stack for messy indent");
                    list = make_list(m);
                    last_li.push(list);
                  }
                }

                //print( uneval(list), "last", list === stack[stack.length-1].list );
                last_li = [ "listitem" ];
                list.push(last_li);
              } // end depth of shenegains
              nl = "";
            }

            // Add content
            if ( l.length > m[0].length ) {
              li_accumulate += nl + l.substr( m[0].length );
            }
          } // tight_search

          if ( li_accumulate.length ) {
            add( last_li, loose, this.processInline( li_accumulate ), nl );
            // Loose mode will have been dealt with. Reset it
            loose = false;
            li_accumulate = "";
          }

          // Look at the next block - we might have a loose list. Or an extra
          // paragraph for the current li
          var contained = get_contained_blocks( stack.length, next );

          // Deal with code blocks or properly nested lists
          if ( contained.length > 0 ) {
            // Make sure all listitems up the stack are paragraphs
            forEach( stack, paragraphify, this);

            last_li.push.apply( last_li, this.toTree( contained, [] ) );
          }

          var next_block = next[0] && next[0].valueOf() || "";

          if ( next_block.match(is_list_re) || next_block.match( /^ / ) ) {
            block = next.shift();

            // Check for an HR following a list: features/lists/hr_abutting
            var hr = this.dialect.block.horizRule( block, next );

            if ( hr ) {
              ret.push.apply(ret, hr);
              break;
            }

            // Make sure all listitems up the stack are paragraphs
            forEach( stack, paragraphify, this);

            loose = true;
            continue loose_search;
          }
          break;
        } // loose_search

        return ret;
      };
    })(),

    blockquote: function blockquote( block, next ) {
      if ( !block.match( /^>/m ) )
        return undefined;

      var jsonml = [];

      // separate out the leading abutting block, if any. I.e. in this case:
      //
      //  a
      //  > b
      //
      if ( block[ 0 ] != ">" ) {
        var lines = block.split( /\n/ ),
            prev = [],
            line_no = block.lineNumber;

        // keep shifting lines until you find a crotchet
        while ( lines.length && lines[ 0 ][ 0 ] != ">" ) {
            prev.push( lines.shift() );
            line_no++;
        }

        var abutting = mk_block( prev.join( "\n" ), "\n", block.lineNumber );
        jsonml.push.apply( jsonml, this.processBlock( abutting, [] ) );
        // reassemble new block of just block quotes!
        block = mk_block( lines.join( "\n" ), block.trailing, line_no );
      }


      // if the next block is also a blockquote merge it in
      while ( next.length && next[ 0 ][ 0 ] == ">" ) {
        var b = next.shift();
        block = mk_block( block + block.trailing + b, b.trailing, block.lineNumber );
      }

      // Strip off the leading "> " and re-process as a block.
      var input = block.replace( /^> ?/gm, "" ),
          old_tree = this.tree,
          processedBlock = this.toTree( input, [ "blockquote" ] ),
          attr = extract_attr( processedBlock );

      // If any link references were found get rid of them
      if ( attr && attr.references ) {
        delete attr.references;
        // And then remove the attribute object if it's empty
        if ( isEmpty( attr ) ) {
          processedBlock.splice( 1, 1 );
        }
      }

      jsonml.push( processedBlock );
      return jsonml;
    },

    referenceDefn: function referenceDefn( block, next) {
      var re = /^\s*\[(.*?)\]:\s*(\S+)(?:\s+(?:(['"])(.*?)\3|\((.*?)\)))?\n?/;
      // interesting matches are [ , ref_id, url, , title, title ]

      if ( !block.match(re) )
        return undefined;

      // make an attribute node if it doesn't exist
      if ( !extract_attr( this.tree ) ) {
        this.tree.splice( 1, 0, {} );
      }

      var attrs = extract_attr( this.tree );

      // make a references hash if it doesn't exist
      if ( attrs.references === undefined ) {
        attrs.references = {};
      }

      var b = this.loop_re_over_block(re, block, function( m ) {

        if ( m[2] && m[2][0] == "<" && m[2][m[2].length-1] == ">" )
          m[2] = m[2].substring( 1, m[2].length - 1 );

        var ref = attrs.references[ m[1].toLowerCase() ] = {
          href: m[2]
        };

        if ( m[4] !== undefined )
          ref.title = m[4];
        else if ( m[5] !== undefined )
          ref.title = m[5];

      } );

      if ( b.length )
        next.unshift( mk_block( b, block.trailing ) );

      return [];
    },

    para: function para( block, next ) {
      // everything's a para!
      return [ ["para"].concat( this.processInline( block ) ) ];
    }
  }
};

Markdown.dialects.Gruber.inline = {

    __oneElement__: function oneElement( text, patterns_or_re, previous_nodes ) {
      var m,
          res,
          lastIndex = 0;

      patterns_or_re = patterns_or_re || this.dialect.inline.__patterns__;
      var re = new RegExp( "([\\s\\S]*?)(" + (patterns_or_re.source || patterns_or_re) + ")" );

      m = re.exec( text );
      if (!m) {
        // Just boring text
        return [ text.length, text ];
      }
      else if ( m[1] ) {
        // Some un-interesting text matched. Return that first
        return [ m[1].length, m[1] ];
      }

      var res;
      if ( m[2] in this.dialect.inline ) {
        res = this.dialect.inline[ m[2] ].call(
                  this,
                  text.substr( m.index ), m, previous_nodes || [] );
      }
      // Default for now to make dev easier. just slurp special and output it.
      res = res || [ m[2].length, m[2] ];
      return res;
    },

    __call__: function inline( text, patterns ) {

      var out = [],
          res;

      function add(x) {
        //D:self.debug("  adding output", uneval(x));
        if ( typeof x == "string" && typeof out[out.length-1] == "string" )
          out[ out.length-1 ] += x;
        else
          out.push(x);
      }

      while ( text.length > 0 ) {
        res = this.dialect.inline.__oneElement__.call(this, text, patterns, out );
        text = text.substr( res.shift() );
        forEach(res, add )
      }

      return out;
    },

    // These characters are intersting elsewhere, so have rules for them so that
    // chunks of plain text blocks don't include them
    "]": function () {},
    "}": function () {},

    __escape__ : /^\\[\\`\*_{}\[\]()#\+.!\-]/,

    "\\": function escaped( text ) {
      // [ length of input processed, node/children to add... ]
      // Only esacape: \ ` * _ { } [ ] ( ) # * + - . !
      if ( this.dialect.inline.__escape__.exec( text ) )
        return [ 2, text.charAt( 1 ) ];
      else
        // Not an esacpe
        return [ 1, "\\" ];
    },

    "![": function image( text ) {

      // Unlike images, alt text is plain text only. no other elements are
      // allowed in there

      // ![Alt text](/path/to/img.jpg "Optional title")
      //      1          2            3       4         <--- captures
      var m = text.match( /^!\[(.*?)\][ \t]*\([ \t]*([^")]*?)(?:[ \t]+(["'])(.*?)\3)?[ \t]*\)/ );

      if ( m ) {
        if ( m[2] && m[2][0] == "<" && m[2][m[2].length-1] == ">" )
          m[2] = m[2].substring( 1, m[2].length - 1 );

        m[2] = this.dialect.inline.__call__.call( this, m[2], /\\/ )[0];

        var attrs = { alt: m[1], href: m[2] || "" };
        if ( m[4] !== undefined)
          attrs.title = m[4];

        return [ m[0].length, [ "img", attrs ] ];
      }

      // ![Alt text][id]
      m = text.match( /^!\[(.*?)\][ \t]*\[(.*?)\]/ );

      if ( m ) {
        // We can't check if the reference is known here as it likely wont be
        // found till after. Check it in md tree->hmtl tree conversion
        return [ m[0].length, [ "img_ref", { alt: m[1], ref: m[2].toLowerCase(), original: m[0] } ] ];
      }

      // Just consume the '!['
      return [ 2, "![" ];
    },

    "[": function link( text ) {

      var orig = String(text);
      // Inline content is possible inside `link text`
      var res = Markdown.DialectHelpers.inline_until_char.call( this, text.substr(1), "]" );

      // No closing ']' found. Just consume the [
      if ( !res ) return [ 1, "[" ];

      var consumed = 1 + res[ 0 ],
          children = res[ 1 ],
          link,
          attrs;

      // At this point the first [...] has been parsed. See what follows to find
      // out which kind of link we are (reference or direct url)
      text = text.substr( consumed );

      // [link text](/path/to/img.jpg "Optional title")
      //                 1            2       3         <--- captures
      // This will capture up to the last paren in the block. We then pull
      // back based on if there a matching ones in the url
      //    ([here](/url/(test))
      // The parens have to be balanced
      var m = text.match( /^\s*\([ \t]*([^"']*)(?:[ \t]+(["'])(.*?)\2)?[ \t]*\)/ );
      if ( m ) {
        var url = m[1];
        consumed += m[0].length;

        if ( url && url[0] == "<" && url[url.length-1] == ">" )
          url = url.substring( 1, url.length - 1 );

        // If there is a title we don't have to worry about parens in the url
        if ( !m[3] ) {
          var open_parens = 1; // One open that isn't in the capture
          for ( var len = 0; len < url.length; len++ ) {
            switch ( url[len] ) {
            case "(":
              open_parens++;
              break;
            case ")":
              if ( --open_parens == 0) {
                consumed -= url.length - len;
                url = url.substring(0, len);
              }
              break;
            }
          }
        }

        // Process escapes only
        url = this.dialect.inline.__call__.call( this, url, /\\/ )[0];

        attrs = { href: url || "" };
        if ( m[3] !== undefined)
          attrs.title = m[3];

        link = [ "link", attrs ].concat( children );
        return [ consumed, link ];
      }

      // [Alt text][id]
      // [Alt text] [id]
      m = text.match( /^\s*\[(.*?)\]/ );

      if ( m ) {

        consumed += m[ 0 ].length;

        // [links][] uses links as its reference
        attrs = { ref: ( m[ 1 ] || String(children) ).toLowerCase(),  original: orig.substr( 0, consumed ) };

        link = [ "link_ref", attrs ].concat( children );

        // We can't check if the reference is known here as it likely wont be
        // found till after. Check it in md tree->hmtl tree conversion.
        // Store the original so that conversion can revert if the ref isn't found.
        return [ consumed, link ];
      }

      // [id]
      // Only if id is plain (no formatting.)
      if ( children.length == 1 && typeof children[0] == "string" ) {

        attrs = { ref: children[0].toLowerCase(),  original: orig.substr( 0, consumed ) };
        link = [ "link_ref", attrs, children[0] ];
        return [ consumed, link ];
      }

      // Just consume the "["
      return [ 1, "[" ];
    },


    "<": function autoLink( text ) {
      var m;

      if ( ( m = text.match( /^<(?:((https?|ftp|mailto):[^>]+)|(.*?@.*?\.[a-zA-Z]+))>/ ) ) != null ) {
        if ( m[3] ) {
          return [ m[0].length, [ "link", { href: "mailto:" + m[3] }, m[3] ] ];

        }
        else if ( m[2] == "mailto" ) {
          return [ m[0].length, [ "link", { href: m[1] }, m[1].substr("mailto:".length ) ] ];
        }
        else
          return [ m[0].length, [ "link", { href: m[1] }, m[1] ] ];
      }

      return [ 1, "<" ];
    },

    "`": function inlineCode( text ) {
      // Inline code block. as many backticks as you like to start it
      // Always skip over the opening ticks.
      var m = text.match( /(`+)(([\s\S]*?)\1)/ );

      if ( m && m[2] )
        return [ m[1].length + m[2].length, [ "inlinecode", m[3] ] ];
      else {
        // TODO: No matching end code found - warn!
        return [ 1, "`" ];
      }
    },

    "  \n": function lineBreak( text ) {
      return [ 3, [ "linebreak" ] ];
    }

};

// Meta Helper/generator method for em and strong handling
function strong_em( tag, md ) {

  var state_slot = tag + "_state",
      other_slot = tag == "strong" ? "em_state" : "strong_state";

  function CloseTag(len) {
    this.len_after = len;
    this.name = "close_" + md;
  }

  return function ( text, orig_match ) {

    if ( this[state_slot][0] == md ) {
      // Most recent em is of this type
      //D:this.debug("closing", md);
      this[state_slot].shift();

      // "Consume" everything to go back to the recrusion in the else-block below
      return[ text.length, new CloseTag(text.length-md.length) ];
    }
    else {
      // Store a clone of the em/strong states
      var other = this[other_slot].slice(),
          state = this[state_slot].slice();

      this[state_slot].unshift(md);

      //D:this.debug_indent += "  ";

      // Recurse
      var res = this.processInline( text.substr( md.length ) );
      //D:this.debug_indent = this.debug_indent.substr(2);

      var last = res[res.length - 1];

      //D:this.debug("processInline from", tag + ": ", uneval( res ) );

      var check = this[state_slot].shift();
      if ( last instanceof CloseTag ) {
        res.pop();
        // We matched! Huzzah.
        var consumed = text.length - last.len_after;
        return [ consumed, [ tag ].concat(res) ];
      }
      else {
        // Restore the state of the other kind. We might have mistakenly closed it.
        this[other_slot] = other;
        this[state_slot] = state;

        // We can't reuse the processed result as it could have wrong parsing contexts in it.
        return [ md.length, md ];
      }
    }
  }; // End returned function
}

Markdown.dialects.Gruber.inline["**"] = strong_em("strong", "**");
Markdown.dialects.Gruber.inline["__"] = strong_em("strong", "__");
Markdown.dialects.Gruber.inline["*"]  = strong_em("em", "*");
Markdown.dialects.Gruber.inline["_"]  = strong_em("em", "_");


// Build default order from insertion order.
Markdown.buildBlockOrder = function(d) {
  var ord = [];
  for ( var i in d ) {
    if ( i == "__order__" || i == "__call__" ) continue;
    ord.push( i );
  }
  d.__order__ = ord;
};

// Build patterns for inline matcher
Markdown.buildInlinePatterns = function(d) {
  var patterns = [];

  for ( var i in d ) {
    // __foo__ is reserved and not a pattern
    if ( i.match( /^__.*__$/) ) continue;
    var l = i.replace( /([\\.*+?|()\[\]{}])/g, "\\$1" )
             .replace( /\n/, "\\n" );
    patterns.push( i.length == 1 ? l : "(?:" + l + ")" );
  }

  patterns = patterns.join("|");
  d.__patterns__ = patterns;
  //print("patterns:", uneval( patterns ) );

  var fn = d.__call__;
  d.__call__ = function(text, pattern) {
    if ( pattern != undefined ) {
      return fn.call(this, text, pattern);
    }
    else
    {
      return fn.call(this, text, patterns);
    }
  };
};

Markdown.DialectHelpers = {};
Markdown.DialectHelpers.inline_until_char = function( text, want ) {
  var consumed = 0,
      nodes = [];

  while ( true ) {
    if ( text.charAt( consumed ) == want ) {
      // Found the character we were looking for
      consumed++;
      return [ consumed, nodes ];
    }

    if ( consumed >= text.length ) {
      // No closing char found. Abort.
      return null;
    }

    var res = this.dialect.inline.__oneElement__.call(this, text.substr( consumed ) );
    consumed += res[ 0 ];
    // Add any returned nodes.
    nodes.push.apply( nodes, res.slice( 1 ) );
  }
}

// Helper function to make sub-classing a dialect easier
Markdown.subclassDialect = function( d ) {
  function Block() {}
  Block.prototype = d.block;
  function Inline() {}
  Inline.prototype = d.inline;

  return { block: new Block(), inline: new Inline() };
};

Markdown.buildBlockOrder ( Markdown.dialects.Gruber.block );
Markdown.buildInlinePatterns( Markdown.dialects.Gruber.inline );

Markdown.dialects.Maruku = Markdown.subclassDialect( Markdown.dialects.Gruber );

Markdown.dialects.Maruku.processMetaHash = function processMetaHash( meta_string ) {
  var meta = split_meta_hash( meta_string ),
      attr = {};

  for ( var i = 0; i < meta.length; ++i ) {
    // id: #foo
    if ( /^#/.test( meta[ i ] ) ) {
      attr.id = meta[ i ].substring( 1 );
    }
    // class: .foo
    else if ( /^\./.test( meta[ i ] ) ) {
      // if class already exists, append the new one
      if ( attr["class"] ) {
        attr["class"] = attr["class"] + meta[ i ].replace( /./, " " );
      }
      else {
        attr["class"] = meta[ i ].substring( 1 );
      }
    }
    // attribute: foo=bar
    else if ( /\=/.test( meta[ i ] ) ) {
      var s = meta[ i ].split( /\=/ );
      attr[ s[ 0 ] ] = s[ 1 ];
    }
  }

  return attr;
}

function split_meta_hash( meta_string ) {
  var meta = meta_string.split( "" ),
      parts = [ "" ],
      in_quotes = false;

  while ( meta.length ) {
    var letter = meta.shift();
    switch ( letter ) {
      case " " :
        // if we're in a quoted section, keep it
        if ( in_quotes ) {
          parts[ parts.length - 1 ] += letter;
        }
        // otherwise make a new part
        else {
          parts.push( "" );
        }
        break;
      case "'" :
      case '"' :
        // reverse the quotes and move straight on
        in_quotes = !in_quotes;
        break;
      case "\\" :
        // shift off the next letter to be used straight away.
        // it was escaped so we'll keep it whatever it is
        letter = meta.shift();
      default :
        parts[ parts.length - 1 ] += letter;
        break;
    }
  }

  return parts;
}

Markdown.dialects.Maruku.block.document_meta = function document_meta( block, next ) {
  // we're only interested in the first block
  if ( block.lineNumber > 1 ) return undefined;

  // document_meta blocks consist of one or more lines of `Key: Value\n`
  if ( ! block.match( /^(?:\w+:.*\n)*\w+:.*$/ ) ) return undefined;

  // make an attribute node if it doesn't exist
  if ( !extract_attr( this.tree ) ) {
    this.tree.splice( 1, 0, {} );
  }

  var pairs = block.split( /\n/ );
  for ( p in pairs ) {
    var m = pairs[ p ].match( /(\w+):\s*(.*)$/ ),
        key = m[ 1 ].toLowerCase(),
        value = m[ 2 ];

    this.tree[ 1 ][ key ] = value;
  }

  // document_meta produces no content!
  return [];
};

Markdown.dialects.Maruku.block.block_meta = function block_meta( block, next ) {
  // check if the last line of the block is an meta hash
  var m = block.match( /(^|\n) {0,3}\{:\s*((?:\\\}|[^\}])*)\s*\}$/ );
  if ( !m ) return undefined;

  // process the meta hash
  var attr = this.dialect.processMetaHash( m[ 2 ] );

  var hash;

  // if we matched ^ then we need to apply meta to the previous block
  if ( m[ 1 ] === "" ) {
    var node = this.tree[ this.tree.length - 1 ];
    hash = extract_attr( node );

    // if the node is a string (rather than JsonML), bail
    if ( typeof node === "string" ) return undefined;

    // create the attribute hash if it doesn't exist
    if ( !hash ) {
      hash = {};
      node.splice( 1, 0, hash );
    }

    // add the attributes in
    for ( a in attr ) {
      hash[ a ] = attr[ a ];
    }

    // return nothing so the meta hash is removed
    return [];
  }

  // pull the meta hash off the block and process what's left
  var b = block.replace( /\n.*$/, "" ),
      result = this.processBlock( b, [] );

  // get or make the attributes hash
  hash = extract_attr( result[ 0 ] );
  if ( !hash ) {
    hash = {};
    result[ 0 ].splice( 1, 0, hash );
  }

  // attach the attributes to the block
  for ( a in attr ) {
    hash[ a ] = attr[ a ];
  }

  return result;
};

Markdown.dialects.Maruku.block.definition_list = function definition_list( block, next ) {
  // one or more terms followed by one or more definitions, in a single block
  var tight = /^((?:[^\s:].*\n)+):\s+([\s\S]+)$/,
      list = [ "dl" ],
      i, m;

  // see if we're dealing with a tight or loose block
  if ( ( m = block.match( tight ) ) ) {
    // pull subsequent tight DL blocks out of `next`
    var blocks = [ block ];
    while ( next.length && tight.exec( next[ 0 ] ) ) {
      blocks.push( next.shift() );
    }

    for ( var b = 0; b < blocks.length; ++b ) {
      var m = blocks[ b ].match( tight ),
          terms = m[ 1 ].replace( /\n$/, "" ).split( /\n/ ),
          defns = m[ 2 ].split( /\n:\s+/ );

      // print( uneval( m ) );

      for ( i = 0; i < terms.length; ++i ) {
        list.push( [ "dt", terms[ i ] ] );
      }

      for ( i = 0; i < defns.length; ++i ) {
        // run inline processing over the definition
        list.push( [ "dd" ].concat( this.processInline( defns[ i ].replace( /(\n)\s+/, "$1" ) ) ) );
      }
    }
  }
  else {
    return undefined;
  }

  return [ list ];
};

// splits on unescaped instances of @ch. If @ch is not a character the result
// can be unpredictable

Markdown.dialects.Maruku.block.table = function table (block, next) {

    var _split_on_unescaped = function(s, ch) {
        ch = ch || '\\s';
        if (ch.match(/^[\\|\[\]{}?*.+^$]$/)) { ch = '\\' + ch; }
        var res = [ ],
            r = new RegExp('^((?:\\\\.|[^\\\\' + ch + '])*)' + ch + '(.*)'),
            m;
        while(m = s.match(r)) {
            res.push(m[1]);
            s = m[2];
        }
        res.push(s);
        return res;
    }

    var leading_pipe = /^ {0,3}\|(.+)\n {0,3}\|\s*([\-:]+[\-| :]*)\n((?:\s*\|.*(?:\n|$))*)(?=\n|$)/,
        // find at least an unescaped pipe in each line
        no_leading_pipe = /^ {0,3}(\S(?:\\.|[^\\|])*\|.*)\n {0,3}([\-:]+\s*\|[\-| :]*)\n((?:(?:\\.|[^\\|])*\|.*(?:\n|$))*)(?=\n|$)/,
        i, m;
    if (m = block.match(leading_pipe)) {
        // remove leading pipes in contents
        // (header and horizontal rule already have the leading pipe left out)
        m[3] = m[3].replace(/^\s*\|/gm, '');
    } else if (! ( m = block.match(no_leading_pipe))) {
        return undefined;
    }

    var table = [ "table", [ "thead", [ "tr" ] ], [ "tbody" ] ];

    // remove trailing pipes, then split on pipes
    // (no escaped pipes are allowed in horizontal rule)
    m[2] = m[2].replace(/\|\s*$/, '').split('|');

    // process alignment
    var html_attrs = [ ];
    forEach (m[2], function (s) {
        if (s.match(/^\s*-+:\s*$/))       html_attrs.push({align: "right"});
        else if (s.match(/^\s*:-+\s*$/))  html_attrs.push({align: "left"});
        else if (s.match(/^\s*:-+:\s*$/)) html_attrs.push({align: "center"});
        else                              html_attrs.push({});
    });

    // now for the header, avoid escaped pipes
    m[1] = _split_on_unescaped(m[1].replace(/\|\s*$/, ''), '|');
    for (i = 0; i < m[1].length; i++) {
        table[1][1].push(['th', html_attrs[i] || {}].concat(
            this.processInline(m[1][i].trim())));
    }

    // now for body contents
    forEach (m[3].replace(/\|\s*$/mg, '').split('\n'), function (row) {
        var html_row = ['tr'];
        row = _split_on_unescaped(row, '|');
        for (i = 0; i < row.length; i++) {
            html_row.push(['td', html_attrs[i] || {}].concat(this.processInline(row[i].trim())));
        }
        table[2].push(html_row);
    }, this);

    return [table];
}

Markdown.dialects.Maruku.inline[ "{:" ] = function inline_meta( text, matches, out ) {
  if ( !out.length ) {
    return [ 2, "{:" ];
  }

  // get the preceeding element
  var before = out[ out.length - 1 ];

  if ( typeof before === "string" ) {
    return [ 2, "{:" ];
  }

  // match a meta hash
  var m = text.match( /^\{:\s*((?:\\\}|[^\}])*)\s*\}/ );

  // no match, false alarm
  if ( !m ) {
    return [ 2, "{:" ];
  }

  // attach the attributes to the preceeding element
  var meta = this.dialect.processMetaHash( m[ 1 ] ),
      attr = extract_attr( before );

  if ( !attr ) {
    attr = {};
    before.splice( 1, 0, attr );
  }

  for ( var k in meta ) {
    attr[ k ] = meta[ k ];
  }

  // cut out the string and replace it with nothing
  return [ m[ 0 ].length, "" ];
};

Markdown.dialects.Maruku.inline.__escape__ = /^\\[\\`\*_{}\[\]()#\+.!\-|:]/;

Markdown.buildBlockOrder ( Markdown.dialects.Maruku.block );
Markdown.buildInlinePatterns( Markdown.dialects.Maruku.inline );

var isArray = Array.isArray || function(obj) {
  return Object.prototype.toString.call(obj) == "[object Array]";
};

var forEach;
// Don't mess with Array.prototype. Its not friendly
if ( Array.prototype.forEach ) {
  forEach = function( arr, cb, thisp ) {
    return arr.forEach( cb, thisp );
  };
}
else {
  forEach = function(arr, cb, thisp) {
    for (var i = 0; i < arr.length; i++) {
      cb.call(thisp || arr, arr[i], i, arr);
    }
  }
}

var isEmpty = function( obj ) {
  for ( var key in obj ) {
    if ( hasOwnProperty.call( obj, key ) ) {
      return false;
    }
  }

  return true;
}

function extract_attr( jsonml ) {
  return isArray(jsonml)
      && jsonml.length > 1
      && typeof jsonml[ 1 ] === "object"
      && !( isArray(jsonml[ 1 ]) )
      ? jsonml[ 1 ]
      : undefined;
}



/**
 *  renderJsonML( jsonml[, options] ) -> String
 *  - jsonml (Array): JsonML array to render to XML
 *  - options (Object): options
 *
 *  Converts the given JsonML into well-formed XML.
 *
 *  The options currently understood are:
 *
 *  - root (Boolean): wether or not the root node should be included in the
 *    output, or just its children. The default `false` is to not include the
 *    root itself.
 */
expose.renderJsonML = function( jsonml, options ) {
  options = options || {};
  // include the root element in the rendered output?
  options.root = options.root || false;

  var content = [];

  if ( options.root ) {
    content.push( render_tree( jsonml ) );
  }
  else {
    jsonml.shift(); // get rid of the tag
    if ( jsonml.length && typeof jsonml[ 0 ] === "object" && !( jsonml[ 0 ] instanceof Array ) ) {
      jsonml.shift(); // get rid of the attributes
    }

    while ( jsonml.length ) {
      content.push( render_tree( jsonml.shift() ) );
    }
  }

  return content.join( "\n\n" );
};

function escapeHTML( text ) {
  return text.replace( /&/g, "&amp;" )
             .replace( /</g, "&lt;" )
             .replace( />/g, "&gt;" )
             .replace( /"/g, "&quot;" )
             .replace( /'/g, "&#39;" );
}

function render_tree( jsonml ) {
  // basic case
  if ( typeof jsonml === "string" ) {
    return escapeHTML( jsonml );
  }

  var tag = jsonml.shift(),
      attributes = {},
      content = [];

  if ( jsonml.length && typeof jsonml[ 0 ] === "object" && !( jsonml[ 0 ] instanceof Array ) ) {
    attributes = jsonml.shift();
  }

  while ( jsonml.length ) {
    content.push( render_tree( jsonml.shift() ) );
  }

  var tag_attrs = "";
  for ( var a in attributes ) {
    tag_attrs += " " + a + '="' + escapeHTML( attributes[ a ] ) + '"';
  }

  // be careful about adding whitespace here for inline elements
  if ( tag == "img" || tag == "br" || tag == "hr" ) {
    return "<"+ tag + tag_attrs + "/>";
  }
  else {
    return "<"+ tag + tag_attrs + ">" + content.join( "" ) + "</" + tag + ">";
  }
}

function convert_tree_to_html( tree, references, options ) {
  var i;
  options = options || {};

  // shallow clone
  var jsonml = tree.slice( 0 );

  if ( typeof options.preprocessTreeNode === "function" ) {
      jsonml = options.preprocessTreeNode(jsonml, references);
  }

  // Clone attributes if they exist
  var attrs = extract_attr( jsonml );
  if ( attrs ) {
    jsonml[ 1 ] = {};
    for ( i in attrs ) {
      jsonml[ 1 ][ i ] = attrs[ i ];
    }
    attrs = jsonml[ 1 ];
  }

  // basic case
  if ( typeof jsonml === "string" ) {
    return jsonml;
  }

  // convert this node
  switch ( jsonml[ 0 ] ) {
    case "header":
      jsonml[ 0 ] = "h" + jsonml[ 1 ].level;
      delete jsonml[ 1 ].level;
      break;
    case "bulletlist":
      jsonml[ 0 ] = "ul";
      break;
    case "numberlist":
      jsonml[ 0 ] = "ol";
      break;
    case "listitem":
      jsonml[ 0 ] = "li";
      break;
    case "para":
      jsonml[ 0 ] = "p";
      break;
    case "markdown":
      jsonml[ 0 ] = "html";
      if ( attrs ) delete attrs.references;
      break;
    case "code_block":
      jsonml[ 0 ] = "pre";
      i = attrs ? 2 : 1;
      var code = [ "code" ];
      code.push.apply( code, jsonml.splice( i, jsonml.length - i ) );
      jsonml[ i ] = code;
      break;
    case "inlinecode":
      jsonml[ 0 ] = "code";
      break;
    case "img":
      jsonml[ 1 ].src = jsonml[ 1 ].href;
      delete jsonml[ 1 ].href;
      break;
    case "linebreak":
      jsonml[ 0 ] = "br";
    break;
    case "link":
      jsonml[ 0 ] = "a";
      break;
    case "link_ref":
      jsonml[ 0 ] = "a";

      // grab this ref and clean up the attribute node
      var ref = references[ attrs.ref ];

      // if the reference exists, make the link
      if ( ref ) {
        delete attrs.ref;

        // add in the href and title, if present
        attrs.href = ref.href;
        if ( ref.title ) {
          attrs.title = ref.title;
        }

        // get rid of the unneeded original text
        delete attrs.original;
      }
      // the reference doesn't exist, so revert to plain text
      else {
        return attrs.original;
      }
      break;
    case "img_ref":
      jsonml[ 0 ] = "img";

      // grab this ref and clean up the attribute node
      var ref = references[ attrs.ref ];

      // if the reference exists, make the link
      if ( ref ) {
        delete attrs.ref;

        // add in the href and title, if present
        attrs.src = ref.href;
        if ( ref.title ) {
          attrs.title = ref.title;
        }

        // get rid of the unneeded original text
        delete attrs.original;
      }
      // the reference doesn't exist, so revert to plain text
      else {
        return attrs.original;
      }
      break;
  }

  // convert all the children
  i = 1;

  // deal with the attribute node, if it exists
  if ( attrs ) {
    // if there are keys, skip over it
    for ( var key in jsonml[ 1 ] ) {
        i = 2;
        break;
    }
    // if there aren't, remove it
    if ( i === 1 ) {
      jsonml.splice( i, 1 );
    }
  }

  for ( ; i < jsonml.length; ++i ) {
    jsonml[ i ] = convert_tree_to_html( jsonml[ i ], references, options );
  }

  return jsonml;
}


// merges adjacent text nodes into a single node
function merge_text_nodes( jsonml ) {
  // skip the tag name and attribute hash
  var i = extract_attr( jsonml ) ? 2 : 1;

  while ( i < jsonml.length ) {
    // if it's a string check the next item too
    if ( typeof jsonml[ i ] === "string" ) {
      if ( i + 1 < jsonml.length && typeof jsonml[ i + 1 ] === "string" ) {
        // merge the second string into the first and remove it
        jsonml[ i ] += jsonml.splice( i + 1, 1 )[ 0 ];
      }
      else {
        ++i;
      }
    }
    // if it's not a string recurse
    else {
      merge_text_nodes( jsonml[ i ] );
      ++i;
    }
  }
}

} )( (function() {
  if ( typeof exports === "undefined" ) {
    window.markdown = {};
    return window.markdown;
  }
  else {
    return exports;
  }
} )() );

},{"util":"/Users/lfisher/git/airport-codes/node_modules/browserify/node_modules/util/util.js"}],"/Users/lfisher/git/airport-codes/node_modules/underscore/underscore.js":[function(require,module,exports){
arguments[4]["/Users/lfisher/git/airport-codes/node_modules/backbone/node_modules/underscore/underscore.js"][0].apply(exports,arguments)
},{}],"/Users/lfisher/git/airport-codes/src/AppRouter.js":[function(require,module,exports){
var Backbone = require('backbone');
var AboutView = require('./views/AboutView');
var ContributeView = require('./views/ContributeView');
var AirportDetailView = require('./views/AirportDetailView');

var Router = Backbone.Router.extend({

  views: [],

  initialize: function(options) {
    this.airports = options.airports;
    this._lastOffset = 0;
  },

  routes: {
    "about":           "about",
    "contribute":      "contribute",
    "airport/:code":   "airport",
    "*path":           "default"
  },

  _hideAirports: function() {
    this.airports.each(function(airport) {
      airport.set('showDetail', false);
    });
  },

  _hideAbout: function() {
    if (this._aboutView) {
      this._aboutView.hide();
    }
  },

  _hideContribute: function() {
    if (this._contributeView) {
      this._contributeView.hide();
    }
  },

  _resetOffset: function() {
    Backbone.$(window).scrollTop(this._lastOffset);
  },

  _trackView: function(page, title) {
    if (window.ga) {
      ga('send', 'pageview', {
        'page': page,
        'title': title
      });
    }
  },

  default: function() {
    this._hideAbout();
    this._hideContribute();
    this._hideAirports();
    this._resetOffset();

    Backbone.$('body').removeClass('detail-open');
  },

  about: function() {
    if (!this._aboutView) {
      this._aboutView = new AboutView({airports: this.airports});
      Backbone.$('body').append(this._aboutView.render().el);
    }

    this._aboutView.show();
    this._hideContribute();
    this._hideAirports();
    this._lastOffset = (window.scrollY === undefined) ? window.pageYOffset : window.scrollY;

    Backbone.$('body').addClass('detail-open');
    this._trackView('#about', 'About');
  },

  contribute: function() {
    if (!this._contributeView) {
      this._contributeView = new ContributeView();
      Backbone.$('body').append(this._contributeView.render().el);
    }

    this._contributeView.show();
    this._hideAirports();
    this._hideAbout();
    this._lastOffset = (window.scrollY === undefined) ? window.pageYOffset : window.scrollY;

    Backbone.$('body').addClass('detail-open');
    this._trackView('#contribute', 'Contribute');
  },

  airport: function(code) {
    var airport = this.airports.get(code);

    this._hideAbout();
    this._hideContribute();
    this._hideAirports();
    this._lastOffset = (window.scrollY === undefined) ? window.pageYOffset : window.scrollY;

    if (airport) {
      if (this.views.indexOf(code) < 0) {
        var view = new AirportDetailView({airports: this.airports, model: airport});
        view.render();
        this.views.push(code);
      }

      airport.set('showDetail', true);
      Backbone.$('body').addClass('detail-open');
      this._trackView('#airport/'+code, 'Airport '+code.toUpperCase());
    } else {
      document.location.href = "/404.html";
    }
  }

});

module.exports = Router;

},{"./views/AboutView":"/Users/lfisher/git/airport-codes/src/views/AboutView.js","./views/AirportDetailView":"/Users/lfisher/git/airport-codes/src/views/AirportDetailView.js","./views/ContributeView":"/Users/lfisher/git/airport-codes/src/views/ContributeView.js","backbone":"/Users/lfisher/git/airport-codes/node_modules/backbone/backbone.js"}],"/Users/lfisher/git/airport-codes/src/collections/Airports.js":[function(require,module,exports){
var Backbone = require('backbone');
var Airport = require('../models/Airport');

var Airports = Backbone.Collection.extend({

  model: Airport,

  comparator: 'id'

});

module.exports = Airports;
},{"../models/Airport":"/Users/lfisher/git/airport-codes/src/models/Airport.js","backbone":"/Users/lfisher/git/airport-codes/node_modules/backbone/backbone.js"}],"/Users/lfisher/git/airport-codes/src/models/Airport.js":[function(require,module,exports){
var Backbone = require('backbone');
var markdown = require('markdown').markdown;

var Airport = Backbone.Model.extend({

  defaults: {
    code: 'aaa',
    name: 'Default Airport',
    city: 'City',
    state: 'State',
    country: 'Country',
    description: 'Description',
    imageCredit: 'Photographer',
    visible: true,
    showDetail: false
  },

  initialize: function(options) {
    var md = markdown.toHTML(options.description);
    this.set('description', md);
  }

});

module.exports = Airport;
},{"backbone":"/Users/lfisher/git/airport-codes/node_modules/backbone/backbone.js","markdown":"/Users/lfisher/git/airport-codes/node_modules/markdown/lib/index.js"}],"/Users/lfisher/git/airport-codes/src/views/AboutView.js":[function(require,module,exports){
var Backbone = require('backbone');
var _ = require('underscore');
var template = require('./templates/AboutView.jade');

var AboutView = Backbone.View.extend({

  tagName: 'div',
  className: 'about site-info',

  initialize: function(options) {
    this.airports = options.airports;
    this._generateStats();
  },

  _generateStats: function() {
    this._airportCount = this.airports.length;
    this._countryCount = _.unique(this.airports.pluck('country')).length;
    this._photographerCount = _.unique(this.airports.pluck('imageCredit')).length;
  },

  viewModel: function() {
    return {
      airportCount: this._airportCount,
      countryCount: this._countryCount,
      photographerCount: this._photographerCount
    };
  },

  show: function() {
    this.$el.removeClass('hidden');
  },

  hide: function() {
    this.$el.addClass('hidden');
  },

  render: function() {
    this.$el.html(template(this.viewModel()));
    return this;
  }

});

module.exports = AboutView;
},{"./templates/AboutView.jade":"/Users/lfisher/git/airport-codes/src/views/templates/AboutView.jade","backbone":"/Users/lfisher/git/airport-codes/node_modules/backbone/backbone.js","underscore":"/Users/lfisher/git/airport-codes/node_modules/underscore/underscore.js"}],"/Users/lfisher/git/airport-codes/src/views/AirportDetailView.js":[function(require,module,exports){
(function (process){
var Backbone = require('backbone');
var SocialView = require('./SocialView');

var template = require('./templates/AirportDetailView.jade');

var AirportDetailView = Backbone.View.extend({

  tagName: 'div',
  className: 'detail',

  events: {
    'click a.random': '_handleRandom'
  },

  initialize: function(options) {
    this.airports = options.airports;
    this.model.on('change:showDetail', this.toggle, this);
  },

  viewModel: function() {
    return {
      code: this.model.get('code'),
      name: this.model.get('name'),
      city: this.model.get('city'),
      state: this.model.get('state'),
      stateShort: this.model.get('stateShort'),
      country: this.model.get('country'),
      description: this.model.get('description'),
      imageCredit: this.model.get('imageCredit'),
      imageCreditLink: this.model.get('imageCreditLink')
    };
  },

  show: function() {
    var self = this;
    process.nextTick(function() {
      self.model.set('showDetail', true);
    });
  },

  hide: function() {
    this.model.set('showDetail', false);
  },

  toggle: function() {
    this.$el.toggleClass('hidden', !this.model.get('showDetail'));
  },

  _handleRandom: function(event) {
    event.preventDefault();
    var len = this.airports.length;
    window.location.href = '#airport/' + this.airports.at(Math.floor(Math.random()*len)).get('id');
  },

  _setClassName: function() {
    this.$el.addClass(this.model.get('code'));
  },

  render: function() {
    this._setClassName();
    this.$el.html(template(this.viewModel()));

    this._renderSocialViews();

    Backbone.$('body').append(this.$el);
    return this;
  },

  _renderSocialViews: function() {
    if (!this._twitter) {
      this._twitter = new SocialView({
        url: 'https://twitter.com/intent/tweet?url=$SHARE_URL&text=$TEXT',
        type: 'twitter',
        text: 'Making sense of those three-letter airport codes. ' + this.model.get('code').toUpperCase() + ':',
        share_url: 'http://airportcod.es/%23airport/' + this.model.get('code')
      });
      this._twitter.render();
    }

    if (!this._facebook) {
      this._facebook = new SocialView({
        url: 'https://www.facebook.com/sharer/sharer.php?u=$SHARE_URL',
        type: 'facebook',
        share_url: 'http://airportcod.es/#airport/' + this.model.get('code')
      });
      this._facebook.render();
    }

    this.$('.detail-info').append([this._twitter.el, this._facebook.el]);
  }

});

module.exports = AirportDetailView;
}).call(this,require('_process'))
},{"./SocialView":"/Users/lfisher/git/airport-codes/src/views/SocialView.js","./templates/AirportDetailView.jade":"/Users/lfisher/git/airport-codes/src/views/templates/AirportDetailView.jade","_process":"/Users/lfisher/git/airport-codes/node_modules/browserify/node_modules/process/browser.js","backbone":"/Users/lfisher/git/airport-codes/node_modules/backbone/backbone.js"}],"/Users/lfisher/git/airport-codes/src/views/AirportListView.js":[function(require,module,exports){
(function (process){
var Backbone = require('backbone');
var AirportView = require('./AirportView');
var ContributeItemView = require('./ContributeItemView');

var AirportListView = Backbone.View.extend({

  tagName: 'ul',
  className: 'cf airport-list',

  _deferTimer: null,

  initialize: function(options) {
    this.airports = options.airports;
    this.render();

    this.airports.on('change:visible', this._handleChange, this);

    var self = this;
    Backbone.$(window).scroll(function() {
      self._updateViews(arguments);
    });

    Backbone.$(window).resize(function() {
      self._updateViews(arguments);
    });
  },

  // Defer our changes so we only update the views once
  _deferChange: function() {
    if (this._deferTimer) {
      clearTimeout(this._deferTimer);
    }

    var self = this;
    this._deferTimer = setTimeout(function() {
      self._updateViews();
    }, 2);
  },

  _handleChange: function() {
    this._deferChange();
  },

  _checkLazyload: function(view) {
    var scrollY = (window.scrollY === undefined) ? window.pageYOffset : window.scrollY;
    var height = window.innerHeight;

    function comingInView() {
      return (scrollY + height + 500 >= view.$el.offset().top);
    }

    if (view.isVisible() && !view.loading && !view.loaded && comingInView()) {
      view.lazyLoad();
    }
  },

  _updateViews: function(event) {
    for(var i=0;i<this._views.length;i++) {
      this._checkLazyload(this._views[i]);
    }
  },

  render: function() {
    var views = this.renderAirports();
    this.$el.html('');
    this.$el.append(views);

    var contributeItemView = new ContributeItemView();
    this.$el.append(contributeItemView.render().el);

    var self = this;
    process.nextTick(function(){
      self._updateViews();
    });

    return this;
  },

  renderAirports: function() {
    var views = [];
    this._views = [];
    var self = this;

    this.airports.each(function(model) {
      var view = new AirportView({model: model});
      self._views.push(view);
      views.push(view.render().el);
    });

    return views;
  }

});

module.exports = AirportListView;

}).call(this,require('_process'))
},{"./AirportView":"/Users/lfisher/git/airport-codes/src/views/AirportView.js","./ContributeItemView":"/Users/lfisher/git/airport-codes/src/views/ContributeItemView.js","_process":"/Users/lfisher/git/airport-codes/node_modules/browserify/node_modules/process/browser.js","backbone":"/Users/lfisher/git/airport-codes/node_modules/backbone/backbone.js"}],"/Users/lfisher/git/airport-codes/src/views/AirportView.js":[function(require,module,exports){
var Backbone = require('backbone');
var template = require('./templates/AirportView.jade');

var AirportView = Backbone.View.extend({

  tagName: 'li',
  className: 'card',

  initialize: function() {
    this.model.on('change:visible', this._setClassName, this);
    this.imageUrl = this._getImageUrl().replace(/(url|["()])/ig, '');
  },

  viewModel: function() {
    return {
      code: this.model.get('code'),
      name: this.model.get('name'),
      city: this.model.get('city'),
      state: this.model.get('state'),
      country: this.model.get('country'),
      description: this.model.get('description'),
      imageCredit: this.model.get('imageCredit'),
      imageCreditLink: this.model.get('imageCreditLink')
    };
  },

  isVisible: function() {
    return this.model.get('visible');
  },

  _setClassName: function() {
    this.$el.addClass(this.model.get('code'));
    this.$el.toggleClass('loaded', this.loaded);
    this.$el.toggleClass('hidden', !this.model.get('visible'));
  },

  _getImageUrl: function() {
    for( var j=0;j<document.styleSheets.length;j++ ) {
      var classes = document.styleSheets[j].rules || document.styleSheets[j].cssRules;
      for( var i=0;i<classes.length;i++ ) {
        if (classes[i].selectorText === '.card.'+this.model.get('id')+' .background' ||
            classes[i].selectorText === '.'+this.model.get('id')+'.card .background') {
          return classes[i].style.backgroundImage;
        }
      }
    }

    return '';
  },

  lazyLoad: function() {
    var img = new Image();
    img.src = this.imageUrl;

    var self = this;

    var handleLoad = function() {
      clearTimeout(loadTimeout);
      img.onload = null;

      self.loading = false;
      self.loaded = true;
      self._setClassName();

      img = null;
    };

    img.onload = handleLoad;
    var loadTimeout = setTimeout(handleLoad, 10000);

    this.loading = true;
  },

  render: function() {
    this.$el.html(template(this.viewModel()));
    return this;
  }

});

module.exports = AirportView;

},{"./templates/AirportView.jade":"/Users/lfisher/git/airport-codes/src/views/templates/AirportView.jade","backbone":"/Users/lfisher/git/airport-codes/node_modules/backbone/backbone.js"}],"/Users/lfisher/git/airport-codes/src/views/AppView.js":[function(require,module,exports){
var Backbone = require('backbone');
var SearchView = require('./SearchView');
var AirportListView = require('./AirportListView');

var AppView = Backbone.View.extend({

  el: 'body',

  initialize: function(options) {
    this._airports = options.airports;
  },

  render: function() {
    this._searchView = new SearchView({
      airports: this._airports
    });
    this.$el.append(this._searchView.render().el);

    this._airportListView = new AirportListView({
      airports: this._airports
    });
    this.$el.append(this._airportListView.render().el);

    return this;
  }

});

module.exports = AppView;
},{"./AirportListView":"/Users/lfisher/git/airport-codes/src/views/AirportListView.js","./SearchView":"/Users/lfisher/git/airport-codes/src/views/SearchView.js","backbone":"/Users/lfisher/git/airport-codes/node_modules/backbone/backbone.js"}],"/Users/lfisher/git/airport-codes/src/views/ContributeItemView.js":[function(require,module,exports){
var Backbone = require('backbone');
var template = require('./templates/ContributeItemView.jade');

var ContributeItemView = Backbone.View.extend({

  tagName: 'li',
  className: 'card card-contribute',

  render: function() {
    this.$el.html(template());
    return this;
  }

});

module.exports = ContributeItemView;
},{"./templates/ContributeItemView.jade":"/Users/lfisher/git/airport-codes/src/views/templates/ContributeItemView.jade","backbone":"/Users/lfisher/git/airport-codes/node_modules/backbone/backbone.js"}],"/Users/lfisher/git/airport-codes/src/views/ContributeView.js":[function(require,module,exports){
var Backbone = require('backbone');
var template = require('./templates/ContributeView.jade');

var ContributeView = Backbone.View.extend({

  tagName: 'div',
  className: 'contribute site-info',

  show: function() {
    this.$el.removeClass('hidden');
  },

  hide: function() {
    this.$el.addClass('hidden');
  },

  render: function() {
    this.$el.html(template());
    return this;
  }

});

module.exports = ContributeView;
},{"./templates/ContributeView.jade":"/Users/lfisher/git/airport-codes/src/views/templates/ContributeView.jade","backbone":"/Users/lfisher/git/airport-codes/node_modules/backbone/backbone.js"}],"/Users/lfisher/git/airport-codes/src/views/SearchView.js":[function(require,module,exports){
var Backbone = require('backbone');
var template = require('./templates/SearchView.jade');

var _ = require('underscore');

var SEARCH_FIELD = [
  'code', 'name', 'nameEnglish', 'city', 'city2', 'city3', 'state', 'stateShort', 'country'
];

var SearchView = Backbone.View.extend({

  tagName: 'header',

  events: {
    'keyup input': '_handleKey',
    'click button.clear': '_handleReset'
  },

  initialize: function(options) {
    this.airports = options.airports;
  },

  _handleKey: function(event) {
    var $el = this.$(event.target);
    this._search($el.val());
  },

  _handleReset: function(event) {
    event.preventDefault();
    this.$('input').val('').keyup();
  },

  _search: function(value) {
    var searchTerm = new RegExp('^'+value, 'gi');
    var results = [];
    var airports = this.airports;

    airports.each(function(airport) {
      var hasMatch = false;

      // Search each field
      for(var i=0;i<SEARCH_FIELD.length;i++) {
        var key = SEARCH_FIELD[i];

        // Validate we match
        if(searchTerm.test(airport.get(key))) {
          hasMatch = true;
          break;
        }
      }

      results.push({
        model: airport,
        visible: hasMatch
      });

    });

    _.each(results, function(result) {
      result.model.set('visible', result.visible);
    });

  },

  render: function() {
    this.$el.html(template());
    return this;
  }

});

module.exports = SearchView;
},{"./templates/SearchView.jade":"/Users/lfisher/git/airport-codes/src/views/templates/SearchView.jade","backbone":"/Users/lfisher/git/airport-codes/node_modules/backbone/backbone.js","underscore":"/Users/lfisher/git/airport-codes/node_modules/underscore/underscore.js"}],"/Users/lfisher/git/airport-codes/src/views/SocialView.js":[function(require,module,exports){
var Backbone = require('backbone');
var template = require('./templates/SocialView.jade');

var SocialView = Backbone.View.extend({

  className: 'social',

  events: {
    "click a": "_handleClick"
  },

  initialize: function(options) {
    this.type = options.type;
    this.url = options.url;
    this.options = options;
  },

  _handleClick: function(event) {
    event.preventDefault();
    var url = this.url;

    for(var key in this.options) {
      var rx = new RegExp('\\$'+key.toUpperCase());
      url = url.replace(rx, this.options[key]);
    }

    window.open(url, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');
  },

  render: function() {
    this.$el.html(template({
      url: this.url,
      type: this.type
    }));
    return this;
  }

});

module.exports = SocialView;
},{"./templates/SocialView.jade":"/Users/lfisher/git/airport-codes/src/views/templates/SocialView.jade","backbone":"/Users/lfisher/git/airport-codes/node_modules/backbone/backbone.js"}],"/Users/lfisher/git/airport-codes/src/views/templates/AboutView.jade":[function(require,module,exports){
var jade = require("jade/runtime");

module.exports = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (airportCount, countryCount, photographerCount) {
buf.push("<div class=\"overlay\"><div class=\"container\"><div class=\"content\"><h1>About</h1><p>Every airport has a unique three-letter <a href=\"http://en.wikipedia.org/wiki/International_Air_Transport_Association\">IATA</a> code. Some make sense if you know the city or the name of the airport and others, well, what the heck?</p><p>Turns out there’s usually a reasonable explanation. Knowing what each IATA code stands for isn’t super useful, but it sure can be fun.</p><p>This site was designed and built by <a href=\"https://twitter.com/lynnandtonic\">Lynn Fisher</a> and <a href=\"https://twitter.com/nickcrohn\">Nick Crohn</a>.</p><p>Photos generously provided by the Flickr and Wikimedia communities who license their work under Creative Commons.</p><hr/><p class=\"quote\">“Hey, you left [my airport] off the list!”</p><a href=\"#contribute\" class=\"btn\">Contribute</a><hr/><h3>airportcod.es Status</h3><div class=\"stats\"><p><span class=\"stat\">" + (jade.escape((jade_interp = airportCount) == null ? '' : jade_interp)) + "</span><span> airports</span></p><p><span>from </span><span class=\"stat\">" + (jade.escape((jade_interp = countryCount) == null ? '' : jade_interp)) + "</span><span> countries</span></p><p><span>with photos by </span><span class=\"stat\">" + (jade.escape((jade_interp = photographerCount) == null ? '' : jade_interp)) + "</span><span> photographers</span></p></div><hr/><div class=\"footnote\"><p>All photographs are from Flickr & Wikipedia, under Creative Commons licenses, or with permission from the photographer.</p><p>Sources: <a href=\"http://www.wikipedia.org/\">wikipedia.org</a>, <a href=\"http://www.skygod.com/asstd/abc.html\">skygod.com</a>, <a href=\"http://www.city-data.com/forum/toronto/2177590-why-airport-code-toronto-yyz.html\">citydata.com</a>, <a href=\"http://abcnews.go.com/Travel/history-airport-codes-logic-letter-codes/story?id=11684406&amp;singlePage=true\">abcnews.com</a>, <a href=\"http://www.quora.com/Why-do-some-airport-codes-in-India-start-with-IX\">quora.com</a>, <a href=\"http://www.andalucia.com/travel/airports/malaga/fascinating-facts.htm\">andalucia.com</a>, <a href=\"http://hawaii.gov/ito/airport-information/faq\">hawaii.gov</a>, <a href=\"http://generalaviationnews.com/\">generalaviationnews.com</a>, <a href=\"http://www.aspenairport.com/\">aspenairport.com</a></p></div></div><a href=\"#\" class=\"back\">Airport Codes</a></div></div>");}.call(this,"airportCount" in locals_for_with?locals_for_with.airportCount:typeof airportCount!=="undefined"?airportCount:undefined,"countryCount" in locals_for_with?locals_for_with.countryCount:typeof countryCount!=="undefined"?countryCount:undefined,"photographerCount" in locals_for_with?locals_for_with.photographerCount:typeof photographerCount!=="undefined"?photographerCount:undefined));;return buf.join("");
};
},{"jade/runtime":"/Users/lfisher/git/airport-codes/node_modules/jade/runtime.js"}],"/Users/lfisher/git/airport-codes/src/views/templates/AirportDetailView.jade":[function(require,module,exports){
var jade = require("jade/runtime");

module.exports = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (city, code, country, description, imageCredit, imageCreditLink, name, stateShort) {
buf.push("<div class=\"overlay\"><div class=\"container\"><div class=\"detail-info\"><h1>" + (jade.escape(null == (jade_interp = code) ? "" : jade_interp)) + "</h1><h2>" + (jade.escape(null == (jade_interp = name) ? "" : jade_interp)) + "</h2><h3><span class=\"city\">" + (jade.escape(null == (jade_interp = city) ? "" : jade_interp)) + "</span><span class=\"state\">" + (jade.escape(null == (jade_interp = stateShort) ? "" : jade_interp)) + "</span><span class=\"country\">" + (jade.escape(null == (jade_interp = country) ? "" : jade_interp)) + "</span></h3><div class=\"description\">" + (null == (jade_interp = description) ? "" : jade_interp) + "</div><a href=\"#\" class=\"close-detail\"></a></div><div class=\"photo-credit\">photo by <a" + (jade.attr("href", imageCreditLink, true, false)) + ">" + (jade.escape(null == (jade_interp = imageCredit) ? "" : jade_interp)) + "</a></div><a href=\"#\" class=\"back\">Airport Codes</a></div></div>");}.call(this,"city" in locals_for_with?locals_for_with.city:typeof city!=="undefined"?city:undefined,"code" in locals_for_with?locals_for_with.code:typeof code!=="undefined"?code:undefined,"country" in locals_for_with?locals_for_with.country:typeof country!=="undefined"?country:undefined,"description" in locals_for_with?locals_for_with.description:typeof description!=="undefined"?description:undefined,"imageCredit" in locals_for_with?locals_for_with.imageCredit:typeof imageCredit!=="undefined"?imageCredit:undefined,"imageCreditLink" in locals_for_with?locals_for_with.imageCreditLink:typeof imageCreditLink!=="undefined"?imageCreditLink:undefined,"name" in locals_for_with?locals_for_with.name:typeof name!=="undefined"?name:undefined,"stateShort" in locals_for_with?locals_for_with.stateShort:typeof stateShort!=="undefined"?stateShort:undefined));;return buf.join("");
};
},{"jade/runtime":"/Users/lfisher/git/airport-codes/node_modules/jade/runtime.js"}],"/Users/lfisher/git/airport-codes/src/views/templates/AirportView.jade":[function(require,module,exports){
var jade = require("jade/runtime");

module.exports = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (code) {
buf.push("<div class=\"background\"></div><a" + (jade.attr("href", "#airport/"+code, true, false)) + ">" + (jade.escape(null == (jade_interp = code) ? "" : jade_interp)) + "</a>");}.call(this,"code" in locals_for_with?locals_for_with.code:typeof code!=="undefined"?code:undefined));;return buf.join("");
};
},{"jade/runtime":"/Users/lfisher/git/airport-codes/node_modules/jade/runtime.js"}],"/Users/lfisher/git/airport-codes/src/views/templates/ContributeItemView.jade":[function(require,module,exports){
var jade = require("jade/runtime");

module.exports = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<a href=\"#contribute\"><span class=\"placeholder\">New</span><span class=\"card-contribute-content\">Contribute an airport</span></a>");;return buf.join("");
};
},{"jade/runtime":"/Users/lfisher/git/airport-codes/node_modules/jade/runtime.js"}],"/Users/lfisher/git/airport-codes/src/views/templates/ContributeView.jade":[function(require,module,exports){
var jade = require("jade/runtime");

module.exports = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<div class=\"overlay\"><div class=\"container\"><div class=\"content\"><h1>Contribute</h1><p>There are lots (and we mean lots!) of airports in the world. We’ll add as many as we can and we encourage you to contribute airports, too.</p><p>A couple ways you can help make the site more awesome:</p><ul><li>Tweet at us! We’d love to hear your suggestions. We’re <a href=\"https://twitter.com/lynnandtonic\">@lynnandtonic</a> and <a href=\"https://twitter.com/nickcrohn\">@nickcrohn</a> on Twitter.</li><li>Contribute code and/or content to Airport Codes via <a href=\"https://github.com/lynnandtonic/airport-codes\">GitHub</a>.</li></ul><hr/><p class=\"quote\">Fly well, friends.</p><a href=\"#\" class=\"btn\">Back to Airport Codes</a><hr/></div><a href=\"#\" class=\"back\">Airport Codes</a></div></div>");;return buf.join("");
};
},{"jade/runtime":"/Users/lfisher/git/airport-codes/node_modules/jade/runtime.js"}],"/Users/lfisher/git/airport-codes/src/views/templates/SearchView.jade":[function(require,module,exports){
var jade = require("jade/runtime");

module.exports = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<nav class=\"cf\"><h1><a href=\"#\">Airport Codes</a><a href=\"#about\" class=\"nav-about\">About</a></h1><input type=\"text\" name=\"search\" autocomplete=\"off\" autocorrect=\"off\" placeholder=\"Find your airport\"/><button type=\"reset\" class=\"clear\"></button></nav>");;return buf.join("");
};
},{"jade/runtime":"/Users/lfisher/git/airport-codes/node_modules/jade/runtime.js"}],"/Users/lfisher/git/airport-codes/src/views/templates/SocialView.jade":[function(require,module,exports){
var jade = require("jade/runtime");

module.exports = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (type, url) {
buf.push("<a" + (jade.attr("href", url, true, false)) + (jade.cls([type], [true])) + ">Share on <span>" + (jade.escape(null == (jade_interp = type) ? "" : jade_interp)) + "</span></a>");}.call(this,"type" in locals_for_with?locals_for_with.type:typeof type!=="undefined"?type:undefined,"url" in locals_for_with?locals_for_with.url:typeof url!=="undefined"?url:undefined));;return buf.join("");
};
},{"jade/runtime":"/Users/lfisher/git/airport-codes/node_modules/jade/runtime.js"}]},{},["./src/App.js"]);

//# sourceMappingURL=app.js.map