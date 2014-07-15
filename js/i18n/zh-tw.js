
/* gettext library */

var catalog = new Array();

function pluralidx(n) {
  var v=0;
  if (typeof(v) == 'boolean') {
    return v ? 1 : 0;
  } else {
    return v;
  }
}
catalog['%(sel)s of %(cnt)s selected'] = [''];
catalog['%(sel)s of %(cnt)s selected'][0] = '\u5df2\u9078\u53d6 %(sel)s \u9805 (\u5171 %(cnt)s \u9805)';
catalog['0,01 PB/mo.'] = '0.01 PB/\u6708';
catalog['0,18 PB/mo.'] = '0.18 PB/\u6708';
catalog['1 Billion'] = '15 \u5104';
catalog['1 PB/mo.'] = '1 PB/\u6708';
catalog['1,477 PB/mo.'] = '1,477 PB/\u6708';
catalog['1.02 Billion'] = '10 \u5104 2000 \u842c';
catalog['1.37 Billion'] = '13 \u5104 7 \u5343\u842c';
catalog['1.5 Billion'] = '15 \u5104';
catalog['1.80 Billion'] = '18 \u5104';
catalog['10,000 PB/mo.'] = '10,000 PB/\u6708';
catalog['100 Million'] = '1 \u5104';
catalog['117.70 Million'] = '1 \u5104 1770 \u842c';
catalog['14,414 PB/mo.'] = '14,414 PB/\u6708';
catalog['15 Sept 1997: Google.com is\nregistered as a domain'] = '1997 \u5e74 9 \u6708 15 \u65e5\uff1aGoogle.com\n \u8a3b\u518a\u70ba\u7db2\u57df';
catalog['1998: First Google index has 26\nmillion pages'] = '1998 \u5e74\uff1aGoogle \u7d22\u5f15\u4e00\u958b\u59cb\u6536\u9304\u4e86\n2600 \u842c\u500b\u7db2\u9801';
catalog['2 Billion'] = '10.2 \u5104';
catalog['2.27 Billion'] = '22.7 \u5104';
catalog['20,000 PD/mo.'] = '20,000 PB/\u6708';
catalog['2000: Google index reached the 1\nbillion mark'] = '2000 \u5e74\uff1aGoogle \u7684\u7d22\u5f15\u9805\u76ee\n\u9054\u5230 10 \u5104\u5927\u95dc';
catalog['2007: 6 hours of video are uploaded\nper minute on YouTube'] = '2007 \u5e74\uff1a\u6bcf\u5206\u9418\u5c31\u6709 6 \u5c0f\u6642\u7684\u5f71\u7247\n\u4e0a\u50b3\u5230 YouTube';
catalog['2008: There are 1 trillion (as in\n1,000,000,000,000) unique URLs on\nthe web at once'] = '2008 \u5e74\uff1a\u7db2\u8def\u4e0a\u540c\u6642\u6709 1 \u5146\n (\u610f\u53731,000,000,000,000) \n\u500b\u975e\u91cd\u8907\u7db2\u5740';
catalog['2009: Every minute, 270,000 words\nare written on Blogger'] = '2009 \u5e74\uff1a\u6bcf\u5206\u9418\u4f7f\u7528\u8005\u5728 Blogger\n \u767c\u4f48 270,000 \u5b57';
catalog['27,483 PB/mo.'] = '27,483 PB/\u6708';
catalog['276.95 Million'] = '2 \u5104 7695 \u842c';
catalog['28 PB/mo.'] = '28 PB/\u6708';
catalog['3,992 PB/mo.'] = '3,992 PB/\u6708';
catalog['39.14 Million'] = '3914 \u842c';
catalog['405 PB/mo.'] = '405 PB/\u6708';
catalog['497.58 Million'] = '4 \u5104 9758 \u842c';
catalog['5,000 PB/mo.'] = '5,000 PB/\u6708';
catalog['5.4 PB/mo.'] = '5.4 PB/\u6708';
catalog['5.4PB is equivalent to\ndata that can fit into\nmore than 1.2 million\nstandard DVDs'] = '5.4 PB \u7684\u8cc7\u6599\u91cf\u23ce\n\u53ef\u4ee5\u88dd\u6eff 120 \u842c\u5f35\u23ce\n\u4ee5\u4e0a\u7684\u23ce\n\u6a19\u6e96 DVD \u5149\u789f';
catalog['500 Million'] = '1 \u5104';
catalog['500 PB/mo.'] = '500 PB/\u6708';
catalog['6 a.m.'] = '\u4e0a\u5348 6 \u9ede';
catalog['770.74 Million'] = '7 \u5104 7074 \u842c';
catalog['9.99 Million'] = '999 \u842c';
catalog['A JavaScript API for\nrendering interactive 3D graphics\nin the browser, without\nthe need for additional\nsoftware or plugins.'] = '\u4e00\u7a2e JavaScript API\uff0c\n\u53ef\u76f4\u63a5\u5728\u700f\u89bd\u5668\u4e2d\u5448\u73fe\u4e92\u52d5\u5f0f 3D \u5716\u7247\uff0c\n\u4e0d\u9700\u5b89\u88dd\u5176\u4ed6\u8edf\u9ad4\u6216\u5916\u639b\u7a0b\u5f0f\u3002';
catalog['A flexible layout mode which\nallows for designing and laying\nout more complex applications\nand webpages.'] = '\u4e00\u7a2e\u9748\u6d3b\u7684\u7248\u9762\u914d\u7f6e\u6a21\u5f0f\uff0c\n\u7528\u65bc\u8a2d\u8a08\u53ca\u914d\u7f6e\n\u8907\u96dc\u6027\u66f4\u9ad8\u7684\u61c9\u7528\u7a0b\u5f0f\n\u548c\u7db2\u9801\u7248\u9762\u3002';
catalog['A group of interrelated web\ndevelopment methods\nused to create interactives\nweb applications'] = '\u4e00\u7a2e\u4e92\u76f8\u95dc\u806f\u7684\n\u7db2\u9801\u958b\u767c\u6280\u8853\uff0c\u7528\u4ee5\n\u5efa\u7acb\u4e92\u52d5\u5f0f\u7684\u7db2\u8def\n\u61c9\u7528\u7a0b\u5f0f';
catalog['A high-level JavaScript API\nfor processing and synthesizing\naudio in web applications'] = '\u4e00\u7a2e\u9ad8\u968e JavaScript API\uff0c\n\u7528\u65bc\u8655\u7406\u53ca\u5408\u6210\n\u7db2\u8def\u61c9\u7528\u7a0b\u5f0f\u4e2d\u7684\u97f3\u8a0a';
catalog['A layout mode which is designed\nfor laying out more complex\napplications and webpages'] = '\u4e00\u7a2e\u7248\u9762\u914d\u7f6e\u6a21\u5f0f\uff0c\n\u5c08\u9580\u7528\u4f86\u914d\u7f6e\u8f03\u70ba\u8907\u96dc\u7684\u61c9\u7528\n\u7a0b\u5f0f\u548c\u7db2\u9801\u7248\u9762';
catalog['A mechanism to prevent\nsome of the more severe\nweb-based attacks against\nusers and websites.'] = '\u9632\u6b62\u91dd\u5c0d\u4f7f\u7528\u8005\u548c\u7db2\u7ad9\n\u767c\u52d5\u56b4\u91cd\u7db2\u8def\u653b\u64ca\u7684\n\u4e00\u7a2e\u6a5f\u5236\u3002';
catalog['A method to easily\ngenerate an image that\nsmoothly fades from one\ncolor to another.'] = '\u4e00\u7a2e\u7522\u751f\u984f\u8272\n\u6f38\u5c64\u5716\u7247\u7684\u7c21\u6613\u65b9\u6cd5';
catalog['A multimedia platform\nused to add animation,\nvideo, and interactivity to\nweb pages.'] = '\u4e00\u7a2e\u591a\u5a92\u9ad4\u5e73\u53f0\uff0c\n\u7528\u65bc\u5728\u7db2\u9801\u4e0a\u52a0\u5165\u52d5\u756b\n\u3001\u5f71\u7247\u548c\u4e92\u52d5\n\u5167\u5bb9\u3002';
catalog['A networking protocol for\ndistributed, collaborative,\nhypermedia information\nsystems'] = '\u9069\u7528\u65bc\u5206\u6563\u5f0f\u3001\u5354\u540c\u4f5c\u696d\n\u548c\u8d85\u5a92\u9ad4\u8cc7\u8a0a\u7cfb\u7d71\u7684\n\u7db2\u8def\u901a\u8a0a\u5354\u5b9a';
catalog['A prototype-based, object-\noriented scripting language'] = '\u4e00\u7a2e\u4ee5\u539f\u578b\u70ba\u57fa\u790e\u3001\u7269\u4ef6\u5c0e\u5411\n\u7684\u6307\u4ee4\u78bc\u8a9e\u8a00';
catalog['A set of rules for encoding\ndocuments in machine-\nreadable form'] = '\u4e00\u7d44\u7de8\u78bc\u898f\u5247\uff0c\u53ef\u5c07\n\u6587\u4ef6\u8f49\u8b6f\u70ba\u6a5f\u5668\u53ef\u8b80\u53d6\n\u7684\u5f62\u5f0f';
catalog['A small piece of data sent by\nwebsites and stored in a user\'s\nweb browser to remember the\nwebsite\'s state or past user\nactivity'] = '\u7531\u7db2\u7ad9\u767c\u9001\u5230\u4f7f\u7528\u8005\u7db2\u8def\u700f\u89bd\u5668\n\u4e0a\u7684\u4e00\u5c0f\u6bb5\u8cc7\u6599\uff0c\u5b83\u6703\u5132\u5b58\n\u5728\u700f\u89bd\u5668\u4e2d\uff0c\u7528\u65bc\u8a18\u9304\u7db2\u7ad9\u72c0\u614b\n\u6216\u4f7f\u7528\u8005\u7684\n\u6b77\u4f86\u6d3b\u52d5';
catalog['A specification language for\nrecursive descent parsers,\nsemantic analyzers and code\ngenerators'] = '\u7528\u65bc\u905e\u6b78\u4e0b\u964d\u5206\u6790\u5668\u3001\n\u8a9e\u610f\u5206\u6790\u5668\u548c\u7a0b\u5f0f\u78bc\u7522\u751f\u5668\n\u7684\u898f\u683c\u8a9e\u8a00';
catalog['A stylesheet language used\nto describe the presentation\nsemantics of a document'] = '\u7528\u4ee5\u63cf\u8ff0\u6587\u4ef6\u8868\u73fe\u5c64\n\u8a9e\u6cd5\u7684\u6a23\u5f0f\u8868\u8a9e\u8a00';
catalog['A way of processing an element\'s\nrendering before it is displayed\nin the document. Filters can\napply effects such as blurring and\nwarping before the compositing stage.'] = '\u5728\u6587\u4ef6\u4e2d\u7684\u5143\u7d20\u986f\u793a\u4e4b\u524d\n\u9810\u5148\u8655\u7406\u5143\u7d20\u5448\u73fe\u7684\u4e00\u7a2e\u65b9\u5f0f\n\u3002\u6ffe\u93e1\u53ef\u5728\u5408\u6210\u968e\u6bb5\u524d\uff0c\u5c07\u5404\u7a2e\u6548\u679c\n\u5957\u7528\u81f3\u5143\u7d20\uff0c\u4f8b\u5982\u6a21\u7cca\u548c\n\u8b8a\u5f62\u6548\u679c\u3002';
catalog['AJAX'] = 'AJAX';
catalog['Allow property changes in CSS\nvalues to occur smoothly over\na specified duration'] = '\u5141\u8a31 CSS \u503c\u7684\u5c6c\u6027\n\u5728\u6307\u5b9a\u7684\u6301\u7e8c\u6642\u9593\n\u5167\u5e73\u7a69\u8b8a\u5316';
catalog['Allow scripts to run in the\nbackground to handle computationally\nintensive tasks, without blocking\nthe UI or other scripts\nthat handle user interactions.'] = '\u5141\u8a31\u6307\u4ee4\u78bc\u5728\u80cc\u666f\u57f7\u884c\uff0c\n\u85c9\u6b64\u8655\u7406\u8907\u96dc\u7684\u8a08\u7b97\u4efb\u52d9\uff0c\n\u540c\u6642\u4e0d\u6703\u5c01\u9396\n\u4f7f\u7528\u8005\u4ecb\u9762\n\u6216\u5176\u4ed6\u8655\u7406\u4f7f\u7528\u8005\n\u4e92\u52d5\u7684\u6307\u4ee4\u78bc\u3002';
catalog['Allows the user to select\na date and time with time zone.'] = '\u5141\u8a31\u4f7f\u7528\u8005\u6309\u6642\u5340\n\u9078\u53d6\u65e5\u671f\u548c\u6642\u9593';
catalog['Allows web browsers to conduct\nreal-time communication'] = '\u53ef\u8b93\u7db2\u8def\u700f\u89bd\u5668\u57f7\u884c\n\u5373\u6642\u901a\u8a0a';
catalog['Allows web content to be\npresented using the\nuser\'s entire screen'] = '\u5141\u8a31\u7db2\u9801\u5167\u5bb9\u4ee5\u5168\u87a2\u5e55\u7684\n\u65b9\u5f0f\u5448\u73fe\u5728\u4f7f\u7528\u8005\u7684\n\u756b\u9762\u4e0a';
catalog['An HTML5 specification that allows\ndevelopers to easily build\ntouch-enabled web apps for\ntouch-sensitive surfaces.'] = '\u4e00\u7a2e HTML5 \u898f\u683c\uff0c\n\u53ef\u8b93\u958b\u767c\u4eba\u54e1\u70ba\u89f8\u63a7\u4ecb\u9762\n\u8f15\u9b06\u5efa\u7acb\u652f\u63f4\u89f8\u63a7\u529f\u80fd\n\u7684\u7db2\u8def\u61c9\u7528\u7a0b\u5f0f\u3002';
catalog['Audio & Video\nelements'] = '\u97f3\u8a0a\u8207\u5f71\u7247\n\u5143\u7d20';
catalog['CSS2'] = 'CSS2';
catalog['CSS3 2D\nTransforms'] = 'CSS3 2D\n\u8f49\u63db';
catalog['CSS3 3D\nTransforms'] = 'CSS3 3D\n\u8f49\u63db';
catalog['CSS3 Filters'] = 'CSS3 \u6ffe\u93e1';
catalog['CSS3 Flexbox'] = 'CSS3 Flexbox';
catalog['CSS3\nAnimation'] = 'CSS3\n\u52d5\u756b';
catalog['CSS3\nGradients'] = 'CSS3\n\u6f38\u5c64';
catalog['CSS3\nTransitions'] = 'CSS3\n\u8f49\u63db';
catalog['Calendar'] = '\u65e5\u66c6';
catalog['Cancel'] = '\u53d6\u6d88';
catalog['Canvas'] = 'Canvas';
catalog['Choose a time'] = '\u9078\u64c7\u6642\u9593';
catalog['Chrome OS version\\n1 released'] = 'Chrome \u4f5c\u696d\u7cfb\u7d71\\n\u7b2c 1 \u7248\u767c\u884c';
catalog['Chrome for Android\\nBETA released'] = 'Android \u7248 Google Chrome\\n\u6e2c\u8a66\u7248\u767c\u884c';
catalog['Chrome'] = 'Chrome';
catalog['Clear all'] = '\u5168\u90e8\u6e05\u9664';
catalog['Clock'] = '\u6642\u9418';
catalog['Content Security\nPolicy'] = '\u5167\u5bb9\u5b89\u5168\u6027\n\u653f\u7b56';
catalog['Cookies'] = 'Cookie';
catalog['DOM Mutation\nobservers'] = 'DOM Mutation\n\u89c0\u5bdf\u5668';
catalog['Date/time\ninput types'] = '\u65e5\u671f/\u6642\u9593\n\u8f38\u51fa\u985e\u578b';
catalog['Describes a way to animate the\nvalues of CSS properties over\ntime, using keyframes.'] = '\u63cf\u8ff0\u4e00\u7a2e\u4f7f\u7528\u4e3b\u8981\u756b\u9762\u683c\u9577\u6642\u9593\u4ee5\u52d5\u756b\u65b9\u5f0f\u5efa\u7acb CSS \u5c6c\u6027\u503c\u7684\u65b9\u6cd5\u3002';
catalog['Draft of third version\nof the HyperText Markup\nLanguage.'] = '\u7b2c 3 \u7248\n\u8d85\u6587\u5b57\u6a19\u8a18\u8a9e\u8a00\n\u7684\u8349\u6848\u3002';
catalog['Drag & Drop'] = '\u62d6\u653e';
catalog['Family of specifications of an\nXML-based file format for\ntwo-dimensional vector graphics,\nboth static and dynamic.'] = '\u4e00\u7a2e XML \u6a94\u6848\n\u683c\u5f0f\u898f\u683c\uff0c\u7528\u4ee5\u63cf\u8ff0\n\u975c\u614b\u548c\u52d5\u614b\u7684\u4e8c\u7dad\n\u5411\u91cf\u5716\u5f62\u3002';
catalog['Feb 2004: Google index reaches 6\nbillion items, including 4.28 billion\nweb pages and 880 million images'] = '2004 \u5e74 2 \u6708\uff1aGoogle \u7d22\u5f15\u9805\u76ee\n\u9054\u5230 60 \u5104\u5927\u95dc\uff0c\u5176\u4e2d\u5305\u542b 42.8 \u5104\u500b\n\u7db2\u9801\u548c 8.8 \u5104\u5f35\u5716\u7247';
catalog['File\nSystem API'] = 'File\nSystem API';
catalog['Firefox for mobile\\nversion 1 released'] = 'Firefox \u884c\u52d5\u7248\\n\u7b2c 1 \u7248\u767c\u884c';
catalog['Firefox'] = 'Firefox';
catalog['First iPhone released\\nwith mobile version\\nof Safari 3'] = '\u7b2c\u4e00\u4ee3 iPhone \u767c\u884c\\n\u5df2\u5b89\u88dd Safari 3\\n\u884c\u52d5\u7248';
catalog['Flash'] = 'Flash';
catalog['Fourth version of the\nHyperText Markup\nLanguage'] = '\u7b2c 4 \u7248\n\u8d85\u6587\u5b57\u6a19\u8a18\n\u8a9e\u8a00';
catalog['Full Screen API'] = 'Full Screen API';
catalog['Geolocation'] = 'Geolocation';
catalog['Global Internet Traffic\n(in petabytes per month)'] = '\u5168\u7403\u7db2\u8def\u6d41\u91cf\n(PB/\u6708)';
catalog['Global Internet Users'] = '\u5168\u7403\u7db2\u8def\u4f7f\u7528\u8005';
catalog['HTML 1'] = 'HTML1';
catalog['HTML5 element that allows\nfor dynamic, scriptable rendering\nof 2D shapes and bitmap images'] = '\u4e00\u7a2e HTML5 \u5143\u7d20\uff0c\n\u53ef\u8b93\u8173\u672c\u52d5\u614b\u6e32\u67d3\n2D \u5716\u5f62\u548c\u9ede\u9663\u5716\u50cf';
catalog['HTML5 elements which allow\nvideo and sound to be easily\nembedded and played in webpages,\nwithout requiring additional\nsoftware or plugins.'] = '\u5c6c\u65bc HTML5 \u5143\u7d20\uff0c\n\u53ef\u8b93\u4f7f\u7528\u8005\u8f15\u9b06\u5c07\u5f71\u7247\n\u548c\u97f3\u6548\u5d4c\u5165\u7db2\u9801\u4e26\u9032\u884c\u64ad\u653e\uff0c\n\u4e0d\u9700\u5b89\u88dd\u5176\u4ed6\u8edf\u9ad4\u6216\u5916\n\u639b\u7a0b\u5f0f\u3002';
catalog['HTML5'] = 'HTML5';
catalog['HTTP'] = 'HTTP';
catalog['Hide'] = '\u96b1\u85cf';
catalog['HyperText Markup Language\nis the predominant markup\nlanguage for web pages'] = '\u8d85\u6587\u5b57\u6a19\u8a18\u8a9e\u8a00\n\u662f\u4e3b\u8981\u7684\u7db2\u9801\n\u6a19\u8a18\u8a9e\u8a00';
catalog['If 14,414PB of data were\nstored in standard\nDVDs placed side by side,\n it would span the distance\nfrom the Earth to the\nMoon.'] = '\u5982\u679c\u5c07 14,414PB \u7684\u8cc7\u6599\u91cf\u23ce\n\u5132\u5b58\u5728\u6a19\u6e96 DVD \u5149\u789f\u4e2d\uff0c\u23ce\n\u7136\u5f8c\u4e00\u500b\u63a5\u4e00\u500b\u6392\u5217\u5728\u4e00\u8d77\uff0c\u23ce\n\u7e3d\u9577\u5ea6\u76f8\u7576\u65bc\u23ce\n\u5730\u7403\u5230\u6708\u7403 \u23ce\n\u7684\u8ddd\u96e2\u3002';
catalog['If 6430PB of data were\nstored in standard\nDVDs and laid out on\nthe ground, it would\nspan 18.5 times the\nlength of the Trans-\nSiberian Railway.'] = '\u5982\u679c 6430PB \u7684\u8cc7\u6599\n\u5132\u5b58\u5728\u6a19\u6e96\u7684 DVD \n\u5149\u789f\u4e2d\uff0c\u7136\u5f8c\u5728\u5730\u4e0a\n\u6392\u6210\u4e00\u5217\uff0c\u9577\u5ea6\u5c07\u662f\n\u897f\u4f2f\u5229\u4e9e\u9435\u8def\n\u7684 18.5 \u500d\u3002';
catalog['If standard 320GB-\nhard drives were\nstacked on top of each\nother, 100PB of data\n(that is, 100 million\nGBs) would be taller\nthan the Burj Khalifa in\nDubai, the tallest\nstructure in the world.'] = '\u5982\u679c\u5c07 100PB (1 \u5104 GB)\u23ce\n\u7684\u8cc7\u6599\u5132\u5b58\u5728\u23ce\n\u6a19\u6e96\u7684 320GB \u786c\u789f\u4e2d\uff0c\u23ce\n\u9019\u4e9b\u786c\u789f\u5806\u8d77\u4f86\u7684\u9ad8\u5ea6\u23ce\n\u5c07\u6703\u8d85\u904e\u4e16\u754c\u7b2c\u4e00\u9ad8\u6a13\u23ce\n\u675c\u62dc\u54c8\u91cc\u767c\u5854\u23ce\n (Burj Khalifa)';
catalog['IndexedDB'] = 'IndexedDB';
catalog['Initial release\\nof Opera Mini'] = 'Opera Mini \u7684\\n\u521d\u59cb\u7248\u672c';
catalog['Internet Explorer'] = 'Internet Explorer';
catalog['Introduces new capabilities\nto a specification used to send\nHTTP or HTTPS requests directly\nto a web server and load the\nserver response data directly\nback into the script.'] = '\u70ba\u898f\u683c\u52a0\u5165\u65b0\u7684\u529f\u80fd\uff0c\n\u7528\u65bc\u76f4\u63a5\u5411\u7db2\u8def\n\u4f3a\u670d\u5668\u50b3\u9001 HTTP \u6216\nHTTPS \u8981\u6c42\uff0c\u4e26\u76f4\u63a5\u5c07\n\u4f3a\u670d\u5668\u56de\u61c9\u8cc7\u6599\n\u8f09\u5165\u6307\u4ee4\u78bc\u4e2d\u3002';
catalog['Jan 2012: 60\nhours of video\nare uploaded per\nminute on\nYouTube'] = '2012 \u5e74 1 \u6708\uff1a\u6bcf\u5206\u9418\n\u6709\u9577\u9054 60 \u5c0f\u6642\n\u7684\u5f71\u7247\u4e0a\u50b3\u5230\n YouTube';
catalog['January February March April May June July August September October November December'] = '\u4e00\u6708 \u4e8c\u6708 \u4e09\u6708 \u56db\u6708 \u4e94\u6708 \u516d\u6708 \u4e03\u6708 \u516b\u6708 \u4e5d\u6708 \u5341\u6708 \u5341\u4e00\u6708 \u5341\u4e8c\u6708';
catalog['Java applets, which can\nrun in a web browser using a\nJava Virtual Machine, were\nintroduced in the first\nversion of the Java language.'] = '\u7b2c 1 \u7248 Java \u8a9e\u8a00\u4e2d\n\u5c0e\u5165\u4e86 Java \u5c0f\u5de5\u5177\uff0c\n\u53ef\u5728\u4f7f\u7528 Java \u865b\u64ec\u6a5f\u5668\n\u7684\u7db2\u8def\u700f\u89bd\u5668\u4e2d\u57f7\u884c\u3002';
catalog['Java'] = 'Java';
catalog['Javascript'] = 'Javascript';
catalog['Mar 2010: 24 hours of video are\nuploaded per minute on YouTube'] = '2010 \u5e74 3 \u6708\uff1a\u6bcf\u5206\u9418\u5c31\u6709 24 \u5c0f\u6642\n \u7684\u5f71\u7247\u4e0a\u50b3\u5230 YouTube';
catalog['Mar 2011: If all of Blogger\'s posts\nwere combined into books they\nwould fill ~5.3 million novels'] = '2011 \u5e74 3 \u6708\uff1a\u5982\u679c\u5c07\u6240\u6709 Blogger \n\u7684\u6587\u7ae0\u96c6\u7d50\u6210\u66f8\uff0c\u7e3d\u7bc7\u5e45\n\u76f8\u7576\u65bc 530 \u842c\u672c\u5c0f\u8aaa';
catalog['Method of defining web\npage files to be cached,\nallowing them to work\noffline'] = '\u5b9a\u7fa9\u5982\u4f55\u5feb\u53d6\u7db2\u9801\u6a94\u6848\uff0c\n\u8b93\u4f7f\u7528\u8005\u53ef\u96e2\u7dda\u4f7f\u7528\n\u9019\u4e9b\u6a94\u6848';
catalog['Method of displaying fonts\ndownloaded from websites'] = '\u7528\u65bc\u986f\u793a\u5f9e\u7db2\u7ad9\n\u4e0b\u8f09\u7684\u5b57\u578b';
catalog['Method of easily dragging\nand dropping elements on\na page, requiring minimal\nJavaScript'] = '\u5728\u7db2\u9801\u4e0a\u8f15\u9b06\u62d6\u653e\u5143\u7d20\u7684\u65b9\u6cd5 (\u5c0d JavaScript \u7684\u8981\u6c42\u6700\u4f4e)';
catalog['Method of informing a\nwebsite of the user\'s\ngeographical location with\nthe user\'s consent'] = '\u5728\u5f97\u5230\u4f7f\u7528\u8005\u540c\u610f\n\u7684\u60c5\u6cc1\u4e4b\u4e0b\uff0c\u5c07\u4f7f\u7528\u8005\n\u7684\u5730\u7406\u4f4d\u7f6e\u544a\u77e5\n\u7db2\u7ad9\u7684\u65b9\u6cd5';
catalog['Method of positioning and\ntransforming elements in\nthree-dimensional space.'] = '\u5728\u7acb\u9ad4\u7a7a\u9593\u4e2d\n\u5b9a\u4f4d\u53ca\u8f49\u63db\u5143\u7d20\n\u7684\u65b9\u6cd5\u3002';
catalog['Method of storing data\nclient-side inside the user\'s\nbrowser, and allows indexed\ndatabase queries. '] = '\u5728\u7528\u6236\u7aef\u5c07\u8cc7\u6599\n\u5132\u5b58\u5728\u4f7f\u7528\u8005\u700f\u89bd\u5668\n\u4e2d\u7684\u65b9\u6cd5\uff0c\u4e5f\u53ef\u555f\u7528\n\u7d22\u5f15\u8cc7\u6599\u5eab\u67e5\u8a62\u529f\u80fd\u3002 ';
catalog['Method of transforming any\nelement on a web page, such as\nscaling, rotating, and translating,\nwithout changing its effect on\nthe page layout.'] = '\u53ef\u8f49\u63db\u7db2\u9801\u4e2d\u4efb\u4f55\u5143\u7d20\uff0c\n\u4f8b\u5982\u7e2e\u653e\u3001\u65cb\u8f49\u53ca\u7ffb\u8b6f\u5143\u7d20\uff0c\n\u800c\u4e0d\u5f71\u97ff\u5176\u5728\u7db2\u9801\n\u7248\u9762\u914d\u7f6e\u4e0a\u5448\u73fe\n\u7684\u6548\u679c\u3002';
catalog['Method that allows web sites\nto register themselves as possible\nhandlers for particular protocols.'] = '\u53ef\u8b93\u7db2\u7ad9\u5c07\u81ea\u5df1\u8a3b\n\u518a\u70ba\u7279\u5b9a\u901a\u8a0a\u5354\u5b9a\n\u7684\u8655\u7406\u5e38\u5f0f\u3002';
catalog['Midnight'] = '\u5348\u591c';
catalog['Mosaic'] = 'Mosaic';
catalog['NetScape'] = 'NetScape';
catalog['Noon'] = '\u4e2d\u5348';
catalog['Nov 2004: Google search index\nreaches 8 billion items'] = '2004 \u5e74 11 \u6708\uff1aGoogle \u641c\u5c0b\u7684\u7d22\u5f15\u898f\u6a21\n\u6210\u9577\u70ba 80 \u5104\u500b\u9805\u76ee';
catalog['Now'] = '\u73fe\u5728';
catalog['Offline Web\nApps:AppCache'] = '\u96e2\u7dda\u7db2\u8def\n\u61c9\u7528\u7a0b\u5f0f\uff1aAppCache';
catalog['Opera'] = 'Opera';
catalog['Pocket Internet Explorer\\non Windows CE 1.0\\nreleased'] = 'Windows CE 1.0 \u4e0a\u7684\\nPocket Internet Explorer\\n\u767c\u884c';
catalog['Provides an API that allows\nweb apps to create, read, navigate,\nand write to a sandboxed section\nof the user\'s local file system.'] = '\u63d0\u4f9b\u53ef\u8b93\u7db2\u8def\u61c9\u7528\u7a0b\u5f0f\u5efa\u7acb\u3001\u8b80\u53d6\u3001\u700f\u89bd\u53ca\u5beb\u5165\u4f7f\u7528\u8005\u672c\u6a5f\u6a94\u6848\u7cfb\u7d71\u6c99\u7bb1\u5340\u6bb5\u7684 API\u3002';
catalog['Provides an easy way for\ndevelopers to react to changes\nin a DOM.'] = '\u53ef\u8b93\u958b\u767c\u4eba\u54e1\u8f15\u9b06\n\u61c9\u5c0d DOM \u4e2d\u767c\u751f\u7684\u8b8a\u5316\u3002';
catalog['READ MORE'] = '\u77ad\u89e3\u8a73\u60c5';
catalog['RegisterProtocalHandler'] = 'RegisterProtocalHandler';
catalog['Released April 1993'] = '1993 \u5e74 4 \u6708\u767c\u884c';
catalog['Released April 1995'] = '1995 \u5e74 4 \u6708\u767c\u884c';
catalog['Released April 1996'] = '1996 \u5e74 4 \u6708\u767c\u884c';
catalog['Released April 2003'] = '2003 \u5e74 4 \u6708\u767c\u884c';
catalog['Released April 2005'] = '2005 \u5e74 4 \u6708\u767c\u884c';
catalog['Released April 2007'] = '2007 \u5e74 4 \u6708\u767c\u884c';
catalog['Released April 2011'] = '2012 \u5e74 4 \u6708\u767c\u884c';
catalog['Released April 2012'] = '2012 \u5e74 4 \u6708\u767c\u884c';
catalog['Released April 27, 2011'] = '2011 \u5e74 4 \u6708 27 \u65e5\u767c\u884c';
catalog['Released April 29, 2005'] = '2005 \u5e74 4 \u6708 29 \u65e5\u767c\u884c';
catalog['Released August 13, 1996'] = '1996 \u5e74 8 \u6708 13 \u65e5\u767c\u884c';
catalog['Released August 16, 1995'] = '1995 \u5e74 8 \u6708 16 \u65e5\u767c\u884c';
catalog['Released August 16, 2011'] = '2011 \u5e74 8 \u6708 16 \u65e5\u767c\u884c';
catalog['Released August 1995'] = '1995 \u5e74 8 \u6708\u767c\u884c';
catalog['Released August 1996'] = '1996 \u5e74 8 \u6708\u767c\u884c';
catalog['Released August 2001'] = '2001 \u5e74 8 \u6708\u767c\u884c';
catalog['Released August 2002'] = '2002 \u5e74 8 \u6708\u767c\u884c';
catalog['Released August 2004'] = '2004 \u5e74 8 \u6708\u767c\u884c';
catalog['Released August 27, 2001'] = '2001 \u5e74 8 \u6708 27 \u65e5\u767c\u884c';
catalog['Released August 9, 2011'] = '2011 \u5e74 8 \u6708 9 \u65e5\u767c\u884c';
catalog['Released December 11, 2008'] = '2008 \u5e74 12 \u6708 11 \u65e5\u767c\u884c';
catalog['Released December 1993'] = '1993 \u5e74 12 \u6708\u767c\u884c';
catalog['Released December 1994'] = '1994 \u5e74 12 \u6708\u767c\u884c';
catalog['Released December 1997'] = '1997 \u5e74 12 \u6708\u767c\u884c';
catalog['Released December 2, 2010'] = '2010 \u5e74 12 \u6708 2 \u65e5\u767c\u884c';
catalog['Released December 2000'] = '2000 \u5e74 12 \u6708\u767c\u884c';
catalog['Released December 2001'] = '2001 \u5e74 12 \u6708\u767c\u884c';
catalog['Released December 2006'] = '2006 \u5e74 12 \u6708\u767c\u884c';
catalog['Released December 2010'] = '2010 \u5e7412 \u6708\u767c\u884c';
catalog['Released December 2011'] = '2011 \u5e74 12 \u6708\u767c\u884c';
catalog['Released February 2012'] = '2012 \u5e74 2 \u6708\u767c\u884c';
catalog['Released February 3, 2011'] = '2011 \u5e74 2 \u6708 3 \u65e5\u767c\u884c';
catalog['Released January 1996'] = '1996 \u5e74 1 \u6708\u767c\u884c';
catalog['Released January 1997'] = '1997 \u5e74 1 \u6708\u767c\u884c';
catalog['Released January 2003'] = '2003 \u5e74 1 \u6708\u767c\u884c';
catalog['Released January 2006'] = '2006 \u5e74 1 \u6708\u767c\u884c';
catalog['Released January 2010'] = '2010 \u5e74 1 \u6708\u767c\u884c';
catalog['Released January 2012'] = '2012 \u5e74 1 \u6708\u767c\u884c';
catalog['Released January 25, 2010'] = '2010 \u5e74 1 \u6708 25 \u65e5\u767c\u884c';
catalog['Released January 9, 2007'] = '2007 \u5e74 1 \u6708 9 \u65e5\u767c\u884c';
catalog['Released July 20, 2011'] = '2011 \u5e74 7 \u6708 20 \u65e5\u767c\u884c';
catalog['Released July 2010'] = '2010 \u5e74 7 \u6708\u767c\u884c';
catalog['Released July 8, 2000'] = '2000 \u5e74 7 \u6708 8 \u65e5\u767c\u884c';
catalog['Released June 17, 2008'] = '2008 \u5e74 6 \u6708 17 \u65e5\u767c\u884c';
catalog['Released June 1997'] = '1997 \u5e74 6 \u6708\u767c\u884c';
catalog['Released June 2, 2008'] = '2010 \u5e74 6 \u6708 2 \u65e5\u767c\u884c';
catalog['Released June 2000'] = '2000 \u5e74 6 \u6708\u767c\u884c';
catalog['Released June 2003'] = '2003 \u5e74 6 \u6708\u767c\u884c';
catalog['Released June 2006'] = '2006 \u5e74 6 \u6708\u767c\u884c';
catalog['Released June 2008'] = '2008 \u5e74 6 \u6708\u767c\u884c';
catalog['Released June 2011'] = '2011 \u5e74 6 \u6708\u767c\u884c';
catalog['Released June 2012'] = '2012 \u5e74 6 \u6708\u767c\u884c';
catalog['Released June 21, 2011'] = '2011 \u5e74 6 \u6708 21 \u65e5\u767c\u884c';
catalog['Released June 23, 2003'] = '2003 \u5e74 6 \u6708 23 \u65e5\u767c\u884c';
catalog['Released June 30, 2009'] = '2009 \u5e74 6 \u6708 30 \u65e5\u767c\u884c';
catalog['Released June 7, 2010'] = '2010 \u5e74 6 \u6708 7 \u65e5\u767c\u884c';
catalog['Released June 7, 2011'] = '2011 \u5e74 6 \u6708 7 \u65e5\u767c\u884c';
catalog['Released March 14, 2011'] = '2011 \u5e74 3 \u6708 14 \u65e5\u767c\u884c';
catalog['Released March 18, 1999'] = '1999 \u5e74 3 \u6708 18 \u65e5\u767c\u884c';
catalog['Released March 19, 2009'] = '2009 \u5e74 3 \u6708 19 \u65e5\u767c\u884c';
catalog['Released March 1993'] = '1993 \u5e74 3 \u6708\u767c\u884c';
catalog['Released March 1995'] = '1995 \u5e74 3 \u6708\u767c\u884c';
catalog['Released March 1996'] = '1996 \u5e74 3 \u6708\u767c\u884c';
catalog['Released March 2008'] = '2008 \u5e74 3 \u6708\u767c\u884c';
catalog['Released March 2010'] = '2010 \u5e74 3 \u6708\u767c\u884c';
catalog['Released March 2012'] = '2012 \u5e74 3 \u6708\u767c\u884c';
catalog['Released March 22, 2011'] = '2011 \u5e74 3 \u6708 22 \u65e5\u767c\u884c';
catalog['Released March 8, 2011'] = '2011 \u5e74 3 \u6708 8 \u65e5\u767c\u884c';
catalog['Released May 1999'] = '1999 \u5e74 5 \u6708\u767c\u884c';
catalog['Released May 2004'] = '2004 \u5e74 5 \u6708\u767c\u884c';
catalog['Released May 2005'] = '2005 \u5e74 5 \u6708\u767c\u884c';
catalog['Released May 2012'] = '2012 \u5e74 5 \u6708\u767c\u884c';
catalog['Released May 21, 2010'] = '2010 \u5e74 5 \u6708 21 \u65e5\u767c\u884c';
catalog['Released May 24, 2009'] = '2009 \u5e74 5 \u6708 24 \u65e5\u767c\u884c';
catalog['Released November 1995'] = '1995 \u5e74 11 \u6708\u767c\u884c';
catalog['Released November 1998'] = '1998 \u5e74 11 \u6708\u767c\u884c';
catalog['Released November 2000'] = '2000 \u5e74 11 \u6708\u767c\u884c';
catalog['Released November 2009'] = '2009 \u5e74 11 \u6708\u767c\u884c';
catalog['Released November 2011'] = '2011 \u5e74 11 \u6708\u767c\u884c';
catalog['Released November 29, 2005'] = '2005 \u5e74 11 \u6708 29 \u65e5\u767c\u884c';
catalog['Released November 9, 2004'] = '2004 \u5e74 11 \u6708 9 \u65e5\u767c\u884c';
catalog['Released October 12, 2009'] = '2009 \u5e74 10 \u6708 12 \u65e5\u767c\u884c';
catalog['Released October 18, 2006'] = '2006 \u5e74 10 \u6708 18 \u65e5\u767c\u884c';
catalog['Released October 1994'] = '1994 \u5e74 10 \u6708\u767c\u884c';
catalog['Released October 1998'] = '1998 \u5e74 10 \u6708\u767c\u884c';
catalog['Released October 2001'] = '2001 \u5e74 10 \u6708\u767c\u884c';
catalog['Released October 2002'] = '2002 \u5e74 10 \u6708\u767c\u884c';
catalog['Released October 2007'] = '2007 \u5e74 10 \u6708\u767c\u884c';
catalog['Released October 2011'] = '2011 \u5e74 10 \u6708\u767c\u884c';
catalog['Released October 21, 2010'] = '2010 \u5e74 10 \u6708 21 \u65e5\u767c\u884c';
catalog['Released October 24, 2006'] = '2006 \u5e74 10 \u6708 24 \u65e5\u767c\u884c';
catalog['Released September 1997'] = '1997 \u5e74 9 \u6708\u767c\u884c';
catalog['Released September 2, 2010'] = '2010 \u5e74 9 \u6708 2 \u65e5\u767c\u884c';
catalog['Released September 2003'] = '2003 \u5e74 9 \u6708\u767c\u884c';
catalog['Released September 2005'] = '2005 \u5e74 9 \u6708\u767c\u884c';
catalog['Released September 2009'] = '2009 \u5e74 9 \u6708\u767c\u884c';
catalog['Released September 2011'] = '2011 \u5e74 9 \u6708\u767c\u884c';
catalog['S M T W T F S'] = '\u9031\u65e5 \u9031\u4e00 \u9031\u4e8c \u9031\u4e09 \u9031\u56db \u9031\u4e94 \u9031\u516d';
catalog['SSL'] = 'SSL';
catalog['SVG'] = 'SVG';
catalog['Safari'] = 'Safari';
catalog['Second version of the\nHyperText Markup Language'] = '\u7b2c 2 \u7248\n\u8d85\u6587\u5b57\u6a19\u8a18\u8a9e\u8a00';
catalog['Show'] = '\u986f\u793a';
catalog['Sunday Monday Tuesday Wednesday Thursday Friday Saturday'] = '\u661f\u671f\u65e5 \u661f\u671f\u4e00 \u661f\u671f\u4e8c \u661f\u671f\u4e09 \u661f\u671f\u56db \u661f\u671f\u4e94 \u661f\u671f\u516d';
catalog['Tells the browser to perform an\nanimation, so that the browser can\nreschedule a repaint of the\nwindow for the next animation frame.'] = '\u901a\u77e5\u700f\u89bd\u5668\u57f7\u884c\u52d5\u756b\uff0c\n\u8b93\u700f\u89bd\u5668\u53ef\u4ee5\u70ba\u4e0b\u4e00\u500b\n\u52d5\u756b\u756b\u9762\u683c\u91cd\u65b0\u5b89\u6392\n\u8996\u7a97\u91cd\u7e6a\u3002';
catalog['The fifth revision of the\nHyperText Markup Language'] = '\u8d85\u6587\u5b57\u6a19\u8a18\u8a9e\u8a00\u7684\n\u7b2c 5 \u500b\u4fee\u8a02\u7248\u672c';
catalog['Third version of the\nHyperText Markup\nLanguage.'] = '\u7b2c 3 \u7248\n\u8d85\u6587\u5b57\u6a19\u8a18\n\u8a9e\u8a00\u3002';
catalog['Today'] = '\u4eca\u5929';
catalog['Tomorrow'] = '\u660e\u5929';
catalog['Touch Events'] = '\u89f8\u63a7\u4e8b\u4ef6';
catalog['Web Audio\nAPI'] = 'Web Audio\nAPI';
catalog['Web Fonts'] = '\u7db2\u8def\u5b57\u578b';
catalog['WebGL'] = 'WebGL';
catalog['WebRTC'] = 'WebRTC';
catalog['Web\nWorkers'] = '\u7db2\u8def\n\u4f7f\u7528\u8005';
catalog['XML'] = 'XML';
catalog['XMLHTTPRequest2'] = 'XMLHTTPRequest2';
catalog['Yesterday'] = '\u6628\u5929';
catalog['You have selected an action, and you haven\'t made any changes on individual fields. You\'re probably looking for the Go button rather than the Save button.'] = '\u60a8\u5df2\u9078\u53d6\u4e00\u500b\u52d5\u4f5c\uff0c\u4e14\u5c1a\u672a\u5c0d\u500b\u5225\u6b04\u4f4d\u505a\u51fa\u4efb\u4f55\u8b8a\u66f4\u3002\u60a8\u5fc5\u9808\u9ede\u9078 [\u524d\u5f80] \u6309\u9215\uff0c\u800c\u4e0d\u662f [\u5132\u5b58] \u6309\u9215\u3002';
catalog['You have selected an action, but you haven\'t saved your changes to individual fields yet. Please click OK to save. You\'ll need to re-run the action.'] = '\u60a8\u5df2\u9078\u53d6\u52d5\u4f5c\uff0c\u4f46\u5c1a\u672a\u5132\u5b58\u500b\u5225\u6b04\u4f4d\u7684\u8b8a\u66f4\u3002\u8acb\u6309\u4e00\u4e0b [\u78ba\u5b9a] \u5132\u5b58\u8b8a\u66f4\u3002\u60a8\u5fc5\u9808\u91cd\u65b0\u57f7\u884c\u52d5\u4f5c\u3002';
catalog['You have unsaved changes on individual editable fields. If you run an action, your unsaved changes will be lost.'] = '\u60a8\u7684\u500b\u5225\u53ef\u7de8\u8f2f\u6b04\u4f4d\u5305\u542b\u672a\u5132\u5b58\u7684\u8b8a\u66f4\u3002\u5982\u679c\u60a8\u57f7\u884c\u5176\u4ed6\u52d5\u4f5c\uff0c\u9019\u4e9b\u672a\u5132\u5b58\u7684\u8b8a\u66f4\u5c07\u6703\u907a\u5931\u3002';
catalog['http://dev.w3.org/csswg/css3-flexbox/'] = 'http://dev.w3.org/csswg/css3-flexbox/';
catalog['http://en.wikipedia.org/wiki/S/SL_programming_language'] = 'http://en.wikipedia.org/wiki/S/SL_programming_language';
catalog['requestAnimationFrame'] = 'requestAnimationFrame';


