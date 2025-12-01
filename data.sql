
-- kategoria 
insert into nest_books.category(description) values ('WWW');
insert into nest_books.category(description) values ('HTML');
insert into nest_books.category(description) values ('JavaScript');
insert into nest_books.category(description) values ('Java');

-- wydawnictwo
insert into nest_books.publisher(name,address) values ('Helion','Gliwice, Polska');
insert into nest_books.publisher(name,address) values ('PWN','Warszawa, Polska');
insert into nest_books.publisher(name,address) values ('OREILLY','Boston, USA');

-- ksiazka 
insert into nest_books.books(title,publisher_idp,category_idc) values ('Java. Podstawy',1,4);
insert into nest_books.books(title,publisher_idp,category_idc) values ('Projektownie serwisów WWW. Standardy sieciowe',1,1);
insert into nest_books.books(title,publisher_idp,category_idc) values ('Zrozumieć JavaScript',1,3);
insert into nest_books.books(title,publisher_idp,category_idc) values ('Head first Java',3,4);
insert into nest_books.books(title,publisher_idp,category_idc) values ('HTML5. Komponenty',2,2);
insert into nest_books.books(title,publisher_idp,category_idc) values ('Wydajny JavaScript',2,3);