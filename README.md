# WorkGoWhere Backend

## 🏃🏻‍♀️ How to get this up and running?

1. Locate where you want to save this repo in your local machine from your terminal.
2. Run `git clone https://github.com/AgileProjectY2/workgowhere-backend.git`
3. Open the repo in your code editor.
4. Open the terminal from your code editor, run `npm install`.
5. In the root foler, create a new file called `.env`.
6. Copy and paste the database URI in the file and save. Without this file, the database will not be able to connect. This environment file is needed so that we do not upload sensitive credentials onto the github repo.
7. To start the server, run `nodemon app`. You should see a message from the console that the server is running and database is connected.
8. Head to your browser, open `http://localhost:3001/` and you should see your server's response message.
9. The server will automatically restart for you upon every save with the `nodemon` library.