function gettext(msgid) {
  var value = catalog[msgid];
  if (typeof(value) == 'undefined') {
    return msgid;
  } else {
    return (typeof(value) == 'string') ? value : value[0];
  }
}

function ngettext(singular, plural, count) {
  value = catalog[singular];
  if (typeof(value) == 'undefined') {
    return (count == 1) ? singular : plural;
  } else {
    return value[pluralidx(count)];
  }
}

function gettext_noop(msgid) { return msgid; }

function pgettext(context, msgid) {
  var value = gettext(context + '' + msgid);
  if (value.indexOf('') != -1) {
    value = msgid;
  }
  return value;
}

function npgettext(context, singular, plural, count) {
  var value = ngettext(context + '' + singular, context + '' + plural, count);
  if (value.indexOf('') != -1) {
    value = ngettext(singular, plural, count);
  }
  return value;
}

function interpolate(fmt, obj, named) {
  if (named) {
    return fmt.replace(/%\(\w+\)s/g, function(match){return String(obj[match.slice(2,-2)])});
  } else {
    return fmt.replace(/%s/g, function(match){return String(obj.shift())});
  }
}

/* formatting library */

var formats = new Array();

formats['DATETIME_FORMAT'] = 'N j, Y, P';
formats['DATE_FORMAT'] = 'N j, Y';
formats['DECIMAL_SEPARATOR'] = '.';
formats['MONTH_DAY_FORMAT'] = 'F j';
formats['NUMBER_GROUPING'] = '0';
formats['TIME_FORMAT'] = 'P';
formats['FIRST_DAY_OF_WEEK'] = '0';
formats['TIME_INPUT_FORMATS'] = ['%H:%M:%S', '%H:%M'];
formats['THOUSAND_SEPARATOR'] = ',';
formats['DATE_INPUT_FORMATS'] = ['%Y-%m-%d', '%m/%d/%Y', '%m/%d/%y', '%b %d %Y', '%b %d, %Y', '%d %b %Y', '%d %b, %Y', '%B %d %Y', '%B %d, %Y', '%d %B %Y', '%d %B, %Y'];
formats['YEAR_MONTH_FORMAT'] = 'F Y';
formats['SHORT_DATE_FORMAT'] = 'm/d/Y';
formats['SHORT_DATETIME_FORMAT'] = 'm/d/Y P';
formats['DATETIME_INPUT_FORMATS'] = ['%Y-%m-%d %H:%M:%S', '%Y-%m-%d %H:%M', '%Y-%m-%d', '%m/%d/%Y %H:%M:%S', '%m/%d/%Y %H:%M', '%m/%d/%Y', '%m/%d/%y %H:%M:%S', '%m/%d/%y %H:%M', '%m/%d/%y'];

function get_format(format_type) {
    var value = formats[format_type];
    if (typeof(value) == 'undefined') {
      return msgid;
    } else {
      return value;
    }
}
