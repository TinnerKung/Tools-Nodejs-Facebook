var request = require('request');
var colors = require('colors');
var fs = require('fs');
var LineByLineReader = require('line-by-line');
var readline = require('readline-sync');
lr = new LineByLineReader('token.txt');
console.log(colors.rainbow("-----------Tools Facebook Gamer_PernYren----------------------"));
console.log(colors.cyan.underline("1.ไลน์อัตโนมัส"));
console.log(colors.cyan.underline("2.อิโมจิอัตโนมัส"));
console.log(colors.cyan.underline("3.คอมแม้นอัตโนมัส"));
console.log(colors.cyan.underline("4.ติดตามเพจ"));
console.log(colors.cyan.underline("5.เพืมเพื่อน"));
console.log(colors.cyan.underline("6.แชลอัตโนมัส"));
console.log(colors.cyan.underline("7.แอดเข้ากลุม"));
console.log(colors.cyan.underline("8.แอดหมู่"));
console.log(colors.cyan.underline("9.ใส่โล้ให้โทเคน"));
console.log(colors.cyan.underline("10.เช็คโทเค้น"));
console.log(colors.rainbow("-------------Dev By PernYrenCraft-----------------------------"));
var menu = readline.question("เลือกโหมด:");
if(menu == '1'){

	var id = readline.question("ไอดีโพส:");
	lr.on('line', function (line) {
	request.post({
        url: 'https://graph.facebook.com/'+id+'/likes?access_token='+line,
         }, function(error, response, body){
            console.log(body);
    });
	});
}

if(menu == '2'){

	var id = readline.question("ไอดีโพส:");
	var type = readline.question("NONE, LIKE, LOVE, WOW, HAHA, SAD, ANGRY, THANKFUL, PRIDE :");
	lr.on('line', function (line) {
	request.post({
        url: 'https://graph.facebook.com/'+id+'/reactions?type='+type+'&method=post&access_token='+line,
         }, function(error, response, body){
            console.log(body);
    });
	});
}

if(menu == '3'){

	var id = readline.question("ไอดีโพส:");
	var message = readline.question("ข้อความ:");
	lr.on('line', function (line) {
	request.post({
        url: 'https://graph.facebook.com/'+id+'/comments?message='+message+'&method=post&access_token='+line,
         }, function(error, response, body){
            console.log(body);
    });
	});
}
if(menu == '4'){

	var id = readline.question("ไอดีโพส:");
	lr.on('line', function (line) {
	request.post({
        url: 'https://graph.facebook.com/'+id+'/subscribers?access_token='+line,
         }, function(error, response, body){
            console.log(body);
    });
	});
}
if(menu == '5'){

	var id = readline.question("ไอดีเพส:");
	lr.on('line', function (line) {
	request.post({
        url: 'https://graph.facebook.com/me/friends?method=post&uids='+id+'&access_token='+line,
         }, function(error, response, body){
            console.log(body);
    });
	});
}//http://616like.com/tool/api/startshare.php?message=test&id_post=1846474445415118&access_token=
if(menu == '6'){

	var id = readline.question("ไอดีโพส:");
	var output = readline.question("ลงโพสที่ใหน:");
	var message = readline.question("ข้อความ:");
	lr.on('line', function (line) {
	request.post({
        url: 'https://graph.facebook.com/'+output+'/feed?message='+message+'&link=http://facebook.com/'+id+'&method=post&access_token='+line,
         }, function(error, response, body){
            console.log(body);
    });
	});
}
if(menu == '7'){

	var id = readline.question("ไอดีโพส:");
	lr.on('line', function (line) {
	request.post({
        url: 'http://43.229.148.11/api/apijoin.php?group='+id+'&token='+line,
         }, function(error, response, body){
            console.log('wait......');
    });
	});
}
if(menu == '8'){

	var id = readline.question("ไอดีโพส:");
	lr.on('line', function (line) {
	request.post({
        url: 'http://43.229.148.11/api/apigroup.php?group='+id+'&token='+line,
         }, function(error, response, body){
            console.log("wait......");
    });
	});
}

if(menu == '9'){

	var id = readline.question("true & false : ");
	lr.on('line', function (line) {
	request.post({
        url: 'https://graph.ball-tools.com/?shield&type='+id+'&token='+line,
         }, function(error, response, body){
            console.log("wait......");
    });
	});
}

if(menu == '10'){


	fs.readFileSync('token.txt').toString().split('\n').forEach(function (line) {
	request.post({
        url: 'https://graph.fb.me/v2.3/me?access_token='+line,


         }, function(error, response, body){
			 if(body =='สำเร็จ'){

			 var index = 1;

             console.log("\x1b[32m%s\x1b[0m",line);
            fs.appendFileSync("output.txt", line.toString() + "\n");

           }
		   else{
			   console.log("\x1b[31m%s\x1b[0m","โทเคนพัง");
		   }

    });
	});
}

else{
	console.log("ไปเลยโทเค้น ทิน คุง");
}
