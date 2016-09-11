# signzyCodetest
### NodeJS Scripts to perform some MySQL operations

####My Environment
Software | Version |
--- | --- |
OS | Ubuntu 14.04 |
NodeJS | 4.5 |
MySQL | 5.7

Steps to run on your machine:

1. Install NodeJS v4.5.0 based on [docs](https://nodejs.org/en/download/package-manager/)
2. Install MySQL v5.7 based on [docs](http://dev.mysql.com/doc/refman/5.7/en/installing.html)
3. Run `sudo mysql_secure_installation` to secure your existing mysql installation on linux, if you are running another OS, check [docs](https://dev.mysql.com/doc/refman/5.7/en/mysql-secure-installation.html)
3. Install Git based on [docs](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
4. Clone this [repo](https://github.com/prateek0103/signzyCodetest)
5. Run `npm install` at the root directory of repo
6. Edit `index.js` and add database credentials(create a database in mysql using shell) to it
7. Run the script `node index.js`, wait for completion
8. Verify data in the database by running `SELECT * FROM '<tableName>'`, it should return with all the rows, replace `<tableName>` with your table's name in the DB.
9. Run `node api.js`, this make the app server to `LISTEN` on port `8082`, check if the port is open and not being used by any other app on your machine.
10. Goto your browser, open URL `http://<server:port>/search/<query>`, it will return with an array of 5 rows from DB, if search results true, else it will return an empty array. If the `<query>` is less than 3 characters, it'll return `HTTP 400` bad request.
