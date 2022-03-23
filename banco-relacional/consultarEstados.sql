select * from `estados`

select Sigla, nome as 'Nome do estado' from `estados`
where regiao = 'Sul'

select nome, regiao, populacao from `estados`
near where populacao >= 10
order by populacao desc
