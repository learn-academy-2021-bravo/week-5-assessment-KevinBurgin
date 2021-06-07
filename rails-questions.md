# ASSESSMENT 5: Database and Active Record Practical Questions

1. What is SQL? 

SQL, Structured Query Language, and is used to create and manipulate relational databases.



2. What the PostgreSQL query that would return all the content in a particular table?  

$ SELECT * FROM table



3. What is the command to create a new Rails application with a PostgreSQL database?  

$ rails new my_new_app -d postgresql -T



4. What is the command to generate a Rails model for a meals table with columns named breakfast, lunch, and dinner?

$ rails generate model Meals breakfast:string lunch:string dinner:string


5. What is a migration? Why would you use one? 

Migration is the ability of migrating data from a source database to a target database.
Migration would be used make changes to your database schema



6. What is the command to generate a migration file?

$ rails generate migration add_item_to_schdule


7. What is the naming convention for generating a Rails model? What is the naming convention for the table that is generated with this command?

CamelCase
snake_case



8. What is the schema file in a Rails application? Can you modify the schema directly? Why or why not?

The schema file in rails is the document that holds the current state of the database schema.
You cannot modify the schema the schema is only modified by migrating



9. What is the Rails console?

The rails console is an irb that is built into the rails enviroment


10. What is the Rails console command to see all the content in a particular table?

Table.all