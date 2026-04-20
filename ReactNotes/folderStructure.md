
[Folder strucutre in React]
1)
node_ module:

--> this is a folder automativally crreated when you run npm install or yarn install

--> it contains all the installed dependencies package your project needs including react vite ESlint and any third party library

Important:-

never edits files inside it manually and do not commit it to the git(it usually ignored via .gitignore)


ex---> axios ,react, vite


2)public 
Folder for static files(like image,features) that are saved as is.
ex---> svg
gitignore:-->fike that tells git which files/folder to ignore (gitignore)
ex--> node_module,.env



3) what is ESlint.config.js

--is the configuration file for ESlint a popular tool that analyzes your js/ts code for the error bugs and style issues.

--ESlint.config.js tells ESlint how to check your code  and what rules to follow


4) package.json

    it is the most Important file in any js node.js project
    it act likes the identity card of your project.

what it contains
project name,version,description

all dependencies (package) your project needs
script like(npm run dev, npm run build)



5) package-lock.json
it is an auto generated  file crreated by npm.
it record the exact version of every package and sub package installed


why it exsist?
to ensure everyone on the team get the same exact version of packages

6)readme.md
A markdown file that serves as the documentation for your project


7) vite.config.js

configuration file for vite (build tool & dev serves).




