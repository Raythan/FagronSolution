using System;
using System.ComponentModel.DataAnnotations;

namespace FagronTech.Models
{
    public class ResultadoPartida
    {
        public int ID { get; set; }
        [DataType(DataType.Date)]
        public DateTime DataPartida { get; set; }
        public int QuantidadePontos { get; set; }
    }
}
