using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using FagronTech.Models;
using Microsoft.AspNetCore.Mvc;

namespace FagronTech.Controllers
{
    public class HomeController : Controller
    {
        ResultadoPartidaLayer objetoPartida = new ResultadoPartidaLayer();

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Error()
        {
            ViewData["RequestId"] = Activity.Current?.Id ?? HttpContext.TraceIdentifier;
            return View();
        }
        
        [HttpGet]
        [Route("partidas")]
        public IEnumerable<ResultadoPartida> RecuperaPartidas()
        {
            return objetoPartida.RecuperaPartidas();
        }

        [HttpPost]
        [Route("partida/adiciona")]
        public int AdicionaPartida([FromBody] ResultadoPartida partida)
        {
            return objetoPartida.AdicionarPartida(partida);
        }
        
        [HttpDelete]
        [Route("partida/{id}/delete")]
        public int DeletarPartida(int id)
        {
            return objetoPartida.DeletaPartida(id);
        }

        [HttpGet]
        [Route("detalhesCarreira")]
        public DetalhesCarreira DetalhesCarreira()
        {
            return objetoPartida.DetalhesCarreira();
        }
    }
}
