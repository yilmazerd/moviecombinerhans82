var fs = require('fs')
var request = require('request-promise');
var wget = require('node-wget');

   ImageURL = [
        "https://www.dropbox.com/s/3lf7dwzmqjpqrlj/Slide4.png?dl=0",
        "https://www.dropbox.com/s/ttmao37zfjxhdve/Slide2.png?dl=0",
        "https://www.dropbox.com/s/mcvi0boz85y1crd/Slide3.png?dl=0"    
        ]

function downloadImgs(imageurls){ //imageurls is an array of urls
    //var tempar=[];
    var promises=[];
    for (var i = 0; i <=imageurls.length; i++) {
        if(typeof imageurls[i] !== "undefined"){
            img="ERASE"+i+'.png'; //tempfolder is a global variable
            //tempar.push(img);
            let req = request(imageurls[i]);
            req.pipe(fs.createWriteStream(img));
            promises.push(req);
        }

    }
    Promise.all(promises).then(function(data) {

        //createslideshow(tempar);//create slideshow with downloaded images

    });

};

//downloadImgs(ImageURL)
for (var i = 0; i <=ImageURL.length; i++) {
    wget({url: ImageURL[0], dest: 'ERASE00'+i +' .png'}, function(){});
}
