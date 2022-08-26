/* Table1- Books Table  */
create table books(
book_name varchar(20),
book_language varchar(20),
book_page_number numeric
);

INSERT INTO books(book_name,book_language,book_page_number)
VALUES("In Search of Lost Time","English", 250);
INSERT INTO books(book_name,book_language,book_page_number)
VALUES("Ulysses","English", 300);
INSERT INTO books(book_name,book_language,book_page_number)
VALUES("Don Quixote","Spanish", 200);
INSERT INTO books(book_name,book_language,book_page_number)
VALUES("Moby Dick","English", 180);
INSERT INTO books(book_name,book_language,book_page_number)
VALUES("War and Peace","Russian", 320);
INSERT INTO books(book_name,book_language,book_page_number)
VALUES("The Divine Comedy","Italiano", 400);
INSERT INTO books(book_name,book_language,book_page_number)
VALUES("Crime and Punishment","English", 340);
INSERT INTO books(book_name,book_language,book_page_number)
VALUES("Tel Aviv Noir","Hebrew", 180);
INSERT INTO books(book_name,book_language,book_page_number)
VALUES("Russian Fairy Tales","Russian", 360);
INSERT INTO books(book_name,book_language,book_page_number)
VALUES("Le Petit Prince","French", 220);

select * from books

/* Table2- Students Table  */
create table Students(
id varchar(9),
student_name varchar(20),
student_degree text
);
INSERT INTO Students(id,student_name,student_degree)
VALUES("201259595","Ameer", "B.SC. in Chemistry and Biology");
INSERT INTO Students(id,student_name,student_degree)
VALUES("203410233","Emran", "Software Engineering");
INSERT INTO Students(id,student_name,student_degree)
VALUES("313226151","Raghad","BA in English");
INSERT INTO Students(id,student_name,student_degree)
VALUES("456223189","Samer", "Medicine");
INSERT INTO Students(id,student_name,student_degree)
VALUES("224353698","Rayan", "Civil Engineer");
INSERT INTO Students(id,student_name,student_degree)
VALUES("055223688","Raghed", "Laborant");
INSERT INTO Students(id,student_name,student_degree)
VALUES("410151339","Maisam", "Nursing");
INSERT INTO Students(id,student_name,student_degree)
VALUES("203410873","Yazan", "Electrical Engineering");
INSERT INTO Students(id,student_name,student_degree)
VALUES("335632799","Sleman", "B.SC. in exact sciences");
INSERT INTO Students(id,student_name,student_degree)
VALUES("204578222","Naseem", "BA in Phylosophy");
select * from Students

/* Table3- Customers Table  */
create table customersdata(
customer_id varchar(9),
customer_firstname varchar(20),
customer_lastname varchar(20),
age numeric,
country varchar(15)
);
INSERT INTO customersdata(customer_id,customer_firstname,customer_lastname,age,country)
VALUES("204578222","Ameer","Emran","33","Israel");
INSERT INTO customersdata(customer_id,customer_firstname,customer_lastname,age,country)
VALUES("203410873","David","Robinson","37","Greece");
INSERT INTO customersdata(customer_id,customer_firstname,customer_lastname,age,country)
VALUES("224353698","Betty","Doe","40","USA");
INSERT INTO customersdata(customer_id,customer_firstname,customer_lastname,age,country)
VALUES("313226151","Robert","Kan","27","Germany");
INSERT INTO customersdata(customer_id,customer_firstname,customer_lastname,age,country)
VALUES("203410233","Sameer","Daher","25","Jordan");
select * from customersdata


