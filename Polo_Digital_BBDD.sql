-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         11.3.0-MariaDB - mariadb.org binary distribution
-- SO del servidor:              Win64
-- HeidiSQL Versión:             12.3.0.6589
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Volcando estructura de base de datos para polo_digital
CREATE DATABASE IF NOT EXISTS `polo_digital` /*!40100 DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci */;
USE `polo_digital`;

-- Volcando estructura para tabla polo_digital.clientes
CREATE TABLE IF NOT EXISTS `clientes` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `razon_social` varchar(50) DEFAULT NULL,
  `CIF` varchar(9) DEFAULT NULL,
  `sector` varchar(50) DEFAULT NULL,
  `telefono` varchar(9) DEFAULT NULL,
  `numero_empleados` int(100) DEFAULT NULL,
  `images` varchar(100) DEFAULT NULL,
  `descripcion` varchar(500) DEFAULT NULL,
  `url` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- Volcando datos para la tabla polo_digital.clientes: ~10 rows (aproximadamente)
INSERT INTO `clientes` (`id`, `razon_social`, `CIF`, `sector`, `telefono`, `numero_empleados`, `images`, `descripcion`, `url`) VALUES
	(1, 'OWO Tech', 'b56432512', 'Nuevas Tecnologias', '952101015', 20, '/images/owo.jpeg', 'Siente sensaciones físicas reales con nuestro sistema patentado. La tecnología de sensaciones de OWO utiliza un algoritmo que modifica 9 parámetros diferentes de la onda para que sientas infinitas sensaciones diferentes.', 'https://www.owogame.com/'),
	(2, 'Releevant', 'b29683371', 'Formación tecnologica', '952001101', 22, '/images/releevant.jpg', 'Nuestro hub extiende tres áreas de actuación: Formación Tecnológica, Desarrollo de Software e Impulso de startups.', 'https://www.releevant.com/'),
	(3, 'Campero Games', 'b29683371', 'Videojuegos', '952230054', 22, '/images/campero.jpg', 'Campero Games es una empresa de desarrollo de videojuegos, aplicaciones y realidad virtual. Expertos en free-to-play y desarrollos de alta calidad tanto propios como para terceros.', 'https://www.camperogames.com/'),
	(8, 'Ciencia VR', 'b88877799', 'Marketing digital', '952000001', 34, '/images/cienciaVR.png', 'Plataforma Educativa de contenidos en Realidad Virtual que proporciona experiencias inmersivas en entornos de aprendizaje personalizables y los recursos didácticos para su implementación en el aula.', 'https://www.cienciavr.com/'),
	(9, 'Telefonica 42', 'B29684439', 'Telefonía', '644554455', 16, '/images/telefonica.jpg', '42 Málaga es el campus de programación más innovador y gratuito que te abre las puertas al mercado laboral. Con una metodología revolucionaria y una duración media de tres años, está abierto las 24 horas.', 'https://www.fundaciontelefonica.com/'),
	(10, 'Lailo Tech', 'b29683392', 'Videojuegos', '952001212', 3, '/images/lailo.png', 'Los servicios de Lailo están orientados a asesorar y crear en realidad virtual: Simulaciones, juegos, aplicaciones y formatos narrativos inmersivos.', 'https://laiatech.com/'),
	(21, 'laila', 'b56432543', 'lavanderie', '987654321', 32, NULL, NULL, NULL),
	(22, 'laila', 'b56432543', 'lavanderia', '987654321', 32, NULL, NULL, NULL),
	(23, 'laila', 'b56432545', 'lavanderia', '987654321', 32, NULL, NULL, NULL),
	(24, 'laila', 'b56432592', 'lavanderia', '987654321', 32, NULL, NULL, NULL);

-- Volcando estructura para tabla polo_digital.empleados
CREATE TABLE IF NOT EXISTS `empleados` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) DEFAULT NULL,
  `apellidos` varchar(50) DEFAULT NULL,
  `telefono` varchar(12) DEFAULT NULL,
  `salario` int(11) DEFAULT NULL,
  `puesto` varchar(50) DEFAULT NULL,
  `usuarioid` int(11) DEFAULT NULL,
  `DNI` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- Volcando datos para la tabla polo_digital.empleados: ~5 rows (aproximadamente)
