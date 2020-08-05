// JavaScript Document
const jsGenericLoaded = true;
if (!window.location.origin) {
  window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port: '');
}
window.request_scheme = window.location.href.split('/')[0];
window.file_ext_to_mimetype = {
  'txt' : 'text/plain',
  'htm' : 'text/html',
  'html' : 'text/html',
  'php' : 'text/html',
  'css' : 'text/css',
  'js' : 'application/javascript',
  'json' : 'application/json',
  'xml' : 'application/xml',
  'swf' : 'application/x-shockwave-flash',
  'flv' : 'video/x-flv',
  'png' : 'image/png',
  'jpg' : 'image/jpeg',
  'jpeg' : 'image/jpeg',
  'jpe' : 'image/jpeg',
  'gif' : 'image/gif',
  'bmp' : 'image/bmp',
  'ico' : 'image/vnd.microsoft.icon',
  'tiff' : 'image/tiff',
  'tif' : 'image/tiff',
  'svg' : 'image/svg+xml',
  'svgz' : 'image/svg+xml',
  'zip' : 'application/zip',
  'rar' : 'application/x-rar-compressed',
  'exe' : 'application/x-msdownload',
  'msi' : 'application/x-msdownload',
  'cab' : 'application/vnd.ms-cab-compressed',
  'mp3' : 'audio/mpeg',
  'qt' : 'video/quicktime',
  'mov' : 'video/quicktime',
  'mp4' : 'video/mpeg',
  'pdf' : 'application/pdf',
  'psd' : 'image/vnd.adobe.photoshop',
  'ai' : 'application/postscript',
  'eps' : 'application/postscript',
  'ps' : 'application/postscript',
  'doc' : 'application/msword',
  'docx' : 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'rtf' : 'application/rtf',
  'xls' : 'application/vnd.ms-excel',
  'xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  'ppt' : 'application/vnd.ms-powerpoint',
  'pptx' : 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  'odt' : 'application/vnd.oasis.opendocument.text',
  'ods' : 'application/vnd.oasis.opendocument.spreadsheet'
}
window.file_extension = function (mime) {
  return in_array(mime, file_ext_to_mimetype)
    ? array_key(mime, file_ext_to_mimetype)
    : "unknown";
}

function file_group (mime) {
  let file_groups = {
    "image" 		: {
        "png" : "image/png",
        "jpg" : "image/jpeg",
        "jpeg" : "image/jpeg",
        "jpe" : "image/jpeg",
        "gif" : "image/gif",
        "bmp" : "image/bmp",
        "ico" : "image/vnd.microsoft.icon",
        "tiff" : "image/tiff",
        "tif" : "image/tiff",
        "svg" : "image/svg+xml",
        "svgz" : "image/svg+xml"
      },
    "audio"			: {
        "mp3" : "audio/mpeg",
      },
    "video"			: {
        "qt" : "video/quicktime",
        "mov" : "video/quicktime",
        "mp4" : "video/mpeg",
        "swf" : "application/x-shockwave-flash",
        "flv" : "video/x-flv",
      },
    "script"			: {
        "txt" : "text/plain",
        "htm" : "text/html",
        "html" : "text/html",
        "php" : "text/html",
        "css" : "text/css",
        "js" : "application/javascript",
        "json" : "application/json",
        "xml" : "application/xml",
      },
    "archive"		: {
        "zip" : "application/zip",
        "rar" : "application/x-rar-compressed",
        "7z"		: "application/x-7z-compressed",
        "exe" : "application/x-msdownload",
        "msi" : "application/x-msdownload",
        "cab" : "application/vnd.ms-cab-compressed",
      },
    "document"		: {
        "pdf" : "application/pdf",
        "doc" : "application/msword",
        "docx" : "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "rtf" : "application/rtf",
        "xls" : "application/vnd.ms-excel",
        "xlsx": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "ppt" : "application/vnd.ms-powerpoint",
        "pptx" : "application/vnd.openxmlformats-officedocument.presentationml.presentation",
        "odt" : "application/vnd.oasis.opendocument.text",
        "ods" : "application/vnd.oasis.opendocument.spreadsheet"
      },
    "graphic"			: {
      "psd" : "image/vnd.adobe.photoshop",
      "ai" : "application/postscript",
      "eps" : "application/postscript",
      "ps" : "application/postscript"
      }
  };
  let $return = "unknown";
  $.each(file_groups, function (grp, obj) {
    if ( mime in obj || in_array(mime, Object.values(obj))) $return = grp;
  });
  return $return;
}
String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};
let replace_all = String.prototype.replaceAll;
String.prototype.ucfirst = function(rest_lower) {
  return this.charAt(0).toUpperCase() + (rest_lower == true ? this.slice(1).toLowerCase() : this.slice(1))
}

