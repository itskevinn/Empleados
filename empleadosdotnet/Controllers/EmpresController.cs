using bll;
using entity;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using repository;
using System.Collections.Generic;
using System.Linq;
using static empleadosdotnet.Models.EmpresaModel;

namespace empleadosdotnet.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmpresController : ControllerBase
    {
        private readonly EmpresaService service;
        public EmpresController(EmpleoContext context)
        {
            service = new EmpresaService(context);
        }
        // GET: api/Empresa/5
        [HttpGet("{nit}")]
        ActionResult<EmpresaViewModel> Get(string nit)
        {
            var empresa = service.Consultar(nit).Empresa;
            if (empresa == null) return NotFound();
            return new EmpresaViewModel(empresa);
        }
        // POST: api/Empresa
        [HttpPost]
        ActionResult<EmpresaViewModel> Post(EmpresaInputModel empresaInput)
        {
            Empresa empresa = MapToEmpresa(empresaInput);
            var respuesta = service.Guardar(empresa);
            if (respuesta.Error)
            {
                ModelState.AddModelError("Error al registrar a la empresa: ", respuesta.Mensaje);
                var detallesProblema = new ValidationProblemDetails
                {
                    Status = StatusCodes.Status400BadRequest
                };
                return BadRequest(detallesProblema);
            }
            return Ok(respuesta.Empresa);
        }
        //GET: api/Empresa
        IEnumerable<EmpresaViewModel> Gets()
        {
            var empresas = service.ConsultarEmpresas().Select(e => new EmpresaViewModel(e));
            return empresas;
        }
        private Empresa MapToEmpresa(EmpresaInputModel empresaInput)
        {
            var empresa = new Empresa
            {
                Contacto = empresaInput.Contacto,
                Direccion = empresaInput.Direccion,
                Email = empresaInput.Email,
                Nit = empresaInput.Nit,
                Nombre = empresaInput.Nombre
            };
            return empresa;
        }
    }
}