INSERT INTO `empleados` (`id`, `nombre`, `apellidos`, `telefono`, `salario`, `puesto`, `usuarioid`, `DNI`) VALUES
	(1, 'Roberto', 'Cuesta', '654789874', 1200, 'control_acceso', 10, '77984765Z'),
	(2, 'Pilar', 'Rubio', '789654132', 1300, 'seguridad', 11, '99487143Y'),
	(3, 'Rafa', 'Carmona', '654876214', 1350, 'limpieza', 12, '32215497T'),
	(4, 'Isolina', 'Gato-Sardina', '698745123', 1500, 'supervisora', 7, '33225413W'),
	(5, 'Carmen', 'Polo', '952004121', 1250, 'recepcionista', 6, '45678912R');

-- Volcando estructura para tabla polo_digital.empleadosclientes
CREATE TABLE IF NOT EXISTS `empleadosclientes` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) DEFAULT NULL,
  `apellidos` varchar(50) DEFAULT NULL,
  `usuarioid` int(100) DEFAULT NULL,
  `clientesid` int(11) DEFAULT NULL,
  `DNI` varchar(9) DEFAULT NULL,
  `telefono` varchar(9) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=67 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- Volcando datos para la tabla polo_digital.empleadosclientes: ~12 rows (aproximadamente)
INSERT INTO `empleadosclientes` (`id`, `nombre`, `apellidos`, `usuarioid`, `clientesid`, `DNI`, `telefono`) VALUES
	(1, 'Maricarmen', 'Muñoz Blanco', 4, 2, '23495860W', '952454662'),
	(2, 'Rita', 'Gonzalez Ortiz', 3, 1, '98763845S', '952447762'),
	(3, 'Francisco', 'Chacon Garcia', 2, 3, '78945632R', '657394029'),
	(4, 'Israel', 'Ruiz Leon ', 1, 2, '23456478Y', '952004242'),
	(12, 'Albus', 'Garcia Montalvo', 28, 2, '25875187Y', '677294847'),
	(41, 'Eulalio', 'Garcia Perez', 78, 2, '23456787R', '633105454'),
	(42, 'Alberto', 'Nuñez Rojas', 79, 1, '98765432P', '654123987'),
	(43, 'Jorge', 'Ortiz Rubio', 80, 1, '98765432P', '689997741'),
	(44, 'Albus', 'Dumbledore', 81, 2, '25735143y', '677877877'),
	(64, 'Gabriel', 'Garcia Marquez', 110, 2, '25797854E', '952003311'),
	(65, 'Laura', 'Junior', 111, 2, '98765432W', '697979797'),
	(66, 'laila', '987654321', 112, 2, '32', '677877877');

-- Volcando estructura para tabla polo_digital.eventos
CREATE TABLE IF NOT EXISTS `eventos` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(200) DEFAULT NULL,
  `fecha_inicio` varchar(50) DEFAULT NULL,
  `fecha_fin` varchar(50) DEFAULT NULL,
  `aforo` int(11) DEFAULT NULL,
  `clientesid` int(11) DEFAULT NULL,
  `salaid` int(11) DEFAULT NULL,
  `images` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- Volcando datos para la tabla polo_digital.eventos: ~9 rows (aproximadamente)
INSERT INTO `eventos` (`id`, `nombre`, `fecha_inicio`, `fecha_fin`, `aforo`, `clientesid`, `salaid`, `images`) VALUES
	(3, 'Hiring-day RELEEVANT', '21/03/2024', '21/03/2024', 100, 2, 4, '/images/hiring.jpg'),
	(4, 'Indie_Games', '20/04/2024', '20/04/2024', 110, 9, 4, '/images/indie.jpg'),
	(8, 'Transfiere 2024', '22/03/2024', '24/04/2024', 201, 8, 5, '/images/transfiere.jpg'),
	(9, 'Digital Enterprise Show 2024', '11/05/2024', '16/06/2024', 200, 3, 4, '/images/digital.jpg'),
	(17, 'Gestión de Recursos Humanos con Inteligencia Artificial', '20/06/2024', '20/06/2024', 110, 10, 2, '/images/rrhh.jpg'),
	(18, 'ChatGPT con herramientas de Microsoft Office', '01/07/2024', '03/07/2024', 200, 15, 1, '/images/chatgpt.jpg'),
	(19, 'Collaborate Reset The Economy Málaga 2023', '05/07/2024', '05/07/2024', 200, 1, 4, '/images/evento.jpg'),
	(20, 'Malaga Tech Connect', '03/08/2024', '03/08/2024', 200, 1, 4, '/images/malaga.jpg'),
	(21, 'International Conference of Technology', '05/09/2024', '05/09/2024', 150, 9, 3, '/images/conferencia.jpg');