function is_localhost () {
  var address = window.location.href.split('/')[2];
  var ip_regex = /^(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))$/;
  return ip_regex.test(address) || address === 'localhost';
}
String.prototype.is_valid_url = function () {
  let pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '(localhost\\/?)|'+ // localhost
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
  return !!pattern.test(this);
}
const object_length = (object = {}) => {
  if (typeof object !== "object") return "N/A";
  return Object.keys(object).length;
}
const script_loaded = (src) => {
  let regex = new RegExp(src, 'i');
  return find_script_by_regexp(regex, false);
}
const byte_size = (bytes = 0) => {
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB'];
  if (bytes === 0) return ['n/a', null];
  const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
  if (i === 0) return [bytes, `${sizes[i]}`];
  return [parseFloat(`${(bytes / (1024 ** i)).toFixed(2)}`), `${sizes[i]}`];
}
const find_script_by_regexp = (regex, return_search = true) => {
  let output = [];
  for (let i of document.querySelectorAll('link[rel="stylesheet"], script[src]')) {
    if (regex.test(i.href) || regex.test(i.src)) { // or whatever attribute you want to search
      output.push(i);
    }
  }
  return return_search === true
    ? output
    : object_length(output) > 0
}
const load_script = (script_file, type="js", callback) => {
  if (!script_file) return false;
  let script;
  if (type === "js") {
    // $.getScript(script_file, function() {
    //   if (typeof callback === "function") callback();
    // });
    $("<script/>", {
      type : "text/javascript",
      src : script_file
    }).appendTo("head");
  } if (type === "css") {
    $("<link/>", {
      rel: "stylesheet",
      type: "text/css",
      href: script_file
    }).appendTo("head");
    if (typeof callback === "function") {
      callback();
    }
  }
}
const require_script = (script, search="", type="js") => {
  if ((typeof search === "string" && search.length > 0) && !script_loaded(search, false) ) {
    load_script(script, type);
  } else {
    if (!script_loaded(search, false)) load_script(script, type);
  }
};
const unset_var = (variable) => {
  if (typeof window[variable] !== "undefined") {
    window[variable] = undefined;
    delete window[variable];
  }
}
function parseBool (val) {
  return (
    val.toUpperCase === 'TRUE'
    || val === 1
    || val === '1'
  );
}
const parse_bool = parseBool;
const minuteTimer = (duration, display, callback) => {
  var timer = duration, minutes, seconds;
  display = $(display);
  var tymer = setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.text(minutes + ":" + seconds);

    if (--timer < 0) {
      display.text("00:00");
      if ( typeof callback == 'function') {
        clearInterval(tymer);
        callback();
      }
    }
  }, 1000);
}
const minute_timer = minuteTimer;
function cb_copy_alt(_text) {
  var textArea = document.createElement("textarea");
  textArea.value = _text;
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    var successful = document.execCommand('copy');
    var copied = successful ? true : false;
    if (copied) {
      alert("<h2> <i class=\"fas fa-clipboard\"></i> Clipboard updated!</h2> <p>Copied to your clipboard</p>",{type:'success',exit:true});
    } else {
      alert("<h2> <i class=\"fas fa-clipboard\"></i> Auto copy failed.</h2> <p>Your browser won't allow me copy to your clipboard. <br> <br> Kindly select and copy manually.</p>",{type:'error',exit:true});
    }
  } catch (_err) {
    alert("<h2> <i class=\"fas fa-clipboard\"></i> Auto copy failed.</h2> <p>Your browser won't allow me copy to your clipboard. <br> <br> Kindly select and copy manually.</p>",{type:'error',exit:true});
  }

  document.body.removeChild(textArea);
}
function cb_copy(_text) {
  if (!navigator.clipboard) {
    cb_copy_alt(_text);
    return;
  }
  navigator.clipboard.writeText(_text).then(function() {
    alert("<h2> <i class=\"fas fa-clipboard\"></i> Clipboard updated!</h2> <p>Copied to your clipboard</p>",{type:'success',exit:true});
  }, function(_err) {
    alert("<h2> <i class=\"fas fa-clipboard\"></i> Auto copy failed.</h2> <p>Your browser won't allow me copy to your clipboard. <br> <br> Kindly select and copy manually.</p>",{type:'error',exit:true});
  });
}

