using entity;

namespace empleadosdotnet.Models
{
    public class EmpresaModel
    {
        public class EmpresaInputModel : Empresa
        {

        }
        public class EmpresaViewModel : EmpresaInputModel
        {
            public EmpresaViewModel(Empresa empresa)
            {
                Nit = empresa.Nit;
                Nombre = empresa.Nombre;
                Email = empresa.Email;
                Direccion = empresa.Direccion;
                Contacto = empresa.Contacto;
            }
        }
    }
}
