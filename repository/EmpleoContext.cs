using Microsoft.EntityFrameworkCore;
using System;
using entity;

namespace repository
{
  public class EmpleoContext : DbContext
  {
    public EmpleoContext(DbContextOptions options) : base(options)
    {

    }
    public DbSet<Empresa> Empresas { get; set; }
    public DbSet<Empleado> Empleados { get; set; }
  }
}