window.url = {
  parse : function(link,k){
    link = link ? link : location.href;
    var parser = document.createElement('a');
    parser.href = link;
    parser.protocol; // => "http:"
    parser.hostname; // => "example.com"
    parser.port;     // => "3000"
    parser.pathname; // => "/pathname/"
    parser.search;   // => "?search=test"
    parser.hash;     // => "#hash"
    parser.host; // => "example.com:3000"
    var prop = {},expect = ['href','protocol','hostname','port','pathname','search','hash','host'];
    $.each(parser,function(k,v){
      if( in_array(k,expect) ) prop[k] = v;
    });
    return k && k in prop ? prop[k] : prop;
  },
  href : function(link){
    return url.parse(link,'href');
  },
  protocol : function(link){
    return url.parse(link,'protocol');
  },
  hostname : function(link){
    return url.parse(link,'hostname');
  },
  port : function(link){
    return url.parse(link,'port');
  },
  pathname : function(link){
    return url.parse(link,'pathname');
  },
  search : function(link){
    return url.parse(link,'search');
  },
  hash : function(link){
    return url.parse(link,'hash');
  },
  host : function(link){
    return url.parse(link,'host');
  },
};

function array_key(val,array){
  var key,keys=[];
  if( !$.isArray(val)  ){
    $.each( array, function( k, v ) {  if(v == val){  key = k;  }  });
    return key;
  }else{
    $.each( val, function( k, v ) {  if( array_key(v,array) ){  keys[keys.length++] = array_key(v,array);  }  });
    return keys;
  }
}
jQuery.extend({
  urlParams : function(str) {
	  return (str || document.location.search).replace(/(^\?)/,'').split("&").map(function(n){return n = n.split("="),this[n[0]] = n[1],this}.bind({}))[0];
  }
});
jQuery.fn.reverse = function() {   return this.pushStack(this.get().reverse()); };
function number_format(number, decimals, dec_point, thousands_sep) {
  //  discuss at: http://phpjs.org/functions/number_format/
  // original by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
  // improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // improved by: davook
  // improved by: Brett Zamir (http://brett-zamir.me)
  // improved by: Brett Zamir (http://brett-zamir.me)
  // improved by: Theriault
  // improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // bugfixed by: Michael White (http://getsprink.com)
  // bugfixed by: Benjamin Lupton
  // bugfixed by: Allan Jensen (http://www.winternet.no)
  // bugfixed by: Howard Yeend
  // bugfixed by: Diogo Resende
  // bugfixed by: Rival
  // bugfixed by: Brett Zamir (http://brett-zamir.me)
  //  revised by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
  //  revised by: Luke Smith (http://lucassmith.name)
  //    input by: Kheang Hok Chin (http://www.distantia.ca/)
  //    input by: Jay Klehr
  //    input by: Amir Habibi (http://www.residence-mixte.com/)
  //    input by: Amirouche
  //   example 1: number_format(1234.56);
  //   returns 1: '1,235'
  //   example 2: number_format(1234.56, 2, ',', ' ');
  //   returns 2: '1 234,56'
  //   example 3: number_format(1234.5678, 2, '.', '');
  //   returns 3: '1234.57'
  //   example 4: number_format(67, 2, ',', '.');
  //   returns 4: '67,00'
  //   example 5: number_format(1000);
  //   returns 5: '1,000'
  //   example 6: number_format(67.311, 2);
  //   returns 6: '67.31'
  //   example 7: number_format(1000.55, 1);
  //   returns 7: '1,000.6'
  //   example 8: number_format(67000, 5, ',', '.');
  //   returns 8: '67.000,00000'
  //   example 9: number_format(0.9, 0);
  //   returns 9: '1'
  //  example 10: number_format('1.20', 2);
  //  returns 10: '1.20'
  //  example 11: number_format('1.20', 4);
  //  returns 11: '1.2000'
  //  example 12: number_format('1.2000', 3);
  //  returns 12: '1.200'
  //  example 13: number_format('1 000,50', 2, '.', ' ');
  //  returns 13: '100 050.00'
  //  example 14: number_format(1e-8, 8, '.', '');
  //  returns 14: '0.00000001'

  number = (number + '')
    .replace(/[^0-9+\-Ee.]/g, '');
  var n = !isFinite(+number) ? 0 : +number,
    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
    sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
    dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
    s = '',
    toFixedFix = function(n, prec) {
      var k = Math.pow(10, prec);
      return '' + (Math.round(n * k) / k)
        .toFixed(prec);
    };
  // Fix for IE parseFloat(0.55).toFixed(0) = 0;
  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n))
    .split('.');
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }
  if ((s[1] || '')
    .length < prec) {
    s[1] = s[1] || '';
    s[1] += new Array(prec - s[1].length + 1)
      .join('0');
  }
  return s.join(dec);
}

