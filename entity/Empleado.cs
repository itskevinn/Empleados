using System.ComponentModel.DataAnnotations;

namespace entity
{
    public class Empleado
    {
        [MaxLength(15, ErrorMessage = "Ingrese solo un nombre")]
        [Required(ErrorMessage = "Proporcione el nombre del empleado")]
        public string PrimerNombre { get; set; }
        [MaxLength(15, ErrorMessage = "Ingrese solo un apellido")]
        [Required(ErrorMessage = "Proporcione el apellido del empleado")]
        public string SegundoApellido { get; set; }
        [MaxLength(15, ErrorMessage = "Ingrese solo un nombre")]
        public string SegundoNombre { get; set; }
        [MaxLength(15, ErrorMessage = "Ingrese solo un apellido")]
        public string PrimerApellido { get; set; }
        [SexoValidacion(ErrorMessage = "El sexo solo puede ser Masculino o Femenino")]
        public string Sexo { get; set; }
        [MaxLength(3, ErrorMessage = "Ingrese una edad válida")]
        [Required(ErrorMessage = "Proporcione la edad del empleado")]
        [EdadValidacion(ErrorMessage = "Esta persona no cumple con la edad requerida para trabajar")]
        public string Edad { get; set; }
        [Key]
        [MaxLength(22, ErrorMessage = "Número de identificación no válido")]
        public string Id { get; set; }
        [Required(ErrorMessage = "Proporcione el cargo del empleado")]
        public string Cargo { get; set; }
    }
    public class EdadValidacion : ValidationAttribute
    {
        protected override ValidationResult IsValid(object valor, ValidationContext validationContext)
        {
            try
            {
                if ((int)valor >= 18)
                {
                    return ValidationResult.Success;
                }
                return new ValidationResult(ErrorMessage);
            }
            catch (System.Exception e)
            {
                return new ValidationResult(ErrorMessage = "Ingrese una edad válida" + e.Message);
            }
        }
    }
    public class SexoValidacion : ValidationAttribute
    {
        protected override ValidationResult IsValid(object valor, ValidationContext validationContext)
        {
            try
            {
                if (valor.ToString().ToLower().Equals("masculino") || valor.ToString().ToLower().Equals("femenino"))
                {
                    return ValidationResult.Success;
                }
                return new ValidationResult(ErrorMessage);
            }
            catch (System.Exception e)
            {
                return new ValidationResult(ErrorMessage = "Ingrese un sexo válido" + e.Message);
            }
        }
    }
}