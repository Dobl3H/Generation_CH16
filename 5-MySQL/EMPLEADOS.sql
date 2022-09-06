create table empleado (
id bigint unsigned auto_increment primary key,
branch_id bigint unsigned,
dni varchar(20) unique,
correo varchar(100), 
bith_date  date,
created_at timestamp null,
update_at timestamp null
);