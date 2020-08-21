using bll;
using entity;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using repository;
using System.Collections.Generic;
using System.Linq;
using static empleadosdotnet.Models.EmpresaModel;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace empleadosdotnet.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class EmpresaController : ControllerBase
  {
    private readonly EmpresaService service;
    public EmpresaController(EmpleoContext context)
    {
      service = new EmpresaService(context);
    }
    // GET: api/Empresa
    [HttpGet]
    public IEnumerable<EmpresaViewModel> Get()
    {
      return service.ConsultarEmpresas().Select(e => new EmpresaViewModel(e));
    }

    // GET api/Empresa>/5
    [HttpGet("{nit}")]
    public ActionResult<EmpresaViewModel> Get(string nit)
    {
      try
      {
        var respuesta = service.Consultar(nit);
        if (!respuesta.Error) return new EmpresaViewModel(respuesta.Empresa);
        return NotFound();
      }
      catch (System.Exception)
      {
        return StatusCode(500);
      }
    }

    // POST api/Empresa
    [HttpPost]
    public ActionResult<EmpresaViewModel> Post(EmpresaInputModel empresa)
    {
      try
      {
        var respuesta = service.Guardar(MapearAEmpresa(empresa));
        if (respuesta.Error)
        {
          ModelState.AddModelError("Error en Registro Empresa", respuesta.Mensaje);
          var detallesProblema = new ValidationProblemDetails(ModelState)
          {
            Status = StatusCodes.Status400BadRequest
          };
          return BadRequest(detallesProblema);
        }
        return new EmpresaViewModel(respuesta.Empresa);
      }
      catch (System.Exception)
      {
        return StatusCode(500);
      }
    }
    private Empresa MapearAEmpresa(EmpresaInputModel empresaInput)
    {
      Empresa empresa = new Empresa
      {
        Nit = empresaInput.Nit,
        Contacto = empresaInput.Contacto,
        Direccion = empresaInput.Direccion,
        Email = empresaInput.Email,
        Nombre = empresaInput.Nombre
      };
      return empresa;
    }
    // PUT api/Empresa/5
    [HttpPut("{id}")]
    public void Put(int id, string value)
    {
    }

    // DELETE api/Empresa/5
    [HttpDelete("{id}")]
    public void Delete(int id)
    {
    }
  }
}

