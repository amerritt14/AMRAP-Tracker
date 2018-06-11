function populateDB(tx) {
     tx.executeSql('DROP TABLE IF EXISTS DEMO');
     tx.executeSql('CREATE TABLE IF NOT EXISTS DEMO (id unique, data)');
     tx.executeSql('INSERT INTO DEMO (id, data) VALUES (1, "First row")');
     tx.executeSql('INSERT INTO DEMO (id, data) VALUES (2, "Second row")');
}

function errorCB(err) {
    console.log("Error processing SQL: "+err.code);
}

function successCB() {
    console.log("success!");
}

var db = window.openDatabase("Database", "1.0", "PhoneGap Demo", 200000);
db.transaction(populateDB, errorCB, successCB);
