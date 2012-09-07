define(function(){valueParser=function(){function x(a){if(a==="title")return d.querySelector("title").innerHTML;var b=d.querySelector('[property="'+a+'"]'),c=d.querySelector('[name="'+a+'"]'),e="";b?e=b.getAttribute("content"):c&&(e=c.getAttribute("content"));return e?e:undefined}function w(a){return x("og:"+a)}function v(a){var b=a.split("|"),d=b[0],e=b[1],f=c.querySelector("[itemscope][itemtype|="+d+"]");if(f){var g=f.querySelector("[itemprop="+e+"]");if(g){var h=g.getAttribute("content"),i=g.getAttribute("src"),j=g.getAttribute("datetime"),k=g.innerHTML;return h?h:i?i:j?j:k}}return undefined}function u(a){var b="data-issw-"+a,d=c.querySelector("["+b+"]");if(d){var e=d.getAttribute(b);if(e)return e;var f=d.getAttribute("content"),g=d.getAttribute("src"),h=d.getAttribute("datetime"),i=d.innerHTML;return f?f:g?g:h?h:i.indexOf("ins-widget")===-1?i:""}return undefined}function t(a){a=m(a),a=p(a),a=a.replace(/&#/g,"##AMPHASH##"),a=a.replace(/&/g,"&#38;"),a=a.replace(/##AMPHASH##/g,"&#"),a=a.replace(/&#\d*([^\d;]|$)/g,"$1"),a=n(a);return a}function s(a){a=a.replace(/&lt;/g,"<"),a=a.replace(/&gt;/g,">"),a=a.replace(/&amp;/g,"&"),a=a.replace(/\\(b|f|n|r|t)/g,""),a=a.replace(/\\(.{1})/g,"$1");var b=new RegExp(/&#39;/g),c=new RegExp(/&#34;/g),d=a.split("<"),e=d.length;while(e--)tempTags=d[e].split(">"),tempTags.length===2&&(tempTags[0]=tempTags[0].replace(b,"'"),tempTags[0]=tempTags[0].replace(c,'"')),d[e]=tempTags.join(">");a=d.join("<");return a}function r(a){a=p(s(a));var b=a.match(/&#[0-9]{1,6};/g);if(b!==null){var c=b.length;while(c--){var d=b[c],e=d.slice(2,d.length-2);a=a.replace(d,String.fromCharCode(e))}}return l(a)}function q(a){return o(a,f,e)}function p(a){return o(a,e,f)}function o(a,b,c){var d=b.length;while(d--){var e=new RegExp(b[d],"g");a=a.replace(e,c[d])}return a}function n(a){return a.replace(/(&amp;)(amp;)+/,"$1")}function m(a){a=a.replace(/\'/g,"&#39;"),a=a.replace(/\"/g,"&#34;"),a=a.replace(/</g,"&#60;"),a=a.replace(/>/g,"&#62;");return a}function l(a){var b=[[/[\u2012-\u2015]/g," -- "],[/[\u2024\u2027]/g,"."],[/[\u2025\u2026]/g,"..."],[/[\u00AB\u00BB\u201C-\u201F\u2033\u2034\u2036\u2037]/g,'"'],[/[\u00B4\u02BC\u2018\u2019\u201B\u2032\u2035]/g,"'"],[/[\u201A]/g,","],[/[\u20AC]/g," EUR "],[/[\u00A5]/g," JPY "],[/[\u00A3]/g," GBP "],[/[\u00B1]/g,"+/-"],[/[\u00D7]/g," x "],[/[\u00F7\u2044]/g," / "],[/[\u00B2]/g,"^2"],[/[\u00B3]/g,"^3"],[/[\u00B9]/g,"^1"],[/[\u00BC]/g,"1/4"],[/[\u00BD]/g,"1/2"],[/[\u00BE]/g,"3/4"],[/[\u00A9]/g,"(c)"],[/[\u00AE]/g,"(r)"],[/[\u2122]/g,"(tm)"],[/[\u00E0-\u00E5\u0101\u0103\u0105]/g,"a"],[/[\u00C0-\u00C5\u0100\u0102\u0104]/g,"A"],[/[\u00E6]/g,"ae"],[/[\u00C6]/g,"AE"],[/[\u00E7\u0107\u0109\u010B\u010D]/g,"c"],[/[\u00C7\u0106\u0108\u010A\u010C]/g,"C"],[/[\u010F\u0111]/g,"d"],[/[\u00D0\u010E\u0110]/g,"D"],[/[\u00E8-\u00EB\u0113\u0115\u0117\u0119\u011B]/g,"e"],[/[\u00C8-\u00CB\u0112\u0114\u0116\u0118\u011A]/g,"E"],[/[\u011F\u011D\u0121\u0123]/g,"g"],[/[\u00B3\u011C\u011E\u0120\u0122]/g,"G"],[/[\u0125\u0127]/g,"h"],[/[\u0124\u0126]/g,"H"],[/[\u00EC-\u00EF\u0129\u012B\u012D\u012F\u0131]/g,"i"],[/[\u00CC-\u00CF\u0128\u012A\u012C\u012E\u0130]/g,"I"],[/[\u0133]/g,"ij"],[/[\u0132]/g,"IJ"],[/[\u0135]/g,"j"],[/[\u0134]/g,"J"],[/[\u0137\u0138]/g,"k"],[/[\u0136]/g,"K"],[/[\u013A\u013C\u013E\u0140\u0142]/g,"l"],[/[\u0139\u013B\u013D\u013F\u0141]/g,"L"],[/[\u00F1\u0144\u0146\u0148\u0149\u014B]/g,"n"],[/[\u00D1\u0143\u0145\u0147\u014A]/g,"N"],[/[\u00F0\u00F2-\u00F6\u00F8\u014D\u014F\u0151]/g,"o"],[/[\u00D2-\u00D6\u00D8\u014c\u014E\u0150]/g,"O"],[/[\u0153]/g,"oe"],[/[\u0152]/g,"OE"],[/[\u0157\u0159]/g,"r"],[/[\u0156\u0158]/g,"R"],[/[\u015B\u015D\u015F\u0161]/g,"s"],[/[\u015A\u015C\u015E\u0160]/g,"S"],[/[\u00DF\u017F]/g,"ss"],[/[\u0163\u0165\u0167]/g,"t"],[/[\u0162\u0164\u0166]/g,"T"],[/[\u00F9-\u00FC\u0169\u016B\u016D\u016F\u0171\u0173]/g,"u"],[/[\u00D9-\u00DC\u0168\u016A\u016C\u016E\u0170\u0172]/g,"U"],[/[\u0175]/g,"w"],[/[\u0174]/g,"W"],[/[\u00FD\u00FF\u0177]/g,"y"],[/[\u00DD\u0176\u0178]/g,"Y"],[/[\u017A\u017C\u017E]/g,"z"],[/[\u0179\u017B\u017D]/g,"Z"]];for(var c=0,d=b.length;c<d;c++)a=a.replace(b[c][0],b[c][1]);a=a.replace(/[\u007F-\uFFFF]/g,"");return a}function k(a){a=a.replace(/\s+/g," ");return h(a)}function h(a){a=a.replace(/^\s+/,""),a=a.replace(/\s+$/,"");return a}function g(c){b=a=c}var a,b,c=document,d=c.querySelector("head"),e=["&nbsp;","&iexcl;","&cent;","&pound;","&curren;","&yen;","&brvbar;","&sect;","&uml;","&copy;","&ordf;","&laquo;","&not;","&shy;","&reg;","&macr;","&deg;","&plusmn;","&sup2;","&sup3;","&acute;","&micro;","&para;","&middot;","&cedil;","&sup1;","&ordm;","&raquo;","&frac14;","&frac12;","&frac34;","&iquest;","&Agrave;","&Aacute;","&Acirc;","&Atilde;","&Auml;","&Aring;","&AElig;","&Ccedil;","&Egrave;","&Eacute;","&Ecirc;","&Euml;","&Igrave;","&Iacute;","&Icirc;","&Iuml;","&ETH;","&Ntilde;","&Ograve;","&Oacute;","&Ocirc;","&Otilde;","&Ouml;","&times;","&Oslash;","&Ugrave;","&Uacute;","&Ucirc;","&Uuml;","&Yacute;","&THORN;","&szlig;","&agrave;","&aacute;","&acirc;","&atilde;","&auml;","&aring;","&aelig;","&ccedil;","&egrave;","&eacute;","&ecirc;","&euml;","&igrave;","&iacute;","&icirc;","&iuml;","&eth;","&ntilde;","&ograve;","&oacute;","&ocirc;","&otilde;","&ouml;","&divide;","&oslash;","&ugrave;","&uacute;","&ucirc;","&uuml;","&yacute;","&thorn;","&yuml;","&quot;","&amp;","&lt;","&gt;","&OElig;","&oelig;","&Scaron;","&scaron;","&Yuml;","&circ;","&tilde;","&ensp;","&emsp;","&thinsp;","&zwnj;","&zwj;","&lrm;","&rlm;","&ndash;","&mdash;","&lsquo;","&rsquo;","&sbquo;","&ldquo;","&rdquo;","&bdquo;","&dagger;","&Dagger;","&permil;","&lsaquo;","&rsaquo;","&euro;","&fnof;","&Alpha;","&Beta;","&Gamma;","&Delta;","&Epsilon;","&Zeta;","&Eta;","&Theta;","&Iota;","&Kappa;","&Lambda;","&Mu;","&Nu;","&Xi;","&Omicron;","&Pi;","&Rho;","&Sigma;","&Tau;","&Upsilon;","&Phi;","&Chi;","&Psi;","&Omega;","&alpha;","&beta;","&gamma;","&delta;","&epsilon;","&zeta;","&eta;","&theta;","&iota;","&kappa;","&lambda;","&mu;","&nu;","&xi;","&omicron;","&pi;","&rho;","&sigmaf;","&sigma;","&tau;","&upsilon;","&phi;","&chi;","&psi;","&omega;","&thetasym;","&upsih;","&piv;","&bull;","&hellip;","&prime;","&Prime;","&oline;","&frasl;","&weierp;","&image;","&real;","&trade;","&alefsym;","&larr;","&uarr;","&rarr;","&darr;","&harr;","&crarr;","&lArr;","&uArr;","&rArr;","&dArr;","&hArr;","&forall;","&part;","&exist;","&empty;","&nabla;","&isin;","&notin;","&ni;","&prod;","&sum;","&minus;","&lowast;","&radic;","&prop;","&infin;","&ang;","&and;","&or;","&cap;","&cup;","&int;","&there4;","&sim;","&cong;","&asymp;","&ne;","&equiv;","&le;","&ge;","&sub;","&sup;","&nsub;","&sube;","&supe;","&oplus;","&otimes;","&perp;","&sdot;","&lceil;","&rceil;","&lfloor;","&rfloor;","&lang;","&rang;","&loz;","&spades;","&clubs;","&hearts;","&diams;"],f=["&#160;","&#161;","&#162;","&#163;","&#164;","&#165;","&#166;","&#167;","&#168;","&#169;","&#170;","&#171;","&#172;","&#173;","&#174;","&#175;","&#176;","&#177;","&#178;","&#179;","&#180;","&#181;","&#182;","&#183;","&#184;","&#185;","&#186;","&#187;","&#188;","&#189;","&#190;","&#191;","&#192;","&#193;","&#194;","&#195;","&#196;","&#197;","&#198;","&#199;","&#200;","&#201;","&#202;","&#203;","&#204;","&#205;","&#206;","&#207;","&#208;","&#209;","&#210;","&#211;","&#212;","&#213;","&#214;","&#215;","&#216;","&#217;","&#218;","&#219;","&#220;","&#221;","&#222;","&#223;","&#224;","&#225;","&#226;","&#227;","&#228;","&#229;","&#230;","&#231;","&#232;","&#233;","&#234;","&#235;","&#236;","&#237;","&#238;","&#239;","&#240;","&#241;","&#242;","&#243;","&#244;","&#245;","&#246;","&#247;","&#248;","&#249;","&#250;","&#251;","&#252;","&#253;","&#254;","&#255;","&#34;","&#38;","&#60;","&#62;","&#338;","&#339;","&#352;","&#353;","&#376;","&#710;","&#732;","&#8194;","&#8195;","&#8201;","&#8204;","&#8205;","&#8206;","&#8207;","&#8211;","&#8212;","&#8216;","&#8217;","&#8218;","&#8220;","&#8221;","&#8222;","&#8224;","&#8225;","&#8240;","&#8249;","&#8250;","&#8364;","&#402;","&#913;","&#914;","&#915;","&#916;","&#917;","&#918;","&#919;","&#920;","&#921;","&#922;","&#923;","&#924;","&#925;","&#926;","&#927;","&#928;","&#929;","&#931;","&#932;","&#933;","&#934;","&#935;","&#936;","&#937;","&#945;","&#946;","&#947;","&#948;","&#949;","&#950;","&#951;","&#952;","&#953;","&#954;","&#955;","&#956;","&#957;","&#958;","&#959;","&#960;","&#961;","&#962;","&#963;","&#964;","&#965;","&#966;","&#967;","&#968;","&#969;","&#977;","&#978;","&#982;","&#8226;","&#8230;","&#8242;","&#8243;","&#8254;","&#8260;","&#8472;","&#8465;","&#8476;","&#8482;","&#8501;","&#8592;","&#8593;","&#8594;","&#8595;","&#8596;","&#8629;","&#8656;","&#8657;","&#8658;","&#8659;","&#8660;","&#8704;","&#8706;","&#8707;","&#8709;","&#8711;","&#8712;","&#8713;","&#8715;","&#8719;","&#8721;","&#8722;","&#8727;","&#8730;","&#8733;","&#8734;","&#8736;","&#8743;","&#8744;","&#8745;","&#8746;","&#8747;","&#8756;","&#8764;","&#8773;","&#8776;","&#8800;","&#8801;","&#8804;","&#8805;","&#8834;","&#8835;","&#8836;","&#8838;","&#8839;","&#8853;","&#8855;","&#8869;","&#8901;","&#8968;","&#8969;","&#8970;","&#8971;","&#9001;","&#9002;","&#9674;","&#9824;","&#9827;","&#9829;","&#9830;"];this.pull=function(){var a="";for(i=0,j=arguments.length;j--;i++){var b=arguments[i]+"",c=b.split("::");if(c.length===2){var d=c[0],e=c[1];switch(d){case"data":a=u(e);break;case"schema":a=v(e);break;case"og":a=w(e);break;case"meta":a=x(e)}}else a=b;if(a!==undefined)break}a?g(h(s(a))):g("");return this},this.htmlDecode=function(){b=r(b);return this},this.htmlEncode=function(){b=t(b);return this},this.purify=function(){b=l(b);return this},this.stripTags=function(){var a=document.createElement("div"),c=new RegExp(/<.+>/g);a.innerHTML=s(b),b=a.textContent||a.innerText||"";return c.test(b)?this.stripTags():this},this.toUpper=function(){b=b.toUpperCase();return this},this.toLower=function(){b=b.toLowerCase();return this},this.toFloat=function(a){var c=parseFloat(a);if(c.toString()!=="NaN"){var d=Math.pow(10,c);this.toNumber(),b=b*d+"",this.toInt(),b=b/d+""}return this},this.toInt=function(){this.toNumber(),b=parseInt(b)+"";return this},this.toNumber=function(){b=b+"",this.strip(/[^\d.]/g),b=parseFloat(b)+"";return this},this.strip=function(){var a=arguments.length;while(a--)b=b.replace(arguments[a],"");return this},this.limit=function(a){var a=parseInt(a);if(a.toString()!=="NaN"&&b.length>a&&a>0){var c=arguments[1]===!1?!1:!0;c&&(a-=3),b=k(b),b=b.slice(0,a),b+=c?"...":""}return this},this.fill=function(){var a=arguments.length,c=arguments;while(a--){var d=new RegExp("([^\\$])\\$"+(a+1)+"|^\\$"+(a+1),"g");b=b.replace(d,function(b,d,e,f){return d?d+c[a]:c[a]})}b=b.replace("$$","$");return this},this.boolValue=function(){var a=b;if(a){a=k(a+"").toLowerCase();if(a!=="f"&&a!=="none"&&a!=="false"&&a!=="na"&&a!=="0"&&a!=="")return!0}return!1},this.value=function(){var c=k(b);b=a;return c};return arguments.length?this.pull.apply(this,arguments):this instanceof valueParser?this.valueParser:new valueParser},valueParser.prototype.toString=function(){return"[INSPARQ VALUE PARSER]"};return valueParser})