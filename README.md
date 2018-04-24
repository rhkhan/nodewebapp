# nodewebapp
NodeJS CRUD application with express framework

################################################



MongoDB Environment setup, database connection and creating collection in a database:
1.	Downloas mongoDB zip from online
2.	Extract the zip in your specified directory
3.	Open command prompt and go to the extracted bin directory
	Inside the bin directory you will find Mongo.exe (for mongo client) and Mongod.exe (For starting mongoDB server and connecting to database)
4.	Create a data folder (where your data will be saved by mongoDB) in a desired location
5.	Type mongod in the command prompt to start mongo server and open the connection to database using the following command
	mongod --storageEngine=mmapv1 --dbpath [your-path] // command to start mongoDB server in command prompt when there is an exception with 'wiredTiger' storage engine; here [your-path]=data folder path that has been created in step 4
6.	open another command prompt
7.	go to the extracted mongoDB bin directory and type mongo to start the mongo client
8.	type use [dbname] to create a new database if not exists or use the existing database
9.	type db.[collection_name].insert({a:”aa”,b:”bb”}) to save data in the collection


adminMongo GUI Installation:
adminMongo is a cross platform user interface (GUI) to handle all your MongoDB connections/databases needs. adminMongo is fully responsive and should work on a range of devices.

Installation
1.	Navigate to folder & install adminMongo: git clone https://github.com/mrvautin/adminMongo.git && cd adminMongo
2.	Install dependencies: npm install
3.	Start application: npm start or node app
4.	Visit http://127.0.0.1:1234 in your browser
Note: Node.js version 4.x or above is required

Using Express and NodeJS to create web application:
1.	Install nodeJS from online
2.	Open command prompt
3.	Install npm If does not exist
4.	Type npm install –g express-generator
5.	Go to your specific directory
6.	Type express yourwebappname to create an express application
7.	Type cd yourwebappname
8.	Type npm install ; to install dependencies
9.	command to run nodeJS app using express:
	set DEBUG= yourwebappname & node ./bin/www
OR
	SET DEBUG= yourwebappname:* & npm start
10.	Open the browser and type the directed url that is being displayed in the command prompt



