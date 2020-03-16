using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FagronTech.Models
{
    public class DetalhesCarreira
    {
        public DateTime? dataInicial { get; set; }
        public DateTime? dataFinal { get; set; }
        public int? jogosDisputados { get; set; }
        public int? totalPontosTemporada { get; set; }
        public decimal? mediaPontosJogos { get; set; }
        public int? maiorPontuacaoJogos { get; set; }
        public int? menorPontuacaoJogos { get; set; }
        public int? quantidadeVezesRecorde { get; set; }
    }
}
