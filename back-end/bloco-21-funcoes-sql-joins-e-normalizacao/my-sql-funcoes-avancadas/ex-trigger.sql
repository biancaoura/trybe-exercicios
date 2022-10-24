-- 1.
USE betrybe_automoveis;
DELIMITER $$

CREATE TRIGGER update_stock
	BEFORE INSERT ON carros
    FOR EACH ROW
BEGIN
	SET NEW.data_atualizacao = NOW(),
		NEW.acao = 'INSERT',
		NEW.disponivel_em_estoque = 1;
END $$

DELIMITER ;

-- 2.
USE betrybe_automoveis;
DELIMITER $$

CREATE TRIGGER update_date
	BEFORE UPDATE ON carros
    FOR EACH ROW
BEGIN
	SET NEW.data_atualizacao = NOW(),
		NEW.acao = 'ATUALIZACAO';
END $$

DELIMITER ;

-- 3.
USE betrybe_automoveis;
DELIMITER $$

CREATE TRIGGER update_delete
	AFTER DELETE ON carros
	FOR EACH ROW
BEGIN
	INSERT INTO log_operacoes(tipo_operacao, data_ocorrido)
    VALUES ('EXCLUSAO', NOW());
END $$

DELIMITER ;


SHOW TRIGGERS IN betrybe_automoveis;