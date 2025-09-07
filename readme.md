#NodeJS setup & install dependancy and devdependancy

###Step-1:
-Craete a file with the name of server.mjs
-Go to https://nodejs.org/en
-.mjs -> module file type
-copy the code from that url then paste it here
-Run the code **node server.mjs**
##NOTE:
   -Once you run the code then if u will change anything it will wont reflect on the browser 
  so Click ctrl+c then run again.

###Step-2:
-Create package.json file 
-So type **npm init -y** this is shortform
-if we dont this minimal functions then **npm init**
-then enter all the category

###NOTE:
-This is module type files like we did in react like import and export
-In commonjs or js file we import the file using **require** keyword and export we use module.export

###Dependency:
    -This is goble level Dependency 
    -the comment is **npm install morgan**
    -node_modules package is appear and in the package.json file we have dependency item    
    -if we dont want **npm uninstall morgan**
   DevDependency:
   -This is only for using devlompent purpose
   -the comment is **npm install -D nodemon**
   -nodemon is use for only devlopment side not production side thie is use for we can see changes in browser without stop and start

now we can run the code "nodemon server.js"
##Step-3:
   -Then setup node snd nodemon in script package
   -**"Start":"node server.js","dev":"nodemon server.js"**
   -then **run npm run dev**
