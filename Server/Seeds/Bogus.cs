using Bogus;
using Microsoft.EntityFrameworkCore;
using Server.Database;
using Server.Models;

public class BogusClass
    {
        public void InsertFakeData()
        {
            // Créez une nouvelle instance de ConfigurationBuilder pour lire la chaîne de connexion
            var config = new ConfigurationBuilder()
                .AddJsonFile("appsettings.json", optional: false)
                .Build();

            // Créez une nouvelle instance de DbContextOptionsBuilder et configurez-le pour utiliser Npgsql
            var optionsBuilder = new DbContextOptionsBuilder<DataContext>();
            optionsBuilder.UseNpgsql(config.GetConnectionString("DefaultConnection"));

            // Créez une nouvelle instance de votre DbContext avec les options que vous venez de configurer
            using (var dbContext = new DataContext(optionsBuilder.Options))
            {
                // Créez un générateur de données factices
                var faker = new Faker<User>()
                    //.RuleFor(u => u.Id, (f, u) => f.Random.Guid())
                    .RuleFor(u => u.CreatedOn, f => f.Date.Past())
                    //.RuleFor(u => u.UpdatedOn, f => f.Date.Recent())
                    .RuleFor(u => u.DeletedOn, f => f.Date.Future())
                    .RuleFor(u => u.Username, f => f.Internet.UserName())
                    .RuleFor(u => u.Password, f => f.Internet.Password())
                    .RuleFor(u => u.Email, f => f.Internet.Email())
                    .RuleFor(u => u.Role, f => f.PickRandom<User.UserRole>())
                    .RuleFor(u => u.Avatar, f => f.Internet.Avatar())
                    .RuleFor(u => u.LastLoginDate, f => f.Date.Past())
                    .RuleFor(u => u.Status, f => f.PickRandom<User.UserStatus>());

            // Générez des données factices
            var fakeData = faker.Generate(50); // Génère 50 entités factices

                // Ajoutez les données factices à votre DbContext
                dbContext.Users.AddRange(fakeData);

                // Sauvegardez les modifications dans la base de données
                dbContext.SaveChanges();
            }
        }
    }


