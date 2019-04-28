-- --------------------------------------------------------
-- 服务器版本:                      5.7.24 - MySQL Community Server (GPL)
-- 服务器操作系统:                   Linux
-- HeidiSQL 版本:                  9.5.0.5196
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- 导出 gotauth 的数据库结构
CREATE DATABASE IF NOT EXISTS `gotauth` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `gotauth`;

-- 导出  表 gotauth.app 结构
CREATE TABLE IF NOT EXISTS `app` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `code` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `code` (`code`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

-- 正在导出表  gotauth.app 的数据：~3 rows (大约)
DELETE FROM `app`;
/*!40000 ALTER TABLE `app` DISABLE KEYS */;
INSERT INTO `app` (`id`, `code`, `name`, `create_time`, `update_time`) VALUES
	(1, 'SystemA', 'The System Alpha', '2018-11-17 08:39:57', '2018-12-09 11:15:57'),
	(2, 'SystemB', 'The System Bravo', '2018-12-08 10:41:45', '2018-12-09 11:24:29'),
	(3, 'SystemC', 'The System Charlie', '2018-12-10 14:35:14', '2018-12-10 14:35:15');
/*!40000 ALTER TABLE `app` ENABLE KEYS */;

-- 导出  表 gotauth.group 结构
CREATE TABLE IF NOT EXISTS `group` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `app_id` int(11) DEFAULT NULL,
  `code` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `app_id_code` (`app_id`,`code`),
  CONSTRAINT `group_ibfk_1` FOREIGN KEY (`app_id`) REFERENCES `app` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- 正在导出表  gotauth.group 的数据：~1 rows (大约)
DELETE FROM `group`;
/*!40000 ALTER TABLE `group` DISABLE KEYS */;
INSERT INTO `group` (`id`, `app_id`, `code`, `name`, `create_time`, `update_time`) VALUES
	(1, 1, 'BOOK_SUPER_GROUP', 'Book Super Group', '2018-12-08 11:23:23', '2018-12-08 11:23:26');
/*!40000 ALTER TABLE `group` ENABLE KEYS */;

-- 导出  表 gotauth.group_role 结构
CREATE TABLE IF NOT EXISTS `group_role` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `group_id` int(11) DEFAULT NULL,
  `role_id` int(11) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `group_role_role_id_group_id_unique` (`group_id`,`role_id`),
  KEY `role_id` (`role_id`),
  CONSTRAINT `group_role_ibfk_1` FOREIGN KEY (`group_id`) REFERENCES `group` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `group_role_ibfk_2` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

-- 正在导出表  gotauth.group_role 的数据：~2 rows (大约)
DELETE FROM `group_role`;
/*!40000 ALTER TABLE `group_role` DISABLE KEYS */;
INSERT INTO `group_role` (`id`, `group_id`, `role_id`, `create_time`, `update_time`) VALUES
	(1, 1, 1, '2018-12-08 11:24:01', '2018-12-08 11:24:02'),
	(2, 1, 2, '2018-12-08 11:26:53', '2018-12-08 11:26:54');
/*!40000 ALTER TABLE `group_role` ENABLE KEYS */;

-- 导出  表 gotauth.resource 结构
CREATE TABLE IF NOT EXISTS `resource` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `app_id` int(11) DEFAULT NULL,
  `code` varchar(255) DEFAULT NULL,
  `resource_type_id` int(11) DEFAULT NULL,
  `detail` varchar(255) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `app_id_code` (`app_id`,`code`),
  KEY `resource_type_id` (`resource_type_id`),
  CONSTRAINT `resource_ibfk_1` FOREIGN KEY (`app_id`) REFERENCES `app` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `resource_ibfk_2` FOREIGN KEY (`resource_type_id`) REFERENCES `resource_type` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

-- 正在导出表  gotauth.resource 的数据：~4 rows (大约)
DELETE FROM `resource`;
/*!40000 ALTER TABLE `resource` DISABLE KEYS */;
INSERT INTO `resource` (`id`, `app_id`, `code`, `resource_type_id`, `detail`, `create_time`, `update_time`) VALUES
	(1, 1, '/book', 1, 'Book List', '2018-12-08 11:05:21', '2018-12-08 11:05:22'),
	(2, 1, 'BOOK_SAVE_BTN', 2, 'Save Book', '2018-12-08 11:05:49', '2018-12-08 11:05:51'),
	(3, 1, '/chapter', 1, 'Chapter List', '2018-12-08 11:25:45', '2018-12-08 11:25:47'),
	(4, 1, 'CHAPTER_SAVE_BTN', 2, 'Save Chapter', '2018-12-08 11:26:12', '2018-12-08 11:26:14');
/*!40000 ALTER TABLE `resource` ENABLE KEYS */;

-- 导出  表 gotauth.resource_type 结构
CREATE TABLE IF NOT EXISTS `resource_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `code` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

-- 正在导出表  gotauth.resource_type 的数据：~2 rows (大约)
DELETE FROM `resource_type`;
/*!40000 ALTER TABLE `resource_type` DISABLE KEYS */;
INSERT INTO `resource_type` (`id`, `code`, `name`, `create_time`, `update_time`) VALUES
	(1, 'URI', 'HTTP URI', '2018-12-08 11:03:40', '2018-12-08 11:03:56'),
	(2, 'BUTTON', 'PAGE BUTTON', '2018-12-08 11:05:16', '2018-12-08 11:05:23');
/*!40000 ALTER TABLE `resource_type` ENABLE KEYS */;

-- 导出  表 gotauth.role 结构
CREATE TABLE IF NOT EXISTS `role` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `app_id` int(11) DEFAULT NULL,
  `code` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `app_id_code` (`app_id`,`code`),
  CONSTRAINT `role_ibfk_1` FOREIGN KEY (`app_id`) REFERENCES `app` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

-- 正在导出表  gotauth.role 的数据：~2 rows (大约)
DELETE FROM `role`;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
INSERT INTO `role` (`id`, `app_id`, `code`, `name`, `create_time`, `update_time`) VALUES
	(1, 1, 'BOOK_ADMIN', 'Book Admin', '2018-12-08 11:19:53', '2018-12-08 11:20:01'),
	(2, 1, 'CHAPTER_ADMIN', 'Chapter Admin', '2018-12-08 11:26:38', '2018-12-08 11:26:39');
/*!40000 ALTER TABLE `role` ENABLE KEYS */;

-- 导出  表 gotauth.role_resource 结构
CREATE TABLE IF NOT EXISTS `role_resource` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `role_id` int(11) DEFAULT NULL,
  `resource_id` int(11) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `role_resource_role_id_resource_id_unique` (`role_id`,`resource_id`),
  KEY `resource_id` (`resource_id`),
  CONSTRAINT `role_resource_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `role_resource_ibfk_2` FOREIGN KEY (`resource_id`) REFERENCES `resource` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

-- 正在导出表  gotauth.role_resource 的数据：~4 rows (大约)
DELETE FROM `role_resource`;
/*!40000 ALTER TABLE `role_resource` DISABLE KEYS */;
INSERT INTO `role_resource` (`id`, `role_id`, `resource_id`, `create_time`, `update_time`) VALUES
	(1, 1, 1, '2018-12-08 11:20:22', '2018-12-08 11:20:24'),
	(2, 1, 2, '2018-12-08 11:20:30', '2018-12-08 11:20:32'),
	(5, 2, 3, '2018-12-08 11:27:28', '2018-12-08 11:27:29'),
	(6, 2, 4, '2018-12-08 11:27:36', '2018-12-08 11:27:37');
/*!40000 ALTER TABLE `role_resource` ENABLE KEYS */;

-- 导出  表 gotauth.user 结构
CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- 正在导出表  gotauth.user 的数据：~1 rows (大约)
DELETE FROM `user`;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` (`id`, `email`, `name`, `create_time`, `update_time`) VALUES
	(1, 'felixpy.1993@gmail.com', 'Felix Yang', '2018-12-08 11:24:42', '2018-12-08 11:24:44');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;

-- 导出  表 gotauth.user_admin 结构
CREATE TABLE IF NOT EXISTS `user_admin` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_id` (`user_id`),
  CONSTRAINT `user_admin_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- 正在导出表  gotauth.user_admin 的数据：~0 rows (大约)
DELETE FROM `user_admin`;
/*!40000 ALTER TABLE `user_admin` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_admin` ENABLE KEYS */;

-- 导出  表 gotauth.user_group 结构
CREATE TABLE IF NOT EXISTS `user_group` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `group_id` int(11) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_group_user_id_group_id_unique` (`user_id`,`group_id`),
  KEY `group_id` (`group_id`),
  CONSTRAINT `user_group_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `user_group_ibfk_2` FOREIGN KEY (`group_id`) REFERENCES `group` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- 正在导出表  gotauth.user_group 的数据：~1 rows (大约)
DELETE FROM `user_group`;
/*!40000 ALTER TABLE `user_group` DISABLE KEYS */;
INSERT INTO `user_group` (`id`, `user_id`, `group_id`, `create_time`, `update_time`) VALUES
	(1, 1, 1, '2018-12-08 11:25:07', '2018-12-08 11:25:08');
/*!40000 ALTER TABLE `user_group` ENABLE KEYS */;

-- 导出  表 gotauth.user_role 结构
CREATE TABLE IF NOT EXISTS `user_role` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `role_id` int(11) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_role_user_id_role_id_unique` (`user_id`,`role_id`),
  KEY `role_id` (`role_id`),
  CONSTRAINT `user_role_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `user_role_ibfk_2` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

-- 正在导出表  gotauth.user_role 的数据：~2 rows (大约)
DELETE FROM `user_role`;
/*!40000 ALTER TABLE `user_role` DISABLE KEYS */;
INSERT INTO `user_role` (`id`, `user_id`, `role_id`, `create_time`, `update_time`) VALUES
	(1, 1, 1, '2018-12-10 22:58:26', '2018-12-10 22:58:28'),
	(2, 1, 2, '2018-12-10 22:58:42', '2018-12-10 22:58:43');
/*!40000 ALTER TABLE `user_role` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