-- Volcando estructura para tabla polo_digital.inventario
CREATE TABLE IF NOT EXISTS `inventario` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(200) DEFAULT NULL,
  `referencia` varchar(12) DEFAULT NULL,
  `estado` tinyint(1) DEFAULT NULL,
  `marca` varchar(50) DEFAULT NULL,
  `clienteid` varchar(60) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- Volcando datos para la tabla polo_digital.inventario: ~9 rows (aproximadamente)
INSERT INTO `inventario` (`id`, `nombre`, `referencia`, `estado`, `marca`, `clienteid`) VALUES
	(20, 'Portátil - ASUS ZenBook S 13 i7', '0020', 1, 'ASUS', '3'),
	(21, 'Portátil - Lenovo IdeaPad Slim 5 i5', '0013', 1, 'Lenovo', '2'),
	(22, 'Portátil - MSI Creator Z16 HX Studio i9', '0014', 1, 'MSI', '8'),
	(25, 'TV LED 32 - Xiaomi TV A2, HD, Smart TV, Dolby Audio', '0032', 1, 'Xiaomi', '9'),
	(26, 'Monitor - Acer , 23.8 Full HD IPS', '0022', 1, 'Acer', '10'),
	(27, 'Monitor Gaming -  EXTREME GAMER, 32 , Full-HD', '0023', 1, 'EXTREME GAMER', '3'),
	(28, 'Impresora multifunción - Brother MFC', '0024', 0, 'Brother', '2'),
	(29, 'Impresora multifunción - Epson EcoTank ET-3850', '0025', 1, 'Epson', '3'),
	(30, 'Altavoz inalámbrico - JBL PartyBox Encore Essential', '0026', 1, 'JBL', '1');

-- Volcando estructura para tabla polo_digital.mobiliario
CREATE TABLE IF NOT EXISTS `mobiliario` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) DEFAULT NULL,
  `tipo` varchar(40) DEFAULT NULL,
  `referencia` varchar(40) DEFAULT NULL,
  `estado` tinytext DEFAULT NULL,
  `salaid` varchar(60) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- Volcando datos para la tabla polo_digital.mobiliario: ~11 rows (aproximadamente)
INSERT INTO `mobiliario` (`id`, `nombre`, `tipo`, `referencia`, `estado`, `salaid`) VALUES
	(1, 'Butaca Gamer cuero negro Ikea', 'sillas', '0212', '0', '1'),
	(2, 'Espejo diseño rectangular 2,00*3,00', 'decoracion', '0205', '1', '2'),
	(4, 'Cuadro fotografía "Polo Digital" 0,80*0,60', 'decoración', '0207', '0', '4'),
	(5, 'Espejo diseño rectangular 2,00*3,00', 'decoracion', '0205', '0', '2'),
	(6, 'Cuadro fotografía por Rafa Vulcano 0,80*0,60', 'decoración', '0206', '1', '3'),
	(7, 'Cuadro fotografía "Polo Digital" 0,80*0,60', 'decoración', '0207', '1', '4'),
	(8, 'Set mesa redonda madera  2M', 'mesas', '0208', '1', '4'),
	(10, 'Set silla estática x4 (diferentes colores)', 'sillas', '0209', '1', '3'),
	(11, 'Estantería Madera 2,00*2,00', 'Almacenaje', '0223', '1', '3'),
	(12, 'Estantería Metal 2,00*3,00', 'Almacenaje', '0224', '1', '3'),
	(15, 'Butaca Gamer cuero negro Ikea', 'sillas', '0212', '1', '1');

