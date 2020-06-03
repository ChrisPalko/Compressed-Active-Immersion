# Compressed-Active-Immersion
A node.js script to create an ffmpeg command to to compress active immersion

# Prequesits
- ffmpeg also added to Path
- subtitles for episode
- episode
- node.js

# How to use
1. Open index.js in a text editor 
2. To the subtitles variable in the file paste the subtitles
2. On line 50 change the string "FILE NAME" to what the episode is called (ex: "Attack on Titan s1e01.mkv")
3. On line 53 change EXTENSION to the extension of the video file of the episode
3. Open powershell using the cd command navigate to the file index.js and execute the following command (node index.js)
4. Copy the output
5. Navigate using the cd command where the episode is located and execute the output from the previous command
6. Once it finishes, execute the following command dir
7. Copy the name of all the files that contains outputX(x means any number) and paste them in a text editor
9. Cut anything that's not outputX, and structre it so every line looks like this:
   File 'output1'
   File 'output1'
save the file as inputs.txt
10. Execute the following command ffmpeg -f concat -i inputs.txt -c copy output.mp4 (Change the mp4 to the file extensions of the original video file

# Credit: This project couldn't be possible without the following tutorial https://markheath.net/post/cut-and-concatenate-with-ffmpeg
