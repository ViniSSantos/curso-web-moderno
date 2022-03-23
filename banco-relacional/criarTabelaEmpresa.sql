CREATE TABLE IF NOT EXISTS empresas (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    cnpj int unsigned,
    PRIMARY KEY (id),
    UNIQUE KEY (cnpj)
);

--cidades_empresas
CREATE TABLE IF NOT EXISTS empresas_unidades (
    empresa_id INT UNSIGNED NOT NULL,
    cidade_id INT UNSIGNED NOT NULL,
    sede TINYINT(1) NOT NULL,
    PRIMARY KEY (empresa_id, cidade_id)
DESC empresas
desc prefeitos;
select * from empresas;
select * from cidades;

INSERT INTO empresas_unidades
    (empresa_id, cidade_id, sede)
VALUES
    (1, 1, 1),
    (1, 2, 0),
    (2, 1, 0),
    (2, 2, 1);