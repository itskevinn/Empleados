using Microsoft.EntityFrameworkCore.Migrations;

namespace repository.Migrations
{
    public partial class Migración : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Empleados",
                columns: table => new
                {
                    Id = table.Column<string>(maxLength: 22, nullable: false),
                    PrimerNombre = table.Column<string>(maxLength: 15, nullable: false),
                    SegundoApellido = table.Column<string>(maxLength: 15, nullable: false),
                    SegundoNombre = table.Column<string>(maxLength: 15, nullable: true),
                    PrimerApellido = table.Column<string>(maxLength: 15, nullable: true),
                    Sexo = table.Column<string>(nullable: true),
                    Edad = table.Column<string>(maxLength: 3, nullable: false),
                    Cargo = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Empleados", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Empresas",
                columns: table => new
                {
                    Nit = table.Column<string>(maxLength: 30, nullable: false),
                    Nombre = table.Column<string>(nullable: false),
                    Email = table.Column<string>(nullable: false),
                    Direccion = table.Column<string>(maxLength: 100, nullable: false),
                    Contacto = table.Column<string>(maxLength: 10, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Empresas", x => x.Nit);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Empleados");

            migrationBuilder.DropTable(
                name: "Empresas");
        }
    }
}