-- Volcando estructura para tabla polo_digital.newsletter
CREATE TABLE IF NOT EXISTS `newsletter` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(70) DEFAULT NULL,
  `suscrito` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- Volcando datos para la tabla polo_digital.newsletter: ~13 rows (aproximadamente)
INSERT INTO `newsletter` (`id`, `email`, `suscrito`) VALUES
	(1, 'andresalves@gmail.com', 1),
	(2, 'andres@gmail.com', 1),
	(3, 'albus@gmail.com', 1),
	(4, 'albus@gmail.com', 1),
	(5, 'albus@gmail.com', 1),
	(6, 'albus@gmail.com', 1),
	(7, 'albus@gmail.com', 1),
	(8, 'albus@gmail.com', 1),
	(9, 'albus@gmail.com', 1),
	(10, 'albus@gmail.com', 1),
	(11, 'albus@gmail.com', 1),
	(12, 'gabriel@hotmail.com', 1),
	(13, 'laura@gmail.com', 1);

-- Volcando estructura para tabla polo_digital.salas
CREATE TABLE IF NOT EXISTS `salas` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) DEFAULT NULL,
  `superficie` int(11) DEFAULT NULL,
  `planta` varchar(20) DEFAULT NULL,
  `precio` int(11) DEFAULT NULL,
  `tipo` varchar(50) DEFAULT NULL,
  `clientesid` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- Volcando datos para la tabla polo_digital.salas: ~7 rows (aproximadamente)
INSERT INTO `salas` (`id`, `nombre`, `superficie`, `planta`, `precio`, `tipo`, `clientesid`) VALUES
	(1, 'Aula_1', 60, 'baja', 1000, 'formación', 2),
	(2, 'Comedor', 15, 'baja', 800, 'co-working', 3),
	(3, '42-telefonica', 200, 'primera', 5000, 'aula', 9),
	(4, 'Terraza', 180, 'baja', 4500, 'terraza', 1),
	(5, 'Lab-Audio', 60, 'primera', 2000, 'Laboratorio', 10),
	(6, 'Aula_2', 60, 'baja', 1000, 'formación', 8),
	(7, 'Aula_3', 60, 'baja', 1000, 'formación', 1);

-- Volcando estructura para tabla polo_digital.usuarios
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(50) DEFAULT NULL,
  `password` varchar(30) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=113 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- Volcando datos para la tabla polo_digital.usuarios: ~17 rows (aproximadamente)
INSERT INTO `usuarios` (`id`, `email`, `password`) VALUES
	(1, 'israel@hotmail.com', '1234'),
	(2, 'paquito@hotmail.com', '1234'),
	(3, 'rita@hotmail.com', '1234'),
	(4, 'maricarmen@hotmail.com', '1234'),
	(6, 'carmenpolo@hotmail.com', '1234'),
	(7, 'isolina@gmail.com', '1234'),
	(10, 'roberto@hotmail.com', '1234'),
	(11, 'pilar@hotmail.com', '1234'),
	(12, 'rafa@hotmail.com', '1234'),
	(28, 'albus@hotmail.com', '1234'),
	(78, 'eulalio@gmail.com', '1234'),
	(79, 'alberto@gmail.com', '1234'),
	(80, 'jorge@gmail.com', '1234'),
	(81, 'albus@gmail.com', '1234'),
	(110, 'gabriel@hotmail.com', '1234'),
	(111, 'laura@gmail.com', '1234'),
	(112, 'jairo@hotmail.com', '1234');

-- Volcando estructura para tabla polo_digital.usuarioseventos
CREATE TABLE IF NOT EXISTS `usuarioseventos` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `usuarioid` int(11) DEFAULT NULL,
  `eventosid` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- Volcando datos para la tabla polo_digital.usuarioseventos: ~12 rows (aproximadamente)
INSERT INTO `usuarioseventos` (`id`, `usuarioid`, `eventosid`) VALUES
	(1, 1, 3),
	(2, 2, 4),
	(3, 3, 8),
	(4, 4, 8),
	(6, 6, 9),
	(7, 7, 17),
	(10, 10, 4),
	(11, 11, 18),
	(12, 12, 18),
	(13, 4, 3),
	(14, 6, 17),
	(15, 10, 8);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
