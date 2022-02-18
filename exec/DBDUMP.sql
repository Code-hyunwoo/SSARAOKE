use ssaraoke;
INSERT INTO `ssaraoke`.`tb_user` (`user_seq`, `email`, `nickname`, `o_auth_seq`, `o_auth_type`) VALUES ('1', 'test@test.com', 'test', '2111111111', 'KAKAO');
insert into tb_room(is_private, owner_nickname, owner_seq, password, thumbnail_url, room_title, date_closed, date_expired, is_active, mode) 
values (0, "test", 9, null, null, "test room 1", null, null, null, "Basic");
insert into tb_room(is_private, owner_nickname, owner_seq, password, thumbnail_url, room_title, date_closed, date_expired, is_active, mode) 
values (0, "test", 9, null, null, "test room 2", null, null, null, "Solo");