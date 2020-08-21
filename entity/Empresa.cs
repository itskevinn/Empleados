using System.ComponentModel.DataAnnotations;

namespace entity
{
    public class Empresa
    {
        [Key]
        [MaxLength(30, ErrorMessage = "Número NIT inválido")]
        public string Nit { get; set; }
        [Required(ErrorMessage = "El nombre de la empresa es necesario")]
        public string Nombre { get; set; }
        [EmailAddress(ErrorMessage = "Ingrese un correo válido")]
        [Required(ErrorMessage = "El correo de la empresa es necesario")]
        public string Email { get; set; }
        [Required(ErrorMessage = "La dirección de la empresa es necesario")]
        [MaxLength(100, ErrorMessage = "La dirección es demasiado larga, por favor, simplifíquela")]
        public string Direccion { get; set; }
        [Required(ErrorMessage = "Proporcione un número de contacto")]
        [MaxLength(10, ErrorMessage = "Número inválido")]
        public string Contacto { get; set; }
    }
}
