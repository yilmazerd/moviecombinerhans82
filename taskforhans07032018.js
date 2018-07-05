// TASK FOR HANS:
// The following functions from stone era all work fine but they are not written well since:
//--the user is forced to select the right function each time for the correct number of movies
//--there is a lot of text for something that can be handled with one simple function
//Hans, if you accept, your very critical job is to write 1 good function that can take an array of files and return 1 output
//User doesn't need to know the number of the files he provided
//You should throw messages when user is forcing system to combine movies with different encoding levels
//You should also optionally add a fade in and out between movies
//User can select if it's black fade in or white fade in
//User can select how long is the fade in (0.5 second at the end, 0.5 second at the beginning, 1 second show white screen etc.)
//For the future:
//This function, in the future, should also inlcude a self correction method in which the user asked if he is OK if the function 
//converts all the movies into one common format and combines them afterwards. 
//We don't have enough use cases to design this functionality yet

async function combine(input1Filename, input2Filename, outputFilename,tempDir) {
        //ffmpeg -i "concat:input1.ts|input2.ts|input3.ts" -c copy output.ts
        let command = ffmpeg()
        .on('start', ffmpegStartFunc)
        .on('progress', ffmpegProgressFunc)
        .on('end', ffmpegEndFunc)
        .on('error', ffmpegErrorFunc)
        .input(input1Filename)
        .input(input2Filename)
        //.outputOptions(['-map "[v]" -map "[a]"'])
        //.complexFilter(['"[0:v] [0:a] [1:v] [1:a] concat=n=2:v=1:a=1 [v] [a]"'])
        .complexFilter(['"[0:v] [0:a] [1:v] [1:a] concat=n=2:v=1:a=1 [v] [a]" -map "[v]" -map "[a]"'])
        .outputOptions(['-pix_fmt yuv420p'])
        return new Promise((resolve, reject) => {
            command.on('end', () => {resolve()})
            //command.save(outputFilename);
            command.mergeToFile(outputFilename, tempDir);
        })
    }

async function combine3(input1Filename, input2Filename, input3Filename, outputFilename,tempDir) {
        //ffmpeg -i "concat:input1.ts|input2.ts|input3.ts" -c copy output.ts
        let command = ffmpeg()
        .on('start', ffmpegStartFunc)
        .on('progress', ffmpegProgressFunc)
        .on('end', ffmpegEndFunc)
        .on('error', ffmpegErrorFunc)
        .input(input1Filename)
        .input(input2Filename)
        .input(input3Filename)
        //.outputOptions(['-map "[v]" -map "[a]"'])
        //.complexFilter(['"[0:v] [0:a] [1:v] [1:a] concat=n=2:v=1:a=1 [v] [a]"'])
        .complexFilter(['"[0:v:0][0:a:0][1:v:0][1:a:0][2:v:0][2:a:0]concat=n=3:v=1:a=1[outv][outa]" \
-map "[outv]" -map "[outa]"'])
        .outputOptions(['-pix_fmt yuv420p'])
        return new Promise((resolve, reject) => {
            command.on('end', () => {resolve()})
            //command.save(outputFilename);
            command.mergeToFile(outputFilename, tempDir);
        })
    }   


async function combine4(input1Filename, input2Filename, input3Filename, input4Filename, outputFilename,tempDir) {
        //ffmpeg -i "concat:input1.ts|input2.ts|input3.ts" -c copy output.ts
        let command = ffmpeg()
        .on('start', ffmpegStartFunc)
        .on('progress', ffmpegProgressFunc)
        .on('end', ffmpegEndFunc)
        .on('error', ffmpegErrorFunc)
        .input(input1Filename)
        .input(input2Filename)
        .input(input3Filename)
        .input(input4Filename)
        //.outputOptions(['-map "[v]" -map "[a]"'])
        //.complexFilter(['"[0:v] [0:a] [1:v] [1:a] concat=n=2:v=1:a=1 [v] [a]"'])
        .complexFilter(['"[0:v:0][0:a:0][1:v:0][1:a:0][2:v:0][2:a:0][3:v:0][3:a:0]concat=n=4:v=1:a=1[outv][outa]" \
-map "[outv]" -map "[outa]"'])
        .outputOptions(['-pix_fmt yuv420p'])
        return new Promise((resolve, reject) => {
            command.on('end', () => {resolve()})
            //command.save(outputFilename);
            command.mergeToFile(outputFilename, tempDir);
        })
    }  

async function combine5(input1Filename, input2Filename, input3Filename, input4Filename, input5Filename, outputFilename,tempDir) {
        //ffmpeg -i "concat:input1.ts|input2.ts|input3.ts" -c copy output.ts
        let command = ffmpeg()
        .on('start', ffmpegStartFunc)
        .on('progress', ffmpegProgressFunc)
        .on('end', ffmpegEndFunc)
        .on('error', ffmpegErrorFunc)
        .input(input1Filename)
        .input(input2Filename)
        .input(input3Filename)
        .input(input4Filename)
        .input(input5Filename)
        //.outputOptions(['-map "[v]" -map "[a]"'])
        //.complexFilter(['"[0:v] [0:a] [1:v] [1:a] concat=n=2:v=1:a=1 [v] [a]"'])
        .complexFilter(['"[0:v:0][0:a:0][1:v:0][1:a:0][2:v:0][2:a:0][3:v:0][3:a:0][4:v:0][4:a:0]concat=n=5:v=1:a=1[outv][outa]" \
-map "[outv]" -map "[outa]"'])
        .outputOptions(['-pix_fmt yuv420p'])
        return new Promise((resolve, reject) => {
            command.on('end', () => {resolve()})
            //command.save(outputFilename);
            command.mergeToFile(outputFilename, tempDir);
        })
    }    
