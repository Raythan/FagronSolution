using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FagronTech.Models
{
    public class ResultadoPartidaLayer
    {
        FagronDatabaseContext db = new FagronDatabaseContext();
 
        public int AdicionarPartida(ResultadoPartida partida)
        {
            try
            {
                db.ResultadoPartida.Add(partida);
                db.SaveChanges();
                return 1;
            }
            catch(Exception ex)
            {
                throw;
            }
        }
        
        public int AtualizaPartida(ResultadoPartida partida)
        {
            try
            {
                db.Entry(partida).State = EntityState.Modified;
                db.SaveChanges();

                return 1;
            }
            catch
            {
                throw;
            }
        }

        public int DeletaPartida(int id)
        {
            try
            {
                ResultadoPartida emp = db.ResultadoPartida.Find(id);
                db.ResultadoPartida.Remove(emp);
                db.SaveChanges();
                return 1;
            }
            catch (Exception ex)
            {
                throw;
            }
        }
        
        public List<ResultadoPartida> RecuperaPartidas()
        {
            List<ResultadoPartida> partidas = new List<ResultadoPartida>();
            partidas = (from partida in db.ResultadoPartida select partida).ToList();

            return partidas;
        }

        public DetalhesCarreira DetalhesCarreira()
        {
            DetalhesCarreira retorno = new DetalhesCarreira();

            List<ResultadoPartida> partidas = new List<ResultadoPartida>();
            partidas = (from partida in db.ResultadoPartida select partida).ToList();

            retorno.dataFinal = partidas.Max(x => x.DataPartida);
            retorno.dataInicial = partidas.Min(x => x.DataPartida);
            retorno.jogosDisputados = partidas.Count;
            retorno.maiorPontuacaoJogos = partidas.Max(x => x.QuantidadePontos);
            retorno.menorPontuacaoJogos = partidas.Min(x => x.QuantidadePontos);
            retorno.mediaPontosJogos = Convert.ToDecimal(partidas.Average(x => x.QuantidadePontos));
            retorno.totalPontosTemporada = partidas.Sum(x => x.QuantidadePontos);
            retorno.quantidadeVezesRecorde = 0;

            partidas = partidas.OrderBy(x => x.Id).ToList();

            int? novoRecorde = 0;

            foreach(ResultadoPartida partida in partidas)
            {
                if(novoRecorde < partida.QuantidadePontos)
                {
                    if (novoRecorde > 0)
                        retorno.quantidadeVezesRecorde += 1;
                    novoRecorde = partida.QuantidadePontos;
                }
            }

            return retorno;
        }
    }
}