$.fn.readFileURL = function($input){
    var $this = $(this);
    if ($input.files && $input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $this.attr('src', e.target.result);
        }
        reader.readAsDataURL($input.files[0]);
   }
};
function sqldt_convert(sqld){
  // Split timestamp into [ Y, M, D, h, m, s ]
var t = sqld.split(/[- :]/);

// Apply each element to the Date function
  return new Date(t[0], t[1]-1, t[2], t[3], t[4], t[5]);
}

function substr_count(haystack, needle, offset, length) {
  //  discuss at: http://phpjs.org/functions/substr_count/
  // original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // bugfixed by: Onno Marsman
  // improved by: Brett Zamir (http://brett-zamir.me)
  // improved by: Thomas
  //   example 1: substr_count('Kevin van Zonneveld', 'e');
  //   returns 1: 3
  //   example 2: substr_count('Kevin van Zonneveld', 'K', 1);
  //   returns 2: 0
  //   example 3: substr_count('Kevin van Zonneveld', 'Z', 0, 10);
  //   returns 3: false

  var cnt = 0;

  haystack += '';
  needle += '';
  if (isNaN(offset)) {
    offset = 0;
  }
  if (isNaN(length)) {
    length = 0;
  }
  if (needle.length == 0) {
    return false;
  }
  offset--;

  while ((offset = haystack.indexOf(needle, offset + 1)) != -1) {
    if (length > 0 && (offset + needle.length) > length) {
      return false;
    }
    cnt++;
  }

  return cnt;
}
function str_word_count(str, format, charlist) {
  //  discuss at: http://phpjs.org/functions/str_word_count/
  // original by: Ole Vrijenhoek
  // bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // bugfixed by: Brett Zamir (http://brett-zamir.me)
  // bugfixed by: Brett Zamir (http://brett-zamir.me)
  //    input by: Bug?
  // improved by: Brett Zamir (http://brett-zamir.me)
  //  depends on: ctype_alpha
  //   example 1: str_word_count("Hello fri3nd, you're\r\n       looking          good today!", 1);
  //   returns 1: ['Hello', 'fri', 'nd', "you're", 'looking', 'good', 'today']
  //   example 2: str_word_count("Hello fri3nd, you're\r\n       looking          good today!", 2);
  //   returns 2: {0: 'Hello', 6: 'fri', 10: 'nd', 14: "you're", 29: 'looking', 46: 'good', 51: 'today'}
  //   example 3: str_word_count("Hello fri3nd, you're\r\n       looking          good today!", 1, '\u00e0\u00e1\u00e3\u00e73');
  //   returns 3: ['Hello', 'fri3nd', "you're", 'looking', 'good', 'today']
  //   example 4: str_word_count('hey', 2);
  //   returns 4: {0: 'hey'}

  var len = str.length,
    cl = charlist && charlist.length,
    chr = '',
    tmpStr = '',
    i = 0,
    c = '',
    wArr = [],
    wC = 0,
    assoc = {},
    aC = 0,
    reg = '',
    match = false;

  // BEGIN STATIC
  var _preg_quote = function(str) {
    return (str + '')
      .replace(/([\\\.\+\*\?\[\^\]\$\(\)\{\}\=\!<>\|\:])/g, '\\$1');
  };
  _getWholeChar = function(str, i) {
    // Use for rare cases of non-BMP characters
    var code = str.charCodeAt(i);
    if (code < 0xD800 || code > 0xDFFF) {
      return str.charAt(i);
    }
    if (0xD800 <= code && code <= 0xDBFF) {
      // High surrogate (could change last hex to 0xDB7F to treat high private surrogates as single characters)
      if (str.length <= (i + 1)) {
        throw 'High surrogate without following low surrogate';
      }
      var next = str.charCodeAt(i + 1);
      if (0xDC00 > next || next > 0xDFFF) {
        throw 'High surrogate without following low surrogate';
      }
      return str.charAt(i) + str.charAt(i + 1);
    }
    // Low surrogate (0xDC00 <= code && code <= 0xDFFF)
    if (i === 0) {
      throw 'Low surrogate without preceding high surrogate';
    }
    var prev = str.charCodeAt(i - 1);
    if (0xD800 > prev || prev > 0xDBFF) {
      // (could change last hex to 0xDB7F to treat high private surrogates as single characters)
      throw 'Low surrogate without preceding high surrogate';
    }
    // We can pass over low surrogates now as the second component in a pair which we have already processed
    return false;
  };
  // END STATIC
  if (cl) {
    reg = '^(' + _preg_quote(_getWholeChar(charlist, 0));
    for (i = 1; i < cl; i++) {
      if ((chr = _getWholeChar(charlist, i)) === false) {
        continue;
      }
      reg += '|' + _preg_quote(chr);
    }
    reg += ')$';
    reg = new RegExp(reg);
  }

  for (i = 0; i < len; i++) {
    if ((c = _getWholeChar(str, i)) === false) {
      continue;
    }
    match = this.ctype_alpha(c) || (reg && c.search(reg) !== -1) || ((i !== 0 && i !== len - 1) && c === '-') || // No hyphen at beginning or end unless allowed in charlist (or locale)
      // No apostrophe at beginning unless allowed in charlist (or locale)
      (i !== 0 && c === "'");
    if (match) {
      if (tmpStr === '' && format === 2) {
        aC = i;
      }
      tmpStr = tmpStr + c;
    }
    if (i === len - 1 || !match && tmpStr !== '') {
      if (format !== 2) {
        wArr[wArr.length] = tmpStr;
      } else {
        assoc[aC] = tmpStr;
      }
      tmpStr = '';
      wC++;
    }
  }

  if (!format) {
    return wC;
  } else if (format === 1) {
    return wArr;
  } else if (format === 2) {
    return assoc;
  }

  throw 'You have supplied an incorrect format';
}
function count_chars(str, mode) {
  //  discuss at: http://phpjs.org/functions/count_chars/
  // original by: Ates Goral (http://magnetiq.com)
  // improved by: Jack
  // bugfixed by: Onno Marsman
  // bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  //    input by: Brett Zamir (http://brett-zamir.me)
  //  revised by: Theriault
  //   example 1: count_chars("Hello World!", 3);
  //   returns 1: " !HWdelor"
  //   example 2: count_chars("Hello World!", 1);
  //   returns 2: {32:1,33:1,72:1,87:1,100:1,101:1,108:3,111:2,114:1}

  var result = {},
    resultArr = [],
    i;

  str = ('' + str)
    .split('')
    .sort()
    .join('')
    .match(/(.)\1*/g);

  if ((mode & 1) == 0) {
    for (i = 0; i != 256; i++) {
      result[i] = 0;
    }
  }

  if (mode === 2 || mode === 4) {

    for (i = 0; i != str.length; i += 1) {
      delete result[str[i].charCodeAt(0)];
    }
    for (i in result) {
      result[i] = (mode === 4) ? String.fromCharCode(i) : 0;
    }

  } else if (mode === 3) {

    for (i = 0; i != str.length; i += 1) {
      result[i] = str[i].slice(0, 1);
    }

  } else {

    for (i = 0; i != str.length; i += 1) {
      result[str[i].charCodeAt(0)] = str[i].length;
    }

  }
  if (mode < 3) {
    return result;
  }

  for (i in result) {
    resultArr.push(result[i]);
  }
  return resultArr.join('');
}
function ucwords(str) {
  //  discuss at: http://phpjs.org/functions/ucwords/
  // original by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
  // improved by: Waldo Malqui Silva
  // improved by: Robin
  // improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // bugfixed by: Onno Marsman
  //    input by: James (http://www.james-bell.co.uk/)
  //   example 1: ucwords('kevin van  zonneveld');
  //   returns 1: 'Kevin Van  Zonneveld'
  //   example 2: ucwords('HELLO WORLD');
  //   returns 2: 'HELLO WORLD'

  return (str + '')
    .replace(/^([a-z\u00E0-\u00FC])|\s+([a-z\u00E0-\u00FC])/g, function($1) {
      return $1.toUpperCase();
    });
}
String.prototype.ucwords = function(){
  return ucwords(this);
};
function clock($weekNow,$dateNow,$tymNow,$secNow){
	var date = new Date();
	var monthAlpha = {0:'January',1:'February',2:'March',3:'April',4:'May',5:'June',6:'July',7:'August',8:'September',9:'October',10:'November',11:'December'};
	var weekAlpha = {0:"Sunday",1:"Monday",2:"Tuesday",3:"Wednesday",4:"Thursday",5:"Friday",6:"Saturday"}
	var $prop = {
			year	:	date.getFullYear(),
			month	:	monthAlpha[date.getMonth()],
			day		:	date.getDate(),
			hour	:	date.getHours(),
			week	: 	weekAlpha[date.getDay()],
			minute	:	date.getMinutes(),
			second	:	date.getSeconds()
	}
	$weekNow.text($prop.week);
	$dateNow.text($prop.month+' '+$prop.day);
	$tymNow.text(($prop.hour <10 ? '0'+$prop.hour : $prop.hour)+':'+($prop.minute <10 ? '0'+$prop.minute : $prop.minute));
	$secNow.text(':'+($prop.second <10 ? '0'+$prop.second : $prop.second));
}

