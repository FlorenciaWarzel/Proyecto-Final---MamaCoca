-- phpMyAdmin SQL Dump
-- version 3.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 22-11-2021 a las 17:01:06
-- Versión del servidor: 5.5.24-log
-- Versión de PHP: 5.4.3

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `usuario`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE IF NOT EXISTS `productos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `producto` varchar(250) NOT NULL,
  `img_id` varchar(500) DEFAULT NULL,
  `descripcion` text NOT NULL,
  `ingredientes` varchar(500) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=8 ;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `producto`, `img_id`, `descripcion`, `ingredientes`) VALUES
(1, 'Matcha Menta y Limón', 'i54evbprmhdmlkfeet8u', 'Matcha es una variedad de té verde en polvo de la milenaria ceremonia japonesa del té.\r\nInfusión que amalgama el atractivo del sabor del té verde con matcha junto con la frescura de las hojas de menta con cascaritas de limón.\r\nNo contiene colorantes ni conservantes', 'Hojas de té verde, té verde en polvo (matcha), hojas de menta, sabor limón y cáscara de limón.'),
(2, 'AdelgaFruta', 'qyuzyirjumngyyjnv1dh', 'Infusión sabor Frutos del Bosque. Diurético. No contiene colorantes ni conservantes.', 'Hibisco, manzanilla, zarzaparrilla, té verde, sabor cereza, cedrón, sabor uva, rosa mosqueta, sabor durazno, cúrcuma, fibra soluble, jengibre.'),
(3, 'Pasta Multicereal con Kale', 'kvotbzmlznrvlwzmjgw4', 'Pastas secas a base de harina de arroz, maíz y Kale, libre de gluten. Sin T.A.C.C.\r\nApto Vegano. Sin aditivos. 0% Grasas Trans.', 'Harina de Arroz, Harina de Maíz (No GMO), Harina de Kale.'),
(4, 'Mermelada sabor Frutilla', 'qdtfsev9edfypwzo4j3l', 'Mermelada Cuarto Creciente sabor Frutilla. Sin T.A.C.C.', 'Futillas, azúcar, agua, GEL INS 440 (pectina), COL INS 129 (Rojo Allura), EST INS 509 (Cloruro de Calcio), ESP INS 415 (Goma Xántica), INS 410 (Goma Garrofin), ACI INS 330 (Ácido Cítrico), ANESP INS 900a (Dimetilsilicona), CONS INS 211 (Benzoato de sodio), INS 202 (Sorbato de potasio), EDU INS 950 (Acelsufame K), ARO frutilla. PUEDE CONTENER SULFITOS.'),
(5, 'Santa María Scons', 'amlxtm0snlhjd5ib8ock', 'Galletas tipo Scons Gluten Free. Sin Lactosa. Sin Conservantes.', 'Aceite vegetal, harina de arroz, almidón de maíz, azúcar, fécula de mandioca, huevo, miel, agentes leudantes (bicarbonato de sodio, bicarbonato de amonio, fosfato monocálcico), estabilizantes (goma xántica, goma guar), emulsionantes (estearoil-lactilato de sodio, lecitina de soja), colorante (tartrazina), saborizantes (esencia de vainilla, esencia de chocolate, esencia de manteca, esencia de limón). Contiene: huevo, soja.'),
(6, 'Santa María Vainilla', 'jjol5cudv1nptjsgre7h', 'Galletas sabor vainilla, gluten free. Sin lactosa. Sin conservantes.', 'Amidón de maíz, harina de arroz, azúcar, aceite vegetal, huevo, sal, agentes leudantes (bicarbonato de sodio, bicarbonato de amonio, fosfato monocálcico), estabilizantes (goma guar, goma xántica), colorante (tartrazina), emulsionante (lecitina de soja), saborizantes (esencia de vainilla, esencia de limón). Contiene: huevo, soja.'),
(7, 'Sol de Avena', 'de0n4stdtbjxouo3sgit', 'Galletitas dulces a base de harina integral, con harina de algarroba y harina de chía.', 'Harina integral de avena,  harina integral de trigo, miel, agua, oleomargarina, harina de algarroba, harina parcialmente desgrasada de chía, RAI (INS 503ii)');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
