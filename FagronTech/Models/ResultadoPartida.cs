using System;
using System.Collections.Generic;

namespace FagronTech.Models
{
    public partial class ResultadoPartida
    {
        public int Id { get; set; }
        public DateTime? DataPartida { get; set; }
        public int? QuantidadePontos { get; set; }
    }
}