function redirect_to(url){ if(url){ document.location=url;	}else{	return false; } }
function encode_url(toEncode) {
    return encodeURIComponent(toEncode)
        .replace(/!/g, '%21')
        .replace(/'/g, '%27')
        .replace(/\(/g, '%28')
        .replace(/\)/g, '%29')
        .replace(/\*/g, '%2A');
}
function get_cookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') c = c.substring(1, c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
	}
	return null;
}
$.fn.scroll_view = function () {
  return this.each(function () {
    $('html, body').animate({
      scrollTop: $(this).offset().top
    }, 1000);
  });
};
function in_array(string, array){
	for (i = 0; i < array.length; i++){
		if(array[i] == string)		{
			return true;
		}
	}
	return false;
}
// String.prototype.fromByte = function(){
//   var $this = this;
//   var KB = 1024,MB = KB / 1024,GB = MB * 1024,TB = GB * 1024,P=0;
// }
function to_hhmmss(num) {
    var sec_num = parseInt(num, 10); // don't forget the second param
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    var time    = hours+':'+minutes+':'+seconds;
    return time;
}
function to_byt(num){
	var KB = 1024;
	var MB = KB/1024;
	var GB = MB/1024;
	var TB = GB/1024,P=0;

	if ((num >= 0) && (num < KB)) {
		return num + ' B';

	} else if ((num >= KB) && (num < MB)) {
		return (num / KB).toFixed(P) + ' KB';

	} else if ((num >= MB) && (num < GB)) {
		return (num / MB).toFixed(P) + ' MB';

	} else if ((num >= GB) && (num < TB)) {
		return (num / GB).toFixed(P) + ' GB';

	} else if (num >= TB) {
		return (num / TB).toFixed(P) + ' TB';

	} else {
		return num + ' B';
	}
}
function is_lip_year(yr){
		yr=parseInt(yr);
		yr=yr/4;
		if(yr%1==0){
			return true;
		}else{return false;}
}
function get_query_string(q){
	var queries = {};
	if(document.location.search.substr(1)){
  $.each(document.location.search.substr(1).split('&'),function(c,q){
    var i = q.split('=');
    queries[i[0].toString()] = i[1].toString();
  });
  if(queries[q]){return queries[q];}else{return '';}
  //alert(queries['i']);
	}else{return '';}
}
function set_get(url,k,v){
  var re = new RegExp("([?|&])" + k + "=.*?(&|#|$)", "i"),reH = new RegExp("([&])" + k + "=.*#!(&|$)", "i");
  if (url.match(re)) {
    return url.replace(re, '$1' + k + "=" + v + '$2');
  } else if(url.match(reH)){
	  return url.replace(reH, '$1' + k + "=" + v + '$2');
  }else {
    var hash =  '';
    var separator = url.indexOf('?') !== -1 ? "&" : "?";
    if( url.indexOf('#') !== -1 ){
        hash = url.replace(/.*#/, '#');
        url = url.replace(/#.*/, '');
    }
    return url + separator + k + "=" + v + hash;
  }
}
$.fn.pushUp = function(){
      var clicked = $(this);

      // all the LIs above the clicked one
      var previousAll = clicked.prevAll();

      // only proceed if it's not already on top (no previous siblings)
      if(previousAll.length > 0) {
        // top LI
        var top = $(previousAll[previousAll.length - 1]);

        // immediately previous LI
        var previous = $(previousAll[0]);

        // how far up do we need to move the clicked LI?
        var moveUp = clicked.attr('offsetTop') - top.attr('offsetTop');

        // how far down do we need to move the previous siblings?
        var moveDown = (clicked.offset().top + clicked.outerHeight()) - (previous.offset().top + previous.outerHeight());

        // let's move stuff
        clicked.css('position', 'relative');
        previousAll.css('position', 'relative');
        clicked.animate({'top': -moveUp});
        previousAll.animate({'top': moveDown}, {complete: function() {
          // rearrange the DOM and restore positioning when we're done moving
          clicked.parent().prepend(clicked);
          clicked.css({'position': 'static', 'top': 0});
          previousAll.css({'position': 'static', 'top': 0});
        }});
      }
};

function scrolled_view(wrapper,elem){
  var dis = $(elem);
  var docViewTop = $(wrapper).scrollTop();
  var docViewBottom = docViewTop + $(wrapper).height();

  var elemTop = dis.offset().top;
  var elemBottom = elemTop + dis.height();

  return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));

}
// js Cookies
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		define(factory);
	} else if (typeof exports === 'object') {
		module.exports = factory();
	} else {
		var _OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = _OldCookies;
			return api;
		};
	}
}(function () {
	function extend () {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[ i ];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function init (converter) {
		function api (key, value, attributes) {
			var result;

			// Write

			if (arguments.length > 1) {
				attributes = extend({
					path: '/'
				}, api.defaults, attributes);

				if (typeof attributes.expires === 'number') {
					var expires = new Date();
					expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);
					attributes.expires = expires;
				}

				try {
					result = JSON.stringify(value);
					if (/^[\{\[]/.test(result)) {
						value = result;
					}
				} catch (e) {}

				if (!converter.write) {
					value = encodeURIComponent(String(value))
						.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
				} else {
					value = converter.write(value, key);
				}

				key = encodeURIComponent(String(key));
				key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
				key = key.replace(/[\(\)]/g, escape);

				return (document.cookie = [
					key, '=', value,
					attributes.expires && '; expires=' + attributes.expires.toUTCString(), // use expires attribute, max-age is not supported by IE
					attributes.path    && '; path=' + attributes.path,
					attributes.domain  && '; domain=' + attributes.domain,
					attributes.secure ? '; secure' : ''
				].join(''));
			}

			// Read

			if (!key) {
				result = {};
			}

			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all. Also prevents odd result when
			// calling "get()"
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var rdecode = /(%[0-9A-Z]{2})+/g;
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var name = parts[0].replace(rdecode, decodeURIComponent);
				var cookie = parts.slice(1).join('=');

				if (cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					cookie = converter.read ?
						converter.read(cookie, name) : converter(cookie, name) ||
						cookie.replace(rdecode, decodeURIComponent);

					if (this.json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					if (key === name) {
						result = cookie;
						break;
					}

					if (!key) {
						result[name] = cookie;
					}
				} catch (e) {}
			}

			return result;
		}

		api.get = api.set = api;
		api.getJSON = function () {
			return api.apply({
				json: true
			}, [].slice.call(arguments));
		};
		api.defaults = {};

		api.remove = function (key, attributes) {
			api(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
}));
// end of js cookies

// textarea autosize
(function(d){var l={className:"autosizejs",append:"",callback:!1},m="hidden",q="fontFamily fontSize fontWeight fontStyle letterSpacing textTransform wordSpacing textIndent".split(" "),r,c=d('<textarea tabindex="-1" style="position:absolute; top:-999px; left:0; right:auto; bottom:auto; border:0; -moz-box-sizing:content-box; -webkit-box-sizing:content-box; box-sizing:content-box; word-wrap:break-word; height:0 !important; min-height:0 !important; overflow:hidden;"/>').data("autosize",!0)[0];c.style.lineHeight=

"99px";"99px"===d(c).css("lineHeight")&&q.push("lineHeight");c.style.lineHeight="";d.fn.autosize=function(g){g=d.extend({},l,g||{});c.parentNode!==document.body&&d(document.body).append(c);return this.each(function(){function e(){var f,e,k;r!==a&&(r=a,c.className=g.className,d.each(q,function(a,d){c.style[d]=b.css(d)}));if(!j){j=!0;c.value=a.value+g.append;c.style.overflowY=a.style.overflowY;k=parseInt(a.style.height,10);c.style.width=Math.max(b.width(),0)+"px";c.scrollTop=0;c.scrollTop=9E4;f=c.scrollTop;

var h=parseInt(b.css("maxHeight"),10),h=h&&0<h?h:9E4;f>h?(f=h,e="scroll"):f<n&&(f=n);f+=p;a.style.overflowY=e||m;k!==f&&(a.style.height=f+"px",l&&g.callback.call(a));setTimeout(function(){j=!1},1)}}var a=this,b=d(a),n,j,k,p=0,l=d.isFunction(g.callback);if(!b.data("autosize")){if("border-box"===b.css("box-sizing")||"border-box"===b.css("-moz-box-sizing")||"border-box"===b.css("-webkit-box-sizing"))p=b.outerHeight()-b.height();n=Math.max(parseInt(b.css("minHeight"),10)-p,b.height());k="none"===b.css("resize")||

"vertical"===b.css("resize")?"none":"horizontal";b.css({overflow:m,overflowY:m,wordWrap:"break-word",resize:k}).data("autosize",!0);"onpropertychange"in a?"oninput"in a?a.oninput=a.onkeyup=e:a.onpropertychange=e:a.oninput=e;d(window).resize(function(){j=!1;e()});b.bind("autosize",function(){j=!1;e()});e()}})}})(window.jQuery||window.Zepto);
// end of textarea autosize
