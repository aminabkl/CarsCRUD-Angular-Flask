<!-- Create a database "crudcar" -->

<!-- Execute these SQL queries: -->

<!-- User table :  -->

CREATE TABLE `user` (
  `id_user` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


<!-- Car table :  -->
CREATE TABLE `car` (
  `id_car` int(11) NOT NULL,
  `model` varchar(100) NOT NULL,
  `hp` varchar(100) NOT NULL,
  `marque` varchar(100) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;



<!-- PK :  -->
ALTER TABLE `car`
  ADD PRIMARY KEY (`id_car`),
  ADD KEY `test` (`user_id`);


<!-- FK :  -->
ALTER TABLE `car`
  ADD CONSTRAINT `test` FOREIGN KEY (`user_id`) REFERENCES `user` (`id_user`);