using repository;
using entity;
using System.Collections.Generic;
using System.Linq;

namespace bll
{
    public class EmpresaService
    {
        private readonly EmpleoContext _context;
        public EmpresaService(EmpleoContext context)
        {
            _context = context;
        }
        public GuardarEmpresaResponse Guardar(Empresa empresa)
        {
            try
            {
                if (_context.Empresas.Find(empresa.Nit) == null)
                {
                    _context.Empresas.Add(empresa);
                    _context.SaveChanges();
                    return new GuardarEmpresaResponse(empresa);
                }
                return new GuardarEmpresaResponse("Una empresa con este NIT ya ha sido registrada");
            }
            catch (System.Exception e)
            {
                return new GuardarEmpresaResponse(e.Message);
                throw;
            }
        }
        public ConsultarEmpresaResponse Consultar(string nit)
        {
            Empresa empresa = _context.Empresas.Find(nit);
            try
            {
                if (empresa == null)
                {
                    return new ConsultarEmpresaResponse("No hay empresa registrada con este NIT");
                }
                return new ConsultarEmpresaResponse(empresa);
            }
            catch (System.Exception e)
            {
                return new ConsultarEmpresaResponse(e.Message);
                throw;
            }
        }
        public IEnumerable<Empresa> ConsultarEmpresas()
        {
            return _context.Empresas.ToList();
        }
    }
    public class ConsultarEmpresaResponse
    {
        public Empresa Empresa { get; set; }
        public bool Error { get; set; }
        public string Mensaje { get; set; }
        public ConsultarEmpresaResponse(string mensaje)
        {
            Mensaje = mensaje;
            Error = true;
        }
        public ConsultarEmpresaResponse(Empresa empresa)
        {
            Empresa = empresa;
            Error = false;
        }
    }
    public class GuardarEmpresaResponse
    {
        public Empresa Empresa { get; set; }
        public bool Error { get; set; }
        public string Mensaje { get; set; }
        public GuardarEmpresaResponse(Empresa empresa)
        {
            Error = false;
            Empresa = empresa;
        }
        public GuardarEmpresaResponse(string mensaje)
        {
            Mensaje = mensaje;
            Error = true;
        }
    }
}
