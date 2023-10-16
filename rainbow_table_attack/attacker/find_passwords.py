import sqlite3

app_db = sqlite3.connect("my_app_db.sqlite")
rainbow_db = sqlite3.connect("rainbow_table.sqlite")

app_cursor = app_db.cursor()
app_cursor.execute("SELECT * from user")
users = app_cursor.fetchall()

print(users)

for user in users:
    rainbow_cursor = rainbow_db.cursor()
    rainbow_cursor.execute("SELECT * FROM password_map WHERE hash=?", (user[2],))
    password_row = rainbow_cursor.fetchone()
    if password_row:
        print(f"Password for user {user[1]} is {password_row[1]}")
    else:
        print(f"Could not find password for user {user[1]}")