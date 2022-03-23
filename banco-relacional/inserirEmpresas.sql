ALTER TABLE empresas MODIFY cnpj VARCHAR(14);

INSERT INTO empresas
    (nome, cnpj)
VALUES
    ('Bradesco', 34458876543850),
    ('vale', 88665544347623),
    ('Cielo', 97643365988732);