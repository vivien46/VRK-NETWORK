using Microsoft.EntityFrameworkCore;
using Server.Models;

namespace Server.Database
{
    public class DataContext : DbContext
    {
        #region entities
        public DbSet<User> Users { get; set; }
        public DbSet<Group> Groups { get; set; }
        public DbSet<Conversation> Conversations { get; set; }
        public DbSet<Discution> Discution { get; set; }
        public DbSet<Message> Messages { get; set; }
        public DbSet<Notification> Notifications { get; set; }
        public DbSet<Reaction> Reactions { get; set; }
        public DbSet<UserGroup> UsersGroups { get; set; }
        #endregion

        #region constructor
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
            InitializeDatabase();
        }
        #endregion

        #region methods
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Group>()
                .HasOne<User>(g => g.User)
                .WithMany()
                .HasForeignKey(g => g.IdUser);

            modelBuilder.Entity<UserGroup>()
                .HasKey(ug => new { ug.IdUser, ug.IdGroup });

            modelBuilder.Entity<UserGroup>()
                .HasOne(ug => ug.User)
                .WithMany(u => u.UsersGroups)
                .HasForeignKey(ug => ug.IdUser);

            modelBuilder.Entity<UserGroup>()
                .HasOne(ug => ug.Group)
                .WithMany(g => g.UsersGroups)
                .HasForeignKey(ug => ug.IdGroup);
        }

        private void InitializeDatabase()
        {
            try
            {
                if (Database.GetPendingMigrations().Any())
                {
                    Database.Migrate();
                }
                else
                {
                    Console.WriteLine("If the database model is not created yet, generate a migration using 'dotnet ef migrations add Creation'.");
                    Console.WriteLine("If the database model has changed, generate a migration using 'dotnet ef migrations add Migration_X'.");
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine($"An error occurred while initializing database: {ex.Message}");
            }
        }
        #endregion
    }
}
